import { useMemo, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import { ReportFilterContractPatterns } from "../../Components/ReportsComponents/ReportFilterContractPatterns";
import { ReportFilterBuildings } from "../../Components/ReportsComponents/ReportFilterBuildings";
import REPORTS from "Helpers/Lib/global-reports";
import { ReportStatementField } from "Components/ReportsComponents/ReportsFields/ReportStatementField";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import useRefTable from "Hooks/useRefTables";
import { getReportColumns, getReportFields } from "Helpers/Reports";

const ContractNearToExpireReport = () => {
  const name = "contract_near_to_expire_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const { CACHE_LIST } = useRefTable(name);
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [contractIds, setContractIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  const onSubmit = async (value) => {
    await REPORTS.nearToExpireContract();
  };

  return (
    <BlockPaper title={"contract near to expired report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
            <ReportFilterFields title="Fields">
              <ReportFields
                CACHE_LIST={CACHE_LIST}
                sharedLabelClassName="w-[200px]"
                fields={[
                  ...fields,

                  {
                    label: "Days number",
                    name: "days_number",
                    type: "number",
                  },
                ]}
              />
              <div className="grid grid-cols-1 gap-4">
                <ReportBetweenDateField
                  date1Field={{
                    name: "start_date",
                  }}
                  date2Field={{
                    name: "end_date",
                  }}
                  containerClassName="!m-0"
                />
                <ReportStatementField
                  containerClassName="!m-0"
                  name="contract"
                  title={"Contract Statement"}
                />
                <ReportStatementField
                  containerClassName="!m-0"
                  name="unit"
                  title={"Contract Statement"}
                />
              </div>
            </ReportFilterFields>{" "}
            <div className="grid gap-4 order-3 md:order-2 max-[768px]:col-span-full max-[768px]:grid-cols-2 w-full">
              <ReportFilterContractPatterns
                contractIds={contractIds}
                setContractIds={setContractIds}
                bodyClassName="h-[250px]"
              />
              <ReportFilterBuildings
                buildingsIds={buildingsIds}
                setBuildingsIds={setBuildingsIds}
                bodyClassName="h-[260px]"
              />
            </div>
            <ReportFilterColumns
              searchKey="accessorKey"
              columns={columns}
              selectedColumns={selectedColumns}
              setSelectedColumns={setSelectedColumns}
              bodyClassName="h-[600px] max-[768px]:w-[768px]"
              containerClassName="order-2"
            />
          </div>
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
          <div className="my-8 flex justify-end"></div>
        </form>
      </FormProvider>
    </BlockPaper>
  );
};

export default ContractNearToExpireReport;
