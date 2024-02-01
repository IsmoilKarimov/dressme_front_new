import React, { useContext, useEffect, useState } from "react";
import RouterMain from "./root/RouterMain";
import { useLocation } from "react-router-dom";
import { dressMainData } from "./ContextHook/ContextMenu";

export default function App() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

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
  return <RouterMain />;
}
