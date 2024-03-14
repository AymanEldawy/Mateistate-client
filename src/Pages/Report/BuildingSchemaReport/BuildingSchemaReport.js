import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import { Input, UniqueField } from "Components/StructurePage/CustomFields";
import { ApiActions } from "Helpers/Lib/api";
import { FLAT_PROPERTY_TABS } from "Helpers/constants";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BuildingSchemaUnits } from "./BuildingSchemaUnits";
import { refetchBuildingAssets } from "Helpers/functions";
import { BuildingSchemaResults } from "./BuildingSchemaResults";

const RESULTS =  {
  empty: {
    percentage: '23%',
    count: 23
  },
  rented: {
    percentage: '23%',
    count: 23
  },
  contract_near_ending: {
    percentage: '23%',
    count: 23
  },
  contract_expired: {
    percentage: '23%',
    count: 23
  },
  reserved: {
    percentage: '23%',
    count: 23
  },
  not_available: {
    percentage: '23%',
    count: 23
  },

}


const BuildingSchemaReport = () => {
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [buildings, setBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState({});
  const [selectedTab, setSelectedTab] = useState({});
  const [flatsDetails, setFlatsDetails] = useState({});

  const fetchBuildings = async () => {
    const res = await ApiActions.read("building");
    if (res?.success) {
      setBuildings(res?.result);
    }
  };

  useEffect(() => {
    fetchBuildings();
  }, []);

  useEffect(() => {
    let buildingId = watch("building_id");
    setSelectedBuilding(buildings?.find((b) => b?.id === buildingId));

    refetchBuildingAssets(buildingId, setFlatsDetails, {}, () => {});
  }, [watch("building_id")]);

  const onSubmit = async () => {};

  return (
    <BlockPaper title={"Building Schema Report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid grid-cols-3 gap-4">
            <UniqueField
              {...{
                label: "building_id",
                name: "building_id",
              }}
              list={buildings}
            />
            <Input
              {...{
                label: "date",
                name: "date",
                type: "date",
              }}
            />
            <Input
              {...{
                label: "Days number to termination contract",
                name: "Days number",
                type: "number",
              }}
            />
          </div>
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
        </form>
      </FormProvider>
      <div className="flex items-center overflow-auto text-left ">
        {Object.values(FLAT_PROPERTY_TABS)?.map((tab, index) => (
          <button
            type="button"
            onClick={() => setSelectedTab(tab)}
            key={`${index}-${tab?.tabName}`}
            className={`${
              selectedTab?.tabName === tab?.tabName
                ? "!text-black !font-medium dark:bg-dark-border dark:!text-white bg-white"
                : "bg-gray-100 dark:bg-dark-bg"
            } border dark:border-dark-border p-2 px-4 text-sm text-gray-500 font-normal min-w-[120px] w-fit capitalize whitespace-nowrap`}
          >
            {tab?.tabName}
          </button>
        ))}
      </div>

      {/* units */}
      {Object.keys(flatsDetails)?.length ? (
        <BuildingSchemaUnits
          selectedTab={selectedTab}
          building={selectedBuilding}
          flatsDetails={flatsDetails}
        />
      ) : null}
      <BuildingSchemaResults results={RESULTS}/>
      {/* units */}
      {/* result */}
      {/* result */}
    </BlockPaper>
  );
};

export default BuildingSchemaReport;
