import axios from "axios";
import { useMemo } from "react";

import { useAlert } from "Hooks/useAlert";
import formsApi from "Helpers/Forms/formsApi";
import SuperForm from "Components/Forms/CustomForm/SuperForm";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import Modal from "Components/Modal/Modal";
import { usePopupForm } from "Hooks/usePopupForm";
import { SERVER_URL } from "Helpers/functions";
import { ApiActions } from "Helpers/Lib/api";

const PopupForm = () => {
  const { openForm, dispatchForm } = usePopupForm();
  const { dispatchAlert } = useAlert();
  const { table, open } = openForm;
  
  let initialFields = useMemo(() => formsApi[table?.toLowerCase()], [table]);

  // Handel Submit
  const onSubmit = async (values) => {
    let res = await ApiActions.insert(table, {
      data: values,
    });

    if (res?.statusText === "OK") {
      dispatchAlert({
        open: true,
        type: "success",
        msg: "Added Successfully...",
      });
    }
  };

  return (
    <Modal open={open} onClose={() => dispatchForm({})}>
      <FormHeadingTitle title={`Create new ${table}`} />
      <SuperForm initialFields={initialFields} onSubmit={onSubmit} />
    </Modal>
  );
};

export default PopupForm;
