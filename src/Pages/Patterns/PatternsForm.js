import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import { ButtonsStepsGroup } from "Components/Global/ButtonsStepsGroup";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import { GalleryForm } from "Components/StructurePage/Forms/CustomForm/GalleryForm";
import TableForm from "Components/StructurePage/Forms/CustomForm/TableForm";
import Installment from "Components/StructurePage/Forms/InstallmentForm";
import { ApiActions } from "Helpers/Lib/api";
import INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import GET_UPDATE_DATE from "Helpers/Lib/operations/global-read-update";
import useFormSteps from "Hooks/useFormSteps";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const PatternsForm = ({ layout }) => {
  const params = useParams();
  const name = params?.name;

  const type = params?.type;
  const contractAssetsType = name?.split("_").at(0);
  const [openInstallmentForm, setOpenInstallmentForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const methods = useForm({
    defaultValues:
      layout === "update"
        ? async () => await GET_UPDATE_DATE(name, params?.id)
        : {},
  });
  const {
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    setValue,
  } = methods;

  const {
    next,
    back,
    isLast,
    isFirst,
    currentIndex,
    tab,
    formSettings,
    steps,
    fields,
    getCachedList,
  } = useFormSteps({ name });

  // Handel Submit
  // Handel Submit
  const onSubmit = async (value) => {
    next();
    if (!isLast() || !isDirty) return;

    setLoading(true);

    let values = {};
    for (const key in value) {
      let val = value[key];
      if (val !== undefined && val !== null && val !== '') {
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

    if (res?.success) {
      toast.success(
        layout === "update"
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );
    } else {
      toast.error("Failed to add new item in " + name);
    }
    setLoading(false);
  };


  return (
    <>
      <div key={name}>
        <FormProvider {...methods}>
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
                values={watch()}
                fields={fields}
                // tab={tab}
                // values={watch()}
                errors={errors}
                getCachedList={getCachedList}
              />
              <ButtonsStepsGroup
                isLast={isLast}
                isFirst={isFirst}
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

export default PatternsForm;
