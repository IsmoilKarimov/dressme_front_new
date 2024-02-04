import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { dressMainData } from "./ContextMenu";

export const HomeMainDataContext = createContext();

export const HomeMainDataContextProvider = ({ children }) => {
  const [data, setData] = useState({
    getMainProductCard: [],
    products: [],
    loader: true,
    btnLoader: false,
    mainRegionsList: []
  });

  const [page, setPage] = useState(1);

  let WishlistDataFromCookies = Cookies.get("WishList");

  let list = [];

  if (WishlistDataFromCookies) {
    list = JSON.parse(WishlistDataFromCookies);
  }

  const [wishList, setWishlist] = useState(list);

  if (Cookies.get("DressmeUserToken")) {
    Cookies.set("WishList", JSON.stringify(wishList), { expires: 99999 });
  } else {
    Cookies.set("WishList", JSON.stringify(wishList), { expires: 2 });
  }

  // ------------GET METHOD Main data -----------------
  // useQuery(
  //   ["get_main_data"],
  //   () => {
  //     return fetch(`${url}/api/main`, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         //   "Content-type": "application/json; charset=UTF-8",
  //       },
  //     }).then((res) => res.json());
  //   },
  //   {
  //     onSuccess: (res) => {
  //       // setData(res)
  //       setData(res);
  //     },
  //     onError: (err) => {
  //       console.log(err, "err");
  //     },
  //     keepPreviousData: true,
  //     refetchOnWindowFocus: true,
  //   }
  // );

  return (
    <HomeMainDataContext.Provider
      value={[data, setData, wishList, setWishlist, page, setPage]}
    >
      {children}
    </HomeMainDataContext.Provider>
  );
};
