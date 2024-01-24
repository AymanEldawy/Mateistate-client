import { CREATED_FROM } from "Helpers/constants";
import { ApiActions } from "../api";

const getVoucherNumber = async (name) => {
  const response = await ApiActions.read(name, {
    limit: 1,
    sorts: [{ column: "number", order: "DESC", nulls: "last" }],
  });

  return +response?.result?.at(0)?.number + 1;
};

export const insertIntoVoucher = ({
  id,
  number,
  created_at,
  currency_id,
  currency_val,
  connect_with_id,
  note,
  debit,
  credit,
  feedback,
  seller_id,
  connect_with,
  debit_amount,
  debit_total,
  credit_total,
  credit_amount,
  account_id,
}) => {};

export const insertIntoVoucherGrid = ({
  id,
  created_at,
  account_id,
  debit,
  credit,
  currency_id,
  cost_center_id,
  voucher_main_data_id,
  note,
}) => {};

export const insertIntoAccountingVoucher = ({
  id,
  number,
  created_at,
  currency_id,
  currency_val,
  note,
  debit,
  credit,
  feedback,
  seller_id,
  full_name,
  connect_with,
  debit_amount,
  debit_total,
  credit_total,
  credit_amount,
  account_id,
  sms,
}) => {};

export const insertIntoAccountingVoucherGrid = ({
  id,
  created_at,
  account_id,
  debit,
  credit,
  currency_id,
  cost_center_id,
  obverse_account_id,
  voucher_main_data_id,
  note,
}) => {};

export const insertIntoEntry = async ({
  created_at,
  currency_id,
  note,
  debit,
  credit,
  difference,
  currency_val,
  created_from,
  created_from_id,
}) => {
  const number = (await getVoucherNumber("entry_main_data")) || 1;

  const res = await ApiActions.insert("entry_main_data", {
    data: {
      created_at,
      currency_id,
      note,
      debit,
      credit,
      difference,
      currency_val,
      created_from,
      created_from_id,
      number,
    },
  });
  return res;
};

export const insertIntoEntryGrid = async ({
  created_at,
  account_id,
  debit,
  credit,
  currency_id,
  cost_center_id,
  note,
  observe_account_id,
  entry_main_data_id,
}) => {
  const res = await ApiActions.insert("entry_grid_data", {
    data: {
      created_at,
      account_id,
      debit,
      credit,
      currency_id,
      cost_center_id,
      note,
      observe_account_id,
      entry_main_data_id,
    },
  });
};

export const generateEntryFromContract = async ({
  values,
  contractId,
  contractNumber,
  assetsType,
  assetsTypeNumber,
  buildingNumber,
}) => {
  let {
    currency_id,
    currency_val,
    contract_value,
    current_securing_value,
    cost_center_id,
    customer_account_id,
    revenue_account_id,
    insurance_account_id,
    created_at,
  } = values;

  let note = `Contract rent number ${contractNumber} ${assetsType} number ${assetsTypeNumber} building ${buildingNumber}`;
  let debit = current_securing_value
    ? contract_value + current_securing_value
    : contract_value;
  let credit = debit;

  let difference = credit - debit;

  if (difference !== 0) return;

  let gridRows = [];
  let entry_main_data_id = 0;

  gridRows.push({
    created_at,
    account_id: customer_account_id,
    debit: contract_value,
    observe_account_id: revenue_account_id,
    credit: 0,
    currency_id,
    cost_center_id,
    note,
    entry_main_data_id,
  });

  gridRows.push({
    created_at,
    account_id: revenue_account_id,
    debit: 0,
    observe_account_id: customer_account_id,
    credit: contract_value,
    currency_id,
    cost_center_id,
    note,
    entry_main_data_id,
  });

  if (current_securing_value) {
    gridRows.push({
      created_at,
      account_id: customer_account_id,
      debit: current_securing_value,
      observe_account_id: insurance_account_id,
      credit: 0,
      currency_id,
      cost_center_id,
      note,
      entry_main_data_id,
    });

    gridRows.push({
      created_at,
      account_id: insurance_account_id,
      debit: 0,
      observe_account_id: customer_account_id,
      credit: current_securing_value,
      currency_id,
      cost_center_id,
      note,
      entry_main_data_id,
    });
  }
  const response = await insertIntoEntry({
    currency_id,
    currency_val,
    note,
    debit,
    credit,
    difference,
    created_from: CREATED_FROM?.contract,
    created_from_id: contractId,
  });

  if (response?.success) {
    let entry_main_data_id = response?.record?.id;
    for (const item of gridRows) {
      insertIntoEntryGrid({
        ...item,
        entry_main_data_id,
      });
    }
  }
};

export const generateEntryFromReceiptVoucher = async ({
  values,
  created_from,
  created_from_id,
  grid,
}) => {

  let {
    currency_id,
    currency_val,
    note,
    debit,
    credit,
    difference,
    account_id,
    cost_center_id,
  } = values;

  const response = await insertIntoEntry({
    currency_id,
    currency_val,
    note,
    debit,
    credit,
    difference,
    created_from,
    created_from_id,
  });

  if (!response?.success) {
    console.log("failed to generate entries from " + created_from);
    return;
  }
  let entry_main_data_id = response?.record?.id;

  let gridRows = [];

  let keyNameSearch = "";
  if (created_from === CREATED_FROM.receipt) {
    keyNameSearch = "credit";
  } else {
    keyNameSearch = "debit";
  }
  
  note = `Generate A Constraint from ${created_from} number ${response?.record?.number}`

  gridRows.push({
    account_id,
    observe_account_id: grid?.at(0)?.account_id,
    currency_id,
    cost_center_id,
    note,
    debit: 0,
    credit: 0,
    entry_main_data_id,
    [keyNameSearch]: values?.[keyNameSearch],
  });

  for (const item of grid) {
    gridRows.push({
      account_id: item?.account_id,
      observe_account_id: account_id,
      currency_id,
      cost_center_id,
      note,
      debit: 0,
      credit: 0,
      entry_main_data_id,
      [keyNameSearch]: item?.[keyNameSearch],
    });
  }

  console.log(gridRows, 'gridRows');

  for (const item of gridRows) {
    insertIntoEntryGrid({
      ...item,
      entry_main_data_id,
    });
  }
};
