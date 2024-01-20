export const IGNORED_Fields = ["id", "created_at"];

const nationality_list = [
  {name: 'Afghanistan', id: 0 },
   {name: 'Åland Islands', id: 1 },
   {name: 'Albania', id: 2 },
   {name: 'Algeria', id: 3 },
   {name: 'American Samoa', id: 4 },
   {name: 'AndorrA', id: 5 },
   {name: 'Angola', id: 6 },
   {name: 'Anguilla', id: 7 },
   {name: 'Antarctica', id: 8 },
   {name: 'Antigua and Barbuda', id: 9 },
   {name: 'Argentina', id: 10 },
   {name: 'Armenia', id: 11 },
   {name: 'Aruba', id: 12 },
   {name: 'Australia', id: 13 },
   {name: 'Austria', id: 14 },
   {name: 'Azerbaijan', id: 15 },
   {name: 'Bahamas', id: 16 },
   {name: 'Bahrain', id: 17 },
   {name: 'Bangladesh', id: 18 },
   {name: 'Barbados', id: 19 },
   {name: 'Belarus', id: 20 },
   {name: 'Belgium', id: 21 },
   {name: 'Belize', id: 22 },
   {name: 'Benin', id: 23 },
   {name: 'Bermuda', id: 24 },
   {name: 'Bhutan', id: 25 },
   {name: 'Bolivia', id: 26 },
   {name: 'Bosnia and Herzegovina', id: 27 },
   {name: 'Botswana', id: 28 },
   {name: 'Bouvet Island', id: 29 },
   {name: 'Brazil', id: 30 },
   {name: 'British Indian Ocean Territory', id: 31 },
   {name: 'Brunei Darussalam', id: 32 },
   {name: 'Bulgaria', id: 33 },
   {name: 'Burkina Faso', id: 34 },
   {name: 'Burundi', id: 35 },
   {name: 'Cambodia', id: 36 },
   {name: 'Cameroon', id: 37 },
   {name: 'Canada', id: 38 },
   {name: 'Cape Verde', id: 39 },
   {name: 'Cayman Islands', id: 40 },
   {name: 'Central African Republic', id: 41 },
   {name: 'Chad', id: 42 },
   {name: 'Chile', id: 43 },
   {name: 'China', id: 44 },
   {name: 'Christmas Island', id: 45 },
   {name: 'Cocos (Keeling) Islands', id: 46 },
   {name: 'Colombia', id: 47 },
   {name: 'Comoros', id: 48 },
   {name: 'Congo', id: 49 },
   {name: 'Congo, The Democratic Republic of the', id: 50 },
   {name: 'Cook Islands', id: 51 },
   {name: 'Costa Rica', id: 52 },
   {name: 'Cote D`Ivoire', id: 53 },
   {name: 'Croatia', id: 54 },
   {name: 'Cuba', id: 55 },
   {name: 'Cyprus', id: 56 },
   {name: 'Czech Republic', id: 57 },
   {name: 'Denmark', id: 58 },
   {name: 'Djibouti', id: 59 },
   {name: 'Dominica', id: 60 },
   {name: 'Dominican Republic', id: 61 },
   {name: 'Ecuador', id: 62 },
   {name: 'Egypt', id: 63 },
   {name: 'El Salvador', id: 64 },
   {name: 'Equatorial Guinea', id: 65 },
   {name: 'Eritrea', id: 66 },
   {name: 'Estonia', id: 67 },
   {name: 'Ethiopia', id: 68 },
   {name: 'Falkland Islands (Malvinas)', id: 69 },
   {name: 'Faroe Islands', id: 70 },
   {name: 'Fiji', id: 71 },
   {name: 'Finland', id: 72 },
   {name: 'France', id: 73 },
   {name: 'French Guiana', id: 74 },
   {name: 'French Polynesia', id: 75 },
   {name: 'French Southern Territories', id: 76 },
   {name: 'Gabon', id: 77 },
   {name: 'Gambia', id: 78 },
   {name: 'Georgia', id: 79 },
   {name: 'Germany', id: 80 },
   {name: 'Ghana', id: 81 },
   {name: 'Gibraltar', id: 82 },
   {name: 'Greece', id: 83 },
   {name: 'Greenland', id: 84 },
   {name: 'Grenada', id: 85 },
   {name: 'Guadeloupe', id: 86 },
   {name: 'Guam', id: 87 },
   {name: 'Guatemala', id: 88 },
   {name: 'Guernsey', id: 89 },
   {name: 'Guinea', id: 90 },
   {name: 'Guinea-Bissau', id: 91 },
   {name: 'Guyana', id: 92 },
   {name: 'Haiti', id: 93 },
   {name: 'Heard Island and Mcdonald Islands', id: 94 },
   {name: 'Holy See (Vatican City State)', id: 95 },
   {name: 'Honduras', id: 96 },
   {name: 'Hong Kong', id: 97 },
   {name: 'Hungary', id: 98 },
   {name: 'Iceland', id: 99 },
   {name: 'India', id: 100 },
   {name: 'Indonesia', id: 101 },
   {name: 'Iran, Islamic Republic Of', id: 102 },
   {name: 'Iraq', id: 103 },
   {name: 'Ireland', id: 104 },
   {name: 'Isle of Man', id: 105 },
   {name: 'Israel', id: 106 },
   {name: 'Italy', id: 107 },
   {name: 'Jamaica', id: 108 },
   {name: 'Japan', id: 109 },
   {name: 'Jersey', id: 110 },
   {name: 'Jordan', id: 111 },
   {name: 'Kazakhstan', id: 112 },
   {name: 'Kenya', id: 113 },
   {name: 'Kiribati', id: 114 },
   {name: 'Korea, Democratic', id: 115 },
   {name: 'Korea, Republic of', id: 116 },
   {name: 'Kuwait', id: 117 },
   {name: 'Kyrgyzstan', id: 118 },
   {name: 'Lao People Democratic Republic', id: 119 },
   {name: 'Latvia', id: 120 },
   {name: 'Lebanon', id: 121 },
   {name: 'Lesotho', id: 122 },
   {name: 'Liberia', id: 123 },
   {name: 'Libyan Arab Jamahiriya', id: 124 },
   {name: 'Liechtenstein', id: 125 },
   {name: 'Lithuania', id: 126 },
   {name: 'Luxembourg', id: 127 },
   {name: 'Macao', id: 128 },
   {name: 'Macedonia, The Former Yugoslav Republic of', id: 129 },
   {name: 'Madagascar', id: 130 },
   {name: 'Malawi', id: 131 },
   {name: 'Malaysia', id: 132 },
   {name: 'Maldives', id: 133 },
   {name: 'Mali', id: 134 },
   {name: 'Malta', id: 135 },
   {name: 'Marshall Islands', id: 136 },
   {name: 'Martinique', id: 137 },
   {name: 'Mauritania', id: 138 },
   {name: 'Mauritius', id: 139 },
   {name: 'Mayotte', id: 140 },
   {name: 'Mexico', id: 141 },
   {name: 'Micronesia, Federated States of', id: 142 },
   {name: 'Moldova, Republic of', id: 143 },
   {name: 'Monaco', id: 144 },
   {name: 'Mongolia', id: 145 },
   {name: 'Montserrat', id: 146 },
   {name: 'Morocco', id: 147 },
   {name: 'Mozambique', id: 148 },
   {name: 'Myanmar', id: 149 },
   {name: 'Namibia', id: 150 },
   {name: 'Nauru', id: 151 },
   {name: 'Nepal', id: 152 },
   {name: 'Netherlands', id: 153 },
   {name: 'Netherlands Antilles', id: 154 },
   {name: 'New Caledonia', id: 155 },
   {name: 'New Zealand', id: 156 },
   {name: 'Nicaragua', id: 157 },
   {name: 'Niger', id: 158 },
   {name: 'Nigeria', id: 159 },
   {name: 'Niue', id: 160 },
   {name: 'Norfolk Island', id: 161 },
   {name: 'Northern Mariana Islands', id: 162 },
   {name: 'Norway', id: 163 },
   {name: 'Oman', id: 164 },
   {name: 'Pakistan', id: 165 },
   {name: 'Palau', id: 166 },
   {name: 'Palestinian Territory, Occupied', id: 167 },
   {name: 'Panama', id: 168 },
   {name: 'Papua New Guinea', id: 169 },
   {name: 'Paraguay', id: 170 },
   {name: 'Peru', id: 171 },
   {name: 'Philippines', id: 172 },
   {name: 'Pitcairn', id: 173 },
   {name: 'Poland', id: 174 },
   {name: 'Portugal', id: 175 },
   {name: 'Puerto Rico', id: 176 },
   {name: 'Qatar', id: 177 },
   {name: 'Reunion', id: 178 },
   {name: 'Romania', id: 179 },
   {name: 'Russian Federation', id: 180 },
   {name: 'RWANDA', id: 181 },
   {name: 'Saint Helena', id: 182 },
   {name: 'Saint Kitts and Nevis', id: 183 },
   {name: 'Saint Lucia', id: 184 },
   {name: 'Saint Pierre and Miquelon', id: 185 },
   {name: 'Saint Vincent and the Grenadines', id: 186 },
   {name: 'Samoa', id: 187 },
   {name: 'San Marino', id: 188 },
   {name: 'Sao Tome and Principe', id: 189 },
   {name: 'Saudi Arabia', id: 190 },
   {name: 'Senegal', id: 191 },
   {name: 'Serbia and Montenegro', id: 192 },
   {name: 'Seychelles', id: 193 },
   {name: 'Sierra Leone', id: 194 },
   {name: 'Singapore', id: 195 },
   {name: 'Slovakia', id: 196 },
   {name: 'Slovenia', id: 197 },
   {name: 'Solomon Islands', id: 198 },
   {name: 'Somalia', id: 199 },
   {name: 'South Africa', id: 200 },
   {name: 'South Georgia and the South Sandwich Islands', id: 201 },
   {name: 'Spain', id: 202 },
   {name: 'Sri Lanka', id: 203 },
   {name: 'Sudan', id: 204 },
   {name: 'Suriname', id: 205 },
   {name: 'Svalbard and Jan Mayen', id: 206 },
   {name: 'Swaziland', id: 207 },
   {name: 'Sweden', id: 208 },
   {name: 'Switzerland', id: 209 },
   {name: 'Syrian Arab Republic', id: 210 },
   {name: 'Taiwan, Province of China', id: 211 },
   {name: 'Tajikistan', id: 212 },
   {name: 'Tanzania, United Republic of', id: 213 },
   {name: 'Thailand', id: 214 },
   {name: 'Timor-Leste', id: 215 },
   {name: 'Togo', id: 216 },
   {name: 'Tokelau', id: 217 },
   {name: 'Tonga', id: 218 },
   {name: 'Trinidad and Tobago', id: 219 },
   {name: 'Tunisia', id: 220 },
   {name: 'Turkey', id: 221 },
   {name: 'Turkmenistan', id: 222 },
   {name: 'Turks and Caicos Islands', id: 223 },
   {name: 'Tuvalu', id: 224 },
   {name: 'Uganda', id: 225 },
   {name: 'Ukraine', id: 226 },
   {name: 'United Arab Emirates', id: 227 },
   {name: 'United Kingdom', id: 228 },
   {name: 'United States', id: 229 },
   {name: 'United States Minor Outlying Islands', id: 230 },
   {name: 'Uruguay', id: 231 },
   {name: 'Uzbekistan', id: 232 },
   {name: 'Vanuatu', id: 233 },
   {name: 'Venezuela', id: 234 },
   {name: 'Viet Nam', id: 235 },
   {name: 'Virgin Islands, British', id: 236 },
   {name: 'Virgin Islands, U.S.', id: 237 },
   {name: 'Wallis and Futuna', id: 238 },
   {name: 'Western Sahara', id: 239 },
   {name: 'Yemen', id: 240 },
   {name: 'Zambia', id: 241 },
   {name: 'Zimbabwe', id: 242 }
]


export const SELECT_LISTS = (listName) => {
  let list = {
    nationality_list,
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
      { name: "Ownership", id: 0 },
      { name: "real estate management", id: 1 },
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

    contact_pattern_contract_type: [
      { name: "Sale", id: 1 },
      { name: "Rent", id: 2 },
    ],
    contact_pattern_assets_type: [
      { name: "Apartment", id: 1 },
      { name: "Parking", id: 2 },
      { name: "Shop", id: 3 },
      { name: "Land", id: 4 },
    ],

    contact_pattern_record_created_date: [
      { name: "Contract Start", id: 1 },
      { name: "Contact Editing", id: 2 },
    ],

    installment_entries_type: [
      { name: "Ownership", id: 1 },
      { name: "Real Estate Management", id: 2 },
    ],

    installment_voucher_type: [
      { name: "Receipt voucher.", id: 1 },
      { name: "Journal voucher.", id: 2 },
      { name: "No down payment.", id: 3 },
    ],

    // "Receipt voucher."
    // "Payment voucher."
    // "Daily voucher."

    // contract

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

    contract_paid_type: [
      { name: "Cash", id: 1 },
      { name: "Plan", id: 2 },
      { name: "Later", id: 3 },
      { name: "Installment", id: 4 },
    ],
    contract_round_to: [
      { name: "Without rounding", id: 0 },
      { name: "1", id: 1 },
      { name: "-1", id: -1 },
      { name: "5", id: 5 },
      { name: "-5", id: -5 },
      { name: "10", id: 10 },
      { name: "-10", id: -10 },
    ],
  };
  return list[listName];
};

export const ACTIONS = {
  OPEN_INSTALLMENT_FORM: "OPEN_INSTALLMENT_FORM",
};

export const BUILDING_STEPS = {
  building_general: "building_general",
  building_buying: "building_buying",
  building_editorial_entry: "building_editorial_entry",
  building_investment: "building_investment",
  building_pictures: "building_pictures",
  building_real_estate_development: "building_real_estate_development",
  building_real_estate_management: "building_real_estate_management",
};

export const APARTMENT_STEPS = {
  apartment_general: "apartment_general",
  apartment_pictures: "apartment_pictures",
  property_values: "property_values",
  apartment_rental_price: "apartment_rental_price",
  apartment_selling_price: "apartment_selling_price",
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
  parking_price: "parking_price",
  parking_pictures: "parking_pictures",
};

export const SHOP_STEPS = {
  shop_general: "shop_general",
  shop_fixed_assets: "shop_fixed_assets",
  shop_pictures: "shop_pictures",
  shop_rent_price: "shop_rent_price",
  shop_selling_price: "shop_selling_price",
};

export const VILLA_STEPS = {
  villa_general: "villa",
  villa_accounts: "villa_accounts",
  villa_assets: "villa_assets",
  villa_exterior_details: "villa_exterior_details",
  villa_interior_details: "villa_interior_details",
  villa_pictures: "villa_pictures",
  villa_rent_price: "villa_rent_price",
  villa_selling_price: "villa_selling_price",
};

export const CONTRACTS_PATTERN_STEPS = {
  contract_general: "contract_general",
  contract_default_accounts: "contract_default_accounts",
  contract_moving_cost_center: "contract_moving_cost_center",
  contract_contract_terms: "contract_contract_terms",
  contract_default_printing_folder: "contract_default_printing_folder",
  contract_sms: "contract_sms",
};

export const VOUCHER_PATTERN_STEPS = {
  voucher_general: "voucher_general",
  voucher_fields: "voucher_fields",
  voucher_sms: "",
};
export const ACCOUNTING_VOUCHER_PATTERN_STEPS = {
  accounting_voucher_general: "accounting_voucher_general",
  accounting_voucher_fields: "accounting_voucher_fields",
  accounting_voucher_sms: "",
};

export const BILL_PATTERN_STEPS = {
  bill_pattern_general: "bill_pattern_general",
  bill_pattern_deportable: "bill_pattern_deportable",
  bill_pattern_collection: "bill_pattern_collection",
  bill_pattern_commission: "bill_pattern_commission",
  bill_pattern_partial_collection: "bill_pattern_partial_collection",
  bill_pattern_endorsement: "bill_pattern_endorsement",
  bill_pattern_return: "bill_pattern_return",
  bill_pattern_default_statement: "bill_pattern_default_statement",
  bill_pattern_sms: "bill_pattern_sms",
};

const GLOBAL_CONTRACT_STEPS = {
  contract_general_step: "general",
  contract_financial_step: "financial",
  contract_commission_step: "commission",
  contract_terms_step: "terms",
  contract_pictures_step: "pictures",
  contract_other_fees_step: "other fees",
  contract_fixed_assets_step: "fixed assets",
  contract_linked_parking_step: "linked parking",
  contract_contract_cycle_step: "contract cycle",
  contract_termination_step: "termination",
  contract_recipes_numbers_step: "recipes numbers",
};

export const APARTMENT_STEPS_CONTRACT = {
  apartment_contract_general: GLOBAL_CONTRACT_STEPS.contract_general_step,
  apartment_contract_financial: GLOBAL_CONTRACT_STEPS.contract_financial_step,
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
  apartment_contract_recipes_numbers:
    GLOBAL_CONTRACT_STEPS.contract_recipes_numbers_step,
};
export const SHOP_STEPS_CONTRACT = {
  shop_contract_general: GLOBAL_CONTRACT_STEPS.contract_general_step,
  shop_contract_financial: GLOBAL_CONTRACT_STEPS.contract_financial_step,
  shop_contract_commission: GLOBAL_CONTRACT_STEPS.contract_commission_step,
  shop_contract_terms: GLOBAL_CONTRACT_STEPS.contract_terms_step,
  shop_contract_pictures: GLOBAL_CONTRACT_STEPS.contract_pictures_step,
  shop_contract_other_fees: GLOBAL_CONTRACT_STEPS.contract_other_fees_step,
  shop_contract_fixed_assets: GLOBAL_CONTRACT_STEPS.contract_fixed_assets_step,
  shop_contract_linked_parking:
    GLOBAL_CONTRACT_STEPS.contract_linked_parking_step,
  shop_rent_contract_cycle: GLOBAL_CONTRACT_STEPS.contract_contract_cycle_step,
  shop_contract_termination: GLOBAL_CONTRACT_STEPS.contract_termination_step,
  shop_contract_recipes_numbers:
    GLOBAL_CONTRACT_STEPS.contract_recipes_numbers_step,
};
export const LAND_STEPS_CONTRACT = {
  land_contract_general: GLOBAL_CONTRACT_STEPS.contract_general_step,
  land_contract_financial: GLOBAL_CONTRACT_STEPS.contract_financial_step,
  land_contract_commission: GLOBAL_CONTRACT_STEPS.contract_commission_step,
  land_contract_terms: GLOBAL_CONTRACT_STEPS.contract_terms_step,
  land_contract_pictures: GLOBAL_CONTRACT_STEPS.contract_pictures_step,
  land_contract_other_fees: GLOBAL_CONTRACT_STEPS.contract_other_fees_step,
  land_contract_fixed_assets: GLOBAL_CONTRACT_STEPS.contract_fixed_assets_step,
  land_contract_linked_parking:
    GLOBAL_CONTRACT_STEPS.contract_linked_parking_step,
  land_rent_contract_cycle: GLOBAL_CONTRACT_STEPS.contract_contract_cycle_step,
  land_contract_termination: GLOBAL_CONTRACT_STEPS.contract_termination_step,
  land_contract_recipes_numbers:
    GLOBAL_CONTRACT_STEPS.contract_recipes_numbers_step,
};

export const PARKING_STEPS_CONTRACT = {
  parking_contract_general: GLOBAL_CONTRACT_STEPS.contract_general_step,
  parking_contract_financial: GLOBAL_CONTRACT_STEPS.contract_financial_step,
  parking_contract_commission: GLOBAL_CONTRACT_STEPS.contract_commission_step,
  parking_contract_terms: GLOBAL_CONTRACT_STEPS.contract_terms_step,
  parking_contract_pictures: GLOBAL_CONTRACT_STEPS.contract_pictures_step,
  parking_contract_other_fees: GLOBAL_CONTRACT_STEPS.contract_other_fees_step,
  parking_contract_termination: GLOBAL_CONTRACT_STEPS.contract_termination_step,
  parking_contract_recipes_numbers:
    GLOBAL_CONTRACT_STEPS.contract_recipes_numbers_step,
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
export function getAssetType(name) {
  switch (name) {
    case "parking":
      return "parking";
    case "shop":
      return "shop";
    default:
      return "apartment";
  }
}

export const FLAT_PROPERTY_COLORS = {
  apartment_1: "#864AF9",
  apartment_2: "#F8E559",
  apartment_3: "#43766C",
  apartment_4: "#DC84F3",
  apartment_5: "#FF004D",
  apartment_6: "#86B6F6",
  apartment_7: "#F6F7C4",
  shop: "#FB8B24",
  // stores: "storess",
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
  shop: "shop",
  // stores: "storess",
  parking_1: "parking",
  parking_2: "underground parking",
};

export const FLAT_PROPERTY_TABS_SETTINGS = {
  apartment: {
    no: "apartment_no",
    type: 1,
    type_col_name: "flat_type",
  },
  mezzanine: {
    no: "apartment_no",
    type: 2,
    type_col_name: "flat_type",
  },
  office: { no: "apartment_no", type: 3, type_col_name: "flat_type" },
  penthouse: { no: "apartment_no", type: 4, type_col_name: "flat_type" },
  warehouse: { no: "apartment_no", type: 5, type_col_name: "flat_type" },
  "driver flats": { no: "apartment_no", type: 6, type_col_name: "flat_type" },
  "servant flats": { no: "apartment_no", type: 7, type_col_name: "flat_type" },
  stores: { no: "apartment_no", type: "", type_col_name: "flat_type" },

  shop: { no: "shop_no", type: "" },
  parking: { no: "parking_no", type: 1, type_col_name: "parking_kind" },
  "underground parking": {
    no: "parking_no",
    type: 2,
    type_col_name: "parking_kind",
  },
};

export const FLAT_PROPERTY_TABS = [
  {
    alias: 0,
    tabName: "apartment",
    x: "apartment_floor",
    y: "apartment_count",
  },
  {
    alias: 2,
    tabName: "mezzanine",
    x: "mezzanine_floor",
    y: "mezzanine_count",
  },
  {
    alias: 1,
    tabName: "office",
    x: "office_floor",
    y: "office_count",
  },
  {
    alias: "shop",
    tabName: "shop",
    x: "stores_count",
    y: "",
  },
  {
    alias: 3,
    tabName: "parking",
    x: "parking_floor",
    y: "parking_count",
  },
  {
    alias: "penthouse",
    tabName: "penthouse",
    x: "penthouse_floor",
    y: "penthouse_count",
  },
  {
    alias: "underground_parking",
    tabName: "underground parking",
    x: "underground_parking",
    y: "",
  },
  {
    alias: "warehouse",
    tabName: "warehouse",
    x: "warehouse_count",
    y: "",
  },
  {
    alias: 7,
    tabName: "driver flats",
    x: "drivers_apartments",
    y: "",
  },
  {
    alias: 8,
    tabName: "servant flats",
    x: "service_apartments",
    y: "",
  },
];

export const GET_NEW_ENTRY_GRID = () => {
  return Array(10)
    ?.fill(0)
    .map((item) => ({
      account_id: null,
      cost_center_id: null,
      credit: 0,
      currency_id: null,
      debit: 0,
      note: "",
      observe_account_id: null,
    }));
};

export const GET_NEW_VOUCHER_ENTRY_GRID = () => {
  return Array(10)
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
