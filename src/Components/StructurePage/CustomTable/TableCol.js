import React from "react";

const TableCol = ({ children, classes, ...props }) => {
  return (
    <td className={`px-4 py-2 dark:border-dark-border ${classes}`} {...props}>
      {children}
    </td>
  );
};

export default TableCol;
