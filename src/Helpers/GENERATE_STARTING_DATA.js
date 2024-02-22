import { RECEIVED_CHQ_CODE } from "./constants";

const { ApiActions } = require("./Lib/api");

const DEFAULT_ACCOUNTS = [
  { code: 1, name: "Assets ", type: "Balance Sheet", number: 3, level: 0 },
  {
    code: 11,
    name: "Fixed Assets",
    type: "Balance Sheet",
    number: 1,
    level: 1,
  },
  {
    code: 111,
    name: "Furniture & Fixture",
    type: "Balance Sheet",
    number: 0,
    level: 2,
  },
  {
    code: 12,
    name: "Current assets",
    type: "Balance Sheet",
    number: 4,
    level: 1,
  },
  { code: 121, name: "Customers", type: "Balance Sheet", number: 1, level: 2 },
  { code: 12101, name: "ahmad", type: "Balance Sheet", number: 0, level: 3 },
  {
    code: 122,
    name: "Notes Receivables",
    type: "Balance Sheet",
    number: 0,
    level: 2,
  },
  { code: 123, name: "Buildings", type: "Balance Sheet", number: 2, level: 2 },
  {
    code: 12301,
    name: "Building No.1",
    type: "Balance Sheet",
    number: 3,
    level: 3,
  },
  {
    code: 123011,
    name: "Flats Building No.1",
    type: "Balance Sheet",
    number: 0,
    level: 4,
  },
  {
    code: 123012,
    name: "Shops Building No.1",
    type: "Balance Sheet",
    number: 0,
    level: 4,
  },
  {
    code: 123013,
    name: "Villa 1 1",
    type: "Balance Sheet",
    number: 0,
    level: 4,
  },
  {
    code: 12302,
    name: "indos building",
    type: "Balance Sheet",
    number: 0,
    level: 3,
  },
  { code: 125, name: "Stock", type: "Balance Sheet", number: 1, level: 2 },
  {
    code: 1251,
    name: "End period inventory",
    type: "Balance Sheet",
    number: 0,
    level: 3,
  },
  {
    code: 13,
    name: "Cash on hand",
    type: "Balance Sheet",
    number: 2,
    level: 1,
  },
  { code: 131, name: "Cash", type: "Balance Sheet", number: 0, level: 2 },
  { code: 132, name: "Bank", type: "Balance Sheet", number: 0, level: 2 },
  { code: 2, name: "liabilities", type: "Balance Sheet", number: 2, level: 0 },
  {
    code: 21,
    name: "Owners Equites",
    type: "Balance Sheet",
    number: 1,
    level: 1,
  },
  { code: 2101, name: "Capital", type: "Balance Sheet", number: 0, level: 2 },
  {
    code: 22,
    name: "Current Liabilities",
    type: "Balance Sheet",
    number: 4,
    level: 1,
  },
  { code: 221, name: "Suppliers", type: "Balance Sheet", number: 1, level: 2 },
  {
    code: 221001,
    name: "Supplier No.1",
    type: "Balance Sheet",
    number: 0,
    level: 3,
  },
  {
    code: 222,
    name: "Note Payables",
    type: "Balance Sheet",
    number: 0,
    level: 2,
  },
  {
    code: 223,
    name: "Security deposit",
    type: "Balance Sheet",
    number: 0,
    level: 2,
  },
  { code: 224, name: "VAT", type: "Balance Sheet", number: 0, level: 2 },
  { code: 3, name: "Expenses", type: "Profit & Loss", number: 3, level: 0 },
  { code: 31, name: "Salaries", type: "Profit & Loss", number: 0, level: 1 },
  {
    code: 32,
    name: "Water and Electricity",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  { code: 33, name: "Expenses", type: "Profit & Loss", number: 0, level: 1 },
  { code: 4, name: "Revenues", type: "Profit & Loss", number: 7, level: 0 },
  {
    code: 41,
    name: "Flats Sales Revenue",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  {
    code: 42,
    name: "Shops Sales Revenue",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  {
    code: 43,
    name: "Flats Rent Revenue",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  {
    code: 44,
    name: " Shops Rent Revenue",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  {
    code: 45,
    name: "Sales commission Revenue",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  {
    code: 46,
    name: "Rent Commission Revenue",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  { code: 47, name: "Revenue", type: "Profit & Loss", number: 0, level: 1 },
];

let final_id = null;
let parent_id = null;
let levels = {};

// insert default ACCOUNTS
async function INSERT_DEFAULT_ACCOUNTS() {
  const currencyResponse = await ApiActions.insert("currency", {
    data: {
      name: "United Arab Emirates Dirham",
      code: "AED",
      rate: 1,
    },
  });
  let currency_id = null;
  if (currencyResponse?.success) {
    currency_id = currencyResponse?.record?.id;
  } else {
    const currencyResponse = await ApiActions.read("currency", {
      conditions: [{ type: "and", conditions: [["code", "=", "AED"]] }],
    });
    currency_id = currencyResponse?.result?.at(0)?.id;
  }

  for (const item of DEFAULT_ACCOUNTS) {
    let data = {
      number: item?.code,
      name: item?.name,
      type: 1,
      currency_id,
    };
    if (item?.level === 0) {
      const accountId = await insertAccount(data);
      parent_id = final_id = accountId;
      levels[0] = {
        final_id,
        parent_id,
      };
    } else if (item?.level > 0) {
      data.final_id = levels[item?.level - 1]?.final_id;
      data.parent_id = levels[item?.level - 1]?.parent_id;

      const accountId = await insertAccount(data);
      levels[item?.level] = {
        final_id,
        parent_id: accountId,
      };
    }
  }
}

async function insertAccount(data) {
  const response = await ApiActions.insert("account", {
    data,
  });
  if (response?.success) return response?.record?.id;
}

// insert default BANKS
async function INSERT_DEFAULT_BANKS() {
  const BANKS = [
    "ABIFT",
    "ABN AMRO",
    "Abu Dhabi Commercial Bank",
    "Abu Dhabi Islamic Bank",
    "Ajman Bank",
    "Al  Masref ",
    "Al Ahli Bank of Kuwait",
    "Al Hilal Bank",
    "AL Khaliji",
    "Arab African International Bank",
    "Arab Bank",
    "Arab Bank Investment & Foregin Trade",
    "BAHRAIN ISLAMIC BANK",
    "Bank Melli Iran",
    "Bank of Baroda",
    "Bank of Sharjah ",
    "Bank Saderat Iran",
    "BANQUE BANORABE",
    "Banque Misr",
    "BARCLAYS",
    "BLC Bank (France) S.A.",
    "Blom Bank France",
    "BNP Paribas",
    "Cairo Bank",
    "CBI",
    "Citi Bank",
    "Commercial Bank Of Dubai",
    "Doha Bank",
    "Dubai Bank",
    "Dubai Islamic Bank",
    "El Nilein ",
    "Emirates Bank",
    "Emirates Bank International",
    "Emirates Islamic Bank",
    "EmiratesNBD",
    "First Gulf Bank",
    "Habib Bank",
    "HOLANDA BANK",
    "HSBC",
    "Invest Bank",
    "Janata Bank",
    "Johara",
    "Lloyds TSB",
    "Mashreq Bank",
    "National Bank of Abu Dhabi",
    "National Bank of Duabi",
    "National Bank of Fujairah",
    "National Bank of Kuwait",
    "National Bank of Sharjah",
    "National Bank Quwain",
    "NBQ",
    "Noor Islamic Bank",
    "RAK Bank",
    "RBS",
    "Samba",
    "Sharjah Islamic Bank",
    "Standard Chartered",
    "Union National Bank",
    "United Arab Bank",
    "United Arab Emirates",
    "United Bank Limited",
    "almaria bank",
  ];

  const bankIds = [];
  for (let bank of BANKS) {
    const response = await ApiActions.insert("bank", {
      data: {
        name: bank,
      },
    });
    if (response?.success) {
      bankIds.push(response?.record.id);
    }
  }
}

// insert default VOUCHERS
async function INSERT_DEFAULT_VOUCHERS() {
  let vouchers = [
    {
      auto_gen_entries: true,
      auto_transfer_entry: true,
      code: 1,
      gen_entries: true,
      generate_records: true,
      list_name: "vouchers",
      name: "payment",
      required_cost_center: true,
      required_statement: true,
      show_contract_cost_center: true,
      show_contract_field: true,
      show_cost_center: true,
      show_currency: true,
      show_note: true,
      show_debit_field: true,

    },
    {
      auto_gen_entries: true,
      auto_transfer_entry: true,
      code: 2,
      gen_entries: true,
      generate_records: true,
      list_name: "vouchers",
      name: "receipts",
      required_cost_center: true,
      required_statement: true,
      show_contract_cost_center: true,
      show_contract_field: true,
      show_cost_center: true,
      show_credit_field: true,
      show_currency: true,
      show_note: true,
    },
  ];
  for (const voucher of vouchers) {
    await ApiActions.insert("voucher_pattern", {
      data: voucher,
    });
  }
}

// INSERT DEFAULT CONTRACTS
export async function INSERT_DEFAULT_CONTRACTS() {
  const contractPatterns = [
    {
      name: "apartment",
      type: 2,
      list: "Contract Rent",
      assets_type: 1,
    },
    {
      name: "shop",
      type: 2,
      list: "Contract Rent",
      assets_type: 3,
    },
    {
      name: "parking",
      type: 2,
      list: "Contract Rent",
      assets_type: 2,
    },
    {
      name: "apartment",
      type: 1,
      list: "Contract Sale",
      assets_type: 1,
    },
    {
      name: "shop",
      type: 1,
      list: "Contract Sale",
      assets_type: 3,
    },
    {
      name: "parking",
      type: 1,
      list: "Contract Sale",
      assets_type: 2,
    },
    {
      name: "land",
      type: 1,
      list: "Contract Sale",
      assets_type: 4,
    },
  ];

  for (const contract of contractPatterns) {
    const response = await ApiActions.insert("contract_pattern", {
      data: {
        contract_type: contract.type,
        name: contract.name,
        list_name: contract.list,
        assets_type: contract.assets_type,
        auto_gen_entries: true,
        auto_transfer_entry: true,
        gen_entries: true,
        insurance_required: true,
        record_date_created: 1,
      },
    });
  }
}

// INSERT DEFAULT BILLS
export async function INSERT_DEFAULT_BILLS() {
  let bills = [
    {
      auto_gen_entries: true,
      auto_transfer_entry: true,
      collection_default_date: 0,
      commission_type: 0,
      deportable_default_date: 0,
      endorsement_default_date: 0,
      gen_entries: true,
      name: "Paid Check",
      paper_type: 1,
      returnable_default_date: 0,
      code: 1,
    },
    {
      auto_gen_entries: true,
      auto_transfer_entry: true,
      collection_default_date: 0,
      commission_type: 0,
      deportable_default_date: 0,
      endorsement_default_date: 0,
      gen_entries: true,
      name: "Received Check",
      paper_type: 2,
      returnable_default_date: 0,
      code: RECEIVED_CHQ_CODE,
    },
  ];
  for (const bill of bills) {
    await ApiActions.insert("bill_pattern", {
      data: bill,
    });
  }
}

// INSERT_DEFAULT_CONTRACTS()

// INSERT DEFAULT DATA
export async function INSERT_DEFAULT_MULTIPLE_DATA() {
  const lessorIds = [];
  for (let i = 0; i < 5; i++) {
    const response = await ApiActions.insert("lessor", {
      data: {
        number: i + 1,
        full_name: "lessor" + (i + 1),
      },
    });
    if (response?.success) {
      lessorIds.push(response?.record.id);
    }
  }
  const sellerIds = [];
  for (let i = 1; i < 5; i++) {
    const response = await ApiActions.insert("seller", {
      data: {
        full_name: "seller" + (i + 1),
        minimum_commission: i * 20,
        maximum_discount: i * 20,
      },
    });
    if (response?.success) {
      sellerIds.push(response?.record.id);
    }
  }

  const assets_groupIds = [];
  for (let i = 1; i < 5; i++) {
    const response = await ApiActions.insert("assets_group", {
      data: {
        number: i,
        name: "assets group" + i,
      },
    });
    if (response?.success) {
      assets_groupIds.push(response?.record.id);
    }
  }

  const assetsIds = [];
  for (let i = 1; i < 5; i++) {
    const response = await ApiActions.insert("assets", {
      data: {
        number: i,
        name: "assets" + i,
        assets_group_id: assets_groupIds[i],
      },
    });
    if (response?.success) {
      assetsIds.push(response?.record.id);
    }
  }

  const material_groupIds = [];
  for (let i = 1; i < 5; i++) {
    const response = await ApiActions.insert("material_group", {
      data: {
        number: i,
        name: "material group" + i,
      },
    });
    if (response?.success) {
      material_groupIds.push(response?.record.id);
    }
  }

  const materialsIds = [];
  for (let i = 1; i < 5; i++) {
    const response = await ApiActions.insert("materials", {
      data: {
        number: i,
        name: "materials" + i,
        materials_group_id: material_groupIds[i],
      },
    });
    if (response?.success) {
      materialsIds.push(response?.record.id);
    }
  }
}

export async function INSERT_DEFAULT_DATA() {
  INSERT_DEFAULT_ACCOUNTS();
  INSERT_DEFAULT_BANKS();
  INSERT_DEFAULT_VOUCHERS();
  INSERT_DEFAULT_CONTRACTS();
  INSERT_DEFAULT_BILLS();
  INSERT_DEFAULT_MULTIPLE_DATA();
}


