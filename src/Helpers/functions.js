import { ApiActions, baseURL, CURD } from "./Lib/api";
import { getAccountLastNumber } from "./Lib/global-insert";
import {
  APARTMENT_ASSET_TYPE_DEFAULT_NAME,
  DEFAULT_CURRENCY_CODE,
  LAND_ASSET_TYPE_DEFAULT_NAME,
  PARKING_ASSET_TYPE_DEFAULT_NAME,
  SHOP_ASSET_TYPE_DEFAULT_NAME,
  VILLA_ASSET_TYPE_DEFAULT_NAME,
} from "./GENERATE_STARTING_DATA";
import {
  FLAT_PROPERTY_TABS,
  FLAT_PROPERTY_TYPES,
  IGNORED_SHOW_NUMBER_TABLE,
} from "./constants";
import axios from "axios";

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

export async function getInsertAccountTrigger(code, conditions) {
  // get suppliers or customers id
  const parentAccount = await ApiActions.read("account", {
    conditions: code
      ? [{ type: "and", conditions: [["internal_number", "=", code]] }]
      : conditions,
  });

  let parent_id = parentAccount?.result?.at(0)?.id;
  let final_id = parentAccount?.result?.at(0)?.final_id;
  if (!final_id) final_id = parentAccount?.result?.at(0)?.parent_id;

  const parentAccountData = await getAccountLastNumber(
    "account",
    "parent_id",
    parent_id
  );

  // get default currency id
  const currencyResponse = await ApiActions.read("currency", {
    conditions: [
      { type: "and", conditions: [["code", "=", DEFAULT_CURRENCY_CODE]] },
    ],
  });

  let internal_number =
    +parentAccountData?.internal_number + 1 ||
    parseInt(`${parentAccount?.result?.at(0)?.internal_number}01`);
  let level = +parentAccountData?.level || 0;

  let account = {
    internal_number,
    type: 1,
    currency_id: currencyResponse?.result?.at(0)?.id,
    parent_id,
    final_id,
    level,
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
  return alphabet[index - 1];
};

export const getCacheRowData = (cache, name, id) => {
  return cache?.[name]?.find((c) => c?.id === id);
};

export const getCreatedFromUrl = (name, id) => {
  if (!name || id) return;

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

/*
 * @ Function getConnectWithUrl
 * @param number int
 * @param id uuid
 *
 * Numbers
 * ** Nothing     -> 0
 * ** Contract    -> 1
 * ** Lawsuit     -> 2
 * ** Bill        -> 3
 */

export const getConnectWithUrl = async (number, id) => {
  switch (number) {
    case 1:
      const response = await ApiActions.read("contract", {
        conditions: [{ type: "and", conditions: [["id", "=", id]] }],
      });
      return {
        href: `/contracts/${id}`,
        classes: "bg-red-600 text-white p-2 rounded-md text-xs",
      };
    case 2:
      return;
    case 3:
      return;
    default:
      return;
  }
};

export const findList = async (
  type,
  id,
  setFlatsDetails,
  COLLECTION_COUNTS,
  setUNITS_COLORED_COUNT
) => {
  let name = FLAT_PROPERTY_TABS[type]?.no;
  const response = await ApiActions.read(type, {
    conditions: [{ type: "and", conditions: [["building_id", "=", id]] }],
  });

  let data = response?.result;
  let hashApartmentTypes = {};
  let newType = "";
  if (data?.length) {
    for (const row of data) {
      let assetsType =
        type === "apartment"
          ? `${type}_${row?.apartment_kind}`
          : type === "parking"
          ? `${type}_${row?.parking_kind}`
          : type === "shop"
          ? `${type}_${row?.shop_kind}`
          : type;

      newType = FLAT_PROPERTY_TYPES[assetsType];
      hashApartmentTypes[newType] = {
        ...hashApartmentTypes?.[newType],
        [row?.asset_hash]: row,
      };
      COLLECTION_COUNTS[row?.asset_hash] = row?.hex;
    }

    setFlatsDetails((prev) => ({
      ...prev,
      ...hashApartmentTypes,
    }));

    setUNITS_COLORED_COUNT((prev) => ({
      ...prev,
      [newType]: Object.keys(hashApartmentTypes?.[newType]),
    }));
  }
};

export const refetchBuildingAssets = (
  id,
  setFlatsDetails,
  COLLECTION_COUNTS,
  setUNITS_COLORED_COUNT
) => {
  setFlatsDetails({});
  setUNITS_COLORED_COUNT({});
  COLLECTION_COUNTS = {};
  for (const asset of ["apartment", "shop", "parking"]) {
    findList(
      asset,
      id,
      setFlatsDetails,
      COLLECTION_COUNTS,
      setUNITS_COLORED_COUNT
    );
  }
};

export function getContractUnitType(contract) {
  return contract?.parking_id
    ? PARKING_ASSET_TYPE_DEFAULT_NAME
    : contract?.shop_id
    ? SHOP_ASSET_TYPE_DEFAULT_NAME
    : contract?.apartment_id
    ? APARTMENT_ASSET_TYPE_DEFAULT_NAME
    : contract?.land_id
    ? LAND_ASSET_TYPE_DEFAULT_NAME
    : VILLA_ASSET_TYPE_DEFAULT_NAME;
}

export function getUnitType(contract, value) {
  let type = contract?.parking_id
    ? "parking_"
    : contract?.shop_id
    ? "shop_"
    : "apartment_";

  return FLAT_PROPERTY_TYPES[`${type}${value}`];
}

export function getContractStatus(value) {
  switch (value) {
    case 2:
      return { value: "Expired", classes: `bg-red-100 text-red-600` };
    case 3:
      return { value: "Renew", classes: `bg-green-100 text-green-600` };
    case 4:
      return {
        value: "Expired and not renewed",
        classes: `bg-orange-100 text-orange-600`,
      };
    default:
      return { value: "Rent", classes: `bg-blue-100 text-blue-600` };
  }
}

export async function uploadAttachment({
  id,
  entity_type,
  attachment_type,
  file,
}) {
  return await axios.post(
    `${baseURL}/uploadAttachment/${entity_type}/${id}/:${attachment_type}`,
    { file }
  );
}

export function getUniqueFieldLabel(item, table, refName, locale) {
  if (locale === "en" && item?.ltnName) {
    return item?.ltnName;
  }

  return item?.number && !IGNORED_SHOW_NUMBER_TABLE[table]
    ? `${item?.internal_number || item?.number}-${item?.[refName || "name"]}${
        item?.parent_name ? `-(${item?.parent_name})` : ""
      }`
    : item[refName || "name"];
}

export const generateUserTiming = (setting) => {
  const {
    account_id,
    period,
    long,
    start_day,
    time_light_start: light_start,
    time_light_end: light_end,
    time_night_start: night_start,
    time_night_end: night_end,
  } = setting;

  const lightDate = new Date(start_day);
  const nightDate = new Date(start_day);
  const timings = [];
  const views = [];
  for (let i = 0; i < long; i++) {
    const lightTimingDate = getNewDate(lightDate, i, light_start, light_end);
    const nightTimingDate = getNewDate(nightDate, i, night_start, night_end);

    const time_light_start =
      isDateValid(lightTimingDate.startDate) &&
      new Date(lightTimingDate.startDate)?.toISOString();
    const time_light_end =
      isDateValid(lightTimingDate.endDate) &&
      new Date(lightTimingDate.endDate)?.toISOString();
    const time_night_start =
      isDateValid(nightTimingDate.startDate) &&
      new Date(nightTimingDate.startDate)?.toISOString();
    const time_night_end =
      isDateValid(nightTimingDate.endDate) &&
      new Date(nightTimingDate.endDate)?.toISOString();

    views.push({
      time_light_start,
      time_light_end,
      time_night_start,
      time_night_end,
      date: lightTimingDate?.date || nightTimingDate?.date,
    });

    if (time_light_start && time_light_end) {
      timings.push({
        user_id: account_id,
        work_time_start: time_light_start,
        work_time_end: time_light_end,
      });
    }
    if (time_night_start && time_night_end) {
      timings.push({
        user_id: account_id,
        work_time_start: time_night_start,
        work_time_end: time_night_end,
      });
    }
  }

  return { timings, views };
};

function getNewDate(newDate, number, start, end) {
  const date = new Date(newDate);
  date.setDate(date.getDate() + number);
  let startDate = new Date(date);
  let endDate = new Date(date);
  startDate.setHours(start, 0, 0, 0);
  endDate.setHours(end, 0, 0, 0);
  startDate.setDate(startDate.getDate());
  endDate.setDate(endDate.getDate());

  return {
    startDate,
    endDate,
    date: startDate,
  };
}

function isDateValid(dateStr) {
  return !isNaN(new Date(dateStr));
}

export function numberToText(num) {
  if (typeof num !== "number" || num < 0) {
    return "Please provide a positive number";
  }

  const ones = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const scales = [
    "",
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
  ];

  function convertChunk(chunk) {
    let result = "";

    if (chunk >= 100) {
      const hundred = Math.floor(chunk / 100);
      result += `${ones[hundred]} hundred`;
      chunk %= 100;
      if (chunk > 0) result += " and ";
    }

    if (chunk >= 20) {
      const ten = Math.floor(chunk / 10);
      result += `${tens[ten]}`;
      chunk %= 10;
      if (chunk > 0) result += `-${ones[chunk]}`;
    } else if (chunk >= 11) {
      result += `${teens[chunk - 11]}`;
    } else if (chunk > 0) {
      result += `${ones[chunk]}`;
    }

    return result;
  }

  if (num === 0) {
    return ones[0];
  }

  let result = "";
  let scaleIndex = 0;

  while (num > 0) {
    const chunk = num % 1000;
    if (chunk > 0) {
      const chunkText = convertChunk(chunk);
      result =
        chunkText +
        (scales[scaleIndex] ? ` ${scales[scaleIndex]} ` : "") +
        result;
    }
    num = Math.floor(num / 1000);
    scaleIndex++;
  }

  return result.trim();
}
export function getOne(name, value, column = "id") {
  return CURD.read(name, {
    conditions: [{ type: "and", conditions: [[column, "=", value]] }],
  });
}
