import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BasketIcons,
  CotegoryIcons,
  HeartIcons,
  HomeIcons,
  PersonIcons,
} from "../../AssetsMain/icons";

const menus = [
  {
    link: "#",
    name: "Главная",
    icon: <HomeIcons colors={"#000"} />,
    id: 1,
  },
  {
    link: "#",
    name: "Каталог",
    icon: <BasketIcons />,
    id: 2,
  },
  {
    link: "#",
    name: "Корзина",
    icon: <CotegoryIcons colors={"#000"} />,
    id: 3,
  },
  {
    link: "#",
    name: "Избранное",
    icon: <HeartIcons colors={"#000"} />,
    id: 4,
  },
  {
    link: "/sign_in",
    name: "Профиль",
    icon: <PersonIcons colors={"#000"} />,
    id: 5,
  },
];

const NavMenu = () => {
  return (
    <div
      className={`bg-white shadow-navMenuShadov  px-4 w-full rounded-t-xl md:hidden z-[55] h-full overscroll-none overflow-y-hidden`}
    >
      <ul className="flex items-center justify-between text-[10px] font-AeonikProMedium py-1 ">
        {/* {menus.map((menu, index) => ( */}
        <li className="w-[72px] h-[56px]">
          <NavLink to={"/"} className="w-full flex flex-col text-center pt-2">
            <div
              className={`relative h-full flex items-center mx-auto cursor-pointer `}
            >
              <span className=" flex items-center mb-1 h-6 ">
                <HomeIcons colors={"#000"} />
              </span>
            </div>
            <span>
              <div>Главная</div>
            </span>
          </NavLink>
        </li>
        <li className="w-[72px] h-[56px]">
          <NavLink to={"/"} className="w-full flex flex-col text-center pt-2">
            <div
              className={`relative h-full flex items-center mx-auto cursor-pointer `}
            >
              <span className=" flex items-center mb-1 h-6 ">
                <BasketIcons />
              </span>
            </div>
            <span>
              <div>Каталог</div>
            </span>
          </NavLink>
        </li>
        <li className="w-[72px] h-[56px]">
          <NavLink
            to={"/basket-check-out"}
            className="w-full flex flex-col text-center pt-2"
          >
            <div
              className={`relative h-full flex items-center mx-auto cursor-pointer `}
            >
              <span className=" flex items-center mb-1 h-6 ">
                <CotegoryIcons colors={"#000"} />
              </span>
              <span
                className={`count bg-RedColor w-4 h-4 text-white text-[10px] rounded flex items-center justify-center absolute -top-[10px] -right-[10px] font-AeonikProMedium`}
              >
                4
              </span>
            </div>
            <span>
              <div>Корзина</div>
            </span>
          </NavLink>
        </li>
        <li className="w-[72px] h-[56px]">
          <NavLink
            to={"/favourites"}
            className="w-full flex flex-col text-center pt-2"
          >
            <div
              className={`relative h-full flex items-center mx-auto cursor-pointer `}
            >
              <span className=" flex items-center mb-1 h-6 ">
                <HeartIcons colors={"#000"} />
              </span>
            </div>
            <span>
              <div>Избранное</div>
            </span>
          </NavLink>
        </li>
        <li className="w-[72px] h-[56px]">
          <NavLink
            to={"/sign_in"}
            className="w-full flex flex-col text-center pt-2"
          >
            <div
              className={`relative h-full flex items-center mx-auto cursor-pointer `}
            >
              <span className=" flex items-center mb-1 h-6 ">
                {" "}
                <PersonIcons colors={"#000"} />
              </span>
            </div>
            <span>
              <div>Профиль</div>
            </span>
          </NavLink>
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
};
export default NavMenu;
