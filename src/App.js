import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import RouterMain from "./root/RouterMain";
import { useLocation } from "react-router-dom";
import { dressMainData } from "./ContextHook/ContextMenu";

export default function App() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  useEffect(() => {
    if (
      localStorage.getItem("i18nextLng") === "en-US" ||
      localStorage.getItem("i18nextLng") === "en-UZ"
    ) {
      localStorage.setItem("i18nextLng", "ru");
      window.location.reload();
    }
  }, []);
 
  const location = useLocation();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);

  if (locationWindow !== "/locations" && dressInfo?.yandexOpenMarketLocation) {
    setDressInfo({
      ...dressInfo,
      yandexOpenMarketLocation: false,
    });
  }
  // console.log(data?.getMainProductCard?.products,'data?.getMainProductCard?.products');
  return <RouterMain />;
}
