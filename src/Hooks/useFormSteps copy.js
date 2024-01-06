import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useMemo, useState } from "react";
import { useSSR } from "react-i18next";

const useFormSteps = (steps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirst = () => currentIndex === 0;
  const isLast = () => currentIndex === steps.length - 1;

  const next = () => {
    if (currentIndex >= steps.length - 1) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const back = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const goTo = (index) => {
    setCurrentIndex(index);
  };

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

  useEffect(() => {
    if (oldValues) {
      setValues(oldValues);
    }
  }, [oldValues]);
  console.log(fields);

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
    console.log("🚀 ~ file: FormSteps.js:103 ~ useEffect ~ tab:", tab);
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

  return { next, back, isFirst, isLast, goTo, currentIndex };
};

export default useFormSteps;
