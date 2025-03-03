import {
  GET_NEW_ENTRY_GRID,
  GET_NEW_VOUCHER_ENTRY_GRID,
} from "Helpers/constants";

export const contract = {
  apartment_id: null,
  parking_id: null,
  shop_id: null,
  building_id: null,
  client_id: null,
  contract_duration: null,
  contract_value: null,
  current_securing_value: null,
  description: null,
  discount_account_id: null,
  discount_rate: null,
  discount_value: null,
  feedback: null,
  final_price: null,
  insurance_account_id: null,
  lawsuit: null,
  lessor_id: null,
  paid_type: null,
  previous_securing: null,
  end_duration_date: null,
  gen_entries: true,
  revenue_account_id: null,
  start_duration_date: null,
  status: 1,
};

const account = {
  final_id: null,
  name: undefined,
  note: undefined,
  number: undefined,
  parent_id: null,
  type: 1,
};

const owner = {
  address: '',
  cell_phone: '',
  email: '',
  fax: '',
  id_card: '',
  ltnname: '',
  mailbox: '',
  name: '',
  nationality: undefined,
  phone: ''
}

const cost_center = {
  note: null,
  parent_id: null,
  name: null,
  code: null,
};

const bank = {
  address: null,
  name: null,
  number: null,
};

const user = {
  account_id: null,
  address: null,
  bank_account: null,
  bank_id: null,
  barcode: null,
  card_type: 2,
  commercial_register: null,
  created_at: null,
  date_of_birth: null,
  email: null,
  fax: null,
  files: null,
  insurance_account_id: null,
  mailbox: null,
  name: "",
  national_id: null,
  national_id_expiry: null,
  nationality: null,
  passport_expiry: null,
  passport_number: null,
  phone: null,
  profession: null,
  sponsor: null,
  sponsor_data: null,
  statement: null,
  trn_number: null,
  user_type: null,
  work_phone: null,
};

const entry_main_data = {
  credit: 0,
  // currency_id: "",
  // currency_val: null,
  debit: 0,
  difference: 0,
  note: "",
  created_at: "",
  grid: GET_NEW_ENTRY_GRID(),
};

const voucher_main_data = {
  note: "",
  grid: GET_NEW_VOUCHER_ENTRY_GRID(),
  created_at: new Date(),
  created_from: null,
  created_from_code: null,
  created_from_id: null,
  credit: null,
  currency_id: null,
  currency_val: null,
  debit: null,
  difference: null,
  id: null,
  is_archived: null,
  is_deleted: null,
  is_first_batch: null,
  number: null,
  credit_amount: 0,
  credit_total: 0,
  debit_amount: 0,
  debit_total: 0,
};

const building = {
  name: "",
  emirate: "",
  suburb: "",
  area: "",
  // street: "",
  // building_number: "",
  // part_number: "",
  // basin_number: "",
  // bond_number: "",
  // bond_type: "",
  // bond_date: "",
  // owner_id: "",
  // display: "",
  // statement: "",
  // lessor_id: "",
  // number: "",
  // purchase_date: "",
  // bank_id: "",
  // apartment_count: "",
  // penthouse_count: "",
  // parking_count: "",
  // mezzanine_count: "",
  // office_count: "",
  // warehouse_count: "",
  // service_apartments: "",
  // drivers_apartments: "",
  // apartment_floor: "",
  // penthouse_floor: "",
  // parking_floor: "",
  // mezzanine_floor: "",
  // office_floor: "",
  // underground_parking: "",
  // created_at: "",
  // building_account_id: "",
  // main_cost_center_id: "",
  // create_into_account: "",
  // create_into_cost_center: "",
  // create_into_account_id: "",
  // create_into_cost_center_id: "",
  // building_bank_account_id: "",
  // building_cash_account_id: "",
  // building_deposit_account_id: "",
  // building_cheque_account_id: "",
  // vat_account_id: "",
  // deferred_vat_account_id: "",
  // owner_balance: "",
  // owner_tax_account_id: "",
  // commission_expense_account_id: "",
  // realestate_company_account_id: "",
  // customers_main_account_id: "",
  // shop_count: "",
  // store_count: "",
  // building_insurance_account_id: "",
  // building_discount_account_id: "",
  // city: "",
  // tenant_id: "",
  // purchase_amount: "",
  // purchase_gen_entries: "",
  // purchase_currency_id: "",
  // supplier_account_id: "",
  // purchase_statement: "",
  // building_cost: "",
  // investment_owner_account_id: "",
  // investment_start_date: "",
  // investment_end_date: "",
  // terminating_tenancies: "",
  // investment_value: "",
  // investment_gen_entries: "",
  // investment_currency_id: "",
  // investment_currency_val: "",
  // renters_insurance: "",
  // building_receipt: "",
  // received_date: "",
  // received_account_id: "",
  // received_amount: "",
  // received_currency_id: "",
  // received_currency_val: "",
  // received_note: "",
  // owner_account_id: "",
  // commission_rate: "",
  // revenue_id: "",
  // entry_commission_rate: "",
  // entry_vat_rate: "",
  // entry_vat_account_id: "",
  // entry_landlord_account_id: "",
  // entry_commission_from_owner_account_id: "",
  // entry_revenue_account_id: "",
  // building_purchase_date: "",
  // building_amount: "",
  // building_gen_entries: "",
  // building_currency_id: "",
  // building_currency_val: "",
};

const reservation_property = {
  account_id: null,
  book_date: null,
  building_id: null,
  created_at: null,
  credit_account_id: null,
  credit_cost_center_id: null,
  currency_id: null,
  currency_val: null,
  debit_account_id: null,
  debit_cost_center_id: null,
  end_book_date: null,
  has_payment: null,
  id: null,
  note: null,
  number: null,
  payment_amount: null,
  property_id: null,
  property_type: null,
  reservation_expired: null,
};

const owner_expenses_types = {
  code: "",
  created_at: "",
  id: "",
  name: "",
  note: "",
  number: "",
};

const owner_expenses = {};

const category = {
  description: "",
  image: "",
  name: "",
  parent_id: "",
};

const category_problem = {
  category_id: "",
  description: "",
  is_available: "",
};

const RESET_FIELDS = {
  category,
  category_problem,
  contract,
  reservation_property,
  account,
  cost_center,
  bank,
  user,
  entry_main_data,
  voucher_main_data,
  building,
  owner_expenses_types,
  owner_expenses,
  owner,
};

export function getResetFields(name) {
  return RESET_FIELDS[name] || {};
}
