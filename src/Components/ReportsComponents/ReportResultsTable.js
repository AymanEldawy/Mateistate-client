import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRef, useState } from "react";
import { SortIcon } from "Components/Icons";
import { useTranslation } from "react-i18next";
import { ResizeBar } from "Components/TableComponents/TableResizeBar";
import { TableSkeleton } from "Components/TableComponents/TableSkeleton";
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

  // Test Print
  const tableRef = useRef();
  // Dummy Data
  const users = [];

  for (let i = 1; i <= 200; i++) {
    users.push({
      id: i,
      name: `User ${i}`,
      age: Math.floor(Math.random() * 30) + 20,
      job: ["Front-End Developer", "Backend Developer", "UI/UX Designer"][
        Math.floor(Math.random() * 3)
      ],
    });
  }

  const handlePrint = () => {
    const printContents = tableRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const handleSave = () => {

    if (!data && data?.length === 0) {
      console.error("Invalid data provided.");
      return;
    }

    const csvContent = `data:text/csv;charset=utf-8,${[
      columns.map((col) => col.header).join(","),

      ...data.map((item) =>
        columns
          .map((col) => {
            return item[col.accessorKey];
          })
          .join(",")
      ),
    ]
      .map((e) => e)
      .join("\n")}`;

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = `file.csv`;
    link.click();
  };

  return (
    <>
      <div className={`relative overflow-x-auto w-full text-sm`} ref={tableRef}>
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
      <div className="mt-4">
        <button
          onClick={handleSave}
          className="bg-blue-500 rounded-lg text-white px-4 py-2 mr-2"
        >
          Save
        </button>
        <button
          onClick={handlePrint}
          className="bg-green-500 rounded-lg text-white px-4 py-2"
        >
          Print
        </button>
      </div>
    </>
  );
};
