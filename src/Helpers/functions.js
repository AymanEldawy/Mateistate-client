import { ApiActions } from "./Lib/api";
import { getAccountLastNumber } from "./Lib/global-insert";
import { DEFAULT_CURRENCY_CODE } from "./GENERATE_STARTING_DATA";
import { FLAT_PROPERTY_TABS, FLAT_PROPERTY_TYPES } from "./constants";

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

  let internal_number = +parentAccountData?.internal_number + 1;
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
      return {value: 'Expired', classes: `bg-red-100 text-red-600`};
    case 3:
      return {value: 'Renew', classes: `bg-green-100 text-green-600`};
    case 4:
      return {value: 'Expired and not renewed', classes: `bg-orange-100 text-orange-600`};
    default:
      return {value: 'Rent', classes: `bg-blue-100 text-blue-600`};
  }
}
