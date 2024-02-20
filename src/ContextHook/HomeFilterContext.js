import { createContext, useContext, useEffect, useState } from "react";

export const HomeFilterContext = createContext();

export const HomeFilterContextProvider = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: null,
    price: null,
    gender: null,
    color: null,
    gender: null,
    categoryOrder: 0,
    priceOrder: 0,
    genderOrder: 0,
    colorOrder: 0,
    genderOrder: 0,
    index: 0,
  });

  return (
    <HomeFilterContext.Provider value={[selectedFilters, setSelectedFilters]}>
      {children}
    </HomeFilterContext.Provider>
  );
};
