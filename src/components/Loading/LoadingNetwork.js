import React from "react";
import styles from "./forLoading.module.css";
import PuffLoader from "react-spinners/PuffLoader";
import wifiLoading from '../../assets/backTop/WiFi_Loader.gif.mp4'
export default function LoadingNetwork() {
    return (
        <div className="w-[100vh] h-[100vh] z-[50] flex items-center justify-center">
            <div className="flex items-center justify-center flex-col ">
                <div style={{
                    backgroundImage: `url('${wifiLoading})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                }}>
                </div>
                <div>noProduct</div>
            </div>
        </div>
    );
}
