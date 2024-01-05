import useFlatColoring from "Hooks/useFlatColoring";
import { ToolsTabsTable } from "./ToolsTabsTable";

const ToolsTabs = ({
  CACHE_LIST_COLORS,
  tabs,
  row,
  selectedTab,
  setSelectedTab,
  CACHE_APARTMENTS,
}) => {
  const {
    insertColor,
    canInsertColor,
    removeFromColor,
    removeOneItemColor,
    flatsDetails,
    setFlatsDetails,
  } = useFlatColoring();

  return (
    <div className="mt-9 shadow border border-gray-300 overflow-hidden">
      <div className="flex items-center overflow-auto text-left bg-gray-100 dark:bg-dark-bg ">
        {tabs?.map((tab, index) => (
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
          tab={tabs}
        />
      </div>
    </div>
  );
};

export default ToolsTabs;
