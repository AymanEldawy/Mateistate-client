import { PlusIcon, PrintIcon } from "Components/Icons";
import TableFields from "Components/TableComponents/TableFields";
import getFormByTableName from "Helpers/Forms/forms";
import {
  CHQ_RECEIVED_CODE,
  CHQ_RECEIVED_NAME,
  CONNECT_WITH_CONTRACT_CODE,
  DEFAULT_CHQ_INFO,
  VOUCHER_RECEIPTS_CODE,
  VOUCHER_RECEIPTS_NAME,
} from "Helpers/GENERATE_STARTING_DATA";
import {
  COUNTER_CHQ_NUMBER,
  DESPATCH_TABLES_NAME,
} from "Helpers/Lib/contract-helpers";
import { getAccountCash, getVoucherLastNumber } from "Helpers/Lib/global-read";
import { METHODS } from "Helpers/constants";
import useCurd from "Hooks/useCurd";
import { usePopupForm } from "Hooks/usePopupForm";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import { useEffect, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import VoucherForm from "../Vouchers/Voucher/VoucherForm";
import ChequeForm from "../ChequesForm/ChequeForm";
import Modal from "Components/Global/Modal/Modal";
import getTableColumns from "Helpers/columns-structure";
import CustomTable from "Components/TableComponents/CustomTable";

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

const ContractPayments = ({ contract_id, CACHE_LIST, assetType }) => {
  const { dispatchVoucherEntries } = useVoucherEntriesView();
  const { watch, setValue } = useFormContext();
  const [openForm, setOpenForm] = useState(null);
  const [selectedChqRows, setSelectedChqRows] = useState({});
  const [selectedVoucherRows, setSelectedVoucherRows] = useState({});
  const [refresh, setRefresh] = useState(false);
  // const [recordResponse, setRecordResponse] = useState([]);
  const [selectedCheques, setSelectedCheques] = useState([]);
  const [selectedVouchers, setSelectedVouchers] = useState([]);
  const { getOneBy } = useCurd();
  let cheque_grid = useMemo(() => getTableColumns("cheque_grid"), []);
  let voucher_grid = useMemo(() => getTableColumns("voucher_grid"), []);

  const updateChequeGrid = (data) => {
    console.log("🚀 ~ updateChequeGrid ~ data:", data)
    let index = watch("installment_grid").length;
    setValue(`installment_grid.${index}`, data);
    setRefresh((p) => !p);
  }

  const updateVoucherGrid = (data, grid) => {
    console.log("🚀 ~ updateVoucherGrid ~ data:", data)
    let index = watch("voucher_grid").length;
    setValue(`voucher_grid.${index}`, {
      data,
      ...grid?.at(0),
      id: data?.id,
    });
    setRefresh((p) => !p)
  }

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
      (c) => c?.id === watch("contract.client_id")
    )?.name;
    let due_date = new Date().toLocaleDateString("en-UK");
    let bankName = CACHE_LIST.bank?.find(
      (c) => c?.id === watch("installment.bank_id")
    )?.name;

    let len = watch("installment_grid")?.length + 1;

    setOpenForm({
      open: true,
      type: "CHEQUE",
      table: DESPATCH_TABLES_NAME.CHEQUE,
      code: CHQ_RECEIVED_CODE,
      oldValues: {
        code: CHQ_RECEIVED_CODE,
        installment_id: watch("installment.id"),
        connect_with: CONNECT_WITH_CONTRACT_CODE,
        connect_with_id: contract_id,
        account_id: watch("contract.client_id"),
        observe_account_id: watch("installment_grid.0.observe_account_id"),
        cost_center_id: watch("installment_grid.0.cost_center_id"),
        observe_cost_center_id: watch("installment_grid.0.cost_center_id"),
        [`${assetType}_id`]: watch(`contract.${assetType}_id`),
        due_date: new Date(),
        end_due_date: new Date(date),
        bank_id: watch("installment.bank_id"),
        note2: `${COUNTER_CHQ_NUMBER?.[len - 1]} Payment (${len})`,
      },
    });
  };


  const onClickAddNewCash = async () => {
    const number = await getVoucherLastNumber(VOUCHER_RECEIPTS_CODE);
    const account_cash_id = await getAccountCash(watch('contract.building_id'));

    let clientName = CACHE_LIST.account?.find(
      (c) => c?.id === watch("contract.client_id")
    )?.name;
    let due_date = new Date().toLocaleDateString("en-UK");
    let bankName = CACHE_LIST.bank?.find(
      (c) => c?.id === watch("installment.bank_id")
    )?.name;
    let note = `Received new cash payment from Mr. ${clientName} due date ${due_date} bank ${bankName}`;

    setOpenForm({
      open: true,
      type: "VOUCHER",
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
            account_id: watch("contract.client_id"),
            cost_center_id: watch("installment_grid.0.cost_center_id"),
            note,
          },
        ],
      },
    });
  };

  console.log(watch());


  return (
    <>
      <Modal open={openForm} bodyClassName="!p-0">
        {openForm?.type === "CHEQUE" && (
          <ChequeForm
            number={openForm?.oldValues?.number}
            onClose={() => setOpenForm(null)}
            oldValues={openForm?.oldValues}
            patternCode={+openForm?.code}
            popupView
            action={openForm?.action}
            outerClose={() => setOpenForm(null)}
            updateChequeGrid={updateChequeGrid}
            tableName={
              Object.values(DEFAULT_CHQ_INFO)?.find(
                (c) => c.code === +openForm?.code
              )?.name
            }
            callback={() => setOpenForm(null)}
          />
        )}
        {openForm?.type === "VOUCHER" && (
          <VoucherForm
            number={openForm?.oldValues?.number}
            onClose={() => setOpenForm(null)}
            voucherName={openForm?.voucherName}
            code={
              openForm?.oldValues?.voucher_type || openForm?.voucherType
            }
            oldValues={openForm?.oldValues}
            updateVoucherGrid={updateVoucherGrid}
            outerClose={() => setOpenForm(null)}
            popupView
          />
        )}
      </Modal>

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
          <CustomTable
            containerClassName="mt-2"
            columns={cheque_grid}
            data={watch('installment_grid')}
            pageCount={watch('installment_grid')?.length}
            rowSelection={selectedCheques}
            setRowSelection={setSelectedCheques}
            meta={{
              setOpenForm
            }}
          />
          // <TableFields
          //   fields={cheque_grid}
          //   tab={"installment_grid"}
          //   CACHE_LIST={CACHE_LIST}
          //   rowsCount={watch("installment_grid")?.length || 10}
          //   increasable={false}
          //   selectedRows={selectedChqRows}
          //   allowPrint
          //   showNumberAsLink
          //   withPortal
          //   onClickPrint={(data) => console.log(data, "----")}
          //   onClickOnNumber={(oldValues) => {
          //     setOpenForm({
          //       open: true,
          //       type: "CHEQUE",
          //       table: DESPATCH_TABLES_NAME.CHEQUE,
          //       oldValues,
          //       code: CHQ_RECEIVED_CODE,
          //     });
          //   }}
          //   onRowClick={(index) =>
          //     onSelectToPrint(index, selectedChqRows, setSelectedChqRows)
          //   }
          //   allowViewEntry={(row) => {
          //     if (row?.id) {
          //       dispatchVoucherEntries({
          //         table: "entry_main_data",
          //         grid: "entry_grid_data",
          //         ref_name: "created_from_id",
          //         id: row?.id,
          //       });
          //     }
          //   }}
          // />
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

          <CustomTable
            containerClassName="mt-2"
            columns={voucher_grid}
            data={watch('voucher_grid')}
            pageCount={watch('voucher_grid')?.length}
            rowSelection={selectedVouchers}
            setRowSelection={setSelectedVouchers}
            meta={{
              setOpenForm
            }}
          />
          // <TableFields
          //   fields={voucher_grid}
          //   tab={"voucher_grid"}
          //   CACHE_LIST={CACHE_LIST}
          //   rowsCount={watch("voucher_grid")?.length}
          //   increasable={false}
          //   selectedRows={selectedVoucherRows}
          //   allowPrint
          //   showNumberAsLink
          //   withPortal
          //   onClickPrint={(data) => console.log(data, "----")}
          //   onClickOnNumber={async (oldValues) => {
          //     const res = await getOneBy(
          //       "voucher_grid_data",
          //       oldValues?.id,
          //       "voucher_main_data_id"
          //     );
          //     setOpenForm({
          //       open: true,
          //       type: "VOUCHER",
          //       table: DESPATCH_TABLES_NAME.VOUCHER,
          //       voucherName: VOUCHER_RECEIPTS_NAME,
          //       voucherType: VOUCHER_RECEIPTS_CODE,
          //       oldValues: {
          //         ...oldValues,
          //         grid: res?.result,
          //       },
          //     });
          //   }}
          //   onRowClick={(index) =>
          //     onSelectToPrint(
          //       index,
          //       selectedVoucherRows,
          //       setSelectedVoucherRows
          //     )
          //   }
          //   allowViewEntry={(row) => {
          //     if (row?.id) {
          //       dispatchVoucherEntries({
          //         table: "entry_main_data",
          //         grid: "entry_grid_data",
          //         ref_name: "created_from_id",
          //         id: row?.id,
          //       });
          //     }
          //   }}
          // />
        ) : (
          <p>There is no Cash</p>
        )}
        <div className="divide-x-2" />
      </div>
    </>
  );
};


export default ContractPayments