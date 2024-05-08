import axios from "axios";
import { ApiActions } from "./api";

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
  // return await axios.post(`http://localhost:4000/report/unit-leased-report`, params)
  return await ApiActions.report("unit-leased-report", params);
};

export const earning_rental_income_earned_report = async (params) => {
  return await axios.post(`http://localhost:4000/report/contract`, params)
};

const REPORTS = {
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
