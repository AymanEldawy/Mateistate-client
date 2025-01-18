import { CurrencyFieldGroup } from "Components/StructurePage/CustomFields";
import useRefTable from "Hooks/useRefTables";
import { useMemo } from "react";
import { ReportFilterFields } from "../ReportFilterFields";
import { useFormContext } from "react-hook-form";
import { getReportFields } from "Helpers/Reports";
import { ReportFields } from "../ReportsFields/ReportFields";

export const LedgerFilters = ({ extraFields, hideCurrency }) => {
  const name = "general_ledger_report";
  const { watch } = useFormContext();

  const fields = useMemo(() => getReportFields(name), []);

  return (
    <ReportFilterFields title={"Fields"}>
      <ReportFields
        fields={fields}
        sharedLabelClassName="w-[260px]"
      />
      {extraFields}
      {hideCurrency ? null : (
        <CurrencyFieldGroup
          fields={{ ...fields?.currency_id, hideValue: false }}
        />
      )}
    </ReportFilterFields>
  );
};
