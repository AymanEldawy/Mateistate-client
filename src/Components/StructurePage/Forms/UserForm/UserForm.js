import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import useFormSteps from "Hooks/useFormSteps";

import { FormProvider, useForm } from "react-hook-form";
import { ButtonsStepsGroup } from "Components/Global/ButtonsStepsGroup";
import GET_UPDATE_DATE from "Helpers/Lib/global-read-update";
import { useParams } from "react-router-dom";
import { usePopupForm } from "Hooks/usePopupForm";
import { Fields } from "../CustomForm/Fields";
import BlockPaper from "Components/Global/BlockPaper";
import useListView from "Hooks/useListView";
import { CONSTANT_COLUMNS_NAME } from "Helpers/constants";
import { Button } from "Components/Global/Button";
import { FormStepPagination } from "../../../Global/FormStepPagination";
import { getResetFields } from "Helpers/Lib/global-reset";
import { ApiActions } from "Helpers/Lib/api";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import { removeNullValues } from "Helpers/functions";

const UserForm = ({
  onClose,
  refetchData,
  layout,
  allowTabs,
  setRecordResponse,
  popupView,
  oldValues = null,
}) => {
  const name = "user";
  const {
    goTo,
    currentIndex,
    tab,
    formSettings,
    steps,
    fields,
    CACHE_LIST,
    tabNames,
    setCurrentIndex,
  } = useFormSteps({ name });
  const {
    goToNumber,
    isLayoutUpdate,
    listOfNumbers,
    number,
    setNumber,
    maxLength,
    setMaxLength,
    setOpenConfirmation,
    listOfData,
    onDeleteItem,
  } = useListView({ name });
  const { appendNewRecord } = usePopupForm();
  const methods = useForm();
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

  useEffect(() => {
    if (number <= maxLength) {
      reset(listOfData?.[listOfNumbers?.at(number - 1)]);
    }
  }, [number, maxLength]);

  const onDelete = async () => {
    let data = watch(tabNames?.[0]);

    let res = await ApiActions.remove(name, {
      conditions: [
        {
          type: "and",
          conditions: [["id", "=", data?.id]],
        },
      ],
    });
    if (res?.success) {
      onDeleteItem(data?.number);
    }
    setOpenConfirmation(false);
  };

  const onClickAddNew = async () => {
    setNumber(+maxLength + 1);
    setCurrentIndex(0);
    reset(getResetFields(name));
  };

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) return;

    setLoading(true);
    const res = await INSERT_FUNCTION.user(removeNullValues(value));

    if (!!setRecordResponse) {
      setRecordResponse({ table: name, response: res });
    }

    if (res?.success) {
      toast.success("Successfully added item in " + name);
      if (!!refetchData) refetchData();
      if (layout !== "update") {
        setMaxLength((prev) => +prev + 1);
        await appendNewRecord(res);
      }
      reset();
    } else {
      toast.error(res?.error?.detail);
    }
    if (!!onClose) onClose();
    setLoading(false);
  };

  return (
    <BlockPaper
      fullWidth={popupView}
      bodyClassName={popupView ? "!p-0" : ""}
      boxClassName={popupView ? "!shadow-none !p-0" : ""}
      containerClassName={popupView ? "mb-0" : ""}
      layoutBodyClassName={popupView ? "!my-0" : ""}
    >
      <FormProvider {...methods}>
        <FormHeadingTitleSteps
          steps={steps}
          activeStage={currentIndex}
          goTo={goTo}
          onClose={onClose}
          customName={
            <span className="capitalize">
              {maxLength < number ? (
                <span className="text-red-500 ltr:mr-2 rtl:ml-2 bg-red-100 px-2 py-1 rounded-md">
                  New
                </span>
              ) : null}
              Customer / Supplier number {number}
            </span>
          }
        />
        <div className="h-5" />
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Fields
            fields={fields}
            values={watch()}
            errors={errors}
            CACHE_LIST={CACHE_LIST}
          />
          <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
            <FormStepPagination
              number={number}
              goTo={goToNumber}
              // maxLength={maxLength}
              maxLength={maxLength}
              isNewOne={number > maxLength}
              setNumber={setNumber}
              onClickDelete={() => setOpenConfirmation(true)}
              isDeleted={watch(CONSTANT_COLUMNS_NAME.is_deleted)}
              allowActions={watch(`${tabNames?.[0]}.id`)}
              onClickAddNew={onClickAddNew}
            />
            <Button
              title={maxLength >= number ? "Modify" : "Submit"}
              classes="ltr:ml-auto rtl:mr-auto"
              disabled={!isDirty}
            />
          </div>
        </form>
      </FormProvider>
    </BlockPaper>
  );
};

export default UserForm;
