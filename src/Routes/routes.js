import React from "react";

import Chart from "Pages/Chart/Chart";
import Home from "Pages/Home/Home";
import List from "Pages/List/List";
import Update from "Pages/List/Update";
import Login from "Pages/Login/Login";
import Tools from "Pages/Tools/Tools";
import NouFound from "Pages/NouFound/NouFound";
import TestEntry from "Components/StructurePage/Forms/TestEntry/TestEntry";
import Voucher from "Components/StructurePage/Forms/TestEntry/Voucher";
import Contract from "Pages/Contracts/Contract";

const publicRoutes = [
  { path: "**", component: <NouFound /> },
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <Login /> },
];

const authProtectedRoutes = [
  { path: "*", component: <NouFound /> },
  { path: "/", component: <Home /> },
  { path: "/tools/:id", component: <Tools /> },
  { path: "/buildings/:name/tools/:Guid", component: <Tools /> },
  { path: "/testentry", component: <TestEntry /> },

  // handle contracts

  { path: "/contract/:type/:name", component: <Contract /> },
  { path: "/contract/:name", component: <List /> },
  // { path: "/rent/:name", component: <List /> },
  // { path: "/sale/:name", component: <List /> },

  // handle contracts
  { path: "/vouchers/:type/:name", component: <Voucher /> },
  { path: "/vouchers/entry", component: <TestEntry /> },
  { path: "/list/:name", component: <List /> },
  { path: "/patterns/:name", component: <List /> },
  { path: "/update/:name/:id", component: <Update /> },
  { path: "/chart/:name", component: <Chart /> },
];

export { authProtectedRoutes, publicRoutes };
