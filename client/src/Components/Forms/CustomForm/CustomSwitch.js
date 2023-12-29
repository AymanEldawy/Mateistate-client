import React from "react";

export const CustomSwitch = ({ label, error, list, name, ...field }) => {
  return (
    <div className="flex flex-col">
      {label ? (
        <p className="overflow-hidden text-ellipsis text-sm font-normal mb-1 capitalize">
          {label}
        </p>
      ) : null}
      <div className="flex gap-4 items-center">
        <label className="relative flex gap-4 items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            {...{
              type: "checkbox",
            }}
            {...field}
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
