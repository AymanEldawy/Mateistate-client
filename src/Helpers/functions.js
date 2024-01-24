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

export async function getContractMenus() {
  const res = await ApiActions.read("contract_pattern");
  let hash = {};

  for (const item of res?.result) {
    if (item.list_name) {
      if (hash[item.list_name]) {
        hash[item.list_name].push(item);
      } else {
        hash[item.list_name] = [item];
      }
    } else {
      hash[item.name] = { direct: true, ...item };
    }
  }

  let menus = [];

  for (const menu in hash) {
    let theItem = hash[menu];

    if (theItem.direct) {
      let assetsType = SELECT_LISTS("contact_pattern_assets_type")?.find(
        (c) => c.id === +theItem?.assets_type
      );
      let name = theItem.name;
      let contractType = SELECT_LISTS("contact_pattern_contract_type")?.find(
        (c) => c.id === theItem.contract_type
      );

      let link = `/contracts/add/${contractType?.toLowerCase()}/${
        theItem.name
      }_${contractType}_contract?flat_type=${assetsType?.name}`;
      menus.push({
        key: theItem.name,
        name,
        link,
      });
    } else {
      let subMenu = [];
      for (const subItem of theItem) {
        let contractType = SELECT_LISTS("contact_pattern_contract_type")?.find(
          (c) => c.id === subItem.contract_type
        )?.name;
        let assetsType = SELECT_LISTS("contact_pattern_assets_type")?.find(
          (c) => c.id === +subItem?.assets_type
        );

        let name = `${subItem.name}_${contractType?.toLowerCase()}_contract`;
        let link = `/contracts/add/${contractType?.toLowerCase()}/${
          subItem.name
        }_${contractType?.toLowerCase()}_contract?flat_type=${
          assetsType?.name
        }`;

        subMenu.push({
          key: subItem.name,
          name,
          link,
        });
      }
      menus.push({
        key: 2,
        name: menu,
        subChild: subMenu,
      });
    }
  }

  return menus;
}

const INHERIT_PROPERTY_PARKING = [
  "hex",
  "note",
  "area",
  "area_unit",
  "view",
  // "bathroom_count",
  // "balcony_count",
  "property_type",
];
const INHERIT_PROPERTY_SHOP = [
  // "hex",
  "note",
  "area",
  "area_unit",
  "view",
  // "bathroom_count",
  // "balcony_count",
  // "property_type",
];

export const generateApartments = async (properties, flats, building_id) => {
  const isLoading = toast.loading(`waiting...`);

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
        hashPropertyIds[item?.hex] = item.id;
      } else {
        res = await ApiActions.insert("property_values", {
          data: {
            ...properties?.[i],
            row_index: i,
          },
        });
        if (res?.status) {
          let data = res?.record;
          hashPropertyIds[data?.hex] = data.id;
        }
      }
    }
  }

  for (const flat in flats) {
    let flatTableName = FLATS_TABLE_NAME[flat] || "apartment";
    let flatsGroup = Object.values(flats[flat]);

    for (const flat of flatsGroup) {
      let hex = flat?.hex;
      if (hashProperty?.[hex]?.id) delete hashProperty?.[hex].id;
      let data = {
        building_id,
        ...flat,
        ...hashProperty?.[hex],
        property_values_id: hashPropertyIds?.[hex],
      };

      delete data.created_at;
      delete data.name;
      delete data.room_count;

      let flatNameType =
        flatTableName === "apartment"
          ? `${flatTableName}_${data?.flat_type}`
          : flatTableName === "parking"
          ? `${flatTableName}_${data?.parking_kind}`
          : flat;
      let flatType = FLAT_PROPERTY_TYPES[flatNameType];

      let typeSettings = FLAT_PROPERTY_TABS_SETTINGS[flatType];

      if (data?.id) {
        const response = await ApiActions.update(flatTableName, {
          conditions: [{ type: "and", conditions: [["id", "=", data?.id]] }],
          updates: data,
        });
        if (!response?.success) {
          toast.error(`Failed to update ${data?.[typeSettings?.no]}`);
        }
      } else {
        const response = await ApiActions.insert(flatTableName, {
          data,
        });
        if (!response?.success) {
          toast.error(`Failed to insert ${data?.[typeSettings?.no]}`);
        }
      }
    }
  }
  toast.update(isLoading, {
    render: "Finished the process",
    autoClose: 2000,
  });

  return {
    isCompleted: true,
  };
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

export function dividePrice1(start_date, end_date, price) {
  let { monthlyPrice, remainingPrice, startDate, endDate, monthsDiff } =
    getMonthsDiff(start_date, end_date, price);

  const result = [];

  let currentDate = startDate;
  for (let i = 0; i < monthsDiff; i++) {
    const formattedDate = currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    result.push({ month: formattedDate, price: monthlyPrice });
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  result[result.length - 1].price += remainingPrice;

  return result;
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
