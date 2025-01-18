import { Route, Routes, useNavigate } from "react-router-dom";

import { authProtectedRoutes } from "./routes";

const Index = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      {authProtectedRoutes.map((item) => (
        <Route path={item.path} element={item.component} key={item.path}/>
      ))}
{/* 
      <Route path="**" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Login />} />

      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/timing" element={<Timing />} />
      <Route path="/tools/:id" element={<Tools />} />

      <Route path="/reports/worker-report" element={<WorkerReport />} />
      <Route path="/reports/warehouse-report" element={<WarehouseReport />} />
      <Route path="/reports/complaints-report" element={<ComplaintsReport />} />
      <Route
        path="/reports/lease-units-report"
        element={<LeasedUnitsReport />}
      />
      <Route
        path="/reports/lease-parking-report"
        element={<LeasedParkingReport />}
      />
      <Route
        path="/reports/lease-lands-report"
        element={<LeasedLandsReport />}
      />
      <Route
        path="/reports/lease-villas-report"
        element={<LeasedVillasReport />}
      />
      <Route
        path="/reports/leased-property-activity-report"
        element={<LeasedPropertyActivityReport />}
      />
      <Route path="/reports/sold-units-report" element={<SoldUnitsReport />} />
      <Route path="/reports/sold-lands-report" element={<SoldLandsReport />} />
      <Route
        path="/reports/sold-villas-report"
        element={<SoldVillasReport />}
      />
      <Route
        path="/reports/changes-flats-rent-pricing-report"
        element={<ChangesFlatsRentPricingReport />}
      />
      <Route
        path="/reports/changes-flats-sale-pricing-report"
        element={<ChangesFlatsSalePricingReport />}
      />
      <Route
        path="/reports/units-will-vacated-report"
        element={<UnitsWillVacatedReport />}
      />
      <Route
        path="/reports/reserved-units-report"
        element={<ReservedUnitsReport />}
      />
      <Route
        path="/reports/contracts/services-contracts-report"
        element={<ServicesContractsReport />}
      />
      <Route
        path="/reports/contracts/contract-cycle-report"
        element={<ContractCycleReport />}
      />
      <Route
        path="/reports/contracts/contracts-deposit-report"
        element={<ContractsDepositReport />}
      />
      <Route path="/reports/trial-balance" element={<TrialBalanceReport />} />
      <Route
        path="/reports/creditors-ages-report"
        element={<CreditorsAgesReport />}
      />
      <Route
        path="/reports/trading-sheet-report/"
        element={<ProfitAndLossReport name="trading_sheet_report" />}
      />
      <Route
        path="/reports/profit-and-loss-report/"
        element={<ProfitAndLossReport name="profit_and_loss_report" />}
      />
      <Route
        path="/reports/balance-sheet-report/"
        element={<ProfitAndLossReport name="balance_sheet_report" />}
      />
      <Route
        path="/reports/due-note-papers-report"
        element={<DueNotePaperReport />}
      />
      <Route path="/reports/returned-cheques" element={<ReturnedChqReport />} />
      <Route
        path="/reports/collection-cheque-report"
        element={<CollectionChqReport />}
      />
      <Route
        path="/reports/overdue-payments-report"
        element={<OverduePaymentsReport />}
      />
      <Route
        path="/reports/general-ledger-report"
        element={<GeneralLedgerReport />}
      />
      <Route
        path="/reports/cost-center-general-ledger-report"
        element={<CostCenterGeneralLedgerReport />}
      />
      <Route
        path="/reports/cost-center-trial-balance-report"
        element={<CostCenterTrialBalanceReport />}
      />
      <Route path="/reports/vat-bills-report/" element={<VATBillsReport />} />
      <Route
        path="/reports/customer-account-statement-report/"
        element={<CustomersAccountStatementReport />}
      />
      <Route
        path="/reports/journal-ledger-report"
        element={<JournalLedgerReport />}
      />
      <Route
        path="/reports/contracts/disclosure"
        element={<ContractsReport />}
      />
      <Route
        path="/reports/contracts/expired-contract"
        element={<ContractsExpiredReport />}
      />
      <Route
        path="/reports/contracts/near-to-expire-contract"
        element={<ContractNearToExpireReport />}
      />
      <Route
        path="/reports/contracts/contract-cheque-report"
        element={<ContractChequeReport />}
      />
      <Route
        path="/reports/contracts/contract-payments-report"
        element={<ContractPaymentsReport />}
      />
      <Route path="/reports/cheque" element={<ChequeReport />} />
      <Route
        path="/reports/building-schema"
        element={<BuildingSchemaReport />}
      />
      <Route
        path="/reports/revenues/earning-rental-income-earned-report"
        element={<EarningRentalIncomeEarnedReport />}
      />
      <Route
        path="/reports/unit-condition-for-construction-report"
        element={<UnitConditionConstructionReport />}
      />

      <Route
        path="/reports/owner-expenses-report"
        element={<OwnerExpensesReport />}
      />
      <Route
        path="/reports/mangers/cheque-report"
        element={<MangerChequeReport />}
      />

      <Route path="/vouchers/:type/:name/:id" element={<VoucherForm />} />
      <Route
        path="/vouchers/entries/entry_main_data/:id"
        element={<EntryForm />}
      />
      <Route path="/vouchers/entries/entry_main_data" element={<EntryForm />} />

      <Route path="/patterns/:pattern" element={<PatternsForm />} />
      <Route path="/patterns/:pattern/:id" element={<PatternsForm />} />

      <Route path="/bill/:code/:id" element={<BillForm />} />
      <Route path="/bill/:code" element={<BillForm />} />
      <Route path="/cheque/:code/:name/:id" element={<ChequeForm />} />
      <Route path="/cheque/:code/:name/" element={<ChequeForm />} />
      <Route path="/list/:name/" element={<List />} />
      <Route
        path="/patterns/list/:name"
        element={<List urlToAdd={(name) => `/patterns/${name}`} />}
      />
      <Route
        path="/list/entries/:name"
        element={<List urlToAdd={(name) => "/vouchers/entries"} />}
      />
      <Route
        path="/list/buildings/:name"
        element={<List urlToAdd={(name) => "/buildings"} />}
      />
      <Route path="/material/:id" element={<MaterialForm />} />
      <Route path="/material/" element={<MaterialForm />} />
      <Route
        path="/materials/unregister-material/"
        element={<UnregisterMaterials />}
      />
      <Route path="/buildings/:id" element={<BuildingForm />} />
      <Route path="/buildings/" element={<BuildingForm />} />
      <Route path="/maintenances/:code/:id" element={<ServiceForm />} />
      <Route path="/maintenances/:code" element={<ServiceForm />} />
      <Route path="/form/:name/:id" element={<DynamicForm />} />
      <Route path="/form/:name" element={<DynamicForm />} />
      <Route
        path="/reservation_property/"
        element={<ReservationPropertyForm />}
      />
      <Route
        path="/reservation_property/:id"
        element={<ReservationPropertyForm />}
      />
      <Route path="/account/:id" element={<AccountForm />} />
      <Route path="/account/" element={<AccountForm />} />
      <Route path="/user/:id" element={<UserForm />} />
      <Route path="/user/" element={<UserForm />} />
      <Route
        path="/contracts/:type/:name/:id"
        element={<ContractForm layout="update" />}
      />
      <Route
        path="/contracts/:type/:name"
        element={<ContractForm layout="update" />}
      />
      <Route path="/owner_expenses" element={<OwnerExpensesForm />} />
      <Route path="/owner_expenses/:id" element={<OwnerExpensesForm />} />
      <Route path="/lawsuit/:id" element={<LawsuitForm />} />
      <Route path="/chart/:name" element={<Chart />} />
      <Route path="/chart/material" element={<MaterialChart />} />

      <Route path="/reports/item-activity" element={<ItemActivityReport />} />
      <Route path="/reports/inventory-report" element={<InventoryReport />} />
      <Route
        path="/reports/ending-inventory-report"
        element={<EndingInventoryReport />}
      />
      <Route path="/reports/sales-report" element={<SalesReport />} />
      <Route
        path="/reports/bill-details-report"
        element={<BillDetailsReport />}
      />
      <Route
        path="/reports/bill-profit-report"
        element={<BillProfitReport />}
      />
      <Route path="/layout" element={<Layout />}>
        <Route path="add" element={<LayoutForm />} />
      </Route> */}
      
    </Routes>
  );
};

export default Index;
