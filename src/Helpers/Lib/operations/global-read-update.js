import { ApiActions } from "../api";

const fetchData = async (table, col, id) => {
  return await ApiActions.read(table, {
    conditions: [{ type: "and", conditions: [[col, "=", id]] }],
  });
};

export const getBuildingUpdate = async (id) => {
  const promises = [
    fetchData("building", "id", id),
    fetchData("building_buying", "building_id", id),
    fetchData("building_editorial_entry", "building_id", id),
    fetchData("building_investment", "building_id", id),
    fetchData("building_pictures", "building_id", id),
    fetchData("building_real_estate_development", "building_id", id),
    fetchData("building_real_estate_management", "building_id", id),
  ];

  const [
    building,
    building_buying,
    building_editorial_entry,
    building_investment,
    building_pictures,
    building_real_estate_development,
    building_real_estate_management,
  ] = await Promise.all(promises);

  const groupData = {
    building: building?.result?.at(0),
    building_buying: building_buying?.result?.at(0),
    building_editorial_entry: building_editorial_entry?.result?.at(0),
    building_investment: building_investment?.result?.at(0),
    building_pictures: building_pictures?.result,
    building_real_estate_development: building_real_estate_development?.result?.at(0),
    building_real_estate_management: building_real_estate_management?.result?.at(0),
  };

  console.log(groupData);

  return groupData;
};

export const getApartmentUpdate = async (id) => {
  const apartment = await fetchData("apartment", "id", id);
  const apartment_pictures = await fetchData(
    "apartment_pictures",
    "apartment_id",
    id
  );
  const property_values = await fetchData(
    "property_values",
    "apartment_id",
    id
  );
  const apartment_rental_price = await fetchData(
    "apartment_rental_price",
    "apartment_id",
    id
  );
  const apartment_selling_price = await fetchData(
    "apartment_selling_price",
    "apartment_id",
    id
  );

  const groupData = {
    apartment: apartment?.result?.at(0),
    apartment_pictures: apartment_pictures?.result,
    property_values: property_values?.result?.at(0),
    apartment_rental_price: apartment_rental_price?.result,
    apartment_selling_price: apartment_selling_price?.result,
  };
  console.log(groupData);

  return groupData;
};
export const getAssetsUpdate = async (id) => {
  const assets = await fetchData("assets", "id", id);
  const assets_accounts = await fetchData("assets_accounts", "assets_id", id);
  const assets_depreciation = await fetchData(
    "assets_depreciation",
    "assets_id",
    id
  );
  const assets_input = await fetchData("assets_input", "assets_id", id);
  const assets_maintenance = await fetchData(
    "assets_maintenance",
    "assets_id",
    id
  );
  const assets_sale = await fetchData("assets_sale", "assets_id", id);
  const assets_shipping = await fetchData("assets_shipping", "assets_id", id);

  const groupData = {
    assets: assets?.result?.at(0),
    assets_accounts: assets_accounts?.result?.at(0),
    assets_depreciation: assets_depreciation?.result?.at(0),
    assets_input: assets_input?.result?.at(0),
    assets_maintenance: assets_maintenance?.result?.at(0),
    assets_sale: assets_sale?.result?.at(0),
    assets_shipping: assets_shipping?.result?.at(0),
  };
  console.log(groupData);

  return groupData;
};

export const getParkingUpdate = async (id) => {
  const parking = await fetchData("parking", "id", id);
  const parking_price = await fetchData("parking_price", "parking_id", id);
  const parking_pictures = await fetchData(
    "parking_pictures",
    "parking_id",
    id
  );

  const groupData = {
    parking: parking?.result?.at(0),
    parking_price: parking_price?.result,
    parking_pictures: parking_pictures?.result,
  };
  console.log(groupData);

  return groupData;
};
export const getShopUpdate = async (id) => {
  const shop = await fetchData("shop", "id", id);
  const shop_fixed_assets = await fetchData("shop_fixed_assets", "id", id);
  const shop_pictures = await fetchData("shop_pictures,", "id", id);
  const shop_rent_price = await fetchData("shop_rent_price", "id", id);
  const shop_selling_price = await fetchData("shop_selling_price", "id", id);

  const groupData = {
    general: shop,
    "fixed assets": shop_fixed_assets,
    pictures: shop_pictures,
    "rent price": shop_rent_price,
    "selling price": shop_selling_price,
  };

  console.log(groupData);

  return groupData;
};

export const getVillaUpdate = async (id) => {
  const villa = await fetchData("villa", "id", id);
  const villa_accounts = await fetchData("villa_accounts", "id", id);
  const villa_assets = await fetchData("villa_assets,", "id", id);
  const villa_exterior_details = await fetchData(
    "villa_exterior_details",
    "id",
    id
  );
  const villa_interior_details = await fetchData(
    "villa_interior_details",
    "id",
    id
  );
  const villa_pictures = await fetchData("villa_pictures", "id", id);
  const villa_rent_price = await fetchData("villa_rent_price", "id", id);
  const villa_selling_price = await fetchData("villa_selling_price", "id", id);

  const groupData = {
    general: villa,
    "villa accounts": villa_accounts,
    "villa assets": villa_assets,
    "villa exterior_details": villa_exterior_details,
    "villa interior_details": villa_interior_details,
    "villa pictures": villa_pictures,
    "villa rent_price": villa_rent_price,
    "villa selling price": villa_selling_price,
  };

  console.log(groupData);

  return groupData;
};

export const getContractUpdate = async (id) => {
  const contract_commission = await fetchData(
    "contract_commission",
    "contract_id",
    id
  );
  const contract_terms = await fetchData("contract_terms", "contract_id", id);
  const contract_pictures = await fetchData(
    "contract_pictures",
    "contract_id",
    id
  );
  const contract_other_fees = await fetchData(
    "contract_other_fees",
    "contract_id",
    id
  );
  const contract_fixed_assets = await fetchData(
    "contract_fixed_assets",
    "contract_id",
    id
  );
  const contract_linked_parking = await fetchData(
    "contract_linked_parking",
    "contract_id",
    id
  );
  const contract_cycle = await fetchData("contract_cycle", "contract_id", id);
  const contract_termination = await fetchData(
    "contract_termination",
    "contract_id",
    id
  );
  const contract_receipt_number = await fetchData(
    "contract_receipt_number",
    "contract_id",
    id
  );

  // apartment_rent_contract

  const groupData = {
    contract_commission: contract_commission?.result?.at(0),
    contract_terms: contract_terms?.result?.at(0),
    contract_pictures: contract_pictures?.result,
    contract_other_fees: contract_other_fees?.result,
    contract_fixed_assets: contract_fixed_assets?.result,
    contract_linked_parking: contract_linked_parking?.result,
    contract_cycle: contract_cycle?.result?.at(0),
    contract_termination: contract_termination?.result?.at(0),
    contract_receipt_number: contract_receipt_number?.result,
  };

  console.log(groupData);

  return groupData;
};

const getApartmentContract = async (id) => {
  const contract = await fetchData("contract", "id", id);
  const contractGroup = await getContractUpdate(id);
  const apartment = await fetchData(
    "apartment_rent_contract",
    "contract_id",
    id
  );
  const rent_contract_financial = await fetchData(
    "rent_contract_financial",
    "contract_id",
    id
  );
};

const getShopContract = async (id) => {
  const contract = await fetchData("contract", "id", id);
  const contractGroup = await getContractUpdate(id);
  const apartment = await fetchData(
    "apartment_rent_contract",
    "contract_id",
    id
  );
  const rent_contract_financial = await fetchData(
    "rent_contract_financial",
    "contract_id",
    id
  );
};

const getParkingContract = async (id) => {
  const contract = await fetchData("contract", "id", id);
  const contractGroup = await getContractUpdate(id);
  const apartment = await fetchData(
    "apartment_rent_contract",
    "contract_id",
    id
  );
  const rent_contract_financial = await fetchData(
    "rent_contract_financial_parking",
    "contract_id",
    id
  );
};

async function getVoucherData({
  number,
  tableName,
  tableGridName,
  tableGridNameId,
  voucherType,
}) {
  console.log(number, tableName, tableGridName, "-----sa");
  let conditions = [{ type: "and", conditions: [["number", "=", number]] }];
  if (voucherType) {
    conditions.push({
      type: "and",
      conditions: [["voucher_type", "=", voucherType]],
    });
  }
  const res = await ApiActions.read(tableName, {
    conditions,
  });
  const mainData = res?.result?.at(0);

  const responseGrid = await ApiActions.read(tableGridName, {
    conditions: [
      {
        type: "and",
        conditions: [[tableGridNameId, "=", mainData?.id]],
      },
    ],
  });

  return {
    ...res?.result?.at(0),
    grid: responseGrid?.result || [],
  };
}

export const GLOBAL_READ_GROUP_DATA = {
  building: getBuildingUpdate,
  apartment: getApartmentUpdate,
  assets: getAssetsUpdate,
  parking: getParkingUpdate,
  shop: getShopUpdate,
  villa: getVillaUpdate,
  shop_contract: getShopContract,
  parking_contract: getParkingContract,
  apartment_contract: getApartmentContract,
  entry: async (number) =>
    await getVoucherData({
      number,
      tableName: "entry_main_data",
      tableGridName: "entry_grid_data",
      tableGridNameId: "entry_main_data_id",
    }),
  accounting_voucher: async (number) =>
    await getVoucherData({
      number,
      tableName: "accounting_voucher_main_data",
      tableGridName: "accounting_voucher_grid_data",
      tableGridNameId: "accounting_voucher_main_data_id",
    }),
  voucher: async (number, params) =>
    await getVoucherData({
      number,
      tableName: "voucher_main_data",
      tableGridName: "voucher_grid_data",
      tableGridNameId: "voucher_main_data_id",
      voucherType: params?.voucherType,
    }),
};

export default async function GET_UPDATE_DATE(name, id, params) {
  if (GLOBAL_READ_GROUP_DATA?.[name]) {
    let fn = GLOBAL_READ_GROUP_DATA?.[name];
    return await fn(id, params);
  } else {
    const res = await ApiActions.read(name, {
      conditions: [{ type: "and", conditions: [["id", "=", id]] }],
    });
    console.log("🚀 ~ GET_UPDATE_DATE ~ res:", res, id)
    return res.result?.at(0);
  }
}
