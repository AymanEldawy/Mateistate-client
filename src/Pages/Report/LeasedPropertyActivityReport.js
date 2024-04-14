import { useMemo, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { Button } from "Components/Global/Button";
import { FormProvider, useForm } from "react-hook-form";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { ReportReviewField } from "Components/ReportsComponents/ReportsFields/ReportReviewField";
import { getReportColumns, getReportFields } from "Helpers/Reports";
import useRefTable from "Hooks/useRefTables";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";

const property_columns = [
  { name: "apartment", label: "apartment" },
  { name: "shop", label: "shop" },
  { name: "parking", label: "parking" },
  { name: "villa", label: "villa" },
  { name: "land", label: "land" },
];

const LeasedPropertyActivityReport = () => {
  const name = "leased_property_activity_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const { CACHE_LIST } = useRefTable(name);
  const [selectedColumns, setSelectedColumns] = useState({});
  const [selectedPropertyColumns, setSelectedPropertyColumns] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  const onSubmit = (value) => {};

  console.log({
    filters: watch(),
    columns: Object.keys(selectedColumns),
    properties: Object.keys(selectedPropertyColumns),
  });

  return (
    <BlockPaper title={"Property moving Report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
            <ReportFilterFields title={"Fields"}>
              <ReportFields
                containerClassName="gap-3"
                fields={fields}
                CACHE_LIST={CACHE_LIST}
                sharedLabelClassName="w-[200px]"
              />
            </ReportFilterFields>
            <ReportFilterColumns
              searchKey="accessorKey"
              columns={columns}
              selectedColumns={selectedColumns}
              setSelectedColumns={setSelectedColumns}
            />
            <div className="flex flex-col gap-4">
              <ReportFilterColumns
                columns={property_columns}
                selectedColumns={selectedPropertyColumns}
                setSelectedColumns={setSelectedPropertyColumns}
                title="Show Property"
              />
              <ReportBetweenDateField
                date1Field={{
                  name: "start_date",
                }}
                date2Field={{
                  name: "end_date",
                }}
              />
            </div>
            <ReportReviewField />
          </div>
          <div></div>
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
        </form>
      </FormProvider>
    </BlockPaper>
  );
};

export default LeasedPropertyActivityReport;
