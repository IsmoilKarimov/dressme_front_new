import React from "react";
import WiFiLoader from "../../assets/backTop/wifi_loader.gif";
export default function LoadingNetwork() {
  return (
    <div className="h-[100vh]">
      <div className="w-[100vw] h-[100vh] z-[1] flex items-center justify-center fixed top-0 right-0">
        <div className="w-full flex items-center justify-center">
          <div
            style={{
              backgroundImage: `url('${WiFiLoader}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            className="md:w-[100px] w-[60px] md:h-[100px] h-[60px]"
          ></div>
        </div>
      </div>
    </div>
  );
}
