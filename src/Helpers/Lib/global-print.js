import * as XLSX from "xlsx";

const downloadExcel = (data, name) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${name}.xlsx`);
};

const PRINT_CONTRACT = (column, data) => {
  
};

const PRINT = {
  contract: PRINT_CONTRACT,
  normal: (data, name) => downloadExcel(data, name)
};

export default PRINT;
