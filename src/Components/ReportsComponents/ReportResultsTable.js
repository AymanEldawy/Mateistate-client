import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { SortIcon } from "Components/Icons";
import { useTranslation } from "react-i18next";
import { TableSkeleton } from "../StructurePage/CustomTable/TableSkeleton";
import { ResizeBar } from "Components/DynamicTable/TableResizeBar";
import { TablePagination } from "Components/DynamicTable/TablePagination";
let columnBeingDragged;

export const ReportResultsTable = ({ data, columns, loading }) => {
  const { t } = useTranslation();
  const [rowSelection, setRowSelection] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnOrder, setColumnOrder] = useState([]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    enableRowSelection: true,
    onColumnOrderChange: setColumnOrder,
    onRowSelectionChange: setRowSelection,
    columnResizeMode: "onChange",
    state: {
      columnFilters,
      globalFilter,
      rowSelection,
      columnOrder,
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
      <div className={`relative overflow-x-auto w-full text-sm`}>
        <table
          className={`w-[${table.getTotalSize()}] w-full `}
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
                      // style={{ width: header.getSize() }}
                      className={` text-gray-700 whitespace-nowrap dark:text-gray-300 font-medium capitalize relative  group border-b border-gray-200 dark:border-dark-border px-4 py-2 cursor-move
                      ${
                        header.column.getIsSorted()
                          ? "sorting-hover [&_span]:visible bg-gray-300 dark:bg-dark-bg "
                          : ""
                      }
                      `}
                      onClick={() => {
                        // if (header.column.getCanSort())
                        header.column.getToggleSortingHandler();
                        // header.column.getToggleSortingHandler();
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
                              className={` px-4 py-2`}
                              // style={{ width: cell.column.getSize() }}
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
    </>
  );
};
