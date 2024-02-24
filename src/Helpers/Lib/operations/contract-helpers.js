import { UNIQUE_REF_TABLES } from "Helpers/constants";
import { getCacheRowData } from "Helpers/functions";

const { ApiActions } = require("../api");

export const COUNTER_CHQ_NUMBER = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
  "thirteenth",
  "fourteenth",
  "fifteenth",
  "sixteenth",
  "seventeenth",
  "eighteenth",
  "nineteenth",
  "twentieth",
  "twenty-first",
  "twenty-second",
  "twenty-third",
  "twenty-fourth",
  "twenty-fifth",
  "twenty-sixth",
  "twenty-seventh",
  "twenty-eighth",
  "twenty-ninth",
  "thirtieth",
  "thirty-first",
  "thirty-second",
  "thirty-third",
  "thirty-fourth",
  "thirty-fifth",
  "thirty-sixth",
  "thirty-seventh",
  "thirty-eighth",
  "thirty-ninth",
  "fortieth",
];

export const CONTRACT_STATUS_NAMES = {
  1: "Rented",
  2: "Vacant",
  3: "Expired and not renewed",
  4: "Renewed",
};

export const CONTRACT_STATUS = {
  ON: 1,
};

export async function fetchAndMergeBuildingInfo(
  buildingId,
  setValue,
  firstTab
) {
  const response = await ApiActions.read("building", {
    conditions: [{ type: "and", conditions: [["id", "=", buildingId]] }],
    joins: [
      {
        type: "leftJoin",
        table: "building_real_estate_management",
        conditions: {
          "building_real_estate_management.id": "building.building_id",
        },
      },
    ],
  });

  console.log(response, '----');
  
  if (response?.success) {
    let data = response?.result?.at(0);
    setValue(`${firstTab}.lessor_id`, data?.lessor_id);
    // if owner setValue('owner_id', data?.building_real_estate_management?.account_id)
  }
}

export async function fetchAndMergeAssetInfo(
  asset,
  assetId,
  setValue,
  tabName
) {
  let flatType = getAssetType(asset);
  const response = await ApiActions.read(flatType, {
    conditions: [{ type: "and", conditions: [["id", "=", assetId]] }],
  });

  if (response?.success) {
    let data = response?.result?.at(0);
    setValue(`${tabName}.description`, data?.description);
    // setValue(`${tabName}.property_area`, data?.property_type);
    setValue(`${tabName}.lawsuit`, data?.has_lawsuit);
    setValue(`cost_center_id`, data?.cost_center_id);
    // setValue(`${tabNames[1]}.contract_value`, data?.has_lawsuit);
  }
}

export async function fetchAndMergeClientInfo(
  accountId,
  setValue,
  firstTab,
  SHOULD_UPDATES
) {
  const response = await ApiActions.read("user", {
    conditions: [{ type: "and", conditions: [["account_id", "=", accountId]] }],
  });

  // if (response?.success) {
  //   let data = response?.result?.at(0);
  //   setValue(`${firstTab}.nationality`, data?.nationality);
  //   setValue(`${firstTab}.work_phone`, data?.work_phone);
  //   setValue(`${firstTab}.phono`, data?.personal_phone);
  // }
}

export function onWatchChangesInTab1(
  name,
  value,
  setValue,
  tabNames,
  watch,
  SHOULD_UPDATES
) {
  switch (name) {
    case "discount_rate":
    case "contract_value": {
      let discount = watch(`${tabNames}.discount_rate`) || 0;
      let price = watch(`${tabNames}.contract_value`);
      let finalPrice = price - (discount / 100) * price;
      let discountValue = price - finalPrice;

      setValue(`${tabNames}.discount_value`, discountValue?.toFixed(2));
      setValue(`${tabNames}.final_price`, finalPrice);
      setValue("installment.total_amount", price);
      SHOULD_UPDATES.installment = true;
      return;
    }
    case "current_securing_percentage": {
      let price = watch(`${tabNames}.contract_value`);
      let rate = watch(`${tabNames}.current_securing_percentage`);
      let finalPrice = price - (rate / 100) * price;
      setValue(`${tabNames}.current_securing_value`, price - finalPrice);
      return;
    }

    case "start_duration_date":
    case "contract_duration": {
      let duration = watch(`${tabNames}.contract_duration`);
      let start = watch(`${tabNames}.start_duration_date`);
      let date = new Date(start);

      // change first installment date value
      if (start) {
        setValue(
          `installment.first_installment_date`,
          new Date(start)?.toISOString()?.substring(0, 10)
        );
        SHOULD_UPDATES.installment = true;
      }

      switch (duration) {
        case 1:
          setValue(
            `${tabNames}.end_duration_date`,
            new Date(date.setMonth(date.getMonth() + 3))
              ?.toISOString()
              ?.substring(0, 10)
          );
          return;
        case 2:
          setValue(
            `${tabNames}.end_duration_date`,
            new Date(date.setMonth(date.getMonth() + 6))
              ?.toISOString()
              ?.substring(0, 10)
          );
          return;
        case 3:
          setValue(
            `${tabNames}.end_duration_date`,
            new Date(date.setMonth(date.getMonth() + 12))
              ?.toISOString()
              ?.substring(0, 10)
          );
          return;
        default:
          return;
      }
    }
    default:
      return;
  }
}

export async function mergeInstallmentAndFirstTabData(firstTabData, setValue) {
  let total = firstTabData?.contract_value;
  let date = firstTabData?.start_duration_date;

  if (total) {
    setValue("installment.total_amount", total);
  }
  if (date) {
    setValue(
      `installment.first_installment_date`,
      new Date(date)?.toISOString()?.substring(0, 10)
    );
  }
}

export function onWatchChangesInstallmentTab(
  name,
  value,
  setValue,
  tabNames,
  watch
) {
  switch (name) {
    case "total_amount":
      let first_batch = watch(`installment.first_batch`) || 0;
      setValue(`installment.rest_amount`, value - +first_batch);
      break;
    case "first_batch":
      let totalAmount = watch(`installment.total_amount`);
      setValue(`installment.rest_amount`, totalAmount - (value || 0));

      return;

    case "gen_entries_type":
      if (value === 3) {
        setValue("installment.payment_date", null);
        setValue("installment.first_batch", 0);
      }
      return;

    // case "each_duration":
    case "first_installment_date":
      const rest_amount = watch("installment.rest_amount");
      const each_duration = watch("installment.each_duration");
      const each_number = watch("installment.each_number");
      const first_installment_date = watch(
        "installment.first_installment_date"
      );
      const installments_numbers = watch("installment.installments_numbers");

      if (rest_amount) {
        const result = dividePrice(
          first_installment_date,
          rest_amount,
          installments_numbers,
          each_duration,
          each_number
        );
        // getMonthsDiff();
        setValue(`installment.installment_price`, result?.at(0)?.price);
        // setValue(`installment.final_payment`, result?.at(-1)?.price);
      }

      return;

    default:
      return;
  }
}

export function onWatchChangesInstallmentGridTab(
  name,
  value,
  setValue,
  watch,
  cache,
  firstTab
) {
  let row = name?.split(".").slice(0, 2).join(".");

  let note1 = ``;

  switch (name?.split(".")?.at(-1)) {
    case "due_date":
    case "number":
    case "amount":
    case "bank_id":
    case "end_due_date":
      const number = watch(`${row}.number`);
      const clientId = watch(`${firstTab}.client_id`);
      const amount = watch(`${row}.amount`);

      const dueDate = new Date(watch(`${row}.due_date`)).toLocaleDateString(
        "en-UK"
      );

      const endDueDate = new Date(
        watch(`${row}.end_due_date`)
      ).toLocaleDateString("en-UK");

      const bank = getCacheRowData(cache, "bank", watch(`${row}.bank_id`));
      const client = getCacheRowData(
        cache,
        UNIQUE_REF_TABLES.clients,
        clientId
      );

      note1 = `received chq number ${number} from mr ${client?.name} ${amount} due date ${dueDate} end date ${endDueDate} bank name ${bank?.name}`;
      break;
    default:
      break;
  }

  setValue(`${row}.note1`, note1);
}
export async function autoMergePatternSettingsWithValues(
  pattern,
  watch,
  setValue,
  tabs
) {
  setValue(
    `${tabs?.[0]}.revenue_account_id`,
    pattern?.default_revenue_account_id
  );
  setValue(
    `${tabs?.[0]}.insurance_account_id`,
    pattern?.default_insurance_account_id
  );
  setValue(
    `${tabs?.[0]}.discount_account_id`,
    pattern?.default_discount_account_id
  );
  setValue(`${tabs?.[0]}.gen_entries`, pattern?.gen_entries);
}

export const isContractValid = (watch, tabNames, assetType) => {
  let isValid = true;

  // if (!watch(`${tabNames[0]}.contract_value`)) isValid = false;

  return isValid;
};

// functions
export function dividePrice(
  start_date,
  price,
  numbers,
  duration,
  each_duration
) {
  const monthlyPrice = Math.floor(price / numbers);
  const remainingPrice = price % numbers;

  const result = [];

  let currentDate = new Date(start_date);
  for (let i = 0; i < numbers; i++) {
    const formattedDate = currentDate?.toISOString()?.substring(0, 10);

    // increase weeks
    if (duration === 1) {
      currentDate = new Date(
        currentDate.setDate(currentDate.getDate() + parseInt(each_duration) * 7)
      );
    }
    // increase months
    if (duration === 2) {
      currentDate = new Date(
        currentDate.setMonth(currentDate.getMonth() + parseInt(each_duration))
      );
    }
    // increase year
    if (duration === 3) {
      currentDate = new Date(
        currentDate.setFullYear(
          currentDate.getFullYear() + parseInt(each_duration)
        )
      );
      console.log(currentDate, "---");
    }

    let end = new Date(currentDate.getTime() - 86400000)
      ?.toISOString()
      ?.substring(0, 10);
    result.push({ month: formattedDate, price: monthlyPrice, end });
  }

  if (result[result.length - 1]?.price)
    result[result.length - 1].price += remainingPrice;

  return result;
}

export function getAssetType(name) {
  switch (name) {
    case "parking":
      return "parking";
    case "shop":
      return "shop";
    default:
      return "apartment";
  }
}

export const getContractPayments = async (contract_id, setValue) => {
  const chqResponse = await ApiActions.read("bill", {
    conditions: [
      { type: "and", conditions: [["connect_with_id", "=", contract_id]] },
    ],
  });
  setValue("installment_grid", chqResponse?.result);
  const vouchersResponse = await ApiActions.read("voucher_main_data", {
    conditions: [
      { type: "and", conditions: [["connect_with_id", "=", contract_id]] },
    ],
    joins: [
      {
        type: "leftJoin",
        table: "voucher_grid_data",
        conditions: {
          "voucher_main_data.id": "voucher_grid_data.voucher_main_data_id",
        },
      },
    ],
  });
  setValue("voucher_grid", vouchersResponse?.result);
};

export const getOldContracts = async (setOldContracts, type) => {
  const response = await ApiActions.read("contract", {
    joins: [
      {
        type: "leftJoin",
        table: type,
        conditions: { "contract.id": `${type}.contract_id` },
      },
    ],
  });
  console.log("🚀 ~ getOldContracts ~ response:", response);

  if (response?.success) {
    setOldContracts(response?.result);
  }
};

export const resetContractFields = () => ({
  building_id: null,
  client_id: null,
  contract_duration: null,
  contract_value: null,
  current_securing_percentage: null,
  current_securing_value: null,
  description: null,
  discount_account_id: null,
  discount_rate: null,
  discount_value: null,
  feedback: null,
  final_price: null,
  insurance_account_id: null,
  lawsuit: null,
  lessor_id: null,
  paid_type: null,
  previous_securing: null,
  shop_id: null,
  parking_id: null,
  apartment_id: null,
  end_duration_date: null,
  gen_entries: true,
  revenue_account_id: null,
  start_duration_date: null,
  status: 1,
});
