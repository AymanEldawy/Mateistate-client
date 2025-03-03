import { GET_UPDATE_DATE_BY_NUMBER } from "Helpers/Lib/global-read-update";
import useFormSteps from "Hooks/useFormSteps";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { Fields } from "../CustomForm/Fields";
import { toast } from "react-toastify";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import getFormByTableName from "Helpers/Forms/forms";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import { getResetFields } from "Helpers/Lib/global-reset";
import { SubStepsList } from "../CustomForm/SubStepsList";
import { UploadFile } from "Components/StructurePage/CustomFields";
import TableFields from "Components/TableComponents/TableFields";
import useCurd from "Hooks/useCurd";

const SUB_STEPS = ["lawsuit_expenses", "lawsuit_expenses_pictures"];

const LawsuitForm = ({ popupView }) => {
  const name = "lawsuit";
  const params = useParams();
  const { remove } = useCurd();
  const id = params?.id;
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: getResetFields(name),
  });
  const [currentSubIndex, setCurrentSubIndex] = useState(0);

  const {
    goTo,
    currentIndex,
    tab,
    steps,
    fields,
    setCurrentIndex,
    formSettings,
    onDeleteItem,
  } = useFormSteps({ name: "lawsuit_group" });
  const {
    reset,
    watch,
    formState: { isDirty, errors },
    setValue,
  } = methods;

  const { isLoading } = useQuery({
    queryKey: [name, id],
    queryFn: async () => {
      const data = await GET_UPDATE_DATE_BY_NUMBER.lawsuit(id);
      if (data?.lawsuit?.id) {
        reset(data);
      }
    },
  });

  const onSubmit = async (value) => {
    if (!isDirty) {
      toast.error("You must to fill out some Units");
    }

    const getTheFunInsert = INSERT_FUNCTION?.lawsuit;
    const res = await getTheFunInsert(value);

    if (res?.success) {
      toast.success("Successfully added item in " + name);
      reset();
    } else {
      toast.error(res?.error?.detail);
    }
  };

  return (
    <FormWrapperLayout
      name={name}
      isLoading={isLoading}
      onSubmit={onSubmit}
      popupView={popupView}
      methods={methods}
      itemId={watch("lawsuit.id")}
      itemNumber={watch("lawsuit.number")}
      steps={steps}
      goToStep={goTo}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      // additionalButtons={
      //   <Link
      //     to={`/tools/${watch("building.id")}`}
      //     className="bg-gray-200 dark:bg-dark-border dark:text-white rounded-md p-2 flex items-center gap-2 font-medium text-gray-700"
      //   >
      //     <PaletteIcon />
      //     Units description
      //   </Link>
      // }
    >
      {formSettings?.formType === "nested" ? (
        <div className="flex gap-8 items-start">
          <SubStepsList
            steps={SUB_STEPS}
            goTo={setCurrentSubIndex}
            activeStage={currentSubIndex}
          />
          <>
            {currentSubIndex === 0 ? (
              <Fields
                tab={"lawsuit_expenses"}
                fields={getFormByTableName("lawsuit_expenses")}
                values={watch("lawsuit_expenses")}
                errors={errors}
                customGrid="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              />
            ) : null}
            {currentSubIndex === 1 ? (
              <UploadFile
                label={"picture"}
                updatedName={`lawsuit_expenses_pictures.picture`}
                containerClassName="col-span-2"
                values={watch()}
                multiple
              />
            ) : null}
          </>
        </div>
      ) : (
        <>
          {tab === "lawsuit_status" ? (
            <TableFields
              tab={tab}
              errors={errors}
              formSettings={formSettings}
              fields={fields}
              values={watch()?.[tab]}
            />
          ) : (
            <Fields
              tab={tab}
              fields={fields}
              values={watch()?.[tab]}
              errors={errors}
              customGrid={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}
            />
          )}
        </>
      )}
    </FormWrapperLayout>
  );
};

export default LawsuitForm;
