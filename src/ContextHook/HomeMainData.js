import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";

export const HomeMainDataContext = createContext();

export const HomeMainDataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

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
      // keepPreviousData: true,
      // refetchOnWindowFocus: true,
    }
  );

  return (
    <HomeMainDataContext.Provider value={[data, setData]}>
      {children}
    </HomeMainDataContext.Provider>
  );
};
