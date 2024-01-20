import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { Suspense, lazy, useMemo } from "react";
const FormSingular = lazy(() => import("./FormSingular"));
const FormSteps = lazy(() => import("./FormSteps"));

export const DynamicForm = ({ name, refetchData, onClose, layout }) => {
  let isMultiSteps = useMemo(() => {
    const table = getFormByTableName(name);
    if (table?.forms) return true;
    return;
  }, [name]);

  return (
    <div key={name}>
      <Suspense fallback={<>loading</>}>
        {!isMultiSteps ? (
          <FormSingular
            onClose={onClose}
            name={name}
            refetchData={refetchData}
            layout={layout}
          />
        ) : (
          <FormSteps
            onClose={onClose}
            name={name}
            refetchData={refetchData}
            layout={layout}
          />
        )}
      </Suspense>
    </div>
  );
};
