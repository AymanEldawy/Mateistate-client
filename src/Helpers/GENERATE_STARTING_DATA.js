import axios from "axios";
import { UNIQUE_REF_TABLES } from "./constants";
import INSERT_FUNCTION from "./Lib/global-insert";

const { ApiActions, baseURL } = require("./Lib/api");

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

export const USER_CUSTOMER_CODE = 1;
export const USER_SUPPLIER_CODE = 2;
export const USER_SUPERVISOR_CODE = 3;
export const USER_WORKER_CODE = 4;

export const MAIN_USERS_CODE = {
  [USER_CUSTOMER_CODE]: 121,
  [USER_SUPPLIER_CODE]: 221,
};

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
  {
    code: 1,
    name: "الاصول",
    ltnnanme: "Assets",
    type: "Balance Sheet",
    number: 3,
    level: 0,
  },
  {
    code: 11,
    name: "الموجودات الثابتة",
    ltnnanme: "Fixed Assets",
    type: "Balance Sheet",
    number: 1,
    level: 1,
  },
  {
    code: 111,
    name: "أثاث ومفروشات",
    ltnnanme: "Furniture & Fixture",
    type: "Balance Sheet",
    number: 0,
    level: 2,
  },
  {
    code: 12,
    name: "الموجودات المتداولة",
    ltnnanme: "Current assets",
    type: "Balance Sheet",
    number: 4,
    level: 1,
  },
  {
    code: 121,
    name: "الزبائن",
    ltnnanme: "Customers",
    type: "Balance Sheet",
    number: 1,
    level: 2,
  },
  {
    code: 122,
    name: "أوراق القبض",
    ltnnanme: "Notes Receivables",
    type: "Balance Sheet",
    number: 0,
    level: 2,
  },
  {
    code: 123,
    name: "الأبنية",
    ltnnanme: "Buildings",
    type: "Balance Sheet",
    number: 2,
    level: 2,
  },
  {
    code: 12301,
    name: "بناء رقم 1",
    ltnnanme: "Building No.1",
    type: "Balance Sheet",
    number: 3,
    level: 3,
  },
  {
    code: 123011,
    name: "شقق بناء رقم 1",
    ltnnanme: "Flats Building No.1",
    type: "Balance Sheet",
    number: 0,
    level: 4,
  },
  {
    code: 123012,
    name: "محلات بناء رقم 1",
    ltnnanme: "Shops Building No.1",
    type: "Balance Sheet",
    number: 0,
    level: 4,
  },
  {
    code: 123013,
    name: "فيلا 1 1",
    ltnnanme: "Villa 1 1",
    type: "Balance Sheet",
    number: 0,
    level: 4,
  },
  {
    code: 12302,
    name: "مبنى إندوس",
    ltnnanme: "indos building",
    type: "Balance Sheet",
    number: 0,
    level: 3,
  },
  {
    code: 125,
    name: "المخزون",
    ltnnanme: "Stock",
    type: "Balance Sheet",
    number: 1,
    level: 2,
  },
  {
    code: 1251,
    name: "مخزون بضاعة جاهزة آخر المدة",
    ltnnanme: "End period inventory",
    type: "Balance Sheet",
    number: 0,
    level: 3,
  },
  {
    code: 13,
    name: "الأموال الجاهزة",
    ltnnanme: "Cash on hand",
    type: "Balance Sheet",
    number: 2,
    level: 1,
  },
  {
    code: 131,
    name: "الصندوق",
    ltnnanme: "Cash",
    type: "Balance Sheet",
    number: 0,
    level: 2,
  },
  {
    code: 132,
    name: "المصرف",
    ltnnanme: "Bank",
    type: "Balance Sheet",
    number: 0,
    level: 2,
  },
  {
    code: 2,
    name: "الالتزامات",
    ltnnanme: "liabilities",
    type: "Balance Sheet",
    number: 2,
    level: 0,
  },
  {
    code: 21,
    name: "حقوق الملكية",
    ltnnanme: "Owners Equites",
    type: "Balance Sheet",
    number: 1,
    level: 1,
  },
  {
    code: 2101,
    name: "رأس المال",
    ltnnanme: "Capital",
    type: "Balance Sheet",
    number: 0,
    level: 2,
  },
  {
    code: 22,
    name: "المطاليب المتداولة",
    ltnnanme: "Current Liabilities",
    type: "Balance Sheet",
    number: 4,
    level: 1,
  },
  {
    code: 221,
    name: "الموردون",
    ltnnanme: "Suppliers",
    type: "Balance Sheet",
    number: 1,
    level: 2,
  },
  {
    code: 221001,
    name: "مورد رقم 1",
    ltnnanme: "Supplier No.1",
    type: "Balance Sheet",
    number: 0,
    level: 3,
  },
  {
    code: 222,
    name: "أوراق الدفع",
    ltnnanme: "Note Payables",
    type: "Balance Sheet",
    number: 0,
    level: 2,
  },
  {
    code: 223,
    name: "التأمينات",
    ltnnanme: "Security deposit",
    type: "Balance Sheet",
    number: 0,
    level: 2,
  },
  {
    code: 224,
    name: "الضريبة",
    ltnnanme: "VAT",
    type: "Balance Sheet",
    number: 0,
    level: 2,
  },
  {
    code: 3,
    name: "المصاريف",
    ltnnanme: "Expenses",
    type: "Profit & Loss",
    number: 3,
    level: 0,
  },
  {
    code: 31,
    name: "رواتب وأجور",
    ltnnanme: "Salaries",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  {
    code: 32,
    name: "ماء وكهرباء",
    ltnnanme: "Water and Electricity",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  {
    code: 33,
    name: "مصاريف متفرقة",
    ltnnanme: "Expenses",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  {
    code: 4,
    name: "الإيرادات",
    ltnnanme: "Revenues",
    type: "Profit & Loss",
    number: 7,
    level: 0,
  },
  {
    code: 41,
    name: "ايراد بيع الشقق",
    ltnnanme: "Flats Sales Revenue",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  {
    code: 42,
    name: "ايراد بيع المحلات",
    ltnnanme: "Shops Sales Revenue",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  {
    code: 43,
    name: "ايراد ايجار الشقق",
    ltnnanme: "Flats Rent Revenue",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  {
    code: 44,
    name: "ايراد ايجار المحلات",
    ltnnanme: " Shops Rent Revenue",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  {
    code: 45,
    name: "ايراد عمولات بيع",
    ltnnanme: "Sales commission Revenue",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  {
    code: 46,
    name: "ايراد عمولة ايجار",
    ltnnanme: "Rent Commission Revenue",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
  {
    code: 47,
    name: "ايرادات أخرى",
    ltnnanme: "Revenue",
    type: "Profit & Loss",
    number: 0,
    level: 1,
  },
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
export async function INSERT_DEFAULT_ACCOUNTS() {
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
      // ltnnanme: item?.ltnnanme,
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
  await INSERT_DEFAULT_BANKS();
  await INSERT_DEFAULT_MULTIPLE_DATA();
  await INSERT_DEFAULT_LACK_REASONS();
  await insertIntoMaterials();
  // INSERT_DEFAULT_CATEGORY();
  // await INSERT_DEFAULT_ACCOUNTS();
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
  let USERS = [];

  const res = await ApiActions.read("user");

  for (const item of res?.result) {
    USERS?.push(item?.id);
  }
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
        // tenant_id: TENANT_ID,
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
    let service =
      default_service_update[
        Math.floor(Math.random() * default_service_update?.length)
      ];
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
        ...service,
      },
    });
  }
}

export async function updateMaterialsPrice() {
  const matRes = await ApiActions.read("material");
  for (const mat of matRes?.result) {
    await ApiActions.insert("material_prices", {
      data: {
        material_id: mat.id,
        last_price: Math.floor(Math.random() * 200),
        vat_rate: Math.floor(Math.random() * 5),
      },
    });
  }
}

export async function updateMaterials() {
  let CATEGORIES = [];

  const matRes = await ApiActions.read("material");
  const ress = await ApiActions.read("category");

  for (const item of ress?.result) {
    CATEGORIES?.push(item?.id);
  }
  for (const mat of matRes?.result) {
    await ApiActions.update("material", {
      conditions: [{ type: "and", conditions: [["id", "=", mat.id]] }],
      updates: {
        category_id: CATEGORIES[Math.floor(Math.random() * CATEGORIES?.length)],
      },
    });
  }
}

// Generate 50 notification objects
export async function insertIntoMaterials() {
  let MATERIAL_GROUP = [];

  const res = await ApiActions.read("material_group");

  for (const item of res?.result) {
    MATERIAL_GROUP?.push(item?.id);
  }

  let CATEGORIES = [];

  const ress = await ApiActions.read("category");

  for (const item of ress?.result) {
    CATEGORIES?.push(item?.id);
  }

  if (!MATERIAL_GROUP?.length) return;

  for (let i = 0; i < 150; i++) {
    await ApiActions.insert("material", {
      data: {
        material_type: 1,
        code: i + 1,
        name: randomString(Math.floor(Math.random() * (30 - 10 + 1)) + 10),
        unit1: randomString(Math.floor(Math.random() * (30 - 10 + 1)) + 10),
        unit2: randomString(Math.floor(Math.random() * (30 - 10 + 1)) + 10),
        unit3: randomString(Math.floor(Math.random() * (30 - 10 + 1)) + 10),
        exchange2: Math.floor(Math.random() * (30 - 10 + 1)) + 10,
        category_id: CATEGORIES[Math.floor(Math.random() * CATEGORIES?.length)],
        material_group_id:
          MATERIAL_GROUP[Math.floor(Math.random() * MATERIAL_GROUP?.length)],
      },
    });
  }
}

const problems = [
  {
    description: "Replace worn-out gasket on hydraulic pump.",
    minutes: 45,
  },
  {
    description: "Clean and lubricate conveyor belt rollers.",
    minutes: 60,
  },
  {
    description: "Fix leaking pipe joint in the cooling system.",
    minutes: 90,
  },
  {
    description: "Replace broken handle on equipment cabinet.",
    minutes: 30,
  },
  {
    description: "Adjust tension on drive belts of industrial mixer.",
    minutes: 45,
  },
  {
    description: "Repair electrical wiring in control panel.",
    minutes: 60,
  },
  {
    description: "Inspect and replace air filters in HVAC units.",
    minutes: 75,
  },
  {
    description: "Grease fittings on production line machinery.",
    minutes: 45,
  },
  {
    description: "Replace worn-out seals on hydraulic cylinders.",
    minutes: 60,
  },
  {
    description: "Clean and calibrate sensors on packaging machine.",
    minutes: 90,
  },
  {
    description: "Repair conveyor belt motor.",
    minutes: 30,
  },
  {
    description: "Inspect and tighten bolts on assembly line equipment.",
    minutes: 45,
  },
  {
    description: "Replace worn-out bearings in conveyor system.",
    minutes: 60,
  },
  {
    description: "Fix broken switch on control panel.",
    minutes: 75,
  },
  {
    description: "Adjust and align robotic arms in manufacturing cell.",
    minutes: 45,
  },
  {
    description: "Clean and inspect heat exchangers in HVAC system.",
    minutes: 60,
  },
  {
    description: "Replace damaged pneumatic hoses on assembly line.",
    minutes: 90,
  },
  {
    description: "Repair leaking hydraulic valve.",
    minutes: 30,
  },
  {
    description: "Inspect and calibrate temperature sensors.",
    minutes: 45,
  },
  {
    description: "Replace worn-out filters in air compressor.",
    minutes: 60,
  },
  {
    description: "Grease chains and sprockets on packaging line.",
    minutes: 75,
  },
  {
    description: "Repair broken weld on structural frame.",
    minutes: 45,
  },
  {
    description: "Inspect and replace worn-out belts on conveyor system.",
    minutes: 60,
  },
  {
    description:
      "Fix malfunctioning control valve in water circulation system.",
    minutes: 90,
  },
  {
    description: "Replace faulty solenoid valve in pneumatic system.",
    minutes: 30,
  },
  {
    description: "Inspect and adjust tension on drive chains.",
    minutes: 45,
  },
  {
    description: "Clean and lubricate guide rails on robotic assembly arm.",
    minutes: 60,
  },
  {
    description: "Repair broken sensor on automated packaging line.",
    minutes: 75,
  },
  {
    description: "Adjust alignment of conveyor belt rollers.",
    minutes: 45,
  },
  {
    description: "Inspect and replace worn-out seals on hydraulic cylinders.",
    minutes: 60,
  },
  {
    description: "Fix broken safety switch on production line.",
    minutes: 90,
  },
  {
    description: "Replace worn-out gasket on hydraulic pump.",
    minutes: 45,
  },
  {
    description: "Clean and lubricate conveyor belt rollers.",
    minutes: 60,
  },
  {
    description: "Fix leaking pipe joint in the cooling system.",
    minutes: 90,
  },
  {
    description: "Replace broken handle on equipment cabinet.",
    minutes: 30,
  },
  {
    description: "Adjust tension on drive belts of industrial mixer.",
    minutes: 45,
  },
  {
    description: "Repair electrical wiring in control panel.",
    minutes: 60,
  },
  {
    description: "Inspect and replace air filters in HVAC units.",
    minutes: 75,
  },
  {
    description: "Grease fittings on production line machinery.",
    minutes: 45,
  },
  {
    description: "Replace worn-out seals on hydraulic cylinders.",
    minutes: 60,
  },
  {
    description: "Clean and calibrate sensors on packaging machine.",
    minutes: 90,
  },
  {
    description: "Repair conveyor belt motor.",
    minutes: 30,
  },
  {
    description: "Inspect and tighten bolts on assembly line equipment.",
    minutes: 45,
  },
  {
    description: "Replace worn-out bearings in conveyor system.",
    minutes: 60,
  },
  {
    description: "Fix broken switch on control panel.",
    minutes: 75,
  },
  {
    description: "Adjust and align robotic arms in manufacturing cell.",
    minutes: 45,
  },
  {
    description: "Clean and inspect heat exchangers in HVAC system.",
    minutes: 60,
  },
  {
    description: "Replace damaged pneumatic hoses on assembly line.",
    minutes: 90,
  },
  {
    description: "Repair leaking hydraulic valve.",
    minutes: 30,
  },
  {
    description: "Inspect and calibrate temperature sensors.",
    minutes: 45,
  },
  {
    description: "Replace worn-out filters in air compressor.",
    minutes: 60,
  },
  {
    description: "Grease chains and sprockets on packaging line.",
    minutes: 75,
  },
  {
    description: "Repair broken weld on structural frame.",
    minutes: 45,
  },
  {
    description: "Inspect and replace worn-out belts on conveyor system.",
    minutes: 60,
  },
  {
    description:
      "Fix malfunctioning control valve in water circulation system.",
    minutes: 90,
  },
  {
    description: "Replace faulty solenoid valve in pneumatic system.",
    minutes: 30,
  },
  {
    description: "Inspect and adjust tension on drive chains.",
    minutes: 45,
  },
  {
    description: "Clean and lubricate guide rails on robotic assembly arm.",
    minutes: 60,
  },
  {
    description: "Repair broken sensor on automated packaging line.",
    minutes: 75,
  },
  {
    description: "Adjust alignment of conveyor belt rollers.",
    minutes: 45,
  },
  {
    description: "Inspect and replace worn-out seals on hydraulic cylinders.",
    minutes: 60,
  },
  {
    description: "Fix broken safety switch on production line.",
    minutes: 90,
  },
  {
    description: "Replace worn-out bearings in industrial gearbox.",
    minutes: 45,
  },
  {
    description: "Calibrate pressure sensors in manufacturing equipment.",
    minutes: 60,
  },
  {
    description: "Inspect and clean water filters in cooling tower system.",
    minutes: 75,
  },
  {
    description: "Repair damaged conveyor belt splice.",
    minutes: 45,
  },
  {
    description: "Replace worn-out seals on hydraulic pumps.",
    minutes: 60,
  },
  {
    description: "Fix broken actuator on pneumatic control system.",
    minutes: 90,
  },
  {
    description: "Inspect and replace worn-out rollers on assembly line.",
    minutes: 30,
  },
  {
    description: "Adjust alignment of robotic welding arm.",
    minutes: 45,
  },
  {
    description: "Clean and calibrate weighing scales in packaging area.",
    minutes: 60,
  },
  {
    description: "Replace worn-out filters in ventilation system.",
    minutes: 75,
  },
  {
    description: "Repair electrical fault in industrial oven control panel.",
    minutes: 45,
  },
  {
    description: "Inspect and lubricate chain drive on forklift.",
    minutes: 60,
  },
  {
    description: "Fix broken conveyor belt sensor.",
    minutes: 90,
  },
  {
    description: "Replace worn-out brushes in vacuum packaging machine.",
    minutes: 30,
  },
  {
    description: "Inspect and adjust alignment of packaging line conveyor.",
    minutes: 45,
  },
  {
    description: "Repair leaking hydraulic cylinder on forklift.",
    minutes: 60,
  },
  {
    description: "Clean and calibrate temperature probes in laboratory oven.",
    minutes: 75,
  },
  {
    description: "Replace worn-out seals on hydraulic valves.",
    minutes: 45,
  },
  {
    description: "Fix broken safety interlock on industrial press.",
    minutes: 60,
  },
  {
    description:
      "Inspect and adjust tension on drive belts of automated sorter.",
    minutes: 90,
  },
];

// Generate 50 notification objects
export async function insertIntoProblems() {
  let CATEGORIES = [];

  const res = await ApiActions.read("category");

  for (const item of res?.result) {
    CATEGORIES?.push(item?.id);
  }

  if (!CATEGORIES?.length) return;

  for (let i = 0; i < 150; i++) {
    let problem = problems[Math.floor(Math.random() * problems?.length)];

    await ApiActions.insert("category_problem", {
      data: {
        description: problem.description?.slice(0,55),
        category_id: CATEGORIES[Math.floor(Math.random() * CATEGORIES?.length)],
        minutes: problem.minutes,
        is_available: true,
        ...problem,
      },
    });
  }
}

const default_service_update = [
  {
    name: "HVAC System Inspection",
    description:
      "Comprehensive inspection of HVAC system components including filters, ducts, and thermostat calibration.",
    price: 120,
    picture: "https://source.unsplash.com/8cG9jD1q8Xw",
  },
  {
    name: "Electrical Panel Upgrade",
    description:
      "Upgrade of electrical panel to ensure safety and compliance with current electrical codes.",
    price: 300,
    picture: "https://source.unsplash.com/RtfxjyLWvlk",
  },
  {
    name: "Plumbing Leak Repair",
    description:
      "Locate and repair leaks in plumbing systems including pipes, faucets, and fixtures.",
    price: 150,
    picture: "https://source.unsplash.com/sBx6tVQ64xI",
  },
  {
    name: "Roof Inspection and Repair",
    description:
      "Thorough inspection of roof for damages and necessary repairs to ensure structural integrity.",
    price: 250,
    picture: "https://source.unsplash.com/_-2Mw5iCeQ4",
  },
  {
    name: "Gutter Cleaning and Maintenance",
    description:
      "Cleaning and maintenance of gutters to prevent clogging and ensure proper water drainage.",
    price: 80,
    picture: "https://source.unsplash.com/HTFbJb5ldrg",
  },
  {
    name: "Fireplace Cleaning and Inspection",
    description:
      "Cleaning and inspection of fireplace and chimney to remove debris and ensure safe operation.",
    price: 100,
    picture: "https://source.unsplash.com/3tEQFtRvcko",
  },
  {
    name: "Pool Maintenance",
    description:
      "Regular maintenance and cleaning of pool including chemical balancing, skimming, and equipment checks.",
    price: 200,
    picture: "https://source.unsplash.com/8DCj50kOgIE",
  },
  {
    name: "Landscaping Service",
    description:
      "Professional landscaping services including lawn mowing, trimming, and garden maintenance.",
    price: 120,
    picture: "https://source.unsplash.com/YWR2SXqFjZ0",
  },
  {
    name: "Appliance Repair",
    description:
      "Repair and maintenance of household appliances such as refrigerators, washers, and dryers.",
    price: 180,
    picture: "https://source.unsplash.com/9HLO52jB8Hw",
  },
  {
    name: "Painting Services",
    description:
      "Interior and exterior painting services including surface preparation and color consultation.",
    price: 350,
    picture: "https://source.unsplash.com/0q6m1vA7Lvw",
  },
  {
    name: "Carpet Cleaning",
    description:
      "Professional cleaning of carpets and upholstery using eco-friendly and effective cleaning methods.",
    price: 100,
    picture: "https://source.unsplash.com/1zTl4WIRglw",
  },
  {
    name: "Security System Installation",
    description:
      "Installation of advanced security systems including cameras, alarms, and smart home integration.",
    price: 400,
    picture: "https://source.unsplash.com/7Fg8p-Dcfm0",
  },
  {
    name: "Flooring Installation",
    description:
      "Installation of hardwood, laminate, or tile flooring with attention to detail and quality craftsmanship.",
    price: 300,
    picture: "https://source.unsplash.com/n3sF5jvNw-U",
  },
  {
    name: "Drywall Repair",
    description:
      "Repair of drywall damages including cracks, holes, and water damage to restore smooth and even surfaces.",
    price: 150,
    picture: "https://source.unsplash.com/N0XGbbY1YVc",
  },
  {
    name: "Pest Control Services",
    description:
      "Effective pest control services to eliminate pests such as ants, rodents, termites, and bedbugs.",
    price: 120,
    picture: "https://source.unsplash.com/tPnxr9JUqic",
  },
  {
    name: "Fence Installation and Repair",
    description:
      "Installation or repair of fences including wood, vinyl, and metal fences for privacy and security.",
    price: 250,
    picture: "https://source.unsplash.com/aZo-44l8GWo",
  },
  {
    name: "Window Cleaning",
    description:
      "Professional cleaning of windows inside and out to achieve streak-free and sparkling clean windows.",
    price: 80,
    picture: "https://source.unsplash.com/ItXY5y2cGSw",
  },
  {
    name: "Deck Maintenance",
    description:
      "Regular maintenance and repair of decks including cleaning, staining, and board replacement.",
    price: 180,
    picture: "https://source.unsplash.com/X_z8Qr-kxjY",
  },
  {
    name: "Junk Removal",
    description:
      "Removal and disposal of unwanted junk and debris from homes, offices, or construction sites.",
    price: 120,
    picture: "https://source.unsplash.com/5JWuE-3h_3E",
  },
  {
    name: "Bathroom Remodeling",
    description:
      "Full or partial bathroom remodeling including plumbing, tiling, fixtures, and modern design upgrades.",
    price: 500,
    picture: "https://source.unsplash.com/JX6v3xS-16A",
  },
  {
    name: "Kitchen Renovation",
    description:
      "Complete kitchen renovation including cabinetry, countertops, appliances, and lighting upgrades.",
    price: 600,
    picture: "https://source.unsplash.com/1fm6pcz5RQE",
  },
  {
    name: "Tree Trimming and Pruning",
    description:
      "Trimming and pruning of trees to enhance appearance, promote growth, and maintain safety.",
    price: 150,
    picture: "https://source.unsplash.com/l7PwAv6leLk",
  },
  {
    name: "Concrete Repair and Resurfacing",
    description:
      "Repair and resurfacing of damaged concrete surfaces including driveways, sidewalks, and patios.",
    price: 200,
    picture: "https://source.unsplash.com/qW0fUJ7Np0s",
  },
  {
    name: "Pressure Washing",
    description:
      "High-pressure washing of exterior surfaces including siding, walkways, and driveways to remove dirt and stains.",
    price: 100,
    picture: "https://source.unsplash.com/MkOKFFlAEe8",
  },
  {
    name: "Cabinet Refacing",
    description:
      "Refacing of kitchen or bathroom cabinets to update appearance without the cost of full replacement.",
    price: 250,
    picture: "https://source.unsplash.com/K3gWZg8PqU4",
  },
  {
    name: "Attic Insulation Installation",
    description:
      "Installation of insulation in attics to improve energy efficiency and maintain consistent indoor temperatures.",
    price: 300,
    picture: "https://source.unsplash.com/Xe8ykq2ahmQ",
  },
  {
    name: "Ceiling Fan Installation",
    description:
      "Installation of ceiling fans to improve air circulation and energy efficiency in homes or offices.",
    price: 120,
    picture: "https://source.unsplash.com/DjGFndcw15A",
  },
  {
    name: "Garage Door Repair",
    description:
      "Repair and maintenance of garage doors including springs, tracks, and opener systems.",
    price: 180,
    picture: "https://source.unsplash.com/pv_vR3s6Fj0",
  },
  {
    name: "Solar Panel Installation",
    description:
      "Installation of solar panels to harness renewable energy and reduce electricity bills.",
    price: 500,
    picture: "https://source.unsplash.com/YL8eNHWUVS0",
  },
  {
    name: "Emergency Plumbing Service",
    description:
      "Emergency plumbing services available 24/7 for immediate repair of leaks, clogs, and plumbing emergencies.",
    price: 200,
    picture: "https://source.unsplash.com/nIYj8lE8uLw",
  },
  {
    name: "Siding Repair and Replacement",
    description:
      "Repair or replacement of damaged siding to enhance curb appeal and protect against weather elements.",
    price: 300,
    picture: "https://source.unsplash.com/cC6LxL8UW5k",
  },
  {
    name: "Wallpaper Removal and Painting",
    description:
      "Removal of old wallpaper followed by professional painting to refresh and modernize interior spaces.",
    price: 150,
    picture: "https://source.unsplash.com/U0lVRz6",
  },
];

// insertIntoNotification();

// insert times
export async function insertTimes() {
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
    for (const worker of workerRes?.result) {
      insertWorkDay({
        user_id: worker.id,
        work_time_start: startDate,
        work_time_end: endDate,
      });
    }
    for (const supervisor of supervisorRes?.result) {
      insertWorkDay({
        user_id: supervisor.id,
        work_time_start: startDate,
        work_time_end: endDate,
      });
    }
  }
}

async function insertWorkDay(data) {
  await ApiActions.insert("user_work_times", {
    data,
  });
}

//
// // Generate 50 notification objects
// export async function insertIntoContract() {
//   let BUILDINGS = [];
//   const res = await ApiActions.read("building");
//   for (const item of res?.result) {
//     BUILDINGS?.push(item?.id);
//   }
//   let APARTMENT = [];
//   const resAPARTMENT = await ApiActions.read("apartment");
//   for (const item of resAPARTMENT?.result) {
//     APARTMENT?.push(item?.id);
//   }

//   let SHOP = [];
//   const resSHOP = await ApiActions.read("shop");
//   for (const item of resSHOP?.result) {
//     SHOP?.push(item?.id);
//   }

//   let PARKING = [];
//   const resPARKING = await ApiActions.read("parking");
//   for (const item of resPARKING?.result) {
//     PARKING?.push(item?.id);
//   }

//   for (let i = 0; i < 150; i++) {
//     await ApiActions.insert("contract", {
//       data: {
//         material_type: 1,
//         code: i+1,
//         name: randomString(Math.floor(Math.random() * (30 - 10 + 1)) + 10),
//         unit1: randomString(Math.floor(Math.random() * (30 - 10 + 1)) + 10),
//         unit2: randomString(Math.floor(Math.random() * (30 - 10 + 1)) + 10),
//         unit3: randomString(Math.floor(Math.random() * (30 - 10 + 1)) + 10),
//         exchange2: Math.floor(Math.random() * (30 - 10 + 1)) + 10,
//         category_id: CATEGORIES[Math.floor(Math.random() * CATEGORIES?.length)],
//         material_group_id:
//           MATERIAL_GROUP[Math.floor(Math.random() * MATERIAL_GROUP?.length)],
//       },
//     });
//   }
// }
// Generate 50 notification objects
export async function updateUserToken() {
  // const DEFAULT_USERS = [
  //   {
  //     name: "Owner 1",
  //     card_type: 2,
  //     phone: "+971200200200",
  //   },
  //   {
  //     name: "Owner 2",
  //     card_type: 2,
  //     phone: "+971200200201",
  //   },
  //   {
  //     name: "Customer 1",
  //     card_type: 1,
  //     phone: "+971100100100",
  //   },
  //   {
  //     name: "Customer 2",
  //     card_type: 1,
  //     phone: "+971100100101",
  //   },
  //   {
  //     name: "Supervisor 1",
  //     card_type: 3,
  //     phone: "+971300300300",
  //   },
  //   {
  //     name: "Supervisor 2",
  //     card_type: 3,
  //     phone: "+971300300301",
  //   },
  //   {
  //     name: "Worker 1",
  //     card_type: 4,
  //     phone: "+971400400400",
  //   },
  //   {
  //     name: "Worker 2",
  //     card_type: 4,
  //     phone: "+971400400401",
  //   },
  // ];
  // for (const user of DEFAULT_USERS) {
  //   await INSERT_FUNCTION.user(user);
  // }

  const res = await ApiActions.read("user");
  for (const item of res?.result) {
    await ApiActions.update("user", {
      conditions: [{ type: "and", conditions: [["id", "=", item?.id]] }],
      updates: { token: "123456" },
    });
  }
  for (const item of res?.result) {
    let token = await axios(`http://203.161.62.124:5001/verify_token`, {
      method: "POST",
      data: {
        phone_number: item.phone,
        token: "123456",
      },
    });
    token = token.data;
    await axios(`http://203.161.62.124:5001/singup`, {
      method: "POST",
      headers: {
        Authorization: token?.access_token,
      },
      data: {
        password: "12121212",
      },
    });
  }
}
