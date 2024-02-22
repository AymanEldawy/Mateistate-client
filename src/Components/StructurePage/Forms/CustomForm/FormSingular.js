import { FormProvider } from "react-hook-form";

import { Button } from "Components/Global/Button";

import { toast } from "react-toastify";
import { ApiActions } from "Helpers/Lib/api";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { Fields } from "./Fields";
import { useParams } from "react-router-dom";
import INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import { withFormSingular } from "HOC/withFormSingular";
import { usePopupForm } from "Hooks/usePopupForm";
import { useEffect } from "react";
import { getLastNumberByColumn } from "./../../../../Helpers/Lib/operations/global-insert";

const automaticChangesOnAccount = async (name, watch, setValue) => {
  if (name === "parent_id") {
    const response = await ApiActions.read("account", {
      conditions: [
        { type: "and", conditions: [["id", "=", watch("parent_id")]] },
      ],
    });
    if (response?.success) {
      const number = await getLastNumberByColumn(
        "account",
        "parent_id",
        watch("parent_id"),
        "number"
      );
      let record = response?.result?.at(0);
      setValue("final_id", record?.final_id || record?.parent_id);
      setValue("number", +number + 1);
    }
  }
};

const FormSingular = withFormSingular((props) => {
  const {
    name,
    loading,
    fields,
    CACHE_LIST,
    setLoading,
    layout,
    onClose,
    refetchData,
  } = props;
  const {
    getValues,
    handleSubmit,
    formState: { errors, isDirty, dirtyFields, isSubmitting },
    reset,
    setValue,
    watch,
  } = props?.methods;
  const params = useParams();
  const { openForm } = usePopupForm();

  useEffect(() => {
    let isAccount = name === "account";
    const subscription = watch((value, { name, type }) => {
      if (isAccount) {
        automaticChangesOnAccount(name, watch, setValue);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

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
      if (INSERT_FUNCTION?.[name]) {
        const getTheFunInsert = INSERT_FUNCTION[name];
        res = await getTheFunInsert(values);
      } else {
        res = await ApiActions.insert(name, {
          data: values,
        });
      }
    }

    if (res?.success) {
      toast.success(
        layout === "update"
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );

      if (layout !== "update") {
        if (openForm.table) {
          let record = res?.record;
          let { additional } = openForm;
          additional?.setList((prev) => {
            return [...prev, { label: record?.name, value: record?.id }];
          });
          additional?.setValue(additional?.name, record.id);
        }

        reset();
      }

      if (!!onClose) onClose();
      if (!!refetchData) refetchData();
      // reset form
    } else {
      toast.error("Failed to add new item in " + name);
    }
    setLoading(false);
  };

  return (
    <FormProvider {...props?.methods}>
      <FormHeadingTitle title={name} onClose={onClose} />
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
            disabled={!isDirty || isSubmitting || loading}
          />
        </div>
      </form>
    </FormProvider>
  );
});

export default FormSingular;
