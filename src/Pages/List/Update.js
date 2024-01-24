import { useParams } from "react-router-dom";

import BlockPaper from "Components/Global/BlockPaper";
import { DynamicForm } from "Components/StructurePage/Forms/CustomForm/DynamicForm";

const Update = () => {
  const params = useParams();
  const { name, id } = params;

  return (
    <BlockPaper>
      <DynamicForm name={name} layout={"update"} />
    </BlockPaper>
  );
};

export default Update;
