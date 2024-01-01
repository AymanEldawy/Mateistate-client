const insertToBuilding = ({ data, ...additionalParams }) => {
  console.log("🚀 ~ file: global-insert.js:2 ~ data:", data);
};
const insertToVilla = ({ data, ...additionalParams }) => {
  console.log("🚀 ~ file: global-insert.js:2 ~ data:", data);
};
const insertToAssets = ({ data, ...additionalParams }) => {
  console.log("🚀 ~ file: global-insert.js:2 ~ data:", data);
};
const insertToFlatRentContract = ({ data, ...additionalParams }) => {
  console.log("🚀 ~ file: global-insert.js:2 ~ data:", data);
};
const insertToApartmentRentContract = ({ data, ...additionalParams }) => {
  console.log("🚀 ~ file: global-insert.js:2 ~ data:", data);
};
const insertToShopRentContract = ({ data, ...additionalParams }) => {
  console.log("🚀 ~ file: global-insert.js:2 ~ data:", data);
};
const insertToParkingRentContract = ({ data, ...additionalParams }) => {
  console.log("🚀 ~ file: global-insert.js:2 ~ data:", data);
};

const insertToFlatSaleContract = ({ data, ...additionalParams }) => {
  console.log("🚀 ~ file: global-insert.js:2 ~ data:", data);
};
const insertToShopSaleContract = ({ data, ...additionalParams }) => {
  console.log("🚀 ~ file: global-insert.js:2 ~ data:", data);
};
const insertToParkingSaleContract = ({ data, ...additionalParams }) => {
  console.log("🚀 ~ file: global-insert.js:2 ~ data:", data);
};
const insertToLandSaleContract = ({ data, ...additionalParams }) => {
  console.log("🚀 ~ file: global-insert.js:2 ~ data:", data);
};
// const insertToBuilding = ({ data, ...additionalParams }) => {
//   console.log("🚀 ~ file: global-insert.js:2 ~ data:", data);
// };
// const insertToBuilding = ({ data, ...additionalParams }) => {
//   console.log("🚀 ~ file: global-insert.js:2 ~ data:", data);
// };

const INSERT_FUNCTION = {
  // table name : function
  building: insertToBuilding,
  villa: insertToVilla,
  assets: insertToAssets,

  // rent contract
  flat_rent_contract: insertToFlatRentContract,
  apartment_rent_contract: insertToApartmentRentContract,
  shop_rent_contract: insertToShopRentContract,
  parking_rent_contract: insertToParkingRentContract,
  // sale contract
  flat_sale_contract: insertToFlatSaleContract,
  shop_sale_contract: insertToShopSaleContract,
  parking_sale_contract: insertToParkingSaleContract,
  land_sale_contract: insertToLandSaleContract,

  //
  /**
    apartment
    contract
    voucher_pattern
    accounting_voucher_pattern
    contract_pattern
    assets_card_group
    parking_group
    shop_group
    bill_group
   */
};

const GLOBAL_INSERT_FUNCTION = (tableName) => INSERT_FUNCTION?.[tableName];

export default GLOBAL_INSERT_FUNCTION;
