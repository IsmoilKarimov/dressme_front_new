import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

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

  Cookies.set("WishList", JSON.stringify(wishList), { expires: 2 });

  const url = "https://api.dressme.uz";

  // ------------GET METHOD Main data -----------------
  useQuery(
    ["get_main_data"],
    () => {
      return fetch(`${url}/api/main`, {
        method: "GET",
        headers: {
          Accept: "application/json",
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
    <HomeMainDataContext.Provider
      value={[data, setData, wishList, setWishlist]}
    >
      {children}
    </HomeMainDataContext.Provider>
  );
};
