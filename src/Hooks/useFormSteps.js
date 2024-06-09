import getFormByTableName from "Helpers/Forms/forms";
import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useMemo, useState } from "react";
import {
  getAccountList,
  getAccountsChildrenByName,
  getCostCenterList
} from "Helpers/Lib/global-read";
import { UNIQUE_REF_TABLES } from "Helpers/constants";

const useFormSteps = ({ name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tab, setTab] = useState("");
  const [fields, setFields] = useState([]);
  const [formSettings, setFormSettings] = useState({});
  const [CACHE_LIST, setCACHE_LIST] = useState({});

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

  const getRefTables = async () => {
    if (!fields?.length) return;
    let hash = {};
    for (let i = 0; i < fields?.length; i++) {
      let field = fields?.[i];

      if (hash[field?.ref_table] || CACHE_LIST?.[field?.ref_table]) continue;

      if (field?.ref_table === "cost_center") {
        hash.cost_center = await getCostCenterList();
        continue;
      }

      if (field?.ref_table === "account") {
        hash.account = await getAccountList();
        continue; 
      }

      if (field?.ref_table === UNIQUE_REF_TABLES.clients) {
        hash[UNIQUE_REF_TABLES.clients] = await getAccountsChildrenByName(
          "Customers"
        );
        hash.account = await getAccountList();
        continue;
      }

      if (field?.ref_table === UNIQUE_REF_TABLES.suppliers) {
        hash[UNIQUE_REF_TABLES.suppliers] = await getAccountsChildrenByName(
          "Suppliers"
        );
        hash.account = await getAccountList();
        continue;
      }

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
    setFields,
    forms,
    setCurrentIndex,
    setCACHE_LIST,
  };
};

export default useFormSteps;
