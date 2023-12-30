import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import ConfirmModal from "Components/ConfirmModal/ConfirmModal";
import SuperForm from "Components/Forms/CustomForm/SuperForm";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import Modal from "Components/Modal/Modal";
import { getForm } from "Helpers/constants";
import { ApiActions } from "Helpers/Lib/api";
import { useAlert } from "Hooks/useAlert";
import { useLocalStorage } from "Hooks/useLocalStorage";
import { DynamicTable } from "Components/Tables/DynamicTable";
import { fetchData } from "Helpers/Lib/supabase-api";
import { DynamicForm } from "./DynamicForm";

const List = () => {
  const params = useParams();
  const { name } = params;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!name) return;
    fetchData(name);
    getData();
  }, [name]);

  const getData = async () => {
    setLoading(true);
    const response = await ApiActions.read(name);
    setData(response?.result);
    setLoading(false);
  };

  const deleteItem = async (list) => {
    const res = await ApiActions.remove(name, {
      conditions: [
        {
          type: "and",
          conditions:
            list.length > 1 ? [["guid", "in", list]] : [["guid", "=", list[0]]],
        },
      ],
    });
    if (res.success) getData();
    setOpenConfirmation(false);
  };

  return (
    <>
      <ConfirmModal
        onConfirm={deleteItem}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      <Modal open={open} onClose={() => setOpen(false)}>
          <DynamicForm setOpen={setOpen} name={name} />
      </Modal>
      <DynamicTable title={name} setOpen={setOpen} deleteItem={deleteItem} />
    </>
  );
};

export default List;
