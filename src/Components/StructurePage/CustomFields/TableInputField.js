import React from "react";
import { useFormContext } from "react-hook-form";

const TableInputField = ({
  inputClassName,
  error,
  handleInputChange,
  index,
  ...field
}) => {
  const { register } = useFormContext();
  const { name } = field;
  return (
    <input
      id={name}
      className={`border read-only:bg-blue-100 dark:read-only:bg-[#444] rounded p-1 ${inputClassName} ${
        error ? "border-red-200 text-red-500" : ""
      } 
     `}
      type={field?.type}
      {...register(field.name, {
        valueAsNumber: field.type === "number",
        valueAsDate: field.type === "data",
        required: field?.required,
        validate: (value) => {},
        onChange: (e) =>
          handleInputChange(e.target.name, e.target.value),
      })}
    />
  );
};

export default TableInputField;
