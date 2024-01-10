import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";

import { ApiActions } from "Helpers/Lib/api";

import { toast } from "react-toastify";
import BlockPaper from "Components/BlockPaper/BlockPaper";
import useFetch from "Hooks/useFetch";
import getFormByTableName from "Helpers/Forms/new-tables-forms";
import FormSingular from "Components/StructurePage/Forms/CustomForm/FormSingular";
import FormSteps from "Components/StructurePage/Forms/CustomForm/FormSteps";

const Update = () => {
  const params = useParams();
  const location = useLocation();
  const { name, id } = params;
  // const { row, table } = location?.state;
  const { loading, data, error, refetchData } = useFetch(name, {
    conditions: [{ type: "and", conditions: [["id", "=", id]] }],
  });

  // Get data
  let formSchema = useMemo(() => {
    const forms = getFormByTableName(name);
    return forms;
  }, [name]);

  const forms = useMemo(() => formSchema?.forms, [formSchema]);
  const steps = useMemo(() => formSchema?.steps, [formSchema]);

  // Handel Submit
  const onSubmit = async (values) => {
    let newValues = {};
    for (const key in values) {
      if (values[key] !== null) {
        newValues[key] = values[key];
      }
    }

    let body = {
      conditions: [{ type: "and", conditions: [["id", "=", id]] }],
      updates: newValues,
    };

    let res = await ApiActions.update(name, body);

    if (res.status) {
      toast.success("Updated Successfully...");
    } else {
    }
  };

  // const fetchData = async () => {
  //   const res = await ApiActions.read(name, {
  //     conditions: [{ type: "and", conditions: [["id", "=", id]] }],
  //   });
  //   if (res.status) {
  //     console.log("🚀 ~ file: Update.js:68 ~ fetchData ~ res:", res);
  //     return res.result?.at(0);
  //   }
  // };

  return (
    <BlockPaper>
      {!steps ? (
        <FormSingular name={name} fields={formSchema} oldValues={data?.at(0)} />
      ) : (
        <FormSteps
          steps={steps}
          forms={forms}
          name={name}
          oldValues={data?.at(0)}
        />
      )}
    </BlockPaper>
  );
};

export default Update;
