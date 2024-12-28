import BlockPaper from "Components/Global/BlockPaper";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { useMemo, useState } from "react";
import { ReportFilterContractPatterns } from "../../Components/ReportsComponents/ReportFilterContractPatterns";
import { ReportReviewField } from "Components/ReportsComponents/ReportsFields/ReportReviewField";
import { ReportFilterChequePattern } from "Components/ReportsComponents/ReportFilterChequePattern";
import { getReportColumns, getReportFields } from "Helpers/Reports";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { ReportStatementField } from "Components/ReportsComponents/ReportsFields/ReportStatementField";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import useRefTable from "Hooks/useRefTables";
import { ReportFilterVoucherPattern } from "Components/ReportsComponents/ReportFilterVoucherPattern";
import { ReportFilterChqOperationsTypes } from "Components/ReportsComponents/ReportFilterChqOperationsTypes";
import { ReportFilterCard } from "Components/ReportsComponents/ReportFilterCard";
import { CheckboxField } from "Components/StructurePage/CustomFields";
import { ReportSectionFilterValues } from "Components/ReportsComponents/ReportsFields/ReportSectionFilterValues";
import { ReportPostedField } from "Components/ReportsComponents/ReportsFields/ReportPostedField";
import REPORTS from "Helpers/Lib/global-reports";
import { ReportResultsWrapper } from "Components/ReportsComponents/ReportResultsWrapper";

const JournalLedgerReport = () => {
  const name = "journal_ledger_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const { CACHE_LIST } = useRefTable(name);
  const [selectedColumns, setSelectedColumns] = useState({});
  const [voucherIds, setVoucherIds] = useState({});
  const [operationIds, setOperationIds] = useState({});
  const [chqIds, setChqIds] = useState({});
  const [contractIds, setContractIds] = useState({});
  const [data, setData] = useState([]);
  const [openReportResults, setOpenReportResults] = useState(false);

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  const onSubmit = async (value) => {
    let fn = REPORTS?.[name];
    const res = await fn({
      filters: watch(),
      columns: Object.keys(selectedColumns),
    });
    setData(res?.data);
    console.log("🚀 ~ onSubmit ~ res:", res);
  };

  return (
    <>
      <BlockPaper title={"Journal ledger Report"}>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative"
          >
            <div className="grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
              <ReportFilterFields title="fields">
                <ReportFields
                  CACHE_LIST={CACHE_LIST}
                  list={!!CACHE_LIST ? CACHE_LIST?.account : []}
                  fields={fields}
                  containerClassName="!mb-0 gap-3"
                  sharedLabelClassName="w-[200px]"
                />
                <ReportBetweenDateField containerClassName="!m-0" />
                <ReportSectionFilterValues />
                <ReportStatementField
                  name="statement"
                  title="statement"
                  containerClassName="!m-0"
                />
              </ReportFilterFields>
              <div className="grid gap-4">
                <ReportFilterContractPatterns
                  contractIds={contractIds}
                  setContractIds={setContractIds}
                />
                <ReportFilterVoucherPattern
                  voucherIds={voucherIds}
                  setVoucherIds={setVoucherIds}
                  bodyClassName="h-[90px]"
                />
                <ReportFilterChqOperationsTypes
                  operationIds={operationIds}
                  setOperationIds={setOperationIds}
                />
              </div>
              <div className="grid gap-4 max-[768px]:col-span-full max-[768px]:grid-cols-2">
                <ReportFilterChequePattern
                  chqIds={chqIds}
                  setChqIds={setChqIds}
                />
                <ReportFilterColumns
                  searchKey="accessorKey"
                  columns={columns}
                  selectedColumns={selectedColumns}
                  setSelectedColumns={setSelectedColumns}
                  bodyClassName="!max-h-[510px]"
                />
              </div>
              <ReportReviewField containerClassName="!m-0" />
              <ReportPostedField containerClassName="!m-0" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start mt-8">
              <div className="flex flex-col gap-4"></div>
            </div>
            <Button
              onClick={() => setOpenReportResults(true)}
              title="Show"
              classes="my-4 flex ltr:ml-auto rtl:mr-auto"
            />
            <div className="my-8 flex justify-end"></div>
          </form>
        </FormProvider>
      </BlockPaper>
      <ReportResultsWrapper
        data={data?.data}
        columns={columns?.filter((c) => selectedColumns?.[c?.accessorKey])}
        open={openReportResults}
        onClose={() => setOpenReportResults(false)}
      />
    </>
  );
};

export default JournalLedgerReport;
