import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FlatColoringProvider } from "Hooks/useFlatColoring";
import { FormProvider, useForm } from "react-hook-form";
import ToolsWarper from "./ToolsWarper";
import useFetch from "Hooks/useFetch";

const Tools = () => {
  const { id } = useParams();
  const methods = useForm({ defaultValues: {} });
  const { data, loading, error, refetchData } = useFetch("property_values", {
    conditions: [{ type: "and", conditions: [["building_id", "=", id]] }],
  });
  const [row, setRow] = useState({});
  const { reset } = methods;

  const getBuildingData = async () => {
    const res = await ApiActions.read("building", {
      conditions: [{ type: "and", conditions: [["id", "=", id]] }],
    });
    setRow(res.result.at(0));
  };

  useEffect(() => {
    if (loading) return;
    reset({ grid: data?.sort((a, b) => a?.row_index - b?.row_index) });
  }, [loading]);

  useEffect(() => {
    if (!id) return;
    getBuildingData();
  }, [id]);

  return (
    <FormProvider {...methods}>
      <FlatColoringProvider>
        <ToolsWarper row={row} refetchPropertyValuesData={refetchData} />
      </FlatColoringProvider>
    </FormProvider>
  );
};

export default Tools;
