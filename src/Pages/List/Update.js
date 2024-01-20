import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";

import { ApiActions } from "Helpers/Lib/api";

import { toast } from "react-toastify";
import BlockPaper from "Components/Global/BlockPaper";
import useFetch from "Hooks/useFetch";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import FormSingular from "Components/StructurePage/Forms/CustomForm/FormSingular";
import FormSteps from "Components/StructurePage/Forms/CustomForm/FormSteps";
import useFetchGroup from "Hooks/useFetchGroup";
import { DynamicForm } from "Components/StructurePage/Forms/CustomForm/DynamicForm";

const Update = () => {
  const params = useParams();
  const { name, id } = params;
  
  return (
    <BlockPaper>
      <DynamicForm name={name} layout={'update'}/>
    </BlockPaper>
  );
};

export default Update;
