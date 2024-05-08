export const useLocalStorage = () => {
  const localForms = localStorage.getItem("MATEI_REPORTS");
  const report = JSON.parse(localForms) || {};
  const getReport = (tableName) => report?.[tableName];

  const setReport = (tableName, columns) => {
    report[tableName] = columns;
    localStorage.setItem("MATEI_REPORTS", JSON.stringify(report));
  };

  return {
    getReport,
    setReport,
  };
};
