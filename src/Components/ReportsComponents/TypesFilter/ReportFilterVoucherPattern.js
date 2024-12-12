import React, { useEffect, useState } from "react";
import { ReportFilterColumns } from "../ReportFilterColumns";
import useCurd from "Hooks/useCurd";

export const ReportFilterVoucherPattern = ({
  bodyClassName,
  containerClassName,
  voucherIds,
  setVoucherIds,
}) => {
  const [voucherPatterns, setVoucherPatterns] = useState([]);
  const { get } = useCurd();
  const getData = async () => {
    const voucherResponse = await get("voucher_pattern");
    setVoucherPatterns(voucherResponse?.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ReportFilterColumns
      containerClassName={containerClassName}
      bodyClassName={bodyClassName}
      title="Voucher Types"
      columns={voucherPatterns?.map((c) => ({
        name: c?.code,
        label: c?.name,
      }))}
      selectedColumns={voucherIds}
      setSelectedColumns={setVoucherIds}
    />
  );
};
