import {
  CurrencyFieldGroup,
  Input,
  Switch,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import getFormByTableName from "Helpers/Forms/forms";
import useRefTable from "Hooks/useRefTables";
import { useMemo } from "react";
import { ReportFilterFields } from "../ReportFilterFields";
import { ReportFilterCard } from "../ReportFilterCard";
import { useFormContext } from "react-hook-form";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import { ContractPatternList } from "../ContractsReport/ContractPatternList";

export const PropertyMovingReportFilter = () => {
  const { watch } = useFormContext();
  const { CACHE_LIST } = useRefTable("property_moving");

  const fields = useMemo(
    () => getFormByTableName("property_moving"),

    []
  );

  return (
    <ReportFilterFields title={"Fields"}>
      <Fields
        fields={fields}
        CACHE_LIST={CACHE_LIST}
        customGrid="grid grid-col-2 md:grid-cols-3 gap-4"
      />
      <ContractPatternList />
      
    </ReportFilterFields>
  );
};
