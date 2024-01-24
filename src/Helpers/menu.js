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
import { getContractMenus } from "./functions";

export const menuData = [
  {
    key: "account",
    name: "Account",
    link: "account",
    icon: <UserIcon />,
    children: [
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
    ],
  },
  {
    key: "cards",
    name: "Cards",
    link: "cards",
    icon: <ClipboardIcon />,
    children: [
      {
        key: "Building",
        name: "Building Card",
        link: "/list/building",
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
    key: "materials",
    name: "Materials",
    link: "",
    icon: <PuzzleIcon />,
    children: [
      {
        key: "Material",
        name: "Material Card",
        link: "/list/materials",
      },
      {
        key: "Group",
        name: "materials Group Card",
        link: "/list/material_group",
      },
      {
        key: "chartMaterial",
        name: "Chart of Materials",
        link: "/chart/materials",
      },
      {
        key: "Store",
        name: "Store Card",
        link: "/list/store",
      },
      {
        key: "Chart of Stores",
        name: "Chart of Stores",
        link: "/chart/store",
      },
      {
        key: "Activity reports",
        name: "Activity reports",
        link: "/report/materials",
      },
    ],
  },
  {
    key: "assets",
    name: "Assets",
    link: "",
    icon: <BuildingIcon />,
    children: [
      {
        key: "Asset Category",
        name: "Asset Category",
        link: "/list/assets_group",
      },
      {
        key: "Asset Card",
        name: "Asset Card",
        link: "/list/assets",
      },

      {
        key: "Chart of Assets",
        name: "Chart of Assets",
        link: "/chart/assets",
      },
    ],
  },
  {
    key: "realty",
    name: "Realty Transactions",
    link: "realty",
    icon: <BanknoteIcon />,
    children: [
      // children: [
      // {
      //   key: "Contracts",
      //   name: "Contracts",
      //   link: "",
      //   subChild: getContractMenus,
      //   type: "fun",
      // },
      // {
      //   key: "Contracts",
      //   name: "Contracts",
      //   link: "",
      //   // dynamic menu
      //   // subChild: [
      //   //   {
      //   //     key: 1,
      //   //     name: "Rent Contracts",
      //   //     link: "",
      //   //     subChild: [
      //   //       {
      //   //         key: 1,
      //   //         name: "Flat rent contract",
      //   //         link: "/rent/flat_rent_contract",
      //   //       },
      //   //       {
      //   //         key: 2,
      //   //         name: "Apartment rent contract",
      //   //         link: "/rent/apartment_rent_contract",
      //   //       },
      //   //       {
      //   //         key: 3,
      //   //         name: "Shop rent contract",
      //   //         link: "/rent/shop_rent_contract",
      //   //       },
      //   //       {
      //   //         key: 4,
      //   //         name: "Parking rent contract",
      //   //         link: "/rent/parking_rent_contract/",
      //   //       },
      //   //     ],
      //   //   },

      //   //   {
      //   //     key: 2,
      //   //     name: "Sale Contracts",
      //   //     link: "",
      //   //     subChild: [
      //   //       {
      //   //         key: 1,
      //   //         name: "Flat sale contract",
      //   //         link: "/sale/flat_sale_contract",
      //   //       },
      //   //       {
      //   //         key: 2,
      //   //         name: "Shop sale contract",
      //   //         link: "/sale/shop_sale_contract",
      //   //       },
      //   //       {
      //   //         key: 3,
      //   //         name: "Parking sale contract",
      //   //         link: "/sale/parking_sale_contract",
      //   //       },
      //   //       {
      //   //         key: 4,
      //   //         name: "Land sale contract",
      //   //         link: "/sale/land_sale_contract",
      //   //       },
      //   //     ],
      //   //   },
      //   // ],
      // },

      {
        key: "Bills",
        name: "Bills",
        link: "",
        subChild: [
          {
            key: "electricity",
            name: "Electricity bills",
            link: "/bills/bill",
          },
          // {
          //   key: "electricity",
          //   name: "Electricity bills",
          //   link: "/bills/bill",
          // },
          // {
          //   key: "electricity",
          //   name: "Electricity bills",
          //   link: "/bills/bill",
          // },
        ],
      },
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

  // {
  //   key: "tools",
  //   name: "Tools",
  //   link: "",
  //   icon: <ToolsIcon />,
  //   children: [
  //     {
  //       key: "tool 1",
  //       name: "tool 1",
  //       link: "/tools",
  //     },
  //     {
  //       key: "patterns",
  //       name: "Patterns",
  //       link: "",
  //       children: [
  //         {
  //           key: "contract patterns",
  //           name: "Contract patterns",
  //           link: "/patterns/contract_pattern",
  //         },
  //         {
  //           key: "bills patterns",
  //           name: "Bill patterns",
  //           link: "/patterns/bill_pattern",
  //         },
  //         {
  //           key: "voucher patterns",
  //           name: "Voucher patterns",
  //           link: "/patterns/voucher_pattern",
  //         },
  //         {
  //           key: "accounting voucher patterns",
  //           name: "Accounting voucher patterns",
  //           link: "/patterns/accounting_voucher_pattern",
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
        key: "bills patterns",
        name: "Bill patterns",
        link: "/patterns/bill_patterns",
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
    key: "vouchers",
    name: "Vouchers",
    link: "",
    icon: <ToolsIcon />,
    children: [
      {
        key: "Receipt Voucher",
        name: "Receipt Voucher",
        link: "/vouchers/1/receipt-voucher/1",
      },
      {
        key: "Payment Voucher",
        name: "Payment Voucher",
        link: "/vouchers/2/payment-voucher/1",
      },
      {
        key: "voucher Entry",
        name: "Voucher Entry",
        link: "/vouchers/entries/1",
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
        key: "Reports bills",
        name: "Reports bills",
        link: "/reports/bills",
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

const getMenu = async () => {
  const res = await getContractMenus();
  console.log("🚀 ~ getMenu ~ res:", res)
  menuData[4].children.push({
    key: 'Contracts 2',
    name: 'Contracts',
    subChild: res
  })
  return menuData
};
  console.log("🚀 ~ getMenu ~ menuData:", menuData)

export default getMenu;
