import { useMemo, useState } from "react";
import { LedgerFilters } from "../../Components/ReportsComponents/LedgerReport/LedgerFilters";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { Button } from "Components/Global/Button";
import { FormProvider, useForm } from "react-hook-form";
import { CheckboxField } from "Components/StructurePage/CustomFields";
import { ReportFilterCard } from "Components/ReportsComponents/ReportFilterCard";
import ReportInputField from "Components/ReportsComponents/ReportsFields/ReportInputField";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { getReportColumns } from "Helpers/Reports";

const GeneralLedgerReport = () => {
  const name = "general_ledger_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});

  const columns = useMemo(() => getReportColumns(name), []);
  const onSubmit = (value) => {};

  return (
    <BlockPaper title={"Ledger Report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
            <div className="grid gap-4">
              <LedgerFilters />
              <ReportFilterCard title="Accounts">
                <CheckboxField
                  {...{
                    label: "show_sub_account",
                    name: "show_sub_account",
                  }}
                />
                <ReportInputField
                  {...{
                    label: "level",
                    name: "level",
                    type: "number",
                  }}
                  readOnly={!watch("show_sub_account")}
                />
              </ReportFilterCard>
              <ReportFilterCard title="Show moving" containerClassName="!mt-0">
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
            </div>
            <div>
              {/* <ReportFilterCard title="Previous Years">
                <CheckboxField
                  {...{
                    label: "include_previous_years",
                    name: "prev_year",
                  }}
                />
                <ReportInputField
                  containerClassName="flex-1"
                  {...{
                    label: "exception_to_opening_restrictions",
                    name: "exception_opening_restriction",
                    type: "number",
                  }}
                  readOnly={!watch("prev_year")}
                />
              </ReportFilterCard> */}
              <div className="grid gap-4">
                <ReportBetweenDateField
                  date1Field={{ name: "start_date" }}
                  date2Field={{ name: "end_date" }}
                />
                <ReportFilterCard title="Statement">
                  <ReportInputField
                    {...{
                      label: "include_words",
                      name: "include_words",
                      type: "text",
                    }}
                  />
                  <ReportInputField
                    {...{
                      label: "exception_words",
                      name: "exception_words",
                      type: "text",
                    }}
                  />
                </ReportFilterCard>
                <ReportFilterCard title="Migration">
                  <CheckboxField
                    {...{
                      label: "displaying_transferred_constraints",
                      name: "transferred",
                    }}
                  />
                  <CheckboxField
                    {...{
                      label: "displaying_untransferred_constraints",
                      name: "Untransferred",
                    }}
                  />
                </ReportFilterCard>
              </div>
            </div>
            <ReportFilterColumns
              searchKey="accessorKey"
              columns={columns}
              selectedColumns={selectedColumns}
              setSelectedColumns={setSelectedColumns}
            />
          </div>
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
        </form>
      </FormProvider>
      {/* Filters */}
      {/* Results */}
      {/* info  */}
      {/* account currency date - end date */}
      {/* info  */}
      {/* First table */}
      {/* columns */}
      {/* First table */}
      {/* Second table */}
      {/* labels debit credit total  */}
      {/* Second table */}
      {/* Actions */}
    </BlockPaper>
  );
};

export default GeneralLedgerReport;
