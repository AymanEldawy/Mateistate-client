import { ReportFilterCard } from "Components/ReportsComponents/ReportFilterCard";
import React from "react";
import ReportInputField from "./ReportInputField";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const ReportFieldBetweenValues = ({
  containerClassName,
  bodyClassName,
  field1Props,
  field2Props,
  sharedProps,
  hideText,
  readOnly,
  label,
  labelClassName,
  inputClassName,
}) => {
  const { register } = useFormContext();
  const { t } = useTranslation();

  return (
    <div className={`flex items-center gap-4 lg:gap-8 ${containerClassName}`}>
      {label ? (
        <label
          className={
            "overflow-hidden text-ellipsis min-w-fit text-sm font-normal whitespace-nowrap mb-1 capitalize flex items-center gap-2 " +
            labelClassName
          }
        >
          {t(label)?.replace(/_/g, " ")}{" "}
        </label>
      ) : null}
      <div className={`flex gap-4 items-center ${bodyClassName}`}>
        <input
          className={`border w-full h-[39px] read-only:bg-[#006d5f1f] dark:read-only:bg-[#444] rounded p-1 ${inputClassName}`}
          readOnly={readOnly}
          {...field1Props}
          {...sharedProps}
          {...register(field1Props?.name || "from")}
        />
        {hideText ? null : "To"}
        <input
          readOnly={readOnly}
          className={`border w-full h-[39px] read-only:bg-[#006d5f1f] dark:read-only:bg-[#444] rounded p-1 ${inputClassName}`}
          {...field2Props}
          {...sharedProps}
          {...register(field2Props?.name || "to")}
        />
      </div>
    </div>
  );
};
