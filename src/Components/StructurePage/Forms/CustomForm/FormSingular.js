import { useEffect, useMemo, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { Button } from "Components/Global/Button";

import { toast } from "react-toastify";
import { ApiActions } from "Helpers/Lib/api";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { Fields } from "./Fields";
import { useParams } from "react-router-dom";
import GET_UPDATE_DATE from "Helpers/Lib/operations/global-read-update";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { usePopupForm } from "Hooks/usePopupForm";
import { SHOULD_GENERATE_ENTRIES } from "Helpers/constants";

let CACHE_LIST = {};

const FormSingular = ({ name, onClose, refetchData, layout, oldValues }) => {
  const { refTable } = usePopupForm();
  const params = useParams();
  const [refresh, setRefresh] = useState(false);
  const { openForm } = usePopupForm();
  const methods = useForm({
    defaultValues:
      layout === "update"
        ? async () => await GET_UPDATE_DATE(name, params?.id)
        : oldValues || {},
  });
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    reset,
    formState: { errors, isDirty, dirtyFields, isSubmitting },
    getValues,
    setValue,
    watch,
  } = methods;

  useEffect(() => {
    if (layout !== "update" && oldValues) {
      reset(oldValues);
    }
  }, [oldValues]);

  const fields = useMemo(() => getFormByTableName(name), [name]);

  useEffect(() => {
    getRefTables();
  }, [name]);

  useEffect(() => {
    if (refTable?.isClosed) {
      reFetchRefTable(refTable?.table);
    }
  }, [refTable?.isClosed]);

  const reFetchRefTable = async (table) => {
    const response = await ApiActions.read(table);
    if (response?.result?.length) {
      CACHE_LIST[table] = response?.result;
      setRefresh((p) => !p);
    }
  };

  const getRefTables = async () => {
    if (!fields?.length) return;

    for (const field of fields) {
      if (field.is_ref) {
        const response = await ApiActions.read(field?.ref_table);
        CACHE_LIST[field?.ref_table] = response?.result;

        for (const item of response?.result) {
          CACHE_LIST[item.id] = item.name || item.number || item.id;
        }
      }
    }
  };

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) return;
    setLoading(true);

    let values = {};
    for (const key in value) {
      let val = value[key];
      if (val !== undefined && val !== null && val !== "") {
        values[key] = val;
      }
    }

    let res = null;

    if (layout === "update") {
      res = await ApiActions.update(name, {
        conditions: [{ type: "and", conditions: [["id", "=", params?.id]] }],
        updates: values,
      });
    } else {
      res = await ApiActions.insert(name, {
        data: values,
      });
    }
    
    if (SHOULD_GENERATE_ENTRIES?.[name] && openForm?.gen_entries) {
      console.log("called", value, name, params, openForm);
    }

    if (res?.success) {
      toast.success(
        layout === "update"
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );
      if (!!onClose) onClose();
      if (!!refetchData) refetchData();
      // reset form
      reset();
    } else {
      toast.error("Failed to add new item in " + name);
    }
    setLoading(false);
  };

  return (
    <FormProvider {...methods}>
      <FormHeadingTitle title={name} />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Fields
          values={getValues()}
          errors={errors}
          CACHE_LIST={CACHE_LIST}
          fields={fields}
        />
        <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
          <Button
            title="Submit"
            loading={loading}
            disabled={!isDirty || isSubmitting}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default FormSingular;
