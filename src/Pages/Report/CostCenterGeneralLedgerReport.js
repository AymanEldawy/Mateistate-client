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
import { getReportColumns, getReportFields } from "Helpers/Reports";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import useRefTable from "Hooks/useRefTables";
import { ReportPostedField } from "Components/ReportsComponents/ReportsFields/ReportPostedField";

const CostCenterGeneralLedgerReport = () => {
  const name = "cost_center_general_ledger_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const { CACHE_LIST } = useRefTable(name);
  const [selectedColumns, setSelectedColumns] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);
  const onSubmit = (value) => {};

  return (
    <BlockPaper title={"cont center general ledger Report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
            <div className="grid gap-4">
              <ReportFilterFields title={"Fields"}>
                <ReportFields
                  fields={fields}
                  CACHE_LIST={CACHE_LIST}
                  sharedLabelClassName="w-[260px]"
                />
              </ReportFilterFields>
              <ReportFilterCard
                title="Show moving"
                containerClassName="!mt-0"
                bodyClassName="grid !grid-cols-2"
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
            </div>
            <div>
              <div className="grid gap-4">
                <ReportBetweenDateField
                  customTitle={<CheckboxField name="allow_date" label="date" />}
                  date1Field={{ name: "start_date" }}
                  date2Field={{ name: "end_date" }}
                  sharedProps={{
                    readOnly: !watch("allow_date"),
                  }}
                />
                <ReportPostedField containerClassName="!m-0" />
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

export default CostCenterGeneralLedgerReport;
