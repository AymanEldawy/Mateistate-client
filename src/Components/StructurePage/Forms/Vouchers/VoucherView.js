import Modal from "Components/Global/Modal/Modal";
import { ApiActions } from "Helpers/Lib/api";
import useFetch from "Hooks/useFetch";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import React, { useEffect, useState } from "react";
import EntryForm from "./Entry/EntryForm";
import { NotAllowIcon } from "Components/Icons";
import Loading from "Components/Global/Loading";

export const VoucherView = () => {
  const { voucherInfo, setVoucherInfo } = useVoucherEntriesView();
  console.log("🚀 ~ VoucherView ~ voucherInfo:", voucherInfo)
  const [values, setValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchVoucher = async () => {
    setIsLoading(true);
    const response = await ApiActions.read(voucherInfo?.table, {
      conditions: [
        {
          type: "and",
          conditions: [[voucherInfo?.ref_name, "=", voucherInfo?.id]],
        },
      ],
    });

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

      setValues({
        ...response?.result?.at(0),
        grid: responseGrid?.result,
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (voucherInfo?.id) {
      fetchVoucher();
    }
  }, [voucherInfo?.id]);

  if (!voucherInfo?.id) return;

  return (
    <Modal
      open={true}
      onClose={() => setVoucherInfo({})}
      containerClassName="z-[102]"
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {values?.number ? (
            <EntryForm
              oldValue={values}
              onlyView
              outerClose={() => setVoucherInfo({})}
            />
          ) : (
            <div className="flex flex-col gap-2 items-center justify-center text-xl text-red-500 h-full">
              <NotAllowIcon className="w-9 h-9" />
              There is no Entry
            </div>
          )}
        </>
      )}
    </Modal>
  );
};
