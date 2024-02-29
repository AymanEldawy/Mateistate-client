import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { ApiActions } from "Helpers/Lib/api";
import { getLastCostCenterNumber } from "Helpers/Lib/operations/global-insert";
import {
  getAccount,
  getAccountList,
  getAccountsChildrenByName,
  getContracts,
  getCostCenter,
} from "Helpers/Lib/operations/global-read";
import { UNIQUE_REF_TABLES } from "Helpers/constants";
import { useEffect, useMemo, useState } from "react";

const GLOBAL_READ_DATA = {
  account: getAccount,
  contract: getContracts,
  cost_center: getCostCenter,
};

const useRefTable = (name, params) => {
  const [CACHE_LIST, setCACHE_LIST] = useState({});
  
  const fields = useMemo(() => getFormByTableName(name), [name]);

  useEffect(() => {
    getRefTables();
  }, [name]);

  const getRefTables = async () => {
    if (!fields?.length) return;
    let hash = {};
    for (let i = 0; i < fields?.length; i++) {
      let field = fields?.[i];

      if (hash[field?.ref_table] || CACHE_LIST?.[field?.ref_table]) continue;

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

  return { fields, CACHE_LIST, setCACHE_LIST };
};

export default useRefTable;
