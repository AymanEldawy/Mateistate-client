const { ApiActions } = require("./Lib/api");

// Connect With DEFAULT
export const CONNECT_WITH_NOTHING_CODE = 0;
export const CONNECT_WITH_CONTRACT_CODE = 1;
export const CONNECT_WITH_LAWSUIT_CODE = 2;
export const CONNECT_WITH_BILL_CODE = 3;
export const CONNECT_WITH_NOTHING_NAME = "Nothing";
export const CONNECT_WITH_CONTRACT_NAME = "Contract";
export const CONNECT_WITH_LAWSUIT_NAME = "Lawsuit";
export const CONNECT_WITH_BILL_NAME = "Bill";

// Created From DEFAULT
export const CREATED_FROM_CONTRACT_CODE = 1;
export const CREATED_FROM_LAWSUIT_CODE = 2;
export const CREATED_FROM_BILL_NAME = 3;
export const CREATED_FROM_PAYMENT_VOUCHER_CODE = 4;
export const CREATED_FROM_RECEIPT_VOUCHER_CODE = 5;
export const CREATED_FROM_CHQ_PAID_CODE = 6;
export const CREATED_FROM_CHQ_RECEIVED_CODE = 7;

export const CREATED_FROM_CHQ_DYNAMIC_CODE = "10";

export const CREATED_FROM_CONTRACT_NAME = CONNECT_WITH_CONTRACT_NAME;
export const CREATED_FROM_LAWSUIT_NAME = CONNECT_WITH_LAWSUIT_NAME;
export const CREATED_FROM_BILL_CODE = CONNECT_WITH_BILL_NAME;
export const CREATED_FROM_PAYMENT_VOUCHER_NAME = "Payment Voucher";
export const CREATED_FROM_RECEIPT_VOUCHER_NAME = "Receipt Voucher";
export const CREATED_FROM_CHQ_PAID_NAME = "Paid Check";
export const CREATED_FROM_CHQ_RECEIVED_NAME = "Received Check";

// Currency DEFAULT
export const DEFAULT_CURRENCY_NAME = "United Arab Emirates Dirham";
export const DEFAULT_CURRENCY_CODE = "AED";
export const DEFAULT_CURRENCY_RATE = 1;

// CHQ PATTERN DEFAULT NAME
export const CHQ_PAID_CODE = 1;
export const CHQ_PAID_NAME = "Paid Check";
export const CHQ_RECEIVED_CODE = 2;
export const CHQ_RECEIVED_NAME = "Received Check";

// Vouchers PATTERN DEFAULT NAME
export const VOUCHER_PAYMENT_CODE = 1;
export const VOUCHER_RECEIPTS_CODE = 2;
export const VOUCHER_PAYMENT_NAME = "Payment Voucher";
export const VOUCHER_RECEIPTS_NAME = "Receipt Voucher";
export const VOUCHER_LIST_NAME = "Vouchers";

// CONTRACT PATTERN DEFAULT CONSTANTS
export const CONTRACT_RENT_LIST_NAME = "Contract Rent";
export const CONTRACT_SALE_LIST_NAME = "Contract Sale";
export const APARTMENT_ASSET_TYPE_CODE = 1;
export const PARKING_ASSET_TYPE_CODE = 2;
export const SHOP_ASSET_TYPE_CODE = 3;
export const LAND_ASSET_TYPE_CODE = 4;
export const APARTMENT_ASSET_TYPE_DEFAULT_NAME = "Apartment";
export const PARKING_ASSET_TYPE_DEFAULT_NAME = "Parking";
export const SHOP_ASSET_TYPE_DEFAULT_NAME = "Shop";
export const LAND_ASSET_TYPE_DEFAULT_NAME = "Land";

// CONTRACT PATTERN DEFAULT CONSTANTS
export const CONTRACT_RENT_CODE = 2;
export const CONTRACT_SALE_CODE = 1;
export const CONTRACT_RENT_APARTMENT_NAME = "Apartment Rent Contract";
export const CONTRACT_RENT_PARKING_NAME = "Parking Rent Contract";
export const CONTRACT_RENT_SHOP_NAME = "Shop Rent Contract";
export const CONTRACT_SALE_APARTMENT_NAME = "Apartment Sale Contract";
export const CONTRACT_SALE_PARKING_NAME = "Parking Sale Contract";
export const CONTRACT_SALE_SHOP_NAME = "Shop Sale Contract";
export const CONTRACT_SALE_LAND_NAME = "Apartment Sale Contract";

export const DEFAULT_VOUCHERS_INFO = {
  payment: {
    auto_gen_entries: true,
    auto_transfer_entry: true,
    code: VOUCHER_RECEIPTS_CODE,
    gen_entries: true,
    generate_records: true,
    list_name: VOUCHER_LIST_NAME,
    name: VOUCHER_RECEIPTS_NAME,
    required_cost_center: true,
    required_statement: true,
    show_contract_cost_center: true,
    show_contract_field: true,
    show_cost_center: true,
    show_currency: true,
    show_note: true,
    show_credit_field: true,
  },
  receipts: {
    auto_gen_entries: true,
    auto_transfer_entry: true,
    code: VOUCHER_PAYMENT_CODE,
    gen_entries: true,
    generate_records: true,
    list_name: VOUCHER_LIST_NAME,
    name: VOUCHER_PAYMENT_NAME,
    required_cost_center: true,
    required_statement: true,
    show_contract_cost_center: true,
    show_contract_field: true,
    show_cost_center: true,
    show_debit_field: true,
    show_currency: true,
    show_note: true,
  },
};

let SHARED_CHQ = {
  auto_gen_entries: true,
  auto_transfer_entry: true,
  collection: true,
  collection_auto_gen_entries: true,
  collection_auto_transfer_entry: true,
  deportable: true,
  deportable_auto_gen_entries: true,
  deportable_auto_transfer_entry: true,
  deportable_gen_entries: false,
  gen_entries: true,
  partial_auto_gen_entries: true,
  partial_auto_transfer_entry: true,
  partial_collection: true,
  partial_gen_entries: true,
  returnable: true,
  returnable_auto_gen_entries: true,
  returnable_auto_transfer_entry: true,
  returnable_gen_entries: true,
};

export const DEFAULT_CHQ_INFO = [
  {
    auto_gen_entries: true,
    auto_transfer_entry: true,
    collection_default_date: 0,
    commission_type: 0,
    deportable_default_date: 0,
    gen_entries: true,
    name: CHQ_PAID_NAME,
    paper_type: 1,
    returnable_default_date: 0,
    code: CHQ_PAID_CODE,
    ...SHARED_CHQ,
  },
  {
    auto_gen_entries: true,
    auto_transfer_entry: true,
    collection_default_date: 0,
    commission_type: 0,
    deportable_default_date: 0,
    gen_entries: true,
    name: CHQ_RECEIVED_NAME,
    paper_type: 2,
    returnable_default_date: 0,
    code: CHQ_RECEIVED_CODE,
    ...SHARED_CHQ,
  },
];

export const DEFAULT_CONTRACT_PATTERN_INFO = [
  {
    name: CONTRACT_RENT_APARTMENT_NAME,
    type: CONTRACT_RENT_CODE,
    list: CONTRACT_RENT_LIST_NAME,
    assets_type: APARTMENT_ASSET_TYPE_CODE,
  },
  {
    name: CONTRACT_RENT_SHOP_NAME,
    type: CONTRACT_RENT_CODE,
    list: CONTRACT_RENT_LIST_NAME,
    assets_type: SHOP_ASSET_TYPE_CODE,
  },
  {
    name: CONTRACT_RENT_PARKING_NAME,
    type: CONTRACT_RENT_CODE,
    list: CONTRACT_RENT_LIST_NAME,
    assets_type: PARKING_ASSET_TYPE_CODE,
  },
  {
    name: CONTRACT_SALE_APARTMENT_NAME,
    type: CONTRACT_SALE_CODE,
    list: CONTRACT_SALE_LIST_NAME,
    assets_type: APARTMENT_ASSET_TYPE_CODE,
  },
  {
    name: CONTRACT_SALE_SHOP_NAME,
    type: CONTRACT_SALE_CODE,
    list: CONTRACT_SALE_LIST_NAME,
    assets_type: SHOP_ASSET_TYPE_CODE,
  },
  {
    name: CONTRACT_SALE_PARKING_NAME,
    type: CONTRACT_SALE_CODE,
    list: CONTRACT_SALE_LIST_NAME,
    assets_type: PARKING_ASSET_TYPE_CODE,
  },
  {
    name: CONTRACT_SALE_LAND_NAME,
    type: CONTRACT_SALE_CODE,
    list: CONTRACT_SALE_LIST_NAME,
    assets_type: LAND_ASSET_TYPE_CODE,
  },
];

const DEFAULT_ACCOUNTS = [
  { code: 1, name: "Assets", type: "Balance Sheet", number: 3, level: 0 },
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
      name: DEFAULT_CURRENCY_NAME,
      code: DEFAULT_CURRENCY_CODE,
      rate: DEFAULT_CURRENCY_RATE,
    },
  });
  let currency_id = null;
  if (currencyResponse?.success) {
    currency_id = currencyResponse?.record?.id;
  } else {
    const currencyResponse = await ApiActions.read("currency", {
      conditions: [
        { type: "and", conditions: [["code", "=", DEFAULT_CURRENCY_CODE]] },
      ],
    });
    currency_id = currencyResponse?.result?.at(0)?.id;
  }

  for (const item of DEFAULT_ACCOUNTS) {
    let data = {
      internal_number: item?.code,
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
  for (const voucher of Object.values(DEFAULT_VOUCHERS_INFO)) {
    await ApiActions.insert("voucher_pattern", {
      data: voucher,
    });
  }
}

// INSERT DEFAULT CONTRACTS
export async function INSERT_DEFAULT_CONTRACTS() {
  for (const contract of DEFAULT_CONTRACT_PATTERN_INFO) {
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
  for (const bill of DEFAULT_CHQ_INFO) {
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
  await ApiActions.read("cheque");
  INSERT_DEFAULT_VOUCHERS();
  INSERT_DEFAULT_CONTRACTS();
  INSERT_DEFAULT_BILLS();
  INSERT_DEFAULT_MULTIPLE_DATA();
  INSERT_DEFAULT_ACCOUNTS();
  INSERT_DEFAULT_BANKS();
}
// INSERT_DEFAULT_BILLS()
// INSERT_DEFAULT_DATA()
