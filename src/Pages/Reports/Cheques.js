import { DynamicTable } from "Components/StructurePage/Tables/DynamicTable";
import { cheque } from "Helpers/columns-structure";
import useFetch from "Hooks/useFetch";
import { useMemo } from "react";

const Cheques = () => {
  const { data, loading } = useFetch("bill_pattern");
  const billData = useFetch("bill");

  const columns = useMemo(() => {
    let hash = {};
    if (loading) return cheque(hash);

    for (const item of data) {
      hash[item?.code] = {
        name: item?.name,
        id: item?.id,
      };
    }
    return cheque(hash);
  }, [loading]);

  return (
    <DynamicTable
      hideAddNew
      tableName={"cheque"}
      defaultName={"bill"}
      columns={columns}
      data={billData?.data || []}
      loading={billData?.loading || loading}
    />
  );
};

export default Cheques;
