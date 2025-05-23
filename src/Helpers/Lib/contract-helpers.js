import { UNIQUE_REF_TABLES } from "Helpers/constants";
import { changeRowStatus, getCacheRowData } from "Helpers/functions";
import { fetchData } from "./global-read-update";
import { toast } from "react-toastify";

const { ApiActions } = require("./api");

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

export const DESPATCH_TABLES_NAME = {
  CHEQUE: "CHEQUE",
  VOUCHER: "VOUCHER",
  USER: "USER",
  ACCOUNT: "ACCOUNT",
};

export const CONTRACT_STATUS_NAMES = {
  1: { status: "Valid", parentClass: "bg-orange-400" },
  2: { status: "Terminate and Evacuated", parentClass: "bg-blue-500" },
  3: { status: "Expired and not renewed", parentClass: "bg-red-500" },
  4: { status: "Expired and renewed", parentClass: "bg-purple-500" },
};

export const CONTRACT_STATUS = {
  Valid: 1,
  Terminate_and_Evacuated: 2,
  Expired_and_not_renewed: 3,
  Expired_and_renewed: 4,
};

export async function fetchAndMergeBuildingInfo(buildingId, setValue) {
  const response = await ApiActions.read("building", {
    conditions: [{ type: "and", conditions: [["id", "=", buildingId]] }],
  });
  if (response?.success) {
    let data = response?.result?.at(0);
    if (data?.lessor_id)
      setValue(`contract.lessor_id`, data?.lessor_id);
    if (data?.commission_rate) {
      setValue(
        "contract_commission.commission_percentage",
        data?.commission_rate
      );
      setValue(
        "contract_commission.commission_from_owner_account_id",
        data?.owner_account_id
      );
      setValue("contract_commission.commission_account_id", data?.building_revenue_account_id);
    }
    if (data?.building_revenue_account_id)
      setValue(`contract.revenue_account_id`, data?.building_revenue_account_id);
    if (data?.building_discount_account_id)
      setValue(
        `contract.discount_account_id`,
        data?.building_discount_account_id
      );
    if (data?.building_insurance_account_id)
      setValue(
        `contract.insurance_account_id`,
        data?.building_insurance_account_id
      );
  }
}

export async function fetchAndMergeAssetInfo(asset, assetId, setValue) {
  let flatType = getAssetType(asset);
  const response = await ApiActions.read(flatType, {
    conditions: [{ type: "and", conditions: [["id", "=", assetId]] }],
  });

  if (response?.success) {
    let data = response?.result?.at(0);
    setValue(`contract.lawsuit`, data?.has_lawsuit);
    setValue(`contract.description`, data?.description);
    setValue(`contract.cost_center_id`, data?.cost_center_id);
  }
}

export function onWatchChangesInTab1(name, setValue, watch) {
  switch (name) {
    case 'contract_value': {
      setValue('contract.price_before_vat', watch('contract.contract_value'))
      setValue('contract.final_price', watch('contract.contract_value'))
      return;
    }

    // case 'building_id': {
    //   ['apartment_id', 'parking_id', 'shop_id']?.forEach(flat => {

    //     if (watch(`contract.${flat}`)) {
    //       setValue(`contract.${flat}`, undefined)
    //     }
    //   })
    //   return;
    // }
    case "vat_rate": {
      let discount = watch(`contract.vat_rate`) || 0;
      let price_before_vat = +watch(`contract.price_before_vat`);
      let vatValue = (discount / 100) * price_before_vat || 0;
      let newFinalPrice = price_before_vat + vatValue;

      setValue(`contract.final_price`, newFinalPrice);
      setValue("installment.total_amount", newFinalPrice);
      setValue(`contract.vat_value`, vatValue);
      return
    }
    case "discount_rate": {
      let discount = watch(`contract.discount_rate`) || 0;
      let price = watch(`contract.contract_value`);
      let finalPrice = price - (discount / 100) * price;
      let discountValue = price - finalPrice;

      setValue(`contract.final_price`, finalPrice);
      setValue(`contract.price_before_vat`, finalPrice);
      setValue("installment.total_amount", price);
      if (discount)
        setValue(`contract.discount_value`, discountValue?.toFixed(2));

      // if Contract has Real state management
      if (watch("contract_commission.commission_percentage")) {
        let commissionPrice = price - (discount / 100) * price;
        let commissionValue = price - commissionPrice;
        setValue(`contract_commission.commission_value`, commissionValue);
      }

      return;
    }

    case "start_duration_date":
    case "contract_duration":
      calculateContractDuration(watch, setValue);
      return;
    default:
      return;
  }
}

export const calculateContractDuration = (
  watch,
  setValue,
) => {
  let duration = watch(`contract.contract_duration`);
  let date = new Date(watch(`contract.start_duration_date`));

  let first_installment_date = null;
  if (date) {
    first_installment_date = new Date(date)?.toISOString()?.substring(0, 10);
    setValue(`installment.first_installment_date`, first_installment_date);
  }

  let end_duration_date = null;
  if (duration === 4) {
    setValue(`contract.end_duration_date`, new Date());
    return
  }

  switch (duration) {
    case 1:
      date = new Date(date.setMonth(date.getMonth() + 3))
      break;
    case 2:
      date = new Date(date.setMonth(date.getMonth() + 6))
      break;
    case 3:
      date = new Date(date.setFullYear(date.getFullYear() + 1))
      break;
    default:
      break;
  }
  let subDate = new Date(date)
  // subDate.setDate(subDate.getDate() - 1);
  subDate.setDate(subDate.getDate() - 1);
  setValue(`contract.end_duration_date`, new Date(subDate));
};

export async function mergeInstallmentAndFirstTabData(firstTabData, setValue, watch) {
  let total = firstTabData?.final_price;
  let date = firstTabData?.start_duration_date || firstTabData?.property_delivery_date;

  if (!watch('installment.each_number')) {
    setValue("installment.each_number", 3);
  }

  if (!watch('installment.installments_numbers')) {
    setValue("installment.installments_numbers", 4);
  }

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

export function onWatchChangesInstallmentTab(name, value, setValue, watch) {
  switch (name) {
    case "total_amount":
      let first_batch = watch(`installment.first_batch`) || 0;
      setValue(`installment.rest_amount`, value - +first_batch);
      break;
    case "first_batch":
      let totalAmount = watch(`installment.total_amount`);
      setValue(`installment.rest_amount`, totalAmount - (value || 0));

      return;

    case "has_first_batch":
      if (!value) {
        setValue("installment.payment_date", null);
        setValue("installment.first_batch", 0);
      }
      return;

    default:
      return;
  }
}

export function onWatchChangesInstallmentGridTab(name, setValue, watch, cache) {
  let row = name?.split(".").slice(0, 2).join(".");
  let note1 = ``;

  switch (name?.split(".")?.at(-1)) {
    case "due_date":
    case "number":
    case "amount":
    case "bank_id":
    case "end_due_date":
      const number = watch(`${row}.number`);
      const clientId = watch(`contract.client_id`);
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

  if (pattern?.default_revenue_account_id)
    setValue(
      `contract.revenue_account_id`,
      pattern?.default_revenue_account_id
    );
  if (pattern?.default_insurance_account_id)
    setValue(
      `contract.insurance_account_id`,
      pattern?.default_insurance_account_id
    );
  if (pattern?.default_discount_account_id)
    setValue(
      `contract.discount_account_id`,
      pattern?.default_discount_account_id
    );
  if (pattern?.default_vat_account_id)
    setValue(
      `contract.vat_account_id`,
      pattern?.default_vat_account_id
    );
  if (pattern?.vat_rate)
    setValue(
      `contract.vat_rate`,
      pattern?.vat_rate
    );
  if (pattern?.gen_entries)
    setValue(`contract.gen_entries`, pattern?.gen_entries);

  for (let i = 1; i <= 10; i++) {
    let account = pattern?.[`default_fees_account_${i}`]
    if (account)
      setValue(`contract_fines_grid.${i - 1}.account_id`, account)
  }
}

export const onWatchChangesTerminationTab = (name, value, watch, setValue) => {
  switch (name) {
    // start_duration_date
    // end_duration_date
    case "terminated":
    case "termination_date":
    case "round_to":
      if (watch("contract_termination.terminated")) {
        let termination_date = watch("contract_termination.termination_date");
        if (!termination_date) {
          termination_date = new Date();
          setValue("contract_termination.termination_date", termination_date);
        }
        let price = watch(`contract.contract_value`);
        let start = watch(`contract.start_duration_date`);
        let end = watch(`contract.end_duration_date`);
        let { totalPrice, restPrice } = calculateModifiedPrice(
          price,
          start,
          end,
          termination_date
        );

        let round_to = watch("contract_termination.round_to");
        switch (round_to) {
          case 0:
            totalPrice = totalPrice?.toFixed(0);
            restPrice = restPrice?.toFixed(0);
            break;
          default:
            totalPrice = totalPrice?.toFixed(2);
            restPrice = restPrice?.toFixed(2);
            break;
        }
        setValue("contract_termination.owner_total_amount", totalPrice);
        setValue("contract_termination.owner_rest_amount", restPrice);
      }
      break;
    case "":
      break;
    case "":
      break;
    case "":
      break;
    default:
      break;
  }
};

function calculateModifiedPrice(price, startDate, endDate, terminationDate) {
  let start = new Date(startDate);
  let end = new Date(endDate);
  let termination = new Date(terminationDate);
  let modifiedPrice = 0;
  let diffDays = 0;
  let totalDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));
  let priceInDay = price / totalDays;
  let totalPrice = 0;
  let restPrice = 0;

  if (termination > end) {
    diffDays = Math.floor((termination - end) / (1000 * 60 * 60 * 24));
    modifiedPrice = totalDays + diffDays;
  } else if (termination < end) {
    diffDays = Math.floor((end - termination) / (1000 * 60 * 60 * 24));
    modifiedPrice = totalDays - diffDays;
  }

  totalPrice = modifiedPrice * priceInDay;
  restPrice = price - totalPrice;

  return { totalPrice, restPrice };
}

// functions
export function dividePrice(
  start_date,
  price,
  numbers,
  duration,
  each_duration
) {
  const monthlyPrice = (price / numbers).toFixed(2);
  // const remainingPrice = price % numbers;

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
    }

    let end = new Date(currentDate.getTime() - 86400000)
      ?.toISOString()
      ?.substring(0, 10);
    result.push({ month: formattedDate, price: monthlyPrice, end });
  }

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
  const chqResponse = await ApiActions.read("cheque", {
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

export const getOldContracts = async (setOldContracts) => {
  const response = await ApiActions.read("contract");

  if (response?.success) {
    setOldContracts(response?.result);
  }
};

export const fetchContractRestData = async (index, tabs, watch, setValue) => {
  let contract_id = watch("contract.id");
  let currentTabName = tabs?.[index];

  if (watch(currentTabName)) return;

  const res = await fetchData(currentTabName, "contract_id", contract_id);
  if (!res?.success) return;

  switch (currentTabName) {
    case "contract_commission":
    case "contract_terms":
    case "contract_cycle":
    case "contract_termination":
      setValue(currentTabName, res?.result?.at(0) || {});
      return;
    case "contract_pictures":
    case "contract_other_fees":
    case "contract_fixed_assets":
    case "contract_linked_parking":
    case "contract_receipt_number":
      setValue(currentTabName, res?.result || []);
      return;
    default:
      return;
  }
};

export const onChangeContractStatus = async (col, watch, setValue) => {
  let id = watch("contract.id");
  if (!id) return;
  let value = watch(`contract.${col}`);

  const response = await changeRowStatus("contract", id, col, !value);
  if (response?.success) setValue(`contract.${col}`, !value);
};

export const contractValidation = (contract) => {
  let isValid = true;

  if (parseInt(contract.current_securing_value) > 0 && !contract.insurance_account_id) {
    isValid = false;
    toast.error(`Insurance account is Required`);
  }
  if (contract.discount_value && !contract.discount_account_id) {
    isValid = false;
    toast.error(`Discount account is Required`);
  }
  if (!contract.contract_value) {
    isValid = false;
    toast.error(`Contract value is required`);
  }

  return isValid;
};
