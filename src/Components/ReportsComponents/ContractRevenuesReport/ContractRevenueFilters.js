import { Input, Select, Switch } from "Components/StructurePage/CustomFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import getFormByTableName from "Helpers/Forms/forms";
import useRefTable from "Hooks/useRefTables";
import { useMemo } from "react";
import { ReportFilterFields } from "../ReportFilterFields";
import { useFormContext } from "react-hook-form";
import { ReportFilterCard } from "../ReportFilterCard";
import { SELECT_LISTS } from "Helpers/constants";
import { ReportFields } from "../ReportsFields/ReportFields";
import ReportSelectField from "../ReportsFields/ReportSelectField";
import { ReportBetweenDateField } from "../ReportsFields/ReportDateField";
import { ReportReviewField } from "../ReportsFields/ReportReviewField";
import ReportInputField from "../ReportsFields/ReportInputField";

export const ContractRevenueFilters = () => {
  const { watch } = useFormContext();
  const { CACHE_LIST } = useRefTable("contract_revenue_reports");
  const fields = useMemo(
    () => getFormByTableName("contract_revenue_reports"),
    []
  );

  return (
    <ReportFilterFields title="Fields" containerClassName="">
      <ReportFields
        CACHE_LIST={CACHE_LIST}
        fields={fields}
        sharedLabelClassName="w-[220px]"
      />
      <ReportFilterCard
        customTitle={<></>}
        containerClassName="!border rounded-md p-2"
        bodyClassName="!grid-cols-1"
      >
        <ReportSelectField
          {...{
            label: "Date by",
            name: "date_by",
            list: SELECT_LISTS("revenues_report_date"),
            intValue: true,
            labelClassName: "w-[130px] !font-medium",
          }}
        />
        <ReportBetweenDateField
          customTitle={<></>}
          containerClassName="!p-0 !border-none"
          date1Field={{ name: "start_date" }}
          date2Field={{ name: "end_date" }}
        />
      </ReportFilterCard>

      <ReportBetweenDateField
        title="Revenue calculation period"
        date1Field={{ label: "start_period_date", name: "start_period_date" }}
        date2Field={{ label: "end_period_date", name: "end_period_date" }}
      />
      <ReportReviewField />
    </ReportFilterFields>
  );
};
