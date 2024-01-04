import React from "react";

const Radio = ({
  labelClassName,
  containerClassName,
  subLabelClassName,
  inputClassName,
  label,
  list,
  error,
  values,
  ...field
}) => {
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
          {label} {field?.required ? <span className="text-red-500 mx-1">*</span> : null}
        </p>
      ) : null}
      <div className="flex items-center border rounded-md overflow-hidden">
        {list?.map((item, index) => (
          <label
            title={item}
            key={index}
            className={
              "overflow-hidden flex-1 text-ellipsis flex gap-1 capitalize items-center p-1 px-2 has-checked " +
              subLabelClassName
            }
          >
            <input
              type="radio"
              name={item}
              checked={values?.[item]}
              {...field}
              className={inputClassName}
            />
            <span>{item}</span>
          </label>
        ))}
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
