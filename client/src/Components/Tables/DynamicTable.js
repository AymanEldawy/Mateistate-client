import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { ResizeBar } from "./TableResizeBar";
import BlockPaper from "Components/BlockPaper/BlockPaper";
import { SortIcon } from "Helpers/Icons";
import { useTranslation } from "react-i18next";
import { NewTableBar } from "./NewTableBar";
import { TablePagination } from "./TablePagination";
import IndeterminateCheckbox from "./IndeterminateCheckbox";
import getTableColumns from "Helpers/columns-structure";

const data = [
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
  { id: 2211, name: "Ahmed", date: Date.now() },
  { id: 133, name: "Ayman", date: Date.now() },
  { id: 3533, name: "Galal", date: Date.now() },
  { id: 4211, name: "Sampo", date: Date.now() },
];

let columnBeingDragged;

export const DynamicTable = ({
  title,
  containerClassName,
  tableClassName,
  tableHeadClassName,
  tableBodyClassName,
  thClassName,
  tdClassName,
  setOpen,
}) => {
  const { t } = useTranslation();
  const [rowSelection, setRowSelection] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnOrder, setColumnOrder] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});

  const columns = useMemo(() => getTableColumns(title), [title]);

  const table = useReactTable({
    columns,
    data: [],
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    enableRowSelection: true,
    // enableMultiRowSelection: true,
    onColumnOrderChange: setColumnOrder,
    onRowSelectionChange: setRowSelection,
    columnResizeMode: "onChange",
    state: {
      columnVisibility: columnVisibility,
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
    table.setColumnOrder(currentCols); // <------------------------here you save the column ordering state
  };

  return (
    <>
      <BlockPaper title={title}>
        <NewTableBar
          setColumnFilters={setColumnFilters}
          setGlobalFilter={setGlobalFilter}
          table={table}
          columnVisibility={columnVisibility}
          tableName={title}
          onAddClick={() => setOpen(true)}
        />

        <div
          className={`relative overflow-x-auto w-full  ${containerClassName}`}
        >
          <table
            className={`w-[${table.getTotalSize()}] w-full ${tableClassName}`}
            style={{ width: table.getTotalSize() }}
          >
            <thead
              className={`${tableHeadClassName} bg-gray-200 dark:bg-[#161616]`}
            >
              {table.getHeaderGroups().map((headerGroup) => {
                return (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        // the below props for column reordering ---------------------starting props for drag&drop
                        draggable={
                          !table.getState().columnSizingInfo.isResizingColumn
                        }
                        data-column-index={header.index}
                        onDragStart={onDragStart}
                        onDragOver={(e) => {
                          e.preventDefault();
                        }}
                        onDrop={onDrop} // <---------------------------------------- ending props for drag&drop
                        style={{ width: header.getSize() }}
                        className={`w-[${header.getSize()}] relative whitespace-normal group border border-gray-300 dark:border-borderdark px-4 py-2 cursor-move ${thClassName}
                    ${
                      header.column.getIsSorted()
                        ? "sorting-hover [&_span]:visible bg-gray-300 dark:bg-bgmaindark "
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
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => {
                  return (
                    <tr
                      key={row.id}
                      className={`border-b last:border-none even:bg-gray-100 dark:even:bg-[#333] border-gray-100 dark:border-borderdark`}
                    >
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            className={`w-[${cell.column.getSize()}] px-4 py-2 border dark:border-borderdark ${tdClassName}`}
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
                <tr className="text-red-500 bg-red-100 p-1 rounded-sm text-center mt-2">
                  <td colSpan={columns?.length}>{t("empty_result")}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <TablePagination table={table} />
      </BlockPaper>
    </>
  );
};
