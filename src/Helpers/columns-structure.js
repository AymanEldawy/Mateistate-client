// ==== Start Cards

import { getValue } from "@testing-library/user-event/dist/utils";
import IndeterminateCheckbox from "Components/StructurePage/Tables/IndeterminateCheckbox";
import { Link } from "react-router-dom";
import { CheckIcon, NotAllowIcon, PaletteIcon } from "./Icons";
import {
  FLAT_PROPERTY_TYPES,
  SELECT_LISTS,
  FLAT_PROPERTY_COLORS,
} from "./constants";

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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/account/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  {
    header: "type",
    accessorKey: "type",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md text-white py-1 px-2 text-xs ${
          getValue() === 1 ? "bg-purple-500" : "bg-orange-400"
        }`}
      >
        {SELECT_LISTS("account_type")?.find((c) => c?.id === getValue())?.name}
      </span>
    ),
  },
  {
    header: "currency",
    accessorKey: "currency_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/currency/${getValue()}`}
        >
          {row.original.currency_name}
        </Link>
      );
    },
  },
  {
    header: "parent_id",
    accessorKey: "parent_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/account/${getValue()}`}
        >
          {row.original.parent_name}
        </Link>
      );
    },
  },
  {
    header: "final_id",
    accessorKey: "final_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/account/${getValue()}`}
        >
          {row.original.final_name}
        </Link>
      );
    },
  },
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
  // { header: "id", accessorKey: "id" },
  { header: "number", accessorKey: "number" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "card_type",
    accessorKey: "card_type",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md text-white py-1 px-2 text-xs ${
          getValue() === 1 ? "bg-purple-500" : "bg-orange-400"
        }`}
      >
        {SELECT_LISTS("user_type")?.find((c) => c?.id === getValue())?.name}
      </span>
    ),
  },
  {
    header: "date_of_birth",
    accessorKey: "date_of_birth",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "passport_number", accessorKey: "passport_number" },
  {
    header: "passport_expiry",
    accessorKey: "passport_expiry",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "full_name",
    accessorKey: "full_name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/lessor/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "passport", accessorKey: "passport" },
  {
    header: "passport_expiry_date",
    accessorKey: "passport_expiry_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "full_name",
    accessorKey: "full_name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/owner/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "full_name",
    accessorKey: "full_name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/seller/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/${"bank"}/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/${"cost_center"}/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  {
    header: "parent_id",
    accessorKey: "parent_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/update/cost_center/${getValue()}`}
          className="text-blue-500 capitalize"
        >
          {row.original.parent_name}
        </Link>
      );
    },
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/country/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/currency/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
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
  {
    id: "color",
    header: "color",
    cell: ({ row }) => (
      <Link
        to={`/tools/${row.original.id}`}
        state={{ t: "t", row: row.original }}
      >
        <PaletteIcon />
      </Link>
    ),
  },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/building/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "emirate", accessorKey: "emirate" },
  { header: "suburb", accessorKey: "suburb" },
  { header: "area", accessorKey: "area" },
  { header: "street", accessorKey: "street" },
  { header: "building_number", accessorKey: "building_number" },
  { header: "part_number", accessorKey: "part_number" },
  { header: "basin_number", accessorKey: "basin_number" },
  { header: "bond_number", accessorKey: "bond_number" },
  { header: "bond_type", accessorKey: "bond_type" },
  {
    header: "bond_date",
    accessorKey: "bond_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "owner_id", accessorKey: "owner_id" },
  { header: "display", accessorKey: "display" },
  { header: "statement", accessorKey: "statement" },
  { header: "construction_account_id", accessorKey: "construction_account_id" },
  // { header: "create_within_id", accessorKey: "create_within_id" },
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
  {
    header: "gen_entries",
    accessorKey: "gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "amount", accessorKey: "amount" },
  {
    header: "gen_entries",
    accessorKey: "gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  { header: "owner_id", accessorKey: "owner_id" },
  {
    header: "investment_start_date",
    accessorKey: "investment_start_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "investment_end_date",
    accessorKey: "investment_end_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "terminating_tenancies", accessorKey: "terminating_tenancies" },
  { header: "investment_value", accessorKey: "investment_value" },
  {
    header: "gen_entries",
    accessorKey: "gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  { header: "account_id", accessorKey: "account_id" },
  // { header: "create_within_id", accessorKey: "create_within_id" },
  { header: "building_receipt", accessorKey: "building_receipt" },
  {
    header: "received_date",
    accessorKey: "received_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "note", accessorKey: "note" },
  { header: "debit", accessorKey: "debit" },
  { header: "credit", accessorKey: "credit" },
  {
    header: "feedback",
    accessorKey: "feedback",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "seller_id", accessorKey: "seller_id" },
  {
    header: "connect_with",
    accessorKey: "connect_with",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md text-white py-1 px-2 text-xs ${
          getValue() === 1 ? "bg-purple-500" : "bg-orange-400"
        }`}
      >
        {
          SELECT_LISTS("contract_connect_with")?.find(
            (c) => c?.id === getValue()
          )?.name
        }
      </span>
    ),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/accounting_voucher_pattern/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "list_name", accessorKey: "list_name" },
  { header: "default_account_id", accessorKey: "default_account_id" },
  { header: "shortcut_key", accessorKey: "shortcut_key" },
  {
    header: "auto_transfer_entry",
    accessorKey: "auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "required_cost_center",
    accessorKey: "required_cost_center",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "required_statement",
    accessorKey: "required_statement",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "default_print_folder_path",
    accessorKey: "default_print_folder_path",
  },
  {
    header: "show_debit_field",
    accessorKey: "show_debit_field",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "show_credit_field",
    accessorKey: "show_credit_field",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "debit_field_label", accessorKey: "debit_field_label" },
  { header: "credit_field_label", accessorKey: "credit_field_label" },
  {
    header: "show_currency",
    accessorKey: "show_currency",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "show_cost_center",
    accessorKey: "show_cost_center",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "show_note",
    accessorKey: "show_note",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  { header: "building_id", accessorKey: "building_id" },
  { header: "apartment_no", accessorKey: "apartment_no" },
  { header: "floor", accessorKey: "floor" },
  {
    header: "flat_type",
    accessorKey: "flat_type",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md text-white py-1 px-2 text-xs capitalize `}
        style={{
          background: FLAT_PROPERTY_COLORS?.[`apartment_${getValue()}`],
        }}
      >
        {FLAT_PROPERTY_TYPES?.[`apartment_${getValue()}`]}
      </span>
    ),
  },
  { header: "description", accessorKey: "description" },
  { header: "category", accessorKey: "category" },
  { header: "area", accessorKey: "area" },
  { header: "area_unit", accessorKey: "area_unit" },
  { header: "view", accessorKey: "view" },
  { header: "bathroom_count", accessorKey: "bathroom_count" },
  { header: "balcony_count", accessorKey: "balcony_count" },
  {
    header: "has_lawsuit",
    accessorKey: "has_lawsuit",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "main_cost_center_id", accessorKey: "main_cost_center_id" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  {
    header: "property_type",
    accessorKey: "property_type",
    cell: ({ getValue }) => {
      console.log(
        SELECT_LISTS("flat_property_type"),
        'SELECT_LISTS("flat_property_type")'
      );
      return (
        <span
          className={`rounded-md text-white py-1 px-2 text-xs ${
            getValue() === 1 ? "bg-purple-500" : "bg-orange-400"
          }`}
        >
          {
            SELECT_LISTS("flat_property_type")?.find(
              (c) => c?.id === getValue()
            )?.name
          }
        </span>
      );
    },
  },
  { header: "water_meter", accessorKey: "water_meter" },
  { header: "electricity_meter", accessorKey: "electricity_meter" },
  { header: "statement", accessorKey: "statement" },
  { header: "x_index", accessorKey: "x_index" },
  { header: "y_index", accessorKey: "y_index" },
  { header: "room_count", accessorKey: "room_count" },
  {
    header: "property_values_id",
    accessorKey: "property_values_id",
    cell: ({ row }) => {
      console.log(
        SELECT_LISTS("flat_property_type"),
        'SELECT_LISTS("flat_property_type")'
      );
      return (
        <span
          className={`rounded-md text-white py-1 px-2 text-xs `}
          style={{ background: row.original.hex }}
        >
          {row.original.row_index}
        </span>
      );
    },
  },
  // { header: "hex", accessorKey: "hex" },
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
  // { header: "id", accessorKey: "id" },
  { header: "apartment_id", accessorKey: "apartment_id" },
  { header: "picture", accessorKey: "picture" },
];

export const property_values = [
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
  // { header: "id", accessorKey: "id" },
  { header: "area", accessorKey: "area" },
  { header: "area_unit", accessorKey: "area_unit" },
  { header: "view", accessorKey: "view" },
  { header: "bathroom_count", accessorKey: "bathroom_count" },
  { header: "balcony_count", accessorKey: "balcony_count" },
  {
    header: "property_type",
    accessorKey: "property_type",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md text-white py-1 px-2 text-xs ${
          getValue() === 1 ? "bg-purple-500" : "bg-orange-400"
        }`}
      >
        {
          SELECT_LISTS("flat_property_type")?.find((c) => c?.id === getValue())
            ?.name
        }
      </span>
    ),
  },
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
  // { header: "id", accessorKey: "id" },
  { header: "apartment_id", accessorKey: "apartment_id" },
  {
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  { header: "apartment_id", accessorKey: "apartment_id" },
  {
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  { header: "number", accessorKey: "number" },
  {
    header: "feedback",
    accessorKey: "feedback",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "lawsuit",
    accessorKey: "lawsuit",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
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
  {
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  {
    header: "contract_type",
    accessorKey: "contract_type",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md text-white py-1 px-2 text-xs ${
          getValue() === 1 ? "bg-purple-500" : "bg-orange-400"
        }`}
      >
        {SELECT_LISTS("contract_type")?.find((c) => c?.id === getValue())?.name}
      </span>
    ),
  },
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
  {
    header: "start_date",
    accessorKey: "start_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "end_date",
    accessorKey: "end_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  {
    header: "termination_date",
    accessorKey: "termination_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  {
    header: "evacuation_date",
    accessorKey: "evacuation_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "clearance_printed", accessorKey: "clearance_printed" },
  {
    header: "clearance_printed_date",
    accessorKey: "clearance_printed_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  { header: "contract_id", accessorKey: "contract_id" },
  {
    header: "contract_documented",
    accessorKey: "contract_documented",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "contract_certifying",
    accessorKey: "contract_certifying",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "contract_certifying_body",
    accessorKey: "contract_certifying_body",
  },
  {
    header: "contract_received",
    accessorKey: "contract_received",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "contract_delivered",
    accessorKey: "contract_delivered",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "contract_signed",
    accessorKey: "contract_signed",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
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
  // { header: "id", accessorKey: "id" },
  { header: "contract_id", accessorKey: "contract_id" },
  {
    header: "contract_type",
    accessorKey: "contract_type",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md text-white py-1 px-2 text-xs ${
          getValue() === 1 ? "bg-purple-500" : "bg-orange-400"
        }`}
      >
        {SELECT_LISTS("contract_type")?.find((c) => c?.id === getValue())?.name}
      </span>
    ),
  },
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
  {
    header: "start_date",
    accessorKey: "start_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "end_date",
    accessorKey: "end_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "contract_type",
    accessorKey: "contract_type",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md text-white py-1 px-2 text-xs ${
          getValue() === 1 ? "bg-purple-500" : "bg-orange-400"
        }`}
      >
        {
          SELECT_LISTS("contact_pattern_contract_type")?.find(
            (c) => c?.id === getValue()
          )?.name
        }
      </span>
    ),
  },
  { header: "assets_type", accessorKey: "assets_type" },
  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    size: 200,
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/contract_pattern/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "list_name", accessorKey: "list_name" },
  { header: "shortcut_key", accessorKey: "shortcut_key" },
  {
    header: "gen_enteries",
    accessorKey: "gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "auto_gen_enteries",
    accessorKey: "auto_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "auto_transfer_entry",
    accessorKey: "auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "record_date_created",
    accessorKey: "record_date_created",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md text-white py-1 px-2 text-xs ${
          getValue() === 1 ? "bg-purple-500" : "bg-orange-400"
        }`}
      >
        {
          SELECT_LISTS("contact_pattern_record_created_date")?.find(
            (c) => c?.id === getValue()
          )?.name
        }
      </span>
    ),
  },
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
    cell: ({ getValue }) => {
      let value = getValue();
      return (
        <div className={`rounded-md py-1 px-2 text-sm flex gap-2 items-center`}>
          {value?.Debit && value?.Credit ? (
            <>
              <div className="flex gap-2 items-center bg-teal-500 text-white rounded-md px-2 py-1">
                {!value.Debit ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    Debit{" "}
                  </>
                ) : null}
              </div>
              <div className="flex gap-2 items-center bg-rose-700 text-white rounded-md px-2 py-1">
                {!value.Credit ? (
                  <>
                    <CheckIcon className="w-5 h-5" /> Credit
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <span className="w-full flex justify-center">
              <NotAllowIcon className="w-6 h-6 text-red-500" />
            </span>
          )}
        </div>
      );
    },
  },
  {
    header: "move_cost_center_with_tenant",
    accessorKey: "move_cost_center_with_tenant",
    cell: ({ getValue }) => {
      let value = getValue();
      return (
        <div className={`rounded-md py-1 px-2 text-sm flex gap-2 items-center`}>
          {value?.Debit && value?.Credit ? (
            <>
              <div className="flex gap-2 items-center bg-teal-500 text-white rounded-md px-2 py-1">
                {!value.Debit ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    Debit{" "}
                  </>
                ) : null}
              </div>
              <div className="flex gap-2 items-center bg-rose-700 text-white rounded-md px-2 py-1">
                {!value.Credit ? (
                  <>
                    <CheckIcon className="w-5 h-5" /> Credit
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <span className="w-full flex justify-center">
              <NotAllowIcon className="w-6 h-6 text-red-500" />
            </span>
          )}
        </div>
      );
    },
  },
  {
    header: "move_cost_center_with_insurance_revenue",
    accessorKey: "move_cost_center_with_insurance_revenue",
    cell: ({ getValue }) => {
      let value = getValue();
      return (
        <div className={`rounded-md py-1 px-2 text-sm flex gap-2 items-center`}>
          {value?.Debit && value?.Credit ? (
            <>
              <div className="flex gap-2 items-center bg-teal-500 text-white rounded-md px-2 py-1">
                {!value.Debit ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    Debit{" "}
                  </>
                ) : null}
              </div>
              <div className="flex gap-2 items-center bg-rose-700 text-white rounded-md px-2 py-1">
                {!value.Credit ? (
                  <>
                    <CheckIcon className="w-5 h-5" /> Credit
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <span className="w-full flex justify-center">
              <NotAllowIcon className="w-6 h-6 text-red-500" />
            </span>
          )}
        </div>
      );
    },
  },
  {
    header: "move_cost_center_with_price_revenue",
    accessorKey: "move_cost_center_with_price_revenue",
    cell: ({ getValue }) => {
      let value = getValue();
      return (
        <div className={`rounded-md py-1 px-2 text-sm flex gap-2 items-center`}>
          {value?.Debit && value?.Credit ? (
            <>
              <div className="flex gap-2 items-center bg-teal-500 text-white rounded-md px-2 py-1">
                {!value.Debit ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    Debit{" "}
                  </>
                ) : null}
              </div>
              <div className="flex gap-2 items-center bg-rose-700 text-white rounded-md px-2 py-1">
                {!value.Credit ? (
                  <>
                    <CheckIcon className="w-5 h-5" /> Credit
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <span className="w-full flex justify-center">
              <NotAllowIcon className="w-6 h-6 text-red-500" />
            </span>
          )}
        </div>
      );
    },
  },
  {
    header: "move_cost_center_with_intention_ratifying",
    accessorKey: "move_cost_center_with_intention_ratifying",
    cell: ({ getValue }) => {
      let value = getValue();
      return (
        <div className={`rounded-md py-1 px-2 text-sm flex gap-2 items-center`}>
          {value?.Debit && value?.Credit ? (
            <>
              <div className="flex gap-2 items-center bg-teal-500 text-white rounded-md px-2 py-1">
                {!value.Debit ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    Debit{" "}
                  </>
                ) : null}
              </div>
              <div className="flex gap-2 items-center bg-rose-700 text-white rounded-md px-2 py-1">
                {!value.Credit ? (
                  <>
                    <CheckIcon className="w-5 h-5" /> Credit
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <span className="w-full flex justify-center">
              <NotAllowIcon className="w-6 h-6 text-red-500" />
            </span>
          )}
        </div>
      );
    },
  },
  {
    header: "move_cost_center_with_other_fee",
    accessorKey: "move_cost_center_with_other_fee",
    cell: ({ getValue }) => {
      let value = getValue();
      return (
        <div className={`rounded-md py-1 px-2 text-sm flex gap-2 items-center`}>
          {value?.Debit && value?.Credit ? (
            <>
              <div className="flex gap-2 items-center bg-teal-500 text-white rounded-md px-2 py-1">
                {!value.Debit ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    Debit{" "}
                  </>
                ) : null}
              </div>
              <div className="flex gap-2 items-center bg-rose-700 text-white rounded-md px-2 py-1">
                {!value.Credit ? (
                  <>
                    <CheckIcon className="w-5 h-5" /> Credit
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <span className="w-full flex justify-center">
              <NotAllowIcon className="w-6 h-6 text-red-500" />
            </span>
          )}
        </div>
      );
    },
  },
  {
    header: "move_cost_center_with_commission_client",
    accessorKey: "move_cost_center_with_commission_client",
    cell: ({ getValue }) => {
      let value = getValue();
      return (
        <div className={`rounded-md py-1 px-2 text-sm flex gap-2 items-center`}>
          {value?.Debit && value?.Credit ? (
            <>
              <div className="flex gap-2 items-center bg-teal-500 text-white rounded-md px-2 py-1">
                {!value.Debit ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    Debit{" "}
                  </>
                ) : null}
              </div>
              <div className="flex gap-2 items-center bg-rose-700 text-white rounded-md px-2 py-1">
                {!value.Credit ? (
                  <>
                    <CheckIcon className="w-5 h-5" /> Credit
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <span className="w-full flex justify-center">
              <NotAllowIcon className="w-6 h-6 text-red-500" />
            </span>
          )}
        </div>
      );
    },
  },
  {
    header: "move_cost_center_with_commission_owner",
    accessorKey: "move_cost_center_with_commission_owner",
    cell: ({ getValue }) => {
      let value = getValue();
      return (
        <div className={`rounded-md py-1 px-2 text-sm flex gap-2 items-center`}>
          {value?.Debit && value?.Credit ? (
            <>
              <div className="flex gap-2 items-center bg-teal-500 text-white rounded-md px-2 py-1">
                {!value.Debit ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    Debit{" "}
                  </>
                ) : null}
              </div>
              <div className="flex gap-2 items-center bg-rose-700 text-white rounded-md px-2 py-1">
                {!value.Credit ? (
                  <>
                    <CheckIcon className="w-5 h-5" /> Credit
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <span className="w-full flex justify-center">
              <NotAllowIcon className="w-6 h-6 text-red-500" />
            </span>
          )}
        </div>
      );
    },
  },

  {
    header: "move_cost_center_with_contract_fines_terminating",
    accessorKey: "move_cost_center_with_contract_fines_terminating",
    cell: ({ getValue }) => {
      let value = getValue();
      return (
        <div className={`rounded-md py-1 px-2 text-sm flex gap-2 items-center`}>
          {value?.Debit && value?.Credit ? (
            <>
              <div className="flex gap-2 items-center bg-teal-500 text-white rounded-md px-2 py-1">
                {!value.Debit ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    Debit{" "}
                  </>
                ) : null}
              </div>
              <div className="flex gap-2 items-center bg-rose-700 text-white rounded-md px-2 py-1">
                {!value.Credit ? (
                  <>
                    <CheckIcon className="w-5 h-5" /> Credit
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <span className="w-full flex justify-center">
              <NotAllowIcon className="w-6 h-6 text-red-500" />
            </span>
          )}
        </div>
      );
    },
  },
  {
    header: "move_cost_center_with_decisiveness_granted",
    accessorKey: "move_cost_center_with_decisiveness_granted",
    cell: ({ getValue }) => {
      let value = getValue();
      return (
        <div className={`rounded-md py-1 px-2 text-sm flex gap-2 items-center`}>
          {value?.Debit && value?.Credit ? (
            <>
              <div className="flex gap-2 items-center bg-teal-500 text-white rounded-md px-2 py-1">
                {!value.Debit ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    Debit{" "}
                  </>
                ) : null}
              </div>
              <div className="flex gap-2 items-center bg-rose-700 text-white rounded-md px-2 py-1">
                {!value.Credit ? (
                  <>
                    <CheckIcon className="w-5 h-5" /> Credit
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <span className="w-full flex justify-center">
              <NotAllowIcon className="w-6 h-6 text-red-500" />
            </span>
          )}
        </div>
      );
    },
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
    cell: ({ getValue }) => {
      let value = getValue();
      return (
        <div className={`rounded-md py-1 px-2 text-sm flex gap-2 items-center`}>
          {value?.Debit && value?.Credit ? (
            <>
              <div className="flex gap-2 items-center bg-teal-500 text-white rounded-md px-2 py-1">
                {!value.Debit ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    Debit{" "}
                  </>
                ) : null}
              </div>
              <div className="flex gap-2 items-center bg-rose-700 text-white rounded-md px-2 py-1">
                {!value.Credit ? (
                  <>
                    <CheckIcon className="w-5 h-5" /> Credit
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <span className="w-full flex justify-center">
              <NotAllowIcon className="w-6 h-6 text-red-500" />
            </span>
          )}
        </div>
      );
    },
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
  // { header: "id", accessorKey: "id" },
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
  // { header: "id", accessorKey: "id" },
  { header: "contract_id", accessorKey: "contract_id" },
  { header: "receipt_number", accessorKey: "receipt_number" },
  {
    header: "receipt_date",
    accessorKey: "receipt_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "receipt_statement", accessorKey: "receipt_statement" },
];

//here

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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  {
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "due_date",
    accessorKey: "due_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "due_end_date",
    accessorKey: "due_end_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "without_due_date",
    accessorKey: "without_due_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  {
    header: "clipboard_date",
    accessorKey: "clipboard_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
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

export const bill_patterns = [
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "paper_type",
    accessorKey: "paper_type",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md text-white py-1 px-2 text-xs ${
          getValue() === 1 ? "bg-purple-500" : "bg-orange-400"
        }`}
      >
        {
          SELECT_LISTS("bill_pattern_paper_type")?.find(
            (c) => c?.id === getValue()
          )?.name
        }
      </span>
    ),
  },
  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/bill_patterns/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "list_name", accessorKey: "list_name" },
  { header: "default_account_id", accessorKey: "default_account_id" },
  { header: "shortcut_key", accessorKey: "shortcut_key" },
  {
    header: "gen_entries",
    accessorKey: "gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "auto_gen_entries", accessorKey: "auto_gen_entries" },
  {
    header: "auto_transfer_entry",
    accessorKey: "auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "default_print_folder", accessorKey: "default_print_folder" },
  { header: "deportable", accessorKey: "deportable" },
  {
    header: "deportable_gen_enteries",
    accessorKey: "deportable_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "deportable_auto_gen_enteries",
    accessorKey: "deportable_auto_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "deportable_auto_transfer_entry",
    accessorKey: "deportable_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
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

  {
    header: "collection_gen_enteries",
    accessorKey: "collection_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "collection_auto_gen_enteries",
    accessorKey: "collection_auto_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "collection_auto_transfer_entry",
    accessorKey: "collection_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
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
  {
    header: "partial_gen_enteries",
    accessorKey: "partial_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "partial_auto_gen_enteries",
    accessorKey: "partial_auto_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "partial_auto_transfer_entry",
    accessorKey: "partial_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
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
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "endorsement_auto_gen_enteries",
    accessorKey: "endorsement_auto_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "endorsement_auto_transfer_entry",
    accessorKey: "endorsement_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
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
  {
    header: "returnable_gen_enteries",
    accessorKey: "returnable_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "returnable_auto_gen_enteries",
    accessorKey: "returnable_auto_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "returnable_auto_transfer_entry",
    accessorKey: "returnable_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
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
  // { header: "id", accessorKey: "id" },
  { header: "contract_id", accessorKey: "contract_id" },
  { header: "total_amount", accessorKey: "total_amount" },
  { header: "first_batch", accessorKey: "first_batch" },
  {
    header: "payment_date",
    accessorKey: "payment_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  {
    header: "first_installment_date",
    accessorKey: "first_installment_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "installment_price", accessorKey: "installment_price" },
  { header: "final_payment", accessorKey: "final_payment" },
  { header: "begin_number", accessorKey: "begin_number" },
  {
    header: "installment_date",
    accessorKey: "installment_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "installment_statement", accessorKey: "installment_statement" },
  { header: "beneficiary_name", accessorKey: "beneficiary_name" },
  {
    header: "gen_entries_type",
    accessorKey: "gen_entries_type",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md text-white py-1 px-2 text-xs ${
          getValue() === 1 ? "bg-purple-500" : "bg-orange-400"
        }`}
      >
        {
          SELECT_LISTS("installment_entries_type")?.find(
            (c) => c?.id === getValue()
          )?.name
        }
      </span>
    ),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "due_date",
    accessorKey: "due_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number" },
  { header: "amount", accessorKey: "amount" },
  { header: "bank_id", accessorKey: "bank_id" },
  { header: "client_id", accessorKey: "client_id" },
  { header: "observe_account_id", accessorKey: "observe_account_id" },
  { header: "statement", accessorKey: "statement" },
  {
    header: "end_due_date",
    accessorKey: "end_due_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "feedback",
    accessorKey: "feedback",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "feedback",
    accessorKey: "feedback",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
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
export const op_endorsement = [
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "feedback",
    accessorKey: "feedback",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "feedback",
    accessorKey: "feedback",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/voucher_pattern/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "list_name", accessorKey: "list_name" },
  { header: "default_account_id", accessorKey: "default_account_id" },
  { header: "shortcut_key", accessorKey: "shortcut_key" },
  {
    header: "auto_gen_entries",
    accessorKey: "auto_gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "auto_transfer_entry",
    accessorKey: "auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "gen_entries",
    accessorKey: "gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "generate_records", accessorKey: "generate_records" },
  {
    header: "show_contract_field",
    accessorKey: "show_contract_field",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "show_contract_cost_center",
    accessorKey: "show_contract_cost_center",
  },
  {
    header: "required_cost_center",
    accessorKey: "required_cost_center",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "required_statement",
    accessorKey: "required_statement",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "default_print_folder_path",
    accessorKey: "default_print_folder_path",
  },
  {
    header: "show_debit_field",
    accessorKey: "show_debit_field",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "show_credit_field",
    accessorKey: "show_credit_field",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "debit_field_label", accessorKey: "debit_field_label" },
  { header: "credit_field_label", accessorKey: "credit_field_label" },
  {
    header: "show_currency",
    accessorKey: "show_currency",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "show_cost_center",
    accessorKey: "show_cost_center",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "show_note",
    accessorKey: "show_note",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/assets_group/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "last_name", accessorKey: "last_name" },
  { header: "note", accessorKey: "note" },
  {
    header: "parent_id",
    accessorKey: "parent_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/update/assets_group/${getValue()}`}
          className="text-blue-500 capitalize"
        >
          {row.original.parent_name}
        </Link>
      );
    },
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number" },
  { header: "assets_group_id", accessorKey: "assets_group_id" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/assets/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "assets_id", accessorKey: "assets_id" },
  { header: "depreciation_mode", accessorKey: "depreciation_mode" },
  { header: "is_depreciation_monthly", accessorKey: "is_depreciation_monthly" },
  {
    header: "depreciation_begin_date",
    accessorKey: "depreciation_begin_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "assets_id", accessorKey: "assets_id" },
  { header: "importer", accessorKey: "importer" },
  { header: "enter_account_id", accessorKey: "enter_account_id" },
  {
    header: "enter_date",
    accessorKey: "enter_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "assets_id", accessorKey: "assets_id" },
  { header: "maintenance_contract", accessorKey: "maintenance_contract" },
  {
    header: "maintenance_begin_date",
    accessorKey: "maintenance_begin_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "maintenance_end_date",
    accessorKey: "maintenance_end_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "guaranty", accessorKey: "guaranty" },
  {
    header: "guaranty_begin_date",
    accessorKey: "guaranty_begin_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "guaranty_end_date",
    accessorKey: "guaranty_end_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "assets_id", accessorKey: "assets_id" },
  { header: "is_sale", accessorKey: "is_sale" },
  {
    header: "sale_date",
    accessorKey: "sale_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "assets_id", accessorKey: "assets_id" },
  { header: "shipping", accessorKey: "shipping" },
  { header: "shipping_no", accessorKey: "shipping_no" },
  {
    header: "shipping_date",
    accessorKey: "shipping_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "arrive_date",
    accessorKey: "arrive_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "contract_id", accessorKey: "contract_id" },
  {
    header: "start_date",
    accessorKey: "start_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "lawsuit_no", accessorKey: "lawsuit_no" },
  {
    header: "open_date",
    accessorKey: "open_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "exec_date",
    accessorKey: "exec_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "stop_exec", accessorKey: "stop_exec" },
  {
    header: "stop_exec_date",
    accessorKey: "stop_exec_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "stop_exec_note", accessorKey: "stop_exec_note" },
  {
    header: "stop_pay_date",
    accessorKey: "stop_pay_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "quittance_date",
    accessorKey: "quittance_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "quittance_electricity_date",
    accessorKey: "quittance_electricity_date",
  },
  { header: "rent", accessorKey: "rent" },
  { header: "is_ended", accessorKey: "is_ended" },
  {
    header: "end_date",
    accessorKey: "end_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "exe_no", accessorKey: "exe_no" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "currency_val", accessorKey: "currency_val" },
  { header: "lawyer_rent", accessorKey: "lawyer_rent" },
  {
    header: "lawyer_rent_date",
    accessorKey: "lawyer_rent_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "lawyer_entry", accessorKey: "lawyer_entry" },
  { header: "lawyer_debit_account_id", accessorKey: "lawyer_debit_account_id" },
  {
    header: "lawyer_credit_account_id",
    accessorKey: "lawyer_credit_account_id",
  },
  { header: "lawyer_note", accessorKey: "lawyer_note" },
  { header: "maintenance_rent", accessorKey: "maintenance_rent" },
  {
    header: "maintenance_rent_date",
    accessorKey: "maintenance_rent_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  {
    header: "furniture_date",
    accessorKey: "furniture_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "maintenance_order_no", accessorKey: "maintenance_order_no" },
  { header: "complaint_id", accessorKey: "complaint_id" },
  { header: "maintenance_worker_id", accessorKey: "maintenance_worker_id" },
  { header: "work_kind", accessorKey: "work_kind" },
  {
    header: "start_date",
    accessorKey: "start_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "end_expected_date",
    accessorKey: "end_expected_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "close_date",
    accessorKey: "close_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  {
    header: "entry_date",
    accessorKey: "entry_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/material_group/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "last_name", accessorKey: "last_name" },
  { header: "note", accessorKey: "note" },
  {
    header: "parent_id",
    accessorKey: "parent_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/update/material_group/${getValue()}`}
          className="text-blue-500 capitalize"
        >
          {row.original.parent_name}
        </Link>
      );
    },
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/materials/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
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
  {
    header: "sale_last_price_date",
    accessorKey: "sale_last_price_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "building_id", accessorKey: "building_id" },
  { header: "parking_no", accessorKey: "parking_no" },
  { header: "floor_no", accessorKey: "floor_no" },
  { header: "area", accessorKey: "area" },
  { header: "area_unit", accessorKey: "area_unit" },
  {
    header: "parking_kind",
    accessorKey: "parking_kind",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md text-white py-1 px-2 text-xs capitalize `}
        style={{ background: FLAT_PROPERTY_COLORS?.[`parking_${getValue()}`] }}
      >
        {FLAT_PROPERTY_TYPES?.[`parking_${getValue()}`]}
      </span>
    ),
  },

  { header: "description", accessorKey: "description" },
  { header: "view", accessorKey: "view" },
  { header: "customer_id", accessorKey: "customer_id" },
  {
    header: "has_lawsuit",
    accessorKey: "has_lawsuit",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  {
    header: "purchase_date",
    accessorKey: "purchase_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "parking_id", accessorKey: "parking_id" },
  {
    header: "date1",
    accessorKey: "date1",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "print1", accessorKey: "print1" },
  { header: "currency1_id", accessorKey: "currency1_id" },
  {
    header: "date2",
    accessorKey: "date2",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  {
    header: "has_lawsuit",
    accessorKey: "has_lawsuit",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "customer_id", accessorKey: "customer_id" },
  { header: "customer_owner_id", accessorKey: "customer_owner_id" },
  { header: "flat_owner", accessorKey: "flat_owner" },
  { header: "water_meter", accessorKey: "water_meter" },
  { header: "electricity_meter", accessorKey: "electricity_meter" },
  { header: "bond_type", accessorKey: "bond_type" },
  { header: "bond_no", accessorKey: "bond_no" },
  {
    header: "bond_date",
    accessorKey: "bond_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "complex_name", accessorKey: "complex_name" },
  { header: "villa_no", accessorKey: "villa_no" },
  { header: "emirate", accessorKey: "emirate" },
  { header: "area", accessorKey: "area" },
  { header: "suburb", accessorKey: "suburb" },
  { header: "street", accessorKey: "street" },
  { header: "doc_type", accessorKey: "doc_type" },
  { header: "doc_no", accessorKey: "doc_no" },
  {
    header: "doc_date",
    accessorKey: "doc_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "villa_id", accessorKey: "villa_id" },
  {
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  // { header: "id", accessorKey: "id" },
  { header: "villa_id", accessorKey: "villa_id" },
  {
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "price", accessorKey: "price" },
  { header: "currency_id", accessorKey: "currency_id" },
];
// ==== End Villa

export const store = [
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/store/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "last_name", accessorKey: "last_name" },
  { header: "address", accessorKey: "address" },
  { header: "warehouseman", accessorKey: "warehouseman" },
  { header: "note", accessorKey: "note" },
  {
    header: "parent_id",
    accessorKey: "parent_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/store/${getValue()}`}
        >
          {row.original.parent_name}
        </Link>
      );
    },
  },
  {
    header: "store_final_id",
    accessorKey: "store_final_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/store/${getValue()}`}
        >
          {row.original.final_name}
        </Link>
      );
    },
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
  // { header: "id", accessorKey: "id" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "paperType", accessorKey: "paperType" },
  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize"
          to={`/update/bill_group/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
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
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "auto_gen_entries",
    accessorKey: "auto_gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "auto_transfer_entry",
    accessorKey: "auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
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
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "deportable_auto_gen_enteries",
    accessorKey: "deportable_auto_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "deportable_auto_transfer_entry",
    accessorKey: "deportable_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
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
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "collection_auto_gen_enteries",
    accessorKey: "collection_auto_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "collection_auto_transfer_entry",
    accessorKey: "collection_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
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
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "partial_auto_gen_enteries",
    accessorKey: "partial_auto_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "partial_auto_transfer_entry",
    accessorKey: "partial_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
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
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "endorsement_auto_gen_enteries",
    accessorKey: "endorsement_auto_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "endorsement_auto_transfer_entry",
    accessorKey: "endorsement_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
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
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "returnable_auto_gen_enteries",
    accessorKey: "returnable_auto_gen_enteries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "returnable_auto_transfer_entry",
    accessorKey: "returnable_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
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
  // { header: "id", accessorKey: "id" },
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
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
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
  {
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "due_date", accessorKey: "due_date" },
  {
    header: "due_end_date",
    accessorKey: "due_end_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "without_due_date",
    accessorKey: "without_due_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
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
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
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

const contracts = [
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
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
];

const land = [
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
  { accessorKey: "id", header: "id" },
  { accessorKey: "created_at", header: "created_at" },
  { accessorKey: "number", header: "number" },
  { accessorKey: "type", header: "type" },
  { accessorKey: "ban", header: "ban" },
  { accessorKey: "land_no", header: "land_no" },
  { accessorKey: "name", header: "name" },
  { accessorKey: "last_name", header: "last_name" },
  {
    accessorKey: "customer_id",
    header: "customer_id",
  },
  { accessorKey: "date", header: "date" },
  { accessorKey: "city", header: "city" },
  { accessorKey: "region", header: "region" },
  { accessorKey: "space", header: "space" },
  { accessorKey: "area", header: "area" },
  { accessorKey: "area_unit", header: "area_unit" },
  { accessorKey: "price", header: "price" },
  { accessorKey: "license_no", header: "license_no" },
  { accessorKey: "license", header: "license" },
  { accessorKey: "license_date", header: "license_date" },
  { accessorKey: "details", header: "details" },
  { accessorKey: "land_type", header: "land_type" },
  { accessorKey: "side", header: "side" },
  { accessorKey: "street_name", header: "street_name" },
  { accessorKey: "street_count", header: "street_count" },
  { accessorKey: "buildble", header: "buildble" },
  { accessorKey: "landowner", header: "landowner" },
  { accessorKey: "begin_land_value", header: "begin_land_value" },
  {
    accessorKey: "currency_begin_land_id",
    header: "currency_begin_land_id",
  },
  { accessorKey: "currency_val_begin_land", header: "currency_val_begin_land" },
  {
    accessorKey: "begin_land_cost_center_id",
    header: "begin_land_cost_center_id",
  },
  {
    accessorKey: "currency_purchase_id",
    header: "currency_purchase_id",
  },
  { accessorKey: "currency_val_purchase", header: "currency_val_purchase" },
  { accessorKey: "purchase_note", header: "purchase_note" },
  {
    accessorKey: "account_id",
    header: "account_id",
  },
  {
    accessorKey: "cuowner_id",
    header: "cuowner_id",
  },
  {
    accessorKey: "cost_center_id",
    header: "cost_center_id",
  },
  {
    accessorKey: "bank_account_id",
    header: "bank_account_id",
  },
  { accessorKey: "commission_percent", header: "commission_percent" },
  {
    accessorKey: "account_comm_income_id",
    header: "account_comm_income_id",
  },
  { accessorKey: "used_end_date", header: "used_end_date" },
  {
    accessorKey: "customer_owner_id",
    header: "customer_owner_id",
  },
  {
    accessorKey: "owner_account_id",
    header: "owner_account_id",
  },
  { accessorKey: "identity_value", header: "identity_value" },
  {
    accessorKey: "currency_identity_id",
    header: "currency_identity_id",
  },
  { accessorKey: "currency_valid_entity", header: "currency_valid_entity" },
  { accessorKey: "identity_begin_date", header: "identity_begin_date" },
  { accessorKey: "identity_end_date", header: "identity_end_date" },
  {
    accessorKey: "create_entry_investment",
    header: "create_entry_investment",
  },
  {
    accessorKey: "identity_entry_id",
    header: "identity_entry_id",
  },
  { accessorKey: "identity_note", header: "identity_note" },
  { accessorKey: "ltn_land_type", header: "ltn_land_type" },
  { accessorKey: "ltn_city", header: "ltn_city" },
  { accessorKey: "ltn_region", header: "ltn_region" },
  { accessorKey: "ltn_space", header: "ltn_space" },
  { accessorKey: "ltn_license", header: "ltn_license" },
  { accessorKey: "ltn_side", header: "ltn_side" },
  { accessorKey: "rent", header: "rent" },
  {
    accessorKey: "rent_currency_id",
    header: "rent_currency_id",
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
  property_values,
  apartment_rental_price,
  apartment_selling_price,
  contract,
  contracts,
  contract_cycle,
  contract_financial,
  contract_linked_parking,
  contract_pattern,
  contract_pictures,
  contract_receipt_number,
  financial_data,
  bill_patterns,
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
  land,
};

export default function getTableColumns(name) {
  return TABLES[name?.replace("-", "_")] || [];
}
