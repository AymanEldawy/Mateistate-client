import { Checkbox, Switch } from "Components/StructurePage/CustomFields";
import React, { useEffect, useState } from "react";

export const ReportFilterColumns = ({
  columns,
  selectedColumns,
  setSelectedColumns,
  bodyClassName,
  containerClassName,
  selectAllClassName,
  titleContainerClassName,
  itemClassName,
  titleClassName,
  title = "Columns",
  disabledItem,
  searchKey = 'name'
}) => {
  const [refresh, setRefresh] = useState(false);

  const onChangeFilterColumns = (e) => {
    let name = e.target.name;
    let checked = e.target.checked;
    if (selectedColumns?.[name] && !checked) {
      let list = selectedColumns;
      delete list[name];
      setSelectedColumns(list);
    } else {
      setSelectedColumns((prev) => ({
        ...prev,
        [name]: true,
      }));
    }
    setRefresh((p) => !p);
  };

  const handleToggleSelectAll = (e) => {
    if (e.target.checked) {
      let hash = {};
      for (const col of columns) {
        hash[col?.[searchKey]] = true;
      }
      setSelectedColumns(hash);
    } else {
      setSelectedColumns({});
    }
  };

  useEffect(() => {
    if(disabledItem) setSelectedColumns({});
  }, [disabledItem])

  return (
    <div className={`border rounded-md text-sm overflow-hidden ${containerClassName}`}>
      <div className={titleContainerClassName}>
        <h2
          className={`text-base font-medium text-blue-500 px-4 py-2 ${titleClassName}`}
        >
          {title}
        </h2>
        {!columns?.length ? (
          <p className="px-4 text-red-600 pb-3 italic">There are no options</p>
        ) : (
          <Checkbox
            containerClassName={`flex items-center gap-2 font-medium bg-gray-100 ${selectAllClassName}`}
            inputClassName="disabled:bg-gray-100 disabled:opacity-60 disabled:!text-gray-100"
            text={"select all"}
            onChange={handleToggleSelectAll}
            checked={Object.keys(selectedColumns)?.length === columns?.length}
            disabled={disabledItem}
          />
        )}
      </div>
      <div
        className={` overflow-auto ${
          bodyClassName ? bodyClassName : "max-h-[450px]"
        }`}
      >
        {columns?.map((col) => (
          <Checkbox
            containerClassName={`flex items-center gap-2 !py-2 border-b dark:border-dark-border last:border-0 ${itemClassName}`}
            name={col?.[searchKey]}
            text={col?.[searchKey === 'accessorKey' ? 'header' : 'label']?.replace(/_/g, " ")}
            onChange={onChangeFilterColumns}
            checked={selectedColumns?.[col?.[searchKey]]}
            disabled={disabledItem}
          />
        ))}
      </div>
    </div>
  );
};
