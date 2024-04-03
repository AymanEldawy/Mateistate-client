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

;
const EarningRentalIncomeEarnedReport = () => {
  const name = "earning_rental_income_earned_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const { CACHE_LIST } = useRefTable(name);
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [contractIds, setContractIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  const onSubmit = async () => {
    console.log({
      buildings: Object.keys(buildingsIds),
      contracts: Object.keys(contractIds),
      columns: Object.keys(selectedColumns),
      filters: watch(),
    });
  };

  return (
    <BlockPaper title={name}>
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
                <ReportSelectField
                  {...{
                    label: "Date by",
                    name: "date_by",
                    list: SELECT_LISTS("revenues_report_date"),
                    intValue: true,
                    labelClassName: "w-[130px] !font-medium",
                  }}
                />
                <ReportBetweenDateField
                  customTitle={<></>}
                  containerClassName="!p-0 !border-none"
                  date1Field={{ name: "start_date" }}
                  date2Field={{ name: "end_date" }}
                />
              </ReportFilterCard>

              <ReportBetweenDateField
                title="Revenue calculation revenue"
                date1Field={{
                  label: "start_revenue_date",
                  name: "start_revenue_date",
                }}
                date2Field={{
                  label: "end_revenue_date",
                  name: "end_revenue_date",
                }}
              />
              <ReportReviewField />
            </ReportFilterFields>
            <div className="grid gap-7">
              <ReportFilterContractPatterns
                contractIds={contractIds}
                setContractIds={setContractIds}
                bodyClassName="h-[290px]"
              />
              <ReportFilterBuildings
                buildingsIds={buildingsIds}
                setBuildingsIds={setBuildingsIds}
                bodyClassName="h-[190px]"
              />
            </div>
            <ReportFilterColumns
              searchKey="accessorKey"
              columns={columns}
              selectedColumns={selectedColumns}
              setSelectedColumns={setSelectedColumns}
              bodyClassName="h-[580px] max-md:h-[320px]"
            />
          </div>
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
          <div className="my-8 flex justify-end"></div>
        </form>
      </FormProvider>
    </BlockPaper>
  );
};

export default EarningRentalIncomeEarnedReport;
