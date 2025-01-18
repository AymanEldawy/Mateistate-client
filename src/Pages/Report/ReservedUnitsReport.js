import { useMemo, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import REPORTS from "Helpers/Lib/global-reports";
import { ReportFilterBuildings } from "Components/ReportsComponents/ReportFilterBuildings";
import { ReportFilterContractPatterns } from "Components/ReportsComponents/ReportFilterContractPatterns";
import useRefTable from "Hooks/useRefTables";
import { getReportColumns, getReportFields } from "Helpers/Reports";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import { ReportResultsWrapper } from "Components/ReportsComponents/ReportResultsWrapper";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import ReportInputField from "Components/ReportsComponents/ReportsFields/ReportInputField";
import { CheckboxField } from "Components/StructurePage/CustomFields";

const ReservedUnitsReport = () => {
  const name = "reserved_units_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [openReportResults, setOpenReportResults] = useState(false);
  const [buildingsIds, setBuildingsIds] = useState({});
  const [contractIds, setContractIds] = useState({});
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

  console.log({ filters: watch(), columns: Object.keys(selectedColumns) });


  return (
    <>
      <BlockPaper title={"reserved units report"}>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative"
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4  lg:gap-8 items-start">
              <ReportFilterFields title="Fields">
                <ReportFields
                  fields={fields}
                  sharedLabelClassName="w-[200px] !whitespace-pre-wrap"
                  // containerClassName="grid grid-cols-2 gap-4"
                />
                <ReportInputField
                  containerClassName="!flex-col"
                  {...{
                    label: "remaining_days_of_number_of_reservation_is_smaller",
                    name: "remaining_days_of_number_of_reservation_is_smaller",
                    type: "number",
                  }}
                />
                <ReportBetweenDateField
                  customTitle={
                    <CheckboxField
                      name="allow_booking_date"
                      label="booking date"
                    />
                  }
                  title="Booking date"
                  date1Field={{
                    label: "from",
                    name: "from",
                  }}
                  date2Field={{
                    label: "to",
                    name: "to",
                  }}
                  sharedProps={{
                    readOnly: !watch("allow_booking_date"),
                  }}
                  containerClassName="!m-0"
                />
              </ReportFilterFields>
              <div className="grid gap-4">
                <ReportFilterContractPatterns
                  contractIds={contractIds}
                  setContractIds={setContractIds}
                />
                <ReportFilterBuildings
                  buildingsIds={buildingsIds}
                  setBuildingsIds={setBuildingsIds}
                  bodyClassName="min-h-[100px] max-h-[210px]"
                />
              </div>

              <div className="flex md:flex-col gap-4 max-[768px]:col-span-full max-[768px]:grid max-[768px]:grid-cols-2">
                <ReportFilterColumns
                  searchKey="accessorKey"
                  columns={columns}
                  selectedColumns={selectedColumns}
                  setSelectedColumns={setSelectedColumns}
                  bodyClassName="max-h-[560px]"
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

export default ReservedUnitsReport;
