import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ActiveBasketIcons,
  ActiveCotegoryIcons,
  ActiveHeartIcons,
  ActiveHomeIcons,
  ActivePersonIcons,
  BasketIcons,
  CotegoryIcons,
  HeartLinkIcons,
  HomeIcons,
  MapIcons,
  PersonIcons,
} from "../../AssetsMain/icons";
import { ActivePersonImg, HeartImg } from "../../AssetsMain";
import { dressMainData } from "../../ContextHook/ContextMenu";

const NavMenu = () => {
  const [dressInfo] = useContext(dressMainData);

  let IconsColor = "";

  if (dressInfo?.type === 1111) {
    IconsColor = "#008F0E";
  }
  if (dressInfo?.type === 2222) {
    IconsColor = "#EAA700";
  }
  if (dressInfo?.type === 3333) {
    IconsColor = "#E17A02";
  }
  if (dressInfo?.type === 4444) {
    IconsColor = "#007DCA";
  }

  return (
    <div
      className={`bg-white shadow-navMenuShadov  px-4 w-full rounded-t-xl md:hidden z-[55] h-full overscroll-none overflow-y-hidden`}
    >
      <ul className="flex items-center justify-between text-[10px] font-AeonikProMedium py-1 ">
        {/* {menus.map((menu, index) => ( */}
        <li className="w-[72px] h-[56px]">
          <NavLink
            to={"/"}
            className="w-full h-full flex items-center justify-center text-center  "
          >
            {({ isActive }) =>
              isActive ? (
                <span className="flex flex-col items-center justify-center mt-1 ">
                  <span className=" flex items-center">
                    <ActiveHomeIcons colors={IconsColor} />
                  </span>
                  <span className="mt-[7px]">
                    <span>Главная</span>
                  </span>{" "}
                </span>
              ) : (
                <span className=" flex flex-col items-center justify-center mt-1 ">
                  <span className="">
                    <HomeIcons colors={"#000"} />
                  </span>
                  <span className="mt-[7px]">
                    <span>Главная</span>
                  </span>
                </span>
              )
            }
          </NavLink>
        </li>
        <li className="w-[72px] h-[56px] ">
          <NavLink
            to={"/katolog"}
            className="w-full h-full flex items-center justify-center text-center  "
          >
            {({ isActive }) =>
              isActive ? (
                <span className="flex flex-col items-center justify-center mt-1  ">
                  <span className=" flex items-center ">
                    <ActiveCotegoryIcons colors={IconsColor} />
                  </span>
                  <span className="mt-2">
                    <span>Каталог</span>
                  </span>{" "}
                </span>
              ) : (
                <span className=" flex flex-col items-center justify-center mt-1 ">
                  <span className="">
                    <CotegoryIcons colors={"#000"} />
                  </span>
                  <span className="mt-2">
                    <span>Каталог</span>
                  </span>
                </span>
              )
            }
          </NavLink>
        </li>
        <li className="w-[72px] h-[56px]">
          <NavLink
            to={"/basket-check-out"}
            className="w-full h-full flex items-center justify-center text-center "
          >
            {({ isActive }) =>
              isActive ? (
                <span className="flex flex-col items-center justify-center mt-1 ">
                  <div
                    className={`relative h-full flex items-center mx-auto cursor-pointer `}
                  >
                    <span className=" flex items-center  ">
                      <ActiveBasketIcons colors={IconsColor} />
                    </span>
                    <span
                      className={`count bg-RedColor w-4 h-4 text-white text-[10px] rounded flex items-center justify-center absolute -top-[10px] -right-[10px] font-AeonikProMedium`}
                    >
                      4
                    </span>
                  </div>
                  <span className="mt-2">
                    <div>Корзина</div>
                  </span>
                </span>
              ) : (
                <span className=" flex flex-col items-center justify-center mt-1 ">
                  <div
                    className={`relative h-full flex items-center mx-auto cursor-pointer `}
                  >
                    <span className=" flex items-center ">
                      <BasketIcons colors={"#000"} />
                    </span>
                    <span
                      className={`count bg-RedColor w-4 h-4 text-white text-[10px] rounded flex items-center justify-center absolute -top-[10px] -right-[10px] font-AeonikProMedium`}
                    >
                      4
                    </span>
                  </div>
                  <span className="mt-2">
                    <div>Корзина</div>
                  </span>
                </span>
              )
            }
          </NavLink>
        </li>
        <li className="w-[72px] h-[56px] flex  justify-center ">
          <NavLink
            to={"/delivery-points"}
            className="w-full h-full flex items-center justify-center text-center  "
          >
            {({ isActive }) =>
              isActive ? (
                <span className="flex flex-col items-center justify-center mt-1">
                  <MapIcons colors={IconsColor} />
                  <span className="mt-2">
                    <span>Карта</span>
                  </span>{" "}
                </span>
              ) : (
                <span className=" flex flex-col items-center justify-center mt-1 ">
                  <span className="">
                    <MapIcons colors={"#000"} />
                  </span>
                  <span className="mt-2">
                    <span>Карта</span>
                  </span>
                </span>
              )
            }
          </NavLink>
        </li>
        <li className="w-[72px] h-[56px] ">
          <NavLink
            to={localStorage.getItem("dressMeLogin") ? "/my-order" : "/sign_in"}
            className="w-full h-full flex items-center justify-center text-center "
          >
            {({ isActive }) =>
              isActive ? (
                <span className="flex flex-col items-center justify-center mt-1 ">
                  <span className=" flex items-center ">
                    {" "}
                    <ActivePersonIcons colors={IconsColor} />
                  </span>
                  <span className="mt-1">
                    <span>Профиль</span>
                  </span>{" "}
                </span>
              ) : (
                <span className=" flex flex-col items-center justify-center mt-1">
                  <span className="">
                    <PersonIcons colors={"#000"} />
                  </span>
                  <span className="mt-1">
                    <span>Профиль</span>
                  </span>
                </span>
              )
            }
          </NavLink>
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
};
export default NavMenu;
