
import { TrashIcon } from "Helpers/Icons";
import SelectField from "Components/CustomForm/SelectField";
import SearchBar from "Components/SearchBar/SearchBar";
import { useTranslation } from "react-i18next";

export const TableBar = ({
  onAddClick,
  onDeleteClick,
  onFilterClick,
  onSearchChange,
  searchValue,
  onSelectChange,
  itemsPerPage,
  columns,
  searchKey,
  setSearchKey,
  selectedList,
}) => {
  const { t } = useTranslation();
  const itemsListPerPages = [
    { id: "10", name: t("Number_rows") + " 10" },
    { id: "20", name: t("Number_rows") + " 20" },
    { id: "50", name: t("Number_rows") + " 50" },
    { id: "100", name: t("Number_rows") + " 100" },
    { id: "200", name: t("Number_rows") + " 200" },
    { id: "500", name: t("Number_rows") + " 500" },
  ];
  return (
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
          list={itemsListPerPages}
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
        {/* <button
          className="bg-green-500 text-sm text-white rounded px-2 py-1 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
          onClick={onFilterClick}
        >
          Filter
        </button> */}
      </div>
    </div>
  );
};
