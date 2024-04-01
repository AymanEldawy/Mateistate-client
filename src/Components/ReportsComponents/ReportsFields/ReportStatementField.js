import { CheckboxField, Input, Select, Switch } from "Components/StructurePage/CustomFields";
import { ReportFilterCard } from "Components/ReportsComponents/ReportFilterCard";
import React from "react";
import { useFormContext } from "react-hook-form";
import ReportSelectField from "./ReportSelectField";
import ReportInputField from "./ReportInputField";

export const ReportStatementField = ({
  name,
  title,
  containerClassName,
  bodyClassName,
}) => {
  const { watch } = useFormContext();
  return (
    <ReportFilterCard
      title={title}
      containerClassName={`border-0 shadow-none p-0 mt-4 ${containerClassName}`}
      bodyClassName={bodyClassName}
      customTitle={
        <CheckboxField name={`allow_${name}_statement`} label={name} />
      }
    >
      <div className="flex gap-2 items-start">
        <ReportSelectField
          labelClassName="w-[230px]"
          containerClassName="flex-1 max-lg:flex-wrap"
          readOnly={!watch(`allow_${name}_statement`)}
          {...{
            label: `${name}_statement_type`,
            name: `${name}_statement_type`,
            list: [
              { id: 1, name: "Contains" },
              { id: 2, name: "Non-Contains" },
            ],
          }}
        />
      </div>
      <ReportInputField
        labelClassName="w-[230px]"
        containerClassName="flex-1 max-lg:flex-wrap"
        readOnly={!watch(`allow_${name}_statement`)}
        {...{
          label: `${name}_statement`,
          name: `${name}_statement`,
        }}
      />
    </ReportFilterCard>
  );
};
