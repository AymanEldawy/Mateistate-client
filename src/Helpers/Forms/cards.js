import { DropDowns } from "../functions";

export const customer = [
  { name: "Number", type: "number", label: "Number", required: false },
  {
    name: "SecLvl",
    key: "select",
    label: "SecLvl",
    required: false,
    list: DropDowns("SecLvl"),
  },
  { name: "Barcode", type: "text", label: "Barcode", required: false },
  { name: "Name", type: "text", label: "Name", required: false },
  { name: "LtnName", type: "text", label: "LtnName", required: false },
  { name: "CardKind", type: "number", label: "CardKind", required: false },
  { name: "CardKind2", type: "number", label: "CardKind2", required: false },
  { name: "CustKind", type: "number", label: "CustKind", required: false },
  { name: "Nationality", type: "text", label: "Nationality", required: false },
  {
    name: "LtnNationality",
    type: "text",
    label: "LtnNationality",
    required: false,
  },
  { name: "Profession", type: "text", label: "Profession", required: false },
  {
    name: "LtnProfession",
    type: "text",
    label: "LtnProfession",
    required: false,
  },
  { name: "PassportNO", type: "text", label: "PassportNO", required: false },
  {
    name: "PassportExpireDate",
    type: "datetime-local",
    label: "PassportExpireDate",
    required: false,
  },
  { name: "Domicile", type: "text", label: "Domicile", required: false },
  { name: "Security", type: "text", label: "Security", required: false },
  { name: "LtnSecurity", type: "text", label: "LtnSecurity", required: false },
  { name: "PhoneJob", type: "text", label: "PhoneJob", required: false },
  { name: "Mobile", type: "text", label: "Mobile", required: false },
  { name: "Note", type: "text", label: "Note", required: false },
  { name: "Trademark", type: "text", label: "Trademark", required: false },
  {
    name: "LtnTrademark",
    type: "text",
    label: "LtnTrademark",
    required: false,
  },
  {
    table: "account",
    name: "AcGuid",
    key: "unique",
    label: "AcGuid",
    required: false,
    list: [],
  },
  {
    table: "account",
    name: "InsuranceAccountGuid",
    key: "unique",
    label: "InsuranceAccountGuid",
    required: false,
    list: [],
  },
  {
    table: "account",
    name: "VATAccountGuid",
    key: "unique",
    label: "VATAccountGuid",
    required: false,
    list: [],
  },
  {
    name: "MemoSecurity",
    type: "text",
    label: "MemoSecurity",
    required: false,
  },
  {
    name: "LtnMemoSecurity",
    type: "text",
    label: "LtnMemoSecurity",
    required: false,
  },
  { name: "Address", type: "text", label: "Address", required: false },
  { name: "LtnAddress", type: "text", label: "LtnAddress", required: false },
  { name: "BoxNo", type: "text", label: "BoxNo", required: false },
  {
    name: "PersonalityNo1",
    type: "text",
    label: "PersonalityNo1",
    required: false,
  },
  {
    name: "PersonalityNo2",
    type: "text",
    label: "PersonalityNo2",
    required: false,
  },
  { name: "Fax", type: "text", label: "Fax", required: false },
  { name: "EMail", type: "text", label: "EMail", required: false },
  { name: "Adjective", type: "text", label: "Adjective", required: false },
  {
    name: "LtnAdjective",
    type: "text",
    label: "LtnAdjective",
    required: false,
  },
  {
    name: "CkHideInSearch",
    type: "checkbox",
    label: "CkHideInSearch",
    required: false,
  },
  { name: "ban", type: "checkbox", label: "ban", required: false },
  {
    name: "banContract",
    type: "checkbox",
    label: "banContract",
    required: false,
  },
  { name: "BankName", type: "text", label: "BankName", required: false },
  { name: "BankAccCode", type: "text", label: "BankAccCode", required: false },
  {
    name: "Birthday",
    type: "datetime-local",
    label: "Birthday",
    required: false,
  },
  {
    name: "DomicileEndDate",
    type: "datetime-local",
    label: "DomicileEndDate",
    required: false,
  },
  {
    name: "PersonalityEndDate",
    type: "datetime-local",
    label: "PersonalityEndDate",
    required: false,
  },
  { name: "CustNote1", type: "text", label: "CustNote1", required: false },
  { name: "CustNote2", type: "text", label: "CustNote2", required: false },
  { name: "CustNote3", type: "text", label: "CustNote3", required: false },
  { name: "CustNote4", type: "text", label: "CustNote4", required: false },
  { name: "CustNote5", type: "text", label: "CustNote5", required: false },
  { name: "CustNote6", type: "text", label: "CustNote6", required: false },
  { name: "CustNote7", type: "text", label: "CustNote7", required: false },
];

// Starting shop
const Shop_General = [
  {
    table: "building",
    key: "unique",
    name: "BuildingGuid",
    label: "BuildingGuid",
    required: false,
    list: [],
  },
  // New
  {
    name: "SecLvl",
    key: "select",
    label: "SecLvl",
    required: false,
    list: DropDowns("SecLvl"),
  },
  // ----
  { name: "Number", type: "number", label: "Number", required: false },
  { name: "NO", type: "text", label: "NO", required: false },
  { name: "ShopKind", type: "text", label: "ShopKind", required: false },
  { name: "Description", type: "text", label: "Description", required: false },
  { name: "Class", type: "text", label: "Class", required: false },
  { name: "Area", type: "number", label: "Area", required: false },
  { name: "Unity", type: "text", label: "Unity", required: false },
  { name: "Overlooking", type: "text", label: "Overlooking", required: false },
  { name: "License1", type: "text", label: "License1", required: false },
  { name: "License2", type: "text", label: "License2", required: false },
  { name: "UnifiedNum", type: "text", label: "UnifiedNum", required: false },
  {
    name: "ManservantRoom",
    type: "number",
    label: "ManservantRoom",
    required: false,
  },
  { name: "DriverRoom", type: "number", label: "DriverRoom", required: false },
  { name: "Judicial", type: "checkbox", label: "Judicial", required: false },
  {
    table: "cost",
    name: "CostGuid",
    key: "unique",
    label: "CostGuid",
    required: false,
    list: [],
  },
  {
    table: "Customer",
    name: "CustGuid",
    key: "unique",
    label: "CustGuid",
    required: false,
    list: [],
  },
  {
    table: "Customer",
    name: "CustOwnerGuid",
    key: "unique",
    label: "CustOwnerGuid",
    required: false,
    list: [],
  },
  { name: "FlatOwner", type: "number", label: "FlatOwner", required: false },
  {
    name: "WaterCounter",
    type: "text",
    label: "WaterCounter",
    required: false,
  },
  { name: "BondType", type: "text", label: "BondType", required: false },
  { name: "BondNo", type: "text", label: "BondNo", required: false },
  {
    name: "BondDate",
    type: "datetime-local",
    label: "BondDate",
    required: false,
  },
  {
    name: "ElectricityCounter",
    type: "text",
    label: "ElectricityCounter",
    required: false,
  },
];
const Shop_Rent_price = [
  // Increasable
  { name: "Date", type: "date", label: "Date", required: false },
  { name: "Price", type: "number", label: "Price", required: false },
  {
    table: "Currency",
    name: "CurrencyGuid",
    key: "unique",
    label: "CurrencyGuid",
    required: false,
    list: [],
  },
  { name: "CostPrice", type: "number", label: "CostPrice", required: false },
  {
    table: "Currency",
    name: "CostCurrencyGUID",
    key: "unique",
    label: "CostCurrencyGUID",
    required: false,
  },
  { name: "Rent", type: "number", label: "Rent", required: false },
];

const Shop_Selling_price = [
  // Increasable
  { name: "Date", type: "date", label: "Date", required: false },
  { name: "Price", type: "number", label: "Price", required: false },
  {
    table: "Currency",
    name: "CurrencyGuid",
    key: "unique",
    label: "CurrencyGuid",
    required: false,
    list: [],
  },
  { name: "Sale", type: "number", label: "Sale", required: false },
  {
    table: "Currency",
    name: "SaleCurrencyGUID",
    key: "unique",
    label: "SaleCurrencyGUID",
    required: false,
    list: [],
  },
];
const Shop_Pictures = [];
const Shop_Details = [
  { name: "Note", type: "text", label: "Note", required: false },
];
const Shop_Compilation_shop = [];
const Shop_Extra_fields = [];

const Shop_Fixed_assets = [
  {
    table: "Assets",
    name: "AssetsGuid",
    key: "unique",
    label: "AssetsGuid",
    required: false,
    list: [],
  },
  { name: "Value", type: "text", label: "Value", required: false },
  { name: "Note", type: "text", label: "Note", required: false },
];
// Ending shop

// Starting Villa

const Villa_General_information = [
  { name: "ComplexName", type: "text", label: "ComplexName", required: false },
  { name: "VillaNo", type: "text", label: "VillaNo", required: false },
  { name: "Emirate", type: "text", label: "Emirate", required: false },
  { name: "Area", type: "text", label: "Area", required: false },
  { name: "Suburb", type: "text", label: "Suburb", required: false },
  { name: "Street", type: "text", label: "Street", required: false },
  { name: "DocType", type: "text", label: "DocType", required: false },
  { name: "DocNo", type: "text", label: "DocNo", required: false },
  { name: "DocDate", type: "text", label: "DocDate", required: false },
  { name: "PieceNo", type: "text", label: "PieceNo", required: false },
  { name: "BasinNo", type: "text", label: "BasinNo", required: false },
  {
    name: "WaterCounter",
    type: "text",
    label: "WaterCounter",
    required: false,
  },
  {
    name: "ElectricityCounter",
    type: "text",
    label: "ElectricityCounter",
    required: false,
  },
  {
    table: "Customer",
    name: "CuOwnerGuid",
    key: "unique",
    label: "CuOwnerGuid",
    required: false,
    list: [],
  },
];

const Villa_Accounts = [
  {
    table: "account",
    name: "VillaAccountGuid",
    key: "unique",
    label: "VillaAccountGuid",
    required: false,
    list: [],
  },
  {
    table: "cost",
    name: "CostGuid",
    key: "unique",
    label: "CostGuid",
    required: false,
    list: [],
  },
  {
    table: "account",
    name: "AccountBankVillaGuid",
    key: "unique",
    label: "AccountBankVillaGuid",
    required: false,
    list: [],
  },
  {
    table: "account",
    name: "CashAccountGuid",
    key: "unique",
    label: "CashAccountGuid",
    required: false,
    list: [],
  },
  {
    table: "account",
    name: "InsuranceAccountGuid",
    key: "unique",
    label: "InsuranceAccountGuid",
    required: false,
    list: [],
  },
  {
    table: "RentInfo",
    name: "RentInfoGuid",
    key: "unique",
    label: "RentInfoGuid",
    required: false,
    list: [],
  },
];
const Villa_interior_details = [
  // group Rooms and Flats
  { name: "FloorCount", type: "text", label: "FloorCount", required: false },
  {
    name: "BalconyCount",
    type: "text",
    label: "BalconyCount",
    required: false,
  },
  { name: "RoomCount", type: "text", label: "RoomCount", required: false },
  {
    name: "OtherRoomCount",
    type: "text",
    label: "OtherRoomCount",
    required: false,
  },
  {
    name: "ServiceRoomCount",
    type: "text",
    label: "ServiceRoomCount",
    required: false,
  },
  {
    name: "BathroomCount",
    type: "text",
    label: "BathroomCount",
    required: false,
  },
  {
    name: "StairsInternal",
    type: "text",
    label: "StairsInternal",
    required: false,
  },
  { name: "RoomState", type: "text", label: "RoomState", required: false },
  // Space area and finishing
  { name: "LandArea", type: "text", label: "LandArea", required: false },
  {
    name: "LandAreaBuilding",
    type: "text",
    label: "LandAreaBuilding",
    required: false,
  },
  { name: "unity", type: "text", label: "unity", required: false },
  {
    name: "FinishingState",
    type: "text",
    label: "FinishingState",
    required: false,
  },
  // Safety system
  {
    name: "SecuritySystem",
    type: "text",
    label: "SecuritySystem",
    required: false,
  },
  {
    name: "SecurityType",
    type: "text",
    label: "SecurityType",
    required: false,
  },
];
const Villa_exterior_details = [
  { name: "wall", type: "text", label: "wall", required: false },
  {
    name: "lightingCount",
    type: "text",
    label: "lightingCount",
    required: false,
  },
  {
    name: "ParkingCount",
    type: "text",
    label: "ParkingCount",
    required: false,
  },
  { name: "ParkingArea", type: "text", label: "ParkingArea", required: false },
  { name: "wallState", type: "text", label: "wallState", required: false },
  {
    name: "ParkingShaded",
    type: "text",
    label: "ParkingShaded",
    required: false,
  },
  { name: "PoolCount", type: "text", label: "PoolCount", required: false },
  { name: "PoolState", type: "text", label: "PoolState", required: false },
  { name: "PoolSystem", type: "text", label: "PoolSystem", required: false },
  {
    name: "PlaygroundCount",
    type: "text",
    label: "PlaygroundCount",
    required: false,
  },
  {
    name: "PlaygroundArea",
    type: "text",
    label: "PlaygroundArea",
    required: false,
  },
  { name: "GardenCount", type: "text", label: "GardenCount", required: false },
  { name: "GardenArea", type: "text", label: "GardenArea", required: false },
  { name: "GardenState", type: "text", label: "GardenState", required: false },
];
const Villa_Rent_price = [
  // increasable
  { name: "Date", type: "date", label: "Date", required: false },
  { name: "Price", type: "number", label: "Price", required: false },
  {
    table: "Currency",
    name: "CurrencyGuid",
    key: "unique",
    label: "CurrencyGuid",
    required: false,
    list: [],
  },
];
const Villa_Selling_price = [
  { name: "Date", type: "date", label: "Date", required: false },
  { name: "Price", type: "number", label: "Price", required: false },
  {
    table: "Currency",
    name: "CurrencyGuid",
    key: "unique",
    label: "CurrencyGuid",
    required: false,
    list: [],
  },
];
const Villa_Pictures = [];
const Villa_Notes = [
  { name: "Note", type: "text", label: "Note", required: false },
];
const Villa_Assets = [
  {
    table: "Assets",
    name: "AssetsGuid",
    key: "unique",
    label: "AssetsGuid",
    required: false,
    list: [],
  },
  { name: "Value", type: "text", label: "Value", required: false },
  { name: "Note", type: "text", label: "Note", required: false },
];
// Ending Villa

// starting salesman
export const salesman = [
  { name: "Number", type: "number", label: "Number", required: false },
  { name: "Name", type: "text", label: "Name", required: false },
  { name: "LtnName", type: "text", label: "LtnName", required: false },
  { name: "WorkCardNo", type: "text", label: "WorkCardNo", required: false },
  { name: "Nationality", type: "text", label: "Nationality", required: false },
  {
    name: "LtnNationality",
    type: "text",
    label: "LtnNationality",
    required: false,
  },
  {
    name: "PersonalityNo",
    type: "text",
    label: "PersonalityNo",
    required: false,
  },
  { name: "PassportNo", type: "text", label: "PassportNo", required: false },
  { name: "Address", type: "text", label: "Address", required: false },
  { name: "Phone", type: "text", label: "Phone", required: false },
  { name: "Mobile", type: "text", label: "Mobile", required: false },
  { name: "Fax", type: "text", label: "Fax", required: false },
  { name: "BoxNo", type: "text", label: "BoxNo", required: false },
  { name: "EMail", type: "text", label: "EMail", required: false },
  {
    name: "Commissionlimit",
    type: "number",
    label: "Commissionlimit",
    required: false,
  },
  {
    name: "DiscountPercent",
    type: "number",
    label: "DiscountPercent",
    required: false,
  },
  { name: "AccountGuid", key: "unique", label: "AccountGuid", required: false },
];
// Ending salesman

// starting Parking
const Parking_General = [
  {
    table: "building",
    name: "BuildingGuid",
    key: "unique",
    label: "BuildingGuid",
    required: false,
    list: [],
  },
  { name: "NO", type: "text", label: "NO", required: false },
  { name: "FloorNo", type: "number", label: "FloorNo", required: false },
  { name: "Area", type: "number", label: "Area", required: false },
  { name: "unity", type: "text", label: "unity", required: false },
  { name: "ParkingKind", type: "text", label: "ParkingKind", required: false },
  { name: "Description", type: "text", label: "Description", required: false },
  { name: "Overlooking", type: "text", label: "Overlooking", required: false },
  { name: "CustGuid", key: "unique", label: "CustGuid", required: false },
  { name: "Judicial", type: "checkbox", label: "Judicial", required: false },
  {
    table: "cost",
    name: "CostGuid",
    key: "unique",
    label: "CostGuid",
    required: false,
    list: [],
  },
  {
    name: "PurchaseDate",
    type: "datetime-local",
    label: "PurchaseDate",
    required: false,
  },
  { name: "FlatOwner", type: "number", label: "FlatOwner", required: false },
];
const Parking_Price = [
  { name: "Date", type: "date", label: "Date", required: false },
  { name: "Price", type: "number", label: "Price", required: false },
  {
    table: "Currency",
    name: "CurrencyGuid",
    key: "unique",
    label: "CurrencyGuid",
    required: false,
    list: [],
  },

  { name: "Date", type: "date", label: "Date", required: false },
  { name: "Price", type: "number", label: "Price", required: false },
  {
    table: "Currency",
    name: "CurrencyGuid",
    key: "unique",
    label: "CurrencyGuid",
    required: false,
    list: [],
  },
  { name: "CostPrice", type: "number", label: "CostPrice", required: false },
  {
    table: "cost",
    name: "CostCurrencyGUID",
    key: "unique",
    label: "CostCurrencyGUID",
    required: false,
    list: [],
  },
  { name: "Sale", type: "number", label: "Sale", required: false },
];
const Parking_Assembly = [];
const Parking_Pictures = [];
const Parking_Details = [
  { name: "Note", type: "text", label: "Note", required: false },
];
// Ending Parking

// starting RentInfo
export const RentInfo = [
  { name: "Number", type: "number", label: "Number", required: false },
  {
    name: "SecLvl",
    key: "select",
    label: "SecLvl",
    required: false,
    list: DropDowns("SecLvl"),
  },
  { name: "Name", type: "text", label: "Name", required: false },
  { name: "LtnName", type: "text", label: "LtnName", required: false },
  { name: "Adjective", type: "text", label: "Adjective", required: false },
  { name: "PassportNO", type: "text", label: "PassportNO", required: false },
  {
    name: "PassportExpireDate",
    type: "datetime-local",
    label: "PassportExpireDate",
    required: false,
  },
  { name: "WorkCardNo", type: "text", label: "WorkCardNo", required: false },
  { name: "Nationality", type: "text", label: "Nationality", required: false },
  {
    name: "LtnNationality",
    type: "text",
    label: "LtnNationality",
    required: false,
  },
  { name: "Work", type: "text", label: "Work", required: false },
  {
    name: "PersonalityNo",
    type: "text",
    label: "PersonalityNo",
    required: false,
  },
  { name: "Address", type: "text", label: "Address", required: false },
  { name: "Phone", type: "text", label: "Phone", required: false },
  { name: "Mobile", type: "text", label: "Mobile", required: false },
  { name: "Fax", type: "text", label: "Fax", required: false },
  { name: "BoxNo", type: "text", label: "BoxNo", required: false },
  { name: "EMail", type: "text", label: "EMail", required: false },
];
// Ending RentInfo

// starting Landcontract
export const Landcontract = [
  { name: "Number", type: "number", label: "Number", required: false },
  {
    name: "EditDate",
    type: "datetime-local",
    label: "EditDate",
    required: false,
  },
  {
    name: "DeliverDate",
    type: "datetime-local",
    label: "DeliverDate",
    required: false,
  },
  {
    name: "SecLvl",
    key: "select",
    label: "SecLvl",
    required: false,
    list: DropDowns("SecLvl"),
  },
  { name: "Mark", type: "checkbox", label: "Mark", required: false },
  {
    name: "IsAutoRenewal",
    type: "checkbox",
    label: "IsAutoRenewal",
    required: false,
  },
  {
    table: "ContractType",
    name: "TypeGuid",
    key: "unique",
    label: "TypeGuid",
    required: false,
    list: [],
  },
  { name: "ContractNo", type: "text", label: "ContractNo", required: false },
  {
    table: "Customer",
    name: "CustomerGuid",
    key: "unique",
    label: "CustomerGuid",
    required: false,
    list: [],
  },
  {
    table: "Salesman",
    name: "SalesManGuid",
    key: "unique",
    label: "SalesManGuid",
    required: false,
    list: [],
  },
  {
    table: "RentInfo",
    name: "RentInfoGuid",
    key: "unique",
    label: "RentInfoGuid",
    required: false,
    list: [],
  },
  {
    table: "Earth",
    name: "LandGuid",
    key: "unique",
    label: "LandGuid",
    required: false,
    list: [],
  },
  {
    table: "Villa",
    name: "VillaGuid",
    key: "unique",
    label: "VillaGuid",
    required: false,
    list: [],
  },
  {
    table: "cost",
    name: "CostGuid",
    key: "unique",
    label: "CostGuid",
    required: false,
    list: [],
  },
  { name: "Rent", type: "number", label: "Rent", required: false },
  {
    name: "RentContractType",
    type: "number",
    label: "RentContractType",
    required: false,
  },
  {
    name: "MonthlyValue",
    type: "number",
    label: "MonthlyValue",
    required: false,
  },
  {
    table: "Currency",
    name: "CurrencyGuid",
    key: "unique",
    label: "CurrencyGuid",
    required: false,
    list: [],
  },
  {
    name: "CurrencyVal",
    type: "number",
    label: "CurrencyVal",
    required: false,
  },
  { name: "PayType", type: "number", label: "PayType", required: false },
  { name: "Note", type: "text", label: "Note", required: false },
  { name: "Note2", type: "text", label: "Note2", required: false },
  { name: "Purpose", type: "text", label: "Purpose", required: false },
  { name: "NewState", type: "number", label: "NewState", required: false },
  { name: "Whereabouts", type: "text", label: "Whereabouts", required: false },
  {
    table: "account",
    name: "RevenueAccountGuid",
    key: "unique",
    label: "RevenueAccountGuid",
    required: false,
    list: [],
  },
  {
    table: "account",
    name: "CustAccountGuid",
    key: "unique",
    label: "CustAccountGuid",
    required: false,
    list: [],
  },
  {
    name: "CommissionFromCustPercent",
    type: "number",
    label: "CommissionFromCustPercent",
    required: false,
  },
  {
    name: "CommissionFromCustValue",
    type: "number",
    label: "CommissionFromCustValue",
    required: false,
  },
  {
    table: "account",
    name: "AcCommissionFromCustGuid",
    key: "unique",
    label: "AcCommissionFromCustGuid",
    required: false,
    list: [],
  },
  {
    name: "CommissionFromOwnerPercent",
    type: "number",
    label: "CommissionFromOwnerPercent",
    required: false,
  },
  {
    name: "CommissionFromOwnerValue",
    type: "number",
    label: "CommissionFromOwnerValue",
    required: false,
  },
  {
    table: "account",
    name: "AcCommissionFromOwnerGuid",
    key: "unique",
    label: "AcCommissionFromOwnerGuid",
    required: false,
    list: [],
  },
  {
    name: "CommissionFromSalesManrPercent",
    type: "number",
    label: "CommissionFromSalesManrPercent",
    required: false,
  },
  {
    name: "CommissionFromSalesManValue",
    type: "number",
    label: "CommissionFromSalesManValue",
    required: false,
  },
  {
    table: "account",
    name: "AcSalesManCommissionGuid",
    key: "unique",
    label: "AcSalesManCommissionGuid",
    required: false,
    list: [],
  },
  {
    table: "account",
    name: "AcCommissionExpenseGuid",
    key: "unique",
    label: "AcCommissionExpenseGuid",
    required: false,
    list: [],
  },
  {
    name: "SalesManCommNote",
    type: "text",
    label: "SalesManCommNote",
    required: false,
  },
  {
    name: "CreateContractEntry",
    type: "checkbox",
    label: "CreateContractEntry",
    required: false,
  },
  {
    table: "account",
    name: "AcIncomNextYearGUID",
    key: "unique",
    label: "AcIncomNextYearGUID",
    required: false,
    list: [],
  },
  {
    table: "account",
    name: "InsuranceAccountGuid",
    key: "unique",
    label: "InsuranceAccountGuid",
    required: false,
    list: [],
  },
  {
    name: "Step1Complete",
    type: "checkbox",
    label: "Step1Complete",
    required: false,
  },
  {
    name: "Step2Complete",
    type: "checkbox",
    label: "Step2Complete",
    required: false,
  },
  {
    name: "Step3Complete",
    type: "checkbox",
    label: "Step3Complete",
    required: false,
  },
  {
    name: "Step4Complete",
    type: "checkbox",
    label: "Step4Complete",
    required: false,
  },
  {
    name: "Step5Complete",
    type: "checkbox",
    label: "Step5Complete",
    required: false,
  },
  {
    name: "Certification",
    type: "text",
    label: "Certification",
    required: false,
  },
  {
    name: "DiscountPercent",
    type: "number",
    label: "DiscountPercent",
    required: false,
  },
  {
    name: "DiscountValue",
    type: "number",
    label: "DiscountValue",
    required: false,
  },
  {
    key: "unique",
    required: false,
    label: "DiscountAccountGuid",
    name: "DiscountAccountGuid",
    table: "Account",
  },
  {
    table: "Realty_Users",
    name: "UserGuid",
    key: "unique",
    label: "UserGuid",
    required: false,
    list: [],
  },
  {
    table: "Branch",
    name: "BranchGuid",
    key: "unique",
    label: "BranchGuid",
    required: false,
    list: [],
  },
  {
    name: "RentDuration",
    type: "text",
    label: "RentDuration",
    required: false,
  },
  { name: "Rentype", type: "text", label: "Rentype", required: false },
  {
    name: "TermsOfPayment",
    type: "text",
    label: "TermsOfPayment",
    required: false,
  },
  {
    name: "InsuranceValuePercent",
    type: "number",
    label: "InsuranceValuePercent",
    required: false,
  },
  {
    name: "InsuranceValue",
    type: "number",
    label: "InsuranceValue",
    required: false,
  },
  {
    name: "InsuranceValueOld",
    type: "number",
    label: "InsuranceValueOld",
    required: false,
  },
  {
    name: "ContractPrice",
    type: "number",
    label: "ContractPrice",
    required: false,
  },
  {
    name: "CertificatValue",
    type: "number",
    label: "CertificatValue",
    required: false,
  },
  {
    name: "ElectricityInsurance",
    type: "number",
    label: "ElectricityInsurance",
    required: false,
  },
  {
    name: "ElectricityCounter",
    type: "text",
    label: "ElectricityCounter",
    required: false,
  },
  {
    name: "FromDate",
    type: "datetime-local",
    label: "FromDate",
    required: false,
  },
  { name: "ToDate", type: "datetime-local", label: "ToDate", required: false },
  { name: "Period", type: "number", label: "Period", required: false },
  { name: "OtherFee", type: "number", label: "OtherFee", required: false },
  {
    table: "account",
    name: "OtherFeeAccountGUID",
    key: "unique",
    label: "OtherFeeAccountGUID",
    required: false,
    list: [],
  },
  { name: "OtherFee1", type: "number", label: "OtherFee1", required: false },
  {
    table: "account",
    name: "OtherFeeAccount1GUID",
    key: "unique",
    label: "OtherFeeAccount1GUID",
    required: false,
    list: [],
  },
  { name: "OtherFee2", type: "number", label: "OtherFee2", required: false },
  {
    table: "account",
    name: "OtherFeeAccount2GUID",
    key: "unique",
    label: "OtherFeeAccount2GUID",
    required: false,
    list: [],
  },
  { name: "OtherFee3", type: "number", label: "OtherFee3", required: false },
  {
    table: "account",
    name: "OtherFeeAccount3GUID",
    key: "unique",
    label: "OtherFeeAccount3GUID",
    required: false,
    list: [],
  },
  { name: "OtherFee4", type: "number", label: "OtherFee4", required: false },
  {
    table: "account",
    name: "OtherFeeAccount4GUID",
    key: "unique",
    label: "OtherFeeAccount4GUID",
    required: false,
    list: [],
  },
  { name: "OtherFee5", type: "number", label: "OtherFee5", required: false },
  {
    table: "account",
    name: "OtherFeeAccount5GUID",
    key: "unique",
    label: "OtherFeeAccount5GUID",
    required: false,
    list: [],
  },
  {
    name: "ContractFinish",
    type: "checkbox",
    label: "ContractFinish",
    required: false,
  },
  {
    name: "ContractFinishDate",
    type: "datetime-local",
    label: "ContractFinishDate",
    required: false,
  },
  {
    name: "EditContractFinishDate",
    type: "datetime-local",
    label: "EditContractFinishDate",
    required: false,
  },
  {
    name: "ResultingAmount2",
    type: "number",
    label: "ResultingAmount2",
    required: false,
  },
  {
    name: "ResultingAmount",
    type: "number",
    label: "ResultingAmount",
    required: false,
  },
  { name: "RoundKind", type: "number", label: "RoundKind", required: false },
  {
    table: "account",
    name: "FineRevenueAccountGUID",
    key: "unique",
    label: "FineRevenueAccountGUID",
    required: false,
    list: [],
  },
  {
    name: "ResultingNote",
    type: "text",
    label: "ResultingNote",
    required: false,
  },
  { name: "Fine", type: "number", label: "Fine", required: false },
  {
    key: "unique",
    required: false,
    label: "FineAccount",
    name: "FineAccount",
    table: "account",
  },
  { name: "FineNote", type: "text", label: "FineNote", required: false },
  {
    name: "CreateResultingEntry",
    type: "checkbox",
    label: "CreateResultingEntry",
    required: false,
  },
  // new
  {
    required: false,
    label: "AccountContractPrice",
    name: "AccountContractPrice",
    key: "unique",
    table: "account",
  },
  {
    key: "unique",
    required: false,
    label: "AccountCertificatValue",
    name: "AccountCertificatValue",
    key: "unique",
    table: "Account",
  },
  // ---
  { name: "License1No", type: "text", label: "License1No", required: false },
  { name: "License2No", type: "text", label: "License2No", required: false },
  { name: "License3No", type: "text", label: "License3No", required: false },
  {
    name: "License1Date1",
    type: "datetime-local",
    label: "License1Date1",
    required: false,
  },
  {
    name: "License2Date1",
    type: "datetime-local",
    label: "License2Date1",
    required: false,
  },
  {
    name: "License3Date1",
    type: "datetime-local",
    label: "License3Date1",
    required: false,
  },
  {
    name: "License1Date2",
    type: "datetime-local",
    label: "License1Date2",
    required: false,
  },
  {
    name: "License2Date2",
    type: "datetime-local",
    label: "License2Date2",
    required: false,
  },
  {
    name: "License3Date2",
    type: "datetime-local",
    label: "License3Date2",
    required: false,
  },
  {
    name: "Ltnwhereabouts",
    type: "text",
    label: "Ltnwhereabouts",
    required: false,
  },
  { name: "LtnPurpose", type: "text", label: "LtnPurpose", required: false },
  {
    name: "LtnRentDuration",
    type: "text",
    label: "LtnRentDuration",
    required: false,
  },
  { name: "LtnRentype", type: "text", label: "LtnRentype", required: false },
  {
    name: "LtnTermsOfPayment",
    type: "text",
    label: "LtnTermsOfPayment",
    required: false,
  },
  { name: "IsRounded", type: "checkbox", label: "IsRounded", required: false },
  { name: "Leave", type: "checkbox", label: "Leave", required: false },
  {
    name: "LeaveDate",
    type: "datetime-local",
    label: "LeaveDate",
    required: false,
  },
  {
    name: "AcquittancePrinted",
    type: "checkbox",
    label: "AcquittancePrinted",
    required: false,
  },
  {
    name: "AcquittancePrintDate",
    type: "datetime-local",
    label: "AcquittancePrintDate",
    required: false,
  },
  {
    table: "Realty_Users",
    name: "AcquittancePrintedByGuid",
    key: "unique",
    label: "AcquittancePrintedByGuid",
    required: false,
    list: [],
  },
  { name: "Judicial", type: "checkbox", label: "Judicial", required: false },
  { name: "Trademark", type: "text", label: "Trademark", required: false },
  {
    table: "",
    name: "PrvContractGuid",
    key: "unique",
    label: "PrvContractGuid",
    required: false,
    list: [],
  },
  { name: "AddPercent", type: "number", label: "AddPercent", required: false },
  { name: "AddValue", type: "number", label: "AddValue", required: false },
];
// Ending Landcontract

// starting Owner
export const Owner = [
  { name: "Number", type: "number", label: "Number", required: false },
  {
    name: "SecLvl",
    key: "select",
    label: "SecLvl",
    required: false,
    list: DropDowns("SecLvl"),
  },
  { name: "Name", type: "text", label: "Name", required: false },
  { name: "LtnName", type: "text", label: "LtnName", required: false },
  { name: "Nationality", type: "text", label: "Nationality", required: false },
  {
    name: "LtnNationality",
    type: "text",
    label: "LtnNationality",
    required: false,
  },
  {
    name: "PersonalityNo",
    type: "text",
    label: "PersonalityNo",
    required: false,
  },
  { name: "Address", type: "text", label: "Address", required: false },
  { name: "Phone", type: "text", label: "Phone", required: false },
  { name: "Mobile", type: "text", label: "Mobile", required: false },
  { name: "Fax", type: "text", label: "Fax", required: false },
  { name: "BoxNo", type: "text", label: "BoxNo", required: false },
  { name: "EMail", type: "text", label: "EMail", required: false },
];
// Ending Owner

// staring OfferPrice
const OfferPrice_Units = [
  { name: "Code", type: "text", label: "Code", required: false },
  { name: "Name", type: "text", label: "Name", required: false },
  {
    table: "",
    name: "GroupGuid",
    key: "unique",
    label: "GroupGuid",
    required: false,
    list: [],
  },
  { name: "Unity1", type: "text", label: "Unity1", required: false },
  { name: "Barcode1", type: "text", label: "Barcode1", required: false },
  { name: "Unity2", type: "text", label: "Unity2", required: false },
  { name: "unityFact2", type: "text", label: "unityFact2", required: false },
  { name: "unityfix2", type: "text", label: "unityfix2", required: false },
  { name: "Barcode2", type: "text", label: "Barcode2", required: false },
  { name: "Unity3", type: "text", label: "Unity3", required: false },
  { name: "unityFact3", type: "text", label: "unityFact3", required: false },
  { name: "unityfix3", type: "text", label: "unityfix3", required: false },
  { name: "Barcode3", type: "text", label: "Barcode3", required: false },
];

const OfferPrice_Specifications = [
  // increasable
  { name: "Name", type: "text", label: "Name", required: false },
  { name: "Value", type: "text", label: "Value", required: false },
  { name: "Note", type: "text", label: "Note", required: false },
];
const OfferPrice_Prices = [
  // group Sale
  { name: "AvgPrice", type: "text", label: "AvgPrice", required: false },
  { name: "MaxPrice", type: "text", label: "MaxPrice", required: false },
  { name: "LastPrice", type: "text", label: "LastPrice", required: false },
  {
    name: "LastPriceDate",
    type: "text",
    label: "LastPriceDate",
    required: false,
  },
  // Buy
  {
    name: "SaleAvgPrice",
    type: "text",
    label: "SaleAvgPrice",
    required: false,
  },
  {
    name: "SaleMaxPrice",
    type: "text",
    label: "SaleMaxPrice",
    required: false,
  },
  {
    name: "SaleLastPrice",
    type: "text",
    label: "SaleLastPrice",
    required: false,
  },
  {
    name: "SaleLastPriceDate",
    type: "text",
    label: "SaleLastPriceDate",
    required: false,
  },
  // Prices
  // increasable
  { name: "PriceKind", type: "text", label: "PriceKind", required: false },
  { name: "Price1", type: "text", label: "Price1", required: false },
  { name: "Price2", type: "text", label: "Price2", required: false },
  { name: "Price3", type: "text", label: "Price3", required: false },
];

const OfferPrice_options = [
  { name: "MatType", type: "text", label: "MatType", required: false },
];

const OfferPrice_Minimum = [
  // increasable
  {
    table: "Store",
    name: "StoreGuid",
    key: "unique",
    label: "StoreGuid",
    required: false,
    list: [],
  },
  { name: "Minimum", type: "text", label: "Minimum", required: false },
  { name: "Maximum", type: "text", label: "Maximum", required: false },
  { name: "Note", type: "text", label: "Note", required: false },
];
const OfferPrice_Balance = [
  // increasable
  {
    table: "Store",
    name: "StoreGuid",
    key: "unique",
    label: "StoreGuid",
    required: false,
    list: [],
  },
  { name: "Qty", type: "text", label: "Qty", required: false },
  { name: "Qty2", type: "text", label: "Qty2", required: false },
  { name: "Qty3", type: "text", label: "Qty3", required: false },
];
const OfferPrice_Pictures = [];
// Ending OfferPrice

// Form more than step
export const Villa = {
  steps: [
    "General information",
    "Accounts",
    "interior details",
    "exterior details",
    "Rent price",
    "Selling price",
    "Pictures",
    "Notes",
    "Assets",
  ],
  forms: {
    "General information": Villa_General_information,
    Accounts: Villa_Accounts,
    "interior details": Villa_interior_details,
    "exterior details": Villa_exterior_details,
    "Rent price": Villa_Rent_price,
    "Selling price": Villa_Selling_price,
    Pictures: Villa_Pictures,
    Notes: Villa_Notes,
    Assets: Villa_Assets,
  },
};

export const shop = {
  steps: [
    "General",
    "Rent price",
    "Selling price",
    "Pictures",
    "Details",
    "Compilation shop",
    "Extra fields",
    "Fixed assets",
  ],
  forms: {
    General: Shop_General,
    "Rent price": Shop_Rent_price,
    "Selling price": Shop_Selling_price,
    Pictures: Shop_Pictures,
    Details: Shop_Details,
    "Compilation shop": Shop_Compilation_shop,
    "Extra fields": Shop_Extra_fields,
    "Fixed assets": Shop_Fixed_assets,
  },
};

export const parking = {
  steps: ["General", "Price", "Assembly", "Pictures", "Details"],
  forms: {
    General: Parking_General,
    Price: Parking_Price,
    Assembly: Parking_Assembly,
    Pictures: Parking_Pictures,
    Details: Parking_Details,
  },
};

export const OfferPrice = {
  steps: [
    "Units",
    "Specifications",
    "Prices",
    "options",
    "Minimum",
    "Balance",
    "Pictures",
  ],
  columns: [""],
  forms: {
    Units: OfferPrice_Units,
    Specifications: OfferPrice_Specifications,
    Prices: OfferPrice_Prices,
    options: OfferPrice_options,
    Minimum: OfferPrice_Minimum,
    Balance: OfferPrice_Balance,
    Pictures: OfferPrice_Pictures,
  },
};
