import { ApiActions } from "Helpers/Lib/api";
import {
  FLATS,
  FLAT_PROPERTY_TABS,
  FLAT_PROPERTY_TABS_SETTINGS,
  FLAT_PROPERTY_TYPES,
} from "Helpers/constants";
import { useEffect, useState } from "react";
import { ToolsTabsTableForm } from "Pages/Tools/ToolsTabsTableForm";
import { Button } from "Components/Global/Button";
import useFlatColoring from "Hooks/useFlatColoring";
import { useForm, useFormContext } from "react-hook-form";
import { ToolsTabsTable } from "./ToolsTabsTable";
import { generateApartments } from "Helpers/Lib/operations/global-insert";
import Loading from "Components/Global/Loading";
import { Link } from "react-router-dom";
import ContentBar from "Components/Global/ContentBar/ContentBar";
import BlockPaper from "Components/Global/BlockPaper";
import { ToolsColorsBar } from "./ToolsColorsBar";

// const FLATS = {
//   apartment_count: {},
//   penthouse_count: {},
//   parking_count: {},
//   mezzanine_count: {},
//   office_count: {},
//   stores_count: {},
//   warehouse_count: {},
//   underground_parking: {},
// };

const calculateFlats = (building) => {
  FLATS.apartment_count = building?.apartment_count * building?.apartment_floor;
  FLATS.penthouse_count = building?.penthouse_count * building?.penthouse_floor;
  FLATS.parking_count = building?.parking_count * building?.parking_floor;
  FLATS.mezzanine_count = building?.mezzanine_count * building?.mezzanine_floor;
  FLATS.office_count = building?.office_count * building?.office_floor;
  FLATS.stores_count = building?.stores_count || 0;
  FLATS.warehouse_count = building?.warehouse_count || 0;
  FLATS.underground_parking = building?.underground_parking || 0;
  // FLATS.service_apartments = building?.service_apartments;
  // FLATS.drivers_apartments = building?.drivers_apartments;
};

const findList = async (type, id, setFlatsDetails, COLLECTION_COUNTS) => {
  let name = FLAT_PROPERTY_TABS_SETTINGS[type]?.no;
  const response = await ApiActions.read(type, {
    conditions: [{ type: "and", conditions: [["building_id", "=", id]] }],
  });

  let data = response?.result;
  let hashApartmentTypes = {};
  if (data?.length) {
    for (const row of data) {
      let assetsType =
        type === "apartment"
          ? `${type}_${row?.flat_type}`
          : type === "parking"
          ? `${type}_${row?.parking_kind}`
          : type;
      let newType = FLAT_PROPERTY_TYPES[assetsType];
      hashApartmentTypes[newType] = {
        ...hashApartmentTypes?.[newType],
        [row?.[name]]: row,
      };
      COLLECTION_COUNTS[row?.[name]] = row?.hex;
    }

    setFlatsDetails((prev) => ({
      ...prev,
      ...hashApartmentTypes,
    }));
  }
};

const refetchBuildingAssets = (id, setFlatsDetails, COLLECTION_COUNTS) => {
  for (const asset of ["apartment", "shop", "parking"]) {
    findList(asset, id, setFlatsDetails, COLLECTION_COUNTS);
  }
};

const ToolsWarper = ({ row, refetchPropertyValuesData }) => {
  const { flatsDetails, setFlatsDetails, COLLECTION_COUNTS, UPDATES_ROWS } =
    useFlatColoring();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { watch } = useFormContext();
  const [selectedTab, setSelectedTab] = useState(FLAT_PROPERTY_TABS[0]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    calculateFlats(row);
    refetchBuildingAssets(row?.id, setFlatsDetails, COLLECTION_COUNTS);
  }, [row?.id]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {});
  }, [watch]);

  const onSubmit = async (value) => {
    let grid = watch("grid");
    setIsLoading(true);
    const response = await generateApartments(
      grid,
      flatsDetails,
      row,
      UPDATES_ROWS
    );
    if (response?.isCompleted) {
      refetchPropertyValuesData();
    }
    setIsLoading(false);
  };


  return (
    <>
      {isLoading ? <Loading withBackdrop /> : null}
      <BlockPaper
        contentBar={
          <ContentBar
            title="Flat Building Details"
            description={
              <Link
                to={`/buildings/update/${row?.id}`}
                state={{ row, table: "building" }}
                className="text-blue-500 dark:text-white hover:underline text-sm"
              >
                {row?.name ? row?.name : "Edit Building"}
              </Link>
            }
          >
            <ToolsColorsBar />
          </ContentBar>
        }
      >
        <div className="flex flex-wrap gap-2 items-center pb-2 border-b dark:border-dark-border">
          {Object.entries(FLATS)?.map(([key, val]) => {
            if (val)
              return (
                <span
                  className={`rounded-md py-1 px-2 ${
                    val
                      ? "text-red-500 bg-red-50 font-normal border-red-500"
                      : "text-gray-400"
                  } border text-center capitalize`}
                >
                  {key?.replace("_", " ")} : {val}
                </span>
              );
          })}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="overflow-auto max-h-96">
            <ToolsTabsTableForm errors={errors} row={row} />
          </div>
          <div className="mt-9 shadow border border-gray-300 overflow-hidden">
            <div className="flex items-center overflow-auto text-left bg-gray-100 dark:bg-dark-bg ">
              {FLAT_PROPERTY_TABS?.map((tab, index) => {
                if (row?.[tab?.x])
                  return (
                    <button
                      type="button"
                      onClick={() => setSelectedTab(tab)}
                      key={`${index}-${tab?.tabName}`}
                      className={`${
                        selectedTab?.tabName === tab?.tabName
                          ? "!text-black !font-medium dark:bg-dark-border dark:text-white bg-white"
                          : ""
                      } border p-2 px-4 text-sm text-gray-500 font-normal min-w-[120px] w-fit capitalize whitespace-nowrap`}
                    >
                      {tab?.tabName}
                    </button>
                  );
              })}
            </div>
            <div key={selectedTab}>
              <ToolsTabsTable
                flatsDetails={flatsDetails}
                setFlatsDetails={setFlatsDetails}
                selectedTab={selectedTab}
                row={row}
                tab={FLAT_PROPERTY_TABS}
              />
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <Button title="Submit" />
          </div>
        </form>
      </BlockPaper>
    </>
  );
};

export default ToolsWarper;
