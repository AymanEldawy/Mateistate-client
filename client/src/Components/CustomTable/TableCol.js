import React from "react";

const TableCol = ({ children, classes }) => {
  // console.log(children)
  return (
    <td className={`px-4 py-2 ${classes}`}>
      {children}
    </td>
  );
};

export default TableCol;
