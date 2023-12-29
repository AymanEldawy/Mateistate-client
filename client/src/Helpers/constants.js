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

export const SELECT_LISTS = {
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
