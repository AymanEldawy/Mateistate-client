import { PrintIcon } from "Components/Icons";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";

export const ContractPaymentsTable = ({
  fields,
  CACHE_LIST,
  title,
  onClickPrint,
}) => {
  const { watch } = useFormContext;
  const [selectedRows, setSelectedRows] = useState({});
  const [refresh, setRefresh] = useState(false);

  const onSelectToPrint = (row) => {
    let rows = selectedRows;
    if (rows?.[row]) {
      delete rows[row];
    } else {
      rows[row] = true;
    }
    setSelectedRows(rows);
    setRefresh((p) => !p);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-blue-600 font-semibold">{title}</h2>
        <button
          disabled={!Object.keys(selectedRows)?.length}
          onClick={onClickPrint}
          type="button"
          className="flex gap-2 dark:disabled:bg-gray-600 disabled:opacity-50 text-white items-center rounded-md bg-blue-500  px-4 py-1"
        >
          <PrintIcon className="h-5 w-5" />
          Print
        </button>
      </div>
      {watch("installment_grid")?.length ? (
        <TableFields
          fields={fields}
          tab={"installment_grid"}
          CACHE_LIST={CACHE_LIST}
          rowsCount={watch("installment_grid")?.length || 10}
          increasable={false}
          allowPrint
          onClickPrint={(data) => console.log(data, "----")}
          onRowClick={onSelectToPrint}
          selectedRows={selectedRows}
        />
      ) : (
        <p>There is no Cheques</p>
      )}
    </div>
  );
};
