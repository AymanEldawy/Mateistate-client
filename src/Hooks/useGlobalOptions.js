import { createContext, useContext, useState } from "react";

export const GlobalOptions = createContext(null);

export const GlobalOptionsProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <GlobalOptions.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </GlobalOptions.Provider>
  );
};

const useGlobalOptions = () => useContext(GlobalOptions);

export default useGlobalOptions;
