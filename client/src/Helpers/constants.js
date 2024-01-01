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

export const IGNORED_Fields = ["id"];

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
    type: [
      "Debit",
      "Credit",
      // { name: "Debit", id: 0 },
      // { name: "Credit", id: 1 },
    ],

    contract_connect_with: [
      { name: "nothing", id: 0 },
      { name: "contract", id: 1 },
      { name: "lawsuit", id: 3 },
      { name: "bill", id: 3 },
    ],
    user_type: {
      Supplier: 1,
      customer: 2,
    },

    account_type: {
      Normal: 1,
      Final: 2,
      Collective: 3,
      Distributive: 4,
    },

    contract_type: {},

    recordDateCreated: {
      "contract start": 1,
      "contact Editing": 2,
    },
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
