import getFormByTableName from "Helpers/Forms/forms";
import { ApiActions } from "Helpers/Lib/api";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { METHODS } from "Helpers/constants";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import useRefTable from "Hooks/useRefTables";
import { removeNullValues } from "Helpers/functions";
import useListView from "Hooks/useListView";
import { useQuery } from "@tanstack/react-query";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import {
  CurrencyFieldGroup,
  Input,
  Select,
  UniqueField,
} from "Components/StructurePage/CustomFields";

const mergePatternWithBillData = (pattern) => {
  let patternValues = {};

  if (pattern?.auto_gen_entries) {
    patternValues.gen_entries = true;
  }

  return patternValues;
};

const BillForm = ({
  layout,
  tableName,
  patternCode,
  popupView,
  outerClose,
  setRecordResponse,
  oldValues,
  action,
}) => {
  const params = useParams();
  const { dispatchVoucherEntries } = useVoucherEntriesView();
  const { CACHE_LIST, setCACHE_LIST } = useRefTable("cheque");
  const methods = useForm();
  let {
    watch,
    setValue,
    reset,
    formState: { errors, isDirty, dirtyFields, isSubmitting },
    handleSubmit,
  } = methods;
  const name = params?.name || tableName;
  const code = params?.code || patternCode;
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});
  const viewList = useListView({
    name: "bill",
    additional: {
      conditions: [{ type: "and", conditions: [["type", "=", +code]] }],
    },
    defaultNumber: oldValues?.number,
  });

  const { listOfNumbers, number, setMaxLength, setNumber } = viewList;

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
    queryKey: ["bill", name, number, code],
    queryFn: async () => {
      const response = await ApiActions.read("bill", {
        conditions: [
          {
            type: "and",
            conditions: [["number", "=", +listOfNumbers?.at(number - 1)]],
          },
          { type: "and", conditions: [["type", "=", +code]] },
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

  console.log(fields, "fields");

  return (
    <FormWrapperLayout
      name={name}
      viewList={viewList}
      isLoading={isLoading}
      popupView={popupView}
      methods={methods}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 lg:gap-8">
        <div className="my-4 flex flex-col gap-2">
          <Input
            {...fields?.bill_date}
            error={errors?.bill_date ? "Field is required" : ""}
          />
          <Input
            {...fields?.bill_kind}
            values={watch()}
            error={errors?.bill_kind ? "Field is required" : ""}
          />
          <CurrencyFieldGroup
            CACHE_LIST={CACHE_LIST}
            list={!!CACHE_LIST ? CACHE_LIST?.currency : []}
            values={watch()}
            error={errors?.currency_id ? "Field is required" : ""}
          />
          <Select
            {...fields?.payment_method}
            values={watch()}
            error={errors?.payment_method ? "Field is required" : ""}
          />
        </div>
        <div className="my-4 flex flex-col gap-2">
          <Input
            {...fields?.receipt_number}
            error={errors?.receipt_number ? "Field is required" : ""}
          />
          <UniqueField
            {...fields?.cost_center_id}
            CACHE_LIST={CACHE_LIST}
            list={!!CACHE_LIST ? CACHE_LIST?.cost_center : []}
            values={watch()}
            error={errors?.cost_center_id ? "Field is required" : ""}
          />
          <div className="">
            <Select
              {...fields?.connect_with}
              values={watch()}
              error={errors?.connect_with ? "Field is required" : ""}
            />
          </div>
        </div>
      </div>
    </FormWrapperLayout>
  );
};

export default BillForm;
