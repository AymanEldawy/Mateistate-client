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

const REPORT_OPTIONS = [
  "show_main_accounts",
  "show_empty_cost_center",
  "show_previous_balance",
  "show_by_totals",
  "show_by_balance",
];

const CostCenterTrialBalanceReport = () => {
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
              {REPORT_OPTIONS?.map((option) => (
                <CheckboxField
                  key={option}
                  {...{
                    label: option,
                    name: option,
                  }}
                />
              ))}
            </ReportFilterFields>
            <div className="grid gap-4">
              <ReportBetweenDateField
                date1Field={{ name: "start_date" }}
                date2Field={{ name: "end_date" }}
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

export default CostCenterTrialBalanceReport;
