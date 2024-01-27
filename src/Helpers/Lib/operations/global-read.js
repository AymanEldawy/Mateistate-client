import { ApiActions } from "../api";

export const getAccount = async (name) => {
  return await ApiActions.read("account", {
    // offset: 0,
    // limit: 10,
    // conditions: [{ type: "and", conditions: ["count(*)"] }],
    // conditions: [{ type: "and", conditions: [["COUNT(*)"]] }],
    joins: [
      // {
      //   type: "join",
      //   table: "currency",
      //   conditions: { "account.currency_id": "currency.id" },
      // },
      // {
      //   type: "join",
      //   table: "account as t2",
      //   conditions: { "account.parent_id": "t2.id" },
      // },
      // {
      //   type: "join",
      //   table: "account as t3",
      //   conditions: { "account.final_id": "t3.id" },
      // },
    ],
    sorts: [{ column: "created_at", order: "ASC", nulls: "last" }],
    // columns: ["account.*", "currency.name as currency_name", 't2.name as parent_name', "t3.name as final_name"],
    // columns: ["account.*", "currency.name as currency_name"],
  });
};

export const getUsers = async () => {
  return await ApiActions.read("user", {
    // offset: 0,
    // limit: 10,
    // conditions: [{ type: "and", conditions: [["age", ">", 18]] }],
    joins: [
      {
        type: "join",
        table: "account",
        conditions: { "account.account_id": "account.id" },
      },
      {
        type: "join",
        table: "account",
        conditions: { "account.insurance_account_id": "account.id" },
      },
      {
        type: "join",
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
    // joins: [
    //   {
    //     type: "join",
    //     table: "cost_center",
    //     conditions: { "cost_center.parent_id": "cost_center.id" },
    //   },
    // ],
    sorts: [{ column: "created_at", order: "DESC", nulls: "last" }],
    // columns: ["cost_center.*", "cost_center.name as parent_name"],
  });
};

export const getBuilding = async () => {
  return await ApiActions.read("building", {
    joins: [
      {
        type: "join",
        table: "owner",
        conditions: { "building.owner_id": "owner.id" },
      },
      {
        type: "join",
        table: "account",
        conditions: { "building.construction_account_id": "account.id" },
      },
      {
        type: "join",
        table: "account",
        conditions: { "building.create_within_id": "account.id" },
      },
      {
        type: "join",
        table: "cost_center",
        conditions: { "building.main_cost_center_id": "cost_center.id" },
      },
      {
        type: "join",
        table: "account",
        conditions: { "building.building_bank_account_id": "account.id" },
      },
      {
        type: "join",
        table: "bank",
        conditions: { "building.bank_id": "bank.id" },
      },
      {
        type: "join",
        table: "lessor",
        conditions: { "building.lessor_id": "lessor.id" },
      },
      {
        type: "join",
        table: "currency",
        conditions: { "building.currency_id": "currency.id" },
      },
      {
        type: "join",
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
      // "currency.name as currency_name",
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
      {
        type: "join",
        table: "contract_rent_financial",
        conditions: { "contract.id": "contract_rent_financial.contract_id" },
      },
      // {
      //   type: "join",
      //   table: "contract_rent_financial",
      //   conditions: { "contract.id": "contract_rent_financial_parking.contract_id" },
      // },
      // {
      //   type: "join",
      //   table: "apartment_rent_contract",
      //   conditions: { "contract.id": "apartment_rent_contract.contract_id" },
      // },
      // {
      //   type: "join",
      //   table: "shop_rent_contract",
      //   conditions: { "contract.id": "shop_rent_contract.contract_id" },
      // },
      // {
      //   type: "join",
      //   table: "shop_rent_contract",
      //   conditions: { "contract.id": "shop_rent_contract.contract_id" },
      // },
      // {
      //   type: "join",
      //   table: "parking_rent_contract",
      //   conditions: { "contract.id": "parking_rent_contract.contract_id" },
      // },
      // {
      //   type: "join",
      //   table: "apartment_sale_contract",
      //   conditions: { "contract.id": "apartment_sale_contract.contract_id" },
      // },
      // {
      //   type: "join",
      //   table: "shop_sale_contract",
      //   conditions: { "contract.id": "shop_sale_contract.contract_id" },
      // },
      // {
      //   type: "join",
      //   table: "parking_sale_contract",
      //   conditions: { "contract.id": "parking_sale_contract.contract_id" },
      // },
      // {
      //   type: "join",
      //   table: "contract_rent_financial",
      //   conditions: { "contract.id": "contract_rent_financial.contract_id" },
      // },
      // {
      //   type: "join",
      //   table: "contract_rent_financial_parking",
      //   conditions: {
      //     "contract.id": "contract_rent_financial_parking.contract_id",
      //   },
      // },
      // {
      //   type: "join",
      //   table: "contract_sale_financial",
      //   conditions: { "contract.id": "contract_sale_financial.contract_id" },
      // },
      // {
      //   type: "join",
      //   table: "contract_sale_financial_parking",
      //   conditions: {
      //     "contract.id": "contract_sale_financial_parking.contract_id",
      //   },
      // },
    ],
    columns: ['contract.*','contract.id as contract_id']
  });
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
