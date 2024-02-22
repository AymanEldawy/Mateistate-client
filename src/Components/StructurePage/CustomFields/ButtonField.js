import { Button } from "Components/Global/Button";
import React from "react";
import { useFormContext } from "react-hook-form";

export const ButtonField = ({
  watch: fieldWatch,
  globalButtonsActions,
  ...field
}) => {
  // console.log(field?.condition , watch(fieldWatch));
  const { watch } = useFormContext();

  if (field?.condition && watch(fieldWatch) !== 4) return;

  return (
    <div className="flex items-end">
      <Button
        type="button"
        onClick={() => globalButtonsActions(field?.action)}
        // onClick={field.onClick}
        title={field?.label}
        classes={`w-fit h-fit ${field?.classes}`}
      />
    </div>
  );
};
