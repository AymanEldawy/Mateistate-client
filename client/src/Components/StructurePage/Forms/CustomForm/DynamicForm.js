import getFormByTableName from "Helpers/Forms/new-tables-forms";
import { Suspense, lazy, useMemo } from "react";
const FormSingular = lazy(() => import("./FormSingular"));
const FormSteps = lazy(() => import("./FormSteps"));

export const DynamicForm = ({ name, refetchData, onClose, oldValue }) => {
  // Get data
  let formSchema = useMemo(() => {
    const forms = getFormByTableName(name);
    return forms;
  }, [name]);

  const forms = useMemo(() => formSchema?.forms, [formSchema]);
  const steps = useMemo(() => formSchema?.steps, [formSchema]);

  return (
    <div key={name}>
      <Suspense fallback={<>loading</>}>
        {!steps ? (
          <FormSingular
            onClose={onClose}
            name={name}
            refetchData={refetchData}
            fields={formSchema}
            oldValues={oldValue}
          />
        ) : (
          <FormSteps
            steps={steps}
            forms={forms}
            onClose={onClose}
            name={name}
            refetchData={refetchData}
            oldValues={oldValue}
          />
        )}
      </Suspense>
    </div>
  );
};
