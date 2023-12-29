import { EyeIcon, TrashIcon } from "Helpers/Icons";
import SelectField from "Components/Forms/CustomForm/SelectField";
import SearchBar from "Components/SearchBar/SearchBar";
import { useTranslation } from "react-i18next";
import { itemsListPerPages } from "Helpers/constants";
import { Drawer } from "Components/Global/Drawer";
import { useState } from "react";
import { ColumnSetting } from "Components/CustomTable/ColumnSetting";

export const TableBar = ({
  onAddClick,
  onDeleteClick,
  onFilterClick,
  onSearchChange,
  searchValue,
  onSelectChange,
  itemsPerPage,
  searchKey,
  setSearchKey,
  selectedList,
  tableName,
  columns,
  setColumns,
}) => {
  const { t } = useTranslation();
  const [openColumnsSetting, setOpenColumnsSetting] = useState(false);

  return (
    <>
      <div className="flex justify-between gap-2">
        <div className="flex gap-2 items-center">
          <div className="relative">
            <SearchBar
              value={searchValue}
              onSearchChange={onSearchChange}
              columns={columns}
              searchKey={searchKey}
              setSearchKey={setSearchKey}
            />
          </div>
          <SelectField
            hideText
            value={itemsPerPage}
            onChange={(e) => onSelectChange(e.target.value)}
            list={itemsListPerPages(t)}
            className="p-2 rounded-md"
          />
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
            disabled={!Object.keys(selectedList)?.length}
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
        <Drawer onClose={() => setOpenColumnsSetting(false)}>
          <ColumnSetting
            columns={columns}
            setColumns={setColumns}
            tableName={tableName}
            onClose={() => setOpenColumnsSetting(false)}
          />
        </Drawer>
      )}
    </>
  );
};
