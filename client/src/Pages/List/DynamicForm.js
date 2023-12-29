import SuperForm from "Components/Forms/CustomForm/SuperForm";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import getFormByTableName from "Helpers/Forms/new-tables-forms";
import { ApiActions } from "Helpers/Lib/api";
import { getForm } from "Helpers/constants";
import { useAlert } from "Hooks/useAlert";
import { useLocalStorage } from "Hooks/useLocalStorage";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

export const DynamicForm = ({ name, setOpen }) => {
  const { getTable, setTable } = useLocalStorage();
  const { dispatchAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(name || "");
  const [activeStage, setActiveStage] = useState("");
  const [fields, setFields] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // Get data
  let singleList = useMemo(() => {
    const forms = getFormByTableName(name)
    return forms;
  }, [name]);

  const forms = useMemo(() => singleList?.forms, [singleList]);
  const steps = useMemo(() => singleList?.steps, [singleList]);

  // check if form is more then step
  useEffect(() => {
    if (steps?.length) {
      setActiveStage(steps?.[0]);
      setFields(forms[steps?.[0]]);
      checkRefTable(steps?.[0]);
    } else {
      setFields(singleList);
      checkRefTable(singleList);
    }
  }, [steps, forms, singleList]);

  async function checkRefTable(fields) {
    setLoading(true);
    if (!fields?.length) return;
    for (const field of fields) {
      if (field.is_ref) {
        const response = await ApiActions.read(field?.ref_table);
        CACHE_LIST[field?.ref_table] = response?.result;
        for (const item of response?.result) {
          CACHE_LIST[item.guid] = item.name || item.number || item.guid;
        }
      }
    }
    setLoading(false);
  }

  // handel Tabs
  const changeTab = useCallback(
    (tabName) => {
      setTab(tabName);
      setFields(forms[tabName]);
      setActiveStage(tabName);
    },
    [forms]
  );

  const goNext = useCallback(() => {
    let index = steps?.indexOf(activeStage);
    if (index !== steps?.length) {
      setActiveStage(steps?.[index + 1]);
      setFields(forms[steps?.[index + 1]]);
    }
  }, [activeStage, forms, steps]);

  const goBack = useCallback(() => {
    let index = steps?.indexOf(activeStage);
    if (index > 0) {
      setActiveStage(steps?.[index - 1]);
      setFields(forms[steps?.[index - 1]]);
    }
  }, [activeStage, forms, steps]);

  // Handel Submit
  const onSubmit = async (values) => {
    if (steps && activeStage !== steps[steps?.length - 1]) return;
    setOpen(false);
    dispatchAlert({
      open: true,
      type: "loading",
      msg: "Loading ...",
    });
    let columns = [];
    for (const key in values) {
      if (values?.[key]) columns.push(key);
    }

    let res = await ApiActions.insert(name, {
      data: values,
    });

    if (res?.success) {
      dispatchAlert({
        open: true,
        type: "success",
        msg: "Successfully added item in " + name,
      });
      return true;
    } else {
      dispatchAlert({
        open: true,
        type: "error",
        msg: "Failed to add new item in " + name,
      });
      return false;
    }
  };

  return (
    <>
      <FormHeadingTitleSteps
        name={name}
        steps={steps}
        changeTab={changeTab}
        activeStage={activeStage}
      />
      <div className="h-5" />
      <SuperForm
        getCachedList={!!getCachedList ? getCachedList : undefined}
        allowSteps={steps?.length}
        initialFields={fields}
        onSubmit={onSubmit}
        goBack={goBack}
        goNext={
          steps?.length - 1 === steps?.indexOf(activeStage) ? undefined : goNext
        }
      />
    </>
  );
};
