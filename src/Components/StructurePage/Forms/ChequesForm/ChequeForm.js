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
import { METHODS, resetChequeFields } from "Helpers/constants";
import { ChequeStatus } from "./ChequeStatus";
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
import {
  deleteEntry,
  generateEntryFromCheque,
} from "Helpers/Lib/vouchers-insert";
import { CREATED_FROM_CHQ_CODE } from "Helpers/GENERATE_STARTING_DATA";
import useRefTable from "Hooks/useRefTables";
import { removeNullValues } from "Helpers/functions";
import { useQuery } from "@tanstack/react-query";
import { ViewEntry } from "Components/Global/ViewEntry";

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
  const chqId = params?.id;
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

  useQuery({
    queryKey: ["cheque", "cheque_pattern"],
    queryFn: async () => {
      const response = await ApiActions.read("cheque_pattern", {
        conditions: [{ type: "and", conditions: [["code", "=", +code]] }],
      });
      let pattern = response?.result?.at(0);
      mergePatternWithChequeData(pattern, watch, setValue);
      setPATTERN_SETTINGS(pattern);
    },
  });

  const { isLoading, refetch } = useQuery({
    queryKey: ["cheque", name, code],
    queryFn: async () => {
      const response = await ApiActions.read("cheque", {
        conditions: [
          {
            type: "and",
            conditions: [["id", "=", chqId]],
          },
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
      res = await ApiActions.update("cheque", {
        conditions: [{ type: "and", conditions: [["id", "=", values?.id]] }],
        updates: values,
      });
    } else {
      res = await ApiActions.insert("cheque", {
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
      refetch();

      toast.success(
        chqId
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );

      if (values?.gen_entries || PATTERN_SETTINGS?.auto_gen_entries) {
        if (chq_id) {
          await generateEntryFromCheque({
            created_from_id: chq_id,
            created_from: CREATED_FROM_CHQ_CODE,
            created_from_code: +PATTERN_SETTINGS?.code,
            values,
          });
        } else deleteEntry(chq_id);
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
          chqValues={watch()}
          CACHE_LIST={CACHE_LIST}
          refetch={refetch}
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
                    <ViewEntry id={watch("id")} />
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

              <ChequeStatus
                pattern={PATTERN_SETTINGS}
                onOpenFormOperation={onOpenFormOperation}
                chqValues={watch()}
              />

              <div className="flex justify-between gap-6 items-center mt-4 border-t pt-4">
                <Button title={"Save"} />
              </div>
            </form>
          </FormProvider>
        </div>
      </BlockPaper>
    </>
  );
};

export default ChequeForm;
