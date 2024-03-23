import { useState } from "react";
import { ContractsExpiredReportFilter } from "../../Components/ReportsComponents/ContractsExpiredReport/ContractsExpiredReportFilters";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import { ReportFilterContractPatterns } from "../../Components/ReportsComponents/ReportFilterContractPatterns";
import { ReportFilterBuildings } from "../../Components/ReportsComponents/ReportFilterBuildings";
import { ReportStatementField } from "Components/ReportsComponents/ReportsFields/ReportStatementField";

const columns = [
  {
    label: "number",
    name: "number",
  },
  // {
  //   label: "gov_number",
  //   name: "gov_number",
  // },
  {
    label: "feedback",
    name: "feedback",
  },
  {
    label: "lawsuit",
    name: "lawsuit",
  },
  {
    label: "apartment_id",
    name: "apartment_id",
  },
  { label: "description", name: "description" },
  {
    label: "lessor_id",
    name: "lessor_id",
  },
  {
    label: "status",
    name: "status",
  },
  {
    label: "building_id",
    name: "building_id",
  },

  {
    label: "contract_value",
    name: "contract_value",
  },
  {
    label: "discount_rate",
    name: "discount_rate",
  },
  {
    label: "discount_value",
    name: "discount_value",
  },
  {
    label: "final_price",
    name: "final_price",
  },
  {
    label: "discount_account_id",
    name: "discount_account_id",
  },
  {
    label: "previous_securing",
    name: "previous_securing",
  },
  // {
  //   label: "current_securing_percentage",
  //   name: "current_securing_percentage",
  // },
  {
    label: "current_securing_value",
    name: "current_securing_value",
  },

  {
    label: "start_duration_date",
    name: "start_duration_date",
  },
  {
    label: "end_duration_date",
    name: "end_duration_date",
  },
  {
    label: "paid_type",
    name: "paid_type",
  },
  {
    label: "revenue_account_id",
    name: "revenue_account_id",
  },
  {
    label: "insurance_account_id",
    name: "insurance_account_id",
  },
];

export const ContractsExpiredReport = () => {
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [contractIds, setContractIds] = useState({});

  const onSubmit = async (value) => {
    // , value);
  };

  return (
    <BlockPaper title={"Contract Report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
            <ContractsExpiredReportFilter />
            <div className="flex flex-col gap-2">
              <ReportFilterBuildings
                buildingsIds={buildingsIds}
                setBuildingsIds={setBuildingsIds}
                bodyClassName="h-[210px]"
              />
              <ReportFilterContractPatterns
                contractIds={contractIds}
                setContractIds={setContractIds}
                bodyClassName="h-[230px]"
              />
            </div>
            <div className="">
              <ReportFilterColumns
                columns={columns}
                selectedColumns={selectedColumns}
                setSelectedColumns={setSelectedColumns}
                containerClassName="w-full md:h-[590px]"
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
