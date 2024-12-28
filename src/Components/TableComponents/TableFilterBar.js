import { Select } from "Components/StructurePage/CustomFields";

export const TableFilterBar = () => {
  return (
    <div className="flex gap-2 items-center my-4">
      <Select
        containerClassName="flex-1"
        {...{
          label: "building",
          name: "building_id",
        }}
        list={[]}
        tab={""}
      />
      <Select
        containerClassName="flex-1"
        {...{
          label: "unit",
          name: "building_id",
        }}
        list={[]}
        tab={""}
      />
      <Select
        containerClassName="flex-1"
        {...{
          label: "status",
          name: "building_id",
        }}
        list={[]}
        tab={""}
      />
      <Select
        containerClassName="flex-1"
        {...{
          label: "client",
          name: "building_id",
        }}
        list={[]}
        tab={""}
      />
      <Select
        containerClassName="flex-1"
        {...{
          label: "sort",
          name: "building_id",
        }}
        list={[]}
        tab={""}
      />
    </div>
  );
};