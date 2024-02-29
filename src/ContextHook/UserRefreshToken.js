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
    if (Cookies.get("DressmeUserRefreshToken")) {
      try {
        const data = await axios.post(`${url}/refresh-token`, {
          refresh_token: Cookies.get("DressmeUserRefreshToken"),
        });

        if (data?.status === 200) {
          Cookies.set("DressmeUserToken", data?.data?.access_token);
          console.log("token updated");
        } else {
          Cookies.remove("DressmeUserToken");
          Cookies.remove("DressmeUserRefreshToken");
          navigate("/sign_in");
          console.log("Logged out");
          window.location.reload();
        }
      } catch (error) {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          Cookies.remove("DressmeUserToken");
          Cookies.remove("DressmeUserRefreshToken");
          navigate("/sign_in");
          console.log("Logged out");
          window.location.reload();
        } else {
          Cookies.remove("DressmeUserToken");
          Cookies.remove("DressmeUserRefreshToken");
          navigate("/sign_in");
          console.log("Logged out");
          window.location.reload();
        }
      }
    }
  };

  useEffect(() => {
    if (userLogedIn) {
      const intervalId = setInterval(() => {
        reFreshTokenFunc();
      }, 2 * 59 * 60 * 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [userLogedIn]);

  return (
    <UserRefreshTokenContext.Provider
      value={[reFreshTokenFunc, setUserLogedIn]}
    >
      {children}
    </UserRefreshTokenContext.Provider>
  );
};
