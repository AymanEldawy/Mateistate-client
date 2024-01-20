import { DynamicTable } from "Components/StructurePage/Tables/DynamicTable";
import React from "react";
import { useParams } from "react-router-dom";

const voucherType = {
  receipts: {
    typeNumber: 1,
    tableName: "accounting_voucher_main_data",
  },
  payment: {
    typeNumber: 2,
    tableName: "voucher_main_data",
  },
};

const Vouchers = () => {
  const { type } = useParams();

  return (
    <DynamicTable
      tableName={"accounting_voucher_main_data"}
      data={[]}
      defaultTitle={`Vouchers ${type}`}
    />
  );
};

export default Vouchers;
