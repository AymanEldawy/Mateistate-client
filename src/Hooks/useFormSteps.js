import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useMemo, useState } from "react";
import { usePopupForm } from "./usePopupForm";

const useFormSteps = ({ name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tab, setTab] = useState("");
  const [fields, setFields] = useState([]);
  const [formSettings, setFormSettings] = useState({});
  const [CACHE_LIST, setCACHE_LIST] = useState({});
  const [refresh, setRefresh] = useState(false)
  const { refTable } = usePopupForm();

  // Get data
  let formSchema = useMemo(() => {
    const forms = getFormByTableName(name);
    return forms;
  }, [name]);

  const forms = useMemo(() => formSchema?.forms, [formSchema]);
  const steps = useMemo(() => Object.keys(formSchema?.forms), [formSchema]);
  const tabNames = useMemo(
    () => Object.values(formSchema?.forms)?.map((f) => f?.tab_name),
    [formSchema]
  );

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
    getRefTables();
  }, [name]);

  useEffect(() => {
    getRefTables();
  }, [currentIndex, fields?.length]);

  useEffect(() => {
    if (refTable?.isClosed) {
      reFetchRefTable(refTable?.table);
    }
  }, [refTable?.isClosed]);

  const reFetchRefTable = async (table) => {
    const response = await ApiActions.read(table);
    if (response?.result?.length) {
      setCACHE_LIST((prev) => ({
        ...prev,
        [table]: response?.result,
      }));
      setRefresh((p) => !p);
    }
  };

  const getRefTables = async () => {
    if (!fields?.length) return;
    let hash = {};
    for (const field of fields) {
      if (hash[field?.ref_table] || CACHE_LIST?.[field?.ref_table]) continue;

      if (field.is_ref) {
        const response = await ApiActions.read(
          field?.ref_table,
          field?.conditions || {}
        );
        hash[field?.ref_table] = response?.result;
      }
    }
    setCACHE_LIST((prev) => ({
      ...prev,
      ...hash,
    }));
  };

  useEffect(() => {
    let tabName = steps?.[currentIndex];
    setTab(forms?.[tabName]?.tab_name);
    // setTab(tabName);
    setFields(forms?.[tabName]?.fields || []);
    setFormSettings(forms?.[tabName]);
  }, [currentIndex, name]);

  return {
    next,
    back,
    isFirst,
    isLast,
    goTo,
    currentIndex,
    tab,
    formSettings,
    steps,
    fields,
    formSchema,
    tabNames,
    CACHE_LIST,
  };
};

export default useFormSteps;
