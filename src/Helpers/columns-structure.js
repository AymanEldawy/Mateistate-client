// ==== Start Cards

import IndeterminateCheckbox from "Components/StructurePage/Tables/IndeterminateCheckbox";
import { Link } from "react-router-dom";
import { CheckIcon, NotAllowIcon, PaletteIcon } from "../Components/Icons";
import {
  FLAT_PROPERTY_TYPES,
  SELECT_LISTS,
  FLAT_PROPERTY_COLORS,
  CONTRACTS_ASSETS_TYPE,
} from "./constants";
import { getCreatedFromUrl } from "./functions";

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
    header: "created at",
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
          className="text-blue-500 capitalize whitespace-nowrap"
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
    cell: ({ getValue }) => {
      let classes = "bg-purple-500 ";
      switch (getValue()) {
        case 2:
          classes = "bg-orange-400";
          break;
        case 3:
          classes = "bg-teal-500";
          break;
        case 4:
          classes = "bg-green-500";
          break;
        default:
          break;
      }
      return (
        <span className={`rounded-md text-white py-1 px-2 text-xs ${classes}`}>
          {
            SELECT_LISTS("account_type")?.find((c) => c?.id === getValue())
              ?.name
          }
        </span>
      );
    },
  },
  {
    header: "currency",
    accessorKey: "currency_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/currency/${getValue()}`}
        >
          {row.original.currency_name}
        </Link>
      );
    },
  },
  {
    header: "parent id",
    accessorKey: "parent_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/account/${getValue()}`}
        >
          {row.original.parent_name}
        </Link>
      );
    },
  },
  {
    header: "final id",
    accessorKey: "final_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/account/${getValue()}`}
        >
          {row.original.final_name}
        </Link>
      );
    },
  },
  { header: "note", accessorKey: "note" },
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
  {
    header: "number",
    accessorKey: "number",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/user/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  {
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "card type",
    accessorKey: "card_type",
    cell: ({ getValue, row }) => {
      return (
        <Link className="capitalize" to={`/update/user/${row.original.id}`}>
          <span
            className={`rounded-md text-white py-1 px-2 text-xs ${
              getValue() === 1 ? "bg-purple-500" : "bg-orange-400"
            }`}
          >
            {SELECT_LISTS("user_type")?.find((c) => c?.id === getValue())?.name}
          </span>
        </Link>
      );
    },
  },
  {
    header: "date of birth",
    accessorKey: "date_of_birth",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "passport number", accessorKey: "passport_number" },
  {
    header: "passport expiry",
    accessorKey: "passport_expiry",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "national id",
    accessorKey: "national_id",
  },
  {
    header: "national id expiry",
    accessorKey: "national_id_expiry",
  },
  { header: "address", accessorKey: "address" },
  { header: "user type", accessorKey: "user_type" },
  { header: "commercial register", accessorKey: "commercial_register" },
  { header: "barcode", accessorKey: "barcode" },
  { header: "profession", accessorKey: "profession" },
  { header: "work phone", accessorKey: "work_phone" },
  { header: "personal phone", accessorKey: "personal_phone" },
  { header: "fax", accessorKey: "fax" },
  { header: "mailbox", accessorKey: "mailbox" },
  { header: "email", accessorKey: "email" },
  { header: "sponsor", accessorKey: "sponsor" },
  { header: "sponsor data", accessorKey: "sponsor_data" },
  { header: "statement", accessorKey: "statement" },
  {
    header: "account id",
    accessorKey: "account_id",
  },
  {
    header: "insurance account id",
    accessorKey: "insurance_account_id",
  },
  {
    header: "bank id",
    accessorKey: "bank_id",
  },
  { header: "bank account", accessorKey: "bank_account" },
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
    header: "full name",
    accessorKey: "full_name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/lessor/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "passport", accessorKey: "passport" },
  {
    header: "passport expiry date",
    accessorKey: "passport_expiry_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "id card", accessorKey: "id_card" },
  { header: "lessor card", accessorKey: "lessor_card" },
  { header: "cell phone", accessorKey: "cell_phone" },
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
    header: "full name",
    accessorKey: "full_name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/owner/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "id card", accessorKey: "id_card" },
  { header: "phone", accessorKey: "phone" },
  { header: "cell phone", accessorKey: "cell_phone" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "full name",
    accessorKey: "full_name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/seller/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "nationality", accessorKey: "nationality" },
  { header: "id card", accessorKey: "id_card" },
  { header: "passport", accessorKey: "passport" },
  { header: "work card number", accessorKey: "work_card_number" },
  { header: "mobile", accessorKey: "mobile" },
  { header: "cellPhone", accessorKey: "cellPhone" },
  { header: "fax", accessorKey: "fax" },
  { header: "mailbox", accessorKey: "mailbox" },
  { header: "email", accessorKey: "email" },
  { header: "address", accessorKey: "address" },
  { header: "minimum commission", accessorKey: "minimum_commission" },
  { header: "maximum discount", accessorKey: "maximum_discount" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
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
    header: "created at",
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
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/${"cost_center"}/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  {
    header: "parent id",
    accessorKey: "parent_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/update/cost_center/${getValue()}`}
          className="text-blue-500 capitalize whitespace-nowrap"
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
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
          className="text-blue-500 capitalize whitespace-nowrap"
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
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/buildings/update/${row.original.id}`}
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
  { header: "building number", accessorKey: "building_number" },
  { header: "part number", accessorKey: "part_number" },
  { header: "basin number", accessorKey: "basin_number" },
  { header: "bond number", accessorKey: "bond_number" },
  { header: "bond type", accessorKey: "bond_type" },
  {
    header: "bond date",
    accessorKey: "bond_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "owner id", accessorKey: "owner_id" },
  { header: "display", accessorKey: "display" },
  { header: "statement", accessorKey: "statement" },
  { header: "construction account id", accessorKey: "construction_account_id" },
  // { header: "create within id", accessorKey: "create_within_id" },
  { header: "main cost center id", accessorKey: "main_cost_center_id" },
  {
    header: "building bank account id",
    accessorKey: "building_bank_account_id",
  },
  { header: "lessor id", accessorKey: "lessor_id" },
  { header: "bank account number", accessorKey: "bank_account_number" },
  { header: "number", accessorKey: "number" },
  { header: "apartment count", accessorKey: "apartment_count" },
  { header: "penthouse count", accessorKey: "penthouse_count" },
  { header: "parking count", accessorKey: "parking_count" },
  { header: "mezzanine count", accessorKey: "mezzanine_count" },
  { header: "office count", accessorKey: "office_count" },
  { header: "warehouse count", accessorKey: "warehouse_count" },
  { header: "service apartments", accessorKey: "service_apartments" },
  { header: "drivers apartments", accessorKey: "drivers_apartments" },
  { header: "stores", accessorKey: "stores" },
  { header: "purchase date", accessorKey: "purchase_date" },
  { header: "amount", accessorKey: "amount" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "currency val", accessorKey: "currency_val" },
  { header: "account id", accessorKey: "account_id" },
  { header: "apartment floor", accessorKey: "apartment_floor" },
  { header: "penthouse floor", accessorKey: "penthouse_floor" },
  { header: "parking floor", accessorKey: "parking_floor" },
  { header: "mezzanine floor", accessorKey: "mezzanine_floor" },
  { header: "office floor", accessorKey: "office_floor" },
  { header: "underground parking", accessorKey: "underground_parking" },
  { header: "bank id", accessorKey: "bank_id" },
  {
    header: "Generate a constraint",
    accessorKey: "gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "amount", accessorKey: "amount" },
  {
    header: "Generate a constraint",
    accessorKey: "gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "building id", accessorKey: "building_id" },
  { header: "supplier account id", accessorKey: "supplier_account_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "building id", accessorKey: "building_id" },
  { header: "building cost", accessorKey: "building_cost" },
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
  { header: "owner id", accessorKey: "owner_id" },
  {
    header: "investment start date",
    accessorKey: "investment_start_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "investment end date",
    accessorKey: "investment_end_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "terminating tenancies", accessorKey: "terminating_tenancies" },
  { header: "investment value", accessorKey: "investment_value" },
  {
    header: "Generate a constraint",
    accessorKey: "gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "currency val", accessorKey: "currency_val" },
  { header: "tenants", accessorKey: "tenants" },
  { header: "renters insurance", accessorKey: "renters_insurance" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "picture", accessorKey: "picture" },
  { header: "building id", accessorKey: "building_id" },
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
  { header: "account id", accessorKey: "account_id" },
  // { header: "create within id", accessorKey: "create_within_id" },
  { header: "building receipt", accessorKey: "building_receipt" },
  {
    header: "received date",
    accessorKey: "received_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "amount", accessorKey: "amount" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "currency val", accessorKey: "currency_val" },
  { header: "note", accessorKey: "note" },
  { header: "building id", accessorKey: "building_id" },
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
  { header: "owner id", accessorKey: "owner_id" },
  { header: "commission rate", accessorKey: "commission_rate" },
  { header: "revenue id", accessorKey: "revenue_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "account id", accessorKey: "account_id" },
  { header: "debit", accessorKey: "debit" },
  { header: "credit", accessorKey: "credit" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "cost center id", accessorKey: "cost_center_id" },
  { header: "observe account id", accessorKey: "observe_account_id" },
  { header: "voucher main data id", accessorKey: "voucher_main_data_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "note", accessorKey: "note" },
  { header: "debit", accessorKey: "debit" },
  { header: "credit", accessorKey: "credit" },
  {
    header: "feedback",
    accessorKey: "feedback",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "seller id", accessorKey: "seller_id" },
  {
    header: "connect with",
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
  { header: "debit amount", accessorKey: "debit_amount" },
  { header: "debit total", accessorKey: "debit_total" },
  { header: "credit total", accessorKey: "credit_total" },
  { header: "credit amount", accessorKey: "credit_amount" },
  { header: "account id", accessorKey: "account_id" },
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
    header: "created at",
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
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/patterns/update/accounting_voucher_pattern/${getValue()}/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "list name", accessorKey: "list_name" },
  { header: "default account id", accessorKey: "default_account_id" },
  { header: "shortcut key", accessorKey: "shortcut_key" },
  {
    header: "auto transfer entry",
    accessorKey: "auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "required cost center",
    accessorKey: "required_cost_center",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "required statement",
    accessorKey: "required_statement",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "default print folder path",
    accessorKey: "default_print_folder_path",
  },
  {
    header: "show debit field",
    accessorKey: "show_debit_field",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "show credit field",
    accessorKey: "show_credit_field",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "debit field label", accessorKey: "debit_field_label" },
  { header: "credit field label", accessorKey: "credit_field_label" },
  {
    header: "show currency",
    accessorKey: "show_currency",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "show cost center",
    accessorKey: "show_cost_center",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "show note",
    accessorKey: "show_note",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "odd table color", accessorKey: "odd_table_color" },
  { header: "even table color", accessorKey: "even_table_color" },
  { header: "sms", accessorKey: "sms" },
  {
    header: "move account cost center",
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "picture", accessorKey: "picture" },
  {
    header: "accounting voucher main id",
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
  { header: "building id", accessorKey: "building_id" },
  {
    header: "apartment no",
    accessorKey: "apartment_no",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/apartment/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "floor", accessorKey: "floor" },
  {
    header: "flat Kind",
    accessorKey: "apartment_kind",
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
  { header: "area unit", accessorKey: "area_unit" },
  { header: "view", accessorKey: "view" },
  { header: "bathroom count", accessorKey: "bathroom_count" },
  { header: "balcony count", accessorKey: "balcony_count" },
  {
    header: "has lawsuit",
    accessorKey: "has_lawsuit",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "main cost center id", accessorKey: "main_cost_center_id" },
  { header: "cost center id", accessorKey: "cost_center_id" },
  {
    header: "property type",
    accessorKey: "property_type",
    cell: ({ getValue }) => {
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
  { header: "water meter", accessorKey: "water_meter" },
  { header: "electricity meter", accessorKey: "electricity_meter" },
  { header: "statement", accessorKey: "statement" },
  { header: "x index", accessorKey: "x_index" },
  { header: "y index", accessorKey: "y_index" },
  { header: "room count", accessorKey: "room_count" },
  {
    header: "property values id",
    accessorKey: "property_values_id",
    cell: ({ row }) => {
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
  { header: "cost price", accessorKey: "cost_price" },
  { header: "amount paid", accessorKey: "amount_paid" },
  { header: "cost currency id", accessorKey: "cost_currency_id" },
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
  { header: "apartment id", accessorKey: "apartment_id" },
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
  { header: "area unit", accessorKey: "area_unit" },
  { header: "view", accessorKey: "view" },
  { header: "bathroom count", accessorKey: "bathroom_count" },
  { header: "balcony count", accessorKey: "balcony_count" },
  {
    header: "property type",
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
  { header: "room count", accessorKey: "room_count" },
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
  { header: "apartment id", accessorKey: "apartment_id" },
  {
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "price", accessorKey: "price" },
  { header: "currency id", accessorKey: "currency_id" },
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
  { header: "apartment id", accessorKey: "apartment_id" },
  {
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "price", accessorKey: "price" },
  { header: "currency id", accessorKey: "currency_id" },
];
// ==== End apartment

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
  { header: "contract id", accessorKey: "contract_id" },
  {
    header: "contract documented",
    accessorKey: "contract_documented",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "contract certifying",
    accessorKey: "contract_certifying",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "contract certifying body",
    accessorKey: "contract_certifying_body",
  },
  {
    header: "contract received",
    accessorKey: "contract_received",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "contract delivered",
    accessorKey: "contract_delivered",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "contract signed",
    accessorKey: "contract_signed",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "municipal license num", accessorKey: "municipal_license_num" },
  { header: "municipal license from", accessorKey: "municipal_license_from" },
  { header: "municipal license to", accessorKey: "municipal_license_to" },
  { header: "license num", accessorKey: "license_num" },
  { header: "license from", accessorKey: "license_from" },
  { header: "license to", accessorKey: "license_to" },
  { header: "civil license num", accessorKey: "civil_license_num" },
  { header: "civil license from", accessorKey: "civil_license_from" },
  { header: "civil license to", accessorKey: "civil_license_to" },
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
  { header: "contract id", accessorKey: "contract_id" },
  {
    header: "contract type",
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
  { header: "contract value", accessorKey: "contract_value" },
  { header: "monthly value", accessorKey: "monthly_value" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "currency val", accessorKey: "currency_val" },
  { header: "discount rate", accessorKey: "discount_rate" },
  { header: "discount value", accessorKey: "discount_value" },
  { header: "final price", accessorKey: "final_price" },
  { header: "discount account id", accessorKey: "discount_account_id" },
  { header: "previous securing", accessorKey: "previous_securing" },
  {
    header: "current securing percentage",
    accessorKey: "current_securing_percentage",
  },
  { header: "current securing value", accessorKey: "current_securing_value" },
  { header: "contract price", accessorKey: "contract_price" },
  { header: "contract validate", accessorKey: "contract_validate" },
  { header: "electricity insurance", accessorKey: "electricity_insurance" },
  { header: "last meter reading", accessorKey: "last_meter_reading" },
  { header: "contract duration", accessorKey: "contract_duration" },
  {
    header: "start date",
    accessorKey: "start_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "end date",
    accessorKey: "end_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "paid type", accessorKey: "paid_type" },
  { header: "cost center id", accessorKey: "cost_center_id" },
  { header: "revenue account id", accessorKey: "revenue_account_id" },
  { header: "customer account id", accessorKey: "customer_account_id" },
  { header: "insurance account id", accessorKey: "insurance_account_id" },
  {
    header: "contract price account id",
    accessorKey: "contract_price_account_id",
  },
  {
    header: "contract validate account id",
    accessorKey: "contract_validate_account_id",
  },
  {
    header: "contract validate account id",
    accessorKey: "contract_validate_account_id",
  },
  { header: "other fees", accessorKey: "other_fees" },
  { header: "fee revenue account id", accessorKey: "fee_revenue_account_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "contract id", accessorKey: "contract_id" },
  { header: "building id", accessorKey: "building_id" },
  { header: "account id", accessorKey: "account_id" },
  { header: "main contract id", accessorKey: "main_contract_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "contract type",
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
  { header: "assets type", accessorKey: "assets_type" },
  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    size: 200,
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/patterns/update/contract_pattern/${getValue()}/${
            row.original.id
          }`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "list name", accessorKey: "list_name" },
  { header: "shortcut key", accessorKey: "shortcut_key" },
  {
    header: "gen entries",
    accessorKey: "gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "auto gen entries",
    accessorKey: "auto_gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "auto transfer entry",
    accessorKey: "auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "record date created",
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
    header: "new contract without terminating",
    accessorKey: "new_contract_without_terminating",
  },
  { header: "insurance required", accessorKey: "insurance_required" },
  {
    header: "default revenue account id",
    accessorKey: "default_revenue_account_id",
  },
  {
    header: "default commission from client account id",
    accessorKey: "default_commission_from_client_account_id",
  },
  {
    header: "default commission from owner account id",
    accessorKey: "default_commission_from_owner_account_id",
  },
  {
    header: "default contract price revenue account id",
    accessorKey: "default_contract_price_revenue_account_id",
  },
  {
    header: "default contract ratification revenue account id",
    accessorKey: "default_contract_ratification_revenue_account_id",
  },
  {
    header: "default fines revenue account id",
    accessorKey: "default_fines_revenue_account_id",
  },
  {
    header: "default fee revenue account id",
    accessorKey: "default_fee_revenue_account_id",
  },
  {
    header: "default discount account id",
    accessorKey: "default_discount_account_id",
  },
  {
    header: "default commission From client Percentage",
    accessorKey: "default_commission_From_client_Percentage",
  },
  {
    header: "default insurance account id",
    accessorKey: "default_insurance_account_id",
  },
  {
    header: "move cost center with revenue",
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
    header: "move cost center with tenant",
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
    header: "move cost center with insurance revenue",
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
    header: "move cost center with price revenue",
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
    header: "move cost center with intention ratifying",
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
    header: "move cost center with other fee",
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
    header: "move cost center with commission client",
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
    header: "move cost center with commission owner",
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
    header: "move cost center with contract fines terminating",
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
    header: "move cost center with decisiveness granted",
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
  { header: "contract terms", accessorKey: "contract_terms" },
  { header: "folder default printing", accessorKey: "folder_default_printing" },
  {
    header: "folder print communications",
    accessorKey: "folder_print_communications",
  },
  { header: "folder print clearance", accessorKey: "folder_print_clearance" },
  {
    header: "move cost center with contract proceeds rerminating",
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
  { header: "contract id", accessorKey: "contract_id" },
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
  { header: "contract id", accessorKey: "contract_id" },
  { header: "receipt number", accessorKey: "receipt_number" },
  {
    header: "receipt date",
    accessorKey: "receipt_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "receipt statement", accessorKey: "receipt_statement" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "internal number", accessorKey: "internal_number" },
  { header: "amount", accessorKey: "amount" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "seller id", accessorKey: "seller_id" },
  { header: "received from id", accessorKey: "received_from_id" },
  { header: "beneficiary name", accessorKey: "beneficiary_name" },
  { header: "cost center id", accessorKey: "cost_center_id" },
  { header: "note", accessorKey: "note" },
  {
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "due date",
    accessorKey: "due_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "due end date",
    accessorKey: "due_end_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "without due date",
    accessorKey: "without_due_date",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "bank id", accessorKey: "bank_id" },
  { header: "observe account id", accessorKey: "observe_account_id" },
  { header: "observe account note", accessorKey: "observe_account_note" },
  { header: "observe cost center id", accessorKey: "observe_cost_center_id" },
  { header: "note1", accessorKey: "note1" },
  { header: "note2", accessorKey: "note2" },
  { header: "deport status", accessorKey: "deport_status" },
  { header: "collection status", accessorKey: "collection_status" },
  {
    header: "partial collection status",
    accessorKey: "partial_collection_status",
  },
  { header: "endors status", accessorKey: "endors_status" },
  { header: "return status", accessorKey: "return_status" },
  { header: "deposit status", accessorKey: "deposit_status" },
  { header: "clipboard number", accessorKey: "clipboard_number" },
  {
    header: "clipboard date",
    accessorKey: "clipboard_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "clipboard receipt number",
    accessorKey: "clipboard_receipt_number",
  },
  {
    header: "clipboard internal number",
    accessorKey: "clipboard_internal_number",
  },
];

export const bill_pattern = [
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "paper type",
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
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/patterns/update/cheque_pattern/${getValue()}/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "list name", accessorKey: "list_name" },
  { header: "default account id", accessorKey: "default_account_id" },
  { header: "shortcut key", accessorKey: "shortcut_key" },
  {
    header: "Generate a constraint",
    accessorKey: "gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "auto gen entries", accessorKey: "auto_gen_entries" },
  {
    header: "auto transfer entry",
    accessorKey: "auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "default print folder", accessorKey: "default_print_folder" },
  { header: "deportable", accessorKey: "deportable" },
  {
    header: "deportable gen entries",
    accessorKey: "deportable_gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "deportable auto gen entries",
    accessorKey: "deportable_auto_gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "deportable auto transfer entry",
    accessorKey: "deportable_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "deportable default date", accessorKey: "deportable_default_date" },
  {
    header: "deportable default account is onwer",
    accessorKey: "deportable_default_account_is_onwer",
  },
  {
    header: "deportable default observe account is client",
    accessorKey: "deportable_default_observe_account_is_client",
  },
  {
    header: "deportable move cost center debit",
    accessorKey: "deportable_move_cost_center_debit",
  },
  {
    header: "deportable move cost center credit",
    accessorKey: "deportable_move_cost_center_credit",
  },
  {
    header: "deportable debit account id",
    accessorKey: "deportable_debit_account_id",
  },
  {
    header: "deportable credit account id",
    accessorKey: "deportable_credit_account_id",
  },
  { header: "collection", accessorKey: "collection" },

  {
    header: "collection gen entries",
    accessorKey: "collection_gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "collection auto gen entries",
    accessorKey: "collection_auto_gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "collection auto transfer entry",
    accessorKey: "collection_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "collection default date", accessorKey: "collection_default_date" },
  {
    header: "collection default account is building bank",
    accessorKey: "collection_default_account_is_building_bank",
  },
  {
    header: "collection default observe account is client",
    accessorKey: "collection_default_observe_account_is_client",
  },
  {
    header: "collection move cost center debit",
    accessorKey: "collection_move_cost_center_debit",
  },
  {
    header: "collection move cost center credit",
    accessorKey: "collection_move_cost_center_credit",
  },
  {
    header: "collection credit account id",
    accessorKey: "collection_credit_account_id",
  },
  {
    header: "collection debit account id",
    accessorKey: "collection_debit_account_id",
  },
  { header: "commission type", accessorKey: "commission_type" },
  {
    header: "commission amount from building",
    accessorKey: "commission_amount_from_building",
  },
  {
    header: "commission default account is building owner",
    accessorKey: "commission_default_account_is_building_owner",
  },
  {
    header: "commission default observe is revenue account",
    accessorKey: "commission_default_observe_is_revenue_account",
  },
  {
    header: "commission move cost center debit",
    accessorKey: "commission_move_cost_center_debit",
  },
  {
    header: "commission move cost center credit",
    accessorKey: "commission_move_cost_center_credit",
  },
  {
    header: "commission debit account id",
    accessorKey: "commission_debit_account_id",
  },
  {
    header: "commission credit account id",
    accessorKey: "commission_credit_account_id",
  },
  { header: "partial collection", accessorKey: "partial_collection" },
  {
    header: "partial gen entries",
    accessorKey: "partial_gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "partial auto gen entries",
    accessorKey: "partial_auto_gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "partial auto transfer entry",
    accessorKey: "partial_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "partial default account is building bank",
    accessorKey: "partial_default_account_is_building_bank",
  },
  {
    header: "partial default observe account is client",
    accessorKey: "partial_default_observe_account_is_client",
  },
  {
    header: "partial move cost center debit",
    accessorKey: "partial_move_cost_center_debit",
  },
  {
    header: "partial move cost center credit",
    accessorKey: "partial_move_cost_center_credit",
  },
  {
    header: "partial debit account id",
    accessorKey: "partial_debit_account_id",
  },
  {
    header: "partial credit account id",
    accessorKey: "partial_credit_account_id",
  },
  { header: "endorsable", accessorKey: "endorsable" },
  {
    header: "endorsement gen entries",
    accessorKey: "endorsement_gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "endorsement auto gen entries",
    accessorKey: "endorsement_auto_gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "endorsement auto transfer entry",
    accessorKey: "endorsement_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "endorsement default date",
    accessorKey: "endorsement_default_date",
  },
  {
    header: "endorsement move cost center debit",
    accessorKey: "endorsement_move_cost_center_debit",
  },
  {
    header: "endorsement move cost center credit",
    accessorKey: "endorsement_move_cost_center_credit",
  },
  {
    header: "endorsement debit account id",
    accessorKey: "endorsement_debit_account_id",
  },
  {
    header: "endorsement credit account id",
    accessorKey: "endorsement_credit_account_id",
  },
  { header: "returnable", accessorKey: "returnable" },
  {
    header: "returnable gen entries",
    accessorKey: "returnable_gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "returnable auto gen entries",
    accessorKey: "returnable_auto_gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "returnable auto transfer entry",
    accessorKey: "returnable_auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "returnable default date", accessorKey: "returnable_default_date" },
  {
    header: "returnable default account is client",
    accessorKey: "returnable_default_account_is_client",
  },
  {
    header: "returnable default observe account is building bank",
    accessorKey: "returnable_default_observe_account_is_building_bank",
  },
  {
    header: "returnable active operations",
    accessorKey: "returnable_active_operations",
  },
  {
    header: "returnable move cost center debit",
    accessorKey: "returnable_move_cost_center_debit",
  },
  {
    header: "returnable move cost center credit",
    accessorKey: "returnable_move_cost_center_credit",
  },
  {
    header: "returnable debit account id",
    accessorKey: "returnable_debit_account_id",
  },
  {
    header: "returnable credit account id",
    accessorKey: "returnable_credit_account_id",
  },
  {
    header: "returnFeedefault account is client",
    accessorKey: "returnFeedefault_account_is_client",
  },
  {
    header: "returnFeeDebit account id",
    accessorKey: "returnFeeDebit_account_id",
  },
  {
    header: "returnFeeCredit account id",
    accessorKey: "returnFeeCredit_account_id",
  },
  { header: "statement account", accessorKey: "statement_account" },
  {
    header: "statement observe account",
    accessorKey: "statement_observe_account",
  },
  { header: "statement leaving", accessorKey: "statement_leaving" },
  { header: "statement endorsement", accessorKey: "statement_endorsement" },
  { header: "statement collection", accessorKey: "statement_collection" },
  { header: "statement return", accessorKey: "statement_return" },
  { header: "statement partial", accessorKey: "statement_partial" },
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
  { header: "contract id", accessorKey: "contract_id" },
  { header: "total amount", accessorKey: "total_amount" },
  { header: "first batch", accessorKey: "first_batch" },
  {
    header: "payment date",
    accessorKey: "payment_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "voucher pattern id", accessorKey: "voucher_pattern_id" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "currency val", accessorKey: "currency_val" },
  { header: "rest amount", accessorKey: "rest_amount" },
  { header: "client id", accessorKey: "client_id" },
  { header: "cost center id", accessorKey: "cost_center_id" },
  { header: "observe account id", accessorKey: "observe_account_id" },
  { header: "check pattern id", accessorKey: "check_pattern_id" },
  { header: "installments numbers", accessorKey: "installments_numbers" },
  { header: "each number", accessorKey: "each_number" },
  { header: "each duration", accessorKey: "each_duration" },
  {
    header: "first installment date",
    accessorKey: "first_installment_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "final payment", accessorKey: "final_payment" },
  { header: "begin number", accessorKey: "begin_number" },
  {
    header: "installment date",
    accessorKey: "installment_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "installment statement", accessorKey: "installment_statement" },
  { header: "beneficiary name", accessorKey: "beneficiary_name" },
  {
    header: "gen entries type",
    accessorKey: "gen_entries_type",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md text-white py-1 px-2 text-xs ${
          getValue() === 1 ? "bg-purple-500" : "bg-orange-400"
        }`}
      >
        {
          SELECT_LISTS("installment_voucher_type")?.find(
            (c) => c?.id === getValue()
          )?.name
        }
      </span>
    ),
  },
  { header: "bank id", accessorKey: "bank_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "feedback",
    accessorKey: "feedback",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "amount", accessorKey: "amount" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "debit account id", accessorKey: "debit_account_id" },
  { header: "credit account id", accessorKey: "credit_account_id" },
  { header: "cost center id", accessorKey: "cost_center_id" },
  { header: "note", accessorKey: "note" },
  { header: "commission value", accessorKey: "commission_value" },
  { header: "commission percentage", accessorKey: "commission_percentage" },
  { header: "commission debit id", accessorKey: "commission_debit_id" },
  { header: "commission credit id", accessorKey: "commission_credit_id" },
  {
    header: "commission cost center id",
    accessorKey: "commission_cost_center_id",
  },
  { header: "commission note", accessorKey: "commission_note" },
  {
    header: "accounting voucher main data id",
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "feedback",
    accessorKey: "feedback",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "amount", accessorKey: "amount" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "debit account id", accessorKey: "debit_account_id" },
  { header: "credit account id", accessorKey: "credit_account_id" },
  { header: "cost center id", accessorKey: "cost_center_id" },
  { header: "note", accessorKey: "note" },
  {
    header: "accounting voucher main data id",
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "feedback",
    accessorKey: "feedback",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "amount", accessorKey: "amount" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "debit account id", accessorKey: "debit_account_id" },
  { header: "credit account id", accessorKey: "credit_account_id" },
  { header: "cost center id", accessorKey: "cost_center_id" },
  { header: "note", accessorKey: "note" },
  {
    header: "accounting voucher main data id",
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "feedback",
    accessorKey: "feedback",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "amount", accessorKey: "amount" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "debit account id", accessorKey: "debit_account_id" },
  { header: "credit account id", accessorKey: "credit_account_id" },
  { header: "cost center id", accessorKey: "cost_center_id" },
  { header: "note", accessorKey: "note" },
  { header: "reason", accessorKey: "reason" },
  {
    header: "accounting voucher main data id",
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "account id", accessorKey: "account_id" },
  { header: "debit", accessorKey: "debit" },
  { header: "credit", accessorKey: "credit" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "cost center id", accessorKey: "cost_center_id" },
  { header: "voucher main data id", accessorKey: "voucher_main_data_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "currency id", accessorKey: "currency_id" },
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
    header: "created at",
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
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/patterns/update/voucher_pattern/${getValue()}/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "list name", accessorKey: "list_name" },
  { header: "default account id", accessorKey: "default_account_id" },
  { header: "shortcut key", accessorKey: "shortcut_key" },
  {
    header: "auto gen entries",
    accessorKey: "auto_gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "auto transfer entry",
    accessorKey: "auto_transfer_entry",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "Generate a constraint",
    accessorKey: "gen_entries",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "generate records", accessorKey: "generate_records" },
  {
    header: "show contract field",
    accessorKey: "show_contract_field",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "show contract cost center",
    accessorKey: "show_contract_cost_center",
  },
  {
    header: "required cost center",
    accessorKey: "required_cost_center",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "required statement",
    accessorKey: "required_statement",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "default print folder path",
    accessorKey: "default_print_folder_path",
  },
  {
    header: "show debit field",
    accessorKey: "show_debit_field",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "show credit field",
    accessorKey: "show_credit_field",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "debit field label", accessorKey: "debit_field_label" },
  { header: "credit field label", accessorKey: "credit_field_label" },
  {
    header: "show currency",
    accessorKey: "show_currency",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "show cost center",
    accessorKey: "show_cost_center",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    header: "show note",
    accessorKey: "show_note",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "odd table color", accessorKey: "odd_table_color" },
  { header: "even table color", accessorKey: "even_table_color" },
  { header: "sms", accessorKey: "sms" },
  // { header: "mulct price", accessorKey: "mulct_price" },
  // { header: "mulct debit id", accessorKey: "mulct_debit_id" },
  // { header: "mulct credit id", accessorKey: "mulct_credit_id" },
  // { header: "mulct note", accessorKey: "mulct_note" },
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
    header: "created at",
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
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/assets_group/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "last name", accessorKey: "last_name" },
  { header: "note", accessorKey: "note" },
  {
    header: "parent id",
    accessorKey: "parent_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/update/assets_group/${getValue()}`}
          className="text-blue-500 capitalize whitespace-nowrap"
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number" },
  { header: "assets group id", accessorKey: "assets_group_id" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
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
  { header: "is active", accessorKey: "is_active" },
  { header: "assets area id", accessorKey: "assets_area_id" },
  { header: "current assets area id", accessorKey: "current_assets_area_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "assets id", accessorKey: "assets_id" },
  { header: "assets account id", accessorKey: "assets_account_id" },
  { header: "expense account id", accessorKey: "expense_account_id" },
  { header: "depreciation account id", accessorKey: "depreciation_account_id" },
  {
    header: "depreciation Total account id",
    accessorKey: "depreciation_Total_account_id",
  },
  { header: "profit account id", accessorKey: "profit_account_id" },
  { header: "losses account id", accessorKey: "losses_account_id" },
  { header: "evaluation account id", accessorKey: "evaluation_account_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "assets id", accessorKey: "assets_id" },
  { header: "depreciation mode", accessorKey: "depreciation_mode" },
  { header: "is depreciation monthly", accessorKey: "is_depreciation_monthly" },
  {
    header: "depreciation begin date",
    accessorKey: "depreciation_begin_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "age", accessorKey: "age" },
  { header: "depreciation avg", accessorKey: "depreciation_avg" },
  { header: "scrap value", accessorKey: "scrap_value" },
  { header: "old year extra", accessorKey: "old_year_extra" },
  { header: "old year decrease", accessorKey: "old_year_decrease" },
  { header: "old year depreciation", accessorKey: "old_year_depreciation" },
  { header: "old year maintenance", accessorKey: "old_year_maintenance" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "assets id", accessorKey: "assets_id" },
  { header: "importer", accessorKey: "importer" },
  { header: "enter account id", accessorKey: "enter_account_id" },
  {
    header: "enter date",
    accessorKey: "enter_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "enter value", accessorKey: "enter_value" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "enter cost center id", accessorKey: "enter_cost_center_id" },
  {
    header: "enter credit Cost center id",
    accessorKey: "enter_credit_Cost_center_id",
  },
  { header: "enter note", accessorKey: "enter_note" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "assets id", accessorKey: "assets_id" },
  { header: "maintenance contract", accessorKey: "maintenance_contract" },
  {
    header: "maintenance begin date",
    accessorKey: "maintenance_begin_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "maintenance end date",
    accessorKey: "maintenance_end_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "guaranty", accessorKey: "guaranty" },
  {
    header: "guaranty begin date",
    accessorKey: "guaranty_begin_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "guaranty end date",
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "assets id", accessorKey: "assets_id" },
  { header: "is sale", accessorKey: "is_sale" },
  {
    header: "sale date",
    accessorKey: "sale_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "sale customer", accessorKey: "sale_customer" },
  { header: "sales account id", accessorKey: "sales_account_id" },
  { header: "sale value", accessorKey: "sale_value" },
  { header: "currency sale id", accessorKey: "currency_sale_id" },
  { header: "currency sale val", accessorKey: "currency_sale_val" },
  { header: "sale note", accessorKey: "sale_note" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "assets id", accessorKey: "assets_id" },
  { header: "shipping", accessorKey: "shipping" },
  { header: "shipping no", accessorKey: "shipping_no" },
  {
    header: "shipping date",
    accessorKey: "shipping_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "arrive date",
    accessorKey: "arrive_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "arrive place", accessorKey: "arrive_place" },
  { header: "import permit", accessorKey: "import_permit" },
  { header: "custom note", accessorKey: "custom_note" },
  { header: "custom date", accessorKey: "custom_date" },
  { header: "custom expense", accessorKey: "custom_expense" },
  { header: "shipping note", accessorKey: "shipping_note" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "contract id", accessorKey: "contract_id" },
  {
    header: "start date",
    accessorKey: "start_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "lawsuit no", accessorKey: "lawsuit_no" },
  {
    header: "open date",
    accessorKey: "open_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "exec date",
    accessorKey: "exec_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "stop exec", accessorKey: "stop_exec" },
  {
    header: "stop exec date",
    accessorKey: "stop_exec_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "stop exec note", accessorKey: "stop_exec_note" },
  {
    header: "stop pay date",
    accessorKey: "stop_pay_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "quittance date",
    accessorKey: "quittance_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "quittance electricity date",
    accessorKey: "quittance_electricity_date",
  },
  { header: "rent", accessorKey: "rent" },
  { header: "is ended", accessorKey: "is_ended" },
  {
    header: "end date",
    accessorKey: "end_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "exe no", accessorKey: "exe_no" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "currency val", accessorKey: "currency_val" },
  { header: "lawyer rent", accessorKey: "lawyer_rent" },
  {
    header: "lawyer rent date",
    accessorKey: "lawyer_rent_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "lawyer entry", accessorKey: "lawyer_entry" },
  { header: "lawyer debit account id", accessorKey: "lawyer_debit_account_id" },
  {
    header: "lawyer credit account id",
    accessorKey: "lawyer_credit_account_id",
  },
  { header: "lawyer note", accessorKey: "lawyer_note" },
  { header: "maintenance rent", accessorKey: "maintenance_rent" },
  {
    header: "maintenance rent date",
    accessorKey: "maintenance_rent_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "maintenance entry", accessorKey: "maintenance_entry" },
  {
    header: "maintenance debit account id",
    accessorKey: "maintenance_debit_account_id",
  },
  {
    header: "maintenance credit account id",
    accessorKey: "maintenance_credit_account_id",
  },
  { header: "maintenance note", accessorKey: "maintenance_note" },
  { header: "furniture", accessorKey: "furniture" },
  {
    header: "furniture date",
    accessorKey: "furniture_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "furniture entry", accessorKey: "furniture_entry" },
  {
    header: "furniture debit account id",
    accessorKey: "furniture_debit_account_id",
  },
  {
    header: "furniture credit account id",
    accessorKey: "furniture_credit_account_id",
  },
  { header: "furniture note", accessorKey: "furniture_note" },
  { header: "note", accessorKey: "note" },
  { header: "entry id1", accessorKey: "entry_id1" },
  { header: "entry id2", accessorKey: "entry_id2" },
  { header: "entry id3", accessorKey: "entry_id3" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "maintenance order no", accessorKey: "maintenance_order_no" },
  { header: "complaint id", accessorKey: "complaint_id" },
  { header: "maintenance worker id", accessorKey: "maintenance_worker_id" },
  { header: "work kind", accessorKey: "work_kind" },
  {
    header: "start date",
    accessorKey: "start_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "end expected date",
    accessorKey: "end_expected_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "close date",
    accessorKey: "close_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "order state", accessorKey: "order_state" },
  { header: "reason not realized", accessorKey: "reason_not_realized" },
  { header: "convert to", accessorKey: "convert_to" },
  { header: "convert note", accessorKey: "convert_note" },
  { header: "realized", accessorKey: "realized" },
  { header: "mat", accessorKey: "mat" },
  { header: "reason", accessorKey: "reason" },
  { header: "repetition", accessorKey: "repetition" },
  { header: "delay", accessorKey: "delay" },
  { header: "delay reason", accessorKey: "delay_reason" },
  { header: "create entry", accessorKey: "create_entry" },
  {
    header: "entry date",
    accessorKey: "entry_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "entry value", accessorKey: "entry_value" },
  { header: "entry currency id", accessorKey: "entry_currency_id" },
  { header: "entry currency val", accessorKey: "entry_currency_val" },
  { header: "debit account id", accessorKey: "debit_account_id" },
  { header: "credit account id", accessorKey: "credit_account_id" },
  { header: "debit cost center id", accessorKey: "debit_cost_center_id" },
  { header: "credit cost center id", accessorKey: "credit_cost_center_id" },
  { header: "entry note", accessorKey: "entry_note" },
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
    header: "created at",
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
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/material_group/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "last name", accessorKey: "last_name" },
  { header: "note", accessorKey: "note" },
  {
    header: "parent id",
    accessorKey: "parent_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/update/material_group/${getValue()}`}
          className="text-blue-500 capitalize whitespace-nowrap"
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
    header: "created at",
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
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/materials/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "last name", accessorKey: "last_name" },
  { header: "unity1", accessorKey: "unity1" },
  { header: "unity2", accessorKey: "unity2" },
  { header: "unity3", accessorKey: "unity3" },
  { header: "barcode1", accessorKey: "barcode1" },
  { header: "barcode2", accessorKey: "barcode2" },
  { header: "barcode3", accessorKey: "barcode3" },
  { header: "def unity", accessorKey: "def_unity" },
  { header: "unity fact2", accessorKey: "unity_fact2" },
  { header: "unity fact3", accessorKey: "unity_fact3" },
  { header: "unity fix2", accessorKey: "unity_fix2" },
  { header: "unity fix3", accessorKey: "unity_fix3" },
  { header: "note", accessorKey: "note" },
  { header: "materials group guid", accessorKey: "materials_group_guid" },
  { header: "mat type", accessorKey: "mat_type" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "currency val", accessorKey: "currency_val" },
  { header: "avg price", accessorKey: "avg_price" },
  { header: "last price date", accessorKey: "last_price_date" },
  { header: "last price", accessorKey: "last_price" },
  { header: "max price", accessorKey: "max_price" },
  { header: "sale avg price", accessorKey: "sale_avg_price" },
  {
    header: "sale last price date",
    accessorKey: "sale_last_price_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "sale last price", accessorKey: "sale_last_price" },
  { header: "sale max price", accessorKey: "sale_max_price" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number" },
  { header: "building id", accessorKey: "building_id" },
  {
    header: "parking no",
    accessorKey: "parking_no",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/parking/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },

  { header: "floor no", accessorKey: "floor_no" },
  { header: "area", accessorKey: "area" },
  { header: "area unit", accessorKey: "area_unit" },
  {
    header: "parking kind",
    accessorKey: "parking_kind",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md whitespace-nowrap text-white py-1 px-2 text-xs capitalize `}
        style={{ background: FLAT_PROPERTY_COLORS?.[`parking_${getValue()}`] }}
      >
        {FLAT_PROPERTY_TYPES?.[`parking_${getValue()}`]}
      </span>
    ),
  },

  { header: "description", accessorKey: "description" },
  { header: "view", accessorKey: "view" },
  { header: "customer id", accessorKey: "customer_id" },
  {
    header: "has lawsuit",
    accessorKey: "has_lawsuit",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "cost center id", accessorKey: "cost_center_id" },
  {
    header: "purchase date",
    accessorKey: "purchase_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "flat owner", accessorKey: "flat_owner" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "parking id", accessorKey: "parking_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "parking id", accessorKey: "parking_id" },
  {
    header: "date1",
    accessorKey: "date1",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "print1", accessorKey: "print1" },
  { header: "currency1 id", accessorKey: "currency1_id" },
  {
    header: "date2",
    accessorKey: "date2",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "prnumber", accessorKey: "prnumber" },
  { header: "currency2 id", accessorKey: "currency2_id" },
  { header: "cost price", accessorKey: "cost_price" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "building id", accessorKey: "building_id" },
  { header: "number", accessorKey: "number" },
  {
    header: "shop no",
    accessorKey: "shop_no",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/apartment/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  // { header: "shop kind", accessorKey: "shop_kind" },
  { header: "description", accessorKey: "description" },
  { header: "x index", accessorKey: "x_index" },
  { header: "y index", accessorKey: "y_index" },
  { header: "cost center id", accessorKey: "cost_center_id" },
  { header: "class", accessorKey: "class" },
  { header: "area", accessorKey: "area" },
  { header: "area unit", accessorKey: "area_unit" },
  { header: "view", accessorKey: "view" },
  { header: "license1", accessorKey: "license1" },
  { header: "license2", accessorKey: "license2" },
  { header: "unified num", accessorKey: "unified_num" },
  { header: "manservant room", accessorKey: "manservant_room" },
  { header: "driver room", accessorKey: "driver_room" },
  {
    header: "has lawsuit",
    accessorKey: "has_lawsuit",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { header: "customer id", accessorKey: "customer_id" },
  { header: "customer owner id", accessorKey: "customer_owner_id" },
  { header: "flat owner", accessorKey: "flat_owner" },
  { header: "water meter", accessorKey: "water_meter" },
  { header: "electricity meter", accessorKey: "electricity_meter" },
  { header: "bond type", accessorKey: "bond_type" },
  { header: "bond no", accessorKey: "bond_no" },
  {
    header: "bond date",
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "shop id", accessorKey: "shop_id" },
  { header: "assets id", accessorKey: "assets_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "shop id", accessorKey: "shop_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "shop id", accessorKey: "shop_id" },
  { header: "price", accessorKey: "price" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "cost price", accessorKey: "cost_price" },
  { header: "cost currency id", accessorKey: "cost_currency_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "shop id", accessorKey: "shop_id" },
  { header: "price", accessorKey: "price" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "sale", accessorKey: "sale" },
  { header: "sale currency id", accessorKey: "sale_currency_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "complex name", accessorKey: "complex_name" },
  {
    header: "villa no",
    accessorKey: "villa_no",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/villa/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "emirate", accessorKey: "emirate" },
  { header: "area", accessorKey: "area" },
  { header: "suburb", accessorKey: "suburb" },
  { header: "street", accessorKey: "street" },
  { header: "doc type", accessorKey: "doc_type" },
  { header: "doc no", accessorKey: "doc_no" },
  {
    header: "doc date",
    accessorKey: "doc_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "piece no", accessorKey: "piece_no" },
  { header: "basin no", accessorKey: "basin_no" },
  { header: "water meter", accessorKey: "water_meter" },
  { header: "electricity meter", accessorKey: "electricity_meter" },
  { header: "customer owner id", accessorKey: "customer_owner_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "villa id", accessorKey: "villa_id" },
  { header: "villa account id", accessorKey: "villa_account_id" },
  { header: "cost center id", accessorKey: "cost_center_id" },
  { header: "account bank villa id", accessorKey: "account_bank_villa_id" },
  { header: "cash account id", accessorKey: "cash_account_id" },
  { header: "insurance account id", accessorKey: "insurance_account_id" },
  { header: "lessor id", accessorKey: "lessor_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "villa id", accessorKey: "villa_id" },
  { header: "assets id", accessorKey: "assets_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "villa id", accessorKey: "villa_id" },
  { header: "wall", accessorKey: "wall" },
  { header: "wall state", accessorKey: "wall_state" },
  { header: "lighting count", accessorKey: "lighting_count" },
  { header: "parking count", accessorKey: "parking_count" },
  { header: "parking area", accessorKey: "parking_area" },
  { header: "parking shaded", accessorKey: "parking_shaded" },
  { header: "pool count", accessorKey: "pool_count" },
  { header: "pool state", accessorKey: "pool_state" },
  { header: "pool system", accessorKey: "pool_system" },
  { header: "play ground count", accessorKey: "play_ground_count" },
  { header: "play ground area", accessorKey: "play_ground_area" },
  { header: "garden count", accessorKey: "garden_count" },
  { header: "garden area", accessorKey: "garden_area" },
  { header: "garden state", accessorKey: "garden_state" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "villa id", accessorKey: "villa_id" },
  { header: "floor count", accessorKey: "floor_count" },
  { header: "balcony count", accessorKey: "balcony_count" },
  { header: "room count", accessorKey: "room_count" },
  { header: "service room count", accessorKey: "service_room_count" },
  { header: "other room count", accessorKey: "other_room_count" },
  { header: "bath room count", accessorKey: "bath_room_count" },
  { header: "stairs internal", accessorKey: "stairs_internal" },
  { header: "room state", accessorKey: "room_state" },
  { header: "land area", accessorKey: "land_area" },
  { header: "land area building", accessorKey: "land_area_building" },
  { header: "area unit", accessorKey: "area_unit" },
  { header: "finishing state", accessorKey: "finishing_state" },
  { header: "security system", accessorKey: "security_system" },
  { header: "security type", accessorKey: "security_type" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "villa id", accessorKey: "villa_id" },
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "villa id", accessorKey: "villa_id" },
  {
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "price", accessorKey: "price" },
  { header: "currency id", accessorKey: "currency_id" },
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
  { header: "villa id", accessorKey: "villa_id" },
  {
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "price", accessorKey: "price" },
  { header: "currency id", accessorKey: "currency_id" },
];
// ==== End Villa

export const store = [
  // { header: "id", accessorKey: "id" },
  {
    header: "created at",
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
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/store/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "last name", accessorKey: "last_name" },
  { header: "address", accessorKey: "address" },
  { header: "warehouseman", accessorKey: "warehouseman" },
  { header: "note", accessorKey: "note" },
  {
    header: "parent id",
    accessorKey: "parent_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/store/${getValue()}`}
        >
          {row.original.parent_name}
        </Link>
      );
    },
  },
  {
    header: "store final id",
    accessorKey: "store_final_id",
    cell: ({ row, getValue }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/store/${getValue()}`}
        >
          {row.original.final_name}
        </Link>
      );
    },
  },
];
// const cheque_group = [
//   {
//     id: "select",
//     size: 40,
//     isResizingColumn: false,
//     header: ({ table }) => (
//       <IndeterminateCheckbox
//         {...{
//           checked: table.getIsAllRowsSelected(),
//           indeterminate: table.getIsSomeRowsSelected(),
//           onChange: table.getToggleAllRowsSelectedHandler(),
//         }}
//       />
//     ),
//     cell: ({ row }) => (
//       <IndeterminateCheckbox
//         {...{
//           checked: row.getIsSelected(),
//           disabled: !row.getCanSelect(),
//           indeterminate: row.getIsSomeSelected(),
//           onChange: row.getToggleSelectedHandler(),
//         }}
//       />
//     ),
//   },
//   // { header: "id", accessorKey: "id" },
//   {
//     header: "created at",
//     accessorKey: "created_at",
//     cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
//   },
//   { header: "paperType", accessorKey: "paperType" },
//   { header: "code", accessorKey: "code" },
//   {
//     header: "name",
//     accessorKey: "name",
//     cell: ({ getValue, row }) => {
//       return (
//         <Link
//           className="text-blue-500 capitalize whitespace-nowrap"
//           to={`/update/cheque_group/${row.original.id}`}
//         >
//           {getValue()}
//         </Link>
//       );
//     },
//   },
//   { header: "list name", accessorKey: "list_name" },
//   {
//     header: "default account id",
//     accessorKey: "default_account_id",
//   },
//   {
//     header: "shortcut key",
//     accessorKey: "shortcut_key",
//   },
//   {
//     header: "Generate a constraint",
//     accessorKey: "gen_entries",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "auto gen entries",
//     accessorKey: "auto_gen_entries",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "auto transfer entry",
//     accessorKey: "auto_transfer_entry",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "default print folder",
//     accessorKey: "default_print_folder",
//   },

//   {
//     header: "deportable",
//     accessorKey: "deportable",
//   },
//   {
//     header: "deportable gen entries",
//     accessorKey: "deportable_gen_entries",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "deportable auto gen entries",
//     accessorKey: "deportable_auto_gen_entries",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "deportable auto transfer entry",
//     accessorKey: "deportable_auto_transfer_entry",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "deportable default date",
//     accessorKey: "deportable_default_date",
//     type: "number",
//   },
//   {
//     header: "deportable default account is onwer",
//     accessorKey: "deportable_default_account_is_onwer",
//   },
//   {
//     header: "deportable default observe account is client",
//     accessorKey: "deportable_default_observe_account_is_client",
//   },
//   {
//     header: "deportable move cost center debit",
//     accessorKey: "deportable_move_cost_center_debit",
//   },
//   {
//     header: "deportable move cost center credit",
//     accessorKey: "deportable_move_cost_center_credit",
//   },
//   {
//     header: "deportable debit account id",
//     accessorKey: "deportable_debit_account_id",
//   },
//   {
//     header: "deportable credit account id",
//     accessorKey: "deportable_credit_account_id",
//   },

//   {
//     header: "collection",
//     accessorKey: "collection",
//   },

//   {
//     header: "collection gen entries",
//     accessorKey: "collection_gen_entries",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "collection auto gen entries",
//     accessorKey: "collection_auto_gen_entries",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "collection auto transfer entry",
//     accessorKey: "collection_auto_transfer_entry",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "collection default date",
//     accessorKey: "collection_default_date",
//     type: "number",
//   },
//   {
//     header: "collection default account is building bank",
//     accessorKey: "collection_default_account_is_building_bank",
//   },
//   {
//     header: "collection default observe account is client",
//     accessorKey: "collection_default_observe_account_is_client",
//   },
//   {
//     header: "collection move cost center debit",
//     accessorKey: "collection_move_cost_center_debit",
//   },
//   {
//     header: "collection move cost center credit",
//     accessorKey: "collection_move_cost_center_credit",
//   },
//   {
//     header: "collection credit account id",
//     accessorKey: "collection_credit_account_id",
//   },
//   {
//     header: "collection debit account id",
//     accessorKey: "collection_debit_account_id",
//   },

//   {
//     header: "commission type",
//     accessorKey: "commission_type",
//   },
//   {
//     header: "commission amount from building",
//     accessorKey: "commission_amount_from_building",
//   },
//   {
//     header: "commission default account is building owner",
//     accessorKey: "commission_default_account_is_building_owner",
//   },
//   {
//     header: "commission default observe is revenue account",
//     accessorKey: "commission_default_observe_is_revenue_account",
//   },
//   {
//     header: "commission move cost center debit",
//     accessorKey: "commission_move_cost_center_debit",
//   },
//   {
//     header: "commission move cost center credit",
//     accessorKey: "commission_move_cost_center_credit",
//   },
//   {
//     header: "commission debit account id",
//     accessorKey: "commission_debit_account_id",
//   },
//   {
//     header: "commission credit account id",
//     accessorKey: "commission_credit_account_id",
//   },

//   {
//     header: "partial collection",
//     accessorKey: "partial_collection",
//   },
//   {
//     header: "partial gen entries",
//     accessorKey: "partial_gen_entries",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "partial auto gen entries",
//     accessorKey: "partial_auto_gen_entries",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "partial auto transfer entry",
//     accessorKey: "partial_auto_transfer_entry",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "partial default account is building bank",
//     accessorKey: "partial_default_account_is_building_bank",
//   },
//   {
//     header: "partial default observe account is client",
//     accessorKey: "partial_default_observe_account_is_client",
//   },
//   {
//     header: "partial move cost center debit",
//     accessorKey: "partial_move_cost_center_debit",
//   },
//   {
//     header: "partial move cost center credit",
//     accessorKey: "partial_move_cost_center_credit",
//   },
//   {
//     header: "partial debit account id",
//     accessorKey: "partial_debit_account_id",
//   },
//   {
//     header: "partial credit account id",
//     accessorKey: "partial_credit_account_id",
//   },

//   {
//     header: "endorsable",
//     accessorKey: "endorsable",
//   },
//   {
//     header: "endorsement gen entries",
//     accessorKey: "endorsement_gen_entries",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "endorsement auto gen entries",
//     accessorKey: "endorsement_auto_gen_entries",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "endorsement auto transfer entry",
//     accessorKey: "endorsement_auto_transfer_entry",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "endorsement default date",
//     accessorKey: "endorsement_default_date",
//     type: "number",
//   },
//   {
//     header: "endorsement move cost center debit",
//     accessorKey: "endorsement_move_cost_center_debit",
//   },
//   {
//     header: "endorsement move cost center credit",
//     accessorKey: "endorsement_move_cost_center_credit",
//   },
//   {
//     header: "endorsement debit account id",
//     accessorKey: "endorsement_debit_account_id",
//   },
//   {
//     header: "endorsement credit account id",
//     accessorKey: "endorsement_credit_account_id",
//   },

//   {
//     header: "returnable",
//     accessorKey: "returnable",
//   },
//   {
//     header: "returnable gen entries",
//     accessorKey: "returnable_gen_entries",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "returnable auto gen entries",
//     accessorKey: "returnable_auto_gen_entries",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "returnable auto transfer entry",
//     accessorKey: "returnable_auto_transfer_entry",
//     cell: ({ getValue }) => (
//       <span
//         className={`rounded-md px-2 py-1 text-xs ${
//           getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {" "}
//         {getValue() ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     header: "returnable default date",
//     accessorKey: "returnable_default_date",
//     type: "number",
//   },
//   {
//     header: "returnable default account is client",
//     accessorKey: "returnable_default_account_is_client",
//   },
//   {
//     header: "returnable default observe account is building bank",
//     accessorKey: "returnable_default_observe_account_is_building_bank",
//   },
//   {
//     header: "returnable active operations",
//     accessorKey: "returnable_active_operations",
//   },
//   {
//     header: "returnable move cost center debit",
//     accessorKey: "returnable_move_cost_center_debit",
//   },
//   {
//     header: "returnable move cost center credit",
//     accessorKey: "returnable_move_cost_center_credit",
//   },
//   {
//     header: "returnable debit account id",
//     accessorKey: "returnable_debit_account_id",
//   },
//   {
//     header: "returnable credit account id",
//     accessorKey: "returnable_credit_account_id",
//   },
//   {
//     header: "return fee default account is client",
//     accessorKey: "return_fee_default_account_is_client",
//   },
//   {
//     header: "return fee debit account id",
//     accessorKey: "return_fee_debit_account_id",
//   },
//   {
//     header: "return fee credit account id",
//     accessorKey: "return_fee_credit_account_id",
//   },

//   {
//     header: "statement account",
//     accessorKey: "statement_account",
//   },
//   {
//     header: "statement observe account",
//     accessorKey: "statement_observe_account",
//   },
//   {
//     header: "statement leaving",
//     accessorKey: "statement_leaving",
//   },
//   {
//     header: "statement endorsement",
//     accessorKey: "statement_endorsement",
//   },
//   {
//     header: "statement collection",
//     accessorKey: "statement_collection",
//   },
//   {
//     header: "statement return",
//     accessorKey: "statement_return",
//   },
//   {
//     header: "statement partial",
//     accessorKey: "statement_partial",
//   },
// ];

export const cheque = (type) => [
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
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { header: "number", accessorKey: "number",
  cell: ({ getValue, row }) => {
    return (
      <Link
        className="text-blue-500 capitalize whitespace-nowrap"
        to={`/update/cheque/${row.original.id}`}
      >
        {getValue()}
      </Link>
    );
  }, },
  { header: "amount", accessorKey: "amount" },
  { header: "due date", accessorKey: "due_date", cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK") },
  {
    header: "end due date",
    accessorKey: "end_due_date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "without due date",
    accessorKey: "without_due_date",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),  },
  { header: "type", accessorKey: "type", cell: ({ getValue, row }) => {
    let patternType = type?.[getValue()]
    return (
      <Link
        className="text-blue-500 capitalize whitespace-nowrap"
        to={`/patterns/update/cheque_pattern/${patternType?.name}/${patternType?.id}`}
      >
      {patternType?.name}
      </Link>
    );
  }, }, 
  {
    header: "client id",
    accessorKey: "client_id",
  },
  // {
  //   header: "beneficiary accessorKey",
  //   accessorKey: "beneficiary_accessorKey",
  // },
  // {
  //   header: "cost center id",
  //   accessorKey: "cost_center_id",
  // },
  { header: "note", accessorKey: "note" },
  
  
  {
    header: "bank id",
    accessorKey: "bank_id",
  },
  {
    header: "observe account id",
    accessorKey: "observe_account_id",
  },
  { header: "note1", accessorKey: "note1" },
  { header: "note2", accessorKey: "note2" },
  {
    header: "deport status",
    accessorKey: "deport_status",
  },
  {
    header: "collection status",
    accessorKey: "collection_status",
  },
  {
    header: "partial collection status",
    accessorKey: "partial_collection_status",
  },
  {
    header: "endors status",
    accessorKey: "endors_status",
  },
  {
    header: "return status",
    accessorKey: "return_status",
  },
  {
    header: "deposit status",
    accessorKey: "deposit_status",
  },
];

const contract = [
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
  {
    header: "flat type",
    accessorKey: "flat_type",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/contracts/${row.original.id}`}
        >
          {CONTRACTS_ASSETS_TYPE?.[getValue()]}
        </Link>
      );
    },
  },
  {
    header: "contract type",
    accessorKey: "contract_type",
    cell: ({ getValue, row }) => {
      let contractType = SELECT_LISTS("contact_pattern_contract_type")
        ?.find((c) => c.id === getValue())
        ?.name?.toLowerCase();
      let flatType = CONTRACTS_ASSETS_TYPE?.[row.original.flat_type];
      let updateUrl = `/contracts/${contractType}/${flatType}_${contractType}_contract?flat_type=${flatType}&number=1&contract_id=${row.original.contract_id}`;
      return (
        <Link
          className={`capitalize px-2 py-1 text-sx rounded-md ${
            getValue() === 1
              ? "bg-purple-500 text-white"
              : "bg-orange-500 text-white"
          }`}
          // to={`/contracts/${row.original.id}`}
          to={updateUrl}
        >
          {contractType}
        </Link>
      );
    },
  },
  { header: "feedback", accessorKey: "feedback" },
  { header: "lawsuit", accessorKey: "lawsuit" },
  { header: "commission percentage", accessorKey: "commission_percentage" },
  { header: "commission value", accessorKey: "commission_value" },
  { header: "building id", accessorKey: "building_id" },
  { header: "termination date", accessorKey: "termination_date" },
  { header: "contract type", accessorKey: "contract_type" },
  { header: "contract value", accessorKey: "contract_value" },
  { header: "monthly value", accessorKey: "monthly_value" },
  { header: "currency id", accessorKey: "currency_id" },
  { header: "currency val", accessorKey: "currency_val" },
  { header: "discount rate", accessorKey: "discount_rate" },
  { header: "discount value", accessorKey: "discount_value" },
  { header: "final price", accessorKey: "final_price" },
  { header: "start duration date", accessorKey: "start_duration_date" },
  { header: "end duration date", accessorKey: "end_duration_date" },
  { header: "paid type", accessorKey: "paid_type" },
  { header: "assets number", accessorKey: "assets_number" },
  { header: "client id", accessorKey: "client_id" },
  { header: "building id", accessorKey: "building_id" },
  { header: "parking id", accessorKey: "parking_id" },
  { header: "description", accessorKey: "description" },
  { header: "lessor id", accessorKey: "lessor_id" },
  { header: "seller id", accessorKey: "seller_id" },
  { header: "property delivery date", accessorKey: "property_delivery_date" },
  { header: "issue date", accessorKey: "issue_date" },
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
  // { accessorKey: "id", header: "id" },
  {
    accessorKey: "created_at",
    header: "created at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { accessorKey: "number", header: "number" },

  {
    accessorKey: "land_no",
    header: "land no",

    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/land/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  {
    accessorKey: "name",
    header: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/land/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  {
    accessorKey: "last_name",
    header: "last name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/land/${row.original.id}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { accessorKey: "type", header: "type" },
  {
    accessorKey: "ban",
    header: "ban",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  {
    accessorKey: "customer_id",
    header: "customer id",
    cell: ({ getValue, row }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/update/account/${getValue()}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  {
    accessorKey: "date",
    header: "date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { accessorKey: "city", header: "city" },
  { accessorKey: "region", header: "region" },
  { accessorKey: "space", header: "space" },
  { accessorKey: "area", header: "area" },
  { accessorKey: "area_unit", header: "area unit" },
  { accessorKey: "price", header: "price" },
  { accessorKey: "license_no", header: "license no" },
  { accessorKey: "license", header: "license" },
  {
    accessorKey: "license_date",
    header: "license date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  { accessorKey: "details", header: "details" },
  { accessorKey: "land_type", header: "land type" },
  { accessorKey: "side", header: "side" },
  { accessorKey: "street_name", header: "street name" },
  { accessorKey: "street_count", header: "street count" },
  {
    accessorKey: "buildble",
    header: "buildble",
    cell: ({ getValue }) => (
      <span
        className={`rounded-md px-2 py-1 text-xs ${
          getValue() ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {" "}
        {getValue() ? "Yes" : "No"}
      </span>
    ),
  },
  { accessorKey: "landowner", header: "landowner" },
  { accessorKey: "begin_land_value", header: "begin land value" },
  {
    accessorKey: "currency_begin_land_id",
    header: "currency begin land id",
  },
  { accessorKey: "currency_val_begin_land", header: "currency val begin land" },
  {
    accessorKey: "begin_land_cost_center_id",
    header: "begin land cost center id",
  },
  {
    accessorKey: "currency_purchase_id",
    header: "currency purchase id",
  },
  { accessorKey: "currency_val_purchase", header: "currency val purchase" },
  { accessorKey: "purchase_note", header: "purchase note" },
  {
    accessorKey: "account_id",
    header: "account id",
  },
  {
    accessorKey: "cuowner_id",
    header: "cuowner id",
  },
  {
    accessorKey: "cost_center_id",
    header: "cost center id",
  },
  {
    accessorKey: "bank_account_id",
    header: "bank account id",
  },
  { accessorKey: "commission_percent", header: "commission percent" },
  {
    accessorKey: "account_comm_income_id",
    header: "account comm income id",
  },
  { accessorKey: "used_end_date", header: "used end date" },
  {
    accessorKey: "customer_owner_id",
    header: "customer owner id",
  },
  {
    accessorKey: "owner_account_id",
    header: "owner account id",
  },
  { accessorKey: "identity_value", header: "identity value" },
  {
    accessorKey: "currency_identity_id",
    header: "currency identity id",
  },
  { accessorKey: "currency_valid_entity", header: "currency valid entity" },
  { accessorKey: "identity_begin_date", header: "identity begin date" },
  { accessorKey: "identity_end_date", header: "identity end date" },
  {
    accessorKey: "create_entry_investment",
    header: "create entry investment",
  },
  {
    accessorKey: "identity_entry_id",
    header: "identity entry id",
  },
  { accessorKey: "identity_note", header: "identity note" },
  { accessorKey: "ltn_land_type", header: "ltn land type" },
  { accessorKey: "ltn_city", header: "ltn city" },
  { accessorKey: "ltn_region", header: "ltn region" },
  { accessorKey: "ltn_space", header: "ltn space" },
  { accessorKey: "ltn_license", header: "ltn license" },
  { accessorKey: "ltn_side", header: "ltn side" },
  { accessorKey: "rent", header: "rent" },
  {
    accessorKey: "rent_currency_id",
    header: "rent currency id",
  },
];

const entry_main_data = [
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
    header: "number",
    accessorKey: "number",
    cell: ({ getValue }) => {
      return (
        <Link
          className="text-blue-500 capitalize whitespace-nowrap"
          to={`/vouchers/entries/${getValue()}`}
        >
          Entry number {getValue()}
        </Link>
      );
    },
  },
  {
    header: "created at",
    accessorKey: "created_at",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString("en-UK"),
  },
  {
    header: "created from",
    accessorKey: "created_from",
    cell: ({ getValue, row }) => {
      let createdFrom = getCreatedFromUrl(
        getValue(),
        row.original.created_from_id
      );
      return (
        <Link
          className={`text-blue-500 ${createdFrom?.classes} capitalize`}
          to={createdFrom?.href}
        >
          {getValue()}
        </Link>
      );
    },
  },
  {
    header: "currency id",
    accessorKey: "currency_id",
  },
  {
    header: "Currency Value",
    accessorKey: "currency_val",
  },
  { header: "Note", accessorKey: "note", size: 250 },
  { header: "debit", accessorKey: "debit" },
  { header: "credit", accessorKey: "credit" },
  { header: "difference", accessorKey: "difference" },
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
  contract_cycle,
  contract_financial,
  contract_linked_parking,
  contract_pattern,
  contract_pictures,
  contract_receipt_number,
  financial_data,
  cheque_pattern: bill_pattern,
  installment,
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
  cheque,
  land,
  entry_main_data,
};

export default function getTableColumns(name) {
  return TABLES[name?.replace("-", "_")] || [];
}
