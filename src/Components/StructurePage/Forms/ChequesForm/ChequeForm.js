import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import Modal from "Components/Global/Modal/Modal";
import getFormByTableName from "Helpers/Forms/forms";
import { ApiActions } from "Helpers/Lib/api";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { OperationsForm } from "./OperationsForm";
import { FormStepPagination } from "../../../Global/FormStepPagination";
import { getLastNumberByColumn } from "Helpers/Lib/global-insert";
import { METHODS, POPUP_ACTIONS, resetChequeFields } from "Helpers/constants";
import { ChequeStatus } from "./ChequeStatus";
import { EyeIcon } from "Components/Icons";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import {
  CurrencyFieldGroup,
  Input,
  Switch,
  Textarea,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import UniqueFieldGroup from "Components/StructurePage/CustomFields/UniqueFieldGroup";
import Loading from "Components/Global/Loading";
import { autoMergePatternSettingsWithValues } from "Helpers/Lib/contract-helpers";
import { generateEntryFromBill } from "Helpers/Lib/vouchers-insert";
import { CREATED_FROM_CHQ_CODE } from "Helpers/GENERATE_STARTING_DATA";
import useRefTable from "Hooks/useRefTables";
import { removeNullValues } from "Helpers/functions";
import useListView from "Hooks/useListView";
import { useQuery } from "@tanstack/react-query";

const CACHE_CHEQUE_DATA = {};

// deposit_status

const mergePatternWithChequeData = (pattern) => {
  let patternValues = {};

  if (pattern?.auto_gen_entries) {
    patternValues.gen_entries = true;
  }

  return patternValues;
};

const ChequeForm = ({
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
  const [selectedFormOperation, setSelectedFormOperation] = useState({});
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});
  const {
    setNumber,
    number,
    setMaxLength,
    maxLength,
    isLayoutUpdate,
    listOfNumbers,
  } = useListView({
    name: "bill",
    additional: {
      conditions: [{ type: "and", conditions: [["type", "=", +code]] }],
    },
    defaultNumber: oldValues?.number,
  });

  useQuery({
    queryKey: ["cheque", "bill_pattern"],
    queryFn: async () => {
      const response = await ApiActions.read("bill_pattern", {
        conditions: [{ type: "and", conditions: [["code", "=", +code]] }],
      });
      let pattern = response?.result?.at(0);
      mergePatternWithChequeData(pattern, watch, setValue);
      setPATTERN_SETTINGS(pattern);
    },
  });

  const { isLoading, refetch } = useQuery({
    queryKey: ["cheque", name, number, code],
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
    for (const field of getFormByTableName("cheque")) {
      hash[field?.name] = field;
    }
    return hash;
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "without_due_date" && watch(name)) {
        setValue("due_date", null);
        setValue("due_end_date", null);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (oldValues && PATTERN_SETTINGS) {
      reset({
        ...mergePatternWithChequeData(PATTERN_SETTINGS, watch, setValue),
        ...oldValues,
      });
    }
  }, [oldValues, PATTERN_SETTINGS?.id]);

  const onOpenFormOperation = useCallback(
    ({ table, gen_entries, auto_gen_entries, status_name }) => {
      setSelectedFormOperation({
        table,
        status_name,
        pattern: {
          gen_entries,
          auto_gen_entries,
        },
      });
    },
    []
  );

  const onClickAddNew = () => {
    setNumber(+maxLength + 1);
    reset({
      ...resetChequeFields(),
      ...mergePatternWithChequeData(PATTERN_SETTINGS, watch, setValue),
    });
  };

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) return;
    let values = { type: +PATTERN_SETTINGS?.code, ...removeNullValues(value) };

    let res = null;
    let chq_id = watch("id");

    if (layout === "update" || values?.id) {
      res = await ApiActions.update("bill", {
        conditions: [{ type: "and", conditions: [["id", "=", values?.id]] }],
        updates: values,
      });
    } else {
      res = await ApiActions.insert("bill", {
        data: values,
      });
      reset(res?.record);
      chq_id = res?.record?.id;
    }

    if (!!setRecordResponse) {
      setRecordResponse({
        table: name,
        response: res,
        method: values?.id ? METHODS.UPDATE : METHODS.INSERT,
        id: values?.id,
      });
    }

    if (res?.success) {
      if (res?.record?.id && number >= maxLength) setMaxLength((p) => +p + 1);
      refetch();

      toast.success(
        isLayoutUpdate
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );

      if (values?.gen_entries || PATTERN_SETTINGS?.auto_gen_entries) {
        if (chq_id) {
          await generateEntryFromBill({
            created_from_id: chq_id,
            created_from: CREATED_FROM_CHQ_CODE,
            created_from_code: +PATTERN_SETTINGS?.code,
            values,
          });
        }
      }
    } else {
      toast.error(res?.error?.detail);
    }
  };

  return (
    <>
      {isLoading || isSubmitting ? <Loading withBackdrop /> : null}
      <Modal
        open={selectedFormOperation?.table}
        onClose={() => setSelectedFormOperation({})}
        containerClassName="z-[102] p-0"
        bodyClassName={"!p-0"}
        boxClassName={"!shadow-none !p-0"}
        layoutBodyClassName={"!my-0"}
      >
        <OperationsForm
          onClose={() => setSelectedFormOperation({})}
          selectedFormOperation={selectedFormOperation}
          PATTERN_SETTINGS={PATTERN_SETTINGS}
          name={selectedFormOperation?.table || ""}
          oldValues={watch()}
          CACHE_LIST={CACHE_LIST}
        />
      </Modal>
      <BlockPaper
        layoutBodyClassName={popupView ? "!m-0 !p-0" : ""}
        containerClassName={popupView ? "!m-0 !p-0" : ""}
        bodyClassName={popupView ? "!m-0 !p-0" : ""}
        boxClassName={popupView ? "!m-0 !p-0 !shadow-none" : ""}
      >
        <div key={name} className="relative">
          <FormProvider {...methods}>
            <FormHeadingTitle title={name} onClose={outerClose} />
            <div className="h-5" />
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Fields */}
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="flex items-end gap-6">
                  <Switch
                    {...fields?.feedback}
                    values={watch()}
                    error={errors?.feedback ? "Field is required" : ""}
                  />
                  <Switch
                    {...fields?.gen_entries}
                    values={watch()}
                    error={errors?.gen_entries ? "Field is required" : ""}
                  />
                  {watch("id") && PATTERN_SETTINGS?.auto_gen_entries ? (
                    <button
                      type="button"
                      className="bg-blue-500 mt-4 text-white px-2 py-1 rounded-md flex items-center gap-2"
                      onClick={() =>
                        dispatchVoucherEntries({
                          table: "entry_main_data",
                          grid: "entry_grid_data",
                          ref_name: "created_from_id",
                          id: watch("id"),
                        })
                      }
                    >
                      View Entry
                      <EyeIcon />
                    </button>
                  ) : null}
                </div>
                <div className="flex gap-2">
                  <UniqueFieldGroup values={watch()} />
                </div>
              </div>
              <div className="my-4 grid gap-6 grid-cols-2 lg:grid-cols-4">
                <Input
                  {...fields?.internal_number}
                  // inputClassName="bg-gray-100"
                  error={errors?.internal_number ? "Field is required" : ""}
                />
                <Input
                  {...fields?.amount}
                  // inputClassName="bg-gray-100"
                  values={watch()}
                  error={errors?.amount ? "Field is required" : ""}
                />
                <CurrencyFieldGroup
                  CACHE_LIST={CACHE_LIST}
                  list={!!CACHE_LIST ? CACHE_LIST?.currency : []}
                  values={watch()}
                  error={errors?.currency_id ? "Field is required" : ""}
                />
                <Input
                  {...fields?.beneficiary_name}
                  // inputClassName="bg-gray-100"
                  values={watch()}
                  error={errors?.beneficiary_name ? "Field is required" : ""}
                />
                {["parking_id", "shop_id", "apartment_id"]?.map((field) => {
                  let name = field?.replace(/_id/g, "");
                  if (watch(field)) {
                    return (
                      <UniqueField
                        key={field}
                        {...fields?.[field]}
                        table={field?.replace("_id", "")}
                        CACHE_LIST={CACHE_LIST}
                        list={!!CACHE_LIST ? CACHE_LIST?.[name] : []}
                        values={watch()}
                        error={errors?.[field] ? "Field is required" : ""}
                      />
                    );
                  }
                })}

                {[
                  "account_id",
                  "cost_center_id",
                  "observe_account_id",
                  "observe_cost_center_id",
                ]?.map((field) => {
                  let name = field?.replace(/observe_|_id/g, "");
                  return (
                    <UniqueField
                      key={field}
                      {...fields?.[field]}
                      table={field?.replace("_id", "")}
                      CACHE_LIST={CACHE_LIST}
                      list={!!CACHE_LIST ? CACHE_LIST?.[name] : []}
                      values={watch()}
                      error={errors?.[field] ? "Field is required" : ""}
                    />
                  );
                })}

                <div className="flex items-center justify-between">
                  <Switch
                    {...fields?.deposit_status}
                    values={watch()}
                    error={errors?.deposit_status ? "Field is required" : ""}
                  />
                  <Switch
                    {...fields?.without_due_date}
                    values={watch()}
                    error={errors?.without_due_date ? "Field is required" : ""}
                  />
                </div>
                <Input
                  {...fields?.due_date}
                  updatedName={`.due_date`}
                  values={watch()}
                  error={errors?.due_date ? "Field is required" : ""}
                />
                <Input
                  {...fields?.end_due_date}
                  updatedName={`.end_due_date`}
                  values={watch()}
                  error={errors?.end_due_date ? "Field is required" : ""}
                />
                <UniqueField
                  {...fields?.bank_id}
                  CACHE_LIST={CACHE_LIST}
                  list={!!CACHE_LIST ? CACHE_LIST?.bank : []}
                  values={watch()}
                  error={errors?.bank_id ? "Field is required" : ""}
                />
              </div>
              <div className="my-4 grid gap-6 grid-cols-2">
                <Textarea
                  {...fields?.note1}
                  updatedName={`.note1`}
                  values={watch()}
                  error={errors?.note1 ? "Field is required" : ""}
                />
                <Textarea
                  {...fields?.note2}
                  updatedName={`.note2`}
                  values={watch()}
                  error={errors?.note2 ? "Field is required" : ""}
                />
              </div>

              <ChequeStatus onOpenFormOperation={onOpenFormOperation} />

              <div className="flex justify-between gap-6 items-center mt-4 border-t pt-4">
                <FormStepPagination
                  number={number}
                  goTo={setNumber}
                  maxLength={maxLength}
                  isNewOne={number > maxLength}
                  allowActions={watch("id")}
                  setNumber={setNumber}
                  onClickAddNew={onClickAddNew}
                />
                <Button title={watch("id") ? "Modify" : "Submit"} />
              </div>
            </form>
          </FormProvider>
        </div>
      </BlockPaper>
    </>
  );
};

export default ChequeForm;
