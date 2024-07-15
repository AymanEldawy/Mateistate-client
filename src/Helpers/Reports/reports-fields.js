import { SELECT_LISTS, UNIQUE_REF_TABLES } from "Helpers/constants";
import FIELDS_STRUCTURE from "../Forms/fields-structure";

const contract_payments_report = [
  FIELDS_STRUCTURE.account(),
  FIELDS_STRUCTURE.account({
    label: "owner_account_id",
    name: "owner_account_id",
    ref_table: UNIQUE_REF_TABLES.suppliers,
  }),
  {
    label: "apartment_kind",
    name: "apartment_kind",
    key: "select",
    intValue: true,
    list: SELECT_LISTS("apartment_flat_type"),
  },
  {
    label: "paid_type",
    name: "paid_type",
    key: "select",
    intValue: true,
    list: SELECT_LISTS("contract_paid_type"),
  },
  {
    label: "lessor_id",
    name: "lessor_id",
    is_ref: true,
    ref_table: "lessor",
  },
  FIELDS_STRUCTURE.selectField({
    label: "contract_status",
    name: "contract_status",
    list: SELECT_LISTS("contract_status_expired"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "termination_status",
    name: "termination_status",
    list: SELECT_LISTS("termination_status"),
  }),
  {
    label: "expiry_date",
    name: "expiry_date",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: [{ id: 0, name: "All" }, ...SELECT_LISTS("termination_date")],
    required: false,
  },

  {
    label: "clearance",
    name: "clearance",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: [{ id: 0, name: "All" }],
    required: false,
  },
  FIELDS_STRUCTURE.client(),
  {
    label: "blocked_units",
    name: "blocked_units",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: [{ id: 0, name: "All" }],
    required: false,
  },
  {
    label: "blocked_units",
    name: "blocked_units",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: [{ id: 0, name: "All" }],
    required: false,
  },
  {
    label: "lawsuit",
    name: "lawsuit",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: [{ id: 0, name: "All" }],
    required: false,
  },
  FIELDS_STRUCTURE.selectField({
    label: "installments",
    name: "installments",
    list: SELECT_LISTS("installment_report_list"),
  }),
  {
    label: "automatic_selection",
    name: "automatic_selection",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: [{ id: 0, name: "All" }],
    required: false,
  },
];

const returned_cheque_report = [
  FIELDS_STRUCTURE.selectField({
    label: "return_processing",
    name: "return_processing",
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "processing not complete" },
      { id: 2, name: "processed" },
    ],
  }),
  FIELDS_STRUCTURE.account(),
  FIELDS_STRUCTURE.account({
    label: "observe_account_id",
    name: "observe_account_id",
  }),
  FIELDS_STRUCTURE.bank(),
  FIELDS_STRUCTURE.textField({
    label: "beneficiary_name",
    name: "beneficiary_name",
  }),
  {
    label: "reason",
    name: "reason",
    key: "select",
    required: true,
    list: SELECT_LISTS("chq_return_reasons"),
  },
  FIELDS_STRUCTURE.textField({
    label: "expect_return_reason",
    name: "expect_return_reason",
  }),

  FIELDS_STRUCTURE.selectField({
    label: "return_terminated",
    name: "return_terminated",
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "valid" },
      { id: 2, name: "terminated" },
    ],
  }),

  FIELDS_STRUCTURE.number({
    label: "it wen on return day",
    name: "return_days_number",
  }),
];

const collection_cheque_report = [
  FIELDS_STRUCTURE.selectField({
    label: "collection_status",
    name: "collection_status",
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "Total Collected" },
      { id: 2, name: "Partial Collected" },
    ],
  }),
  FIELDS_STRUCTURE.account(),
  FIELDS_STRUCTURE.account({
    label: "observe_account_id",
    name: "observe_account_id",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "account_by",
    name: "account_by",
    list: [
      { id: 1, name: "Note paper" },
      { id: 2, name: "Collection" },
    ],
  }),
  FIELDS_STRUCTURE.bank(),
  FIELDS_STRUCTURE.textField({
    label: "beneficiary_name",
    name: "beneficiary_name",
  }),
];

//contract_reports
const contract_reports = [
  FIELDS_STRUCTURE.client(),
  FIELDS_STRUCTURE.uniqueField({
    label: "property_type",
    name: "property_type",
    ref_table: "property_values",
    ref_name: "description",
  }),
  { label: "description", name: "description", type: "text", required: false },
  {
    label: "paid_type",
    name: "paid_type",
    key: "select",
    intValue: true,
    list: [{ id: 0, name: "All" }, SELECT_LISTS("contract_paid_type")],
  },
  {
    label: "lessor_id",
    name: "lessor_id",
    type: "uuid",
    is_ref: true,
    ref_table: "lessor",
  },
  FIELDS_STRUCTURE.selectField({
    label: "contract_status",
    name: "contract_status",
    list: SELECT_LISTS("contract_status_expired"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "payment_method",
    name: "payment_method",
    list: SELECT_LISTS("contract_payment_methods"),
  }),

  {
    label: "contract_termination",
    name: "contract_termination",
    key: "select",
    intValue: true,
    list: SELECT_LISTS("revenues_report_contract_termination"),
  },

  {
    label: "contract_enter_status",
    name: "contract_enter_status",
    key: "select",
    intValue: true,
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "New" },
      { id: 2, name: "Renewal" },
    ],
  },

  {
    label: "clearance",
    name: "clearance",
    key: "select",
    intValue: true,
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "Printed" },
      { id: 2, name: "Not printed" },
    ],
  },
  {
    label: "blocked_units",
    name: "blocked_units",
    key: "select",
    intValue: true,
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "Blocked" },
      { id: 2, name: "Unblocked" },
    ],
  },

  FIELDS_STRUCTURE.account(),
  FIELDS_STRUCTURE.selectField({
    label: "termination_date",
    name: "termination_date",
    list: SELECT_LISTS("termination_date_options"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "date_by",
    name: "date_by",
    list: SELECT_LISTS("contract_date_by"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "lawsuit",
    name: "lawsuit",
    list: SELECT_LISTS("lawsuit_report"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "lawsuit_status",
    name: "lawsuit_status",
    list: SELECT_LISTS("lawsuit_status_report"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "installments",
    name: "installments",
    list: SELECT_LISTS("installment_report_list"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_amount",
    name: "contract_amount",
    list: SELECT_LISTS("contract_amount_list"),
  }),
];

// Leased reports
const shared_leased_report_global = [
  FIELDS_STRUCTURE.uniqueField({
    label: "client_id",
    name: "client_id",
    ref_table: UNIQUE_REF_TABLES.clients,
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "lessor_id",
    name: "lessor_id",
    ref_table: "lessor",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "leasing_status",
    name: "leasing_status",
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "leased" },
      { id: 2, name: "non-leased" },
    ],
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_status",
    name: "contract_status",
    list: SELECT_LISTS("contract_status_expired"),
  }),
];

const shared_leased_report = [
  ...shared_leased_report_global,
  {
    key: "between",
    label: "area_from",
    field1Props: {
      type: "number",
      name: "area_form",
    },
    field2Props: {
      type: "number",
      name: "area_to",
    },
  },
  {
    key: "between",
    label: "Rent_value",
    field1Props: {
      type: "number",
      name: "rent_form",
    },
    field2Props: {
      type: "number",
      name: "rent_to",
    },
  },
];

const leased_units_report = [
  FIELDS_STRUCTURE.textField({
    label: "property_no",
    name: "property_no",
  }),

  FIELDS_STRUCTURE.textField({
    label: "area_unit",
    name: "area_unit",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "property_type",
    name: "property_type",
    ref_table: "property_values",
    ref_name: "description",
  }),
  FIELDS_STRUCTURE.textField({
    label: "description",
    name: "description",
  }),
  {
    key: "between",
    label: "Rent_value",
    field1Props: {
      type: "number",
      name: "rent_form",
    },
    field2Props: {
      type: "number",
      name: "rent_to",
    },
  },
  FIELDS_STRUCTURE.uniqueField({
    label: "area_unit",
    name: "area_unit",
    ref_table: "property_values",
    ref_name: "area",
  }),
  {
    key: "between",
    label: "area_value",
    field1Props: {
      type: "number",
      name: "area_form",
    },
    field2Props: {
      type: "number",
      name: "area_to",
    },
  },

  // ...shared_leased_report,

  FIELDS_STRUCTURE.selectField({
    label: "blocked_units",
    name: "blocked_units",
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "blocked" },
      { id: 2, name: "Unblocked" },
    ],
  }),
  FIELDS_STRUCTURE.account({
    label: "expense_account",
    name: "expense_account_id",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "lawsuit_on_unit",
    name: "lawsuit_on_unit",
    list: SELECT_LISTS("lawsuit_report"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "lawsuit_on_contract",
    name: "lawsuit_on_contract",
    list: SELECT_LISTS("lawsuit_report"),
  }),
];

const leased_parking_report = [
  FIELDS_STRUCTURE.textField({
    label: "parking_no",
    name: "parking_no",
  }),

  FIELDS_STRUCTURE.textField({
    label: "area_name",
    name: "area_name",
  }),
  ...shared_leased_report_global,
  FIELDS_STRUCTURE.selectField({
    label: "blocked_units",
    name: "blocked_units",
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "blocked" },
      { id: 2, name: "Unblocked" },
    ],
  }),
  FIELDS_STRUCTURE.selectField({
    label: "lawsuit",
    name: "lawsuit",
    list: SELECT_LISTS("lawsuit_report"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_amount",
    name: "contract_amount",
    list: SELECT_LISTS("contract_amount_list"),
  }),
];

const leased_lands_report = [
  FIELDS_STRUCTURE.uniqueField({
    label: "land",
    name: "name",
    ref_table: "land",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "land_no",
    name: "land_no",
    ref_table: "land",
    ref_name: "land_no",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "land_type",
    name: "type",
    ref_table: "land",
    ref_name: "type",
  }),

  FIELDS_STRUCTURE.textField({
    label: "area_name",
    name: "area_name",
  }),

  FIELDS_STRUCTURE.textField({
    label: "area_no",
    name: "area_no",
  }),

  FIELDS_STRUCTURE.textField({
    label: "area_unit",
    name: "area_unit",
  }),
  ...shared_leased_report,
];

const leased_villas_report = [
  FIELDS_STRUCTURE.uniqueField({
    label: "villa_no",
    name: "villa_no",
    ref_table: "land",
    ref_name: "villa_no",
  }),
  FIELDS_STRUCTURE.textField({
    label: "complex_name",
    name: "complex_name",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "basin_number",
    name: "basin_number",
  }),
  FIELDS_STRUCTURE.textField({
    label: "area_name",
    name: "area_name",
  }),

  FIELDS_STRUCTURE.textField({
    label: "area_no",
    name: "area_no",
  }),

  ...shared_leased_report,
];

const units_that_will_be_vacated = [
  FIELDS_STRUCTURE.client(),

  FIELDS_STRUCTURE.textField({
    label: "property_no",
    name: "property_no",
  }),

  FIELDS_STRUCTURE.uniqueField({
    label: "property_type",
    name: "property_type",
    ref_table: "property_values",
    ref_name: "description",
  }),
  FIELDS_STRUCTURE.textField({
    label: "description",
    name: "description",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "number_of_days",
    name: "number_of_days",
  }),
];

const reserved_units_report = [
  FIELDS_STRUCTURE.client(),
  FIELDS_STRUCTURE.selectField({
    label: "unit_type",
    name: "unit_type",
    list: SELECT_LISTS("contact_pattern_assets_type"),
  }),
  FIELDS_STRUCTURE.textField({
    label: "property_no",
    name: "property_no",
  }),

  FIELDS_STRUCTURE.selectField({
    label: "booking",
    name: "booking",
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "Reserved" },
      { id: 2, name: "Canceled" },
    ],
  }),
];

const contracts_deposit_report = [
  FIELDS_STRUCTURE.client(),

  FIELDS_STRUCTURE.uniqueField({
    label: "building_id",
    name: "building_id",
    ref_table: "building",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "apartment_id",
    name: "apartment_id",
    ref_table: "apartment",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "shop_id",
    name: "shop_id",
    ref_table: "shop",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "parking_id",
    name: "parking_id",
    ref_table: "parking",
  }),

  FIELDS_STRUCTURE.selectField({
    label: "contract_status",
    name: "contract_status",
    list: SELECT_LISTS("contract_status_expired"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "termination_status",
    name: "termination_status",
    list: SELECT_LISTS("termination_status"),
  }),

  FIELDS_STRUCTURE.selectField({
    label: "deposit",
    name: "deposit",
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "Not refunded" },
      { id: 2, name: "Refunded" },
    ],
  }),
  FIELDS_STRUCTURE.selectField({
    label: "date_by",
    name: "date_by",
    list: [
      { id: 1, name: "contract start date" },
      { id: 2, name: "contract expire date" },
    ],
  }),
];

// contract_expired_reports
const contract_expired_reports = [
  FIELDS_STRUCTURE.client(),
  {
    label: "apartment_id",
    name: "apartment_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "apartment",
    ref_name: "apartment_no",
  },
  {
    label: "shop_id",
    name: "shop_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "shop",
    ref_name: "shop_no",
  },
  {
    label: "parking_id",
    name: "parking_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "parking",
    ref_name: "parking_no",
  },
  {
    label: "description",
    name: "description",
    type: "text",
  },
  // {
  //   label: "filter using",
  //   name: "filter_using",
  //   key: "select",
  //   intValue:true,
  //   selectFirstAsDefault:true,
  //   list: SELECT_LISTS('filter_using')
  // },
];
// contract_expired_reports
const earning_rental_income_earned_report = [
  {
    label: "Case of termination",
    name: "case_of_termination",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: SELECT_LISTS("revenues_report_contract_termination"),
  },
  {
    label: "round_to",
    name: "round_to",
    key: "select",
    required: false,
    intValue: true,
    list: SELECT_LISTS("contract_round_to"),
  },
  FIELDS_STRUCTURE.currency(),
];

// cheque report fields
const cheques_report = [
  FIELDS_STRUCTURE.account(),
  FIELDS_STRUCTURE.account({
    label: "observe_account_id",
    name: "observe_account_id",
  }),
  {
    label: "bank_id",
    name: "bank_id",
    is_ref: true,
    ref_table: "bank",
  },
  {
    label: "building_id",
    name: "building_id",
    is_ref: true,
    ref_table: "building",
  },
  {
    label: "apartment_id",
    name: "apartment_id",
    is_ref: true,
    ref_table: "apartment",
    ref_name: "apartment_no",
  },
  {
    label: "shop_id",
    name: "shop_id",
    is_ref: true,
    ref_table: "shop",
    ref_name: "shop_no",
  },
  {
    label: "parking_id",
    name: "parking_id",
    is_ref: true,
    ref_table: "parking",
    ref_name: "parking_no",
  },
  FIELDS_STRUCTURE.textField({
    label: "beneficiary_name",
    name: "beneficiary_name",
  }),

  {
    label: "deposit",
    name: "deposit",
    key: "select",
    intValue: true,
    list: SELECT_LISTS("cheque_report_deposit"),
    selectFirstAsDefault: true,
  },
];

const general_ledger_report = [
  FIELDS_STRUCTURE.account(),
  FIELDS_STRUCTURE.account({
    label: "observe_account_id",
    name: "observe_account_id",
  }),
  FIELDS_STRUCTURE.cost_center(),
];

// leased_property_activity_report
const leased_property_activity_report = [
  FIELDS_STRUCTURE.client(),
  {
    label: "building_id",
    name: "building_id",
    is_ref: true,
    ref_table: "building",
  },
  {
    label: "apartment_id",
    name: "apartment_id",
    is_ref: true,
    ref_table: "apartment",
    ref_name: "apartment_no",
  },
  {
    label: "shop_id",
    name: "shop_id",
    is_ref: true,
    ref_table: "shop",
    ref_name: "shop_no",
  },
  {
    label: "parking_id",
    name: "parking_id",
    is_ref: true,
    ref_table: "parking",
    ref_name: "parking_no",
  },
  {
    label: "villa_id",
    name: "villa_id",
    is_ref: true,
    ref_table: "villa",
    ref_name: "villa_no",
  },
  {
    label: "land_id",
    name: "land_id",
    is_ref: true,
    ref_table: "land",
    ref_name: "land_no",
  },
];

const trading_sheet_report = [
  FIELDS_STRUCTURE.account(),
  FIELDS_STRUCTURE.cost_center(),
  FIELDS_STRUCTURE.numberField({
    label: "level",
    name: "level",
  }),
  FIELDS_STRUCTURE.currency(),
  FIELDS_STRUCTURE.selectField({
    name: "last_purchase",
    label: "last_purchase",
    list: [
      { id: 1, name: "maximum" },
      { id: 2, name: "average" },
      { id: 3, name: "pricing policy" },
      { id: 4, name: "specific price" },
    ],
  }),
];

const journal_ledger_report = [
  FIELDS_STRUCTURE.account(),
  FIELDS_STRUCTURE.cost_center(),
  FIELDS_STRUCTURE.currency(),
  {
    key: "between",
    label: "entry_number",
    field1Props: {
      type: "number",
      name: "form",
    },
    field2Props: {
      type: "number",
      name: "to",
    },
  },
];

const cost_center_general_ledger_report = [
  FIELDS_STRUCTURE.cost_center(),
  FIELDS_STRUCTURE.account(),
  FIELDS_STRUCTURE.account({
    label: "observe_account_id",
    name: "observe_account_id",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "level",
    name: "level",
  }),
];

const customer_account_statement_report = [
  FIELDS_STRUCTURE.client(),
  FIELDS_STRUCTURE.account(),
  FIELDS_STRUCTURE.cost_center(),
  FIELDS_STRUCTURE.currency(),
];

const contract_cheque_report = [
  FIELDS_STRUCTURE.client(),
  FIELDS_STRUCTURE.suppliers(),

  FIELDS_STRUCTURE.textField({
    label: "property_no",
    name: "property_no",
  }),

  FIELDS_STRUCTURE.textField({
    label: "area_name",
    name: "area_name",
  }),

  FIELDS_STRUCTURE.textField({
    label: "area_unit",
    name: "area_unit",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "property_type",
    name: "property_type",
    ref_table: "property_values",
    ref_name: "description",
  }),
  FIELDS_STRUCTURE.textField({
    label: "description",
    name: "description",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "area_unit",
    name: "area_unit",
    ref_table: "property_values",
    ref_name: "area",
  }),

  FIELDS_STRUCTURE.selectField({
    label: "payment_method",
    name: "payment_method",
    list: SELECT_LISTS("contract_payment_methods"),
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "lessor_id",
    name: "lessor_id",
    ref_table: "lessor",
  }),

  FIELDS_STRUCTURE.selectField({
    label: "blocked_units",
    name: "blocked_units",
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "blocked" },
      { id: 2, name: "Unblocked" },
    ],
  }),
  FIELDS_STRUCTURE.selectField({
    label: "termination_status",
    name: "termination_status",
    list: SELECT_LISTS("termination_status"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_status",
    name: "contract_status",
    list: SELECT_LISTS("contract_status_expired"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "lawsuit",
    name: "lawsuit",
    list: SELECT_LISTS("lawsuit_report"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "installments",
    name: "installments",
    list: SELECT_LISTS("installment_report_list"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "date_by",
    name: "date_by",
    list: SELECT_LISTS("contract_date_by"),
  }),
];

const sold_units_report = [
  FIELDS_STRUCTURE.client(),
  FIELDS_STRUCTURE.textField({
    label: "area_name",
    name: "area_name",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "property_type",
    name: "property_type",
    ref_table: "property_values",
    ref_name: "description",
  }),
  FIELDS_STRUCTURE.textField({
    label: "description",
    name: "description",
  }),
  {
    key: "between",
    label: "area_from",
    field1Props: {
      type: "number",
      name: "area_form",
    },
    field2Props: {
      type: "number",
      name: "area_to",
    },
  },
  FIELDS_STRUCTURE.uniqueField({
    label: "unit",
    name: "unit",
    ref_table: "property_values",
    ref_name: "unit",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "status",
    name: "status",
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "Sold" },
      { id: 2, name: "Unsold" },
    ],
  }),
];

const sold_lands_report = [
  FIELDS_STRUCTURE.textField({
    label: "name",
    name: "name",
  }),
  FIELDS_STRUCTURE.textField({
    label: "land_type",
    name: "land_type",
  }),
  FIELDS_STRUCTURE.textField({
    label: "area_name",
    name: "area_name",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "basin_number",
    name: "basin_number",
  }),
  FIELDS_STRUCTURE.textField({
    label: "area_no",
    name: "area_no",
  }),
  {
    key: "between",
    label: "area_from",
    field1Props: {
      type: "number",
      name: "area_form",
    },
    field2Props: {
      type: "number",
      name: "area_to",
    },
  },
  FIELDS_STRUCTURE.textField({
    label: "unit",
    name: "unit",
  }),
  FIELDS_STRUCTURE.client(),
  FIELDS_STRUCTURE.selectField({
    label: "status",
    name: "status",
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "Sold" },
      { id: 2, name: "Unsold" },
    ],
  }),
];

const sold_villas_report = [
  FIELDS_STRUCTURE.textField({
    label: "villa_no",
    name: "villa_no",
  }),
  FIELDS_STRUCTURE.textField({
    label: "complex_name",
    name: "complex_name",
  }),
  FIELDS_STRUCTURE.textField({
    label: "area_name",
    name: "area_name",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "basin_number",
    name: "basin_number",
  }),
  {
    key: "between",
    label: "area_from",
    field1Props: {
      type: "number",
      name: "area_form",
    },
    field2Props: {
      type: "number",
      name: "area_to",
    },
  },
  FIELDS_STRUCTURE.client(),
  FIELDS_STRUCTURE.selectField({
    label: "status",
    name: "status",
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "Sold" },
      { id: 2, name: "Unsold" },
    ],
  }),
];

const overdue_payments_report = [
  FIELDS_STRUCTURE.account(),
  FIELDS_STRUCTURE.uniqueField({
    label: "contract",
    name: "contract",
    ref_table: "contract",
    ref_name: "number",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "repeated",
    name: "repeated",
    list: [{ id: 0, name: "all" }],
  }),
];

const changes_flats_rent_pricing_report = [
  FIELDS_STRUCTURE.uniqueField({
    label: "Flat no",
    name: "apartment_id",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "area",
    name: "area",
  }),
];

// Mangers reports fields
const manger_cheques_report = [];

// services contracts report fields
const services_contracts_report = [
  FIELDS_STRUCTURE.client(),
  FIELDS_STRUCTURE.textField({
    label: "area_name",
    name: "area_name",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "payment_method",
    name: "payment_method",
    list: SELECT_LISTS("contract_payment_methods"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_status",
    name: "contract_status",
    list: SELECT_LISTS("contract_status_expired"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "termination_status",
    name: "termination_status",
    list: SELECT_LISTS("termination_status"),
  }),

  FIELDS_STRUCTURE.selectField({
    label: "contract_input_case",
    name: "contract_input_case",
    list: SELECT_LISTS("contract_input_case"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "clearance",
    name: "clearance",
    list: SELECT_LISTS("clearance_list"),
  }),
  FIELDS_STRUCTURE.numberField({
    label: "left_to_finish_days",
    name: "left_to_finish_days",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "user",
    name: "user",
    ref_table: "user",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "termination_date",
    name: "termination_date",
    list: SELECT_LISTS("termination_date_options"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "date_by",
    name: "date_by",
    list: SELECT_LISTS("contract_date_by"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "installments",
    name: "installments",
    list: SELECT_LISTS("installment_report_list"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_amount",
    name: "contract_amount",
    list: SELECT_LISTS("contract_amount_list"),
  }),
];

const contract_cycle_report = [
  FIELDS_STRUCTURE.textField({
    label: "property_no",
    name: "property_no",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "status",
    name: "status",
    list: SELECT_LISTS("contract_cycle_report_list"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "registered_by",
    name: "registered_by",
    list: SELECT_LISTS("registered_by_list"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_printed",
    name: "contract_printed",
    list: SELECT_LISTS("contract_printed_list"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "signed_by_the_customer",
    name: "signed_by_the_customer",
    list: SELECT_LISTS("contract_printed_list"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "signed_by_the_owner",
    name: "signed_by_the_owner",
    list: SELECT_LISTS("contract_printed_list"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_has_been_delivered_to_customer",
    name: "contract_has_been_delivered_to_customer",
    list: SELECT_LISTS("contract_printed_list"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_received_from_customer",
    name: "contract_received_from_customer",
    list: SELECT_LISTS("contract_printed_list"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_has_been_received_for_send_it_to_registration",
    name: "contract_has_been_received_for_send_it_to_registration",
    list: SELECT_LISTS("contract_printed_list"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_sent_to_registration",
    name: "contract_sent_to_registration",
    list: SELECT_LISTS("contract_printed_list"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_received_from_registration",
    name: "contract_received_from_registration",
    list: SELECT_LISTS("contract_printed_list"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_has_been_delivered_to_customer",
    name: "contract_has_been_delivered_to_customer",
    list: SELECT_LISTS("contract_printed_list"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "contract_status",
    name: "contract_status",
    list: SELECT_LISTS("contract_status_expired"),
  }),
];

const creditors_ages_report = [
  FIELDS_STRUCTURE.account(),
  FIELDS_STRUCTURE.cost_center(),
  FIELDS_STRUCTURE.currency(),
  FIELDS_STRUCTURE.numberField({
    label: "period",
    name: "period",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "number_periods",
    name: "number_periods",
  }),
  FIELDS_STRUCTURE.dateField({
    label: "date",
    name: "date",
  }),
];

const vat_bills_report = [
  FIELDS_STRUCTURE.uniqueField({
    label: "user",
    name: "user",
    ref_table: "user",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "link_with",
    name: "link_with",
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "None" },
      { id: 2, name: "Contract" },
      { id: 3, name: "Lawsuit" },
      { id: 4, name: "Electricity bill" },
      { id: 5, name: "Services contract" },
      { id: 6, name: "Maintenance contract" },
    ],
  }),
  FIELDS_STRUCTURE.selectField({
    label: "type",
    name: "type",
    list: [
      { id: 0, name: "All" },
      { id: 1, name: "Safar" },
      { id: 2, name: "Exempt" },
      { id: 3, name: "Taxable" },
      { id: 4, name: "" },
    ],
  }),
  FIELDS_STRUCTURE.textField({
    label: "kind",
    name: "kind",
  }),
  FIELDS_STRUCTURE.switchField({
    label: "show_details",
    name: "show_details",
  }),
  FIELDS_STRUCTURE.switchField({
    label: "repeat_information_for_each_pen",
    name: "repeat_information_for_each_pen",
  }),
];

// warehouse report reports fields
const warehouse_report = [
  FIELDS_STRUCTURE.textField({
    label: "name",
    name: "name",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "category",
    name: "category",
    ref_name: "category",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "material_group",
    name: "material_group",
    ref_name: "material_group",
  }),
  {
    key: "between",
    label: "purchasing_price",
    field1Props: {
      type: "number",
      name: "purchasing_form",
    },
    field2Props: {
      type: "number",
      name: "purchasing_to",
    },
  },
  {
    key: "between",
    label: "selling_price",
    field1Props: {
      type: "number",
      name: "sale_form",
    },
    field2Props: {
      type: "number",
      name: "sale_to",
    },
  },

  FIELDS_STRUCTURE.switchField({
    label: "available",
    name: "available",
  }),
];

const complaints_report = [
  FIELDS_STRUCTURE.uniqueField({
    label: "worker",
    name: "worker",
    ref_name: UNIQUE_REF_TABLES.employee,
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "contract",
    name: "contract",
    ref_name: "contract",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "building",
    name: "building",
    ref_name: "building",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "category",
    name: "category",
    ref_name: "category",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "problem",
    name: "problem",
    ref_name: "category_problem",
  }),
  FIELDS_STRUCTURE.note({
    label: "category_problem",
    name: "category_problem",
  }),
  FIELDS_STRUCTURE.note(),
  FIELDS_STRUCTURE.selectField({
    label: "complaint status",
    name: "complaint status",
    list: SELECT_LISTS("complaint_status"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "worker status",
    name: "worker status",
    list: SELECT_LISTS("worker_status"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "paid status",
    name: "paid status",
    list: SELECT_LISTS("complaint_paid"),
  }),
  FIELDS_STRUCTURE.selectField({
    label: "complaint_approved",
    name: "complaint_approved",
    list: SELECT_LISTS("complaint_approved"),
  }),
];

const worker_report = [
  FIELDS_STRUCTURE.uniqueField({
    label: "worker",
    name: "worker",
    ref_name: UNIQUE_REF_TABLES.employee,
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "contract",
    name: "contract",
    ref_name: "contract",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "building",
    name: "building",
    ref_name: "building",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "category",
    name: "category",
    ref_name: "category",
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "problem",
    name: "problem",
    ref_name: "category_problem",
  }),
  {
    key: "between",
    label: "hour_from",
    field1Props: {
      type: "number",
      name: "form",
    },
    field2Props: {
      type: "number",
      name: "to",
    },
  },
];

const owner_expenses_report = [
  FIELDS_STRUCTURE.uniqueField({
    name: "owner",
    ref_table: "owner",
  }),
];

const REPORTS_STRUCTURE = {
  contract_payments_report,
  returned_cheque_report,
  collection_cheque_report,
  contract_reports,
  contract_cheque_report,
  // contract_reports,
  contract_expired_reports,
  earning_rental_income_earned_report,
  contract_near_to_expire_report: contract_expired_reports,
  reserved_units_report,
  services_contracts_report,
  contract_cycle_report,
  contracts_deposit_report,
  // leased
  leased_units_report,
  leased_parking_report,
  leased_lands_report,
  leased_villas_report,
  units_that_will_be_vacated,
  leased_property_activity_report,
  // sold
  sold_units_report,
  sold_lands_report,
  sold_villas_report,

  // cheques_report
  cheques_report,
  overdue_payments_report,
  // accounting report
  creditors_ages_report,
  general_ledger_report,
  journal_ledger_report,
  cost_center_general_ledger_report,
  changes_flats_rent_pricing_report,
  changes_flats_sale_pricing_report: changes_flats_rent_pricing_report,

  trading_sheet_report,
  profit_and_loss_report: trading_sheet_report,
  balance_sheet_report: trading_sheet_report,
  // customer
  customer_account_statement_report,
  vat_bills_report,

  // Mangers reports
  manger_cheques_report,
  owner_expenses_report,

  // Maintenances
  warehouse_report,
  complaints_report,
  worker_report,
};

export default function getReportFields(name) {
  return REPORTS_STRUCTURE[name];
}
