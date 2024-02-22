import { useState } from "react";

import Modal from "Components/Global/Modal/Modal";
import { DynamicTable } from "Components/StructurePage/Tables/DynamicTable";
import useFetch from "Hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Buildings = () => {
  const { loading, data, error, refetchData } = useFetch("building");
  const navigate = useNavigate();

  return (
    <DynamicTable
      tableName={"building"}
      refetchData={refetchData}
      data={data || []}
      loading={loading}
      onClickAdd={() => navigate("/buildings/add")}
    />
  );
};

export default Buildings;
