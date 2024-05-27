import Chart from "Pages/Chart/Chart";
import Home from "Pages/Home/Home";
import Login from "Pages/Auth/Login";
import Tools from "Pages/Tools/Tools";
import NouFound from "Pages/NouFound/NouFound";
import ContractForm from "Components/StructurePage/Forms/ContractForm/ContractForm";
import PatternsForm from "Pages/Patterns/PatternsForm";
import EntryForm from "Components/StructurePage/Forms/Vouchers/Entry/EntryForm";
import VoucherForm from "Components/StructurePage/Forms/Vouchers/Voucher/VoucherForm";
import BuildingForm from "Components/StructurePage/Forms/BuildingForm/BuildingForm";
import ChequeForm from "Components/StructurePage/Forms/ChequesForm/ChequeForm";
import AccountForm from "Components/StructurePage/Forms/AccountForm/AccountForm";
import UserForm from "Components/StructurePage/Forms/UserForm/UserForm";
import { DynamicForm } from "Components/StructurePage/Forms/CustomForm/DynamicForm";
import ReservationPropertyForm from "Components/StructurePage/Forms/ReservationProperty/ReservationPropertyForm";
import {
  TrialBalanceReport,
  BuildingSchemaReport,
  ChequeReport,
  CollectionChqReport,
  ContractNearToExpireReport,
  ContractPaymentsReport,
  EarningRentalIncomeEarnedReport,
  ContractsExpiredReport,
  LeasedPropertyActivityReport,
  ContractsReport,
  DueNotePaperReport,
  ReturnedChqReport,
  GeneralLedgerReport,
  LeasedUnitsReport,
  LeasedLandsReport,
  LeasedVillasReport,
  LeasedParkingReport,
  UnitsWillVacatedReport,
  ReservedUnitsReport,
  ContractsDepositReport,
  SheetReport,
  JournalLedgerReport,
  CostCenterGeneralLedgerReport,
  CostCenterTrialBalanceReport,
  CustomersAccountStatementReport,
  SoldUnitsReport,
  ContractChequeReport,
  SoldLandsReport,
  SoldVillasReport,
  OverduePaymentsReport,
  ChangesFlatsRentPricingReport,
  ChangesFlatsSalePricingReport,
  MangerChequeReport,
  UnitConditionConstructionReport,
  ServicesContractsReport,
  ContractCycleReport,
  CreditorsAgesReport,
  VATBillsReport,
  WarehouseReport,
} from "Pages/Report";
import LawsuitForm from "Components/StructurePage/Forms/LawsuitForm/LawsuitForm";
import ComplaintsReport from "Pages/Report/ComplaintsReport";
import ServiceForm from "Components/StructurePage/Forms/ServiceForm/ServiceForm";

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
    component: <SheetReport name="trading_sheet_report" />,
  },
  {
    path: "/reports/profit-and-loss-report/",
    component: <SheetReport name="profit_and_loss_report" />,
  },
  {
    path: "/reports/balance-sheet-report/",
    component: <SheetReport name="balance_sheet_report" />,
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

  // Manger reports
  {
    path: "/reports/mangers/cheque-report",
    component: <MangerChequeReport />,
  },

  // Vouchers
  { path: "/vouchers/:type/:name/:number", component: <VoucherForm /> },
  { path: "/vouchers/entries/:number", component: <EntryForm /> },

  // Patterns
  { path: "/patterns/:pattern/:number", component: <PatternsForm /> },

  // Main forms
  { path: "/cheques/:code/:name/:number", component: <ChequeForm /> },
  { path: "/buildings/:number", component: <BuildingForm /> },
  { path: "/maintenances/:code/:number", component: <ServiceForm /> },
  { path: "/list/:name/:number", component: <DynamicForm /> },
  { path: "/tools/:name/:number", component: <DynamicForm /> },
  {
    path: "/reservation_property/:number",
    component: <ReservationPropertyForm />,
  },
  { path: "/account/:number", component: <AccountForm /> },
  { path: "/user/:number", component: <UserForm /> },
  {
    path: "/contracts/:type/:name",
    component: <ContractForm layout="update" />,
  },
  { path: "/lawsuit/:number", component: <LawsuitForm /> },
  // Chart forms
  { path: "/chart/:name", component: <Chart /> },
];

export { authProtectedRoutes, publicRoutes };
