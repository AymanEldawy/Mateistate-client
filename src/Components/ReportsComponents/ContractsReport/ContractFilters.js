import getFormByTableName from "Helpers/Forms/forms";
import useRefTable from "Hooks/useRefTables";
import { useMemo } from "react";
import { ReportFilterFields } from "../ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";

export const ContractFilters = () => {
  const { CACHE_LIST } = useRefTable("contract_reports");
  const fields = useMemo(() => getFormByTableName("contract_reports"), []);

  return (
    <ReportFilterFields
      title="Fields"
      // containerClassName="ltr:border-r rtl:border-l ltr:pr-4 rtl:pl-4"
    >
      <ReportFields
        CACHE_LIST={CACHE_LIST}
        fields={fields}
        sharedLabelClassName="w-[200px]"
        // containerClassName="grid grid-cols-2 gap-4"
      />
    </ReportFilterFields>
  );
};
