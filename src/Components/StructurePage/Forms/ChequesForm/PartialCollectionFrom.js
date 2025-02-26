import { Button } from "Components/Global/Button";
import { ChevronIcon, EyeIcon, PlusIcon, TrashIcon } from "Components/Icons";
import {
  CheckboxField,
  CurrencyFieldGroup,
  Input,
  Switch,
  Textarea,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import getFormByTableName from "Helpers/Forms/forms";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { Query, QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { ViewEntry } from "Components/Global/ViewEntry";
import { toast } from "react-toastify";
import useCurd from "Hooks/useCurd";
import Btn from "Components/Global/Btn";
import { ErrorText } from "Components/Global/ErrorText";
import { deleteEntry, generateEntryFromChqOperation } from "Helpers/Lib/vouchers-insert";
import { CREATED_FROM_CHQ_OPERATION } from "Helpers/GENERATE_STARTING_DATA";
import { updateChqStatus } from "Helpers/Lib/cheque-helpers";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import Loading from "Components/Global/Loading";
import FormTitle from "Components/Global/FormTitle";

const mergePattern = (pattern, chqValues, setValue) => {

  if (chqValues?.id) {
    setValue("cheque_id", chqValues?.id);
  }
  if (chqValues?.amount) {
    setValue("total_value", chqValues?.amount);
    setValue("total_sum", chqValues?.amount);
    setValue("rest", chqValues?.amount);
  }
  if (pattern?.partial_credit_account_id) {
    setValue("credit_account_id", pattern?.partial_credit_account_id);
  }

  if (pattern?.partial_default_observe_account_is_client) {
    setValue("credit_account_id", chqValues?.account_id);
  }

  if (pattern?.partial_debit_account_id) {
    setValue("debit_account_id", pattern?.partial_debit_account_id);
  }

  if (pattern?.partial_default_account_is_building_bank) {
  }

  if (pattern?.partial_gen_entries) setValue("gen_entries", true);

  if (
    pattern?.partial_move_cost_center_debit ||
    pattern?.partial_move_cost_center_credit
  ) {
    setValue("cost_center_id", chqValues?.cost_center_id);
  }

}

export const PartialCollectionFrom = ({
  chequeId,
  PATTERN_SETTINGS,
  chqValues,
  setPartialNumbers,
  onClose,
  refresh
}) => {
  const name = "op_partial_collection";
  const methods = useForm()
  const {
    watch,
    setError,
    formState: { isDirty, isSubmitSuccessful },
    reset,
    setValue,
    handleSubmit,
    clearErrors
  } = methods
  const { remove, set, insert } = useCurd()
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [number, setNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [maxLength, setMaxLength] = useState(false);
  const { getNextOne, getPreviousOne, getLastOneBy, getFirstOne } = useCurd();
  const queryClient = new QueryClient();

  const partialData = useQuery({
    queryKey: [name, chequeId],
    queryFn: async () => {
      const response = await getLastOneBy(name, "cheque_id", chequeId);
      if (response?.success) {
        onClickAddNew(response?.result?.at(0));
        setMaxLength(response?.result?.at(0)?.number);
      }
    },
  });

  const go = async (key) => {
    queryClient.fetchQuery({
      queryKey: [name, key, chequeId],
      queryFn: async () => {
        const res = key === 'prev' ? await getPreviousOne(name, number) : await getNextOne(name, number);
        if (res?.result?.length) {
          setNumber(res?.result?.at(0)?.number);
          reset(res?.result?.at(0));
        }
      }
    });
  }

  useEffect(() => {
    if (!PATTERN_SETTINGS || chqValues?.partial_collection_status) return;
    mergePattern(PATTERN_SETTINGS, chqValues, setValue);
  }, [PATTERN_SETTINGS, chqValues?.partial_collection_status]);

  const fields = useMemo(() => {
    let list = getFormByTableName(name);
    let hash = {};
    for (const field of list) {
      hash[field?.name] = field;
    }
    return hash;
  }, []);


  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!watch("number")) {
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
              autoClose: true,
            }
          );
          setError("rest", {
            type: "manual",
            message: "Failed to enter value the rest can't be less than 0",
          });
        } else {
          clearErrors("rest");
        }
        setValue("rest", theTotalRest);
        setValue("total_sum", theTotalSum);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  console.log(watch(), 'wta');


  const onClickAddNew = (data) => {
    if (!data) return;
    let total_sum_prev = (data?.total_sum_prev || 0) + data?.amount;

    setValue("id", null);
    setValue("amount", 0);
    setValue("total_sum", 0);
    setValue("total_sum_prev", total_sum_prev || 0);
    setValue("rest", +watch("total_value") - total_sum_prev);
    setValue("cost_center_id", data?.cost_center_id);
    setValue("cheque_id", data?.cheque_id || chqValues?.id);
    setValue("credit_account_id", data?.credit_account_id);
    setValue("debit_account_id", data?.debit_account_id);
    setValue("total_value", chqValues?.amount);
    let num = +data?.number + 1 || 1
    setValue("number", num);
    setNumber(num);
  };

  const onDelete = async () => {
    const response = await remove(name, watch("id"));
    if (response?.success) {

    }
  };

  const updateStatus = async (status) => {
    setIsLoading(true);
    const res = await updateChqStatus({ 'partial_collection_status': true }, chqValues?.id);
    if (res?.success) {
      partialData?.refresh();
    }
    setIsLoading(false);
  };

  const onSubmit = async (value) => {
    if (!isDirty) return;
    setIsLoading(true);

    let res = null;

    if (name === "op_partial_collection" && +watch("rest") < 0) {
      toast.error("Failed to enter value the rest must be more or equal 0");
      return;
    }

    if (watch("id")) {
      res = await set(name, value, watch("id"));
    } else {
      delete value?.id;

      res = await insert(name, { ...value, number });

      if (res?.success) {
        updateStatus();
      }
    }

    if (res?.success) {
      let id = watch("id") || res?.record?.id;
      if (res?.record?.id)
        setMaxLength(res?.record?.number);

      if (id) {
        reset(res?.record);
        toast.success("Successfully inserted into " + name);
      } else {
        toast.success(`Successfully updated ${name}`);
      }

      if (
        PATTERN_SETTINGS?.partial_gen_entries ||
        watch("gen_entries")
      ) {
        if (id) {
          await generateEntryFromChqOperation({
            created_from_id: id,
            created_from: CREATED_FROM_CHQ_OPERATION?.op_partial_collection,
            // created_from_code: CREATED_FROM_CHQ_OPERATION?.[name],
            values: watch(),
          });
        }
      } else deleteEntry(id);
    } else {
      toast.error(res?.error?.detail);
    }
    setIsLoading(false);
  };

  console.log(watch("rest"), 'rest');


  return (
    <>
      {isLoading ? <Loading /> : null}
      <ConfirmModal
        onConfirm={onDelete}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      <FormProvider {...methods}>
        <FormTitle
          name='partial_collection'
          isDirty={isDirty}
          onClose={onClose}
          extraContentBar={
            <>
              <CheckboxField {...{ name: 'feedback', label: 'feedback' }} values={watch()} />
              <CheckboxField {...{ name: 'gen_entries', label: 'gen_entries' }} values={watch()} />
              {watch("id") ? (
                <ViewEntry id={watch("id")} />
              ) : null}
            </>
          }
        />
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="p-4">
          <div className="max-w-3xl w-full">
            <div className="grid grid-cols-3 gap-8 xl:gap-14">
              <div className="flex flex-col gap-2 col-span-2">
                <Input {...fields?.created_at} />
                <CurrencyFieldGroup
                  {...fields?.currency_id}
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
                {/* {watch('rest') < 0 ? <ErrorText>Failed to enter value the rest can't be less than 0</ErrorText> : null} */}
              </div>
            </div>
            <Textarea {...fields?.note} readOnly={true} />
            <div className="grid grid-cols-2 gap-8 xl:gap-14 my-4">
              <div className="flex flex-col gap-2 ">
                <UniqueField
                  {...fields?.commission_debit_id}
                  values={watch()}
                />
                <UniqueField
                  {...fields?.commission_credit_id}
                  values={watch()}
                />
                <UniqueField
                  {...fields?.commission_cost_center_id}
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
                    onClick={() => go('prev')}
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
                    onClick={() => go('next')}
                  >
                    <ChevronIcon className="rtl:rotate-90 ltr:-rotate-90 w-6 h-6 text-inherit" />
                  </button>
                </div>

                {number <= +maxLength ? (
                  <button
                    type="button"
                    onClick={() => onClickAddNew(watch())}
                    className="flex items-center gap-2 px-2 py-1 rounded-md bg-blue-500 text-white"
                  >
                    <PlusIcon className="w-5 h-5" />
                    Add new{" "}
                  </button>
                ) : null}


              </div>
              <div className="flex items-center gap-4">
                {watch("id") ? (
                  <Btn
                    kind="error"
                    type="button"
                    onClick={() => setOpenConfirmation(true)}
                  >
                    <TrashIcon className="w-5 h-5" />
                    Delete
                  </Btn>
                ) : null}

                <Btn
                  loading={isLoading}
                  disabled={isLoading}
                >
                  Save
                </Btn>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
