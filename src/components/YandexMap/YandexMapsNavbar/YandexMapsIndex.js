import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import YandexTop from "./YandexTop";
import YandexMedium from "./YandexMedium";
import YandexFilter from "./YandexFilter";
import { dressMainData } from "../../../ContextHook/ContextMenu";

export default function YandexMapsIndex({ getMapsInfo, getFilterData }) {
  const [dressInfo] = useContext(dressMainData);
  function getYandexFilterData(childData) {
    getFilterData(childData)
  }
  useEffect(() => {
  }, [])
  return (
    <div className="w-full flex flex-col justify-center items-center m-0 p-0 box-border ">
      <div className="max-w-[1320px] w-[100%] ss:block md:flex  md:py-0 justify-center items-center m-auto">
        <div className="">
          <div
            className={`ss:px-3 mt-[1px] md:mt-0 md:px-[40px] md:rounded-b-[16px] ${!dressInfo?.yandexOpenMarket
              ? "bg-yandexNavbar backdrop-blur-sm"
              : "bg-white"
              }	border border-searchBgColor border-t-0`}
          >
            <div className="hidden md:block">
              {" "}
              <YandexTop />
            </div>
            {!dressInfo?.yandexFullScreen && (
              <div className="overflow-hidden">
                <YandexMedium />
              </div>
            )}
          </div>
          {!dressInfo?.yandexOpenMarket && (
            <div
              className={`flex flex-col justify-center  fixed left-0 right-0 z-55 ss:top-auto ${!dressInfo?.yandexFullScreen
                ? "ss:bottom-[63px] "
                : "ss:bottom-[0]"
                } 
              
               md:bottom-auto
              duration-500

            `}
            >
              <YandexFilter getMapsInfo={getMapsInfo} getYandexFilterData={getYandexFilterData} />
            </div>
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
}
