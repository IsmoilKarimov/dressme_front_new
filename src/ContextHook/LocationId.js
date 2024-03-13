import { createContext, useEffect, useState } from "react";

export const LocationIdDetector = createContext();
export const LocationId = ({ children }) => {
    const [locationIdDetector, setLocationIdDetector] = useState({
        locationIdForTest: null
    });
    return (
        <LocationIdDetector.Provider value={[locationIdDetector, setLocationIdDetector]}>
            {children}
        </LocationIdDetector.Provider>
    ); 
};