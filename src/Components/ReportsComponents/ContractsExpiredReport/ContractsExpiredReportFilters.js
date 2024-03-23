import { Input, Select, Switch } from "Components/StructurePage/CustomFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import getFormByTableName from "Helpers/Forms/forms";
import useRefTable from "Hooks/useRefTables";
import { useMemo } from "react";
import { ReportFilterFields } from "../ReportFilterFields";
import { useFormContext } from "react-hook-form";
import { ReportFilterCard } from "../ReportFilterCard";
import { SELECT_LISTS } from "Helpers/constants";
import { ReportStatementField } from "Components/ReportsComponents/ReportsFields/ReportStatementField";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import { ReportBetweenDateField } from "../ReportsFields/ReportDateField";
import ReportInputField from "../ReportsFields/ReportInputField";

export const ContractsExpiredReportFilter = () => {
  const { watch } = useFormContext();
  const { CACHE_LIST } = useRefTable("contract_completed_reports");
  const fields = useMemo(
    () => getFormByTableName("contract_completed_reports"),
    []
  );

  return (
    <ReportFilterFields title="Fields" containerClassName="">
      <ReportFields
        CACHE_LIST={CACHE_LIST}
        fields={fields}
        sharedLabelClassName="w-[200px]"
      />
      <div className="">
        <div className="px-4 pt-2 pb-1 border rounded-md">
          <div className="">
            <Select
              labelClassName="!font-medium !text-lg w-[100px]"
              selectClassName="flex-1"
              containerClassName="!flex-row gap-4 items-center mb-2"
              {...{
                label: "filter using",
                name: "filter_using",
                intValue: true,
                selectFirstAsDefault: true,
                list: SELECT_LISTS("filter_using"),
              }}
            />
            <ReportFilterCard containerClassName="!border-0 !px-0">
              <ReportInputField
                containerClassName="flex-1"
                labelClassName="w-[150px]"
                readOnly={watch("filter_using") === 2}
                {...{
                  label: "Days start from",
                  name: "from",
                  type: "number",
                }}
              />
              <ReportInputField
                containerClassName="flex-1"
                labelClassName="w-[150px]"
                readOnly={watch("filter_using") === 2}
                {...{
                  label: "Days to",
                  name: "to",
                  type: "number",
                }}
              />
            </ReportFilterCard>
            <ReportBetweenDateField
              containerClassName="!border-0 !px-0 !border-t !rounded-none"
              date1Field={{
                name: "start_date",
              }}
              date2Field={{
                name: "end_date",
              }}
              sharedProps={{
                containerClassName: "flex-1",
                readOnly: watch("filter_using") === 1,
                labelClassName: "w-[150px]",
              }}
            />
          </div>
        </div>
      </div>
    </ReportFilterFields>
  );
};
