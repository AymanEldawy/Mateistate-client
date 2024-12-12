import BillDetailsReport from "Pages/Report/Maintenances/BillDetailsReport";
import BillProfitReport from "Pages/Report/Maintenances/BillProfitReport";
import EndingInventoryReport from "Pages/Report/Maintenances/EndingInventoryReport";
import InventoryReport from "Pages/Report/Maintenances/InventoryReport";
import ItemActivityReport from "Pages/Report/Maintenances/ItemActivityReport";
import AccountForm from "Components/StructurePage/Forms/AccountForm/AccountForm";
import BillForm from "Components/StructurePage/Forms/BillForm/BillForm";
import BuildingForm from "Components/StructurePage/Forms/BuildingForm/BuildingForm";
import ChequeForm from "Components/StructurePage/Forms/ChequesForm/ChequeForm";
import ContractForm from "Components/StructurePage/Forms/ContractForm/ContractForm";
import { DynamicForm } from "Components/StructurePage/Forms/CustomForm/DynamicForm";
import LawsuitForm from "Components/StructurePage/Forms/LawsuitForm/LawsuitForm";
import MaterialForm from "Components/StructurePage/Forms/MaterialForm/MaterialForm";
import UnregisterMaterials from "Components/StructurePage/Forms/MaterialForm/UnregisterMaterials";
import OwnerExpensesForm from "Components/StructurePage/Forms/OwnerExpensesForm/OwnerExpensesForm";
import ReservationPropertyForm from "Components/StructurePage/Forms/ReservationProperty/ReservationPropertyForm";
import ServiceForm from "Components/StructurePage/Forms/ServiceForm/ServiceForm";
import UserForm from "Components/StructurePage/Forms/UserForm/UserForm";
import EntryForm from "Components/StructurePage/Forms/Vouchers/Entry/EntryForm";
import VoucherForm from "Components/StructurePage/Forms/Vouchers/Voucher/VoucherForm";
import List from "Components/Tables/List";
import Login from "Pages/Auth/Login";
import Chart from "Pages/Chart/Chart";
import MaterialChart from "Pages/Chart/MaterialChart";
import Home from "Pages/Home/Home";
import NotFound from "Pages/NotFound/NotFound";
import PatternsForm from "Pages/Patterns/PatternsForm";
import { BuildingSchemaReport, ChangesFlatsRentPricingReport, ChangesFlatsSalePricingReport, ChequeReport, CollectionChqReport, ContractChequeReport, ContractCycleReport, ContractNearToExpireReport, ContractPaymentsReport, ContractsDepositReport, ContractsExpiredReport, ContractsReport, CostCenterGeneralLedgerReport, CostCenterTrialBalanceReport, CreditorsAgesReport, CustomersAccountStatementReport, DueNotePaperReport, EarningRentalIncomeEarnedReport, GeneralLedgerReport, JournalLedgerReport, LeasedLandsReport, LeasedParkingReport, LeasedPropertyActivityReport, LeasedUnitsReport, LeasedVillasReport, MangerChequeReport, OverduePaymentsReport, OwnerExpensesReport, ReservedUnitsReport, ReturnedChqReport, ServicesContractsReport, SoldLandsReport, SoldUnitsReport, SoldVillasReport, TrialBalanceReport, UnitConditionConstructionReport, UnitsWillVacatedReport, VATBillsReport, WarehouseReport, WorkerReport } from "Pages/Report";
import Timing from "Pages/Timing/Timing";
import Tools from "Pages/Tools/Tools";
import ComplaintsReport from "Pages/Report/ComplaintsReport";
import ProfitAndLossReport from "Pages/Report/Accounting/ProfitAndLossReport";
import SalesReport from "Components/ReportsComponents/SalesReport";

const publicRoutes = [
  { path: "**", component: <NotFound /> },
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <Login /> },
];

const authProtectedRoutes = [
  { path: "*", component: <NotFound /> },
  { path: "/", component: <Home /> },
  { path: "/timing", component: <Timing /> },
  // { path: "/buildings/:name/tools/:Guid", component: <Tools /> },
  { path: "/tools/:id", component: <Tools /> },

  // Reports
  {
    path: "/reports/worker-report",
    component: <WorkerReport />,
  },
  {
    path: "/reports/warehouse-report",
    component: <WarehouseReport />,
  },
  {
    path: "/reports/complaints-report",
    component: <ComplaintsReport />,
  },
  {
    path: "/reports/lease-units-report",
    component: <LeasedUnitsReport />,
  },
  {
    path: "/reports/lease-parking-report",
    component: <LeasedParkingReport />,
  },
  {
    path: "/reports/lease-lands-report",
    component: <LeasedLandsReport />,
  },
  {
    path: "/reports/lease-villas-report",
    component: <LeasedVillasReport />,
  },
  {
    path: "/reports/leased-property-activity-report",
    component: <LeasedPropertyActivityReport />,
  },
  {
    path: "/reports/sold-units-report",
    component: <SoldUnitsReport />,
  },
  {
    path: "/reports/sold-lands-report",
    component: <SoldLandsReport />,
  },
  {
    path: "/reports/sold-villas-report",
    component: <SoldVillasReport />,
  },
  {
    path: "/reports/changes-flats-rent-pricing-report",
    component: <ChangesFlatsRentPricingReport />,
  },
  {
    path: "/reports/changes-flats-sale-pricing-report",
    component: <ChangesFlatsSalePricingReport />,
  },
  {
    path: "/reports/units-will-vacated-report",
    component: <UnitsWillVacatedReport />,
  },
  {
    path: "/reports/reserved-units-report",
    component: <ReservedUnitsReport />,
  },
  {
    path: "/reports/contracts/services-contracts-report",
    component: <ServicesContractsReport />,
  },
  {
    path: "/reports/contracts/contract-cycle-report",
    component: <ContractCycleReport />,
  },
  {
    path: "/reports/contracts/contracts-deposit-report",
    component: <ContractsDepositReport />,
  },
  { path: "/reports/trial-balance", component: <TrialBalanceReport /> },
  {
    path: "/reports/creditors-ages-report",
    component: <CreditorsAgesReport />,
  },
  {
    path: "/reports/trading-sheet-report/",
    component: <ProfitAndLossReport name="trading_sheet_report" />,
  },
  {
    path: "/reports/profit-and-loss-report/",
    component: <ProfitAndLossReport name="profit_and_loss_report" />,
  },
  {
    path: "/reports/balance-sheet-report/",
    component: <ProfitAndLossReport name="balance_sheet_report" />,
  },
  {
    path: "/reports/due-note-papers-report",
    component: <DueNotePaperReport />,
  },
  {
    path: "/reports/returned-cheques",
    component: <ReturnedChqReport />,
  },
  {
    path: "/reports/collection-cheque-report",
    component: <CollectionChqReport />,
  },
  {
    path: "/reports/overdue-payments-report",
    component: <OverduePaymentsReport />,
  },
  {
    path: "/reports/general-ledger-report",
    component: <GeneralLedgerReport />,
  },
  {
    path: "/reports/cost-center-general-ledger-report",
    component: <CostCenterGeneralLedgerReport />,
  },
  {
    path: "/reports/cost-center-trial-balance-report",
    component: <CostCenterTrialBalanceReport />,
  },
  {
    path: "/reports/vat-bills-report/",
    component: <VATBillsReport />,
  },
  {
    path: "/reports/customer-account-statement-report/",
    component: <CustomersAccountStatementReport />,
  },
  {
    path: "/reports/journal-ledger-report",
    component: <JournalLedgerReport />,
  },
  { path: "/reports/contracts/disclosure", component: <ContractsReport /> },
  {
    path: "/reports/contracts/expired-contract",
    component: <ContractsExpiredReport />,
  },
  {
    path: "/reports/contracts/near-to-expire-contract",
    component: <ContractNearToExpireReport />,
  },
  {
    path: "/reports/contracts/contract-cheque-report",
    component: <ContractChequeReport />,
  },
  {
    path: "/reports/contracts/contract-payments-report",
    component: <ContractPaymentsReport />,
  },
  { path: "/reports/cheque", component: <ChequeReport /> },
  { path: "/reports/building-schema", component: <BuildingSchemaReport /> },
  {
    path: "/reports/revenues/earning-rental-income-earned-report",
    component: <EarningRentalIncomeEarnedReport />,
  },
  {
    path: "/reports/unit-condition-for-construction-report",
    component: <UnitConditionConstructionReport />,
  },

  // Owner expenses reports
  {
    path: "/reports/owner-expenses-report",
    component: <OwnerExpensesReport />,
  },
  // Manger reports
  {
    path: "/reports/mangers/cheque-report",
    component: <MangerChequeReport />,
  },

  // Vouchers
  { path: "/vouchers/:type/:name/:id", component: <VoucherForm /> },
  { path: "/vouchers/entries/entry_main_data/:id", component: <EntryForm /> },
  { path: "/vouchers/entries/entry_main_data", component: <EntryForm /> },

  // Patterns
  { path: "/patterns/:pattern", component: <PatternsForm /> },
  { path: "/patterns/:pattern/:id", component: <PatternsForm /> },

  // Main forms
  { path: "/bill/:code/:id", component: <BillForm /> },
  { path: "/bill/:code", component: <BillForm /> },
  { path: "/cheques/:code/:name/:id", component: <ChequeForm /> },
  { path: "/cheques/:code/:name/", component: <ChequeForm /> },
  { path: "/list/:name/", component: <List /> },
  {
    path: "/patterns/list/:name",
    component: <List urlToAdd={(name) => `/patterns/${name}`} />,
  },
  {
    path: "/list/entries/:name",
    component: <List urlToAdd={(name) => "/vouchers/entries"} />,
  },
  {
    path: "/list/buildings/:name",
    component: <List urlToAdd={(name) => "/buildings"} />,
  },
  { path: "/material/:id", component: <MaterialForm /> },
  { path: "/material/", component: <MaterialForm /> },
  { path: "/materials/unregister-material/", component: <UnregisterMaterials /> },
  { path: "/buildings/:id", component: <BuildingForm /> },
  { path: "/buildings/", component: <BuildingForm /> },
  { path: "/maintenances/:code/:id", component: <ServiceForm /> },
  { path: "/maintenances/:code", component: <ServiceForm /> },
  { path: "/form/:name/:id", component: <DynamicForm /> },
  { path: "/form/:name", component: <DynamicForm /> },
  // { path: "/tools/:name/:id", component: <DynamicForm /> },
  {
    path: "/reservation_property/",
    component: <ReservationPropertyForm />,
  },
  {
    path: "/reservation_property/:id",
    component: <ReservationPropertyForm />,
  },
  { path: "/account/:id", component: <AccountForm /> },
  { path: "/account/", component: <AccountForm /> },
  { path: "/user/:id", component: <UserForm /> },
  { path: "/user/", component: <UserForm /> },
  {
    path: "/contracts/:type/:name/:id",
    component: <ContractForm layout="update" />,
  },
  {
    path: "/contracts/:type/:name",
    component: <ContractForm layout="update" />,
  },
  { path: "/owner_expenses", component: <OwnerExpensesForm /> },
  { path: "/owner_expenses/:id", component: <OwnerExpensesForm /> },
  { path: "/lawsuit/:id", component: <LawsuitForm /> },
  // Chart forms
  { path: "/chart/:name", component: <Chart /> },
  { path: "/chart/material", component: <MaterialChart /> },
  
  
  // New Report
  {
    path: "/reports/item-activity",
    component: <ItemActivityReport />,
  },
  {
    path: "/reports/inventory-report",
    component: <InventoryReport />,
  },
  {
    path: "/reports/ending-inventory-report",
    component: <EndingInventoryReport />,
  },
  {
    path: "/reports/sales-report",
    component: <SalesReport />,
  },
  {
    path: "/reports/bill-details-report",
    component: <BillDetailsReport />,
  },
  {
    path: "/reports/bill-profit-report",
    component: <BillProfitReport />,
  },

];

export { authProtectedRoutes, publicRoutes };

