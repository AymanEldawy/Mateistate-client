import React from "react";
import { ReportFilterCard } from "../ReportFilterCard";
import { CheckboxField } from "Components/StructurePage/CustomFields";

export const ReportPostedField = ({ containerClassName }) => {
  return (
    <ReportFilterCard title="Posting" containerClassName={containerClassName}>
      <CheckboxField
        {...{
          label: "view posted entry",
          name: "posted",
        }}
        containerClassName="flex items-center gap-2"
        labelClassName="mt-2"
      />
      <CheckboxField
        {...{
          label: "view non-posted entry",
          name: "non_posted",
        }}
      />
    </ReportFilterCard>
  );
};
