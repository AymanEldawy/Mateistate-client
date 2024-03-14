import { createContext, useContext } from "react";
import { useState } from "react";

export const VoucherEntriesViewContext = createContext();

export const VoucherEntriesViewProvider = ({ children }) => {
  const [voucherInfo, setVoucherInfo] = useState({});

  const dispatchVoucherEntries = ({ table, grid, ref_name, id }) => {
    if (id) {
      setVoucherInfo({
        table,
        grid,
        ref_name,
        id,
      });
    } else {
      setVoucherInfo({});
    }
  };

  return (
    <VoucherEntriesViewContext.Provider
      value={{ dispatchVoucherEntries, voucherInfo, setVoucherInfo }}
    >
      {children}
    </VoucherEntriesViewContext.Provider>
  );
};

export const useVoucherEntriesView = () => {
  return useContext(VoucherEntriesViewContext);
};
