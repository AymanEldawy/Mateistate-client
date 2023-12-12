import React, { createContext, useContext } from "react";
import { useState } from "react";

export const AlertContext = createContext();
export const AlertProvider = ({ children }) => {
  const [alertMessage, setAlertMessage] = useState({});

  const dispatchAlert = (alert) => {
    if (alert) {
      setAlertMessage(alert);
    } else {
      setAlertMessage({});
    }
  };

  return (
    <AlertContext.Provider value={{ dispatchAlert, alertMessage }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};
