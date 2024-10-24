import getFormByTableName from "Helpers/Forms/forms";
import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
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
import ReportInputField from "Components/ReportsComponents/ReportsFields/ReportInputField";
import BillConnectWithField from "Components/StructurePage/CustomFields/BillConnectWithField";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import { generateEntryFromBill } from "Helpers/Lib/vouchers-insert";

const mergePatternWithBillData = (pattern) => {
  let patternValues = {};

  if (pattern?.auto_gen_entries) {
    patternValues.gen_entries = true;
  }

  return patternValues;
};

const BillForm = ({ tableName, patternCode, popupView, oldValues }) => {
  const params = useParams();
  const id = params?.id;
  const { CACHE_LIST } = useRefTable("bill");
  const methods = useForm();
  let {
    watch,
    setValue,
    reset,
    formState: { errors },
  } = methods;
  
  const name = params?.name || tableName;
  const code = params?.code || patternCode;
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});

  useQuery({
    queryKey: ["bill", "bill_pattern"],
    queryFn: async () => {
      const response = await ApiActions.read("bill_pattern", {
        conditions: [{ type: "and", conditions: [["code", "=", +code]] }],
      });
      let pattern = response?.result?.at(0);
      mergePatternWithBillData(pattern, watch, setValue);
      setPATTERN_SETTINGS(pattern);
    },
  });

  const { isLoading, refetch } = useQuery({
    queryKey: ["bill", name, code, id],
    queryFn: async () => {
      const response = await ApiActions.read("bill", {
        conditions: [
          {
            type: "and",
            conditions: [["id", "=", id]],
          },
          { type: "and", conditions: [["kind", "=", +code]] },
        ],
      });
      reset(response?.result?.at(0));
    },
  });

  let fields = useMemo(() => {
    let hash = {};
    for (const field of getFormByTableName("bill")) {
      hash[field?.name] = field;
    }
    return hash;
  }, []);

  useEffect(() => {
    if (oldValues && PATTERN_SETTINGS) {
      reset({
        ...mergePatternWithBillData(PATTERN_SETTINGS, watch, setValue),
        ...oldValues,
      });
    }
  }, [oldValues, PATTERN_SETTINGS?.id]);

  console.log(watch(), "----");
  const onSubmit = async () => {
    const getTheFunInsert = INSERT_FUNCTION?.bill;
    setValue("bill.bill_kind", +code);
    const response = await getTheFunInsert(watch());

    if (response?.succuss) {
      //
      // generateEntryFromBill({
      // })
    }

    // bill_material_details
    // bill_discounts_details
  };

  return (
    <FormWrapperLayout
      name={name}
      isLoading={isLoading}
      popupView={popupView}
      methods={methods}
      onSubmit={onSubmit}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 bg-[#EFF6FF] dark:bg-[#303030] p-2">
        <div className="flex flex-col gap-5">
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
          />
          <CurrencyFieldGroup
            tab="bill"
            CACHE_LIST={CACHE_LIST}
            list={!!CACHE_LIST ? CACHE_LIST?.currency : []}
            values={watch()}
            error={errors?.currency_id ? "Field is required" : ""}
            old={true}
            containerClassName="flex"
          />
          <Select
            {...fields?.payment_method}
            updatedName="bill.payment_method"
            tab="bill"
            values={watch()}
            error={errors?.payment_method ? "Field is required" : ""}
            old={true}
            containerClassName={"!flex-row"}
            labelClassName="!w-[120px] !whitespace-normal"
          />
        </div>
        <div className="flex flex-col gap-5">
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
            containerClassName="flex"
            labelClassName="!w-[120px] !whitespace-normal"
          />
          <div className="">
            <BillConnectWithField tab={"bill"} old={true} />
          </div>
          <Input
            {...fields?.note}
            updatedName="bill.note"
            tab="bill"
            values={watch()}
            error={errors?.note ? "Field is required" : ""}
            old={true}
            inputClassName="w-full"
          />
        </div>
        <div className="flex flex-col gap-5">
          <UniqueField
            {...fields?.store_id}
            updatedName="bill.store_id"
            tab="bill"
            CACHE_LIST={CACHE_LIST}
            list={!!CACHE_LIST ? CACHE_LIST?.store : []}
            values={watch()}
            error={errors?.store_id ? "Field is required" : ""}
            old={true}
            containerClassName="flex"
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
            containerClassName="flex"
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
            containerClassName="flex"
            labelClassName="!w-[190px] !whitespace-normal"
          />
          <Input
            {...fields?.class}
            updatedName="bill.kind"
            tab="bill"
            error={errors?.class ? "Field is required" : ""}
          />
        </div>
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
          thClassName="border border-2 !border-r-black border-b-black p-2 bg-gray-200 text-center"
          numberClassName="border border-2 !border-r-black border-b-black p-2 bg-gray-200 text-center text-black"
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
          thClassName="border border-2 !border-r-black border-b-black p-2 bg-gray-200 text-center"
          numberClassName="border border-2 !border-r-black border-b-black p-2 bg-gray-200 text-center text-black"
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
