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
  const number = await getVoucherNumber("entry_main_data") || 1;

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
  console.log("🚀 ~ generateEntryFromContract ~ values:", values);
  let currency_id = values?.currency_id;
  let currency_val = values?.currency_val;
  let contract_value = values?.contract_value;
  let current_securing_value = values?.current_securing_value;
  let cost_center_id = values?.cost_center_id;
  let customer_account_id = values?.customer_account_id;
  let revenue_account_id = values?.revenue_account_id;
  let insurance_account_id = values?.insurance_account_id;
  let created_at = values?.start_duration_date;
  let note = `Contract rent number ${contractNumber} ${assetsType} number ${assetsTypeNumber} building ${buildingNumber}`;
  let debit = contract_value + current_securing_value;
  let credit = contract_value + current_securing_value;
  let difference = credit - debit;

  console.log({
    currency_id,
    currency_val,
    note,
    debit,
    credit,
    difference,
    created_from: "contract",
    created_from_id: contractId,
  });

  let grids = [];
  let entry_main_data_id = 0;
  grids.push({
    account_id: customer_account_id,
    debit: contract_value,
    observe_account_id: revenue_account_id,
    credit: 0,
    currency_id,
    cost_center_id,
    note,
    entry_main_data_id,
  });

  grids.push({
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
    grids.push({
      account_id: customer_account_id,
      debit: current_securing_value,
      observe_account_id: insurance_account_id,
      credit: 0,
      currency_id,
      cost_center_id,
      note,
      entry_main_data_id,
    });

    grids.push({
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
    created_from: "contract", // contract
    created_from_id: contractId, // contract id
  });

  if (response?.success) {
    let entry_main_data_id = response?.record?.id;
    for (const item of grids) {
      insertIntoEntryGrid({
        ...item,
        entry_main_data_id,
      });
    }
  }
};
