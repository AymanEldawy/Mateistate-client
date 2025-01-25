import { FormProvider, useForm } from "react-hook-form";
import { Fields } from "../CustomForm/Fields";
import { Button } from "Components/Global/Button";
import { useEffect, useMemo, useState } from "react";
import { PartialCollectionFrom } from "./PartialCollectionFrom";
import { ApiActions } from "Helpers/Lib/api";
import { toast } from "react-toastify";
import Loading from "Components/Global/Loading";
import {
  CHQ_RECEIVED_CODE,
  CREATED_FROM_CHQ_OPERATION,
} from "Helpers/GENERATE_STARTING_DATA";
import {
  deleteEntry,
  generateEntryFromChqOperation,
} from "Helpers/Lib/vouchers-insert";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import { TrashIcon } from "Components/Icons";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import { updateChqStatus } from "Helpers/Lib/cheque-helpers";
import { ViewEntry } from "Components/Global/ViewEntry";
import useCurd from "Hooks/useCurd";
import FormTitle from "Components/Global/FormTitle";
import { CheckboxField } from "Components/StructurePage/CustomFields";
import getFormByTableName from 'Helpers/Forms/forms';

const getBuildingBank = async (values) => {
  let unit = "";
  switch (true) {
    case values?.shop_id:
      unit = `shop`;
      break;
    case values?.parking_id:
      unit = `parking`;
      break;
    default:
      unit = `apartment`;
      break;
  }
  const unitRes = await ApiActions.read(unit, {
    conditions: [
      {
        type: "and",
        conditions: [["cost_center_id", "=", values.cost_center_id]],
      },
    ],
    columns: ["building_id"],
  });

  const buildingRes = await ApiActions.read("building", {
    conditions: [
      {
        type: "and",
        conditions: [["id", "=", unitRes?.result?.at(0)?.building_id]],
      },
    ],
    columns: ["building_bank_account_id", "building_cheque_account_id"],
  });
  let building = buildingRes?.result?.at(0);

  return {
    bank_id: building?.building_bank_account_id,
    cheque_id: building?.building_cheque_account_id,
  };
};

const mergePatternWithData = async (
  name,
  pattern,
  watch,
  setValue,
  chqValues,
  setRefresh,
) => {
  setValue("amount", chqValues?.amount);
  setValue("cheque_id", chqValues?.id);
  setValue("commission_cost_center_id", chqValues?.cost_center_id);

  console.log(watch(), '-dsdsdsdsd', pattern);

  // 
  // commission_percentage
  // commission_value

  if (pattern?.commission_credit_account_id) {
    setValue('commission_credit_id', pattern?.commission_credit_account_id)
  }

  if (pattern?.commission_debit_account_id) {
    setValue('commission_debit_id', pattern?.commission_debit_account_id)
  }
  // if (
  //   pattern?.collection_move_cost_center_credit ||
  //   pattern?.collection_move_cost_center_debit
  // ) {
  // }


  // commission_amount_from_building
  // commission_default_account_is_building_owner
  // commission_default_observe_is_revenue_account
  // commission_move_cost_center_credit
  // commission_move_cost_center_debit
  // commission_type



  switch (name?.toLowerCase()) {
    case "op_collection":
      setValue("note", pattern?.statement_collection);
      let patternConfig = {};
      if (pattern?.collection_auto_gen_entries)
        patternConfig.gen_entries = true;
      patternConfig.auto_gen_entries = true;
      if (pattern?.collection_auto_transfer_entry)
        patternConfig.auto_transfer_entry = true;

      // rewrite using pattern code
      // if (chqValues?.client_id) {
      //   setValue("credit_account_id", chqValues?.client_id);
      // } else {
      if (+pattern?.code === CHQ_RECEIVED_CODE) {
        setValue("credit_account_id", pattern?.collection_credit_account_id);
      }
      // }
      // if (chqValues?.observe_account_id) {
      //   setValue("debit_account_id", chqValues?.observe_account_id);
      // } else {
      if (+pattern?.code === CHQ_RECEIVED_CODE) {
        setValue("debit_account_id", pattern?.collection_debit_account_id);
      } // else

      if (pattern?.collection_gen_entries) setValue("gen_entries", true);
      if (pattern?.collection_default_date === 2) {
        setValue("created_at", chqValues?.due_date);
      } else {
        setValue("created_at", new Date());
      }
      // }
      // rewrite using pattern code

      if (pattern?.collection_default_account_is_building_bank) {
        // get building bank
      }

      if (pattern?.collection_default_observe_account_is_client) {
        setValue("credit_account_id", chqValues?.account_id, { shouldDirty: true });
      }

      if (
        pattern?.collection_move_cost_center_credit ||
        pattern?.collection_move_cost_center_debit
      ) {
        setValue("cost_center_id", chqValues?.cost_center_id);
      }


      const buildingAccounts = await getBuildingBank(chqValues);
      setValue("debit_account_id", buildingAccounts?.bank_id);
      setValue("credit_account_id", buildingAccounts?.cheque_id);
      break;

    case "op_partial_collection":
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

      break;

    case "op_return":
      if (pattern?.returnable_gen_entries) setValue("gen_entries", true);
      if (pattern?.returnable_credit_account_id) {
        setValue("credit_account_id", pattern?.returnable_credit_account_id);
      }
      if (pattern?.return_default_observe_account_is_client) {
        setValue("credit_account_id", chqValues?.account_id);
      }
      setValue("debit_account_id", chqValues?.account_id);
      // if (pattern?.returnable_default_account_is_client) {
      //   setValue("debit_account_id", chqValues?.account_id);
      // }

      if (pattern?.returnable_debit_account_id) {
        setValue("debit_account_id", pattern?.returnable_debit_account_id);
      }

      // if(pattern?.returnable_active_operations)

      if (pattern?.returnable_default_date === 2) {
        setValue("created_at", chqValues?.due_date);
      } else {
        setValue("created_at", new Date());
      }

      if (pattern?.returnable_default_observe_account_is_building_bank) {
        //  get building bank
      }

      if (
        pattern?.returnable_move_cost_center_credit ||
        pattern?.returnable_move_cost_center_debit
      )
        setValue("cost_center_id", chqValues?.cost_center_id);

      break;
    default:
      break;
  }
  setRefresh(p => !p)
};

export const OperationsForm = ({
  name,
  loading,
  PATTERN_SETTINGS,
  layout,
  onClose,
  chqValues,
  selectedFormOperation,
  refetch,
}) => {
  const { dispatchVoucherEntries } = useVoucherEntriesView();
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeletedSuccess, setIsDeletedSuccess] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [partialNumbers, setPartialNumbers] = useState(0);
  const { remove, set, insert, getOneBy } = useCurd();
  const methods = useForm({
    defaultValues: {},
  });
  const {
    getValues,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
    watch,
    setValue,
    reset,
  } = methods;

  const fields = useMemo(
    () => getFormByTableName(name),
    [name]
  );

  useEffect(() => {
    if (
      !name ||
      !PATTERN_SETTINGS?.name ||
      !chqValues?.id ||
      !selectedFormOperation?.table
    )
      return;

    getOperationData();

    // return () => {
    //   reset({
    //     credit_account_id: null,
    //     debit_account_id: null,
    //     note: "",
    //   });
    // };
  }, [PATTERN_SETTINGS?.name, name, chqValues]);

  const getOperationData = async () => {
    const response = await getOneBy(name, chqValues?.id, "cheque_id");
    let data = response?.result?.at(0);
    if (response?.success && data?.id) {
      reset(data);
    } else {
      mergePatternWithData(name, PATTERN_SETTINGS, watch, setValue, chqValues, setRefresh);
    }
  };

  const onDelete = async () => {
    const response = await remove(name, watch("id"));
    if (response?.success) {
      setIsDeletedSuccess(true);
      updateStatus(false);
    }
  };

  const updateStatus = async (status) => {
    if (
      selectedFormOperation?.status_name === "partial_collection_status" &&
      partialNumbers > 1
    )
      return;

    let updates = {
      [selectedFormOperation?.status_name]: status,
    };
    await updateChqStatus(updates, chqValues?.id);
    refetch();
  };


  // Handle submit
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

      res = await insert(name, value);

      if (res?.success) {
        updateStatus(true);
      }
    }

    if (res?.success) {
      let id = watch("id") || res?.record?.id;

      if (id) {
        reset(res?.record);
        toast.success("Successfully inserted into " + name);
      } else {
        toast.success(`Successfully updated ${name}`);
      }

      if (
        selectedFormOperation?.pattern?.auto_gen_entries ||
        watch("gen_entries")
      ) {
        if (id) {
          await generateEntryFromChqOperation({
            created_from_id: id,
            created_from: CREATED_FROM_CHQ_OPERATION?.[name],
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

  // console.log(watch(), 'called'  );


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
          name={name}
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
          {name === "op_partial_collection" ? (
            <PartialCollectionFrom
              errors={errors}
              fields={fields}
              chequeId={chqValues?.id}
              PATTERN_SETTINGS={PATTERN_SETTINGS}
              dispatchVoucherEntries={dispatchVoucherEntries}
              popupView
              chqValues={chqValues}
              isLoading={isLoading}
              setOpenConfirmation={setOpenConfirmation}
              isDeletedSuccess={isDeletedSuccess}
              setIsDeletedSuccess={setIsDeletedSuccess}
              setPartialNumbers={setPartialNumbers}
            />
          ) : (
            <>
              <Fields
                customGrid="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                values={getValues()}
                errors={errors}
                fields={fields}
              />
              <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">

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
                    title="Save"
                    loading={loading}
                    disabled={isSubmitting || loading}
                  />
                </div>
              </div>
            </>
          )}
        </form>
      </FormProvider>
    </>
  );
};
