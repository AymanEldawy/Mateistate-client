import { createContext, useContext } from "react";
import { useState } from "react";

export const PopupFormContext = createContext();

export const PopupFormProvider = ({ children }) => {
  const [openForm, setOpenForm] = useState({});
  const [recordResponse, setRecordResponse] = useState(null)

  const dispatchForm = (form) => {
    if (form?.table) {
      setOpenForm(form);
      let table = form?.table;
    } else {
      setOpenForm({})
    }
  };

  return (
    <PopupFormContext.Provider value={{ dispatchForm, openForm, setRecordResponse, recordResponse }}>
      {children}
    </PopupFormContext.Provider>
  );
};

export const usePopupForm = () => {
  return useContext(PopupFormContext);
};
