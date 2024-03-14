import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FlatColoringProvider } from "Hooks/useFlatColoring";
import { FormProvider, useForm } from "react-hook-form";
import ToolsWarper from "./ToolsWarper";
import { useQuery } from "@tanstack/react-query";

const Tools = () => {
  const { id } = useParams();
  const methods = useForm({ defaultValues: {} });
  const { reset } = methods;
  const [row, setRow] = useState({});
  const { refetch } = useQuery({
    queryKey: ["property_values"],
    queryFn: async () => {
      const response = await ApiActions.read("property_values", {
        conditions: [{ type: "and", conditions: [["building_id", "=", id]] }],
      });
      reset({
        grid: response?.result?.sort((a, b) => a?.row_index - b?.row_index),
      });
    },
  });
  useQuery({
    queryKey: ["building", id],
    queryFn: async () => {
      const res = await ApiActions.read("building", {
        conditions: [{ type: "and", conditions: [["id", "=", id]] }],
      });
      setRow(res.result.at(0));
    },
  });

  return (
    <FormProvider {...methods}>
      <FlatColoringProvider>
        <ToolsWarper row={row} refetchPropertyValuesData={refetch} />
      </FlatColoringProvider>
    </FormProvider>
  );
};

export default Tools;
