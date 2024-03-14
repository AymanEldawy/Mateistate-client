import { CloseIcon } from "Components/Icons";
import React from "react";

const FormHeadingTitle = ({ customName, title, extraContext, onClose, classes }) => {
  return (
    <div className="flex items-center gap-4 justify-between mb-8 text-left ">
      <button
        type="button"
        className={` p-2 flex-1 font-medium capitalize border-l-4 dark:bg-dark-border text-left text-lg !text-blue-500 bg-blue-50 border-blue-500 ${classes}`}
      >
        {customName || title}
      </button>
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          className="h-9 w-9 rounded-full flex items-center justify-center bg-red-100 text-red-500"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      ) : null}
      {extraContext ? extraContext : null}
    </div>
  );
};

export default FormHeadingTitle;
