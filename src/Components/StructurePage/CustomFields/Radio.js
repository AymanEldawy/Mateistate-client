import { ErrorText } from "Components/Global/ErrorText";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Radio = ({
  labelClassName,
  containerClassName,
  subLabelClassName,
  inputClassName,
  label,
  updatedName,
  hideLabel,
  ...field
}) => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors?.[updatedName || field?.name];
  return (
    <div className={"flex flex-col " + containerClassName}>
      {label && !hideLabel ? (
        <p
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
        </p>
      ) : null}
      <div className="flex items-center border rounded-md overflow-hidden">
        {field?.isJson ? (
          field?.list?.map((item, index) => {
            let name = `${updatedName || field?.name}.${item}`;
            return (
              <label
                title={name}
                key={index}
                className={
                  "overflow-hidden flex-1 text-ellipsis flex gap-1 capitalize items-center p-1 px-2 has-checked " +
                  subLabelClassName
                }
              >
                <Controller
                  name={`${updatedName || field?.name}.${item}`}
                  render={({
                    field: { onChange, onBlur, ref, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <input
                        ref={ref}
                        type="checkbox"
                        className={inputClassName}
                        list={field?.list}
                        {...register(name, {
                          required:
                            field?.required && `${field?.name} is required`,
                          onChange: (e) => {
                            let val = e.target.checked;
                            onChange(val);
                          },
                        })}
                      />
                    );
                  }}
                  rules={{ required: field?.required }}
                />
                <span>{item}</span>
              </label>
            );
          })
        ) : (
          <>
            {field?.list?.map((item, index) => (
              <label
                title={item}
                key={index}
                className={
                  "overflow-hidden flex-1 text-ellipsis flex gap-1 capitalize items-center p-1 px-2 has-checked " +
                  subLabelClassName
                }
              >
                <Controller
                  name={updatedName || field?.name}
                  render={({
                    field: { onChange, onBlur, ref, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <input
                        {...field}
                        ref={ref}
                        type="radio"
                        checked={value}
                        className={inputClassName}
                        list={field?.list}
                        {...register(field.name, {
                          required:
                            field?.required && `${field?.name} is required`,
                          onChange: (e) => {
                            let val = e.target.checked;
                            onChange(val);
                          },
                        })}
                      />
                    );
                  }}
                  rules={{ required: field?.required }}
                />

                <span>{item}</span>
              </label>
            ))}
          </>
        )}
      </div>
      {error ? (
        <ErrorText containerClassName="py-1">
          {error?.message}
        </ErrorText>
      ) : null}
    </div>
  );
};

export default Radio;
