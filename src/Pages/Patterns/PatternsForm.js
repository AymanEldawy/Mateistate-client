import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import { ButtonsStepsGroup } from "Components/Global/ButtonsStepsGroup";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import { GalleryForm } from "Components/StructurePage/Forms/CustomForm/GalleryForm";
import TableForm from "Components/StructurePage/Forms/CustomForm/TableForm";
import Installment from "Components/StructurePage/Forms/Contract/InstallmentForm";
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
  let pattern = params?.pattern;
  const [loading, setLoading] = useState(false);
  let name = pattern === "cheque_pattern" ? "bill_pattern" : pattern;


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
    goTo,
    steps,
    fields,
    CACHE_LIST,
  } = useFormSteps({ name: pattern });

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

    if (res?.success) {
      toast.success(
        layout === "update"
          ? `Successfully update row: ${values?.name} in ${pattern}`
          : "Successfully added item in " + pattern
      );
    } else {
      toast.error("Failed to add new item in " + pattern);
    }
    setLoading(false);
  };

  return (
    <>
      <div key={pattern}>
        <FormProvider {...methods}>
          <BlockPaper>
            <FormHeadingTitleSteps
              name={pattern}
              steps={steps}
              goTo={goTo}
              activeStage={currentIndex}
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
              />
              <ButtonsStepsGroup
                isLast={isLast}
                isFirst={isFirst}
                loading={loading}
                steps={steps}
                next={next}
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
