// ==== Start Cards

import IndeterminateCheckbox from "Components/Tables/IndeterminateCheckbox";

export const account = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "name", accessorKey: "name" },
  { header: "type", accessorKey: "type" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "parent_id", accessorKey: "parent_id" },
  { header: "final_id", accessorKey: "final_id" },
  { header: "note", accessorKey: "note" },
  { header: "number", accessorKey: "number" },
];

export const user = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "number", accessorKey: "number" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "card_type", accessorKey: "card_type" },
  { header: "date_of_birth", accessorKey: "date_of_birth" },
  { header: "passport_number", accessorKey: "passport_number" },
  { header: "passport_expiry", accessorKey: "passport_expiry" },
  {
    header: "national_id",
    accessorKey: "national_id",
  },
  {
    header: "national_id_expiry",
    accessorKey: "national_id_expiry",
  },
  { header: "address", accessorKey: "address" },
  { header: "user_type", accessorKey: "user_type" },
  { header: "commercial_register", accessorKey: "commercial_register" },
  { header: "barcode", accessorKey: "barcode" },
  { header: "profession", accessorKey: "profession" },
  { header: "work_phone", accessorKey: "work_phone" },
  { header: "personal_phone", accessorKey: "personal_phone" },
  { header: "fax", accessorKey: "fax" },
  { header: "mailbox", accessorKey: "mailbox" },
  { header: "email", accessorKey: "email" },
  { header: "sponsor", accessorKey: "sponsor" },
  { header: "sponsor_data", accessorKey: "sponsor_data" },
  { header: "statement", accessorKey: "statement" },
  {
    header: "account_id",
    accessorKey: "account_id",
  },
  {
    header: "insurance_account_id",
    accessorKey: "insurance_account_id",
  },
  {
    header: "bank_id",
    accessorKey: "bank_id",
  },
  { header: "bank_account", accessorKey: "bank_account" },
  { header: "files", accessorKey: "files" },
  { header: "nationality", accessorKey: "nationality" },
];
export const lessor = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "full_name", accessorKey: "full_name" },
  { header: "passport", accessorKey: "passport" },
  { header: "passport_expiry_date", accessorKey: "passport_expiry_date" },
  { header: "id_card", accessorKey: "id_card" },
  { header: "lessor_card", accessorKey: "lessor_card" },
  { header: "cell_phone", accessorKey: "cell_phone" },
  { header: "number", accessorKey: "number" },
  { header: "address", accessorKey: "address" },
  { header: "nationality", accessorKey: "nationality" },
  { header: "mobile", accessorKey: "mobile" },
  { header: "fax", accessorKey: "fax" },
  { header: "mailbox", accessorKey: "mailbox" },
  { header: "email", accessorKey: "email" },
  { header: "note", accessorKey: "note" },
  { header: "role", accessorKey: "role" },
];
export const owner = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "full_name", accessorKey: "full_name" },
  { header: "id_card", accessorKey: "id_card" },
  { header: "phone", accessorKey: "phone" },
  { header: "cell_phone", accessorKey: "cell_phone" },
  { header: "fax", accessorKey: "fax" },
  { header: "mailbox", accessorKey: "mailbox" },
  { header: "email", accessorKey: "email" },
  { header: "address", accessorKey: "address" },
  { header: "nationality", accessorKey: "nationality" },
];
export const seller = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "full_name", accessorKey: "full_name" },
  { header: "nationality", accessorKey: "nationality" },
  { header: "id_card", accessorKey: "id_card" },
  { header: "passport", accessorKey: "passport" },
  { header: "work_card_number", accessorKey: "work_card_number" },
  { header: "mobile", accessorKey: "mobile" },
  { header: "cellPhone", accessorKey: "cellPhone" },
  { header: "fax", accessorKey: "fax" },
  { header: "mailbox", accessorKey: "mailbox" },
  { header: "email", accessorKey: "email" },
  { header: "address", accessorKey: "address" },
  { header: "minimum_commission", accessorKey: "minimum_commission" },
  { header: "maximum_discount", accessorKey: "maximum_discount" },
  { header: "statement", accessorKey: "statement" },
];

export const bank = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "name", accessorKey: "name" },
  { header: "address", accessorKey: "address" },
];

export const cost_center = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "number", accessorKey: "number" },
  { header: "name", accessorKey: "name" },
  { header: "parent_id", accessorKey: "parent_id" },
  { header: "note", accessorKey: "note" },
];

export const country = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "name", accessorKey: "name" },
  { header: "code", accessorKey: "code" },
];
export const currency = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "name", accessorKey: "name" },
  { header: "code", accessorKey: "code" },
  { header: "rate", accessorKey: "rate" },
];

//  === building card

export const building = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "name", accessorKey: "name" },
  { header: "emirate", accessorKey: "emirate" },
  { header: "suburb", accessorKey: "suburb" },
  { header: "area", accessorKey: "area" },
  { header: "street", accessorKey: "street" },
  { header: "building_number", accessorKey: "building_number" },
  { header: "part_number", accessorKey: "part_number" },
  { header: "basin_number", accessorKey: "basin_number" },
  { header: "bond_number", accessorKey: "bond_number" },
  { header: "bond_type", accessorKey: "bond_type" },
  { header: "bond_date", accessorKey: "bond_date" },
  { header: "owner_id", accessorKey: "owner_id" },
  { header: "display", accessorKey: "display" },
  { header: "statement", accessorKey: "statement" },
  { header: "construction_account_id", accessorKey: "construction_account_id" },
  { header: "create_within_id", accessorKey: "create_within_id" },
  { header: "main_cost_center_id", accessorKey: "main_cost_center_id" },
  {
    header: "building_bank_account_id",
    accessorKey: "building_bank_account_id",
  },
  { header: "lessor_id", accessorKey: "lessor_id" },
  { header: "bank_account_number", accessorKey: "bank_account_number" },
  { header: "number", accessorKey: "number" },
  { header: "apartment_count", accessorKey: "apartment_count" },
  { header: "penthouse_count", accessorKey: "penthouse_count" },
  { header: "parking_count", accessorKey: "parking_count" },
  { header: "mezzanine_count", accessorKey: "mezzanine_count" },
  { header: "office_count", accessorKey: "office_count" },
  { header: "warehouse_count", accessorKey: "warehouse_count" },
  { header: "service_apartments", accessorKey: "service_apartments" },
  { header: "drivers_apartments", accessorKey: "drivers_apartments" },
  { header: "stores", accessorKey: "stores" },
  { header: "purchase_date", accessorKey: "purchase_date" },
  { header: "amount", accessorKey: "amount" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "currency_val", accessorKey: "currency_val" },
  { header: "account_id", accessorKey: "account_id" },
  { header: "apartment_floor", accessorKey: "apartment_floor" },
  { header: "penthouse_floor", accessorKey: "penthouse_floor" },
  { header: "parking_floor", accessorKey: "parking_floor" },
  { header: "mezzanine_floor", accessorKey: "mezzanine_floor" },
  { header: "office_floor", accessorKey: "office_floor" },
  { header: "underground_parking", accessorKey: "underground_parking" },
  { header: "bank_id", accessorKey: "bank_id" },
  { header: "gen_entries", accessorKey: "gen_entries" },
];

export const building_buying = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "amount", accessorKey: "amount" },
  { header: "gen_entries", accessorKey: "gen_entries" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "building_id", accessorKey: "building_id" },
  { header: "supplier_account_id", accessorKey: "supplier_account_id" },
  { header: "statement", accessorKey: "statement" },
];
export const building_editorial_entry = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "building_id", accessorKey: "building_id" },
  { header: "building_cost", accessorKey: "building_cost" },
];
export const building_investment = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "owner_id", accessorKey: "owner_id" },
  { header: "investment_start_date", accessorKey: "investment_start_date" },
  { header: "investment_end_date", accessorKey: "investment_end_date" },
  { header: "terminating_tenancies", accessorKey: "terminating_tenancies" },
  { header: "investment_value", accessorKey: "investment_value" },
  { header: "gen_entries", accessorKey: "gen_entries" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "currency_val", accessorKey: "currency_val" },
  { header: "tenants", accessorKey: "tenants" },
  { header: "renters_insurance", accessorKey: "renters_insurance" },
];
export const building_pictures = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "picture", accessorKey: "picture" },
  { header: "building_id", accessorKey: "building_id" },
];
export const building_real_estate_development = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "account_id", accessorKey: "account_id" },
  { header: "create_within_id", accessorKey: "create_within_id" },
  { header: "building_receipt", accessorKey: "building_receipt" },
  { header: "received_date", accessorKey: "received_date" },
  { header: "amount", accessorKey: "amount" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "currency_val", accessorKey: "currency_val" },
  { header: "note", accessorKey: "note" },
  { header: "building_id", accessorKey: "building_id" },
];
export const building_real_estate_management = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "owner_id", accessorKey: "owner_id" },
  { header: "commission_rate", accessorKey: "commission_rate" },
  { header: "revenue_id", accessorKey: "revenue_id" },
];

// ==== End Cards

// ==== Start accounting_voucher

export const accounting_voucher_grid_data = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "account_id", accessorKey: "account_id" },
  { header: "debit", accessorKey: "debit" },
  { header: "credit", accessorKey: "credit" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "obverse_account_id", accessorKey: "obverse_account_id" },
  { header: "voucher_main_data_id", accessorKey: "voucher_main_data_id" },
  { header: "note", accessorKey: "note" },
];

export const accounting_voucher_main_data = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "note", accessorKey: "note" },
  { header: "debit", accessorKey: "debit" },
  { header: "credit", accessorKey: "credit" },
  { header: "feedback", accessorKey: "feedback" },
  { header: "seller_id", accessorKey: "seller_id" },
  { header: "connect_with", accessorKey: "connect_with" },
  { header: "debit_amount", accessorKey: "debit_amount" },
  { header: "debit_total", accessorKey: "debit_total" },
  { header: "credit_total", accessorKey: "credit_total" },
  { header: "credit_amount", accessorKey: "credit_amount" },
  { header: "account_id", accessorKey: "account_id" },
  { header: "sms", accessorKey: "sms" },
];

export const accounting_voucher_pattern = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "code", accessorKey: "code" },
  { header: "name", accessorKey: "name" },
  { header: "list_name", accessorKey: "list_name" },
  { header: "default_account_id", accessorKey: "default_account_id" },
  { header: "shortcut_key", accessorKey: "shortcut_key" },
  { header: "auto_transfer_entry", accessorKey: "auto_transfer_entry" },
  { header: "required_cost_center", accessorKey: "required_cost_center" },
  { header: "required_statement", accessorKey: "required_statement" },
  {
    header: "default_print_folder_path",
    accessorKey: "default_print_folder_path",
  },
  { header: "show_debit_field", accessorKey: "show_debit_field" },
  { header: "show_credit_field", accessorKey: "show_credit_field" },
  { header: "debit_field_label", accessorKey: "debit_field_label" },
  { header: "credit_field_label", accessorKey: "credit_field_label" },
  { header: "show_currency", accessorKey: "show_currency" },
  { header: "show_cost_center", accessorKey: "show_cost_center" },
  { header: "show_note", accessorKey: "show_note" },
  { header: "odd_table_color", accessorKey: "odd_table_color" },
  { header: "even_table_color", accessorKey: "even_table_color" },
  { header: "sms", accessorKey: "sms" },
  {
    header: "move_account_cost_center",
    accessorKey: "move_account_cost_center",
  },
];

export const accounting_voucher_pictures = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "picture", accessorKey: "picture" },
  {
    header: "accounting_voucher_main_id",
    accessorKey: "accounting_voucher_main_id",
  },
];

// ==== End accounting_voucher
// ==== Start apartment

export const apartment = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "building_id", accessorKey: "building_id" },
  { header: "apartment_number", accessorKey: "apartment_number" },
  { header: "floor", accessorKey: "floor" },
  { header: "type", accessorKey: "type" },
  { header: "description", accessorKey: "description" },
  { header: "category", accessorKey: "category" },
  { header: "area", accessorKey: "area" },
  { header: "area_unit", accessorKey: "area_unit" },
  { header: "view", accessorKey: "view" },
  { header: "bathroom_count", accessorKey: "bathroom_count" },
  { header: "balcony_count", accessorKey: "balcony_count" },
  { header: "has_lawsuit", accessorKey: "has_lawsuit" },
  { header: "main_cost_center_id", accessorKey: "main_cost_center_id" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "property_type", accessorKey: "property_type" },
  { header: "water_meter", accessorKey: "water_meter" },
  { header: "electricity_meter", accessorKey: "electricity_meter" },
  { header: "statement", accessorKey: "statement" },
  { header: "x_index", accessorKey: "x_index" },
  { header: "y_index", accessorKey: "y_index" },
  { header: "room_count", accessorKey: "room_count" },
  { header: "property_values_id", accessorKey: "property_values_id" },
  { header: "hex", accessorKey: "hex" },
  { header: "cost_price", accessorKey: "cost_price" },
  { header: "amount_paid", accessorKey: "amount_paid" },
  { header: "cost_currency_id", accessorKey: "cost_currency_id" },
  { header: "note", accessorKey: "note" },
];

export const apartment_pictures = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "apartment_id", accessorKey: "apartment_id" },
  { header: "picture", accessorKey: "picture" },
];
export const apartment_property_values = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "area", accessorKey: "area" },
  { header: "area_unit", accessorKey: "area_unit" },
  { header: "view", accessorKey: "view" },
  { header: "bathroom_count", accessorKey: "bathroom_count" },
  { header: "balcony_count", accessorKey: "balcony_count" },
  { header: "property_type", accessorKey: "property_type" },
  { header: "note", accessorKey: "note" },
  { header: "room_count", accessorKey: "room_count" },
  { header: "hex", accessorKey: "hex" },
];
export const apartment_rental_price = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "apartment_id", accessorKey: "apartment_id" },
  { header: "date", accessorKey: "date" },
  { header: "price", accessorKey: "price" },
  { header: "currency_id", accessorKey: "currency_id" },
];
export const apartment_selling_price = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "apartment_id", accessorKey: "apartment_id" },
  { header: "date", accessorKey: "date" },
  { header: "price", accessorKey: "price" },
  { header: "currency_id", accessorKey: "currency_id" },
];
// ==== End apartment

// contract
export const contract = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "number", accessorKey: "number" },
  { header: "feedback", accessorKey: "feedback" },
  { header: "lawsuit", accessorKey: "lawsuit" },
  { header: "client_id", accessorKey: "client_id" },
  { header: "building_id", accessorKey: "building_id" },
  { header: "apartment_id", accessorKey: "apartment_id" },
  { header: "description", accessorKey: "description" },
  { header: "lessor_id", accessorKey: "lessor_id" },
  { header: "seller_id", accessorKey: "seller_id" },
  { header: "trade_name", accessorKey: "trade_name" },
  { header: "nationality", accessorKey: "nationality" },
  { header: "work_phone", accessorKey: "work_phone" },
  { header: "phono", accessorKey: "phono" },
  { header: "area", accessorKey: "area" },
  { header: "status", accessorKey: "status" },
  { header: "date", accessorKey: "date" },
  { header: "contract_place", accessorKey: "contract_place" },
  { header: "rental_period_text", accessorKey: "rental_period_text" },
  { header: "rent_type", accessorKey: "rent_type" },
  { header: "contract_status", accessorKey: "contract_status" },
  { header: "aprtment_status", accessorKey: "aprtment_status" },
  { header: "ownership", accessorKey: "ownership" },
  { header: "renting_purpose", accessorKey: "renting_purpose" },
  { header: "resident_count", accessorKey: "resident_count" },
  { header: "payment_method", accessorKey: "payment_method" },
  { header: "previous_contract_count", accessorKey: "previous_contract_count" },
  { header: "current_contract_count", accessorKey: "current_contract_count" },
  { header: "current_contract_count", accessorKey: "current_contract_count" },
  { header: "contract_type", accessorKey: "contract_type" },
  { header: "contract_value", accessorKey: "contract_value" },
  { header: "monthly_value", accessorKey: "monthly_value" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "currency_val", accessorKey: "currency_val" },
  { header: "discount_rate", accessorKey: "discount_rate" },
  { header: "discount_value", accessorKey: "discount_value" },
  { header: "final_price", accessorKey: "final_price" },
  { header: "discount_account_id", accessorKey: "discount_account_id" },
  { header: "previous_insurance", accessorKey: "previous_insurance" },
  {
    header: "current_insurance_percentage",
    accessorKey: "current_insurance_percentage",
  },
  { header: "current_insurance_value", accessorKey: "current_insurance_value" },
  { header: "contract_price", accessorKey: "contract_price" },
  { header: "contract_validate", accessorKey: "contract_validate" },
  { header: "electricity_insurance", accessorKey: "electricity_insurance" },
  { header: "last_meter_reading", accessorKey: "last_meter_reading" },
  { header: "contract_duration", accessorKey: "contract_duration" },
  { header: "start_date", accessorKey: "start_date" },
  { header: "end_date", accessorKey: "end_date" },
  { header: "payment_type", accessorKey: "payment_type" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "revenue_account_id", accessorKey: "revenue_account_id" },
  { header: "customer_account_id", accessorKey: "customer_account_id" },
  { header: "insurance_account_id", accessorKey: "insurance_account_id" },
  {
    header: "contract_price_account_id",
    accessorKey: "contract_price_account_id",
  },
  {
    header: "contract_validate_account_id",
    accessorKey: "contract_validate_account_id",
  },
  { header: "other_fees", accessorKey: "other_fees" },
  { header: "fee_revenue_account_id", accessorKey: "fee_revenue_account_id" },
  { header: "custom_duration_value", accessorKey: "custom_duration_value" },
  { header: "commission_percentage", accessorKey: "commission_percentage" },
  { header: "commission_value", accessorKey: "commission_value" },
  { header: "commission_account_id", accessorKey: "commission_account_id" },
  { header: "commission_note", accessorKey: "commission_note" },
  {
    header: "commission_from_owner_percentage",
    accessorKey: "commission_from_owner_percentage",
  },
  {
    header: "commission_from_owner_value",
    accessorKey: "commission_from_owner_value",
  },
  {
    header: "commission_from_owner_account_id",
    accessorKey: "commission_from_owner_account_id",
  },
  {
    header: "commission_from_owner_note",
    accessorKey: "commission_from_owner_note",
  },
  { header: "contract_terms", accessorKey: "contract_terms" },
  { header: "termination_date", accessorKey: "termination_date" },
  { header: "owner_total_amount", accessorKey: "owner_total_amount" },
  { header: "new_amount", accessorKey: "new_amount" },
  { header: "round_to", accessorKey: "round_to" },
  { header: "revenue_note", accessorKey: "revenue_note" },
  { header: "fines", accessorKey: "fines" },
  {
    header: "fines_revenue_account_id",
    accessorKey: "fines_revenue_account_id",
  },
  { header: "fine_note", accessorKey: "fine_note" },
  { header: "evacuation_request", accessorKey: "evacuation_request" },
  { header: "evacuation_date", accessorKey: "evacuation_date" },
  { header: "clearance_printed", accessorKey: "clearance_printed" },
  { header: "clearance_printed_date", accessorKey: "clearance_printed_date" },
];

export const contract_cycle = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "contract_id", accessorKey: "contract_id" },
  { header: "contract_documented", accessorKey: "contract_documented" },
  { header: "contract_certifying", accessorKey: "contract_certifying" },
  {
    header: "contract_certifying_body",
    accessorKey: "contract_certifying_body",
  },
  { header: "contract_received", accessorKey: "contract_received" },
  { header: "contract_delivered", accessorKey: "contract_delivered" },
  { header: "contract_signed", accessorKey: "contract_signed" },
  { header: "municipal_license_num", accessorKey: "municipal_license_num" },
  { header: "municipal_license_from", accessorKey: "municipal_license_from" },
  { header: "municipal_license_to", accessorKey: "municipal_license_to" },
  { header: "license_num", accessorKey: "license_num" },
  { header: "license_from", accessorKey: "license_from" },
  { header: "license_to", accessorKey: "license_to" },
  { header: "civil_license_num", accessorKey: "civil_license_num" },
  { header: "civil_license_from", accessorKey: "civil_license_from" },
  { header: "civil_license_to", accessorKey: "civil_license_to" },
];

export const contract_financial = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "contract_id", accessorKey: "contract_id" },
  { header: "contract_type", accessorKey: "contract_type" },
  { header: "contract_value", accessorKey: "contract_value" },
  { header: "monthly_value", accessorKey: "monthly_value" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "currency_val", accessorKey: "currency_val" },
  { header: "discount_rate", accessorKey: "discount_rate" },
  { header: "discount_value", accessorKey: "discount_value" },
  { header: "final_price", accessorKey: "final_price" },
  { header: "discount_account_id", accessorKey: "discount_account_id" },
  { header: "previous_securing", accessorKey: "previous_securing" },
  {
    header: "current_securing_percentage",
    accessorKey: "current_securing_percentage",
  },
  { header: "current_securing_value", accessorKey: "current_securing_value" },
  { header: "contract_price", accessorKey: "contract_price" },
  { header: "contract_validate", accessorKey: "contract_validate" },
  { header: "electricity_insurance", accessorKey: "electricity_insurance" },
  { header: "last_meter_reading", accessorKey: "last_meter_reading" },
  { header: "contract_duration", accessorKey: "contract_duration" },
  { header: "start_date", accessorKey: "start_date" },
  { header: "end_date", accessorKey: "end_date" },
  { header: "paid_type", accessorKey: "paid_type" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "revenue_account_id", accessorKey: "revenue_account_id" },
  { header: "customer_account_id", accessorKey: "customer_account_id" },
  { header: "insurance_account_id", accessorKey: "insurance_account_id" },
  {
    header: "contract_price_account_id",
    accessorKey: "contract_price_account_id",
  },
  {
    header: "contract_validate_account_id",
    accessorKey: "contract_validate_account_id",
  },
  {
    header: "contract_validate_account_id",
    accessorKey: "contract_validate_account_id",
  },
  { header: "other_fees", accessorKey: "other_fees" },
  { header: "fee_revenue_account_id", accessorKey: "fee_revenue_account_id" },
];

export const contract_linked_parking = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "contract_id", accessorKey: "contract_id" },
  { header: "building_id", accessorKey: "building_id" },
  { header: "account_id", accessorKey: "account_id" },
  { header: "main_contract_id", accessorKey: "main_contract_id" },
];

export const contract_pattern = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "contract_type", accessorKey: "contract_type" },
  { header: "code", accessorKey: "code" },
  { header: "name", accessorKey: "name" },
  { header: "list_name", accessorKey: "list_name" },
  { header: "shortcut_key", accessorKey: "shortcut_key" },
  { header: "gen_enteries", accessorKey: "gen_enteries" },
  { header: "auto_gen_enteries", accessorKey: "auto_gen_enteries" },
  { header: "auto_transfer_entry", accessorKey: "auto_transfer_entry" },
  { header: "record_date_created", accessorKey: "record_date_created" },
  {
    header: "new_contract_without_terminating",
    accessorKey: "new_contract_without_terminating",
  },
  { header: "insurance_required", accessorKey: "insurance_required" },
  {
    header: "default_revenue_account_id",
    accessorKey: "default_revenue_account_id",
  },
  {
    header: "default_commission_from_client_account_id",
    accessorKey: "default_commission_from_client_account_id",
  },
  {
    header: "default_commission_from_owner_account_id",
    accessorKey: "default_commission_from_owner_account_id",
  },
  {
    header: "default_contract_price_revenue_account_id",
    accessorKey: "default_contract_price_revenue_account_id",
  },
  {
    header: "default_contract_ratification_revenue_account_id",
    accessorKey: "default_contract_ratification_revenue_account_id",
  },
  {
    header: "default_fines_revenue_account_id",
    accessorKey: "default_fines_revenue_account_id",
  },
  {
    header: "default_fee_revenue_account_id",
    accessorKey: "default_fee_revenue_account_id",
  },
  {
    header: "default_discount_account_id",
    accessorKey: "default_discount_account_id",
  },
  {
    header: "default_commission_From_client_Percentage",
    accessorKey: "default_commission_From_client_Percentage",
  },
  {
    header: "default_insurance_account_id",
    accessorKey: "default_insurance_account_id",
  },
  {
    header: "move_cost_center_with_revenue",
    accessorKey: "move_cost_center_with_revenue",
  },
  {
    header: "move_cost_center_with_tenant",
    accessorKey: "move_cost_center_with_tenant",
  },
  {
    header: "move_cost_center_with_insurance_revenue",
    accessorKey: "move_cost_center_with_insurance_revenue",
  },
  {
    header: "move_cost_center_with_price_revenue",
    accessorKey: "move_cost_center_with_price_revenue",
  },
  {
    header: "move_cost_center_with_intention_ratifying",
    accessorKey: "move_cost_center_with_intention_ratifying",
  },
  {
    header: "move_cost_center_with_other_fee",
    accessorKey: "move_cost_center_with_other_fee",
  },
  {
    header: "move_cost_center_with_commission_client",
    accessorKey: "move_cost_center_with_commission_client",
  },
  {
    header: "move_cost_center_with_commission_owner",
    accessorKey: "move_cost_center_with_commission_owner",
  },
  ,
  {
    header: "move_cost_center_with_contract_fines_terminating",
    accessorKey: "move_cost_center_with_contract_fines_terminating",
  },
  {
    header: "move_cost_center_with_decisiveness_granted",
    accessorKey: "move_cost_center_with_decisiveness_granted",
  },
  { header: "contract_terms", accessorKey: "contract_terms" },
  { header: "folder_default_printing", accessorKey: "folder_default_printing" },
  {
    header: "folder_print_communications",
    accessorKey: "folder_print_communications",
  },
  { header: "folder_print_clearance", accessorKey: "folder_print_clearance" },
  {
    header: "move_cost_center_with_contract_proceeds_rerminating",
    accessorKey: "move_cost_center_with_contract_proceeds_rerminating",
  },
  { header: "sms", accessorKey: "sms" },
];

export const contract_pictures = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "contract_id", accessorKey: "contract_id" },
  { header: "picture", accessorKey: "picture" },
];

export const contract_receipt_number = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "contract_id", accessorKey: "contract_id" },
  { header: "receipt_number", accessorKey: "receipt_number" },
  { header: "receipt_date", accessorKey: "receipt_date" },
  { header: "receipt_statement", accessorKey: "receipt_statement" },
];

// ==== Start financial
export const financial_data = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "internal_number", accessorKey: "internal_number" },
  { header: "amount", accessorKey: "amount" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "seller_id", accessorKey: "seller_id" },
  { header: "received_from", accessorKey: "received_from" },
  { header: "beneficiary_name", accessorKey: "beneficiary_name" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "note", accessorKey: "note" },
  { header: "date", accessorKey: "date" },
  { header: "due_date", accessorKey: "due_date" },
  { header: "due_end_date", accessorKey: "due_end_date" },
  { header: "without_due_date", accessorKey: "without_due_date" },
  { header: "bank_id", accessorKey: "bank_id" },
  { header: "obverse_account_id", accessorKey: "obverse_account_id" },
  { header: "obverse_account_note", accessorKey: "obverse_account_note" },
  { header: "observe_cost_center_id", accessorKey: "observe_cost_center_id" },
  { header: "note1", accessorKey: "note1" },
  { header: "note2", accessorKey: "note2" },
  { header: "deport_status", accessorKey: "deport_status" },
  { header: "collection_status", accessorKey: "collection_status" },
  {
    header: "partial_collection_status",
    accessorKey: "partial_collection_status",
  },
  { header: "endors_status", accessorKey: "endors_status" },
  { header: "return_status", accessorKey: "return_status" },
  { header: "deposit_status", accessorKey: "deposit_status" },
  { header: "clipboard_number", accessorKey: "clipboard_number" },
  { header: "clipboard_date", accessorKey: "clipboard_date" },
  {
    header: "clipboard_receipt_number",
    accessorKey: "clipboard_receipt_number",
  },
  {
    header: "clipboard_internal_number",
    accessorKey: "clipboard_internal_number",
  },
];

export const financial_patterns = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "paperType", accessorKey: "paperType" },
  { header: "code", accessorKey: "code" },
  { header: "name", accessorKey: "name" },
  { header: "list_name", accessorKey: "list_name" },
  { header: "default_account_id", accessorKey: "default_account_id" },
  { header: "shortcut_key", accessorKey: "shortcut_key" },
  { header: "gen_entries", accessorKey: "gen_entries" },
  { header: "auto_gen_entries", accessorKey: "auto_gen_entries" },
  { header: "auto_transfer_entry", accessorKey: "auto_transfer_entry" },
  { header: "default_print_folder", accessorKey: "default_print_folder" },
  { header: "deportable", accessorKey: "deportable" },
  { header: "deportable_gen_enteries", accessorKey: "deportable_gen_enteries" },
  {
    header: "deportable_auto_gen_enteries",
    accessorKey: "deportable_auto_gen_enteries",
  },
  {
    header: "deportable_auto_transfer_entry",
    accessorKey: "deportable_auto_transfer_entry",
  },
  { header: "deportable_default_date", accessorKey: "deportable_default_date" },
  {
    header: "deportable_default_account_is_onwer",
    accessorKey: "deportable_default_account_is_onwer",
  },
  {
    header: "deportable_default_observe_account_is_client",
    accessorKey: "deportable_default_observe_account_is_client",
  },
  {
    header: "deportable_move_cost_center_debit",
    accessorKey: "deportable_move_cost_center_debit",
  },
  {
    header: "deportable_move_cost_center_credit",
    accessorKey: "deportable_move_cost_center_credit",
  },
  {
    header: "deportable_debit_account_id",
    accessorKey: "deportable_debit_account_id",
  },
  {
    header: "deportable_credit_account_id",
    accessorKey: "deportable_credit_account_id",
  },
  { header: "collection", accessorKey: "collection" },

  { header: "collection_gen_enteries", accessorKey: "collection_gen_enteries" },
  {
    header: "collection_auto_gen_enteries",
    accessorKey: "collection_auto_gen_enteries",
  },
  {
    header: "collection_auto_transfer_entry",
    accessorKey: "collection_auto_transfer_entry",
  },
  { header: "collection_default_date", accessorKey: "collection_default_date" },
  {
    header: "collection_default_account_is_building_bank",
    accessorKey: "collection_default_account_is_building_bank",
  },
  {
    header: "collection_default_observe_account_is_client",
    accessorKey: "collection_default_observe_account_is_client",
  },
  {
    header: "collection_move_cost_center_debit",
    accessorKey: "collection_move_cost_center_debit",
  },
  {
    header: "collection_move_cost_center_credit",
    accessorKey: "collection_move_cost_center_credit",
  },
  {
    header: "collection_credit_account_id",
    accessorKey: "collection_credit_account_id",
  },
  {
    header: "collection_debit_account_id",
    accessorKey: "collection_debit_account_id",
  },
  { header: "commission_type", accessorKey: "commission_type" },
  {
    header: "commission_amount_from_building",
    accessorKey: "commission_amount_from_building",
  },
  {
    header: "commission_default_account_is_building_owner",
    accessorKey: "commission_default_account_is_building_owner",
  },
  {
    header: "commission_default_observe_is_revenue_account",
    accessorKey: "commission_default_observe_is_revenue_account",
  },
  {
    header: "commission_move_cost_center_debit",
    accessorKey: "commission_move_cost_center_debit",
  },
  {
    header: "commission_move_cost_center_credit",
    accessorKey: "commission_move_cost_center_credit",
  },
  {
    header: "commission_debit_account_id",
    accessorKey: "commission_debit_account_id",
  },
  {
    header: "commission_credit_account_id",
    accessorKey: "commission_credit_account_id",
  },
  { header: "partial_collection", accessorKey: "partial_collection" },
  { header: "partial_gen_enteries", accessorKey: "partial_gen_enteries" },
  {
    header: "partial_auto_gen_enteries",
    accessorKey: "partial_auto_gen_enteries",
  },
  {
    header: "partial_auto_transfer_entry",
    accessorKey: "partial_auto_transfer_entry",
  },
  {
    header: "partial_default_account_is_building_bank",
    accessorKey: "partial_default_account_is_building_bank",
  },
  {
    header: "partial_default_observe_account_is_client",
    accessorKey: "partial_default_observe_account_is_client",
  },
  {
    header: "partial_move_cost_center_debit",
    accessorKey: "partial_move_cost_center_debit",
  },
  {
    header: "partial_move_cost_center_credit",
    accessorKey: "partial_move_cost_center_credit",
  },
  {
    header: "partial_debit_account_id",
    accessorKey: "partial_debit_account_id",
  },
  {
    header: "partial_credit_account_id",
    accessorKey: "partial_credit_account_id",
  },
  { header: "endorsable", accessorKey: "endorsable" },
  {
    header: "endorsement_gen_enteries",
    accessorKey: "endorsement_gen_enteries",
  },
  {
    header: "endorsement_auto_gen_enteries",
    accessorKey: "endorsement_auto_gen_enteries",
  },
  {
    header: "endorsement_auto_transfer_entry",
    accessorKey: "endorsement_auto_transfer_entry",
  },
  {
    header: "endorsement_default_date",
    accessorKey: "endorsement_default_date",
  },
  {
    header: "endorsement_move_cost_center_debit",
    accessorKey: "endorsement_move_cost_center_debit",
  },
  {
    header: "endorsement_move_cost_center_credit",
    accessorKey: "endorsement_move_cost_center_credit",
  },
  {
    header: "endorsement_debit_account_id",
    accessorKey: "endorsement_debit_account_id",
  },
  {
    header: "endorsement_credit_account_id",
    accessorKey: "endorsement_credit_account_id",
  },
  { header: "returnable", accessorKey: "returnable" },
  { header: "returnable_gen_enteries", accessorKey: "returnable_gen_enteries" },
  {
    header: "returnable_auto_gen_enteries",
    accessorKey: "returnable_auto_gen_enteries",
  },
  {
    header: "returnable_auto_transfer_entry",
    accessorKey: "returnable_auto_transfer_entry",
  },
  { header: "returnable_default_date", accessorKey: "returnable_default_date" },
  {
    header: "returnable_default_account_is_client",
    accessorKey: "returnable_default_account_is_client",
  },
  {
    header: "returnable_default_observe_account_is_building_bank",
    accessorKey: "returnable_default_observe_account_is_building_bank",
  },
  {
    header: "returnable_active_operations",
    accessorKey: "returnable_active_operations",
  },
  {
    header: "returnable_move_cost_center_debit",
    accessorKey: "returnable_move_cost_center_debit",
  },
  {
    header: "returnable_move_cost_center_credit",
    accessorKey: "returnable_move_cost_center_credit",
  },
  {
    header: "returnable_debit_account_id",
    accessorKey: "returnable_debit_account_id",
  },
  {
    header: "returnable_credit_account_id",
    accessorKey: "returnable_credit_account_id",
  },
  {
    header: "returnFeedefault_account_is_client",
    accessorKey: "returnFeedefault_account_is_client",
  },
  {
    header: "returnFeeDebit_account_id",
    accessorKey: "returnFeeDebit_account_id",
  },
  {
    header: "returnFeeCredit_account_id",
    accessorKey: "returnFeeCredit_account_id",
  },
  { header: "statement_account", accessorKey: "statement_account" },
  {
    header: "statement_observe_account",
    accessorKey: "statement_observe_account",
  },
  { header: "statement_leaving", accessorKey: "statement_leaving" },
  { header: "statement_endorsement", accessorKey: "statement_endorsement" },
  { header: "statement_collection", accessorKey: "statement_collection" },
  { header: "statement_return", accessorKey: "statement_return" },
  { header: "statement_partial", accessorKey: "statement_partial" },
  { header: "sms", accessorKey: "sms" },
];
// ==== End financial

// ==== Start Installment
export const installment = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "contract_id", accessorKey: "contract_id" },
  { header: "total_amount", accessorKey: "total_amount" },
  { header: "first_batch", accessorKey: "first_batch" },
  { header: "payment_date", accessorKey: "payment_date" },
  { header: "voucher_pattern_id", accessorKey: "voucher_pattern_id" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "currency_val", accessorKey: "currency_val" },
  { header: "rest_amount", accessorKey: "rest_amount" },
  { header: "client_id", accessorKey: "client_id" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "observe_account_id", accessorKey: "observe_account_id" },
  { header: "check_pattern_id", accessorKey: "check_pattern_id" },
  { header: "installments_numbers", accessorKey: "installments_numbers" },
  { header: "each_number", accessorKey: "each_number" },
  { header: "each_duration", accessorKey: "each_duration" },
  { header: "first_installment_date", accessorKey: "first_installment_date" },
  { header: "installment_price", accessorKey: "installment_price" },
  { header: "final_payment", accessorKey: "final_payment" },
  { header: "begin_number", accessorKey: "begin_number" },
  { header: "installment_date", accessorKey: "installment_date" },
  { header: "installment_statement", accessorKey: "installment_statement" },
  { header: "beneficiary_name", accessorKey: "beneficiary_name" },
  { header: "gen_entries_type", accessorKey: "gen_entries_type" },
  { header: "bank_id", accessorKey: "bank_id" },
];
export const installment_data = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "due_date", accessorKey: "due_date" },
  { header: "number", accessorKey: "number" },
  { header: "amount", accessorKey: "amount" },
  { header: "bank_id", accessorKey: "bank_id" },
  { header: "client_id", accessorKey: "client_id" },
  { header: "observe_account_id", accessorKey: "observe_account_id" },
  { header: "statement", accessorKey: "statement" },
  { header: "end_due_date", accessorKey: "end_due_date" },
  { header: "beneficiary_name", accessorKey: "beneficiary_name" },
  { header: "installment_id", accessorKey: "installment_id" },
];
// ==== End Installment

// ==== Start Operations
export const op_collection = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "feedback", accessorKey: "feedback" },
  { header: "amount", accessorKey: "amount" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "debit_account_id", accessorKey: "debit_account_id" },
  { header: "credit_account_id", accessorKey: "credit_account_id" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "note", accessorKey: "note" },
  { header: "commission_value", accessorKey: "commission_value" },
  { header: "commission_percentage", accessorKey: "commission_percentage" },
  { header: "commission_debit_id", accessorKey: "commission_debit_id" },
  { header: "commission_credit_id", accessorKey: "commission_credit_id" },
  {
    header: "commission_cost_center_id",
    accessorKey: "commission_cost_center_id",
  },
  { header: "commission_note", accessorKey: "commission_note" },
  {
    header: "accounting_voucher_main_data_id",
    accessorKey: "accounting_voucher_main_data_id",
  },
];

export const op_deportation = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "feedback", accessorKey: "feedback" },
  { header: "amount", accessorKey: "amount" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "debit_account_id", accessorKey: "debit_account_id" },
  { header: "credit_account_id", accessorKey: "credit_account_id" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "note", accessorKey: "note" },
  {
    header: "accounting_voucher_main_data_id",
    accessorKey: "accounting_voucher_main_data_id",
  },
];
export const op_return = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "feedback", accessorKey: "feedback" },
  { header: "amount", accessorKey: "amount" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "debit_account_id", accessorKey: "debit_account_id" },
  { header: "credit_account_id", accessorKey: "credit_account_id" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "note", accessorKey: "note" },
  { header: "reason", accessorKey: "reason" },
  {
    header: "accounting_voucher_main_data_id",
    accessorKey: "accounting_voucher_main_data_id",
  },
];

// ==== end Operations

// ==== Start Voucher
export const voucher_grid_data = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "account_id", accessorKey: "account_id" },
  { header: "debit", accessorKey: "debit" },
  { header: "credit", accessorKey: "credit" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "voucher_main_data_id", accessorKey: "voucher_main_data_id" },
  { header: "note", accessorKey: "note" },
];

export const voucher_main_data = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "note", accessorKey: "note" },
  { header: "debit", accessorKey: "debit" },
  { header: "credit", accessorKey: "credit" },
  { header: "difference", accessorKey: "difference" },
];

export const voucher_pattern = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "code", accessorKey: "code" },
  { header: "name", accessorKey: "name" },
  { header: "list_name", accessorKey: "list_name" },
  { header: "default_account_id", accessorKey: "default_account_id" },
  { header: "shortcut_key", accessorKey: "shortcut_key" },
  { header: "auto_gen_entries", accessorKey: "auto_gen_entries" },
  { header: "auto_transfer_entry", accessorKey: "auto_transfer_entry" },
  { header: "gen_entries", accessorKey: "gen_entries" },
  { header: "generate_records", accessorKey: "generate_records" },
  { header: "show_contract_field", accessorKey: "show_contract_field" },
  {
    header: "show_contract_cost_center",
    accessorKey: "show_contract_cost_center",
  },
  { header: "required_cost_center", accessorKey: "required_cost_center" },
  { header: "required_statement", accessorKey: "required_statement" },
  {
    header: "default_print_folder_path",
    accessorKey: "default_print_folder_path",
  },
  { header: "show_debit_field", accessorKey: "show_debit_field" },
  { header: "show_credit_field", accessorKey: "show_credit_field" },
  { header: "debit_field_label", accessorKey: "debit_field_label" },
  { header: "credit_field_label", accessorKey: "credit_field_label" },
  { header: "show_currency", accessorKey: "show_currency" },
  { header: "show_cost_center", accessorKey: "show_cost_center" },
  { header: "show_note", accessorKey: "show_note" },
  { header: "odd_table_color", accessorKey: "odd_table_color" },
  { header: "even_table_color", accessorKey: "even_table_color" },
  { header: "sms", accessorKey: "sms" },
  // { header: "mulct_price", accessorKey: "mulct_price" },
  // { header: "mulct_debit_id", accessorKey: "mulct_debit_id" },
  // { header: "mulct_credit_id", accessorKey: "mulct_credit_id" },
  // { header: "mulct_note", accessorKey: "mulct_note" },
];
// ==== End Voucher

// ==== Start Assets
export const assets_group = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "name", accessorKey: "name" },
  { header: "last_name", accessorKey: "last_name" },
  { header: "note", accessorKey: "note" },
  { header: "parent_id", accessorKey: "parent_id" },
];

export const assets = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "number", accessorKey: "number" },
  { header: "assets_group_id", accessorKey: "assets_group_id" },
  { header: "name", accessorKey: "name" },
  { header: "code", accessorKey: "code" },
  { header: "barcode", accessorKey: "barcode" },
  { header: "note", accessorKey: "note" },
  { header: "is_active", accessorKey: "is_active" },
  { header: "assets_area_id", accessorKey: "assets_area_id" },
  { header: "current_assets_area_id", accessorKey: "current_assets_area_id" },
  { header: "state", accessorKey: "state" },
  { header: "origin", accessorKey: "origin" },
];

export const assets_accounts = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "assets_id", accessorKey: "assets_id" },
  { header: "assets_account_id", accessorKey: "assets_account_id" },
  { header: "expense_account_id", accessorKey: "expense_account_id" },
  { header: "depreciation_account_id", accessorKey: "depreciation_account_id" },
  {
    header: "depreciation_Total_account_id",
    accessorKey: "depreciation_Total_account_id",
  },
  { header: "profit_account_id", accessorKey: "profit_account_id" },
  { header: "losses_account_id", accessorKey: "losses_account_id" },
  { header: "evaluation_account_id", accessorKey: "evaluation_account_id" },
];
export const assets_depreciation = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "assets_id", accessorKey: "assets_id" },
  { header: "depreciation_mode", accessorKey: "depreciation_mode" },
  { header: "is_depreciation_monthly", accessorKey: "is_depreciation_monthly" },
  { header: "depreciation_begin_date", accessorKey: "depreciation_begin_date" },
  { header: "age", accessorKey: "age" },
  { header: "depreciation_avg", accessorKey: "depreciation_avg" },
  { header: "scrap_value", accessorKey: "scrap_value" },
  { header: "old_year_extra", accessorKey: "old_year_extra" },
  { header: "old_year_decrease", accessorKey: "old_year_decrease" },
  { header: "old_year_depreciation", accessorKey: "old_year_depreciation" },
  { header: "old_year_maintenance", accessorKey: "old_year_maintenance" },
];
export const assets_input = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "assets_id", accessorKey: "assets_id" },
  { header: "importer", accessorKey: "importer" },
  { header: "enter_account_id", accessorKey: "enter_account_id" },
  { header: "enter_date", accessorKey: "enter_date" },
  { header: "enter_value", accessorKey: "enter_value" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "enter_cost_center_id", accessorKey: "enter_cost_center_id" },
  {
    header: "enter_credit_Cost_center_id",
    accessorKey: "enter_credit_Cost_center_id",
  },
  { header: "enter_note", accessorKey: "enter_note" },
];
export const assets_maintenance = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "assets_id", accessorKey: "assets_id" },
  { header: "maintenance_contract", accessorKey: "maintenance_contract" },
  { header: "maintenance_begin_date", accessorKey: "maintenance_begin_date" },
  { header: "maintenance_end_date", accessorKey: "maintenance_end_date" },
  { header: "guaranty", accessorKey: "guaranty" },
  { header: "guaranty_begin_date", accessorKey: "guaranty_begin_date" },
  { header: "guaranty_end_date", accessorKey: "guaranty_end_date" },
];
export const assets_sale = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "assets_id", accessorKey: "assets_id" },
  { header: "is_sale", accessorKey: "is_sale" },
  { header: "sale_date", accessorKey: "sale_date" },
  { header: "sale_customer", accessorKey: "sale_customer" },
  { header: "sales_account_id", accessorKey: "sales_account_id" },
  { header: "sale_value", accessorKey: "sale_value" },
  { header: "currency_sale_id", accessorKey: "currency_sale_id" },
  { header: "currency_sale_val", accessorKey: "currency_sale_val" },
  { header: "sale_note", accessorKey: "sale_note" },
];
export const assets_shipping = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "assets_id", accessorKey: "assets_id" },
  { header: "shipping", accessorKey: "shipping" },
  { header: "shipping_no", accessorKey: "shipping_no" },
  { header: "shipping_date", accessorKey: "shipping_date" },
  { header: "arrive_date", accessorKey: "arrive_date" },
  { header: "arrive_place", accessorKey: "arrive_place" },
  { header: "import_permit", accessorKey: "import_permit" },
  { header: "custom_note", accessorKey: "custom_note" },
  { header: "custom_date", accessorKey: "custom_date" },
  { header: "custom_expense", accessorKey: "custom_expense" },
  { header: "shipping_note", accessorKey: "shipping_note" },
];

// ==== End Assets
// ==== Start lawsuit
export const lawsuit = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "contract_id", accessorKey: "contract_id" },
  { header: "start_date", accessorKey: "start_date" },
  { header: "lawsuit_no", accessorKey: "lawsuit_no" },
  { header: "open_date", accessorKey: "open_date" },
  { header: "exec_date", accessorKey: "exec_date" },
  { header: "stop_exec", accessorKey: "stop_exec" },
  { header: "stop_exec_date", accessorKey: "stop_exec_date" },
  { header: "stop_exec_note", accessorKey: "stop_exec_note" },
  { header: "stop_pay_date", accessorKey: "stop_pay_date" },
  { header: "quittance_date", accessorKey: "quittance_date" },
  {
    header: "quittance_electricity_date",
    accessorKey: "quittance_electricity_date",
  },
  { header: "rent", accessorKey: "rent" },
  { header: "is_ended", accessorKey: "is_ended" },
  { header: "end_date", accessorKey: "end_date" },
  { header: "exe_no", accessorKey: "exe_no" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "currency_val", accessorKey: "currency_val" },
  { header: "lawyer_rent", accessorKey: "lawyer_rent" },
  { header: "lawyer_rent_date", accessorKey: "lawyer_rent_date" },
  { header: "lawyer_entry", accessorKey: "lawyer_entry" },
  { header: "lawyer_debit_account_id", accessorKey: "lawyer_debit_account_id" },
  {
    header: "lawyer_credit_account_id",
    accessorKey: "lawyer_credit_account_id",
  },
  { header: "lawyer_note", accessorKey: "lawyer_note" },
  { header: "maintenance_rent", accessorKey: "maintenance_rent" },
  { header: "maintenance_rent_date", accessorKey: "maintenance_rent_date" },
  { header: "maintenance_entry", accessorKey: "maintenance_entry" },
  {
    header: "maintenance_debit_account_id",
    accessorKey: "maintenance_debit_account_id",
  },
  {
    header: "maintenance_credit_account_id",
    accessorKey: "maintenance_credit_account_id",
  },
  { header: "maintenance_note", accessorKey: "maintenance_note" },
  { header: "furniture", accessorKey: "furniture" },
  { header: "furniture_date", accessorKey: "furniture_date" },
  { header: "furniture_entry", accessorKey: "furniture_entry" },
  {
    header: "furniture_debit_account_id",
    accessorKey: "furniture_debit_account_id",
  },
  {
    header: "furniture_credit_account_id",
    accessorKey: "furniture_credit_account_id",
  },
  { header: "furniture_note", accessorKey: "furniture_note" },
  { header: "note", accessorKey: "note" },
  { header: "entry_id1", accessorKey: "entry_id1" },
  { header: "entry_id2", accessorKey: "entry_id2" },
  { header: "entry_id3", accessorKey: "entry_id3" },
];
// ==== End lawsuit

// ==== Start maintenance_order
export const maintenance_order = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "maintenance_order_no", accessorKey: "maintenance_order_no" },
  { header: "complaint_id", accessorKey: "complaint_id" },
  { header: "maintenance_worker_id", accessorKey: "maintenance_worker_id" },
  { header: "work_kind", accessorKey: "work_kind" },
  { header: "start_date", accessorKey: "start_date" },
  { header: "end_expected_date", accessorKey: "end_expected_date" },
  { header: "close_date", accessorKey: "close_date" },
  { header: "order_state", accessorKey: "order_state" },
  { header: "reason_not_realized", accessorKey: "reason_not_realized" },
  { header: "convert_to", accessorKey: "convert_to" },
  { header: "convert_note", accessorKey: "convert_note" },
  { header: "realized", accessorKey: "realized" },
  { header: "mat", accessorKey: "mat" },
  { header: "reason", accessorKey: "reason" },
  { header: "repetition", accessorKey: "repetition" },
  { header: "delay", accessorKey: "delay" },
  { header: "delay_reason", accessorKey: "delay_reason" },
  { header: "create_entry", accessorKey: "create_entry" },
  { header: "entry_date", accessorKey: "entry_date" },
  { header: "entry_value", accessorKey: "entry_value" },
  { header: "entry_currency_id", accessorKey: "entry_currency_id" },
  { header: "entry_currency_val", accessorKey: "entry_currency_val" },
  { header: "debit_account_id", accessorKey: "debit_account_id" },
  { header: "credit_account_id", accessorKey: "credit_account_id" },
  { header: "debit_cost_center_id", accessorKey: "debit_cost_center_id" },
  { header: "credit_cost_center_id", accessorKey: "credit_cost_center_id" },
  { header: "entry_note", accessorKey: "entry_note" },
  { header: "note2", accessorKey: "note2" },
];

// ==== End maintenance_order

// ==== Start material
export const material_group = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "code", accessorKey: "code" },
  { header: "name", accessorKey: "name" },
  { header: "last_name", accessorKey: "last_name" },
  { header: "note", accessorKey: "note" },
  { header: "parent_id", accessorKey: "parent_id" },
];
export const materials = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "code", accessorKey: "code" },
  { header: "name", accessorKey: "name" },
  { header: "last_name", accessorKey: "last_name" },
  { header: "unity1", accessorKey: "unity1" },
  { header: "unity2", accessorKey: "unity2" },
  { header: "unity3", accessorKey: "unity3" },
  { header: "barcode1", accessorKey: "barcode1" },
  { header: "barcode2", accessorKey: "barcode2" },
  { header: "barcode3", accessorKey: "barcode3" },
  { header: "def_unity", accessorKey: "def_unity" },
  { header: "unity_fact2", accessorKey: "unity_fact2" },
  { header: "unity_fact3", accessorKey: "unity_fact3" },
  { header: "unity_fix2", accessorKey: "unity_fix2" },
  { header: "unity_fix3", accessorKey: "unity_fix3" },
  { header: "note", accessorKey: "note" },
  { header: "materials_group_guid", accessorKey: "materials_group_guid" },
  { header: "mat_type", accessorKey: "mat_type" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "currency_val", accessorKey: "currency_val" },
  { header: "avg_price", accessorKey: "avg_price" },
  { header: "last_price_date", accessorKey: "last_price_date" },
  { header: "last_price", accessorKey: "last_price" },
  { header: "max_price", accessorKey: "max_price" },
  { header: "sale_avg_price", accessorKey: "sale_avg_price" },
  { header: "sale_last_price_date", accessorKey: "sale_last_price_date" },
  { header: "sale_last_price", accessorKey: "sale_last_price" },
  { header: "sale_max_price", accessorKey: "sale_max_price" },
];

// ==== End material

// ==== Start Parking
export const parking = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "building_id", accessorKey: "building_id" },
  { header: "parking_no", accessorKey: "parking_no" },
  { header: "floor_no", accessorKey: "floor_no" },
  { header: "area", accessorKey: "area" },
  { header: "area_unit", accessorKey: "area_unit" },
  { header: "parking_kind", accessorKey: "parking_kind" },
  { header: "description", accessorKey: "description" },
  { header: "view", accessorKey: "view" },
  { header: "customer_id", accessorKey: "customer_id" },
  { header: "has_lawsuit", accessorKey: "has_lawsuit" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "purchase_date", accessorKey: "purchase_date" },
  { header: "flat_owner", accessorKey: "flat_owner" },
  { header: "note", accessorKey: "note" },
];
export const parking_pictures = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "parking_id", accessorKey: "parking_id" },
  { header: "picture", accessorKey: "picture" },
];
export const parking_price = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "parking_id", accessorKey: "parking_id" },
  { header: "date1", accessorKey: "date1" },
  { header: "print1", accessorKey: "print1" },
  { header: "currency1_id", accessorKey: "currency1_id" },
  { header: "date2", accessorKey: "date2" },
  { header: "prnumber", accessorKey: "prnumber" },
  { header: "currency2_id", accessorKey: "currency2_id" },
  { header: "cost_price", accessorKey: "cost_price" },
  { header: "sale", accessorKey: "sale" },
];

// ==== End Parking

// ==== Start Shop
export const shop = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "building_id", accessorKey: "building_id" },
  { header: "number", accessorKey: "number" },
  { header: "shop_no", accessorKey: "shop_no" },
  { header: "shop_kind", accessorKey: "shop_kind" },
  { header: "description", accessorKey: "description" },
  { header: "x_index", accessorKey: "x_index" },
  { header: "y_index", accessorKey: "y_index" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "class", accessorKey: "class" },
  { header: "area", accessorKey: "area" },
  { header: "area_unit", accessorKey: "area_unit" },
  { header: "view", accessorKey: "view" },
  { header: "license1", accessorKey: "license1" },
  { header: "license2", accessorKey: "license2" },
  { header: "unified_num", accessorKey: "unified_num" },
  { header: "manservant_room", accessorKey: "manservant_room" },
  { header: "driver_room", accessorKey: "driver_room" },
  { header: "has_lawsuit", accessorKey: "has_lawsuit" },
  { header: "customer_id", accessorKey: "customer_id" },
  { header: "customer_owner_id", accessorKey: "customer_owner_id" },
  { header: "flat_owner", accessorKey: "flat_owner" },
  { header: "water_meter", accessorKey: "water_meter" },
  { header: "electricity_meter", accessorKey: "electricity_meter" },
  { header: "bond_type", accessorKey: "bond_type" },
  { header: "bond_no", accessorKey: "bond_no" },
  { header: "bond_date", accessorKey: "bond_date" },
  { header: "type", accessorKey: "type" },
  { header: "note", accessorKey: "note" },
];
export const shop_fixed_assets = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "shop_id", accessorKey: "shop_id" },
  { header: "assets_id", accessorKey: "assets_id" },
  { header: "value", accessorKey: "value" },
  { header: "note", accessorKey: "note" },
];
export const shop_pictures = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "shop_id", accessorKey: "shop_id" },
  { header: "picture", accessorKey: "picture" },
];
export const shop_rent_price = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "shop_id", accessorKey: "shop_id" },
  { header: "price", accessorKey: "price" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "cost_price", accessorKey: "cost_price" },
  { header: "cost_currency_id", accessorKey: "cost_currency_id" },
  { header: "rent", accessorKey: "rent" },
];
export const shop_selling_price = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "shop_id", accessorKey: "shop_id" },
  { header: "price", accessorKey: "price" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "sale", accessorKey: "sale" },
  { header: "sale_currency_id", accessorKey: "sale_currency_id" },
];

// ==== End Shop
// ==== Start Villa
export const villa = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "complex_name", accessorKey: "complex_name" },
  { header: "villa_no", accessorKey: "villa_no" },
  { header: "emirate", accessorKey: "emirate" },
  { header: "area", accessorKey: "area" },
  { header: "suburb", accessorKey: "suburb" },
  { header: "street", accessorKey: "street" },
  { header: "doc_type", accessorKey: "doc_type" },
  { header: "doc_no", accessorKey: "doc_no" },
  { header: "doc_date", accessorKey: "doc_date" },
  { header: "piece_no", accessorKey: "piece_no" },
  { header: "basin_no", accessorKey: "basin_no" },
  { header: "water_meter", accessorKey: "water_meter" },
  { header: "electricity_meter", accessorKey: "electricity_meter" },
  { header: "customer_owner_id", accessorKey: "customer_owner_id" },
  { header: "note", accessorKey: "note" },
];
export const villa_accounts = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "villa_id", accessorKey: "villa_id" },
  { header: "villa_account_id", accessorKey: "villa_account_id" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "account_bank_villa_id", accessorKey: "account_bank_villa_id" },
  { header: "cash_account_id", accessorKey: "cash_account_id" },
  { header: "insurance_account_id", accessorKey: "insurance_account_id" },
  { header: "lessor_id", accessorKey: "lessor_id" },
];
export const villa_assets = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "villa_id", accessorKey: "villa_id" },
  { header: "assets_id", accessorKey: "assets_id" },
  { header: "value", accessorKey: "value" },
  { header: "note", accessorKey: "note" },
];
export const villa_exterior_details = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "villa_id", accessorKey: "villa_id" },
  { header: "wall", accessorKey: "wall" },
  { header: "wall_state", accessorKey: "wall_state" },
  { header: "lighting_count", accessorKey: "lighting_count" },
  { header: "parking_count", accessorKey: "parking_count" },
  { header: "parking_area", accessorKey: "parking_area" },
  { header: "parking_shaded", accessorKey: "parking_shaded" },
  { header: "pool_count", accessorKey: "pool_count" },
  { header: "pool_state", accessorKey: "pool_state" },
  { header: "pool_system", accessorKey: "pool_system" },
  { header: "play_ground_count", accessorKey: "play_ground_count" },
  { header: "play_ground_area", accessorKey: "play_ground_area" },
  { header: "garden_count", accessorKey: "garden_count" },
  { header: "garden_area", accessorKey: "garden_area" },
  { header: "garden_state", accessorKey: "garden_state" },
];
export const villa_interior_details = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "villa_id", accessorKey: "villa_id" },
  { header: "floor_count", accessorKey: "floor_count" },
  { header: "balcony_count", accessorKey: "balcony_count" },
  { header: "room_count", accessorKey: "room_count" },
  { header: "service_room_count", accessorKey: "service_room_count" },
  { header: "other_room_count", accessorKey: "other_room_count" },
  { header: "bath_room_count", accessorKey: "bath_room_count" },
  { header: "stairs_internal", accessorKey: "stairs_internal" },
  { header: "room_state", accessorKey: "room_state" },
  { header: "land_area", accessorKey: "land_area" },
  { header: "land_area_building", accessorKey: "land_area_building" },
  { header: "area_unit", accessorKey: "area_unit" },
  { header: "finishing_state", accessorKey: "finishing_state" },
  { header: "security_system", accessorKey: "security_system" },
  { header: "security_type", accessorKey: "security_type" },
];
export const villa_pictures = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "villa_id", accessorKey: "villa_id" },
  { header: "picture", accessorKey: "picture" },
];
export const villa_rent_price = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "villa_id", accessorKey: "villa_id" },
  { header: "date", accessorKey: "date" },
  { header: "price", accessorKey: "price" },
  { header: "currency_id", accessorKey: "currency_id" },
];
export const villa_selling_price = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "villa_id", accessorKey: "villa_id" },
  { header: "date", accessorKey: "date" },
  { header: "price", accessorKey: "price" },
  { header: "currency_id", accessorKey: "currency_id" },
];
// ==== End Villa

export const store = [
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "code", accessorKey: "code" },
  { header: "name", accessorKey: "name" },
  { header: "last_name", accessorKey: "last_name" },
  { header: "address", accessorKey: "address" },
  { header: "warehouseman", accessorKey: "warehouseman" },
  { header: "note", accessorKey: "note" },
  {
    header: "parent_id",
    accessorKey: "parent_id",
  },
  {
    header: "store_final_id",
    accessorKey: "store_final_id",
  },
];
const bill_group = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "paperType", accessorKey: "paperType" },
  { header: "code", accessorKey: "code" },
  { header: "name", accessorKey: "name" },
  { header: "list_name", accessorKey: "list_name" },
  {
    header: "default_account_id",
    accessorKey: "default_account_id",
  },
  {
    header: "shortcut_key",
    accessorKey: "shortcut_key",
  },
  {
    header: "gen_entries",
    accessorKey: "gen_entries",
  },
  {
    header: "auto_gen_entries",
    accessorKey: "auto_gen_entries",
  },
  {
    header: "auto_transfer_entry",
    accessorKey: "auto_transfer_entry",
  },
  {
    header: "default_print_folder",
    accessorKey: "default_print_folder",
  },

  {
    header: "deportable",
    accessorKey: "deportable",
  },
  {
    header: "deportable_gen_enteries",
    accessorKey: "deportable_gen_enteries",
  },
  {
    header: "deportable_auto_gen_enteries",
    accessorKey: "deportable_auto_gen_enteries",
  },
  {
    header: "deportable_auto_transfer_entry",
    accessorKey: "deportable_auto_transfer_entry",
  },
  {
    header: "deportable_default_date",
    accessorKey: "deportable_default_date",
    type: "number",
  },
  {
    header: "deportable_default_account_is_onwer",
    accessorKey: "deportable_default_account_is_onwer",
  },
  {
    header: "deportable_default_observe_account_is_client",
    accessorKey: "deportable_default_observe_account_is_client",
  },
  {
    header: "deportable_move_cost_center_debit",
    accessorKey: "deportable_move_cost_center_debit",
  },
  {
    header: "deportable_move_cost_center_credit",
    accessorKey: "deportable_move_cost_center_credit",
  },
  {
    header: "deportable_debit_account_id",
    accessorKey: "deportable_debit_account_id",
  },
  {
    header: "deportable_credit_account_id",
    accessorKey: "deportable_credit_account_id",
  },

  {
    header: "collection",
    accessorKey: "collection",
  },

  {
    header: "collection_gen_enteries",
    accessorKey: "collection_gen_enteries",
  },
  {
    header: "collection_auto_gen_enteries",
    accessorKey: "collection_auto_gen_enteries",
  },
  {
    header: "collection_auto_transfer_entry",
    accessorKey: "collection_auto_transfer_entry",
  },
  {
    header: "collection_default_date",
    accessorKey: "collection_default_date",
    type: "number",
  },
  {
    header: "collection_default_account_is_building_bank",
    accessorKey: "collection_default_account_is_building_bank",
  },
  {
    header: "collection_default_observe_account_is_client",
    accessorKey: "collection_default_observe_account_is_client",
  },
  {
    header: "collection_move_cost_center_debit",
    accessorKey: "collection_move_cost_center_debit",
  },
  {
    header: "collection_move_cost_center_credit",
    accessorKey: "collection_move_cost_center_credit",
  },
  {
    header: "collection_credit_account_id",
    accessorKey: "collection_credit_account_id",
  },
  {
    header: "collection_debit_account_id",
    accessorKey: "collection_debit_account_id",
  },

  {
    header: "commission_type",
    accessorKey: "commission_type",
  },
  {
    header: "commission_amount_from_building",
    accessorKey: "commission_amount_from_building",
  },
  {
    header: "commission_default_account_is_building_owner",
    accessorKey: "commission_default_account_is_building_owner",
  },
  {
    header: "commission_default_observe_is_revenue_account",
    accessorKey: "commission_default_observe_is_revenue_account",
  },
  {
    header: "commission_move_cost_center_debit",
    accessorKey: "commission_move_cost_center_debit",
  },
  {
    header: "commission_move_cost_center_credit",
    accessorKey: "commission_move_cost_center_credit",
  },
  {
    header: "commission_debit_account_id",
    accessorKey: "commission_debit_account_id",
  },
  {
    header: "commission_credit_account_id",
    accessorKey: "commission_credit_account_id",
  },

  {
    header: "partial_collection",
    accessorKey: "partial_collection",
  },
  {
    header: "partial_gen_enteries",
    accessorKey: "partial_gen_enteries",
  },
  {
    header: "partial_auto_gen_enteries",
    accessorKey: "partial_auto_gen_enteries",
  },
  {
    header: "partial_auto_transfer_entry",
    accessorKey: "partial_auto_transfer_entry",
  },
  {
    header: "partial_default_account_is_building_bank",
    accessorKey: "partial_default_account_is_building_bank",
  },
  {
    header: "partial_default_observe_account_is_client",
    accessorKey: "partial_default_observe_account_is_client",
  },
  {
    header: "partial_move_cost_center_debit",
    accessorKey: "partial_move_cost_center_debit",
  },
  {
    header: "partial_move_cost_center_credit",
    accessorKey: "partial_move_cost_center_credit",
  },
  {
    header: "partial_debit_account_id",
    accessorKey: "partial_debit_account_id",
  },
  {
    header: "partial_credit_account_id",
    accessorKey: "partial_credit_account_id",
  },

  {
    header: "endorsable",
    accessorKey: "endorsable",
  },
  {
    header: "endorsement_gen_enteries",
    accessorKey: "endorsement_gen_enteries",
  },
  {
    header: "endorsement_auto_gen_enteries",
    accessorKey: "endorsement_auto_gen_enteries",
  },
  {
    header: "endorsement_auto_transfer_entry",
    accessorKey: "endorsement_auto_transfer_entry",
  },
  {
    header: "endorsement_default_date",
    accessorKey: "endorsement_default_date",
    type: "number",
  },
  {
    header: "endorsement_move_cost_center_debit",
    accessorKey: "endorsement_move_cost_center_debit",
  },
  {
    header: "endorsement_move_cost_center_credit",
    accessorKey: "endorsement_move_cost_center_credit",
  },
  {
    header: "endorsement_debit_account_id",
    accessorKey: "endorsement_debit_account_id",
  },
  {
    header: "endorsement_credit_account_id",
    accessorKey: "endorsement_credit_account_id",
  },

  {
    header: "returnable",
    accessorKey: "returnable",
  },
  {
    header: "returnable_gen_enteries",
    accessorKey: "returnable_gen_enteries",
  },
  {
    header: "returnable_auto_gen_enteries",
    accessorKey: "returnable_auto_gen_enteries",
  },
  {
    header: "returnable_auto_transfer_entry",
    accessorKey: "returnable_auto_transfer_entry",
  },
  {
    header: "returnable_default_date",
    accessorKey: "returnable_default_date",
    type: "number",
  },
  {
    header: "returnable_default_account_is_client",
    accessorKey: "returnable_default_account_is_client",
  },
  {
    header: "returnable_default_observe_account_is_building_bank",
    accessorKey: "returnable_default_observe_account_is_building_bank",
  },
  {
    header: "returnable_active_operations",
    accessorKey: "returnable_active_operations",
  },
  {
    header: "returnable_move_cost_center_debit",
    accessorKey: "returnable_move_cost_center_debit",
  },
  {
    header: "returnable_move_cost_center_credit",
    accessorKey: "returnable_move_cost_center_credit",
  },
  {
    header: "returnable_debit_account_id",
    accessorKey: "returnable_debit_account_id",
  },
  {
    header: "returnable_credit_account_id",
    accessorKey: "returnable_credit_account_id",
  },
  {
    header: "return_fee_default_account_is_client",
    accessorKey: "return_fee_default_account_is_client",
  },
  {
    header: "return_fee_debit_account_id",
    accessorKey: "return_fee_debit_account_id",
  },
  {
    header: "return_fee_credit_account_id",
    accessorKey: "return_fee_credit_account_id",
  },

  {
    header: "statement_account",
    accessorKey: "statement_account",
  },
  {
    header: "statement_observe_account",
    accessorKey: "statement_observe_account",
  },
  {
    header: "statement_leaving",
    accessorKey: "statement_leaving",
  },
  {
    header: "statement_endorsement",
    accessorKey: "statement_endorsement",
  },
  {
    header: "statement_collection",
    accessorKey: "statement_collection",
  },
  {
    header: "statement_return",
    accessorKey: "statement_return",
  },
  {
    header: "statement_partial",
    accessorKey: "statement_partial",
  },
];

const bill = [
  { header: "id", accessorKey: "id" },
  { header: "created_at", accessorKey: "created_at" },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  {
    header: "internal_number",
    accessorKey: "internal_number",
  },
  { header: "amount", accessorKey: "amount" },
  {
    header: "currency_id",
    accessorKey: "currency_id",
  },
  {
    header: "seller_id",
    accessorKey: "seller_id",
  },
  {
    header: "received_from",
    accessorKey: "received_from",
  },
  {
    header: "beneficiary_accessorKey",
    accessorKey: "beneficiary_accessorKey",
  },
  {
    header: "cost_center_id",
    accessorKey: "cost_center_id",
  },
  { header: "note", accessorKey: "note" },
  { header: "date", accessorKey: "date" },
  { header: "due_date", accessorKey: "due_date" },
  {
    header: "due_end_date",
    accessorKey: "due_end_date",
  },
  {
    header: "without_due_date",
    accessorKey: "without_due_date",
  },
  {
    header: "bank_id",
    accessorKey: "bank_id",
  },
  {
    header: "obverse_account_id",
    accessorKey: "obverse_account_id",
  },
  {
    header: "obverse_account_note",
    accessorKey: "obverse_account_note",
  },
  {
    header: "observe_cost_center_id",
    accessorKey: "observe_cost_center_id",
  },
  { header: "note1", accessorKey: "note1" },
  { header: "note2", accessorKey: "note2" },
  {
    header: "deport_status",
    accessorKey: "deport_status",
  },
  {
    header: "collection_status",
    accessorKey: "collection_status",
  },
  {
    header: "partial_collection_status",
    accessorKey: "partial_collection_status",
  },
  {
    header: "endors_status",
    accessorKey: "endors_status",
  },
  {
    header: "return_status",
    accessorKey: "return_status",
  },
  {
    header: "deposit_status",
    accessorKey: "deposit_status",
  },
  {
    header: "clipboard_number",
    accessorKey: "clipboard_number",
  },
  {
    header: "clipboard_date",
    accessorKey: "clipboard_date",
  },
  {
    header: "clipboard_receipt_number",
    accessorKey: "clipboard_receipt_number",
  },
  {
    header: "clipboard_internal_number",
    accessorKey: "clipboard_internal_number",
  },
];

const TABLES = {
  account,
  lessor,
  owner,
  seller,
  bank,
  cost_center,
  country,
  currency,
  building,
  building_buying,
  building_editorial_entry,
  building_investment,
  building_pictures,
  building_real_estate_development,
  building_real_estate_management,
  accounting_voucher_grid_data,
  accounting_voucher_main_data,
  accounting_voucher_pattern,
  accounting_voucher_pictures,
  apartment,
  apartment_pictures,
  apartment_property_values,
  apartment_rental_price,
  apartment_selling_price,
  contract,
  contract_cycle,
  contract_financial,
  contract_linked_parking,
  contract_pattern,
  contract_pictures,
  contract_receipt_number,
  financial_data,
  financial_patterns,
  installment,
  installment_data,
  op_collection,
  op_deportation,
  op_return,
  voucher_grid_data,
  voucher_main_data,
  voucher_pattern,
  assets_group,
  assets,
  assets_accounts,
  assets_depreciation,
  assets_input,
  assets_maintenance,
  assets_sale,
  assets_shipping,
  lawsuit,
  maintenance_order,
  material_group,
  materials,
  parking,
  parking_pictures,
  parking_price,
  shop,
  shop_fixed_assets,
  shop_pictures,
  shop_rent_price,
  shop_selling_price,
  villa,
  villa_accounts,
  villa_assets,
  villa_exterior_details,
  villa_interior_details,
  villa_pictures,
  villa_rent_price,
  villa_selling_price,
  user,
  store,
  bill,
  bill_pattern: bill_group,
};

export default function getTableColumns(name) {
  return TABLES[name?.replace("-", "_")] || [];
}
