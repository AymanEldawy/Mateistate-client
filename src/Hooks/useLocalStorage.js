export const useLocalStorage = () => {
  const localForms = localStorage.getItem("MATEI_TABLES");
  const report = JSON.parse(localForms) || {};
  const getTable = (tableName) => report?.[tableName];

  const setTable = (tableName, columns) => {
    report[tableName] = columns;
    localStorage.setItem("MATEI_TABLES", JSON.stringify(report));
  };

  return {
    getTable,
    setTable,
  };
};
