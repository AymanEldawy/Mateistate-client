import Modal from "Components/Global/Modal/Modal";
import { usePopupForm } from "Hooks/usePopupForm";
import { DynamicForm } from "./DynamicForm";
import ChequeForm from "../ChequesForm/ChequeForm";
import {
  DEFAULT_CHQ_INFO,
  DEFAULT_VOUCHERS_INFO,
} from "Helpers/GENERATE_STARTING_DATA";
import VoucherForm from "../Vouchers/Voucher/VoucherForm";
import { DESPATCH_TABLES_NAME } from "Helpers/Lib/contract-helpers";
import AccountForm from "../AccountForm/AccountForm";
import UserForm from "../UserForm/UserForm";

const PopupForm = () => {
  const { openForm, dispatchForm, setRecordResponse } = usePopupForm();
  const { table, open } = openForm;
  console.log("🚀 ~ PopupForm ~ table:", table)

  if (!open) return;

  return (
    <Modal
      open={open}
      onClose={() => dispatchForm({})}
      containerClassName="!z-[70] p-0"
      bodyClassName={"!p-0"}
      boxClassName={"!shadow-none !p-0"}
      layoutBodyClassName={"!my-0"}
    >
      {table === DESPATCH_TABLES_NAME.CHEQUE ? (
        <ChequeForm
          oldValues={openForm?.oldValues}
          patternCode={+openForm?.code}
          popupView
          action={openForm?.action}
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
      ) : table === DESPATCH_TABLES_NAME.USER?.toLocaleLowerCase() ? (
        <UserForm
          onClose={() => dispatchForm({})}
          name={table}
          oldValues={openForm?.oldValues}
          setRecordResponse={setRecordResponse}
          popupView
          normalForm
        />
      ) : table === DESPATCH_TABLES_NAME.ACCOUNT?.toLocaleLowerCase() ? (
        <AccountForm
          onClose={() => dispatchForm({})}
          name={table}
          oldValues={openForm?.oldValues}
          setRecordResponse={setRecordResponse}
          popupView
          normalForm
        />
      ) : (
        <DynamicForm
          onClose={() => dispatchForm({})}
          name={table}
          oldValues={openForm?.oldValues}
          setRecordResponse={setRecordResponse}
          popupView
          normalForm
        />
      )}
    </Modal>
  );
};

export default PopupForm;
