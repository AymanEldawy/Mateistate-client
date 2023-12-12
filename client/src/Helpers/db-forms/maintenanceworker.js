import { DropDowns } from "Helpers/functions";

export const maintenanceworker = [
  {
    name: "number",
    type: "integer",
    default_value: "nextval('maintenanceworker_number_seq1'::regclass)",
    required: true,
    hide_in: "",
  },
  {
    name: "guid",
    type: "uuid",
    default_value: null,
    required: true,
    is_ref: true,
    ref_table: "maintenanceworker",
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
    name: "birthdate",
    type: "date",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "passportno",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "passportexpiredate",
    type: "date",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "stayexpiredate",
    type: "date",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "personalityno1",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "personalityno2",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "profession",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "address",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "phone",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "mobile",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "nationality",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "ltnnationality",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "security",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "memosecurity",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "domicile",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "accountguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "note",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "trial918",
    type: "character",
    default_value: null,
    required: false,
    hide_in: "",
  },
];
