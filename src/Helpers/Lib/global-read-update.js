import { ApiActions } from "./api";

export const fetchData = async (table, col, id) => {
  return await ApiActions.read(table, {
    conditions: [{ type: "and", conditions: [[col, "=", id]] }],
  });
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

  return groupData;
};
export const getShopUpdate = async (id) => {
  const shop = await fetchData("shop", "id", id);
  const shop_fixed_assets = await fetchData("shop_fixed_assets", "id", id);
  const shop_pictures = await fetchData("shop_pictures,", "id", id);
  const shop_rental_price = await fetchData("shop_rental_price", "id", id);
  const shop_selling_price = await fetchData("shop_selling_price", "id", id);

  const groupData = {
    shop: shop?.result?.at(0),
    shop_fixed_assets: shop_fixed_assets?.result?.at(0),
    shop_pictures: shop_pictures?.result?.at(0),
    shop_rental_price: shop_rental_price?.result?.at(0),
    shop_selling_price: shop_selling_price?.result?.at(0),
  };

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
  const villa_rental_price = await fetchData("villa_rental_price", "id", id);
  const villa_selling_price = await fetchData("villa_selling_price", "id", id);

  const groupData = {
    villa: villa?.result?.at(0),
    villa_accounts: villa_accounts?.result?.at(0),
    villa_assets: villa_assets?.result?.at(0),
    villa_exterior_details: villa_exterior_details?.result?.at(0),
    villa_interior_details: villa_interior_details?.result?.at(0),
    villa_pictures: villa_pictures?.result?.at(0),
    villa_rental_price: villa_rental_price?.result?.at(0),
    villa_selling_price: villa_selling_price?.result?.at(0),
  };

  return groupData;
};

export const getInstallmentData = async (contractId) => {
  const installment = await fetchData("installment", "contract_id", contractId);
  const installment_grid = await ApiActions.read("cheque", {
    conditions: [
      {
        type: "and",
        conditions: [["installment_id", "=", installment?.result?.at(0)?.id]],
      },
    ],

    sorts: [{ column: "due_date", order: "ASC", nulls: "last" }],
  });

  const voucher_grid = await ApiActions.read("voucher_main_data", {
    conditions: [
      { type: "and", conditions: [["connect_with_id", "=", contractId]] },
    ],
  });

  return {
    installment,
    installment_grid,
    voucher_grid,
  };
};

export const getContractUpdateRestData = async (id) => {
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

  return groupData;
};

export const getContractUpdate = async (id) => {
  const contract = await fetchData("contract", "id", id);

  const { installment, installment_grid, voucher_grid } =
    await getInstallmentData(id);

  const data = await getContractUpdateRestData(id);
  const groupData = {
    contract: contract?.result?.at(0),
    installment: installment?.result?.at(0),
    installment_grid: installment_grid?.result, // cheques
    voucher_grid: voucher_grid?.result, // cheques
    ...data,
  };

  return groupData;
};

const getApartmentRentContract = async (id) => {
  // const contract = await fetchData("contract", "id", id);
  const contractGroup = await getContractUpdate(id);
  // const apartment_rent_contract = await fetchData(
  //   "apartment_rent_contract",
  //   "contract_id",
  //   id
  // );

  const groupData = {
    ...contractGroup,
    // apartment_rent_contract: apartment_rent_contract?.result?.at(0),
  };

  return groupData;
};

const getShopRentContract = async (id) => {
  // const contract = await fetchData("contract", "id", id);
  const contractGroup = await getContractUpdate(id);
  // const shop_rent_contract = await fetchData(
  //   "shop_rent_contract",
  //   "contract_id",
  //   id
  // );

  const groupData = {
    ...contractGroup,
    // shop_rent_contract: shop_rent_contract?.result?.at(0),
  };

  return groupData;
};

const getParkingRentContract = async (id) => {
  // const contract = await fetchData("contract", "id", id);
  const contractGroup = await getContractUpdate(id);
  // const parking = await fetchData("parking_rent_contract", "contract_id", id);

  const groupData = {
    ...contractGroup,
    // parking_rent_contract: parking?.result?.at(0),
  };

  return groupData;
};

const getApartmentSaleContract = async (id) => {
  // const contract = await fetchData("contract", "id", id);
  const contractGroup = await getContractUpdate(id);
  // const apartment_sale_contract = await fetchData(
  //   "apartment_rent_contract",
  //   "contract_id",
  //   id
  // );

  const groupData = {
    ...contractGroup,
    // apartment_sale_contract: apartment_sale_contract?.result?.at(0),
  };

  return groupData;
};
const getShopSaleContract = async (id) => {
  // const contract = await fetchData("contract", "id", id);
  const contractGroup = await getContractUpdate(id);
  // const shop_sale_contract = await fetchData(
  //   "shop_rent_contract",
  //   "contract_id",
  //   id
  // );

  const groupData = {
    ...contractGroup,
    // shop_sale_contract: shop_sale_contract?.result?.at(0),
  };

  return groupData;
};

const getParkingSaleContract = async (id) => {
  // const contract = await fetchData("contract", "id", id);
  const contractGroup = await getContractUpdate(id);
  const parking = await fetchData("parking_sale_contract", "contract_id", id);

  const groupData = {
    ...contractGroup,
    parking_sale_contract: parking?.result?.at(0),
  };

  return groupData;
};

async function getVoucherData({
  number,
  tableName,
  tableGridName,
  tableGridNameId,
  voucherType,
}) {
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

const getUserUpdate = async (id) => {
  const response = await ApiActions.read("user", {
    conditions: [{ type: "and", conditions: [["id", "=", id]] }],
  });
  if (response?.success) {
    return response?.result?.at(0);
  }
};

export const GLOBAL_READ_GROUP_DATA = {
  user: getUserUpdate,
  apartment: getApartmentUpdate,
  assets: getAssetsUpdate,
  parking: getParkingUpdate,
  shop: getShopUpdate,
  villa: getVillaUpdate,
  shop_rent_contract: getShopRentContract,
  parking_rent_contract: getParkingRentContract,
  apartment_rent_contract: getApartmentRentContract,
  shop_sale_contract: getShopSaleContract,
  parking_sale_contract: getParkingSaleContract,
  apartment_sale_contract: getApartmentSaleContract,
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
  console.log(name, id);
  if (GLOBAL_READ_GROUP_DATA?.[name]) {
    let fn = GLOBAL_READ_GROUP_DATA?.[name];
    return await fn(id, params);
  } else {
    const res = await ApiActions.read(name, {
      conditions: [{ type: "and", conditions: [["id", "=", id]] }],
    });
    return res.result?.at(0);
  }
}

export async function getContractData(number, code) {
  const contractResponse = await ApiActions.read("contract", {
    conditions: [
      { type: "and", conditions: [["code", "=", code]] },
      { type: "and", conditions: [["number", "=", number]] },
    ],
  });

  // const response = await ApiActions.read(name, {
  //   conditions: [
  //     {
  //       type: "and",
  //       conditions: [["contract_id", "=", contractResponse?.result?.at(0)?.id]],
  //     },
  //   ],
  // });
  return contractResponse;
}

export async function getLawsuitByNumber(number) {
  const response = await ApiActions.read("lawsuit", {
    conditions: [{ type: "and", conditions: [["number", "=", number]] }],
  });
  // let lawsuitId = response?.result?.at(0)?.id;
  // if (response?.success && lawsuitId) {
  //   return await getBuildingUpdate(lawsuitId);
  // }
}

export async function getServiceUpdate(id) {
  const promises = [
    fetchData("service", "id", id),
    fetchData("service_customer_request", "service_id", id),
    fetchData("service_lack_reason", "service_id", id),
    fetchData("service_material", "service_id", id),
    fetchData("service_worker", "service_id", id),
  ];

  const [
    service,
    service_customer_request,
    service_lack_reason,
    service_material,
    service_worker,
  ] = await Promise.all(promises);

  const groupData = {
    service: service?.result?.at(0),
    service_customer_request: service_customer_request?.result?.at(0),
    service_lack_reason: service_lack_reason?.result,
    service_material: service_material?.result,
    service_worker: service_worker?.result,
  };

  return groupData;
}

export async function getMaterialUpdate(id) {
  const promises = [
    fetchData("material", "id", id),
    fetchData("material_balance", "material_id", id),
    fetchData("material_minimum", "material_id", id),
    fetchData("material_prices", "material_id", id),
    fetchData("material_prices_details", "material_id", id),
    fetchData("material_specifications", "material_id", id),
  ];

  const [
    material,
    material_balance,
    material_minimum,
    material_prices,
    material_prices_details,
    material_specifications,
  ] = await Promise.all(promises);

  const groupData = {
    material: material?.result?.at(0),
    material_balance: material_balance?.result,
    material_minimum: material_minimum?.result,
    material_prices: material_prices?.result?.at(0),
    material_prices_details: material_prices_details?.result,
    material_specifications: material_specifications?.result,
  };

  return groupData;
}

export async function getServiceById(id) {
  const response = await ApiActions.read("service", {
    conditions: [{ type: "and", conditions: [["id", "=", id]] }],
  });
  let serviceId = response?.result?.at(0)?.id;
  if (response?.success && serviceId) {
    return await getServiceUpdate(serviceId);
  }
}

export const GET_UPDATE_DATE_BY_NUMBER = {
  lawsuit: getLawsuitByNumber,
  material: getMaterialUpdate,
  // service: getServiceByNumber,
};
