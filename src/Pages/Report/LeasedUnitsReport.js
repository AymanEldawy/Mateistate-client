import { useMemo, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import { ReportReviewField } from "Components/ReportsComponents/ReportsFields/ReportReviewField";
import { ReportFilterBuildings } from "Components/ReportsComponents/ReportFilterBuildings";
import useRefTable from "Hooks/useRefTables";
import { getReportColumns, getReportFields } from "Helpers/Reports";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import { ReportResultsWrapper } from "Components/ReportsComponents/ReportResultsWrapper";
import { ReportStatementField } from "Components/ReportsComponents/ReportsFields/ReportStatementField";
import { CheckboxField } from "Components/StructurePage/CustomFields";
import REPORTS from "Helpers/Lib/global-reports";

const REPORT_OPTIONS = [
  "show_merged_shops_and_flats",
  "consider_assembled_units_in_as_leased",
  "hide_assembled_unit",
  "consider_assembled_flats_that_contract_has_been_terminated",
  "show_sold_units",
  "flats",
  "shops",
];

const LeasedUnitsReport = () => {
  const name = "leased_units_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [openReportResults, setOpenReportResults] = useState(false);
  const [buildingsIds, setBuildingsIds] = useState({});
  const [data, setData] = useState([]);

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
      <BlockPaper title={"Leased and non leased units Report"}>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative"
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
              <ReportFilterFields title="Fields">
                <ReportFields
                  fields={fields}
                  sharedLabelClassName="w-[200px]"
                  // containerClassName="grid grid-cols-2 gap-4"
                />
              </ReportFilterFields>
              <div className="grid gap-4">
                {REPORT_OPTIONS?.map((option) => (
                  <CheckboxField label={option} name={option} key={option} />
                ))}
                <ReportReviewField containerClassName="!m-0" />
                <ReportStatementField
                  containerClassName="!m-0"
                  name="contract"
                />
                <ReportStatementField
                  containerClassName="!m-0"
                  name="property"
                />
              </div>

              <div className="flex md:flex-col gap-4 max-[768px]:col-span-full max-[768px]:grid max-[768px]:grid-cols-2">
                <ReportFilterColumns
                  searchKey="accessorKey"
                  columns={columns}
                  selectedColumns={selectedColumns}
                  setSelectedColumns={setSelectedColumns}
                  bodyClassName="max-h-[340px]"
                />
                <ReportFilterBuildings
                  buildingsIds={buildingsIds}
                  setBuildingsIds={setBuildingsIds}
                  bodyClassName="h-[210px]"
                />
              </div>
            </div>
            <div className="my-8 flex justify-end"></div>
            <Button
              onClick={() => setOpenReportResults(true)}
              title="Show"
              classes="my-4 flex ltr:ml-auto rtl:mr-auto"
            />
          </form>
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

export default LeasedUnitsReport;
