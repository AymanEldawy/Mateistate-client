import BillDetailsReport from "Pages/Report/Maintenances/BillDetailsReport";
import BillProfitReport from "Pages/Report/Maintenances/BillProfitReport";
import EndingInventoryReport from "Pages/Report/Maintenances/EndingInventoryReport";
import InventoryReport from "Pages/Report/Maintenances/InventoryReport";
import ItemActivityReport from "Pages/Report/Maintenances/ItemActivityReport";
import ContractForm from "Components/StructurePage/Forms/ContractForm/ContractForm";
import Login from "Pages/Auth/Login";
import Chart from "Pages/Chart/Chart";
import MaterialChart from "Pages/Chart/MaterialChart";
import Home from "Pages/Home/Home";
import NotFound from "Pages/NotFound/NotFound";
import {
  BuildingSchemaReport,
  ChangesFlatsRentPricingReport,
  ChangesFlatsSalePricingReport,
  ChequeReport,
  CollectionChqReport,
  ContractChequeReport,
  ContractCycleReport,
  ContractNearToExpireReport,
  ContractPaymentsReport,
  ContractsDepositReport,
  ContractsExpiredReport,
  ContractsReport,
  CostCenterGeneralLedgerReport,
  CostCenterTrialBalanceReport,
  CreditorsAgesReport,
  CustomersAccountStatementReport,
  DueNotePaperReport,
  EarningRentalIncomeEarnedReport,
  GeneralLedgerReport,
  JournalLedgerReport,
  LeasedLandsReport,
  LeasedParkingReport,
  LeasedPropertyActivityReport,
  LeasedUnitsReport,
  LeasedVillasReport,
  MangerChequeReport,
  OverduePaymentsReport,
  OwnerExpensesReport,
  ReservedUnitsReport,
  ReturnedChqReport,
  ServicesContractsReport,
  SoldLandsReport,
  SoldUnitsReport,
  SoldVillasReport,
  TrialBalanceReport,
  UnitConditionConstructionReport,
  UnitsWillVacatedReport,
  VATBillsReport,
  WarehouseReport,
  WorkerReport,
} from "Pages/Report";
import Tools from "Pages/Tools/Tools";
import ComplaintsReport from "Pages/Report/ComplaintsReport";
import ProfitAndLossReport from "Pages/Report/Accounting/ProfitAndLossReport";
import SalesReport from "Pages/Report/Maintenances/SalesReport";
import { createBrowserRouter } from "react-router-dom";
import Account from "Pages/Tables/Account";
import User from "Pages/Tables/User";
import Building from "Pages/Tables/Building";
import Apartment from "Pages/Tables/Apartment";
import Parking from "Pages/Tables/Parking";
import Bank from "Pages/Tables/Bank";
import CostCenter from "Pages/Tables/CostCenter";
import Bill from "Pages/Tables/Bill";
import Owner from "Pages/Tables/Owner";
import Seller from "Pages/Tables/Seller";
import Currency from "Pages/Tables/Currency";
import Shop from "Pages/Tables/Shop";
import Land from "Pages/Tables/Land";
import Villa from "Pages/Tables/Villa";
import OwnerExpenses from "Pages/Tables/OwnerExpenses";
import OwnerExpensesEypes from "Pages/Tables/OwnerExpensesEypes";
import Lawsuit from "Pages/Tables/Lawsuit";
import Store from "Pages/Tables/Store";
import MaterialGroup from "Pages/Tables/MaterialGroup";
import Material from "Pages/Tables/Material";
import Service from "Pages/Tables/Service";
import Category from "Pages/Tables/Category";
import CategoryProblem from "Pages/Tables/CategoryProblem";
import UserWorkTimes from "Pages/Tables/UserWorkTimes";
import LackReason from "Pages/Tables/LackReason";
import Contract from "Pages/Tables/Contract";
import ChequePattern from "Pages/Tables/ChequePattern";
import VoucherPattern from "Pages/Tables/VoucherPattern";
import BillPattern from "Pages/Tables/Bill_pattern";
import Vouchers from "Pages/Tables/Vouchers";
import ContractPattern from "Pages/Tables/ContractPattern";
import EvacuationRequest from "Pages/Tables/EvacuationRequest";
import Cheque from "Pages/Tables/Cheque";
import Entries from "Pages/Tables/Entries";
import Lessor from "Pages/Tables/Lessor";
import ReservationProperty from "Pages/Tables/ReservationProperty";

const publicRoutes = [
  { path: "**", component: <NotFound /> },
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <Login /> },
];

const authProtectedRoutes = [
  { path: "*", component: <NotFound /> },
  { path: "/", component: <Home /> },

  // Forms

  // Tables
  { path: "/account", component: <Account /> },
  { path: "/user", component: <User /> },

  { path: "/building", component: <Building /> },
  { path: "/apartment", component: <Apartment /> },
  { path: "/parking", component: <Parking /> },
  { path: "/bank", component: <Bank /> },
  { path: "/bill", component: <Bill /> },
  { path: "/bill/:code", component: <Bill /> },
  { path: "/cost_center", component: <CostCenter /> },
  { path: "/owner", component: <Owner /> },
  { path: "/lessor", component: <Lessor /> },
  { path: "/seller", component: <Seller /> },
  { path: "/reservation-property", component: <Home /> },
  { path: "/currency", component: <Currency /> },
  { path: "/shop", component: <Shop /> },
  { path: "/land", component: <Land /> },
  { path: "/villa", component: <Villa /> },
  { path: "/owner_expenses_types", component: <OwnerExpensesEypes /> },
  { path: "/owner_expenses", component: <OwnerExpenses /> },
  { path: "/watchman", component: <Home /> },
  { path: "/lawsuit", component: <Lawsuit /> },
  { path: "/store", component: <Store /> },
  { path: "/material_group/:number", component: <MaterialGroup /> },
  { path: "/material/:number", component: <Material /> },
  { path: "/material_group", component: <MaterialGroup /> },
  { path: "/material", component: <Material /> },
  { path: "/service", component: <Service /> },
  { path: "/category", component: <Category /> },
  { path: "/category_problem", component: <CategoryProblem /> },
  { path: "/category/:number", component: <Category /> },
  { path: "/category_problem/:number", component: <CategoryProblem /> },
  { path: "/user_work_times", component: <UserWorkTimes /> },
  { path: "/lack_reason", component: <LackReason /> },
  { path: "/lack_reason/:number", component: <LackReason /> },
  { path: "/evacuation_request", component: <EvacuationRequest /> },
  { path: "/patterns/contract_pattern", component: <ContractPattern /> },
  { path: "/patterns/cheque_pattern", component: <ChequePattern /> },
  { path: "/patterns/voucher_pattern", component: <VoucherPattern /> },
  { path: "/patterns/bill_pattern", component: <BillPattern /> },
  { path: "/patterns/contract_pattern/:number", component: <ContractPattern /> },
  { path: "/patterns/cheque_pattern/:number", component: <ChequePattern /> },
  { path: "/patterns/voucher_pattern/:number", component: <VoucherPattern /> },
  { path: "/patterns/bill_pattern/:number", component: <BillPattern /> },
  { path: "/vouchers", component: <Vouchers /> },
  { path: "/vouchers/:code", component: <Vouchers /> },
  { path: "/vouchers/:code/:number", component: <Vouchers /> },
  { path: "/cheques", component: <Cheque /> },
  { path: "/cheques/:code", component: <Cheque /> },
  { path: "/contracts", component: <Contract /> },
  { path: "/contracts/:type/:name/:number", component: <Contract /> },
  { path: "/contracts/:type/:name/", component: <Contract /> },
  { path: "/entries", component: <Entries /> },
  { path: "/entries/:name", component: <Entries /> },
  { path: "/reservation_property/", component: <ReservationProperty /> },

  // Reports

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

  // Main forms

  {
    path: "/contracts/:type/:name/:id",
    component: <ContractForm layout="update" />,
  },
  {
    path: "/contracts/:type/:name",
    component: <ContractForm layout="update" />,
  },
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
  //
];

const router = createBrowserRouter([...publicRoutes, authProtectedRoutes]);
export { authProtectedRoutes, publicRoutes };
export default router;
