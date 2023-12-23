import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";

export const SectionsMainDataContext = createContext();

export const SectionsMainDataContextProvider = ({ children }) => {
  const [id, setId] = useState(0);
  const [data, setData] = useState([]);


  const url = "https://api.dressme.uz";

  // ------------GET METHOD Main data -----------------
  useQuery(
    ["get_sections_main_data"],
    () => {
      return fetch(`${url}/api/main/section/${id}`, {
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
    <SectionsMainDataContext.Provider value={[data, setData, id, setId]}>
      {children}
    </SectionsMainDataContext.Provider>
  );
};
