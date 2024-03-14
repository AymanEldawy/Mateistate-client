import Chart from "Pages/Chart/Chart";
import Home from "Pages/Home/Home";
import Login from "Pages/Login/Login";
import Tools from "Pages/Tools/Tools";
import NouFound from "Pages/NouFound/NouFound";
import ContractForm from "Components/StructurePage/Forms/ContractForm/ContractForm";
import PatternsForm from "Pages/Patterns/PatternsForm";
import EntryForm from "Components/StructurePage/Forms/Vouchers/Entry/EntryForm";
import VoucherForm from "Components/StructurePage/Forms/Vouchers/Voucher/VoucherForm";
import BuildingForm from "Components/StructurePage/Forms/BuildingForm/BuildingForm";
import ChequeForm from "Components/StructurePage/Forms/ChequesForm/ChequeForm";
import LedgerReport from "Pages/Report/LedgerReport/LedgerReport";
import { ContractsReport } from "Pages/Report/ContractsReport/ContractsReport";
import ChequeReport from "Pages/Report/ChqReport/ChequeReport";
import AccountForm from "Components/StructurePage/Forms/AccountForm/AccountForm";
import UserForm from "Components/StructurePage/Forms/UserForm/UserForm";
import PropertyMovingReport from "Pages/Report/PropertyMovingReport/PropertyMovingReport";
import { ContractsExpiredReport } from "Pages/Report/ContractsExpiredReport/ContractsExpiredReport";
import BuildingSchemaReport from "Pages/Report/BuildingSchemaReport/BuildingSchemaReport";
import ContractRevenuesReport from "Pages/Report/ContractRevenuesReport/ContractRevenuesReport";
import { DynamicForm } from "Components/StructurePage/Forms/CustomForm/DynamicForm";
import { ContractNearToExpireReport } from "Pages/Report/ContractNearToExpireReport/ContractNearToExpireReport";

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

  // Reports
  { path: "/reports/ledger", component: <LedgerReport /> },
  { path: "/reports/contracts/disclosure", component: <ContractsReport /> },
  {
    path: "/reports/contracts/expired-contract",
    component: <ContractsExpiredReport />,
  },
  {
    path: "/reports/contracts/near-to-expire-contract",
    component: <ContractNearToExpireReport />,
  },
  { path: "/reports/cheque", component: <ChequeReport /> },
  { path: "/reports/property", component: <PropertyMovingReport /> },
  { path: "/reports/building-schema", component: <BuildingSchemaReport /> },
  { path: "/reports/revenues/realized", component: <ContractRevenuesReport /> },

  // Vouchers
  { path: "/vouchers/:type/:name/:number", component: <VoucherForm /> },
  { path: "/vouchers/entries/:number", component: <EntryForm /> },

  // Patterns
  { path: "/patterns/:pattern/:number", component: <PatternsForm /> },

  // Main forms
  { path: "/cheques/:code/:name/:number", component: <ChequeForm /> },
  { path: "/buildings/:number", component: <BuildingForm /> },
  { path: "/list/:name/:number", component: <DynamicForm /> },
  { path: "/account/:number", component: <AccountForm /> },
  { path: "/user/:number", component: <UserForm /> },
  {
    path: "/contracts/:type/:name",
    component: <ContractForm layout="update" />,
  },

  // Chart forms
  { path: "/chart/:name", component: <Chart /> },
];

export { authProtectedRoutes, publicRoutes };
