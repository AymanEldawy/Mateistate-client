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
  const { loading, data, error, refetchData } = useFetch(name);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onClickAdd = () => {
    if (addPageHref?.href) {
      let href = `${addPageHref?.href}${addPageHref?.allowName ? name : ""}`
      navigate(href);
    }
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <DynamicForm
          name={name}
          refetchData={refetchData}
          onClose={() => setOpen(false)}
        />
      </Modal>
      <div key={name}>
        <DynamicTable
          tableName={name}
          setOpen={setOpen}
          refetchData={refetchData}
          data={data || []}
          loading={loading}
          onClickAdd={addPageHref && onClickAdd}
        />
      </div>
    </>
  );
};

export default List;
