import axios from "axios";
import { ApiActions, baseURL } from "./api";
import { buildUrlWithFilters } from "Helpers/functions";

// Chq Reports
export const chequesReport = async () => {};

// Chq Reports
export const expiredContractReport = async () => {};

// Chq Reports
export const nearToExpireContractReport = async () => {};

// Chq Reports
export const ledgerReport = async () => {};

// Chq Reports
export const disclosureContractsReport = async () => {};

// Chq Reports
export const contractRevenuesReport = async () => {};

// Chq Reports
export const BuildingSchemaReport = async () => {};

// Chq Reports
export const PropertyMovingReport = async () => {};
// Chq Reports

export const leasedUnitsReport = async (params) => {
  // return await axios.post(`${baseURL}report/unit-leased-report`, params)
  return await axios.post(`${baseURL}unit-leased-report`, params);
};

export const earning_rental_income_earned_report = async (params) => {
  return await axios.post(`${baseURL}report/contract`, params);
};
export const complaints_report = async (params) => {
  return await axios.post(`${baseURL}reports/complaints-report`, params);
};
export const worker_report = async (params) => {
  return await axios.post(`${baseURL}reports/worker-report`, params);
};
export const warehouse_report = async (params) => {
  return await axios.post(`${baseURL}reports/warehouse-report`, params);
};
export const owner_expenses_report = async (params) => {
  return await axios.post(`${baseURL}reports/owner-expenses-report`, params);
};

export const balance_sheet_report = async (params) => {
  return await axios.get(
    buildUrlWithFilters(
      `${baseURL}reports/balance-sheet-report`,
      params?.filters
    )
  );
};

export const bill_details_report = async (params) => {
  return await axios.get(
    buildUrlWithFilters(
      `${baseURL}reports/bill-details-report`,
      params?.filters
    )
  );
};

export const bill_profit_report = async (params) => {
  return await axios.get(
    buildUrlWithFilters(`${baseURL}reports/bill-profit-report`, params?.filters)
  );
};

export const ending_inventory_report = async (params) => {
  return await axios.get(
    buildUrlWithFilters(
      `${baseURL}reports/ending-inventory-report`,
      params?.filters
    )
  );
};
export const general_ledger_report = async (params) => {
  return await axios.get(
    buildUrlWithFilters(
      `${baseURL}reports/general-ledger-report`,
      params?.filters
    )
  );
};
export const inventory_report = async (params) => {
  return await axios.get(
    buildUrlWithFilters(`${baseURL}reports/inventory-report`, params?.filters)
  );
};
export const item_activity_report = async (params) => {
  return await axios.get(
    buildUrlWithFilters(
      `${baseURL}reports/item-activity-report`,
      params?.filters
    )
  );
};
export const journal_ledger_report = async (params) => {
  return await axios.get(
    buildUrlWithFilters(
      `${baseURL}reports/journal-ledger-report`,
      params?.filters
    )
  );
};
export const profit_and_loss_report = async (params) => {
  return await axios.get(
    buildUrlWithFilters(
      `${baseURL}reports/profit-and-loss-report`,
      params?.filters
    )
  );
};
export const sales_report = async (params) => {
  return await axios.get(
    buildUrlWithFilters(`${baseURL}reports/sales-report`, params?.filters)
  );
};
export const trial_balance_report = async (params) => {
  return await axios.get(
    buildUrlWithFilters(
      `${baseURL}reports/trial-balance-report`,
      params?.filters
    )
  );
};

const REPORTS = {
  ending_inventory_report,
  general_ledger_report,
  inventory_report,
  item_activity_report,
  journal_ledger_report,
  profit_and_loss_report,
  sales_report,
  trial_balance_report,
  bill_profit_report,
  bill_details_report,
  balance_sheet_report,
  owner_expenses_report,
  warehouse_report,
  worker_report,
  complaints_report,
  earning_rental_income_earned_report,
  leasedUnitsReport,
  cheques: chequesReport,
  expiredContract: expiredContractReport,
  nearToExpireContract: nearToExpireContractReport,
  ledger: ledgerReport,
  disclosureContracts: disclosureContractsReport,
  contractRevenues: contractRevenuesReport,
  BuildingSchema: BuildingSchemaReport,
  PropertyMoving: PropertyMovingReport,
};

export default REPORTS;

// "leaased-property-report",
// "units-reserved-report",
// "units-vacated-report",
// "villa-sold-report",
// "land-sold-report",
// "unit-sold-report",
// "villa-leased-report",
// "parking-leased-report",
// "land-leased-report",
// "unit-leased-report",
// "contract"
