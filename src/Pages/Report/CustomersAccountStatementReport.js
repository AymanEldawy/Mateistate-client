import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import { FormProvider, useForm } from "react-hook-form";
import { CheckboxField } from "Components/StructurePage/CustomFields";
import { ReportFilterCard } from "Components/ReportsComponents/ReportFilterCard";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportPostedField } from "Components/ReportsComponents/ReportsFields/ReportPostedField";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import { getReportColumns, getReportFields } from "Helpers/Reports";
import { useMemo, useState } from "react";
import useRefTable from "Hooks/useRefTables";
import { ReportFilterColumns } from "Components/ReportsComponents/ReportFilterColumns";
import { ReportFilterVoucherPattern } from "Components/ReportsComponents/ReportFilterVoucherPattern";
import { ReportFilterChequePattern } from "Components/ReportsComponents/ReportFilterChequePattern";
import { ReportStatementField } from "Components/ReportsComponents/ReportsFields/ReportStatementField";

const CustomersAccountStatementReport = () => {
  const name = "customer_account_statement_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const { CACHE_LIST } = useRefTable();
  const [selectedColumns, setSelectedColumns] = useState({});
  const [chqIds, setChqIds] = useState({});
  const [voucherIds, setVoucherIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  const onSubmit = (value) => {};

  return (
    <BlockPaper title={"Customer Account Statement Report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-start">
            <ReportFilterFields>
              <ReportFields CACHE_LIST={CACHE_LIST} fields={fields}
              
              sharedLabelClassName="w-[200px]"
              />
              <ReportBetweenDateField
                customTitle={<CheckboxField name="allow_date" label="date" />}
                date1Field={{ name: "start_date" }}
                date2Field={{ name: "end_date" }}
                sharedProps={{
                  readOnly: !watch("allow_date"),
                }}
              />

              <ReportPostedField />
            </ReportFilterFields>
            <div className="grid gap-4">
              <ReportFilterChequePattern
                chqIds={chqIds}
                setChqIds={setChqIds}
              />
              <ReportFilterVoucherPattern
                voucherIds={voucherIds}
                setVoucherIds={setVoucherIds}
              />
              <ReportStatementField name="note" containerClassName="!m-0" />
            </div>
            <ReportFilterColumns
              searchKey="accessorKey"
              columns={columns}
              selectedColumns={selectedColumns}
              setSelectedColumns={setSelectedColumns}
              bodyClassName="h-[380px]"
            />
          </div>
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
        </form>
      </FormProvider>
    </BlockPaper>
  );
};

export default CustomersAccountStatementReport;
