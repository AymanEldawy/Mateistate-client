import React from "react";
import { useFormContext, Controller } from "react-hook-form";

const Radio = ({
  labelClassName,
  containerClassName,
  subLabelClassName,
  inputClassName,
  label,
  error,
  values,
  updatedName,
  ...field
}) => {
  const { register } = useFormContext();

  return (
    <div className={"flex flex-col " + containerClassName}>
      {label ? (
        <p
          title={label}
          className={
            "overflow-hidden text-ellipsis text-sm font-normal whitespace-nowrap mb-1 capitalize " +
            labelClassName
          }
        >
          {label}{" "}
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
                  render={({ field: { onChange } }) => {
                    return (
                      <input
                        type="checkbox"
                        className={inputClassName}
                        list={field?.list}
                        {...register(name, {
                          required: field?.required,
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
                  render={({ field: { onChange } }) => {
                    return (
                      <input
                        {...field}
                        type="radio"
                        checked={values?.[item]}
                        className={inputClassName}
                        list={field?.list}
                        {...register(field.name, {
                          required: field?.required,
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
        <p className="bg-red-200 mt-2 rounded text-sm text-red-500 px-2 py-1">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default Radio;
