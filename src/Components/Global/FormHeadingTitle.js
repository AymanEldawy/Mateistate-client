import React from "react";

const FormHeadingTitle = ({ title, extraContext, classes }) => {
  return (
    <div className="flex items-center gap-4 justify-between mb-8 text-left ">
      <button
        className={` p-2 flex-1 font-medium capitalize border-l-4 dark:bg-dark-border text-left text-lg !text-blue-500 bg-blue-50 border-blue-500 ${classes}`}
      >
        {title}
      </button>
      {extraContext ? extraContext : null}
    </div>
  );
};

export default FormHeadingTitle;
