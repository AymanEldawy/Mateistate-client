import Modal from "Components/Global/Modal/Modal";
import { usePopupForm } from "Hooks/usePopupForm";
import { DynamicForm } from "./DynamicForm";
import ChequeForm from "../Cheques/ChequeForm";
import {
  DEFAULT_CHQ_INFO,
  DEFAULT_VOUCHERS_INFO,
} from "Helpers/GENERATE_STARTING_DATA";
import VoucherForm from "../Vouchers/VoucherForm";
import { DESPATCH_TABLES_NAME } from "Helpers/Lib/operations/contract-helpers";

const PopupForm = () => {
  const { openForm, dispatchForm, setRecordResponse } = usePopupForm();
  console.log("🚀 ~ PopupForm ~ openForm:", openForm);
  const { table, open } = openForm;

  if (!open) return;

  return (
    <Modal
      open={open}
      onClose={() => dispatchForm({})}
      containerClassName="!z-[70]"
    >
      {table === DESPATCH_TABLES_NAME.CHEQUE ? (
        <ChequeForm
          oldValues={openForm?.oldValues}
          patternCode={+openForm?.code}
          popupView
          outerClose={() => dispatchForm({})}
          setRecordResponse={setRecordResponse}
          tableName={
            Object.values(DEFAULT_CHQ_INFO)?.find(
              (c) => c.code === +openForm?.code
            )?.name
          }
        />
      ) : table === DESPATCH_TABLES_NAME.VOUCHER ? (
        <VoucherForm
          voucherName={openForm?.voucherName}
          voucherType={
            openForm?.oldValues?.voucher_type || openForm?.voucherType
          }
          oldValues={openForm?.oldValues}
          setRecordResponse={setRecordResponse}
          outerClose={() => dispatchForm({})}
          popupView
        />
      ) : (
        <DynamicForm
          onClose={() => dispatchForm({})}
          name={table}
          oldValues={openForm?.oldValues}
          setRecordResponse={setRecordResponse}
        />
      )}
    </Modal>
  );
};

export default PopupForm;
