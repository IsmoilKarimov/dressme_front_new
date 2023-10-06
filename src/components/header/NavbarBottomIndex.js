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
const NavbarBottomIndex = () => {
  const [dressInfo] = useContext(dressMainData);

  const location = useLocation();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="flex flex-col justify-center items-center m-0 p-0 box-border ">
      <div className="max-w-[1280px] w-[100%] flex justify-center  items-center m-auto">
        <div className="ss:w-full flex flex-col justify-center md:mt-[6px]">
          <div className=" w-full  flex flex-col justify-center ss:px-4 md:px-0">
            {locationWindow === "/sign_in" || locationWindow === "/sign_up" ? (
              <div className="max-w-[440px] w-[100%] md:mx-auto my-3  flex gap-x-2 items-center justify-between ss:border md:border-0 ss:bg-btnBgColor md:bg-transparent border-searchBgColor rounded-lg">
                <NavLink
                  to={"/sign_in"}
                  className={({ isActive }) =>
                    isActive
                      ? dressInfo?.AuthenActiveSeason
                      : "w-1/2 md:h-[48px] ss:h-[52px] px-2   justify-center flex  items-center  md:bg-btnBgColor md:border   rounded-lg"
                  }
                >
                  <span>
                    <PersonIcons colors={dressInfo?.ColorSeason} />
                  </span>
                  <p className=" font-AeonikProMedium ml-1 not-italic text-sm leading-4 tracking-[0,16px]">
                    Войти в систему
                  </p>
                </NavLink>
                <NavLink
                  to={"/sign_up"}
                  className={({ isActive }) =>
                    isActive
                      ? dressInfo?.AuthenActiveSeason
                      : "w-1/2 md:h-[48px] ss:h-[52px] px-2   justify-center flex  items-center  md:bg-btnBgColor md:border   rounded-lg"
                  }
                >
                  <span>
                    <PersonPlusIcons colors={dressInfo?.ColorSeason} />
                  </span>
                  <p className=" font-AeonikProMedium not-italic ml-1  text-sm leading-4 tracking-[0,16px]">
                    Создать аккаунт
                  </p>
                </NavLink>
              </div>
            ) : null}
            {locationWindow === "/forget_password" ||
            locationWindow === "/enter_password_validate" ||
            locationWindow === "/set_new_password" ? (
              <div>
                {/* Mobile-Device */}
                <div className="w-full md:hidden md:mx-auto  my-3 md:w-fit ss:flex gap-x-2 items-center justify-between ss:border md:border-0 ss:bg-btnBgColor md:bg-transparent border-searchBgColor rounded-lg">
                  <NavLink
                    to={"/sign_in"}
                    className={
                      "w-[30%] md:h-[48px] ss:h-[52px] px-4   justify-center flex  items-center  md:bg-btnBgColor md:border   rounded-lg"
                    }
                  >
                    <span className="rotate-[180deg]">
                      <SircleNext colors={dressInfo?.ColorSeason} />
                    </span>
                    <span className=" font-AeonikProMedium ml-2 not-italic text-sm leading-4 tracking-[0,16px]">
                      Назад
                    </span>
                  </NavLink>
                  <div
                    className={
                      "w-[65%] md:h-[48px] ss:h-[52px] px-4   justify-center flex  items-center bg-white  border border-searchBgColor  rounded-lg"
                    }
                  >
                    <span>
                      <EyesOpenIcons colors={dressInfo?.ColorSeason} />
                    </span>
                    <span className="font-AeonikProMedium not-italic ml-2  text-sm leading-4 tracking-[0,16px]">
                      Забыли пароль?
                    </span>
                  </div>
                </div>

                {/* LapTop-Device */}
                <div className="w-full h-fit md:mx-auto my-3 ss:hidden justify-center md:flex items-center">
                  <NavLink
                    to="/sign_in "
                    className={`text-${dressInfo?.ColorSeason} md:h-[48px] ss:h-[52px] w-[56px] rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center mr-3 `}
                  >
                    <span
                      className={`flex items-center justify-center  rotate-[180deg] `}
                    >
                      <SircleNext colors={dressInfo?.ColorSeason} />
                    </span>
                  </NavLink>
                  <div
                    className={`${dressInfo?.BtnActiveSeason} w-fit md:h-[48px] ss:h-[52px] px-4   justify-center flex items-center   mr-2 rounded-lg`}
                  >
                    <span>
                      {" "}
                      <AiOutlineEye size={22} />
                    </span>
                    <span className="font-AeonikProMedium not-italic ml-1  text-sm leading-4 tracking-[0,16px]">
                      Забыли пароль?
                    </span>
                  </div>{" "}
                </div>
              </div>
            ) : null}
            {locationWindow === "/" ? (
              <span className=" md:my-3">
                <BottomHeader />
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

export default NavbarBottomIndex;
