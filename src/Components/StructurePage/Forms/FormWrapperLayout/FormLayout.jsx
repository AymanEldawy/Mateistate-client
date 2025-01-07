import { FormProvider } from "react-hook-form";
import { FormStepPagination } from "../../../Global/FormStepPagination";
import Loading from "Components/Global/Loading";
import FormTitle from "Components/Global/FormTitle";
import Btn from "Components/Global/Btn";
import { FormSidebarMenu } from "./FormSidebarMenu";
import { useEffect, useRef, useState } from "react";

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
  disabledSubmit,
  number,
  setOpenConfirmation,
  formPagination,
  formClassName,
}) => {
  const refForm = useRef();
  const [height, setHeight] = useState(null);
  const {
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      {isLoading || isSubmitting ? <Loading withBackdrop /> : null}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        ref={refForm}
        className={formClassName}
      >
        {hideTitle ? null : <FormTitle onClose={onClose} name={name} />}

        <div
          key={name + number}
          className={`${!steps && "mt-5 px-4"} flex gap-2 overflow-auto h-full`}
        >
          {steps && (
            <FormSidebarMenu
              steps={steps}
              activeStage={activeStage}
              name={name}
              goTo={goTo}
            />
          )}
          <div
            className={`${
              steps && "p-4 "
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
              <Btn
                isLoading={isLoading}
                disabled={!isDirty || disabledSubmit}
                kind="primary"
              >
                Save
              </Btn>

              {!!setOpenConfirmation ? (
                <Btn
                  type="button"
                  kind="error"
                  onClick={() => setOpenConfirmation(true)}
                >
                  Delete
                </Btn>
              ) : null}
            </div>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default FormLayout;
