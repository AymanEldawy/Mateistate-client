import { PrintIcon } from "Components/Icons";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";

export const ContractPayments = ({ contract_id, CACHE_LIST }) => {
  const { watch } = useFormContext();
  const [selectedChqRows, setSelectedChqRows] = useState({});
  const [selectedVoucherRows, setSelectedVoucherRows] = useState({});
  const [refresh, setRefresh] = useState(false);
  
  let cheque_grid = useMemo(() => getFormByTableName("cheque_grid"), []);
  let voucher_grid = useMemo(
    () =>
      getFormByTableName("voucher_grid_data").filter(
        (c) => c?.name !== "debit"
      ),
    []
  );

  const onSelectToPrint = (row, selectedRows, setSelectedRows) => {
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
        <h2 className="text-xl text-blue-600 font-semibold">Cheques:</h2>
        <button
          disabled={!Object.keys(selectedChqRows)?.length}
          type="button"
          className="flex gap-2 dark:disabled:bg-gray-600 disabled:opacity-50 text-white items-center rounded-md bg-blue-500  px-4 py-1"
        >
          <PrintIcon className="h-5 w-5" />
          Print
        </button>
      </div>
      {watch("installment_grid")?.length ? (
        <TableFields
          fields={cheque_grid}
          tab={"installment_grid"}
          CACHE_LIST={CACHE_LIST}
          rowsCount={watch("installment_grid")?.length || 10}
          increasable={false}
          allowPrint
          onClickPrint={(data) => console.log(data, "----")}
          onRowClick={(index) =>
            onSelectToPrint(index, selectedChqRows, setSelectedChqRows)
          }
          selectedRows={selectedChqRows}
        />
      ) : (
        <p>There is no Cheques</p>
      )}

      <div className="my-4 border-t w-full h-[1px]" />
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-blue-600 font-semibold">Vouchers:</h2>
        <button
          disabled={!Object.keys(selectedVoucherRows)?.length}
          type="button"
          className="flex gap-2 dark:disabled:bg-gray-600 disabled:opacity-50 text-white items-center rounded-md bg-blue-500  px-4 py-1"
        >
          <PrintIcon className="h-5 w-5" />
          Print
        </button>
      </div>

      {watch("voucher_grid")?.length ? (
        <TableFields
          fields={voucher_grid}
          tab={"voucher_grid"}
          CACHE_LIST={CACHE_LIST}
          rowsCount={watch("voucher_grid")?.length}
          increasable={false}
          allowPrint
          onClickPrint={(data) => console.log(data, "----")}
          selectedRows={selectedVoucherRows}
          onRowClick={(index) =>
            onSelectToPrint(index, selectedVoucherRows, setSelectedVoucherRows)
          }
        />
      ) : (
        <p>There is no Vouchers</p>
      )}
      <div className="divide-x-2" />
    </div>
  );
};
