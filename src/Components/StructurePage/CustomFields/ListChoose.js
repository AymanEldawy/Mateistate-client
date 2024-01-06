import React from "react";

const ListChoose = ({
  labelClassName,
  containerClassName,
  subLabelClassName,
  inputClassName,
  label,
  list,
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
      <div className="flex gap-4 items-center">
        {list?.map((item) => (
          <label
            title={item}
            key={item}
            className={
              "overflow-hidden text-ellipsis flex gap-1 capitalize items-center p-1 px-2 rounded-md has-checked " +
              subLabelClassName
            }
          >
            <input
              type="checkbox"
              name={name}
              // value={true}
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

export default ListChoose;
