import { SELECT_LISTS, UNIQUE_REF_TABLES } from "Helpers/constants";

// Fields
const switchField = (additional) => ({
  type: "boolean",
  key: "switch",
  ...additional,
});

const textField = (additional) => ({
  type: "text",
  required: false,
  ...additional,
});

const dateField = (additional) => ({
  type: "date",
  required: false,
  ...additional,
});

const numberField = (additional) => ({
  type: "number",
  required: false,
  ...additional,
});

const selectField = (additional) => ({
  key: "select",
  intValue: true,
  selectFirstAsDefault: true,
  list: SELECT_LISTS(additional.list),
  required: false,
  ...additional,
});

const uniqueField = (additional) => ({
  is_ref: true,
  ref_id: "id",
  ref_name: "name",
  ...additional,
});

// Global Fields
const currency = (additional) => ({
  label: "currency_id",
  name: "currency_id",

  is_ref: true,
  ref_table: "currency",
  ref_name: "code",

  ...additional,
});

const number = (additional) => ({
  label: "number",
  name: "number",
  type: "number",
  required: true,
  ...additional,
});
const created_at = (additional) => ({
  label: "created_at",
  name: "created_at",
  type: "date",
  defaultValue: new Date(),
  hide_in_form: true,
  ...additional,
});

const name = (additional) => ({
  label: "name",
  name: "name",
  type: "text",
  required: true,
  ...additional,
});
const id = (additional) => ({
  label: "id",
  name: "id",

  ...additional,
});
const note = (additional) => ({
  label: "note",
  name: "note",
  type: "text",

  ...additional,
});
const nationality = (additional) => ({
  label: "nationality",
  name: "nationality",

  key: "select",
  list: SELECT_LISTS("nationality_list"),
  allowInsert: true,

  ...additional,
});
const account = (additional) => ({
  label: "account_id",
  name: "account_id",

  is_ref: true,
  ref_table: "account",

  ...additional,
});
const cost_center = (additional) => ({
  label: "cost_center_id",
  name: "cost_center_id",
  is_ref: true,
  ref_table: "cost_center",
  ...additional,
});

const bank = (additional) => ({
  label: "bank_id",
  name: "bank_id",
  is_ref: true,
  ref_table: "bank",
  ...additional,
});

const client = (additional) => ({
  label: "client_id",
  name: "client_id",
  is_ref: true,
  ref_table: UNIQUE_REF_TABLES.clients,
  ...additional,
});

const suppliers = (additional) => ({
  label: "owner_id",
  name: "owner_id",
  is_ref: true,
  ref_table: UNIQUE_REF_TABLES.suppliers,
  ...additional,
});

const FIELDS_STRUCTURE = {
  currency,
  number,
  created_at,
  name,
  id,
  account,
  note,
  nationality,
  cost_center,
  client,
  suppliers,
  bank,
  // Fields,
  switchField,
  textField,
  dateField,
  numberField,
  selectField,
  uniqueField,
};

export default FIELDS_STRUCTURE;
