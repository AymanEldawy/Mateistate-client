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

export const LedgerFilters = () => {
  const {watch} = useFormContext()
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
        {["account_id", "cost_center_id", "observe_account_id"]?.map(
          (field) => {
            let name =
              field?.indexOf("account") !== -1 ? "account" : "cost_center";
            return (
              <UniqueField
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ReportFilterCard
          title="Accounts"
          customTitle={
            <>
              {/* <Switch
                containerClassName="-mt-2"
                {...{
                  name: "show_main_account",
                }}
              /> */}
              <span>{"Accounts"}</span>
            </>
          }
        >
          <Switch
            {...{
              label: "show_sub_account",
              name: "show_sub_account",
            }}
          />
          <Input
            {...{
              label: "level",
              name: "level",
              type: "number",
            }}
            readOnly={!watch('show_sub_account')}
          />
        </ReportFilterCard>

        <ReportFilterCard title="Previous Years">
          <Switch
            {...{
              label: "include_previous_years",
              name: "prev_year",
            }}
          />
          <Input
            containerClassName="flex-1"
            {...{
              label: "exception_to_opening_restrictions",
              name: "exception_opening_restriction",
              type: "number",
            }}
            readOnly={!watch('prev_year')}

          />
        </ReportFilterCard>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ReportFilterCard title="Date">
          <Input
            containerClassName="w-full"
            {...{
              label: "start_date",
              name: "start_date",
              type: "date",
            }}
          />
          <Input
            containerClassName="w-full"
            {...{
              label: "end_date",
              name: "end_date",
              type: "date",
            }}
          />
        </ReportFilterCard>
        <ReportFilterCard title="Statement">
          <Input
            {...{
              label: "include_words",
              name: "include_words",
              type: "text",
            }}
          />
          <Input
            {...{
              label: "exception_words",
              name: "exception_words",
              type: "text",
            }}
          />
        </ReportFilterCard>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ReportFilterCard title="Migration">
          <Switch
            {...{
              label: "displaying_transferred_constraints",
              name: "transferred",
            }}
          />
          <Switch
            {...{
              label: "displaying_untransferred_constraints",
              name: "Untransferred",
            }}
          />
        </ReportFilterCard>
        <ReportFilterCard title="Show moving">
          <Switch
            {...{
              label: "show_debit",
              name: "show_debit",
            }}
          />
          <Switch
            {...{
              label: "show_credit",
              name: "show_credit",
            }}
          />
        </ReportFilterCard>
      </div>
    </ReportFilterFields>
  );
};
