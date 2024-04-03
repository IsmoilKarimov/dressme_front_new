import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserRefreshTokenContext = createContext();

export const UserRefreshTokenContextProvider = ({ children }) => {
  const [userLogedIn, setUserLogedIn] = useState(false);

  const navigate = useNavigate();
  const url = "https://api.dressme.uz/api/user";

  const reFreshTokenFunc = async () => {
    if (localStorage.getItem("userRefresh")) {
      try {
        const data = await axios.post(`${url}/refresh-token`, {
          refresh_token: localStorage.getItem("userRefresh"),
        });

        if (data?.status === 200) {
          localStorage.setItem("userAccess", data?.data?.access_token)
         } else {
          localStorage.removeItem("userRefresh")
          localStorage.removeItem("userAccess");
          navigate("/sign_in");
           window.location.reload();
        }
      } catch (error) {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          localStorage.removeItem("userRefresh")
          localStorage.removeItem("userAccess");
          navigate("/sign_in");
           window.location.reload();
        } else {
          localStorage.removeItem("userRefresh")
          localStorage.removeItem("userAccess");
          navigate("/sign_in");
           window.location.reload();
        }
        throw new Error(error || "something wrong");

      }
    }
  };

  // useEffect(() => {
  //   if (userLogedIn) {
  //     const intervalId = setInterval(() => {
  //       reFreshTokenFunc();
  //     }, 2 * 59 * 60 * 1000);
  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }
  // }, [userLogedIn]);

  return (
    <UserRefreshTokenContext.Provider
      value={[reFreshTokenFunc, setUserLogedIn]}
    >
      {children}
    </UserRefreshTokenContext.Provider>
  );
};
