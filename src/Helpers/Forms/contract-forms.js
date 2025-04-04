import {
  ACTIONS,
  APARTMENT_STEPS_CONTRACT,
  LAND_STEPS_CONTRACT,
  PARKING_STEPS_CONTRACT,
  SELECT_LISTS,
  SHOP_STEPS_CONTRACT,
  UNIQUE_REF_TABLES,
} from "Helpers/constants";
import FIELDS_STRUCTURE from "./fields-structure";

const contract = [
  { is_ref: true, ref_table: "bank", hide_in_form: true },
  { is_ref: true, ref_table: "currency", ref_name: "code", hide_in_form: true },
  { label: "id", name: "id", type: "uuid", required: false },
  {
    label: "gov_number",
    name: "gov_number",
    type: "number",
    required: false,
  },
  {
    label: "issue_date",
    name: "issue_date",
    type: "date",
    required: true,
  },
  {
    label: "internal_number",
    name: "internal_number",
    type: "number",
    required: false,
  },
  {
    label: "contract_value",
    name: "contract_value",
    type: "number",
    required: false,
  },
  {
    label: "feedback",
    name: "feedback",
    type: "boolean",
    key: "switch",
    required: false,
  },
  {
    label: "lawsuit",
    name: "lawsuit",
    type: "boolean",
    key: "switch",
    required: false,
  },
  FIELDS_STRUCTURE.client({ required: true }),
  {
    label: "status",
    name: "status",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: SELECT_LISTS("contract_status"),
    required: false,
  },
  {
    label: "building_id",
    name: "building_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "building",
    hideAdd: true,
  },
  {
    label: "paid_type",
    name: "paid_type",
    key: "select",
    required: true,
    intValue: true,
    list: SELECT_LISTS("contract_paid_type"),
    allowInsert: true,
  },
  {
    label: "discount_rate",
    name: "discount_rate",
    key: "number",
  },
  {
    label: "discount_value",
    name: "discount_value",
    type: "number",
  },
  {
    label: "final_price",
    name: "final_price",
    type: "number",
    required: true,
  },
  {
    label: "price_before_vat",
    name: "price_before_vat",
    type: "number",
    required: true,
  },
  {
    label: "discount_account_id",
    name: "discount_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "previous_securing",
    name: "previous_securing",
    type: "number",
  },
  {
    label: "current_securing_value",
    name: "current_securing_value",
    type: "number",
    required: false
  },
  {
    label: "contracts_number_prev",
    name: "contracts_number_prev",
    type: "number",
  },
  {
    label: "contracts_number_current",
    name: "contracts_number_current",
    type: "number",
  },
  {
    label: "paid_type",
    name: "paid_type",
    key: "select",
    required: true,
    intValue: true,
    list: SELECT_LISTS("contract_paid_type"),
    allowInsert: true,
  },
  {
    label: "revenue_account_id",
    name: "revenue_account_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "security_deposit_account_id",
    name: "insurance_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "vat_account_id",
    name: "vat_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "vat_rate",
    name: "vat_rate",
    type: "number",
  },
  {
    label: "vat_value",
    name: "vat_value",
    type: "number",
  },
  {
    label: "gen_entries",
    name: "gen_entries",
    type: "boolean",
    key: "switch",
    required: false,
  },
  FIELDS_STRUCTURE.note(),
];

const contract_commission = [
  {
    label: "id",
    name: "id",
    type: "uuid",
    required: false,
    hide_in_form: true,
  },
  {
    label: "created_at",
    name: "created_at",
    type: "date",
    required: false,
    hide_in_form: true,
  },
  {
    label: "contract_id",
    name: "contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",

    hide_in_form: true,
  },
  {
    label: "commission_percentage",
    name: "commission_percentage",
    type: "number",
    required: false,
  },
  {
    label: "commission_value",
    name: "commission_value",
    type: "number",
    required: false,
  },
  {
    label: "commission_account_id",
    name: "commission_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "commission_note",
    name: "commission_note",
    type: "text",
    required: false,
  },
  {
    label: "commission_from_owner_percentage",
    name: "commission_from_owner_percentage",
    type: "number",
    required: false,
  },
  {
    label: "commission_from_owner_value",
    name: "commission_from_owner_value",
    type: "number",
    required: false,
  },
  {
    label: "commission_from_owner_account_id",
    name: "commission_from_owner_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
    // ref_table: UNIQUE_REF_TABLES.suppliers,
  },
  {
    label: "commission_from_owner_note",
    name: "commission_from_owner_note",
    type: "text",
    required: false,
  },
  {
    label: "commission_from_lessor_percentage",
    name: "commission_from_lessor_percentage",
    type: "number",
    required: false,
  },
  // { label: 'commission_from_lessor_value', name: "commission_from_lessor_value", type: "number", required: false },
  // {
  //   label: 'commission_from_lessor_account_id', name: "commission_from_lessor_account_id",
  //   type: "uuid",
  //   required: false,
  //   is_ref: true,
  //   ref_table: "commission_from_lessor_account",
  //
  // },
  // { label: 'commission_from_lessor_note', name: "commission_from_lessor_note", type: "text", required: false },
];
const contract_cycle = [
  {
    label: "id",
    name: "id",
    type: "uuid",
    required: false,
    hide_in_form: true,
  },
  {
    label: "contract_id",
    name: "contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",
    hide_in_form: true,
  },
  
  {
    label: "contract_certifying_body",
    name: "contract_certifying_body",
    type: "text",
    required: false,
  },
 
  
  {
    label: "municipal_license_num",
    name: "municipal_license_num",
    type: "number",
    required: false,
  },
  {
    label: "municipal_license_from",
    name: "municipal_license_from",
    type: "date",
    required: false,
  },
  {
    label: "municipal_license_to",
    name: "municipal_license_to",
    type: "date",
    required: false,
  },
  {
    label: "license_num",
    name: "license_num",
    type: "number",
    required: false,
  },
  {
    label: "license_from",
    name: "license_from",
    type: "date",
    required: false,
  },
  { label: "license_to", name: "license_to", type: "date", required: false },
  {
    label: "civil_license_num",
    name: "civil_license_num",
    type: "number",
    required: false,
  },
  {
    label: "civil_license_from",
    name: "civil_license_from",
    type: "date",
    required: false,
  },
  {
    label: "civil_license_to",
    name: "civil_license_to",
    type: "date",
    required: false,
  },
  {
    label: "contract_documented",
    name: "contract_documented",
    type: "boolean",
    required: false,
    key: "switch",
  },
  {
    label: "contract_certifying",
    name: "contract_certifying",
    type: "boolean",
    required: false,
    key: "switch",
  },
  {
    label: "contract_delivered",
    name: "contract_delivered",
    type: "boolean",
    required: false,
    key: "switch",
  },
  {
    label: "contract_signed",
    name: "contract_signed",
    type: "boolean",
    required: false,
    key: "switch",
  },
  {
    label: "contract_received",
    name: "contract_received",
    type: "boolean",
    required: false,
    key: "switch",
  },
];
const contract_terms = [
  {
    label: "id",
    name: "id",
    type: "uuid",
    required: false,
    hide_in_form: true,
  },
  {
    label: "contract_id",
    name: "contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",

    hide_in_form: true,
  },
  {
    label: "contract_terms",
    name: "contract_terms",
    type: "text",
    required: false,
  },
];

const contract_linked_parking = [
  {
    label: "id",
    name: "id",
    type: "uuid",
    required: false,
    hide_in_form: true,
  },
  {
    label: "created_at",
    name: "created_at",
    type: "date",
    required: false,
    hide_in_form: true,
  },
  {
    label: "contract_id",
    name: "contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",

    hide_in_form: true,
  },
  {
    label: "building_id",
    name: "building_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "building",
    hideAdd: true,
  },
  {
    label: "account_id",
    name: "account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "main_contract_id",
    name: "main_contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",
    hideAdd: true,
  },
];

const contract_pictures = [
  {
    label: "id",
    name: "id",
    type: "uuid",
    required: false,
    hide_in_form: true,
  },
  {
    label: "contract_id",
    name: "contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",

    hide_in_form: true,
  },
  {
    label: "picture",
    name: "picture",
    type: "file",
    key: "image",
    multiple: true,
    required: false,
    allowScan: true,
  },
];
const contract_termination = [
  {
    label: "id",
    name: "id",
    type: "uuid",
    required: false,
    hide_in_form: true,
  },
  // {
  //   label: "number",
  //   name: "number",
  //   type: "number",
  //   required: false,
  //   hide_in_form: true,
  // },
  {
    label: "terminated",
    name: "terminated",
    type: "boolean",
    required: false,
    key: "switch",
  },
  {
    label: "termination_date",
    name: "termination_date",
    type: "date",
    required: false,
  },
  {
    label: "owner_total_amount",
    name: "owner_total_amount",
    type: "number",
    required: false,
  },
  {
    label: "owner_rest_amount",
    name: "owner_rest_amount",
    type: "number",
    required: false,
  },
  {
    label: "round_to",
    name: "round_to",
    key: "select",
    required: false,
    intValue: true,
    list: SELECT_LISTS("contract_round_to"),
  },
  {
    label: "revenue_note",
    name: "revenue_note",
    type: "text",
    required: false,
  },
  {
    label: "revenue_account_id",
    name: "revenue_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
  },
  { label: "fines", name: "fines", type: "text", required: false },
  {
    label: "fines_revenue_account_id",
    name: "fines_revenue_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
  },
  { label: "fine_note", name: "fine_note", type: "text", required: false },
  {
    label: "evacuation_request",
    name: "evacuation_request",
    type: "boolean",
    required: false,
    key: "switch",
  },
  {
    label: "evacuation_date",
    name: "evacuation_date",
    type: "date",
    required: false,
  },
  {
    label: "clearance_printed",
    name: "clearance_printed",
    type: "boolean",
    required: false,
    key: "switch",
  },
  {
    label: "clearance_printed_date",
    name: "clearance_printed_date",
    type: "date",
    required: false,
  },
  {
    label: "contract_id",
    name: "contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",

    hide_in_form: true,
  },
  {
    label: "gen_entries",
    name: "gen_entries",
    type: "boolean",
    key: "switch",
    required: false,
  },
  {
    name: "btn_action",
    action: ACTIONS.OPEN_TERMINATION_FINES_FORM,
    label: "Open Terminations fines",
    onClick: () => { },
  },
  {
    name: "btn_action",
    action: ACTIONS.RENEW_CONTRACT,
    label: "Renew Contract",
    onClick: () => { },
  },
];

const contract_fines_grid = [
  { label: "id", name: "id", type: "uuid", required: false },
  { label: "created_at", name: "created_at", type: "date", required: false },
  {
    label: "termination_id",
    name: "termination_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract_termination_fines",

    hide_in_form: true,
  },
  {
    label: "contract_id",
    name: "contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",

    hide_in_form: true,
  },
  {
    label: "account_id",
    name: "account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
  },
  { label: "fee_amount", name: "fee_amount", type: "number", required: false },
  { label: "notes", name: "notes", type: "text", required: false },
];
const contract_receipt_number = [
  {
    label: "id",
    name: "id",
    type: "uuid",
    required: false,
    hide_in_form: true,
  },
  {
    label: "contract_id",
    name: "contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",

    hide_in_form: true,
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
    label: "receipt_statement",
    name: "receipt_statement",
    type: "text",
    required: false,
  },
];

const contract_other_fees = [
  {
    label: "id",
    name: "id",
    type: "uuid",
    required: false,
    hide_in_form: true,
  },
  { label: "date", name: "date", type: "date", required: false },
  { label: "fee_amount", name: "fee_amount", type: "number", required: false },
  {
    label: "account_id",
    name: "account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
  },
  { label: "notes", name: "notes", type: "text", required: false },
  {
    label: "contract_id",
    name: "contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",

    hide_in_form: true,
  },
];

const contract_fixed_assets = [
  {
    label: "id",
    name: "id",
    type: "uuid",
    required: false,
    hide_in_form: true,
  },
  {
    label: "created_at",
    name: "created_at",
    type: "date",
    required: false,
    hide_in_form: true,
  },
  {
    label: "contract_id",
    name: "contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",

    hide_in_form: true,
  },
  {
    label: "assets_id",
    name: "assets_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "assets",
  },
  { label: "value", name: "value", type: "number", required: false },
  { label: "note", name: "note", type: "text", required: false },
];

// Contracts
// Sale Contract

// Rent Contract
const apartment_sale_contract = [
  ...contract,
  {
    label: "apartment_id",
    name: "apartment_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "apartment",
    ref_name: "apartment_no",
    hideAdd: true,
  },
  { label: "description", name: "description", type: "text", required: false },
  {
    label: "lessor_id",
    name: "lessor_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "lessor",
  },
  {
    label: "status",
    name: "status",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: SELECT_LISTS("contract_status"),
    required: false,
  },
  {
    label: "property_delivery_date",
    name: "property_delivery_date",
    type: "date",
    required: true,
  },
];

const shop_sale_contract = [
  ...contract,
  {
    label: "shop_id",
    name: "shop_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "shop",
    ref_name: "shop_no",
    hideAdd: true,
  },
  { label: "description", name: "description", type: "text", required: false },
  {
    label: "lessor_id",
    name: "lessor_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "lessor",
  },
  {
    label: "status",
    name: "status",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: SELECT_LISTS("contract_status"),
    required: false,
  },

  {
    label: "property_delivery_date",
    name: "property_delivery_date",
    type: "date",
    required: true,
  },
];

const parking_sale_contract = [
  ...contract,
  {
    label: "parking_id",
    name: "parking_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "parking",
    ref_name: "parking_no",
    hideAdd: true,
  },
  { label: "description", name: "description", type: "text", required: false },
  {
    label: "lessor_id",
    name: "lessor_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "lessor",
  },
  {
    label: "status",
    name: "status",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: SELECT_LISTS("contract_status"),
    required: false,
  },

  {
    label: "property_delivery_date",
    name: "property_delivery_date",
    type: "date",
    required: true,
  },
];

const land_sale_contract = [
  { is_ref: true, ref_table: "bank", hide_in_form: true },
  { is_ref: true, ref_table: "currency", ref_name: "code", hide_in_form: true },
  { label: "id", name: "id", type: "uuid", required: false },
  {
    label: "number",
    name: "number",
    type: "number",
  },
  {
    label: "gov_number",
    name: "gov_number",
    type: "number",
    required: false,
  },
  {
    label: "feedback",
    name: "feedback",
    type: "boolean",
    key: "switch",
    required: false,
  },
  {
    label: "lawsuit",
    name: "lawsuit",
    type: "boolean",
    key: "switch",
    required: false,
  },
  FIELDS_STRUCTURE.client({ required: true }),
  {
    label: "land_id",
    name: "land_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "land",
  },
  { label: "description", name: "description", type: "text", required: false },
  {
    label: "lessor_id",
    name: "lessor_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "lessor",
  },
  {
    label: "property_delivery_date",
    name: "property_delivery_date",
    type: "date",
    required: false,
  },
  {
    label: "status",
    name: "status",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: SELECT_LISTS("contract_status"),
    required: false,
  },
  {
    label: "contract_id",
    name: "contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",
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
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "currency",
  },
  // {
  //   label: "currency_val",
  //   name: "currency_val",
  //   type: "number",
  // },
  {
    label: "discount_rate",
    name: "discount_rate",
    key: "number",
  },
  {
    label: "discount_value",
    name: "discount_value",
    type: "number",
  },
  {
    label: "discount_contract_amount",
    name: "discount_contract_amount",
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "discount_account_id",
    name: "discount_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "previous_securing",
    name: "previous_securing",
    type: "number",
  },
  {
    label: "current_securing_value",
    name: "current_securing_value",
    type: "number",
  },
  {
    label: "electricity_deposit",
    name: "electricity_deposit",
    type: "number",
  },
  {
    label: "paid_type",
    name: "paid_type",
    key: "select",
    required: true,
    intValue: true,
    list: SELECT_LISTS("contract_paid_type"),
    selectFirstAsDefault: true,
  },
  {
    label: "revenue_account_id",
    name: "revenue_account_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "customer_account_id",
    name: "customer_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "insurance_account_id",
    name: "insurance_account_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "account",
  },
  {
    label: "gen_entries",
    name: "gen_entries",
    type: "boolean",
    key: "switch",
    required: false,
  },
];

// Rent Contract
const apartment_rent_contract = [
  ...contract,
  {
    label: "apartment_id",
    name: "apartment_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "apartment",
    ref_name: "apartment_no",
    hideAdd: true,
  },
  { label: "description", name: "description", type: "text", required: false },
  {
    label: "lessor_id",
    name: "lessor_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "lessor",
  },
  {
    label: "status",
    name: "status",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: SELECT_LISTS("contract_status"),
    required: false,
  },
  {
    label: "contract_duration",
    name: "contract_duration",
    key: "select",
    required: true,
    intValue: true,
    list: SELECT_LISTS("contract_duration"),
    allowInsert: true,
  },
  {
    label: "start_duration_date",
    name: "start_duration_date",
    type: "date",
    required: true,
  },
  {
    label: "end_duration_date",
    name: "end_duration_date",
    type: "date",
    required: true,
  },
];

const shop_rent_contract = [
  ...contract,
  { label: "description", name: "description", type: "text", required: false },
  {
    label: "lessor_id",
    name: "lessor_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "lessor",
  },
  {
    label: "status",
    name: "status",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: SELECT_LISTS("contract_status"),
    required: false,
  },

  {
    label: "shop_id",
    name: "shop_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "shop",
    ref_name: "shop_no",
    hideAdd: true,
  },
  {
    label: "contract_duration",
    name: "contract_duration",
    key: "select",
    required: true,
    intValue: true,
    list: SELECT_LISTS("contract_duration"),
    allowInsert: true,
  },
  {
    label: "start_duration_date",
    name: "start_duration_date",
    type: "date",
    required: true,
  },
  {
    label: "end_duration_date",
    name: "end_duration_date",
    type: "date",
    required: true,
  },
];
const parking_rent_contract = [
  ...contract,
  { label: "description", name: "description", type: "text", required: false },
  {
    label: "lessor_id",
    name: "lessor_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "lessor",
  },
  {
    label: "status",
    name: "status",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: SELECT_LISTS("contract_status"),
    required: false,
  },

  {
    label: "parking_id",
    name: "parking_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "parking",
    ref_name: "parking_no",
    hideAdd: true,
  },
  {
    label: "contract_duration",
    name: "contract_duration",
    key: "select",
    required: true,
    intValue: true,
    list: SELECT_LISTS("contract_duration"),
    allowInsert: true,
  },
  {
    label: "start_duration_date",
    name: "start_duration_date",
    type: "date",
    required: true,
  },
  {
    label: "end_duration_date",
    name: "end_duration_date",
    type: "date",
    required: true,
  },
];
// const parking_rent_contract = [
//   {
//     label: "parking_id",
//     name: "parking_id",
//     type: "uuid",
//     required: true,
//     is_ref: true,
//     ref_table: "parking",
//     ref_name: "parking_no",
//   },
//   { label: "description", name: "description", type: "text", required: false },
//   {
//     label: "lessor_id",
//     name: "lessor_id",
//     type: "uuid",
//     required: false,
//     is_ref: true,
//     ref_table: "lessor",
//   },
//   {
//     label: "status",
//     name: "status",
//     key: "select",
//     intValue: true,
//     selectFirstAsDefault: true,
//     list: SELECT_LISTS("contract_status"),
//     required: false,
//   },
//   {
//     label: "car_plate_no",
//     name: "car_plate_no",
//     type: "text",
//     required: false,
//   },
//   { label: "card_no", name: "card_no", type: "text", required: false },
//   { label: "car_color", name: "car_color", type: "text", required: false },
//   { label: "car_type", name: "car_type", type: "text", required: false },
//   {
//     label: "related_contract",
//     name: "related_contract",
//     type: "uuid",
//     required: false,
//   },
//   {
//     label: "contract_duration",
//     name: "contract_duration",
//     key: "select",
//     required: true,
//     intValue: true,
//     list: SELECT_LISTS("contract_duration"),
//     allowInsert: true,
//   },
//   {
//     label: "start_duration_date",
//     name: "start_duration_date",
//     type: "date",
//     required: true,
//   },
//   {
//     label: "end_duration_date",
//     name: "end_duration_date",
//     type: "date",
//     required: true,
//   },
// ];

// contract rent
const apartment_rent_contract_group = {
  forms: {
    [APARTMENT_STEPS_CONTRACT.apartment_contract_general]: {
      fields: apartment_rent_contract,
      tab_name: "contract",
    },
    [APARTMENT_STEPS_CONTRACT.apartment_contract_payments]: {
      fields: [],
      tab_name: "",
      formType: "view",
    },
    [APARTMENT_STEPS_CONTRACT.apartment_contract_commission]: {
      fields: contract_commission,
      tab_name: "contract_commission",
    },
    // [APARTMENT_STEPS_CONTRACT.apartment_contract_terms]: {
    //   fields: contract_terms,
    //   tab_name: "contract_terms",
    // },
    [APARTMENT_STEPS_CONTRACT.apartment_contract_pictures]: {
      fields: contract_pictures,
      tab_name: "contract_pictures",
      formType: "gallery",
    },
    [APARTMENT_STEPS_CONTRACT.apartment_contract_other_fees]: {
      fields: contract_other_fees,
      tab_name: "contract_other_fees",
      formType: "grid",
    },
    // [APARTMENT_STEPS_CONTRACT.apartment_contract_fixed_assets]: {
    //   fields: contract_fixed_assets,
    //   tab_name: "contract_fixed_assets",
    //   formType: "grid",
    // },
    [APARTMENT_STEPS_CONTRACT.apartment_contract_linked_parking]: {
      fields: contract_linked_parking,
      tab_name: "contract_linked_parking",
      formType: "grid",
    },
    [APARTMENT_STEPS_CONTRACT.apartment_rent_contract_cycle]: {
      fields: contract_cycle,
      tab_name: "contract_cycle",
    },
    [APARTMENT_STEPS_CONTRACT.apartment_contract_termination]: {
      fields: contract_termination,
      tab_name: "contract_termination",
    },

  },
};

const shop_rent_contract_group = {
  forms: {
    [SHOP_STEPS_CONTRACT.shop_contract_general]: {
      fields: shop_rent_contract,
      tab_name: "contract",
    },
    [SHOP_STEPS_CONTRACT.shop_contract_payments]: {
      fields: [],
      tab_name: "",
      formType: "view",
    },
    // payments
    [SHOP_STEPS_CONTRACT.shop_contract_commission]: {
      fields: contract_commission,
      tab_name: "contract_commission",
    },
    // [SHOP_STEPS_CONTRACT.shop_contract_terms]: { fields: contract_terms },
    [SHOP_STEPS_CONTRACT.shop_contract_pictures]: {
      fields: contract_pictures,
      tab_name: "contract_pictures",
      formType: "gallery",
    },
    [SHOP_STEPS_CONTRACT.shop_contract_other_fees]: {
      fields: contract_other_fees,
      tab_name: "contract_other_fees",
      formType: "grid",
    },
    [SHOP_STEPS_CONTRACT.shop_contract_linked_parking]: {
      fields: contract_linked_parking,
      tab_name: "contract_linked_parking",
      formType: "grid",
    },
    [SHOP_STEPS_CONTRACT.shop_rent_contract_cycle]: {
      fields: contract_cycle,
      tab_name: "contract_cycle",
    },
    [SHOP_STEPS_CONTRACT.shop_contract_termination]: {
      fields: contract_termination,
      tab_name: "contract_termination",
    },

  },
};

const parking_rent_contract_group = {
  forms: {
    [PARKING_STEPS_CONTRACT.parking_contract_general]: {
      fields: parking_rent_contract,
      tab_name: "contract",
    },
    [PARKING_STEPS_CONTRACT.parking_contract_payments]: {
      fields: [],
      tab_name: "",
      formType: "view",
    },
    [PARKING_STEPS_CONTRACT.parking_contract_commission]: {
      fields: contract_commission,
      tab_name: "contract_commission",
    },
    // [PARKING_STEPS_CONTRACT.parking_contract_terms]: {
    //   fields: contract_terms,
    //   tab_name: "contract_terms",
    // },
    [PARKING_STEPS_CONTRACT.parking_contract_pictures]: {
      fields: contract_pictures,
      tab_name: "contract_pictures",
      formType: "gallery",
    },
    [PARKING_STEPS_CONTRACT.parking_contract_other_fees]: {
      fields: contract_other_fees,
      tab_name: "contract_other_fees",
      formType: "grid",
    },
    [PARKING_STEPS_CONTRACT.parking_contract_termination]: {
      fields: contract_termination,
      tab_name: "contract_termination",
    },

  },
};

// Sale contract

const apartment_sale_contract_group = {
  forms: {
    [APARTMENT_STEPS_CONTRACT.apartment_contract_general]: {
      fields: apartment_sale_contract,
      tab_name: "contract",
    },
    [APARTMENT_STEPS_CONTRACT.apartment_contract_payments]: {
      fields: [],
      tab_name: "",
      formType: "view",
    },
    [APARTMENT_STEPS_CONTRACT.apartment_contract_commission]: {
      fields: contract_commission,
      tab_name: "contract_commission",
    },
    [APARTMENT_STEPS_CONTRACT.apartment_contract_pictures]: {
      fields: contract_pictures,
      tab_name: "contract_pictures",
      formType: "gallery",
    },
    [APARTMENT_STEPS_CONTRACT.apartment_contract_other_fees]: {
      fields: contract_other_fees,
      tab_name: "contract_other_fees",
      formType: "grid",
    },
    // [APARTMENT_STEPS_CONTRACT.apartment_contract_fixed_assets]: {
    //   fields: contract_fixed_assets,
    //   tab_name: "contract_fixed_assets",
    //   formType: "grid",
    // },
    [APARTMENT_STEPS_CONTRACT.apartment_contract_linked_parking]: {
      fields: contract_linked_parking,
      tab_name: "contract_linked_parking",
      formType: "grid",
    },
    // [APARTMENT_STEPS_CONTRACT.apartment_contract_termination]: {
    //   fields: contract_termination,
    //   tab_name: "contract_termination",
    // },

  },
};

const shop_sale_contract_group = {
  forms: {
    [SHOP_STEPS_CONTRACT.shop_contract_general]: {
      fields: shop_sale_contract,
      tab_name: "contract",
    },
    [SHOP_STEPS_CONTRACT.shop_contract_payments]: {
      fields: [],
      tab_name: "",
      formType: "view",
    },
    [SHOP_STEPS_CONTRACT.shop_contract_commission]: {
      fields: contract_commission,
    },
    // [SHOP_STEPS_CONTRACT.shop_contract_terms]: { fields: contract_terms },
    [SHOP_STEPS_CONTRACT.shop_contract_pictures]: {
      fields: contract_pictures,
      tab_name: "contract_pictures",
      formType: "gallery",
    },
    [SHOP_STEPS_CONTRACT.shop_contract_other_fees]: {
      fields: contract_other_fees,
      tab_name: "contract_other_fees",
      formType: "grid",
    },
    // [SHOP_STEPS_CONTRACT.shop_contract_fixed_assets]: {
    //   fields: contract_fixed_assets,
    //   tab_name: "contract_fixed_assets",
    //   formType: "grid",
    // },
    [SHOP_STEPS_CONTRACT.shop_contract_linked_parking]: {
      fields: contract_linked_parking,
      tab_name: "contract_linked_parking",
      formType: "grid",
    },
    // [SHOP_STEPS_CONTRACT.shop_contract_termination]: {
    //   fields: contract_termination,
    //   tab_name: "contract_termination",
    // },

  },
};

const parking_sale_contract_group = {
  forms: {
    [PARKING_STEPS_CONTRACT.parking_contract_general]: {
      fields: parking_sale_contract,
      tab_name: "contract",
    },
    [PARKING_STEPS_CONTRACT.parking_contract_payments]: {
      fields: [],
      tab_name: "",
      formType: "view",
    },
    [PARKING_STEPS_CONTRACT.parking_contract_commission]: {
      fields: contract_commission,
      tab_name: "contract_commission",
    },
    // [PARKING_STEPS_CONTRACT.parking_contract_terms]: { fields: contract_terms },
    [PARKING_STEPS_CONTRACT.parking_contract_pictures]: {
      fields: contract_pictures,
      tab_name: "contract_pictures",
      formType: "gallery",
    },
    [PARKING_STEPS_CONTRACT.parking_contract_other_fees]: {
      fields: contract_other_fees,
      tab_name: "contract_other_fees",
      formType: "grid",
    },
    // [PARKING_STEPS_CONTRACT.parking_contract_termination]: {
    //   fields: contract_termination,
    //   tab_name: "contract_termination",
    // },

  },
};

const land_sale_contract_group = {
  forms: {
    [LAND_STEPS_CONTRACT.land_contract_general]: {
      fields: land_sale_contract,
      tab_name: "contract",
    },
    [LAND_STEPS_CONTRACT.land_contract_payments]: {
      fields: [],
      tab_name: "",
      formType: "view",
    },
    // payments
    [LAND_STEPS_CONTRACT.land_contract_commission]: {
      fields: contract_commission,
    },
    [LAND_STEPS_CONTRACT.land_contract_terms]: { fields: contract_terms },
    [LAND_STEPS_CONTRACT.land_contract_pictures]: {
      fields: contract_pictures,
      tab_name: "contract_pictures",
      formType: "gallery",
    },
    [LAND_STEPS_CONTRACT.land_contract_other_fees]: {
      fields: contract_other_fees,
      tab_name: "contract_other_fees",
      formType: "grid",
    },
    [LAND_STEPS_CONTRACT.land_contract_fixed_assets]: {
      fields: contract_fixed_assets,
      tab_name: "contract_fixed_assets",
      formType: "grid",
    },
    [LAND_STEPS_CONTRACT.land_contract_linked_parking]: {
      fields: contract_linked_parking,
      tab_name: "contract_linked_parking",
      formType: "grid",
    },
    // [LAND_STEPS_CONTRACT.land_contract_termination]: {
    //   fields: contract_termination,
    //   tab_name: "contract_termination",
    // },

  },
};

export const CONTRACTS_FORM = {
  contract,
  apartment_rent_contract: apartment_rent_contract_group,
  shop_rent_contract: shop_rent_contract_group,
  parking_rent_contract: parking_rent_contract_group,
  apartment_sale_contract: apartment_sale_contract_group,
  shop_sale_contract: shop_sale_contract_group,
  parking_sale_contract: parking_sale_contract_group,
  land_sale_contract: land_sale_contract_group,

  //
  contract_termination,
  contract_fines_grid,
};
