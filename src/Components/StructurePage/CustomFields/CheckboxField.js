import { ErrorText } from "Components/Global/ErrorText";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

const CheckboxField = ({
  labelClassName,
  label,
  containerClassName,
  inputClassName,
  updatedName,
  hideLabel,
  readOnly,
  checkboxProps = {},
  ...field
}) => {
  const { watch } = useFormContext();
  const { t } = useTranslation();
  const { name, required } = field;

  return (
    <Controller
      key={updatedName || field.name}
      name={updatedName || field.name}
      render={({
        field: { onChange, onBlur, ref, value },
        fieldState: { error },
      }) => {
        return (
          <div className="flex flex-col gap-2">
            <div
              className={
                `flex flex-row items-center gap-2 ` + containerClassName
              }
              key={name}
            >
              <input
                ref={ref}
                id={name}
                className="h-5 w-5"
                disabled={!watch(field?.disabledCondition) || readOnly}
                onChange={(e) => onChange(e.target.checked)}
                checked={watch(updatedName || field?.name)}
                readOnly={readOnly}
                {...field}
                {...checkboxProps}
                type="checkbox"
              />
              <label
                title={label}
                className={
                  "overflow-hidden text-ellipsis text-xs font-normal whitespace max-h-[32px] capitalize flex items-center gap-2 " +
                  labelClassName
                }
              >
                {t(label)?.replace(/_/g, " ")}
                {required ? (
                  <span className="text-red-500  mx-1">*</span>
                ) : null}
              </label>
            </div>
            {error ? (
              <ErrorText containerClassName="py-1">{error?.message}</ErrorText>
            ) : null}
          </div>
        );
      }}
      rules={{ required: field?.required }}
    />
  );
};

export default CheckboxField;
