
import { ApiActions } from './api';
import { CONTRACT_STATUS } from './contract-helpers';
import { deleteEntry, generateEntryFromContract, generateEntryFromFees, generateEntryFromTermination, generateEntryFromTerminationFines } from './vouchers-insert';
import { CREATED_FROM_CONTRACT_FEES, CREATED_FROM_CONTRACT_FINES, CREATED_FROM_CONTRACT_TERMINATION } from 'Helpers/GENERATE_STARTING_DATA';
import { CONTRACT_GRID_FORMS_NAMES, insertIntoGridTabs } from './global-insert';

const update = async (name, values, column = 'id') => {
  let key = column
  let value = values?.[column]
  const res = await ApiActions.update(name, {
    conditions: [
      { type: "and", conditions: [[key, "=", value]] },
    ],
    updates: values,
  });
  if (res?.success) return {
    ...res,
    values
  }
}

const insert = async (name, values) => {
  const response = ApiActions.insert(name, values);
  console.log(response, 'insert');

  return response
}

const dynamicInsertIntoContract = async ({
  data,
  tableName,
  contractType,
  ...additionalParams
}) => {

  // Contract new or old
  let contract_id = data?.contract?.id;
  let contract = data?.contract;
  let response = null;

  console.log(data, '-data');


  if (!contract_id) {
    response = await insert('contract', {
      ...data?.contract,
      contract_type: contractType,
    })
    contract_id = response?.record?.id;
    contract = response?.record
  } else {
    if (data?.contract_termination?.terminated) {
      contract.status = CONTRACT_STATUS.Terminate_and_Evacuated;
    }
    response = await update('contract', contract)
  }


  for (const name of ['contract_commission', 'contract_cycle']) {
    if (data?.[name]) {
      if (!data?.[name]?.id) {
        await insert(name, {
          ...data?.[name],
          contract_id
        })
      } else {
        await update(name, data?.[name])
      }
    }
  }



  let termination = data?.contract_termination
  if (termination) {
    let terminationId = termination?.id
    if (!data?.contract_termination?.id) {
      const resTermination = await insert('contract_termination', {
        ...termination,
        contract_id
      })
      termination = resTermination?.record;
      terminationId = termination?.id;
    } else {
      await update('contract_termination', termination)
    }
    if (termination?.gen_entries) {
      await generateEntryFromTermination({
        created_from: CREATED_FROM_CONTRACT_TERMINATION,
        values: termination,
        created_from_id: terminationId,
        contractFirstTabData: contract
      });
    } else {
      await deleteEntry(terminationId)
    }

    let contract_fines_grid = data?.contract_fines_grid
    if (contract_fines_grid && terminationId) {
      await insertIntoGridTabs({
        itemNameId: "termination_id",
        grid: contract_fines_grid,
        tab: CONTRACT_GRID_FORMS_NAMES.contract_fines_grid,
        item_id: terminationId,
      });

      // Generate Entry from Termination Grid 
      await generateEntryFromTerminationFines({
        created_from: CREATED_FROM_CONTRACT_FINES,
        values: contract_fines_grid,
        created_from_id: contract_id,
        contractFirstTabData: contract,
      });
    }
  }


  console.log("🚀 ~ contract_linked_parking:", data.contract_linked_parking)
  if (data?.contract_linked_parking) {
    // insert or update 
    await insertIntoGridTabs({
      itemNameId: "contract_id",
      grid: data?.contract_linked_parking,
      tab: CONTRACT_GRID_FORMS_NAMES.contract_linked_parking,
      item_id: contract?.id,
    });
  }


  let contract_other_fees = data?.contract_other_fees
  if (contract_other_fees) {
    await insertIntoGridTabs({
      itemNameId: "contract_id",
      grid: contract_other_fees,
      tab: CONTRACT_GRID_FORMS_NAMES.contract_other_fees,
      item_id: contract?.id,
    });

    await generateEntryFromFees({
      values: contract_other_fees,
      contractFirstTabData: contract,
      created_from: CREATED_FROM_CONTRACT_FEES,
      created_from_id: contract_id
    })
  }
  console.log("🚀 ~ response:", response)
  return response
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


// Insert to Shop Rent Contract and other relation tables
const CONTRACT_CURD_FUNCTIONS = {
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

export default CONTRACT_CURD_FUNCTIONS;

