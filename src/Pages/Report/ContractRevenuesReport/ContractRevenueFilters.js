import { Input, Select, Switch } from "Components/StructurePage/CustomFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import getFormByTableName from "Helpers/Forms/forms";
import useRefTable from "Hooks/useRefTables";
import { useMemo } from "react";
import { ReportFilterFields } from "../ReportFilterFields";
import { useFormContext } from "react-hook-form";
import { ReportFilterCard } from "../ReportFilterCard";
import { SELECT_LISTS } from "Helpers/constants";

export const ContractRevenueFilters = () => {
  const { watch } = useFormContext();
  const { CACHE_LIST } = useRefTable("contract_revenue_reports");
  const fields = useMemo(
    () => getFormByTableName("contract_revenue_reports"),
    []
  );

  return (
    <ReportFilterFields title="Fields" containerClassName="">
      <Fields
        CACHE_LIST={CACHE_LIST}
        fields={fields}
        customGrid="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <ReportFilterCard
          title="Date"
          containerClassName="!border rounded-md p-2"
          bodyClassName="!grid-cols-1"
        >
          <Select
            {...{
              label: "Date by",
              name: "date_by",
              list: SELECT_LISTS("revenues_report_date"),
              intValue: true,
            }}
          />
          <Input
            containerClassName="flex-1"
            {...{
              label: "start_date",
              name: "start_date",
              type: "date",
            }}
          />
          <Input
            containerClassName="flex-1"
            {...{
              label: "end_date",
              name: "end_date",
              type: "date",
            }}
          />
        </ReportFilterCard>

        <ReportFilterCard
          title="Revenue calculation period"
          containerClassName="!border rounded-md p-2"
          bodyClassName="!grid-cols-1"
        >
          <Input
            containerClassName="flex-1"
            {...{
              label: "start_period_date",
              name: "start_period_date",
              type: "date",
            }}
          />
          <Input
            containerClassName="flex-1"
            {...{
              label: "end_period_date",
              name: "end_period_date",
              type: "date",
            }}
          />
        </ReportFilterCard>
        <ReportFilterCard
          title={"Report Review"}
          containerClassName="!border rounded-md p-2"
          bodyClassName="!grid-cols-1"
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
