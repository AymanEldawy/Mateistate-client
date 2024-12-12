import { ReportFilterColumns } from "../ReportFilterColumns";

export const ReportFilterChqOperationsTypes = ({
  bodyClassName,
  containerClassName,
  operationIds,
  setOperationIds,
}) => {
  return (
    <ReportFilterColumns
      containerClassName={containerClassName}
      bodyClassName={bodyClassName}
      title="Cheque Operation types"
      columns={[
        { name: "op_collection", label: "Collection entry" },
        { name: "op_partial_collection", label: "Partial entry" },
        { name: "op_return", label: "Return entry" },
        { name: "op_deportation", label: "deposit entry" },
      ]}
      selectedColumns={operationIds}
      setSelectedColumns={setOperationIds}
    />
  );
};
