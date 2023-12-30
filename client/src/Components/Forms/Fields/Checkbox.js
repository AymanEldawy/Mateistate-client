import React from "react";

const Checkbox = ({ ...field }) => {
  return (
    <input
      type="checkbox"
      {...field}
      className={
        "w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " +
        field?.className
      }
    />
  );
};

export default Checkbox;
