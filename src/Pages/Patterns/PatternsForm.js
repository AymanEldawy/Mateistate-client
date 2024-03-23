import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import { ButtonsStepsGroup } from "Components/Global/ButtonsStepsGroup";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import { FormStepPagination } from "Components/Global/FormStepPagination";
import { ApiActions } from "Helpers/Lib/api";
import GET_UPDATE_DATE from "Helpers/Lib/global-read-update";
import { getResetFields } from "Helpers/Lib/global-reset";
import { CONSTANT_COLUMNS_NAME } from "Helpers/constants";
import useFormSteps from "Hooks/useFormSteps";
import useListView from "Hooks/useListView";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CACHE_DATA = {};

const PatternsForm = ({ layout }) => {
  const params = useParams();
  let pattern = params?.pattern;
  const [isLoading, setIsLoading] = useState(false);
  let name = pattern;
  const {
    goToNumber,
    isLayoutUpdate,
    listOfNumbers,
    maxLength,
    number,
    setMaxLength,
    setNumber,
  } = useListView({ name });

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
    reset,
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

  useEffect(() => {
    if (!number) return;

    fetchData(number);
  }, [number]);

  const fetchData = async (num = number) => {
    setIsLoading(true);

    const res = await ApiActions.read(name, {
      conditions: [{ type: "and", conditions: [["number", "=", num]] }],
    });
    const data = res?.result?.at(0);
    if (res?.success && data?.id) {
      CACHE_DATA[num] = data;
      reset(data);
    }

    if (!data?.id || !Object.values(data)) {
      reset(getResetFields(name));
    }
    setIsLoading(false);
  };

  const onDelete = async () => {};

  const onClickAddNew = async () => {};

  const onSubmit = async (values) => {
    if (!isDirty) return;

    setIsLoading(true);

    let res = null;

    if (values?.id) {
      res = await ApiActions.update(name, {
        conditions: [{ type: "and", conditions: [["id", "=", values?.id]] }],
        updates: values,
      });
    } else {
      res = await ApiActions.insert(name, {
        data: values,
      });
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
                  {maxLength < number ? (
                    <span className="text-red-500 ltr:mr-2 rtl:ml-2 bg-red-100 px-2 py-1 rounded-md">
                      New
                    </span>
                  ) : null}
                  {pattern?.replace(/_/g, ' ')} number {number}
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
                <FormStepPagination
                  number={number}
                  goTo={goToNumber}
                  // maxLength={maxLength}
                  maxLength={maxLength}
                  isNewOne={number > maxLength}
                  setNumber={setNumber}
                  onClickDelete={onDelete}
                  isArchived={watch(CONSTANT_COLUMNS_NAME.is_archived)}
                  isDeleted={watch(CONSTANT_COLUMNS_NAME.is_deleted)}
                  allowActions={watch("building.id")}
                  onClickAddNew={onClickAddNew}
                />
                <Button
                  title={maxLength >= number ? "Modify" : "Submit"}
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
