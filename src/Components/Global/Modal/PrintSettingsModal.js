import { Button } from "Components/Global/Button";
import Modal from "Components/Global/Modal/Modal";
import PRINT from "Helpers/Lib/operations/global-print";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const PrintSettingsModal = ({ open, setOpen, name, columns, data }) => {
  const { t } = useTranslation();
  const [selectedColumns, setSelectedColumns] = useState({});

  const onConfirm = () => {
    const fn = PRINT?.[name];
    if (fn) {
      fn(columns, data);
    } else {
      let newData = [];
      for (const item of data) {
        let newItem = {};
        for (const col in selectedColumns) {
          newItem[col] = item?.[col];
        }
        newData.push(newItem)
      }
      PRINT.normal(newData, name);
    }
  };

  const onChangeColumn = (checked, column) => {
    let newColumns = selectedColumns;
    if (checked) {
      newColumns[column] = checked;
    } else {
      delete newColumns[column];
    }
    setSelectedColumns(newColumns);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className="">
        {columns?.map((column) => {
          if (column?.id === "select") return;
          return (
            <div key={column.id}>
              <li
                className="border-b last:border-b-0 p-2 px-4 text-sm capitalize flex items-center justify-between gap-4  dark:bg-transparent"
              >
                <span className="w-1/2 ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {column.header}
                </span>
                <label
                  title={column.id}
                  className="relative w-1/4 flex gap-4 items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    {...{
                      type: "checkbox",
                      checked: selectedColumns?.[column],
                      onChange: (e) =>
                        onChangeColumn(e.target.checked, column?.header),
                    }}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </li>
            </div>
          );
        })}
      </div>
      <div className="flex gap justify-end gap-2 border-t pt-4 mt-4 dark:border-dark-border">
        <Button
          title={t("cancel")}
          classes="!bg-transparent !text-gray-500 border"
          onClick={() => setOpen(false)}
        />
        <Button title={t("print")} classes="!bg-blue-500" onClick={onConfirm} />
      </div>
    </Modal>
  );
};

export default PrintSettingsModal;
