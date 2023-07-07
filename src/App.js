import React, { useContext, useEffect } from "react";
import RouterMain from "./root/RouterMain";
import { useLocation } from "react-router-dom";
import { dressMainData } from "./ContextHook/ContextMenu";

export default function App() {
  const location = useLocation();
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  useEffect(() => {
    setDressInfo({
      ...dressInfo,
      openShopIdFilter: false,
      openCategoryFilter: false,
    });
  }, [location.pathname]);
  return <RouterMain />;
}
