import { useMemo, useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import getTableColumns from "Helpers/columns-structure";
import { SortIcon } from "Components/Icons";
import { useTranslation } from "react-i18next";
import { TableSkeleton } from "Components/StructurePage/CustomTable/TableSkeleton";
import { ResizeBar } from "Components/DynamicTable/TableResizeBar";
import { TablePagination } from "./TablePagination";
import { TableVisibility } from "./TableVisibility";
import { useLocalStorage } from "Hooks/useLocalStorage";

let columnBeingDragged;

const DynamicTable = ({
  data,
  isLoading,
  name,
  openColumnsSetting,
  setOpenColumnsSetting,
  setRowSelection,
  rowSelection,
  outerSelectedId
}) => {

  
  const { t } = useTranslation();
  const { getTable, setTable } = useLocalStorage({});
  const [sorting, setSorting] = useState({});
  const [columnVisibility, setColumnVisibility] = useState(
    getTable(name) || {}
  );

  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnOrder, setColumnOrder] = useState([]);

  useMemo(() => {
    if (Object.keys(columnVisibility).length) setTable(name, columnVisibility);
  }, [columnVisibility]);

  const table = useReactTable({
    columns: getTableColumns(name),
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    enableRowSelection: true,
    onColumnOrderChange: setColumnOrder,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    columnResizeMode: "onChange",
    getRowId: (row, relativeIndex, parent) => {
      if (!!outerSelectedId) return outerSelectedId(row, relativeIndex, parent);
      return row?.id;
    },
    state: {
      sorting,
      columnFilters,
      globalFilter,
      rowSelection,
      columnOrder,
      columnVisibility,
    },
  });
  const onDragStart = (e) => {
    columnBeingDragged = Number(e.currentTarget.dataset.columnIndex);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const newPosition = Number(e.currentTarget.dataset.columnIndex);
    const currentCols = table.getVisibleLeafColumns().map((c) => c.id);
    const colToBeMoved = currentCols.splice(columnBeingDragged, 1);

    currentCols.splice(newPosition, 0, colToBeMoved[0]);
    table.setColumnOrder(currentCols);
  };

  return (
    <>
      {openColumnsSetting && (
        <TableVisibility
          table={table}
          columnVisibility={columnVisibility}
          tableName={name}
          onClose={() => setOpenColumnsSetting(false)}
        />
      )}
      <div className={`relative overflow-x-auto w-full`}>
        <table
          className={`w-[${table.getTotalSize()}] min-w-full w-full `}
          style={{ width: table.getTotalSize() }}
        >
          <thead className={` bg-gray-100  text-sm dark:bg-[#161616]`}>
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      draggable={
                        !table.getState().columnSizingInfo.isResizingColumn
                      }
                      data-column-index={header.index}
                      onDragStart={onDragStart}
                      onDragOver={(e) => {
                        e.preventDefault();
                      }}
                      onDrop={onDrop}
                      style={{ width: header.getSize() }}
                      className={`w-[${header.getSize()}] text-gray-700 whitespace-nowrap dark:text-gray-300 font-medium capitalize relative  group border-b border-gray-200 dark:border-dark-border px-4 py-2 cursor-move 
               
                `}
                      onClick={() => {
                        if (header.column.getCanSort()) {
                          header.column.getToggleSortingHandler();
                        }
                      }}
                    >
                      {/* {header.column.columnDef.header} */}
                      <div className="flex relative items-center">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        {header.column.getCanSort() && (
                          <span className="text-xs ltr:ml-4 rtl:mr-4 inline-block invisible group-hover:visible cursor-pointer">
                            <SortIcon />
                          </span>
                        )}
                      </div>
                      <ResizeBar header={header} />
                    </th>
                  ))}
                </tr>
              );
            })}
          </thead>
          <tbody className={``}>
            {isLoading ? (
              <TableSkeleton />
            ) : (
              <>
                {table.getRowModel().rows?.length
                  ? table.getRowModel().rows.map((row) => {
                      return (
                        <tr
                          key={row.id}
                          className={`border-b last:border-none even:bg-gray-100 dark:even:bg-[#333] border-gray-100 dark:border-dark-border`}
                        >
                          {row.getVisibleCells().map((cell) => {
                            return (
                              <td
                                key={cell?.id}
                                className={`w-[${cell.column.getSize()}] px-4 py-2 whitespace-nowrap`}
                                style={{ width: cell.column.getSize() }}
                              >
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })
                  : null}
              </>
            )}
          </tbody>
        </table>
        {data?.length || isLoading ? null : (
          <div className="p-2 bg-red-100 w-full">
            <span className="sticky left-1/2 -translate-x-1/2 text-red-500">
              {t("empty_result")}
            </span>
          </div>
        )}
        <TablePagination table={table} />
      </div>
    </>
  );
};

export default DynamicTable;
