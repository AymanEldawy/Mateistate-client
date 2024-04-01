import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import { FormProvider, useForm } from "react-hook-form";
import { CheckboxField } from "Components/StructurePage/CustomFields";
import { ReportFilterCard } from "Components/ReportsComponents/ReportFilterCard";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { LedgerFilters } from "Components/ReportsComponents/LedgerReport/LedgerFilters";
import ReportInputField from "Components/ReportsComponents/ReportsFields/ReportInputField";
import { ReportPostedField } from "Components/ReportsComponents/ReportsFields/ReportPostedField";

const TrialBalanceReport = () => {
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const onSubmit = (value) => {};

  return (
    <BlockPaper title={"Trial balance Report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-start">
            <LedgerFilters
              hideCurrency
              extraFields={
                <ReportInputField
                  containerClassName="!-mt-2"
                  labelClassName="w-[260px]"
                  name="level"
                  label="level"
                  type="number"
                />
              }
            />
            <ReportFilterFields
              title={"Accounts"}
              containerClassName="border-x px-4 flex flex-col gap-3"
            >
              <CheckboxField
                {...{
                  label: "show_sub_account",
                  name: "show_sub_account",
                }}
              />
              <CheckboxField
                {...{
                  label: "Show customers / suppliers accounts",
                  name: "show_customer_accounts",
                }}
              />
              <CheckboxField
                {...{
                  label: "Show empty accounts",
                  name: "show_empty_accounts",
                }}
              />
              <CheckboxField
                {...{
                  label: "Show monitored accounts",
                  name: "show_monitored_accounts",
                }}
              />
              <CheckboxField
                {...{
                  label: "Show the previous balance",
                  name: "show_previous_balance",
                }}
              />
              <CheckboxField
                {...{
                  label: "Display in totals",
                  name: "display_in_totals",
                }}
              />
              <ReportFilterCard
                title="Display balances"
                containerClassName="!mt-0 !p-0 !border-0"
                bodyClassName="!flex-row"
              >
                <CheckboxField
                  {...{
                    label: "show_debit",
                    name: "show_debit",
                  }}
                />
                <CheckboxField
                  {...{
                    label: "show_credit",
                    name: "show_credit",
                  }}
                />
              </ReportFilterCard>
            </ReportFilterFields>
            <div className="grid gap-4">
              <ReportBetweenDateField
                customTitle={<CheckboxField name="allow_date" label="date" />}
                date1Field={{ name: "start_date" }}
                date2Field={{ name: "end_date" }}
                sharedProps={{
                  readOnly: !watch("allow_date"),
                }}
              />

              <ReportPostedField />
            </div>
          </div>
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
        </form>
      </FormProvider>
    </BlockPaper>
  );
};

export default TrialBalanceReport;
