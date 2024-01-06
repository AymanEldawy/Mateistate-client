import getFormByTableName from "Helpers/Forms/new-tables-forms";
import { ApiActions } from "Helpers/Lib/api";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSSR } from "react-i18next";

const useFormSteps = ({ oldValues, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tab, setTab] = useState("");
  const [fields, setFields] = useState([]);
  const [formSettings, setFormSettings] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [CACHE_LIST, setCACHE_LIST] = useState({});

  // Get data
  let formSchema = useMemo(() => {
    const forms = getFormByTableName(name);
    return forms;
  }, [name]);

  const forms = useMemo(() => formSchema?.forms, [formSchema]);
  const steps = useMemo(() => formSchema?.steps, [formSchema]);

  const isFirst = () => currentIndex === 0;
  const isLast = () => currentIndex === steps?.length - 1;

  const next = () => {
    if (currentIndex >= steps?.length - 1) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const back = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const goTo = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setErrors({});
    setValues({});
    getRefTables();
  }, [name]);

  useEffect(() => {
    getRefTables();
  }, [currentIndex, fields?.length]);

  useEffect(() => {
    if (oldValues) {
      setValues(oldValues);
    }
  }, [oldValues]);

  const getCachedList = (tableName) => {
    return CACHE_LIST[tableName];
  };

  const getRefTables = async () => {
    if (!fields?.length) return;
    let hash = {};
    for (const field of fields) {
      if (hash[field?.ref_table]) continue;

      if (field.is_ref) {
        const response = await ApiActions.read(field?.ref_table);
        hash[field?.ref_table] = response?.result;
      }
    }
    setCACHE_LIST((prev) => ({
      ...prev,
      ...hash,
    }));
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

  console.log("🚀 ~ file: useFormSteps.js:171 ~ useFormSteps ~ getCachedList:", getCachedList)
  return {
    next,
    back,
    isFirst,
    isLast,
    goTo,
    currentIndex,
    values,
    errors,
    handelChangeField,
    handelFieldUpload,
    tab,
    formSettings,
    steps,
    setValues,
    fields,
    formSchema,
    getCachedList,
  };
};

export default useFormSteps;
