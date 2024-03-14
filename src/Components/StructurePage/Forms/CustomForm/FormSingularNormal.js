import { ApiActions } from "Helpers/Lib/api";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { Fields } from "./Fields";
import { useEffect, useState } from "react";
import INSERT_FUNCTION from "../../../../Helpers/Lib/global-insert";
import useRefTable from "Hooks/useRefTables";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useListView from "Hooks/useListView";
import { usePopupForm } from "Hooks/usePopupForm";
import { Button } from "Components/Global/Button";
import Loading from "Components/Global/Loading";
import { removeNullValues } from "Helpers/functions";

const FormSingularNormal = ({
  onClose,
  name,
  layout,
  oldValues,
  setRecordResponse,
}) => {
  const { isLayoutUpdate, setMaxLength } = useListView({ name });
  const { appendNewRecord } = usePopupForm();
  const methods = useForm({
    defaultValues: {},
  });
  const {
    reset,
    watch,
    setValue,
    errors,
    formState: { isDirty },
    handleSubmit,
  } = methods;
  const { fields, CACHE_LIST, setCACHE_LIST } = useRefTable(name);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (layout !== "update" && oldValues) {
      reset({ ...oldValues });
    }
  }, [oldValues]);

  const onSubmit = async (value) => {
    if (!isDirty) return;
    setIsLoading(true);

    let values = removeNullValues(value);
    let res = null;

    if (isLayoutUpdate) {
      res = await ApiActions.update(name, {
        conditions: [{ type: "and", conditions: [["id", "=", watch("id")]] }],
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
        isLayoutUpdate
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );

      if (!!setRecordResponse) {
        setRecordResponse({ table: name, response: res });
      }

      if (!isLayoutUpdate) {
        setMaxLength((prev) => +prev + 1);
        await appendNewRecord(res);
        reset();
      }
    } else {
      toast.error(res?.error?.detail);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? <Loading withBackdrop /> : null}

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormHeadingTitle title={name} onClose={onClose} />
          <Fields
            values={watch()}
            errors={errors}
            CACHE_LIST={CACHE_LIST}
            fields={fields}
          />
          <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
            <Button
              title={watch("id") ? "Modify" : "Submit"}
              classes="ltr:ml-auto rtl:mr-auto"
              disabled={!isDirty}
            />
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default FormSingularNormal;
