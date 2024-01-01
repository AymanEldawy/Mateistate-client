export const useLocalStorage = () => {
  const localForms = localStorage.getItem("MATEI_TABLES");
  const tables = JSON.parse(localForms) || {};
  const getTable = (tableName) => tables?.[tableName];

  const setTable = (tableName, columns) => {
    tables[tableName] = columns;
    localStorage.setItem("MATEI_TABLES", JSON.stringify(tables));
  };

  return {
    getTable,
    setTable,
  };
};
