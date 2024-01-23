import { DynamicTable } from "Components/StructurePage/Tables/DynamicTable";
import useFetch from "Hooks/useFetch";
import { usePopupForm } from "Hooks/usePopupForm";
import React from "react";

const Contracts = () => {
  const { dispatchForm } = usePopupForm();
  const {data, loading} = useFetch('contracts')
  console.log("🚀 ~ Contracts ~ data:", data)

  return <DynamicTable tableName={"contracts"} data={data || []} />;
};

export default Contracts;
