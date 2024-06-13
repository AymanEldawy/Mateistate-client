import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { ApiActions } from "Helpers/Lib/api";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import { DynamicTable } from "Components/DynamicTable/DynamicTable";
import { useReactTable } from "@tanstack/react-table";
import getTableColumns from "Helpers/columns-structure";
import { useLocalStorage } from "Hooks/useLocalStorage";
import { TableBar } from "Components/DynamicTable/TableBar";

const List = ({ tableName }) => {
  const params = useParams();
  const { name } = params;
  const { getTable, setTable } = useLocalStorage();
  const [columnVisibility, setColumnVisibility] = useState({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [data, setData] = useState([]);

  const columns = useMemo(() => {
    const storageTable = getTable(name);
    if (storageTable) setColumnVisibility(storageTable);
    getTableColumns(name);
  }, [name]);

  useMemo(() => {
    if (Object.keys(columnVisibility).length)
      setTable(tableName, columnVisibility);
  }, [columnVisibility]);

  const table = useReactTable({
    columns,
    data,
   
  });
 

  const getData = async () => {
    setLoading(true);
    const response = await ApiActions.read(name);
    setData(response?.result);
    setLoading(false);
  };

  const deleteItem = async (list) => {
    const res = await ApiActions.remove(name, {
      conditions: [
        {
          type: "and",
          conditions:
            list.length > 1 ? [["guid", "in", list]] : [["guid", "=", list[0]]],
        },
      ],
    });
    if (res.success) getData();
    setOpenConfirmation(false);
  };

  return (
    <>
      <ConfirmModal
        onConfirm={deleteItem}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      <TableBar
        table={table}
        columnVisibility={columnVisibility}
        tableName={tableName}
        onDeleteClick={() => setOpenConfirmation(true)}
        // setColumnFilters={setColumnFilters}
        // setGlobalFilter={setGlobalFilter}
        // onAddClick={onClickAdd ? onClickAdd : () => setOpen(true)}
        // hideAddNew={hideAddNew}
        // extraContent={extraContent}
        // allowPrint={allowPrint}
        // onClickPrint={onClickPrint}
        // rowSelection={rowSelection}
      />
      <DynamicTable title={name} setOpen={setOpen} deleteItem={deleteItem} />
    </>
  );
};

export default List;
