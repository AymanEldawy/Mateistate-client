import FormsFetcher from "./db-forms/forms-fetcher";

export function getForm(form) {
  return FormsFetcher[form];
}

export function getColumns(table) {
  return table?.map((col) => col.name);
}

export function getAllColumns(table) {
  let columns = [];
  for (const key in table) {
    columns.push(...table[key]?.map((col) => col?.name));
  }
  return columns;
}

export const IGNORED_Fields = ["id", 'created_at'];

export const itemsListPerPages = (t) => [
  { id: "10", name: t("Number_rows") + " 10" },
  { id: "20", name: t("Number_rows") + " 20" },
  { id: "50", name: t("Number_rows") + " 50" },
  { id: "100", name: t("Number_rows") + " 100" },
  { id: "200", name: t("Number_rows") + " 200" },
  { id: "500", name: t("Number_rows") + " 500" },
];

export const SELECT_LISTS = (listName) => {
  let list = {
    type: ["Debit", "Credit"],

    user_type: [
      { name: "Supplier", id: 1 },
      { name: "Customer", id: 2 },
    ],

    account_type: [
      { name: "Normal", id: 1 },
      { name: "Final", id: 2 },
      { name: "Collective", id: 3 },
      { name: "Distributive", id: 4 },
    ],

    flat_type: [
      { name: "Apartment", id: 1 },
      { name: "Office", id: 2 },
      { name: "Benthoses", id: 3 },
    ],

    flat_property_type: [
      { name: "Ownership", id: 1 },
      { name: "real estate management", id: 2 },
    ],

    bill_pattern_paper_type: [
      { name: "Paid", id: 1 },
      { name: "Received", id: 2 },
    ],

    bill_pattern_default_date: [
      { name: "Entitlement", id: 1 },
      { name: "operation", id: 2 },
    ],

    bill_pattern_commission_type: [
      { name: "addition", id: 1 },
      { name: "delete", id: 2 },
    ],

    // contact_pattern_contract_type: [
    //   { name: "Sale", id: 1 },
    //   { name: "Rent", id: 2 },
    // ],

    contact_pattern_record_created_date: [
      { name: "contract start", id: 1 },
      { name: "contact Editing", id: 2 },
    ],

    installment_entries_type: [
      { name: "Ownership", id: 1 },
      { name: "real estate management", id: 2 },
    ],

    installment_voucher_type: [
      { name: "Receipt voucher.", id: 1 },
      { name: "Journal voucher.", id: 2 },
      { name: "No down payment.", id: 3 },
    ],

    // "Receipt voucher."
    // "Payment voucher."
    // "Daily voucher."

    contract_connect_with: [
      { name: "nothing", id: 1 },
      { name: "contract", id: 2 },
      { name: "lawsuit", id: 3 },
      { name: "bill", id: 4 },
    ],

    contract_status: [
      { name: "New", id: 1 },
      { name: "Renew", id: 2 },
    ],

    contract_rent_type: [
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

    contract_paid_type: [
      { name: "Cash", id: 1 },
      { name: "Plan", id: 2 },
      { name: "Later", id: 3 },
      { name: "Installment", id: 4 },
    ],
  };
  return list[listName];
};

// ### Securities patterns  General  paperType            |     🔽     | Receive - paid |

// Installments constraintGeneration  توليد القيض
// Commission commissionType   `addition` - `delete`
// collection deportableDefaultDate  Adoption date `Entitlement` `operation`
// Transfer deportableDefaultDate  Adoption date `Entitlement` `operation`
// endorsement deportableDefaultDate  Adoption date `Entitlement` `operation`
// return deportableDefaultDate  Adoption date `Entitlement` `operation`

// Apartment contract contractDuration  3, 6 month - 1 year - custom
// Apartment contract PaidType  cach - Installment - plan -later                                                          |
// Apartment contractType  monthly or Custom
// Apartment contract rentType: annual/monthly
// Apartment contract status  `new` `renew`
// Apartment contract royalism  يتم ادخاله تلقائيا عند اختيار الشقة - الملكية                |

// Voucher | checks connectWith  يمكن ربط السند مع `فاتورة` او `دعوة` او `عقد` او `لا شي`
// apartment property   ملك ولا ادارة عقارات
// apartment type  | apartment - office - benthoses
// nationality
// emirate
// suburb
// area
// street

export const BUILDING_DATA = {
  amount: "4",
  apartment_count: "4",
  apartment_floor: "4",
  area: "rer",
  basin_number: "434",
  bond_date: "2023-12-07",
  bond_number: "34",
  bond_type: "434",
  building_number: "12",
  drivers_apartments: "4",
  emirate: "ree",
  mezzanine_count: "3",
  mezzanine_floor: "3",
  name: "Ayman Eldawy",
  number: "4",
  office_count: "2",
  office_floor: "4",
  owner_id: "",
  parking_count: "4",
  parking_floor: "4",
  part_number: "43",
  penthouse_count: "4",
  penthouse_floor: "34",
  service_apartments: "4",
  statement: "tama",
  stores: "3",
  street: "Saad Zaghloul Street next to Al Jahr Mosque",
  suburb: "sohag",
  underground_parking: "4",
  warehouse_count: "4",
};
