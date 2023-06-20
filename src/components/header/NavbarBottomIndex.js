import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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
} from "../../AssetsMain/icons";
const NavbarBottomIndex = () => {
  const [dressInfo] = useContext(dressMainData);
  let authenActiveStyle = "";
  let authenActiveForget = "";
  let IconsColor = "";

  if (dressInfo?.type === 1111) {
    IconsColor = "#008F0E";
    authenActiveForget =
      "text-borderSpring  bg-bgSpring border border-borderSpring ";
    authenActiveStyle =
      "md:text-borderSpring bg-white bg-bgSpring md:border-borderSpring w-1/2  px-2 md:h-[48px] ss:h-[52px]  justify-center flex items-center bg-btnBgColor ss:border   rounded-lg";
  }
  if (dressInfo?.type === 2222) {
    IconsColor = "#EAA700";
    authenActiveForget =
      "text-borderSummer  bg-bgSummer border border-borderSummer ";
    authenActiveStyle =
      "md:text-borderSummer bg-white bg-bgSummer md:border-borderSummer w-1/2  px-2 md:h-[48px] ss:h-[52px]  justify-center flex items-center bg-btnBgColor ss:border   rounded-lg";
  }
  if (dressInfo?.type === 3333) {
    IconsColor = "#E17A02";
    authenActiveForget =
      "text-borderAutumm  bg-bgAutumm borderborder-borderAutumm ";
    authenActiveStyle =
      "md:text-borderAutumm bg-white bg-bgAutumm md:border-borderAutumm w-1/2  px-2 md:h-[48px] ss:h-[52px]  justify-center flex items-center bg-btnBgColor ss:border   rounded-lg";
  }
  if (dressInfo?.type === 4444) {
    IconsColor = "#007DCA";
    authenActiveForget =
      "text-borderWinter  bg-bgWinter border border-borderWinter ";
    authenActiveStyle =
      "md:text-borderWinter bg-white bg-bgWinter md:border-borderWinter w-1/2  px-2 md:h-[48px] ss:h-[52px]  justify-center flex items-center bg-btnBgColor ss:border   rounded-lg";
  }

  const location = useLocation();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col justify-center items-center m-0 p-0 box-border ">
      <div className="max-w-[1280px] w-[100%] flex justify-center  items-center m-auto">
        <div className="ss:w-full flex flex-col justify-center md:mt-[6px]">
          <div className=" w-full  flex flex-col justify-center ss:px-4 md:px-0">
            {/* {locationWindow !== "/forget_password" ? ( */}
            {locationWindow === "/sign_in" || locationWindow === "/sign_up" ? (
              <div className="w-full md:w-[350px] md:mx-auto my-3  flex gap-x-2 items-center justify-between ss:border md:border-0 ss:bg-btnBgColor md:bg-transparent border-searchBgColor rounded-lg">
                <NavLink
                  to={"/sign_in"}
                  className={({ isActive }) =>
                    isActive
                      ? authenActiveStyle
                      : "w-1/2 md:h-[48px] ss:h-[52px] px-2   justify-center flex  items-center  md:bg-btnBgColor md:border   rounded-lg"
                  }
                >
                  <span>
                    <PersonIcons colors={IconsColor} />
                  </span>
                  <span className=" font-AeonikProMedium ml-1 not-italic text-sm leading-4 tracking-[0,16px]">
                    Войти в систему
                  </span>
                </NavLink>
                <NavLink
                  to={"/sign_up"}
                  className={({ isActive }) =>
                    isActive
                      ? authenActiveStyle
                      : "w-1/2 md:h-[48px] ss:h-[52px] px-2   justify-center flex  items-center  md:bg-btnBgColor md:border   rounded-lg"
                  }
                >
                  <span>
                    <PersonPlusIcons colors={IconsColor} />
                  </span>
                  <span className=" font-AeonikProMedium not-italic ml-1  text-sm leading-4 tracking-[0,16px]">
                    Создать аккаунт
                  </span>
                </NavLink>
              </div>
            ) : null}
            {locationWindow === "/forget_password" ||
            locationWindow === "/enter_password_validate" ||
            locationWindow === "/set_new_password" ? (
              <>
                {/* Mobile-Device */}
                <div className="w-full md:hidden md:mx-auto  my-3 ss:block md:w-fit ss:flex gap-x-2 items-center justify-between ss:border md:border-0 ss:bg-btnBgColor md:bg-transparent border-searchBgColor rounded-lg">
                  <NavLink
                    to={"/sign_in"}
                    className={
                      "w-[30%] md:h-[48px] ss:h-[52px] px-4   justify-center flex  items-center  md:bg-btnBgColor md:border   rounded-lg"
                    }
                  >
                    <span className="rotate-[180deg]">
                      <SircleNext colors={IconsColor} />
                    </span>
                    <span className=" font-AeonikProMedium ml-2 not-italic text-sm leading-4 tracking-[0,16px]">
                      Назад
                    </span>
                  </NavLink>
                  <div
                    //  to={"/forget_password"}
                    className={
                      "w-[65%] md:h-[48px] ss:h-[52px] px-4   justify-center flex  items-center bg-white  border border-searchBgColor  rounded-lg"
                    }
                  >
                    <span>
                      <EyesOpenIcons colors={IconsColor} />
                    </span>
                    <span className="font-AeonikProMedium not-italic ml-2  text-sm leading-4 tracking-[0,16px]">
                      Забыли пароль?
                    </span>
                  </div>
                </div>

                {/* LapTop-Device */}

                <div className="w-full h-fit md:mx-auto my-3 md:block ss:hidden justify-center  md:flex items-center">
                  <NavLink
                    to="/sign_in "
                    className={`text-${IconsColor} md:h-[48px] ss:h-[52px] w-[56px] rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center mr-3 `}
                  >
                    <span
                      className={`flex items-center justify-center  rotate-[180deg] `}
                    >
                      <SircleNext colors={IconsColor} />
                    </span>
                  </NavLink>
                  <div
                    className={`${authenActiveForget} w-fit md:h-[48px] ss:h-[52px] px-4   justify-center flex items-center   mr-2 rounded-lg`}
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
              </>
            ) : null}
            {locationWindow === "/" ? (
              <div className=" md:my-3">
                <BottomHeader />
              </div>
            ) : null}
            {locationWindow === "/categoriesType" ? (
              <div className=" my-3">
                <CategoryNavbar />
              </div>
            ) : null}

            {/* {locationWindow === "/delivery-points" ? (
                    <div className="border border-red-500"></div>
                  ) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottomIndex;
