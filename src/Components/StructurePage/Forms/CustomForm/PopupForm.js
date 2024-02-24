import Modal from "Components/Global/Modal/Modal";
import { usePopupForm } from "Hooks/usePopupForm";
import { DynamicForm } from "./DynamicForm";
import ChequeForm from "../Cheques/ChequeForm";
import { DEFAULT_VOUCHERS_INFO } from "Helpers/GENERATE_STARTING_DATA";

const PopupForm = () => {
  const { openForm, dispatchForm } = usePopupForm();
  const { table, open } = openForm;

  if (!open) return;

  console.log(openForm?.oldValues, '--');
  return (
    <Modal
      open={open}
      onClose={() => dispatchForm({})}
      containerClassName="!z-[70]"
    >
      {table === "cheque" ? (
        <ChequeForm
          oldValues={openForm?.oldValues}
          tableName={Object.values(DEFAULT_VOUCHERS_INFO)?.find(c => c.code === +openForm?.oldValues.type)?.name}
          patternCode={+openForm?.oldValues.type}
          onlyViewAndUpdate
        />
      ) : (
        <DynamicForm
          onClose={() => dispatchForm({})}
          name={table}
          oldValues={openForm?.oldValues}
        />
      )}
    </Modal>
  );
};

export default PopupForm;
