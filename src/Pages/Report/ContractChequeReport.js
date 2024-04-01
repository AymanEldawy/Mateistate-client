import { useMemo, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import { ReportFilterContractPatterns } from "../../Components/ReportsComponents/ReportFilterContractPatterns";
import { ReportFilterBuildings } from "../../Components/ReportsComponents/ReportFilterBuildings";
import { getReportColumns, getReportFields } from "Helpers/Reports";
import useRefTable from "Hooks/useRefTables";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { ReportReviewField } from "Components/ReportsComponents/ReportsFields/ReportReviewField";
import { ReportFilterCard } from "Components/ReportsComponents/ReportFilterCard";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import ReportSelectField from "Components/ReportsComponents/ReportsFields/ReportSelectField";
import { SELECT_LISTS } from "Helpers/constants";
import { CheckboxField } from "Components/StructurePage/CustomFields";

const ContractChequeReport = () => {
  const name = "contract_cheque_report";
  const methods = useForm();
  const { handleSubmit } = methods;
  const { CACHE_LIST } = useRefTable(name);
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [contractIds, setContractIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  const onSubmit = async () => {};

  return (
    <BlockPaper title={"Contracts cheques Report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
            <ReportFilterFields title="Fields" containerClassName="">
              <ReportFields
                CACHE_LIST={CACHE_LIST}
                fields={fields}
                sharedLabelClassName="w-[220px]"
              />
              <ReportFilterCard
                customTitle={<></>}
                containerClassName="!border rounded-md p-2"
                bodyClassName="!grid-cols-1"
              >
                <ReportBetweenDateField
                  customTitle={<CheckboxField name="allow_date" label="date" />}
                  containerClassName="!p-0 !border-none"
                  date1Field={{ name: "start_date" }}
                  date2Field={{ name: "end_date" }}
                />
              </ReportFilterCard>
            </ReportFilterFields>
            <div className="grid gap-2">
              <ReportFilterContractPatterns
                contractIds={contractIds}
                setContractIds={setContractIds}
                bodyClassName="h-[290px]"
              />
              <ReportFilterBuildings
                buildingsIds={buildingsIds}
                setBuildingsIds={setBuildingsIds}
                bodyClassName="h-[110px]"
              />
              <ReportReviewField containerClassName="!m-0" />
              <ReportBetweenDateField
                containerClassName="!m-0"
                title="collect date"
                date1Field={{
                  label: "start_collect_date",
                  name: "start_collect_date",
                }}
                date2Field={{
                  label: "end_collect_date",
                  name: "end_collect_date",
                }}
              />
            </div>
            <ReportFilterColumns
              searchKey="accessorKey"
              columns={columns}
              selectedColumns={selectedColumns}
              setSelectedColumns={setSelectedColumns}
              bodyClassName="h-[720px] max-md:h-[320px]"
            />
          </div>
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
        </form>
      </FormProvider>
    </BlockPaper>
  );
};

export default ContractChequeReport;
