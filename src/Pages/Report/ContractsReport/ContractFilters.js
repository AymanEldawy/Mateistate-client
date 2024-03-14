import { Input, Switch } from "Components/StructurePage/CustomFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import getFormByTableName from "Helpers/Forms/forms";
import useRefTable from "Hooks/useRefTables";
import { useMemo } from "react";
import { ReportFilterFields } from "../ReportFilterFields";

export const ContractFilters = () => {
  const { CACHE_LIST } = useRefTable("contract_reports");
  const fields = useMemo(() => getFormByTableName("contract_reports"), []);

  return (
    <ReportFilterFields title="Fields" containerClassName="ltr:border-r rtl:border-l ltr:pr-4 rtl:pl-4">
      <Fields
        CACHE_LIST={CACHE_LIST}
        fields={fields}
        customGrid="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      />
    </ReportFilterFields>
  );
};
