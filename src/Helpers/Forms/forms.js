import {
  ACCOUNTING_VOUCHER_PATTERN_STEPS,
  APARTMENT_STEPS,
  ASSETS_STEPS,
  CHEQUE_PATTERN_STEPS,
  BUILDING_STEPS,
  CONTRACTS_PATTERN_STEPS,
  PARKING_STEPS,
  SELECT_LISTS,
  SHOP_STEPS,
  UNIQUE_REF_TABLES,
  USER_STEPS,
  VILLA_STEPS,
  VOUCHER_PATTERN_STEPS,
  LAWSUIT_STEPS,
  SERVICE_STEPS,
  LAND_STEPS,
  BILL_PATTERN_STEPS,
  MATERIAL_STEPS,
  BILL_STEPS,
} from "Helpers/constants";
import { CONTRACTS_FORM } from "./contract-forms";
import FIELDS_STRUCTURE from "./fields-structure";

const land = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  FIELDS_STRUCTURE.number(),
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  FIELDS_STRUCTURE.numberField({
    label: "type",
    name: "type",
  }),
  FIELDS_STRUCTURE.switchField({ label: "ban", name: "ban" }),
  FIELDS_STRUCTURE.textField({ label: "land_no", name: "land_no" }),
  FIELDS_STRUCTURE.textField({ label: "last_name", name: "last_name" }),
  FIELDS_STRUCTURE.uniqueField({
    label: "customer_id",
    name: "customer_id",
    ref_table: "account",
  }),
  FIELDS_STRUCTURE.dateField({ label: "date", name: "date", type: "date" }),
  FIELDS_STRUCTURE.textField({ label: "city", name: "city", type: "text" }),
  FIELDS_STRUCTURE.textField({ label: "region", name: "region", type: "text" }),
  FIELDS_STRUCTURE.textField({ label: "space", name: "space", type: "text" }),
  FIELDS_STRUCTURE.numberField({ label: "area", name: "area", type: "number" }),
  FIELDS_STRUCTURE.textField({
    label: "area_unit",
    name: "area_unit",
    type: "text",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "price",
    name: "price",
    type: "number",
  }),
  FIELDS_STRUCTURE.textField({
    label: "license_no",
    name: "license_no",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({
    label: "license",
    name: "license",
    type: "text",
  }),
  {
    label: "license_date",
    name: "license_date",
    type: "date",
  },
  FIELDS_STRUCTURE.textField({
    label: "details",
    name: "details",
    type: "text",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "land_type",
    name: "land_type",
    type: "number",
  }),
  FIELDS_STRUCTURE.textField({ label: "side", name: "side", type: "text" }),
  FIELDS_STRUCTURE.textField({
    label: "street_name",
    name: "street_name",
    type: "text",
  }),
  {
    label: "street_count",
    name: "street_count",
    type: "number",
  },
  FIELDS_STRUCTURE.switchField({
    label: "buildble",
    name: "buildble",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "landowner",
    name: "landowner",
    type: "number",
  }),
  {
    label: "begin_land_value",
    name: "begin_land_value",
    type: "number",
  },
  {
    label: "currency_begin_land_id",
    name: "currency_begin_land_id",
    is_ref: true,
    ref_table: "currency",
    ref_name: "code",
  },
  {
    label: "currency_val_begin_land",
    name: "currency_val_begin_land",
    type: "number",
  },

  FIELDS_STRUCTURE.cost_center({
    label: "begin_land_cost_center_id",
    name: "begin_land_cost_center_id",
  }),

  FIELDS_STRUCTURE.currency({
    label: "currency_purchase_id",
    name: "currency_purchase_id",
  }),
  {
    label: "currency_val_purchase",
    name: "currency_val_purchase",
    type: "number",
  },
  {
    label: "purchase_note",
    name: "purchase_note",
    type: "text",
  },
  FIELDS_STRUCTURE.account(),
  {
    label: "cuowner_id",
    name: "cuowner_id",
    is_ref: true,
    ref_table: "owner",
  },
  FIELDS_STRUCTURE.cost_center(),
  {
    label: "bank_account_id",
    name: "bank_account_id",
    is_ref: true,
    ref_table: "account", // unknown table
  },
  {
    label: "commission_percent",
    name: "commission_percent",
    type: "number",
  },
  {
    label: "account_comm_income_id",
    name: "account_comm_income_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "used_end_date",
    name: "used_end_date",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "customer_owner_id",
    name: "customer_owner_id",
    is_ref: true,
    ref_table: "owner", // unknown table
  },
  {
    label: "owner_account_id",
    name: "owner_account_id",
    is_ref: true,
    ref_table: "owner", // unknown table
  },
  {
    label: "identity_value",
    name: "identity_value",
    type: "number",
  },
  {
    label: "currency_identity_id",
    name: "currency_identity_id",
    is_ref: true,
    ref_table: "currency",
    ref_name: "code",
  },
  {
    label: "currency_valid_entity",
    name: "currency_valid_entity",
    type: "number",
  },
  {
    label: "identity_begin_date",
    name: "identity_begin_date",
    type: "date",
  },
  {
    label: "identity_end_date",
    name: "identity_end_date",
    type: "date",
  },
  {
    label: "create_entry_investment",
    name: "create_entry_investment",
    type: "boolean",
    key: "switch",
  },
  {
    label: "identity_entry_id",
    name: "identity_entry_id",
    is_ref: true,
    ref_table: "identity_entry", // unknown table
  },
  {
    label: "identity_note",
    name: "identity_note",
    type: "text",
  },
  {
    label: "ltn_land_type",
    name: "ltn_land_type",
    type: "text",
  },
  FIELDS_STRUCTURE.textField({
    label: "ltn_city",
    name: "ltn_city",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({
    label: "ltn_region",
    name: "ltn_region",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({
    label: "ltn_space",
    name: "ltn_space",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({
    label: "ltn_license",
    name: "ltn_license",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({
    label: "ltn_side",
    name: "ltn_side",
    type: "text",
  }),
  FIELDS_STRUCTURE.numberField({ label: "rent", name: "rent", type: "number" }),
  FIELDS_STRUCTURE.currency({
    label: "rent_currency_id",
    name: "rent_currency_id",
  }),
];

const land_accumulate = [{ name: "land_id", is_ref: true, ref_table: "land" }];
const land_rental_price = [
  FIELDS_STRUCTURE.id(),
  {
    label: "land_id",
    name: "land_id",
    is_ref: true,
    ref_table: "land",
    hide_in_form: true,
  },
  {
    label: "date",
    name: "date",
    type: "date",
  },
  {
    label: "price",
    name: "price",
    type: "number",
  },
  FIELDS_STRUCTURE.currency({ hideValue: true }),
  FIELDS_STRUCTURE.note(),
];

const land_selling_price = [
  FIELDS_STRUCTURE.id(),
  {
    label: "land_id",
    name: "land_id",
    is_ref: true,
    ref_table: "land",
    hide_in_form: true,
  },
  {
    label: "date",
    name: "date",
    type: "date",
  },
  {
    label: "price",
    name: "price",
    type: "number",
  },
  FIELDS_STRUCTURE.currency({ hideValue: true }),
  FIELDS_STRUCTURE.note(),
];

// ==== Start Cards
const reservation_property = [
  // FIELDS_STRUCTURE.dateField({
  //   label: "created_at",
  //   name: "created_at",
  //   type: "date",
  // }),
  FIELDS_STRUCTURE.account({
    required: true,
    ref_table: UNIQUE_REF_TABLES.clients,
  }),

  FIELDS_STRUCTURE.selectField({
    label: "property_type",
    name: "property_type",
    list: SELECT_LISTS("contact_pattern_assets_type"),
  }),

  FIELDS_STRUCTURE.uniqueField({
    label: "building_id",
    name: "building_id",
    ref_table: "building",
    hideAdd: true,
    required: true,
  }),

  {
    label: "property_id",
    name: "property_id",
    type: "uuid",
    required: true,
  },
  FIELDS_STRUCTURE.dateField({
    label: "book_date",
    name: "book_date",
    type: "date",
  }),
  {
    label: "end_book_date",
    name: "end_book_date",
    type: "date",
    required: false,
  },
  FIELDS_STRUCTURE.textField({ label: "note", name: "note", type: "text" }),
  {
    label: "has_payment",
    name: "has_payment",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  FIELDS_STRUCTURE.selectField({
    label: "payment_method",
    name: "payment_method",
    list: [
      { id: 1, name: "credit" },
      { id: 2, name: "cash" },
    ], // update future
  }),
  {
    label: "reservation_expired",
    name: "reservation_expired",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "payment_amount",
    name: "payment_amount",
    type: "number",
    required: false,
  },
  {
    label: "currency_id",
    name: "currency_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "currency",
    ref_col: "id",
  },
  FIELDS_STRUCTURE.account({
    label: "debit",
    name: "debit_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "credit",
    name: "credit_account_id",
  }),
  FIELDS_STRUCTURE.cost_center({
    label: "debit_cost_center_id",
    name: "debit_cost_center_id",
  }),
  FIELDS_STRUCTURE.cost_center({
    label: "credit_cost_center_id",
    name: "credit_cost_center_id",
  }),
];

const account = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  FIELDS_STRUCTURE.number({
    name: "internal_number",
  }),
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },
  {
    label: "type",
    name: "type",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: SELECT_LISTS("account_type"),
    required: true,
  },

  FIELDS_STRUCTURE.note(),
  // FIELDS_STRUCTURE.currency(),
  FIELDS_STRUCTURE.account({
    label: "final_id",
    name: "final_id",
    no_filter: true,
  }),
  FIELDS_STRUCTURE.account({
    label: "parent_id",
    name: "parent_id",
    no_filter: true,
  }),
];

const account_assembly = [FIELDS_STRUCTURE.account()];
const account_distributive = [
  FIELDS_STRUCTURE.account(),

  {
    label: "percentage",
    name: "percentage",
    type: "number",
  },
];

const lessor = [
  FIELDS_STRUCTURE.id(),
  { label: "full_name", name: "name", type: "text", required: true },
  { label: "ltnname", name: "ltnname", type: "text", required: false },
  FIELDS_STRUCTURE.numberField({
    label: "passport",
    name: "passport",
    type: "number",
  }),
  {
    label: "passport_expiry_date",
    name: "passport_expiry_date",
    type: "date",
  },
  FIELDS_STRUCTURE.numberField({
    label: "id_card",
    name: "id_card",
    type: "number",
  }),
  {
    label: "lessor_card",
    name: "lessor_card",
    type: "number",
  },
  {
    label: "cell_phone",
    name: "cell_phone",
    type: "number",
  },
  {
    label: "number",
    name: "number",
    type: "number",

    hide_in_form: true,
  },
  {
    label: "address",
    name: "address",
    type: "text",
  },
  FIELDS_STRUCTURE.nationality(),
  FIELDS_STRUCTURE.textField({ label: "mobile", name: "mobile", type: "text" }),
  FIELDS_STRUCTURE.textField({ label: "fax", name: "fax", type: "text" }),
  FIELDS_STRUCTURE.textField({
    label: "mailbox",
    name: "mailbox",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({ label: "email", name: "email", type: "text" }),
  FIELDS_STRUCTURE.textField({ label: "note", name: "note", type: "text" }),
  FIELDS_STRUCTURE.textField({ label: "role", name: "role", type: "text" }),
];

const owner = [
  FIELDS_STRUCTURE.id(),
  { label: "full_name", name: "name", type: "text", required: true },
  { label: "ltnname", name: "ltnname", type: "text", required: false },
  FIELDS_STRUCTURE.textField({
    label: "id_card",
    name: "id_card",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({ label: "phone", name: "phone", type: "text" }),
  FIELDS_STRUCTURE.textField({
    label: "cell_phone",
    name: "cell_phone",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({ label: "fax", name: "fax", type: "text" }),
  FIELDS_STRUCTURE.textField({
    label: "mailbox",
    name: "mailbox",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({ label: "email", name: "email", type: "text" }),
  FIELDS_STRUCTURE.textField({
    label: "address",
    name: "address",
    type: "text",
  }),
  FIELDS_STRUCTURE.nationality(),
];

const seller = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  { label: "full_name", name: "name", type: "text", required: true },
  { label: "ltnname", name: "ltnname", type: "text", required: false },
  FIELDS_STRUCTURE.nationality(),
  FIELDS_STRUCTURE.numberField({
    label: "id_card",
    name: "id_card",
    type: "number",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "passport",
    name: "passport",
    type: "number",
  }),
  {
    label: "work_card_number",
    name: "work_card_number",
    type: "number",
  },
  FIELDS_STRUCTURE.textField({ label: "mobile", name: "mobile", type: "text" }),
  FIELDS_STRUCTURE.textField({
    label: "cellPhone",
    name: "cellPhone",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({ label: "fax", name: "fax", type: "text" }),
  FIELDS_STRUCTURE.textField({
    label: "mailbox",
    name: "mailbox",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({ label: "email", name: "email", type: "text" }),
  FIELDS_STRUCTURE.textField({
    label: "address",
    name: "address",
    type: "text",
  }),
  {
    label: "minimum_commission",
    name: "minimum_commission",
    type: "number",
    required: true,
  },
  {
    label: "maximum_discount",
    name: "maximum_discount",
    type: "number",
    required: true,
  },
  {
    label: "statement",
    name: "statement",
    type: "text",
  },
];

const user_general = [
  FIELDS_STRUCTURE.uniqueField({
    name: "building_id",
    hide_in_form: true,
    ref_table: "building",
  }),
  FIELDS_STRUCTURE.uniqueField({
    name: "category_id",
    hide_in_form: true,
    ref_table: "category",
  }),
  FIELDS_STRUCTURE.id(),
  {
    label: "number",
    name: "number",
    type: "number",

    hide_in_form: true,
  },
  FIELDS_STRUCTURE.name(),
  // { label: "ltnname", name: "ltnname", type: "text", required: false },

  FIELDS_STRUCTURE.created_at(),
  {
    label: "card_type",
    name: "card_type",
    required: true,
    key: "select",
    intValue: true,
    list: SELECT_LISTS("user_type"),
    selectFirstAsDefault: true,
    disabledWhenKeyValid: "id",
  },
  {
    label: "trn_number",
    name: "trn_number",
    type: "number",
  },
  {
    label: "account_id",
    name: "account_id",
    required: true,
    is_ref: true,
    ref_table: "account",
    hide_in_form: true,
  },
  {
    label: "date_of_birth",
    name: "date_of_birth",
    type: "date",
  },
  {
    label: "passport_number",
    name: "passport_number",
    type: "text",
  },
  {
    label: "passport_expiry",
    name: "passport_expiry",
    type: "date",
  },
  {
    label: "national_id",
    name: "national_id",
    type: "text",
  },
  {
    label: "national_id_expiry",
    name: "national_id_expiry",
    type: "date",
  },
  {
    label: "address",
    name: "address",
    type: "text",
  },
  {
    label: "user_type",
    name: "user_type",
    type: "number",
  },
  {
    label: "commercial_register",
    name: "commercial_register",
    type: "text",
  },
  {
    label: "barcode",
    name: "barcode",
    type: "number",
  },
  {
    label: "profession",
    name: "profession",
    type: "number",
  },
  {
    label: "work_phone",
    name: "work_phone",
    type: "text",
  },
  {
    label: "phone",
    name: "phone",
    type: "text",
    required: true,
  },
  {
    label: "token",
    name: "token",
    type: "text",
  },
  {
    label: "fax",
    name: "fax",
    type: "text",
  },
  {
    label: "mailbox",
    name: "mailbox",
    type: "text",
  },
  {
    label: "email",
    name: "email",
    type: "text",
  },
  {
    label: "sponsor",
    name: "sponsor",
    type: "number",
  },
  {
    label: "sponsor_data",
    name: "sponsor_data",
    type: "text",
  },
  {
    label: "statement",
    name: "statement",
    type: "text",
  },

  {
    label: "insurance_account_id",
    name: "insurance_account_id",
    is_ref: true,
    ref_table: "account",
  },
  // {
  //   label: "category_id",
  //   name: "category_id",
  //   is_ref: true,
  //   ref_table: "category",
  // },
  {
    label: "bank_id",
    name: "bank_id",
    is_ref: true,
    ref_table: "bank",
  },
  {
    label: "bank_account",
    name: "bank_account",
    type: "text",
  },
  FIELDS_STRUCTURE.nationality(),
];

const user_files = [
  {
    label: "files",
    name: "files",
    key: "image",
    allowScan: true,
    multiple: true,
  },
];

const bank = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  FIELDS_STRUCTURE.name(),
  // { label: "ltnname", name: "ltnname", type: "text", required: false },

  {
    label: "address",
    name: "address",
    type: "text",
  },
];

const cost_center = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "number",
    name: "internal_number",
    type: "number",

    // hide_in_form: true,
  },
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  {
    label: "parent_id",
    name: "parent_id",
    is_ref: true,
    ref_table: "cost_center",

    no_filter: true,
  },
  FIELDS_STRUCTURE.note(),
];

const country = [
  FIELDS_STRUCTURE.created_at(),
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  {
    label: "code",
    name: "code",
    type: "text",
  },
];

const currency = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  {
    label: "code",
    name: "code",
    type: "text",
  },
  {
    label: "rate",
    name: "rate",
    type: "number",
  },
];

const building = [
  FIELDS_STRUCTURE.id(),
  // {  label: 'number', name: "number", type: "text", required: true },
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  FIELDS_STRUCTURE.textField({
    label: "city",
    name: "city",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({
    label: "emirate",
    name: "emirate",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({ label: "suburb", name: "suburb", type: "text" }),
  FIELDS_STRUCTURE.textField({ label: "area", name: "area", type: "text" }),
  FIELDS_STRUCTURE.textField({ label: "street", name: "street", type: "text" }),
  {
    label: "building_number",
    name: "building_number",
    type: "number",
    hide_in_form: true,
  },
  {
    label: "part_number",
    name: "part_number",
    type: "text",
  },
  {
    label: "basin_number",
    name: "basin_number",
    type: "text",
  },
  {
    label: "bond_number",
    name: "bond_number",
    type: "text",
  },
  {
    label: "bond_type",
    name: "bond_type",
    type: "text",
  },
  {
    label: "bond_date",
    name: "bond_date",
    type: "date",
  },
  {
    label: "owner_id",
    name: "owner_id",
    is_ref: true,
    ref_table: "owner",
  },
  { label: "display", name: "display", type: "checkbox", key: "switch" },
  {
    label: "statement",
    name: "statement",
    type: "text",
  },
  {
    label: "lessor_id",
    name: "lessor_id",
    is_ref: true,
    ref_table: "lessor",
  },
  {
    label: "bank_account_number",
    name: "bank_account_number",
    type: "text",
  },
  {
    label: "purchase_date",
    name: "purchase_date",
    type: "date",
  },

  FIELDS_STRUCTURE.currency({
    name: "building_currency_id",
    hideValue: false,
  }),
];

const building_units = [
  {
    label: "apartment_floor",
    name: "apartment_floor",
    type: "number",
  },
  {
    label: "apartment_count_each_floor",
    name: "apartment_count",
    type: "number",
  },
  {
    label: "shop_count",
    name: "shop_count",
    type: "number",
  },
  {
    label: "parking_floor",
    name: "parking_floor",
    type: "number",
  },

  {
    label: "parking_count_each_floor",
    name: "parking_count",
    type: "number",
  },
  {
    label: "underground_parking",
    name: "underground_parking",
    type: "number",
  },
  {
    label: "store_count",
    name: "store_count",
    type: "number",
  },
  {
    label: "penthouse_floor",
    name: "penthouse_floor",
    type: "number",
  },
  {
    label: "penthouse_count_each_floor",
    name: "penthouse_count",
    type: "number",
  },

  {
    label: "mezzanine_floor",
    name: "mezzanine_floor",
    type: "number",
  },
  {
    label: "mezzanine_count_each_floor",
    name: "mezzanine_count",
    type: "number",
  },

  {
    label: "office_floor",
    name: "office_floor",
    type: "number",
  },
  {
    label: "office_count_each_floor",
    name: "office_count",
    type: "number",
  },

  {
    label: "warehouse_count",
    name: "warehouse_count",
    type: "number",
  },
];

const building_buying = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  // {
  //   label: "amount",
  //   name: "amount",
  //   type: "number",
  // },
  {
    label: "supplier_account_id",
    name: "supplier_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "currency_id",
    name: "currency_id",
    is_ref: true,
    ref_table: "currency",
    ref_name: "code",

    nested: "buying",
    hideValue: true,
  },

  {
    label: "statement",
    name: "statement",
    type: "text",
  },
  {
    label: "gen_entries",
    name: "gen_entries",
    type: "checkbox",
    key: "switch",
  },
];

const building_editorial_entry = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "building_cost",
    name: "building_cost",
    type: "number",
  },
  {
    label: "commission_rate",
    name: "entry_commission_rate",
    type: "number",
  },
  {
    label: "vat_rate",
    name: "entry_vat_rate",
    type: "number",
  },
  FIELDS_STRUCTURE.account({
    label: "vat_account_id",
    name: "entry_vat_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "landlord_account_id",
    name: "entry_landlord_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "commission_from_owner_account_id",
    name: "entry_commission_from_owner_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "revenue_account_id",
    name: "entry_revenue_account_id",
  }),
];

const building_investment = [
  FIELDS_STRUCTURE.id(),
  {
    label: "owner_account_id",
    name: "investment_owner_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "investment_value",
    name: "investment_value",
    type: "number",
  },
  {
    label: "investment_start_date",
    name: "investment_start_date",
    type: "date",
  },
  {
    label: "investment_end_date",
    name: "investment_end_date",
    type: "date",
  },

  FIELDS_STRUCTURE.currency({
    name: "investment_currency_id",
  }),
  {
    label: "tenants",
    name: "tenants",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "renters_insurance",
    name: "renters_insurance",
    is_ref: true,
    ref_table: "account",
    key: "switch",
  },

  {
    label: "gen_entries",
    name: "investment_gen_entries",
    type: "checkbox",
    key: "switch",
  },
];

const building_pictures = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "picture",
    name: "picture",
    type: "file",

    key: "image",
    multiple: true,
  },
];

const building_real_estate_development = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.account({
    name: "received_account_id",
  }),
  {
    label: "amount",
    name: "received_amount",
    type: "number",
  },

  FIELDS_STRUCTURE.currency({
    name: "received_currency_id",
  }),
  FIELDS_STRUCTURE.textField({
    label: "received_note",
    name: "received_note",
  }),
  {
    label: "received_date",
    name: "received_date",
    type: "date",
  },
  FIELDS_STRUCTURE.note(),

  {
    label: "building_receipt",
    name: "building_receipt",
    type: "checkbox",
    key: "switch",
  },
];

const building_real_estate_management = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.account({
    label: "owner_account_id",
    name: "owner_account_id",
    ref_table: UNIQUE_REF_TABLES.suppliers,
  }),
  // {
  //
  //
  //   is_ref: true,
  //   ref_table: "owner",
  //
  //
  // },
  {
    label: "commission_rate",
    name: "commission_rate",
    type: "number",
  },
  {
    label: "revenue_id",
    name: "revenue_id",
    is_ref: true,
    ref_table: "account",
  },
];

const building_default_accounts = [
  // FIELDS_STRUCTURE.account({
  //   label: "building_account_id",
  //   name: "building",
  //   disabledCondition: "building.create_into_account",
  // }),
  // {
  //   label: "create_into_account",
  //   name: "create_into_account",
  //   type: "checkbox",
  //
  //   key: "switch",
  //   readOnlyValue: "building.name",
  // },
  // FIELDS_STRUCTURE.account({
  //   label: "create_into_account_id",
  //   name: "create_into_account_id",
  // }),
  // FIELDS_STRUCTURE.cost_center({
  //   label: "main_cost_center_id",
  //   name: "main_cost_center_id",
  //   disabledCondition: "building.create_into_cost_center",
  // }),
  // {
  //   label: "create_into_cost_center",
  //   name: "create_into_cost_center",
  //   type: "checkbox",
  //
  //   key: "switch",
  //   readOnlyValue: "building.name",
  // },
  // {
  //   label: "create_into_cost_center_id",
  //   name: "create_into_cost_center_id",
  //
  //
  //   is_ref: true,
  //   ref_table: "create_into_cost_center",
  //
  // },
  FIELDS_STRUCTURE.account({
    label: "building_insurance_account_id",
    name: "building_insurance_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "building_discount_account_id",
    name: "building_discount_account_id",
  }),

  FIELDS_STRUCTURE.account({
    label: "building_bank_account_id",
    name: "building_bank_account_id",
  }),

  FIELDS_STRUCTURE.account({
    label: "building_cash_account_id",
    name: "building_cash_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "building_deposit_account_id",
    name: "building_deposit_account_id",
  }),

  FIELDS_STRUCTURE.account({
    label: "building_cheque_account_id",
    name: "building_cheque_account_id",
  }),

  FIELDS_STRUCTURE.account({ label: "vat_account_id", name: "vat_account_id" }),

  FIELDS_STRUCTURE.account({
    label: "deferred_vat_account_id",
    name: "deferred_vat_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "owner_balance",
    name: "owner_balance",
  }),

  FIELDS_STRUCTURE.account({
    label: "owner_tax_account_id",
    name: "owner_tax_account_id",
  }),

  FIELDS_STRUCTURE.account({
    label: "commission_expense_account_id",
    name: "commission_expense_account_id",
  }),

  FIELDS_STRUCTURE.account({
    label: "realestate_company_account_id",
    name: "realestate_company_account_id",
  }),

  FIELDS_STRUCTURE.account({
    label: "customers_main_account_id",
    name: "customers_main_account_id",
  }),
];

// ==== End Cards

// ==== Start accounting_voucher

const accounting_voucher_pattern_general = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "code",
    name: "code",
    type: "number",
  },
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  {
    label: "list_name",
    name: "list_name",
    type: "text",
  },
  {
    label: "default_account_id",
    name: "default_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "shortcut_key",
    name: "shortcut_key",
    type: "text",
  },
  {
    label: "auto_transfer_entry",
    name: "auto_transfer_entry",
    type: "checkbox",

    key: "switch",
  },
  {
    label: "required_cost_center",
    name: "required_cost_center",
    type: "checkbox",

    key: "switch",
  },
  {
    label: "required_statement",
    name: "required_statement",
    type: "checkbox",

    key: "switch",
  },
  {
    label: "default_print_folder_path",
    name: "default_print_folder_path",
    type: "text",
  },
  {
    label: "move_account_cost_center",
    name: "move_account_cost_center",
    type: "checkbox",

    key: "switch",
  },
];

const accounting_voucher_pattern_fields = [
  {
    label: "show_debit_field",
    name: "show_debit_field",
    type: "checkbox",

    key: "switch",
  },
  {
    label: "show_credit_field",
    name: "show_credit_field",
    type: "checkbox",

    key: "switch",
  },
  {
    label: "debit_field_label",
    name: "debit_field_label",
    type: "text",
  },
  {
    label: "credit_field_label",
    name: "credit_field_label",
    type: "text",
  },
  {
    label: "show_currency",
    name: "show_currency",
    type: "checkbox",

    key: "switch",
  },
  {
    label: "show_cost_center",
    name: "show_cost_center",
    type: "checkbox",

    key: "switch",
  },
  {
    label: "show_note",
    name: "show_note",
    type: "checkbox",

    key: "switch",
  },
  {
    label: "odd_table_color",
    name: "odd_table_color",
    type: "text",
  },
  {
    label: "even_table_color",
    name: "even_table_color",
    type: "text",
  },
];

const accounting_voucher_pattern_sms = [
  {
    label: "sms",
    name: "sms",
    type: "text",
  },
];

const accounting_voucher_pattern_group = {
  forms: {
    [ACCOUNTING_VOUCHER_PATTERN_STEPS.accounting_voucher_general]: {
      fields: accounting_voucher_pattern_general,
      tab_name: "accounting_voucher_pattern_general",
    },
    [ACCOUNTING_VOUCHER_PATTERN_STEPS.accounting_voucher_fields]: {
      fields: accounting_voucher_pattern_fields,
      tab_name: "accounting_voucher_pattern_fields",
    },
    [ACCOUNTING_VOUCHER_PATTERN_STEPS.accounting_voucher_sms]: {
      fields: accounting_voucher_pattern_sms,
      tab_name: "accounting_voucher_pattern_sms",
    },
  },
};

const accounting_voucher_pictures = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "picture",
    name: "picture",
    multiple: true,
    type: "file",

    key: "image",
  },
  {
    label: "accounting_voucher_main_id",
    name: "accounting_voucher_main_id",
    is_ref: true,
    ref_table: "accounting_voucher_main_data",
  },
];

// ==== End accounting_voucher
// ==== Start apartment

const apartment = [
  FIELDS_STRUCTURE.id(),
  {
    label: "building_id",
    name: "building_id",
    required: true,
    is_ref: true,
    ref_table: "building",
    hideAdd: true,
  },
  {
    label: "apartment_no",
    name: "apartment_no",
    type: "text",
    required: true,
  },
  {
    label: "floor_no",
    name: "floor_no",
    type: "text",
  },
  {
    label: "apartment_kind",
    name: "apartment_kind",
    key: "select",
    intValue: true,
    list: SELECT_LISTS("apartment_flat_type"),
    required: true,
  },
  {
    label: "description",
    name: "description",
    type: "text",
  },
  {
    label: "category",
    name: "category",
    type: "text",
  },
  {
    label: "area",
    name: "area",
    type: "number",
  },
  {
    label: "area_unit",
    name: "area_unit",
    type: "text",
  },
  {
    label: "view",
    name: "view",
    type: "text",
  },
  {
    label: "kind",
    name: "kind",
    type: "text",
  },
  {
    label: "bathroom_count",
    name: "bathroom_count",
    type: "number",
  },
  {
    label: "balcony_count",
    name: "balcony_count",
    type: "number",
  },
  {
    label: "has_lawsuit",
    name: "has_lawsuit",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "blocked",
    name: "blocked",
    type: "checkbox",
    key: "switch",
  },
  FIELDS_STRUCTURE.cost_center({
    label: "main_cost_center_id",
    name: "main_cost_center_id",
  }),
  FIELDS_STRUCTURE.cost_center(),
  {
    label: "property_type",
    name: "property_type",
    key: "select",
    required: true,
    intValue: true,
    list: SELECT_LISTS("flat_property_type"),
  },
  {
    label: "water_meter",
    name: "water_meter",
    type: "text",
  },
  {
    label: "electricity_meter",
    name: "electricity_meter",
    type: "text",
  },
  {
    label: "statement",
    name: "statement",
    type: "text",
  },
  {
    label: "x_index",
    name: "x_index",
    type: "number",
    required: true,
  },
  {
    label: "y_index",
    name: "y_index",
    type: "number",
    required: true,
  },
  {
    label: "room_count",
    name: "room_count",
    type: "number",
  },
  {
    label: "property_values_id",
    name: "property_values_id",
    is_ref: true,
    ref_table: "property_values",

    ref_name: "row_index",
  },
  {
    label: "hex",
    name: "hex",
    type: "text",

    readOnly: false,
  },
  {
    label: "cost_price",
    name: "cost_price",
    type: "number",
  },
  {
    label: "amount_paid",
    name: "amount_paid",
    type: "number",
  },
  {
    label: "cost_currency_id",
    name: "cost_currency_id",
    is_ref: true,
    ref_table: "currency",
    ref_name: "code",
  },
  FIELDS_STRUCTURE.note(),
];
const apartment_accumulate = [
  { name: "apartment_id", is_ref: true, ref_table: "apartment" },
];

const apartment_pictures = [
  FIELDS_STRUCTURE.id(),
  {
    label: "apartment_id",
    name: "apartment_id",
    is_ref: true,
    ref_table: "apartment",

    hide_in_form: true,
  },
  {
    label: "picture",
    name: "picture",
    multiple: true,
    type: "file",

    key: "image",
  },
];

const property_values = [
  // {  label: 'id', name: "id",   hide_in_form: true },
  {
    label: "row_index",
    name: "row_index",
    type: "number",

    hide_in_form: true,
  },
  {
    label: "hex",
    name: "hex",
    type: "color",
  },
  {
    label: "unit_count",
    name: "room_count",
    type: "number",

    readOnly: false,
  },
  {
    label: "description",
    name: "description",
    type: "text",
  },
  {
    label: "area",
    name: "area",
    type: "number",

    key: "area",
  },
  // {
  //   label: "area_unit",
  //   name: "area_unit",
  //   type: "text",
  //
  // },
  {
    label: "view",
    name: "view",
    type: "text",
  },
  {
    label: "property_type",
    name: "property_type",
    key: "select",

    intValue: true,
    list: SELECT_LISTS("flat_property_type"),
    selectFirstAsDefault: true,
  },
];

const apartment_rental_price = [
  FIELDS_STRUCTURE.id(),
  {
    label: "apartment_id",
    name: "apartment_id",
    is_ref: true,
    ref_table: "apartment",
    hide_in_form: true,
  },
  {
    label: "date",
    name: "date",
    type: "date",
  },
  {
    label: "price",
    name: "price",
    type: "number",
  },
  FIELDS_STRUCTURE.currency({ hideValue: true }),
  FIELDS_STRUCTURE.note(),
];

const apartment_selling_price = [
  FIELDS_STRUCTURE.id(),
  {
    label: "apartment_id",
    name: "apartment_id",
    is_ref: true,
    ref_table: "apartment",
    hide_in_form: true,
  },
  {
    label: "date",
    name: "date",
    type: "date",
  },
  {
    label: "price",
    name: "price",
    type: "number",
  },
  FIELDS_STRUCTURE.currency({ hideValue: true }),
  FIELDS_STRUCTURE.note(),
];
// ==== End apartment

const contract_pattern_general = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "contract_type",
    name: "contract_type",
    key: "select",
    required: true,
    intValue: true,
    list: SELECT_LISTS("contact_pattern_contract_type"),
  },
  {
    label: "assets_type",
    name: "assets_type",
    key: "select",
    required: true,
    intValue: true,
    list: SELECT_LISTS("contact_pattern_assets_type"),
  },
  {
    label: "code",
    name: "code",
    type: "number",
  },
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  {
    label: "list_name",
    name: "list_name",
    type: "text",
  },
  {
    label: "shortcut_key",
    name: "shortcut_key",
    type: "text",
  },
  {
    label: "gen_entries",
    name: "gen_entries",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "auto_gen_entries",
    name: "auto_gen_entries",
    type: "checkbox",
    key: "switch",

    disabledCondition: "gen_entries",
  },
  {
    label: "auto_transfer_entry",
    name: "auto_transfer_entry",
    type: "checkbox",
    key: "switch",

    disabledCondition: "gen_entries",
  },
  {
    label: "record_date_created",
    name: "record_date_created",
    key: "select",
    required: true,
    intValue: true,
    list: SELECT_LISTS("contact_pattern_record_created_date"),
  },
  {
    label: "new_contract_without_terminating",
    name: "new_contract_without_terminating",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "insurance_required",
    name: "insurance_required",
    type: "checkbox",
    key: "switch",
  },
];

const contract_pattern_default_accounts = [
  {
    label: "default_revenue_account_id",
    name: "default_revenue_account_id",
    is_ref: true,
    ref_table: "account",
  },

  {
    label: "default_commission_from_client_account_id",
    name: "default_commission_from_client_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_commission_from_owner_account_id",
    name: "default_commission_from_owner_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_contract_price_revenue_account_id",
    name: "default_contract_price_revenue_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_contract_ratification_revenue_account_id",
    name: "default_contract_ratification_revenue_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_fines_revenue_account_id",
    name: "default_fines_revenue_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_fee_revenue_account_id",
    name: "default_fee_revenue_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_discount_account_id",
    name: "default_discount_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_commission_From_client_Percentage",
    name: "default_commission_From_client_Percentage",
    type: "number",
  },
  {
    label: "default_insurance_account_id",
    name: "default_insurance_account_id",
    is_ref: true,
    ref_table: "account",
  },
];
const contract_pattern_default_fees_accounts = [
  {
    label: "default_fees_account_1",
    name: "default_fees_account_1",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_fees_account_2",
    name: "default_fees_account_2",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_fees_account_3",
    name: "default_fees_account_3",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_fees_account_4",
    name: "default_fees_account_4",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_fees_account_5",
    name: "default_fees_account_5",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_fees_account_6",
    name: "default_fees_account_6",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_fees_account_7",
    name: "default_fees_account_7",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_fees_account_8",
    name: "default_fees_account_8",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_fees_account_9",
    name: "default_fees_account_9",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "default_fees_account_10",
    name: "default_fees_account_10",
    is_ref: true,
    ref_table: "account",
  },
];
const contract_pattern_moving_cost_center = [
  {
    label: "move_cost_center_with_revenue",
    name: "move_cost_center_with_revenue",
    isJson: true,
    key: "choose",
    list: SELECT_LISTS("type"),
  },
  {
    label: "move_cost_center_with_tenant",
    name: "move_cost_center_with_tenant",
    isJson: true,
    key: "choose",
    list: SELECT_LISTS("type"),
  },
  {
    label: "move_cost_center_with_insurance_revenue",
    name: "move_cost_center_with_insurance_revenue",
    isJson: true,
    key: "choose",
    list: SELECT_LISTS("type"),
  },
  {
    label: "move_cost_center_with_price_revenue",
    name: "move_cost_center_with_price_revenue",
    isJson: true,
    key: "choose",
    list: SELECT_LISTS("type"),
  },
  {
    label: "move_cost_center_with_intention_ratifying",
    name: "move_cost_center_with_intention_ratifying",
    isJson: true,
    key: "choose",
    list: SELECT_LISTS("type"),
  },
  {
    label: "move_cost_center_with_other_fee",
    name: "move_cost_center_with_other_fee",
    isJson: true,
    key: "choose",
    list: SELECT_LISTS("type"),
  },
  {
    label: "move_cost_center_with_commission_client",
    name: "move_cost_center_with_commission_client",
    isJson: true,
    key: "choose",
    list: SELECT_LISTS("type"),
  },
  {
    label: "move_cost_center_with_commission_owner",
    name: "move_cost_center_with_commission_owner",
    isJson: true,
    key: "choose",
    list: SELECT_LISTS("type"),
  },
  {
    label: "move_cost_center_with_contract_fines_terminating",
    name: "move_cost_center_with_contract_fines_terminating",
    isJson: true,
    key: "choose",
    list: SELECT_LISTS("type"),
  },
  {
    label: "move_cost_center_with_decisiveness_granted",
    name: "move_cost_center_with_decisiveness_granted",
    isJson: true,
    key: "choose",
    list: SELECT_LISTS("type"),
  },
  {
    label: "move_cost_center_with_contract_proceeds_rerminating",
    name: "move_cost_center_with_contract_proceeds_rerminating",
    isJson: true,
    key: "choose",
    list: SELECT_LISTS("type"),
  },
];

const contract_pattern_contract_terms = [
  {
    label: "contract_terms",
    name: "contract_terms",
    type: "text",
  },
];

const contract_pattern_sms = [
  {
    label: "sms",
    name: "sms",
    type: "text",
  },
];

const contract_pattern_group = {
  forms: {
    [CONTRACTS_PATTERN_STEPS.contract_general]: {
      fields: contract_pattern_general,
      tab_name: "contract_pattern_general",
    },
    [CONTRACTS_PATTERN_STEPS.contract_default_accounts]: {
      fields: contract_pattern_default_accounts,
      tab_name: "contract_pattern_default_accounts",
    },
    [CONTRACTS_PATTERN_STEPS.contract_pattern_default_fees_accounts]: {
      fields: contract_pattern_default_fees_accounts,
      tab_name: "contract_pattern_default_fees_accounts",
    },
    [CONTRACTS_PATTERN_STEPS.contract_moving_cost_center]: {
      fields: contract_pattern_moving_cost_center,
      tab_name: "contract_pattern_moving_cost_center",
    },
    [CONTRACTS_PATTERN_STEPS.contract_contract_terms]: {
      fields: contract_pattern_contract_terms,
      tab_name: "contract_pattern_contract_terms",
    },
    // [CONTRACTS_PATTERN_STEPS.contract_default_printing_folder]: {
    //   fields: contract_pattern_default_folder_print,
    //   tab_name: "contract_pattern_default_folder_print",
    // },
    [CONTRACTS_PATTERN_STEPS.contract_sms]: {
      fields: contract_pattern_sms,
      tab_name: "contract_pattern_sms",
    },
  },
};

// ==== Start Cheques
const cheque = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "internal_number",
    name: "internal_number",
    type: "number",

    // readOnly: false,
  },
  {
    label: "number",
    name: "number",
    type: "number",

    // readOnly: false,
  },
  {
    label: "feedback",
    name: "feedback",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "connect_with",
    name: "connect_with",
    key: "select",

    list: SELECT_LISTS("cheque_connect_with"),
  },
  {
    label: "type",
    name: "type",
    type: "number",
    required: true,
    hide_in_form: true,
  },
  {
    label: "amount",
    name: "amount",
    type: "number",
    required: true,
  },
  {
    label: "currency_id",
    name: "currency_id",

    required: true,
    is_ref: true,
    ref_table: "currency",
    ref_name: "code",
  },
  // {
  //   label: "currency_val",
  //   name: "currency_val",
  //   defaultValue: 1,
  //   type: "number",
  //
  // },
  // {
  //   label: "seller_id",
  //   name: "seller_id",
  //
  //   required: true,
  //   is_ref: true,
  //   ref_table: "seller",
  //
  //
  // },
  FIELDS_STRUCTURE.account({ required: true }),
  FIELDS_STRUCTURE.cost_center({ required: true }),
  FIELDS_STRUCTURE.note(),
  FIELDS_STRUCTURE.account({
    label: "observe_account_id",
    name: "observe_account_id",
    required: true,
  }),
  FIELDS_STRUCTURE.cost_center({
    label: "observe_cost_center_id",
    name: "observe_cost_center_id",
    required: true,
  }),
  // FIELDS_STRUCTURE.note({
  //   label: "observe_account_note",
  //   name: "observe_account_note",
  // }),
  FIELDS_STRUCTURE.textField({
    label: "beneficiary_name",
    name: "beneficiary_name",
  }),
  {
    label: "unit number",
    name: "parking_id",

    required: true,
    is_ref: true,
    ref_table: "parking",
  },
  {
    label: "unit number",
    name: "shop_id",

    required: true,
    is_ref: true,
    ref_table: "shop",
    ref_name: "shop_no",
  },
  {
    label: "unit number",
    name: "apartment_id",

    required: true,
    is_ref: true,
    ref_table: "apartment",
    ref_name: "apartment_no",
  },
  {
    label: "due_date",
    name: "due_date",
    type: "date",

    disabledCondition: "without_due_date",
  },
  {
    label: "end_due_date",
    name: "end_due_date",
    type: "date",

    disabledCondition: "without_due_date",
  },
  {
    label: "without_due_date",
    name: "without_due_date",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "bank_id",
    name: "bank_id",
    is_ref: true,
    ref_table: "bank",
  },
  FIELDS_STRUCTURE.note({ label: "note1", name: "note1" }),
  FIELDS_STRUCTURE.note({ label: "note2", name: "note2" }),

  {
    label: "deport_status",
    name: "deport_status",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "collection_status",
    name: "collection_status",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "partial_collection_status",
    name: "partial_collection_status",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "return_status",
    name: "return_status",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "deposit_status",
    name: "deposit_status",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "gen_entries",
    name: "gen_entries",
    type: "checkbox",
    key: "switch",
  },
];

const cheque_grid = [
  {
    label: "chq_number",
    name: "internal_number",
    type: "text",
  },
  {
    label: "amount",
    name: "amount",
    type: "number",
    required: true,
  },
  {
    label: "due_date",
    name: "due_date",
    type: "date",

    disabledCondition: "without_due_date",
  },
  // FIELDS_STRUCTURE.note(),

  {
    label: "bank_id",
    name: "bank_id",
    is_ref: true,
    ref_table: "bank",
  },
  {
    label: "note1",
    name: "note1",
    type: "text",
  },
  {
    label: "note2",
    name: "note2",
    type: "text",
  },
  {
    label: "end_due_date",
    name: "end_due_date",
    type: "date",

    disabledCondition: "without_due_date",
  },
];

const cheque_short = [
  {
    label: "number",
    name: "number",
    type: "number",

    hide_in_form: true,
  },
  {
    label: "amount",
    name: "amount",
    type: "number",
    required: true,
  },
  {
    label: "due_date",
    name: "due_date",
    type: "date",

    disabledCondition: "without_due_date",
  },
  FIELDS_STRUCTURE.note(),

  {
    label: "bank_id",
    name: "bank_id",
    is_ref: true,
    ref_table: "bank",
  },
];

const cheque_general = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "paper_type",
    name: "paper_type",
    key: "select",
    list: SELECT_LISTS("cheque_pattern_paper_type"),
    required: true,
  },
  // {  label: 'code', name: "code", type: "number"},
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  {
    label: "list_name",
    name: "list_name",
    type: "text",
  },
  {
    label: "default_account_id",
    name: "default_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "shortcut_key",
    name: "shortcut_key",
    type: "text",
  },
  {
    label: "gen_entries",
    name: "gen_entries",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "auto_gen_entries",
    name: "auto_gen_entries",
    type: "checkbox",
    key: "switch",

    disabledCondition: "gen_entries",
  },
  {
    label: "auto_transfer_entry",
    name: "auto_transfer_entry",
    type: "checkbox",
    key: "switch",

    disabledCondition: "gen_entries",
  },
  {
    label: "default_print_folder",
    name: "default_print_folder",
    type: "text",
  },
];

const cheque_deportable = [
  {
    label: "deportable",
    name: "deportable",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "deportable_gen_entries",
    name: "deportable_gen_entries",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "deportable_auto_gen_entries",
    name: "deportable_auto_gen_entries",
    type: "checkbox",
    key: "switch",

    disabledCondition: "deportable_gen_entries",
  },
  {
    label: "deportable_auto_transfer_entry",
    name: "deportable_auto_transfer_entry",
    type: "checkbox",
    key: "switch",

    disabledCondition: "deportable_gen_entries",
  },
  {
    label: "deportable_default_account_is_owner",
    name: "deportable_default_account_is_owner",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "deportable_default_observe_account_is_client",
    name: "deportable_default_observe_account_is_client",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "deportable_move_cost_center_debit",
    name: "deportable_move_cost_center_debit",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "deportable_move_cost_center_credit",
    name: "deportable_move_cost_center_credit",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "deportable_debit_account_id",
    name: "deportable_debit_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "deportable_default_date",
    name: "deportable_default_date",
    key: "select",
    list: SELECT_LISTS("cheque_pattern_default_date"),
    intValue: true,
    selectFirstAsDefault: true,
  },
  {
    label: "deportable_credit_account_id",
    name: "deportable_credit_account_id",
    is_ref: true,
    ref_table: "account",
  },
];

const cheque_collection = [
  {
    label: "collection",
    name: "collection",
    type: "checkbox",
    key: "switch",
  },

  {
    label: "collection_gen_entries",
    name: "collection_gen_entries",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "collection_auto_gen_entries",
    name: "collection_auto_gen_entries",
    type: "checkbox",
    key: "switch",

    disabledCondition: "collection_gen_entries",
  },
  {
    label: "collection_auto_transfer_entry",
    name: "collection_auto_transfer_entry",
    type: "checkbox",
    key: "switch",

    disabledCondition: "collection_gen_entries",
  },

  {
    label: "collection_default_account_is_building_bank",
    name: "collection_default_account_is_building_bank",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "collection_default_observe_account_is_client",
    name: "collection_default_observe_account_is_client",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "collection_move_cost_center_debit",
    name: "collection_move_cost_center_debit",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "collection_move_cost_center_credit",
    name: "collection_move_cost_center_credit",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "collection_default_date",
    name: "collection_default_date",
    key: "select",
    list: SELECT_LISTS("cheque_pattern_default_date"),
    intValue: true,
    selectFirstAsDefault: true,
  },
  {
    label: "collection_credit_account_id",
    name: "collection_credit_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "collection_debit_account_id",
    name: "collection_debit_account_id",
    is_ref: true,
    ref_table: "account",
  },
];

const cheque_commission = [
  {
    label: "commission_amount_from_building",
    name: "commission_amount_from_building",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "commission_default_account_is_building_owner",
    name: "commission_default_account_is_building_owner",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "commission_default_observe_is_revenue_account",
    name: "commission_default_observe_is_revenue_account",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "commission_move_cost_center_debit",
    name: "commission_move_cost_center_debit",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "commission_move_cost_center_credit",
    name: "commission_move_cost_center_credit",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "commission_type",
    name: "commission_type",
    key: "select",
    list: SELECT_LISTS("cheque_pattern_default_date"),
    intValue: true,
    selectFirstAsDefault: true,
  },
  {
    label: "commission_debit_account_id",
    name: "commission_debit_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "commission_credit_account_id",
    name: "commission_credit_account_id",
    is_ref: true,
    ref_table: "account",
  },
];

const cheque_partial_collection = [
  {
    label: "partial_collection",
    name: "partial_collection",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "partial_gen_entries",
    name: "partial_gen_entries",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "partial_auto_gen_entries",
    name: "partial_auto_gen_entries",
    type: "checkbox",
    key: "switch",

    disabledCondition: "partial_gen_entries",
  },
  {
    label: "partial_auto_transfer_entry",
    name: "partial_auto_transfer_entry",
    type: "checkbox",
    key: "switch",

    disabledCondition: "partial_gen_entries",
  },
  {
    label: "partial_default_account_is_building_bank",
    name: "partial_default_account_is_building_bank",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "partial_default_observe_account_is_client",
    name: "partial_default_observe_account_is_client",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "partial_move_cost_center_debit",
    name: "partial_move_cost_center_debit",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "partial_move_cost_center_credit",
    name: "partial_move_cost_center_credit",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "partial_debit_account_id",
    name: "partial_debit_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "partial_credit_account_id",
    name: "partial_credit_account_id",
    is_ref: true,
    ref_table: "account",
  },
];

const cheque_return = [
  {
    label: "returnable",
    name: "returnable",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "returnable_gen_entries",
    name: "returnable_gen_entries",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "returnable_auto_gen_entries",
    name: "returnable_auto_gen_entries",
    type: "checkbox",
    key: "switch",

    disabledCondition: "returnable_gen_entries",
  },
  {
    label: "returnable_auto_transfer_entry",
    name: "returnable_auto_transfer_entry",
    type: "checkbox",
    key: "switch",

    disabledCondition: "returnable_gen_entries",
  },
  {
    label: "returnable_default_account_is_client",
    name: "returnable_default_account_is_client",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "returnable_default_observe_account_is_building_bank",
    name: "returnable_default_observe_account_is_building_bank",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "returnable_active_operations",
    name: "returnable_active_operations",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "returnable_move_cost_center_debit",
    name: "returnable_move_cost_center_debit",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "returnable_move_cost_center_credit",
    name: "returnable_move_cost_center_credit",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "return_fee_default_account_is_client",
    name: "return_fee_default_account_is_client",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "returnable_default_date",
    name: "returnable_default_date",
    key: "select",
    list: SELECT_LISTS("cheque_pattern_default_date"),
    intValue: true,
    selectFirstAsDefault: true,
  },
  {
    label: "returnable_debit_account_id",
    name: "returnable_debit_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "returnable_credit_account_id",
    name: "returnable_credit_account_id",
    is_ref: true,
    ref_table: "account",
  },

  {
    label: "return_fee_debit_account_id",
    name: "return_fee_debit_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "return_fee_credit_account_id",
    name: "return_fee_credit_account_id",
    is_ref: true,
    ref_table: "account",
  },
];

const cheque_default_statement = [
  {
    label: "statement_account",
    name: "statement_account",
    type: "text",
  },
  {
    label: "statement_observe_account",
    name: "statement_observe_account",
    type: "text",
  },
  {
    label: "statement_leaving",
    name: "statement_leaving",
    type: "text",
  },
  {
    label: "statement_endorsement",
    name: "statement_endorsement",
    type: "text",
  },
  {
    label: "statement_collection",
    name: "statement_collection",
    type: "text",
  },
  {
    label: "statement_return",
    name: "statement_return",
    type: "text",
  },
  {
    label: "statement_partial",
    name: "statement_partial",
    type: "text",
  },
];

const cheque_sms = [{ label: "sms", name: "sms", type: "text" }];

const cheque_group = {
  forms: {
    [CHEQUE_PATTERN_STEPS.cheque_pattern_general]: {
      fields: cheque_general,
      tab_name: "cheque_pattern",
    },
    [CHEQUE_PATTERN_STEPS.cheque_pattern_deportable]: {
      fields: cheque_deportable,
      tab_name: "cheque_deportable",
    },
    [CHEQUE_PATTERN_STEPS.cheque_pattern_collection]: {
      fields: cheque_collection,
      tab_name: "cheque_collection",
    },

    [CHEQUE_PATTERN_STEPS.cheque_pattern_partial_collection]: {
      fields: cheque_partial_collection,
      tab_name: "cheque_partial_collection",
    },
    // [CHEQUE_PATTERN_STEPS.cheque_pattern_endorsement]: {
    //   fields: cheque_endorsement,
    //   tab_name: "cheque_endorsement",
    // },
    [CHEQUE_PATTERN_STEPS.cheque_pattern_return]: {
      fields: cheque_return,
      tab_name: "cheque_return",
    },
    [CHEQUE_PATTERN_STEPS.cheque_pattern_commission]: {
      fields: cheque_commission,
      tab_name: "cheque_commission",
    },
    [CHEQUE_PATTERN_STEPS.cheque_pattern_default_statement]: {
      fields: cheque_default_statement,
      tab_name: "cheque_default_statement",
    },
    [CHEQUE_PATTERN_STEPS.cheque_pattern_sms]: {
      fields: cheque_sms,
      tab_name: "cheque_sms",
    },
  },
};

// ==== End financial

// ==== Start Installment
const installment = [
  FIELDS_STRUCTURE.id(),
  {
    label: "contract_id",
    name: "contract_id",
    is_ref: true,
    ref_table: "contract",
    hideAdd: true,
    hide_in_form: true,
  },
  {
    label: "total_amount",
    name: "total_amount",
    type: "number",
  },
  {
    label: "gen_entries_type",
    name: "gen_entries_type",
    key: "select",
    list: SELECT_LISTS("installment_voucher_type"),

    // defaultValue: 1,
    selectFirstAsDefault: true,
  },
  {
    label: "first_batch",
    name: "first_batch",
    type: "number",

    watch: "gen_entries_type",
    condition: 3,
  },
  {
    label: "payment_date",
    name: "payment_date",
    type: "date",

    watch: "gen_entries_type",
    condition: 3,
  },

  FIELDS_STRUCTURE.currency({
    disabledCondition: "installment.currency_id",
    // hide_in_form: true,
  }),
  // {
  //   label: "currency_val",
  //   name: "currency_val",
  //   defaultValue: 1,
  //   type: '"number"',
  //
  //   // hide_in_form: true,
  // },
  {
    label: "rest_amount",
    name: "rest_amount",
    type: "number",

    readOnly: false,
  },
  {
    label: "installments_numbers",
    name: "installments_numbers",
    type: "number",
  },
  {
    label: "each_number",
    name: "each_number",
    key: "select",
    intValue: true,
    isArray: true,
    list: SELECT_LISTS("installment_each_number"),
    selectFirstAsDefault: true,
  },
  {
    label: "each_duration",
    name: "each_duration",
    key: "select",
    list: SELECT_LISTS("installment_each_duration"),
    selectFirstAsDefault: true,
  },
  {
    label: "first_chq_date",
    name: "first_installment_date",
    type: "date",
  },
  {
    label: "begin_number",
    name: "begin_number",
    type: "number",
  },
  // {
  //   label: "installment_date",
  //   name: "installment_date",
  //   type: "date",
  //
  // },
  // {
  //   label: 'beneficiary_name', name: "beneficiary_name",
  //   type: "text",
  //
  // },

  {
    label: "customer_bank_id",
    name: "bank_id",
    is_ref: true,
    ref_table: "bank",
  },
];

// ==== End Installment

// ==== Start Operations
const op_collection = [
  FIELDS_STRUCTURE.id(),
  {
    label: "feedback",
    name: "feedback",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "gen_entries",
    name: "gen_entries",
    type: "checkbox",
    key: "switch",
    required: true,
  },
  FIELDS_STRUCTURE.created_at({ hide_in_form_add: false }),
  {
    label: "amount",
    name: "amount",
    type: "number",
    required: true,
  },
  FIELDS_STRUCTURE.currency({ required: true }),
  {
    label: "debit_account_id",
    name: "debit_account_id",

    required: true,
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "credit_account_id",
    name: "credit_account_id",

    required: true,
    is_ref: true,
    ref_table: "account",
  },
  FIELDS_STRUCTURE.cost_center({ required: true }),
  FIELDS_STRUCTURE.note(),
  {
    label: "commission_value",
    name: "commission_value",
    type: "number",
  },
  {
    label: "commission_percentage",
    name: "commission_percentage",
    type: "number",
  },
  {
    label: "commission_debit_id",
    name: "commission_debit_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "commission_credit_id",
    name: "commission_credit_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "commission_cost_center_id",
    name: "commission_cost_center_id",
    is_ref: true,
    ref_table: "cost_center",
  },
  {
    label: "commission_note",
    name: "commission_note",
    type: "text",
  },
  {
    label: "accounting_voucher_main_data_id",
    name: "accounting_voucher_main_data_id",
    is_ref: true,
    ref_table: "accounting_voucher_main_data",

    hide_in_form: true,
  },
];

const op_partial_collection = [
  FIELDS_STRUCTURE.id(),
  {
    label: "feedback",
    name: "feedback",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "gen_entries",
    name: "gen_entries",
    type: "checkbox",
    key: "switch",
    required: true,
  },
  FIELDS_STRUCTURE.created_at({ hide_in_form_add: false }),
  {
    label: "amount",
    name: "amount",
    type: "number",
    required: true,
  },
  FIELDS_STRUCTURE.currency({ required: true }),
  {
    label: "debit_account_id",
    name: "debit_account_id",

    required: true,
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "credit_account_id",
    name: "credit_account_id",

    required: true,
    is_ref: true,
    ref_table: "account",
  },
  FIELDS_STRUCTURE.cost_center({ required: true }),
  {
    label: "total_value",
    name: "total_value",
    type: "number",
    readOnly: false,
  },
  {
    label: "total_sum",
    name: "total_sum",
    type: "number",
    readOnly: false,
  },
  {
    label: "total_sum_prev",
    name: "total_sum_prev",
    type: "number",
    readOnly: false,
  },
  {
    label: "rest",
    name: "rest",
    type: "number",
    readOnly: false,
  },

  FIELDS_STRUCTURE.note(),
  {
    label: "commission_value",
    name: "commission_value",
    type: "number",
  },
  {
    label: "commission_percentage",
    name: "commission_percentage",
    type: "number",
  },
  {
    label: "commission_debit_id",
    name: "commission_debit_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "commission_credit_id",
    name: "commission_credit_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "commission_cost_center_id",
    name: "commission_cost_center_id",
    is_ref: true,
    ref_table: "cost_center",
  },
  {
    label: "commission_note",
    name: "commission_note",
    type: "text",
  },
  {
    label: "accounting_voucher_main_data_id",
    name: "accounting_voucher_main_data_id",
    is_ref: true,
    ref_table: "accounting_voucher_main_data",

    hide_in_form: true,
  },
];

const op_deportation = [
  FIELDS_STRUCTURE.id(),
  {
    label: "feedback",
    name: "feedback",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "gen_entries",
    name: "gen_entries",
    type: "checkbox",
    key: "switch",
    required: true,
  },
  FIELDS_STRUCTURE.created_at({ hide_in_form_add: false }),
  {
    label: "amount",
    name: "amount",
    type: "number",
    required: true,
  },
  FIELDS_STRUCTURE.currency({ required: true }),
  {
    label: "debit_account_id",
    name: "debit_account_id",

    required: true,
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "credit_account_id",
    name: "credit_account_id",

    required: true,
    is_ref: true,
    ref_table: "account",
  },
  FIELDS_STRUCTURE.cost_center({ required: true }),
  FIELDS_STRUCTURE.note(),
  {
    label: "accounting_voucher_main_data_id",
    name: "accounting_voucher_main_data_id",
    is_ref: true,
    ref_table: "accounting_voucher_main_data",

    hide_in_form: true,
  },
];

const op_return = [
  FIELDS_STRUCTURE.id(),
  {
    label: "feedback",
    name: "feedback",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "gen_entries",
    name: "gen_entries",
    type: "checkbox",
    key: "switch",
    required: true,
  },
  FIELDS_STRUCTURE.created_at({ hide_in_form_add: false }),
  {
    label: "amount",
    name: "amount",
    type: "number",
    required: true,
  },
  FIELDS_STRUCTURE.currency({ required: true }),
  {
    label: "debit_account_id",
    name: "debit_account_id",

    required: true,
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "credit_account_id",
    name: "credit_account_id",

    required: true,
    is_ref: true,
    ref_table: "account",
  },
  FIELDS_STRUCTURE.cost_center({ required: true }),
  FIELDS_STRUCTURE.note(),
  {
    label: "reason",
    name: "reason",
    key: "select",
    required: true,
    list: SELECT_LISTS("chq_return_reasons"),
    allowInsert: true,
  },
  {
    label: "feedback",
    name: "feedback",
    type: "boolean",
    key: "switch",
  },
  {
    label: "connect_with_chq_id",
    name: "connect_with_chq_id",
    is_ref: true,
    ref_table: "cheque",
    ref_name: "internal_number",
  },
  // {
  //   label: "accounting_voucher_main_data_id",
  //   name: "accounting_voucher_main_data_id",
  //   is_ref: true,
  //   ref_table: "accounting_voucher_main_data",
  // },
];

// ==== end Operations

// ==== Start Voucher
const voucher_main_data = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.number(),
  {
    label: "created_at",
    name: "created_at",
    type: "date",
  },
  {
    label: "currency_id",
    name: "currency_id",

    required: true,
    is_ref: true,
    ref_table: "currency",
    ref_name: "code",
  },
  // {
  //   label: "currency_val",
  //   name: "currency_val",
  //   defaultValue: 1,
  //   type: "number",
  //
  // },

  FIELDS_STRUCTURE.note(),
  {
    label: "feedback",
    name: "feedback",
    type: "boolean",
    key: "switch",
  },
  {
    label: "seller_id",
    name: "seller_id",
    is_ref: true,
    ref_table: "seller",
  },
  {
    label: "connect_with",
    name: "connect_with",
    key: "select",

    list: SELECT_LISTS("contract_connect_with"),
  },
  {
    label: "debit_amount",
    name: "debit_amount",
    type: "number",
  },
  {
    label: "debit_total",
    name: "debit_total",
    type: "number",
  },
  {
    label: "credit_total",
    name: "credit_total",
    type: "number",
  },
  {
    label: "credit_amount",
    name: "credit_amount",
    type: "number",
  },
  FIELDS_STRUCTURE.account(),
  {
    label: "gen_entries",
    name: "gen_entries",
    type: "checkbox",
    key: "switch",
  },
];
const voucher_main_data_short = [
  FIELDS_STRUCTURE.number(),
  {
    label: "debit",
    name: "debit",
    type: "number",
  },
  {
    label: "credit",
    name: "credit",
    type: "number",
  },
  FIELDS_STRUCTURE.account(),
  FIELDS_STRUCTURE.note(),
];

const voucher_grid_data = [
  FIELDS_STRUCTURE.id(),
  {
    label: "debit",
    name: "debit",
    type: "number",
  },
  {
    label: "credit",
    name: "credit",
    type: "number",
  },
  FIELDS_STRUCTURE.account(),
  FIELDS_STRUCTURE.cost_center(),
  {
    label: "voucher_main_data_id",
    name: "voucher_main_data_id",
    is_ref: true,
    ref_table: "voucher_main_data",

    hide_in_form: true,
  },
  FIELDS_STRUCTURE.note(),
];

const voucher_pattern_general = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "code",
    name: "code",
    type: "number",
  },
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  {
    label: "list_name",
    name: "list_name",
    type: "text",
  },
  {
    label: "default_account_id",
    name: "default_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "shortcut_key",
    name: "shortcut_key",
    type: "text",
  },
  {
    label: "gen_entries",
    name: "gen_entries",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "auto_gen_entries",
    name: "auto_gen_entries",
    type: "checkbox",
    key: "switch",

    disabledCondition: "gen_entries",
  },
  {
    label: "auto_transfer_entry",
    name: "auto_transfer_entry",
    type: "checkbox",
    key: "switch",

    disabledCondition: "gen_entries",
  },
  {
    label: "generate_records",
    name: "generate_records",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "show_contract_field",
    name: "show_contract_field",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "show_contract_cost_center",
    name: "show_contract_cost_center",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "required_cost_center",
    name: "required_cost_center",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "required_statement",
    name: "required_statement",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "default_print_folder_path",
    name: "default_print_folder_path",
    type: "text",
  },
];

const voucher_pattern_fields = [
  {
    label: "show_debit_field",
    name: "show_debit_field",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "show_credit_field",
    name: "show_credit_field",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "debit_field_label",
    name: "debit_field_label",
    type: "text",
  },
  {
    label: "credit_field_label",
    name: "credit_field_label",
    type: "text",
  },
  {
    label: "show_currency",
    name: "show_currency",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "show_cost_center",
    name: "show_cost_center",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "show_note",
    name: "show_note",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "odd_table_color",
    name: "odd_table_color",
    type: "text",
  },
  {
    label: "even_table_color",
    name: "even_table_color",
    type: "text",
  },
];

const voucher_pattern_sms = [
  {
    label: "sms",
    name: "sms",
    type: "text",
  },
];

const voucher_pattern_group = {
  forms: {
    [VOUCHER_PATTERN_STEPS.voucher_general]: {
      fields: voucher_pattern_general,
      tab_name: "voucher_pattern_general",
    },
    [VOUCHER_PATTERN_STEPS.voucher_fields]: {
      fields: voucher_pattern_fields,
      tab_name: "voucher_pattern_fields",
    },
    [VOUCHER_PATTERN_STEPS.voucher_sms]: {
      fields: voucher_pattern_sms,
      tab_name: "voucher_pattern_sms",
    },
  },
};
// ==== End Voucher

// ==== Start Assets
const assets_group = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "number",
    name: "number",
    type: "number",
    required: true,
    hide_in_form: true,
  },
  {
    label: "type",
    name: "type",
    type: "number",
    required: true,
  },
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  {
    label: "last_name",
    name: "last_name",
    type: "text",
  },
  FIELDS_STRUCTURE.note(),
  {
    label: "parent_id",
    name: "parent_id",
    is_ref: true,
    ref_table: "assets_group",

    no_filter: true,
  },
];

const assets = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  FIELDS_STRUCTURE.number(),
  {
    label: "assets_group_id",
    name: "assets_group_id",

    required: true,
    is_ref: true,
    ref_table: "assets_group",
  },
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  {
    label: "code",
    name: "code",
    type: "number",

    hide_in_form: true,
  },
  {
    label: "barcode",
    name: "barcode",
    type: "text",
  },
  FIELDS_STRUCTURE.note(),
  {
    label: "is_active",
    name: "is_active",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "assets_area_id",
    name: "assets_area_id",
    is_ref: true,
    ref_table: "assets_area",
  },
  {
    label: "current_assets_area_id",
    name: "current_assets_area_id",
    is_ref: true,
    ref_table: "current_assets_area", // unknown table
  },
  {
    label: "state",
    name: "state",
    type: "text",
  },
  {
    label: "origin",
    name: "origin",
    type: "text",
  },
];

const assets_accounts = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "assets_id",
    name: "assets_id",
    is_ref: true,
    ref_table: "assets",
  },
  {
    label: "assets_account_id",
    name: "assets_account_id",
    is_ref: true,
    ref_table: "account", // unknown table
  },
  {
    label: "expense_account_id",
    name: "expense_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "depreciation_account_id",
    name: "depreciation_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "depreciation_Total_account_id",
    name: "depreciation_Total_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "profit_account_id",
    name: "profit_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "losses_account_id",
    name: "losses_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "evaluation_account_id",
    name: "evaluation_account_id",
    is_ref: true,
    ref_table: "account",
  },
];

const assets_depreciation = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "assets_id",
    name: "assets_id",
    is_ref: true,
    ref_table: "assets",
  },
  {
    label: "depreciation_mode",
    name: "depreciation_mode",
    type: "number",
  },
  {
    label: "is_depreciation_monthly",
    name: "is_depreciation_monthly",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "depreciation_begin_date",
    name: "depreciation_begin_date",
    type: "date",
  },
  {
    label: "age",
    name: "age",
    type: "number",
  },
  {
    label: "depreciation_avg",
    name: "depreciation_avg",
    type: "text",
  },
  {
    label: "scrap_value",
    name: "scrap_value",
    type: "text",
  },
  {
    label: "old_year_extra",
    name: "old_year_extra",
    type: "number",
  },
  {
    label: "old_year_decrease",
    name: "old_year_decrease",
    type: "number",
  },
  {
    label: "old_year_depreciation",
    name: "old_year_depreciation",
    type: "number",
  },
  {
    label: "old_year_maintenance",
    name: "old_year_maintenance",
    type: "number",
  },
];

const assets_input = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "assets_id",
    name: "assets_id",
    is_ref: true,
    ref_table: "assets",
  },
  {
    label: "importer",
    name: "importer",
    type: "text",
  },
  {
    label: "enter_account_id",
    name: "enter_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "enter_date",
    name: "enter_date",
    type: "date",
  },
  {
    label: "enter_value",
    name: "enter_value",
    type: "number",
  },
  FIELDS_STRUCTURE.currency({ hideValue: true }),
  {
    label: "enter_cost_center_id",
    name: "enter_cost_center_id",
    is_ref: true,
    ref_table: "cost_center",
  },
  {
    label: "enter_credit_Cost_center_id",
    name: "enter_credit_Cost_center_id",
    is_ref: true,
    ref_table: "cost_center",
  },
  {
    label: "enter_note",
    name: "enter_note",
    type: "text",
  },
];

const assets_maintenance = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "assets_id",
    name: "assets_id",
    is_ref: true,
    ref_table: "assets",
  },
  {
    label: "maintenance_contract",
    name: "maintenance_contract",
    type: "text",
  },
  {
    label: "maintenance_begin_date",
    name: "maintenance_begin_date",
    type: "date",
  },
  {
    label: "maintenance_end_date",
    name: "maintenance_end_date",
    type: "date",
  },
  {
    label: "guaranty",
    name: "guaranty",
    type: "text",
  },
  {
    label: "guaranty_begin_date",
    name: "guaranty_begin_date",
    type: "date",
  },
  {
    label: "guaranty_end_date",
    name: "guaranty_end_date",
    type: "date",
  },
];

const assets_sale = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "assets_id",
    name: "assets_id",
    is_ref: true,
    ref_table: "assets",
  },
  {
    label: "is_sale",
    name: "is_sale",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "sale_date",
    name: "sale_date",
    type: "date",
  },
  {
    label: "sale_customer",
    name: "sale_customer",
    type: "text",
  },
  {
    label: "sales_account_id",
    name: "sales_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "sale_value",
    name: "sale_value",
    type: "number",
  },
  {
    label: "currency_sale_id",
    name: "currency_sale_id",
    is_ref: true,
    ref_table: "currency",
    ref_name: "code",
  },
  {
    label: "currency_sale_val",
    name: "currency_sale_val",
    type: "number",
  },
  {
    label: "sale_note",
    name: "sale_note",
    type: "text",
  },
];

const assets_shipping = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "assets_id",
    name: "assets_id",
    is_ref: true,
    ref_table: "assets",
  },
  {
    label: "shipping",
    name: "shipping",
    type: "text",
  },
  {
    label: "shipping_no",
    name: "shipping_no",
    type: "text",
  },
  {
    label: "shipping_date",
    name: "shipping_date",
    type: "date",
  },
  {
    label: "arrive_date",
    name: "arrive_date",
    type: "date",
  },
  {
    label: "arrive_place",
    name: "arrive_place",
    type: "text",
  },
  {
    label: "import_permit",
    name: "import_permit",
    type: "text",
  },
  {
    label: "custom_note",
    name: "custom_note",
    type: "text",
  },
  {
    label: "custom_date",
    name: "custom_date",
    type: "date",
  },
  {
    label: "custom_expense",
    name: "custom_expense",
    type: "text",
  },
  {
    label: "shipping_note",
    name: "shipping_note",
    type: "text",
  },
];

// ==== End Assets

// // ==== Start maintenance_order
// const maintenance_order = [
//   FIELDS_STRUCTURE.id(),
//   FIELDS_STRUCTURE.created_at(),
//   {
//     label: "number",
//     name: "number",
//     type: "text",

//     hide_in_form: true,
//   },
//   {
//     label: "type",
//     name: "type",
//     type: "number",
//   },
//   {
//     label: "maintenance_order_no",
//     name: "maintenance_order_no",
//     type: "text",
//   },
//   {
//     label: "complaint_id",
//     name: "complaint_id",
//     is_ref: true,
//     ref_table: "complaint", // unknown table
//   },
//   {
//     label: "maintenance_worker_id",
//     name: "maintenance_worker_id",
//     is_ref: true,
//     ref_table: "maintenance_worker", // unknown table
//   },
//   {
//     label: "work_kind",
//     name: "work_kind",
//     type: "text",
//   },
//   {
//     label: "start_date",
//     name: "start_date",
//     type: "date",
//   },
//   {
//     label: "end_expected_date",
//     name: "end_expected_date",
//     type: "date",
//   },
//   {
//     label: "close_date",
//     name: "close_date",
//     type: "date",
//   },
//   {
//     label: "order_state",
//     name: "order_state",
//     type: "text",
//   },
//   {
//     label: "reason_not_realized",
//     name: "reason_not_realized",
//     type: "text",
//   },
//   {
//     label: "convert_to",
//     name: "convert_to",
//     type: "text",
//   },
//   {
//     label: "convert_note",
//     name: "convert_note",
//     type: "text",
//   },
//   {
//     label: "realized",
//     name: "realized",
//     type: "checkbox",
//     key: "switch",
//   },
//   {
//     label: "mat",
//     name: "mat",
//     type: "text",
//   },
//   {
//     label: "reason",
//     name: "reason",
//     type: "text",
//   },
//   {
//     label: "repetition",
//     name: "repetition",
//     type: "number",
//   },
//   {
//     label: "delay",
//     name: "delay",
//     type: "number",
//   },
//   {
//     label: "delay_reason",
//     name: "delay_reason",
//     type: "text",
//   },
//   {
//     label: "create_entry",
//     name: "create_entry",
//     type: "checkbox",
//     key: "switch",
//   },
//   {
//     label: "entry_date",
//     name: "entry_date",
//     type: "date",
//   },
//   {
//     label: "entry_value",
//     name: "entry_value",
//     type: "number",
//   },
//   {
//     label: "entry_currency_id",
//     name: "entry_currency_id",
//     is_ref: true,
//     ref_table: "currency",
//     ref_name: "code",
//   },
//   {
//     label: "entry_currency_val",
//     name: "entry_currency_val",
//     type: "number",
//   },
//   {
//     label: "debit_account_id",
//     name: "debit_account_id",
//     is_ref: true,
//     ref_table: "account",
//   },
//   {
//     label: "credit_account_id",
//     name: "credit_account_id",
//     is_ref: true,
//     ref_table: "account",
//   },
//   {
//     label: "debit_cost_center_id",
//     name: "debit_cost_center_id",
//     is_ref: true,
//     ref_table: "cost_center",
//   },
//   {
//     label: "credit_cost_center_id",
//     name: "credit_cost_center_id",
//     is_ref: true,
//     ref_table: "cost_center",
//   },
//   {
//     label: "entry_note",
//     name: "entry_note",
//     type: "text",
//   },
//   {
//     label: "note2",
//     name: "note2",
//     type: "text",
//   },
// ];

// ==== End maintenance_order

const user_work_times = [
  {
    label: "user_id",
    name: "user_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "user",
    ref_col: "id",
  },
  // {
  //   label:"category_id", name: "category_id",
  //   type: "uuid",
  //   required: true,
  //   is_ref: true,
  //   ref_table: "category",
  //   ref_col: "id",
  // },
  {
    label: "work_time_start",
    name: "work_time_start",
    type: "datetime-local",
    required: true,
  },
  {
    label: "work_time_end",
    name: "work_time_end",
    type: "datetime-local",
    required: true,
  },
];

// ==== Start material
const material_group = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "number",
    name: "number",
    type: "text",

    hide_in_form: true,
  },
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  FIELDS_STRUCTURE.note(),
  {
    label: "parent_id",
    name: "parent_id",
    is_ref: true,
    ref_table: "material_group",
    no_filter: true,
  },
];

// Start Material
const material = [
  { label: "code", name: "code", type: "number", required: true },
  { label: "name", name: "name", type: "text", required: true },
  { label: "ltnname", name: "ltnname", type: "text", required: false },
  {
    label: "category_id",
    name: "category_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "category",
    ref_col: "id",
  },
  {
    label: "material_group_id",
    name: "material_group_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "material_group",
    ref_col: "id",
  },
  FIELDS_STRUCTURE.selectField({
    label: "material_type",
    name: "material_type",
    list: SELECT_LISTS("material_type"),
  }),
  {
    label: "defaults1",
    name: "defaults1",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  { label: "unit1", name: "unit1", type: "text", required: false },
  { label: "barcode1", name: "barcode1", type: "text", required: false },
  { label: "unit2", name: "unit2", type: "text", required: false },
  { label: "exchange2", name: "exchange2", type: "number", required: false },
  { label: "barcode2", name: "barcode2", type: "text", required: false },
  {
    label: "defaults2",
    name: "defaults2",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  { label: "unit3", name: "unit3", type: "text", required: false },
  { label: "exchange3", name: "exchange3", type: "number", required: false },
  { label: "barcode3", name: "barcode3", type: "text", required: false },
  {
    label: "defaults3",
    name: "defaults3",
    type: "checkbox",
    key: "switch",
    required: false,
  },

  { label: "note", name: "note", type: "text", required: false },
];
const material_balance = [
  {
    label: "store_id",
    name: "store_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "store",
    ref_col: "id",
  },
  { label: "unit1", name: "unit1", type: "text", required: false },
  { label: "quality1", name: "quality1", type: "number", required: false },
  { label: "unit2", name: "unit2", type: "text", required: false },
  { label: "quality2", name: "quality2", type: "number", required: false },
  { label: "unit3", name: "unit3", type: "text", required: false },
  { label: "quality3", name: "quality3", type: "number", required: false },
];
const material_minimum = [
  {
    label: "store_id",
    name: "store_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "store",
    ref_col: "id",
  },
  { label: "minimum", name: "minimum", type: "number", required: false },
  { label: "maximum", name: "maximum", type: "number", required: false },
  { label: "note", name: "note", type: "text", required: false },
];
const material_prices = [
  {
    label: "currency_id",
    name: "currency_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "currency",
    ref_col: "id",
  },
  {
    label: "currency_val",
    name: "currency_val",
    type: "number",
    required: false,
  },
  { label: "vat_rate", name: "vat_rate", type: "number", required: false },
  {
    label: "average_purchase",
    name: "average_purchase",
    type: "number",
    required: false,
  },
  {
    label: "biggest_purchase",
    name: "biggest_purchase",
    type: "number",
    required: false,
  },
  {
    label: "pricing_policy",
    name: "pricing_policy",
    type: "number",
    required: false,
  },
  {
    label: "purchase_date",
    name: "purchase_date",
    type: "date",
    required: false,
  },
  {
    label: "average_sales",
    name: "average_sales",
    type: "number",
    required: false,
  },
  {
    label: "largest_sales",
    name: "largest_sales",
    type: "number",
    required: false,
  },
  { label: "last_price", name: "last_price", type: "number", required: false },
  { label: "sales_date", name: "sales_date", type: "date", required: false },
];
const material_prices_details = [
  { label: "price_type", name: "price_type", type: "number", required: false },
  { label: "unit1", name: "unit1", type: "number", required: false },
  { label: "unit2", name: "unit2", type: "number", required: false },
  { label: "unit3", name: "unit3", type: "number", required: false },
];
const material_specifications = [
  {
    label: "specification",
    name: "specification",
    type: "text",
    required: false,
  },
  { label: "value", name: "value", type: "number", required: false },
  { label: "note", name: "note", type: "text", required: false },
];
// end Material

// Start Bill
const bill = [
  {
    is_ref: true,
    ref_table: "material",
    ref_col: "id",
    hide_in_form: true,
  },
  { label: "number", name: "number", type: "number", required: false },
  {
    label: "currency_id",
    name: "currency_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "currency",
    ref_col: "id",
  },
  {
    label: "cost_center_id",
    name: "cost_center_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "cost_center",
    ref_col: "id",
  },
  { label: "note", name: "note", type: "text", required: false },
  FIELDS_STRUCTURE.selectField({
    label: "connect_with",
    name: "connect_with",
    list: SELECT_LISTS("bill_connect_with"),
  }),
  {
    label: "currency_val",
    name: "currency_val",
    type: "number",
    required: false,
  },
  { label: "issue_date", name: "issue_date", type: "date", required: true },
  { label: "bill_date", name: "bill_date", type: "date", required: true },
  { label: "bill_kind", name: "bill_kind", type: "number", required: true },
  {
    label: "client_account_id",
    name: "client_account_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  FIELDS_STRUCTURE.selectField({
    label: "payment_method",
    name: "payment_method",
    list: [
      { id: 1, name: "credit" },
      { id: 2, name: "cash" },
    ], // update future
  }),
  {
    label: "receipt_number",
    name: "receipt_number",
    type: "number",
    required: false,
  },
  {
    label: "store_id",
    name: "store_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "store",
    ref_col: "id",
  },
  {
    label: "customer_account_id",
    name: "customer_account_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  {
    label: "material_account_id",
    name: "material_account_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  { label: "kind", name: "kind", type: "text", required: false },
  {
    label: "total_quantities",
    name: "total_quantities",
    type: "number",
    required: false,
  },
  {
    label: "total_quantities_percentage",
    name: "total_quantities_percentage",
    type: "number",
    required: false,
  },
  {
    label: "total_quantities_percentage2",
    name: "total_quantities_percentage2",
    type: "number",
    required: false,
  },
  {
    label: "refunded_taxable_amount",
    name: "refunded_taxable_amount",
    type: "number",
    required: false,
  },
  {
    label: "non_refunded_taxable_amount",
    name: "non_refunded_taxable_amount",
    type: "number",
    required: false,
  },
  {
    label: "not_taxable",
    name: "not_taxable",
    type: "number",
    required: false,
  },
  { label: "taxable", name: "taxable", type: "number", required: false },
  { label: "total", name: "total", type: "number", required: false },
  { label: "discounts", name: "discounts", type: "number", required: false },
  {
    label: "discounts_extra",
    name: "discounts_extra",
    type: "number",
    required: false,
  },
  {
    label: "non_refundable_vat",
    name: "non_refundable_vat",
    type: "number",
    required: false,
  },
  {
    label: "non_refundable_vat2",
    name: "non_refundable_vat2",
    type: "number",
    required: false,
  },
  {
    label: "grand_total",
    name: "grand_total",
    type: "number",
    required: false,
  },
  { label: "net", name: "net", type: "number", required: false },
  {
    label: "bill_total_text",
    name: "bill_total_text",
    type: "text",
    required: false,
  },
];
const bill_discounts_details = [
  { label: "number", name: "number", type: "number", required: false },
  // {
  //   label: "bill_id",
  //   name: "bill_id",
  //   type: "uuid",
  //   required: false,
  //   is_ref: true,
  //   ref_table: "bill",
  //   ref_col: "id",
  // },
  {
    label: "account_id",
    name: "account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  { label: "discount", name: "discount", type: "number", required: false },
  { label: "extra", name: "extra", type: "number", required: false },
  // {
  //   label: "currency_id",
  //   name: "currency_id",
  //   type: "uuid",
  //   required: false,
  //   is_ref: true,
  //   ref_table: "currency",
  //   ref_col: "id",
  // },
  // {
  //   label: "currency_val",
  //   name: "currency_val",
  //   type: "number",
  //   required: false,
  // },
  {
    label: "cost_center_id",
    name: "cost_center_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "cost_center",
    ref_col: "id",
  },
  {
    label: "obverse_account_id",
    name: "obverse_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  { label: "note", name: "note", type: "text", required: false },
];
const bill_material_details = [
  // { label: "number", name: "number", type: "number", required: false },
  // {
  //   label: "bill_id",
  //   name: "bill_id",
  //   type: "uuid",
  //   required: false,
  //   is_ref: true,
  //   ref_table: "bill",
  //   ref_col: "id",
  // },
  {
    label: "material_id",
    name: "material_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "material",
    ref_col: "id",
  },
  { label: "quantity", name: "quantity", type: "number", required: false },
  { label: "unit_price", name: "unit_price", type: "number", required: false },
  {
    label: "total_price",
    name: "total_price",
    type: "number",
    required: false,
  },
  { label: "note", name: "note", type: "text", required: false },
];
// End Bill

// Start Bill Pattern
const bill_pattern_general = [
  { label: "code", name: "code", type: "number", required: false },
  { label: "name", name: "name", type: "text", required: false },
  { label: "ltnname", name: "ltnname", type: "text", required: false },
  { label: "number", name: "number", type: "number", required: false },
  FIELDS_STRUCTURE.selectField({
    label: "bill_type",
    name: "bill_type",
    list: SELECT_LISTS("bill_pattern_bill_type"),
  }),
  { label: "note", name: "note", type: "text", required: false },

  {
    label: "currency_id",
    name: "currency_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "currency",
    ref_col: "id",
    hideValue: true,
  },
  FIELDS_STRUCTURE.switchField({
    label: "barcode_bill",
    name: "barcode_bill",
  }),
];
const bill_pattern_accounts = [
  {
    label: "default_store_id",
    name: "default_store_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "store",
    ref_col: "id",
  },
  {
    label: "cost_center_id",
    name: "cost_center_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "cost_center",
    ref_col: "id",
  },
  {
    label: "material_account_id",
    name: "material_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  {
    label: "cash_account_id",
    name: "cash_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  {
    label: "discount_account_id",
    name: "discount_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  {
    label: "extra_account_id",
    name: "extra_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  {
    label: "vat_account_id",
    name: "vat_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },

  {
    label: "use_vat_account_from_customer_card",
    name: "use_vat_account_from_customer_card",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  FIELDS_STRUCTURE.selectField({
    label: "payment_method",
    name: "payment_method",
    list: SELECT_LISTS("bill_pattern_payment_methods"),
  }),

  {
    label: "active_perpetual_inventory",
    name: "active_perpetual_inventory",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "stock_account_id",
    name: "stock_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  {
    label: "calculate_sale_cost_center_id",
    name: "calculate_sale_cost_center_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "calculate_sale_cost_center",
    ref_col: "id",
  },
];
const bill_pattern_entries = [
  {
    label: "post_to_store",
    name: "post_to_store",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "post_to_store_auto",
    name: "post_to_store_auto",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "generate_entries",
    name: "generate_entries",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "auto_generate_entries",
    name: "auto_generate_entries",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "post_generate_entries_auto",
    name: "post_generate_entries_auto",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "deleting_entry_depending_on_materials",
    name: "deleting_entry_depending_on_materials",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "possibility_of_changing_materials_account",
    name: "possibility_of_changing_materials_account",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "calculate_vat_after_discount_and_extra_value_to_the_invoice",
    name: "calculate_vat_after_discount_and_extra_value_to_the_invoice",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "merge_repeated_materials",
    name: "merge_repeated_materials",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "required_customer_entry",
    name: "required_customer_entry",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "required_cost_center_entry",
    name: "required_cost_center_entry",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "required_category_entry",
    name: "required_category_entry",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "show_alert_on_navigate_output",
    name: "show_alert_on_navigate_output",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "dont_save_when_navigate_output",
    name: "dont_save_when_navigate_output",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "show_average_price_check_message_after_adding_modifying",
    name: "show_average_price_check_message_after_adding_modifying",
    type: "checkbox",
    key: "switch",
    required: false,
  },
];
const bill_pattern_options = [
  {
    label: "bill_affected_the_pricing_of_materials",
    name: "bill_affected_the_pricing_of_materials",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "pricing_of_materials",
    name: "pricing_of_materials",
    type: "number",
    required: false,
  },
  { label: "menu", name: "menu", type: "text", required: false },
  {
    label: "table_color1",
    name: "table_color1",
    type: "color",
    required: false,
  },
  {
    label: "table_color2",
    name: "table_color2",
    type: "color",
    required: false,
  },
];
const bill_pattern_bill_details = [];
const bill_pattern_references = [
  {
    label: "show_references_field",
    name: "show_references_field",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "required_reference_field",
    name: "required_reference_field",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "dont_show_expired_field",
    name: "dont_show_expired_field",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "lock_bill_when_loading_references",
    name: "lock_bill_when_loading_references",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "allow_partial_load",
    name: "allow_partial_load",
    type: "checkbox",
    key: "switch",
    required: false,
  },

  { label: "references", name: "references", type: "jsonb[]", required: false },
];
const bill_pattern_materials = [];

// End Bill Pattern

// const materials = [
//   { label: "barcode", name: "barcode", type: "text" },
//   { label: "name", name: "name", type: "text", required: true },
//   { label: "description", name: "description", type: "text" },
//   {
//     label: "category_id",
//     name: "category_id",
//     type: "uuid",
//     is_ref: true,
//     ref_table: "category",
//     ref_col: "id",
//   },
//   // {
//   //   label: "material_group_id",
//   //   name: "material_group_id",
//   //   type: "uuid",
//   //   is_ref: true,
//   //   ref_table: "material_group",
//   //   ref_col: "id",
//   //   require: true,
//   // },
//   {
//     label: "purchasing_price",
//     name: "purchasing_price",
//     type: "number",
//     required: true,
//   },
//   {
//     label: "selling_price",
//     name: "selling_price",
//     type: "number",
//     required: true,
//   },
//   {
//     label: "currency_id",
//     name: "currency_id",
//     type: "uuid",
//     is_ref: true,
//     ref_table: "currency",
//     ref_col: "id",
//   },
//   { label: "note", name: "note", type: "text" },
//   {
//     label: "is_available",
//     name: "is_available",
//     type: "checkbox",
//     key: "switch",
//   },
// ];

// ==== End material
// ==== Start Category
const category = [
  { label: "name", name: "name", type: "text", required: true },
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  { label: "description", name: "description", type: "text", required: false },
  {
    label: "parent_id",
    name: "parent_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "category",
    ref_col: "id",
  },
  { label: "image", name: "image", key: "image", required: false },
];

const category_problem = [
  { label: "problem", name: "description", type: "text", required: true },
  { label: "Ltnproblem", name: "ltndescription", type: "text", required: true },
  {
    label: "category_id",
    name: "category_id",
    type: "uuid",
    is_ref: true,
    ref_table: "category",
    ref_col: "id",
    require: true,
  },
  { label: "minutes", name: "minutes", type: "number", required: true },
  { label: "price", name: "price", type: "number" },
  {
    label: "is_available",
    name: "is_available",
    type: "checkbox",
    key: "switch",
  },
];

// ==== End Category
const evacuation_request = [
  { label: "description", name: "description", type: "text", readOnly: true },
  {
    label: "evacuation_date",
    name: "evacuation_date",
    type: "date",
    readOnly: true,
  },
  {
    label: "contract_id",
    name: "contract_id",
    type: "uuid",
    readOnly: true,
    is_ref: true,
    ref_table: "contract",
    ref_col: "id",
  },
  {
    label: "user_account_id",
    name: "user_account_id",
    type: "uuid",
    readOnly: true,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  FIELDS_STRUCTURE.selectField({
    label: "request_status",
    name: "request_status",
    list: SELECT_LISTS("evacuation_request_status"),
  }),
  { label: "note", name: "note", type: "text", required: false },
];

// ==== Start Parking
const parking = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "building_id",
    name: "building_id",
    is_ref: true,
    ref_table: "building",
    hideAdd: true,
  },
  {
    label: "parking_no",
    name: "parking_no",
    type: "text",
  },
  {
    label: "floor_no",
    name: "floor_no",
    type: "text",
  },
  {
    label: "area",
    name: "area",
    type: "text",
  },
  {
    label: "area_unit",
    name: "area_unit",
    type: "text",
  },
  {
    label: "parking_kind",
    name: "parking_kind",
    key: "select",
    intValue: true,
    list: SELECT_LISTS("parking_kind_type"),
    required: true,
  },
  {
    label: "description",
    name: "description",
    type: "text",
  },
  {
    label: "view",
    name: "view",
    type: "text",
  },
  {
    label: "customer_id",
    name: "customer_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "has_lawsuit",
    name: "has_lawsuit",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "blocked",
    name: "blocked",
    type: "checkbox",
    key: "switch",
  },
  FIELDS_STRUCTURE.cost_center(),
  FIELDS_STRUCTURE.cost_center({
    label: "main_cost_center_id",
    name: "main_cost_center_id",
  }),
  {
    label: "purchase_date",
    name: "purchase_date",
    type: "date",
  },
  {
    label: "property_type",
    name: "property_type",
    key: "select",

    intValue: true,
    list: SELECT_LISTS("flat_property_type"),
  },
  {
    label: "flat_owner_id",
    name: "flat_owner_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "property_values_id",
    name: "property_values_id",
    is_ref: true,
    ref_table: "property_values",

    ref_name: "row_index",
  },
  {
    label: "hex",
    name: "hex",
    type: "text",

    readOnly: false,
  },
  {
    label: "x_index",
    name: "x_index",
    type: "number",
  },
  {
    label: "y_index",
    name: "y_index",
    type: "number",
  },
  FIELDS_STRUCTURE.note(),
];

const parking_accumulate = [
  { name: "parking_id", is_ref: true, ref_table: "parking" },
];

const parking_pictures = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "parking_id",
    name: "parking_id",
    is_ref: true,
    ref_table: "parking",

    hide_in_form: true,
  },
  {
    multiple: true,
    label: "picture",
    name: "picture",
    type: "file",

    key: "image",
  },
];

const parking_price = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "parking_id",
    name: "parking_id",
    is_ref: true,
    ref_table: "parking",
  },
  {
    label: "date1",
    name: "date1",
    type: "date",
  },
  {
    label: "print1",
    name: "print1",
    type: "number",
  },
  {
    label: "currency1_id",
    name: "currency1_id",
    is_ref: true,
    ref_table: "currency",
    ref_name: "code",
  },
  {
    label: "date2",
    name: "date2",
    type: "date",
  },
  {
    label: "prnumber",
    name: "prnumber",
    type: "number",
  },
  {
    label: "currency2_id",
    name: "currency2_id",
    is_ref: true,
    ref_table: "currency",
    ref_name: "code",
  },
  {
    label: "cost_price",
    name: "cost_price",
    type: "number",
  },
  {
    label: "sale",
    name: "sale",
    type: "number",
  },
];

// ==== End Parking

// ==== Start Shop
const shop = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "building_id",
    name: "building_id",
    is_ref: true,
    ref_table: "building",
    hideAdd: true,
  },
  {
    label: "floor_no",
    name: "floor_no",
    type: "text",
  },
  {
    label: "shop_no",
    name: "shop_no",
    type: "text",
  },
  {
    label: "property_type",
    name: "property_type",
    key: "select",

    intValue: true,
    list: SELECT_LISTS("flat_property_type"),
  },

  {
    label: "description",
    name: "description",
    type: "text",
  },
  {
    label: "x_index",
    name: "x_index",
    type: "number",
  },
  {
    label: "y_index",
    name: "y_index",
    type: "number",
  },
  FIELDS_STRUCTURE.cost_center(),
  FIELDS_STRUCTURE.cost_center({
    label: "main_cost_center_id",
    name: "main_cost_center_id",
  }),
  {
    label: "kind",
    name: "kind",
    type: "text",
  },
  {
    label: "area",
    name: "area",
    type: "number",
  },
  {
    label: "area_unit",
    name: "area_unit",
    type: "text",
  },
  {
    label: "view",
    name: "view",
    type: "text",
  },
  {
    label: "license1",
    name: "license1",
    type: "text",
  },
  {
    label: "license2",
    name: "license2",
    type: "text",
  },
  {
    label: "unified_num",
    name: "unified_num",
    type: "text",
  },
  {
    label: "property_values_id",
    name: "property_values_id",
    is_ref: true,
    ref_table: "property_values",

    ref_name: "row_index",
  },
  {
    label: "hex",
    name: "hex",
    type: "text",

    readOnly: false,
  },
  {
    label: "has_lawsuit",
    name: "has_lawsuit",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "blocked",
    name: "blocked",
    type: "checkbox",
    key: "switch",
  },
  {
    label: "customer_id",
    name: "customer_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "customer_owner_id",
    name: "customer_owner_id",
    is_ref: true,
    ref_table: "owner", // unknown table
  },
  {
    label: "flat_owner_id",
    name: "flat_owner_id",
    is_ref: true,
    ref_table: "account", // unknown table
  },
  {
    label: "water_meter",
    name: "water_meter",
    type: "text",
  },
  {
    label: "electricity_meter",
    name: "electricity_meter",
    type: "text",
  },
  {
    label: "bond_type",
    name: "bond_type",
    type: "text",
  },
  {
    label: "bond_no",
    name: "bond_no",
    type: "text",
  },
  {
    label: "bond_date",
    name: "bond_date",
    type: "date",
  },
  FIELDS_STRUCTURE.note(),
];
const shop_accumulate = [{ name: "shop_id", is_ref: true, ref_table: "shop" }];

const shop_fixed_assets = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "shop_id",
    name: "shop_id",
    is_ref: true,
    ref_table: "shop",
  },
  {
    label: "assets_id",
    name: "assets_id",
    is_ref: true,
    ref_table: "assets",
  },
  {
    label: "value",
    name: "value",
    type: "number",
  },
  FIELDS_STRUCTURE.note(),
];

const shop_pictures = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "shop_id",
    name: "shop_id",
    is_ref: true,
    ref_table: "shop",

    hide_in_form: true,
  },
  {
    label: "picture",
    name: "picture",
    multiple: true,
    type: "file",

    key: "image",
  },
];

const shop_rental_price = [
  FIELDS_STRUCTURE.id(),
  {
    label: "shop_id",
    name: "shop_id",
    is_ref: true,
    ref_table: "shop",
    hide_in_form: true,
  },
  {
    label: "date",
    name: "date",
    type: "date",
  },
  {
    label: "price",
    name: "price",
    type: "number",
  },
  FIELDS_STRUCTURE.currency({ hideValue: true }),
  FIELDS_STRUCTURE.note(),
];

const shop_selling_price = [
  FIELDS_STRUCTURE.id(),
  {
    label: "shop_id",
    name: "shop_id",
    is_ref: true,
    ref_table: "shop",
    hide_in_form: true,
  },
  {
    label: "date",
    name: "date",
    type: "date",
  },
  {
    label: "price",
    name: "price",
    type: "number",
  },
  FIELDS_STRUCTURE.currency({ hideValue: true }),
  FIELDS_STRUCTURE.note(),
];

const parking_rental_price = [
  FIELDS_STRUCTURE.id(),
  {
    label: "parking_id",
    name: "parking_id",
    is_ref: true,
    ref_table: "parking",
    hide_in_form: true,
  },
  {
    label: "date",
    name: "date",
    type: "date",
  },
  {
    label: "price",
    name: "price",
    type: "number",
  },
  FIELDS_STRUCTURE.currency({ hideValue: true }),
  FIELDS_STRUCTURE.note(),
];

const parking_selling_price = [
  FIELDS_STRUCTURE.id(),
  {
    label: "parking_id",
    name: "parking_id",
    is_ref: true,
    ref_table: "parking",
    hide_in_form: true,
  },
  {
    label: "date",
    name: "date",
    type: "date",
  },
  {
    label: "price",
    name: "price",
    type: "number",
  },
  FIELDS_STRUCTURE.currency({ hideValue: true }),
  FIELDS_STRUCTURE.note(),
];

// ==== End parking
// ==== Start Villa
const villa = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "complex_name",
    name: "complex_name",
    type: "text",
    required: true,
  },
  {
    label: "villa_no",
    name: "villa_no",
    type: "text",
    required: true,
  },
  {
    label: "emirate",
    name: "emirate",
    type: "text",
  },
  {
    label: "area",
    name: "area",
    type: "text",
  },
  {
    label: "suburb",
    name: "suburb",
    type: "text",
  },
  {
    label: "street",
    name: "street",
    type: "text",
  },
  {
    label: "doc_type",
    name: "doc_type",
    type: "text",
  },
  {
    label: "doc_no",
    name: "doc_no",
    type: "text",
  },
  {
    label: "doc_date",
    name: "doc_date",
    type: "date",
  },
  {
    label: "piece_no",
    name: "piece_no",
    type: "text",
  },
  {
    label: "basin_no",
    name: "basin_no",
    type: "text",
  },
  {
    label: "water_meter",
    name: "water_meter",
    type: "number",
  },
  {
    label: "electricity_meter",
    name: "electricity_meter",
    type: "number",
  },
  // {
  //   label: "customer_owner_id",
  //   name: "customer_owner_id",
  //   is_ref: true,
  //   ref_table: "owner", // unknown table
  // },
  FIELDS_STRUCTURE.note(),
];

const villa_accounts = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "villa_account_id",
    name: "villa_account_id",
    is_ref: true,
    ref_table: "account",
  },
  FIELDS_STRUCTURE.cost_center(),
  {
    label: "account_bank_villa_id",
    name: "account_bank_villa_id",
    is_ref: true,
    ref_table: "bank", // unknown table
  },
  {
    label: "cash_account_id",
    name: "cash_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "insurance_account_id",
    name: "insurance_account_id",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "lessor_id",
    name: "lessor_id",
    is_ref: true,
    ref_table: "lessor",
  },
];

const villa_assets = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "assets_id",
    name: "assets_id",
    is_ref: true,
    ref_table: "assets",
  },
  {
    label: "value",
    name: "value",
    type: "number",
  },
  FIELDS_STRUCTURE.note(),
];

const villa_exterior_details = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "wall",
    name: "wall",
    type: "text",
  },
  {
    label: "wall_state",
    name: "wall_state",
    type: "text",
  },
  {
    label: "lighting_count",
    name: "lighting_count",
    type: "number",
  },
  {
    label: "parking_count",
    name: "parking_count",
    type: "number",
  },
  {
    label: "parking_area",
    name: "parking_area",
    type: "text",
  },
  {
    label: "parking_shaded",
    name: "parking_shaded",
    type: "text",
  },
  {
    label: "pool_count",
    name: "pool_count",
    type: "number",
  },
  {
    label: "pool_state",
    name: "pool_state",
    type: "text",
  },
  {
    label: "pool_system",
    name: "pool_system",
    type: "text",
  },
  {
    label: "play_ground_count",
    name: "play_ground_count",
    type: "number",
  },
  {
    label: "play_ground_area",
    name: "play_ground_area",
    type: "text",
  },
  {
    label: "garden_count",
    name: "garden_count",
    type: "number",
  },
  {
    label: "garden_area",
    name: "garden_area",
    type: "text",
  },
  {
    label: "garden_state",
    name: "garden_state",
    type: "text",
  },
];

const villa_interior_details = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "floor_count",
    name: "floor_count",
    type: "text",
  },
  {
    label: "balcony_count",
    name: "balcony_count",
    type: "number",
  },
  {
    label: "room_count",
    name: "room_count",
    type: "number",
  },
  {
    label: "service_room_count",
    name: "service_room_count",
    type: "number",
  },
  {
    label: "other_room_count",
    name: "other_room_count",
    type: "number",
  },
  {
    label: "bath_room_count",
    name: "bath_room_count",
    type: "number",
  },
  {
    label: "stairs_internal",
    name: "stairs_internal",
    type: "text",
  },
  {
    label: "room_state",
    name: "room_state",
    type: "text",
  },
  {
    label: "land_area",
    name: "land_area",
    type: "text",
  },
  {
    label: "land_area_building",
    name: "land_area_building",
    type: "text",
  },
  {
    label: "area_unit",
    name: "area_unit",
    type: "text",
  },
  {
    label: "finishing_state",
    name: "finishing_state",
    type: "text",
  },
  {
    label: "security_system",
    name: "security_system",
    type: "text",
  },
  {
    label: "security_type",
    name: "security_type",
    type: "number",
  },
];

// const villa_pictures = [
//   FIELDS_STRUCTURE.id(),
//   FIELDS_STRUCTURE.created_at(),
//   {
//     label: "picture",
//     name: "picture",
//     type: "file",
//     multiple: true,

//     key: "image",
//   },
// ];

const villa_rental_price = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "villa_id",
    name: "villa_id",
    is_ref: true,
    ref_table: "villa",
  },
  {
    label: "date",
    name: "date",
    type: "date",
  },
  {
    label: "price",
    name: "price",
    type: "number",
  },
  FIELDS_STRUCTURE.currency({ hideValue: true }),
];

const villa_selling_price = [
  FIELDS_STRUCTURE.id(),
  {
    label: "villa_id",
    name: "villa_id",
    is_ref: true,
    ref_table: "villa",
  },
  {
    label: "date",
    name: "date",
    type: "date",
  },
  {
    label: "price",
    name: "price",
    type: "number",
  },
  FIELDS_STRUCTURE.currency({ hideValue: true }),
];

// ==== End Villa

// =================

// ==== Start Store

export const store = [
  FIELDS_STRUCTURE.id(),
  FIELDS_STRUCTURE.created_at(),
  {
    label: "number",
    name: "number",
    type: "text",

    hide_in_form: true,
  },
  {
    label: "type",
    name: "type",
    type: "number",
    required: true,
  },
  {
    label: "code",
    name: "code",
    type: "number",
  },
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  {
    label: "address",
    name: "address",
    type: "text",
  },
  {
    label: "warehouseman",
    name: "warehouseman",
    type: "text",
  },
  FIELDS_STRUCTURE.note(),
  {
    label: "parent_id",
    name: "parent_id",
    is_ref: true,
    ref_table: "store",
    no_filter: true,
  },
  {
    label: "final_id",
    name: "final_id",
    is_ref: true,
    ref_table: "store",
  },
];
// ==== End Store
// ==== End entry
const entry_main_data = [
  FIELDS_STRUCTURE.id(),
  {
    label: "number",
    name: "number",
    type: "number",
    required: true,
    hide_in_form: true,
    defaultValue: 1,
  },
  {
    label: "created_at",
    name: "created_at",
    type: "date",
    required: true,
  },
  {
    label: "currency_id",
    name: "currency_id",
    required: true,
    is_ref: true,
    ref_table: "currency",
    ref_name: "code",
  },
  {
    label: "note",
    name: "note",
    type: "text",
    required: false,
  },
  {
    label: "debit",
    name: "debit",
    type: "number",
    required: true,
  },
  {
    label: "credit",
    name: "credit",
    type: "number",
    required: true,
  },
  {
    label: "difference",
    name: "difference",
    type: "number",
    required: true,
  },
  // {
  //   label: "currency_val",
  //   name: "currency_val",
  //   defaultValue: 1,
  //   type: "number",
  //   required: true,
  // },
  {
    label: "created_from",
    name: "created_from",
    type: "text",
  },
  {
    label: "created_from_id",
    name: "created_from_id",
  },
];

const entry_grid_data = [
  FIELDS_STRUCTURE.id(),
  {
    label: "created_at",
    name: "created_at",
    type: "date",

    hide_in_form: true,
  },
  FIELDS_STRUCTURE.account(),
  {
    label: "debit",
    name: "debit",
    type: "number",
  },
  {
    label: "credit",
    name: "credit",
    type: "number",
  },
  FIELDS_STRUCTURE.cost_center(),
  FIELDS_STRUCTURE.note(),
  {
    label: "observe_account_id",
    name: "observe_account_id",
    is_ref: true,
    ref_table: "account",
    hide_in_form: true,
  },
  FIELDS_STRUCTURE.currency({ hideValue: true, hide_in_form: true }),
  {
    label: "entry_main_data_id",
    name: "entry_main_data_id",
    is_ref: true,
    ref_table: "entry_main_data",

    hide_in_form: true,
  },
];
// ==== End entry

const owner_expenses = [
  {
    is_ref: true,
    ref_table: "owner_expenses_types",
    ref_col: "id",
    hide_in_form: true,
  },
  { label: "date", name: "date", type: "date", required: false },
  { label: "number", name: "number", type: "number", required: false },
  {
    label: "receipt_number",
    name: "receipt_number",
    type: "number",
    required: false,
  },
  {
    label: "building_id",
    name: "building_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "building",
    ref_col: "id",
    hideAdd: true,
  },
  {
    label: "owner_id",
    name: "owner_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "owner",
    ref_col: "id",
  },
  { label: "note", name: "note", type: "text", required: false },
];
const owner_expenses_details = [
  { label: "date", name: "date", type: "date", required: false },
  {
    label: "expenses_types",
    name: "owner_expenses_types_id",
    type: "uuid",
    is_ref: true,
    ref_table: "owner_expenses_types",
    ref_col: "id",
    readOnly: true,
  },
  { label: "amount", name: "amount", type: "number", required: false },
  { label: "note", name: "note", type: "text", required: false },
  {
    label: "receipt_number",
    name: "receipt_number",
    type: "number",
    required: false,
  },
];
const owner_expenses_types = [
  // { label:"number", name: "number", type: "number", required: false },
  { label: "code", name: "code", type: "text", required: true },
  { label: "name", name: "name", type: "text", required: true },
  { label: "ltnname", name: "ltnname", type: "text", required: false },
  { label: "note", name: "note", type: "text", required: false },
];

const tenants = [
  { label: "company_name", name: "company_name", type: "text", required: true },
  { label: "emirate", name: "emirate", type: "text", required: true },
  { label: "address", name: "address", type: "text", required: true },
  {
    label: "license_start",
    name: "license_start",
    type: "date",
    required: true,
  },
  {
    label: "license_expired",
    name: "license_expired",
    type: "date",
    required: true,
  },
  {
    label: "total_units_count",
    name: "total_units_count",
    type: "number",
    required: false,
  },

  FIELDS_STRUCTURE.selectField({
    label: "package",
    name: "package",
    list: SELECT_LISTS("tenants_package"),
  }),

  {
    label: "is_active",
    name: "is_active",
    key: "switch",
    type: "checkbox",
    required: false,
  },
];

// Lawsuit start
const lawsuit = [
  { label: "created_at", name: "created_at", type: "date", hide_in_form: true },
  { label: "number", name: "number", type: "number", hide_in_form: true },
  {
    label: "contract_id",
    name: "contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",
    hideAdd: true,
    ref_col: "id",
    ref_col: "id",
  },
  { label: "lawsuit_no", name: "lawsuit_no", type: "text", required: false },
  { label: "note", name: "note", type: "text", required: false },
  {
    label: "opened_lawsuit_date",
    name: "opened_lawsuit_date",
    type: "date",
    required: false,
  },
  {
    label: "building_id",
    name: "building_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "building",
    hideAdd: true,
    ref_col: "id",
  },
  {
    label: "unit_id",
    name: "unit_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "unit",
    ref_col: "id",
  },
  {
    label: "client_id",
    name: "client_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "client",
    ref_col: "id",
  },
  {
    label: "status",
    name: "status",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "legal_department_date",
    name: "legal_department_date",
    type: "date",
    required: false,
  },
  {
    label: "refrain_date",
    name: "refrain_date",
    type: "date",
    required: false,
  },
  {
    label: "municipality_clearance_date",
    name: "municipality_clearance_date",
    type: "date",
    required: false,
  },
  {
    label: "electricity_clearance_date",
    name: "electricity_clearance_date",
    type: "date",
    required: false,
  },
  {
    label: "latest_rent_certified_contract",
    name: "latest_rent_certified_contract",
    type: "number",
    required: false,
  },
  {
    label: "implementation_number",
    name: "implementation_number",
    type: "number",
    required: false,
  },
  {
    label: "implementation_date",
    name: "implementation_date",
    type: "date",
    required: false,
  },
];

const lawsuit_expenses = [
  {
    label: "registration_date",
    name: "registration_date",
    type: "date",
    required: false,
  },
  {
    label: "recovered_from_client",
    name: "recovered_from_client",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "receipt_number",
    name: "receipt_number",
    type: "number",
    required: false,
  },
  {
    label: "receipt_date",
    name: "receipt_date",
    type: "date",
    required: false,
  },
  {
    label: "receipt_value",
    name: "receipt_value",
    type: "number",
    required: false,
  },
  {
    label: "issuing_entity",
    name: "issuing_entity",
    type: "text",
    required: false,
  },
  {
    label: "receipt_statement",
    name: "receipt_statement",
    type: "text",
    required: false,
  },
  {
    label: "statement_unification",
    name: "statement_unification",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "currency_id",
    name: "currency_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "currency",
    ref_col: "id",
  },
  {
    label: "currency_val",
    name: "currency_val",
    type: "number",
    required: false,
  },
  {
    label: "debit_account_id",
    name: "debit_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  {
    label: "credit_account_id",
    name: "credit_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  {
    label: "debit_cost_center_id",
    name: "debit_cost_center_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "cost_center",
    ref_col: "id",
  },
  {
    label: "credit_cost_center_id",
    name: "credit_cost_center_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "credit_cost_center",
    ref_col: "id",
  },
  {
    label: "debit_statement",
    name: "debit_statement",
    type: "text",
    required: false,
  },
  {
    label: "credit_statement",
    name: "credit_statement",
    type: "text",
    required: false,
  },
  {
    label: "gen_entries",
    name: "gen_entries",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  { label: "user", name: "user", type: "text", required: false },
  {
    label: "refunded_from_customer",
    name: "refunded_from_customer",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  { label: "statement", name: "statement", type: "text", required: false },
];

const lawsuit_expenses_pictures = [
  {
    label: "picture",
    name: "picture",
    key: "image",
    multiple: true,
    type: "text",
    required: false,
  },
];

const lawsuit_internal_expenses = [
  {
    label: "currency_id",
    name: "currency_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "currency",
    ref_col: "id",
  },
  {
    label: "currency_val",
    name: "currency_val",
    type: "number",
    required: false,
  },
  {
    label: "lawyer_gen_entries",
    name: "lawyer_gen_entries",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "lawyer_amount",
    name: "lawyer_amount",
    type: "number",
    required: false,
  },
  {
    label: "lawyer_debit_account_id",
    name: "lawyer_debit_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  {
    label: "lawyer_credit_account_id",
    name: "lawyer_credit_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  {
    label: "lawyer_statement",
    name: "lawyer_statement",
    type: "text",
    required: false,
  },
  {
    label: "maintenance_gen_entries",
    name: "maintenance_gen_entries",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "maintenance_amount",
    name: "maintenance_amount",
    type: "number",
    required: false,
  },
  {
    label: "maintenance_debit_account_id",
    name: "maintenance_debit_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  {
    label: "maintenance_credit_account_id",
    name: "maintenance_credit_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  {
    label: "maintenance_statement",
    name: "maintenance_statement",
    type: "text",
    required: false,
  },
  {
    label: "furniture_gen_entries",
    name: "furniture_gen_entries",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "furniture_amount",
    name: "furniture_amount",
    type: "number",
    required: false,
  },
  {
    label: "furniture_debit_account_id",
    name: "furniture_debit_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  {
    label: "furniture_credit_account_id",
    name: "furniture_credit_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    ref_col: "id",
  },
  {
    label: "furniture_statement",
    name: "furniture_statement",
    type: "text",
    required: false,
  },
];

const lawsuit_status = [
  { label: "date", name: "date", type: "date", required: false },
  { label: "status", name: "status", type: "text", required: false },
  { label: "statement", name: "statement", type: "text", required: false },
  { label: "user", name: "user", type: "text", required: false },
  {
    label: "printed",
    name: "printed",
    type: "checkbox",
    key: "switch",
    required: false,
  },
];

const lawsuit_termination = [
  {
    label: "implementation_suspended",
    name: "implementation_suspended",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "implementation_suspended_date",
    name: "implementation_suspended_date",
    type: "date",
    required: false,
  },
  { label: "statement", name: "statement", type: "text", required: false },
  {
    label: "lawsuit_terminated",
    name: "lawsuit_terminated",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "lawsuit_terminated_date",
    name: "lawsuit_terminated_date",
    type: "date",
    required: false,
  },
];

const service = [
  { label: "start_date", name: "start_date", type: "date", readOnly: false },
  { label: "end_date", name: "end_date", type: "date", readOnly: false },
  {
    label: "owner_account_id",
    name: "owner_account_id",
    type: "uuid",
    readOnly: false,
    is_ref: true,
    ref_table: UNIQUE_REF_TABLES.suppliers,
    ref_col: "id",
  },
  {
    label: "building_id",
    name: "building_id",
    type: "uuid",
    readOnly: false,
    is_ref: true,
    ref_table: "building",
    ref_col: "id",
  },
  {
    label: "unit_id",
    name: "unit_id",
    type: "uuid",
    readOnly: false,
    is_ref: true,
    ref_table: "apartment",
    ref_col: "id",
    ref_name: "apartment_no",
  },
  FIELDS_STRUCTURE.selectField({
    label: "unit_type",
    name: "unit_type",
    list: SELECT_LISTS("unit_type"),
  }),

  // FIELDS_STRUCTURE.switchField({
  //   label: "is_default",
  //   name: "is_default",
  // }),

  { label: "total", name: "total", type: "number", readOnly: false },
  // { label: "code", name: "code", type: "number", readOnly: false },
  FIELDS_STRUCTURE.selectField({
    label: "status",
    name: "status",
    list: SELECT_LISTS("service_status"),
  }),
  {
    label: "payment_method",
    name: "payment_method",
    type: "number",
    readOnly: false,
  },
  {
    label: "supervisor_user_id",
    name: "supervisor_user_id",
    type: "uuid",
    readOnly: false,
    is_ref: true,
    ref_table: UNIQUE_REF_TABLES.supervisor,
    ref_col: "id",
  },
];

const service_customer_request = [
  {
    label: "contract_id",
    name: "contract_id",
    type: "uuid",
    readOnly: false,
    is_ref: true,
    ref_table: "contract",
    ref_col: "id",
    ref_name: "internal_number",
  },
  { label: "description", name: "description", type: "text", readOnly: false },
  {
    label: "customer_user_id",
    name: "customer_user_id",
    type: "uuid",
    readOnly: false,
    is_ref: true,
    ref_table: "user",
    ref_col: "id",
  },
];

const service_lack_reason = [
  { label: "paused_date", name: "paused_date", type: "date", required: false },
  {
    label: "continue_date",
    name: "continue_date",
    type: "date",
    required: false,
  },

  {
    label: "lack_reason_id",
    name: "lack_reason_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "lack_reason",
    ref_col: "id",
    ref_name: "reason",
  },
  {
    label: "lack_reason_code",
    name: "lack_reason_code",
    type: "number",
    required: false,
  },
  {
    label: "worker_user_id",
    name: "worker_user_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: UNIQUE_REF_TABLES.employee,
    ref_col: "id",
  },
];

const service_material = [
  { label: "created_at", name: "created_at", type: "date", required: false },
  {
    label: "material_id",
    name: "material_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "material",
    ref_col: "id",
  },
  { label: "name", name: "name", type: "text", required: false },
  { label: "ltnname", name: "ltnname", type: "text", required: false },
  { label: "price", name: "price", type: "number", required: false },
  { label: "quantity", name: "quantity", type: "number", required: false },
  FIELDS_STRUCTURE.selectField({
    label: "status",
    name: "status",
    list: SELECT_LISTS("service_material_status"),
  }),
  {
    label: "worker_user_id",
    name: "worker_user_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: UNIQUE_REF_TABLES.employee,
    ref_col: "id",
  },
];

const service_worker = [
  { label: "description", name: "description", type: "text", readOnly: false },
  {
    label: "category_id",
    name: "category_id",
    type: "uuid",
    readOnly: false,
    is_ref: true,
    ref_table: "category",
    ref_col: "id",
  },
  {
    label: "category_problem_id",
    name: "category_problem_id",
    type: "uuid",
    readOnly: false,
    is_ref: true,
    ref_table: "category_problem",
    ref_col: "id",
    ref_name: "description",
  },
  {
    label: "worker_user_id",
    name: "worker_user_id",
    type: "uuid",
    readOnly: false,
    is_ref: true,
    ref_table: UNIQUE_REF_TABLES.employee,
    ref_col: "id",
  },
  {
    label: "worker_status",
    name: "worker_status",
    type: "number",
    readOnly: false,
  },
  {
    label: "total_minutes",
    name: "total_minutes",
    type: "number",
    readOnly: false,
  },
  {
    label: "booking_start_date",
    name: "booking_start_date",
    type: "date",
    readOnly: false,
  },
  {
    label: "booking_end_date",
    name: "booking_end_date",
    type: "date",
    readOnly: false,
  },
  {
    label: "booking_completed_date",
    name: "booking_completed_date",
    type: "date",
    readOnly: false,
  },
];

const lack_reason = [
  { label: "code", name: "code", type: "number", readOnly: false },
  { label: "reason", name: "reason", type: "text", readOnly: false },
  { label: "ltnreason", name: "ltnreason", type: "text", readOnly: false },
  {
    label: "available",
    name: "available",
    type: "checkbox",
    key: "switch",
  },
];

const service_customer_group = {
  forms: {
    [SERVICE_STEPS.service]: {
      fields: service,
      tab_name: "service",
    },
    [SERVICE_STEPS.service_customer_request]: {
      fields: service_customer_request,
      tab_name: "service_customer_request",
      service_customer_request,
    },
    [SERVICE_STEPS.service_lack_reason]: {
      fields: service_lack_reason,
      tab_name: "service_lack_reason",
      formType: "grid",
    },
    [SERVICE_STEPS.service_material]: {
      fields: service_material,
      tab_name: "service_material",
      formType: "grid",
    },
    [SERVICE_STEPS.service_worker]: {
      fields: service_worker,
      tab_name: "service_worker",
      formType: "grid",
    },
  },
};

const service_group = {
  forms: {
    [SERVICE_STEPS.service]: {
      fields: service,
      tab_name: "service",
    },
    [SERVICE_STEPS.service_lack_reason]: {
      fields: service_lack_reason,
      tab_name: "service_lack_reason",
      formType: "grid",
    },
    [SERVICE_STEPS.service_material]: {
      fields: service_material,
      tab_name: "service_material",
      formType: "grid",
    },
    [SERVICE_STEPS.service_worker]: {
      fields: service_worker,
      tab_name: "service_worker",
      formType: "grid",
    },
  },
};

const lawsuit_group = {
  forms: {
    [LAWSUIT_STEPS.lawsuit]: {
      fields: lawsuit,
      tab_name: "lawsuit",
    },
    [LAWSUIT_STEPS.lawsuit_status]: {
      fields: lawsuit_status,
      tab_name: "lawsuit_status",
    },
    [LAWSUIT_STEPS.lawsuit_expenses]: {
      fields: lawsuit_expenses,
      tab_name: "lawsuit_expenses",
      formType: "nested",
    },
    [LAWSUIT_STEPS.lawsuit_internal_expenses]: {
      fields: lawsuit_internal_expenses,
      tab_name: "lawsuit_internal_expenses",
    },
    [LAWSUIT_STEPS.lawsuit_termination]: {
      fields: lawsuit_termination,
      tab_name: "lawsuit_termination",
    },
  },
};

const building_group = {
  forms: {
    [BUILDING_STEPS.building_general]: {
      fields: building,
      tab_name: "building",
    },
    [BUILDING_STEPS.building_units]: {
      fields: building_units,
      tab_name: "building",
    },
    [BUILDING_STEPS.building_buying]: {
      fields: building_buying,
      tab_name: "building",
    },
    [BUILDING_STEPS.building_editorial_entry]: {
      fields: building_editorial_entry,
      tab_name: "building",
    },
    [BUILDING_STEPS.building_investment]: {
      fields: building_investment,
      tab_name: "building",
    },
    [BUILDING_STEPS.building_pictures]: {
      fields: building_pictures,
      tab_name: "building",
    },
    [BUILDING_STEPS.building_real_estate_development]: {
      fields: building_real_estate_development,
      tab_name: "building",
    },
    [BUILDING_STEPS.building_real_estate_management]: {
      fields: building_real_estate_management,
      tab_name: "building",
    },
  },
};

// land
const land_group = {
  forms: {
    [USER_STEPS.land_general]: {
      fields: land,
      tab_name: "land",
    },
    [LAND_STEPS.land_accumulate]: {
      fields: land_accumulate,
      tab_name: "land_accumulate",
      formType: "grid",
    },
    [LAND_STEPS.land_rental_price]: {
      fields: land_rental_price,
      tab_name: "land_rental_price",
      formType: "grid",
    },
    [LAND_STEPS.land_selling_price]: {
      fields: land_selling_price,
      tab_name: "land_selling_price",
      formType: "grid",
    },
  },
};
// user
const user_group = {
  forms: {
    [USER_STEPS.user_general]: {
      fields: user_general,
      tab_name: "user",
    },
    [USER_STEPS.user_files]: {
      fields: user_files,
      tab_name: "user",
    },
  },
};

const building_group_short = {
  forms: {
    [BUILDING_STEPS.building_general]: {
      fields: building,
      tab_name: "building",
    },
    [BUILDING_STEPS.building_units]: {
      fields: building_units,
      tab_name: "building",
    },
    [BUILDING_STEPS.building_ownership]: {
      fields: building_real_estate_management,
      tab_name: "owning_the_property",
      formType: "nested",
    },
    [BUILDING_STEPS.building_default_accounts]: {
      fields: building_default_accounts,
      tab_name: "building",
    },
  },
};

const apartment_group = {
  forms: {
    [APARTMENT_STEPS.apartment_general]: {
      fields: apartment,
      tab_name: "apartment",
    },
    [APARTMENT_STEPS.property_values]: {
      fields: property_values,
      tab_name: "property_values",
    },
    [APARTMENT_STEPS.apartment_pictures]: {
      fields: apartment_pictures,
      tab_name: "apartment_pictures",
    },
    [APARTMENT_STEPS.apartment_accumulate]: {
      fields: apartment_accumulate,
      tab_name: "apartment_accumulate",
      formType: "grid",
    },
    [APARTMENT_STEPS.apartment_rental_price]: {
      fields: apartment_rental_price,
      tab_name: "apartment_rental_price",
      formType: "grid",
    },
    [APARTMENT_STEPS.apartment_selling_price]: {
      fields: apartment_selling_price,
      tab_name: "apartment_selling_price",
      formType: "grid",
    },
  },
};

const assets_card_group = {
  forms: {
    [ASSETS_STEPS.assets_general]: { fields: assets, tab_name: "assets" },
    [ASSETS_STEPS.assets_accounts]: {
      fields: assets_accounts,
      tab_name: "assets_accounts",
    },
    [ASSETS_STEPS.assets_depreciation]: {
      fields: assets_depreciation,
      tab_name: "assets_depreciation",
    },
    [ASSETS_STEPS.assets_input]: {
      fields: assets_input,
      tab_name: "assets_input",
    },
    [ASSETS_STEPS.assets_maintenance]: {
      fields: assets_maintenance,
      tab_name: "assets_maintenance",
    },
    [ASSETS_STEPS.assets_sale]: {
      fields: assets_sale,
      tab_name: "assets_sale",
    },
    [ASSETS_STEPS.assets_shipping]: {
      fields: assets_shipping,
      tab_name: "assets_shipping",
    },
  },
};
const parking_group = {
  forms: {
    [PARKING_STEPS.parking_general]: { fields: parking, tab_name: "parking" },
    [PARKING_STEPS.parking_accumulate]: {
      fields: parking_accumulate,
      tab_name: "parking_accumulate",
      formType: "grid",
    },
    [PARKING_STEPS.parking_rental_price]: {
      fields: parking_rental_price,
      tab_name: "parking_rental_price",
      formType: "grid",
    },
    [PARKING_STEPS.parking_selling_price]: {
      fields: parking_selling_price,
      tab_name: "parking_selling_price",
      formType: "grid",
    },
    [PARKING_STEPS.parking_pictures]: {
      fields: parking_pictures,
      tab_name: "parking_pictures",
    },
  },
};

const shop_group = {
  forms: {
    [SHOP_STEPS.shop_general]: { fields: shop, tab_name: "shop" },
    [SHOP_STEPS.shop_fixed_assets]: {
      fields: shop_fixed_assets,
      tab_name: "shop_fixed_assets",
    },
    [SHOP_STEPS.shop_pictures]: {
      fields: shop_pictures,
      tab_name: "shop_pictures",
    },
    [SHOP_STEPS.shop_accumulate]: {
      fields: shop_accumulate,
      tab_name: "shop_accumulate",
      formType: "grid",
    },
    [SHOP_STEPS.shop_rental_price]: {
      fields: shop_rental_price,
      tab_name: "shop_rental_price",
      formType: "grid",
    },
    [SHOP_STEPS.shop_selling_price]: {
      fields: shop_selling_price,
      tab_name: "shop_selling_price",
      formType: "grid",
    },
  },
};

const villa_group = {
  forms: {
    [VILLA_STEPS.villa_general]: { fields: villa, tab_name: "villa" },
    [VILLA_STEPS.villa_accounts]: {
      fields: villa_accounts,
      tab_name: "villa",
    },
    [VILLA_STEPS.villa_assets]: {
      fields: villa_assets,
      tab_name: "villa",
    },
    [VILLA_STEPS.villa_exterior_details]: {
      fields: villa_exterior_details,
      tab_name: "villa",
    },
    [VILLA_STEPS.villa_interior_details]: {
      fields: villa_interior_details,
      tab_name: "villa",
    },
    // [VILLA_STEPS.villa_pictures]: {
    //   fields: villa_pictures,
    //   tab_name: "villa_pictures",
    // },
    [VILLA_STEPS.villa_rental_price]: {
      fields: villa_rental_price,
      tab_name: "villa_rental_price",
    },
    [VILLA_STEPS.villa_selling_price]: {
      fields: villa_selling_price,
      tab_name: "villa_selling_price",
    },
  },
};

const bill_group = {
  forms: {
    [BILL_PATTERN_STEPS.bill_pattern_general]: {
      fields: bill_pattern_general,
      tab_name: "bill_pattern",
    },
    [BILL_PATTERN_STEPS.bill_pattern_accounts]: {
      fields: bill_pattern_accounts,
      tab_name: "bill_pattern",
    },
    [BILL_PATTERN_STEPS.bill_pattern_entries]: {
      fields: bill_pattern_entries,
      tab_name: "bill_pattern",
    },
    [BILL_PATTERN_STEPS.bill_pattern_options]: {
      fields: bill_pattern_options,
      tab_name: "bill_pattern",
    },
    [BILL_PATTERN_STEPS.bill_pattern_bill_details]: {
      fields: bill_pattern_bill_details,
      tab_name: "bill_pattern",
    },

    [BILL_PATTERN_STEPS.bill_pattern_references]: {
      fields: bill_pattern_references,
      tab_name: "bill_pattern",
    },

    [BILL_PATTERN_STEPS.bill_pattern_materials]: {
      fields: bill_pattern_materials,
      tab_name: "bill_pattern",
    },
  },
};

const material_group_steps = {
  forms: {
    [MATERIAL_STEPS.material]: {
      fields: material,
      tab_name: "material",
    },
    [MATERIAL_STEPS.material_balance]: {
      fields: material_balance,
      tab_name: "material_balance",
      formType: "grid",
    },
    [MATERIAL_STEPS.material_minimum]: {
      fields: material_minimum,
      tab_name: "material_minimum",
      formType: "grid",
    },
    [MATERIAL_STEPS.material_prices]: {
      fields: material_prices,
      tab_name: "material_prices",
    },
    [MATERIAL_STEPS.material_prices_details]: {
      fields: material_prices_details,
      tab_name: "material_prices_details",
      formType: "grid",
    },

    [MATERIAL_STEPS.material_specifications]: {
      fields: material_specifications,
      tab_name: "material_specifications",
      formType: "grid",
    },
  },
};

const bill_invoice_group = {
  forms: {
    [BILL_STEPS.bill]: {
      fields: bill,
      tab_name: "bill",
    },
    [BILL_STEPS.bill_discounts_details]: {
      fields: bill_discounts_details,
      tab_name: "bill_discounts_details",
      formType: "grid",
    },

    [BILL_STEPS.bill_material_details]: {
      fields: bill_material_details,
      tab_name: "bill_material_details",
      formType: "grid",
    },
  },
};

const FORMS = {
  // Cards
  reservation_property,
  account,
  account_assembly,
  account_distributive,
  lessor,
  owner,
  seller,
  bank,
  cost_center,
  country,
  currency,
  land: land_group,
  store,
  category,
  category_problem,
  material: material_group_steps,
  material_group,
  assets_group,
  lawsuit_group,
  lawsuit_expenses,
  lawsuit_expenses_pictures,
  evacuation_request,
  user: user_group,
  assets: assets_card_group,
  apartment: apartment_group,
  property_values,
  building: building_group,
  building_group_short,
  building_buying,
  building_editorial_entry,
  building_investment,
  building_real_estate_development,
  building_real_estate_management,
  parking: parking_group,
  shop: shop_group,
  villa: villa_group,
  // maintenance_order,
  // Entries
  // accounting_voucher_grid_data,
  // accounting_voucher_main_data,
  accounting_voucher_pictures,
  voucher_main_data_short,
  voucher_grid_data,
  voucher_main_data,

  // contracts
  // contract: contract_group,
  entry_main_data,
  entry_grid_data,
  // patterns
  voucher_pattern: voucher_pattern_group,
  accounting_voucher_pattern: accounting_voucher_pattern_group,
  contract_pattern: contract_pattern_group,
  cheque_pattern: cheque_group,
  bill_pattern: bill_group,
  // installment
  installment,
  // operations
  op_collection,
  op_partial_collection,
  op_deportation,
  op_return,

  // Actions
  lawsuit,
  cheque,
  cheque_short,
  cheque_grid,
  // contracts,
  ...CONTRACTS_FORM,

  // maintenances
  service: service_group,
  service_customer: service_customer_group,
  lack_reason,
  user_work_times,

  // owner expenses
  owner_expenses,
  owner_expenses_details,
  owner_expenses_types,

  // admins
  tenants,

  // Bill
  bill,
  bill_discounts_details,
  bill_material_details,
  bill_invoice_group,
};

export default function getFormByTableName(name) {
  return FORMS[name];
}
