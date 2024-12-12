import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import GET_UPDATE_DATE from "Helpers/Lib/global-read-update";
import useCurd from "Hooks/useCurd";
import useFormSteps from "Hooks/useFormSteps";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CACHE_DATA = {};

const PatternsForm = ({ layout }) => {
  const params = useParams();
  const id = params?.id;
  let pattern = params?.pattern;
  const [isLoading, setIsLoading] = useState(false);
  let name = pattern;
  const { insert, set } = useCurd();
  const methods = useForm({
    defaultValues: params?.id
      ? async () => await GET_UPDATE_DATE(name, params?.id)
      : {},
  });

  const {
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    reset,
  } = methods;
  const { currentIndex, goTo, steps, fields, CACHE_LIST } = useFormSteps({
    name: pattern,
  });

  const onDelete = async () => {};

  const onSubmit = async (values) => {
    if (!isDirty) return;

    setIsLoading(true);

    let res = null;

    if (values?.id) {
      res = await set(name, values, values?.id);
    } else {
      res = await insert(name, values);
    }

    if (res?.success) {
      toast.success(
        values?.id
          ? `Successfully update row: ${values?.name} in ${pattern}`
          : "Successfully added item in " + pattern
      );
    } else {
      toast.error(res?.error?.detail);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div key={pattern}>
        <FormProvider {...methods}>
          <BlockPaper>
            <FormHeadingTitleSteps
              // name={pattern}
              steps={steps}
              goTo={goTo}
              activeStage={currentIndex}
              customName={
                <span className="capitalize">
                  {pattern?.replace(/_/g, " ")} ({watch('name')})
                </span>
              }
            />
            <div className="h-5" />
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Fields
                values={watch()}
                fields={fields}
                // tab={tab}
                // values={watch()}
                errors={errors}
                CACHE_LIST={CACHE_LIST}
                customGrid="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              />
              <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
                <Button
                  title={"Save"}
                  classes="ltr:ml-auto rtl:mr-auto"
                  disabled={!isDirty}
                />
              </div>
            </form>
          </BlockPaper>
        </FormProvider>
      </div>
    </>
  );
};

export default PatternsForm;
