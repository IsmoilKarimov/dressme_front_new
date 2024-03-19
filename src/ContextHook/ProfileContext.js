import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import axiosInstance from "../components/Authentication/UserProfile/AxiosIntance";

export const ProfileDataContext = createContext();

export const ProfileDataContextProvider = ({ children }) => {
  const [profileData, setProfileData] = useState([]);
  const fetchData = async (customHeaders) => {
    try {
      const response = await axiosInstance.get("/profile", {
        headers: customHeaders,
      });
      const status = response.status;
      const data = response.data;
      return { data, status };
    } catch (error) {
      const status = error.response ? error.response.status : null;
      return { error, status };
    }
  };
  const customHeaders = {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${localStorage.getItem("userAccess")}`, // Add other headers as needed
  };

  useQuery(["get_profile_list_context"], () => localStorage.getItem("userAccess") && fetchData(customHeaders), {
    onSuccess: (data) => {
      if (data?.status >= 200 && data?.status < 300) {
        setProfileData(data?.data)
      }
    },
    onError: (error) => {
      throw new Error(error || "something wrong");
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
  return (
    <ProfileDataContext.Provider value={[profileData, setProfileData]}>
      {children}
    </ProfileDataContext.Provider>
  );
};
