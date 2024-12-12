import { UNIQUE_REF_TABLES } from "Helpers/constants";
import { ApiActions } from "./api";
import {
  MAIN_USERS_CODE,
  USER_CUSTOMER_CODE,
  USER_SUPERVISOR_CODE,
  USER_SUPPLIER_CODE,
  USER_WORKER_CODE,
} from "Helpers/GENERATE_STARTING_DATA";

export const getUserList = async (code) => {
  const response = await ApiActions.read("user", {
    conditions: [{ type: "and", conditions: [["card_type", "=", code]] }],
  });
  return response?.result;
};

export const getServiceWithRequestedMaterials = async (code) => {
  const response = await ApiActions.read("service", {
    joins: [
      {
        type: "join",
        table: "service_material",
        conditions: {
          "service.id": "service_material.service_id",
        },
      },
    ],
    conditions: [
      { type: "and", conditions: [["service_material.status", "=", 1]] },
    ],
    columns: ["service.id as id", "service.number as number"],
  });
  return response;
};

export const getRequestedMaterialsByServiceId = async (id) => {
  const response = await ApiActions.read("service_material", {
    conditions: [
      { type: "and", conditions: [["status", "=", 1]] },
      { type: "and", conditions: [["service_id", "=", id]] },
    ],
    columns: ["id", "name", "price as unit_price", "quantity", "material_id"],
  });
  return response;
};

export const getAccountsChildrenByName = async (code) => {
  const response = await ApiActions.read("account", {
    conditions: [{ type: "and", conditions: [["internal_number", "=", code]] }],
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

export const getBillLastNumber = async (code) => {
  const response = await ApiActions.read("bill", {
    conditions: [{ type: "and", conditions: [["bill_kind", "=", +code]] }],
    limit: 1,
    sorts: [{ column: "number", order: "DESC", nulls: "last" }],
  });
  return +response?.result?.at(0)?.number || 0;
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
      { type: "or", conditions: [["internal_number", "=", 131]] },
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

const contract = async () => {
  const res = await ApiActions.read("contract", {
    joins: [
      {
        type: "leftJoin",
        table: "building",
        conditions: { "building.id": "contract.building_id" },
      },
      {
        type: "leftJoin",
        table: "account",
        conditions: { "account.id": "contract.client_id" },
      },
      {
        type: "leftJoin",
        table: "apartment",
        conditions: { "apartment.id": "contract.apartment_id" },
      },
      {
        type: "leftJoin",
        table: "parking",
        conditions: { "parking.id": "contract.parking_id" },
      },
      {
        type: "leftJoin",
        table: "shop",
        conditions: { "shop.id": "contract.shop_id" },
      },
    ],
    columns: [
      "contract.*",
      "building.name as building_name",
      "account.name as client_name",
      "apartment.apartment_no as unit_name",
      "parking.parking_no as unit_name",
      "shop.shop_no as unit_name",
      "apartment.apartment_kind as unit_type",
      "parking.parking_kind as unit_type",
      "shop.shop_kind as unit_type",
      "apartment.hex as hex",
      "parking.hex as hex",
      "shop.hex as hex",
    ],
  });
  return res?.result;
};

const account = async () => {
  const res = await ApiActions.read("account", {
    joins: [
      {
        type: "leftJoin",
        table: "account as a",
        conditions: { "a.id": "account.parent_id" },
      },
      {
        type: "leftJoin",
        table: "account as a2",
        conditions: { "a2.id": "account.final_id" },
      },
      {
        type: "leftJoin",
        table: "currency",
        conditions: { "currency.id": "account.currency_id" },
      },
    ],
    columns: [
      "account.*",
      "currency.name as currency_name",
      "a.name as parent_name",
      "a2.name as final_name",
    ],
  });
  return res?.result;
};

const service = async (name, filters) => {
  const res = await ApiActions.read("service", {
    joins: [
      {
        type: "leftJoin",
        table: "building",
        conditions: { "building.id": `service.building_id` },
      },
      // {
      //   type: "leftJoin",
      //   table: "apartment",
      //   conditions: { "apartment.id": `service.unit_id` },
      // },
      // {
      //   type: "leftJoin",
      //   table: "shop",
      //   conditions: { "shop.id": `service.unit_id` },
      // },
      // {
      //   type: "leftJoin",
      //   table: "parking",
      //   conditions: { "parking.id": `service.unit_id` },
      // },
      // {
      //   type: "leftJoin",
      //   table: "building as building",
      //   conditions: { "building.id": `service.building_id` },
      // },
    ],
    columns: [
      `service.*`,
      "building.name as building_name",
      // "parking.parking_no as_unit_name",
      // "shop.shop_no as_unit_name",
      // "apartment.apartment_no as_unit_name",
    ],
  });

  return res?.result;
};

const unit = async (filters, name) => {
  const res = await ApiActions.read(name, {
    joins: [
      {
        type: "leftJoin",
        table: "building as building",
        conditions: { "building.id": `${name}.building_id` },
      },
    ],
    columns: [`${name}.*`, "building.name as building_name"],
  });
  return res?.result;
};

const list = async (filters, name) => {
  const res = await ApiActions.read(name);
  return res?.result;
};

const villa = async (name) => {
  const res = await ApiActions.read("villa");
  return res?.result;
};
const land = async (name) => {
  const res = await ApiActions.read("land");
  return res?.result;
};

const entry_main_data = async (name) => {
  const res = await ApiActions.read("entry_main_data", {
    joins: [
      {
        type: "leftJoin",

        table: "entry_grid_data",
        conditions: {
          "entry_main_data.id": "entry_grid_data.entry_main_data_id",
        },
      },
    ],
    columns: [
      "entry_main_data.*",
      "entry_grid_data.account_id",
      "entry_grid_data.cost_center_id",
      "entry_grid_data.observe_account_id",
    ],
  });
  return res?.result;
};

const category_problem = async (name) => {
  const res = await ApiActions.read("category_problem", {
    joins: [
      {
        type: "join",
        table: "category as category",
        conditions: {
          "category.id": "category_problem.category_id",
        },
      },
    ],
    columns: ["category_problem.*", "category.name as category_name"],
  });
  return res?.result;
};
const cost_center = async (name) => {
  const res = await ApiActions.read("cost_center", {
    joins: [
      {
        type: "leftJoin",
        table: "cost_center as cost",
        conditions: {
          "cost.id": "cost_center.parent_id",
        },
      },
    ],
    columns: ["cost_center.*", "cost.name as parent_name"],
  });
  return res?.result;
};

const owner_expenses = async (name) => {
  const res = await ApiActions.read("owner_expenses", {
    joins: [
      {
        type: "leftJoin",
        table: "building",
        conditions: {
          "building.id": "owner_expenses.building_id",
        },
      },
      {
        type: "leftJoin",
        table: "owner",
        conditions: {
          "owner.id": "owner_expenses.owner_id",
        },
      },
    ],
    columns: [
      "owner_expenses.*",
      "building.name as building_name",
      "building.ltnname as building_ltnname",
      "owner.name as owner_name",
    ],
  });
  return res?.result;
};

export const fetchSearch = async (field, value) => {
  if (field?.is_ref && field?.no_filter) {
    const response = await ApiActions.read(
      field?.ref_table,
      field?.conditions || {}
    );
    return response?.result;
  }

  if (field?.ref_table === "account") {
    return await getAccountList();
  }

  if (field?.ref_table === "cost_center") {
    return await getCostCenterList();
  }

  if (field?.ref_table === UNIQUE_REF_TABLES.clients) {
    return await getAccountsChildrenByName(MAIN_USERS_CODE[1]);
    // return await getAccountList();
  }

  if (field?.ref_table === UNIQUE_REF_TABLES.supervisor) {
    return await getUserList(USER_SUPERVISOR_CODE);
  }

  if (field?.ref_table === UNIQUE_REF_TABLES.employee) {
    return await getUserList(USER_WORKER_CODE);
  }

  if (field?.ref_table === UNIQUE_REF_TABLES.user_supplier) {
    return await getUserList(USER_SUPPLIER_CODE);
  }

  if (field?.ref_table === UNIQUE_REF_TABLES.user_customer) {
    return await getUserList(USER_CUSTOMER_CODE);
  }

  if (field?.ref_table === UNIQUE_REF_TABLES.suppliers) {
    return await getAccountsChildrenByName(MAIN_USERS_CODE[2]);
    // return await getAccountList();
  }

  if (field.is_ref) {
    return await ApiActions.read(field?.ref_table, field?.conditions || {});
  }
};

const data = {
  contract,
  account,
  list,
  parking: unit,
  apartment: unit,
  shop: unit,
  land,
  villa,
  service,
  entry_main_data,
  category_problem,
  cost_center,
  owner_expenses,

  // parking: unit,
};

export default function getTableData(name, filters) {
  const fn = data?.[name] || data?.list;
  return fn(filters, name);
}
