import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { UserRefreshTokenContext } from "./UserRefreshToken";

export const StoreListDataContext = createContext();

export const StoreListDataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [reFreshTokenFunc, setUserLogedIn] = useContext(
    UserRefreshTokenContext
  );

  const url = "https://api.dressme.uz";

  // ------------GET METHOD Shops List data -----------------
  useQuery(
    ["get_shops_data"],
    () => {
      return fetch(`${url}/api/main/shops`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Token ${localStorage?.getItem("userAccess")}`,
          //   "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        if (res.status === 401 || res.status === 403) {
          // reFreshTokenFunc();
        }
        setData(res);
      },
      onError: (err) => {
        throw new Error(err || "something wrong");
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
