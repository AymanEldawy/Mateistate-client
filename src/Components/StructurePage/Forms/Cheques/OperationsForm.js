import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { FormProvider, useForm } from "react-hook-form";
import { Fields } from "../CustomForm/Fields";
import { Button } from "Components/Global/Button";
import { useEffect } from "react";
import { PartialCollectionFrom } from "./PartialCollectionFrom";
import useRefTable from "Hooks/useRefTables";

const mergePatternWithData = async (
  name,
  pattern,
  watch,
  setValue,
  setPattern
) => {
  switch (name?.toLowerCase()) {
    case "op_collection":
      setValue("note", pattern?.statement_collection);
      let patternConfig = {};
      if (pattern?.collection_auto_gen_entries)
        patternConfig.gen_entries = true;
      patternConfig.auto_gen_entries = true;
      if (pattern?.collection_auto_transfer_entry)
        patternConfig.auto_transfer_entry = true;
      if (pattern?.collection_credit_account_id)
        setValue("credit_account_id", pattern?.statement_collection);
      if (pattern?.collection_debit_account_id)
        setValue("debit_account_id", pattern?.statement_collection);

      if (pattern?.collection_default_account_is_building_bank) return;
      if (pattern?.collection_default_date) return;
      if (pattern?.collection_default_observe_account_is_client) return;
      if (pattern?.collection_gen_entries) return;
      if (pattern?.collection_move_cost_center_credit) return;
      if (pattern?.collection_move_cost_center_debit) return;
      // collection

      return;
    case "op_partial_collection":
      return;
    case "op_deportation":
      return;
    case "op_return":
      return;
    default:
      return;
  }
};

export const OperationsForm = ({
  name,
  loading,
  PATTERN_SETTINGS,
  layout,
  onClose,
}) => {
  const { fields, CACHE_LIST, setCACHE_LIST } = useRefTable(name);
  const methods = useForm();
  const {
    getValues,
    handleSubmit,
    formState: { errors, isDirty, dirtyFields, isSubmitting },
    watch,
    setValue,
  } = methods;

  useEffect(() => {
    mergePatternWithData(name, PATTERN_SETTINGS, watch, setValue);
  }, [PATTERN_SETTINGS?.name]);

  const onSubmit = async () => {};

  return (
    <FormProvider {...methods}>
      <FormHeadingTitle title={name?.replace("op_", "")} onClose={onClose} />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {name === "op_partial_collection" ? (
          <PartialCollectionFrom
            errors={errors}
            fields={fields}
            CACHE_LIST={CACHE_LIST}
            popupView
          />
        ) : (
          <>
            <Fields
              customGrid="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              values={getValues()}
              errors={errors}
              fields={fields}
              CACHE_LIST={CACHE_LIST}
            />
            <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
              <Button
                title="Submit"
                loading={loading}
                disabled={!isDirty || isSubmitting || loading}
              />
            </div>
          </>
        )}
      </form>
    </FormProvider>
  );
};
