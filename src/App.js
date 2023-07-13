import React, { useEffect, useState } from "react";
import RouterMain from "./root/RouterMain";
import { useLocation, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  if (screenSize.width > 768) {
    if (location?.pathname?.includes("/catalog")) {
      navigate("/");
    }
  }
  return <RouterMain />;
}
