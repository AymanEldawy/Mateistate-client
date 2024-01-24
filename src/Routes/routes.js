
import Chart from "Pages/Chart/Chart";
import Home from "Pages/Home/Home";
import List from "Pages/List/List";
import Update from "Pages/List/Update";
import Login from "Pages/Login/Login";
import Tools from "Pages/Tools/Tools";
import NouFound from "Pages/NouFound/NouFound";
import ContractForm from "Components/StructurePage/Forms/ContractForm";
import SingleContract from "Pages/Reports/Contracts/SingleContract";
import Contracts from "Pages/Reports/Contracts/Contracts";
import Bill from "Components/StructurePage/Forms/BillForm";
import PatternsForm from "Pages/Patterns/PatternsForm";
import EntryForm from "Components/StructurePage/Forms/Vouchers/Entry/EntryForm";
import Bills from "Pages/Reports/Bills";
import VoucherForm from "Components/StructurePage/Forms/Vouchers/VoucherForm";
import Vouchers from "Pages/Reports/Vouchers";
import Entries from "Pages/Reports/Entries";

const publicRoutes = [
  { path: "**", component: <NouFound /> },
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <Login /> },
];

const authProtectedRoutes = [
  { path: "*", component: <NouFound /> },
  { path: "/", component: <Home /> },
  // { path: "/buildings/:name/tools/:Guid", component: <Tools /> },
  { path: "/tools/:id", component: <Tools /> },

  // handle contracts & reports
  { path: "/reports/entries", component: <Entries /> },
  { path: "/reports/vouchers/:type", component: <Vouchers /> },
  { path: "/reports/bills", component: <Bills /> },
  { path: "/reports/contracts", component: <Contracts /> },
  
  { path: "/contracts/:id", component: <SingleContract /> },
  { path: "/contracts/add/:type/:name", component: <ContractForm /> },
  { path: "/contracts/update/:type/:name", component: <ContractForm layout="update" /> },
 
  // Vouchers 
  { path: "/vouchers/:type/:name/:number", component: <VoucherForm /> },
  { path: "/vouchers/entries/:number", component: <EntryForm /> },

    {
    path: "/patterns/:name",
    component: <List addPageHref={{ allowName: true, href: "/patterns/add/" }} />,
  },
  { path: "/patterns/add/:pattern", component: <PatternsForm /> },
  { path: "/patterns/update/:pattern/:name/:id", component: <PatternsForm layout="update" /> },

  { path: "/bills/:name", component: <Bill /> },
  { path: "/update/bills/:name/:id", component: <Bill layout="update" /> },

  { path: "/list/:name", component: <List /> },
  { path: "/update/:name/:id", component: <Update /> },
  { path: "/chart/:name", component: <Chart /> },
];

export { authProtectedRoutes, publicRoutes };
