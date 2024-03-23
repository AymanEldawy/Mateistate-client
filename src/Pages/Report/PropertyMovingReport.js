import { useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { Button } from "Components/Global/Button";
import { FormProvider, useForm } from "react-hook-form";
import { PropertyMovingReportFilter } from "../../Components/ReportsComponents/PropertyMovingReport/PropertyMovingReportFilter";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { ReportReviewField } from "Components/ReportsComponents/ReportsFields/ReportReviewField";

const columns = [
  { name: "building_id", label: "building " },
  { name: "units", label: "units" },
  { name: "contract_type", label: "contract type" },
  { name: "from_date", label: "from date" },
  { name: "to_date", label: "to date" },
  { name: "currency_id", label: "currency id" },
  { name: "client_id", label: "client_id" },
  { name: "total_empty_days", label: "total empty days" },
  { name: "feedback", label: "feedback" },
];

const property_columns = [
  { name: "apartment", label: "apartment" },
  { name: "shop", label: "shop" },
  { name: "parking", label: "parking" },
  { name: "villa", label: "villa" },
  { name: "land", label: "land" },
];

const PropertyMovingReport = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [selectedPropertyColumns, setSelectedPropertyColumns] = useState({});

  const onSubmit = (value) => {};

  return (
    <BlockPaper title={"Property moving Report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
            <PropertyMovingReportFilter />
            <ReportFilterColumns
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

export default PropertyMovingReport;
