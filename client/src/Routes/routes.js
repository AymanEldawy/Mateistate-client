import React from "react";

import TestEntry from "Components/Forms/TestEntry/TestEntry";
import Chart from "Pages/Chart/Chart";
import ContractType from "Pages/ContractType/ContractType";
import Home from "Pages/Home/Home";
import List from "Pages/List/List";
import Update from "Pages/List/Update";
import Login from "Pages/Login/Login";
import Building from "Pages/ManualForms/Building";
import LeaseApartment from "Pages/ManualForms/LeaseApartment";
import Tools from "Pages/Tools/Tools";
import UpdateBuilding from "Pages/UpdateBuilding/UpdateBuilding";
import Voucher from "Components/Forms/TestEntry/Voucher";

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <Login /> },
];

const authProtectedRoutes = [
  { path: "/", component: <Home /> },
  { path: "/tools", component: <Tools /> },
  { path: "/buildings/:name/tools/:Guid", component: <Tools /> },
  { path: "/update/building/:name/:Guid", component: <UpdateBuilding /> },
  { path: "/ContractType", component: <ContractType /> },
  { path: "/testentry", component: <TestEntry /> },
  { path: "/building", component: <Building /> },

  // handle contracts

  { path: "/contract/:type/:name", component: <List /> },
  { path: "/contract/:name", component: <List /> },
  // { path: "/rent/:name", component: <List /> },
  // { path: "/sale/:name", component: <List /> },

  // handle contracts

  { path: "/LeaseApartment", component: <LeaseApartment /> },
  { path: "/testentry", component: <TestEntry /> },
  { path: "/voucher", component: <Voucher /> },
  { path: "/list/:name", component: <List /> },
  { path: "/patterns/:name", component: <List /> },
  { path: "/update/:name/:id", component: <Update /> },
  { path: "/chart/:name", component: <Chart /> },
];

export { authProtectedRoutes, publicRoutes };
