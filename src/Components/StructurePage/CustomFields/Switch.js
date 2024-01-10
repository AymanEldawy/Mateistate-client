import React from "react";
import { useFormContext } from "react-hook-form";

const Input = ({
  labelClassName,
  label,
  containerClassName,
  inputClassName,
  error,
  handleInputChange,
  updatedName,
  // register,
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
      <div className="flex gap-4 items-center">
        <label
          title={label}
          className="relative flex gap-4 items-center cursor-pointer"
        >
          <input
            id={name}
            type="checkbox"
            className="sr-only peer"
            {...register(updatedName || field.name, {
              required: field?.required,
              validate: (value) => {},
              onChange: (e) =>
                handleInputChange(e.target.name, e.target.checked),
            })}
          />
          <div className="w-11 h-6 after:left-[1px] bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      {error ? (
        <p className="bg-red-200 mt-2 rounded text-sm text-red-500 px-2 py-1">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
