import BlockPaper from "Components/BlockPaper/BlockPaper";
import ContentBar from "Components/Global/ContentBar/ContentBar";
import { ApiActions } from "Helpers/Lib/api";
import { FLAT_PROPERTY_TABS } from "Helpers/constants";
import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { ToolsColorsBar } from "./ToolsColorsBar";
import Loading from "Components/Loading/Loading";
import { ToolsTabsTableForm } from "Pages/Tools/ToolsTabsTableForm";
import ToolsTabs from "./ToolsTabs";
import { Button } from "Components/Global/Button";
import { FlatColoringProvider } from "Hooks/useFlatColoring";

const CACHE_APARTMENTS = {};

const findList = async (type, id) => {
  const response = await ApiActions.read(type, {
    conditions: [{ type: "and", conditions: [["id", "=", id]] }],
  });
  let data = response?.result;
  if (data.length) {
    for (const row of data) {
      CACHE_APARTMENTS[row?.number] = row;
    }
  }
};

const refetchBuildingAssets = (id) => {
  for (const asset of ["apartment", "villa", "shop", "parking"]) {
    findList(asset, id);
  }
};

const Tools = () => {
  const { id } = useParams();
  const location = useLocation();
  const rowState = location?.state?.row;
  const [selectedTab, setSelectedTab] = useState(FLAT_PROPERTY_TABS[0]);
  const [loading, setLoading] = useState(false);
  const [rowData, setRowData] = useState();
  console.log("🚀 ~ file: Tools.js:41 ~ Tools ~ rowData:", rowData)
  const [getValuesWithoutSubmit, setGetValuesWithoutSubmit] = useState({});
  console.log("🚀 ~ file: Tools.js:42 ~ Tools ~ getValuesWithoutSubmit:", getValuesWithoutSubmit)
  const [getIndexOfRowUpdated, setGetIndexOfRowUpdated] = useState({});
  console.log("🚀 ~ file: Tools.js:43 ~ Tools ~ getIndexOfRowUpdated:", getIndexOfRowUpdated)

  const getBuildingData = async () => {
    const res = await ApiActions.getById("building", id);
    setRowData(res.result.at(0));
  };

  useEffect(() => {
    if (!id) return;

    if (!rowState) {
      getBuildingData();
    } else {
      setRowData(rowState);
    }
    refetchBuildingAssets(id);
  }, [id, rowState]);

  const onSubmit = async () => {
    setLoading(true);
    // insert or generate building assets
  };

  return (
    <FlatColoringProvider>
      <BlockPaper
        contentBar={
          <ContentBar
            title="Flat Building Details"
            description={
              <Link
                to={`/update/building/${rowData?.id}`}
                state={{ rowData, table: "building" }}
                className="text-blue-500 dark:text-white hover:underline text-sm"
              >
                {rowData?.name ? rowData?.name : "Edit Building"}
              </Link>
            }
          >
            <ToolsColorsBar />
          </ContentBar>
        }
      >
        {loading ? (
          <Loading withBackdrop />
        ) : (
          <>
            <ToolsTabsTableForm
              // oldValues={CACHE_LIST_COLORS}
              getValuesWithoutSubmit={setGetValuesWithoutSubmit}
              setGetIndexOfRowUpdated={setGetIndexOfRowUpdated}
            />

            <ToolsTabs
              // CACHE_LIST_COLORS={CACHE_LIST_COLORS}
              tabs={FLAT_PROPERTY_TABS}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              row={rowData}
            />
            <div className="mt-8 flex justify-end">
              <Button onClick={onSubmit} title="Submit" loading={loading} />
            </div>
          </>
        )}
      </BlockPaper>
    </FlatColoringProvider>
  );
};

export default Tools;
