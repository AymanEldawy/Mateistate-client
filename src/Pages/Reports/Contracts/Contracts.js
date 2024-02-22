import { DynamicTable } from "Components/StructurePage/Tables/DynamicTable";
import useFetch from "Hooks/useFetch";
import { ContractFiltersBar } from "./ContractFiltersBar";

const Contracts = () => {
  const { data, loading } = useFetch("contract");

  return (
    <DynamicTable
      hideAddNew
      tableName={"contract"}
      data={data || []}
      extraContent={<ContractFiltersBar />}
      loading={loading}
    />
  );
};

export default Contracts;
