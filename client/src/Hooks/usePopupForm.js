import React, { createContext, useContext } from "react";
import { useState } from "react";

export const PopupFormContext = createContext();

export const PopupFormProvider = ({ children }) => {
  const [openForm, setOpenForm] = useState({});

  const dispatchForm = (form) => {
    // console.log("🚀 ~ file: usePopupForm.js:10 ~ dispatchForm ~ form:", form)
    if (form) {
      setOpenForm(form);
    } else {
      setOpenForm({});
    }
  };

  return (
    <PopupFormContext.Provider value={{ dispatchForm, openForm }}>
      {children}
    </PopupFormContext.Provider>
  );
};

export const usePopupForm = () => {
  return useContext(PopupFormContext);
};
