import { useState } from "react";
import { toast } from "react-toastify";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import useFormSteps from "Hooks/useFormSteps";

import { Fields } from "./Fields";
import INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import TableForm from "./TableForm";
import { GalleryForm } from "./GalleryForm";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { ButtonsStepsGroup } from "Components/Global/ButtonsStepsGroup";

const CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const FormSteps = ({ name, onClose, refetchData, oldValues, allowTabs }) => {
  const {
    next,
    back,
    goTo,
    isLast,
    currentIndex,
    tab,
    formSettings,
    steps,
    fields,
    getCachedList,
  } = useFormSteps({ name, oldValues });

  const methods = useForm({ defaultValues: oldValues });
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = methods;

  const handleInputChange = (name, value) => {
    let names = `${[tab]}.${[name]}`;
    setValue(names, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  // Handel Submit
  const onSubmit = async (value) => {
    console.log("🚀 ~ onSubmit ~ value:", value);
    next();
    if (!isLast()) return;
    setLoading(true);
    const getTheFunInsert = INSERT_FUNCTION[name];
    const res = await getTheFunInsert({ data: { test: "tes", ...value } });

    if (res?.success) {
      toast.success("Successfully added item in " + name);
      if (!!refetchData) refetchData();
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
        // changeTab={(tabIndex) => {
        //   if (allowTabs) goTo(tabIndex);
        // }}
        activeStage={currentIndex}
      />
      <div className="h-5" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields?.length ? (
          <>
            {formSettings?.formType === "grid" ? (
              <div key={steps?.[currentIndex]}>
                <TableFields
                  activeStage={tab}
                  values={watch()?.[tab]}
                  handleInputChange={handleInputChange}
                  fields={fields}
                  getCachedList={!!getCachedList ? getCachedList : undefined}
                />
              </div>
            ) : (
              <Fields
                tab={tab}
                fields={fields}
                values={watch()?.[tab]}
                errors={errors}
                getCachedList={getCachedList}
                handleInputChange={handleInputChange}
              />
            )}
          </>
        ) : null}
        <ButtonsStepsGroup
          isLast={isLast}
          loading={loading}
          steps={steps}
          back={back}
        />
      </form>
    </FormProvider>
  );
};

export default FormSteps;
