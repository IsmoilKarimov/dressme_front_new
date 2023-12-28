import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const StoreListDataContext = createContext();

export const StoreListDataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  //   let WishlistDataFromCookies = Cookies.get("WishList");

  //   const [wishList, setWishlist] = useState([]);

  //   useEffect(() => {
  //     if (WishlistDataFromCookies) {
  //       setWishlist(JSON.parse(WishlistDataFromCookies));
  //     }
  //   }, []);

  //   if(Cookies.get("DressmeUserToken")){
  //     Cookies.set("WishList", JSON.stringify(wishList), { expires: 99999 });
  //   } else {
  //     Cookies.set("WishList", JSON.stringify(wishList), { expires: 2 });
  //   }

  const url = "https://api.dressme.uz";

  // ------------GET METHOD Shops List data -----------------
  useQuery(
    ["get_shops_data"],
    () => {
      return fetch(`${url}/api/main/shops`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Token ${Cookies.get("DressmeUserToken")}`,
          //   "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setData(res);
      },
      onError: (err) => {
        console.log(err, "err");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    }
  );

  return (
    <StoreListDataContext.Provider value={[data, setData]}>
      {children}
    </StoreListDataContext.Provider>
  );
};
