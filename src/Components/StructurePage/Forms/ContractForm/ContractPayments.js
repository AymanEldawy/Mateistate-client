import { PlusIcon, PrintIcon } from "Components/Icons";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import getFormByTableName from "Helpers/Forms/forms";
import {
  CHQ_RECEIVED_CODE,
  CHQ_RECEIVED_NAME,
  CONNECT_WITH_CONTRACT_CODE,
  VOUCHER_RECEIPTS_CODE,
  VOUCHER_RECEIPTS_NAME,
} from "Helpers/GENERATE_STARTING_DATA";
import { ApiActions } from "Helpers/Lib/api";
import {
  COUNTER_CHQ_NUMBER,
  DESPATCH_TABLES_NAME,
} from "Helpers/Lib/contract-helpers";
import { getAccountCash, getVoucherLastNumber } from "Helpers/Lib/global-read";
import { METHODS } from "Helpers/constants";
import { usePopupForm } from "Hooks/usePopupForm";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import { useEffect, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

const PaymentsGridButton = ({
  onClickAdd,
  onClickPrint,
  title,
  disabledPrint,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-3 items-center">
      <button
        type="button"
        className="flex items-center gap-2 bg-blue-500 text-sm text-white py-1 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
        onClick={onClickAdd}
      >
        <PlusIcon className="w-6 h-6" circle />
        {t(title)}
      </button>
      <button
        disabled={disabledPrint}
        onClick={onClickPrint}
        type="button"
        className="flex gap-2 dark:disabled:bg-gray-600 disabled:opacity-50 text-white items-center rounded-md bg-green-500  px-4 py-1"
      >
        <PrintIcon className="h-5 w-5" />
        Print
      </button>
    </div>
  );
};

export const ContractPayments = ({
  contract_id,
  CACHE_LIST,
  firstTabData,
  assetType,
}) => {
  const { dispatchVoucherEntries } = useVoucherEntriesView();
  const { watch, setValue } = useFormContext();
  const [selectedChqRows, setSelectedChqRows] = useState({});
  const [selectedVoucherRows, setSelectedVoucherRows] = useState({});
  const [refresh, setRefresh] = useState(false);
  const { dispatchForm, recordResponse, setRecordResponse } = usePopupForm();

  let cheque_grid = useMemo(() => getFormByTableName("cheque_grid"), []);
  let voucher_grid = useMemo(
    () =>
      getFormByTableName("voucher_main_data_short").filter(
        (c) => c?.name !== "debit"
      ),
    []
  );


  useEffect(() => {
    if (recordResponse?.table === CHQ_RECEIVED_NAME) {
      let { response } = recordResponse;
      if (recordResponse?.method === METHODS.INSERT) {
        let index = watch("installment_grid").length;
        setValue(`installment_grid.${index}`, response?.record);
        setRecordResponse({});
      } else {
      }
    } else if (recordResponse?.table === VOUCHER_RECEIPTS_NAME) {
      let { response, grid } = recordResponse;

      if (recordResponse?.method === METHODS.INSERT) {
        if (response?.success) {
          let index = watch("voucher_grid").length;
          setValue(`voucher_grid.${index}`, {
            ...response?.record,
            ...grid?.at(0),
            id: response?.record?.id,
          });
          setRecordResponse({});
        }
      } else {
      }
    }
  }, [recordResponse]);

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

  const onPrintCheque = () => {
    let selected = Object.keys(selectedChqRows)?.length;
  };
  const onPrintCash = () => {
    let selected = Object.keys(selectedVoucherRows)?.length;
  };

  const onClickAddNewCheck = () => {
    let date = new Date();
    date.setMonth(date.getMonth() + watch("installment.each_number"));

    let clientName = CACHE_LIST.account?.find(
      (c) => c?.id === watch('contract.client_id')
    )?.name;
    let due_date = new Date().toLocaleDateString("en-UK");
    let bankName = CACHE_LIST.bank?.find(
      (c) => c?.id === watch("installment.bank_id")
    )?.name;

    let len = watch("installment_grid")?.length + 1;

    dispatchForm({
      open: true,
      table: DESPATCH_TABLES_NAME.CHEQUE,
      code: CHQ_RECEIVED_CODE,
      oldValues: {
        type: CHQ_RECEIVED_CODE,
        installment_id: watch("installment.id"),
        connect_with: CONNECT_WITH_CONTRACT_CODE,
        connect_with_id: contract_id,
        account_id: watch("contract.client_id"),
        observe_account_id: watch("installment_grid.0.observe_account_id"),
        cost_center_id: watch("installment_grid.0.cost_center_id"),
        observe_cost_center_id: watch("installment_grid.0.cost_center_id"),
        [`${assetType}_id`]: firstTabData?.[`${assetType}_id`],
        due_date: new Date(),
        end_due_date: new Date(date),
        bank_id: watch("installment.bank_id"),
        internal_number:
          +watch("installment_grid")?.at(-1)?.internal_number + 1 || null,
        note2: `${COUNTER_CHQ_NUMBER?.[len - 1]} Payment (${len})`,
      },
    });
  };

  const onClickAddNewCash = async () => {
    const number = await getVoucherLastNumber(VOUCHER_RECEIPTS_CODE);
    const account_cash_id = await getAccountCash();

    let clientName = CACHE_LIST.account?.find(
      (c) => c?.id === watch("contract.client_id")
    )?.name;
    let due_date = new Date().toLocaleDateString("en-UK");
    let bankName = CACHE_LIST.bank?.find(
      (c) => c?.id === watch("installment.bank_id")
    )?.name;
    let note = `Received new cash payment from Mr. ${clientName} due date ${due_date} bank ${bankName}`;

    dispatchForm({
      open: true,
      table: DESPATCH_TABLES_NAME.VOUCHER,
      voucherName: VOUCHER_RECEIPTS_NAME,
      voucherType: VOUCHER_RECEIPTS_CODE,
      oldValues: {
        number: number + 1,
        connect_with: CONNECT_WITH_CONTRACT_CODE,
        connect_with_id: watch("contract.id"),
        voucher_type: VOUCHER_RECEIPTS_CODE,
        account_id: account_cash_id,
        created_at: new Date(),
        note,
        grid: [
          {
            account_id: watch('contract.client_id'),
            cost_center_id: watch("installment_grid.0.cost_center_id"),
            note,
          },
        ],
      },
    });
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl text-blue-600 font-semibold">
            Cheques: {watch("installment_grid")?.length}
          </h2>
          {watch("installment_grid")?.length ? (
            <PaymentsGridButton
              title="add_new_chq"
              onClickPrint={onPrintCheque}
              onClickAdd={onClickAddNewCheck}
              disabledPrint={watch("installment_grid")?.length < 1}
            />
          ) : null}
        </div>
        {watch("installment_grid")?.length ? (
          <TableFields
            fields={cheque_grid}
            tab={"installment_grid"}
            CACHE_LIST={CACHE_LIST}
            rowsCount={watch("installment_grid")?.length || 10}
            increasable={false}
            selectedRows={selectedChqRows}
            allowPrint
            showNumberAsLink
            withPortal
            onClickPrint={(data) => console.log(data, "----")}
            onClickOnNumber={(oldValues) => {
              dispatchForm({
                open: true,
                table: DESPATCH_TABLES_NAME.CHEQUE,
                oldValues,
                code: CHQ_RECEIVED_CODE,
              });
            }}
            onRowClick={(index) =>
              onSelectToPrint(index, selectedChqRows, setSelectedChqRows)
            }
            allowViewEntry={(row) => {
              if (row?.id) {
                dispatchVoucherEntries({
                  table: "entry_main_data",
                  grid: "entry_grid_data",
                  ref_name: "created_from_id",
                  id: row?.id,
                });
              }
            }}
          />
        ) : (
          <p>There is no Cheques</p>
        )}

        <div className="my-8 border-t w-full h-[1px]" />
        <div className="flex justify-between items-center">
          <h2 className="text-xl text-blue-600 font-semibold">
            Cash: {watch("voucher_grid")?.length}
          </h2>

          {watch("contract.id") ? (
            <PaymentsGridButton
              title="add_new_cash"
              onClickPrint={onPrintCash}
              disabledPrint={watch("voucher_grid")?.length < 1}
              onClickAdd={onClickAddNewCash}
            />
          ) : null}
        </div>

        {watch("voucher_grid")?.length ? (
          <TableFields
            fields={voucher_grid}
            tab={"voucher_grid"}
            CACHE_LIST={CACHE_LIST}
            rowsCount={watch("voucher_grid")?.length}
            increasable={false}
            selectedRows={selectedVoucherRows}
            allowPrint
            showNumberAsLink
            withPortal
            onClickPrint={(data) => console.log(data, "----")}
            onClickOnNumber={async (oldValues) => {
              const res = await ApiActions.read("voucher_grid_data", {
                conditions: [
                  {
                    type: "and",
                    conditions: [["voucher_main_data_id", "=", oldValues?.id]],
                  },
                ],
              });
              dispatchForm({
                open: true,
                table: DESPATCH_TABLES_NAME.VOUCHER,
                voucherName: VOUCHER_RECEIPTS_NAME,
                voucherType: VOUCHER_RECEIPTS_CODE,
                oldValues: {
                  ...oldValues,
                  grid: res?.result,
                },
              });
            }}
            onRowClick={(index) =>
              onSelectToPrint(
                index,
                selectedVoucherRows,
                setSelectedVoucherRows
              )
            }
            allowViewEntry={(row) => {
              if (row?.id) {
                dispatchVoucherEntries({
                  table: "entry_main_data",
                  grid: "entry_grid_data",
                  ref_name: "created_from_id",
                  id: row?.id,
                });
              }
            }}
          />
        ) : (
          <p>There is no Cash</p>
        )}
        <div className="divide-x-2" />
      </div>
    </>
  );
};
