import {DropDowns} from "../functions";

export const customer = [
  { name: "Number", type: "number", label: "Number", required: false },
  { name: "SecLvl", key: "select", label: "SecLvl", required: false, list: DropDowns('SecLvl') },
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
  { name: "AcGuid", type: "text", label: "AcGuid", required: false },
  {
    name: "InsuranceAccountGuid",
    type: "text",
    label: "InsuranceAccountGuid",
    required: false,
  },
  {
    name: "VATAccountGuid",
    type: "text",
    label: "VATAccountGuid",
    required: false,
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
    name: "BuildingGuid",
    type: "text",
    label: "BuildingGuid",
    required: false,
  },
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
  { name: "CostGuid", type: "text", label: "CostGuid", required: false },
  { name: "CustGuid", type: "text", label: "CustGuid", required: false },
  {
    name: "CustOwnerGuid",
    type: "text",
    label: "CustOwnerGuid",
    required: false,
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
    name: "CurrencyGuid",
    key: "unique",
    label: "CurrencyGuid",
    required: false,
    list: [],
  },
  { name: "CostPrice", type: "number", label: "CostPrice", required: false },
  {
    name: "CostCurrencyGUID",
    type: "text",
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
    name: "CurrencyGuid",
    key: "unique",
    label: "CurrencyGuid",
    required: false,
    list: [],
  },
  { name: "Sale", type: "number", label: "Sale", required: false },
  {
    name: "SaleCurrencyGUID",
    type: "text",
    label: "SaleCurrencyGUID",
    required: false,
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
  { name: "CuOwnerGuid", type: "text", label: "CuOwnerGuid", required: false },
];

 const Villa_Accounts = [
  {
    name: "VillaAccountGuid",
    type: "text",
    label: "VillaAccountGuid",
    required: false,
  },
  { name: "CostGuid", type: "text", label: "CostGuid", required: false },
  {
    name: "AccountBankVillaGuid",
    type: "text",
    label: "AccountBankVillaGuid",
    required: false,
  },
  {
    name: "CashAccountGuid",
    type: "text",
    label: "CashAccountGuid",
    required: false,
  },
  {
    name: "InsuranceAccountGuid",
    type: "text",
    label: "InsuranceAccountGuid",
    required: false,
  },
  {
    name: "RentInfoGuid",
    type: "text",
    label: "RentInfoGuid",
    required: false,
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
  { name: "AccountGuid", type: "text", label: "AccountGuid", required: false },
];
// Ending salesman

// starting Parking
const Parking_General = [
  {
    name: "BuildingGuid",
    type: "text",
    label: "BuildingGuid",
    required: false,
  },
  { name: "NO", type: "text", label: "NO", required: false },
  { name: "FloorNo", type: "number", label: "FloorNo", required: false },
  { name: "Area", type: "number", label: "Area", required: false },
  { name: "unity", type: "text", label: "unity", required: false },
  { name: "ParkingKind", type: "text", label: "ParkingKind", required: false },
  { name: "Description", type: "text", label: "Description", required: false },
  { name: "Overlooking", type: "text", label: "Overlooking", required: false },
  { name: "CustGuid", type: "text", label: "CustGuid", required: false },
  { name: "Judicial", type: "checkbox", label: "Judicial", required: false },
  { name: "CostGuid", type: "text", label: "CostGuid", required: false },
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
    name: "CurrencyGuid",
    key: "unique",
    label: "CurrencyGuid",
    required: false,
  },

  { name: "Date", type: "date", label: "Date", required: false },
  { name: "Price", type: "number", label: "Price", required: false },
  {
    name: "CurrencyGuid",
    key: "unique",
    label: "CurrencyGuid",
    required: false,
  },
  { name: "CostPrice", type: "number", label: "CostPrice", required: false },
  {
    name: "CostCurrencyGUID",
    type: "text",
    label: "CostCurrencyGUID",
    required: false,
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
  { name: "SecLvl", key: "select", label: "SecLvl", required: false, list: DropDowns('SecLvl') },
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
  { name: "SecLvl", key: "select", label: "SecLvl", required: false, list: DropDowns('SecLvl') },
  { name: "Mark", type: "checkbox", label: "Mark", required: false },
  {
    name: "IsAutoRenewal",
    type: "checkbox",
    label: "IsAutoRenewal",
    required: false,
  },
  { name: "TypeGuid", type: "text", label: "TypeGuid", required: false },
  { name: "ContractNo", type: "text", label: "ContractNo", required: false },
  {
    name: "CustomerGuid",
    type: "text",
    label: "CustomerGuid",
    required: false,
  },
  {
    name: "SalesManGuid",
    type: "text",
    label: "SalesManGuid",
    required: false,
  },
  {
    name: "RentInfoGuid",
    type: "text",
    label: "RentInfoGuid",
    required: false,
  },
  { name: "LandGuid", type: "text", label: "LandGuid", required: false },
  { name: "VillaGuid", type: "text", label: "VillaGuid", required: false },
  { name: "CostGuid", type: "text", label: "CostGuid", required: false },
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
    name: "CurrencyGuid",
    type: "text",
    label: "CurrencyGuid",
    required: false,
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
    name: "RevenueAccountGuid",
    type: "text",
    label: "RevenueAccountGuid",
    required: false,
  },
  {
    name: "CustAccountGuid",
    type: "text",
    label: "CustAccountGuid",
    required: false,
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
    name: "AcCommissionFromCustGuid",
    type: "text",
    label: "AcCommissionFromCustGuid",
    required: false,
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
    name: "AcCommissionFromOwnerGuid",
    type: "text",
    label: "AcCommissionFromOwnerGuid",
    required: false,
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
    name: "AcSalesManCommissionGuid",
    type: "text",
    label: "AcSalesManCommissionGuid",
    required: false,
  },
  {
    name: "AcCommissionExpenseGuid",
    type: "text",
    label: "AcCommissionExpenseGuid",
    required: false,
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
    name: "AcIncomNextYearGUID",
    type: "text",
    label: "AcIncomNextYearGUID",
    required: false,
  },
  {
    name: "InsuranceAccountGuid",
    type: "text",
    label: "InsuranceAccountGuid",
    required: false,
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
    name: "DiscountAccountGuid",
    type: "text",
    label: "DiscountAccountGuid",
    required: false,
  },
  { name: "UserGuid", type: "text", label: "UserGuid", required: false },
  { name: "BranchGuid", type: "text", label: "BranchGuid", required: false },
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
    name: "OtherFeeAccountGUID",
    type: "text",
    label: "OtherFeeAccountGUID",
    required: false,
  },
  { name: "OtherFee1", type: "number", label: "OtherFee1", required: false },
  {
    name: "OtherFeeAccount1GUID",
    type: "text",
    label: "OtherFeeAccount1GUID",
    required: false,
  },
  { name: "OtherFee2", type: "number", label: "OtherFee2", required: false },
  {
    name: "OtherFeeAccount2GUID",
    type: "text",
    label: "OtherFeeAccount2GUID",
    required: false,
  },
  { name: "OtherFee3", type: "number", label: "OtherFee3", required: false },
  {
    name: "OtherFeeAccount3GUID",
    type: "text",
    label: "OtherFeeAccount3GUID",
    required: false,
  },
  { name: "OtherFee4", type: "number", label: "OtherFee4", required: false },
  {
    name: "OtherFeeAccount4GUID",
    type: "text",
    label: "OtherFeeAccount4GUID",
    required: false,
  },
  { name: "OtherFee5", type: "number", label: "OtherFee5", required: false },
  {
    name: "OtherFeeAccount5GUID",
    type: "text",
    label: "OtherFeeAccount5GUID",
    required: false,
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
    name: "FineRevenueAccountGUID",
    type: "text",
    label: "FineRevenueAccountGUID",
    required: false,
  },
  {
    name: "ResultingNote",
    type: "text",
    label: "ResultingNote",
    required: false,
  },
  { name: "Fine", type: "number", label: "Fine", required: false },
  { name: "FineAccount", type: "text", label: "FineAccount", required: false },
  { name: "FineNote", type: "text", label: "FineNote", required: false },
  {
    name: "CreateResultingEntry",
    type: "checkbox",
    label: "CreateResultingEntry",
    required: false,
  },
  {
    name: "AccountContractPrice",
    type: "text",
    label: "AccountContractPrice",
    required: false,
  },
  {
    name: "AccountCertificatValue",
    type: "text",
    label: "AccountCertificatValue",
    required: false,
  },
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
    name: "AcquittancePrintedByGuid",
    type: "text",
    label: "AcquittancePrintedByGuid",
    required: false,
  },
  { name: "Judicial", type: "checkbox", label: "Judicial", required: false },
  { name: "Trademark", type: "text", label: "Trademark", required: false },
  {
    name: "PrvContractGuid",
    type: "text",
    label: "PrvContractGuid",
    required: false,
  },
  { name: "AddPercent", type: "number", label: "AddPercent", required: false },
  { name: "AddValue", type: "number", label: "AddValue", required: false },
];
// Ending Landcontract

// starting Owner
export const Owner = [
  { name: "Number", type: "number", label: "Number", required: false },
  { name: "SecLvl", key: "select", label: "SecLvl", required: false, list: DropDowns('SecLvl') },
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
  { name: "GroupGuid", type: "text", label: "GroupGuid", required: false },
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
