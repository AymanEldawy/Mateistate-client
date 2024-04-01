import { useMemo, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { Button } from "Components/Global/Button";
import { FormProvider, useForm } from "react-hook-form";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { ReportFilterChequePattern } from "Components/ReportsComponents/ReportFilterChequePattern";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import useRefTable from "Hooks/useRefTables";
import { getReportColumns, getReportFields } from "Helpers/Reports";
import { ReportStatementField } from "Components/ReportsComponents/ReportsFields/ReportStatementField";
import ReportSelectField from "Components/ReportsComponents/ReportsFields/ReportSelectField";
import { ReportFilterBuildings } from "Components/ReportsComponents/ReportFilterBuildings";
import {
  collection_cheque_report_date_by
} from "Helpers/constants-lists-options";

const CollectionChqReport = () => {
  const name = "collection_cheque_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const { CACHE_LIST } = useRefTable(name, "");
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [chqIds, setChqIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  const onSubmit = (value) => {};
  console.log(CACHE_LIST, "CACHE_LIST");
  return (
    <BlockPaper title={name}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
            <ReportFilterFields title="Fields">
              <ReportFields
                CACHE_LIST={CACHE_LIST}
                fields={fields}
                sharedLabelClassName="w-[260px]"
              />
              <ReportBetweenDateField
                customTitle={
                  <div className="mb-1">
                    <ReportSelectField
                      labelClassName="w-[150px] !font-medium text-base"
                      selectClassName="w-full flex-1"
                      {...{
                        label: "Date By",
                        name: "date_by",
                        list: collection_cheque_report_date_by,
                      }}
                    />
                  </div>
                }
                date1Field={{ label: "from", name: "from" }}
                date2Field={{ label: "to", name: "to" }}
              />
              <ReportStatementField
                name="collection_details"
                containerClassName="!m-0"
              />
            </ReportFilterFields>
            {/* Filter */}
            <div className="grid gap-4">
              <ReportFilterBuildings
                setBuildingsIds={setBuildingsIds}
                buildingsIds={buildingsIds}
                bodyClassName="h-[260px]"
              />
              <ReportFilterChequePattern
                chqIds={chqIds}
                setChqIds={setChqIds}
              />
            </div>
            {/* Filter */}
            <ReportFilterColumns
              searchKey="accessorKey"
              columns={columns}
              selectedColumns={selectedColumns}
              setSelectedColumns={setSelectedColumns}
              bodyClassName="h-[400px]"
            />
          </div>
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
        </form>
      </FormProvider>
    </BlockPaper>
  );
};

export default CollectionChqReport;
