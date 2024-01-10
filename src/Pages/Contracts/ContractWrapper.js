import React, { createContext, useContext, useState } from "react";

export const ContractWrapperContext = createContext();

const ContractWrapperProvider = ({ children }) => {
  const [openInstallmentForm, setOpenInstallmentForm] = useState(false);

  return (
    <ContractWrapperContext.Provider
      value={{setOpenInstallmentForm, openInstallmentForm}}
    >
      {children}
    </ContractWrapperContext.Provider>
  );
};

export default ContractWrapperProvider;

export const useContractWrapper = () => useContext(ContractWrapperContext)
