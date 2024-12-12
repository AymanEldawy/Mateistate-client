import React, { useEffect, useState } from "react";
import { ReportFilterColumns } from "../ReportFilterColumns";
import { useFormContext } from "react-hook-form";
import useCurd from "Hooks/useCurd";

export const ReportFilterChequePattern = ({
  bodyClassName,
  containerClassName,
  chqIds,
  setChqIds,
}) => {
  const { watch } = useFormContext();
  const [chqPatterns, setChqPatterns] = useState([]);
  const { get } = useCurd();
  const getData = async () => {
    const chqResponse = await get("cheque_pattern");
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
