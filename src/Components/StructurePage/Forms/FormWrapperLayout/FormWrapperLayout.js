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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useCurd from "Hooks/useCurd";
import useRefTable from "Hooks/useRefTables";
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
  defaultTitle,
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
  const params = useParams();
  const navigate = useNavigate();
  const { loadingRefTableData } = useRefTable(name);
  const location = useLocation();
  const [refresh, setRefresh] = useState(false);
  const { remove } = useCurd();
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
    watch,
  } = methods;
  console.log("🚀 ~ errors:", errors);
  const [openConfirmation, setOpenConfirmation] = useState(false);

  useEffect(() => {
    reset(getResetFields(tableName || name));
  }, [location?.pathname]);

  const onDelete = async () => {
    if (outerDelete) return outerDelete();
    let res = await remove(tableName || name, itemId);
    if (res?.success) {
      navigate("-1");
    }
    setOpenConfirmation(false);
  };

  return (
    <>
      {/* {isLoading || isSubmitting || loadingRefTableData ? <Loading withBackdrop /> : null} */}
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
        popupView={popupView}
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
                  {/* {maxLength < number ? (
                    <span className="text-red-500 ltr:mr-2 rtl:ml-2 bg-red-100 px-2 py-1 rounded-md">
                      New
                    </span>
                  ) : null}
                  {name?.replace(/_/g, " ")} number {number} */}
                  {defaultTitle || name?.replace(/_/g, " ")}
                </span>
              }
            />

            <div key={refresh} className="mt-5">
              {children}
            </div>

            {hidePaginationBar ? null : (
              <div
                className={`flex justify-end gap-4 items-center mt-4 border-t pt-4`}
              >
                {additionalButtons ? additionalButtons : null}
                <div className="flex gap-4 items-center ltr:ml-auto rtl:mr-auto">
                  {onSubmit ? (
                    <Button
                      title={"Save"}
                      classes=""
                      disabled={!isDirty || disabledSubmit}
                    />
                  ) : null}
                  {!!onDelete && params?.id ? (
                    <Button
                      title={"Delete"}
                      type="button"
                      classes="bg-red-500 hover:bg-red-700"
                      onClick={() => setOpenConfirmation(true)}
                    />
                  ) : null}
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
