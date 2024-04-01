import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import { FormProvider, useForm } from "react-hook-form";
import { CheckboxField } from "Components/StructurePage/CustomFields";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { ReportFilterBuildings } from "Components/ReportsComponents/ReportFilterBuildings";
import { useMemo, useState } from "react";
import { ReportFilterColumns } from "Components/ReportsComponents/ReportFilterColumns";
import { getReportColumns } from "Helpers/Reports";

const MangerChequeReport = () => {
  const name = "manger_cheques_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [buildingsIds, setBuildingsIds] = useState({});
  const [selectedColumns, setSelectedColumns] = useState({});

  const columns = useMemo(() => getReportColumns(name), []);

  const onSubmit = (value) => {};


  return (
    <BlockPaper title={name}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-start">
            <div className="grid gap-4">
              <ReportFilterBuildings
                buildingsIds={buildingsIds}
                setBuildingsIds={setBuildingsIds}
                bodyClassName="h-[300px]"
              />
              <ReportBetweenDateField
                customTitle={<CheckboxField name="allow_date" label="date" />}
                date1Field={{ name: "start_date" }}
                date2Field={{ name: "end_date" }}
                sharedProps={{
                  readOnly: !watch("allow_date"),
                }}
              />
            </div>
            <ReportFilterColumns
              searchKey="accessorKey"
              columns={columns}
              selectedColumns={selectedColumns}
              setSelectedColumns={setSelectedColumns}
              bodyClassName="h-[450px]"
            />
          </div>
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
        </form>
      </FormProvider>
    </BlockPaper>
  );
};

export default MangerChequeReport;
