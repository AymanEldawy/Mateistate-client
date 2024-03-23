import { CheckboxField } from "Components/StructurePage/CustomFields";
import { ReportFilterCard } from "Components/ReportsComponents/ReportFilterCard";
import React from "react";

export const ReportReviewField = () => {
  return (
    <ReportFilterCard title="Report Review">
      <CheckboxField
        {...{
          label: "reviewed_presentation",
          name: "reviewed",
        }}
        containerClassName="flex items-center gap-2"
        labelClassName="mt-2"
      />
      <CheckboxField
        {...{
          label: "unreviewed_presentation",
          name: "unreviewed",
        }}
      />
    </ReportFilterCard>
  );
};
