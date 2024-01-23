import React, { createContext, useContext, useEffect, useRef } from "react";
import { useState } from "react";

export const PopupFormContext = createContext();

export const PopupFormProvider = ({ children }) => {
  const [openForm, setOpenForm] = useState({});
  const [refTable, setRefTable] = useState("");

  const dispatchForm = (form) => {
    if (form?.table) {
      setOpenForm(form);
      let table = form?.table;
      setRefTable({ table });
    } else {
      setOpenForm({})
      setRefTable((prev) => ({ ...prev, isClosed: true }))
    }
  };

  return (
    <PopupFormContext.Provider value={{ dispatchForm, openForm, refTable }}>
      {children}
    </PopupFormContext.Provider>
  );
};

export const usePopupForm = () => {
  return useContext(PopupFormContext);
};
