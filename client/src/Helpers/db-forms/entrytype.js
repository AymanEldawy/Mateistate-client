import { DropDowns } from "Helpers/functions";

export const entrytype = [
  {
    name: "number",
    type: "integer",
    default_value: "nextval('entrytype_number_seq1'::regclass)",
    required: true,
    hide_in: "",
  },
  {
    name: "guid",
    type: "uuid",
    default_value: null,
    required: true,
    is_ref: true,
    ref_table: "entrytype",
    ref_col: "guid",
    ref_name: "",
    hide_in: "",
  },
  {
    name: "seclvl",
    key: "select",
    list: DropDowns("seclvl"),
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "code",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "name",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "ltnname",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "menu",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "ltnmenu",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "shortcut",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "defaccountguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "debitfield",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "creditfield",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "debitcaption",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "creditcaption",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "ltndebitcaption",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "ltncreditcaption",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "ckcurrency",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "ckcurrencyrate",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "ckcost",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "cknote",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "color1",
    type: "integer",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "color2",
    type: "integer",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "showcontractfield",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "showcostfromcontract",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "createentry",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "autocreateentry",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "autopostedentry",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "opmovecostwithdefaccount",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "opentryforoneitem",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "opobversenoteitem",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "obitemnotefromnote",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "needcostitem",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "neednoteitem",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "autosmsafteradd",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "smsmsg",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "smsmsgen",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "defprintpath",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "trial150",
    type: "character",
    default_value: null,
    required: false,
    hide_in: "",
  },
];
