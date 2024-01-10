import BlockPaper from "Components/BlockPaper/BlockPaper";
import { Button } from "Components/Global/Button";
import { ButtonsStepsGroup } from "Components/Global/ButtonsStepsGroup";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import { GalleryForm } from "Components/StructurePage/Forms/CustomForm/GalleryForm";
import TableForm from "Components/StructurePage/Forms/CustomForm/TableForm";
import Installment from "Components/StructurePage/Installment/Installment";
import { ApiActions } from "Helpers/Lib/api";
import INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import useFormSteps from "Hooks/useFormSteps";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Patterns = () => {
  const params = useParams();
  const name = params?.name;
  const type = params?.type;
  const contractAssetsType = name?.split("_").at(0);
  const [openInstallmentForm, setOpenInstallmentForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const method = useForm();
  const {
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = method;

  const {
    next,
    back,
    isLast,
    currentIndex,
    tab,
    formSettings,
    steps,
    fields,
    getCachedList,
  } = useFormSteps({ name });

  const handleInputChange = (name, value) => {
    setValue(name, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  // Handel Submit
  const onSubmit = async (value) => {
    next();
    if (!isLast()) return;
    setLoading(true);
    let values = {};
    // for (const key in value) {
    //   let val = value[key];
    //   if (val !== undefined && val !== null) {
    //     values[key] = val;
    //   }
    // }

    const getTheFunInsert = INSERT_FUNCTION[name];
    const res = await ApiActions.insert(name, { data: { values } });

    if (res?.success) {
      toast.success("Successfully added item in " + name);
    } else {
      toast.error("Failed to add new item in " + name);
    }
    setLoading(false);
  };

  return (
    <>
      <div key={name}>
        <FormProvider {...method}>
          <BlockPaper>
            <FormHeadingTitleSteps
              name={name}
              steps={steps}
              // changeTab={goTo}
              activeStage={currentIndex}
            />
            <div className="h-5" />
            <form onSubmit={handleSubmit(onSubmit)}>
              <Fields
                fields={fields}
                // tab={tab}
                // values={watch()}
                errors={errors}
                getCachedList={getCachedList}
                handleInputChange={handleInputChange}
              />
              <ButtonsStepsGroup
                isLast={isLast}
                loading={loading}
                steps={steps}
                back={back}
              />
            </form>
          </BlockPaper>
        </FormProvider>
      </div>
    </>
  );
};

export default Patterns;
