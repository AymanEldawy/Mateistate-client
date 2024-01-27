import { DynamicTable } from "Components/StructurePage/Tables/DynamicTable";
import useFetch from "Hooks/useFetch";
import { usePopupForm } from "Hooks/usePopupForm";
import React from "react";

const Contracts = () => {
  const { dispatchForm } = usePopupForm();
  const {data, loading} = useFetch('contract')

  return <DynamicTable tableName={"contract"} data={data || []} />;
};

export default Contracts;
