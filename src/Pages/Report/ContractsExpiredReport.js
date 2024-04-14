import { useMemo, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import { ReportFilterContractPatterns } from "../../Components/ReportsComponents/ReportFilterContractPatterns";
import { ReportFilterBuildings } from "../../Components/ReportsComponents/ReportFilterBuildings";
import { ReportStatementField } from "Components/ReportsComponents/ReportsFields/ReportStatementField";
import { getReportColumns, getReportFields } from "Helpers/Reports";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import ReportInputField from "Components/ReportsComponents/ReportsFields/ReportInputField";
import { ReportFilterCard } from "Components/ReportsComponents/ReportFilterCard";
import { SELECT_LISTS } from "Helpers/constants";
import { Select } from "Components/StructurePage/CustomFields";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import useRefTable from "Hooks/useRefTables";

const ContractsExpiredReport = () => {
  const name = "contract_expired_reports";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const { CACHE_LIST } = useRefTable(name);
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [contractIds, setContractIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  console.log({ filters: watch(), columns: Object.keys(selectedColumns) });

  const onSubmit = async (value) => {};

  return (
    <BlockPaper title={"contract expired report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
            <ReportFilterFields title="Fields" containerClassName="">
              <ReportFields
                CACHE_LIST={CACHE_LIST}
                fields={fields}
                sharedLabelClassName="w-[200px]"
              />
              <div className="">
                <div className="px-4 pt-2 pb-1 border rounded-md">
                  <div className="">
                    <Select
                      labelClassName="!font-medium !text-lg w-[100px]"
                      selectClassName="flex-1"
                      containerClassName="!flex-row gap-4 items-center"
                      {...{
                        label: "filter using",
                        name: "filter_using",
                        intValue: true,
                        selectFirstAsDefault: true,
                        list: SELECT_LISTS("filter_using"),
                      }}
                    />
                    <ReportFilterCard containerClassName="!border-0 !px-0">
                      <ReportInputField
                        containerClassName="flex-1"
                        labelClassName="w-[150px]"
                        readOnly={watch("filter_using") === 2}
                        {...{
                          label: "Days start from",
                          name: "from",
                          type: "number",
                        }}
                      />
                      <ReportInputField
                        containerClassName="flex-1"
                        labelClassName="w-[150px]"
                        readOnly={watch("filter_using") === 2}
                        {...{
                          label: "Days to",
                          name: "to",
                          type: "number",
                        }}
                      />
                    </ReportFilterCard>
                    <ReportBetweenDateField
                      containerClassName="!border-0 !px-0 !border-t !rounded-none"
                      date1Field={{
                        name: "start_date",
                      }}
                      date2Field={{
                        name: "end_date",
                      }}
                      sharedProps={{
                        containerClassName: "flex-1",
                        readOnly: watch("filter_using") === 1,
                        labelClassName: "w-[150px]",
                      }}
                    />
                  </div>
                </div>
              </div>
            </ReportFilterFields>
            <div className="flex flex-col gap-2">
              <ReportFilterBuildings
                buildingsIds={buildingsIds}
                setBuildingsIds={setBuildingsIds}
                bodyClassName="h-[210px]"
              />
              <ReportFilterContractPatterns
                contractIds={contractIds}
                setContractIds={setContractIds}
                bodyClassName="h-[250px]"
              />
            </div>
            <div className="">
              <ReportFilterColumns
                searchKey="accessorKey"
                columns={columns}
                selectedColumns={selectedColumns}
                setSelectedColumns={setSelectedColumns}
                bodyClassName="w-full md:h-[530px]"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
            <ReportStatementField
              name="contract"
              title={"Contract Statement"}
            />
            <ReportStatementField name="unit" title={"unit Statement"} />
          </div>
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
        </form>
      </FormProvider>
    </BlockPaper>
  );
};

export default ContractsExpiredReport;
