import { ApiActions } from "../api";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import {
  generateEntryFromBuilding,
  generateEntryFromBuildingBuying,
  generateEntryFromBuildingInvestment,
  generateEntryFromContract,
  generateEntryFromVoucher,
  insertIntoGrid,
} from "./vouchers-insert";
import {
  CONTRACTS_ASSETS_TYPE,
  FLATS_TABLE_NAME,
  FLAT_PROPERTY_TABS_SETTINGS,
  FLAT_PROPERTY_TYPES,
} from "Helpers/constants";
import { toast } from "react-toastify";

const CONTRACT_GRID_FORMS_NAMES = {
  contract_pictures: {
    table: "contract_pictures",
    conditions: [""],
  },
  contract_other_fees: {
    table: "contract_other_fees",
    conditions: ["fee_amount", "account_id"],
  },
  contract_fixed_assets: {
    table: "contract_fixed_assets",
    conditions: ["assets_id", "value"],
  },
  contract_linked_parking: {
    table: "contract_linked_parking",
    conditions: ["main_contract_id", "building_id", "account_id"],
  },
  contract_receipt_number: {
    table: "contract_receipt_number",
    conditions: ["receipt_number", "receipt_date"],
  },
  apartment_rental_price: {
    table: "apartment_rental_price",
    conditions: ["price", "currency_id"],
  },
  apartment_selling_price: {
    table: "apartment_selling_price",
    conditions: ["price", "currency_id"],
  },
  termination_fines_grid: {
    table: "termination_fines_grid",
    conditions: ["account_id", "fee_amount"],
  },
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
  const SHOULD_UPDATES = data?.SHOULD_UPDATES;

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
        if (CONTRACT_GRID_FORMS_NAMES?.[name]) {
          insertIntoGridTabs({
            values: list[name],
            tab: name,
            itemNameId: `${tableName}_id`,
            SHOULD_UPDATES,
            item_id: tableId,
          });
        } else {
          let subItemId = null;

          if (list[name]?.id) {
            response = await ApiActions.update(name, {
              conditions: [
                { type: "and", conditions: [["id", "=", list[name]?.id]] },
              ],
              updates: list[name],
            });
            subItemId = list[name]?.id;
          } else {
            response = await ApiActions.insert(name, {
              data: {
                ...list[name],
                [`${tableName}_id`]: tableId,
              },
            });
            subItemId = response?.record?.id;
          }

          switch (name) {
            case "building": {
              if (list?.building && list?.building?.gen_entries) {
                generateEntryFromBuilding({
                  values: list?.building,
                  created_from: "building",
                  created_from_id: tableId,
                  should_update: SHOULD_UPDATES?.building,
                });
              }
              break;
            }
            case "building_buying": {
              if (list?.building_buying && list?.building_buying?.gen_entries) {
                generateEntryFromBuildingBuying({
                  values: list?.building,
                  created_from: "building_buying",
                  created_from_id: subItemId,
                  should_update: SHOULD_UPDATES?.building_buying,
                });
              }
              break;
            }
            case "building_investment": {
              if (
                list?.building_investment &&
                list?.building_investment?.gen_entries
              ) {
                generateEntryFromBuildingInvestment({
                  values: list?.building_investment,
                  created_from: "building_investment",
                  created_from_id: subItemId,
                  should_update: SHOULD_UPDATES?.building_investment,
                });
              }
              break;
            }

            default:
              return;
          }
          // response
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
  let SHOULD_UPDATES = data?.SHOULD_UPDATES;

  let steps = Object.values(getFormByTableName(tableName)?.forms)?.map(
    (c) => c?.tab_name
  );

  const list = {};
  // Loop through all the data and save each step with the table name in database which mean
  for (const step of steps) {
    list[step] = data?.[step];
  }

  let response = null;
  let contract_id = data?.contract?.id;
  if (!contract_id) {
    // Insert into contract or update
    response = await ApiActions.insert("contract", {
      data: {
        contract_type: contractType,
        flat_type: data?.flat_type,
      },
    });
    contract_id = response?.record?.id;
  }

  if (contract_id) {
    for (const name in list) {
      if (list[name]) {
        let values = list[name];
        if (CONTRACT_GRID_FORMS_NAMES?.[name]) {
          let tab = CONTRACT_GRID_FORMS_NAMES?.[name];
          if (name === "contract_pictures") {
            insertIntoContractPictures({
              values,
              contract_id,
              SHOULD_UPDATES,
            });
          } else {
            insertIntoGridTabs({
              values,
              tab,
              item_id: contract_id,
              itemNameId: "contract_id",
              SHOULD_UPDATES,
            });
          }
        } else {
          let subItemId = values?.id;
          if (values?.id) {
            await ApiActions.update(name, {
              conditions: [
                { type: "and", conditions: [["id", "=", values?.id]] },
              ],
              updates: values,
            });
          } else {
            if (Object.values(values)?.length) {
              const response = ApiActions.insert(name, {
                data: {
                  ...values,
                  contract_id,
                },
              });
              subItemId = response?.record?.id;
            }
          }
          if (
            name === "contract_termination" &&
            SHOULD_UPDATES?.termination_fines_grid
          ) {
            insertIntoGridTabs({
              values: data?.termination_fines_grid,
              tab: CONTRACT_GRID_FORMS_NAMES?.termination_fines_grid,
              item_id: subItemId,
              itemNameId: "contract_termination_fines_id",
            });
          }
          // contract_termination
        }

        // if termination
      }
    }

    // @Voucher -> Generate entries `Contract value`, `Insurance value`
    if (list?.[data?.tabName]?.gen_entries) {
      generateEntryFromContract({
        contractId: contract_id,
        assetsType: CONTRACTS_ASSETS_TYPE?.[data?.flat_type],
        assetsTypeNumber: 1,
        buildingNumber: 2,
        contractNumber: response?.record?.number,
        values: list?.[data?.tabName],
        should_update: SHOULD_UPDATES?.[data?.tabName],
      });
    }
    if (list?.[data?.tabName].paid_type === 4) {
      const installmentData = data?.installment;
      const installmentGridData = data?.installment_grid;
      // @installment       ->      Generate installment
      // @firstBatchVoucher ->      Generate installment
      await insertIntoContractInstallment({
        installment: installmentData,
        installment_grid: installmentGridData,
        contract_id,
        SHOULD_UPDATES,
      });
    }
    return response;
  }
};

const insertIntoContractInstallment = async ({
  contract_id,
  installment,
  installment_grid,
  SHOULD_UPDATES,
}) => {
  let installment_id = installment?.id;

  if (installment?.id && SHOULD_UPDATES?.installment) {
    await ApiActions.update("installment", {
      conditions: [{ type: "and", conditions: [["id", "=", installment?.id]] }],
      updates: installment,
    });
  } else {
    const response = await ApiActions.insert("installment", {
      data: {
        ...installment,
        contract_id,
      },
    });
    installment_id = response?.record?.id;
  }

  insertIntoGrid({
    tableName: "installment",
    itemId: installment_id,
    grid: installment_grid,
    gridTableName: "installment_data",
    itemSearchName: "installment_id",
    should_update: SHOULD_UPDATES?.installment_grid,
  });
};

const insertIntoContractPictures = async ({
  values,
  contract_id,
  SHOULD_UPDATES,
}) => {
  if (!values || !contract_id) return;

  for (const picture of values) {
    let data = {
      picture: "", // url
      contract_id,
    };

    await ApiActions.insert("contract_pictures", {
      data,
    });
  }
};

const insertIntoGridTabs = async ({
  grid,
  tab: { table, conditions },
  item_id,
  itemNameId,
  should_update,
}) => {
  if (!grid || !table || !item_id) return;

  const prevGrid = await ApiActions.read(table, {
    conditions: [
      {
        type: "and",
        conditions: [[itemNameId, "=", item_id]],
      },
    ],
  });

  let prevCount = prevGrid?.result?.length;
  let currentCount = grid?.length;

  let length = Math.max(prevCount, currentCount);

  for (let i = 0; i < length; i++) {
    let item = grid?.[i];
    let prevItem = prevGrid?.result?.[i];
    let isValid = true;

    if (JSON.stringify(item) === JSON.stringify(prevItem)) continue;

    for (const condition of conditions) {
      if (!item?.[condition]) {
        isValid = false;
      }
    }

    if (isValid) {
      if (item.id && item && prevItem) {
        await ApiActions.update(table, {
          conditions: [
            { type: "and", conditions: [["id", "=", prevItem?.id]] },
          ],
          updates: item,
        });
      } else {
        if (item) {
          await ApiActions.insert(table, {
            data: {
              ...item,
              [itemNameId]: item_id,
            },
          });
        } else {
          await ApiActions.remove(table, {
            conditions: [
              { type: "and", conditions: [["id", "=", prevItem?.id]] },
            ],
          });
        }
      }
    }
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

// Generate Apartments & Parking & Shops
export const generateApartments = async (properties, flats, building_id) => {
  const isLoading = toast.loading(`waiting...`);

  let hashPropertyIds = {};
  let hashProperty = {};

  let len = properties?.length;

  // return;
  for (let i = 0; i < len; i++) {
    if (properties?.[i]?.room_count) {
      let item = properties[i];
      hashProperty[item.hex] = item;
      let res = null;
      if (item?.id) {
        res = await ApiActions.update("property_values", {
          conditions: [{ type: "and", conditions: [["id", "=", item?.id]] }],
          updates: properties?.[i],
        });
        hashPropertyIds[item?.hex] = item.id;
      } else {
        res = await ApiActions.insert("property_values", {
          data: {
            ...properties?.[i],
            row_index: i,
          },
        });
        if (res?.status) {
          let data = res?.record;
          hashPropertyIds[data?.hex] = data.id;
        }
      }
    }
  }

  for (const flat in flats) {
    let flatTableName = FLATS_TABLE_NAME[flat] || "apartment";
    let flatsGroup = Object.values(flats[flat]);

    for (const flat of flatsGroup) {
      let hex = flat?.hex;
      if (hashProperty?.[hex]?.id) delete hashProperty?.[hex].id;
      let data = {
        building_id,
        ...flat,
        ...hashProperty?.[hex],
        property_values_id: hashPropertyIds?.[hex],
      };

      delete data.created_at;
      delete data.name;
      delete data.room_count;

      let flatNameType =
        flatTableName === "apartment"
          ? `${flatTableName}_${data?.flat_type}`
          : flatTableName === "parking"
          ? `${flatTableName}_${data?.parking_kind}`
          : flat;
      let flatType = FLAT_PROPERTY_TYPES[flatNameType];

      let typeSettings = FLAT_PROPERTY_TABS_SETTINGS[flatType];

      if (data?.id) {
        const response = await ApiActions.update(flatTableName, {
          conditions: [{ type: "and", conditions: [["id", "=", data?.id]] }],
          updates: data,
        });
        if (!response?.success) {
          toast.error(`Failed to update ${data?.[typeSettings?.no]}`);
        }
      } else {
        const response = await ApiActions.insert(flatTableName, {
          data,
        });
        if (!response?.success) {
          toast.error(`Failed to insert ${data?.[typeSettings?.no]}`);
        }
      }
    }
  }
  toast.update(isLoading, {
    render: "Finished the process",
    autoClose: 2000,
  });

  return {
    isCompleted: true,
  };
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
};

export default INSERT_FUNCTION;
