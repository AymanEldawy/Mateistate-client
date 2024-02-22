
import Modal from "Components/Global/Modal/Modal";
import { usePopupForm } from "Hooks/usePopupForm";
import { DynamicForm } from "./DynamicForm";

const PopupForm = () => {
  const { openForm, dispatchForm } = usePopupForm();
  const { table, open } = openForm;

  if(!open) return;
  
  return (
    <Modal open={open} onClose={() => dispatchForm({})} containerClassName="!z-[70]">
      <DynamicForm onClose={() => dispatchForm({})} name={table} />
    </Modal>
  );
};

export default PopupForm;
