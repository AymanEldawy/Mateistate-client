import { ApiActions } from "Helpers/Lib/api";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import BlockPaper from "Components/Global/BlockPaper";
import useListView from "Hooks/useListView";
import { getResetFields } from "Helpers/Lib/global-reset";
import { Button } from "Components/Global/Button";
import { FormStepPagination } from "../../../Global/FormStepPagination";
import { CONSTANT_COLUMNS_NAME } from "Helpers/constants";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import Loading from "Components/Global/Loading";
import { useParams } from "react-router-dom";

const FormWrapperLayout = ({
  onClose,
  popupView,
  name,
  onSubmit,
  isLoading,
  children,
  disabledSubmit,
  methods,
  viewList,
  itemId,
  itemNumber,
}) => {
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting, isDirty },
    watch,
  } = methods;
  const {
    goToNumber,
    number,
    setNumber,
    maxLength,
    openConfirmation,
    setOpenConfirmation,
    onDeleteItem,
  } = viewList;

  const onClickAddNew = () => {
    setNumber(+maxLength + 1);
    reset(getResetFields(name));
  };

  const onDelete = async () => {
    let res = await ApiActions.remove(name, {
      conditions: [
        {
          type: "and",
          conditions: [["id", "=", itemId]],
        },
      ],
    });
    if (res?.success) {
      onDeleteItem(itemNumber);
    }
    setOpenConfirmation(false);
  };

  return (
    <>
      {isLoading || isSubmitting ? <Loading withBackdrop /> : null}
      <ConfirmModal
        onConfirm={onDelete}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      <BlockPaper
        containerClassName={popupView ? "z-[102] p-0" : null}
        bodyClassName={popupView ? "!p-0" : null}
        boxClassName={popupView ? "!shadow-none !p-0" : null}
        layoutBodyClassName={popupView ? "!my-0" : null}
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormHeadingTitle
              onClose={onClose}
              customName={
                <span className="capitalize">
                  {maxLength < number ? (
                    <span className="text-red-500 ltr:mr-2 rtl:ml-2 bg-red-100 px-2 py-1 rounded-md">
                      New
                    </span>
                  ) : null}
                  {name?.replace(/_/g, " ")} number {number}
                </span>
              }
            />
            {children}
            <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
              <FormStepPagination
                number={number}
                goTo={goToNumber}
                // maxLength={maxLength}
                maxLength={maxLength}
                isNewOne={number > maxLength}
                setNumber={setNumber}
                onClickDelete={() => setOpenConfirmation(true)}
                isArchived={watch(CONSTANT_COLUMNS_NAME.is_archived)}
                isDeleted={watch(CONSTANT_COLUMNS_NAME.is_deleted)}
                allowActions={watch("id")}
                onClickAddNew={onClickAddNew}
              />
              <Button
                title={maxLength >= number ? "Modify" : "Submit"}
                classes="ltr:ml-auto rtl:mr-auto"
                disabled={!isDirty || disabledSubmit}
              />
            </div>
          </form>
        </FormProvider>
      </BlockPaper>
    </>
  );
};

export default FormWrapperLayout;
