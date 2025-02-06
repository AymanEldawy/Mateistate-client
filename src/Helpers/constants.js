import {
  ACCOUNT_ASSEMBLY_TYPE_CODE,
  ACCOUNT_DISTRIBUTIVE_TYPE_CODE,
  ACCOUNT_NORMAL_TYPE_CODE,
  APARTMENT_ASSET_TYPE_CODE,
  APARTMENT_ASSET_TYPE_DEFAULT_NAME,
  CONNECT_WITH_BILL_CODE,
  CONNECT_WITH_BILL_NAME,
  CONNECT_WITH_CONTRACT_CODE,
  CONNECT_WITH_CONTRACT_NAME,
  CONNECT_WITH_LAWSUIT_CODE,
  CONNECT_WITH_LAWSUIT_NAME,
  CONNECT_WITH_NOTHING_CODE,
  CONNECT_WITH_NOTHING_NAME,
  LAND_ASSET_TYPE_CODE,
  LAND_ASSET_TYPE_DEFAULT_NAME,
  PARKING_ASSET_TYPE_CODE,
  PARKING_ASSET_TYPE_DEFAULT_NAME,
  SHOP_ASSET_TYPE_CODE,
  SHOP_ASSET_TYPE_DEFAULT_NAME,
  USER_CUSTOMER_CODE,
  USER_WORKER_CODE,
  USER_SUPERVISOR_CODE,
  USER_SUPPLIER_CODE,
  VILLA_ASSET_TYPE_CODE,
  VILLA_ASSET_TYPE_DEFAULT_NAME,
} from "./GENERATE_STARTING_DATA";

export const SERVICE_MENU = [
  {
    key: 1,
    name: "Maintenances",
    subChild: [
      {
        isForm: true,
        key: "Maintenance order",
        link: "/maintenances/1",
      },
      {
        isForm: true,
        key: "Property preparing order",
        link: "/maintenances/2",
      },
    ],
  },
];

export const DEFAULT_BILL_MENU = [
  {
    key: 1,
    name: "Bill",
    subChild: [
      {
        isForm: true,
        key: "Input Bill",
        link: "/bill/1/",
      },
      {
        isForm: true,
        key: "Output Bill",
        link: "/bill/2/",
      },
    ],
  },
];

export const SHOULD_DELETE_COST_CENTER = {
  apartment: true,
  parking: true,
  shop: true,
};

export const POPUP_ACTIONS = {
  ADD_NEW: "ADD_NEW",
  MODIFY: "MODIFY",
  ONLY_VIEW: "ONLY_VIEW",
};

export const METHODS = {
  INSERT: "INSERT",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

export const IGNORED_Fields = ["id"];

export const IGNORED_SHOW_NUMBER_TABLE = {
  parking: true,
  apartment: true,
  shop: true,
};

const nationality_list = [
  { id: "AFGHANISTAN", name: "AFGHANISTAN" },
  { id: "Algeria", name: "Algeria" },
  { id: "Ariteria", name: "Ariteria" },
  { id: "ARMENIA", name: "ARMENIA" },
  { id: "Australia", name: "Australia" },
  { id: "AUSTRIA", name: "AUSTRIA" },
  { id: "Azerbaijan", name: "Azerbaijan" },
  { id: "Bahrain", name: "Bahrain" },
  { id: "Bangladesh", name: "Bangladesh" },
  { id: "Belarus", name: "Belarus" },
  { id: "Bosnia ", name: "Bosnia " },
  { id: "BRAZIL", name: "BRAZIL" },
  { id: "BRITAIN", name: "BRITAIN" },
  { id: "British", name: "British" },
  { id: "Bulgaria", name: "Bulgaria" },
  { id: "Burundi", name: "Burundi" },
  { id: "Cameroon ", name: "Cameroon " },
  { id: "Canadian", name: "Canadian" },
  { id: "Casablanca", name: "Casablanca" },
  { id: "Chad", name: "Chad" },
  { id: "China", name: "China" },
  { id: "Colombia", name: "Colombia" },
  { id: "Croatia", name: "Croatia" },
  { id: "Cyprus", name: "Cyprus" },
  { id: "Czech Republic", name: "Czech Republic" },
  { id: "Denmark", name: "Denmark" },
  { id: "Djibouti", name: "Djibouti" },
  { id: "Dutch", name: "Dutch" },
  { id: "Egypt", name: "Egypt" },
  { id: "Eritrea", name: "Eritrea" },
  { id: "Estonia", name: "Estonia" },
  { id: "Ethiopia", name: "Ethiopia" },
  { id: "France", name: "France" },
  { id: "Georgia", name: "Georgia" },
  { id: "German", name: "German" },
  { id: "Greece", name: "Greece" },
  { id: "Holand", name: "Holand" },
  { id: "HUNGARY", name: "HUNGARY" },
  { id: "Indian", name: "Indian" },
  { id: "Indonesia", name: "Indonesia" },
  { id: "Iran", name: "Iran" },
  { id: "Iraq", name: "Iraq" },
  { id: "Ireland", name: "Ireland" },
  { id: "Italy", name: "Italy" },
  { id: "Japan", name: "Japan" },
  { id: "Jordan", name: "Jordan" },
  { id: "Kazakhstan", name: "Kazakhstan" },
  { id: "Kenya", name: "Kenya" },
  { id: "KOREA", name: "KOREA" },
  { id: "Kuwait", name: "Kuwait" },
  { id: "Kyrgyz Republic", name: "Kyrgyz Republic" },
  { id: "Lebanon", name: "Lebanon" },
  { id: "Liberia", name: "Liberia" },
  { id: "Libya", name: "Libya" },
  { id: "Lituania", name: "Lituania" },
  { id: "Malaysia", name: "Malaysia" },
  { id: "Mauritania", name: "Mauritania" },
  { id: "Mexico", name: "Mexico" },
  { id: "Morocco", name: "Morocco" },
  { id: "Myanmar", name: "Myanmar" },
  { id: "Nepal", name: "Nepal" },
  { id: "New Zealand", name: "New Zealand" },
  { id: "Nigeria", name: "Nigeria" },
  { id: "Norway ", name: "Norway " },
  { id: "Oman", name: "Oman" },
  { id: "Pakistan", name: "Pakistan" },
  { id: "Pakistani", name: "Pakistani" },
  { id: "Palestinian", name: "Palestinian" },
  { id: "Papua New Guinee", name: "Papua New Guinee" },
  { id: "Philippines", name: "Philippines" },
  { id: "Poland", name: "Poland" },
  { id: "Portuguese", name: "Portuguese" },
  { id: "Qatar", name: "Qatar" },
  { id: "Repubica Moldova ", name: "Repubica Moldova " },
  { id: "Republic of  Djibouti", name: "Republic of  Djibouti" },
  { id: "Republic of Cameroon", name: "Republic of Cameroon" },
  { id: "Republic of Guinea", name: "Republic of Guinea" },
  { id: "Republic of Mali", name: "Republic of Mali" },
  { id: "Republic of Mauritus", name: "Republic of Mauritus" },
  { id: "Republic of Namibia", name: "Republic of Namibia" },
  { id: "Republic of The Gambia", name: "Republic of The Gambia" },
  { id: "Romania", name: "Romania" },
  { id: "Russia", name: "Russia" },
  { id: "Rwanda", name: "Rwanda" },
  { id: "SAUDI ARABIA", name: "SAUDI ARABIA" },
  { id: "Serbia", name: "Serbia" },
  { id: "Seychelles", name: "Seychelles" },
  { id: "Singapore", name: "Singapore" },
  { id: "Slovakya", name: "Slovakya" },
  { id: "Somalia", name: "Somalia" },
  { id: "South Africa", name: "South Africa" },
  { id: "Spain", name: "Spain" },
  { id: "Sri Lanka", name: "Sri Lanka" },
  { id: "Sri Lanka", name: "Sri Lanka" },
  { id: "Sudanesse", name: "Sudanesse" },
  { id: "Switzerland", name: "Switzerland" },
  { id: "Syria", name: "Syria" },
  { id: "Tajikistan", name: "Tajikistan" },
  { id: "Tanzania", name: "Tanzania" },
  { id: "Thailand", name: "Thailand" },
  { id: "Tunisia", name: "Tunisia" },
  { id: "Turkenistan", name: "Turkenistan" },
  { id: "Turkey", name: "Turkey" },
  { id: "UAE", name: "UAE" },
  { id: "Uganda", name: "Uganda" },
  { id: "Ukraine", name: "Ukraine" },
  { id: "United Kingdom", name: "United Kingdom" },
  { id: "USA", name: "USA" },
  { id: "Uzbekistan", name: "Uzbekistan" },
  { id: "Vietnam", name: "Vietnam" },
  { id: "Yemen", name: "Yemen" },
  { id: "Yugoslavia", name: "Yugoslavia" },
  { id: "Zimbabwe", name: "Zimbabwe" },
  { id: "AFGHANISTAN", name: "AFGHANISTAN" },
  { id: "Algeria", name: "Algeria" },
  { id: "Ariteria", name: "Ariteria" },
  { id: "ARMENIA", name: "ARMENIA" },
  { id: "Australia", name: "Australia" },
  { id: "AUSTRIA", name: "AUSTRIA" },
  { id: "Azerbaijan", name: "Azerbaijan" },
  { id: "Bahrain", name: "Bahrain" },
  { id: "Bangladesh", name: "Bangladesh" },
  { id: "Belarus", name: "Belarus" },
  { id: "Bosnia ", name: "Bosnia " },
  { id: "BRAZIL", name: "BRAZIL" },
  { id: "BRITAIN", name: "BRITAIN" },
  { id: "British", name: "British" },
  { id: "Bulgaria", name: "Bulgaria" },
  { id: "Burundi", name: "Burundi" },
  { id: "Cameroon ", name: "Cameroon " },
  { id: "Canadian", name: "Canadian" },
  { id: "Casablanca", name: "Casablanca" },
  { id: "Chad", name: "Chad" },
  { id: "China", name: "China" },
  { id: "Colombia", name: "Colombia" },
  { id: "Croatia", name: "Croatia" },
  { id: "Cyprus", name: "Cyprus" },
  { id: "Czech Republic", name: "Czech Republic" },
  { id: "Denmark", name: "Denmark" },
  { id: "Djibouti", name: "Djibouti" },
  { id: "Dutch", name: "Dutch" },
  { id: "Egypt", name: "Egypt" },
  { id: "Eritrea", name: "Eritrea" },
  { id: "Estonia", name: "Estonia" },
  { id: "Ethiopia", name: "Ethiopia" },
  { id: "France", name: "France" },
  { id: "Georgia", name: "Georgia" },
  { id: "German", name: "German" },
  { id: "Greece", name: "Greece" },
  { id: "Holand", name: "Holand" },
  { id: "HUNGARY", name: "HUNGARY" },
  { id: "Indian", name: "Indian" },
  { id: "Indonesia", name: "Indonesia" },
  { id: "Iran", name: "Iran" },
  { id: "Iraq", name: "Iraq" },
  { id: "Ireland", name: "Ireland" },
  { id: "Italy", name: "Italy" },
  { id: "Japan", name: "Japan" },
  { id: "Jordan", name: "Jordan" },
  { id: "Kazakhstan", name: "Kazakhstan" },
  { id: "Kenya", name: "Kenya" },
  { id: "KOREA", name: "KOREA" },
  { id: "Kuwait", name: "Kuwait" },
  { id: "Kyrgyz Republic", name: "Kyrgyz Republic" },
  { id: "Lebanon", name: "Lebanon" },
  { id: "Liberia", name: "Liberia" },
  { id: "Libya", name: "Libya" },
  { id: "Lituania", name: "Lituania" },
  { id: "Malaysia", name: "Malaysia" },
  { id: "Mauritania", name: "Mauritania" },
  { id: "Mexico", name: "Mexico" },
  { id: "Morocco", name: "Morocco" },
  { id: "Myanmar", name: "Myanmar" },
  { id: "Nepal", name: "Nepal" },
  { id: "New Zealand", name: "New Zealand" },
  { id: "Nigeria", name: "Nigeria" },
  { id: "Norway ", name: "Norway " },
  { id: "Oman", name: "Oman" },
  { id: "Pakistan", name: "Pakistan" },
  { id: "Pakistani", name: "Pakistani" },
  { id: "Palestinian", name: "Palestinian" },
  { id: "Papua New Guinee", name: "Papua New Guinee" },
  { id: "Philippines", name: "Philippines" },
  { id: "Poland", name: "Poland" },
  { id: "Portuguese", name: "Portuguese" },
  { id: "Qatar", name: "Qatar" },
  { id: "Repubica Moldova ", name: "Repubica Moldova " },
  { id: "Republic of  Djibouti", name: "Republic of  Djibouti" },
  { id: "Republic of Cameroon", name: "Republic of Cameroon" },
  { id: "Republic of Guinea", name: "Republic of Guinea" },
  { id: "Republic of Mali", name: "Republic of Mali" },
  { id: "Republic of Mauritus", name: "Republic of Mauritus" },
  { id: "Republic of Namibia", name: "Republic of Namibia" },
  { id: "Republic of The Gambia", name: "Republic of The Gambia" },
  { id: "Romania", name: "Romania" },
  { id: "Russia", name: "Russia" },
  { id: "Rwanda", name: "Rwanda" },
  { id: "SAUDI ARABIA", name: "SAUDI ARABIA" },
  { id: "Serbia", name: "Serbia" },
  { id: "Seychelles", name: "Seychelles" },
  { id: "Singapore", name: "Singapore" },
  { id: "Slovakya", name: "Slovakya" },
  { id: "Somalia", name: "Somalia" },
  { id: "South Africa", name: "South Africa" },
  { id: "Spain", name: "Spain" },
  { id: "Sri Lanka", name: "Sri Lanka" },
  { id: "Sri Lanka", name: "Sri Lanka" },
  { id: "Sudanesse", name: "Sudanesse" },
  { id: "Switzerland", name: "Switzerland" },
  { id: "Syria", name: "Syria" },
  { id: "Tajikistan", name: "Tajikistan" },
  { id: "Tanzania", name: "Tanzania" },
  { id: "Thailand", name: "Thailand" },
  { id: "Tunisia", name: "Tunisia" },
  { id: "Turkenistan", name: "Turkenistan" },
  { id: "Turkey", name: "Turkey" },
  { id: "UAE", name: "UAE" },
  { id: "Uganda", name: "Uganda" },
  { id: "Ukraine", name: "Ukraine" },
  { id: "United Kingdom", name: "United Kingdom" },
  { id: "USA", name: "USA" },
  { id: "Uzbekistan", name: "Uzbekistan" },
  { id: "Vietnam", name: "Vietnam" },
  { id: "Yemen", name: "Yemen" },
  { id: "Yugoslavia", name: "Yugoslavia" },
  { id: "Zimbabwe", name: "Zimbabwe" },
];

export const CONTRACTS_ASSETS_TYPE = {
  [APARTMENT_ASSET_TYPE_DEFAULT_NAME]: APARTMENT_ASSET_TYPE_CODE,
  [PARKING_ASSET_TYPE_DEFAULT_NAME]: PARKING_ASSET_TYPE_CODE,
  [SHOP_ASSET_TYPE_DEFAULT_NAME]: SHOP_ASSET_TYPE_CODE,
  [LAND_ASSET_TYPE_DEFAULT_NAME]: LAND_ASSET_TYPE_CODE,
  [APARTMENT_ASSET_TYPE_CODE]: APARTMENT_ASSET_TYPE_DEFAULT_NAME,
  [PARKING_ASSET_TYPE_CODE]: PARKING_ASSET_TYPE_DEFAULT_NAME,
  [SHOP_ASSET_TYPE_CODE]: SHOP_ASSET_TYPE_DEFAULT_NAME,
  [LAND_ASSET_TYPE_CODE]: LAND_ASSET_TYPE_DEFAULT_NAME,
};

export const SELECT_LISTS = (listName) => {
  let list = {
    time_light_start: [
      { name: "9:00 AM", id: "9" },
      { name: "10:00 AM", id: "10" },
      { name: "11:00 AM", id: "11" },
      { name: "12:00 PM", id: "12" },
      { name: "1:00 PM", id: "13" },
    ],
    time_light_end: [
      { name: "2:00 PM", id: "14" },
      { name: "3:00 PM", id: "15" },
      { name: "4:00 PM", id: "16" },
      { name: "5:00 PM", id: "17" },
    ],
    time_night_start: [
      { name: "5:00 PM", id: "17" },
      { name: "6:00 PM", id: "18" },
      { name: "7:00 PM", id: "19" },
      { name: "8:00 PM", id: "20" },
      { name: "9:00 PM", id: "21" },
    ],
    time_night_end: [
      { name: "10:00 PM", id: "22" },
      { name: "11:00 PM", id: "23" },
      { name: "12:00 AM", id: "00" },
      { name: "1:00 AM", id: "01" },
    ],

    service_material_status: [
      { id: 1, name: "Requested" },
      { id: 2, name: "Received" },
    ],
    bill_pattern_bill_type: [
      { id: 1, name: "Input" },
      { id: 2, name: "Output" },
    ],
    material_type: [
      { id: 1, name: "Stored" },
      { id: 2, name: "Services" },
    ],

    service_status: [
      { id: 1, name: "Pending" },
      { id: 2, name: "Return" },
      { id: 3, name: "Reject" },
      { id: 4, name: "Approval" },
      { id: 5, name: "Underway" },
      { id: 6, name: "Done" },
    ],
    evacuation_request_status: [
      { id: 1, name: "pending" },
      { id: 2, name: "approved" },
      { id: 3, name: "rejected" },
      { id: 4, name: "confirmed" },
      { id: 5, name: "canceled" },
    ],

    bill_connect_with: [
      { id: 0, name: "Nothing" },
      { id: 1, name: "Maintenances order" },
    ],

    tenants_package: [
      { id: 1, name: "Full package" },
      { id: 2, name: "Maintenance" },
      { id: 3, name: "Alaqarie" },
    ],
    complaint_paid: [
      { id: 0, name: "All" },
      { id: 1, name: "paid" },
      { id: 2, name: "free" },
    ],
    complaint_status: [
      { id: 0, name: "All" },
      { id: 1, name: "Pending" },
      { id: 2, name: "Return" },
      { id: 3, name: "Reject" },
      { id: 4, name: "Approval" },
      { id: 5, name: "Underway" },
      { id: 6, name: "Done" },
    ],
    worker_status: [
      { id: 0, name: "All" },
      { id: 1, name: "received" },
      { id: 2, name: "in progress" },
      { id: 3, name: "completed" },
    ],

    complaint_approved: [
      { id: 0, name: "All" },
      { id: 1, name: "approved" },
      { id: 2, name: "non approve" },
    ],

    property_values_area: ["Square Feet", "Square Meter"],

    contract_cycle_report_list: [
      { id: 0, name: "All" },
      { id: 1, name: "Contract printed" },
      { id: 2, name: "Extenstion not printed" },
      { id: 3, name: "Not specified" },
    ],

    termination_date_options: [
      { id: 0, name: "All" },
      { id: 0, name: "Smaller than contract end date" },
      { id: 0, name: "Bigger than contract end date" },
      { id: 0, name: "Equal than contract end date" },
    ],

    registered_by_list: [
      { id: 0, name: "All" },
      { id: 1, name: "Customer" },
      { id: 2, name: "Company" },
    ],

    contract_printed_list: [
      { id: 0, name: "All" },
      { id: 1, name: "Process to finish" },
      { id: 2, name: "Done" },
    ],
    registered_by_list: [],

    filter_using: [
      { id: 1, name: "Days number" },
      { id: 2, name: "Date" },
    ],

    clearance_list: [
      { id: 0, name: "All" },
      { id: 1, name: "Printed" },
      { id: 2, name: "Not Printed" },
    ],
    contract_input_case: [
      { id: 0, name: "All" },
      { id: 1, name: "New" },
      { id: 2, name: "Renewal" },
    ],
    contract_status_expired: [
      { id: 0, name: "All" },
      { id: 1, name: "Expired" },
      { id: 2, name: "Not Expired" },
    ],
    contract_date_by: [
      { id: 0, name: "All" },
      { id: 1, name: "Contract start date" },
      { id: 2, name: "Contract expire date" },
      { id: 3, name: "Terminated date" },
      { id: 4, name: "Contract issue date" },
      { id: 4, name: "clearance print" },
      { id: 4, name: "Evacuate date" },
    ],
    contract_amount_list: [
      { id: 0, name: "All" },
      { id: 1, name: "With amount" },
      { id: 2, name: "Without amount" },
    ],
    installment_report_list: [
      { id: 0, name: "All" },
      { id: 1, name: "With installments" },
      { id: 2, name: "Without installments" },
    ],

    lawsuit_report: [
      { id: 0, name: "All" },
      { id: 1, name: "Lawsuit" },
      { id: 2, name: "There is no lawsuit" },
    ],

    lawsuit_status_report: [
      { id: 0, name: "All" },
      { id: 1, name: "Expired" },
      { id: 2, name: "Not Expired" },
    ],
    revenues_report_contract_termination: [
      { id: 0, name: "All" },
      { id: 1, name: "Contract Not Terminated" },
      { id: 2, name: "Terminated" },
    ],

    revenues_report_date: [
      { id: 1, name: "Contract Beginning" },
      { id: 2, name: "Contract completed" },
      { id: 3, name: "Contract Terminate" },
      { id: 4, name: "Contract Created" },
    ],

    cheque_report_deposit: [
      { id: 0, name: "All" },
      { id: "", name: "" },
      { id: "", name: "" },
    ],

    nationality_list,
    type: ["Debit", "Credit"],

    cheque_connect_with: [
      { name: CONNECT_WITH_NOTHING_NAME, id: CONNECT_WITH_NOTHING_CODE },
      { name: CONNECT_WITH_CONTRACT_NAME, id: CONNECT_WITH_CONTRACT_CODE },
      { name: CONNECT_WITH_LAWSUIT_NAME, id: CONNECT_WITH_LAWSUIT_CODE },
      { name: CONNECT_WITH_BILL_NAME, id: CONNECT_WITH_BILL_CODE },
    ],

    user_type: [
      { name: "Customer", id: USER_CUSTOMER_CODE },
      { name: "Supplier", id: USER_SUPPLIER_CODE },
      { name: "Supervisor", id: USER_SUPERVISOR_CODE },
      { name: "Employee", id: USER_WORKER_CODE },
    ],

    account_type: [
      { name: "Normal", id: ACCOUNT_NORMAL_TYPE_CODE },
      // { name: "Closing", id: ACCOUNT_CLOSING_TYPE_CODE },
      { name: "Assembly", id: ACCOUNT_ASSEMBLY_TYPE_CODE },
      { name: "Distributive", id: ACCOUNT_DISTRIBUTIVE_TYPE_CODE },
    ],

    apartment_flat_type: [
      { name: "apartment", id: 1 },
      { name: "mezzanine", id: 2 },
      { name: "office", id: 3 },
      { name: "penthouse", id: 4 },
      { name: "warehouse", id: 5 },
      // { name: "driver flats", id: 6 },
      // { name: "servant flats", id: 7 },
    ],

    shop_kind_type: [
      { name: "shop", id: 1 },
      { name: "store", id: 2 },
    ],
    parking_kind_type: [
      { name: "Parking", id: 1 },
      { name: "Underground Parking", id: 2 },
    ],

    flat_property_type: [
      { name: "Ownership", id: "0" },
      { name: "Real Estate Management", id: "1" },
    ],

    cheque_pattern_paper_type: [
      { name: "Paid", id: 1 },
      { name: "Received", id: 2 },
    ],

    cheque_pattern_default_date: [
      { name: "Operation date", id: 1 },
      { name: "Due date", id: 2 },
    ],

    cheque_pattern_commission_type: [
      { name: "addition", id: 1 },
      { name: "delete", id: 2 },
    ],

    contact_pattern_contract_type: [
      { name: "Sale", id: 1 },
      { name: "Rent", id: 2 },
    ],

    service_status: [
      { name: "Pending", id: 1 },
      { name: "Return", id: 2 },
      { name: "Reject", id: 3 },
      { name: "Approval", id: 4 },
      { name: "Underway", id: 5 },
      { name: "Done", id: 6 },
    ],

    contact_pattern_assets_type: [
      {
        name: APARTMENT_ASSET_TYPE_DEFAULT_NAME,
        id: APARTMENT_ASSET_TYPE_CODE,
      },
      { name: PARKING_ASSET_TYPE_DEFAULT_NAME, id: PARKING_ASSET_TYPE_CODE },
      { name: SHOP_ASSET_TYPE_DEFAULT_NAME, id: SHOP_ASSET_TYPE_CODE },
      { name: LAND_ASSET_TYPE_DEFAULT_NAME, id: LAND_ASSET_TYPE_CODE },
      { name: VILLA_ASSET_TYPE_DEFAULT_NAME, id: VILLA_ASSET_TYPE_CODE },
    ],

    unit_type: [
      // { name: "Apartment", id: 1 },
      // { name: "Parking", id: 2 },
      // { name: "Shop", id: 3 },
      // { name: "Land", id: 4 },
      // { name: "Villa", id: 4 },
      {
        name: APARTMENT_ASSET_TYPE_DEFAULT_NAME,
        id: APARTMENT_ASSET_TYPE_CODE,
      },
      { name: PARKING_ASSET_TYPE_DEFAULT_NAME, id: PARKING_ASSET_TYPE_CODE },
      { name: SHOP_ASSET_TYPE_DEFAULT_NAME, id: SHOP_ASSET_TYPE_CODE },
      { name: LAND_ASSET_TYPE_DEFAULT_NAME, id: LAND_ASSET_TYPE_CODE },
      { name: VILLA_ASSET_TYPE_DEFAULT_NAME, id: VILLA_ASSET_TYPE_CODE },
    ],

    contact_pattern_record_created_date: [
      { name: "Contract Start", id: 1 },
      { name: "Contact Editing", id: 2 },
    ],

    installment_each_duration: [
      { name: "Month", id: 2 },
      { name: "Week", id: 1 },
      { name: "Year", id: 3 },
    ],

    installment_each_number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

    installment_voucher_type: [
      { name: "No Cash payment.", id: 0 },
      { name: "Receipt voucher.", id: 1 },
      // { name: "Journal voucher.", id: 2 },
    ],

    contract_connect_with: [
      { name: CONNECT_WITH_NOTHING_NAME, id: CONNECT_WITH_NOTHING_CODE },
      { name: CONNECT_WITH_CONTRACT_NAME, id: CONNECT_WITH_CONTRACT_CODE },
      { name: CONNECT_WITH_LAWSUIT_NAME, id: CONNECT_WITH_LAWSUIT_CODE },
      { name: CONNECT_WITH_BILL_NAME, id: CONNECT_WITH_BILL_CODE },
    ],

    termination_date: [
      { name: "All", id: 0 },
      { name: "", id: 1 },
      { name: "", id: 2 },
    ],

    termination_status: [
      { name: "All", id: 0 },
      { name: "Terminated", id: 1 },
      { name: "non-terminated", id: 2 },
    ],

    contract_status: [
      { name: "New", id: 1 },
      { name: "Renew", id: 2 },
    ],

    contract_contract_type: [
      { name: "Monthly", id: 1 },
      { name: "Annual", id: 2 },
      // { name: "custom", id: 3 },
    ],

    contract_type: [
      { name: "Monthly", id: 1 },
      { name: "Custom", id: 2 },
    ],

    contract_duration: [
      { name: "3 Month", id: 1 },
      { name: "6 Month", id: 2 },
      { name: "1 year", id: 3 },
      { name: "Custom", id: 4 },
    ],

    bill_pattern_payment_methods: [
      { id: 1, name: "Cash" },
      { id: 2, name: "Credit" },
    ],
    contract_payment_methods: [
      { id: 0, name: "All" },
      { id: 1, name: "Cash" },
      { id: 2, name: "Installments" },
      { id: 3, name: "By plan" },
      { id: 4, name: "Credit" },
    ],

    contract_paid_type: [
      { name: "Installment", id: 1 },
      { name: "Cash", id: 2 },
      { name: "Later", id: 3 },
    ],
    contract_round_to: [
      { name: "Without rounding", id: 0 },
      { name: "0", id: 1 },
      { name: "1", id: 2 },
      { name: "-1", id: 3 },
      { name: "5", id: 4 },
      { name: "-5", id: 5 },
      { name: "10", id: 6 },
      { name: "-10", id: 7 },
    ],
    chq_return_reasons: [
      { name: "Insufficient funds", id: 1 },
      { name: "Check bounce", id: 2 },
      { name: "Mismatched signature", id: 3 },
      { name: "Bank account closed", id: 4 },
      { name: "Other", id: 5 },
    ],
  };
  return list[listName];
};

export const ACTIONS = {
  OPEN_INSTALLMENT_FORM: "OPEN_INSTALLMENT_FORM",
  OPEN_COLLECTION_FORM: "OPEN_COLLECTION_FORM",
  OPEN_DEPORTATION_FORM: "OPEN_DEPORTATION_FORM",
  OPEN_ENDORSEMENT_FORM: "OPEN_ENDORSEMENT_FORM",
  OPEN_RETURN_FORM: "OPEN_RETURN_FORM",
  OPEN_TERMINATION_FINES_FORM: "OPEN_TERMINATION_FINES_FORM",
  RENEW_CONTRACT: "RENEW_CONTRACT",
};

export const USER_STEPS = {
  user_general: "user_general",
  user_files: "user_files",
};

export const SERVICE_STEPS = {
  general: "general",
  service_info: "service_info",
  service: "service",
  service_customer_request: "service_customer_request",
  service_lack_reason: "service_lack_reason",
  service_requested_material: "service_requested_material",
  service_received_material: "service_received_material",
  service_material: "service_material",
  service_worker: "service_worker",
};

export const LAWSUIT_STEPS = {
  lawsuit: "lawsuit",
  lawsuit_expenses: "lawsuit_expenses",
  lawsuit_expenses_pictures: "lawsuit_expenses_pictures",
  lawsuit_internal_expenses: "lawsuit_internal_expenses",
  lawsuit_status: "lawsuit_status",
  lawsuit_termination: "lawsuit_termination",
};

export const BUILDING_STEPS = {
  building_general: "building_general",
  building_units: "building_units",
  building_buying: "building_buying",
  building_ownership: "building_ownership",
  building_editorial_entry: "building_editorial_entry",
  building_investment: "building_investment",
  building_pictures: "building_pictures",
  building_real_estate_development: "building_real_estate_development",
  building_real_estate_management: "building_real_estate_management",
  building_default_accounts: "building_default_accounts",
};

export const APARTMENT_STEPS = {
  apartment_general: "apartment_general",
  apartment_pictures: "apartment_pictures",
  property_values: "property_values",
  apartment_accumulate: "apartment_accumulate",
  apartment_rental_price: "apartment_rental_price",
  apartment_selling_price: "apartment_selling_price",
};

export const LAND_STEPS = {
  land_general: "land_general",
  land_accumulate: "land_accumulate",
  land_rental_price: "land_rental_price",
  land_selling_price: "land_selling_price",
};

export const ASSETS_STEPS = {
  assets_general: "assets_general",
  assets_accounts: "assets_accounts",
  assets_depreciation: "assets_depreciation",
  assets_input: "assets_input",
  assets_maintenance: "assets_maintenance",
  assets_sale: "assets_sale",
  assets_shipping: "assets_shipping",
};

export const PARKING_STEPS = {
  parking_general: "parking_general",
  parking_accumulate: "parking_accumulate",
  parking_rental_price: "parking_rental_price",
  parking_selling_price: "parking_selling_price",
  parking_pictures: "parking_pictures",
};

export const SHOP_STEPS = {
  shop_general: "shop_general",
  shop_accumulate: "shop_accumulate",
  shop_fixed_assets: "shop_fixed_assets",
  shop_pictures: "shop_pictures",
  shop_rental_price: "shop_rental_price",
  shop_selling_price: "shop_selling_price",
};

export const VILLA_STEPS = {
  villa_general: "villa_general",
  villa_accounts: "villa_accounts",
  villa_assets: "villa_assets",
  villa_exterior_details: "villa_exterior_details",
  villa_interior_details: "villa_interior_details",
  villa_pictures: "villa_pictures",
  villa_rental_price: "villa_rental_price",
  villa_selling_price: "villa_selling_price",
};

export const CONTRACTS_PATTERN_STEPS = {
  contract_general: "contract_general",
  contract_default_accounts: "contract_default_accounts",
  contract_pattern_default_fees_accounts: "contract_default_fees_accounts",
  contract_moving_cost_center: "contract_moving_cost_center",
  contract_contract_terms: "contract_contract_terms",
  contract_default_printing_folder: "contract_default_printing_folder",
  contract_sms: "contract SMS",
};

export const VOUCHER_PATTERN_STEPS = {
  voucher_general: "voucher_general",
  voucher_fields: "voucher_fields",
  voucher_sms: "SMS",
};
export const ACCOUNTING_VOUCHER_PATTERN_STEPS = {
  accounting_voucher_general: "accounting_voucher_general",
  accounting_voucher_fields: "accounting_voucher_fields",
  accounting_voucher_sms: "SMS",
};

export const BILL_STEPS = {
  bill: "bill",
  bill_discounts_details: "bill_discounts_details",
  bill_material_details: "bill_material_details",
};

export const MATERIAL_STEPS = {
  material: "general",
  material_balance: "material_balance",
  material_minimum: "material_minimum",
  material_prices: "material_prices",
  material_prices_details: "material_prices_details",
  material_specifications: "material_specifications",
};
export const BILL_PATTERN_STEPS = {
  bill_pattern_general: "bill_pattern_general",
  bill_pattern_accounts: "bill_pattern_accounts",
  bill_pattern_entries: "bill_pattern_entries",
  bill_pattern_options: "bill_pattern_options",
  bill_pattern_bill_details: "bill_pattern_bill_details",
  bill_pattern_references: "bill_pattern_references",
  bill_pattern_materials: "bill_pattern_materials",
};

export const CHEQUE_PATTERN_STEPS = {
  cheque_pattern_general: "cheque_pattern_general",
  cheque_pattern_collection: "cheque_pattern_collection",
  cheque_pattern_commission: "cheque_pattern_commission",
  cheque_pattern_partial_collection: "cheque_pattern_partial_collection",
  cheque_pattern_endorsement: "cheque_pattern_endorsement",
  cheque_pattern_return: "cheque_pattern_return",
  cheque_pattern_default_statement: "cheque_pattern_default_statement",
  cheque_pattern_sms: "cheque_pattern_sms",
};

const GLOBAL_CONTRACT_STEPS = {
  contract_general_step: "general",
  contract_payments_step: "payments",
  contract_commission_step: "commission",
  contract_terms_step: "terms",
  contract_pictures_step: "pictures",
  contract_other_fees_step: "other fees",
  contract_fixed_assets_step: "fixed assets",
  contract_linked_parking_step: "linked parking",
  contract_contract_cycle_step: "contract cycle",
  contract_termination_step: "termination",
};

export const APARTMENT_STEPS_CONTRACT = {
  apartment_contract_general: GLOBAL_CONTRACT_STEPS.contract_general_step,
  apartment_contract_payments: GLOBAL_CONTRACT_STEPS.contract_payments_step,
  apartment_contract_commission: GLOBAL_CONTRACT_STEPS.contract_commission_step,
  apartment_contract_terms: GLOBAL_CONTRACT_STEPS.contract_terms_step,
  apartment_contract_pictures: GLOBAL_CONTRACT_STEPS.contract_pictures_step,
  apartment_contract_other_fees: GLOBAL_CONTRACT_STEPS.contract_other_fees_step,
  apartment_contract_fixed_assets:
    GLOBAL_CONTRACT_STEPS.contract_fixed_assets_step,
  apartment_contract_linked_parking:
    GLOBAL_CONTRACT_STEPS.contract_linked_parking_step,
  apartment_rent_contract_cycle:
    GLOBAL_CONTRACT_STEPS.contract_contract_cycle_step,
  apartment_contract_termination:
    GLOBAL_CONTRACT_STEPS.contract_termination_step,
};
export const SHOP_STEPS_CONTRACT = {
  shop_contract_general: GLOBAL_CONTRACT_STEPS.contract_general_step,
  shop_contract_payments: GLOBAL_CONTRACT_STEPS.contract_payments_step,
  shop_contract_commission: GLOBAL_CONTRACT_STEPS.contract_commission_step,
  shop_contract_terms: GLOBAL_CONTRACT_STEPS.contract_terms_step,
  shop_contract_pictures: GLOBAL_CONTRACT_STEPS.contract_pictures_step,
  shop_contract_other_fees: GLOBAL_CONTRACT_STEPS.contract_other_fees_step,
  shop_contract_fixed_assets: GLOBAL_CONTRACT_STEPS.contract_fixed_assets_step,
  shop_contract_linked_parking:
    GLOBAL_CONTRACT_STEPS.contract_linked_parking_step,
  shop_rent_contract_cycle: GLOBAL_CONTRACT_STEPS.contract_contract_cycle_step,
  shop_contract_termination: GLOBAL_CONTRACT_STEPS.contract_termination_step,
};
export const LAND_STEPS_CONTRACT = {
  land_contract_general: GLOBAL_CONTRACT_STEPS.contract_general_step,
  land_contract_payments: GLOBAL_CONTRACT_STEPS.contract_payments_step,
  land_contract_commission: GLOBAL_CONTRACT_STEPS.contract_commission_step,
  land_contract_terms: GLOBAL_CONTRACT_STEPS.contract_terms_step,
  land_contract_pictures: GLOBAL_CONTRACT_STEPS.contract_pictures_step,
  land_contract_other_fees: GLOBAL_CONTRACT_STEPS.contract_other_fees_step,
  land_contract_fixed_assets: GLOBAL_CONTRACT_STEPS.contract_fixed_assets_step,
  land_contract_linked_parking:
    GLOBAL_CONTRACT_STEPS.contract_linked_parking_step,
  land_rent_contract_cycle: GLOBAL_CONTRACT_STEPS.contract_contract_cycle_step,
  land_contract_termination: GLOBAL_CONTRACT_STEPS.contract_termination_step,
};

export const PARKING_STEPS_CONTRACT = {
  parking_contract_general: GLOBAL_CONTRACT_STEPS.contract_general_step,
  parking_contract_payments: GLOBAL_CONTRACT_STEPS.contract_payments_step,
  parking_contract_commission: GLOBAL_CONTRACT_STEPS.contract_commission_step,
  parking_contract_terms: GLOBAL_CONTRACT_STEPS.contract_terms_step,
  parking_contract_pictures: GLOBAL_CONTRACT_STEPS.contract_pictures_step,
  parking_contract_other_fees: GLOBAL_CONTRACT_STEPS.contract_other_fees_step,
  parking_contract_termination: GLOBAL_CONTRACT_STEPS.contract_termination_step,

};

export const FLAT_PROPERTY_COLORS = {
  apartment_1: "#864AF9",
  apartment_2: "#F8E559",
  apartment_3: "#43766C",
  apartment_4: "#DC84F3",
  apartment_5: "#FF004D",
  apartment_6: "#86B6F6",
  apartment_7: "#F6F7C4",
  shop_1: "#FB8B24",
  shop_2: "#3498DB",
  parking_1: "#200E3A",
  parking_2: "#9A031E",
};
export const FLAT_PROPERTY_TYPES = {
  apartment_1: "apartment",
  apartment_2: "mezzanine",
  apartment_3: "office",
  apartment_4: "penthouse",
  apartment_5: "warehouse",
  apartment_6: "driver flats",
  apartment_7: "servant flats",
  shop_1: "shop",
  shop_2: "store",
  parking_1: "parking",
  parking_2: "underground parking",
};

export const FLAT_PROPERTY_TABS = {
  apartment: {
    tabName: "apartment",
    x: "apartment_floor",
    y: "apartment_count",
    no: "apartment_no",
    type: 1,
    type_col_name: "apartment_kind",
    table: "apartment",
    prefix: "",
    start: 101,
  },
  mezzanine: {
    tabName: "mezzanine",
    x: "mezzanine_floor",
    y: "mezzanine_count",
    no: "apartment_no",
    type: 2,
    type_col_name: "apartment_kind",
    table: "apartment",
    prefix: "M",
    start: "01",
  },
  office: {
    tabName: "office",
    x: "office_floor",
    y: "office_count",
    no: "apartment_no",
    type: 3,
    type_col_name: "apartment_kind",
    table: "apartment",
    prefix: "O",
    start: "101",
  },
  store: {
    tabName: "store",
    x: "store_count",
    y: "",
    no: "shop_no",
    type_col_name: "shop_kind",
    type: 2,
    table: "shop",
    prefix: "S",
    start: "01",
  },
  shop: {
    tabName: "shop",
    x: "shop_count",
    y: "",
    no: "shop_no",
    type: 1,
    type_col_name: "shop_kind",
    table: "shop",
    prefix: "SH",
    start: "01",
  },
  parking: {
    tabName: "parking",
    x: "parking_floor",
    y: "parking_count",
    no: "parking_no",
    type: 1,
    type_col_name: "parking_kind",
    table: "parking",
    prefix: "P",
    start: "01",
  },
  penthouse: {
    tabName: "penthouse",
    x: "penthouse_floor",
    y: "penthouse_count",
    no: "apartment_no",
    type: 4,
    type_col_name: "apartment_kind",
    table: "apartment",
    prefix: "PH",
    start: "101",
  },
  "underground parking": {
    tabName: "underground parking",
    x: "underground_parking",
    y: "",
    no: "parking_no",
    type: 2,
    type_col_name: "parking_kind",
    table: "parking",
    prefix: "UP",
    start: "01",
  },
  warehouse: {
    tabName: "warehouse",
    x: "warehouse_count",
    y: "",
    no: "apartment_no",
    type: 5,
    type_col_name: "apartment_kind",
    table: "apartment",
    prefix: "W",
    start: "01",
  },
};

export const FLATS_TABLE_NAME = {
  "underground parking": "parking",
  parking: "parking",
  shop: "shop",
  store: "shop",
  apartment: "apartment",
};

export const GET_NEW_ENTRY_GRID = () => {
  return Array(2)
    ?.fill(0)
    .map((item) => ({
      account_id: null,
      cost_center_id: null,
      credit: null,
      currency_id: null,
      debit: null,
      note: "",
      observe_account_id: null,
    }));
};

export const GET_NEW_VOUCHER_ENTRY_GRID = () => {
  return Array(1)
    ?.fill(0)
    .map((item) => ({
      account_id: null,
      cost_center_id: null,
      created_at: "",
      credit: 0,
      currency_id: null,
      note: "",
      obverse_account_id: null,
    }));
};

export const DEFAULT_COLORS = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FF00FF", // Magenta
  "#00FFFF", // Cyan
  "#000000", // Black
  "#FFFFFF", // White
  "#FFA500", // Orange
  "#800080", // Purple
  "#008000", // Dark Green
  "#FFC0CB", // Pink
  "#FFD700", // Gold
  "#A52A2A", // Brown
  "#008080", // Teal
  "#FF4500", // Orange Red
  "#6A5ACD", // Slate Blue
  "#D2691E", // Chocolate
  "#2E8B57", // Sea Green
  "#7B68EE", // Medium Slate Blue
];

export const resetChequeFields = () => ({
  id: null,
  amount: 0,
  bank_id: null,
  beneficiary_name: null,
  client_id: null,
  collection_status: null,
  connect_with: null,
  connect_with_id: null,
  cost_center_id: null,
  created_at: null,
  deport_status: null,
  deposit_status: null,
  due_date: null,
  end_due_date: null,
  feedback: false,
  gen_entries: null,
  note: null,
  note1: "",
  note2: "",
  observe_account_id: null,
  observe_cost_center_id: null,
  obverse_account_note: null,
  partial_collection_status: false,
  return_status: false,
  seller_id: null,
  type: null,
  without_due_date: false,
});

export const CONSTANT_COLUMNS_NAME = {
  is_archived: "is_archived",
  is_deleted: "is_deleted",
};

export const UNIQUE_REF_TABLES = {
  clients: "clients",
  suppliers: "suppliers",
  supervisor: "supervisor",
  employee: "employee",
  user_supplier: "user_supplier",
  user_customer: "user_customer",
};

export const FLATS = {
  apartment_count: 0,
  penthouse_count: 0,
  parking_count: 0,
  mezzanine_count: 0,
  office_count: 0,
  store_count: 0,
  warehouse_count: 0,
  shop_count: 0,
  // service_apartments: 0,
  // drivers_apartments: 0,
  underground_parking: 0,
};

export const POPUP_LINKS_NAME = {
  entry_main_data: true,
  cheque: true,
  voucher_main_data: true,
  contract: true,
  service: true,
  bill: true,
  user_work_times: true,
  user: true,
};

export const UPLOAD_TYPES = {
  SERVICE_CUSTOMER_ATTACHMENT: "SERVICE_CUSTOMER_ATTACHMENT",
  SERVICE_WORKER_ATTACHMENT: "SERVICE_WORKER_ATTACHMENT",
};

export function toTree(data, pid = null) {
  return data?.reduce((r, e) => {
    if (e.parent_id === pid) {
      const obj = { ...e };
      const children = toTree(data, e.id);
      if (children.length) obj.children = children;
      r.push(obj);
    }
    return r;
  }, []);
}


