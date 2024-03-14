import { ErrorText } from "Components/Global/ErrorText";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Switch = ({
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
    <div className={"flex flex-col " + containerClassName}>
      {label && !hideLabel ? (
        <label
          title={label}
          htmlFor={name}
          className={
            "overflow-hidden text-ellipsis text-sm font-normal whitespace-nowrap mb-1 capitalize flex items-center gap-2 " +
            labelClassName
          }
        >
          {t(label)?.replace(/_/g, " ")}
          {field?.required ? (
            <span className="text-red-500  mx-1">*</span>
          ) : null}
        </label>
      ) : null}
      <div className="flex gap-4 items-center">
        <label
          title={label}
          className="relative flex mt-2 gap-4 items-center cursor-pointer"
        >
          <Controller
            name={updatedName || field.name}
            render={({ field: { onChange } }) => {
              return (
                <input
                  id={name}
                  type="checkbox"
                  className="sr-only peer"
                  disabled={!watch(field?.disabledCondition) || readOnly}
                  onChange={(e) => onChange(e.target.checked)}
                  checked={watch(updatedName || field?.name)}
                  readOnly={readOnly}
                />
              );
            }}
            rules={{ required: field?.required }}
          />
          <div className="w-11 h-6 after:left-[1px] bg-gray-200 rounded-full peer peer-disabled:bg-gray-800 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        {watch(updatedName || field?.name) && field?.readOnlyValue ? (
          <input
            readOnly
            value={watch(field?.readOnlyValue)}
            className={`border h-[39px] read-only:bg-blue-100 w-full dark:read-only:bg-[#444] rounded p-1  `}
          />
        ) : null}
      </div>
      {error ? <ErrorText containerClassName="py-1">{error}</ErrorText> : null}
    </div>
  );
};

export default Switch;
