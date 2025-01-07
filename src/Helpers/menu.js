import {
  BanknoteIcon,
  BriefcaseIcon,
  GearIcon,
  ToolsIcon,
  UserIcon,
  ClipboardIcon,
  PuzzleIcon,
  BuildingIcon,
  StoreIcon,
} from "../Components/Icons";
import { ApiActions } from "./Lib/api";
import { SELECT_LISTS } from "./constants";

export const menuData = [
  {
    key: "accounts",
    name: "Accounts",
    link: "accounts",
    icon: <UserIcon />,
    classes: "grid grid-cols-3 min-w-[650px] items gap-1",
    children: [

      {
        key: "accounts",
        name: "Accounts",
        subChild: [
          {
            key: "account-card",
            name: "account card",
            link: "/account",
          },

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
            link: "/cost_center",
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
        link: "/user",
      },
      { key: "owner-card", name: "owner card", link: "/owner" },
      { key: "seller-card", name: "seller card", link: "/seller" },
      { key: "lessor-card", name: "lessor card", link: "/lessor" },
      { key: "bank-card", name: "bank card", link: "/bank" },
      { key: "Currency card", name: "Currency card", link: "/currency" },
    ],
  },
  {
    key: "cards",
    name: "Cards",
    link: "cards",
    icon: <ClipboardIcon />,
    classes: "grid grid-cols-3 min-w-[650px] items gap-1",
    children: [
      {
        key: "reservation_property",
        name: "reservation property Card",
        link: "/reservation_property",
      },
      {
        key: "Building",
        name: "Building Card",
        link: "building",
      },
      {
        key: "Flat",
        name: "Flat Card",
        link: "/apartment",
      },
      {
        key: "Shop",
        name: "Shop Card",
        link: "/shop",
      },
      {
        key: "Parking",
        name: "Parking Card",
        link: "/parking",
      },
      {
        key: "Land",
        name: "Land Card",
        link: "/land",
      },
      {
        key: "Villa",
        name: "Villa Card",
        link: "/villa",
      },
      {
        key: "owner expenses",
        name: "owner expenses",
        subChild: [
          {
            key: "owner expenses types",
            name: "owner expenses types",
            link: "/owner_expenses_types",
          },
          {
            key: "owner expenses card",
            name: "owner expenses card",
            link: "/owner_expenses",
          },
          {
            key: "owner expenses report",
            name: "owner expenses report",
            link: "/reports/owner-expenses-report",
          },
        ],
      },
      
    ],
  },

  {
    key: "Accounting Transactions",
    name: "Accounting Transactions",
    link: "",
    icon: <ToolsIcon />,
  },
  {
    key: "realty",
    name: "Realty Transactions",
    link: "realty",
    icon: <BanknoteIcon />,
    children: [
      {
        key: "services",
        name: "Services contracts",
        link: "/service",
      },

      {
        key: "lawsuit",
        name: "Lawsuit",
        link: "/lawsuit",
      },
      {
        key: "Owners Associations Fees",
        name: "Owners Associations Fees",
        link: "/",
      },
      {
        key: "Contract cycle",
        name: "Contract cycle",
        link: "/",
      },
      {
        key: "Building electricity meter reading",
        name: "Building electricity meter reading",
        link: "/",
      },
    ],
  },
  // Reports Start
  {
    key: "accounting_reports",
    name: "Accounting Reports",
    link: "",
    icon: <ToolsIcon />,
    classes: "flex !flex-col",
    children: [
      {
        key: "Reports cheques",
        name: "cheques report",
        link: "/reports/cheque",
      },
      {
        key: "Returned cheques",
        name: "Returned cheques",
        link: "/reports/returned-cheques",
      },
      {
        key: "Due note papers report",
        name: "Due note papers report",
        link: "/reports/due-note-papers-report",
      },
      {
        key: "Reports collections cheque",
        name: "cheques collection report",
        link: "/reports/collection-cheque-report",
      },
      {
        key: "overdue payments report",
        name: "overdue payments report",
        link: "/reports/overdue-payments-report",
      },
      {
        key: "VAT bills report",
        name: "VAT bills report",
        link: "/reports/vat-bills-report/",
      },
      {
        key: "customer account statement report",
        name: "customer account statement report",
        link: "/reports/customer-account-statement-report/",
        classes: "pt-2 border-t mt-2",
      },
      {
        key: "journal Ledger Report",
        name: "journal Ledger Report",
        link: "/reports/journal-ledger-report/",
        classes: "pt-2 border-t mt-2",
      },
      {
        key: "general Ledger Report",
        name: "general Ledger Report",
        link: "/reports/general-ledger-report/",
      },
      // reports
      {
        key: "trial balance Report",
        name: "Trial Balance Report",
        link: "/reports/trial-balance/",
      },
      {
        key: "creditors ages report",
        name: "creditors ages report",
        link: "/reports/creditors-ages-report/",
      },
      {
        key: "cost center general ledger report",
        name: "cost center general ledger report",
        link: "/reports/cost-center-general-ledger-report/",
        classes: "pt-2 border-t mt-2",
      },
      {
        key: "cost center trial balance report",
        name: "cost center trial balance report",
        link: "/reports/cost-center-trial-balance-report/",
      },

      {
        key: "trading sheet report",
        name: "trading sheet report",
        link: "/reports/trading-sheet-report/",
        classes: "pt-2 border-t mt-2",
      },
      {
        key: "profit and los report",
        name: "profit and loss report",
        link: "/reports/profit-and-loss-report/",
      },
      {
        key: "balance sheet report",
        name: "balance sheet report",
        link: "/reports/balance-sheet-report/",
      },
    ],
  },
  {
    key: "Reality Reports",
    name: "Reality Reports",
    link: "",
    icon: <ToolsIcon />,
    children: [
      {
        key: "Reality Units Reports",
        name: "Reality Units Reports",
        subChild: [
          {
            key: "leased and non leased units",
            name: "leased and non leased units",
            link: "/reports/lease-units-report",
          },
          {
            key: "leased and non leased lands",
            name: "leased and non leased lands",
            link: "/reports/lease-lands-report",
          },
          {
            key: "leased and non leased villas",
            name: "leased and non leased villas",
            link: "/reports/lease-villas-report",
          },
          {
            key: "leased and non leased parking",
            name: "leased and non leased parking",
            link: "/reports/lease-parking-report",
          },
          {
            key: "units that will be vacated",
            name: "units that will be vacated report",
            link: "/reports/units-will-vacated-report",
            classes: "border-t pt-2 mt-2",
          },
          {
            key: "reserved units report",
            name: "reserved units report",
            link: "/reports/reserved-units-report",
            classes: "border-b pb-2 mb-2",
          },

          {
            key: "leased-property-activity-report",
            name: "leased property activity report",
            link: "/reports/leased-property-activity-report",
            classes: "border-b pb-2 mb-2",
          },
          {
            key: "sold units report",
            name: "sold units report",
            link: "/reports/sold-units-report",
          },
          {
            key: "sold lands report",
            name: "sold lands report",
            link: "/reports/sold-lands-report",
          },
          {
            key: "sold villas report",
            name: "sold villas report",
            link: "/reports/sold-villas-report",
          },
          {
            key: "changes_flats_rent_pricing_report",
            name: "changes flats rent pricing report",
            link: "/reports/changes-flats-rent-pricing-report",
            classes: "pt-2 mt-2 border-t",
          },
          {
            key: "changes_flats_sale_pricing_report",
            name: "changes flats sale pricing report",
            link: "/reports/changes-flats-sale-pricing-report",
          },
        ],
      },
      {
        key: "Revenue report",
        name: "Revenues report",
        subChild: [
          {
            key: "property Report",
            name: "earning rental income earned report",
            link: "/reports/revenues/earning-rental-income-earned-report",
          },
          // {
          //   key: "property Report",
          //   name: "unrealized revenue Report",
          //   link: "/reports/revenues/unrealized",
          // },
        ],
      },
      {
        key: "Contracts Reports",
        name: "Contracts Reports",
        link: "/reports/contract",
        subChild: [
          {
            key: "Reports contracts",
            name: "Contract report",
            link: "/reports/contracts/disclosure",
          },
          {
            key: "services contracts report",
            name: "services contracts report",
            link: "/reports/contracts/services-contracts-report",
          },
          {
            key: "contract cycle report",
            name: "contract cycle report",
            link: "/reports/contracts/contract-cycle-report",
          },
          {
            key: "Reports deposit",
            name: "contracts deposit report",
            link: "/reports/contracts/contracts-deposit-report",
          },
          {
            key: "Reports contracts",
            name: "Expired contract report",
            link: "/reports/contracts/expired-contract",
            classes: "border-t pt-1 mt-1",
          },
          {
            key: "Reports contracts",
            name: "Near to expire contract report",
            link: "/reports/contracts/near-to-expire-contract",
            classes: "border-b pb-1 mb-1",
          },
          {
            key: "contract cheque report",
            name: "contract cheque report",
            link: "/reports/contracts/contract-cheque-report",
          },
          {
            key: "Reports contracts",
            name: "contract payments report",
            link: "/reports/contracts/contract-payments-report",
          },
        ],
      },
      {
        key: "property Report",
        name: "building schema Report",
        link: "/reports/building-schema",
      },
      {
        key: "unit condition for construction Report",
        name: "unit condition for construction Report",
        link: "/reports/unit-condition-for-construction-report",
      },
      {
        key: "Manger reports",
        name: "Manger reports",
        subChild: [
          {
            key: "property Report",
            name: "cheques Report",
            link: "/reports/mangers/cheque-report",
          },
        ],
      },
    ],
  },
  {
    key: "Stores",
    name: "Stores",
    link: "",
    icon: <StoreIcon />,
    children: [
      {
        key: "store",
        name: "stores",
        link: "/store",
      },
      {
        key: "store chart",
        name: "stores chart",
        link: "/chart/store",
      },
      {
        key: "materials",
        name: "Materials",
        subChild: [
          {
            key: "Group",
            name: "materials Group Card",
            link: "/material_group",
          },
          {
            key: "Material",
            name: "Material Card",
            link: "/material",
          },
          {
            key: "Material",
            name: "Material Chart",
            link: "/chart/material",
          },

          // {
          //   key: "warehouse report",
          //   name: "warehouse report",
          //   link: "/reports/warehouse-report",
          // },
        ],
      },
      {
        key: "item activity",
        name: "item activity",
        link: "/reports/item-activity",
      },
      {
        key: "Inventory report",
        name: "Inventory report",
        link: "/reports/inventory-report",
      },
      {
        key: "Ending Inventory report",
        name: "Ending Inventory report",
        link: "/reports/ending-inventory-report",
      },
      {
        key: "Sales Report",
        name: "Sales Report",
        link: "/reports/sales-report",
      },
      {
        key: "Bill Details report",
        name: "Bill Details report",
        link: "/reports/bill-details-report",
      },
      {
        key: "Bill profit report",
        name: "Bill profit report",
        link: "/reports/bill-profit-report",
      },
    ],
  },
  // Reports End

  // {
  //   key: "assets",
  //   name: "Assets",
  //   link: "",
  //   icon: <BuildingIcon />,
  //   children: [
  //     {
  //       key: "Asset Category",
  //       name: "Asset Category",
  //       link: "/assets_group",
  //     },
  //     {
  //       key: "Asset Card",
  //       name: "Asset Card",
  //       link: "/assets",
  //     },

  //     {
  //       key: "Chart of Assets",
  //       name: "Chart of Assets",
  //       link: "/chart/assets",
  //     },
  //   ],
  // },
  {
    key: "Maintenance",
    name: "Maintenance",
    link: "",
    icon: <GearIcon />,
    children: [
      {
        key: 1,
        name: "Maintenances",
        subChild: [
          {
            key: 1,
            name: "Maintenances",
            link: "/service",
          },
          {
            key: 2,
            name: "Property preparing order",
            link: "/maintenances/2",
          },
          {
            key: 3,
            name: "Maintenance order",
            link: "/maintenances/1",
          },
          {
            key: 3,
            name: "Default services order",
            link: "/default_service",
          },
          {
            key: "Maintenance orders report",
            name: "Maintenance orders report",
            link: "/reports/complaints-report",
          },
          {
            key: "Workers report",
            name: "Workers report",
            link: "/reports/worker-report",
          },
        ],
      },
      {
        key: "Category",
        name: "Category",
        subChild: [
          {
            key: "Category",
            name: "Category Card",
            link: "/category",
          },
          {
            key: "Category problem",
            name: "Category problem Card",
            link: "/category_problem",
          },
        ],
      },
      {
        key: "Unregister Material",
        name: "Unregister Material",
        link: "/materials/unregister-material",
      },
      {
        key: "user_work_times",
        name: "user work times",
        link: "/user_work_times",
      },
      {
        key: "lack_reason",
        name: "lack reasons",
        link: "/lack_reason",
      },
      {
        key: 6,
        name: "evacuation request",
        link: "/evacuation_request",
      },
    ],
  },
  // {
  //   key: "maintenance",
  //   name: "maintenance",
  //   link: "",
  //   icon: <GearIcon />,
  //   children: [
  //     {
  //       key: 1,
  //       name: "Maintenance worker card",
  //       link: "/",
  //     },
  //     {
  //       key: 2,
  //       name: "Complaint card",
  //       link: "/",
  //     },

  //     {
  //       key: 3,
  //       name: "Maintenance order",
  //       link: "/",
  //     },

  //     {
  //       key: 4,
  //       name: "Complaints report",
  //       link: "/",
  //     },

  //     {
  //       key: 5,
  //       name: "Maintenance orders report",
  //       link: "/",
  //     },
  //   ],
  // },
  // {
  //   key: "Maintenance",
  //   name: "Maintenance",
  //   link: "",
  //   icon: <BriefcaseIcon />,
  //   children: [
  //     {
  //       key: "external",
  //       name: "External maintenance",
  //       link: "",
  //       subChild: [
  //         {
  //           key: 1,
  //           name: "Maintenance contracts",
  //           link: "/",
  //         },
  //         {
  //           key: 2,
  //           name: "Maintenance work card",
  //           link: "/",
  //         },

  //         {
  //           key: 3,
  //           name: "Maintenance visits",
  //           link: "/",
  //         },

  //         {
  //           key: 4,
  //           name: "Maintenance visits report",
  //           link: "/",
  //         },

  //         {
  //           key: 5,
  //           name: "Maintenance Contracts report",
  //           link: "/",
  //         },
  //       ],
  //     },
  //   ],
  // },
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
        key: "cheques patterns",
        name: "cheque patterns",
        link: "/patterns/cheque_pattern",
      },
      {
        key: "voucher patterns",
        name: "Voucher patterns",
        link: "/patterns/voucher_pattern",
      },
      {
        key: "bill patterns",
        name: "bill patterns",
        link: "/patterns/bill_pattern",
      },
      {
        key: "accounting voucher patterns",
        name: "Accounting voucher patterns",
        link: "/patterns/accounting_voucher_pattern",
      },
    ],
  },
  // {
  //   key: "Tools",
  //   name: "Tools",
  //   icon: <ToolsIcon />,
  //   link: "",
  //   children: [
  //     {
  //       key: "add tenant",
  //       name: "Add tenant",
  //       link: "/tools/tenants",
  //     },
  //   ],
  // },
];

// Generate dynamic Contract menu from contract pattern
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

      let link = `/contracts/${contractType?.toLowerCase()}/${
        theItem.name
      }?flat_type=${assetsType?.name}&code=${theItem?.code}&number=1`;
      menus.push({
        isForm: true,
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
        }?flat_type=${assetsType?.name}&code=${subItem?.code}&number=1`;

        subMenu.push({
          isForm: true,
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
export async function getVouchersMenus() {
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
        isForm: true,
        key: theItem.name,
        name,
        link: `/vouchers/${theItem.code}`,
      });
    } else {
      let subMenu = [];
      for (const subItem of theItem) {
        subMenu.push({
          isForm: true,
          key: subItem.name,
          name: subItem.name,
          link: `/vouchers/${subItem.code}`,
        });
      }
      menus.push({
        key: 3,
        name: menu,
        subChild: [
          {
            key: "vouchers",
            name: "vouchers",
            link: "/vouchers",
          },
          ...subMenu,
        ],
      });
    }
  }

  return menus;
}

// Generate dynamic bills menu from bills pattern
export async function getBillsMenus() {
  const res = await ApiActions.read("bill_pattern");
  if (!res?.result?.length) return [];

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
        isForm: true,
        key: theItem.name,
        name,
        link: `/bill/${theItem?.code}`,
      });
    } else {
      let subMenu = [];
      for (const subItem of theItem) {
        subMenu.push({
          isForm: true,
          key: subItem.name,
          name: subItem.name,
          link: `/bill/${subItem?.code}`,
        });
      }
      menus.push({
        key: 3,
        name: menu,
        subChild: subMenu,
      });
    }
  }

  return [
    {
      key: "bills",
      name: "bills",
      link: "",
      subChild: [
        {
          key: "bills",
          name: "bills",
          link: "/bill",
        },
        ...menus,
      ],
    },
  ];
}

// Generate dynamic Cheques menu from Cheques pattern
export async function getChequesMenus() {
  const res = await ApiActions.read("cheque_pattern");
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
        isForm: true,
        key: theItem.name,
        name,
        link: `/cheques/${theItem?.code}`,
      });
    } else {
      let subMenu = [];
      for (const subItem of theItem) {
        subMenu.push({
          isForm: true,
          key: subItem.name,
          name: subItem.name,
          link: `/cheques/${subItem?.code}`,
        });
      }
      menus.push({
        key: 3,
        name: menu,
        subChild: subMenu,
      });
    }
  }

  return [
    {
      key: "Cheques",
      name: "Cheques",
      link: "",
      subChild: [
        {
          key: "cheques",
          name: "cheques",
          link: "/cheque",
        },
        ...menus,
      ],
    },
  ];
}

const getMenu = async () => {
  const contractMenu = await getContractMenus();
  if (menuData[3].children?.[0]?.name !== "Contracts") {
    menuData[3].children.unshift({
      key: "Contracts 2",
      name: "Contracts",
      subChild: [
        {
          key: "contract",
          name: "contracts",
          link: "/contracts",
        },
        ...contractMenu,
      ],
    });
  }

  const chequesMenus = await getChequesMenus();
  const voucherMenu = await getVouchersMenus();
  const billMenu = await getBillsMenus();

  if (menuData[2].children?.[0]?.name !== "Journal Entry") {
    menuData[2].children = [
      {
        key: "Journals",
        name: "Journals",
        subChild: [
          {
            key: "Entries",
            name: "Entries",
            link: "/entries",
          },
          {
            key: "Journal Entry",
            name: "Journal Entry",
            link: "/entries/entry",
          },
        ],
      },
      ...voucherMenu,
      // {
      //   key: "Vouchers",
      //   name: "Vouchers",
      //   link: "",
      //   subChild: ,
      // },
      ...chequesMenus,
      ...billMenu,
    ];
  }

  return menuData;
};

export default getMenu;
