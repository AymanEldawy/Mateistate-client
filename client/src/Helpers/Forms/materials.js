import { DropDowns } from "Helpers/functions";

export const mat = [
  // { name: "Number", type: "number", label: "Number", required: false },
  {
    name: "SecLvl",
    key: "select",
    label: "SecLvl",
    required: false,
    list: DropDowns("SecLvl"),
  },
  { name: "Code", type: "text", label: "Code", required: false },
  { name: "Name", type: "text", label: "Name", required: true },
  { name: "LtnName", type: "text", label: "LtnName", required: false },
  { name: "Unity1", type: "text", label: "Unity1", required: false },
  { name: "Unity2", type: "text", label: "Unity2", required: false },
  { name: "Unity3", type: "text", label: "Unity3", required: false },
  { name: "Barcode1", type: "text", label: "Barcode1", required: false },
  { name: "Barcode2", type: "text", label: "Barcode2", required: false },
  { name: "Barcode3", type: "text", label: "Barcode3", required: false },
  { name: "DefUnity", type: "number", label: "DefUnity", required: false },
  { name: "unityFact2", type: "number", label: "unityFact2", required: false },
  { name: "unityFact3", type: "number", label: "unityFact3", required: false },
  { name: "unityfix2", type: "checkbox", label: "unityfix2", required: false },
  { name: "unityfix3", type: "checkbox", label: "unityfix3", required: false },
  { name: "Note", type: "text", label: "Note", required: false },
  {
    table: "MatGroup",
    name: "GroupGuid",
    type: "unique",
    label: "GroupGuid",
    required: false,
    list: [],
  },
  { name: "MatType", type: "number", label: "MatType", required: false },
  {
    table: "Currency",
    name: "CurrencyGuid",
    type: "unique",
    label: "CurrencyGuid",
    required: false,
    list: [],
  },
  {
    name: "CurrencyVal",
    type: "number",
    label: "CurrencyVal",
    required: false,
  },
  { name: "AvgPrice", type: "number", label: "AvgPrice", required: false },
  {
    name: "LastPriceDate",
    type: "text",
    label: "LastPriceDate",
    required: false,
  },
  { name: "LastPrice", type: "number", label: "LastPrice", required: false },
  { name: "MaxPrice", type: "number", label: "MaxPrice", required: false },
  {
    name: "SaleAvgPrice",
    type: "number",
    label: "SaleAvgPrice",
    required: false,
  },
  {
    name: "SaleLastPriceDate",
    type: "text",
    label: "SaleLastPriceDate",
    required: false,
  },
  {
    name: "SaleLastPrice",
    type: "number",
    label: "SaleLastPrice",
    required: false,
  },
  {
    name: "SaleMaxPrice",
    type: "number",
    label: "SaleMaxPrice",
    required: false,
  },
];

export const matgroup = [
  // { name: "Number", type: "number", label: "Number", required: false },
  {
    name: "SecLvl",
    key: "select",
    label: "SecLvl",
    required: false,
    list: DropDowns("SecLvl"),
  },
  { name: "Code", type: "text", label: "Code", required: false },
  { name: "Name", type: "text", label: "Name", required: true },
  { name: "LtnName", type: "text", label: "LtnName", required: false },
  { name: "Note", type: "text", label: "Note", required: false },
  {
    table: "MatGroup",
    name: "ParentGuid",
    type: "unique",
    label: "ParentGuid",
    required: false,
    list: [],
  },
];

export const Store = [
  // { name: "Number", type: "number", label: "Number", required: false },
  {
    name: "SecLvl",
    key: "select",
    label: "SecLvl",
    required: false,
    list: DropDowns("SecLvl"),
  },
  { name: "Code", type: "text", label: "Code", required: false },
  { name: "Name", type: "text", label: "Name", required: true },
  { name: "LtnName", type: "text", label: "LtnName", required: false },
  { name: "Address", type: "text", label: "Address", required: false },
  {
    name: "warehouseman",
    type: "text",
    label: "warehouseman",
    required: false,
  },
  { name: "Note", type: "text", label: "Note", required: false },
  {
    table: "Store",
    name: "ParentGuid",
    type: "unique",
    label: "ParentGuid",
    required: false,
    list: [],
  },
  {
    table: "Account",
    name: "AcFinalGUID",
    type: "unique",
    label: "AcFinalGUID",
    required: false,
    list: [],
  },
];
