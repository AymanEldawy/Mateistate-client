import { ApiActions } from "Helpers/Lib/api";
import React, { useEffect, useState } from "react";
import { ReportFilterColumns } from "./ReportFilterColumns";

export const ReportFilterBuildings = ({ buildingsIds, setBuildingsIds }) => {
  const [buildings, setBuildings] = useState([]);

  const getData = async () => {
    const buildingResponse = await ApiActions.read("buildings");
    setBuildings(buildingResponse?.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ReportFilterColumns
      title="Buildings"
      columns={buildings?.map((c) => ({
        name: c?.id,
        label: c?.name,
      }))}
      selectedColumns={buildingsIds}
      setSelectedColumns={setBuildingsIds}
    />
  );
};
