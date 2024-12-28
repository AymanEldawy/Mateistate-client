import { useMemo, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { Button } from "Components/Global/Button";
import { FormProvider, useForm } from "react-hook-form";
import ReportInputField from "Components/ReportsComponents/ReportsFields/ReportInputField";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { ReportFilterChequePattern } from "Components/ReportsComponents/ReportFilterChequePattern";
import { getReportColumns } from "Helpers/Reports";
import REPORTS from "Helpers/Lib/global-reports";
import { ReportResultsWrapper } from "Components/ReportsComponents/ReportResultsWrapper";

const DueNotePaperReport = () => {
  const name = "due_note_paper_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [searchType, setSearchType] = useState(1);
  const [chqIds, setChqIds] = useState({});
  const [data, setData] = useState([]);
  const [openReportResults, setOpenReportResults] = useState(false);

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
      <BlockPaper title={name}>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
              <div className="flex flex-col gap-4">
                <div
                  className={`flex gap-4 items-start border p-2 rounded-md ${
                    searchType === 2 ? "grayscale bg-gray-200 opacity-60 " : ""
                  }`}
                >
                  <input
                    name="type"
                    type="radio"
                    className="h-6 w-6"
                    onChange={() => setSearchType(1)}
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium">
                      Displaying securities due within a day
                    </h3>
                    <ReportInputField
                      {...{
                        label: "paid_due",
                        name: "paid_due",
                        type: "number",
                      }}
                      labelClassName="w-[220px] !font-medium"
                      readOnly={searchType === 2}
                    />
                    <ReportInputField
                      {...{
                        label: "receivables_due",
                        name: "receivables_due",
                        type: "number",
                      }}
                      labelClassName="w-[220px] !font-medium"
                      readOnly={searchType === 2}
                    />
                  </div>
                </div>
                <div
                  className={`flex gap-4 items-start border p-2 rounded-md ${
                    searchType === 1 ? "grayscale bg-gray-200 opacity-60 " : ""
                  }`}
                >
                  <input
                    name="type"
                    type="radio"
                    className="h-6 w-6"
                    onChange={() => setSearchType(2)}
                  />
                  <div className="flex flex-col gap-2">
                    <ReportBetweenDateField
                      title="Due Date"
                      date1Field={{
                        label: "start_due_date",
                        name: "start_due_date",
                      }}
                      date2Field={{
                        label: "end_due_date",
                        name: "end_due_date",
                      }}
                      containerClassName="!p-0 !border-0"
                      sharedProps={{
                        readOnly: searchType === 1,
                      }}
                    />
                  </div>
                </div>
                <ReportFilterChequePattern
                  chqIds={chqIds}
                  setChqIds={setChqIds}
                />
              </div>
              <ReportFilterColumns
                searchKey="accessorKey"
                columns={columns}
                selectedColumns={selectedColumns}
                setSelectedColumns={setSelectedColumns}
              />
            </div>
            <Button
              onClick={() => setOpenReportResults(true)}
              title="Show"
              classes="my-4 flex ltr:ml-auto rtl:mr-auto"
            />
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
      <ReportResultsWrapper
        data={data}
        columns={columns?.filter((c) => selectedColumns?.[c?.accessorKey])}
        open={openReportResults}
        onClose={() => setOpenReportResults(false)}
      />
    </>
  );
};

export default DueNotePaperReport;
