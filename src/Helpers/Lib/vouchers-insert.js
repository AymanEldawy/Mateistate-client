import { ApiActions } from "./api";
import { toast } from "react-toastify";
import {
  CHQ_RECEIVED_CODE,
  CONNECT_WITH_CONTRACT_CODE,
  CREATED_FROM_CHQ_CODE,
  CREATED_FROM_CONTRACT_CODE,
  DEFAULT_CURRENCY_CODE,
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
  should_update,
  is_first_batch,
  created_from_code,
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
  values,
  contractId,
  contractNumber,
  assetsType,
  assetsTypeNumber,
  buildingNumber,
  should_update,
  commission,
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
      conditions: [
        { type: "and", conditions: [["code", "=", DEFAULT_CURRENCY_CODE]] },
      ],
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

  if (
    commission?.commission_percentage &&
    commission?.commission_from_owner_account_id &&
    commission?.commission_account_id
  ) {
    let ownerTotal =
      contract_value -
      ((commission?.commission_percentage / 100) * contract_value).toFixed(2);
    let revenueTotal = (contract_value - ownerTotal).toFixed(2);

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

    // revenue
    gridRows.push({
      created_at,
      account_id: commission?.commission_account_id,
      debit: 0,
      observe_account_id: client_id,
      credit: revenueTotal,
      currency_id,
      cost_center_id,
      note,
    });

    // owner
    gridRows.push({
      created_at,
      account_id: commission?.commission_from_owner_account_id,
      debit: 0,
      observe_account_id: client_id,
      credit: ownerTotal,
      currency_id,
      cost_center_id,
      note,
    });
  } else {
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
  }

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
    created_from: CREATED_FROM_CONTRACT_CODE,
    created_from_id: contractId,
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
  created_from_code,
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

// generateChequesFromInstallment
export const generateChequesFromInstallment = async ({
  installment,
  installment_grid,
  installment_id,
  contract_id,
  cost_center_id,
}) => {
  if (!installment_grid?.length) return;

  const { currency_id } = installment;
  const responseChequePattern = await ApiActions.read("cheque_pattern", {
    conditions: [
      { type: "and", conditions: [["code", "=", CHQ_RECEIVED_CODE]] },
    ],
  });

  const pattern = responseChequePattern?.result?.at(0);

  if (!pattern?.gen_entries) return;

  let observe_account_id =
    installment_grid?.at(0)?.observe_account_id ||
    pattern?.default_account_id ||
    (await getAccountReceivable());

  const cheques = [];

  for (const item of installment_grid) {
    // let internal_number = item?.number;
    // delete item?.number;
    cheques.push({
      ...item,
      // internal_number,
      installment_id,
      currency_id,
      type: CHQ_RECEIVED_CODE,
      connect_with: CONNECT_WITH_CONTRACT_CODE,
      connect_with_id: contract_id,
      cost_center_id,
      observe_account_id,
      gen_entries: true,
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
        conditions: [["type", "=", +pattern?.code]],
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

      if (repUpdate?.success) updatedChq.push(item?.internal_number);
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
        created_from: CREATED_FROM_CHQ_CODE,
        created_from_code: +pattern?.code,
        values: item,
      });
    }
  }

  if (deletedChq?.length) {
    toast.success(`Successfully deleted Cheques numbers ${deletedChq}`, {
      autoClose: false,
    });
  }
  if (updatedChq?.length) {
    toast.success(`Successfully updated Cheques numbers ${updatedChq}`, {
      autoClose: false,
    });
  }
  if (insertChq?.length) {
    toast.success(`Successfully inserted Cheques numbers ${insertChq}`, {
      autoClose: false,
    });
  }
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
    due_date,
    note: note1,
    observe_account_id,
    internal_number,
  } = values;

  let note = `Generated Entry From chq number ${internal_number} amount ${amount}`;

  let entry = {
    created_at: due_date,
    currency_id: currency_id,
    currency_val: currency_val || 1,
    note,
    debit: amount, // cash
    credit: amount, // customer
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
        account_id: observe_account_id,
        observe_account_id: account_id,
        currency_id,
        cost_center_id,
        debit: amount,
        credit: 0,
        note,
      },

      {
        account_id,
        observe_account_id,
        currency_id,
        cost_center_id,
        debit: 0,
        credit: amount,
        note,
      },
    ];

    await insertIntoGrid({
      grid,
      itemId: response?.id,
      tableName: "entry_main_data",
      gridTableName: "entry_grid_data",
      itemSearchName: "entry_main_data_id",
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
}) => {
  let {
    gen_entries,
    owner_rest_amount,
    owner_total_amount,
    revenue_account_id,
    revenue_note,
    termination_date,
  } = values;

  if (!gen_entries) return;

  let { client_id, number, end_duration_date } = contractFirstTabData;

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
    debit: amount,
    credit: amount,
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
        debit: amount,
        credit: 0,
        note,
      },

      {
        account_id: observe_account_id,
        observe_account_id: account_id,
        currency_id,
        // cost_center_id,
        debit: 0,
        credit: amount,
        note,
      },
    ];

    await insertIntoGrid({
      grid,
      itemId: response?.id,
      tableName: "entry_main_data",
      gridTableName: "entry_grid_data",
      itemSearchName: "entry_main_data_id",
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
    debit: amount, // cash
    credit: amount, // customer
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
        debit: amount,
        credit: 0,
        note,
      },

      {
        account_id: credit_account_id,
        observe_account_id: debit_account_id,
        currency_id,
        cost_center_id,
        debit: 0,
        credit: amount,
        note,
      },
    ];

    await insertIntoGrid({
      grid,
      itemId: response?.id,
      tableName: "entry_main_data",
      gridTableName: "entry_grid_data",
      itemSearchName: "entry_main_data_id",
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
    debit: payment_amount, // cash
    credit: payment_amount, // customer
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
      },

      {
        account_id: credit_account_id,
        observe_account_id: debit_account_id,
        currency_id,
        cost_center_id,
        debit: 0,
        credit: payment_amount,
        note,
      },
    ];

    await insertIntoGrid({
      grid,
      itemId: response?.id,
      tableName: "entry_main_data",
      gridTableName: "entry_grid_data",
      itemSearchName: "entry_main_data_id",
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
  console.log({
    values,
    created_from,
    created_from_id,
    created_from_code,
  });

  const {
    customer_account_id,
    client_account_id,
    // material_account_id,
    cost_center_id,
    currency_id,
    currency_val,
    note,
    bill_date,
    total,
  } = values?.bill;

  // material_account_id debit
  // client_account_id credit
  // material_account_id debit
  // client_account_id credit

  let entry = {
    created_at: bill_date,
    currency_id: currency_id,
    currency_val: currency_val || 1,
    note,
    debit: total,
    credit: total,
    difference: 0,
    created_from,
    created_from_id,
    created_from_code,
  };

  const kind = +values?.bill?.bill_kind;
  const type = +values?.bill?.payment_method;

  const cash_account = pattern?.cash_account_id;
  const material_account_id = pattern?.material_account_id;
  const vat_account_id = pattern?.vat_account_id;

  // cash 2
  // credit 1

  // input 1
  // output 2

  let account_id = null;
  let observe_account_id = null;

  if (kind === 1) {
    if (type === 1) {
      // ١- حالة الشراء النقدي
      // مدين حساب المشتريات
      // دائن حساب الصندوق
      // account_id = client_account_id;
      observe_account_id = cash_account;
    } else if (type === 2) {
      // ٢- الشراء اجل
      // مدين حساب المشتريات
      // دائن حساب المورد
      // account_id = client_account_id;
      observe_account_id = material_account_id;
    }
  } else {
    if (type === 1) {
      // ٢- في حالة البيع الاجل
      // مدين حساب الزبون او العميل
      // دائن حساب المبيعات
      account_id = client_account_id;
      observe_account_id = cash_account;
    } else if (type === 2) {
      account_id = cash_account;
      observe_account_id = client_account_id;
      // في حالة البيع النقدي
      // مدين حساب الصندوق
      // دائن حساب المبيعات (يفتح ضمن شجرة الحسابات هو وحساب المشتريات )
    }
  }

  // insert into Entry
  const response = await insertIntoEntry(entry);

  if (response?.id) {
    const grid = [
      {
        account_id: material_account_id,
        observe_account_id: customer_account_id,
        currency_id,
        cost_center_id,
        debit: total,
        credit: 0,
        note,
      },

      {
        account_id: customer_account_id,
        observe_account_id: material_account_id,
        currency_id,
        cost_center_id,
        debit: 0,
        credit: total,
        note,
      },
    ];

    await insertIntoGrid({
      grid,
      itemId: response?.id,
      tableName: "entry_main_data",
      gridTableName: "entry_grid_data",
      itemSearchName: "entry_main_data_id",
    });

    return;
  }
};
