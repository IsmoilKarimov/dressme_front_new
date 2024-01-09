import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { dressMainData } from "./ContextMenu";

export const HomeMainDataContext = createContext();

export const HomeMainDataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  let WishlistDataFromCookies = Cookies.get("WishList");

  const [wishList, setWishlist] = useState([]);

  useEffect(() => {
    if (WishlistDataFromCookies) {
      setWishlist(JSON.parse(WishlistDataFromCookies));
    }
  }, []);

  if (Cookies.get("DressmeUserToken")) {
    Cookies.set("WishList", JSON.stringify(wishList), { expires: 99999 });
  } else {
    Cookies.set("WishList", JSON.stringify(wishList), { expires: 2 });
  }


  return (
    <HomeMainDataContext.Provider
      value={[data, setData, wishList, setWishlist]}
    >
      {children}
    </HomeMainDataContext.Provider>
  );
};
