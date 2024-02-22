import BlockPaper from "Components/Global/BlockPaper";
import ContentBar from "Components/Global/ContentBar/ContentBar";
import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { ToolsColorsBar } from "./ToolsColorsBar";
import { FlatColoringProvider } from "Hooks/useFlatColoring";
import { FormProvider, useForm } from "react-hook-form";
import ToolsWarper from "./ToolsWarper";
import useFetch from "Hooks/useFetch";

const Tools = () => {
  const { id } = useParams();
  const location = useLocation();
  const rowState = location?.state?.row;
  const methods = useForm({ defaultValues: {} });
  const { data, loading, error, refetchData } = useFetch("property_values", {
    conditions: [{ type: "and", conditions: [["building_id", "=", id]] }],
  });
  const [rowData, setRowData] = useState();

  const { reset } = methods;

  const getBuildingData = async () => {
    const res = await ApiActions.getById("building", id);
    setRowData(res.result.at(0));
  };

  useEffect(() => {
    if (loading) return;
    reset({ grid: data?.sort((a, b) => a?.row_index - b?.row_index) });
  }, [loading]);

  useEffect(() => {
    if (!id) return;

    if (!rowState) {
      getBuildingData();
    } else {
      setRowData(rowState);
    }
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
          <ToolsWarper row={rowData} refetchPropertyValuesData={refetchData} />
        </BlockPaper>
      </FlatColoringProvider>
    </FormProvider>
  );
};

export default Tools;
