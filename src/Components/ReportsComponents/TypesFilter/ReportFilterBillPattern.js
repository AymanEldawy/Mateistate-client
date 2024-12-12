import React, { useEffect, useState } from "react";
import { ReportFilterColumns } from "../ReportFilterColumns";
import useCurd from "Hooks/useCurd";

export const ReportFilterBillPattern = ({
  bodyClassName,
  containerClassName,
  billIds,
  setBillIds,
}) => {
  const [billPatterns, setBillPatterns] = useState([]);
  const { get } = useCurd();
  const getData = async () => {
    const billResponse = await get("bill_pattern");
    setBillPatterns(billResponse?.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ReportFilterColumns
      containerClassName={containerClassName}
      bodyClassName={bodyClassName}
      title="Bill Types"
      columns={billPatterns?.map((c) => ({
        name: c?.code,
        label: c?.name,
      }))}
      selectedColumns={billIds}
      setSelectedColumns={setBillIds}
    />
  );
};
