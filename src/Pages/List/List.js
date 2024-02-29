import { useState } from "react";
import { useParams } from "react-router-dom";

import Modal from "Components/Global/Modal/Modal";
import { DynamicTable } from "Components/StructurePage/Tables/DynamicTable";
import useFetch from "Hooks/useFetch";
import { DynamicForm } from "Components/StructurePage/Forms/CustomForm/DynamicForm";
import { useNavigate } from "react-router-dom";

const List = ({ addPageHref }) => {
  const params = useParams();
  const { name } = params;
  let defaultName = name === "cheque_pattern" ? "bill_pattern" : name;

  const { loading, data, error, refetchData } = useFetch(defaultName);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openPrint, setOpenPrint] = useState(false);

  const onClickAdd = () => {
    if (addPageHref?.href) {
      let href = `${addPageHref?.href}${addPageHref?.allowName ? name : ""}`;
      navigate(href);
    }
  };

  return (
    <DynamicForm
      name={name}
      refetchData={refetchData}
      onClose={() => setOpen(false)}
    />
  );
};

export default List;
