import React from "react";

const Checkbox = ({ text, containerClassName, ...field }) => {
  return (
    <label className={`overflow-hidden flex-1 text-ellipsis flex gap-1 capitalize items-center p-1 px-2 has-checked ${containerClassName}`}>
      <input
        type="checkbox"
        {...field}
        className={
          "w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " +
          field?.className
        }
      />
      {text ? text : null}
    </label>
  );
};

export default Checkbox;
