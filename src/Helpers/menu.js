import {
  BanknoteIcon,
  BriefcaseIcon,
  BuildingIcon,
  GearIcon,
  PuzzleIcon,
  ToolsIcon,
  UserIcon,
  ClipboardIcon,
} from "../Components/Icons";
import { ApiActions } from "./Lib/api";
import { SELECT_LISTS } from "./constants";

export const menuData = [
  {
    key: "cards",
    name: "Cards",
    link: "cards",
    icon: <ClipboardIcon />,
    children: [
      {
        key: "Building",
        name: "Building Card",
        link: "/buildings",
      },
      {
        key: "Flat",
        name: "Flat Card",
        link: "/list/apartment",
      },
      {
        key: "Shop",
        name: "Shop Card",
        link: "/list/shop",
      },
      {
        key: "Parking",
        name: "Parking Card",
        link: "/list/parking",
      },
      {
        key: "Land",
        name: "Land Card",
        link: "/list/land",
      },
      {
        key: "Villa",
        name: "Villa Card",
        link: "/list/villa",
      },
      // {
      //   key: "Leaser",
      //   name: "Lessor Card",
      //   link: "/list/lessor",
      // },
      // {
      //   key: "Owner",
      //   name: "Owner Card",
      //   link: "/list/owner",
      // },
      // {
      //   key: "Salesman",
      //   name: "Salesman Card",
      //   link: "/list/seller",
      // },
      {
        key: "Watchman",
        name: "Watchman Card",
        link: "/list/watchman",
      },
      {
        key: "Quotation Card",
        name: "Quotation Card",
        link: "/list/OfferPrice",
      },
    ],
  },
  {
    key: "accounts",
    name: "Accounts",
    link: "accounts",
    icon: <UserIcon />,
    children: [
      {
        key: "accounts",
        name: "Accounts",
        subChild: [
          { key: "account-card", name: "account card", link: "/list/account" },

          {
            key: "Chart of Account",
            name: "Chart of Account",
            link: "/chart/account",
          },
        ],
      },
      {
        key: "cost-centers",
        name: "Cost centers",
        subChild: [
          {
            key: "cost-center-card",
            name: "cost center card",
            link: "/list/cost_center",
          },
          {
            key: "Chart of cost center",
            name: "Chart of cost center",
            link: "/chart/cost_center",
          },
        ],
      },
      {
        key: "Customer",
        name: "Customer/Supplier Card",
        link: "/list/user",
      },
      { key: "owner-card", name: "owner card", link: "/list/owner" },
      { key: "seller-card", name: "seller card", link: "/list/seller" },
      { key: "lessor-card", name: "lessor card", link: "/list/lessor" },
      { key: "bank-card", name: "bank card", link: "/list/bank" },
      { key: "Currency card", name: "Currency card", link: "/list/currency" },
     
    ],
  },
  {
    key: "Accounting Transactions",
    name: "Accounting Transactions",
    link: "",
    icon: <ToolsIcon />,

  },
  // {
  //   key: "materials",
  //   name: "Materials",
  //   link: "",
  //   icon: <PuzzleIcon />,
  //   children: [
  //     {
  //       key: "Material",
  //       name: "Material Card",
  //       link: "/list/materials",
  //     },
  //     {
  //       key: "Group",
  //       name: "materials Group Card",
  //       link: "/list/material_group",
  //     },
  //     {
  //       key: "chartMaterial",
  //       name: "Chart of Materials",
  //       link: "/chart/materials",
  //     },
  //     {
  //       key: "Store",
  //       name: "Store Card",
  //       link: "/list/store",
  //     },
  //     {
  //       key: "Chart of Stores",
  //       name: "Chart of Stores",
  //       link: "/chart/store",
  //     },
  //     {
  //       key: "Activity reports",
  //       name: "Activity reports",
  //       link: "/report/materials",
  //     },
  //   ],
  // },
  // {
  //   key: "assets",
  //   name: "Assets",
  //   link: "",
  //   icon: <BuildingIcon />,
  //   children: [
  //     {
  //       key: "Asset Category",
  //       name: "Asset Category",
  //       link: "/list/assets_group",
  //     },
  //     {
  //       key: "Asset Card",
  //       name: "Asset Card",
  //       link: "/list/assets",
  //     },

  //     {
  //       key: "Chart of Assets",
  //       name: "Chart of Assets",
  //       link: "/chart/assets",
  //     },
  //   ],
  // },
  {
    key: "realty",
    name: "Realty Transactions",
    link: "realty",
    icon: <BanknoteIcon />,
    children: [
      {
        key: "services",
        name: "Services contracts",
        link: "/list/",
      },

      {
        key: "lawsuit",
        name: "Lawsuit",
        link: "/list/lawsuit",
      },
      {
        key: "Owners Associations Fees",
        name: "Owners Associations Fees",
        link: "/list/",
      },
      {
        key: "Contract cycle",
        name: "Contract cycle",
        link: "/list/",
      },
      {
        key: "Building electricity meter reading",
        name: "Building electricity meter reading",
        link: "/list/",
      },
    ],
  },
  {
    key: "internal",
    name: "Internal maintenance",
    link: "",
    icon: <GearIcon />,
    children: [
      {
        key: 1,
        name: "Maintenance worker card",
        link: "/",
      },
      {
        key: 2,
        name: "Complaint card",
        link: "/",
      },

      {
        key: 3,
        name: "Maintenance order",
        link: "/",
      },

      {
        key: 4,
        name: "Complaints report",
        link: "/",
      },

      {
        key: 5,
        name: "Maintenance orders report",
        link: "/",
      },
    ],
  },
  {
    key: "Maintenance",
    name: "Maintenance",
    link: "",
    icon: <BriefcaseIcon />,
    children: [
      {
        key: "external",
        name: "External maintenance",
        link: "",
        subChild: [
          {
            key: 1,
            name: "Maintenance contracts",
            link: "/",
          },
          {
            key: 2,
            name: "Maintenance work card",
            link: "/",
          },

          {
            key: 3,
            name: "Maintenance visits",
            link: "/",
          },

          {
            key: 4,
            name: "Maintenance visits report",
            link: "/",
          },

          {
            key: 5,
            name: "Maintenance Contracts report",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    key: "patterns",
    name: "Patterns",
    icon: <ToolsIcon />,
    link: "",
    children: [
      {
        key: "contract patterns",
        name: "Contract patterns",
        link: "/patterns/contract_pattern",
      },
      {
        key: "bills patterns",
        name: "Bill patterns",
        link: "/patterns/cheque_pattern",
      },
      {
        key: "voucher patterns",
        name: "Voucher patterns",
        link: "/patterns/voucher_pattern",
      },
      {
        key: "accounting voucher patterns",
        name: "Accounting voucher patterns",
        link: "/patterns/accounting_voucher_pattern",
      },
    ],
  },

  {
    key: "Reports",
    name: "Reports",
    link: "",
    icon: <ToolsIcon />,
    children: [
      {
        key: "Reports contracts",
        name: "Reports contracts",
        link: "/reports/contracts",
      },
      {
        key: "Reports cheques",
        name: "Reports cheques",
        link: "/reports/cheques",
      },
      {
        key: "Reports vouchers receipts",
        name: "Reports vouchers receipts",
        link: "/reports/vouchers/receipts",
      },
      {
        key: "Reports vouchers payments",
        name: "Reports vouchers payments",
        link: "/reports/vouchers/payments",
      },
      {
        key: "Reports vouchers entries",
        name: "Reports vouchers entries",
        link: "/reports/entries/",
      },
    ],
  },
];

// Generate dynamic Contract menu from contract pattern
async function getContractMenus() {
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

      let link = `/contracts/${contractType?.toLowerCase()}/${
        theItem.name
      }?flat_type=${assetsType?.name}&code=${theItem?.code}&number=1`;
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
        let link = `/contracts/${contractType?.toLowerCase()}/${
          subItem.name
        }?flat_type=${
          assetsType?.name
        }&code=${subItem?.code}&number=1`;

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
// Generate dynamic Vouchers menu from Vouchers pattern
async function getVouchersMenus() {
  const res = await ApiActions.read("voucher_pattern");

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
      let name = theItem.name;
      menus.push({
        key: theItem.name,
        name,
        link: `/vouchers/${theItem.code}/${name}/1`,
      });
    } else {
      let subMenu = [];
      for (const subItem of theItem) {
        subMenu.push({
          key: subItem.name,
          name: subItem.name,
          link: `/vouchers/${subItem.code}/${subItem.name}/1`,
        });
      }
      menus.push({
        key: 3,
        name: menu,
        subChild: subMenu,
      });
    }
  }

  return menus;
}

// Generate dynamic Bills menu from Bills pattern
async function getBillsMenus() {
  const res = await ApiActions.read("bill_pattern");
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
      let name = theItem.name;
      menus.push({
        key: theItem.name,
        name,
        link: `/cheques/${theItem?.code}/${name}/1`,
      });
    } else {
      let subMenu = [];
      for (const subItem of theItem) {
        subMenu.push({
          key: subItem.name,
          name: subItem.name,
          link: `/cheques/${subItem?.code}/${subItem?.name}/1`,
        });
      }
      menus.push({
        key: 3,
        name: menu,
        subChild: subMenu,
      });
    }
  }

  return menus;
}

const getMenu = async () => {
  const contractMenu = await getContractMenus();
  menuData[3].children.unshift({
    key: "Contracts 2",
    name: "Contracts",
    subChild: contractMenu,
  });
  

  const billsMenus = await getBillsMenus();
  const voucherMenu = await getVouchersMenus();
  

  menuData[2].children = [
    {
      key: "Journal Entry",
      name: "Journal Entry",
      link: "/vouchers/entries/1",
    },
    {
      key: "Vouchers",
      name: "Vouchers",
      link: "",
      subChild: voucherMenu
    },
    {
      key: "Cheques",
      name: "Cheques",
      link: "",
      subChild: billsMenus,
    }
  ];
  // menuData[2].children.unshift(,)


  return menuData;
};

export default getMenu;
