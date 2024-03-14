import { SELECT_LISTS, UNIQUE_REF_TABLES } from "Helpers/constants";

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

const client = (additional) => ({
  label: "client_id",
  name: "client_id",
  is_ref: true,
  ref_table: UNIQUE_REF_TABLES.clients,
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
};

export default FIELDS_STRUCTURE;
