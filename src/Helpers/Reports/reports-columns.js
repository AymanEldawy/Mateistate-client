import FIELDS_STRUCTURE from "Helpers/Forms/fields-structure";

const cheques_report = [
  {
    header: "Cheque type",
    accessorKey: "type",
  },

  {
    header: "account_number",
    accessorKey: "account_internal_number",
  },
  {
    header: "account_id",
    accessorKey: "account_id",
  },
  {
    header: "observe_account_id",
    accessorKey: "observe_account_id",
  },
  {
    header: "number",
    accessorKey: "internal_number",
  },
  {
    header: "amount",
    accessorKey: "amount",
  },
  {
    header: "feedback",
    accessorKey: "feedback",
  },
  {
    header: "connect_with",
    accessorKey: "connect_with",
  },
  {
    header: "currency_id",
    accessorKey: "currency_id",
  },
  { header: "observe_cost_center_id", accessorKey: "observe_cost_center_id" },
  {
    header: "observe_account_note",
    accessorKey: "observe_account_note",
  },
  {
    header: "beneficiary_name",
    accessorKey: "beneficiary_name",
  },
  {
    header: "parking number",
    accessorKey: "parking_id",
  },
  {
    header: "shop number",
    accessorKey: "shop_id",
  },
  {
    header: "apartment number",
    accessorKey: "apartment_id",
  },
  {
    header: "due_date",
    accessorKey: "due_date",
  },
  {
    header: "end_due_date",
    accessorKey: "end_due_date",
  },
  {
    header: "without_due_date",
    accessorKey: "without_due_date",
  },
  {
    header: "bank_id",
    accessorKey: "bank_id",
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
    header: "return_status",
    accessorKey: "return_status",
  },
  {
    header: "deposit_status",
    accessorKey: "deposit_status",
  },
  {
    header: "returned ch",
    accessorKey: "returned ch",
  },
];

const returned_cheque_report = [
  {
    header: "Cheque type",
    accessorKey: "type",
  },
  {
    header: "account_number",
    accessorKey: "account_internal_number",
  },
  {
    header: "account_id",
    accessorKey: "account_id",
  },
  {
    header: "observe_account_id",
    accessorKey: "observe_account_id",
  },
  {
    header: "number",
    accessorKey: "internal_number",
  },
  { header: "amount", accessorKey: "amount" },
  {
    header: "due_date",
    accessorKey: "due_date",
  },
  {
    header: "end_due_date",
    accessorKey: "end_due_date",
  },
  { header: "note", accessorKey: "note" },
  { header: "return_reason", accessorKey: "reason" },
  { header: "processing", accessorKey: "processing" },
  { header: "return_processing", accessorKey: "return_processing" },
  {
    header: "return processing details",
    accessorKey: "return_processing_details",
  },
  { header: "building", accessorKey: "building_id" },
  { header: "units_id", accessorKey: "units_id" },
  { header: "deposited", accessorKey: "deposited" },
  { header: "feedback", accessorKey: "feedback" },
  {
    header: "beneficiary_name",
    accessorKey: "beneficiary_name",
  },
  {
    header: "bank_id",
    accessorKey: "bank_id",
  },
];

const due_note_paper_report = [
  { accessorKey: "number", header: "number" },
  { accessorKey: "account_id", header: "account_id" },
  { accessorKey: "amount", header: "amount" },
  { accessorKey: "currency_id", header: "currency_id" },
  { accessorKey: "amount partly collected", header: "amount partly collected" },
  { accessorKey: "created_at", header: "date" },
  { accessorKey: "due_date", header: "due_date" },
  { accessorKey: "bank_id", header: "bank_id" },
  { accessorKey: "building_id", header: "building_id" },
  { accessorKey: "deposit_on_hold", header: "deposit_on_hold" },
  { accessorKey: "processing", header: "processing" },
  { accessorKey: "email", header: "email" },
  { accessorKey: "mobile", header: "mobile" },
  { accessorKey: "property", header: "property" },
];

const collection_cheque_report = [
  {
    header: "Cheque type",
    accessorKey: "type",
  },
  {
    header: "account_number",
    accessorKey: "account_internal_number",
  },
  {
    header: "account_id",
    accessorKey: "account_id",
  },
  {
    header: "observe_account_id",
    accessorKey: "observe_account_id",
  },
  {
    header: "number",
    accessorKey: "internal_number",
  },
  { header: "amount", accessorKey: "amount" },
  { header: "collected_date", accessorKey: "created_at" },
  { header: "value_received", accessorKey: "value_received" },
  { header: "residual_value", accessorKey: "residual_value" },
  {
    header: "due_date",
    accessorKey: "due_date",
  },
  {
    header: "end_due_date",
    accessorKey: "end_due_date",
  },
  { header: "bank_id", accessorKey: "bank_id" },
  {
    header: "beneficiary_name",
    accessorKey: "beneficiary_name",
  },
  { header: "building", accessorKey: "building_id" },
  { header: "units_id", accessorKey: "units_id" },
  { header: "feedback", accessorKey: "feedback" },
  { header: "deposited", accessorKey: "deposited" },
  { header: "processing", accessorKey: "processing" },
];

// Reality reports
const share_contract = [
  { header: "Contract starting date", accessorKey: "start_duration_date" },
  { header: "Contract expiry date", accessorKey: "end_duration_date" },
  { header: "Lessor", accessorKey: "lessor_id" },
  { header: "Contract amount", accessorKey: "contact_value" },
  { header: "Contract No", accessorKey: "number" },
  { header: "Customer", accessorKey: "client_id" },
  { header: "Contract status", accessorKey: "status" },
  { header: "Contract Expired", accessorKey: "Contract Expired" },
  {
    header: "Discounted contract amount",
    accessorKey: "total_discount_contract",
  },
];

const share_contract_vat = [
  { header: "Contract VAT", accessorKey: "contract_vat" },
  { header: "VAT of customer commission", accessorKey: "customer_vat" },
  { header: "VAT of owner commission", accessorKey: "owner_vat" },
  { header: "VAT of salesman commission", accessorKey: "salesman_vat" },
  {
    header: "VAT of Due amount on termination",
    accessorKey: "termination_vat",
  },
  { header: "Total VAT fees", accessorKey: "total_fees_vat" },
  {
    header: "Total VAT termination fees",
    accessorKey: "total_termination_vat",
  },
  { header: "Total VAT", accessorKey: "total_vat" },
];

const share_contract_columns = [
  { header: "collected cheques", accessorKey: "collected_cheques" },
  {
    header: "collected cheques period",
    accessorKey: "collected_cheques_period",
  },
  { header: "received cash payments", accessorKey: "received_cash_payments" },
  {
    header: "received cash payments period",
    accessorKey: "received_cash_payments_period",
  },
  { header: "total collected amount", accessorKey: "total_collected_amount" },
  {
    header: "total uncollected amount",
    accessorKey: "total_uncollected_amount",
  },
];

// Contract disclosure Report
const contract_reports = [
  // @table => contract
  { header: "Property type", accessorKey: "flat_type" },
  { header: "Contract type", accessorKey: "contract_type" },
  { header: "Previous contracts No.", accessorKey: "contracts_number_prev" },
  { header: "Current contracts No.", accessorKey: "contracts_number_current" },

  ...share_contract,
  { header: "Property No", accessorKey: "unit_id" },
  { header: "Building", accessorKey: "building_id" },
  { header: "Discount value", accessorKey: "discount_value" },
  { header: "Discount Rate", accessorKey: "discount_rate" },
  { header: "Description", accessorKey: "description" },
  { header: "Lawsuit", accessorKey: "lawsuit" },
  { header: "feedback", accessorKey: "feedback" },
  { header: "Previous contract deposit", accessorKey: "previous_securing" },
  { header: "Current contract deposit", accessorKey: "current_securing_value" },

  // @table => contract_termination
  { header: "Contract was terminated", accessorKey: "terminated" },
  { header: "Contract termination date", accessorKey: "termination_date" },
  { header: "Value due to tenant", accessorKey: "owner_rest_amount_plus" },
  { header: "Value due to owner", accessorKey: "owner_rest_amount_minus" },
  { header: "Fines", accessorKey: "fines" },
  { header: "Clearance print", accessorKey: "clearance_printed" },
  { header: "Clearance print date", accessorKey: "clearance_printed_date" },
  { header: "Evacuated", accessorKey: "evacuation_request" },
  { header: "Evacuation date", accessorKey: "evacuation_date" },
  // { header: "Evacuation reason", accessorKey: "" },

  // @table => contract_commission
  {
    header: "Commission percentage from customer",
    accessorKey: "commission_percentage",
  },
  {
    header: "Commission amount from customer",
    accessorKey: "commission_value",
  },
  {
    header: "Commission from owner value",
    accessorKey: "commission_from_owner_value",
  },
  {
    header: "Commission percentage from landlord",
    accessorKey: "commission_from_owner_percentage",
  },

  // Calculations
  { header: "Total revenue", accessorKey: "total_revenue" }, // total revenue
  { header: "Total security deposit", accessorKey: "total_securing_value" },
  {
    header: "Related parking contracts",
    accessorKey: "related_parking_contracts_count",
  },
  ...share_contract_columns,
  // Calculations

  // Unknown tables
  { header: "Net due amount for customer", accessorKey: "net_amount" },
  { header: "Fees date", accessorKey: "fees_date" },
  { header: "Fees value", accessorKey: "fees_value" },
  { header: "Fees account", accessorKey: "fees_revenue_account_id" },
  { header: "Fees details", accessorKey: "fees_details" },
  ...share_contract_vat,
  { header: "tax invoice", accessorKey: "tax_invoice" },
  // { header: "Check box", accessorKey: "" },
  { header: "Processing", accessorKey: "processing" },
];

// building_id	apartment_no	floor_no	description	category	area	area_unit	view	bathroom_count	balcony_count	has_lawsuit	main_cost_center_id	cost_center_id	property_type	water_meter	electricity_meter	statement	x_index	y_index	room_count	property_values_id	hex	cost_price	amount_paid	cost_currency_id	note	apartment_kind	row_index	asset_hash	number	internal_number

const leased_units_report = [
  { header: "Property No.", accessorKey: "apartment_no" },
  { header: "Floor", accessorKey: "floor" },
  { header: "Property type", accessorKey: "apartment_kind" },
  { header: "Building", accessorKey: "building_id" },
  { header: "Description", accessorKey: "description" },
  { header: "Class", accessorKey: "class" },
  { header: "Area", accessorKey: "area" },
  // { header: "Emirate", accessorKey: "emirate" },
  // { header: "Area name", accessorKey: "Area name" },
  // { header: "Suburb", accessorKey: "Suburb" },
  // { header: "Street", accessorKey: "Street" },
  { header: "Rent price", accessorKey: "rent_price" },
  { header: "Selling Price 1", accessorKey: "selling_price 1" },
  { header: "Selling Price 2", accessorKey: "selling_price 2" },
  { header: "Selling Price 3", accessorKey: "selling_price 3" },
  { header: "Leasing status", accessorKey: "leasing_status" },

  {
    header: "Contract termination date",
    accessorKey: "termination_date",
  },
  { header: "Total security deposit", accessorKey: "total_securing_value" },

  // { header: "Water meter No.", accessorKey: "Water meter No." },
  // { header: "Electricity meter No.", accessorKey: "Electricity meter No." },
  // { header: "Bathroom No.", accessorKey: "Bathroom No." },
  // { header: "Balcony No.", accessorKey: "Balcony No." },
  ...share_contract,
  ...share_contract_columns,
  ...share_contract_vat,

  { header: "Property details", accessorKey: "property_details" },
  { header: "Contract details", accessorKey: "contract_details" },
  { header: "Returned value", accessorKey: "returned_value" },
  { header: "Lawsuit on unit", accessorKey: "lawsuit_on_unit" },
  { header: "The basic rental value", accessorKey: "the_basic_rental_value" },
  { header: "Lawsuit on contract", accessorKey: "lawsuit_on_contract" },
  { header: "feedback", accessorKey: "feedback" },
  // { header: "Check box", accessorKey: "Check box" },
  // { header: "Customer balance", accessorKey: "Customer balance" },
  // "Send SMS"
];

const leased_parking_report = [
  { header: "Property No", accessorKey: "apartment_no" },
  { header: "Property type", accessorKey: "parking_kind" },
  { header: "Building", accessorKey: "building_id" },
  { header: "Description", accessorKey: "description" },
  { header: "Area name", accessorKey: "area_name" },
  { header: "Leasing status", accessorKey: "leasing_status" },
  { header: "Related flats no", accessorKey: "related_flats_no" },
  {
    header: "Contract number",
    accessorKey: "contract_number",
  },
  {
    header: "Contract price",
    accessorKey: "contract_value",
  },
  {
    header: "Contract start date",
    accessorKey: "start_duration_date",
  },
  {
    header: "Contract expire date",
    accessorKey: "end_duration_date",
  },
  { header: "Previous contract deposit", accessorKey: "previous_securing" },
  { header: "Current contract deposit", accessorKey: "current_securing_value" },
  { header: "Total security deposit", accessorKey: "total_securing_value" },

  ...share_contract,
  ...share_contract_columns,
  ...share_contract_vat,

  { header: "lawsuit", accessorKey: "lawsuit" },
  { header: "feedback", accessorKey: "feedback" },
];

const leased_lands_report = [
  { header: "Name", accessorKey: "name" },
  { header: "Land type", accessorKey: "type" },
  { header: "City", accessorKey: "city" },
  { header: "Area name", accessorKey: "area_name" },
  { header: "Area unit", accessorKey: "area_unit" },
  { header: "Ownership type", accessorKey: "ownership_type" },
  { header: "Contract status", accessorKey: "contract_status" },
  { header: "Leasing status", accessorKey: "leasing_status" },
  // { header: "Contract starting date", accessorKey: "Contract starting date" },
  // { header: "Contract expiry date", accessorKey: "Contract expiry date" },
  { header: "Customer", accessorKey: "customer" },
  // { header: "Phone No.", accessorKey: "PhoneNo" },
  // { header: "Customer nationality", accessorKey: "Customer nationality" },
  { header: "Area", accessorKey: "area" },
  { header: "Unit", accessorKey: "unit" },
  // { header: "Contract amount", accessorKey: "Contract amount" },
  // {
  //   header: "Discounted contract amount ",
  //   accessorKey: "Discounted contract amount ",
  // },
  // {
  //   header: "Previous contract deposit",
  //   accessorKey: "Previous contract deposit",
  // },
  // {
  //   header: "Current contract deposit",
  //   accessorKey: "Current contract deposit",
  // },
  { header: "Property details", accessorKey: "property_details" },
  { header: "Contract details", accessorKey: "contract_details" },
  { header: "feedback", accessorKey: "feedback" },
];

const leased_villas_report = [
  { header: "Name", accessorKey: "name" },
  { header: "complex_name", accessorKey: "complex_name" },
  { header: "leasing_status", accessorKey: "leasing_status" },
  { header: "contract_status", accessorKey: "contract_status" },
  // { header: "Land type", accessorKey: "type" },
  // { header: "City", accessorKey: "city" },
  { header: "Area name", accessorKey: "area_name" },
  { header: "Area unit", accessorKey: "area_unit" },
  { header: "Ownership type", accessorKey: "ownership_type" },
  { header: "Contract status", accessorKey: "contract_status" },
  { header: "Leasing status", accessorKey: "leasing_status" },
  // { header: "Contract starting date", accessorKey: "Contract starting date" },
  // { header: "Contract expiry date", accessorKey: "Contract expiry date" },
  { header: "Customer", accessorKey: "customer" },
  // { header: "Phone No.", accessorKey: "PhoneNo" },
  // { header: "Customer nationality", accessorKey: "Customer nationality" },
  { header: "Area", accessorKey: "area" },
  { header: "Unit", accessorKey: "unit" },
  // { header: "Contract amount", accessorKey: "Contract amount" },
  // {
  //   header: "Discounted contract amount ",
  //   accessorKey: "Discounted contract amount ",
  // },
  // {
  //   header: "Previous contract deposit",
  //   accessorKey: "Previous contract deposit",
  // },
  // {
  //   header: "Current contract deposit",
  //   accessorKey: "Current contract deposit",
  // },
  { header: "feedback", accessorKey: "feedback" },
];

const units_that_will_be_vacated = [
  { header: "contract no", accessorKey: "contract_number" },
  { header: "customer", accessorKey: "customer" },
  { header: "unit no", accessorKey: "unit_no" },
  { header: "unit type", accessorKey: "unit_type" },
  { header: "from date", accessorKey: "from_date" },
  { header: "from to", accessorKey: "from_to" },
  { header: "evacuation date", accessorKey: "evacuation_date" },
  { header: "day/left", accessorKey: "day_left" },
  { header: "contract value", accessorKey: "contract_value" },
  { header: "note", accessorKey: "note" },
  { header: "property details", accessorKey: "property_details" },
  { header: "contract details", accessorKey: "contract_details" },
  { header: "print warning", accessorKey: "print_warning" },
  { header: "warning print", accessorKey: "warning_print" },
  {
    header: "number of times printing",
    accessorKey: "number_of_times_printing",
  },
  { header: "processing", accessorKey: "processing" },
];

const reserved_units_report = [
  { header: "building", accessorKey: "building_id" },
  { header: "unit type", accessorKey: "unit_type" },
  { header: "customer", accessorKey: "customer" },
  { header: "property", accessorKey: "property" },
  { header: "business no", accessorKey: "business_no" },
  { header: "booking date", accessorKey: "booking_date" },
  {
    header: "booking termination_date",
    accessorKey: "booking_termination_date",
  },
  {
    header: "booking end_date_specified",
    accessorKey: "booking_end_date_specified",
  },
  { header: "booking canceled", accessorKey: "booking_canceled" },
  { header: "note", accessorKey: "note" },
  { header: "payment date", accessorKey: "payment_date" },
  { header: "payment value", accessorKey: "payment_value" },
  { header: "payment available", accessorKey: "payment_available" },
  { header: "payment method", accessorKey: "payment_method" },
  { header: "remaining days no", accessorKey: "remaining_days_no" },
];

const contracts_deposit_report = [
  { header: "customer", accessorKey: "customer" },
  { header: "building", accessorKey: "building_id" },
  { header: "property", accessorKey: "property" },
  { header: "contract no", accessorKey: "contract_no" },
  { header: "contract status", accessorKey: "contract_status" },
  { header: "expired contract", accessorKey: "expired_contract" },
  { header: "previous deposit value", accessorKey: "previous_deposit_value" },
  { header: "current deposit value", accessorKey: "current_deposit_value" },
  { header: "deposit total", accessorKey: "deposit_total" },
  {
    header: "deposit has been retrieved",
    accessorKey: "deposit_has_been_retrieved",
  },
  { header: "deposit retrieve date", accessorKey: "deposit_retrieve_date" },
  { header: "feedback", accessorKey: "feedback" },
];

const contract_expired_reports = [
  {
    header: "number",
    accessorKey: "number",
  },
  // {
  //   header: "gov_number",
  //   accessorKey: "gov_number",
  // },
  {
    header: "feedback",
    accessorKey: "feedback",
  },
  {
    header: "lawsuit",
    accessorKey: "lawsuit",
  },
  {
    header: "apartment_id",
    accessorKey: "apartment_id",
  },
  { header: "description", accessorKey: "description" },
  {
    header: "lessor_id",
    accessorKey: "lessor_id",
  },
  {
    header: "status",
    accessorKey: "status",
  },
  {
    header: "building_id",
    accessorKey: "building_id",
  },

  {
    header: "contract_value",
    accessorKey: "contract_value",
  },
  {
    header: "discount_rate",
    accessorKey: "discount_rate",
  },
  {
    header: "discount_value",
    accessorKey: "discount_value",
  },
  {
    header: "final_price",
    accessorKey: "final_price",
  },
  {
    header: "discount_account_id",
    accessorKey: "discount_account_id",
  },
  {
    header: "previous_securing",
    accessorKey: "previous_securing",
  },
  // {
  //   header: "current_securing_percentage",
  //   accessorKey: "current_securing_percentage",
  // },
  {
    header: "current_securing_value",
    accessorKey: "current_securing_value",
  },

  {
    header: "start_duration_date",
    accessorKey: "start_duration_date",
  },
  {
    header: "end_duration_date",
    accessorKey: "end_duration_date",
  },
  {
    header: "paid_type",
    accessorKey: "paid_type",
  },
  {
    header: "revenue_account_id",
    accessorKey: "revenue_account_id",
  },
  {
    header: "insurance_account_id",
    accessorKey: "insurance_account_id",
  },
];

const contract_near_to_expire_report = [
  {
    header: "number",
    accessorKey: "number",
  },
  // {
  //   header: "gov_number",
  //   accessorKey: "gov_number",
  // },
  {
    header: "feedback",
    accessorKey: "feedback",
  },
  {
    header: "lawsuit",
    accessorKey: "lawsuit",
  },
  {
    header: "apartment_id",
    accessorKey: "apartment_id",
  },
  { header: "description", accessorKey: "description" },
  {
    header: "lessor_id",
    accessorKey: "lessor_id",
  },
  {
    header: "status",
    accessorKey: "status",
  },
  {
    header: "building_id",
    accessorKey: "building_id",
  },

  {
    header: "contract_value",
    accessorKey: "contract_value",
  },
  {
    header: "discount_rate",
    accessorKey: "discount_rate",
  },
  {
    header: "discount_value",
    accessorKey: "discount_value",
  },
  {
    header: "final_price",
    accessorKey: "final_price",
  },
  {
    header: "discount_account_id",
    accessorKey: "discount_account_id",
  },
  {
    header: "previous_securing",
    accessorKey: "previous_securing",
  },
  // {
  //   header: "current_securing_percentage",
  //   accessorKey: "current_securing_percentage",
  // },
  {
    header: "current_securing_value",
    accessorKey: "current_securing_value",
  },

  {
    header: "start_duration_date",
    accessorKey: "start_duration_date",
  },
  {
    header: "end_duration_date",
    accessorKey: "end_duration_date",
  },
  {
    header: "paid_type",
    accessorKey: "paid_type",
  },
  {
    header: "revenue_account_id",
    accessorKey: "revenue_account_id",
  },
  {
    header: "insurance_account_id",
    accessorKey: "insurance_account_id",
  },
];

const contract_payments_report = [
  {
    header: "number",
    accessorKey: "number",
  },
  // {
  //   header: "gov_number",
  //   accessorKey: "gov_number",
  // },
  {
    header: "feedback",
    accessorKey: "feedback",
  },
  {
    header: "lawsuit",
    accessorKey: "lawsuit",
  },
  {
    header: "apartment_id",
    accessorKey: "apartment_id",
  },
  { header: "description", accessorKey: "description" },
  {
    header: "lessor_id",
    accessorKey: "lessor_id",
  },
  {
    header: "status",
    accessorKey: "status",
  },
  {
    header: "building_id",
    accessorKey: "building_id",
  },

  {
    header: "contract_value",
    accessorKey: "contract_value",
  },
  {
    header: "discount_rate",
    accessorKey: "discount_rate",
  },
  {
    header: "discount_value",
    accessorKey: "discount_value",
  },
  {
    header: "final_price",
    accessorKey: "final_price",
  },
  {
    header: "discount_account_id",
    accessorKey: "discount_account_id",
  },
  {
    header: "previous_securing",
    accessorKey: "previous_securing",
  },
  // {
  //   header: "current_securing_percentage",
  //   accessorKey: "current_securing_percentage",
  // },
  {
    header: "current_securing_value",
    accessorKey: "current_securing_value",
  },

  {
    header: "start_duration_date",
    accessorKey: "start_duration_date",
  },
  {
    header: "end_duration_date",
    accessorKey: "end_duration_date",
  },
  {
    header: "paid_type",
    accessorKey: "paid_type",
  },
  {
    header: "revenue_account_id",
    accessorKey: "revenue_account_id",
  },
  {
    header: "insurance_account_id",
    accessorKey: "insurance_account_id",
  },
];

const earning_rental_income_earned_report = [
  {
    header: "contract no",
    accessorKey: "number",
  },
  {
    header: "contract serial",
    accessorKey: "gov_number",
  },
  {
    header: "property no",
    accessorKey: "property_no",
  },
  {
    header: "building",
    accessorKey: "building_id",
  },

  { header: "customer", accessorKey: "customer" },
  { header: "contract type", accessorKey: "contract_type" },
  { header: "type", accessorKey: "flat_type" },
  { header: "description", accessorKey: "description" },
  {
    header: "Discounted contract amount ",
    accessorKey: "final_price ",
  },
  {
    header: "from date",
    accessorKey: "start_duration_date",
  },
  {
    header: "to date",
    accessorKey: "end_duration_date",
  },
  {
    header: "Contract termination date",
    accessorKey: "contract_termination_date",
  },
  { header: "contract days", accessorKey: "contract_days" },
  { header: "daily income", accessorKey: "daily_income" },
  { header: "revenue days no", accessorKey: "revenue_days_no" },
  { header: "income", accessorKey: "income" },
  ...share_contract_columns,
  {
    header: "customer_balance_in_contract",
    accessorKey: "customer_balance_in_contract",
  },
  { header: "VAT value", accessorKey: "VAT_value" },
  { header: "contract terminated", accessorKey: "contract_terminated" },
  { header: "feedback", accessorKey: "contract_terminated" },
];

const general_ledger_report = [
  { accessorKey: "number", header: "number" },
  { accessorKey: "created_at", header: "date" },
  { accessorKey: "note", header: "note" },
  { accessorKey: "debit", header: "debit" },
  { accessorKey: "credit", header: "credit" },
  { accessorKey: "account_id", header: "account name" },
  { accessorKey: "observe_account_id", header: "observe account name" },
  { accessorKey: "currency_id", header: "currency" },
  { accessorKey: "cost_center_id", header: "cost_center" },
  // { accessorKey: "feedback", header: "feedback" },
  { accessorKey: "balance", header: "differences" },
];

const leased_property_activity_report = [
  { accessorKey: "building_id", header: "building " },
  { accessorKey: "units", header: "units" },
  { accessorKey: "contract_type", header: "contract type" },
  { accessorKey: "from_date", header: "from date" },
  { accessorKey: "to_date", header: "to date" },
  { accessorKey: "currency_id", header: "currency id" },
  { accessorKey: "client_id", header: "client_id" },
  { accessorKey: "total_empty_days", header: "total empty days" },
  { accessorKey: "feedback", header: "feedback" },
];

const journal_ledger_report = [
  { accessorKey: "created_at", header: "date" },
  { accessorKey: "account_id", header: "account" },
  { accessorKey: "cost_center", header: "cost_center" },
  { accessorKey: "balance", header: "differences" },
  { accessorKey: "note", header: "notes" },
  { accessorKey: "debit", header: "debit" },
  { accessorKey: "credit", header: "credit" },
  { accessorKey: "entry_origin", header: "created_from" },
  { accessorKey: "entry_origin_no", header: "created_from_no" },
  { accessorKey: "spacial_code", header: "currency" },
  { accessorKey: "receipt_no", header: "receipt_no" },
  { accessorKey: "journal_entry_number", header: "number" },
  { accessorKey: "observe_account_id", header: "observe account name" },
  { accessorKey: "processing", header: "processing" },
];

const cost_center_general_ledger_report = [
  { accessorKey: "created_at", header: "date" },
  { accessorKey: "note", header: "note" },
  { accessorKey: "debit", header: "debit" },
  { accessorKey: "credit", header: "credit" },
  { accessorKey: "account_id", header: "account name" },
  { accessorKey: "balance", header: "differences" },
  { accessorKey: "currency_id", header: "currency" },
  { accessorKey: "cost_center_id", header: "cost_center" },
];

const customer_account_statement_report = [
  { header: "Account code", accessorKey: "account_code" },
  { header: "Account", accessorKey: "account_name" },
  { header: "Date", accessorKey: "date" },
  { header: "Debit", accessorKey: "debit" },
  { header: "Credit", accessorKey: "credit" },
  { header: "Balance", accessorKey: "differences" },
  { header: "uncollected cheques", accessorKey: "uncollected_cheques" },
  { header: "Notes", accessorKey: "notes" },
  { header: "Type", accessorKey: "type" },
  { header: "Due date", accessorKey: "due_date" },
  { header: "Customer serial", accessorKey: "customer_serial" },
  { header: "Customer ID No", accessorKey: "customer_id_no" },
  { header: "Customer card No", accessorKey: "customer_card_no" },
  // { header: "Nationality", accessorKey: "Nationality" },
  // { header: "Latin nationality", accessorKey: "Latin nationality" },
  // { header: "Phone No.", accessorKey: "Phone No." },
  // { header: "Mobile", accessorKey: "Mobile" },
  // { header: "Customer address", accessorKey: "Customer address" },
  // { header: "Latin address", accessorKey: "Latin address" },
  { header: "Fax", accessorKey: "Fax" },
  { header: "Email", accessorKey: "Email" },
  { header: "Bank", accessorKey: "Bank_name" },
  {
    header: "Customer bank account No",
    accessorKey: "customer_bank_account_no",
  },
  { header: "Customer field 1", accessorKey: "customer_field_1" },
  { header: "Customer field 2", accessorKey: "customer_field_2" },
  { header: "Customer field 3", accessorKey: "customer_field_3" },
  { header: "Customer field 4", accessorKey: "customer_field_4" },
  { header: "Customer field 5", accessorKey: "customer_field_5" },
  { header: "Customer field 6", accessorKey: "customer_field_6" },
  { header: "Customer field 7", accessorKey: "customer_field_7" },
  { header: "Material group", accessorKey: "material_group" },
  { header: "Material code", accessorKey: "material_code" },
  { header: "Material name", accessorKey: "material_name" },
  { header: "Barcode", accessorKey: "barcode" },
  { header: "Bill payment type", accessorKey: "bill_payment_type" },
  { header: "Post bill", accessorKey: "post_bill" },
  { header: "Quantity 1", accessorKey: "quantity_1" },
  { header: "Unit", accessorKey: "unit" },
  { header: "Quantity 2", accessorKey: "quantity_2" },
  { header: "Unit 2", accessorKey: "unit_2" },
  { header: "Quantity 3", accessorKey: "quantity_3" },
  { header: "Unit 3", accessorKey: "unit_3" },
  { header: "Unit price", accessorKey: "unit_price" },
  { header: "Total price", accessorKey: "total_price" },
  { header: "Gifts", accessorKey: "gifts" },
  { header: "Discount rate", accessorKey: "Discount_rate" },
  { header: "Discount", accessorKey: "discount" },
  { header: "Extra rate", accessorKey: "extra_rate" },
  { header: "Additions", accessorKey: "additions" },
  { header: "Line details", accessorKey: "line_details" },
  { header: "Production date", accessorKey: "production_date" },
  { header: "Date of expiration", accessorKey: "date_of_expiration" },
  { header: "Class", accessorKey: "class" },
  { header: "Length", accessorKey: "length" },
  { header: "Status", accessorKey: "status" },
  { header: "Hight", accessorKey: "hight" },
  { header: "Number", accessorKey: "number" },
];

const contract_cheque_report = [
  { header: "Floor", accessorKey: "floor" },
  { header: "Property type", accessorKey: "property_type" },
  { header: "Description", accessorKey: "description" },
  { header: "Building", accessorKey: "building" },
  { header: "Owner", accessorKey: "owner" },
  { header: "Emirate", accessorKey: "emirate" },
  { header: "Customer", accessorKey: "customer" },
  // { header: "Mobile", accessorKey: "mobile" },
  // { header: "Customer nationality", accessorKey: "customer nationality" },
  { header: "Contract type", accessorKey: "contract_type" },
  { header: "Property No.", accessorKey: "property_no" },
  { header: "Lessor", accessorKey: "lessor" },
  // { header: "Salesman", accessorKey: "Salesman" },
  { header: "Contract No.", accessorKey: "contract_no" },
  { header: "Contract amount", accessorKey: "contract_value" },
  {
    header: "Discounted contract amount ",
    accessorKey: "final_price ",
  },
  { header: "Contract deposit", accessorKey: "contract_deposit" },
  {
    header: "Payment Method in Contract",
    accessorKey: "payment_method_in_contract",
  },
  { header: "Contract status", accessorKey: "contract_status" },
  { header: "Contract issue date", accessorKey: "contract_issue_date" },
  { header: "Contract starting date", accessorKey: "contract_starting_date" },
  { header: "Contract expiry date", accessorKey: "contract_expiry_date" },
  {
    header: "Contract termination date",
    accessorKey: "contract_termination_date",
  },
  { header: "Received cash payments", accessorKey: "received_cash_payments" },
  {
    header: "الدفعات المقبوضة ضمن الفترة",
    accessorKey: "الدفعات المقبوضة ضمن الفترة",
  },
  { header: "Cheque type", accessorKey: "cheque_type" },
  { header: "Cheque No.", accessorKey: "cheque_no" },
  { header: "Sequence cheque", accessorKey: "sequence_cheque" },
  { header: "Cheque value", accessorKey: "cheque_value" },
  { header: "Value received", accessorKey: "value_received" },
  { header: "Value not collected", accessorKey: "value_not_collected" },
  { header: "Cheque status", accessorKey: "cheque_status" },
  { header: "Bank Name", accessorKey: "bank_name" },
  { header: "Issue date", accessorKey: "issue_date" },
  { header: "Due date", accessorKey: "due_date" },
  { header: "Deposit date", accessorKey: "deposit_date" },
  { header: "Collect date", accessorKey: "collect_date" },
  { header: "Return date", accessorKey: "return_date" },
  {
    header: "Last date of partial collection",
    accessorKey: "last_date_of_partial_collection",
  },
  { header: "Customer balance", accessorKey: "customer_balance" },
  { header: "Contract was terminated", accessorKey: "contract_was_terminated" },
  { header: "Contract input case", accessorKey: "contract_input_case" },
  { header: "Contract note", accessorKey: "contract_note" },
  { header: "Notes", accessorKey: "notes" },
  { header: "Notes 2", accessorKey: "notes 2" },
  // { header: "Purpose of rent", accessorKey: "Purpose of rent" },
  { header: "Previous contracts No.", accessorKey: "previous_contracts_no" },
  { header: "Current contracts No.", accessorKey: "current_contracts_no" },
  { header: "Lawsuit", accessorKey: "lawsuit" },
  { header: "feedback", accessorKey: "feedback" },
  { header: "Automatically renewed", accessorKey: "automatically_renewed" },
  { header: "Processing", accessorKey: "Processing" },
];

const sold_units_report = [
  { header: "Flat no", accessorKey: "flat_no" },
  { header: "Property type", accessorKey: "flat_kind" },
  { header: "Building", accessorKey: "building" },
  { header: "flat status", accessorKey: "flat_status" },
  { header: "Description", accessorKey: "description" },
  { header: "Owner", accessorKey: "owner" },
  { header: "Emirate", accessorKey: "emirate" },
  { header: "Customer", accessorKey: "customer" },
  { header: "Customer balance", accessorKey: "customer_balance" },
  { header: "area_name", accessorKey: "area_name" },
  { header: "Contract type", accessorKey: "contract_type" },
  { header: "Lessor", accessorKey: "lessor" },
  { header: "Contract No.", accessorKey: "contract_no" },
  { header: "Contract amount", accessorKey: "contract_value" },
  { header: "Contract status", accessorKey: "contract_status" },
  ...share_contract_columns,
];

const sold_lands_report = [
  { header: "Name", accessorKey: "name" },
  { header: "land type", accessorKey: "land_type" },
  { header: "area name", accessorKey: "area_name" },

  { header: "basin number", accessorKey: "basin_number" },
  { header: "status", accessorKey: "status" },
  { header: "Customer", accessorKey: "customer" },
  { header: "contract date", accessorKey: "contract_date" },
  { header: "land details", accessorKey: "land_details" },
  { header: "area", accessorKey: "area" },
  { header: "contract amount", accessorKey: "contract_value" },
  { header: "total paid", accessorKey: "total_paid" },
  { header: "Collected cheques", accessorKey: "collected_cheque" },
  { header: "Received cash payments", accessorKey: "received_cash_payments" },
  { header: "Remaining amount", accessorKey: "remaining_amount" },
  { header: "feedback", accessorKey: "feedback" },
];

const sold_villas_report = [
  { header: "villa no", accessorKey: "villa_no" },
  { header: "complex name", accessorKey: "complex_name" },
  { header: "area name", accessorKey: "area_name" },

  { header: "basin number", accessorKey: "basin_number" },
  { header: "area_no", accessorKey: "area_no" },
  { header: "status", accessorKey: "status" },
  { header: "Customer", accessorKey: "customer" },
  { header: "contract date", accessorKey: "contract_date" },
  { header: "villa details", accessorKey: "villa_details" },
  { header: "contract details", accessorKey: "contract_details" },
  { header: "contract amount", accessorKey: "contract_value" },
  { header: "total paid", accessorKey: "total_paid" },
  { header: "Collected cheques", accessorKey: "collected_cheque" },
  { header: "Received cash payments", accessorKey: "received_cash_payments" },
  { header: "Remaining amount", accessorKey: "remaining_amount" },
  { header: "feedback", accessorKey: "feedback" },
];

const overdue_payments_report = [
  { header: "building", accessorKey: "building" },
  { header: "property", accessorKey: "property" },
  { header: "contract", accessorKey: "contract" },
  { header: "customer", accessorKey: "customer" },
  { header: "contract number", accessorKey: "contract_number" },
  { header: "contact_value", accessorKey: "contact_value" },
  { header: "last payment amount", accessorKey: "last_payment_amount" },
  { header: "last payment date", accessorKey: "last_payment_date" },

  ...share_contract_columns,
];

const changes_flats_rent_pricing_report = [
  { header: "building", accessorKey: "building" },
  { header: "property", accessorKey: "property" },
  { header: "floor", accessorKey: "floor" },
  { header: "area", accessorKey: "area" },
  { header: "unit", accessorKey: "unit" },
  { header: "date", accessorKey: "date" },
  { header: "price", accessorKey: "price" },
  { header: "currency", accessorKey: "currency" },
];

const unit_condition_for_construction_report = [
  { header: "building", accessorKey: "building" },
  { header: "unit", accessorKey: "unit" },
  { header: "status", accessorKey: "status" },
  { header: "from date", accessorKey: "from_date" },
  { header: "to date", accessorKey: "to_date" },
];

const manger_cheques_report = [
  { header: "cheque type", accessorKey: "cheque_type" },
  { header: "account", accessorKey: "account" },
  { header: "value", accessorKey: "value" },
  { header: "bank", accessorKey: "bank" },
  { header: "collected", accessorKey: "collected" },
  { header: "partial collected", accessorKey: "partial_collected" },
  { header: "value received", accessorKey: "value_received" },
  { header: "rest of collection", accessorKey: "rest_of_collection" },
  { header: "building", accessorKey: "building" },
  { header: "property", accessorKey: "property" },
  { header: "deposited", accessorKey: "deposited" },
  { header: "deposit bank", accessorKey: "deposit_bank" },
];

const services_contracts_report = [
  { header: "building", accessorKey: "building" },
  { header: "contract_value", accessorKey: "contract_value" },
  { header: "discount_value", accessorKey: "discount_value" },
  { header: "contract_status", accessorKey: "contract_status" },
  { header: "area name", accessorKey: "area_name" },
  { header: "customer", accessorKey: "customer" },
  { header: "contract expire date", accessorKey: "contract_expire_date" },
  { header: "left to finish / day", accessorKey: "left_day" },
  { header: "contract no", accessorKey: "contract_no" },
  {
    header: "contract termination date",
    accessorKey: "contract_termination_date",
  },
  { header: "value due to tenant", accessorKey: "value_due_to_tenant" },
  { header: "value due to owner", accessorKey: "value_due_to_owner" },

  ...share_contract_columns,
  // { header: "customer balance", accessorKey: "customer_balance" },
  { header: "contract input case", accessorKey: "contract_input_case" },
  { header: "contract note", accessorKey: "contract_note" },
  { header: "clearance print date", accessorKey: "clearance_print_date" },
  { header: "clearance printed by", accessorKey: "clearance_printed_by" },
  { header: "feedback", accessorKey: "feedback" },
];

const contract_cycle_report = [
  { header: "building", accessorKey: "building" },
  { header: "property", accessorKey: "property" },
  { header: "floor", accessorKey: "floor" },
  { header: "contract_no", accessorKey: "contract_no" },
  { header: "tenants_name", accessorKey: "tenants_name" },
  { header: "printing", accessorKey: "printing" },
  { header: "register by", accessorKey: "register_by" },
  {
    header: "contract has been delivered to customer",
    accessorKey: "contract_has_been_delivered_to_customer",
  },
  {
    header: "contract delivery date to customer",
    accessorKey: "contract_delivery_date_to_customer",
  },
  {
    header: "registered contract has been received",
    accessorKey: "registered_contract_has_been_received",
  },
  {
    header: "contract received date form customer",
    accessorKey: "contract_received_date_form_customer",
  },
  {
    header: "contract has been received from sender",
    accessorKey: "contract_has_been_received_from_sender",
  },
  {
    header: "contract received date for registration",
    accessorKey: "contract_received_date_for_registration",
  },
  {
    header: "contract sent to registration",
    accessorKey: "contract_sent_to_registration",
  },
  {
    header: "contract delivery date to registration",
    accessorKey: "contract_delivery_date_to_registration",
  },
  {
    header: "contract received from registration",
    accessorKey: "contract_received_from_registration",
  },
  {
    header: "contract received date from registration",
    accessorKey: "contract_received_date_from_registration",
  },
  {
    header: "registered contract has been delivered",
    accessorKey: "registered_contract_has_been_delivered",
  },
  {
    header: "registered contract delivery date to customer",
    accessorKey: "registered_contract_delivery_date_to_customer",
  },
  {
    header: "contract printed",
    accessorKey: "contract_printed",
  },
  {
    header: "contract printed date",
    accessorKey: "contract_printed_date",
  },
  {
    header: "signed by the customer",
    accessorKey: "signed_by_the_customer",
  },
  {
    header: "signed by the owner",
    accessorKey: "signed_by_the_owner",
  },
  {
    header: "signed by the customer date",
    accessorKey: "signed_by_the_customer_date",
  },
  {
    header: "signed by the owner date",
    accessorKey: "signed_by_the_owner_date",
  },
  {
    header: "feedback",
    accessorKey: "feedback",
  },
];

const creditors_ages_report = [
  { header: "account_code", accessorKey: "account_code" },
  { header: "account", accessorKey: "account" },
  { header: "date", accessorKey: "date" },
  { header: "origin", accessorKey: "origin" },
  { header: "origin_no", accessorKey: "origin_no" },
  { header: "debit", accessorKey: "debit" },
  { header: "credit", accessorKey: "credit" },
  { header: "creditor_age", accessorKey: "creditor_age" },
];

const vat_bills_report = [
  { header: "bill type", accessorKey: "bill_type" },
  { header: "sequence", accessorKey: "sequence" },
  { header: "date", accessorKey: "date" },
  { header: "bill date", accessorKey: "bill_date" },
  { header: "note", accessorKey: "note" },
  { header: "class", accessorKey: "class" },
  { header: "link with", accessorKey: "link_with" },
  { header: "account", accessorKey: "account" },
  { header: "total bill", accessorKey: "total_bill" },
  { header: "VAT rate", accessorKey: "VAT_rate" },
  {
    header: "total not taxable amount",
    accessorKey: "total_not_taxable_amount",
  },
  { header: "total taxable amount", accessorKey: "total_taxable_amount" },
  { header: "total VAT", accessorKey: "total_VAT" },
  { header: "link details", accessorKey: "link_details" },
  { header: "tax is not refundable", accessorKey: "tax_is_not_refundable" },
  { header: "refunded VAT", accessorKey: "refunded_VAT" },
  { header: "total amount", accessorKey: "total_amount" },
  { header: "refunded taxable amount", accessorKey: "refunded_taxable_amount" },
  { header: "non refunded tax amount", accessorKey: "non_refunded_tax_amount" },
  { header: "contract type", accessorKey: "contract_type" },
  { header: "building", accessorKey: "building" },
  { header: "customer", accessorKey: "customer" },
  { header: "contract serial", accessorKey: "contract_serial" },
  { header: "tax registration number", accessorKey: "tax_registration_number" },
  { header: "property no", accessorKey: "property_no" },
];

const REPORTS_COLUMNS = {
  cheques_report,
  due_note_paper_report,
  returned_cheque_report,
  collection_cheque_report,
  contract_reports,
  overdue_payments_report,

  // Reality report
  leased_units_report,
  leased_parking_report,
  leased_lands_report,
  leased_villas_report,
  leased_property_activity_report,
  unit_condition_for_construction_report,

  // Sold
  sold_units_report,
  sold_lands_report,
  sold_villas_report,

  units_that_will_be_vacated,
  reserved_units_report,

  // contracts
  contracts_deposit_report,
  contract_expired_reports,
  contract_near_to_expire_report,
  contract_payments_report,
  earning_rental_income_earned_report,
  contract_cheque_report,
  services_contracts_report,
  contract_cycle_report,

  // account report
  creditors_ages_report,
  general_ledger_report,
  journal_ledger_report,
  cost_center_general_ledger_report,
  customer_account_statement_report,
  vat_bills_report,
  //
  changes_flats_rent_pricing_report,
  changes_flats_sale_pricing_report: changes_flats_rent_pricing_report,

  // Manger reports
  manger_cheques_report,
};

export default function getReportColumns(name) {
  return REPORTS_COLUMNS[name];
}
