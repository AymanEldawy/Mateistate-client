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
  UniqueField,
} from "Components/StructurePage/CustomFields";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import BillConnectWithField from "Components/StructurePage/CustomFields/BillConnectWithField";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import { generateEntryFromBill } from "Helpers/Lib/vouchers-insert";
import { CREATED_FROM_BILL_CODE } from "Helpers/GENERATE_STARTING_DATA";
import { ViewEntry } from "Components/Global/ViewEntry";
import useCurd from "Hooks/useCurd";

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

const mergePatternWithBillData = (pattern) => {
  let patternValues = {};

  if (pattern?.auto_gen_entries) {
    patternValues.gen_entries = true;
  }

  return patternValues;
};

const BillForm = ({ tableName, patternCode, popupView, oldValues }) => {
  const params = useParams();
  const { getOneBy } = useCurd();
  const id = params?.id;

  const { CACHE_LIST } = useRefTable("bill");
  const methods = useForm();
  let {
    watch,
    setValue,
    reset,
    formState: { errors },
  } = methods;

  const code = params?.code || patternCode;
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});

  useQuery({
    queryKey: ["bill", "bill_pattern"],
    queryFn: async () => {
      const response = await getOneBy("bill_pattern", +code, "code");
      let pattern = response?.result?.at(0);
      setPATTERN_SETTINGS(pattern);
      if (!id) {
        reset({
          bill: mergePatternWithBillData(PATTERN_SETTINGS, watch, setValue),
        });
      }
    },
  });

  const { isLoading } = useQuery({
    queryKey: ["bill", code, id],
    queryFn: async () => {
      if (!code || !id) return;
      const response = await getOneBy("bill", id);
      reset({
        bill: response?.result?.at(0),
      });
    },
  });

  let fields = useMemo(() => {
    let hash = {};
    for (const field of getFormByTableName("bill")) {
      hash[field?.name] = field;
    }
    return hash;
  }, []);

  console.log(PATTERN_SETTINGS,'pattern');
  
  const onSubmit = async () => {
    const getTheFunInsert = INSERT_FUNCTION?.bill;
    setValue("bill.bill_kind", +code);
    const response = await getTheFunInsert(watch());

    if (response?.success) {
      await generateEntryFromBill({
        values: watch(),
        created_from: CREATED_FROM_BILL_CODE,
        created_from_id: params?.id || response.record?.id,
        created_from_code: +code,
        pattern: PATTERN_SETTINGS
      });
      //
    }

    // bill_material_details
    // bill_discounts_details
  };

  return (
    <FormWrapperLayout
      name={PATTERN_SETTINGS?.name}
      isLoading={isLoading}
      popupView={popupView}
      methods={methods}
      onSubmit={onSubmit}
      additionalButtons={params?.id && <ViewEntry id={params?.id} />}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 bg-[#EFF6FF] dark:bg-[#303030] p-2">
        <Input
          {...fields?.issue_date}
          updatedName="bill.issue_date"
          tab="bill"
          error={errors?.issue_date ? "Field is required" : ""}
          old={true}
        />
        <Input
          {...fields?.bill_date}
          updatedName="bill.bill_date"
          tab="bill"
          values={watch()}
          error={errors?.bill_date ? "Field is required" : ""}
          old={true}
          labelClassName="!w-[190px] !whitespace-normal"
        />
        <CurrencyFieldGroup
          tab="bill"
          CACHE_LIST={CACHE_LIST}
          list={!!CACHE_LIST ? CACHE_LIST?.currency : []}
          values={watch()}
          error={errors?.currency_id ? "Field is required" : ""}
          old={true}
          containerClassName="flex !items-center"
        />
        <Select
          {...fields?.payment_method}
          updatedName="bill.payment_method"
          tab="bill"
          values={watch()}
          error={errors?.payment_method ? "Field is required" : ""}
          old={true}
          containerClassName={"!flex-row !items-center"}
          labelClassName="!w-[190px] !whitespace-normal"
        />

        <Input
          {...fields?.receipt_number}
          updatedName="bill.receipt_number"
          tab="bill"
          error={errors?.receipt_number ? "Field is required" : ""}
          old={true}
          // inputClassName="w-full"
        />
        <UniqueField
          {...fields?.cost_center_id}
          updatedName="bill.cost_center_id"
          tab="bill"
          CACHE_LIST={CACHE_LIST}
          list={!!CACHE_LIST ? CACHE_LIST?.cost_center : []}
          values={watch()}
          error={errors?.cost_center_id ? "Field is required" : ""}
          old={true}
          containerClassName="flex !items-center"
          labelClassName="!w-[190px] !whitespace-normal"
        />
        {/* <div className="">
          </div> */}
        <BillConnectWithField tab={"bill"} old={true} />
        <Input
          {...fields?.note}
          updatedName="bill.note"
          tab="bill"
          values={watch()}
          error={errors?.note ? "Field is required" : ""}
          old={true}
          inputClassName="w-full"
          labelClassName="!w-[190px] !whitespace-normal"
        />

        <UniqueField
          {...fields?.store_id}
          updatedName="bill.store_id"
          tab="bill"
          CACHE_LIST={CACHE_LIST}
          list={!!CACHE_LIST ? CACHE_LIST?.store : []}
          values={watch()}
          error={errors?.store_id ? "Field is required" : ""}
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
          error={errors?.customer_account_id ? "Field is required" : ""}
          old={true}
          containerClassName="flex !items-center"
          labelClassName="!w-[190px] !whitespace-normal"
        />
        <UniqueField
          {...fields?.client_account_id}
          updatedName="bill.client_account_id"
          tab="bill"
          CACHE_LIST={CACHE_LIST}
          list={!!CACHE_LIST ? CACHE_LIST?.account : []}
          values={watch()}
          error={errors?.client_account_id ? "Field is required" : ""}
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
          error={errors?.material_account_id ? "Field is required" : ""}
          old={true}
          containerClassName="flex !items-center"
          labelClassName="!w-[190px] !whitespace-normal"
        />
        {/* <Input
            {...fields?.bill_kind}
            updatedName="bill.bill_kind"
            tab="bill"
            error={errors?.bill_kind ? "Field is required" : ""}
          /> */}

        {/* <Textarea
          {...fields?.note}
          updatedName="bill.note"
          tab="bill"
          containerClassName="col-span-full mt-0"
          textareaClassName="h-[60px]"
          error={errors?.note ? "Field is required" : ""}
        /> */}
      </div>
      <div className="bg-[#EFF6FF] dark:bg-[#303030] p-4 my-4 border-b-black">
        <TableFields
          containerClassName="bg-white dark:bg-dark-bg"
          theadClassName="!bg-transparent"
          CACHE_LIST={CACHE_LIST}
          errors={errors}
          fields={getFormByTableName("bill_material_details")}
          tab={"bill_material_details"}
          tableError={errors?.["bill_material_details"]}
          // tableClassName="!border-collapse !border !border-gray-300"
          thClassName="border border-2 border-r-black border-b-black dark:border-b-gray-200 dark:border-r-gray-200 p-2 bg-gray-200 text-center dark:bg-black dark:text-white"
          numberClassName="border border-2 border-r-black border-b-black dark:border-b-gray-200 dark:border-r-gray-200 p-2 bg-gray-200 text-center text-black dark:bg-black dark:text-white"
          // increaseContainerClassNamed="border border-2 !border-black"
        />
        <TableFields
          containerClassName="bg-white dark:bg-dark-bg"
          theadClassName="!bg-transparent"
          CACHE_LIST={CACHE_LIST}
          errors={errors}
          fields={getFormByTableName("bill_discounts_details")}
          tab={"bill_discounts_details"}
          tableError={errors?.["bill_discounts_details"]}
          thClassName="border border-2 border-r-black border-b-black dark:border-b-gray-200 dark:border-r-gray-200 p-2 bg-gray-200 text-center dark:bg-black dark:text-white"
          numberClassName="border border-2 border-r-black border-b-black dark:border-b-gray-200 dark:border-r-gray-200 p-2 bg-gray-200 text-center text-black dark:bg-black dark:text-white"
        />
      </div>
      <div className="grid grid-cols-2 gap-8 my-4 bg-[#EFF6FF] dark:bg-[#303030] p-2">
        <div className="flex flex-col gap-2 overflow-hidden">
          <div className="grid grid-cols-3 gap-4">
            <Input
              {...fields?.total_quantities}
              updatedName="bill.total_quantities"
              tab="bill"
              // inputClassName="max-w-[80px]"
              error={errors?.total_quantities ? "Field is required" : ""}
            />
            <Input
              {...fields?.total_quantities_percentage}
              updatedName="bill.total_quantities_percentage"
              tab="bill"
              // inputClassName="max-w-[80px]"
              error={
                errors?.total_quantities_percentage ? "Field is required" : ""
              }
              labelClassName="opacity-0"
            />
            <Input
              {...fields?.total_quantities_percentage2}
              updatedName="bill.total_quantities_percentage2"
              tab="bill"
              // inputClassName="max-w-[80px]"
              error={
                errors?.total_quantities_percentage2 ? "Field is required" : ""
              }
              labelClassName="opacity-0"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              {...fields?.refunded_taxable_amount}
              updatedName="bill.refunded_taxable_amount"
              tab="bill"
              error={errors?.refunded_taxable_amount ? "Field is required" : ""}
            />
            <Input
              {...fields?.non_refunded_taxable_amount}
              updatedName="bill.non_refunded_taxable_amount"
              tab="bill"
              error={
                errors?.non_refunded_taxable_amount ? "Field is required" : ""
              }
            />
            <Input
              {...fields?.not_taxable}
              updatedName="bill.not_taxable"
              tab="bill"
              error={errors?.not_taxable ? "Field is required" : ""}
            />
            <Input
              {...fields?.taxable}
              updatedName="bill.taxable"
              tab="bill"
              error={errors?.taxable ? "Field is required" : ""}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-4">
            <Input
              {...fields?.discounts}
              updatedName="bill.discounts"
              tab="bill"
              error={errors?.discounts ? "Field is required" : ""}
            />
            <Input
              {...fields?.discounts_extra}
              updatedName="bill.discounts_extra"
              tab="bill"
              error={errors?.discounts_extra ? "Field is required" : ""}
            />
            <Input
              {...fields?.non_refundable_vat}
              updatedName="bill.non_refundable_vat"
              tab="bill"
              error={errors?.non_refundable_vat ? "Field is required" : ""}
            />
            <Input
              {...fields?.non_refundable_vat2}
              updatedName="bill.non_refundable_vat2"
              tab="bill"
              error={errors?.non_refundable_vat2 ? "Field is required" : ""}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Input
              {...fields?.total}
              updatedName="bill.total"
              tab="bill"
              error={errors?.total ? "Field is required" : ""}
            />
            <Input
              {...fields?.grand_total}
              updatedName="bill.grand_total"
              tab="bill"
              error={errors?.grand_total ? "Field is required" : ""}
            />
            <Input
              {...fields?.net}
              updatedName="bill.net"
              tab="bill"
              error={errors?.net ? "Field is required" : ""}
            />
          </div>
        </div>
      </div>
    </FormWrapperLayout>
  );
};

export default BillForm;
