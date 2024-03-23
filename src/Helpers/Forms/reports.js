import { SELECT_LISTS, UNIQUE_REF_TABLES } from "Helpers/constants";
import FIELDS_STRUCTURE from "./fields-structure";

//
//
//
//
//
//
//

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
  {
    label: "status",
    name: "status",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: [{ id: 0, name: "All" }, ...SELECT_LISTS("contract_status")],
    required: false,
  },
  {
    label: "termination_status",
    name: "termination_status",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: [{ id: 0, name: "All" }, ...SELECT_LISTS("termination_status")],
    required: false,
  },
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
  {
    label: "Installments",
    name: "Installments",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: [{ id: 0, name: "All" }],
    required: false,
  },
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

const REPORTS_STRUCTURE = {
  contract_payments_report,
};

export default REPORTS_STRUCTURE;
