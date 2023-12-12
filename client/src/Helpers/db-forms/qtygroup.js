import { DropDowns } from "Helpers/functions";

export const qtygroup = [
  {
    name: "number",
    type: "integer",
    default_value: "nextval('qtygroup_number_seq1'::regclass)",
    required: true,
    hide_in: "",
  },
  {
    name: "guid",
    type: "uuid",
    default_value: null,
    required: true,
    is_ref: true,
    ref_table: "qtygroup",
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
    name: "groupguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "calcqtyguid",
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
    name: "trial453",
    type: "character",
    default_value: null,
    required: false,
    hide_in: "",
  },
];
