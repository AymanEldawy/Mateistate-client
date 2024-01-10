import { ApiActions } from "Helpers/Lib/api";
import { FLAT_PROPERTY_TABS } from "Helpers/constants";
import { useState } from "react";
import { ToolsTabsTableForm } from "Pages/Tools/ToolsTabsTableForm";
import { Button } from "Components/Global/Button";
import useFlatColoring from "Hooks/useFlatColoring";
import { useForm, useFormContext } from "react-hook-form";
import { ToolsTabsTable } from "./ToolsTabsTable";
import { generateApartments } from 'Helpers/functions';

const ToolsWarper = ({ row }) => {
  const { flatsDetails, setFlatsDetails } = useFlatColoring();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { watch } = useFormContext();
  const [selectedTab, setSelectedTab] = useState(FLAT_PROPERTY_TABS[0]);
  const [loading, setLoading] = useState();

  // console.log(FLAT_PROPERTY_TABS,'FLAT_PROPERTY_TABS');
  const onSubmit = (value) => {
    let grid = watch();
    generateApartments(grid, flatsDetails)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToolsTabsTableForm />
      <div className="mt-9 shadow border border-gray-300 overflow-hidden">
        <div className="flex items-center overflow-auto text-left bg-gray-100 dark:bg-dark-bg ">
          {FLAT_PROPERTY_TABS?.map((tab, index) => (
            <button
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
        <Button title="Submit" loading={loading} />
      </div>
    </form>
  );
};

export default ToolsWarper;
