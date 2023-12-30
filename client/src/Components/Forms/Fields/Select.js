import React from "react";

const Select = ({
  labelClassName,
  containerClassName,
  selectClassName,
  label,
  error,
  list,
  keyValue = "id",
  keyLabel = "name",
  isArray,
  ...field
}) => {
  const { name } = field;
  return (
    <div className={"flex flex-col " + containerClassName}>
      {label ? (
        <label
          htmlFor={name}
          className={
            "overflow-hidden text-ellipsis text-sm font-normal mb-1 capitalize " +
            labelClassName
          }
        >
          {label}
        </label>
      ) : null}
      <div className="flex gap-4 items-center capitalize">
        <select
          className={`border rounded w-full p-[6px] ${selectClassName}  ${
            error ? "border-red-200  text-red-500" : ""
          }`}
          {...field}
        >
          {list?.map((item, index) => (
            <option
              key={isArray ? item : item[keyValue]}
              className="p-1 capitalize"
              value={isArray ? item : item[keyValue]}
            >
              {isArray ? item : item[keyLabel]}
            </option>
          ))}
        </select>
      </div>
      {error ? (
        <p className="bg-red-200 mt-2 rounded text-sm text-red-500 px-2 py-1">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default Select;
