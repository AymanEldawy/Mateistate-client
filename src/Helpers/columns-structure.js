import { Link } from "react-router-dom";
import {
  getContractStatus,
  getContractUnitType,
  getUnitType,
} from "./functions";
import { BanknoteIcon, UserIcon } from "Components/Icons";
import IndeterminateCheckbox from "Components/TableComponents/IndeterminateCheckbox";
import { SELECT_LISTS } from "./constants";
import { ApiActions } from "./Lib/api";
import { DefaultColumnFilter } from "Components/TableComponents/ColumnFilter";

const cheque_pattern = [
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
    size: 40,
    header: "no",
    accessorKey: "number",
    cell: ({ getValue, row }) => {
      return (
        <Link
          to={`/patterns/cheque_pattern/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          # {getValue()}
        </Link>
      );
    },
  },

  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          to={`/patterns/cheque_pattern/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {getValue()}
        </Link>
      );
    },
  },
  {
    header: "paper_type",
    accessorKey: "paper_type",
    cell: ({ getValue }) => {
      let type = SELECT_LISTS("cheque_pattern_paper_type")?.find(
        (c) => c?.id === getValue()
      );
      return <span>{type?.name}</span>;
    },
  },
  { header: "list_name", accessorKey: "list_name" },
  { header: "default_account_id", accessorKey: "default_account_id" },
  {
    header: "gen_entries",
    accessorKey: "gen_entries",
    cell: ({ getValue, row }) => (
      <span className="text-blue-500 font-medium hover:underline">
        {getValue() ? "Yes" : "no"}
      </span>
    ),
  },
  { header: "default_print_folder", accessorKey: "default_print_folder" },
];

const cheque = [
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
    size: 40,
    header: "no",
    accessorKey: "number",
    cell: ({ getValue, row }) => {
      let data = null;
      ApiActions.read("cheque_pattern", {
        conditions: [
          { type: "and", conditions: [["code", "=", row?.original?.type]] },
        ],
      }).then((res) => {
        data = res?.data?.at(0);
      });
      return (
        <Link
          to={`/cheques/${data?.code}/${data?.name}/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          # {getValue()}
        </Link>
      );
    },
  },

  { header: "number", accessorKey: "number" },
  { header: "account", accessorKey: "account" },
  { header: "cost_center", accessorKey: "cost_center" },
  { header: "note", accessorKey: "note" },
  { header: "connect_with", accessorKey: "connect_with" },
  { header: "type", accessorKey: "type" },
  { header: "amount", accessorKey: "amount" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "code", accessorKey: "code" },
  { header: "feedback", accessorKey: "feedback" },
  { header: "currency_val", accessorKey: "currency_val" },
  { header: "seller_id", accessorKey: "seller_id" },
  { header: "observe_account_id", accessorKey: "observe_account_id" },
  { header: "observe_cost_center_id", accessorKey: "observe_cost_center_id" },
  { header: "observe_account_note", accessorKey: "observe_account_note" },
  { header: "beneficiary_name", accessorKey: "beneficiary_name" },
  { header: "parking_id", accessorKey: "parking_id" },
  { header: "shop_id", accessorKey: "shop_id" },
  { header: "shop_no", accessorKey: "shop_no" },
  { header: "apartment_id", accessorKey: "apartment_id" },
  { header: "apartment_no", accessorKey: "apartment_no" },
  {
    header: "due_date",
    accessorKey: "due_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "end_due_date",
    accessorKey: "end_due_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "without_due_date", accessorKey: "without_due_date" },
  { header: "bank_id", accessorKey: "bank_id" },
  { header: "note1", accessorKey: "note1" },
  { header: "note2", accessorKey: "note2" },
  { header: "deport_status", accessorKey: "deport_status" },
  { header: "collection_status", accessorKey: "collection_status" },
  {
    header: "partial_collection_status",
    accessorKey: "partial_collection_status",
  },
  { header: "return_status", accessorKey: "return_status" },
  { header: "deposit_status", accessorKey: "deposit_status" },
  { header: "gen_entries", accessorKey: "gen_entries" },
];

const bill_pattern = [
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
    size: 40,
    header: "no",
    accessorKey: "number",
    cell: ({ getValue, row }) => (
      <Link
        to={`/patterns/bill_pattern/${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        # {getValue()}
      </Link>
    ),
  },
  { header: "code", accessorKey: "code" },
  { header: "name", accessorKey: "name" },
  {
    header: "bill_type",
    accessorKey: "bill_type",
    cell: ({ getValue }) => {
      let type = SELECT_LISTS("bill_pattern_bill_type")?.find(
        (c) => c?.id === getValue()
      );
      return <span>{type?.name}</span>;
    },
  },
  { header: "note", accessorKey: "note" },
  {
    header: "barcode_bill",
    accessorKey: "barcode_bill",
    cell: ({ getValue, row }) => (
      <span className="text-blue-500 font-medium hover:underline">
        {getValue() ? "Yes" : "no"}
      </span>
    ),
  },
];

const bill = [
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
    size: 40,
    header: "no",
    accessorKey: "number",
    cell: ({ getValue, row }) => {
      let type = SELECT_LISTS("bill_pattern_bill_type")?.find(
        (c) => c?.id === row?.original.bill_kind
      );
      return (
        <Link
          to={`/bill/${row?.original.bill_kind}/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          # {getValue()}
        </Link>
      );
    },
  },
  { header: "bill_date", accessorKey: "bill_date" },
  {
    header: "bill_kind",
    accessorKey: "bill_kind",
    cell: ({ getValue }) => {
      let type = SELECT_LISTS("bill_pattern_bill_type")?.find(
        (c) => c?.id === getValue()
      );
      return <span>{type?.name}</span>;
    },
  },
  { header: "note", accessorKey: "note" },
  {
    header: "barcode_bill",
    accessorKey: "barcode_bill",
  },

  { header: "total_quantities", accessorKey: "total_quantities" },
  { header: "refunded_taxable_amount", accessorKey: "refunded_taxable_amount" },
  {
    header: "non_refunded_taxable_amount",
    accessorKey: "non_refunded_taxable_amount",
  },
  { header: "not_taxable", accessorKey: "not_taxable" },
  { header: "taxable", accessorKey: "taxable" },
  { header: "discounts", accessorKey: "discounts" },
  { header: "discounts_extra", accessorKey: "discounts_extra" },
  { header: "non_refundable_vat", accessorKey: "non_refundable_vat" },
  { header: "non_refundable_vat2", accessorKey: "non_refundable_vat2" },
  { header: "total", accessorKey: "total" },
  { header: "grand_total", accessorKey: "grand_total" },
  { header: "net", accessorKey: "net" },
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
  {
    size: 40,
    header: "no",
    accessorKey: "number",
    cell: ({ getValue, row }) => {
      // contract_type
      let type = SELECT_LISTS("contact_pattern_contract_type")?.find(
        (c) => c?.id === row?.original?.contract_type
      );
      let unitType = getContractUnitType(row?.original);

      return (
        <Link
          to={`/contracts/${type?.name?.toLowerCase()}/${unitType} ${
            type?.name
          } Contract/${row?.original?.number}?flat_type=${unitType}&code=${
            row?.original?.code
          }`}
          className="text-blue-500 font-medium hover:underline"
        >
          # {getValue()}
        </Link>
      );
    },
  },
  {
    header: "building",
    accessorKey: "building_name",
    cell: ({ row, getValue }) => (
      <Link
        className="text-blue-500 hover:underline"
        to={`/update/building/${row?.original?.building_id}`}
      >
        {getValue()}
      </Link>
    ),
  },
  {
    header: "unit",
    accessorKey: "unit_name",
    cell: ({ row, getValue }) => (
      // <Link
      //   className={`font-medium hover:underline`}
      //   style={{ color: row?.original?.hex }}
      //   to={`/update/building/${row?.original?.building_id}`}
      // >
      //   {getValue()}
      // </Link>
      <span className={`font-medium`} style={{ color: row?.original?.hex }}>
        {getValue()}
      </span>
    ),
  },

  {
    header: "unit_type",
    accessorKey: "unit_type",
    cell: ({ row, getValue }) => {
      let unitType = getUnitType(row?.original, getValue());
      return <span className="capitalize">{unitType}</span>;
    },
  },
  {
    header: "description",
    accessorKey: "description",
  },
  // {
  //   header: "contract_type",
  //   accessorKey: "contract_type",
  //   cell: ({ row, getValue }) => {
  //     let rentType = getValue() === CONTRACT_RENT_CODE;
  //     return (
  //       <span
  //         className={`rounded-md px-4 py-1 ${
  //           rentType ? "bg-orange-50 text-orange-600" : ""
  //         }`}
  //       >
  //         {rentType ? "Rent" : "Sale"}
  //       </span>
  //     );
  //   },
  // },
  {
    header: "contract_status",
    accessorKey: "status",
    cell: ({ row, getValue }) => {
      let status = getContractStatus(getValue());
      return (
        <span className={`px-4 text-xs w-fit block mx-auto rounded-md ${status?.classes}`}>
          {status?.value}
        </span>
      );
    },
  },
  {
    header: "contract date",
    accessorKey: "start_duration_date",
    cell: ({ row, getValue }) => (
      <div className="flex gap-1 items-center">
        {new Date(getValue()).toLocaleDateString("en-UK")} -{" "}
        <span className="text-red-500">
          {new Date(row?.original?.end_duration_date).toLocaleDateString(
            "en-UK"
          )}
        </span>
      </div>
    ),
  },
  // {
  //   header: "end_date",
  //   accessorKey: "end_duration_date",
  //   cell: ({ getValue }) => (
  //     <span></span>
  //   ),
  // },
  {
    header: "contract_value",
    accessorKey: "contract_value",
    cell: ({ getValue }) => (
      <span className="flex gap-1 font-medium text-green-600">
        <BanknoteIcon className="h-5 w-5 text-green-500" /> {getValue()}
      </span>
    ),
  },
  {
    header: "client",
    accessorKey: "client_name",
    cell: ({ row, getValue }) => (
      <Link
        className="text-blue-500 hover:underline flex gap-1 items-center capitalize"
        to={`/update/building/${row?.original?.account_id}`}
      >
        <UserIcon className="h-4 w-4" />
        {getValue()}
      </Link>
    ),
  },
  // { header: "number", accessorKey: "number" },
  // { header: "number", accessorKey: "number" },
  // { header: "number", accessorKey: "number" },
  // { header: "number", accessorKey: "number" },
  // { header: "number", accessorKey: "number" },
  // { header: "number", accessorKey: "number" },
  // { header: "number", accessorKey: "number" },
];

const category = [
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
    size: 40,
    header: "no",
    accessorKey: "number",
    cell: ({ getValue, row }) => (
      <Link
        to={`/form/category/${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        # {getValue()}
      </Link>
    ),
  },
  { header: "name", accessorKey: "name" },
  { header: "description", accessorKey: "description" },
  { header: "parent_name", accessorKey: "parent_name" },
  { header: "image", accessorKey: "image" },
];

const evacuation_request = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "description", accessorKey: "description" },
  {
    header: "evacuation_date",
    accessorKey: "evacuation_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "contract_id", accessorKey: "contract_id" },
  { header: "user_account_id", accessorKey: "user_account_id" },
  {
    header: "request_status",
    accessorKey: "request_status",
    cell: ({ getValue }) => {
      let type = SELECT_LISTS("evacuation_request_status")?.find(
        (c) => c?.id === getValue()
      );
      return <span>{type?.name}</span>;
    },
  },
  { header: "note", accessorKey: "note" },
];

const service = [
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
    cell: ({ row, getValue }) => (
      <Link
        to={`/maintenances/${row?.original?.code}/${row.original.id}`}
        className="text-blue-500 font-medium hover:underline"
      >
        # {getValue()}
      </Link>
    ),
  },
  { header: "code", accessorKey: "code" },
  {
    header: "start_date",
    accessorKey: "start_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "end_date",
    accessorKey: "end_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "building_name", accessorKey: "building_name" },
  { header: "unit_name", accessorKey: "unit_name" },
  { header: "apartment_no", accessorKey: "apartment_no" },
  {
    header: "unit_type",
    accessorKey: "unit_type",
    cell: ({ getValue }) => {
      let type = SELECT_LISTS("unit_type")?.find((c) => c?.id === getValue());
      return <span>{type?.name}</span>;
    },
  },
  { header: "contract_name", accessorKey: "contract_name" },
  { header: "payment_method", accessorKey: "payment_method" },
  { header: "customer_user_name", accessorKey: "customer_user_name" },
  { header: "is_default", accessorKey: "is_default" },
  { header: "total", accessorKey: "total" },
  {
    header: "status",
    accessorKey: "status",
    cell: ({ getValue }) => {
      let type = SELECT_LISTS("service_status")?.find(
        (c) => c?.id === getValue()
      );
      return <span>{type?.name}</span>;
    },
  },
  { header: "supervisor_user_name", accessorKey: "supervisor_user_name" },
  { header: "reason", accessorKey: "reason" },
];

const user_work_times = [
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
  { header: "user_id", accessorKey: "user_id" },
  { header: "category_id", accessorKey: "category_id" },
  { header: "work_time_start", accessorKey: "work_time_start" },
  { header: "work_time_end", accessorKey: "work_time_end" },
];
const material_group = [
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
  { header: "name", accessorKey: "name" },
  { header: "parent_name", accessorKey: "parent_name" },
  { header: "note", accessorKey: "note" },
];

const material = [
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
  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/material/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          # {getValue()}
        </Link>
      );
    },
  },
  { header: "defaults1", accessorKey: "defaults1" },
  { header: "unit1", accessorKey: "unit1" },
  { header: "barcode1", accessorKey: "barcode1" },
  { header: "unit2", accessorKey: "unit2" },
  { header: "exchange2", accessorKey: "exchange2" },
  { header: "barcode2", accessorKey: "barcode2" },
  { header: "defaults2", accessorKey: "defaults2" },
  { header: "unit3", accessorKey: "unit3" },
  { header: "exchange3", accessorKey: "exchange3" },
  { header: "barcode3", accessorKey: "barcode3" },
  { header: "defaults3", accessorKey: "defaults3" },
  { header: "material_group_name", accessorKey: "material_group_name" },
  { header: "note", accessorKey: "note" },
  {
    header: "material_type",
    accessorKey: "material_type",
    cell: ({ getValue }) => {
      let type = SELECT_LISTS("material_type")?.find(
        (c) => c?.id === getValue()
      );
      return <span>{type?.name}</span>;
    },
  },
];

const lack_reason = [
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
  { header: "created_at", accessorKey: "created_at" },
  { header: "code", accessorKey: "code" },
  { header: "reason", accessorKey: "reason" },
  { header: "available", accessorKey: "available" },
];

const category_problem = [
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
    header: "category_name",
    accessorKey: "category_name",
    cell: ({ row, getValue }) => {
      return getValue();
    },
  },
  {
    header: "description",
    accessorKey: "description",
    cell: ({ row, getValue }) => {
      return (
        <Link
          className="text-blue-500 hover:underline"
          to={`/category_problem/${row?.original?.number}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "price", accessorKey: "price" },
  { header: "minutes", accessorKey: "minutes" },
  { header: "is_available", accessorKey: "is_available" },
];

const account = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => {
      return (
      <IndeterminateCheckbox
        {...{
          checked: table?.getIsAllRowsSelected(),
          indeterminate: table?.getIsSomeRowsSelected(),
          onChange: table?.getToggleAllRowsSelectedHandler(),
        }}
      />
    )},
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row?.getIsSelected(),
          disabled: !row?.getCanSelect(),
          indeterminate: row?.getIsSomeSelected(),
          onChange: row?.getToggleSelectedHandler(),
        }}
        style={{ px: "15px" }}
      />
    ),
  },
  {
    header: "number",
    accessorKey: "number",
    sortingFn: "myCustomSortingFn", // use custom global sorting function
    Filter: DefaultColumnFilter,
    enableColumnFilter: true,
    accessorFn: (c) => {
      // console.log(c,'---s');
    },
    filter:'includesStringSensitive',
    filterFn: (c) => {
      // console.log(c,'---s');
    },
  },

  {
    header: "name",
    accessorKey: "name",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/account/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
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
      let type = SELECT_LISTS("account_type")?.find(
        (c) => c?.id === getValue()
      );
      return <span>{type?.name}</span>;
    },
  },
  { header: "parent_name", accessorKey: "parent_name" },
  { header: "final_name", accessorKey: "final_name" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "currency", accessorKey: "currency_name" },
  { header: "note", accessorKey: "note" },
];

const user = [
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
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/user/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          # {getValue()}
        </Link>
      );
    },
  },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/user/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {getValue()}
        </Link>
      );
    },
  },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "phone", accessorKey: "phone" },
  { header: "token", accessorKey: "token" },
  {
    header: "card_type",
    accessorKey: "card_type",

    cell: ({ getValue }) => {
      let type = SELECT_LISTS("user_type")?.find((c) => c?.id === getValue());
      return <span>{type?.name}</span>;
    },
  },
  {
    header: "date_of_birth",
    accessorKey: "date_of_birth",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
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
  {
    header: "nationality",
    accessorKey: "nationality",
  },
];
const lessor = [
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
    header: "name",
    accessorKey: "name",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/form/lessor/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
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

const owner = [
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
    header: "name",
    accessorKey: "name",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/form/owner/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
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

const reservation_property = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "account", accessorKey: "account" },
  { header: "property_type", accessorKey: "property_type" },
  { header: "building_id", accessorKey: "building_id" },
  { header: "property_id", accessorKey: "property_id" },
  {
    header: "book_date",
    accessorKey: "book_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "end_book_date",
    accessorKey: "end_book_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "note", accessorKey: "note" },
  { header: "has_payment", accessorKey: "has_payment" },
  { header: "payment_method", accessorKey: "payment_method" },
  { header: "reservation_expired", accessorKey: "reservation_expired" },
  { header: "payment_amount", accessorKey: "payment_amount" },
  { header: "currency_id", accessorKey: "currency_id" },
];
const seller = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/form/seller/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
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

const bank = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/form/bank/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "address", accessorKey: "address" },
];

const cost_center = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "number", accessorKey: "number" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/form/cost_center/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "parent_id", accessorKey: "parent_name" },
  { header: "note", accessorKey: "note" },
];

const country = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "name", accessorKey: "name" },
  { header: "code", accessorKey: "code" },
];
const currency = [
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
    header: "name",
    accessorKey: "name",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/form/currency/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "code", accessorKey: "code" },
  { header: "rate", accessorKey: "rate" },
  {
    header: "ltnname",
    accessorKey: "ltnname",
  },
];

//  === building card

const building = [
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
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => (
      <Link
        to={`/buildings/${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        # {getValue()}
      </Link>
    ),
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
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
  {
    header: "purchase_date",
    accessorKey: "purchase_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
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

// ==== End Cards

// ==== Start accounting_voucher

const accounting_voucher_grid_data = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
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


const accounting_voucher_main_data = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
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

const accounting_voucher_pattern = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
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

// ==== End accounting_voucher
// ==== Start apartment

const apartment = [
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
  { header: "building_id", accessorKey: "building_name" },
  {
    header: "apartment_number",
    accessorKey: "apartment_no",
    cell: ({ getValue, row }) => (
      <Link
        to={`/form/apartment/${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        {getValue()}
      </Link>
    ),
  },
  { header: "floor", accessorKey: "floor" },
  {
    header: "apartment_kind",
    accessorKey: "apartment_kind",
    cell: ({ getValue, row }) => {
      let kind = SELECT_LISTS("apartment_flat_type")?.find(
        (c) => c?.id === +getValue()
      ).name;
      return (
        <span
          to={`/form/apartment/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {kind}
        </span>
      );
    },
  },
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
  { header: "room_count", accessorKey: "room_count" },
  { header: "property_values_id", accessorKey: "property_values_id" },
  { header: "hex", accessorKey: "hex" },
  { header: "cost_price", accessorKey: "cost_price" },
  { header: "amount_paid", accessorKey: "amount_paid" },
  { header: "cost_currency_id", accessorKey: "cost_currency_id" },
  { header: "note", accessorKey: "note" },
];

// ==== End apartment

const contract_cycle = [
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

const contract_financial = [
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
  { header: "current_securing_value", accessorKey: "current_securing_value" },
  { header: "contract_price", accessorKey: "contract_price" },
  { header: "contract_validate", accessorKey: "contract_validate" },
  { header: "electricity_insurance", accessorKey: "electricity_insurance" },
  { header: "last_meter_reading", accessorKey: "last_meter_reading" },
  { header: "contract_duration", accessorKey: "contract_duration" },
  {
    header: "start_date",
    accessorKey: "start_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "end_date",
    accessorKey: "end_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
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

const contract_pattern = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
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

// ==== Start Installment
const installment = [
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
  { header: "contract_id", accessorKey: "contract_id" },
  { header: "total_amount", accessorKey: "total_amount" },
  { header: "first_batch", accessorKey: "first_batch" },
  {
    header: "payment_date",
    accessorKey: "payment_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "installment_price", accessorKey: "installment_price" },
  { header: "final_payment", accessorKey: "final_payment" },
  { header: "begin_number", accessorKey: "begin_number" },
  {
    header: "installment_date",
    accessorKey: "installment_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "installment_statement", accessorKey: "installment_statement" },
  { header: "beneficiary_name", accessorKey: "beneficiary_name" },
  { header: "gen_entries_type", accessorKey: "gen_entries_type" },
  { header: "bank_id", accessorKey: "bank_id" },
];

// ==== End Installment

// ==== Start Operations
const op_collection = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
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

const op_deportation = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
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
const op_return = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
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
const voucher_main_data = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "note", accessorKey: "note" },
  { header: "debit", accessorKey: "debit" },
  { header: "credit", accessorKey: "credit" },
  { header: "difference", accessorKey: "difference" },
];

const voucher_pattern = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
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
  { header: "mulct_price", accessorKey: "mulct_price" },
  { header: "mulct_debit_id", accessorKey: "mulct_debit_id" },
  { header: "mulct_credit_id", accessorKey: "mulct_credit_id" },
  { header: "mulct_note", accessorKey: "mulct_note" },
];
// ==== End Voucher

// ==== Start lawsuit
const lawsuit = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "number", accessorKey: "number" },
  { header: "type", accessorKey: "type" },
  { header: "contract_id", accessorKey: "contract_id" },
  {
    header: "start_date",
    accessorKey: "start_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "lawsuit_no", accessorKey: "lawsuit_no" },
  {
    header: "open_date",
    accessorKey: "open_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "exec_date",
    accessorKey: "exec_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "stop_exec", accessorKey: "stop_exec" },
  {
    header: "stop_exec_date",
    accessorKey: "stop_exec_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "stop_exec_note", accessorKey: "stop_exec_note" },
  {
    header: "stop_pay_date",
    accessorKey: "stop_pay_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "quittance_date",
    accessorKey: "quittance_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "exe_no", accessorKey: "exe_no" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "currency_val", accessorKey: "currency_val" },
  { header: "lawyer_rent", accessorKey: "lawyer_rent" },
  {
    header: "lawyer_rent_date",
    accessorKey: "lawyer_rent_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
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

// ==== Start Parking
const parking = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "building_id", accessorKey: "building_name" },
  {
    header: "parking_no",
    accessorKey: "parking_no",
    cell: ({ getValue, row }) => (
      <Link
        to={`/parking/${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        {getValue()}
      </Link>
    ),
  },
  {
    header: "parking_kind",
    accessorKey: "parking_kind",
    cell: ({ getValue, row }) => {
      let kind = SELECT_LISTS("parking_kind_type")?.find(
        (c) => c?.id === +getValue()
      ).name;
      return (
        <span
          to={`/parking/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {kind}
        </span>
      );
    },
  },
  { header: "floor_no", accessorKey: "floor_no" },
  { header: "area", accessorKey: "area" },
  { header: "area_unit", accessorKey: "area_unit" },
  { header: "parking_kind", accessorKey: "parking_kind" },
  { header: "description", accessorKey: "description" },
  { header: "view", accessorKey: "view" },
  { header: "customer_id", accessorKey: "customer_id" },
  { header: "has_lawsuit", accessorKey: "has_lawsuit" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  {
    header: "purchase_date",
    accessorKey: "purchase_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "flat_owner", accessorKey: "flat_owner" },
  { header: "note", accessorKey: "note" },
];
// ==== End Parking

// ==== Start Shop
const shop = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "number", accessorKey: "number" },
  {
    header: "shop_no",
    accessorKey: "shop_no",

    cell: ({ getValue, row }) => (
      <Link
        to={`/form/shop/${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        {getValue()}
      </Link>
    ),
  },
  {
    header: "shop_kind",
    accessorKey: "shop_kind",
    cell: ({ getValue, row }) => {
      let kind = SELECT_LISTS("shop_kind_type")?.find(
        (c) => c?.id === +getValue()
      ).name;
      return (
        <span
          to={`/form/shop/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {kind}
        </span>
      );
    },
  },
  { header: "building_id", accessorKey: "building_name" },
  { header: "description", accessorKey: "description" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
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
  {
    header: "bond_date",
    accessorKey: "bond_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "type", accessorKey: "type" },
  { header: "note", accessorKey: "note" },
];

// ==== End Shop
// ==== Start Villa
const villa = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "piece_no", accessorKey: "piece_no" },
  { header: "basin_no", accessorKey: "basin_no" },
  { header: "water_meter", accessorKey: "water_meter" },
  { header: "electricity_meter", accessorKey: "electricity_meter" },
  { header: "customer_owner_id", accessorKey: "customer_owner_id" },
  { header: "note", accessorKey: "note" },
];
const owner_expenses_types = [
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
  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => (
      <Link
        to={`/owner_expenses_types/${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        {getValue()}
      </Link>
    ),
  },
  { header: "ltnname", accessorKey: "ltnname" },
  { header: "note", accessorKey: "note" },
];

const owner_expenses = [
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
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "number",
    accessorKey: "number",
    cell: ({ getValue, row }) => (
      <Link
        to={`/owner_expenses/${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        # {getValue()}
      </Link>
    ),
  },
  { header: "receipt_number", accessorKey: "receipt_number" },
  { header: "building_name", accessorKey: "building_name" },
  { header: "owner_name", accessorKey: "owner_name" },
  { header: "note", accessorKey: "note" },
];

// ==== End Villa

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
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "number", accessorKey: "number" },
  { header: "name", accessorKey: "name" },
  { header: "type", accessorKey: "type" },
  { header: "ban", accessorKey: "ban" },
  { header: "land_no", accessorKey: "land_no" },
  {
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "city", accessorKey: "city" },
  { header: "region", accessorKey: "region" },
  { header: "space", accessorKey: "space" },
  { header: "area", accessorKey: "area" },
  { header: "area_unit", accessorKey: "area_unit" },
  { header: "price", accessorKey: "price" },
  { header: "license_no", accessorKey: "license_no" },
  { header: "license", accessorKey: "license" },
  {
    header: "license_date",
    accessorKey: "license_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
];
const store = [
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
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "number",
    accessorKey: "number",
    cell: ({ getValue, row }) => (
      <Link
        to={`/store/${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        # {getValue()}
      </Link>
    ),
  },
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
  { header: "created_at", accessorKey: "created_at" },
  { header: "number", accessorKey: "number" },
  { header: "debit", accessorKey: "debit" },
  { header: "credit", accessorKey: "credit" },
  { header: "account_name", accessorKey: "account_id" },
  { header: "cost_center", accessorKey: "cost_center_id" },
  { header: "original", accessorKey: "created_from" },
  { header: "note", accessorKey: "note" },
  { header: "observe_account_id", accessorKey: "observe_account_id" },
];

const worker_building = [
  {
    name: "building_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "building",
    ref_col: "id",
  },
];
const worker_category = [
  {
    name: "category_id",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "category",
    ref_col: "id",
  },
];

const TABLES = {
  contract,
  reservation_property,
  account,
  lessor,
  owner,
  seller,
  bank,
  cost_center,
  country,
  currency,
  building,
  accounting_voucher_grid_data,
  accounting_voucher_main_data,
  accounting_voucher_pattern,
  apartment,
  contract_cycle,
  contract_financial,
  contract_pattern,
  installment,
  op_collection,
  op_deportation,
  op_return,
  voucher_main_data,
  voucher_pattern,
  lawsuit,
  material_group,
  material,
  parking,
  shop,
  villa,
  user,
  store,
  land,
  owner_expenses,
  owner_expenses_types,
  category,
  category_problem,
  evacuation_request,
  service,
  cheque_pattern,
  bill_pattern,
  lack_reason,
  entry_main_data,
  cheque,
  worker_building,
  worker_category,
  user_work_times,
  bill,
};

export default function getTableColumns(name) {
  return TABLES[name.replace("-", "_")] || [];
}
