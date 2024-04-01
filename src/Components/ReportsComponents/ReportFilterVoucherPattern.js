import { ApiActions } from "Helpers/Lib/api";
import React, { useEffect, useState } from "react";
import { ReportFilterColumns } from "./ReportFilterColumns";

export const ReportFilterVoucherPattern = ({
  bodyClassName,
  containerClassName,
  voucherIds,
  setVoucherIds,
}) => {
  const [voucherPatterns, setVoucherPatterns] = useState([]);
  const getData = async () => {
    const voucherResponse = await ApiActions.read("voucher_pattern");
    setVoucherPatterns(voucherResponse?.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ReportFilterColumns
      containerClassName={containerClassName}
      bodyClassName={bodyClassName}
      title="Entry Types"
      columns={voucherPatterns?.map((c) => ({
        name: c?.id,
        label: c?.name,
      }))}
      selectedColumns={voucherIds}
      setSelectedColumns={setVoucherIds}
    />
  );
};
