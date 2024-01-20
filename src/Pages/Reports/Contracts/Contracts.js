import { DynamicTable } from "Components/StructurePage/Tables/DynamicTable";
import { usePopupForm } from "Hooks/usePopupForm";
import React from "react";

const Contracts = () => {
  const { dispatchForm } = usePopupForm();

  return <DynamicTable tableName={"contracts"} data={[]} />;
};

export default Contracts;
