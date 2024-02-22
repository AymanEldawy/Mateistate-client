import { Select } from "Components/StructurePage/CustomFields";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export const ContractFiltersBar = () => {
  const from = useForm();
  return (
    // ltr:mr-auto rtl:ml-auto
    <FormProvider {...from}>
      <div className="flex gap-2 items-center ">
        <Select
          containerClassName="!flex-row gap-2 items-center"
          label="Asset"
          name="contract_asset"
          list={[
            { id: 1, name: "All" },
            { id: 2, name: "Apartment" },
            { id: 3, name: "Parking" },
            { id: 4, name: "Shop" },
          ]}
        />
        <Select
          containerClassName="!flex-row gap-2 items-center"
          label="Type"
          name="contract_type"
          list={[
            { id: 1, name: "All" },
            { id: 2, name: "Sale" },
            { id: 3, name: "Rent" },
          ]}
        />
        <Select
          containerClassName="!flex-row gap-2 items-center"
          label="Status"
          name="contract_status"
          list={[
            { id: 1, name: "All" },
            { id: 2, name: "In process" },
            { id: 3, name: "Completed" },
            { id: 4, name: "Renew" },
            { id: 5, name: "New" },
          ]}
        />
        <Select
          containerClassName="!flex-row gap-2 items-center"
          label="Duration"
          name="contract_duration"
          list={[
            { id: 1, name: "All" },
            { id: 2, name: "Today" },
            { id: 3, name: "Yesterday" },
            { id: 4, name: "This week" },
            { id: 5, name: "This month" },
            { id: 6, name: "This year" },
          ]}
        />
      </div>
    </FormProvider>
  );
};
