import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FlatColoringProvider } from "Hooks/useFlatColoring";
import { FormProvider, useForm } from "react-hook-form";
import ToolsWarper from "./ToolsWarper";
import { useQuery } from "@tanstack/react-query";
import useCurd from "Hooks/useCurd";

const Tools = () => {
  const { id } = useParams();
  const methods = useForm({ defaultValues: {} });
  const { reset } = methods;
  const [row, setRow] = useState({});
  const { getOneBy } = useCurd();
  const { refetch } = useQuery({
    queryKey: ["property_values"],
    queryFn: async () => {
      const response = await getOneBy("property_values", id);
      reset({
        grid: response?.result?.sort((a, b) => a?.row_index - b?.row_index),
      });
    },
  });
  useQuery({
    queryKey: ["building", id],
    queryFn: async () => {
      const res = await getOneBy("building", id);
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
