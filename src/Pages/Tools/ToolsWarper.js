import { ApiActions } from "Helpers/Lib/api";
import {
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
import { generateApartments } from "Helpers/functions";

const findList = async (type, id, setFlatsDetails) => {
  console.log(type, FLAT_PROPERTY_TABS_SETTINGS);
  let name = FLAT_PROPERTY_TABS_SETTINGS[type]?.no;
  const response = await ApiActions.read(type, {
    conditions: [{ type: "and", conditions: [["building_id", "=", id]] }],
  });

  let data = response?.result;
  let hashApartmentTypes = {};
  if (data.length) {
    for (const row of data) {
      let newType = FLAT_PROPERTY_TYPES[`${type}_${row?.flat_type}`];
      hashApartmentTypes[newType] = {
        ...hashApartmentTypes?.[newType],
        [row?.[name]]: row,
      };
    }
    setFlatsDetails((prev) => ({
      ...prev,
      ...hashApartmentTypes,
    }));
  }
};

const refetchBuildingAssets = (id, setFlatsDetails) => {
  for (const asset of ["apartment", "villa", "shop", "parking"]) {
    findList(asset, id, setFlatsDetails);
  }
};

const ToolsWarper = ({ row }) => {
  const { flatsDetails, setFlatsDetails } = useFlatColoring();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { watch } = useFormContext();
  const [selectedTab, setSelectedTab] = useState(FLAT_PROPERTY_TABS[0]);

  console.log(watch(), flatsDetails);

  useEffect(() => {
    if (!row?.id) return;
    refetchBuildingAssets(row?.id, setFlatsDetails);
  }, [row?.id]);

  const onSubmit = (value) => {
    let grid = watch("grid");
    generateApartments(grid, flatsDetails, row?.id);
  };

  console.log(row);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="overflow-auto max-h-96">
        <ToolsTabsTableForm errors={errors} />
      </div>
      <div className="mt-9 shadow border border-gray-300 overflow-hidden">
        <div className="flex items-center overflow-auto text-left bg-gray-100 dark:bg-dark-bg ">
          {FLAT_PROPERTY_TABS?.map((tab, index) => (
            <button
              type="button"
              onClick={() => setSelectedTab(tab)}
              key={`${index}-${tab?.tabName}`}
              className={`${
                selectedTab?.tabName === tab?.tabName
                  ? "!text-black !font-medium dark:bg-dark-border dark:text-white bg-white"
                  : ""
              } border p-2 px-4 text-sm text-gray-500 font-normal flex-1 capitalize whitespace-nowrap`}
            >
              {tab?.tabName}
            </button>
          ))}
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
  );
};

export default ToolsWarper;
