import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { ApiActions } from "Helpers/Lib/api";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import getTableColumns from "Helpers/columns-structure";
import { useLocalStorage } from "Hooks/useLocalStorage";
import getTableData from "Helpers/Lib/global-read";
import { useQuery } from "@tanstack/react-query";
import BlockPaper from "Components/Global/BlockPaper";
import {
  EyeIcon,
  PlusIcon,
  PrintIcon,
  SearchIcon,
  SortIcon,
  TrashIcon,
} from "Components/Icons";
import { useTranslation } from "react-i18next";
import { TablePagination } from "Components/DynamicTable/TablePagination";
import { TableVisibility } from "Components/DynamicTable/TableVisibility";
import { TableSkeleton } from "Components/StructurePage/CustomTable/TableSkeleton";
import { ResizeBar } from "Components/DynamicTable/TableResizeBar";
import { DebouncedInput } from "Components/StructurePage/CustomFields";
import { TableFilterBar } from "Components/DynamicTable/TableFilterBar";
import { TableInfo } from "Components/DynamicTable/TableInfo";

let columnBeingDragged;

const List = ({ tableName, allowPrint, urlToAdd }) => {
  const { t } = useTranslation();
  const params = useParams();
  const { name } = params;
  // const [openConfirmation, setOpenConfirmation] = useState(false);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnOrder, setColumnOrder] = useState([]);
  const [openColumnsSetting, setOpenColumnsSetting] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const { getTable, setTable } = useLocalStorage();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [name, "table"],
    queryFn: async () => await getTableData(name),
  });
  console.log(data,'da');

  useMemo(() => {
    if (Object.keys(columnVisibility).length)
      setTable(tableName, columnVisibility);
  }, []);

  console.log(data);

  const table = useReactTable({
    columns: getTableColumns(name),
    data: !isLoading ? data : [],
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

  const onClickPrint = () => {};

  const deleteItem = async () => {
    let ids = [];
    let list = [];
    // let selected = table.getFilteredSelectedRowModel();

    // for (const row of selected?.rows) {
    //   list.push(row.original);
    //   ids.push(row.original.id);
    // }
    let res = null;

    res = await ApiActions.remove(tableName, {
      conditions: [
        {
          type: "and",
          conditions:
            ids.length > 1 ? [["id", "in", ids]] : [["id", "=", ids[0]]],
        },
      ],
    });

    if (res.success) {
      // setRowSelection([]);
      // await refetchData();
    }
    // setOpenConfirmation(false);
  };

  return (
    <>
      <ConfirmModal
        onConfirm={deleteItem}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      {openColumnsSetting && (
        <TableVisibility
          table={table}
          columnVisibility={columnVisibility}
          tableName={tableName}
          onClose={() => setOpenColumnsSetting(false)}
        />
      )}
      <BlockPaper
        title={name}
        contentBar={
          <div className="flex gap-4 items-center justify-between mb-4">
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
                    className={`block w-full p-2  text-sm rounded-md dark:text-white text-gray-900 border border-gray-300  bg-gray-100 active:ring-blue-200 focus-visible:ring-blue-200 focus:ring-blue-500 focus:border-blue-500`}
                    onChange={(value) => setGlobalFilter(value)}
                    debounce={500}
                  />
                </div>
              </div>
              {table.getPrePaginationRowModel()?.rows?.length ? (
                <div>
                  {table.getPrePaginationRowModel()?.rows?.length} {t("rows")}
                </div>
              ) : null}
            </div>
            <div className="flex gap-2">
              {/* {!urlToAdd ? null : ( */}
              <Link
                to={urlToAdd}
                className="flex items-center gap-2 bg-blue-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
              >
                <PlusIcon className="w-6 h-6" circle />
                {t("add_new")}
              </Link>
              {/* )} */}
              <button
                className="bg-red-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300 disabled:bg-red-200"
                // onClick={() => setOpenConfirmation(true)}
                // disabled={typeof rowSelection === 'object' &&!Object.keys(rowSelection)?.length}
              >
                <TrashIcon />{" "}
              </button>
              <button
                onClick={() => setOpenColumnsSetting(true)}
                className="bg-green-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
              >
                <EyeIcon />
              </button>
              {allowPrint ? (
                <button
                  onClick={onClickPrint}
                  className="flex items-center gap-2 bg-purple-500 rounded-md text-white px-4 py-2"
                >
                  <PrintIcon className="w-5 h-5" />
                  {t("print")}
                </button>
              ) : null}
            </div>
          </div>
        }
      >
        <TableInfo />
        <div className={`relative overflow-x-auto w-full`}>
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
                        style={{ width: header.getSize() }}
                        className={`w-[${header.getSize()}] text-gray-700 whitespace-nowrap dark:text-gray-300 font-medium capitalize relative  group border-b border-gray-200 dark:border-dark-border px-4 py-2 cursor-move 
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
              {isLoading ? (
                <TableSkeleton />
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
                                className={`w-[${cell.column.getSize()}] px-4 py-2 `}
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
                        colSpan={5}
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
          {/* <TablePagination table={table} /> */}
        </div>
      </BlockPaper>
    </>
  );
};

export default List;
