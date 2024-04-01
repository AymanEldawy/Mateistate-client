import { ApiActions } from "Helpers/Lib/api";
import React, { useEffect, useState } from "react";
import { ReportFilterColumns } from "./ReportFilterColumns";
import { useFormContext } from "react-hook-form";

export const ReportFilterChequePattern = ({
  bodyClassName,
  containerClassName,
  chqIds,
  setChqIds,
}) => {
  const { watch } = useFormContext();
  const [chqPatterns, setChqPatterns] = useState([]);

  const getData = async () => {
    const chqResponse = await ApiActions.read("cheque_pattern");
    setChqPatterns(chqResponse?.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ReportFilterColumns
      containerClassName={containerClassName}
      bodyClassName={bodyClassName}
      title="Cheque Patterns"
      columns={chqPatterns?.map((c) => ({
        name: c?.id,
        label: c?.name,
      }))}
      selectedColumns={chqIds}
      setSelectedColumns={setChqIds}
    />
  );
};
