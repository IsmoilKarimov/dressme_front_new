import React from "react";
import styles from "./forLoading.module.css";
import PuffLoader from "react-spinners/PuffLoader";
import WiFiLoader from "../../assets/backTop/wifi_loader.gif";
export default function LoadingNetwork() {
  return (
    <div className="h-[100vh]">
      <div className="w-[100vw] h-[100vh] z-[50] flex items-center justify-center fixed top-0 right-0">
        <div className="w-full flex items-center justify-center">
          <div
            style={{
              backgroundImage: `url('${WiFiLoader}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            className="w-[100px] h-[100px]"
          ></div>
        </div>
      </div>
    </div>
  );
}
