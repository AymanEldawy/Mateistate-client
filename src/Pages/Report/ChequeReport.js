import BlockPaper from "Components/Global/BlockPaper";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { useMemo, useState } from "react";
import { CheckboxField, Switch } from "Components/StructurePage/CustomFields";
import { ReportFilterCard } from "../../Components/ReportsComponents/ReportFilterCard";
import { ReportFilterBuildings } from "../../Components/ReportsComponents/ReportFilterBuildings";
import { ReportFilterContractPatterns } from "../../Components/ReportsComponents/ReportFilterContractPatterns";
import { ReportReviewField } from "Components/ReportsComponents/ReportsFields/ReportReviewField";
import ReportSelectField from "Components/ReportsComponents/ReportsFields/ReportSelectField";
import ReportInputField from "Components/ReportsComponents/ReportsFields/ReportInputField";
import { ReportFilterChequePattern } from "Components/ReportsComponents/ReportFilterChequePattern";
import { getReportColumns, getReportFields } from "Helpers/Reports";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { ReportStatementField } from "Components/ReportsComponents/ReportsFields/ReportStatementField";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import useRefTable from "Hooks/useRefTables";
import REPORTS from "Helpers/Lib/global-reports";
import { ReportResultsWrapper } from "Components/ReportsComponents/ReportResultsWrapper";

const ChequeReport = () => {
  const name = "cheques_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState([]);
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
    });
    setData(res?.data);
    console.log("🚀 ~ onSubmit ~ res:", res);
  };

  
  console.log(
    watch(),
    columns ,
  );

  return (
    <>
      <BlockPaper title={"Cheques Report"}>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative"
          >
            <div className="grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
              <ReportFilterFields title="fields">
                <ReportFields
                  fields={fields}
                  containerClassName="!mb-0 gap-3"
                  sharedLabelClassName="w-[200px]"
                />
                <div className="">
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
                  />
                  <ReportBetweenDateField
                    labelClassName="w-[230px]"
                    date1Field={{
                      name: "start_date",
                    }}
                    date2Field={{
                      name: "end_date",
                    }}
                  />
                  {/* <ReportStatementField name="statement" title="" /> */}
                  <ReportStatementField name="paper" title="Paper" />
                  <ReportStatementField name="note" title="Note" />
                </div>
              </ReportFilterFields>
              <div className="grid gap-4">
                <ReportFilterBuildings
                  buildingsIds={buildingsIds}
                  setBuildingsIds={setBuildingsIds}
                  bodyClassName="h-[270px]"
                />
                <ReportFilterContractPatterns
                  contractIds={contractIds}
                  setContractIds={setContractIds}
                  bodyClassName="h-[285px]"
                />
                <div className="px-2 flex flex-col gap-2">
                  <CheckboxField
                    containerClassName="!flex-row-reverse items-center gap-4"
                    labelClassName="mt-2"
                    {...{
                      label: "Showing papers not linked to contract",
                      name: "non_linked_contract",
                    }}
                  />
                  <CheckboxField
                    containerClassName="!flex-row-reverse items-center gap-4"
                    labelClassName="mt-2"
                    {...{
                      label:
                        "Show papers that are not linked to contracts only",
                      name: "linked_contract_only",
                    }}
                  />
                </div>
                <ReportFilterCard
                  title={"Migration"}
                  // containerClassName="border-0 shadow-none p-0"
                >
                  <CheckboxField
                    {...{
                      label: "displaying_transferred_constraints",
                      name: "transferred",
                    }}
                  />
                  <CheckboxField
                    {...{
                      label: "displaying_untransferred_constraints",
                      name: "untransferred",
                    }}
                  />
                </ReportFilterCard>
                <ReportReviewField />
              </div>
              <div className="grid gap-4 max-[768px]:col-span-full max-[768px]:grid-cols-2">
                <ReportFilterColumns
                  searchKey="accessorKey"
                  columns={columns}
                  selectedColumns={selectedColumns}
                  setSelectedColumns={setSelectedColumns}
                  bodyClassName="!max-h-[450px]"
                />
                <div className="grid gap-4">
                  <ReportFilterChequePattern
                    chqIds={chqIds}
                    setChqIds={setChqIds}
                  />
                  <div className="flex flex-col gap-2 items-start px-2">
                    <CheckboxField
                      labelClassName="mt-2"
                      containerClassName=" gap-4 !flex-row-reverse !items-center"
                      {...{
                        label: "Securities that have no status",
                        name: "securities_without_status",
                      }}
                    />
                    <CheckboxField
                      readOnly={watch("securities_without_status")}
                      labelClassName="mt-2"
                      containerClassName=" gap-4 !flex-row-reverse !items-center"
                      {...{
                        label: "collection",
                        name: "collection",
                      }}
                    />
                    <CheckboxField
                      readOnly={watch("securities_without_status")}
                      labelClassName="mt-2"
                      containerClassName=" gap-4 !flex-row-reverse !items-center"
                      {...{
                        label: "deportation",
                        name: "deportation",
                      }}
                    />

                    <ReportFilterCard
                      containerClassName="w-full"
                      customTitle={
                        <CheckboxField
                          name="return"
                          label="return"
                          readOnly={watch("securities_without_status")}
                        />
                      }
                    >
                      {/* <CheckboxField
                    /> */}
                      <ReportSelectField
                        readOnly={!watch("return")}
                        labelClassName="w-[140px]"
                        containerClassName="flex-1"
                        {...{
                          label: "return_status",
                          name: "return_status",
                          list: [
                            { id: 0, name: "All" },
                            { id: 1, name: "" },
                            { id: 2, name: "" },
                          ],
                        }}
                      />
                      <ReportInputField
                        labelClassName="w-[140px]"
                        {...{
                          label: "return_reason",
                          name: "return_reason",
                          type: "number",
                        }}
                        readOnly={!watch("return")}
                      />
                    </ReportFilterCard>
                    <ReportFilterCard
                      containerClassName="w-full"
                      bodyClassName="!grid-cols-1 w-full"
                      customTitle={
                        <CheckboxField
                          name="partial_collection"
                          label="partial_collection"
                          readOnly={watch("securities_without_status")}
                        />
                      }
                    >
                      <ReportSelectField
                        readOnly={!watch("partial_collection")}
                        containerClassName="flex-1 w-full"
                        selectClassName="w-full flex-1"
                        {...{
                          label: "partial_collection_status",
                          name: "partial_collection_status",
                          list: [
                            { id: 0, name: "All" },
                            { id: 1, name: "" },
                            { id: 2, name: "" },
                          ],
                        }}
                      />
                    </ReportFilterCard>
                  </div>
                </div>
              </div>
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
        data={data}
        columns={columns?.filter((c) => selectedColumns?.[c?.accessorKey])}
        open={openReportResults}
        onClose={() => setOpenReportResults(false)}
      />
    </>
  );
};

export default ChequeReport;
