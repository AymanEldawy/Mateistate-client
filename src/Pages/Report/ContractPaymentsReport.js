import { useMemo, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import { ReportFilterContractPatterns } from "../../Components/ReportsComponents/ReportFilterContractPatterns";
import { ReportFilterBuildings } from "../../Components/ReportsComponents/ReportFilterBuildings";
import REPORTS from "Helpers/Lib/global-reports";
import { CheckboxField, Switch } from "Components/StructurePage/CustomFields";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { ReportReviewField } from "Components/ReportsComponents/ReportsFields/ReportReviewField";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import useRefTable from "Hooks/useRefTables";
import { getReportColumns, getReportFields } from "Helpers/Reports";
import { ReportResultsWrapper } from "Components/ReportsComponents/ReportResultsWrapper";

export const ContractPaymentsReport = () => {
  const name = "contract_payments_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const { CACHE_LIST } = useRefTable(name);
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [contractIds, setContractIds] = useState({});
  const [data, setData] = useState([]);
  const [openReportResults, setOpenReportResults] = useState(false);

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  console.log({ filters: watch(), columns: Object.keys(selectedColumns) });

  const onSubmit = async (value) => {
    let fn = REPORTS?.[name];
    const res = await fn({
      filters: watch(),
    });
    setData(res?.data);
    console.log("🚀 ~ onSubmit ~ res:", res);
  };

  return (
    <>
      <BlockPaper title={"Contract Payments Report"}>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative"
          >
            <div className="grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
              <ReportFilterFields title="Fields">
                <ReportFields
                  CACHE_LIST={CACHE_LIST}
                  sharedLabelClassName="w-[200px]"
                  fields={fields}
                />
              </ReportFilterFields>
              <div className="grid gap-4 order-3 md:order-2 max-[768px]:col-span-full max-[768px]:grid-cols-2 w-full">
                <ReportFilterContractPatterns
                  contractIds={contractIds}
                  setContractIds={setContractIds}
                  bodyClassName="h-[250px]"
                />
                <ReportFilterBuildings
                  buildingsIds={buildingsIds}
                  setBuildingsIds={setBuildingsIds}
                  bodyClassName="h-[230px]"
                />
                <ReportReviewField />
              </div>
              <ReportFilterColumns
                searchKey="accessorKey"
                columns={columns}
                selectedColumns={selectedColumns}
                setSelectedColumns={setSelectedColumns}
                bodyClassName="h-[690px] max-[768px]:w-[768px]"
                containerClassName="order-2"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-8 mt-4">
              <ReportBetweenDateField
                customTitle={<CheckboxField name="allow_date" label="Date" />}
                date1Field={{
                  name: "start_date",
                }}
                date2Field={{
                  name: "end_date",
                }}
                sharedProps={{
                  readOnly: !watch("allow_date"),
                }}
                containerClassName="!m-0"
              />
              <ReportBetweenDateField
                customTitle={
                  <CheckboxField
                    name="allow_cheques_date"
                    label="Cheques Date"
                  />
                }
                date1Field={{
                  name: "start_cheques_date",
                }}
                date2Field={{
                  name: "end_cheques_date",
                }}
                sharedProps={{
                  readOnly: !watch("allow_cheques_date"),
                }}
                containerClassName="!m-0"
              />
              <ReportBetweenDateField
                customTitle={
                  <CheckboxField
                    name="allow_collection_date"
                    label="Collection Date"
                  />
                }
                date1Field={{
                  name: "start_collection_date",
                }}
                date2Field={{
                  name: "end_collection_date",
                }}
                sharedProps={{
                  readOnly: !watch("allow_collection_date"),
                }}
                containerClassName="!m-0"
              />
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
        data={data}
        columns={columns?.filter((c) => selectedColumns?.[c?.accessorKey])}
        open={openReportResults}
        onClose={() => setOpenReportResults(false)}
      />
    </>
  );
};

export default ContractPaymentsReport;
