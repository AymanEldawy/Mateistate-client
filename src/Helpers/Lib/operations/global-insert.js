import { ApiActions } from "../api";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { generateEntryFromContract } from "./vouchers-actions";
import { CONTRACTS_ASSETS_TYPE } from "Helpers/constants";

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
};

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
  console.log("🚀 ~ data:", data);
  let steps = Object.values(getFormByTableName(tableName)?.forms)?.map(
    (c) => c?.tab_name
  );

  const list = {};
  // Loop through all the data and save each step with the table name in database which mean
  for (const step of steps) {
    list[step] = data?.[step];
  }

  let response = null;
  if (data?.contract?.id) {
    response = await ApiActions.update("contract", {
      conditions: [
        { type: "and", conditions: [["id", "=", data?.contract?.id]] },
      ],
      updates: data?.contract,
    });
  } else {
    // Insert into contract or update
    response = await ApiActions.insert("contract", {
      data: {
        contract_type: contractType,
        flat_type: data?.flat_type,
      },
    });
  }

  if (response.success) {
    const contract_id = response?.record?.id || data?.contract?.id;

    // for (const name in list) {
    //   if (list[name]) {
    //     let values = list[name];
    //     if (CONTRACT_GRID_FORMS_NAMES?.[name]) {
    //       let tab = CONTRACT_GRID_FORMS_NAMES?.[name];
    //       if (name === "contract_pictures") {
    //         insertIntoContractPictures({
    //           values,
    //           contract_id,
    //         });
    //       } else {
    //         insertIntoContractGridTabs({
    //           values,
    //           tab,
    //           contract_id,
    //         });
    //       }
    //     } else {
    //       if (values?.id) {
    //         await ApiActions.update(name, {
    //           conditions: [
    //             { type: "and", conditions: [["id", "=", values?.id]] },
    //           ],
    //           updates: values,
    //         });
    //       } else {
    //         ApiActions.insert(name, {
    //           data: {
    //             ...values,
    //             contract_id,
    //           },
    //         });
    //       }
    //     }
    //   }
    // }
    // @Voucher -> Generate entries `Contract value`, `Insurance value`

    if (list?.[data?.tabName]?.gen_entries) {
      console.log('gen entries');
      generateEntryFromContract({
        contractId: contract_id,
        assetsType: CONTRACTS_ASSETS_TYPE?.[data?.flat_type],
        assetsTypeNumber: 1,
        buildingNumber: 2,
        contractNumber: response?.record?.number,
        values: list?.[data?.tabName],
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
      });
    }
    return response;
  }
};

const insertIntoContractInstallment = async ({
  contract_id,
  installment,
  installment_grid,
}) => {
  let installment_id = installment?.id;

  if (installment?.id) {
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

  for (const item of installment_grid) {
    if (item?.id) {
      await ApiActions.update("installment_data", {
        conditions: [{ type: "and", conditions: [["id", "=", item?.id]] }],
        updates: item,
      });
    } else {
      await ApiActions.insert("installment_data", {
        data: {
          ...item,
          installment_id,
        },
      });
    }
  }
};

const insertIntoContractPictures = async ({ values, contract_id }) => {
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

const insertIntoContractGridTabs = async ({
  values,
  tab: { table, conditions },
  contract_id,
}) => {
  if (!values || !table || !contract_id) return;

  for (const item of values) {
    let isValid = true;
    for (const condition of conditions) {
      if (!item[condition]) {
        isValid = false;
      }
    }
    if (isValid) {
      if (item.id) {
        await ApiActions.update(table, {
          conditions: [{ type: "and", conditions: [["id", "=", item?.id]] }],
          updates: item,
        });
      } else {
        await ApiActions.insert(table, {
          data: {
            ...item,
            contract_id,
          },
        });
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
