import { ErrorText } from "Components/Global/ErrorText";
import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Textarea = ({
  labelClassName,
  label,
  containerClassName,
  textareaClassName,
  error,
  updatedName,
  hideLabel,
  ...field
}) => {
  const { register } = useFormContext();
  const { t } = useTranslation();

  return (
    <div className={"flex flex-col " + containerClassName}>
      {label && !hideLabel ? (
        <label
          title={label}
          className={
            "overflow-hidden text-ellipsis text-sm font-normal whitespace-nowrap mb-1 capitalize " +
            labelClassName
          }
        >
          {label}
          {field?.required ? (
            <span className="text-red-500 mx-1">*</span>
          ) : null}
        </label>
      ) : null}
      <textarea
        // {...field}
        className={`border bg-gray-50 read-only:bg-blue-100 dark:read-only:bg-[#444] rounded p-1 ${
          error ? "border-red-200 text-red-500" : ""
        } ${textareaClassName}`}
        {...register(updatedName || field?.name, {
          required: field?.required,
        })}
      />
      {error ? <ErrorText containerClassName="py-1">{error}</ErrorText> : null}
    </div>
  );
};

export default Textarea;
