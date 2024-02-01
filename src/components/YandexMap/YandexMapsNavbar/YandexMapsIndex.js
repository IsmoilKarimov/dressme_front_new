import React, { useCallback, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import YandexTop from "./YandexTop";
import YandexMedium from "./YandexMedium";
import YandexFilter from "./YandexFilter";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import RegionListYandex from "./RegionListYandex";

function YandexMapsIndex({ getMapsInfo, getFilterSearchByBrand }) {
  const [dressInfo] = useContext(dressMainData);

  function getYandexSearchName(childData) {
    getFilterSearchByBrand(childData)
  }
  const [regionsShow, setRegionsShow] = useState(false);
  const toggleRegionsShow = useCallback(() => setRegionsShow(true), []);
  const toggleRegionsHide = useCallback(() => setRegionsShow(false), []);
  return (
    <div className="w-full flex flex-col justify-center items-center m-0 p-0 box-border ">
      <div

        className={`fixed inset-0 z-[215] cursor-pointer duration-200 w-full h-[100vh] bg-black opacity-50
         ${regionsShow ? "" : "hidden"
          }`}
      >
      </div>
      {regionsShow && (
        <div
          className={`max-w-[600px]  w-full fixed duration-500 z-[231]  left-1/2 right-1/2 top-[50%] translate-x-[-50%] translate-y-[-50%]  h-fit flex items-center  justify-center mx-auto
        ${regionsShow
              ? " bottom-0 md:flex flex-col"
              : "bottom-[-1500px] z-[-10]"
            }
        `}
        >
          <RegionListYandex onClick={toggleRegionsHide} />
        </div>
      )}
      <div className="max-w-[1320px] w-[100%] ss:block md:flex  md:py-0 justify-center items-center m-auto">
        <div className="">
          <div
            className={`ss:px-3 mt-[1px] md:mt-0 md:px-[40px] md:rounded-b-[16px] ${!dressInfo?.yandexOpenMarket
              ? "bg-yandexNavbar backdrop-blur-md"
              : "bg-white"
              }	border border-searchBgColor border-t-0`}
          >
            <div className="hidden md:block">
              {" "}
              <YandexTop onClick={toggleRegionsShow} />
            </div>
            {!dressInfo?.yandexFullScreen && (
              <div className="overflow-hidden">
                <YandexMedium getYandexSearchName={getYandexSearchName} />
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
              <YandexFilter getMapsInfo={getMapsInfo} />
            </div>
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
}
export default React.memo(YandexMapsIndex)