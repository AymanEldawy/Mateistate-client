import { Button } from "Components/Global/Button";
import { CloseIcon } from "Helpers/Icons";
import { useLocalStorage } from "Hooks/useLocalStorage";
import React, { useEffect, useMemo, useState } from "react";

export const ColumnSetting = ({ tableName, columns, setColumns, onClose }) => {
  const { getTable, setTable } = useLocalStorage();
  const [loading, setLoading] = useState(false);
  const [hashColumns, setHashColumns] = useState({});

  useEffect(() => {
    if (columns.length) {
      let hash = {};
      for (const col of columns) {
        hash[col.name] = col;
      }
      setHashColumns(hash);
    }
  }, [columns]);

  const changeView = (e, type) => {
    const element = e.target;
    console.log(element.name, hashColumns[element.name]);

    setHashColumns((prev) => ({
      ...prev,
      [element.name]: {
        ...prev?.[element.name],
        [`hide_in_${type}`]: element.checked,
      },
    }));
  };
  console.log(hashColumns);

  console.log(hashColumns);
  const saveSetting = () => {
    setLoading(true);
    let newColumns = Object.values(hashColumns);
    setTable(tableName, newColumns);
    setColumns(newColumns);
    setLoading(false);
  };

  return (
    <div className="mt-4 w-72 overflow-auto max-h-full">
      <div className="flex justify-between items-center gap-4 px-2">
        <h3 className="font-semibold text-lg text-center capitalize ltr:border-l-4 rtl:border-r-4 px-2 text-primary border-primary">
          {tableName}
        </h3>
        <div className="flex items-center gap-2">
          <Button
            title={"Save"}
            loading={loading}
            onClick={saveSetting}
            classes="text-xs px-4 w-fit"
          />
          <button
            onClick={onClose}
            className=" border rounded-full flex items-center justify-center h-7 w-7 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <ul className="flex flex-col rounded-md mt-4 pb-12">
        <li className="border-b last:border-b-0 p-2 px-4 text-sm capitalize flex items-center justify-between gap-4 bg-gray-300">
          <span className="w-1/2">column name</span>
          <span className="w-1/4">table</span>
          <span className="w-1/4">form</span>
        </li>
        {Object.values(hashColumns).map((col) => {
          return (
            <li
              key={col.name}
              className="border-b last:border-b-0 p-2 px-4 text-sm capitalize flex items-center justify-between gap-4 odd:bg-gray-100"
            >
              <span className="w-1/2 ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {col.name}
              </span>
              <label className="relative w-1/4 flex gap-4 items-center cursor-pointer">
                <input
                  type="checkbox"
                  name={col.name}
                  value={col.hide_in_table}
                  className="sr-only peer"
                  checked={col?.hide_in_table}
                  onChange={(e) => changeView(e, "table")}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
              <label className="relative w-1/4 flex gap-4 items-center cursor-pointer">
                <input
                  type="checkbox"
                  name={col.name}
                  value={col.hide_in_form}
                  className="sr-only peer"
                  checked={col?.hide_in_form}
                  onChange={(e) => changeView(e, "form")}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

