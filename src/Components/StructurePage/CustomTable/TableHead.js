import React from "react";

const TableHead = ({ children, classes, ...props }) => {
  return (
    <thead
      className={`text-xs text-gray-700 uppercase dark:bg-dark-border dark:text-gray-300 bg-gray-200 ${classes}`}
      {...props}
    >
      <tr>
        {/* <tr>{children}</tr> */}
        {children}
      </tr>
    </thead>
  );
};

export default TableHead;
