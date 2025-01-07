import useFormSteps from "Hooks/useFormSteps";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { Fields } from "../CustomForm/Fields";
import { toast } from "react-toastify";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import { getResetFields } from "Helpers/Lib/global-reset";
import TableFields from "Components/TableComponents/TableFields";
import { MaterialFormStepOne } from "./MaterialFormStepOne";
import { GET_UPDATE_DATE_BY_NUMBER } from "Helpers/Lib/global-read-update";
import useCurd from "Hooks/useCurd";
import FormLayout from "../FormWrapperLayout/FormLayout";

const MaterialForm = ({ popupView, onClose }) => {
  const name = "material";
  const params = useParams();
  const navigate = useNavigate();
  const materialId = params?.id;
  const { remove } = useCurd();
  const methods = useForm({
    defaultValues: getResetFields(name),
  });

  const {
    goTo,
    currentIndex,
    tab,
    steps,
    fields,
    CACHE_LIST,
    setCurrentIndex,
    formSettings,
  } = useFormSteps({ name });
  console.log(steps, "steps");

  const {
    reset,
    watch,
    formState: { isDirty, errors },
    setValue,
  } = methods;
  console.log(tab, "-dasdfdf");

  const { isLoading } = useQuery({
    queryKey: [name, materialId],
    queryFn: async () => {
      const data = await GET_UPDATE_DATE_BY_NUMBER.material(materialId);
      reset(data);
    },
  });

  useEffect(() => {
    if(!materialId) {
      setValue('material.defaults1', true)
    }
  }, [materialId])


  
    useEffect(() => {
      const subscription = watch((value, { name, type }) => {

      });
      return () => subscription.unsubscribe();
    }, [watch]);

  const onDelete = async () => {
    let data = watch(name);
    const response = await remove(name, materialId);
    navigate(-1);
  };

  const onSubmit = async (value) => {
    if (!isDirty) return;

    const getTheFunInsert = INSERT_FUNCTION?.material;
    const res = await getTheFunInsert(value);

    if (res?.success) {
      toast.success("Successfully added item in material");
    } else {
      if (res?.constraint?.indexOf('material_name_key"') !== -1) {
        toast.error(`Field to insert material, Name is already exist.`);
      } else {
        toast.error(res?.error?.detail);
      }
    }
  };

  console.log(watch());
  
  return (
    <FormLayout
      name={name}
      isLoading={isLoading}
      onSubmit={onSubmit}
      onClose={onClose}
      methods={methods}
      steps={steps}
      goTo={goTo}
      activeStage={currentIndex}
    >
      {formSettings?.formType === "grid" ? (
        <TableFields
          tab={tab}
          errors={errors}
          formSettings={formSettings}
          CACHE_LIST={!!CACHE_LIST ? CACHE_LIST : undefined}
          fields={fields}
          values={watch()?.[tab]}
          rowsCount={watch()?.[tab]?.length}
        />
      ) : (
        <>
          {currentIndex === 0 ? (
            <MaterialFormStepOne
              tab={tab}
              fields={fields}
              values={watch()?.[tab]}
              errors={errors}
              CACHE_LIST={CACHE_LIST}
            />
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
      )}
    </FormLayout>
  );
};

export default MaterialForm;
