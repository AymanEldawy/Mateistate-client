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

const CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const FormSteps = ({ name, onClose, refetchData, oldValues }) => {
  const {
    next,
    back,
    isLast,
    currentIndex,
    // errors,
    handelChangeField,
    handelFieldUpload,
    tab,
    formSettings,
    steps,
    // setValues,
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
    setValue(names, value);
    console.log(
      "🚀 ~ file: FormSteps.js:52 ~ handleInputChange ~ names:",
      tab,
      names
    );
  };

  console.log(watch());
  // Handel Submit
  const onSubmit = async (value) => {
    console.log("🚀 ~ file: FormSteps.js:62 ~ onSubmit ~ value:", value);
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

  console.log(formSettings, 'formSettings');
  return (
    <FormProvider {...methods}>
      <FormHeadingTitleSteps
        name={name}
        steps={steps}
        // changeTab={goTo}
        activeStage={currentIndex}
      />
      <div className="h-5" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields?.length ? (
          <>
            {formSettings?.formType === "grid" ? (
              <div key={steps?.[currentIndex]}>
                <TableForm
                  activeStage={tab}
                  values={watch()?.[tab]}
                  // setValues={setValues}
                  handleInputChange={handleInputChange}
                  fields={fields}
                  getCachedList={!!getCachedList ? getCachedList : undefined}
                />
              </div>
            ) : (
              <>
                {/* {formSettings?.formType === "gallery" ? (
                  <GalleryForm
                    fields={fields}
                    values={watch()?.[tab]}
                    errors={errors}
                    handelFieldUpload={handelFieldUpload}
                    handelChangeField={handelChangeField}
                    getCachedList={getCachedList}
                    handleInputChange={handleInputChange}
                  />
                ) : (
                  )} */}
                  <Fields
                    fields={fields}
                    values={watch()?.[tab]}
                    errors={errors}
                    handelFieldUpload={handelFieldUpload}
                    handelChangeField={handelChangeField}
                    getCachedList={getCachedList}
                    handleInputChange={handleInputChange}
                  />
              </>
            )}
          </>
        ) : null}
        <div className="flex justify-between gap-4 items-center mt-4">
          {steps ? <Button title="Back" onClick={back} type="button" /> : null}
          <Button title={isLast() ? "Submit" : "next"} loading={loading} />
        </div>
      </form>
    </FormProvider>
  );
};

export default FormSteps;
