import React from 'react';
import Home from 'Pages/Home/Home';
import Tools from 'Pages/Tools/Tools';
import UpdateBuilding from 'Pages/UpdateBuilding/UpdateBuilding';
import { ContractType } from 'Helpers/Forms/contractType';
import TestEntry from 'Components/Forms/TestEntry/TestEntry';
import Building from 'Pages/ManualForms/Building';
import { LeaseApartment } from 'Helpers/Forms/LeaseApartment';
import List from 'Pages/List/List';
import Update from 'Pages/List/Update';
import Chart from 'Pages/Chart/Chart';
import Login from 'Pages/Login/Login';

const publicRoutes = [
  { path: '/login', component: <Login /> },
  { path: '/signup', component: <Login /> },
];

const authProtectedRoutes = [
  { path: '/', component: <Home /> },
  { path: '/buildings/:name/tools/:Guid', component: <Tools /> },
  { path: '/update/building/:name/:Guid', component: <UpdateBuilding /> },
  { path: '/ContractType', component: <ContractType /> },
  { path: '/testentry', component: <TestEntry /> },
  { path: '/building', component: <Building /> },
  { path: '/LeaseApartment', component: <LeaseApartment /> },
  { path: '/testentry', component: <TestEntry /> },
  { path: '/list/:name', component: <List /> },
  { path: '/update/:name/:id', component: <Update /> },
  { path: '/chart/:name', component: <Chart /> },
];

export { authProtectedRoutes, publicRoutes };
