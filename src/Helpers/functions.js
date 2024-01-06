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

const tabNames = {
  Apartment: "apartment 0",
  Mezzanine: "apartment 1",
  "Pent Houses": "apartment 2",
  Office: "apartment 3",
  "Servant flats": "apartment 7",
  "Driver flats": "apartment 8",
  Shops: "shop",
  "Car parking": "parking",
  "Underground parking": "parking",
};

const insertIntoApartments = async (tabName, data, guid) => {
  let table = "Apartment";
  switch (tabNames[tabName]) {
    case "shop":
      table = "shop";
      break;
    case "parking":
      table = "parking";
      break;
    default:
      table = "Apartment";
      break;
  }
  let columns = [];
  let values = [];
  for (const key in data) {
    if (data[key] !== null) {
      columns.push(key);
      values.push(data[key]);
    }
  }
  columns.push("BuildingGuid");
  values.push(guid);
  let res = await axios.post(`${SERVER_URL}/createNewApartments`, {
    table,
    columns: columns,
    values: values,
  });
};

// const deleteFromApartments = async (count, Guid, tabName) => {
//   // let apartments = await axios
//   //   .post(`${SERVER_URL}/findPropertyOfBuilding`, {
//   //     table: tabName,
//   //     building: Guid,
//   //   })
//   //   .then((res) => res?.data?.recordset);
//   let deleted = await axios
//     .post(`${SERVER_URL}/delete-all`)
//     .then((res) => {
//     })
//     .catch((err) => {
//     });
// };

export const generateApartments = async (data, guid) => {
  for (const tabName in data) {
    for (const row of data[tabName]) {
      // await insertIntoApartments(tabName, row, guid);
      let table = "Apartment";
      switch (tabNames[tabName]) {
        case "shop":
          table = "shop";
          break;
        case "parking":
          table = "parking";
          break;
        default:
          table = "Apartment";
          break;
      }
      let columns = [];
      let values = [];
      for (const key in row) {
        if (row[key] !== null) {
          columns.push(key);
          values.push(row[key]);
        }
      }
      columns.push("BuildingGuid");
      values.push(guid);
      await axios.post(`${SERVER_URL}/createNewApartments`, {
        table,
        columns: columns,
        values: values,
      });
    }
  }
};

export const getPrefix = (tab) => {
  let tabSplit = tab?.split(" ");
  if (tabSplit?.length > 1)
    return `${tabSplit?.[0]?.[0]}${tabSplit?.[1]?.[0]?.toUpperCase()}`;
  else return tab[0]?.toUpperCase();
};

// export const apartmentsOperations = async (yCount, xCount, Guid) => {
//   for (let index = 0; index < xCount; index++) {
//     for (let j = 0; j < yCount; j++) {
//       await insertIntoApartments(
//         Guid,
//         (index * 100 + j + 101).toString(),
//         index + 1
//       );
//     }
//   }
// };

// const colPlace = {
//   ApartmentCountOfFloor: {
//     tabName: "Apartment",
//     index: "x",
//   },

//   FloorCount: {
//     tabName: "Apartment",
//     index: "y",
//   },
//   BHouseFloor: {
//     tabName: "Pent House",
//     index: "x",
//   },
//   BHouseFlatCount: {
//     tabName: "Pent House",
//     index: "y",
//   },

//   MBalanceFloor: {
//     tabName: "Mezzanine",
//     index: "x",
//   },
//   MBalanceFlatCount: {
//     tabName: "Mezzanine",
//     index: "y",
//   },
//   OfficeFloor: {
//     tabName: "Office",
//     index: "x",
//   },
//   OfficeCount: {
//     tabName: "Office",
//     index: "y",
//   },
//   ParkingFloor: {
//     tabName: "Car parking",
//     index: "x",
//   },
//   ParkingCount: {
//     tabName: "Car parking",
//     index: "y",
//   },
//   ParkingFloorUnder: {
//     tabName: "Underground parking",
//     index: "x",
//   },
//   ParkingCountUnder: {
//     tabName: "Underground parking",
//     index: "y",
//   },

//   ShopCount: {
//     tabName: "Shops",
//     index: "x",
//   },

//   FlatDriverCount: {
//     tabName: "Driver flats",
//     index: "x",
//   },

//   FlatServantCount: {
//     tabName: "Servant flats",
//     index: "x",
//   },
// };
// let collectApartments = {};

// export const checkApartments = async (columns, Guid) => {
//   for (const col in columns) {
//     collectApartments = {
//       ...collectApartments,
//       [colPlace?.[col]?.tabName]: {
//         ...collectApartments[colPlace?.[col]?.tabName],
//         [colPlace?.[col]?.index]: columns?.[col]?.newValue,
//         [`old${colPlace?.[col]?.index}`]: columns?.[col]?.oldValue,
//       },
//     };
//   }

//   for (const key in collectApartments) {
//     let item = collectApartments[key];
//     if (item?.hasOwnProperty("y")) {
//       let oldX = parseInt(item?.oldx) === 0 ? 1 : parseInt(item?.oldx);
//       let oldY = parseInt(item?.oldy) === 0 ? 1 : parseInt(item?.oldy);
//       let x = parseInt(item?.x) === 0 ? 1 : parseInt(item?.x);
//       let y = parseInt(item?.y) === 0 ? 1 : parseInt(item?.y);
//       let old = oldX * oldY;
//       let newVal = x * y;
//       if (old > newVal) {
//         let count = old - newVal;
//         deleteFromApartments(count, Guid, key);
//       } else {
//         let count = old === 1 ? newVal + 1 : newVal;
//         count -= old;
//         // for (let index = 0; index < count; index++) {
//         //   await insertIntoApartments(
//         //     Guid,
//         //     (index * 100 + index + 101).toString(),
//         //     "new " + index
//         //   );
//         // }
//       }

//     } else {
//       let oldX = parseInt(item?.oldx) === 0 ? 1 : parseInt(item?.oldx);
//       let x = parseInt(item?.x) === 0 ? 1 : parseInt(item?.x);
//       if (oldX > x) {
//       } else {
//       }
//     }
//   }
// };

/*
 [
          {
            key: 1,
            name: "Rent Contracts",
            link: "",
            subChild: [
              {
                key: 1,
                name: "Flat rent contract",
                link: "/rent/flat_rent_contract",
              },
              {
                key: 2,
                name: "Apartment rent contract",
                link: "/rent/apartment_rent_contract",
              },
              {
                key: 3,
                name: "Shop rent contract",
                link: "/rent/shop_rent_contract",
              },
              {
                key: 4,
                name: "Parking rent contract",
                link: "/rent/parking_rent_contract/",
              },
            ],
          },

          {
            key: 2,
            name: "Sale Contracts",
            link: "",
            subChild: [
              {
                key: 1,
                name: "Flat sale contract",
                link: "/sale/flat_sale_contract",
              },
              {
                key: 2,
                name: "Shop sale contract",
                link: "/sale/shop_sale_contract",
              },
              {
                key: 3,
                name: "Parking sale contract",
                link: "/sale/parking_sale_contract",
              },
              {
                key: 4,
                name: "Land sale contract",
                link: "/sale/land_sale_contract",
              },
            ],
          },

*/

const types = ["rent", "sale"];
const lists = ["rent menu", "sale menu", "other menu", null];

const cardTypes = [
  "villa",
  "shop",
  "flat",
  "office",
  "parking",
  "penthouse",
  "underground parking",
  "store",
];

const genContPat = () => {
  return {
    id: Math.random(),
    contract_type: types[Math.floor(Math.random() * 2)],
    code: Math.random() * 20,
    name: cardTypes[Math.floor(Math.random() * cardTypes.length)],
    list_name: lists?.[Math.floor(Math.random() * 4)],
  };
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
