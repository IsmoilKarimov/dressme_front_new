import { createContext, useState } from "react";

export const SelectedLocation = createContext();
export const SelectedLocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  return (
    <SelectedLocation.Provider
      value={[
        selectedLocation,
        setSelectedLocation,
        selectedSize,
        setSelectedSize,
      ]}
    >
      {children}
    </SelectedLocation.Provider>
  );
};
