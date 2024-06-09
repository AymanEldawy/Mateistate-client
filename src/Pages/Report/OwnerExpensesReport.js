import { useMemo, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import REPORTS from "Helpers/Lib/global-reports";
import useRefTable from "Hooks/useRefTables";
import { getReportColumns } from "Helpers/Reports";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import { ReportResultsWrapper } from "Components/ReportsComponents/ReportResultsWrapper";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import ReportUniqueField from "Components/ReportsComponents/ReportsFields/ReportUniqueField";
import { ReportFilterBuildings } from "Components/ReportsComponents/ReportFilterBuildings";
import { ReportFilterExpensesTypes } from "Components/ReportsComponents/ReportFilterExpensesTypes";

const OwnerExpensesReport = () => {
  const name = "owner_expenses_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const { CACHE_LIST } = useRefTable(name, "");
  const [selectedColumns, setSelectedColumns] = useState({});
  const [openReportResults, setOpenReportResults] = useState(false);
  const [buildingsIds, setBuildingsIds] = useState({});
  const [expensesIds, setExpensesIds] = useState({});
  const [data, setData] = useState([]);

  const columns = useMemo(() => getReportColumns(name), []);

  const onSubmit = async (value) => {
    await REPORTS.nearToExpireContract();
  };

  console.log({ filters: watch(), columns: Object.keys(selectedColumns) });

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
              <ReportFilterFields title="Fields">
                <ReportUniqueField
                  {...{
                    label: "owner",
                    name: "owner",
                    is_ref: true,
                    ref_table: "owner",
                  }}
                  CACHE_LIST={CACHE_LIST}
                  list={!!CACHE_LIST ? CACHE_LIST?.owner : []}
                  values={watch()}
                />
                <ReportFilterExpensesTypes
                  expensesIds={expensesIds}
                  setExpensesIds={setExpensesIds}
                  bodyClassName="h-[130px]"
                />
                <ReportBetweenDateField containerClassName="!m-0" />
              </ReportFilterFields>
              <ReportFilterBuildings
                setBuildingsIds={setBuildingsIds}
                buildingsIds={buildingsIds}
                bodyClassName="h-[230px]"
              />
              <div className="flex md:flex-col gap-4 max-[768px]:col-span-full max-[768px]:grid max-[768px]:grid-cols-2">
                <ReportFilterColumns
                  searchKey="accessorKey"
                  columns={columns}
                  selectedColumns={selectedColumns}
                  setSelectedColumns={setSelectedColumns}
                  bodyClassName="max-h-[670px]"
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

export default OwnerExpensesReport;
