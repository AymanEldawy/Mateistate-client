import { useMemo } from "react";

import Modal from "Components/Global/Modal/Modal";
import { usePopupForm } from "Hooks/usePopupForm";
import { ApiActions } from "Helpers/Lib/api";
import { toast } from "react-toastify";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
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
