import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import Modal from "Components/Modal/Modal";
import { DynamicTable } from "Components/StructurePage/Tables/DynamicTable";
import useFetch from "Hooks/useFetch";
import { FormSteps } from "Components/StructurePage/Forms/CustomForm/FormSteps";
import { DynamicForm } from "Components/StructurePage/Forms/CustomForm/DynamicForm";
import getFormByTableName from "Helpers/Forms/new-tables-forms";
import SuperForm from "Components/StructurePage/Forms/CustomForm/FormSingular";
import FormSingular from "Components/StructurePage/Forms/CustomForm/FormSingular";

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
