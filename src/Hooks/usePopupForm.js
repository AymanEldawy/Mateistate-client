import { createContext, useContext } from "react";
import { useState } from "react";

export const PopupFormContext = createContext();

export const PopupFormProvider = ({ children }) => {
  const [openForm, setOpenForm] = useState({});
  const [recordResponse, setRecordResponse] = useState(null);

  const dispatchForm = (form) => {
    if (form?.table) {
      setOpenForm(form);
      let table = form?.table;
    } else {
      setOpenForm({});
    }
  };

  const appendNewRecord = (res) => {
    if (openForm.table) {
      let record = res?.record;
      let additional = openForm?.additional;
      let numberSearchKey = record?.internal_number
        ? "internal_number"
        : "number";
      let label = record?.[numberSearchKey]
        ? `${record?.[numberSearchKey]}-${record?.name}`
        : record?.name;

      additional?.setList((prev) => {
        return [...prev, { label, value: record?.id }];
      });
      additional?.setValue(additional?.name, record.id);
    }
  };

  return (
    <PopupFormContext.Provider
      value={{
        dispatchForm,
        openForm,
        setRecordResponse,
        recordResponse,
        appendNewRecord,
      }}
    >
      {children}
    </PopupFormContext.Provider>
  );
};

export const usePopupForm = () => {
  return useContext(PopupFormContext);
};
