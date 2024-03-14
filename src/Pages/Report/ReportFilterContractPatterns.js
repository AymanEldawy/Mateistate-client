import { ApiActions } from "Helpers/Lib/api";
import React, { useEffect, useState } from "react";
import { ReportFilterColumns } from "./ReportFilterColumns";
import { useFormContext } from "react-hook-form";

export const ReportFilterContractPatterns = ({ contractIds, setContractIds }) => {
  const { watch } = useFormContext();
  const [contractPatterns, setContractPatterns] = useState([]);
  const getData = async () => {
    const contractResponse = await ApiActions.read("contract_pattern");
    setContractPatterns(contractResponse?.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ReportFilterColumns
      title="Contract Patterns"
      columns={contractPatterns?.map((c) => ({
        name: c?.id,
        label: c?.name,
      }))}
      disabledItem={watch("linked_contract_only")}
      selectedColumns={contractIds}
      setSelectedColumns={setContractIds}
    />
  );
};
