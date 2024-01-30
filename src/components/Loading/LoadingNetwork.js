import React from "react";
import styles from "./forLoading.module.css";
import PuffLoader from "react-spinners/PuffLoader";
import WiFiLoader from "../../assets/backTop/wifi_loader.gif";
export default function LoadingNetwork() {
  return (
    <div className="w-[100vh] h-[70vh] z-[50] flex items-center justify-center">
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
  );
}
