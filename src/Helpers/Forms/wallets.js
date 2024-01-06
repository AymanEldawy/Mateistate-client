
// wallet
const land_wallet = [
  { name: "id", type: "uuid", required: false },
  { name: "created_at", type: "date", required: false },
  { name: "number", type: "text", required: false },
  {
    name: "land_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "land",
    ref_col: "id",
  },
  {
    name: "contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",
    ref_col: "id",
  },
  { name: "main_cost", type: "number", required: false },
  { name: "expense", type: "number", required: false },
  { name: "begin_date", type: "date", required: false },
  { name: "sale_date", type: "date", required: false },
  { name: "sale_value", type: "number", required: false },
];

const parking_wallet = [
  { name: "id", type: "uuid", required: false },
  { name: "created_at", type: "date", required: false },
  { name: "number", type: "text", required: false },
  {
    name: "contract_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "contract",
    ref_col: "id",
  },
  {
    name: "building_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "building",
    ref_col: "id",
  },
  {
    name: "parking_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "parking",
    ref_col: "id",
  },
  { name: "main_cost", type: "number", required: false },
  { name: "expense", type: "number", required: false },
  { name: "begin_date", type: "date", required: false },
  { name: "sale_date", type: "date", required: false },
  { name: "sale_value", type: "number", required: false },
];
