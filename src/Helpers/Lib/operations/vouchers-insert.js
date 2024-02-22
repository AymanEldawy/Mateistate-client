import {
  CREATED_FROM,
  RECEIVED_CHQ_CODE,
  RECEIVED_VOUCHER_CODE,
} from "Helpers/constants";
import { ApiActions } from "../api";
import { toast } from "react-toastify";

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
  is_first_batch,
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

  let entry = await ApiActions.read("entry_main_data", {
    conditions: is_first_batch
      ? [
          {
            type: "and",
            conditions: [["created_from_id", "=", created_from_id]],
          },
          {
            type: "and",
            conditions: [["is_first_batch", "=", true]],
          },
        ]
      : [
          {
            type: "and",
            conditions: [["created_from_id", "=", created_from_id]],
          },
        ],
  });

  if (entry?.result?.length) {
    delete data.number;
    await ApiActions.update("entry_main_data", {
      conditions: [
        { type: "and", conditions: [["id", "=", entry?.result?.at(0)?.id]] },
      ],
      updates: { ...data, id: entry?.result?.at(0)?.id },
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
}) => {
  const prevGrid = await ApiActions.read(gridTableName, {
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

    if (item && prevItem) {
      await ApiActions.update(gridTableName, {
        conditions: [{ type: "and", conditions: [["id", "=", prevItem?.id]] }],
        updates: item,
      });
    } else {
      if (item) {
        await ApiActions.insert(gridTableName, {
          data: { ...item, [itemSearchName]: itemId },
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

// Insert into vouchers
export const insertIntoVoucher = async ({
  currency_id,
  currency_val,
  feedback,
  seller_id,
  connect_with,
  debit_amount,
  debit_total,
  credit_total,
  credit_amount,
  account_id,
  note,
  debit,
  credit,
  connect_with_id,
  voucher_pattern_id,
  voucher_type,
}) => {
  let data = {
    currency_id,
    currency_val,
    feedback,
    seller_id,
    connect_with,
    debit_amount,
    debit_total,
    credit_total,
    credit_amount,
    account_id,
    note,
    debit,
    credit,
    connect_with_id,
    voucher_type,
  };

  let res = null;
  let responseData = null;
  let voucher = await ApiActions.read("voucher_main_data", {
    conditions: [
      {
        type: "and",
        conditions: [["connect_with_id", "=", connect_with_id]],
      },
    ],
  });

  if (voucher?.result?.length) {
    await ApiActions.update("voucher_main_data", {
      conditions: [
        { type: "and", conditions: [["id", "=", voucher?.result?.at(0)?.id]] },
      ],
      updates: { ...data, id: voucher?.result?.at(0)?.id },
    });

    responseData = voucher?.result?.at(0);
  } else {
    if (!voucher_type) {
      const response = await ApiActions.read("voucher_pattern", {
        conditions: [
          { type: "and", conditions: [["id", "=", voucher_pattern_id]] },
        ],
      });
      voucher_type = response?.result?.at(0)?.code;
    }

    if (!voucher_type) {
      toast.error(
        "failed to generate Voucher, You should to choose the voucher type"
      );
      return;
    }

    const response = await ApiActions.read("voucher_main_data", {
      conditions: [
        { type: "and", conditions: [["voucher_type", "=", +voucher_type]] },
      ],
      limit: 1,
      sorts: [{ column: "number", order: "DESC", nulls: "last" }],
    });

    res = await ApiActions.insert("voucher_main_data", {
      data: { ...data, number: +response?.result?.at(0)?.number + 1 || 1 },
    });
    responseData = res?.record;
  }
  return responseData;
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
  let {
    currency_id: defaultCurrency,
    currency_val,
    contract_value,
    current_securing_value,
    cost_center_id,
    client_id,
    revenue_account_id,
    insurance_account_id,
    discount_account_id,
    created_at,
    discount_value,
  } = values;

  let currency_id = defaultCurrency;
  if (!currency_id) {
    const currency = await ApiActions.read("currency", {
      conditions: [{ type: "and", conditions: [["code", "=", "AED"]] }],
    });
    currency_id = currency?.result?.at(0)?.id;
    currency_val = 1;
  }

  let note = `Contract rent number ${contractNumber} ${assetsType} name ${assetsTypeNumber} building name ${buildingNumber}`;
  let debit = +contract_value;

  if (current_securing_value) {
    debit += +current_securing_value;
  }

  if (discount_value) {
    debit += +discount_value;
  }

  let credit = debit;

  let difference = credit - debit;

  if (difference !== 0) return;

  let gridRows = [];

  gridRows.push({
    created_at,
    account_id: client_id,
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
    observe_account_id: client_id,
    credit: contract_value,
    currency_id,
    cost_center_id,
    note,
  });

  if (current_securing_value) {
    gridRows.push({
      created_at,
      account_id: client_id,
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
      observe_account_id: client_id,
      credit: current_securing_value,
      currency_id,
      cost_center_id,
      note,
    });
  }
  if (discount_account_id && discount_value) {
    gridRows.push({
      created_at,
      account_id: discount_account_id,
      debit: discount_value,
      observe_account_id: client_id,
      credit: 0,
      currency_id,
      cost_center_id,
      note,
    });

    gridRows.push({
      created_at,
      account_id: client_id,
      debit: 0,
      observe_account_id: discount_account_id,
      credit: discount_value,
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

  let entry_main_data_id = response?.id;

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

// generateBillsFromInstallment
export const generateBillsFromInstallment = async ({
  installment,
  installment_grid,
  installment_id,
  contract_id,
}) => {
  const { currency_id } = installment;
  const responseBillPattern = await ApiActions.read("bill_pattern", {
    conditions: [
      { type: "and", conditions: [["code", "=", RECEIVED_CHQ_CODE]] },
    ],
  });

  const pattern = responseBillPattern?.result?.at(0);
  const bills = [];

  for (const item of installment_grid) {
    let internal_number = item?.number;
    delete item?.number;
    bills.push({
      ...item,
      internal_number,
      installment_id,
      currency_id,
      type: RECEIVED_CHQ_CODE,
    });
  }

  if (!bills?.length) return;

  const prevGrid = await ApiActions.read("bill", {
    conditions: [
      {
        type: "and",
        conditions: [["installment_id", "=", installment_id]],
      },
      {
        type: "and",
        conditions: [["type", "=", +pattern?.code]],
      },
    ],
  });

  let prevCount = prevGrid?.result?.length;
  let currentCount = bills?.length;

  let length = Math.max(prevCount, currentCount);

  for (let i = 0; i < length; i++) {
    let item = bills?.[i];
    let prevItem = prevGrid?.result?.[i];

    if (JSON.stringify(item) === JSON.stringify(prevItem)) continue;

    if (item && prevItem) {
      await ApiActions.update("bill", {
        conditions: [{ type: "and", conditions: [["id", "=", prevItem?.id]] }],
        updates: item,
      });
    } else {
      if (item) {
        await ApiActions.insert("bill", {
          data: item,
        });
      } else {
        await ApiActions.remove("bill", {
          conditions: [
            { type: "and", conditions: [["id", "=", prevItem?.id]] },
          ],
        });
      }
    }
  }
};

export const generateVoucherFromBill = async (values, pattern) => {
  const {
    amount,
    currency_id,
    currency_val,
    client_id,
    observe_account_id,
    cost_center_id,
    connect_with,
    connect_with_id,
    note,
    due_date,
  } = values;

  const isCredit = pattern?.paper_type === 2 ? "credit" : "debit";
  const isCreditAmount =
    isCredit === "credit" ? "credit_amount" : "debit_amount";
  const isCreditTotal = isCredit === "debit" ? "credit_total" : "debit_total";

  const response = await insertIntoVoucher({
    created_at: due_date,
    currency_id,
    currency_val,
    connect_with,
    account_id: client_id,
    note,
    debit: 0,
    credit: 0,
    connect_with_id,
    voucher_type: RECEIVED_VOUCHER_CODE,
    debit_amount: 0,
    credit_total: 0,
    credit_amount: 0,
    debit_total: 0,
    [isCredit]: amount,
    [isCreditAmount]: amount,
    [isCreditTotal]: amount,
  });

  const grid = [
    {
      account_id: observe_account_id,
      currency_id,
      cost_center_id,
      debit: 0,
      credit: 0,
      voucher_main_data_id: response?.id,
      [isCredit]: amount,
    },
  ];

  if (response?.id) {
    await insertIntoGrid({
      grid,
      itemId: response?.id,
      tableName: "voucher_main_data",
      gridTableName: "voucher_grid_data",
      itemSearchName: "voucher_main_data_id",
    });
  }

  if (pattern?.auto_gen_entries) {
    // Generate A Constraint
    const responseEntry = await insertIntoEntry({
      currency_id,
      note,
      debit: 0,
      credit: 0,
      difference: 0,
      currency_val,
      created_from: CREATED_FROM.bill,
      created_from_id: response?.id,
      [isCredit]: amount,
    });

    if (responseEntry?.id) {
      const gridEntry = [];

      gridEntry.push({
        account_id: client_id,
        observe_account_id: observe_account_id,
        currency_id,
        cost_center_id,
        note,
        debit: 0,
        credit: 0,
        [isCredit]: amount,
      });

      gridEntry.push({
        account_id: observe_account_id,
        observe_account_id: client_id,
        currency_id,
        cost_center_id,
        note,
        debit: 0,
        credit: 0,
        [isCredit === "credit" ? "debit" : "credit"]: amount,
      });

      await insertIntoGrid({
        grid: gridEntry,
        itemId: responseEntry?.id,
        tableName: "entry_main_data",
        gridTableName: "entry_grid_data",
        itemSearchName: "entry_main_data_id",
      });
    }
  }
};
