import { createContext, useState } from "react";

export const ProfileDataContext = createContext();

export const ProfileDataContextProvider = ({ children }) => {
  const [profileData, setProfileData] = useState("");

  return (
    <ProfileDataContext.Provider value={[profileData, setProfileData]}>
      {children}
    </ProfileDataContext.Provider>
  );
};
