import SuperForm from "Components/Forms/CustomForm/SuperForm";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import getFormByTableName from "Helpers/Forms/new-tables-forms";
import { ApiActions } from "Helpers/Lib/api";
import { useLocalStorage } from "Hooks/useLocalStorage";
import { useCallback, useEffect, useMemo, useState } from "react";
import TableForm from "./TableForm";
import { Button } from "Components/Global/Button";
import { toast } from "react-toastify";
import GLOBAL_INSERT_FUNCTION from "Helpers/global-insert";

const CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

export const DynamicForm = ({ name, setOpen }) => {
  const { getTable, setTable } = useLocalStorage();
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(name || "");
  const [activeStage, setActiveStage] = useState("");
  const [fields, setFields] = useState([]);
  const [formSettings, setFormSettings] = useState({});
  const [globalValues, setGlobalValues] = useState({});

  // console.log(globalValues);

  // Get data
  let formSchema = useMemo(() => {
    const forms = getFormByTableName(name);
    return forms;
  }, [name]);

  const forms = useMemo(() => formSchema?.forms, [formSchema]);
  const steps = useMemo(() => formSchema?.steps, [formSchema]);

  // check if form is more then step
  useEffect(() => {
    if (steps?.length) {
      let tab = steps?.[0];
      setActiveStage(tab);
      setFields(forms[tab].fields || []);
      setFormSettings(forms[tab]);
      checkRefTable(tab);
    } else {
      setFields(formSchema);
      checkRefTable(formSchema);
    }
  }, [steps, forms, formSchema]);

  async function checkRefTable(fields) {
    if (!fields?.length) return;
    for (const field of fields) {
      if (field.is_ref) {
        const response = await ApiActions.read(field?.ref_table);
        CACHE_LIST[field?.ref_table] = response?.result;
        for (const item of response?.result) {
          CACHE_LIST[item.id] = item.name || item.number || item.id;
        }
      }
    }
  }

  // handel Tabs
  const changeTab = useCallback(
    (tabName) => {
      setTab(tabName);
      setFields(forms[tabName].fields || []);
      setFormSettings(forms[tabName]);
      setActiveStage(tabName);
    },
    [forms]
  );

  const goNext = useCallback(() => {
    let index = steps?.indexOf(activeStage);
    if (index !== steps?.length) {
      setActiveStage(steps?.[index + 1]);
      setFields(forms[steps?.[index + 1]].fields);
    }
  }, [activeStage, forms, steps]);

  const goBack = useCallback(() => {
    let index = steps?.indexOf(activeStage);
    if (index > 0) {
      setActiveStage(steps?.[index - 1]);
      setFields(forms[steps?.[index - 1]].fields);
    }
  }, [activeStage, forms, steps]);

  // Handel Submit
  const onSubmit = async (e) => {
    let res = null;

    if (steps && !steps.length) {
      // Insert to one table
      res = await ApiActions.insert(name, {
        data: globalValues,
      });
      setOpen(false);
    } else {
      // NOTE: in this data condition the data are object has many objects and each object represent a form that mean different requests
      const getTheFunInsert = GLOBAL_INSERT_FUNCTION(name);
      getTheFunInsert({ data: globalValues });
      // console.log(
      //   "🚀 ~ file: DynamicForm.js:105 ~ onSubmit ~ getTheFunInsert:",
      //   getTheFunInsert
      // );
    }

    if (res?.success) {
      toast.success("Successfully added item in " + name);
      return true;
    } else {
      toast.error("Failed to add new item in " + name);
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

      {formSettings?.formType === "grid" ? (
        <div key={activeStage}>
          <TableForm
            activeStage={activeStage}
            oldValues={globalValues?.[tab] || {}}
            setGlobalValues={setGlobalValues}
            formSettings={formSettings}
            getCachedList={!!getCachedList ? getCachedList : undefined}
            allowSteps={steps?.length}
            initialFields={fields}
            onSubmit={onSubmit}
            goBack={goBack}
            goNext={
              steps?.length - 1 === steps?.indexOf(activeStage)
                ? undefined
                : goNext
            }
          />
        </div>
      ) : (
        <SuperForm
          activeStage={activeStage}
          values={steps?.length ? globalValues?.[tab] : globalValues}
          formSettings={formSettings}
          getCachedList={!!getCachedList ? getCachedList : undefined}
          allowSteps={steps?.length}
          initialFields={fields}
          onSubmit={onSubmit}
          goBack={goBack}
          setValues={setGlobalValues}
          goNext={
            steps?.length - 1 === steps?.indexOf(activeStage)
              ? undefined
              : goNext
          }
        />
      )}
      <div className="flex justify-between gap-4 items-center mt-4">
        {steps?.length && steps.indexOf(activeStage) < steps.length - 1 ? (
          <>
            <Button title="Back" onClick={goBack} type="button" />
            <Button title="Next" onClick={goNext} type="button" />
          </>
        ) : (
          <Button
            title="Submit"
            onClick={onSubmit}
            type="button"
            loading={loading}
          />
        )}
      </div>
    </>
  );
};
