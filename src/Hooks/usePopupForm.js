import { createContext, useContext } from "react";
import { useState } from "react";

export const PopupFormContext = createContext();

export const PopupFormProvider = ({ children }) => {
  const [openForm, setOpenForm] = useState({});
  const [shouldRefresh, setShouldRefresh] = useState(false);
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

      let value =
        openForm?.table === "user" || record?.account_id
          ? record?.account_id
          : record?.id;
      additional?.setList((prev) => {
        return [
          ...prev,
          {
            label,
            value,
          },
        ];
      });
      additional?.setValue(additional?.name, value);
      setShouldRefresh((p) => !p);
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
        shouldRefresh
      }}
    >
      {children}
    </PopupFormContext.Provider>
  );
};

export const usePopupForm = () => {
  return useContext(PopupFormContext);
};
