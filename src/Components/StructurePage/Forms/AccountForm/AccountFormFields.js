import {
  Input,
  Select,
  Textarea,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import getFormByTableName from "Helpers/Forms/forms";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { ErrorText } from "Components/Global/ErrorText";
import {
  ACCOUNT_ASSEMBLY_TYPE_NAME,
  ACCOUNT_DISTRIBUTIVE_TYPE_NAME,
} from "Helpers/GENERATE_STARTING_DATA";

export const AccountFormFields = ({
  fields,
  CACHE_LIST,
  errors,
  totalPercentage,
}) => {
  const { watch } = useFormContext();

  const fieldsHash = useMemo(() => {
    let hash = {};
    for (const field of fields) {
      hash[field?.name] = field;
    }
    return hash;
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <Input
          {...fieldsHash?.internal_number}
          error={errors?.internal_number ? "Field is required" : ""}
        />
        <Input
          {...fieldsHash?.name}
          error={errors?.name ? "Field is required" : ""}
        />

        <Select
          {...fieldsHash?.type}
          error={errors?.type ? "Field is required" : ""}
          
        />
      </div>

      {watch("type") === 1 ? (
        <div className="flex-1 grid grid-cols-1 my-4 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
          {/* <CurrencyFieldGroup
              error={
                errors?.currency ? "Field is required" : ""
              }
              CACHE_LIST={CACHE_LIST}
              list={!!CACHE_LIST ? CACHE_LIST?.currency : []}
            />{" "} */}
          <UniqueField
            {...{ ...fieldsHash?.parent_id, required: watch("type") === 1 }}
            CACHE_LIST={CACHE_LIST}
            list={!!CACHE_LIST ? CACHE_LIST?.account : []}
            error={errors?.parent_id ? "Field is required" : ""}
          />
          <UniqueField
            {...fieldsHash?.final_id}
            CACHE_LIST={CACHE_LIST}
            list={!!CACHE_LIST ? CACHE_LIST?.account : []}
            // values={values}
            error={errors?.final_id ? "Field is required" : ""}
          />
        </div>
      ) : null}
      <Textarea
        {...fieldsHash?.note}
        updatedName={`note`}
        error={errors?.note ? "Field is required" : ""}
      />
      {/* {watch('type') === 2 ? (<></>) : null} */}
      {watch("type") === 3 ? (
        <div
          className={
            errors?.[ACCOUNT_ASSEMBLY_TYPE_NAME]
              ? "border border-red-500 p-2 rounded-md my-2"
              : ""
          }
        >
          {errors?.[ACCOUNT_ASSEMBLY_TYPE_NAME] ? (
            <ErrorText>
              {errors?.[ACCOUNT_ASSEMBLY_TYPE_NAME]?.message}
            </ErrorText>
          ) : null}
          <TableFields
            rowsCount={watch(ACCOUNT_ASSEMBLY_TYPE_NAME)?.length}
            CACHE_LIST={CACHE_LIST}
            errors={errors}
            fields={getFormByTableName(ACCOUNT_ASSEMBLY_TYPE_NAME)}
            tab={ACCOUNT_ASSEMBLY_TYPE_NAME}
            tableError={errors?.[ACCOUNT_ASSEMBLY_TYPE_NAME]}
          />
        </div>
      ) : null}
      {watch("type") === 4 ? (
        <div
          className={
            errors?.[ACCOUNT_DISTRIBUTIVE_TYPE_NAME]
              ? "border border-red-500 p-2 rounded-md my-2"
              : ""
          }
        >
          {errors?.[ACCOUNT_DISTRIBUTIVE_TYPE_NAME] ? (
            <ErrorText>
              {errors?.[ACCOUNT_DISTRIBUTIVE_TYPE_NAME]?.message}
            </ErrorText>
          ) : null}
          <div className=" mt-4 text-lg font-medium flex items-center gap-2">
            <span className="text-blue-600 p-1 rounded-md">
              Used: {totalPercentage || 0}
            </span>
            <span className="bg-gray-300 h-6 w-[2px]" />
            <span className="text-green-600 p-1 rounded-md">
              Rest: {100 - totalPercentage || 100}
            </span>
          </div>
          {totalPercentage > 100 ? (
            <ErrorText>The total percentage must be equal 100</ErrorText>
          ) : null}
          <TableFields
            rowsCount={Math.max(
              watch(ACCOUNT_DISTRIBUTIVE_TYPE_NAME)?.length,
              2
            )}
            CACHE_LIST={CACHE_LIST}
            errors={errors}
            fields={getFormByTableName(ACCOUNT_DISTRIBUTIVE_TYPE_NAME)}
            tab={ACCOUNT_DISTRIBUTIVE_TYPE_NAME}
          />
        </div>
      ) : null}
    </div>
  );
};
