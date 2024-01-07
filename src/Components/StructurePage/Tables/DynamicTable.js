import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { ResizeBar } from "./TableResizeBar";
import BlockPaper from "Components/BlockPaper/BlockPaper";
import { SortIcon } from "Helpers/Icons";
import { useTranslation } from "react-i18next";
import { NewTableBar } from "./NewTableBar";
import { TablePagination } from "./TablePagination";
import getTableColumns from "Helpers/columns-structure";
import { useLocalStorage } from "Hooks/useLocalStorage";
import { ApiActions } from "Helpers/Lib/api";
import ConfirmModal from "Components/ConfirmModal/ConfirmModal";
import { TableSkeleton } from "../CustomTable/TableSkeleton";

let columnBeingDragged;

export const DynamicTable = ({
  tableName,
  data,
  containerClassName,
  tableClassName,
  tableHeadClassName,
  tableBodyClassName,
  thClassName,
  tdClassName,
  setOpen,
  refetchData,
  loading,
}) => {
  const { t } = useTranslation();
  const { getTable, setTable } = useLocalStorage();
  const [rowSelection, setRowSelection] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnOrder, setColumnOrder] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const columns = useMemo(() => getTableColumns(tableName), [tableName]);

  useEffect(() => {
    const storageTable = getTable(tableName);
    if (storageTable) setColumnVisibility(storageTable);
  }, [tableName]);

  useEffect(() => {
    if (Object.keys(columnVisibility).length)
      setTable(tableName, columnVisibility);
  }, [columnVisibility]);

  const table = useReactTable({
    columns,
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
    columnResizeMode: "onChange",
    state: {
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

  const deleteItem = async () => {
    let list = [];
    let selected = table.getFilteredSelectedRowModel();

    for (const row of selected.rows) {
      list.push(row.original.id);
    }

    const res = await ApiActions.remove(tableName, {
      conditions: [
        {
          type: "and",
          conditions:
            list.length > 1 ? [["id", "in", list]] : [["id", "=", list[0]]],
        },
      ],
    });

    if (res.success) {
      setRowSelection([]);
      await refetchData();
    }
    setOpenConfirmation(false);
  };

  return (
    <>
      <ConfirmModal
        onConfirm={deleteItem}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      <BlockPaper
        title={tableName}
        subTitle={
          table.getGroupedSelectedRowModel()?.rows.length ? (
            <span className="text-blue-500 rounded-md text-sm font-medium capitalize">
              {table.getGroupedSelectedRowModel()?.rows.length}{" "}
              {t("selected_rows")}
            </span>
          ) : null
        }
      >
        <NewTableBar
          setColumnFilters={setColumnFilters}
          setGlobalFilter={setGlobalFilter}
          table={table}
          columnVisibility={columnVisibility}
          tableName={tableName}
          onAddClick={() => setOpen(true)}
          onDeleteClick={() => setOpenConfirmation(true)}
        />

        <div
          className={`relative overflow-x-auto w-full  ${containerClassName}`}
        >
          <table
            className={`w-[${table.getTotalSize()}] text-sm w-full ${tableClassName}`}
            style={{ width: table.getTotalSize() }}
          >
            <thead
              className={`${tableHeadClassName} bg-gray-100 dark:bg-[#161616]`}
            >
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
                        className={`w-[${header.getSize()}] text-gray-700 dark:text-gray-300 font-medium capitalize relative whitespace-normal group border-b border-gray-200 dark:border-dark-border px-4 py-2 cursor-move ${thClassName}
                      ${
                        header.column.getIsSorted()
                          ? "sorting-hover [&_span]:visible bg-gray-300 dark:bg-dark-bg "
                          : ""
                      }
                      `}
                        onClick={
                          header.column.getCanSort() &&
                          header.column.getToggleSortingHandler()
                        }
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
            <tbody className={tableBodyClassName}>
              {loading ? (
                <TableSkeleton columns={columns} />
              ) : (
                <>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => {
                      return (
                        <tr
                          key={row.id}
                          className={`border-b last:border-none even:bg-gray-100 dark:even:bg-[#333] border-gray-100 dark:border-dark-border`}
                        >
                          {row.getVisibleCells().map((cell) => {
                            return (
                              <td
                                key={cell?.id}
                                className={`w-[${cell.column.getSize()}] px-4 py-2 ${tdClassName}`}
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
                  ) : (
                    <tr className="text-red-500 h-28 bg-[#f1f1f1e8] dark:bg-[#00000021] p-1 rounded-sm text-center mt-2">
                      <td
                        colSpan={columns.length}
                        rowSpan={5}
                        className="ltr:text-left rtl:text-right relative"
                      >
                        <span className="sticky left-1/2 -translate-x-1/2">
                          {t("empty_result")}
                        </span>
                      </td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>

        <TablePagination table={table} />
      </BlockPaper>
    </>
  );
};
