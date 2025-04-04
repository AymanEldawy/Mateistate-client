import numberToText from "number-to-text";
import "number-to-text/converters/en-us";
import getFormByTableName from "Helpers/Forms/forms";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useRefTable from "Hooks/useRefTables";
import { useQuery } from "@tanstack/react-query";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import {
  CurrencyFieldGroup,
  Input,
  Select,
  Textarea,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import TableFields from "Components/TableComponents/TableFields";
import BillConnectWithField from "Components/StructurePage/CustomFields/BillConnectWithField";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import { generateEntryFromBill } from "Helpers/Lib/vouchers-insert";
import { CREATED_FROM_BILL, CREATED_FROM_BILL_CODE } from "Helpers/GENERATE_STARTING_DATA";
import { ViewEntry } from "Components/Global/ViewEntry";
import useCurd from "Hooks/useCurd";
import { useTranslation } from "react-i18next";
import { UNIQUE_REF_TABLES } from "Helpers/constants";
import {
  getBillLastNumber,
  getRequestedMaterialsByServiceId,
} from "Helpers/Lib/global-read";
import { toast } from "react-toastify";
import FormLayout from "../FormWrapperLayout/FormLayout";
import useFormPagination from "Hooks/useFormPagination";
import Btn from "Components/Global/Btn";
import { ContextMenu, MenuItem } from "react-contextmenu";
import MaterialForm from "../MaterialForm/MaterialForm";
// import { numberToText } from "Helpers/functions";

const BillForm = ({
  tableName,
  patternCode,
  popupView,
  oldValues,
  number,
  onClose,
}) => {
  const params = useParams();
  const name = "bill";
  const { t } = useTranslation();
  const { getOneBy, remove } = useCurd();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  const code = params?.code || patternCode;
  const [activeTab, setActiveTab] = useState(1);
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});
  const [openMaterialForm, setOpenMaterialForm] = useState(false);
  const methods = useForm({
    defaultValues: {
      bill: {
        issue_date: new Date(),
        bill_date: new Date(),
      },
    },
  });
  let {
    watch,
    setValue,
    reset,
    formState: { errors, isDirty },
    clearErrors,
  } = methods;
  const formPagination = useFormPagination({ name, number: params?.number, code: params?.code, reset });
  const id = formPagination?.currentId;

  useQuery({
    queryKey: ["auto-increment", code],
    queryFn: async () => {
      const number = await getBillLastNumber(code);
      setValue("bill.number", number + 1);
      mergePatternWithBillData(PATTERN_SETTINGS, watch, setValue);
    },
    enabled: !id,
  });

  const { isLoading: LoadingPattern } = useQuery({
    queryKey: ["bill_pattern", code],
    queryFn: async () => {
      const response = await getOneBy("bill_pattern", code, "code");
      let pattern = response?.result?.at(0);
      setPATTERN_SETTINGS(pattern);
      if (!id) {
        await mergePatternWithBillData(pattern, watch, setValue);
      }
      return pattern;
    },
  });

  const { isLoading } = useQuery({
    queryKey: ["bill", id, code],
    queryFn: async () => {
      if (!id) return;
      const response = await getOneBy("bill", id);
      const bill_material_details = await getOneBy(
        "bill_material_details",
        id,
        "bill_id"
      );
      const bill_discounts_details = await getOneBy(
        "bill_discounts_details",
        id,
        "bill_id"
      );

      reset({
        bill: response?.result?.at(0),
        bill_material_details: bill_material_details?.result,
        bill_discounts_details: bill_discounts_details?.result,
      });
    },
    // enabled: !id,
  });

  let fields = useMemo(() => {
    let hash = {};
    for (const field of getFormByTableName("bill")) {
      hash[field?.name] = field;
    }
    return hash;
  }, [PATTERN_SETTINGS]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!type) return;
      let tab = name.split(".");
      if (name === "bill.total") {
        setValue(
          "bill.bill_total_text",
          numberToText.convertToText(+watch(name))
        );
      }
      if (name === "bill.payment_method") {
        if (watch(name) === 2) {
          setValue(
            "bill.customer_account_id",
            PATTERN_SETTINGS.cash_account_id
          );

        } else {
          setValue(
            "bill.customer_account_id",
            null
          );

        }

      }
      if (name === "bill.connect_with_id") {
        getMaterials(watch(name));
      }

      if (name === "bill.customer_id") {
        // should update get account id when select customer
        // setValue("bill.customer_account_id", customer_account_id);
        clearErrors("bill.customer_account_id");
        setRefresh((p) => !p);
      }

      if (tab?.includes("bill_material_details")) {
        calculateMaterialsTotal();
        if (name?.indexOf("material_id") !== -1) {
          // set unit
          getMaterialUnit(watch(name), name);
        }
        // if()
      }

      if (tab?.includes("bill_discounts_details")) {
        calculateVatAndDiscounts();
      }
      if (name === "bill.taxable") {
        calculateTotal();
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const getMaterialUnit = async (materialId, name) => {
    const response = await getOneBy("material", materialId, "id");
    const material = response?.result?.at(0);
    for (let index = 1; index < 4; index++) {
      if (material?.[`defaults${index}`])
        setValue(
          name?.replace(/material_id/i, "unit"),
          material?.[`unit${index}`]
        );
    }
  };

  const calculateMaterialsTotal = () => {
    const bill_material_details = watch("bill_material_details");
    let taxable = 0;
    let vat_amount = 0;
    let total = 0;
    let quantities = 0;
    for (let i = 0; i < bill_material_details?.length; i++) {
      let quantity = bill_material_details?.[i].quantity || 0;
      let percentage = bill_material_details?.[i].vat_percentage || 0;
      let unit_price = bill_material_details?.[i].unit_price || 0;
      let currentTotal = quantity * unit_price;

      taxable += +bill_material_details?.[i].vat_percentage;
      total += currentTotal || 0;
      quantities += +quantity || 0;

      let amount = percentage ? (currentTotal * percentage) / 100 : 0;

      setValue(`bill_material_details.${i}.total_price`, currentTotal);
      setValue(`bill_material_details.${i}.net`, currentTotal + amount);
      setValue(`bill_material_details.${i}.vat_amount`, amount);
      vat_amount += amount;
    }
    setValue("bill.total_quantities", parseInt(quantities));
    setValue("bill.subtotal", total);
    setValue("bill.taxable", taxable);
    setValue("bill.vat_amount", vat_amount);
    calculateTotal();
  };

  const calculateVatAndDiscounts = () => {
    const bill_discounts_details = watch("bill_discounts_details");
    let discounts = 0;
    let extras = 0;
    for (let i = 0; i < bill_discounts_details?.length; i++) {
      discounts += +bill_discounts_details?.[i]?.discount || 0;
      if (
        +bill_discounts_details?.[i]?.discount &&
        !bill_discounts_details?.[i]?.account_id &&
        PATTERN_SETTINGS?.discount_account_id
      ) {
        setValue(
          `bill_discounts_details.${i}.account_id`,
          PATTERN_SETTINGS?.discount_account_id
        );
      }
      if (
        +bill_discounts_details?.[i]?.extra &&
        !bill_discounts_details?.[i]?.account_id &&
        PATTERN_SETTINGS?.extra_account_id
      ) {
        setValue(
          `bill_discounts_details.${i}.account_id`,
          PATTERN_SETTINGS?.extra_account_id
        );
      }

      extras += +bill_discounts_details?.[i].extra || 0;
    }
    setValue("bill.discounts", +discounts);
    setValue("bill.extras", +extras);

    calculateTotal();
  };

  const getMaterials = async (service_id) => {
    const materials = await getRequestedMaterialsByServiceId(service_id);
    setValue("bill_material_details", materials?.result);
    setRefresh((p) => !p);
  };

  const mergePatternWithBillData = async (pattern, watch, setValue) => {
    if (pattern?.payment_method) {
      setValue("bill.payment_method", pattern?.payment_method);
    }
    if (pattern?.payment_method) {
      setValue("bill.taxable", pattern?.vat_percentage);
    }
    if (pattern?.cost_center_id) {
      setValue("bill.cost_center_id", pattern?.cost_center_id);
    }
    if (pattern?.default_store_id) {
      setValue("bill.store_id", pattern?.default_store_id);
    }

    if (pattern?.material_account_id) {
      setValue("bill.material_account_id", pattern?.material_account_id);
    }

    // if (pattern?.vat_account_id) {
    //   setValue("bill.vat_account_id", pattern?.vat_account_id);
    // }
    setRefresh((p) => !p);
  };

  const calculateTotal = () => {
    const vatPercentage = watch("bill.taxable") || 0;
    const subtotal = watch("bill.subtotal") || 0;
    const discounts = watch("bill.discounts") || 0;
    const extras = watch("bill.extras") || 0;
    // total always is calc all materials price
    let total = subtotal + (extras || 0);
    const vatAmount = (total * vatPercentage) / 100;
    let newTotal = total - discounts;
    newTotal += vatAmount;

    // setValue("bill.vat_amount", vatAmount);
    setValue("bill.total", newTotal);
    // setValue("bill.net", newTotal - subtotal);
    setValue("bill.bill_total_text", numberToText.convertToText(total));
  };

  const onSubmit = async () => {
    const materials = watch("bill_material_details");
    if (Object.keys(errors).length) {
      toast.error("please fill the required fields");
      return;
    }

    if (watch("bill.total") <= 0) {
      toast.error(
        `Failed to add new ${PATTERN_SETTINGS?.name}, please fill required fields`
      );
      return;
    }
    if (!materials?.length || !materials?.at(0)?.total_price) {
      toast.error(
        `Failed to add new ${PATTERN_SETTINGS?.name}, please fill required fields`
      );
      return;
    }
    for (const material of materials) {
    }
    const getTheFunInsert = INSERT_FUNCTION?.bill;
    setValue("bill.code", +code);
    setValue("bill.bill_pattern_id", PATTERN_SETTINGS?.id);
    const response = await getTheFunInsert(watch());
    if (response?.success) {
      await generateEntryFromBill({
        values: watch(),
        created_from: CREATED_FROM_BILL,
        created_from_id: params?.id || response.record?.id,
        created_from_code: +code,
        pattern: PATTERN_SETTINGS,
      });
      toast.success(
        `Successfully ${params?.id ? "updated" : "inserted"} Bill ${watch(
          "bill.number"
        )}`
      );
      if (!params?.id) navigate(`/bill/${code}/${response?.record?.number}`);
    } else {
      toast.error(`Field to save Bill ${watch("bill.number")}`);
    }
  };

  return (
    <>
      {openMaterialForm && <MaterialForm />}
      <ContextMenu id="BILL_MENU" className="bg-gray-50 border border-gray-200 rounded-md p-2 text-sm shadow flex flex-col gap-1">
        <MenuItem
          className={`flex hover:text-blue-500 gap-2 items-center cursor-pointer whitespace-nowrap hover:bg-blue-50 text-sm p-1 text-gray-600`}
          onClick={() => setOpenMaterialForm(true)}
        >
          Add Material
        </MenuItem>
      </ContextMenu>
      <FormLayout
        name={PATTERN_SETTINGS?.name}
        isLoading={isLoading || LoadingPattern}
        methods={methods}
        onSubmit={onSubmit}
        additionalButtons={params?.id && <ViewEntry id={params?.id} />}
        key={code}
        formPagination={formPagination}
        onClose={onClose}
        formClassName="w-full xl:w-[900px] 2xl:w-[1200px]"
      >
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-6 items-start justify-between gap-y-1">
          <Input
            {...fields?.number}
            updatedName="bill.number"
            key={code}
            tab="bill"
            error={errors?.bill?.number?.message}
            readOnly
          />
          <Input
            {...fields?.issue_date}
            updatedName="bill.issue_date"
            key={code}
            tab="bill"
            error={errors?.bill?.issue_date?.message}
          />
          <Input
            {...fields?.bill_date}
            updatedName="bill.bill_date"
            key={code}
            tab="bill"
            values={watch()}
            error={errors?.bill?.bill_date?.message}
          />

          <Input
            {...fields?.receipt_number}
            updatedName="bill.receipt_number"
            key={code}
            tab="bill"
            error={errors?.bill?.receipt_number?.message}
          />
          <CurrencyFieldGroup
            tab="bill"
            values={watch()}
            error={errors?.bill?.currency_id?.message}
          />
          <Select
            {...fields?.payment_method}
            updatedName="bill.payment_method"
            key={code}
            tab="bill"
            values={watch()}
            error={errors?.bill?.payment_method?.message}
          />

          <UniqueField
            {...fields?.cost_center_id}
            updatedName="bill.cost_center_id"
            key={code}
            tab="bill"
            values={watch()}
            error={errors?.bill?.cost_center_id?.message}
          />

          <UniqueField
            {...fields?.store_id}
            updatedName="bill.store_id"
            key={code}
            tab="bill"
            values={watch()}
            error={errors?.bill?.store_id?.message}
          />
          <UniqueField
            {...fields?.customer_id}
            updatedName="bill.customer_id"
            key={code}
            tab="bill"
            required={
              +watch('bill.payment_method') === 1
            }
            values={watch()}
            label={
              +PATTERN_SETTINGS?.bill_type === 2
                ? "Customer Name"
                : "Supplier name"
            }
            // ref_table={
            //   +PATTERN_SETTINGS?.bill_type === 2
            //     ? UNIQUE_REF_TABLES.user_customer
            //     : UNIQUE_REF_TABLES.user_supplier
            // }
            error={errors?.bill?.customer_id?.message}
          />
          <UniqueField
            {...fields?.customer_account_id}
            updatedName="bill.customer_account_id"
            key={code}
            tab="bill"
            values={watch()}
            error={
              errors?.bill?.customer_account_id?.message || "Field is required"
            }
          />
          <UniqueField
            {...fields?.material_account_id}
            updatedName="bill.material_account_id"
            key={code}
            tab="bill"
            values={watch()}
            error={
              errors?.bill?.material_account_id?.message || "Field is required"
            }
          />
          <UniqueField
            {...fields?.vat_account_id}
            required={false}
            updatedName="bill.vat_account_id"
            key={code}
            tab="bill"
            values={watch()}
            error={errors?.bill?.vat_account_id?.message}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-2">
          {+PATTERN_SETTINGS?.bill_type === 2 ? (
            <BillConnectWithField tab={"bill"} />
          ) : null}
        </div>
        <Textarea
          {...fields?.note}
          updatedName="bill.note"
          key={code}
          tab="bill"
          textareaClassName="h-[60px]"
          error={errors?.bill?.note?.message}
        />

        <div className="mt-4 bg-gray-200">
          <div className="flex items-center">
            <Btn type="button" onClick={() => setActiveTab(1)} containerClassName="!rounded-none" kind="default" isActive={activeTab === 1}>Materials </Btn>
            <Btn type="button" onClick={() => setActiveTab(2)} containerClassName="!rounded-none" kind="default" isActive={activeTab === 2}>Accounts </Btn>
          </div>
          {
            activeTab === 1 ? (
              <TableFields
                key={code}
                // theadClassName="!bg-transparent"
                errors={errors}
                rowsCount={watch("bill_material_details")?.length}
                fields={getFormByTableName("bill_material_details")}
                tab={"bill_material_details"}
                tableError={errors?.bill?.["bill_material_details"]}
                rowStyles={(index) => ({
                  background:
                    index % 2
                      ? PATTERN_SETTINGS?.table_color1
                      : PATTERN_SETTINGS?.table_color2,
                })}
              // tableClassName="!border-collapse !border !border-gray-300"
              // thClassName="border border-2 border-r-black border-b-black dark:border-b-gray-200 dark:border-r-gray-200 p-2 bg-gray-200 text-center dark:bg-black dark:text-white"
              // numberClassName="border border-2 border-r-black border-b-black dark:border-b-gray-200 dark:border-r-gray-200 p-2 bg-gray-200 text-center text-black dark:bg-black dark:text-white"
              // increaseContainerClassNamed="border border-2 !border-black"
              />
            ) : (
              <TableFields
                key={code}
                // theadClassName="!bg-transparent"
                errors={errors}
                rowsCount={watch("bill_discounts_details")?.length}
                fields={getFormByTableName("bill_discounts_details")}
                tab={"bill_discounts_details"}
                tableError={errors?.bill?.["bill_discounts_details"]}
                // thClassName="border border-2 border-r-black border-b-black dark:border-b-gray-200 dark:border-r-gray-200 p-2 bg-gray-200 text-center dark:bg-black dark:text-white"
                // numberClassName="border border-2 border-r-black border-b-black dark:border-b-gray-200 dark:border-r-gray-200 p-2 bg-gray-200 text-center text-black dark:bg-black dark:text-white"
                rowStyles={(index) => ({
                  background:
                    index % 2
                      ? PATTERN_SETTINGS?.table_color1
                      : PATTERN_SETTINGS?.table_color2,
                })}
              />
            )
          }
        </div>
        {/* <div className="bg-gray-200 dark:bg-[#303030] p-4 my-4 border-b-black">
        <h3 className="text-black text-lg font-medium capitalize">
          {t("materials")}
        </h3>

        </div>
        <div className="bg-gray-200 dark:bg-[#303030] p-4 my-4 border-b-black">
        <h3 className="text-black text-lg font-medium capitalize">
        {t("Accounts")}
        </h3>
        </div> */}


        <div className="my-4 bg-gray-200 dark:bg-[#303030] p-2">
          <div className=" flex gap-12 items-center justify-between px-8">
            <div className="flex flex-col gap-2 max-w-sm">
              <Input
                {...fields?.total_quantities}
                updatedName="bill.total_quantities"
                key={code}
                tab="bill"
                error={errors?.bill?.total_quantities?.message}
              />
              <Input
                {...fields?.discounts}
                updatedName="bill.discounts"
                key={code}
                tab="bill"
                error={errors?.bill?.discounts?.message}
              />
              <Input
                {...fields?.extras}
                updatedName="bill.extras"
                key={code}
                tab="bill"
                error={errors?.bill?.extras?.message}
              />
              <Input
                {...fields?.taxable}
                updatedName="bill.taxable"
                key={code}
                tab="bill"
                error={errors?.bill?.taxable?.message}
              />
              <Input
                {...fields?.vat_amount}
                updatedName="bill.vat_amount"
                key={code}
                tab="bill"
                error={errors?.bill?.vat_amount?.message}
              />
            </div>
            <div className="flex flex-col gap-2 max-w-sm md:min-w-[400px]">
              <Input
                {...fields?.subtotal}
                updatedName="bill.subtotal"
                key={code}
                tab="bill"
                error={errors?.bill?.subtotal?.message}
              />
              {/* <Input
              {...fields?.net}
              updatedName="bill.net"
              key={code}
              tab="bill"
              error={errors?.bill?.net?.message}
              
            /> */}
              <Input
                {...fields?.total}
                updatedName="bill.total"
                key={code}
                tab="bill"
                error={errors?.bill?.total?.message}
              />
              <Textarea
                {...fields?.bill_total_text}
                updatedName="bill.bill_total_text"
                key={code}
                tab="bill"
                textareaClassName="h-[60px]"
                error={errors?.bill?.bill_total_text?.message}
              />
            </div>
          </div>
        </div>
      </FormLayout>
    </>
  );
};

export default BillForm;
