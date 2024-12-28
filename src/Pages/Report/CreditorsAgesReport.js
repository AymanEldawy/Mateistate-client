import { useMemo, useState } from "react";
import { LedgerFilters } from "../../Components/ReportsComponents/LedgerReport/LedgerFilters";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { Button } from "Components/Global/Button";
import { FormProvider, useForm } from "react-hook-form";
import {
  CheckboxField,
  CurrencyFieldGroup,
  Radio,
} from "Components/StructurePage/CustomFields";
import { ReportFilterCard } from "Components/ReportsComponents/ReportFilterCard";
import ReportInputField from "Components/ReportsComponents/ReportsFields/ReportInputField";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { getReportColumns, getReportFields } from "Helpers/Reports";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import useRefTable from "Hooks/useRefTables";
import { ReportFilterVoucherPattern } from "Components/ReportsComponents/ReportFilterVoucherPattern";
import REPORTS from "Helpers/Lib/global-reports";
import { ReportResultsWrapper } from "Components/ReportsComponents/ReportResultsWrapper";
import { ReportFilterBillPattern } from "Components/ReportsComponents/TypesFilter/ReportFilterBillPattern";

const REPORT_OPTIONS = [
  "show_your_monitored_customers",
  "amendment_according_to_the_bulletin_historically",
];

const CreditorsAgesReport = () => {
  const name = "creditors_ages_report";
  const methods = useForm();
  const { handleSubmit, watch, register, setValue } = methods;
  const { CACHE_LIST } = useRefTable(name, "");
  const [selectedColumns, setSelectedColumns] = useState({});
  const [voucherIds, setVoucherIds] = useState({});
  const [invoiceIds, setInvoiceIds] = useState({});
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
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 items-start">
              <ReportFilterFields title={"Fields"}>
                <ReportFields
                  containerClassName="!gap-2"
                  fields={fields}
                  CACHE_LIST={CACHE_LIST}
                  sharedLabelClassName="w-[260px]"
                />
                {REPORT_OPTIONS?.map((option) => (
                  <CheckboxField
                    key={option}
                    {...{
                      label: option,
                      name: option,
                    }}
                  />
                ))}
                <div className="border p-2 rounded-md">
                  <p className="font-medium mb-2">Report type</p>
                  <div className="flex gap-2 items-center">
                    {["collective", "detailed"]?.map((option) => (
                      <label className="flex-1 flex items-center gap-2 capitalize">
                        <input
                          type="checkbox"
                          value={option}
                          className="w-4 h-4"
                          checked={watch("report_type") === option}
                          {...register("report_type", {
                            onChange: (e) => {
                              setValue("report_type", e.target.value);
                            },
                          })}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              </ReportFilterFields>
              <div className="grid gap-4">
                <ReportFilterVoucherPattern
                  voucherIds={voucherIds}
                  setVoucherIds={setVoucherIds}
                />
                <ReportFilterBillPattern
                  billIds={invoiceIds}
                  setBillIds={setInvoiceIds}
                />
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

export default CreditorsAgesReport;
