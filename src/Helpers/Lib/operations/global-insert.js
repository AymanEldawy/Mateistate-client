import { ApiActions } from "../api";

const insertToBuilding = async ({ data, ...additionalParams }) => {
  const building_general = data?.general; // building
  const building_buying = data?.["buying"];
  const building_editorial_entry = data?.["editorial entry"];
  const building_investment = data?.["investment"];
  const building_pictures = data?.["pictures"];
  const building_real_estate_development = data?.["real estate development"];
  const building_real_estate_management = data?.["real estate management"];

  // Insert to building
  const response = await ApiActions.insert("building", {
    data: { ...building_general },
  });
  if (response.success) {
    const buildingId = response?.result?.at(0)?.id;
    ApiActions.insert("building_buying", {
      data: {
        ...building_buying,
        building_id: buildingId,
      },
    });
    ApiActions.insert("building_editorial_entry", {
      data: {
        ...building_editorial_entry,
        building_id: buildingId,
      },
    });
    ApiActions.insert("building_investment", {
      data: {
        ...building_investment,
        building_id: buildingId,
      },
    });
    ApiActions.insert("building_pictures", {
      data: {
        ...building_pictures,
        building_id: buildingId,
      },
    });
    ApiActions.insert("building_real_estate_development", {
      data: {
        ...building_real_estate_development,
        building_id: buildingId,
      },
    });
    ApiActions.insert("building_real_estate_management", {
      data: {
        ...building_real_estate_management,
        building_id: buildingId,
      },
    });
  }
};
const insertToVilla = ({ data, ...additionalParams }) => {};
const insertToAssets = ({ data, ...additionalParams }) => {};
const insertToFlatRentContract = ({ data, ...additionalParams }) => {};
const insertToApartmentRentContract = ({ data, ...additionalParams }) => {};
const insertToShopRentContract = ({ data, ...additionalParams }) => {};
const insertToParkingRentContract = ({ data, ...additionalParams }) => {};

const insertToFlatSaleContract = ({ data, ...additionalParams }) => {};
const insertToShopSaleContract = ({ data, ...additionalParams }) => {};
const insertToParkingSaleContract = ({ data, ...additionalParams }) => {};
const insertToLandSaleContract = ({ data, ...additionalParams }) => {};


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

export default INSERT_FUNCTION;
