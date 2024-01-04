import getFormByTableName from "Helpers/Forms/new-tables-forms";
import { useMemo } from "react";
import FormSingular from "./FormSingular";
import { FormSteps } from "./FormSteps";

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
    </div>
  );
};
