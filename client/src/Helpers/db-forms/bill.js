import { DropDowns } from "Helpers/functions";

export const bill = [
  {
    name: "number",
    type: "integer",
    default_value: "nextval('bill_number_seq1'::regclass)",
    required: true,
    hide_in: "",
  },
  {
    name: "guid",
    type: "uuid",
    default_value: null,
    required: true,
    is_ref: true,
    ref_table: "bill",
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
    name: "typeguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "date",
    type: "date",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "custguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "currencyguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "currencyval",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "paytype",
    type: "integer",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "storeguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "custaccguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "costguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "branchguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "class",
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
    name: "entryguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "entrynumber",
    type: "integer",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "checkcreateentry",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "itemstotal",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "itemsdiscount",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "itemsextra",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "buextra",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "budiscount",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "buonly",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "contractguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "isposted",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "addfld1",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "addfld2",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "addfld3",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "addfld4",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "addfld5",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "addfld6",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "addfld7",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "addfld8",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "trial190",
    type: "character",
    default_value: null,
    required: false,
    hide_in: "",
  },
];
