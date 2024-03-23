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
      className={`mb-2 w-full p-2 rounded-md !border ${containerClassName}`}
    >
      {customTitle ? (
        <div className="flex gap-2 items-start font-medium text-black text-base mb-1">{customTitle}</div>
      ) : (
        <h4 className="font-medium text-black text-base mb-1">{title}</h4>
      )}

      <div className={`flex flex-col gap-2 ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
};
