import { useMemo, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import REPORTS from "Helpers/Lib/global-reports";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { ReportReviewField } from "Components/ReportsComponents/ReportsFields/ReportReviewField";
import { ReportFilterBuildings } from "Components/ReportsComponents/ReportFilterBuildings";
import { ReportFilterContractPatterns } from "Components/ReportsComponents/ReportFilterContractPatterns";
import useRefTable from "Hooks/useRefTables";
import { getReportColumns, getReportFields } from "Helpers/Reports";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import { ReportResultsWrapper } from "Components/ReportsComponents/ReportResultsWrapper";
import { CheckboxField } from "Components/StructurePage/CustomFields";

const ContractCycleReport = () => {
  const name = "contract_cycle_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
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

  return (
    <>
      <BlockPaper title={name}>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative"
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
              <ReportFilterFields
                title="Fields"
                containerClassName=" !col-span-2"
              >
                <ReportFields
                  fields={fields}
                  // sharedLabelClassName="w-[250px] !whitespace-normal"
                  sharedContainerClassName="!flex-wrap"
                  containerClassName="grid grid-cols-2 gap-4"
                  // sharedInputClassName="min-w-[200px]"
                />
              </ReportFilterFields>

              <div className="flex md:flex-col gap-4 max-[768px]:col-span-full max-[768px]:grid max-[768px]:grid-cols-2">
                <ReportFilterColumns
                  searchKey="accessorKey"
                  columns={columns}
                  selectedColumns={selectedColumns}
                  setSelectedColumns={setSelectedColumns}
                  bodyClassName="h-[520px]"
                />
              </div>
              <ReportFilterContractPatterns
                contractIds={contractIds}
                setContractIds={setContractIds}
                bodyClassName="h-[300px]"
              />
              <ReportFilterBuildings
                buildingsIds={buildingsIds}
                setBuildingsIds={setBuildingsIds}
                bodyClassName="h-[190px]"
              />
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

export default ContractCycleReport;
