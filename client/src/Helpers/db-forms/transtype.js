import { DropDowns } from "Helpers/functions";

export const transtype = [
  {
    name: "number",
    type: "integer",
    default_value: "nextval('transtype_number_seq1'::regclass)",
    required: true,
    hide_in: "",
  },
  {
    name: "guid",
    type: "uuid",
    default_value: null,
    required: true,
    is_ref: true,
    ref_table: "transtype",
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
    name: "defprintpath",
    type: "character varying",
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
    name: "color1",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "color2",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "defcostinguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "defstoreinguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "defcostoutguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "defstoreoutguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "posttostores",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "posttostoresauto",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "trial172",
    type: "character",
    default_value: null,
    required: false,
    hide_in: "",
  },
];
