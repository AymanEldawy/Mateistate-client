import axios from "axios";
import { ApiActions } from "./Lib/api";
import {
  FLATS_TABLE_NAME,
  FLAT_PROPERTY_TABS_SETTINGS,
  FLAT_PROPERTY_TYPES,
  SELECT_LISTS,
} from "./constants";
import { toast } from "react-toastify";
import { getLastNumberByColumn } from "./Lib/operations/global-insert";

// export const SERVER_URL = `https://matiestate-server.vercel.app/`;
export const SERVER_URL = `https://matiestate-server.vercel.app`;
// export const SERVER_URL = `https://matiestate-server.vercel.app`;

export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

export function openFullscreen() {
  let body = document.body;
  if (body.requestFullscreen) {
    body.requestFullscreen();
  } else if (body.webkitRequestFullscreen) {
    body.webkitRequestFullscreen();
  } else if (body.webkitRequestFullscreen) {
    body.webkitRequestFullscreen();
  } else if (body.msRequestFullscreen) {
    body.msRequestFullscreen();
  }
}

export function DropDowns(key) {
  const DropDown = {
    PayType: [
      { id: "0", name: "Cash" },
      { id: "1", name: "Installments" },
      { id: "2", name: "By plan" },
      { id: "3", name: "Credit" },
    ],
    RentDuration: [
      { id: 1, name: "1 Month" },
      { id: 2, name: "2 Months" },
      { id: 3, name: "3 Months" },
      { id: 4, name: "4 Months" },
      { id: 5, name: "5 Months" },
      { id: 6, name: "6 Months" },
      { id: 7, name: "7 Months" },
      { id: 8, name: "8 Months" },
      { id: 9, name: "9 Months" },
      { id: 10, name: "10 Months" },
      { id: 11, name: "11 Months" },
      { id: 12, name: "12 Months" },
      { id: 13, name: "Custom" },
    ],
    NewState: [
      { id: 0, name: "New" },
      { id: 1, name: "Renew" },
    ],
    seclvl: [
      { id: 0, name: "Admin" },
      { id: 1, name: "User" },
    ],
    ContractKind: [
      { id: 1, name: "Flats" },
      { id: 2, name: "Pent Houses" },
      { id: 3, name: "Mezzanine" },
      { id: 4, name: "Offices" },
      { id: 5, name: "Car parking" },
      { id: 6, name: "Underground Parking" },
      { id: 7, name: "Shops" },
      { id: 8, name: "Driver flats" },
      { id: 9, name: "Servant flats" },
    ],
  };
  return DropDown[key];
}

// conversion
export const hexToDecimal = (hex) => parseInt(hex, 16);
export const decimalToHex = (dec) =>
  (dec + Math.pow(16, 6)).toString(16).substr(-6);

export const getValueOfInputColor = (val) => {
  if (typeof val === "number") {
    return `#${decimalToHex(val)}`;
  }
};

export const getPrefix = (tab) => {
  if (tab === "penthouse") return "PH";
  let tabSplit = tab?.split(" ");
  if (tabSplit?.length > 1)
    return `${tabSplit?.[0]?.[0]?.toUpperCase()}${tabSplit?.[1]?.[0]?.toUpperCase()}`;
  else return tab[0]?.toUpperCase();
};

export function getMonthsDiff(start_date, end_date, price) {
  const startDate = new Date(start_date);
  const endDate = new Date(end_date);

  const monthsDiff =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;

  const monthlyPrice = Math.floor(price / monthsDiff);
  const remainingPrice = price % monthsDiff;

  return { monthlyPrice, remainingPrice, startDate, endDate, monthsDiff };
}

export const getCreatedFromUrl = (name, id) => {
  switch (name?.toLowerCase()) {
    case "contract":
      return {
        href: `/contracts/${id}`,
        classes: "bg-red-600 text-white p-2 rounded-md text-xs",
      };
    default:
      return;
  }
};

export async function getInsertAccountTrigger(name, conditions) {
  // get suppliers or customers id
  const parentAccount = await ApiActions.read("account", {
    conditions: name
      ? [{ type: "and", conditions: [["name", "=", name]] }]
      : conditions,
  });

  let parent_id = parentAccount?.result?.at(0)?.id;
  let final_id = parentAccount?.result?.at(0)?.final_id;
  if (!final_id) final_id = parentAccount?.result?.at(0)?.parent_id;
  // get last child id of suppliers or customers
  const lastNumber = await getLastNumberByColumn(
    "account",
    "parent_id",
    parent_id,
    "number"
  );

  // get default currency id
  const currencyResponse = await ApiActions.read("currency", {
    conditions: [{ type: "and", conditions: [["code", "=", "AED"]] }],
  });

  let account = {
    number: +lastNumber + 1,
    type: 1,
    currency_id: currencyResponse?.result?.at(0)?.id,
    parent_id,
    final_id,
  };

  return account;
}

//
export function removeNullValues(oldValues) {
  if (Object.keys(oldValues).length < 1) return;

  let values = {};
  for (const key in oldValues) {
    let val = oldValues[key];
    if (val !== undefined && val !== null && val !== "") {
      values[key] = val;
    }
  }
  return values;
}

export function generateFlatHashName(tab, setting, yIndex, xIndex) {
  switch (tab) {
    case "apartment":
      return `0${xIndex + 1}0${yIndex + 1}`;
    case "parking":
    case "mezzanine":
      return `${setting.prefix} ${xIndex}${yIndex + 1}`;
    case "office":
    case "penthouse":
      return `${setting.prefix} ${xIndex + 1}0${yIndex + 1}`;
    case "driver flats":
    case "servant flats":
      return `${setting.prefix} ${yIndex + 1}0${xIndex + 1}`;
    case "stores":
      return;
    case "warehouse":
    case "shop":
    case "underground parking":
      return `${setting.prefix} ${yIndex}${xIndex + 1}`;
    default:
      return `${setting.prefix} ${xIndex + 1}0${yIndex + 1}`;
  }
}

// const HASH_BILLS_TYPE = {};
// export async function getBillType(type) {
//   if (HASH_BILLS_TYPE[type]) return HASH_BILLS_TYPE[type];
//   else {
//     const response = await ApiActions.read("bill_pattern");
//     if (response?.success) {
//       for (const item of response?.result) {
//         HASH_BILLS_TYPE[item?.code] = item?.name;
//       }
//     }
//     return HASH_BILLS_TYPE[type];
//   }
// }

export const changeRowStatus = async (name, id, col, value) => {
  const response = await ApiActions.update(name, {
    conditions: [{ type: "and", conditions: [["id", "=", id]] }],
    updates: {
      [col]: value,
    },
  });
  return response;
};

export const getAlphabetSortingView = (index) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return alphabet[index -1];
};
