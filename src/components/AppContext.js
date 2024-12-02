import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const DataProvider = ({ children }) => {
  const [mainPayload, setmainPayload] = useState({itemsData:[]});
  return (
    <AppContext.Provider value={{ mainPayload, setmainPayload }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppData = () => useContext(AppContext);
