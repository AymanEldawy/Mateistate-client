import { useEffect, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { ReportFilterColumns } from "../ReportFilterColumns";
import { Button } from "Components/Global/Button";
import { FormProvider, useForm } from "react-hook-form";
import { ApiActions } from "Helpers/Lib/api";
import { PropertyMovingReportFilter } from "./PropertyMovingReportFilter";

// البناء العقار نوع العقد من الي تاريخ العملة الزبون عدد الايام الفارغة التدقيق

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
          <div className="flex gap-4 lg:gap-6 items-start">
            <div className="overflow-hidden pb-4 flex-1">
              <PropertyMovingReportFilter />

              <ReportFilterColumns
                columns={property_columns}
                selectedColumns={selectedPropertyColumns}
                setSelectedColumns={setSelectedPropertyColumns}
                title="Show Property"
                bodyClassName="flex flex-wrap mt-2"
                titleContainerClassName="flex justify-between item-center"
                containerClassName="border-0 mt-8 p-0"
                itemClassName="!border-0"
                selectAllClassName="ltr:ml-auto rtl:mr-auto max-w-fit"
                titleClassName="!p-0"
              />
              
            </div>
            <div className="w-1/4 min-w-[200px]">
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
    </BlockPaper>
  );
};

export default PropertyMovingReport;
