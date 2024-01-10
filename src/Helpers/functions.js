import axios from "axios";
import { ApiActions } from "./Lib/api";
import { FLAT_PROPERTY_TABS_SETTINGS } from "./constants";

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
      { id: 6, name: "Underground parking" },
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
  let tabSplit = tab?.split(" ");
  if (tabSplit?.length > 1)
    return `${tabSplit?.[0]?.[0]}${tabSplit?.[1]?.[0]?.toUpperCase()}`;
  else return tab[0]?.toUpperCase();
};

const menu_contracts = [
  {
    id: 0.09206106486943755,
    contract_type: "sale",
    code: 2.8068825069256675,
    name: "store",
    list_name: "Other menu",
  },
  {
    id: 0.16709856373468046,
    contract_type: "sale",
    code: 18.215452419824416,
    name: "parking",
    list_name: "Other menu",
  },
  {
    id: 0.7974238343043363,
    contract_type: "rent",
    code: 14.76771619882542,
    name: "flat",
    list_name: "Rent menu",
  },
  {
    id: 0.6801484582997266,
    contract_type: "rent",
    code: 4.020861482655564,
    name: "villa",
    list_name: null,
  },
  {
    id: 0.03141438140492259,
    contract_type: "rent",
    code: 6.104622793796062,
    name: "shop",
    list_name: "sale menu",
  },
  {
    id: 0.5105893472743139,
    contract_type: "rent",
    code: 10.348838449440304,
    name: "store",
    list_name: null,
  },
  {
    id: 0.838716734270476,
    contract_type: "sale",
    code: 13.506069017128128,
    name: "parking",
    list_name: "Rent menu",
  },
  {
    id: 0.26961348597662105,
    contract_type: "rent",
    code: 9.662509514275985,
    name: "shop",
    list_name: null,
  },
  {
    id: 0.6241939390624942,
    contract_type: "rent",
    code: 13.228572214024208,
    name: "office",
    list_name: "Other menu",
  },
  {
    id: 0.8493061134598205,
    contract_type: "rent",
    code: 16.563692487324005,
    name: "penthouse",
    list_name: "Rent menu",
  },
  {
    id: 0.8616244019422374,
    contract_type: "rent",
    code: 7.222377111341811,
    name: "penthouse",
    list_name: "Other menu",
  },
  {
    id: 0.9823528312703897,
    contract_type: "rent",
    code: 7.038354064183281,
    name: "villa",
    list_name: "sale menu",
  },
  {
    id: 0.7822271151408755,
    contract_type: "sale",
    code: 9.131318466975294,
    name: "parking",
    list_name: "Rent menu",
  },
  {
    id: 0.4909453383798712,
    contract_type: "rent",
    code: 19.84637411859587,
    name: "parking",
    list_name: "Other menu",
  },
  {
    id: 0.2826772081364122,
    contract_type: "sale",
    code: 18.504422045745876,
    name: "store",
    list_name: "Other menu",
  },
  {
    id: 0.007664371835778061,
    contract_type: "sale",
    code: 15.297580186375113,
    name: "shop",
    list_name: "Other menu",
  },
  {
    id: 0.10761625633899419,
    contract_type: "rent",
    code: 15.776335006684032,
    name: "shop",
    list_name: "Other menu",
  },
  {
    id: 0.8473724539545724,
    contract_type: "rent",
    code: 14.3295705317301,
    name: "villa",
    list_name: "Other menu",
  },
  {
    id: 0.7570456745819036,
    contract_type: "rent",
    code: 12.23593494973947,
    name: "penthouse",
    list_name: "Other menu",
  },
  {
    id: 0.32998160076809824,
    contract_type: "rent",
    code: 2.0150097932866373,
    name: "store",
    list_name: "Other menu",
  },
];

export function getContractMenus() {
  let hash = {};

  for (const item of menu_contracts) {
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
      let name = `${theItem.name} ${theItem.contract_type} contract`;

      let link = `/contract/${theItem.contract_type}/${theItem.name}_${theItem.contract_type}_contract`;
      menus.push({
        key: 4,
        name,
        link,
      });
    } else {
      let subMenu = [];
      for (const subItem of theItem) {
        let name = `${subItem.name} ${subItem.contract_type} contract`;
        let link = `/contract/${subItem.contract_type}/${subItem.name}_${subItem.contract_type}_contract`;
        subMenu.push({
          key: 4,
          name,
          link,
          // link: `/contract/${theItem.contract_type}/${subItem.name}`,
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

getContractMenus();

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

export const generateApartments = async (properties, flats) => {
  let hashProperty = {};
  console.log(
    "🚀 ~ file: functions.js:337 ~ generateApartments ~ flats:",
    flats
  );

  let grid = properties?.grid;
  let len = grid?.length;

  // return;
  for (let i = 0; i < len; i++) {
    if (grid?.[i]?.room_count) {
      const res = await ApiActions.insert("apartment_property_values", {
        data: {
          ...grid?.[i],
          row_index: i,
        },
      });
      console.log(
        "🚀 ~ file: functions.js:345 ~ generateApartments ~ res:",
        res
      );
      if (res?.status) {
        let data = res?.result?.at(0);
        hashProperty[data?.hex] = data?.id;
      }
    }
  }

  for (const flat of flats) {
    switch (flat) {
      case "underground parking":
      case "parking":
        // insert to parking
        // parking_kind = flat

        return false;
      case "shop":
        // insert to shop
        return false;

      default: {
        let property_type = FLAT_PROPERTY_TABS_SETTINGS?.[flat]?.type;
        let hex = flat?.hex;
        let data = {
          ...hashProperty?.[hex],
          ...flat,
          property_values_id: hashProperty?.[hex]?.id,
          property_type,
        };
        delete data.id;
        delete data.room_count;
        const res = await ApiActions.insert("apartment", {
          data,
        });
      }
    }
  }
  console.log(hashProperty);
};
