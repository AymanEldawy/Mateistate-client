import BlockPaper from "Components/BlockPaper/BlockPaper";
import ContentBar from "Components/Global/ContentBar/ContentBar";
import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { ToolsColorsBar } from "./ToolsColorsBar";
import { FlatColoringProvider } from "Hooks/useFlatColoring";
import { FormProvider, useForm } from "react-hook-form";
import ToolsWarper from "./ToolsWarper";

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
  const methods = useForm({ defaultValues: {} });
  const [rowData, setRowData] = useState();

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

  return (
    <FormProvider {...methods}>
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
          <ToolsWarper row={rowData} />
        </BlockPaper>
      </FlatColoringProvider>
    </FormProvider>
  );
};

export default Tools;
