import { ErrorText } from "Components/Global/ErrorText";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

const CheckboxField = ({
  labelClassName,
  label,
  containerClassName,
  inputClassName,
  error,
  updatedName,
  hideLabel,
  readOnly,
  // register,
  ...field
}) => {
  const { watch } = useFormContext();
  const { t } = useTranslation();
  const { name } = field;

  return (
    <div className={`w-full flex flex-col gap-2 ${containerClassName}`}>
      <label
        title={label}
        className="relative flex w-full gap-2 items-center cursor-pointer"
      >
        <Controller
          name={updatedName || field.name}
          render={({ field: { onChange } }) => {
            return (
              <input
                id={name}
                type="checkbox"
                className="h-4 w-4"
                disabled={!watch(field?.disabledCondition) || readOnly}
                onChange={(e) => onChange(e.target.checked)}
                checked={watch(updatedName || field?.name)}
                readOnly={readOnly}
              />
            );
          }}
          rules={{ required: field?.required }}
        />
        <p className="flex-1 capitalize">
          {t(label)?.replace(/_/g, " ")}
          {field?.required ? (
            <span className="text-red-500  mx-1">*</span>
          ) : null}
        </p>
      </label>
      {error ? <ErrorText containerClassName="py-1">{error}</ErrorText> : null}
    </div>
  );
};

export default CheckboxField;
