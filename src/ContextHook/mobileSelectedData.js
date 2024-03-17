import { createContext, useState } from "react";

export const MobileSelectedDataContext = createContext();

export const MobileSelectedDataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <MobileSelectedDataContext.Provider value={[data, setData]}>
      {children}
    </MobileSelectedDataContext.Provider>
  );
};
 