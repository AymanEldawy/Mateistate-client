import { EyeIcon, PlusIcon, PrintIcon, SearchIcon, TrashIcon } from "Components/Icons";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { DebouncedInput } from "../CustomFields";
import { TableVisibility } from "./TableVisibility";

export const NewTableBar = ({
  onAddClick,
  onDeleteClick,
  tableName,
  columns,
  setGlobalFilter,
  table,
  columnVisibility,
  hideAddNew,
  extraContent,
  allowPrint,
  onClickPrint,
  rowSelection
}) => {
  const { t } = useTranslation();
  const [openColumnsSetting, setOpenColumnsSetting] = useState(false);

  return (
    <>
      <div className="flex justify-between items-end gap-2 border-b pb-4 dark:border-dark-border">
        <div className="flex gap-2 items-center">
          <div className="relative">
            <div className="relative md:block ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 overflow-hidden">
                <span className="pointer-events-none">
                  <SearchIcon />
                </span>
              </div>
              <DebouncedInput
                type="text"
                id="search-navbar"
                className={`block w-full p-2  text-sm rounded-md dark:text-white text-gray-900 border border-gray-300  bg-gray-100 active:ring-blue-200 focus-visible:ring-blue-200 focus:ring-blue-500 focus:border-blue-500 ${
                  !!columns ? "pl-16" : "pl-10"
                }`}
                onChange={(value) => setGlobalFilter(value)}
                debounce={500}
              />
            </div>
          </div>
          {table.getPrePaginationRowModel().rows.length ? (
            <div>
              {table.getPrePaginationRowModel().rows.length} {t("rows")}
            </div>
          ) : null}
        </div>
        {extraContent ? extraContent : null}
        <div className="flex gap-2">
          {hideAddNew ? null : (
            <button
              className="flex items-center gap-2 bg-blue-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
              onClick={onAddClick}
            >
              <PlusIcon className="w-6 h-6" circle />
              {t("add_new")}
            </button>
          )}
          <button
            className="bg-red-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300 disabled:bg-red-200"
            onClick={onDeleteClick}
            disabled={!Object.keys(rowSelection)?.length}
          >
            <TrashIcon />{" "}
          </button>
          <button
            onClick={() => setOpenColumnsSetting(true)}
            className="bg-green-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
          >
            <EyeIcon />
          </button>
          {allowPrint ? (
            <button
              onClick={onClickPrint}
              className="flex items-center gap-2 bg-purple-500 rounded-md text-white px-4 py-2"
            >
              <PrintIcon className="w-5 h-5" />
              {t('print')}
            </button>
          ) : null}
        </div>
      </div>
      {openColumnsSetting && (
        <TableVisibility
          table={table}
          columnVisibility={columnVisibility}
          tableName={tableName}
          onClose={() => setOpenColumnsSetting(false)}
        />
      )}
    </>
  );
};
