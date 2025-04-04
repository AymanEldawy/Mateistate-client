import { ApiActions } from "./api";
import { toast } from "react-toastify";
import {
  CHQ_RECEIVED_CODE,
  CONNECT_WITH_CONTRACT_CODE,
  CREATED_FROM_CHQ, CREATED_FROM_CONTRACT, DEFAULT_CURRENCY_CODE
} from "Helpers/GENERATE_STARTING_DATA";
import { getAccountReceivable } from "./global-read";

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
  is_first_batch,
  created_from_code,
}, additionalCondition = {}) => {
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
    created_from_code,
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
        additionalCondition
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
      ...data,
      number,
    });
    responseData = res?.record;
  }
  return responseData;
};

// Insert into grid
export const insertIntoGrid = async ({
  grid,
  itemId,
  gridTableName,
  itemSearchName,
  order
}) => {
  let params = {
    conditions: [
      {
        type: "and",
        conditions: [[itemSearchName, "=", itemId]],
      },
    ],
  }
  if (order) {
    params.sorts = [{ column: "number", order: "ASC", nulls: "last" }]
  }

  const prevGrid = await ApiActions.read(gridTableName, params);

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
          ...item,
          [itemSearchName]: itemId,
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
      ...data,
      number: +response?.result?.at(0)?.number + 1 || 1,
    });
    responseData = res?.record;
  }
  return responseData;
};

// generate Entry From Contract
export const generateEntryFromContract = async ({
  contract,
  contractId,
  commission,
  pattern,
  note,
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
    vat_value,
    vat_account_id,
    final_price,
    price_before_vat,
    code
  } = contract;

  let currency_id = defaultCurrency;
  if (!currency_id) {
    const currency = await ApiActions.read("currency", {
      conditions: [
        { type: "and", conditions: [["code", "=", DEFAULT_CURRENCY_CODE]] },
      ],
    });
    currency_id = currency?.result?.at(0)?.id;
    currency_val = 1;
  }

  let debit = +final_price;

  if (current_securing_value) {
    debit += +current_securing_value;
  }
  if (vat_value) {
    debit += +vat_value;
  }

  let credit = debit;

  let difference = credit - debit;

  if (difference !== 0) return;

  let gridRows = [];

  if (
    commission?.commission_percentage &&
    commission?.commission_from_owner_account_id &&
    commission?.commission_account_id
  ) {

    let ownerTotal =
      final_price -
      ((commission?.commission_percentage / 100) * final_price).toFixed(2);
    let revenueTotal = (final_price - ownerTotal).toFixed(2);

    gridRows.push({
      created_at,
      account_id: client_id,
      debit: Math.abs(revenueTotal),
      observe_account_id: commission?.commission_account_id,
      credit: 0,
      currency_id,
      cost_center_id,
      note,
      number: 1,
    });

    // revenue
    gridRows.push({
      created_at,
      account_id: commission?.commission_account_id,
      debit: 0,
      observe_account_id: client_id,
      credit: Math.abs(revenueTotal),
      currency_id,
      cost_center_id,
      note,
      number: 2,

    });

    gridRows.push({
      created_at,
      account_id: client_id,
      debit: Math.abs(ownerTotal),
      observe_account_id: commission?.commission_from_owner_account_id,
      credit: 0,
      currency_id,
      cost_center_id,
      note,
      number: 3,
    });

    // owner
    gridRows.push({
      created_at,
      account_id: commission?.commission_from_owner_account_id,
      debit: 0,
      observe_account_id: client_id,
      credit: Math.abs(ownerTotal),
      currency_id,
      cost_center_id,
      note,
      number: 4,
    });


  } else {

    gridRows.push({
      created_at,
      account_id: client_id,
      debit: Math.abs(final_price),
      observe_account_id: revenue_account_id,
      credit: 0,
      currency_id,
      cost_center_id,
      note,
      number: 5,

    });

    gridRows.push({
      created_at,
      account_id: revenue_account_id,
      debit: 0,
      observe_account_id: client_id,
      credit: Math.abs(final_price),
      currency_id,
      cost_center_id,
      note,
      number: 6,

    });
  }

  if (current_securing_value) {
    gridRows.push({
      created_at,
      account_id: client_id,
      debit: Math.abs(current_securing_value),
      observe_account_id: insurance_account_id,
      credit: 0,
      currency_id,
      cost_center_id,
      note,
      number: 7,

    });

    gridRows.push({
      created_at,
      account_id: insurance_account_id,
      debit: 0,
      observe_account_id: client_id,
      credit: Math.abs(current_securing_value),
      currency_id,
      cost_center_id,
      note,
      number: 8,

    });
  }
  if (vat_value && vat_account_id) {
    gridRows.push({
      created_at,
      account_id: client_id,
      debit: Math.abs(vat_value),
      observe_account_id: vat_account_id,
      credit: 0,
      currency_id,
      cost_center_id,
      note,
      number: 9,
    });

    gridRows.push({
      created_at,
      account_id: vat_account_id,
      debit: 0,
      observe_account_id: client_id,
      credit: Math.abs(vat_value),
      currency_id,
      cost_center_id,
      note,
      number: 10,
    });
  }
  if (discount_account_id && discount_value) {
    gridRows.push({
      created_at,
      account_id: discount_account_id,
      debit: Math.abs(discount_value),
      observe_account_id: client_id,
      credit: 0,
      currency_id,
      cost_center_id,
      note,
      number: 11,

    });

    gridRows.push({
      created_at,
      account_id: client_id,
      debit: 0,
      observe_account_id: discount_account_id,
      credit: Math.abs(discount_value),
      currency_id,
      cost_center_id,
      note,
      number: 12,

    });
  }

  const response = await insertIntoEntry({
    created_at: +pattern?.record_date_created === 1 ? contract?.start_duration_date : contract?.issue_date,
    currency_id,
    currency_val,
    note,
    debit,
    credit,
    difference,
    created_from: CREATED_FROM_CONTRACT,
    created_from_code: code,
    created_from_id: contractId,
  }, { type: 'and', conditions: [['created_from', '=', CREATED_FROM_CONTRACT]] });

  let entry_main_data_id = response?.id;

  if (entry_main_data_id) {
    insertIntoGrid({
      itemId: entry_main_data_id,
      grid: gridRows,
      gridTableName: "entry_grid_data",
      tableName: "entry_main_data",
      itemSearchName: "entry_main_data_id",
      order: true,
    });
    console.log("🚀 ~ gridRows:", gridRows)
  }
};

// generate Entry From Voucher Building
export const generateEntryFromVoucher = async ({
  values,
  created_from,
  created_from_id,
  grid,
  created_from_code,
}) => {
  let {
    currency_id,
    currency_val,
    note,
    difference,
    account_id,
    cost_center_id,
    debit_amount: debit = 0,
    credit_amount: credit = 0
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
    created_from_code,
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
    debit: Math.abs(debit) || 0,
    credit: Math.abs(credit) || 0,
    entry_main_data_id,
    number: 1,
  });
  let count = 1
  for (const item of grid) {
    count++
    gridRows.push({
      account_id: item?.account_id,
      observe_account_id: account_id,
      currency_id,
      cost_center_id,
      note,
      debit: Math.abs(debit) || 0,
      credit: Math.abs(credit) || 0,
      entry_main_data_id,
      number: count,
    });
  }

  console.log(values, gridRows, 'vouchers');


  insertIntoGrid({
    itemId: entry_main_data_id,
    grid: gridRows,
    tableName: "entry_main_data",
    gridTableName: "entry_grid_data",
    itemSearchName: "entry_main_data_id",
    order: true,
  });
};

// generateChequesFromInstallment
export const generateChequesFromInstallment = async ({
  installment,
  installment_grid,
  installment_id,
  contract_id,
  cost_center_id,
}) => {
  console.log('called here cheque', installment_grid);
  if (!installment_grid?.length) return;


  const { currency_id } = installment;
  const responseChequePattern = await ApiActions.read("cheque_pattern", {
    conditions: [
      { type: "and", conditions: [["code", "=", CHQ_RECEIVED_CODE]] },
    ],
  });

  const pattern = responseChequePattern?.result?.at(0);
  console.log("🚀 ~ pattern:", pattern)

  // if (!pattern?.gen_entries) return;

  let observe_account_id =
    installment_grid?.at(0)?.observe_account_id ||
    pattern?.default_account_id ||
    (await getAccountReceivable());

  const cheques = [];

  for (const item of installment_grid) {
    let number = item?.number;
    cheques.push({
      ...item,
      number,
      installment_id,
      currency_id,
      code: CHQ_RECEIVED_CODE,
      connect_with: CONNECT_WITH_CONTRACT_CODE,
      connect_with_id: contract_id,
      cost_center_id,
      observe_account_id,
      gen_entries: true,
      cheque_pattern_id: pattern?.id,
    });
  }

  if (!cheques?.length) return;

  const prevGrid = await ApiActions.read("cheque", {
    conditions: [
      {
        type: "and",
        conditions: [["installment_id", "=", installment_id]],
      },
      {
        type: "and",
        conditions: [["code", "=", +pattern?.code]],
      },
    ],
    sorts: [{ column: "due_date", order: "ASC", nulls: "last" }],
  });

  let prevCount = prevGrid?.result?.length || 0;
  let currentCount = cheques?.length;

  let length = Math.max(prevCount, currentCount);

  let deletedChq = [];
  let insertChq = [];
  let updatedChq = [];

  for (let i = 0; i < length; i++) {
    let item = cheques?.[i];
    let prevItem = prevGrid?.result?.[i];

    if (JSON.stringify(item) === JSON.stringify(prevItem)) continue;

    let chq_id = prevItem?.id;

    if (item && prevItem) {
      delete item?.id;
      const repUpdate = await ApiActions.update("cheque", {
        conditions: [{ type: "and", conditions: [["id", "=", prevItem?.id]] }],
        updates: item,
      });

      if (repUpdate?.success) updatedChq.push(item?.number);
    } else {
      if (item) {
        const resInsert = await ApiActions.insert("cheque", {
          ...item,
          connect_with_id: contract_id,
        });

        if (resInsert?.success) {
          insertChq.push(item?.internal_number);
          chq_id = resInsert?.record?.id;
        }
      } else {
        deletedChq.push(item?.internal_number);
        const resDelete = await ApiActions.remove("cheque", {
          conditions: [
            { type: "and", conditions: [["id", "=", prevItem?.id]] },
          ],
        });
        if (resDelete?.success) {
          const res = await ApiActions.update("entry_main_data", {
            conditions: [
              { type: "and", conditions: [["created_from_id", "=", chq_id]] },
            ],
            updates: { is_deleted: true },
          });
          if (res?.success) chq_id = null;
        } else {
          deletedChq?.filter((c) => c !== item?.internal_number);
        }
      }
    }
    if (chq_id) {
      // Entry;
      if (
        +prevItem?.amount === +item?.amount &&
        prevItem?.account_id === item?.account_id &&
        prevItem?.observe_account_id === item?.observe_account_id
      )
        continue;

      await generateEntryFromCheque({
        created_from_id: chq_id,
        created_from: CREATED_FROM_CHQ,
        created_from_code: +pattern?.code,
        values: item,
      });
    }
  }

  // if (deletedChq?.length) {
  //   toast.success(`Successfully deleted Cheques numbers ${deletedChq}`, {
  //     autoClose: false,
  //   });
  // }
  // if (updatedChq?.length) {
  //   toast.success(`Successfully updated Cheques numbers ${updatedChq}`, {
  //     autoClose: false,
  //   });
  // }
  // if (insertChq?.length) {
  //   toast.success(`Successfully inserted Cheques numbers ${insertChq}`, {
  //     autoClose: false,
  //   });
  // }
  return;
};

// generate Entry From Cheque
export const generateEntryFromCheque = async ({
  values,
  created_from,
  created_from_id,
  created_from_code,
}) => {
  let {
    account_id,
    amount,
    currency_id,
    currency_val,
    cost_center_id,
    date,
    note: note1,
    observe_account_id,
    number,
    internal_number
  } = values;

  let note = `Generated Entry From cheque number ${internal_number || number || 'no number'} amount ${amount}`;

  let entry = {
    created_at: date,
    currency_id: currency_id,
    currency_val: currency_val || 1,
    note,
    debit: Math.abs(amount), // cash
    credit: Math.abs(amount), // customer
    difference: 0,
    created_from,
    created_from_id,
    created_from_code,
    internal_number
  };

  // insert into Entry
  const response = await insertIntoEntry(entry);

  if (response?.id) {
    const grid = [
      {
        account_id: observe_account_id,
        observe_account_id: account_id,
        currency_id,
        cost_center_id,
        debit: Math.abs(amount),
        credit: 0,
        note,
        number: 1
      },

      {
        account_id,
        observe_account_id,
        currency_id,
        cost_center_id,
        debit: 0,
        credit: Math.abs(amount),
        note,
        number: 2
      },
    ];

    await insertIntoGrid({
      grid,
      itemId: response?.id,
      tableName: "entry_main_data",
      gridTableName: "entry_grid_data",
      itemSearchName: "entry_main_data_id",
      order: true,
    });

    return;
  }
};

export const generateEntryFromTermination = async ({
  values,
  created_from,
  created_from_id,
  created_from_code,
  contractFirstTabData,
  contract
}) => {

  let {
    gen_entries,
    owner_rest_amount,
    owner_total_amount,
    revenue_note,
    termination_date,
  } = values;

  if (!gen_entries) return;

  let { client_id, number, end_duration_date, revenue_account_id } = contractFirstTabData;

  const currencyResponse = await ApiActions.read("currency", {
    conditions: [
      { type: "and", conditions: [["code", "=", DEFAULT_CURRENCY_CODE]] },
    ],
  });
  let currency_id = currencyResponse?.result?.at(0)?.id;

  let note = `Generated Entry From Contract number ${number} Termination`;

  let amount = owner_rest_amount;

  let entry = {
    created_at: termination_date,
    currency_id: currency_id,
    currency_val: 1,
    note,
    debit: Math.abs(amount),
    credit: Math.abs(amount),
    difference: 0,
    created_from,
    created_from_id,
    created_from_code,
  };

  let observe_account_id = null;
  let account_id = null;
  if (
    Date.parse(new Date(termination_date)) >
    Date.parse(new Date(end_duration_date))
  ) {
    account_id = client_id;
    observe_account_id = revenue_account_id;
  } else {
    account_id = revenue_account_id;
    observe_account_id = client_id;
  }

  if (!account_id) return;

  // insert into Entry
  const response = await insertIntoEntry(entry);

  if (response?.id) {
    const grid = [
      {
        account_id,
        observe_account_id,
        currency_id,
        // cost_center_id,
        debit: Math.abs(amount),
        credit: 0,
        note,
        number: 1
      },

      {
        account_id: observe_account_id,
        observe_account_id: account_id,
        currency_id,
        // cost_center_id,
        debit: 0,
        credit: Math.abs(amount),
        note,
        number: 2
      },
    ];

    await insertIntoGrid({
      grid,
      itemId: response?.id,
      tableName: "entry_main_data",
      gridTableName: "entry_grid_data",
      itemSearchName: "entry_main_data_id",
      order: true,
    });

    return;
  }
};

export const generateEntryFromTerminationFines = async ({
  values,
  created_from,
  created_from_id,
  created_from_code,
  contractFirstTabData,
}) => {


  let { client_id: account_id, number, cost_center_id } = contractFirstTabData;

  if (!account_id) return;

  const currencyResponse = await ApiActions.read("currency", {
    conditions: [
      { type: "and", conditions: [["code", "=", DEFAULT_CURRENCY_CODE]] },
    ],
  });

  let currency_id = currencyResponse?.result?.at(0)?.id;

  let note = `Generated Entry From Contract number ${number} Termination Fines`;
  let amount = 0
  const grid = []
  let count = 1
  for (const value of values) {
    if (value?.fee_amount && value?.account_id) {
      amount += +value?.fee_amount;

      grid.push({
        account_id,
        observe_account_id: value?.account_id,
        currency_id,
        cost_center_id,
        debit: Math.abs(value?.fee_amount),
        credit: 0,
        note: value?.notes,
        number: count
      });
      count += 1
      grid.push({
        account_id: value?.account_id,
        observe_account_id: account_id,
        currency_id,
        cost_center_id,
        debit: 0,
        credit: Math.abs(value?.fee_amount),
        note: value?.notes,
        number: count
      })
      count += 1
    }
  }


  let entry = {
    created_at: new Date(),
    currency_id: currency_id,
    currency_val: 1,
    note,
    debit: Math.abs(amount),
    credit: Math.abs(amount),
    difference: 0,
    created_from,
    created_from_id,
    created_from_code,
  };

  // insert into Entry
  const response = await insertIntoEntry(entry, { type: 'and', conditions: [['created_from', '=', created_from]] });

  if (response?.id) {
    await insertIntoGrid({
      grid,
      itemId: response?.id,
      tableName: "entry_main_data",
      gridTableName: "entry_grid_data",
      itemSearchName: "entry_main_data_id",
      order: true,
    });

    return;
  }
};

export const generateEntryFromFees = async ({
  values,
  created_from,
  created_from_id,
  created_from_code,
  contractFirstTabData,
}) => {


  let { client_id: account_id, number, cost_center_id } = contractFirstTabData;

  if (!account_id) return;

  const currencyResponse = await ApiActions.read("currency", {
    conditions: [
      { type: "and", conditions: [["code", "=", DEFAULT_CURRENCY_CODE]] },
    ],
  });

  let currency_id = currencyResponse?.result?.at(0)?.id;

  let note = `Generated Entry From Contract number ${number} Fees`;
  let amount = 0
  const grid = []
  let count = 1
  for (const value of values) {
    if (value?.fee_amount && value?.account_id) {
      amount += +value?.fee_amount;

      grid.push({
        account_id,
        observe_account_id: value?.account_id,
        currency_id,
        cost_center_id,
        debit: value?.fee_amount,
        credit: 0,
        note: value?.notes,
        number: count
      });
      count += 1
      grid.push({
        account_id: value?.account_id,
        observe_account_id: account_id,
        currency_id,
        cost_center_id,
        debit: 0,
        credit: Math.abs(value?.fee_amount),
        note: value?.notes,
        number: count
      })
      count += 1
    }
  }


  let entry = {
    created_at: new Date(),
    currency_id: currency_id,
    currency_val: 1,
    note,
    debit: Math.abs(amount),
    credit: Math.abs(amount),
    difference: 0,
    created_from,
    created_from_id,
    created_from_code,
  };

  // insert into Entry
  const response = await insertIntoEntry(entry, { type: 'and', conditions: [['created_from', '=', created_from]] });

  if (response?.id) {
    await insertIntoGrid({
      grid,
      itemId: response?.id,
      tableName: "entry_main_data",
      gridTableName: "entry_grid_data",
      itemSearchName: "entry_main_data_id",
      order: true,
    });

    return;
  }
};

// generate Entry From Cheque operation
export const generateEntryFromChqOperation = async ({
  values,
  created_from,
  created_from_id,
  created_from_code,
}) => {
  let {
    amount,
    cost_center_id,
    credit_account_id,
    currency_id,
    currency_val,
    debit_account_id,
    note,
    created_at,
  } = values;

  let entry = {
    created_at,
    currency_id: currency_id,
    currency_val: currency_val || 1,
    note,
    debit: Math.abs(amount), // cash
    credit: Math.abs(amount), // customer
    difference: 0,
    created_from,
    created_from_id,
    created_from_code,
  };

  // insert into Entry
  const response = await insertIntoEntry(entry);

  if (response?.id) {
    const grid = [
      {
        account_id: debit_account_id,
        observe_account_id: credit_account_id,
        currency_id,
        cost_center_id,
        debit: Math.abs(amount),
        credit: 0,
        note,
        number: 1
      },

      {
        account_id: credit_account_id,
        observe_account_id: debit_account_id,
        currency_id,
        cost_center_id,
        debit: 0,
        credit: Math.abs(amount),
        note,
        number: 2
      },
    ];

    await insertIntoGrid({
      grid,
      itemId: response?.id,
      tableName: "entry_main_data",
      gridTableName: "entry_grid_data",
      itemSearchName: "entry_main_data_id",
      order: true,
    });

    return;
  }
};

// generate Entry From Reservation
export const generateEntryFromReservation = async ({
  values,
  created_from,
  created_from_id,
  created_from_code,
}) => {
  let {
    payment_amount,
    cost_center_id,
    credit_account_id,
    debit_account_id,
    currency_id,
    currency_val,
    note,
    created_at,
  } = values;

  let entry = {
    created_at,
    currency_id: currency_id,
    currency_val: currency_val || 1,
    note,
    debit: Math.abs(payment_amount), // cash
    credit: Math.abs(payment_amount), // customer
    difference: 0,
    created_from,
    created_from_id,
    created_from_code,
  };

  // insert into Entry
  const response = await insertIntoEntry(entry);

  if (response?.id) {
    const grid = [
      {
        account_id: debit_account_id,
        observe_account_id: credit_account_id,
        currency_id,
        cost_center_id,
        debit: payment_amount,
        credit: 0,
        note,
        number: 1
      },

      {
        account_id: credit_account_id,
        observe_account_id: debit_account_id,
        currency_id,
        cost_center_id,
        debit: 0,
        credit: Math.abs(payment_amount),
        note,
        number: 2
      },
    ];

    await insertIntoGrid({
      grid,
      itemId: response?.id,
      tableName: "entry_main_data",
      gridTableName: "entry_grid_data",
      itemSearchName: "entry_main_data_id",
      order: true,
    });

    return;
  }
};

export const deleteEntry = async (id) => {
  await ApiActions.remove("entry_main_data", {
    conditions: [{ type: "and", conditions: [["id", "=", id]] }],
  });
};

// Insert into grid
export const insertIntoUserConnect = async ({
  ids,
  userId,
  name,
  searchKey,
}) => {
  const prevGrid = await ApiActions.read(name, {
    conditions: [
      {
        type: "and",
        conditions: [["user_id", "=", userId]],
      },
    ],
  });

  let length = Math.max(ids?.length, prevGrid?.result?.length || 0);

  for (let i = 0; i < length; i++) {
    let prevItem = prevGrid?.result?.[i];
    let id = ids?.[i];
    if (id === prevItem?.[searchKey]) continue;

    if (id) {
      await ApiActions.insert(name, {
        [searchKey]: id,
        user_id: userId,
      });
    } else {
      await ApiActions.remove(name, {
        conditions: [{ type: "and", conditions: [["id", "=", prevItem?.id]] }],
      });
    }
  }
};

// generate Entry From Bill
export const generateEntryFromBill = async ({
  values,
  created_from,
  created_from_id,
  created_from_code,
  pattern,
}) => {
  const {
    currency_id = null,
    currency_val = 1,
    note = "",
    bill_date = new Date().toISOString(),
    subtotal = 0,
    total = 0,
    discounts = 0,
    extras = 0,
    vat_amount = 0,
  } = values?.bill || {};

  const totalAmount = total // subtotal + extras + vat_amount - discounts;
  // const totalAmount = subtotal + extras + vat_amount - discounts;

  let entry = {
    created_at: bill_date,
    currency_id,
    currency_val,
    note,
    debit: Math.abs(totalAmount),
    credit: Math.abs(totalAmount),
    difference: 0,
    created_from,
    created_from_id,
    created_from_code,
  };

  const type = +pattern?.bill_type;
  // insert into Entry
  const response = await insertIntoEntry(entry);
  const entry_main_data_id = response?.id;

  if (type === 1) {
    return await generateEntryFromBilInput({
      values,
      pattern,
      entry_main_data_id,
    });
  }

  if (type === 2) {
    return await generateEntryFromBilOutput({
      values,
      pattern,
      entry_main_data_id,
    });
  }
};

export const generateEntryFromBilInput = async ({
  values,
  pattern,
  entry_main_data_id,
}) => {
  const {
    customer_account_id,
    material_account_id,
    cost_center_id,
    currency_id,
    currency_val,
    note,
    bill_date,
    total,
    subtotal,
    payment_method: type,
    vat_amount,
    discounts,
    extras,
  } = values?.bill;

  const stock_account_id = pattern?.cash_account_id;
  const cash_account_id = pattern?.cash_account_id;
  let discount_account_id = pattern?.discount_account_id;
  let extra_account_id = pattern?.extra_account_id;
  const vat_account_id =
    values?.bill?.vat_account_id || pattern?.vat_account_id;

  const gridRows = [];
  const defaultRow = {
    created_at: bill_date,
    currency_id,
    currency_val,
    cost_center_id,
    note,
  };

  const credit_account_id = +type === 2 ? cash_account_id : customer_account_id;
  let observe_discount_account_id = credit_account_id;
  let observe_extras_account_id = credit_account_id;

  gridRows.push({
    ...defaultRow,
    account_id: material_account_id,
    observe_account_id: credit_account_id,
    debit: Math.abs(subtotal),
    credit: 0,
  });

  gridRows.push({
    ...defaultRow,
    account_id: credit_account_id,
    observe_account_id: material_account_id,
    debit: 0,
    credit: Math.abs(subtotal),
  });

  // If there is a VAT
  if (vat_amount) {
    gridRows.push({
      ...defaultRow,
      account_id: vat_account_id,
      observe_account_id: credit_account_id,
      debit: Math.abs(vat_amount),
      credit: 0,
    });

    gridRows.push({
      ...defaultRow,
      account_id: credit_account_id,
      observe_account_id: vat_account_id,
      debit: 0,
      credit: Math.abs(vat_amount),
    });
  }
  // If there is a DISCOUNTS
  if (discounts) {
    for (const row of values?.bill_discounts_details) {
      if (row?.discount) {
        discount_account_id = row?.account_id || discount_account_id;
        observe_discount_account_id =
          row?.observe_account_id || observe_discount_account_id;
      }
      gridRows.push({
        ...defaultRow,
        account_id: discount_account_id,
        observe_account_id: observe_discount_account_id,
        debit: discounts,
        credit: 0,
        cost_center_id: row?.cost_center_id || cost_center_id,
        note: row?.note || `note`,
      });

      gridRows.push({
        ...defaultRow,
        account_id: observe_discount_account_id,
        observe_account_id: discount_account_id,
        debit: 0,
        credit: Math.abs(discounts),
        cost_center_id: row?.cost_center_id || cost_center_id,
        note: row?.note || `note`,
      });
    }
  }
  // If there is a EXTRAS
  if (extras) {
    let count = 1
    for (const row of values?.bill_discounts_details) {
      if (row?.extra) {
        extra_account_id = row?.account_id || extra_account_id;
        observe_extras_account_id =
          row?.observe_account_id || observe_extras_account_id;

        gridRows.push({
          ...defaultRow,
          account_id: extra_account_id,
          observe_account_id: observe_extras_account_id,
          debit: extras,
          credit: 0,
          cost_center_id: row?.cost_center_id || cost_center_id,
          note: row?.note || `note`,
          number: count
        });
        count += 1

        gridRows.push({
          ...defaultRow,
          account_id: observe_extras_account_id,
          observe_account_id: extra_account_id,
          debit: 0,
          credit: Math.abs(extras),
          cost_center_id: row?.cost_center_id || cost_center_id,
          note: row?.note || `note`,
          number: count
        });
        count += 1

      }
    }
  }

  await insertIntoGrid({
    itemId: entry_main_data_id,
    grid: gridRows,
    gridTableName: "entry_grid_data",
    tableName: "entry_main_data",
    itemSearchName: "entry_main_data_id",
    order: true,
  });
};

export const generateEntryFromBilOutput = async ({
  values,
  pattern,
  entry_main_data_id,
}) => {
  const {
    customer_account_id,
    material_account_id,
    cost_center_id,
    currency_id,
    currency_val,
    note,
    bill_date,
    total,
    subtotal,
    payment_method: type,
    vat_amount,
    discounts,
    extras,
  } = values?.bill;

  const stock_account_id = pattern?.cash_account_id;
  const cash_account_id = pattern?.cash_account_id;
  const vat_account_id = pattern?.vat_account_id;
  let extra_account_id = pattern?.extra_account_id;
  let discount_account_id = pattern?.discount_account_id;

  const gridRows = [];
  const defaultRow = {
    created_at: bill_date,
    currency_id,
    currency_val,
    cost_center_id,
    note,
  };

  const debit_account_id = +type === 2 ? cash_account_id : customer_account_id;

  let observe_discount_account_id = debit_account_id;
  let observe_extras_account_id = debit_account_id;

  gridRows.push({
    ...defaultRow,
    account_id: debit_account_id,
    observe_account_id: material_account_id,
    debit: Math.abs(subtotal),
    credit: 0,
  });

  gridRows.push({
    ...defaultRow,
    account_id: material_account_id,
    observe_account_id: debit_account_id,
    debit: 0,
    credit: Math.abs(subtotal),
  });

  // If there is a VAT
  if (vat_amount) {
    gridRows.push({
      ...defaultRow,
      account_id: debit_account_id,
      observe_account_id: vat_account_id,
      debit: Math.abs(vat_amount),
      credit: 0,
    });

    gridRows.push({
      ...defaultRow,
      account_id: vat_account_id,
      observe_account_id: debit_account_id,
      debit: 0,
      credit: Math.abs(vat_amount),
    });
  }
  // If there is a DISCOUNTS
  if (discounts) {
    for (const row of values?.bill_discounts_details) {
      if (row?.discount) {
        discount_account_id = row?.account_id || discount_account_id;
        observe_discount_account_id =
          row?.observe_account_id || observe_discount_account_id;

        gridRows.push({
          ...defaultRow,
          account_id: observe_discount_account_id,
          observe_account_id: discount_account_id,
          debit: Math.abs(discounts),
          credit: 0,
          cost_center_id: row?.cost_center_id || cost_center_id,
          note: row?.note || `note`,
        });
        gridRows.push({
          ...defaultRow,
          account_id: discount_account_id,
          observe_account_id: observe_discount_account_id,
          debit: 0,
          credit: Math.abs(discounts),
          cost_center_id: row?.cost_center_id || cost_center_id,
          note: row?.note || `note`,
        });
      }
    }
  }
  // If there is a EXTRAS
  if (extras) {
    let count = 1
    for (const row of values?.bill_discounts_details) {
      if (row?.extra) {
        extra_account_id = row?.account_id || extra_account_id;
        observe_extras_account_id =
          row?.observe_account_id || observe_extras_account_id;

        gridRows.push({
          ...defaultRow,
          account_id: observe_extras_account_id,
          observe_account_id: extra_account_id,
          debit: Math.abs(extras),
          credit: 0,
          cost_center_id: row?.cost_center_id || cost_center_id,
          note: row?.note || `note`,
          number: count
        });
        count += 1

        gridRows.push({
          ...defaultRow,
          account_id: extra_account_id,
          observe_account_id: observe_extras_account_id,
          debit: 0,
          credit: Math.abs(extras),
          cost_center_id: row?.cost_center_id || cost_center_id,
          note: row?.note || `note`,
          number: count
        });
        count += 1

      }
    }
  }

  await insertIntoGrid({
    itemId: entry_main_data_id,
    grid: gridRows,
    gridTableName: "entry_grid_data",
    tableName: "entry_main_data",
    itemSearchName: "entry_main_data_id",
    order: true,
  });
};
