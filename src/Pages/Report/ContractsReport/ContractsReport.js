import React, { useState } from "react";
import { ContractFilters } from "./ContractFilters";
import BlockPaper from "Components/Global/BlockPaper";
import { ContractPatternList } from "./ContractPatternList";
import { ContractColumns, ReportFilterColumns } from "../ReportFilterColumns";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import REPORTS from "Helpers/Lib/global-reports";

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

export const ContractsReport = () => {
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});

  const onSubmit = async (value) => {
    await REPORTS.nearToExpireContract()
  };


  return (
    <BlockPaper title={"Contract Report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="flex gap-8 items-start">
            <div className="flex-1">
              <ContractFilters />
              <ContractPatternList title="Contract patterns"/>
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
