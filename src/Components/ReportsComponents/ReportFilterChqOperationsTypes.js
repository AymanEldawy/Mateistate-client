import { ReportFilterColumns } from "./ReportFilterColumns";

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
      title="Cheque Operations types  "
      columns={[
        { name: 1, label: "Collection entry" },
        { name: 2, label: "Partial entry" },
        { name: 3, label: "Return entry" },
        { name: 4, label: "deposit entry" },
      ]}
      selectedColumns={operationIds}
      setSelectedColumns={setOperationIds}
    />
  );
};
