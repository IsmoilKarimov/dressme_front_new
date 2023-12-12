import { createContext, useState } from "react";

export const SliderPhotosColorContext = createContext();

export const SliderPhotosColorContextProvider = ({ children }) => {
  const [colorId, setcolorId] = useState(null);

  console.log(colorId);

  return (
    <SliderPhotosColorContext.Provider value={[colorId, setcolorId]}>
      {children}
    </SliderPhotosColorContext.Provider>
  );
};
