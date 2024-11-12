import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import getTableData from "Helpers/Lib/global-read";
import { useQuery } from "@tanstack/react-query";
import BlockPaper from "Components/Global/BlockPaper";
import {
  EyeIcon,
  PlusIcon,
  PrintIcon,
  SearchIcon,
  TrashIcon,
} from "Components/Icons";
import { useTranslation } from "react-i18next";
import { DebouncedInput } from "Components/StructurePage/CustomFields";
import { TableInfo } from "Components/DynamicTable/TableInfo";
import DynamicTable from "Components/DynamicTable/DynamicTable";
import { PopupLinks } from "Components/Global/Modal/PopupLinks";
import { POPUP_LINKS_NAME } from "Helpers/constants";
import useCurd from "Hooks/useCurd";

let columnBeingDragged;

const List = ({ tableName, allowPrint, hideAdd, urlToAdd }) => {
  const { t } = useTranslation();
  const params = useParams();
  const { get, remove } = useCurd();
  const { name } = params;
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [openPopupLinks, setOpenPopupLinks] = useState(false);
  const [openColumnsSetting, setOpenColumnsSetting] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [filters, setFilters] = useState({});

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [name, "table"],
    queryFn: async () => {
      const data = await getTableData(name, filters);
      return data || [];
    },
  });

  const onClickPrint = () => {};

  // useEffect(() => {
  //   const d = async () => {
  //     const services = await ApiActions.read("service");
  //     const ids = [];
  //     for (const item of services?.result) {
  //       ids.push(item?.id);
  //     }

  //     await ApiActions.remove("service_worker", {
  //       conditions: [
  //         {
  //           type: "and",
  //           conditions: [["service_id", "in", ids]],
  //         },
  //       ],
  //     });
  //     await ApiActions.remove("service_lack_reason", {
  //       conditions: [
  //         {
  //           type: "and",
  //           conditions: [["service_id", "in", ids]],
  //         },
  //       ],
  //     });
  //     await ApiActions.remove("service_customer_request", {
  //       conditions: [
  //         {
  //           type: "and",
  //           conditions: [["service_id", "in", ids]],
  //         },
  //       ],
  //     });
  //     await ApiActions.remove("worker_rate", {
  //       conditions: [
  //         {
  //           type: "and",
  //           conditions: [["service_id", "in", ids]],
  //         },
  //       ],
  //     });
  //     await ApiActions.remove("service_material", {
  //       conditions: [
  //         {
  //           type: "and",
  //           conditions: [["service_id", "in", ids]],
  //         },
  //       ],
  //     });
  //     await ApiActions.remove("service", {
  //       conditions: [
  //         {
  //           type: "and",
  //           conditions: [["id", "in", ids]],
  //         },
  //       ],
  //     });
  //   };
  //   d()
  // }, []);

  console.log(name, tableName);

  const deleteItem = async () => {
    let ids = Object.keys(rowSelection);
    console.log("🚀 ~ deleteItem ~ ids:", ids);
    const ress = await get(name);
    console.log("🚀 ~ deleteItem ~ ress:", ress);
    const res = await remove(name, ids);

    console.log(res, "-sss");

    if (res?.success) {
      refetch()
      // setRowSelection([]);
      // await refetchData();
    }
    setOpenConfirmation(false);
  };

  return (
    <>
      {openPopupLinks ? (
        <PopupLinks name={name} onClose={() => setOpenPopupLinks(false)} />
      ) : null}
      <ConfirmModal
        onConfirm={deleteItem}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
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
              {/* {table.getPrePaginationRowModel()?.rows?.length ? (
                <div>
                  {table.getPrePaginationRowModel()?.rows?.length} {t("rows")}
                </div>
              ) : null} */}
            </div>
            <div className="flex gap-2">
              {POPUP_LINKS_NAME?.[name] ? (
                <button
                  onClick={() => setOpenPopupLinks(true)}
                  className="flex items-center gap-2 bg-blue-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
                >
                  <PlusIcon className="w-6 h-6" circle />
                  {t("add_new")}
                </button>
              ) : (
                <Link
                  to={urlToAdd ? urlToAdd(name) : `/${name}`}
                  className="flex items-center gap-2 bg-blue-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
                >
                  <PlusIcon className="w-6 h-6" circle />
                  {t("add_new")}
                </Link>
              )}
              <button
                className="bg-red-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300 disabled:bg-red-200"
                onClick={() => setOpenConfirmation(true)}
                disabled={
                  typeof rowSelection === "object" &&
                  !Object.keys(rowSelection)?.length
                }
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
        <DynamicTable
          name={name}
          data={data || []}
          isLoading={isLoading}
          openColumnsSetting={openColumnsSetting}
          setOpenColumnsSetting={setOpenColumnsSetting}
          setRowSelection={setRowSelection}
          rowSelection={rowSelection}
        />
      </BlockPaper>
    </>
  );
};

export default List;
