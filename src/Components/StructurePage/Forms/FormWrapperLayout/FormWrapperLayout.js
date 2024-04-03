import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useState } from "react";
import { FormProvider } from "react-hook-form";
import BlockPaper from "Components/Global/BlockPaper";
import { getResetFields } from "Helpers/Lib/global-reset";
import { Button } from "Components/Global/Button";
import { FormStepPagination } from "../../../Global/FormStepPagination";
import { CONSTANT_COLUMNS_NAME } from "Helpers/constants";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import Loading from "Components/Global/Loading";
import FormTitle from "Components/Global/FormTitle";
import { useLocation } from "react-router-dom";
// const { Prompt } = "react-router-dom";

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
  steps,
  goToStep,
  currentIndex,
  outerDelete,
  setCurrentIndex,
  tableName,
  hidePaginationBar,
  additionalButtons,
}) => {
  // const history = useHistory();
  const location = useLocation();
  const [refresh, setRefresh] = useState(false);
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

  // let blocker = useBlocker(
  //   ({ currentLocation, nextLocation }) =>
  //     isDirty && currentLocation.pathname !== nextLocation.pathname
  // );

  // React.useEffect(() => {
  //   const unblock = history.block((location, action) => {
  //     if (isDirty) {
  //       return window.confirm("Navigate Back?");
  //     }
  //     return true;
  //   });

  //   return () => {
  //     unblock();
  //   };
  // }, []);
  useEffect(() => {
    reset(getResetFields(tableName || name));
  }, [location?.pathname]);

  const onClickAddNew = () => {
    setNumber(+maxLength + 1);
    reset(getResetFields(tableName || name));
    if (setCurrentIndex) setCurrentIndex(0);
    setRefresh((p) => !p);
  };

  const onDelete = async () => {
    if (outerDelete) return outerDelete();
    let res = await ApiActions.remove(tableName || name, {
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
      {/* <Prompt
        when={isDirty}
        message="Unsaved changes detected, continue?"
        beforeUnload={true}
      /> */}
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
            <FormTitle
              onClose={onClose}
              activeStage={currentIndex}
              steps={steps}
              goTo={goToStep}
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

            <div key={refresh} className="mt-5">
              {children}
            </div>

            {hidePaginationBar ? null : (
              <div
                className={`flex justify-between gap-4 items-center mt-4 border-t pt-4`}
              >
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

                <div className="flex gap-2 items-center">
                  {additionalButtons ? additionalButtons : null}
                  <Button
                    title={maxLength >= number ? "Modify" : "Submit"}
                    classes="ltr:ml-auto rtl:mr-auto"
                    disabled={!isDirty || disabledSubmit}
                  />
                </div>
              </div>
            )}
          </form>
        </FormProvider>
      </BlockPaper>
    </>
  );
};

export default FormWrapperLayout;
