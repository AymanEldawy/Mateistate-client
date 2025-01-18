import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import useCurd from "./useCurd";

export const GlobalOptions = createContext(null);

export const GlobalOptionsProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { get } = useCurd();
  const { data: currencies } = useQuery({
    queryKey: ['list', 'currency'],
    queryFn: async () => {
      const res = await get('currency');
      return res?.result
    }
  })

  return (
    <GlobalOptions.Provider
      value={{
        user,
        setUser,
        currencies
      }}
    >
      {children}
    </GlobalOptions.Provider>
  );
};

const useGlobalOptions = () => useContext(GlobalOptions);

export default useGlobalOptions;
