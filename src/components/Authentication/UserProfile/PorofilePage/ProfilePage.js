import { useEffect } from "react";
import { UserProfilePage } from "./UserProfilePage/UserProfilePage";

export default function ProfilePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-full border-t border-searchBgColor">
        <UserProfilePage />
      </div>
    </div>
  );
}