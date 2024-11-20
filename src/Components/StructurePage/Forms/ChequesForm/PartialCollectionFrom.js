import { Button } from "Components/Global/Button";
import { ChevronIcon, EyeIcon, PlusIcon, TrashIcon } from "Components/Icons";
import {
  CurrencyFieldGroup,
  Input,
  Switch,
  Textarea,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import getFormByTableName from "Helpers/Forms/forms";
import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { ViewEntry } from "Components/Global/ViewEntry";
import { toast } from "react-toastify";

export const PartialCollectionFrom = ({
  CACHE_LIST,
  chequeId,
  PATTERN_SETTINGS,
  dispatchVoucherEntries,
  errors,
  isLoading,
  setOpenConfirmation,
  isDeletedSuccess,
  setPartialNumbers,
  setIsDeletedSuccess,
}) => {
  const name = "op_partial_collection";
  const {
    watch,
    setError,
    formState: { isDirty, isSubmitSuccessful },
    reset,
    setValue,
  } = useFormContext();
  const [number, setNumber] = useState(1);
  const [maxLength, setMaxLength] = useState(1);
  const [listData, setListData] = useState([]);

  const partialQueryClient = useQuery({
    queryKey: [name, chequeId],
    queryFn: async () => {
      const response = await ApiActions.read(name, {
        conditions: [
          { type: "and", conditions: [["cheque_id", "=", chequeId]] },
        ],
      });
      if (response?.success) {
        setListData(response?.result);
        setMaxLength(response?.result?.length);
        setPartialNumbers(response?.result?.length);
        let data = response?.result?.at(number - 1);
        reset(data);
        return data;
      }
    },
  });

  const fields = useMemo(() => {
    let list = getFormByTableName(name);
    let hash = {};
    for (const field of list) {
      hash[field?.name] = field;
    }
    return hash;
  }, []);

  useEffect(() => {
    if (number <= maxLength) {
      reset(listData?.[number - 1]);
    }
  }, [number]);

  useEffect(() => {
    if (isSubmitSuccessful || isDeletedSuccess) {
      partialQueryClient?.refetch();
      setIsDeletedSuccess(false);
    }
  }, [isSubmitSuccessful, isDeletedSuccess]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!watch("number")) {
        setValue("number", number);
      }
      if (name === "amount") {
        let amount = +watch("amount") || 0;
        let prev = +watch("total_sum_prev") || 0;
        let total = +watch("total_value") || 0;

        let theTotalRest = total - prev - amount;
        let theTotalSum = prev + amount;

        if (theTotalRest < 0) {
          toast.error(
            "Failed to enter value the rest can't be less than 0",
            {
              autoClose: false,
            }
          );
          setError("rest", {
            type: "manual",
            message: "Failed to enter value the rest can't be less than 0",
          });
        }
        setValue("rest", theTotalRest);
        setValue("total_sum", theTotalSum);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onClickAddNew = () => {
    let total_sum_prev = listData?.reduce((result, curr) => {
      const currAmount = curr ? +curr.amount : 0;
      return result + currAmount;
    }, 0);

    setValue("id", null);
    setValue("amount", 0);
    setValue("total_sum", 0);
    setValue("total_sum_prev", total_sum_prev);
    setValue("rest", +watch("total_value") - total_sum_prev);
    setValue("total_value", watch("total_value"));
    setNumber(+maxLength + 1);
    setValue("number", +maxLength + 1);
  };

  return (
    <div className="md:w-[550px] w-full">
      <div className="grid grid-cols-2 gap-8 xl:gap-14 items-center">
        <Input {...fields?.created_at} />
        <div className="flex items-end justify-end gap-2">
          <Switch {...fields?.feedback} />
          <Switch {...fields?.gen_entries} />
          {watch("id") && PATTERN_SETTINGS?.auto_gen_entries ? (
            <ViewEntry id={watch("id")} />
          ) : null}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 xl:gap-14 my-4">
        <div className="flex flex-col gap-2 ">
          <CurrencyFieldGroup
            {...fields?.currency_id}
            CACHE_LIST={CACHE_LIST}
            list={!!CACHE_LIST ? CACHE_LIST?.currency : []}
          />
          <Input {...fields?.amount} />
          {["debit_account_id", "credit_account_id", "cost_center_id"]?.map(
            (field) => {
              let name =
                field?.indexOf("cost_center") !== -1
                  ? "cost_center"
                  : "account";

              return (
                <UniqueField
                  key={field}
                  {...fields?.[field]}
                  table={field?.replace("_id", "")}
                  CACHE_LIST={CACHE_LIST}
                  list={!!CACHE_LIST ? CACHE_LIST?.[name] : []}
                  values={watch()}
                />
              );
            }
          )}
        </div>
        <div className="flex flex-col gap-2 ">
          {["total_value", "total_sum_prev", "total_sum", "rest"]?.map(
            (field) => (
              <Input {...fields?.[field]} key={field} readOnly={true} />
            )
          )}
        </div>
      </div>
      <Textarea {...fields?.note} readOnly={true} />
      <div className="grid grid-cols-2 gap-8 xl:gap-14 my-4">
        <div className="flex flex-col gap-2 ">
          <UniqueField
            {...fields?.commission_debit_id}
            CACHE_LIST={CACHE_LIST}
            list={!!CACHE_LIST ? CACHE_LIST?.account : []}
            values={watch()}
          />
          <UniqueField
            {...fields?.commission_credit_id}
            CACHE_LIST={CACHE_LIST}
            list={!!CACHE_LIST ? CACHE_LIST?.account : []}
            values={watch()}
          />
          <UniqueField
            {...fields?.commission_cost_center_id}
            CACHE_LIST={CACHE_LIST}
            list={!!CACHE_LIST ? CACHE_LIST?.cost_center : []}
            values={watch()}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <Input {...fields?.commission_percentage} />
          <Input {...fields?.commission_value} />
          <Input {...fields?.commission_note} />
        </div>
      </div>
      <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center gap-2 bg-blue-100 dark:bg-[#f1f1f121] dark:text-white rounded-2xl">
            <button
              disabled={+number === 1}
              type="button"
              onClick={() => setNumber(number - 1)}
              className="bg-blue-500 text-white disabled:text-gray-300 dark:disabled:!text-gray-700 disabled:opacity-90 disabled:bg-gray-100 rounded-md shadow flex items-center justify-center p-1"
            >
              <ChevronIcon className="rtl:-rotate-90 ltr:rotate-90 w-6 h-6 text-inherit" />
            </button>
            <span className="min-w-[40px] text-center font-medium text-lg">
              {number} / {maxLength}
            </span>
            <button
              disabled={number >= maxLength}
              type="button"
              className="bg-blue-500 text-white disabled:bg-gray-100 rounded-md shadow flex items-center justify-center p-1"
              onClick={() => setNumber(+number + 1)}
            >
              <ChevronIcon className="rtl:rotate-90 ltr:-rotate-90 w-6 h-6 text-inherit" />
            </button>
          </div>
          {number <= +maxLength && +watch("rest") > 0 ? (
            <button
              type="button"
              onClick={onClickAddNew}
              className="flex items-center gap-2 px-2 py-1 rounded-md bg-blue-500 text-white"
            >
              <PlusIcon className="w-5 h-5" />
              Add new{" "}
            </button>
          ) : null}
        </div>
        <div className="flex items-center gap-4">
          {watch("id") ? (
            <button
              type="button"
              onClick={() => setOpenConfirmation(true)}
              className={`flex items-center gap-2 px-2 py-1 rounded-md bg-red-500 text-white`}
            >
              <TrashIcon className="w-5 h-5" />
              Delete
            </button>
          ) : null}

          <Button
            title="Submit"
            loading={isLoading}
            disabled={!isDirty || isLoading}
          />
        </div>
      </div>
    </div>
  );
};
