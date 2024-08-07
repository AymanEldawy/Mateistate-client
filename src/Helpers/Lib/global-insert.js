import { ApiActions } from "./api";
import getFormByTableName from "Helpers/Forms/forms";
import {
  generateEntryFromTermination,
  generateChequesFromInstallment,
  insertIntoEntry,
  insertIntoGrid,
  deleteEntry,
} from "./vouchers-insert";
import {
  FLATS_TABLE_NAME,
  FLAT_PROPERTY_TABS,
  FLAT_PROPERTY_TYPES,
  SELECT_LISTS,
} from "Helpers/constants";
import { toast } from "react-toastify";
import { getInsertAccountTrigger, removeNullValues } from "Helpers/functions";
import {
  CONNECT_WITH_CONTRACT_CODE,
  CREATED_FROM_CONTRACT_CODE,
  CREATED_FROM_CONTRACT_TERMINATION_CODE,
  CREATED_FROM_VOUCHER_CODE,
  MAIN_USERS_CODE,
  VOUCHER_RECEIPTS_CODE,
} from "Helpers/GENERATE_STARTING_DATA";
import { getAccountCash } from "./global-read";
import { CONTRACT_STATUS } from "./contract-helpers";

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
  service_material: {
    table: "service_material",
    conditions: ["status"],
  },
  service_worker: {
    table: "service_worker",
    conditions: ["category_problem_id"],
  },
  service_lack_reason: {
    table: "service_lack_reason",
    conditions: ["lack_reason_id"],
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

export const dynamicInsertIntoMultiStepsTable = async ({
  tableName,
  data,
  ...additionalParams
}) => {
  console.log("🚀 ~ tableName:", tableName);
  const SHOULD_UPDATES = data?.SHOULD_UPDATES;

  let steps = Object.values(
    getFormByTableName(tableName === "service" ? "service_customer" : tableName)
      ?.forms
  )?.map((c) => c?.tab_name);

  let stepGeneralName = steps?.at(0);

  const list = {};
  // Loop through all the data and save each step with the table name in database which mean
  for (const step of steps) {
    list[step] = data?.[step];
  }

  // Insert to building
  let mainResponse = null;
  let tableId = null;
  let mainValues = list[stepGeneralName]; // removeNullValues(list[stepGeneralName]);
  if (!mainValues) return;

  if (mainValues?.id) {
    tableId = mainValues?.id;
    mainResponse = await ApiActions.update(tableName, {
      conditions: [{ type: "and", conditions: [["id", "=", tableId]] }],
      updates: mainValues,
    });
  } else {
    mainResponse = await ApiActions.insert(tableName, {
      data: mainValues,
    });
    tableId = mainResponse?.record?.id;
  }

  if (mainResponse.success) {
    for (const name in list) {
      if (list[name] && name !== stepGeneralName) {
        if (CONTRACT_GRID_FORMS_NAMES?.[name]) {
          insertIntoGridTabs({
            grid: list[name],
            tab: CONTRACT_GRID_FORMS_NAMES?.[name],
            itemNameId: `${tableName}_id`,
            SHOULD_UPDATES,
            item_id: tableId,
          });
        } else {
          let values = list[name]; // removeNullValues(list[name]);
          if (!values) continue;

          let subItemId = null;
          let subResponse = null;
          if (values?.id) {
            subResponse = await ApiActions.update(name, {
              conditions: [
                { type: "and", conditions: [["id", "=", values?.id]] },
              ],
              updates: values,
            });
            subItemId = list[name]?.id;
          } else {
            subResponse = await ApiActions.insert(name, {
              data: {
                ...list[name],
                [`${tableName}_id`]: tableId,
              },
            });
            subItemId = subResponse?.record?.id;
          }

          // switch (name) {
          //   case "building": {
          //     if (list?.building && list?.building?.gen_entries) {
          //       generateEntryFromBuilding({
          //         values: list?.building,
          //         created_from: "building",
          //         created_from_id: tableId,
          //         should_update: SHOULD_UPDATES?.building,
          //       });
          //     }
          //     break;
          //   }
          //   case "building_buying": {
          //     if (list?.building_buying && list?.building_buying?.gen_entries) {
          //       generateEntryFromBuildingBuying({
          //         values: list?.building,
          //         created_from: "building_buying",
          //         created_from_id: subItemId,
          //         should_update: SHOULD_UPDATES?.building_buying,
          //       });
          //     }
          //     break;
          //   }
          //   case "building_investment": {
          //     if (
          //       list?.building_investment &&
          //       list?.building_investment?.gen_entries
          //     ) {
          //       generateEntryFromBuildingInvestment({
          //         values: list?.building_investment,
          //         created_from: "building_investment",
          //         created_from_id: subItemId,
          //         should_update: SHOULD_UPDATES?.building_investment,
          //       });
          //     }
          //     break;
          //   }
          //   default:
          //     break;
          // }
          // response
        }
      }
    }
  }

  return mainResponse;
};

// Insert to Building and other relation tables
const insetIntoLawsuit = async (data) => {};
// Insert to Building and other relation tables
const insertToBuilding = async (data) => {
  if (data?.building) {
    delete data?.building;
  }
  let buildingId = null;
  const response = await ApiActions.insert("building", {
    data,
  });

  if (response?.success) {
    buildingId = data?.id || response?.record?.id;

    let responseCostCenterId = null;
    let responseAccountId = null;

    if (data?.building_account_id) {
    } else {
      let accountData = await getInsertAccountTrigger("Buildings");
      accountData.name = data?.name;

      const responseAccount = await ApiActions.insert("account", {
        data: accountData,
      });
      responseAccountId = responseAccount?.record?.id;
    }

    if (data?.main_cost_center_id) {
    } else {
      let lastCostCenterNumber = await getLastCostCenterNumber();
      let internal_number = lastCostCenterNumber
        ? +lastCostCenterNumber + 1
        : 101;

      const responseCostCenter = await ApiActions.insert("cost_center", {
        data: {
          internal_number,
          name: data?.name,
        },
      });
      responseCostCenterId = responseCostCenter?.record?.id;
    }

    let buildingUpdates = {};

    if (!data?.main_cost_center_id && responseCostCenterId) {
      buildingUpdates.main_cost_center_id = responseCostCenterId;
    }

    if (!data?.building_account_id && responseAccountId) {
      buildingUpdates.building_account_id = responseAccountId;
    }

    if (Object.values(buildingUpdates)?.length) {
      await ApiActions.update("building", {
        conditions: [{ type: "and", conditions: [["id", "=", buildingId]] }],
        updates: buildingUpdates,
      });
    }
  }
  return response;
};

// Insert to Villa and other relation tables
const insertToVilla = async (data) =>
  await dynamicInsertIntoMultiStepsTable({
    tableName: "villa",
    data,
  });

// Insert to material and other relation tables
const insertToMaterial = async (data) =>
  await dynamicInsertIntoMultiStepsTable({
    tableName: "material",
    data,
  });

const getNewContractNumber = async (code) => {
  const contractRes = await ApiActions.read("contract", {
    conditions: [{ type: "and", conditions: [["code", "=", code]] }],
    limit: 1,
    sorts: [{ column: "internal_number", order: "DESC", nulls: "last" }],
    columns: ["internal_number"],
  });

  return contractRes?.response?.at(0)?.internal_number
    ? +contractRes?.response?.at(0)?.internal_number + 1
    : 1;
};

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
    const internal_number = await getNewContractNumber(data?.contract?.code);
    response = await ApiActions.insert("contract", {
      data: {
        ...data?.contract,
        contract_type: contractType,
        internal_number: internal_number || Math.floor(Math.random() * 100),
      },
    });
    contract_id = response?.record?.id;
  } else {
    if (data?.contract_termination?.terminated) {
      data.contract.status = CONTRACT_STATUS.TERMINATED;
    }

    response = await ApiActions.update("contract", {
      conditions: [
        { type: "and", conditions: [["id", "=", data?.contract?.id]] },
      ],
      updates: data?.contract,
    });
  }

  if (contract_id) {
    for (const name in list) {
      if (name === tableName) continue;
      if (list[name]) {
        let values = list?.[name];

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
              grid: values,
              tab: CONTRACT_GRID_FORMS_NAMES?.[name],
              item_id: contract_id,
              itemNameId: "contract_id",
              SHOULD_UPDATES,
            });
          }
        } else {
          values = removeNullValues(values);
          if (!values) continue;
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
          if (name === "contract_termination" && values.gen_entries) {
            generateEntryFromTermination({
              created_from: CREATED_FROM_CONTRACT_TERMINATION_CODE,
              // created_from_code:
              values,
              created_from_id: subItemId,
              contractFirstTabData: data?.contract,
            });
          } else deleteEntry(subItemId);

          if (
            name === "contract_termination" &&
            SHOULD_UPDATES?.termination_fines_grid
          ) {
            insertIntoGridTabs({
              grid: data?.termination_fines_grid,
              tab: CONTRACT_GRID_FORMS_NAMES?.termination_fines_grid,
              item_id: subItemId,
              itemNameId: "contract_termination_fines_id",
            });
          }
        }
      }
    }

    return response;
  }
};

export const insertIntoContractInstallment = async ({
  contract_id,
  installment,
  installment_grid,
  firstTabData,
  note,
}) => {
  let installment_id = installment?.id;
  let success = false;

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

  const cost_center_id = firstTabData?.cost_center_id;

  if (installment_id) {
    await generateChequesFromInstallment({
      installment,
      installment_grid,
      installment_id,
      contract_id,
      cost_center_id,
    });
  }

  if (installment?.gen_entries_type === 3) {
    return true;
  }

  const account_id = firstTabData?.client_id;

  let currency_id = installment?.currency_id;
  let currency_val = installment?.currency_val;
  let first_batch = installment?.first_batch;

  let entryMainData = {
    currency_id,
    currency_val,
    note,
    debit: first_batch,
    credit: first_batch,
    difference: 0,
  };

  // get CASH
  const observe_account_id = await getAccountCash(firstTabData?.building_id);

  if (!observe_account_id) {
    toast.error(
      "Failed to generate First payment because Cash Account is not found"
    );
    return;
  }
  const gridEntry = [];

  gridEntry.push({
    account_id: observe_account_id,
    debit: first_batch,
    observe_account_id: account_id,
    credit: 0,
    // currency_id,
    cost_center_id,
    note,
  });

  gridEntry.push({
    account_id: account_id,
    debit: 0,
    observe_account_id: observe_account_id,
    credit: first_batch,
    // currency_id,
    cost_center_id,
    note,
  });

  if (installment?.gen_entries_type === 1 && first_batch) {
    // insert into vouchers
    let voucherMainData = {
      currency_id,
      currency_val,
      connect_with: CONNECT_WITH_CONTRACT_CODE,
      account_id: observe_account_id,
      debit_amount: 0,
      credit_amount: first_batch,
      credit_total: 0,
      debit_total: first_batch,
      note,
      connect_with_id: contract_id,
      is_first_batch: true,
    };

    const prevVoucherResponse = await ApiActions.read("voucher_main_data", {
      conditions: [
        { type: "and", conditions: [["connect_with_id", "=", contract_id]] },
        { type: "and", conditions: [["is_first_batch", "=", true]] },
      ],
    });

    let prevVoucher = prevVoucherResponse?.result?.at(0);
    let voucher_main_data_id = prevVoucher?.id;

    if (prevVoucher?.id) {
      const res = await ApiActions.update("voucher_main_data", {
        conditions: [
          { type: "and", conditions: [["id", "=", voucher_main_data_id]] },
        ],
        updates: voucherMainData,
      });

      if (res?.success) {
        success = true;
        toast.success("Successfully Update First Payment Cash");
      } else {
        toast.error("Failed to Update First Payment Cash");
      }
    } else {
      let response = await ApiActions.insert("voucher_main_data", {
        data: {
          ...voucherMainData,
          voucher_type: VOUCHER_RECEIPTS_CODE,
        },
      });
      if (response?.success) {
        success = true;
        voucher_main_data_id = response?.record?.id;
        toast.success("Successfully Insert First Payment Cash");
      } else {
        toast.error("Failed to Insert First Payment Cash");
      }
    }

    const grid = [
      {
        account_id,
        debit: 0,
        credit: first_batch,
        // currency_id,
        cost_center_id,
        voucher_main_data_id,
        note,
      },
    ];

    insertIntoGrid({
      grid,
      itemId: voucher_main_data_id,
      tableName: "voucher_main_data",
      gridTableName: "voucher_grid_data",
      itemSearchName: "voucher_main_data_id",
    });

    entryMainData.created_from = CREATED_FROM_VOUCHER_CODE;
    entryMainData.created_from_code = VOUCHER_RECEIPTS_CODE;
    entryMainData.created_from_id = voucher_main_data_id;

    const entry = await insertIntoEntry(entryMainData);
    if (entry?.id) {
      success = true;
      insertIntoGrid({
        grid: gridEntry,
        itemId: entry?.id,
        tableName: "entry_main_data",
        gridTableName: "entry_grid_data",
        itemSearchName: "entry_main_data_id",
      });
      // toast.success("Successfully Generate Entry from First Payment Cash");
    } else {
      toast.error("Failed to Generate Entry from First Payment Cash", {
        autoClose: false,
      });
    }

    // gen entry from voucher
  } else if (installment?.gen_entries_type === 2) {
    entryMainData.is_first_batch = true;
    entryMainData.created_from = CREATED_FROM_CONTRACT_CODE;
    entryMainData.created_from_id = contract_id;

    const entry = await insertIntoEntry(entryMainData);
    if (entry?.id) {
      success = true;
      insertIntoGrid({
        grid: gridEntry,
        itemId: entry?.id,
        tableName: "entry_main_data",
        gridTableName: "entry_grid_data",
        itemSearchName: "entry_main_data_id",
      });
      // toast.success("Successfully Insert Entry as First Payment Cash");
    } else {
      toast.error("Failed to Insert Entry from as First Payment Cash", {
        autoClose: false,
      });
    }
  }

  return success;
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

export const getAccountLastNumber = async (name, col, val) => {
  const response = await ApiActions.read(name, {
    conditions: [{ type: "and", conditions: [[col, "=", val]] }],
    limit: 1,
    sorts: [{ column: "internal_number", order: "DESC", nulls: "last" }],
  });
  console.log("🚀 ~ getAccountLastNumber ~ response:", response);
  return response?.result?.at(0);
};

export const getLastNumberByColumn = async (
  name,
  col,
  val,
  col_number = "number"
) => {
  const response = await ApiActions.read(name, {
    conditions: [{ type: "and", conditions: [[col, "=", val]] }],
    limit: 1,
    sorts: [{ column: [col_number], order: "DESC", nulls: "last" }],
  });
  return response?.result?.at(0)?.[col_number] || 0;
};

export const getLastNumberByName = async (name, col = "number") => {
  const response = await ApiActions.read(name, {
    limit: 1,
    sorts: [{ column: [col], order: "DESC", nulls: "last" }],
  });
  if (response?.success) {
    return (
      response?.result?.at(0)?.internal_number ||
      response?.result?.at(0)?.number ||
      0
    );
  }
};

export const getLastCostCenterNumber = async () => {
  const response = await ApiActions.read("cost_center");

  let bigNumber = 0;
  for (const item of response?.result) {
    if (item?.number > bigNumber && !item?.parent_id)
      bigNumber = item?.internal_number;
  }

  return bigNumber ? +bigNumber : 1;
};

export const getCostCenterNumberById = async (id) => {
  const response = await ApiActions.read("cost_center", {
    conditions: [{ type: "and", conditions: [["id", "=", id]] }],
  });
  return response?.result?.at(0)?.internal_number;
};

// Generate Apartments & Parking & Shops
export const generateApartments = async (
  properties,
  flats,
  building,
  UPDATES_ROWS
) => {
  const FAILED_INSERTED_FLATS = [];
  let assetLastNumber = await getLastNumberByColumn(
    "cost_center",
    "parent_id",
    building?.main_cost_center_id,
    "internal_number"
  );

  let costCenterNumber = await getCostCenterNumberById(
    building?.main_cost_center_id
  );

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
        hashPropertyIds[item?.row_index] = item.id;
      } else {
        res = await ApiActions.insert("property_values", {
          data: {
            ...properties?.[i],
            building_id: building?.id,
            row_index: i,
          },
        });
        if (res?.success) {
          hashPropertyIds[i] = res?.record?.id;
        }
      }
    }
  }

  for (const asset in flats) {
    let flatTableName = FLATS_TABLE_NAME?.[asset] || "apartment";
    let flatsGroupValues = Object.values(flats?.[asset]);
    let flatsGroupKeys = Object.keys(flats?.[asset]);

    for (let i = 0; i < flatsGroupValues.length; i++) {
      let flat = flatsGroupValues?.[i];
      let assetHash = flatsGroupKeys?.[i];
      let hex = flat?.hex;
      if (hashProperty?.[hex]?.id) delete hashProperty?.[hex].id;
      let data = {
        building_id: building?.id,
        ...flat,
        ...hashProperty?.[hex],
        property_values_id: hashPropertyIds?.[flat?.row_index],
      };

      delete data.number;
      delete data.created_at;
      delete data.name;
      delete data.room_count;

      let flatNameType =
        flatTableName === "apartment"
          ? `${flatTableName}_${data?.apartment_kind}`
          : flatTableName === "parking"
          ? `${flatTableName}_${data?.parking_kind}`
          : flatTableName === "shop"
          ? `${flatTableName}_${data?.shop_kind}`
          : "";

      let flatType = FLAT_PROPERTY_TYPES[flatNameType];
      let typeSettings = FLAT_PROPERTY_TABS[flatType];

      if (data?.id) {
        if (UPDATES_ROWS?.[assetHash]) {
          const response = await ApiActions.update(flatTableName, {
            conditions: [{ type: "and", conditions: [["id", "=", data?.id]] }],
            updates: data,
          });
          if (!response?.success) {
            FAILED_INSERTED_FLATS.push(data?.[typeSettings?.no]);
          } else {
            await generateCostCenterFromUnits(
              { name: data?.[typeSettings?.no] },
              data?.cost_center_id
            );
          }
        }
      } else {
        assetLastNumber = assetLastNumber
          ? +assetLastNumber + 1
          : `${costCenterNumber}0101`;
        data.internal_number = assetLastNumber;
        data.number = i + 12;

        let costCenterData = {
          parent_id: building?.main_cost_center_id,
          internal_number: assetLastNumber,
          name: data?.[typeSettings?.no], // change name
        };

        // insert into cost center
        const cost_center_id = await generateCostCenterFromUnits({
          ...costCenterData,
          name: data?.[typeSettings?.no],
        });

        if (cost_center_id) {
          const newFlatResponse = await ApiActions.insert(flatTableName, {
            data: {
              ...data,
              cost_center_id,
              main_cost_center_id: building?.main_cost_center_id,
            },
          });

          if (!newFlatResponse?.success) {
            FAILED_INSERTED_FLATS.push(data?.[typeSettings?.no]);
            await ApiActions.remove("cost_Center", {
              conditions: [
                { type: "and", conditions: [["id", "=", cost_center_id]] },
              ],
            });
          }
        } else {
          FAILED_INSERTED_FLATS.push(data?.[typeSettings?.no]);
        }
      }
    }
  }

  if (FAILED_INSERTED_FLATS?.length)
    toast.error(`Flats failed: ${FAILED_INSERTED_FLATS}`);

  return {
    isCompleted: true,
  };
};

const generateCostCenterFromUnits = async (data, id = null) => {
  if (id) {
    await ApiActions.update("cost_center", {
      conditions: [{ type: "and", conditions: [["id", "=", id]] }],
      updates: data,
    });
  } else {
    const response = await ApiActions.insert("cost_center", {
      data,
    });
    return response?.record?.id;
  }
};

const updateUnits = async (unit, data, unitId) => {
  await ApiActions.update(unit, {
    conditions: [
      {
        type: "and",
        conditions: [["id", "=", data?.id || unitId]],
      },
    ],
    updates: data,
  });
};

// insert To User
const insertToUser = async (data) => {
  let member_id = null;
  if (!data?.member_id) {
    const memberRes = await ApiActions.insert("members", {
      data: {
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        user_type: 3,
      },
    });
    member_id = memberRes?.record?.id;
  } else {
    const memberRes = await ApiActions.update("members", {
      conditions: [{ type: "and", conditions: [["id", "=", data?.member_id]] }],
    });
    member_id = memberRes?.result?.at(0)?.id;
  }

  if (!member_id) return;

  if (data?.id) {
    const res = await ApiActions.update("user", {
      conditions: [{ type: "and", conditions: [["id", "=", data?.id]] }],
      updates: data,
    });

    return res;
  }

  let type = SELECT_LISTS("user_type")?.find(
    (c) => c.id === +data?.card_type
  )?.id;

  if (data?.card_type > 2) {
    const userResponse = await ApiActions.insert("user", {
      data: { ...data, member_id },
    });
    return userResponse;
  } else {
    const account = await getInsertAccountTrigger(MAIN_USERS_CODE?.[type]);
    account.name = data?.name;
    // account.ltnname = data?.ltnname;

    // automatic insert a new account in suppliers or customers before insert the user
    const accountResponse = await ApiActions.insert("account", {
      data: account,
    });

    if (accountResponse?.success) {
      // insert the USER after connect it with the inserted ACCOUNT
      const userResponse = await ApiActions.insert("user", {
        data: { ...data, member_id, account_id: accountResponse?.record?.id },
      });
      
      if(!userResponse?.success) {
        await ApiActions.remove('members', {
          conditions: [{type: 'and', conditions: [['id', '=', member_id]]}]
        })
        await ApiActions.remove('account', {
          conditions: [{type: 'and', conditions: [['id', '=', account]]}]
        })
      }
      return userResponse;
    }
  }
};

// insert To User
const insertToOwner = async (data) => {
  if (data?.id) return; // if is UPDATE ignore

  const account = await getInsertAccountTrigger(`Suppliers`);
  account.name = data?.name;
  // automatic insert a new account in suppliers or customers before insert the user
  const accountResponse = await ApiActions.insert("account", { data: account });

  if (accountResponse?.success) {
    // insert the USER after connect it with the inserted ACCOUNT
    const ownerResponse = await ApiActions.insert("owner", {
      data: { ...data, account_id: accountResponse?.record?.id },
    });
    return ownerResponse;
  }
};

// Insert to Shop Rent Contract and other relation tables
const INSERT_FUNCTION = {
  // table name : function
  building: insertToBuilding,
  villa: insertToVilla,
  material: insertToMaterial,
  lawsuit: insetIntoLawsuit,
  // Units
  // land
  // apartment
  // parking
  // shop

  // rent contract
  apartment_rent_contract: insertToApartmentRentContract,
  shop_rent_contract: insertToShopRentContract,
  parking_rent_contract: insertToParkingRentContract,
  // sale contract
  apartment_sale_contract: insertToApartmentSaleContract,
  shop_sale_contract: insertToShopSaleContract,
  parking_sale_contract: insertToParkingSaleContract,
  land_sale_contract: insertToLandSaleContract,
  user: insertToUser,
  owner: insertToOwner,
};

export default INSERT_FUNCTION;
