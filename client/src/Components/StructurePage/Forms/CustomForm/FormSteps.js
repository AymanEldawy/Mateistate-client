import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useState } from "react";
import { Button } from "Components/Global/Button";
import { toast } from "react-toastify";
import GLOBAL_INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import TableForm from "./TableForm";
import useFormSteps from "Hooks/useFormSteps";

import { Fields } from "./Fields";
import INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";

const CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const FormSteps = ({ name, forms, steps, onClose, refetchData, oldValues }) => {
  const { next, back, currentIndex, goTo, isLast } = useFormSteps(steps);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("");
  const [fields, setFields] = useState([]);
  const [formSettings, setFormSettings] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});

  useEffect(() => {
    setErrors({});
    setValues({});
  }, [name]);

  useEffect(() => {
    getRefTables();
  }, [currentIndex]);

  const getRefTables = async () => {
    if (!fields?.length) return;

    for (const field of fields) {
      if (CACHE_LIST[field?.ref_table]) continue;

      if (field.is_ref) {
        const response = await ApiActions.read(field?.ref_table);
        CACHE_LIST[field?.ref_table] = response?.result;
      }
    }
  };

  const insertIntoErrors = (name, value) => {
    if (value === "") {
      setErrors((prev) => {
        return {
          ...prev,
          [name]: "Field is required",
        };
      });
    } else {
      let newErrors = errors;
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handelChangeField = (name, value, required) => {
    if (required) {
      insertIntoErrors(name, value);
    }
    let tab = steps[currentIndex];
    setValues((prev) => ({
      ...prev,
      [tab]: {
        ...prev?.[tab],
        [name]: value,
      },
    }));
  };

  const handelFieldUpload = (name, e, required) => {
    if (required) {
      // insertIntoErrors(name, value);
    }
    setValues((prev) => {
      return {
        ...prev,
        [name]: e.target.files[0],
      };
    });
  };

  // check if form is more then step
  useEffect(() => {
    if (!steps) return;

    let tab = steps?.[0];
    setFields(forms[tab]?.fields || []);
    setFormSettings(forms[tab]);
    checkRefTable(tab);
  }, [steps, forms]);

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

  useEffect(() => {
    let tabName = steps[currentIndex];
    setTab(tabName);
    setFields(forms[tabName].fields || []);
    setFormSettings(forms[tabName]);
  }, [currentIndex]);

  // Handel Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    next();
    if (!isLast()) return;
    setLoading(true);
    const getTheFunInsert = INSERT_FUNCTION[name];
    const res = await getTheFunInsert({ data: { test: "tes", ...values } });

    if (res?.success) {
      toast.success("Successfully added item in " + name);
      if (!!refetchData) refetchData();
      setValues({});
    } else {
      toast.error("Failed to add new item in " + name);
    }
    if (!!onClose) onClose();
    setLoading(false);
  };


  return (
    <>
      <FormHeadingTitleSteps
        name={name}
        steps={steps}
        // changeTab={goTo}
        activeStage={currentIndex}
      />
      <div className="h-5" />
      <form onSubmit={onSubmit}>
        {formSettings?.formType === "grid" ? (
          <div key={steps[currentIndex]}>
            <TableForm
              activeStage={steps[currentIndex]}
              oldValues={values?.[tab] || {}}
              setGlobalValues={setValues}
              formSettings={formSettings}
              getCachedList={!!getCachedList ? getCachedList : undefined}
              allowSteps={steps?.length}
              initialFields={fields}
              onSubmit={onSubmit}
              goBack={back}
              goNext={next}
            />
          </div>
        ) : (
          <Fields
            fields={fields}
            values={values[steps[currentIndex]]}
            errors={errors}
            handelFieldUpload={handelFieldUpload}
            handelChangeField={handelChangeField}
            getCachedList={getCachedList}
          />
        )}
        <div className="flex justify-between gap-4 items-center mt-4">
          {steps ? <Button title="Back" onClick={back} type="button" /> : null}
          <Button title={isLast() ? "Submit" : "next"} loading={loading} />
        </div>
      </form>
    </>
  );
};

export default FormSteps;
