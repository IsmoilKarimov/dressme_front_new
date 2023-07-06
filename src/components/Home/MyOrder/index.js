import { useEffect } from "react";
import { MyOrderSettings } from "./MyOrderSettings/MyOrderSettings";
import { MyOrderBreadCamp } from "./MyOrderBreadCamp/MyOrderBreadCamp";

export default function OrderSettings() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-full border-b border-searchBgColor">
        <MyOrderBreadCamp />
      </div>
      <div className="w-full">
        <MyOrderSettings />
      </div>
    </div>
  );
}
