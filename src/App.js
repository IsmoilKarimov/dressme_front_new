import React, { useContext, useEffect, useState } from "react";
import RouterMain from "./root/RouterMain";
import { useLocation } from "react-router-dom";
import { dressMainData } from "./ContextHook/ContextMenu";
import { HomeMainDataContext } from "./ContextHook/HomeMainData";

export default function App() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [data] = useContext(HomeMainDataContext);

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
