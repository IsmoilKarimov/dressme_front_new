import { createContext, useState } from "react";

export const MapsList = createContext();

export const MapsShopsList = ({ children }) => {
    const [mapslist, setMapslist] = useState(null);

    return (
        <MapsList.Provider value={[mapslist, setMapslist]}>
            {children}
        </MapsList.Provider>
    );
};
 