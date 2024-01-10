import { useState } from "react";
import { useParams } from "react-router-dom";

import Modal from "Components/Modal/Modal";
import { DynamicTable } from "Components/StructurePage/Tables/DynamicTable";
import useFetch from "Hooks/useFetch";
import { DynamicForm } from "Components/StructurePage/Forms/CustomForm/DynamicForm";

const List = () => {
  const params = useParams();
  const { name } = params;
  const { loading, data, error, refetchData } = useFetch(name);
  const [open, setOpen] = useState(false);

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
        />
      </div>
    </>
  );
};

export default List;
