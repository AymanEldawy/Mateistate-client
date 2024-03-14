import React, { useEffect, useState } from "react";
import { LedgerFilters } from "./LedgerFilters";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../ReportFilterColumns";
import { Button } from "Components/Global/Button";
import { FormProvider, useForm } from "react-hook-form";
import { ApiActions } from "Helpers/Lib/api";

const columns = [
  { name: "number", label: "number" },
  { name: "created_at", label: "date" },
  { name: "note", label: "note" },
  { name: "debit", label: "debit" },
  { name: "credit", label: "credit" },
  { name: "account_id", label: "account name" },
  { name: "observe_account_id", label: "observe account name" },
  { name: "currency_id", label: "currency" },
  { name: "cost_center_id", label: "cost_center" },
  { name: "feedback", label: "feedback" },
];

const LedgerReport = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [entries, setEntries] = useState([]);
  const [entriesFilter, setEntriesFilter] = useState([]);

  const getEntries = async () => {
    const res = await ApiActions.read("entry_main_data");
    const resGrid = await ApiActions.read("entry_grid_data");
    let data = [];
    for (const item of res?.result) {
      data.push({
        ...item,
        grid: resGrid?.result?.filter(
          (c) => c?.entry_main_data_id === item?.id
        ),
      });
    }
  };

  useEffect(() => {
    getEntries();
  }, []);

  const onSubmit = (value) => {};

  return (
    <BlockPaper title={"Ledger Report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="flex gap-4 lg:gap-6 items-start">
            <div className="overflow-hidden pb-4">
              <LedgerFilters />
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
  );
};

export default LedgerReport;
