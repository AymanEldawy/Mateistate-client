import Modal from "Components/Global/Modal/Modal";
import { ApiActions } from "Helpers/Lib/api";
import useFetch from "Hooks/useFetch";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import React, { useEffect, useState } from "react";
import EntryForm from "./Entry/EntryForm";

export const VoucherView = () => {
  const { voucherInfo, setVoucherInfo } = useVoucherEntriesView();
  const [values, setValues] = useState({});

  const fetchVoucher = async () => {
    const response = await ApiActions.read(voucherInfo?.table, {
      conditions: [
        {
          type: "and",
          conditions: [[voucherInfo?.ref_name, "=", voucherInfo?.id]],
        },
      ],
    });
    console.log("🚀 ~ fetchVoucher ~ response:", response);
    if (response?.success) {
      const responseGrid = await ApiActions.read(voucherInfo?.grid, {
        conditions: [
          {
            type: "and",
            conditions: [
              [`${voucherInfo?.table}_id`, "=", response?.result?.at(0)?.id],
            ],
          },
        ],
      });
      console.log("🚀 ~ fetchVoucher ~ responseGrid:", responseGrid);
      setValues({
        ...response?.result?.at(0),
        grid: responseGrid?.result,
      });
    }
  };

  useEffect(() => {
    if (voucherInfo?.id) {
      fetchVoucher();
    }
  }, [voucherInfo?.id]);

  if (!voucherInfo?.id) return;

  return (
    <Modal open={true} onClose={() => setVoucherInfo({})}>
      <EntryForm
        oldValue={values}
        onlyView
      />
    </Modal>
  );
};
