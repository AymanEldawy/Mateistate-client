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

const REPORTS = {
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
