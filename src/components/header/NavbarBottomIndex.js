import React, { useContext, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";

import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import BottomHeader from "./bottom";
import { dressMainData } from "../../ContextHook/ContextMenu";
import CategoryNavbar from "./CategoryNavbar/CategoryNavbar";
import {
  EyesOpenIcons,
  PersonIcons,
  PersonPlusIcons,
  SircleNext,
} from "../../assets/icons";
import { useTranslation } from "react-i18next";
import { SaesonDetectorDress } from "../../ContextHook/SeasonContext";
function NavbarBottomIndex({ scrollPost }) {
   const { i18n, t } = useTranslation('header')
   const [seasonDetector, setSeasonDetector] = useContext(SaesonDetectorDress)
  const location = useLocation();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="flex flex-col justify-center items-center m-0 p-0 box-border ">
      <div className="max-w-[1280px] w-[100%] flex justify-center  items-center m-auto">
        <div className="ss:w-full flex flex-col justify-center ">
          <div className=" w-full  flex flex-col justify-center ss:px-4 md:px-0">
            {locationWindow === "/sign_in" || locationWindow === "/sign_up" ? (
              <div className="max-w-[440px] w-[100%] md:mx-auto my-3  flex gap-x-2 items-center justify-between ss:border md:border-0 ss:bg-btnBgColor md:bg-transparent border-searchBgColor rounded-lg">
                <NavLink
                  to={"/sign_in"}
                  className={({ isActive }) =>
                    isActive
                      ? seasonDetector?.AuthenActiveSeason
                      : "w-1/2 md:h-[48px] ss:h-[52px] px-2   justify-center flex  items-center  md:bg-btnBgColor md:border   rounded-lg"
                  }
                >
                  <span>
                    <PersonIcons colors={seasonDetector?.ColorSeason} />
                  </span>
                  <p className=" font-AeonikProMedium ml-1 not-italic text-sm leading-4 tracking-[0,16px]">
                    {t("Nlogin")}
                  </p>
                </NavLink>
                <NavLink
                  to={"/sign_up"}
                  className={({ isActive }) =>
                    isActive
                      ? seasonDetector?.AuthenActiveSeason
                      : "w-1/2 md:h-[48px] ss:h-[52px] px-2   justify-center flex  items-center  md:bg-btnBgColor md:border   rounded-lg"
                  }
                >
                  <span>
                    <PersonPlusIcons colors={seasonDetector?.ColorSeason} />
                  </span>
                  <p className=" font-AeonikProMedium not-italic ml-1  text-sm leading-4 tracking-[0,16px]">
                    {t("NcreateAccount")}
                  </p>
                </NavLink>
              </div>
            ) : null}
            {locationWindow === "/forget_password" ||
              
              locationWindow === "/set_new_password" ? (
              <div>
                {/* Mobile-Device */}
                <div className="w-full md:hidden md:mx-auto  my-3 md:w-fit ss:flex gap-x-2 items-center justify-between ss:border md:border-0 ss:bg-btnBgColor md:bg-transparent border-searchBgColor rounded-lg">
                  <NavLink
                    to={"/sign_in"}
                    className={
                      "w-[30%] md:h-[48px] ss:h-[52px] px-4 justify-center flex  items-center  md:bg-btnBgColor md:border   rounded-lg"
                    }
                  >
                    <span className="rotate-[180deg]">
                      <SircleNext colors={seasonDetector?.ColorSeason} />
                    </span>
                    <span className=" font-AeonikProMedium ml-2 not-italic text-sm leading-4 tracking-[0,16px]">
                    {t("Nback")}
                    </span>
                  </NavLink>
                  <div
                    className={
                      "w-[65%] md:h-[48px] ss:h-[52px] px-4   justify-center flex  items-center bg-white  border border-searchBgColor  rounded-lg"
                    }
                  >
                    <span>
                      <EyesOpenIcons colors={seasonDetector?.ColorSeason} />
                    </span>
                    <span className="font-AeonikProMedium flex items-center not-italic ml-2  text-sm leading-4 tracking-[0,16px]">
                      {t("Nforgetpss")}
                      <span>?</span>
                    </span>
                  </div>
                </div>

                {/* LapTop-Device */}
                <div className="w-full h-fit md:mx-auto my-3 ss:hidden justify-center md:flex items-center">
                  <NavLink
                    to="/sign_in "
                    className={`text-${seasonDetector?.ColorSeason} md:h-[48px] ss:h-[52px] w-[56px] rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center mr-3 `}
                  >
                    <span
                      className={`flex items-center justify-center rotate-[180deg] `}
                    >
                      <SircleNext colors={seasonDetector?.ColorSeason} />
                    </span>
                  </NavLink>
                  <div
                    className={`${seasonDetector?.BtnActiveSeason} w-fit md:h-[48px] ss:h-[52px] px-4 justify-center flex items-center   mr-2 rounded-lg`}
                  >
                    <span>
                      {" "}
                      <AiOutlineEye size={22} />
                    </span>
                    <span className="font-AeonikProMedium flex items-center not-italic ml-1  text-sm leading-4 tracking-[0,16px]">
                      {t("Nforgetpss")}
                      <span>?</span>
                    </span>
                  </div>{" "}
                </div>
              </div>
            ) : null}
            {locationWindow === "/" ? (
              <span className=" md:my-3">
                <BottomHeader
                // getGender={getGender}
                // getRangeList={getRangeList}
                // getCategoryList={getCategoryList}
                // getColorList={getColorList}
                // categoryProps={categoryProps}
                // colorProps={colorProps}
                // getRangeProps={getRangeProps}
                // genderProps={genderProps}
                />
              </span>
            ) : null}
            {locationWindow === "/categoriesType" ? (
              <span className=" my-3">
                <CategoryNavbar />
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(NavbarBottomIndex);
