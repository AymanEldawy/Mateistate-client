import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import useFormSteps from "Hooks/useFormSteps";

import { Fields } from "./Fields";
import INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import { FormProvider, useForm } from "react-hook-form";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { ButtonsStepsGroup } from "Components/Global/ButtonsStepsGroup";
import GET_UPDATE_DATE from "Helpers/Lib/operations/global-read-update";
import { useParams } from "react-router-dom";
import { usePopupForm } from "Hooks/usePopupForm";

const FormSteps = ({
  name,
  onClose,
  refetchData,
  layout,
  allowTabs,
  setRecordResponse,
  oldValues = null,
}) => {
  const params = useParams();
  const {
    next,
    back,
    goTo,
    isLast,
    isFirst,
    currentIndex,
    tab,
    formSettings,
    steps,
    fields,
    CACHE_LIST,
    tabNames,
  } = useFormSteps({ name });
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
    watch,
    formState: { errors, isDirty },
    reset,
    setValue,
  } = methods;

  useEffect(() => {
    if (layout !== "update" && oldValues) {
      reset({ ...watch(), ...oldValues });
    }
  }, [oldValues]);

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) return;

    setLoading(true);
    const getTheFunInsert = INSERT_FUNCTION[name];
    const res = await getTheFunInsert({ data: value });

    if (!!setRecordResponse) {
      setRecordResponse({ table: name, response: res });
    }

    if (res?.success) {
      toast.success("Successfully added item in " + name);
      if (!!refetchData) refetchData();
      if (layout !== "update") {
        if (openForm.table) {
          let record = res?.record;
          let { additional } = openForm;
          additional?.setList((prev) => {
            return [...prev, { label: record?.name, value: record?.id }];
          });
          additional?.setValue(additional?.name, record.id);
        }
      }
      // setValues({});
      reset();
    } else {
      toast.error("Failed to add new item in " + name);
    }
    if (!!onClose) onClose();
    setLoading(false);
  };

  return (
    <FormProvider {...methods}>
      <FormHeadingTitleSteps
        name={name}
        steps={steps}
        activeStage={currentIndex}
        goTo={goTo}
        onClose={onClose}
      />
      <div className="h-5" />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {fields?.length ? (
          <>
            {formSettings?.formType === "grid" ? (
              <div key={steps?.[currentIndex]}>
                <TableFields
                  tab={tab}
                  values={watch()?.[tab]}
                  fields={fields}
                  CACHE_LIST={!!CACHE_LIST ? CACHE_LIST : undefined}
                />
              </div>
            ) : (
              <Fields
                tab={tab}
                fields={fields}
                values={watch()?.[tab]}
                errors={errors}
                CACHE_LIST={CACHE_LIST}
              />
            )}
          </>
        ) : null}
        <ButtonsStepsGroup
          isLast={isLast}
          isFirst={isFirst}
          loading={loading}
          steps={steps}
          next={next}
          back={back}
        />
      </form>
    </FormProvider>
  );
};

export default FormSteps;
