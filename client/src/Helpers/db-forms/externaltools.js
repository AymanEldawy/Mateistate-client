import { DropDowns } from "Helpers/functions";

export const externaltools = [
  {
    name: "number",
    type: "integer",
    default_value: "nextval('externaltools_number_seq1'::regclass)",
    required: true,
    hide_in: "",
  },
  {
    name: "guid",
    type: "uuid",
    default_value: null,
    required: true,
    is_ref: true,
    ref_table: "externaltools",
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
    name: "prog",
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
    name: "trial173",
    type: "character",
    default_value: null,
    required: false,
    hide_in: "",
  },
];
