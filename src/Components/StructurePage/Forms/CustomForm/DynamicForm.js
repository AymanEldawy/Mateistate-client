import getFormByTableName from "Helpers/Forms/forms";
import { useMemo } from "react";
import FormSteps from "./FormSteps";
import FormSingular from "./FormSingular";
import FormSingularNormal from "./FormSingularNormal";
import FormStepsNormal from "./FormStepsNormal";
// const FormSingular = lazy(() => import("./FormSingular"));
// const FormSteps = lazy(() => import("./FormSteps"));
import { useParams } from 'react-router-dom';

export const DynamicForm = ({
  onClose,
  layout,
  oldValues,
  setRecordResponse,
  popupView,
  normalForm,
}) => {
  const params = useParams();
  const { name } = params;


  let isMultiSteps = useMemo(() => {
    const table = getFormByTableName(name);
    if (table?.forms) return true;
    return;
  }, [name]);

  return (
    <div key={name}>
      {/* <Suspense fallback={<>loading</>}> */}
      {!isMultiSteps ? (
        <>
          {normalForm ? (
            <FormSingularNormal
              onClose={onClose}
              name={name}
              layout={layout}
              oldValues={oldValues}
              setRecordResponse={setRecordResponse}
              popupView={popupView}
            />
          ) : (
            <FormSingular
              onClose={onClose}
              name={name}
              layout={layout}
              oldValues={oldValues}
              setRecordResponse={setRecordResponse}
              popupView={popupView}
            />
          )}
        </>
      ) : (
        <>
          {normalForm ? (
            <FormStepsNormal
              onClose={onClose}
              name={name}
              layout={layout}
              oldValues={oldValues}
              setRecordResponse={setRecordResponse}
              popupView={popupView}
            />
          ) : (
            <FormSteps
              onClose={onClose}
              name={name}
              layout={layout}
              oldValues={oldValues}
              setRecordResponse={setRecordResponse}
              popupView={popupView}
            />
          )}
        </>
      )}
      {/* </Suspense> */}
    </div>
  );
};
