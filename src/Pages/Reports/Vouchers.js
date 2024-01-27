import { DynamicTable } from "Components/StructurePage/Tables/DynamicTable";
import { ApiActions } from "Helpers/Lib/api";
import useFetch from "Hooks/useFetch";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const VOUCHER_TYPES = {
  receipts: {
    typeNumber: 1,
    tableName: "voucher_main_data",
    type: 1,
    href: "/vouchers/1/receipt-voucher",
  },
  payments: {
    typeNumber: 2,
    tableName: "voucher_main_data",
    type: 2,
    href: "/vouchers/2/payment-voucher",
  },
};

const Vouchers = () => {
  const { type } = useParams();
  const voucherType = VOUCHER_TYPES[type];

  const { loading, data, error, refetchData } = useFetch("voucher_main_data", {
    conditions: [
      { type: "and", conditions: [["voucher_type", "=", voucherType?.type]] },
    ],
  });

  const navigate = useNavigate();

  const onClickAdd = async () => {
    const response = ApiActions.read("voucher_main_data", {
      conditions: [
        { type: "and", conditions: [['voucher_type', "=", voucherType?.type]] },
      ],
      limit: 1,
      sorts: [{ column: "number", order: "DESC", nulls: "last" }],
    });
    
    const number = response?.data?.at(0)?.number;
    navigate(`${voucherType?.href}/${number || 1}`);
  };

  return (
    <div key={type}>
      <DynamicTable
        tableName="voucher_main_data"
        refetchData={refetchData}
        data={data || []}
        loading={loading}
        onClickAdd={onClickAdd}
        setOpen={() => {}}
        defaultTitle={`Vouchers ${type}`}
      />
    </div>
  );
};

export default Vouchers;
