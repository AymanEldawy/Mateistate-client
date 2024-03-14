import { Input, Switch } from "Components/StructurePage/CustomFields";
import React from "react";
import { ReportFilterFields } from "../ReportFilterFields";
import { ReportFilterCard } from "../ReportFilterCard";

export const ContractPatternList = ({ title, inChq }) => {
  return (
    <ReportFilterFields title={title}>
      <div className="grid md:grid-cols-2 gap-2">
        <ReportFilterCard
          title={"Date"}
          containerClassName={inChq ? "border-0 shadow-none p-0" : ""}
        >
          <Input
            containerClassName="w-full"
            {...{
              label: "start_date",
              name: "start_duration_date",
              type: "date",
            }}
          />
          <Input
            containerClassName="w-full"
            {...{
              label: "end_date",
              name: "end_duration_date",
              type: "date",
            }}
          />
        </ReportFilterCard>
        <ReportFilterCard
          title="Report Review"
          containerClassName={inChq ? "border-0 shadow-none p-0" : ""}
        >
          <Switch
            {...{
              label: "reviewed_presentation",
              name: "reviewed",
            }}
          />
          <Switch
            {...{
              label: "unreviewed_presentation",
              name: "unreviewed",
            }}
          />
        </ReportFilterCard>
      </div>
    </ReportFilterFields>
  );
};
