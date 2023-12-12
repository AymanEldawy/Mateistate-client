import { DropDowns } from "Helpers/functions";

export const electricitybill = [
  {
    name: "number",
    type: "integer",
    default_value: "nextval('electricitybill_number_seq1'::regclass)",
    required: true,
    hide_in: "",
  },
  {
    name: "guid",
    type: "uuid",
    default_value: null,
    required: true,
    is_ref: true,
    ref_table: "electricitybill",
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
    name: "mark",
    type: "boolean",
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
    name: "iscollect",
    type: "boolean",
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
    name: "buildingguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "realtytype",
    type: "integer",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "flatguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "shopguid",
    type: "uuid",
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
    name: "custguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "eleccounterno",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "counter",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "oldcounter",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "discount",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "extra",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "consumption",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "watercounterno",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "wcounter",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "woldcounter",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "roundkind",
    type: "integer",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "totalvalue",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "incomeaccountguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "extraaccountguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "discountaccountguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "wateraccountguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "drainageaccountguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "watervalue",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "drainagevalue",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "fineaccountguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "feeaccountguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "finevalue",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "feevalue",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "overdue",
    type: "double precision",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "waternote",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "drainagenote",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "discountnote",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "extranote",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "consumptionnote",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "finenote",
    type: "character varying",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "feenote",
    type: "character varying",
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
    name: "createbilltentry",
    type: "boolean",
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
    name: "trial049",
    type: "character",
    default_value: null,
    required: false,
    hide_in: "",
  },
];
