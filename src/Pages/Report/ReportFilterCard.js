import React from "react";

export const ReportFilterCard = ({
  title,
  containerClassName,
  bodyClassName,
  children,
  customTitle,
}) => {
  return (
    <div
      className={`w-full p-2 rounded-md !border ${containerClassName}`}
    >
      {customTitle ? (
        <div className="flex gap-2 items-start font-medium text-blue-500 text-lg mb-2">{customTitle}</div>
      ) : (
        <h4 className="font-medium text-blue-500 text-lg mb-2">{title}</h4>
      )}

      <div className={`grid grid-cols-2 gap-4 items-center ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
};
