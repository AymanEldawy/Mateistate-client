import { ErrorText } from "Components/Global/ErrorText";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Textarea = ({
  labelClassName,
  label,
  containerClassName,
  textareaClassName,
  updatedName,
  hideLabel,
  ...field
}) => {
  const { register, control } = useFormContext();
  const { t } = useTranslation();

  return (
    <Controller
      name={updatedName || field?.name}
      control={control}
      className="w-full"
      required={field?.required}
      render={({
        field: { onChange, onBlur, ref, value, onFocus },
        fieldState: { error },
        formState: {},
      }) => {
        return (
          <div className="flex flex-col gap-2">
            <div className={"flex flex-col " + containerClassName}>
              {label && !hideLabel ? (
                <label
                  title={label}
                  className={
                    "overflow-hidden text-ellipsis text-sm font-normal whitespace-nowrap capitalize " +
                    labelClassName
                  }
                >
                  {t(label)?.replace(/_/g, " ")}
                  {field?.required ? (
                    <span className="text-red-500 mx-1">*</span>
                  ) : null}
                </label>
              ) : null}
              <textarea
                readOnly={field?.readOnly}
                // {...field}
                className={`border bg-gray-50 read-only:bg-[#2289fb1c] dark:read-only:bg-[#444] rounded p-1 ${
                  error ? "border-red-200 text-red-500" : ""
                } ${textareaClassName}`}
                type={field?.type}
                placeholder={field?.type === "number" ? "0" : ""}
                // defaultValue={field?.defaultValue}
                value={value}
                // value={watch(updatedName || field?.name)}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                onBlur={onBlur}
              />
            </div>
            {error ? (
              <ErrorText containerClassName="py-1">{error?.message}</ErrorText>
            ) : null}
          </div>
        );
      }}
      rules={{
        required: field?.required && `${field?.name} is required`,
      }}
    />
  );
};

export default Textarea;
