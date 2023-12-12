import { memo } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

import ChevronIcon from "Helpers/Icons/ChevronIcon";
import { EditIcon, PaletteIcon } from "Helpers/Icons";

import Table from "./Table";
import TableBody from "./TableBody";
import TableCol from "./TableCol";
import TableHead from "./TableHead";
import TableHeadCol from "./TableHeadCol";
import TableRow from "./TableRow";
import TableUniqueCol from "./TableUniqueCol";
import { TableSkeleton } from "./TableSkeleton";
import { useTranslation } from "react-i18next";
import { DropDowns } from "Helpers/functions";

let sorting = {};

const SuperTable = ({
  columns,
  data,
  allowSelect,
  searchValue,
  itemsPerPage,
  selectedList,
  setSelectedList,
  table,
  loading,
  // searchKey,
  getCachedList,
}) => {
  const { t } = useTranslation();
  const [filterList, setFilterList] = useState(data);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setFilterList(data);
  }, [data]);

  useEffect(() => {
    // Needed more work
    const endOffset = itemOffset + parseInt(itemsPerPage);
    setCurrentItems(filterList?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filterList?.length / parseInt(itemsPerPage)));
  }, [filterList, itemsPerPage, itemOffset]);

  useEffect(() => {
    if (searchValue) {
      let newList = [];
      for (const col of columns) {
        for (const item of data) {
          if (typeof item[col] == "string") {
            if (
              item[col]?.toLowerCase()?.startsWith(searchValue?.toLowerCase())
            )
              newList.push(item);
          } else {
            if (
              item[col]
                ?.toString()
                ?.toLowerCase()
                ?.startsWith(searchValue?.toLowerCase())
            )
              newList.push(item);
          }
        }
      }
      // setItemOffset(1);
      setCurrentItems(newList?.slice(0, itemsPerPage));
    } else {
      // setItemOffset(1);
      setFilterList(data);
      setCurrentItems(data?.slice(0, itemsPerPage));
    }
  }, [searchValue, data]);

  const handelSelect = useCallback(
    (itemId) => {
      if (selectedList[itemId]) {
        let newSelectedList = selectedList;
        delete newSelectedList[itemId];
        setSelectedList((prev) => {
          return {
            ...prev,
            ...newSelectedList,
          };
        });
      } else {
        setSelectedList((prev) => {
          return {
            ...prev,
            [itemId]: itemId,
          };
        });
      }
    },
    [selectedList]
  );

  const handleSelectedAll = useCallback(
    (e) => {
      if (!e?.target?.checked) {
        setSelectedList({});
      } else {
        let newList = {};
        for (const key in data) {
          newList[data?.[key]?.guid] = data?.[key]?.guid;
        }
        setSelectedList(newList);
      }
    },
    [selectedList]
  );

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filterList?.length;
    setItemOffset(newOffset);
  };

  const sortBy = async (col) => {
    const list = [...currentItems];
    const newSortOrder = sorting[col] === "asc" ? "desc" : "asc";
    let newList = list.sort((a, b) => {
      const valueA = a[col];
      const valueB = b[col];
      if (typeof valueA === "string") {
        return newSortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
      return newSortOrder === "asc" ? valueA - valueB : valueB - valueA;
    });
    setCurrentItems(newList);
    setRefresh((prev) => !prev);
    sorting[col] = newSortOrder;
  };

  return (
    <>
      <Table>
        <TableHead>
          {allowSelect ? (
            <TableHeadCol>
              <input
                type="checkbox"
                className="w-4 h-4 "
                onChange={handleSelectedAll}
              />
            </TableHeadCol>
          ) : null}
          <TableHeadCol>Actions</TableHeadCol>
          {columns?.map((col, index) => {
            if (col === "guid") return;
            return (
              <TableHeadCol key={`${col}-${index}`} sort sortBy={sortBy}>
                {col}
              </TableHeadCol>
            );
          })}
        </TableHead>
        <TableBody>
          {loading ? (
            <TableSkeleton columns={columns} />
          ) : (
            <>
              {currentItems?.map((row, index) => {
                return (
                  <TableRow
                    key={`${row?.Name}-${index}`}
                    classes={`border-b dark:border-borderdark whitespace-nowrap ${
                      !!selectedList[row?.guid]
                        ? "bg-gray-100 dark:bg-[#1115]"
                        : ""
                    }`}
                  >
                    {allowSelect ? (
                      <TableCol>
                        <input
                          className="w-4 h-4"
                          type="checkbox"
                          checked={!!selectedList[row?.guid]}
                          onChange={() => handelSelect(row?.guid)}
                        />
                      </TableCol>
                    ) : null}
                    <TableCol>
                      <div className="flex gap-1">
                        {table && table === "building" ? (
                          <Link
                            className="hover:underline text-blue-500 order-1"
                            to={`/buildings/${row?.Name}/tools/${row?.guid}`}
                            state={{ row, table }}
                          >
                            <PaletteIcon />
                          </Link>
                        ) : (
                          <Link
                            className="hover:underline text-blue-500 order-1"
                            to={`/update/${table}/${row?.guid}`}
                            state={{ row, table }}
                          >
                            <EditIcon className="w-5 h-5" />
                          </Link>
                        )}
                      </div>
                    </TableCol>
                    {columns?.map((col, index) => {
                      if (col === "guid") return;
                      if (col === "seclvl") {
                        return (
                          <TableCol classes="whitespace-nowrap" key={index}>
                            {DropDowns(col)?.[row?.[col]]?.name}
                          </TableCol>
                        );
                      }
                      if (col === "CDate") {
                        let date = new Date(row[col]).toLocaleDateString(
                          "en-UK",
                          {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            weekday: "short",
                          }
                        );
                        let time = new Date(row[col]).toLocaleTimeString(
                          "en-UK",
                          {
                            timeStyle: "short",
                          }
                        );
                        return (
                          <TableCol classes="whitespace-nowrap" key={index}>
                            {date} | {time}
                          </TableCol>
                        );
                      } else if (col?.toLowerCase()?.includes("guid")) {
                        return (
                          <TableUniqueCol
                            row={row}
                            col={col}
                            key={index}
                            val={row[col]}
                            getCachedList={getCachedList}
                          />
                        );
                      } else if (col === "Name") {
                        return (
                          <TableCol key={index}>
                            <Link
                              className="hover:underline text-blue-500 order-2"
                              to={`/update/${table}/${row?.guid}`}
                              state={{ row, table }}
                            >
                              {row[col]}
                            </Link>
                          </TableCol>
                        );
                      } else return <TableCol key={index}>{row[col]}</TableCol>;
                    })}
                  </TableRow>
                );
              })}
            </>
          )}
        </TableBody>
      </Table>
      {!loading && !currentItems?.length ? (
        <div
          colSpan={columns?.length}
          className="text-red-500 bg-red-100 p-1 rounded-sm text-center mt-2"
        >
          {t("empty_result")}
        </div>
      ) : null}
      {currentItems?.length ? (
        <>
          <ReactPaginate
            breakLabel="..."
            nextLabel={
              <span className="flex  scale-75 ltr:-rotate-90 rtl:rotate-90">
                <ChevronIcon />
              </span>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
              <span className="flex scale-75  ltr:rotate-90 rtl:-rotate-90">
                <ChevronIcon />
              </span>
            }
            renderOnZeroPageCount={null}
            className="pagination flex gap-6 items-center shadow p-3"
            activeClassName="bg-blue-500 p-1 px-2 rounded text-sm text-white"
            previousClassName="rounded-md dark:bg-borderdark dark:text-gray-50 text-gray-500 bg-gray-100 shadow px-1"
            nextClassName="rounded-md dark:bg-borderdark dark:text-gray-50 text-gray-500 bg-gray-100 shadow px-1"
            disabledClassName="text-gray-200 dark:text-gray-600"
          />
        </>
      ) : null}
    </>
  );
};

export default memo(SuperTable);
