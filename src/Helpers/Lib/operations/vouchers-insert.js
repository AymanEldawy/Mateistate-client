import { CREATED_FROM } from "Helpers/constants";
import { ApiActions } from "../api";

const getVoucherNumber = async (name) => {
  const response = await ApiActions.read(name, {
    limit: 1,
    sorts: [{ column: "number", order: "DESC", nulls: "last" }],
  });

  return +response?.result?.at(0)?.number + 1;
};

// Insert into Entry
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
  should_update,
}) => {
  const number = (await getVoucherNumber("entry_main_data")) || 1;

  let data = {
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
  };

  let res = null;
  let responseData = null;
  if (should_update) {
    let entry = await ApiActions.read("entry_main_data", {
      conditions: [
        {
          type: "and",
          conditions: [["created_from_id", "=", created_from_id]],
        },
      ],
    });

    await ApiActions.update("entry_main_data", {
      conditions: [
        { type: "and", conditions: [["id", "=", entry?.result?.at(0)?.id]] },
      ],
      updates: data,
    });
    responseData = entry?.result?.at(0);
  } else {
    res = await ApiActions.insert("entry_main_data", {
      data,
    });
    responseData = res?.record;
  }
  return responseData;
};

// Insert into grid
export const insertIntoGrid = async ({
  grid,
  itemId,
  tableName,
  gridTableName,
  itemSearchName,
  should_update,
}) => {
  const prevGrid = await ApiActions.read(tableName, {
    conditions: [
      {
        type: "and",
        conditions: [[itemSearchName, "=", itemId]],
      },
    ],
  });

  let prevCount = prevGrid?.result?.length;
  let currentCount = grid?.length;

  let length = Math.max(prevCount, currentCount);

  for (let i = 0; i < length; i++) {
    let item = grid?.[i];
    let prevItem = prevGrid?.result?.[i];

    if (JSON.stringify(item) === JSON.stringify(prevItem)) continue;

    if (should_update && item && prevItem) {
      await ApiActions.update(gridTableName, {
        conditions: [{ type: "and", conditions: [["id", "=", prevItem?.id]] }],
        updates: item,
      });
    } else {
      if (item) {
        await ApiActions.insert(gridTableName, {
          data: { ...item, itemId },
        });
      } else {
        await ApiActions.remove(gridTableName, {
          conditions: [
            { type: "and", conditions: [["id", "=", prevItem?.id]] },
          ],
        });
      }
    }
  }
};

// generate Entry From Contract
export const generateEntryFromContract = async ({
  values,
  contractId,
  contractNumber,
  assetsType,
  assetsTypeNumber,
  buildingNumber,
  should_update,
}) => {
  if (!contractId) return;

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

  gridRows.push({
    created_at,
    account_id: customer_account_id,
    debit: contract_value,
    observe_account_id: revenue_account_id,
    credit: 0,
    currency_id,
    cost_center_id,
    note,
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
    should_update,
  });

  let entry_main_data_id = response?.id

  if (entry_main_data_id) {
    insertIntoGrid({
      itemId: entry_main_data_id,
      grid: gridRows,
      should_update,
      gridTableName: "entry_grid_data",
      tableName: "entry_main_data",
      itemSearchName: "entry_main_data_id",
    });
  }
};

// generate Entry From Voucher Building
export const generateEntryFromVoucher = async ({
  values,
  created_from,
  created_from_id,
  grid,
  should_update,
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

  if (!response?.id) {
    return;
  }

  let gridRows = [];

  note = `Generate A Constraint from ${created_from} number ${response?.number}`;
  let entry_main_data_id = response?.id;

  gridRows.push({
    account_id,
    observe_account_id: grid?.at(0)?.account_id,
    currency_id,
    cost_center_id,
    note,
    debit: values?.debit || 0,
    credit: values?.credit || 0,
    entry_main_data_id,
  });

  for (const item of grid) {
    gridRows.push({
      account_id: item?.account_id,
      observe_account_id: account_id,
      currency_id,
      cost_center_id,
      note,
      debit: values?.debit || 0,
      credit: values?.credit || 0,
      entry_main_data_id,
    });
  }
  console.log(grid, "grid values");

  insertIntoGrid({
    itemId: entry_main_data_id,
    grid: gridRows,
    tableName: "entry_main_data",
    gridTableName: "entry_grid_data",
    itemSearchName: "entry_main_data_id",
    should_update,
  });
};

// generate Entry From Building
export const generateEntryFromBuilding = async ({
  values,
  created_from,
  created_from_id,
  grid,
  should_update,
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

  if (!response?.id) {
    return;
  }
};
// generate Entry From Building Buying
export const generateEntryFromBuildingBuying = async ({
  values,
  created_from,
  created_from_id,
  grid,
  should_update,
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

  if (!response?.id) {
    return;
  }
};
// generate Entry From Building Investment
export const generateEntryFromBuildingInvestment = async ({
  values,
  created_from,
  created_from_id,
  grid,
  should_update,
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

  if (!response?.id) {
    return;
  }
};

// generate Entry From Bill
export const generateEntryFromBill = async ({
  values,
  created_from,
  created_from_id,
  grid,
  should_update,
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

  if (!response?.id) {
    return;
  }
};