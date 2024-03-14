import { useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../ReportFilterColumns";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import { ReportFilterContractPatterns } from "../ReportFilterContractPatterns";
import { ReportFilterBuildings } from "../ReportFilterBuildings";
import { ContractNearToExpireReportFilter } from "./ContractNearToExpireReportFilter";
import REPORTS from "Helpers/Lib/global-reports";
import { useQuery } from '@tanstack/react-query';

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

export const ContractNearToExpireReport = () => {
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [contractIds, setContractIds] = useState({});
  // const queryClient = useQuery({

  // })

  const onSubmit = async (value) => {
    await REPORTS.nearToExpireContract()
  };


  return (
    <BlockPaper title={"Contract closest complete Report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="flex gap-8 items-start">
            <div className="flex-1">
              <ContractNearToExpireReportFilter />
              <div className="grid grid-cols-2 gap-4 mt-8">
                <ReportFilterContractPatterns
                  contractIds={contractIds}
                  setContractIds={setContractIds}
                />
                <ReportFilterBuildings
                  buildingsIds={buildingsIds}
                  setBuildingsIds={setBuildingsIds}
                />
              </div>
            </div>
            <div className="w-1/4">
              <ReportFilterColumns
                columns={columns}
                selectedColumns={selectedColumns}
                setSelectedColumns={setSelectedColumns}
              />
            </div>
          </div>
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
          <div className="my-8 flex justify-end"></div>
        </form>
      </FormProvider>
    </BlockPaper>
  );
};
