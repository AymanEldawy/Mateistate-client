const { ApiActions } = require("./Lib/api");

// Account & Users Codes
export const TENANT_ID = "051d7650-694b-423c-85d1-3871ce861830";

export const USERS = [
  "3bee9d02-6461-44c9-9e8a-ca5aa2354a1b",
  "88231589-38b3-4ab4-b330-8d413effbc84",
  "a08dff95-2810-412c-9c2d-66abe7523bea",
  "9ff8c8b9-7901-4bf4-b2e0-a8d018912732",
  // "5a5a5a00-b3d2-4c50-9e1b-6b22f2c34b54", //local
  // "5f9e29d5-2f74-49c5-83b6-81494ce14401", //local
  // "2a212bea-87b8-4e83-83b7-8a63aac1721c", //local
  // "2d056910-6c5d-483f-b344-91aacee2c9bc", //local
  // "0c777b8f-c573-49fd-8a40-5c35c2044848", //local
];

// SERVICES CODE
export const SERVICE_CUSTOMER_CODE = 1;
export const SERVICE_PROPERTY_PREPARING_CODE = 2;
export const SERVICE_DEFAULT_CODE = 3;

export const USER_CUSTOMER_CODE = 1;
export const USER_SUPPLIER_CODE = 2;
export const USER_SUPERVISOR_CODE = 3;
export const USER_WORKER_CODE = 4;

// Lack reasons
export const LACK_REASON_TENANT_NOT_EXIST_CODE = 1;
export const LACK_REASON_WE_NEED_MATERIAL_CODE = 2;

export const ACCOUNT_NORMAL_TYPE_CODE = 1;
export const ACCOUNT_CLOSING_TYPE_CODE = 2;
export const ACCOUNT_ASSEMBLY_TYPE_CODE = 3;
export const ACCOUNT_DISTRIBUTIVE_TYPE_CODE = 4;
export const ACCOUNT_NORMAL_TYPE_NAME = "account_normal";
export const ACCOUNT_CLOSING_TYPE_NAME = "account_closing";
export const ACCOUNT_ASSEMBLY_TYPE_NAME = "account_assembly";
export const ACCOUNT_DISTRIBUTIVE_TYPE_NAME = "account_distributive";

// Connect With DEFAULT
export const CONNECT_WITH_NOTHING_CODE = 0;
export const CONNECT_WITH_CONTRACT_CODE = 1;
export const CONNECT_WITH_LAWSUIT_CODE = 2;
export const CONNECT_WITH_BILL_CODE = 3;
export const CONNECT_WITH_NOTHING_NAME = "Nothing";
export const CONNECT_WITH_CONTRACT_NAME = "Contract";
export const CONNECT_WITH_LAWSUIT_NAME = "Lawsuit";
export const CONNECT_WITH_BILL_NAME = "Bill";

export const BILL_CONNECT_WITH_MAINTENANCES_CODE = 1;
export const BILL_CONNECT_WITH_MAINTENANCES_NAME = "Service";

// Created From DEFAULT
export const CREATED_FROM_CONTRACT_CODE = 1;
export const CREATED_FROM_LAWSUIT_CODE = 2;
export const CREATED_FROM_BILL_CODE = 3;
export const CREATED_FROM_CHQ_CODE = 4;
export const CREATED_FROM_VOUCHER_CODE = 5;
export const CREATED_FROM_CHQ_OPERATION_CODE = 6;
export const CREATED_FROM_CONTRACT_TERMINATION_CODE = 7;
export const CREATED_FROM_CONTRACT_RESERVATION_CODE = 8;

// Currency DEFAULT
export const DEFAULT_CURRENCY_NAME = "United Arab Emirates Dirham";
export const DEFAULT_CURRENCY_CODE = "AED";
export const DEFAULT_CURRENCY_RATE = 1;

// BILL PATTERN DEFAULT NAME
export const BILL_TYPE_PAID_CODE = 1;
export const BILL_TYPE_RECEIVED_CODE = 2;

export const BILL_PAID_CODE = 1;
export const BILL_PAID_NAME = "Purchase Invoice";
export const BILL_RECEIVED_CODE = 2;
export const BILL_RECEIVED_NAME = "VAT Invoice";

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
export const VILLA_ASSET_TYPE_CODE = 5;

export const APARTMENT_ASSET_TYPE_DEFAULT_NAME = "Apartment";
export const PARKING_ASSET_TYPE_DEFAULT_NAME = "Parking";
export const SHOP_ASSET_TYPE_DEFAULT_NAME = "Shop";
export const LAND_ASSET_TYPE_DEFAULT_NAME = "Land";
export const VILLA_ASSET_TYPE_DEFAULT_NAME = "Villa";

// CONTRACT PATTERN DEFAULT CONSTANTS
export const CONTRACT_SALE_CODE = 1;
export const CONTRACT_RENT_CODE = 2;
export const CONTRACT_SALE_APARTMENT_NAME = "Apartment Sale Contract";
export const CONTRACT_SALE_PARKING_NAME = "Parking Sale Contract";
export const CONTRACT_SALE_SHOP_NAME = "Shop Sale Contract";
export const CONTRACT_SALE_LAND_NAME = "Apartment Sale Contract";
export const CONTRACT_RENT_APARTMENT_NAME = "Apartment Rent Contract";
export const CONTRACT_RENT_PARKING_NAME = "Parking Rent Contract";
export const CONTRACT_RENT_SHOP_NAME = "Shop Rent Contract";

const ACCOUNT_IDS = {};

export const DEFAULT_VOUCHERS_INFO = {
  payment: {
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
    show_currency: true,
    show_note: true,
    show_debit_field: true,
  },
  receipts: {
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
    show_credit_field: true,
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
  collection_default_date: 1,
  collection_gen_entries: true,
  collection_move_cost_center_credit: true,
  collection_move_cost_center_debit: true,
  deportable_default_date: 1,
  deportable_move_cost_center_credit: true,
  deportable_move_cost_center_debit: true,
  partial_move_cost_center_credit: true,
  partial_move_cost_center_debit: true,
  returnable_active_operations: true,
  returnable_default_date: 1,
  returnable_move_cost_center_credit: true,
  returnable_move_cost_center_debit: true,
};

export const DEFAULT_BILL_INFO = [
  {
    name: BILL_PAID_NAME,
    number: BILL_PAID_CODE,
    default_store_id: null,
    material_account_id: null,
    bill_type: undefined,
    menu: undefined,
    payment_method: 1,
    pricing_of_materials: 1,
    table_color1: "",
    table_color2: "",
    auto_generate_entries: true,
    generate_entries: true,
    post_generate_entries_auto: true,
    post_to_store: true,
    post_to_store_auto: true,
    cash_account_id: null,
    code: BILL_PAID_CODE,
  },
  {
    name: BILL_RECEIVED_NAME,
    number: BILL_RECEIVED_CODE,
    default_store_id: null,
    material_account_id: null,
    bill_type: undefined,
    menu: undefined,
    payment_method: 1,
    pricing_of_materials: 1,
    table_color1: "",
    table_color2: "",
    auto_generate_entries: true,
    generate_entries: true,
    post_generate_entries_auto: true,
    post_to_store: true,
    post_to_store_auto: true,
    cash_account_id: null,
    code: BILL_RECEIVED_CODE,
  },
];

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

// insert default LACK_REASONS
export async function INSERT_DEFAULT_LACK_REASONS() {
  await ApiActions.insert("store", {
    data: {
      name: "store 1",
      code: 1,
      type: 1,
    },
  });

  const reasons = [
    {
      code: LACK_REASON_TENANT_NOT_EXIST_CODE,
      reason: "The tenant does not exist",
      available: true,
    },
    {
      code: LACK_REASON_WE_NEED_MATERIAL_CODE,
      reason: "We need materials",
      available: true,
    },
  ];
  for (const item of reasons) {
    await ApiActions.insert("lack_reason", {
      data: item,
    });
  }
}

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
      status: item?.type,
      level: item?.level,
    };
    let responseAccount = null;
    if (item?.level === 0) {
      responseAccount = await insertAccount(data);
      parent_id = final_id = responseAccount?.id;
      levels[0] = {
        final_id,
        parent_id,
      };
    } else if (item?.level > 0) {
      data.final_id = levels[item?.level - 1]?.final_id;
      data.parent_id = levels[item?.level - 1]?.parent_id;
      responseAccount = await insertAccount(data);
      levels[item?.level] = {
        final_id,
        parent_id: responseAccount?.id,
      };
    }
    ACCOUNT_IDS[`${item?.code}`] = responseAccount?.id;
  }
  if (ACCOUNT_IDS) {
    INSERT_DEFAULT_VOUCHERS(ACCOUNT_IDS);
    INSERT_DEFAULT_CONTRACTS(ACCOUNT_IDS);
    INSERT_DEFAULT_CHEQUES(ACCOUNT_IDS);
  }
}

async function insertAccount(data) {
  const response = await ApiActions.insert("account", {
    data,
  });
  if (response?.success) return response?.record;
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
async function INSERT_DEFAULT_VOUCHERS(ACCOUNT_IDS) {
  for (const voucher of Object.values(DEFAULT_VOUCHERS_INFO)) {
    if (voucher.code === VOUCHER_PAYMENT_CODE) {
    }

    if (voucher.code === VOUCHER_RECEIPTS_CODE) {
      voucher.default_account_id = ACCOUNT_IDS["131"];
    }

    await ApiActions.insert("voucher_pattern", {
      data: voucher,
    });
  }
}

// INSERT DEFAULT CONTRACTS
export async function INSERT_DEFAULT_CONTRACTS(ACCOUNT_IDS) {
  for (const contract of DEFAULT_CONTRACT_PATTERN_INFO) {
    if (contract.assets_type === SHOP_ASSET_TYPE_CODE) {
      if (contract.type === CONTRACT_SALE_CODE) {
        contract.default_revenue_account_id = ACCOUNT_IDS["42"];
      } else {
        contract.default_revenue_account_id = ACCOUNT_IDS["44"];
      }
    } else {
      if (contract.type === CONTRACT_SALE_CODE) {
        contract.default_revenue_account_id = ACCOUNT_IDS["41"];
      } else {
        contract.default_revenue_account_id = ACCOUNT_IDS["43"];
      }
    }
    // else if (contract.assets_type === PARKING_ASSET_TYPE_CODE) {
    //   contract.default_revenue_account_id = ACCOUNT_IDS[""];
    // } else if (contract.assets_type === LAND_ASSET_TYPE_CODE) {
    //   contract.default_revenue_account_id = ACCOUNT_IDS[""];
    // }

    // contract.default_commission_from_client_account_id: null,
    // contract.default_commission_from_owner_account_id: null,
    // contract.default_contract_price_revenue_account_id: null,
    // contract.default_contract_ratification_revenue_account_id: null,
    // contract.default_fee_revenue_account_id: null,
    // contract.default_fines_revenue_account_id: null,

    contract.default_discount_account_id = ACCOUNT_IDS["122"];
    contract.default_insurance_account_id = ACCOUNT_IDS["223"];

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

// INSERT DEFAULT CHEQUES
export async function INSERT_DEFAULT_CATEGORY() {
  const category = [
    {
      name: "AC Workstation",
      description:
        "A modern and ergonomic workstation with built-in air conditioning",
      image: "https://source.unsplash.com/random/800x600?office-desk",
    },
    {
      name: "WC Connector",
      description:
        "A high-quality connector for water closets and plumbing fixtures",
      image: "https://source.unsplash.com/random/800x600?plumbing",
    },
    {
      name: "Lighting Fixture",
      description: "An energy-efficient LED lighting fixture for office spaces",
      image: "https://source.unsplash.com/random/800x600?office-lighting",
    },
    {
      name: "Desk Organizer",
      description:
        "A versatile desk organizer with multiple compartments and storage spaces",
      image: "https://source.unsplash.com/random/800x600?desk-organizer",
    },
    {
      name: "Office Chair",
      description:
        "A comfortable and supportive office chair with adjustable features",
      image: "https://source.unsplash.com/random/800x600?office-chair",
    },
  ];
  for (const cate of category) {
    await ApiActions.insert("category", {
      data: cate,
    });
  }
}

// INSERT DEFAULT CHEQUES
export async function INSERT_DEFAULT_CHEQUES(ACCOUNT_IDS) {
  for (const cheque of DEFAULT_CHQ_INFO) {
    // merge accounts
    if (cheque.code === CHQ_PAID_CODE) {
    }

    if (cheque.code === CHQ_RECEIVED_CODE) {
      cheque.returnable_credit_account_id = ACCOUNT_IDS["122"];
      cheque.collection_credit_account_id = ACCOUNT_IDS["122"];
      cheque.default_account_id = ACCOUNT_IDS["122"];
    }

    await ApiActions.insert("cheque_pattern", {
      data: cheque,
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
  // await ApiActions.read("cheque");
  INSERT_DEFAULT_BANKS();
  INSERT_DEFAULT_MULTIPLE_DATA();
  INSERT_DEFAULT_LACK_REASONS();
  INSERT_DEFAULT_CATEGORY();
  await INSERT_DEFAULT_ACCOUNTS();
}
// INSERT_DEFAULT_CHEQUES()
// INSERT_DEFAULT_DATA()

// Define the notification schema
const notificationSchema = {
  title: String,
  description: String,
  url: String,
  status: Boolean,
};

// Function to generate a random string
function randomString(length) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Generate 50 notification objects
export async function insertIntoNotification() {
  for (let i = 0; i < 150; i++) {
    await ApiActions.insert("notification", {
      data: {
        title: randomString(Math.floor(Math.random() * (30 - 10 + 1)) + 10),
        description: randomString(
          Math.floor(Math.random() * (100 - 50 + 1)) + 50
        ),
        url: `https://example.com/${randomString(
          Math.floor(Math.random() * (10 - 5 + 1)) + 5
        )}`,
        tenant_id: TENANT_ID,
        user_id: USERS[Math.floor(Math.random() * USERS?.length)],
        status: i % 2 === 0,
      },
    });
  }
}

// Generate 50 notification objects
export async function insertIntoDefaultService() {
  let CATEGORIES = [];

  const res = await ApiActions.read("category");

  for (const item of res?.result) {
    CATEGORIES?.push(item?.id);
  }

  if (!CATEGORIES?.length) return;

  for (let i = 0; i < 150; i++) {
    await ApiActions.insert("default_service", {
      data: {
        name: randomString(Math.floor(Math.random() * (30 - 10 + 1)) + 10),

        description: randomString(
          Math.floor(Math.random() * (100 - 50 + 1)) + 50
        ),
        category_id: CATEGORIES[Math.floor(Math.random() * CATEGORIES?.length)],
        picture: `https://example.com/${randomString(
          Math.floor(Math.random() * (10 - 5 + 1)) + 5
        )}`,
        price: Math.floor(Math.random() * 400),
        display: true,
        available: true,
        service_type: 0,
      },
    });
  }
}

// Generate 50 notification objects
export async function insertIntoProblems() {
  let CATEGORIES = [];

  const res = await ApiActions.read("category");

  for (const item of res?.result) {
    CATEGORIES?.push(item?.id);
  }

  if (!CATEGORIES?.length) return;

  for (let i = 0; i < 150; i++) {
    await ApiActions.insert("category_problem", {
      data: {
        description: randomString(
          Math.floor(Math.random() * (100 - 50 + 1)) + 50
        ),
        category_id: CATEGORIES[Math.floor(Math.random() * CATEGORIES?.length)],
        minutes: Math.floor(Math.random() * 400),
        is_available: true,
      },
    });
  }
}

// insertIntoNotification();

const workers = [
  {
    card_type: 4,
    category_id: "59dd0ab6-5f81-4e12-ad9a-4bd5033af459",
    name: "worker 2",
    phone: "+971400400100",
  },
  {
    card_type: 4,
    category_id: "59dd0ab6-5f81-4e12-ad9a-4bd5033af459",
    name: "worker 3",
    phone: "+971400400200",
  },
  {
    card_type: 4,
    category_id: "59dd0ab6-5f81-4e12-ad9a-4bd5033af459",
    name: "worker 4",
    phone: "+971400400300",
  },
];

// insert times
export async function insertTimes() {
  let CATEGORIES = [];
  let WORKERS = [];
  let SUPERVISORS = [];

  const categoryRes = await ApiActions.read("category");
  const workerRes = await ApiActions.read("user", {
    conditions: [
      { type: "and", conditions: [["card_type", "=", USER_WORKER_CODE]] },
    ],
  });
  const supervisorRes = await ApiActions.read("user", {
    conditions: [
      { type: "and", conditions: [["card_type", "=", USER_SUPERVISOR_CODE]] },
    ],
  });

  let date = new Date(); //
  date.setHours(9, 0, 0, 0); 
  for (let i = 0; i < 30; i++) {
    let startDate = new Date(date); 
    let endDate = new Date(date); 
    
    startDate.setDate(startDate.getDate() + i);
    endDate.setDate(endDate.getDate() + i);

    
    startDate.setHours(9, 0, 0, 0); 
    endDate.setHours(17, 0, 0, 0); 
    for (const cate of categoryRes?.result) {
      for (const worker of workerRes?.result) {
        insertWorkDay({
          user_id: worker.id,
          category_id: cate.id,
          work_time_start: startDate,
          work_time_end: endDate,
        });
      }
      for (const supervisor of supervisorRes?.result) {
        insertWorkDay({
          user_id: supervisor.id,
          category_id: cate.id,
          work_time_start: startDate,
          work_time_end: endDate,
        });
      }
    }

    // await ApiActions.insert("category_problem", {
    //   data: {
    //     description: randomString(
    //       Math.floor(Math.random() * (100 - 50 + 1)) + 50
    //     ),
    //     category_id: CATEGORIES[Math.floor(Math.random() * CATEGORIES?.length)],
    //     minutes: Math.floor(Math.random() * 400),
    //     is_available: true,
    //   },
    // });
  }
}

async function insertWorkDay(data) {
  await ApiActions.insert("user_work_times", {
    data,
  });
}
