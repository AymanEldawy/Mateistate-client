import { ApiActions } from "./api";

export const getAccountsChildrenByName = async (name = "Customers") => {
  const response = await ApiActions.read("account", {
    conditions: [{ type: "and", conditions: [["name", "=", name]] }],
  });
  let accountId = response?.result?.at(0)?.id;

  const children = await ApiActions.read("account", {
    conditions: [{ type: "and", conditions: [["parent_id", "=", accountId]] }],
  });
  return children?.result;
};

export const getVouchers = async (id, conditions = {}) => {
  const vouchersResponse = await ApiActions.read("voucher_main_data", {
    conditions: [
      { type: "and", conditions: [["connect_with_id", "=", id]] },
      ...conditions,
    ],
    joins: [
      {
        type: "leftJoin",
        table: "voucher_grid_data",
        conditions: {
          "voucher_main_data.id": "voucher_grid_data.voucher_main_data_id",
        },
      },
    ],
  });
  return vouchersResponse;
};

export const getCostCenterList = async () => {
  const response = await ApiActions.read("cost_center", {
    // joins: [
    //   {
    //     type: "leftJoin",
    //     table: "cost_center as parent",
    //     conditions: { "cost_center.parent_id": "parent.id" },
    //   },
    // ],
    // columns: ["cost_center.*", "parent.name as parent_name"],
  });
  return response?.result?.filter((c) => c?.parent_id);
};

export const getAccountList = async () => {
  const response = await ApiActions.read("account");
  if (!response?.success) return [];
  const result = response?.result;
  let listOfParents = result?.map((c) => c?.id);
  let hashIndexes = {};

  for (let i = 0; i < result.length; i++) {
    let item = result[i];
    let isParent = listOfParents?.find((c) => c === item?.parent_id);

    if (isParent) {
      hashIndexes[isParent] = true;
    }
  }

  return response?.result?.filter((item) => !hashIndexes?.[item?.id]);
};

export const getVoucherLastNumber = async (code) => {
  const response = await ApiActions.read("voucher_main_data", {
    conditions: [{ type: "and", conditions: [["voucher_type", "=", +code]] }],
    limit: 1,
    sorts: [{ column: "number", order: "DESC", nulls: "last" }],
  });
  return +response?.result?.at(0)?.number || 0;
};

export const getAccountCash = async (id) => {
  let res = null;

  if (id) {
    res = await ApiActions.read("building", {
      conditions: [{ type: "or", conditions: [["id", "=", id]] }],
    });
  }

  let data = res?.result?.at(0);
  if (data?.building_cash_account_id)
    return res?.result?.at(0)?.building_cash_account_id;

  res = await ApiActions.read("account", {
    conditions: [
      { type: "or", conditions: [["name", "=", "Cash"]] },
      { type: "or", conditions: [["number", "=", 131]] },
    ],
  });

  if (res?.success) return res?.result?.at(0)?.id;
};

export const getAccountReceivable = async (id) => {
  let res = null;

  if (id) {
    res = await ApiActions.read("building", {
      conditions: [{ type: "or", conditions: [["id", "=", id]] }],
    });
  }

  let data = res?.result?.at(0);
  if (data?.building_cheque_account_id)
    return res?.result?.at(0)?.building_cheque_account_id;

  res = await ApiActions.read("account", {
    conditions: [
      { type: "or", conditions: [["name", "=", "Notes Receivables"]] },
      { type: "or", conditions: [["number", "=", 122]] },
    ],
  });
  if (res?.success) return res?.result?.at(0)?.id;
};
