import axios from "axios";
import { ApiActions } from "./Lib/api";
import {
  FLATS_TABLE_NAME,
  FLAT_PROPERTY_TABS_SETTINGS,
  FLAT_PROPERTY_TYPES,
  SELECT_LISTS,
} from "./constants";
import { toast } from "react-toastify";

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
    const formattedDate = currentDate.toISOString()?.substring(0, 10);

    // increase weeks
    if (duration === 1) {
      currentDate.setDate(currentDate.getDate() + each_duration * 7);
    }
    // increase months
    if (duration === 2) {
      currentDate.setDate(currentDate.getMonth() + each_duration);
    }
    // increase year
    if (duration === 3) {
      currentDate.setDate(currentDate.getFullYear() + each_duration);
    }

    let end = new Date(currentDate.getTime() - 86400000)
      .toISOString()
      ?.substring(0, 10);
    result.push({ month: formattedDate, price: monthlyPrice, end });
    // currentDate.setMonth(currentDate.getMonth() + 1);
  }

  if (result[result.length - 1]?.price)
    result[result.length - 1].price += remainingPrice;

  return result;
}

export const getCreatedFromUrl = (name, id) => {
  switch (name) {
    case "contract":
      return {
        href: `/contracts/${id}`,
        classes: "bg-red-600 text-white p-2 rounded-md text-xs",
      };
    default:
      return;
  }
};
