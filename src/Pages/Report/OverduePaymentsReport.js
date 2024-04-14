import { useMemo, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import REPORTS from "Helpers/Lib/global-reports";
import { ReportReviewField } from "Components/ReportsComponents/ReportsFields/ReportReviewField";
import useRefTable from "Hooks/useRefTables";
import { getReportColumns, getReportFields } from "Helpers/Reports";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import { ReportResultsWrapper } from "Components/ReportsComponents/ReportResultsWrapper";
import { ReportStatementField } from "Components/ReportsComponents/ReportsFields/ReportStatementField";
import { CheckboxField } from "Components/StructurePage/CustomFields";
import ReportInputField from "Components/ReportsComponents/ReportsFields/ReportInputField";
import { ReportFilterContractPatterns } from "Components/ReportsComponents/ReportFilterContractPatterns";
import { ReportFilterBuildings } from "Components/ReportsComponents/ReportFilterBuildings";

const OverduePaymentsReport = () => {
  const name = "overdue_payments_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const { CACHE_LIST } = useRefTable(name, "");
  const [selectedColumns, setSelectedColumns] = useState({});
  const [openReportResults, setOpenReportResults] = useState(false);
  const [contractIds, setContractIds] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [data, setData] = useState([]);

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  const onSubmit = async (value) => {
    await REPORTS.nearToExpireContract();
  };

  console.log({ filters: watch(), columns: Object.keys(selectedColumns) });


  return (
    <>
      <BlockPaper title={"overdue payments report"}>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative"
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
              <ReportFilterFields title="Fields">
                <ReportFields
                  CACHE_LIST={CACHE_LIST}
                  fields={fields}
                  sharedLabelClassName="w-[200px]"
                  // containerClassName="grid grid-cols-2 gap-4"
                />
                <ReportInputField
                  containerClassName="!flex-col"
                  name="exceeds_day_number"
                  label="considered overdue if it exceeds days no."
                  type="number"
                  labelClassName="max-w-[200px] overflow-auto"
                />
                <CheckboxField
                  name="excluding_returned_checks"
                  label="Excluding returned checks"
                />
                <CheckboxField
                  name="Excluding checks without a due date"
                  label="excluding_checks_without_due_date"
                />
              </ReportFilterFields>
              <div className="grid gap-4">
                <ReportFilterContractPatterns
                  containerClassName="!m-0"
                  contractIds={contractIds}
                  setContractIds={setContractIds}
                />
                <ReportFilterBuildings
                  containerClassName="!m-0"
                  buildingsIds={buildingsIds}
                  setBuildingsIds={setBuildingsIds}
                  bodyClassName="h-[60px]"
                />
              </div>

              <div className="flex md:flex-col gap-4 max-[768px]:col-span-full max-[768px]:grid max-[768px]:grid-cols-2">
                <ReportFilterColumns
                  searchKey="accessorKey"
                  columns={columns}
                  selectedColumns={selectedColumns}
                  setSelectedColumns={setSelectedColumns}
                  bodyClassName="max-h-[400px]"
                />
              </div>
            </div>
            <div className="my-8 flex justify-end"></div>
          </form>
          <Button
            onClick={() => setOpenReportResults(true)}
            title="Show"
            classes="my-4 flex ltr:ml-auto rtl:mr-auto"
          />
        </FormProvider>
      </BlockPaper>
      <ReportResultsWrapper
        data={data}
        columns={columns?.filter((c) => selectedColumns?.[c?.accessorKey])}
        open={openReportResults}
        onClose={() => setOpenReportResults(false)}
      />
    </>
  );
};

export default OverduePaymentsReport;
