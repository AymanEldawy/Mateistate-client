import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const Input = ({
  labelClassName,
  label,
  containerClassName,
  inputClassName,
  error,
  readOnly,
  index,
  updatedName,
  tab,
  onBlur,
  ...field
}) => {
  const { register, watch, setValue } = useFormContext();
  const { name } = field;
  const watchField = field?.watch;
  const watchFieldName = tab ? `${tab}.${watchField}` : watchField;
  const watchFieldCondition = field?.condition;

  useEffect(() => {
    if (watchField && watch(watchFieldName) === watchFieldCondition) {
    } else {
      
    }
  }, [watch(watchFieldName)])

  useEffect(() => {
    let val = field?.defaultValue || field?.value || watch(updatedName || field?.name)
    if(val && field.type === 'date') {
      setValue(updatedName || field?.name, new Date(val).toISOString()?.substring(0, 10))
    }
  }, [field?.defaultValue])

  return (
    <div className={"flex flex-col " + containerClassName} key={field?.name}>
      {label ? (
        <label
          title={label}
          htmlFor={name}
          className={
            "overflow-hidden text-ellipsis text-sm font-normal whitespace-nowrap mb-1 capitalize flex items-center gap-2" +
            labelClassName
          }
        >
          {label}{" "}
          {field?.required ? (
            <span className="text-red-500 mx-1">*</span>
          ) : null}
        </label>
      ) : null}
      <input
        id={name}
        className={`border read-only:bg-blue-100 dark:read-only:bg-[#444] rounded p-1 ${inputClassName} ${
          error ? "border-red-200 text-red-500" : ""
        } 
         `}
        type={field?.type}
        readOnly={readOnly|| (field?.disabledCondition && watch(field?.disabledCondition))}
        defaultValue={field?.defaultValue || field.type === "number" ? 0 : null}
        // value={}
        {...register(updatedName || field.name, {
          valueAsNumber: field.type === "number",
          valueAsDate: field.type === "data",
          required: field?.required,
          validate: (value) => {},
        })}
        onBlur={onBlur}
      />
      {error ? (
        <p className="bg-red-200 mt-2 rounded text-sm text-red-500 px-2 py-1">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
