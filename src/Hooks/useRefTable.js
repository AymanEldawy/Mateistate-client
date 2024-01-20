import { ApiActions } from "Helpers/Lib/api";
import { useEffect } from "react";

const useRefTable = (fields) => {
  let CACHE_LIST = {};

  const fetchData = async () => {
    for (const field of fields) {
      if (field.is_ref) {
        const response = await ApiActions.read(field?.ref_table);
        CACHE_LIST[field?.ref_table] = response?.result;

        for (const item of response?.result) {
          CACHE_LIST[item.id] = item.name || item.number || item.id;
        }
      }
    }
  };

  const getCachedList = (tableName) => {
    return CACHE_LIST[tableName];
  };

  useEffect(() => {
    if(!fields?.length) return;
    fetchData();
  }, [fields?.length]);

  return { CACHE_LIST, getCachedList };
};

export default useRefTable;
