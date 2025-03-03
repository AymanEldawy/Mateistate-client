import { FormProvider } from "react-hook-form";
import { FormStepPagination } from "../../../Global/FormStepPagination";
import Loading from "Components/Global/Loading";
import FormTitle from "Components/Global/FormTitle";
import Btn from "Components/Global/Btn";
import { FormSidebarMenu } from "./FormSidebarMenu";
import { useEffect, useRef, useState } from "react";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import { EditIcon, TrashIcon } from "Components/Icons";
import { toast } from "react-toastify";
import useCurd from "Hooks/useCurd";

const FormLayout = ({
  onClose,
  steps,
  activeStage,
  name,
  goTo,
  onSubmit,
  isLoading,
  children,
  methods,
  hideTitle,
  hidePaginationBar,
  additionalButtons,
  number,
  formPagination,
  formClassName,
  extraContentBar,
  extraMenuContent,
}) => {
  const { remove } = useCurd()
  const refForm = useRef();
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = methods;

  useEffect(() => {
    if (formPagination?.currentNumber > formPagination?.lastNumber) {
      refForm.current.reset()
    }
  }, [formPagination])

  const handleDelete = async () => {
    const response = await remove(name, formPagination?.currentId);
    if (response?.success) {
      toast.success("Successfully delete");
      onClose()
    } else {
      toast.error("Failed to delete");
    }
  }

  return (
    <>
      {isLoading || isSubmitting ? <Loading /> : null}
      <ConfirmModal
        onConfirm={handleDelete}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />

      <FormProvider {...methods}
        key={name + number}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          ref={refForm}
          className={formClassName}
        >
          {hideTitle ? null : <FormTitle isDirty={isDirty} extraContentBar={extraContentBar} onClose={onClose} name={name} />}

          <div
            className={`${!steps && "mt-5 px-4"} flex gap-2 overflow-auto h-full`}
          >
            {steps && (
              <FormSidebarMenu
                steps={steps}
                activeStage={activeStage}
                name={name}
                goTo={goTo}
                extraMenuContent={extraMenuContent}
              />
            )}
            <div
              className={`${steps && "p-4 "
                } overflow-auto min-h-[350px] w-full max-h-[500px]`}
            >
              {children}
            </div>
          </div>
          {hidePaginationBar ? null : (
            <div className="flex sticky bottom-0 justify-between items-center gap-4 px-4 bg-gray-100 py-2 border-t border-t-gray-300">
              <FormStepPagination formPagination={formPagination} />
              <div className="flex gap-2 items-center">
                {additionalButtons && additionalButtons}
                {formPagination?.currentId ? (
                  <Btn
                    type="button"
                    kind="error"
                    onClick={() => setOpenConfirmation(true)}
                  >
                    <TrashIcon className="h-5 w-5" />
                    Delete
                  </Btn>
                ) : null}

                <Btn
                  isLoading={isLoading}
                  // disabled={!isDirty || disabledSubmit}
                  kind="primary"
                >
                  <EditIcon className="h-5 w-5" />
                  Save
                </Btn>
              </div>
            </div>
          )}
        </form>
      </FormProvider>
    </>
  );
};

export default FormLayout;
