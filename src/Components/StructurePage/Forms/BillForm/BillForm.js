import numberToText from "number-to-text";
import "number-to-text/converters/en-us";
import getFormByTableName from "Helpers/Forms/forms";
import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
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
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import BillConnectWithField from "Components/StructurePage/CustomFields/BillConnectWithField";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import { generateEntryFromBill } from "Helpers/Lib/vouchers-insert";
import { CREATED_FROM_BILL_CODE } from "Helpers/GENERATE_STARTING_DATA";
import { ViewEntry } from "Components/Global/ViewEntry";
import useCurd from "Hooks/useCurd";
import { useTranslation } from "react-i18next";
import { UNIQUE_REF_TABLES } from "Helpers/constants";
import { getRequestedMaterialsByServiceId } from "Helpers/Lib/global-read";
import { toast } from "react-toastify";
// import { numberToText } from "Helpers/functions";

let data = {
  issue_date: "2024-10-30T21:00:00.000Z",
  bill_date: "2024-10-28T21:00:00.000Z",
  currency_val: 1,
  currency_id: "27e841e4-20f5-4b74-8e55-f2f4efa5a9b2",
  payment_method: 2,
  receipt_number: "34",
  cost_center_id: "8fc113a6-5300-49be-887b-30c1a8c49d02",
  connect_with: 1,
  note: "2",
  store_id: "9b2770c2-9369-4f4e-a512-3f9d97e10f89",
  customer_account_id: "6b2e51a5-eda4-4fe6-a008-055b43aac149",
  client_account_id: "6b2e51a5-eda4-4fe6-a008-055b43aac149",
  material_account_id: "8348c4b2-9908-4235-8e25-b3503113c326",
  total_quantities: "434",
  total_quantities_percentage: "43",
  total_quantities_percentage2: "34",
  refunded_taxable_amount: "34",
  non_refunded_taxable_amount: "534",
  not_taxable: "34",
  taxable: "534",
  discounts: "232",
  discounts_extra: "43",
  non_refundable_vat: "53",
  non_refundable_vat2: "434",
  total: "534",
  grand_total: "43",
  net: "53",
  connect_with_id: "12c61adf-b364-49c6-9655-d7a7d84b47fe",
  bill_kind: 1,
};

const BillForm = ({ tableName, patternCode, popupView, oldValues }) => {
  const params = useParams();
  const { t } = useTranslation();
  const { getOneBy } = useCurd();
  const id = params?.id;
  const [refresh, setRefresh] = useState(false);

  const { CACHE_LIST } = useRefTable("bill");
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
    formState: { errors },
    clearErrors
  } = methods;
  console.log(errors, "errors");
  const code = params?.code || patternCode;
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});

  const { isLoading: LoadingPattern } = useQuery({
    queryKey: ["bill_pattern", code],
    queryFn: async () => {
      const response = await getOneBy("bill_pattern", code, "code");
      let pattern = response?.result?.at(0);
      setPATTERN_SETTINGS(pattern);
      if (!id) {
        await mergePatternWithBillData(pattern, watch, setValue);
        // reset({
        //   bill:
        // });
      }
      return pattern;
    },
  });

  const { isLoading } = useQuery({
    queryKey: ["bill", id],
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
  console.log(id, "---sds");

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
      if (name === "bill.connect_with_id") {
        getMaterials(watch(name));
      }

      if (name === "bill.customer_id") {
        const customer_account_id = CACHE_LIST?.user?.find(
          (c) => c?.id === watch(name)
        )?.account_id;
        setValue("bill.customer_account_id", customer_account_id);
        clearErrors('bill.customer_account_id')
        setRefresh((p) => !p);
      }

      if (
        tab?.includes("bill_material_details")
        // ||
        // name?.indexOf("quantity") !== -1
      ) {
        calculateMaterialsTotal();
      }

      if (
        tab?.includes("bill_discounts_details")
        // ||
        // name?.indexOf("extras") !== -1
      ) {
        calculateVatAndDiscounts();
      }
      if (name === "bill.taxable") {
        calculateTotal();
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, CACHE_LIST]);

  const calculateMaterialsTotal = () => {
    const bill_material_details = watch("bill_material_details");
    let total = 0;
    let quantities = 0;
    for (let i = 0; i < bill_material_details?.length; i++) {
      let quantity = bill_material_details?.[i].quantity;
      let unit_price = bill_material_details?.[i].unit_price;
      let currentTotal = quantity * unit_price;
      total += currentTotal || 0;
      quantities += +quantity || 0;
      setValue(`bill_material_details.${i}.total_price`, currentTotal);
    }
    setValue("bill.total_quantities", parseInt(quantities));
    setValue("bill.subtotal", total);
    calculateTotal();
  };

  const calculateVatAndDiscounts = () => {
    const bill_discounts_details = watch("bill_discounts_details");
    let discounts = 0;
    let extras = 0;
    for (let i = 0; i < bill_discounts_details?.length; i++) {
      discounts += +bill_discounts_details?.[i]?.discount || 0;
      extras += +bill_discounts_details?.[i].extra || 0;
    }
    console.log();

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

    setValue("bill.vat_amount", vatAmount);
    setValue("bill.total", newTotal);
    setValue("bill.net", newTotal - subtotal);
    setValue("bill.bill_total_text", numberToText.convertToText(total));
  };

  const onSubmit = async () => {
    if (Object.keys(errors).length) {
      toast.error("please fill the required fields");
      return;
    }
    console.log("🚀 ~ onSubmit ~ response called :fsfsd");
    const getTheFunInsert = INSERT_FUNCTION?.bill;
    setValue("bill.bill_kind", +code);
    const response = await getTheFunInsert(watch());
    console.log("🚀 ~ onSubmit ~ response:", response);
    if (response?.success) {
      await generateEntryFromBill({
        values: watch(),
        created_from: CREATED_FROM_BILL_CODE,
        created_from_id: params?.id || response.record?.id,
        created_from_code: +code,
        pattern: PATTERN_SETTINGS,
      });
    }
  };
  console.log({ PATTERN_SETTINGS });

  return (
    <FormWrapperLayout
      name={PATTERN_SETTINGS?.name}
      isLoading={isLoading || LoadingPattern}
      popupView={popupView}
      methods={methods}
      onSubmit={onSubmit}
      additionalButtons={params?.id && <ViewEntry id={params?.id} />}
    >
      <div className=" bg-[#EFF6FF] dark:bg-[#303030] p-4">
        <div className="grid grid-cols-3 items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            {" "}
            <Input
              {...fields?.number}
              updatedName="bill.number"
              tab="bill"
              error={errors?.bill?.number?.message}
              old={true}
            />
            <Input
              {...fields?.issue_date}
              updatedName="bill.issue_date"
              tab="bill"
              error={errors?.bill?.issue_date?.message}
              old={true}
            />
            <Input
              {...fields?.bill_date}
              updatedName="bill.bill_date"
              tab="bill"
              values={watch()}
              error={errors?.bill?.bill_date?.message}
              old={true}
              labelClassName="!w-[190px] !whitespace-normal"
            />
            {/* <Input
              {...fields?.kind}
              updatedName="bill.kind"
              tab="bill"
              values={watch()}
              error={errors?.bill?.kind?.message}
              old={true}
              labelClassName="!w-[190px] !whitespace-normal"
            /> */}
            <UniqueField
              {...fields?.customer_id}
              updatedName="bill.customer_id"
              tab="bill"
              CACHE_LIST={CACHE_LIST}
              list={
                !!CACHE_LIST
                  ? PATTERN_SETTINGS?.bill_type === 2
                    ? CACHE_LIST?.user_customer
                    : CACHE_LIST?.user_supplier
                  : []
              }
              values={watch()}
              label={
                +PATTERN_SETTINGS?.bill_type === 2
                  ? "Customer Name"
                  : "Supplier name"
              }
              ref_table={
                +PATTERN_SETTINGS?.bill_type === 2
                  ? UNIQUE_REF_TABLES.user_customer
                  : UNIQUE_REF_TABLES.user_supplier
              }
              error={errors?.bill?.customer_id?.message}
              old={true}
              containerClassName="flex !items-center"
              labelClassName="!w-[190px] !whitespace-normal"
            />
          </div>
          <div className="flex flex-col gap-2">
            <UniqueField
              {...fields?.cost_center_id}
              updatedName="bill.cost_center_id"
              tab="bill"
              CACHE_LIST={CACHE_LIST}
              list={!!CACHE_LIST ? CACHE_LIST?.cost_center : []}
              values={watch()}
              error={errors?.bill?.cost_center_id?.message}
              old={true}
              containerClassName="flex !items-center"
              labelClassName="!w-[190px] !whitespace-normal"
            />
            <CurrencyFieldGroup
              tab="bill"
              CACHE_LIST={CACHE_LIST}
              list={!!CACHE_LIST ? CACHE_LIST?.currency : []}
              values={watch()}
              error={errors?.bill?.currency_id?.message}
              old={true}
              containerClassName="flex !items-center"
            />
            <Select
              {...fields?.payment_method}
              updatedName="bill.payment_method"
              tab="bill"
              values={watch()}
              error={errors?.bill?.payment_method?.message}
              old={true}
              containerClassName={"!flex-row !items-center"}
              labelClassName="!w-[190px] !whitespace-normal"
            />
            <Input
              {...fields?.receipt_number}
              updatedName="bill.receipt_number"
              tab="bill"
              error={errors?.bill?.receipt_number?.message}
              old={true}
              // inputClassName="w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <UniqueField
              {...fields?.store_id}
              updatedName="bill.store_id"
              tab="bill"
              CACHE_LIST={CACHE_LIST}
              list={!!CACHE_LIST ? CACHE_LIST?.store : []}
              values={watch()}
              error={errors?.bill?.store_id?.message}
              old={true}
              containerClassName="flex !items-center"
              labelClassName="!w-[190px] !whitespace-normal"
            />
            <UniqueField
              {...fields?.customer_account_id}
              updatedName="bill.customer_account_id"
              tab="bill"
              CACHE_LIST={CACHE_LIST}
              list={!!CACHE_LIST ? CACHE_LIST?.account : []}
              values={watch()}
              error={
                errors?.bill?.customer_account_id?.message ||
                "Field is required"
              }
              old={true}
              containerClassName="flex !items-center"
              labelClassName="!w-[190px] !whitespace-normal"
            />

            <UniqueField
              {...fields?.material_account_id}
              updatedName="bill.material_account_id"
              tab="bill"
              CACHE_LIST={CACHE_LIST}
              list={!!CACHE_LIST ? CACHE_LIST?.account : []}
              values={watch()}
              error={
                errors?.bill?.material_account_id?.message ||
                "Field is required"
              }
              old={true}
              containerClassName="flex !items-center"
              labelClassName="!w-[190px] !whitespace-normal"
            />
            {/* <UniqueField
              {...fields?.vat_account_id}
              updatedName="bill.vat_account_id"
              tab="bill"
              CACHE_LIST={CACHE_LIST}
              list={!!CACHE_LIST ? CACHE_LIST?.account : []}
              values={watch()}
              error={errors?.bill?.vat_account_id?.message}
              old={true}
              containerClassName="flex !items-center"
              labelClassName="!w-[190px] !whitespace-normal"
            /> */}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-2">
          {+PATTERN_SETTINGS?.bill_type === 2 ? (
            <BillConnectWithField tab={"bill"} old={true} />
          ) : null}
        </div>
        <Textarea
          {...fields?.note}
          updatedName="bill.note"
          tab="bill"
          containerClassName="col-span-full mt-2"
          textareaClassName="h-[60px]"
          error={errors?.bill?.note?.message}
        />
      </div>
      <div className="bg-[#EFF6FF] dark:bg-[#303030] p-4 my-4 border-b-black">
        <h3 className="text-black text-lg font-medium capitalize">
          {t("materials")}
        </h3>
        <TableFields
          containerClassName="bg-white dark:bg-dark-bg"
          theadClassName="!bg-transparent"
          CACHE_LIST={CACHE_LIST}
          errors={errors}
          rowsCount={watch("bill_material_details")?.length}
          fields={getFormByTableName("bill_material_details")}
          tab={"bill_material_details"}
          tableError={errors?.bill?.["bill_material_details"]}
          // tableClassName="!border-collapse !border !border-gray-300"
          thClassName="border border-2 border-r-black border-b-black dark:border-b-gray-200 dark:border-r-gray-200 p-2 bg-gray-200 text-center dark:bg-black dark:text-white"
          numberClassName="border border-2 border-r-black border-b-black dark:border-b-gray-200 dark:border-r-gray-200 p-2 bg-gray-200 text-center text-black dark:bg-black dark:text-white"
          // increaseContainerClassNamed="border border-2 !border-black"
        />
      </div>
      <div className="bg-[#EFF6FF] dark:bg-[#303030] p-4 my-4 border-b-black">
        <h3 className="text-black text-lg font-medium capitalize">
          {t("Accounts")}
        </h3>
        <TableFields
          containerClassName="bg-white dark:bg-dark-bg"
          theadClassName="!bg-transparent"
          CACHE_LIST={CACHE_LIST}
          errors={errors}
          rowsCount={watch("bill_discounts_details")?.length}
          fields={getFormByTableName("bill_discounts_details")}
          tab={"bill_discounts_details"}
          tableError={errors?.bill?.["bill_discounts_details"]}
          thClassName="border border-2 border-r-black border-b-black dark:border-b-gray-200 dark:border-r-gray-200 p-2 bg-gray-200 text-center dark:bg-black dark:text-white"
          numberClassName="border border-2 border-r-black border-b-black dark:border-b-gray-200 dark:border-r-gray-200 p-2 bg-gray-200 text-center text-black dark:bg-black dark:text-white"
        />
      </div>
      <div className="my-4 bg-[#EFF6FF] dark:bg-[#303030] p-2">
        <div className=" flex gap-12 items-center justify-between px-8">
          <div className="flex flex-col gap-2 max-w-sm">
            <Input
              {...fields?.total_quantities}
              updatedName="bill.total_quantities"
              tab="bill"
              // inputClassName="max-w-[80px]"
              error={errors?.bill?.total_quantities?.message}
              old={true}
            />
            <Input
              {...fields?.discounts}
              updatedName="bill.discounts"
              tab="bill"
              error={errors?.bill?.discounts?.message}
              old={true}
            />
            <Input
              {...fields?.extras}
              updatedName="bill.extras"
              tab="bill"
              error={errors?.bill?.extras?.message}
              old={true}
            />
            <Input
              {...fields?.taxable}
              updatedName="bill.taxable"
              tab="bill"
              error={errors?.bill?.taxable?.message}
              old={true}
            />
            <Input
              {...fields?.vat_amount}
              updatedName="bill.vat_amount"
              tab="bill"
              error={errors?.bill?.vat_amount?.message}
              old={true}
            />
          </div>
          <div className="flex flex-col gap-2 max-w-sm md:min-w-[400px]">
            <Input
              {...fields?.subtotal}
              updatedName="bill.subtotal"
              labelClassName="max-w-[80px]"
              tab="bill"
              error={errors?.bill?.subtotal?.message}
              old={true}
            />
            <Input
              {...fields?.net}
              updatedName="bill.net"
              labelClassName="max-w-[80px]"
              tab="bill"
              error={errors?.bill?.net?.message}
              old={true}
            />
            <Input
              {...fields?.total}
              updatedName="bill.total"
              labelClassName="max-w-[80px]"
              tab="bill"
              error={errors?.bill?.total?.message}
              old={true}
            />
            <Textarea
              {...fields?.bill_total_text}
              updatedName="bill.bill_total_text"
              tab="bill"
              textareaClassName="h-[60px]"
              error={errors?.bill?.bill_total_text?.message}
            />
          </div>
        </div>
      </div>
    </FormWrapperLayout>
  );
};

export default BillForm;
