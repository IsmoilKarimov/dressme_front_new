import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BasketIcons,
  CotegoryIcons,
  HeartLinkIcons,
  HomeIcons,
  PersonIcons,
} from "../../AssetsMain/icons";
import { HeartImg } from "../../AssetsMain";

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
        <li className="w-[72px] h-[56px] flex  justify-center ">
          <NavLink
            to={"/favourites"}
            className="w-full h-full flex items-center justify-center text-center pt-2 "
          >
            {({ isActive }) =>
              isActive ? (
                <span className="flex flex-col items-center justify-center mt-[-2px]">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 15 14"
                    fill="#D50000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.41337 12.8733C8.18671 12.9533 7.81337 12.9533 7.58671 12.8733C5.65337 12.2133 1.33337 9.45998 1.33337 4.79332C1.33337 2.73332 2.99337 1.06665 5.04004 1.06665C6.25337 1.06665 7.32671 1.65332 8.00004 2.55998C8.67337 1.65332 9.75337 1.06665 10.96 1.06665C13.0067 1.06665 14.6667 2.73332 14.6667 4.79332C14.6667 9.45998 10.3467 12.2133 8.41337 12.8733Z"
                      stroke="#D50000"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="mt-[6px]">
                    <span>Избранное</span>
                  </span>{" "}
                </span>
              ) : (
                <span className=" flex flex-col items-center justify-center mt-[-4px]">
                  <span className="">
                    <img src={HeartImg} className={"w-5 h-5"} alt="heart" />
                  </span>
                  <span className="mt-[6px]">
                    <span>Избранное</span>
                  </span>
                </span>
              )
            }
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
