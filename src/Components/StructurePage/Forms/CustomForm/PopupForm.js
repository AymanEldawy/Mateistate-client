import { useMemo } from "react";

import Modal from "Components/Modal/Modal";
import { usePopupForm } from "Hooks/usePopupForm";
import { ApiActions } from "Helpers/Lib/api";
import { toast } from "react-toastify";
import getFormByTableName from "Helpers/Forms/new-tables-forms";
import { DynamicForm } from "./DynamicForm";

const PopupForm = () => {
  const { openForm, dispatchForm } = usePopupForm();
  const { table, open } = openForm;
  // Get data
  let formSchema = useMemo(() => {
    const forms = getFormByTableName(table);
    return forms;
  }, [table]);

  const forms = useMemo(() => formSchema?.forms, [formSchema]);
  const steps = useMemo(() => formSchema?.steps, [formSchema]);

  // Handel Submit
  const onSubmit = async (values) => {
    let res = await ApiActions.insert(table, {
      data: values,
    });

    if (res?.statusText === "OK") {
      toast.success("Added Successfully...");
    }
  };

  return (
    <Modal open={open} onClose={() => dispatchForm({})}>
      {/* <FormHeadingTitle title={`Create new ${table}`} /> */}
      <DynamicForm onClose={() => dispatchForm({})} name={table} />
    </Modal>
  );
};

export default PopupForm;
