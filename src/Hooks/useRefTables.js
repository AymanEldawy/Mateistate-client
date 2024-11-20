import getFormByTableName from "Helpers/Forms/forms";
import {
  MAIN_USERS_CODE,
  USER_CUSTOMER_CODE,
  USER_SUPERVISOR_CODE,
  USER_SUPPLIER_CODE,
  USER_WORKER_CODE,
} from "Helpers/GENERATE_STARTING_DATA";
import { ApiActions } from "Helpers/Lib/api";
import {
  getAccountList,
  getAccountsChildrenByName,
  getCostCenterList,
  getUserList,
} from "Helpers/Lib/global-read";
import { getReportFields } from "Helpers/Reports";
import { UNIQUE_REF_TABLES } from "Helpers/constants";
import { useEffect, useMemo, useState } from "react";

const useRefTable = (name, type = "form") => {
  const [isLoading, setIsLoading] = useState(false);
  const [CACHE_LIST, setCACHE_LIST] = useState({});
  const [fieldsHash, setFieldsHash] = useState({});

  const fields = useMemo(
    () => (type !== "form" ? getReportFields(name) : getFormByTableName(name)),
    [name]
  );

  useEffect(() => {
    getRefTables();
  }, [name]);

  const getRefTables = async () => {
    if (!fields?.length) return;
    setIsLoading(true);
    
    let hash = {};
    let fieldsHash = {};
    for (let i = 0; i < fields?.length; i++) {
      let field = fields?.[i];
      fieldsHash[field?.name] = field;

      if (hash[field?.ref_table] || CACHE_LIST?.[field?.ref_table]) continue;

      if (field?.is_ref && field?.no_filter) {
        const response = await ApiActions.read(
          field?.ref_table,
          field?.conditions || {}
        );
        hash[field?.ref_table] = response?.result;
        continue;
      }

      if (field?.ref_table === "account") {
        hash.account = await getAccountList();
        continue;
      }

      if (field?.ref_table === "cost_center") {
        hash.cost_center = await getCostCenterList();
        continue;
      }

      if (field?.ref_table === UNIQUE_REF_TABLES.clients) {
        hash[UNIQUE_REF_TABLES.clients] = await getAccountsChildrenByName(
          MAIN_USERS_CODE[1]
        );
        hash.account = await getAccountList();
        continue;
      }

      if (field?.ref_table === UNIQUE_REF_TABLES.supervisor) {
        hash[UNIQUE_REF_TABLES.supervisor] = await getUserList(
          USER_SUPERVISOR_CODE
        );
        continue;
      }

      if (field?.ref_table === UNIQUE_REF_TABLES.employee) {
        hash[UNIQUE_REF_TABLES.employee] = await getUserList(USER_WORKER_CODE);
        continue;
      }

      if (field?.ref_table === UNIQUE_REF_TABLES.user_supplier) {
        hash[UNIQUE_REF_TABLES.user_supplier] = await getUserList(
          USER_SUPPLIER_CODE
        );
        continue;
      }

      if (field?.ref_table === UNIQUE_REF_TABLES.user_customer) {
        hash[UNIQUE_REF_TABLES.user_customer] = await getUserList(
          USER_CUSTOMER_CODE
        );
        continue;
      }

      if (field?.ref_table === UNIQUE_REF_TABLES.suppliers) {
        hash[UNIQUE_REF_TABLES.suppliers] = await getAccountsChildrenByName(
          MAIN_USERS_CODE[2]
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
    setFieldsHash(fieldsHash);
    setIsLoading(false)
  };
  
  return { fields, fieldsHash, CACHE_LIST, setCACHE_LIST, loadingRefTableData: isLoading };
};

export default useRefTable;
