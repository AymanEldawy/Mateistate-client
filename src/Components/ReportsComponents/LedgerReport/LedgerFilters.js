import {
  CheckboxField,
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
import ReportInputField from "../ReportsFields/ReportInputField";
import { ReportBetweenDateField } from "../ReportsFields/ReportDateField";
import ReportUniqueField from "../ReportsFields/ReportUniqueField";

export const LedgerFilters = () => {
  const { watch } = useFormContext();
  const { CACHE_LIST } = useRefTable("entry_grid_data");
  const fields = useMemo(() => {
    let form = getFormByTableName("entry_grid_data");
    let hash = {};
    for (const field of form) {
      hash[field?.name] = field;
    }
    return hash;
  }, []);

  return (
    <ReportFilterFields title={"Fields"}>
      <div className="grid gap-4">
        {["account_id", "cost_center_id", "observe_account_id"]?.map(
          (field) => {
            let name =
              field?.indexOf("account") !== -1 ? "account" : "cost_center";
            return (
              <ReportUniqueField
                {...fields?.[field]}
                CACHE_LIST={CACHE_LIST}
                list={!!CACHE_LIST ? CACHE_LIST?.[name] : []}
              />
            );
          }
        )}
        <CurrencyFieldGroup
          fields={{ ...fields?.currency_id, hideValue: false }}
          CACHE_LIST={CACHE_LIST}
          list={!!CACHE_LIST ? CACHE_LIST?.currency : []}
        />
      </div>
   
    </ReportFilterFields>
  );
};
