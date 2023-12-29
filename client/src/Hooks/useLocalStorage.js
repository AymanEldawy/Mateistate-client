export const useLocalStorage = () => {
  const localForms = localStorage.getItem("MATEI_TABLES");
  const tables = JSON.parse(localForms) || {};
  const getTable = (tableName) => tables?.[tableName];

  console.log(tables);
  const setTable = (tableName, columns) => {
    console.log(
      "🚀 ~ file: useLocalStorage.js:7 ~ setTable ~ tableName:",
      tableName
    );
    tables[tableName] = columns;
    localStorage.setItem("MATEI_TABLES", JSON.stringify(tables));
  };

  return {
    getTable,
    setTable,
  };
};
