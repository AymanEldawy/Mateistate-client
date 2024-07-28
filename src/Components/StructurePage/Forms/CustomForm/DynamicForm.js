import getFormByTableName from "Helpers/Forms/forms";
import { useMemo } from "react";
import FormSteps from "./FormSteps";
import FormSingular from "./FormSingular";
import { useParams } from "react-router-dom";

export const DynamicForm = ({
  onClose,
  layout,
  oldValues,
  setRecordResponse,
  popupView,
  normalForm,
  name: outerName,
}) => {
  console.log("🚀 ~ popupView:", popupView)
  const params = useParams();
  const name = outerName || params?.name;

  let isMultiSteps = useMemo(() => {
    const table = getFormByTableName(name);
    if (table?.forms) return true;
    return;
  }, [name]);

  console.log(name, "ss");
  return (
    <div key={name}>
      {/* <Suspense fallback={<>loading</>}> */}
      {!isMultiSteps ? (
        <FormSingular
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
      {/* </Suspense> */}
    </div>
  );
};
