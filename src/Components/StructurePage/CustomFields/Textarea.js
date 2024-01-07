import React from "react";
import { useFormContext } from "react-hook-form";

const Textarea = ({
  labelClassName,
  label,
  containerClassName,
  textareaClassName,
  error,
  handleInputChange,

  ...field
}) => {
  const { register } = useFormContext();

  const { name } = field;
  return (
    <div className={"flex flex-col " + containerClassName}>
      {label ? (
        <label
          title={label}
          htmlFor={name}
          className={
            "overflow-hidden text-ellipsis text-sm font-normal whitespace-nowrap mb-1 capitalize " +
            labelClassName
          }
        >
          {label}{" "}
          {field?.required ? (
            <span className="text-red-500 mx-1">*</span>
          ) : null}
        </label>
      ) : null}
      <textarea
        id={name}
        className={`border bg-gray-50 read-only:bg-blue-100 dark:read-only:bg-[#444] rounded p-1 ${
          error ? "border-red-200 text-red-500" : ""
        } ${textareaClassName}`}
        {...field}
        {...register(field.name, {
          required: field?.required,
          onChange: (e) => handleInputChange(e.target.name, e.target.value),
        })}
      />
      {error ? (
        <p className="bg-red-200 mt-2 rounded text-sm text-red-500 px-2 py-1">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default Textarea;
