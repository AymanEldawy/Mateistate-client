import Modal from "Components/Global/Modal/Modal";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import { useEffect, useState } from "react";
import EntryForm from "../Entry/EntryForm";
import { CloseIcon, NotAllowIcon } from "Components/Icons";
import Loading from "Components/Global/Loading";
import useCurd from "Hooks/useCurd";

export const VoucherView = () => {
  const { voucherInfo, setVoucherInfo } = useVoucherEntriesView();
  const [values, setValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const{getOneBy}= useCurd()

  const fetchVoucher = async () => {
    setIsLoading(true);
    const response = await getOneBy(voucherInfo?.table, voucherInfo?.id,voucherInfo?.ref_name);

    if (response?.success) {
      const responseGrid = await getOneBy(
        voucherInfo?.grid,
        response?.result?.at(0)?.id,
        `${voucherInfo?.table}_id`
      );

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
            <div className="flex flex-col text-xl text-red-500 h-full">
              <button
                onClick={() => setVoucherInfo({})}
                className="h-9 w-9 rounded-full flex items-center justify-center bg-red-100 text-red-500 ltr:ml-auto rtl:mr-auto"
              >
                <CloseIcon className="w-6 h-6" />
              </button>{" "}
              <div className="flex flex-col items-center justify-center">
                <NotAllowIcon className="w-12 h-12" />
                There is no Entry
              </div>
            </div>
          )}
        </>
      )}
    </Modal>
  );
};
