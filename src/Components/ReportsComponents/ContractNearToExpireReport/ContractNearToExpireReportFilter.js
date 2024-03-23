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
import { ReportBetweenDateField } from "../ReportsFields/ReportDateField";
import { ReportStatementField } from "../ReportsFields/ReportStatementField";

export const ContractNearToExpireReportFilter = () => {
  const { watch } = useFormContext();
  const { CACHE_LIST } = useRefTable("contract_completed_reports");
  const fields = useMemo(
    () => getFormByTableName("contract_completed_reports"),
    []
  );

  return (
    <ReportFilterFields title="Fields">
      <ReportFields
        CACHE_LIST={CACHE_LIST}
        sharedLabelClassName="w-[200px]"
        fields={[
          ...fields,

          {
            label: "Days number",
            name: "days_number",
            type: "number",
          },
        ]}
      />
      <div className="grid grid-cols-1 gap-4">
        <ReportBetweenDateField
          date1Field={{
            name: "start_date",
          }}
          date2Field={{
            name: "end_date",
          }}
          containerClassName="!m-0"
        />
        <ReportStatementField
          containerClassName="!m-0"
          name="contract"
          title={"Contract Statement"}
        />
        <ReportStatementField
          containerClassName="!m-0"
          name="unit"
          title={"Contract Statement"}
        />
      </div>
    </ReportFilterFields>
  );
};
