import { EyeIcon, SearchIcon, TrashIcon } from "Helpers/Icons";
import SelectField from "Components/Forms/CustomForm/SelectField";
import SearchBar from "Components/SearchBar/SearchBar";
import { useTranslation } from "react-i18next";
import { itemsListPerPages } from "Helpers/constants";
import { Drawer } from "Components/Global/Drawer";
import { useState } from "react";
import { ColumnSetting } from "Components/CustomTable/ColumnSetting";
import { DebouncedInput } from "../Forms/CustomForm/DebouncedInput";
import { TableVisibility } from "./TableVisibility";

export const NewTableBar = ({
  onAddClick,
  onDeleteClick,
  tableName,
  columns,
  setGlobalFilter,
  table,
  columnVisibility,
}) => {
  const { t } = useTranslation();
  const [openColumnsSetting, setOpenColumnsSetting] = useState(false);

  return (
    <>
      <div className="flex justify-between gap-2 border-b pb-4 dark:border-borderdark">
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
          <div>{table.getPrePaginationRowModel().rows.length} Rows</div>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-blue-500 text-sm text-white rounded px-2 py-1 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
            onClick={onAddClick}
          >
            {t("add_new")}
          </button>
          <button
            className="bg-red-500 text-sm text-white rounded px-2 py-1 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300 disabled:bg-red-200"
            onClick={onDeleteClick}
            // disabled={!Object.keys(selectedList)?.length}
          >
            <TrashIcon />{" "}
          </button>
          <button
            onClick={() => setOpenColumnsSetting(true)}
            className="bg-green-500 text-sm text-white rounded px-2 py-1 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
          >
            <EyeIcon />
          </button>
          {/* <button
          className="bg-green-500 text-sm text-white rounded px-2 py-1 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
          onClick={onFilterClick}
        >
          Filter
        </button> */}
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
