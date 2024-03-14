import { Input, Select, Switch } from "Components/StructurePage/CustomFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import getFormByTableName from "Helpers/Forms/forms";
import useRefTable from "Hooks/useRefTables";
import { useMemo } from "react";
import { ReportFilterFields } from "../ReportFilterFields";
import { useFormContext } from "react-hook-form";
import { ReportFilterCard } from "../ReportFilterCard";
import { SELECT_LISTS } from "Helpers/constants";

export const ContractsExpiredReportFilter = () => {
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
        fields={fields}
        customGrid="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      />
      <div className="">
        <div className="mb-2">
          <Select
            labelClassName="!font-medium !text-lg"
            containerClassName="!flex-row gap-4 items-center"
            {...{
              label: "filter using",
              name: "filter_using",
              intValue: true,
              selectFirstAsDefault: true,
              list: SELECT_LISTS("filter_using"),
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ReportFilterCard bodyClassName="!grid-cols-1">
            <Input
              containerClassName="flex-1"
              readOnly={watch("filter_using") === 2}
              {...{
                label: "Days start from",
                name: "from",
                type: "number",
              }}
            />
            <Input
              containerClassName="flex-1"
              readOnly={watch("filter_using") === 2}
              {...{
                label: "Days to",
                name: "to",
                type: "number",
              }}
            />
          </ReportFilterCard>
          <ReportFilterCard bodyClassName="!grid-cols-1">
            <Input
              containerClassName="flex-1"
              readOnly={watch("filter_using") === 1}
              {...{
                label: "start_date",
                name: "start_date",
                type: "date",
              }}
            />
            <Input
              containerClassName="flex-1"
              readOnly={watch("filter_using") === 1}
              {...{
                label: "end_date",
                name: "end_date",
                type: "date",
              }}
            />
          </ReportFilterCard>
        </div>
        <ReportFilterCard
          title={"Contract Statement"}
          containerClassName="border-0 shadow-none p-0 mt-8"
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
        <ReportFilterCard
          title={"unit Statement"}
          containerClassName="border-0 shadow-none p-0 my-4"
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
