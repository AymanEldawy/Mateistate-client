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

export const SHOULD_DELETE_COST_CENTER = {
  apartment: true,
  parking: true,
  shop: true,
};

export const HAS_INTERNAL_NUMBER = {
  cost_center: true,
  cheque: true,
  account: true,
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
  { id: 1, ar_name: "أفغانستان", name: "AFGHANISTAN" },
  { id: 2, ar_name: "الجزائر", name: "Algeria" },
  { id: 3, ar_name: "أريتريا", name: "Ariteria" },
  { id: 4, ar_name: "أرمينيا", name: "ARMENIA" },
  { id: 5, ar_name: "أستراليا", name: "Australia" },
  { id: 6, ar_name: "النمسا", name: "AUSTRIA" },
  { id: 7, ar_name: "أذربيجان", name: "Azerbaijan" },
  { id: 8, ar_name: "البحرين", name: "Bahrain" },
  { id: 9, ar_name: "بنغلاديش", name: "Bangladesh" },
  { id: 10, ar_name: "روسيا البيضاء", name: "Belarus" },
  { id: 11, ar_name: "البوسنة", name: "Bosnia " },
  { id: 12, ar_name: "البرازيل", name: "BRAZIL" },
  { id: 13, ar_name: "بريطانيا", name: "BRITAIN" },
  { id: 14, ar_name: "البريطانيون", name: "British" },
  { id: 15, ar_name: "بلغاريا", name: "Bulgaria" },
  { id: 16, ar_name: "بوروندي", name: "Burundi" },
  { id: 17, ar_name: "الكاميرون", name: "Cameroon " },
  { id: 18, ar_name: "الكندية", name: "Canadian" },
  { id: 19, ar_name: "الدار البيضاء", name: "Casablanca" },
  { id: 20, ar_name: "تشاد", name: "Chad" },
  { id: 21, ar_name: "الصين", name: "China" },
  { id: 22, ar_name: "كولومبيا", name: "Colombia" },
  { id: 23, ar_name: "كرواتيا", name: "Croatia" },
  { id: 24, ar_name: "قبرص", name: "Cyprus" },
  { id: 25, ar_name: "جمهورية التشيك", name: "Czech Republic" },
  { id: 26, ar_name: "الدنمارك", name: "Denmark" },
  { id: 27, ar_name: "جيبوتي", name: "Djibouti" },
  { id: 28, ar_name: "اللغة الهولندية", name: "Dutch" },
  { id: 29, ar_name: "مصر", name: "Egypt" },
  { id: 30, ar_name: "إريتريا", name: "Eritrea" },
  { id: 31, ar_name: "استونيا", name: "Estonia" },
  { id: 32, ar_name: "أثيوبيا", name: "Ethiopia" },
  { id: 33, ar_name: "فرنسا", name: "France" },
  { id: 34, ar_name: "جورجيا", name: "Georgia" },
  { id: 35, ar_name: "ألماني", name: "German" },
  { id: 36, ar_name: "اليونان", name: "Greece" },
  { id: 37, ar_name: "هولندا", name: "Holand" },
  { id: 38, ar_name: "هنغاريا", name: "HUNGARY" },
  { id: 39, ar_name: "هندي", name: "Indian" },
  { id: 40, ar_name: "أندونيسيا", name: "Indonesia" },
  { id: 41, ar_name: "إيران", name: "Iran" },
  { id: 42, ar_name: "العراق", name: "Iraq" },
  { id: 43, ar_name: "أيرلندا", name: "Ireland" },
  { id: 44, ar_name: "إيطاليا", name: "Italy" },
  { id: 45, ar_name: "اليابان", name: "Japan" },
  { id: 46, ar_name: "الأردن", name: "Jordan" },
  { id: 47, ar_name: "كازاخستان", name: "Kazakhstan" },
  { id: 48, ar_name: "كينيا", name: "Kenya" },
  { id: 49, ar_name: "كوريا", name: "KOREA" },
  { id: 50, ar_name: "الكويت", name: "Kuwait" },
  { id: 51, ar_name: "جمهورية قيرغيزستان", name: "Kyrgyz Republic" },
  { id: 52, ar_name: "لبنان", name: "Lebanon" },
  { id: 53, ar_name: "ليبيريا", name: "Liberia" },
  { id: 54, ar_name: "ليبيا", name: "Libya" },
  { id: 55, ar_name: "لتوانيا", name: "Lituania" },
  { id: 56, ar_name: "ماليزيا", name: "Malaysia" },
  { id: 57, ar_name: "موريتانيا", name: "Mauritania" },
  { id: 58, ar_name: "المكسيك", name: "Mexico" },
  { id: 59, ar_name: "المغرب", name: "Morocco" },
  { id: 60, ar_name: "ميانمار", name: "Myanmar" },
  { id: 61, ar_name: "نيبال", name: "Nepal" },
  { id: 62, ar_name: "نيوزيلندا", name: "New Zealand" },
  { id: 63, ar_name: "نيجيريا", name: "Nigeria" },
  { id: 64, ar_name: "النرويج", name: "Norway " },
  { id: 65, ar_name: "سلطنة عمان", name: "Oman" },
  { id: 66, ar_name: "باكستان", name: "Pakistan" },
  { id: 67, ar_name: "باكستاني", name: "Pakistani" },
  { id: 68, ar_name: "فلسطيني", name: "Palestinian" },
  { id: 69, ar_name: "بابوا نيو غينيا", name: "Papua New Guinee" },
  { id: 70, ar_name: "الفلبين", name: "Philippines" },
  { id: 71, ar_name: "بولندا", name: "Poland" },
  { id: 72, ar_name: "البرتغالية", name: "Portuguese" },
  { id: 73, ar_name: "دولة قطر", name: "Qatar" },
  { id: 74, ar_name: "جمهورية مولدوفا", name: "Repubica Moldova " },
  { id: 75, ar_name: "جمهورية جيبوتي", name: "Republic of  Djibouti" },
  { id: 76, ar_name: "جمهورية الكاميرون", name: "Republic of Cameroon" },
  { id: 77, ar_name: "جمهورية غينيا", name: "Republic of Guinea" },
  { id: 78, ar_name: "جمهورية مالي", name: "Republic of Mali" },
  { id: 79, ar_name: "جمهورية موريشيوس", name: "Republic of Mauritus" },
  { id: 80, ar_name: "جمهورية ناميبيا", name: "Republic of Namibia" },
  { id: 81, ar_name: "جمهورية غامبيا", name: "Republic of The Gambia" },
  { id: 82, ar_name: "رومانيا", name: "Romania" },
  { id: 83, ar_name: "روسيا", name: "Russia" },
  { id: 84, ar_name: "رواندا", name: "Rwanda" },
  { id: 85, ar_name: "المملكة العربية السعودية", name: "SAUDI ARABIA" },
  { id: 86, ar_name: "صربيا", name: "Serbia" },
  { id: 87, ar_name: "سيشيل", name: "Seychelles" },
  { id: 88, ar_name: "سنغافورة", name: "Singapore" },
  { id: 89, ar_name: "سلوفاكيا", name: "Slovakya" },
  { id: 90, ar_name: "الصومال", name: "Somalia" },
  { id: 91, ar_name: "جنوب أفريقيا", name: "South Africa" },
  { id: 92, ar_name: "إسبانيا", name: "Spain" },
  { id: 93, ar_name: "سيريلانكا", name: "Sri Lanka" },
  { id: 94, ar_name: "سيريلانكا", name: "Sri Lanka" },
  { id: 95, ar_name: "سوداني", name: "Sudanesse" },
  { id: 96, ar_name: "سويسرا", name: "Switzerland" },
  { id: 97, ar_name: "سوريا", name: "Syria" },
  { id: 98, ar_name: "طاجيكستان", name: "Tajikistan" },
  { id: 99, ar_name: "تنزانيا", name: "Tanzania" },
  { id: 100, ar_name: "تايلاند", name: "Thailand" },
  { id: 101, ar_name: "تونس", name: "Tunisia" },
  { id: 102, ar_name: "تركمانستان", name: "Turkenistan" },
  { id: 103, ar_name: "ديك رومي", name: "Turkey" },
  { id: 104, ar_name: "الإمارات العربية المتحدة", name: "UAE" },
  { id: 105, ar_name: "أوغندا", name: "Uganda" },
  { id: 106, ar_name: "أوكرانيا", name: "Ukraine" },
  { id: 107, ar_name: "المملكة المتحدة", name: "United Kingdom" },
  { id: 108, ar_name: "الولايات المتحدة الأمريكية", name: "USA" },
  { id: 109, ar_name: "أوزبكستان", name: "Uzbekistan" },
  { id: 110, ar_name: "فيتنام", name: "Vietnam" },
  { id: 111, ar_name: "اليمن", name: "Yemen" },
  { id: 112, ar_name: "يوغوسلافيا", name: "Yugoslavia" },
  { id: 113, ar_name: "زيمبابوي", name: "Zimbabwe" },
  { id: 114, ar_name: "أفغانستان", name: "AFGHANISTAN" },
  { id: 115, ar_name: "الجزائر", name: "Algeria" },
  { id: 116, ar_name: "أريتريا", name: "Ariteria" },
  { id: 117, ar_name: "أرمينيا", name: "ARMENIA" },
  { id: 118, ar_name: "أستراليا", name: "Australia" },
  { id: 119, ar_name: "النمسا", name: "AUSTRIA" },
  { id: 120, ar_name: "أذربيجان", name: "Azerbaijan" },
  { id: 121, ar_name: "البحرين", name: "Bahrain" },
  { id: 122, ar_name: "بنغلاديش", name: "Bangladesh" },
  { id: 123, ar_name: "روسيا البيضاء", name: "Belarus" },
  { id: 124, ar_name: "البوسنة", name: "Bosnia " },
  { id: 125, ar_name: "البرازيل", name: "BRAZIL" },
  { id: 126, ar_name: "بريطانيا", name: "BRITAIN" },
  { id: 127, ar_name: "البريطانيون", name: "British" },
  { id: 128, ar_name: "بلغاريا", name: "Bulgaria" },
  { id: 129, ar_name: "بوروندي", name: "Burundi" },
  { id: 130, ar_name: "الكاميرون", name: "Cameroon " },
  { id: 131, ar_name: "الكندية", name: "Canadian" },
  { id: 132, ar_name: "الدار البيضاء", name: "Casablanca" },
  { id: 133, ar_name: "تشاد", name: "Chad" },
  { id: 134, ar_name: "الصين", name: "China" },
  { id: 135, ar_name: "كولومبيا", name: "Colombia" },
  { id: 136, ar_name: "كرواتيا", name: "Croatia" },
  { id: 137, ar_name: "قبرص", name: "Cyprus" },
  { id: 138, ar_name: "جمهورية التشيك", name: "Czech Republic" },
  { id: 139, ar_name: "الدنمارك", name: "Denmark" },
  { id: 140, ar_name: "جيبوتي", name: "Djibouti" },
  { id: 141, ar_name: "اللغة الهولندية", name: "Dutch" },
  { id: 142, ar_name: "مصر", name: "Egypt" },
  { id: 143, ar_name: "إريتريا", name: "Eritrea" },
  { id: 144, ar_name: "استونيا", name: "Estonia" },
  { id: 145, ar_name: "أثيوبيا", name: "Ethiopia" },
  { id: 146, ar_name: "فرنسا", name: "France" },
  { id: 147, ar_name: "جورجيا", name: "Georgia" },
  { id: 148, ar_name: "ألماني", name: "German" },
  { id: 149, ar_name: "اليونان", name: "Greece" },
  { id: 150, ar_name: "هولندا", name: "Holand" },
  { id: 151, ar_name: "هنغاريا", name: "HUNGARY" },
  { id: 152, ar_name: "هندي", name: "Indian" },
  { id: 153, ar_name: "أندونيسيا", name: "Indonesia" },
  { id: 154, ar_name: "إيران", name: "Iran" },
  { id: 155, ar_name: "العراق", name: "Iraq" },
  { id: 156, ar_name: "أيرلندا", name: "Ireland" },
  { id: 157, ar_name: "إيطاليا", name: "Italy" },
  { id: 158, ar_name: "اليابان", name: "Japan" },
  { id: 159, ar_name: "الأردن", name: "Jordan" },
  { id: 160, ar_name: "كازاخستان", name: "Kazakhstan" },
  { id: 161, ar_name: "كينيا", name: "Kenya" },
  { id: 162, ar_name: "كوريا", name: "KOREA" },
  { id: 163, ar_name: "الكويت", name: "Kuwait" },
  { id: 164, ar_name: "جمهورية قيرغيزستان", name: "Kyrgyz Republic" },
  { id: 165, ar_name: "لبنان", name: "Lebanon" },
  { id: 166, ar_name: "ليبيريا", name: "Liberia" },
  { id: 167, ar_name: "ليبيا", name: "Libya" },
  { id: 168, ar_name: "لتوانيا", name: "Lituania" },
  { id: 169, ar_name: "ماليزيا", name: "Malaysia" },
  { id: 170, ar_name: "موريتانيا", name: "Mauritania" },
  { id: 171, ar_name: "المكسيك", name: "Mexico" },
  { id: 172, ar_name: "المغرب", name: "Morocco" },
  { id: 173, ar_name: "ميانمار", name: "Myanmar" },
  { id: 174, ar_name: "نيبال", name: "Nepal" },
  { id: 175, ar_name: "نيوزيلندا", name: "New Zealand" },
  { id: 176, ar_name: "نيجيريا", name: "Nigeria" },
  { id: 177, ar_name: "النرويج", name: "Norway " },
  { id: 178, ar_name: "سلطنة عمان", name: "Oman" },
  { id: 179, ar_name: "باكستان", name: "Pakistan" },
  { id: 180, ar_name: "باكستاني", name: "Pakistani" },
  { id: 181, ar_name: "فلسطيني", name: "Palestinian" },
  { id: 182, ar_name: "بابوا نيو غينيا", name: "Papua New Guinee" },
  { id: 183, ar_name: "الفلبين", name: "Philippines" },
  { id: 184, ar_name: "بولندا", name: "Poland" },
  { id: 185, ar_name: "البرتغالية", name: "Portuguese" },
  { id: 186, ar_name: "دولة قطر", name: "Qatar" },
  { id: 187, ar_name: "جمهورية مولدوفا", name: "Repubica Moldova " },
  { id: 188, ar_name: "جمهورية جيبوتي", name: "Republic of  Djibouti" },
  { id: 189, ar_name: "جمهورية الكاميرون", name: "Republic of Cameroon" },
  { id: 190, ar_name: "جمهورية غينيا", name: "Republic of Guinea" },
  { id: 191, ar_name: "جمهورية مالي", name: "Republic of Mali" },
  { id: 192, ar_name: "جمهورية موريشيوس", name: "Republic of Mauritus" },
  { id: 193, ar_name: "جمهورية ناميبيا", name: "Republic of Namibia" },
  { id: 194, ar_name: "جمهورية غامبيا", name: "Republic of The Gambia" },
  { id: 195, ar_name: "رومانيا", name: "Romania" },
  { id: 196, ar_name: "روسيا", name: "Russia" },
  { id: 197, ar_name: "رواندا", name: "Rwanda" },
  { id: 198, ar_name: "المملكة العربية السعودية", name: "SAUDI ARABIA" },
  { id: 199, ar_name: "صربيا", name: "Serbia" },
  { id: 200, ar_name: "سيشيل", name: "Seychelles" },
  { id: 201, ar_name: "سنغافورة", name: "Singapore" },
  { id: 202, ar_name: "سلوفاكيا", name: "Slovakya" },
  { id: 203, ar_name: "الصومال", name: "Somalia" },
  { id: 204, ar_name: "جنوب أفريقيا", name: "South Africa" },
  { id: 205, ar_name: "إسبانيا", name: "Spain" },
  { id: 206, ar_name: "سيريلانكا", name: "Sri Lanka" },
  { id: 207, ar_name: "سيريلانكا", name: "Sri Lanka" },
  { id: 208, ar_name: "سوداني", name: "Sudanesse" },
  { id: 209, ar_name: "سويسرا", name: "Switzerland" },
  { id: 210, ar_name: "سوريا", name: "Syria" },
  { id: 211, ar_name: "طاجيكستان", name: "Tajikistan" },
  { id: 212, ar_name: "تنزانيا", name: "Tanzania" },
  { id: 213, ar_name: "تايلاند", name: "Thailand" },
  { id: 214, ar_name: "تونس", name: "Tunisia" },
  { id: 215, ar_name: "تركمانستان", name: "Turkenistan" },
  { id: 216, ar_name: "ديك رومي", name: "Turkey" },
  { id: 217, ar_name: "الإمارات العربية المتحدة", name: "UAE" },
  { id: 218, ar_name: "أوغندا", name: "Uganda" },
  { id: 219, ar_name: "أوكرانيا", name: "Ukraine" },
  { id: 220, ar_name: "المملكة المتحدة", name: "United Kingdom" },
  { id: 221, ar_name: "الولايات المتحدة الأمريكية", name: "USA" },
  { id: 222, ar_name: "أوزبكستان", name: "Uzbekistan" },
  { id: 223, ar_name: "فيتنام", name: "Vietnam" },
  { id: 224, ar_name: "اليمن", name: "Yemen" },
  { id: 225, ar_name: "يوغوسلافيا", name: "Yugoslavia" },
  { id: 226, ar_name: "زيمبابوي", name: "Zimbabwe" },
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
      { id: 1, name: "pending" },
      { id: 2, name: "underway" },
      { id: 3, name: "done" },
      { id: 4, name: "closed" },
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

    parking_kind_type: [
      { name: "Parking", id: 1 },
      { name: "Underground Parking", id: 2 },
    ],

    flat_property_type: [
      { name: "Ownership", id: 0 },
      { name: "Real Estate Management", id: 1 },
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

    contact_pattern_assets_type: [
      // { name: "Apartment", id: 1 },
      // { name: "Parking", id: 2 },
      // { name: "Shop", id: 3 },
      // { name: "Land", id: 4 },
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
      { name: "No down payment.", id: 3 },
      { name: "Journal voucher.", id: 2 },
      { name: "Receipt voucher.", id: 1 },
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

    contract_payment_methods: [
      { id: 0, name: "All" },
      { id: 1, name: "Cash" },
      { id: 2, name: "Installments" },
      { id: 3, name: "By plan" },
      { id: 4, name: "Credit" },
    ],

    contract_paid_type: [
      { name: "Cash", id: 1 },
      { name: "Plan", id: 2 },
      { name: "Later", id: 3 },
      { name: "Installment", id: 4 },
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
  service: "service",
  service_customer_request: "service_customer_request",
  service_lack_reason: "service_lack_reason",
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

export const CHEQUE_PATTERN_STEPS = {
  cheque_pattern_general: "cheque_pattern_general",
  cheque_pattern_deportable: "cheque_pattern_deportable",
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
  contract_receipts_numbers_step: "receipts numbers",
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
  apartment_contract_receipts_numbers:
    GLOBAL_CONTRACT_STEPS.contract_receipts_numbers_step,
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
  shop_contract_receipts_numbers:
    GLOBAL_CONTRACT_STEPS.contract_receipts_numbers_step,
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
  land_contract_receipts_numbers:
    GLOBAL_CONTRACT_STEPS.contract_receipts_numbers_step,
};

export const PARKING_STEPS_CONTRACT = {
  parking_contract_general: GLOBAL_CONTRACT_STEPS.contract_general_step,
  parking_contract_payments: GLOBAL_CONTRACT_STEPS.contract_payments_step,
  parking_contract_commission: GLOBAL_CONTRACT_STEPS.contract_commission_step,
  parking_contract_terms: GLOBAL_CONTRACT_STEPS.contract_terms_step,
  parking_contract_pictures: GLOBAL_CONTRACT_STEPS.contract_pictures_step,
  parking_contract_other_fees: GLOBAL_CONTRACT_STEPS.contract_other_fees_step,
  parking_contract_termination: GLOBAL_CONTRACT_STEPS.contract_termination_step,
  parking_contract_receipts_numbers:
    GLOBAL_CONTRACT_STEPS.contract_receipts_numbers_step,
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
