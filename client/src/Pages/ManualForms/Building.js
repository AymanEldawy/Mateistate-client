import { useParams } from "react-router-dom";
import BlockPaper from "Components/BlockPaper/BlockPaper";
import formsApi from "Helpers/Forms/formsApi";
import SuperForm from "Components/CustomForm/SuperForm";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useAlert } from "Hooks/useAlert";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import { SERVER_URL } from "Helpers/functions";

const Building = () => {
  const params = useParams();
  const { name } = params;
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(name || "");
  const [activeStage, setActiveStage] = useState("");
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(false);
  const { alertMessage, dispatchAlert } = useAlert();

  // Get data
  let singleList = useMemo(() => formsApi["building"], [name]);
  const forms = singleList?.forms;
  const steps = singleList?.steps;
  // Handel Submit
  useEffect(() => {
    setFields(forms[steps[0]]);
    setActiveStage(steps[0]);
  }, []);
  const onSubmit = async (values) => {
    let body = {
      dat: values,
      columns: Object.keys(values),
      table: name || "Building",
    };
    let res = await axios.post(`${SERVER_URL}/create`, {
      ...body,
    });
    if (res?.statusText === "OK") {
      dispatchAlert({
        open: true,
        type: "success",
        msg: "Added Successfully...",
      });
      setOpen(false);
    } else {
    }
  };

  const changeTab = (tabName) => {
    setTab(tabName);
    setFields(forms[tabName]);
    setActiveStage(tabName);
  };
  const goNext = () => {
    let index = steps.indexOf(activeStage);
    if (index !== steps?.length) {
      setActiveStage(steps?.[index + 1]);
      setFields(forms[steps?.[index + 1]]);
    } else return;
  };
  const goBack = () => {
    let index = steps.indexOf(activeStage);
    if (index > 0) {
      setActiveStage(steps?.[index - 1]);
      setFields(forms[steps?.[index - 1]]);
    } else return;
  };
  return (
    <BlockPaper title={name}>
      <FormHeadingTitleSteps
        name={name}
        steps={steps}
        changeTab={changeTab}
        activeStage={activeStage}
      />
      <div className="h-5" />
      <SuperForm
        initialFields={fields}
        onSubmit={onSubmit}
        allowSteps={steps?.length}
        goBack={goBack}
        goNext={
          steps?.length - 1 == steps?.indexOf(activeStage) ? undefined : goNext
        }
      />
    </BlockPaper>
  );
};

export default Building;
