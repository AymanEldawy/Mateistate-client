import {
  APARTMENT_STEPS_CONTRACT,
  ASSETS_STEPS,
  BUILDING_STEPS,
  LAND_STEPS_CONTRACT,
  PARKING_STEPS_CONTRACT,
  SHOP_STEPS_CONTRACT,
  VILLA_STEPS,
} from "Helpers/constants";
import { ApiActions } from "../api";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";

//
const getLastContractNumber = async () => {
  const response = await ApiActions.read("contract", {
    limit: 1,
    sorts: [{ column: "number", order: "DESC", nulls: "last" }],
  });

  return +response?.result?.at(0)?.number + 1;
};

// Dynamic insert into many steps table and other relation tables
/**
 *
 * @param  @tableName the table name for general table
 * @param  @tableNameId the key of table_id that refer to the general table
 * @param  @data
 * @param  @steps the dynamic steps for which mean the other tables name
 * @param  @stepGeneralName the unique name for general data or general key in the object that has the table main data
 * @param  @additionalParams
 * @returns
 */

const dynamicInsertIntoMultiStepsTable = async ({
  tableName,
  data,
  ...additionalParams
}) => {
  let steps = Object.values(getFormByTableName(tableName)?.forms)?.map(
    (c) => c?.tab_name
  );

  let stepGeneralName = steps?.at(0);

  const list = {};
  // Loop through all the data and save each step with the table name in database which mean
  for (const step of steps) {
    list[step] = data.data?.[step];
  }

  // Insert to building
  let response = null;
  let tableId = null;
  if (list[stepGeneralName]?.id) {
    tableId = list[stepGeneralName]?.id;
    response = await ApiActions.update(tableName, {
      conditions: [{ type: "and", conditions: [["id", "=", tableId]] }],
      updates: list[stepGeneralName],
    });
  } else {
    response = await ApiActions.insert(tableName, {
      data: list[stepGeneralName],
    });
    tableId = response?.record?.id;
  }

  if (response.success) {
    for (const name in list) {
      if (list[name] && name !== stepGeneralName) {
        if (list[name]?.id) {
          response = await ApiActions.update(name, {
            conditions: [
              { type: "and", conditions: [["id", "=", list[name]?.id]] },
            ],
            updates: list[name],
          });
        } else {
          ApiActions.insert(name, {
            data: {
              ...list[name],
              [`${tableName}_id`]: tableId,
            },
          });
        }
      }
    }
  }

  return response;
};

// Insert to Building and other relation tables
const insertToBuilding = async (data) =>
  await dynamicInsertIntoMultiStepsTable({
    tableName: "building",
    data,
  });

// Insert to Villa and other relation tables
const insertToVilla = async (data) =>
  await dynamicInsertIntoMultiStepsTable({
    tableName: "villa",
    data,
  });

// Insert to Assets and other relation tables
const insertToAssets = async (data) =>
  await dynamicInsertIntoMultiStepsTable({
    tableName: "assets",
    data,
  });

// Dynamic insert into Contract and other relation tables
/**
 *
 * @param  @data the table name for general table
 * @param  @tableNameId the key of table_id that refer to the general table
 * @param  @data
 * @param  @steps the dynamic steps for which mean the other tables name
 * @param  @stepGeneralName the unique name for general data or general key in the object that has the table main data
 * @param  @additionalParams
 * @returns
 */
const dynamicInsertIntoContract = async ({
  data,
  tableName,
  contractType,
  ...additionalParams
}) => {
  let steps = Object.values(getFormByTableName(tableName)?.forms)?.map(
    (c) => c?.tab_name
  );

  const list = {};
  // Loop through all the data and save each step with the table name in database which mean
  for (const step in steps) {
    list[step] = data?.[step];
  }

  // Insert to contract
  const response = await ApiActions.insert("contract", {
    data: {
      contract_type: contractType,
      number: await getLastContractNumber(),
    },
  });

  if (response.success) {
    const contract_id = response?.record?.id;

    for (const name in list) {
      if (list[name]) {
        // const res = await ApiActions.insert(name, {
        ApiActions.insert(name, {
          data: {
            ...list[name],
            contract_id,
          },
        });
      }
    }

    // Paid type 4
    // => insert into installment
    // Termination fees
    return response;
  }
};

// Insert to Apartment Rent Contract and other relation tables
const insertToApartmentRentContract = async (data) =>
  await dynamicInsertIntoContract({
    data: data,
    tableName: "apartment_rent_contract",
    contractType: 2,
    contractFlatType: 1,
  });

// Insert to ApartmentRentContract and other relation tables
const insertToShopRentContract = async (data) =>
  await dynamicInsertIntoContract({
    data: data,
    tableName: "shop_rent_contract",
    contractType: 2,
    contractFlatType: 3,
  });

// Insert to Shop Rent Contract and other relation tables
const insertToParkingRentContract = async (data) =>
  await dynamicInsertIntoContract({
    data: data,
    tableName: "parking_rent_contract",
    contractType: 2,
    contractFlatType: 2,
  });

// Insert to Apartment Sale Contract and other relation tables
const insertToApartmentSaleContract = async (data) =>
  await dynamicInsertIntoContract({
    data: data,
    tableName: "apartment_sale_contract",
    contractType: 1,
    contractFlatType: 1,
  });

// Insert to Shop Sale Contract and other relation tables
const insertToShopSaleContract = async (data) =>
  await dynamicInsertIntoContract({
    data: data,
    tableName: "shop_sale_contract",
    contractType: 1,
    contractFlatType: 3,
  });

// Insert to Parking Sale Contract and other relation tables
const insertToParkingSaleContract = async (data) =>
  await dynamicInsertIntoContract({
    data: data,
    tableName: "parking_sale_contract",
    contractType: 1,
    contractFlatType: 2,
  });

// Insert to Land Sale Contract and other relation tables
const insertToLandSaleContract = async (data) =>
  await dynamicInsertIntoContract({
    data: data,
    tableName: "land_sale_contract",
    contractType: 1,
    contractFlatType: 4,
  });

/***
 *
 *
 */

export const insertIntoGrid = async ({
  grid,
  layout,
  gridTableName,
  refName,
  itemId,
}) => {
  for (const item of grid) {
    if (item?.id && layout === "update") {
      // update
      ApiActions.update(gridTableName, {
        conditions: [{ type: "and", conditions: [["id", "=", item?.id]] }],
        updates: item,
      });
    } else {
      if (item.account_id) {
        ApiActions.insert(gridTableName, {
          data: { ...item, [refName]: itemId },
        });
      }
    }
  }
};

// Insert to Shop Rent Contract and other relation tables
const INSERT_FUNCTION = {
  // table name : function
  building: insertToBuilding,
  villa: insertToVilla,
  assets: insertToAssets,

  // rent contract
  apartment_rent_contract: insertToApartmentRentContract,
  shop_rent_contract: insertToShopRentContract,
  parking_rent_contract: insertToParkingRentContract,
  // sale contract
  apartment_sale_contract: insertToApartmentSaleContract,
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
