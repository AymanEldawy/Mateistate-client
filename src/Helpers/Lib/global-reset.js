import {
  GET_NEW_ENTRY_GRID,
  GET_NEW_VOUCHER_ENTRY_GRID,
} from "Helpers/constants";

const account = {
  final_id: null,
  name: undefined,
  note: undefined,
  number: undefined,
  parent_id: null,
  type: 1,
};

const cost_center = {
  note: null,
  parent_id: null,
  name: null,
  internal_number: null,
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
  personal_phone: null,
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
  amount: "",
  apartment_count: "",
  apartment_floor: "",
  area: "",
  bank_account_number: "",
  bank_id: "",
  basin_number: "",
  bond_date: "",
  bond_number: "",
  bond_type: "",
  building_account_id: "",
  building_bank_account_id: "",
  building_cash_account_id: "",
  building_cheque_account_id: "",
  building_deposit_account_id: "",
  building_number: "",
  commission_expense_account_id: "",
  create_into_account: "",
  create_into_account_id: "",
  create_into_cost_center: "",
  create_into_cost_center_id: "",
  created_at: "",
  currency_id: "",
  currency_val: "",
  customers_main_account_id: "",
  deferred_vat_account_id: "",
  display: "",
  drivers_apartments: "",
  emirate: "",
  gen_entries: "",
  id: "",
  lessor_id: "",
  main_cost_center_id: "",
  mezzanine_count: "",
  mezzanine_floor: "",
  name: "",
  number: "",
  office_count: "",
  office_floor: "",
  owner_balance: "",
  owner_id: "",
  owner_tax_account_id: "",
  parking_count: "",
  parking_floor: "",
  part_number: "",
  penthouse_count: "",
  penthouse_floor: "",
  purchase_date: "",
  realestate_company_account_id: "",
  service_apartments: "",
  shop_count: "",
  statement: "",
  store_count: "",
  street: "",
  suburb: "",
  underground_parking: "",
  vat_account_id: "",
  warehouse_count: "",
};

const RESET_FIELDS = {
  account,
  cost_center,
  bank,
  user,
  entry_main_data,
  voucher_main_data,
  building,
};

export function getResetFields(name) {
  return RESET_FIELDS[name] || {};
}
