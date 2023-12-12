import { DropDowns } from "Helpers/functions";

export const currentusers = [
  {
    name: "userguid",
    type: "uuid",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "spid",
    type: "integer",
    default_value: null,
    required: false,
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
    name: "admin",
    type: "boolean",
    default_value: null,
    required: false,
    hide_in: "",
  },
  {
    name: "trial948",
    type: "character",
    default_value: null,
    required: false,
    hide_in: "",
  },
];
