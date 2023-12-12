import { DropDowns } from "Helpers/functions";

export const maintenanceitem = [
  {
    name: "number",
    type: "integer",
    default_value: "nextval('maintenanceitem_number_seq1'::regclass)",
    required: true,
    hide_in: "",
  },
  {
    name: "guid",
    type: "uuid",
    default_value: null,
    required: true,
    is_ref: true,
    ref_table: "maintenanceitem",
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
    name: "defvalue",
    type: "double precision",
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
    name: "trial888",
    type: "character",
    default_value: null,
    required: false,
    hide_in: "",
  },
];
