import { ReportFilterCard } from "Components/ReportsComponents/ReportFilterCard";
import React from "react";
import ReportInputField from "./ReportInputField";

export const ReportBetweenDateField = ({
  title,
  date1Field,
  date2Field,
  customTitle,
  containerClassName,
  bodyClassName,
  date1Props,
  date2Props,
  sharedProps,
}) => {
  return (
    <ReportFilterCard
      title={title ? title : "Date"}
      customTitle={customTitle}
      containerClassName={containerClassName}
      bodyClassName={bodyClassName}
    >
      <ReportInputField
        labelClassName="w-[130px]"
        {...{
          label: "start_date",
          name: "start_duration_date",
          ...date1Field,
          type: "date",
        }}
        {...sharedProps}
        {...date1Props}
      />
      <ReportInputField
        labelClassName="w-[130px]"
        {...{
          label: "end_date",
          name: "end_duration_date",
          ...date2Field,
          type: "date",
        }}
        {...sharedProps}
        {...date2Props}
      />
    </ReportFilterCard>
  );
};
