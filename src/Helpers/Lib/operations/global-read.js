import { ApiActions } from "../api";

export const getAccount = async (name) => {
  return await ApiActions.read("account", {
    // offset: 0,
    // limit: 10,
    // conditions: [{ type: "and", conditions: ["count(*)"] }],
    // conditions: [{ type: "and", conditions: [["COUNT(*)"]] }],
    joins: [
      {
        type: "leftJoin",
        table: "currency",
        conditions: { "account.currency_id": "currency.id" },
      },
      {
        type: "leftJoin",
        table: "account as parent",
        conditions: { "account.parent_id": "parent.id" },
      },
      {
        type: "leftJoin",
        table: "account as final",
        conditions: { "account.final_id": "final.id" },
      },
    ],
    sorts: [{ column: "created_at", order: "ASC", nulls: "last" }],
    columns: [
      "account.*",
      "currency.name as currency_name",
      "parent.name as parent_name",
      "final.name as final_name",
    ],
  });
};

export const getUsers = async () => {
  return await ApiActions.read("user", {
    // offset: 0,
    // limit: 10,
    // conditions: [{ type: "and", conditions: [["age", ">", 18]] }],
    joins: [
      {
        type: "leftJoin",
        table: "account",
        conditions: { "account.account_id": "account.id" },
      },
      {
        type: "leftJoin",
        table: "account",
        conditions: { "account.insurance_account_id": "account.id" },
      },
      {
        type: "leftJoin",
        table: "bank",
        conditions: { "account.bank_id": "bank.id" },
      },
    ],
    sorts: [{ column: "created_at", order: "DESC", nulls: "last" }],
    columns: [
      "user.*",
      "bank.name as bank_name",
      "account.name as account_name",
    ],
  });
};

export const getCostCenter = async () => {
  return await ApiActions.read("cost_center", {
    joins: [
      {
        type: "leftJoin",
        table: "cost_center as cost",
        conditions: { "cost_center.parent_id": "cost.id" },
      },
    ],
    sorts: [{ column: "created_at", order: "DESC", nulls: "last" }],
    columns: ["cost_center.*", "cost.name as parent_name"],
  });
};

export const getBuilding = async () => {
  return await ApiActions.read("building", {
    joins: [
      {
        type: "leftJoin",
        table: "owner",
        conditions: { "building.owner_id": "owner.id" },
      },
      {
        type: "leftJoin",
        table: "account",
        conditions: { "building.construction_account_id": "account.id" },
      },
      {
        type: "leftJoin",
        table: "account",
        conditions: { "building.create_within_id": "account.id" },
      },
      {
        type: "leftJoin",
        table: "cost_center",
        conditions: { "building.main_cost_center_id": "cost_center.id" },
      },
      {
        type: "leftJoin",
        table: "account",
        conditions: { "building.building_bank_account_id": "account.id" },
      },
      {
        type: "leftJoin",
        table: "bank",
        conditions: { "building.bank_id": "bank.id" },
      },
      {
        type: "leftJoin",
        table: "lessor",
        conditions: { "building.lessor_id": "lessor.id" },
      },
      {
        type: "leftJoin",
        table: "currency",
        conditions: { "building.currency_id": "currency.id" },
      },
      {
        type: "leftJoin",
        table: "account",
        conditions: { "building.account_id": "account.id" },
      },
    ],

    columns: [
      "building.*",
      "account.name as construction_account", // 3 account
      // "account.name as create_within_name", // 3 account
      // "account.name as account_name", // 3 account
      // "account.name as bank_account_name", // 3 account
      "cost_center.name as cost_center_name",
      "bank.name as bank_name",
      "lessor.name as lessor_name",
      "currency.name as currency_name",
    ],

    sorts: [{ column: "created_at", order: "DESC", nulls: "last" }],
  });
};

export const getDataWithPagination = async (name, params) => {
  return await ApiActions.read(name, {
    offset: 0,
    limit: 30,
    ...params,
  });
};

export const getContracts = async () => {
  return await ApiActions.read("contract", {
    joins: [
      // {
      //   type: "leftJoin",
      //   table: "apartment_rent_contract",
      //   conditions: { "contract.id": "apartment_rent_contract.contract_id" },
      // },
      // {
      //   type: "leftJoin",
      //   table: "shop_rent_contract as rent",
      //   conditions: { "contract.id": "shop_rent_contract.contract_id" },
      // },
      // {
      //   type: "leftJoin",
      //   table: "parking_rent_contract as rent",
      //   conditions: { "contract.id": "parking_rent_contract.contract_id" },
      // },
      // {
      //   type: "leftJoin",
      //   table: "apartment_sale_contract as sale",
      //   conditions: { "contract.id": "apartment_sale_contract.contract_id" },
      // },
      // {
      //   type: "leftJoin",
      //   table: "shop_sale_contract as sale",
      //   conditions: { "contract.id": "shop_sale_contract.contract_id" },
      // },
      // {
      //   type: "leftJoin",
      //   table: "parking_sale_contract as sale",
      //   conditions: { "contract.id": "parking_sale_contract.contract_id" },
      // },
    ],
    columns: ["contract.*", "contract.id as contract_id"],
  });
};

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

// contract_commission;
// contract_terms;
// contract_pictures;
// contract_other_fees;
// contract_fixed_assets;
// contract_linked_parking;
// contract_cycle;
// contract_termination;
// contract_receipt_number;
