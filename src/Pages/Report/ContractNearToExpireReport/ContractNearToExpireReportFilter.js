import { Input, Select, Switch } from "Components/StructurePage/CustomFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import getFormByTableName from "Helpers/Forms/forms";
import useRefTable from "Hooks/useRefTables";
import { useMemo } from "react";
import { ReportFilterFields } from "../ReportFilterFields";
import { useFormContext } from "react-hook-form";
import { ReportFilterCard } from "../ReportFilterCard";
import { SELECT_LISTS } from "Helpers/constants";

export const ContractNearToExpireReportFilter = () => {
  const { watch } = useFormContext();
  const { CACHE_LIST } = useRefTable("contract_completed_reports");
  const fields = useMemo(
    () => getFormByTableName("contract_completed_reports"),
    []
  );

  return (
    <ReportFilterFields title="Fields" containerClassName="">
      <Fields
        CACHE_LIST={CACHE_LIST}
        fields={[
          ...fields,

          {
            label: "Days number",
            name: "days_number",
            type: "number",
          },
        ]}
        customGrid="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        <ReportFilterCard bodyClassName="!grid-cols-1"  title="Date">
          <Input
            containerClassName="flex-1"
            {...{
              label: "start_date",
              name: "start_duration_date",
              type: "date",
            }}
          />
          <Input
            containerClassName="flex-1"
            {...{
              label: "end_date",
              name: "end_duration_date",
              type: "date",
            }}
          />
        </ReportFilterCard>
        <ReportFilterCard bodyClassName="!grid-cols-1" 
          title={"Contract Statement"}
          customTitle={
            <>
              <Switch
                containerClassName="-mt-2"
                {...{
                  name: "allow_contract_statement",
                }}
              />
              <span className="capitalize">{"Contract Statement"}</span>
            </>
          }
        >
          <div className="flex gap-2 items-start">
            <Select
              containerClassName="flex-1"
              readOnly={!watch("allow_contract_statement")}
              {...{
                label: "contract_statement_type",
                name: "contract_statement_type",
                list: [
                  { id: 1, name: "Contains" },
                  { id: 2, name: "Non-Contains" },
                ],
              }}
            />
          </div>
          <Input
            containerClassName="flex-1"
            readOnly={!watch("allow_contract_statement")}
            {...{
              label: "contract_statement",
              name: "contract_statement",
            }}
          />
        </ReportFilterCard>
        <ReportFilterCard bodyClassName="!grid-cols-1" 
          title={"unit Statement"}
          customTitle={
            <>
              <Switch
                containerClassName="-mt-2"
                {...{
                  name: "allow_unit_statement",
                }}
              />
              <span className="capitalize">{"unit Statement"}</span>
            </>
          }
        >
          <div className="flex gap-2 items-start">
            <Select
              containerClassName="flex-1"
              readOnly={!watch("allow_unit_statement")}
              {...{
                label: "unit_statement_type",
                name: "unit_statement_type",
                list: [
                  { id: 1, name: "Contains" },
                  { id: 2, name: "Non-Contains" },
                ],
              }}
            />
          </div>
          <Input
            containerClassName="flex-1"
            readOnly={!watch("allow_unit_statement")}
            {...{
              label: "unit_statement",
              name: "unit_statement",
            }}
          />
        </ReportFilterCard>
      </div>
    </ReportFilterFields>
  );
};
