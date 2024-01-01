import React from "react";

const Textarea = ({
  labelClassName,
  label,
  containerClassName,
  textareaClassName,
  error,
  ...field
}) => {
  const { name } = field;
  return (
    <div className={"flex flex-col " + containerClassName}>
      {label ? (
        <label
          title={label}
          htmlFor={name}
          className={
            "overflow-hidden text-ellipsis text-sm font-normal whitespace-nowrap mb-1 capitalize " +
            labelClassName
          }
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        className={`border read-only:bg-blue-100 dark:read-only:bg-[#444] rounded p-1 ${
          error ? "border-red-200 text-red-500" : ""
        } ${textareaClassName}`}
        {...field}
      />
      {error ? (
        <p className="bg-red-200 mt-2 rounded text-sm text-red-500 px-2 py-1">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default Textarea;
