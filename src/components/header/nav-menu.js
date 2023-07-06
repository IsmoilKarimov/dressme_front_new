import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  ActiveCotegoryIcons,
  ActiveHomeIcons,
  ActivePersonIcons,
  CotegoryIcons,
  HomeIcons,
  MapIcons,
  MapNavMenuIcons,
  PersonIcons,
} from "../../AssetsMain/icons";
import { HeartImg } from "../../AssetsMain";
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
                    <span>Категории</span>
                  </span>{" "}
                </span>
              ) : (
                <span className=" flex flex-col items-center justify-center mt-1 ">
                  <span className="">
                    <CotegoryIcons colors={"#000"} />
                  </span>
                  <span className="mt-2">
                    <span>Категории</span>
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
                  <MapNavMenuIcons colors={IconsColor} />
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

        <li className="w-[72px] h-[56px] flex  justify-center ">
          <NavLink
            to={"/favourites"}
            className="w-full h-full flex items-center justify-center text-center  "
          >
            {({ isActive }) =>
              isActive ? (
                <span className="flex flex-col items-center justify-center mt-1">
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
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                  <span className="mt-2">
                    <span>Избранное</span>
                  </span>{" "}
                </span>
              ) : (
                <span className=" flex flex-col items-center justify-center mt-1 ">
                  <span className="">
                    <img src={HeartImg} className={"w-5 h-5"} alt="heart" />
                  </span>
                  <span className="mt-2">
                    <span>Избранное</span>
                  </span>
                </span>
              )
            }
          </NavLink>
        </li>

        <li className="w-[72px] h-[56px] ">
          <NavLink
            to={
              localStorage.getItem("dressMeLogin")
                ? "/profile/settings"
                : "/sign_in"
            }
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
      </ul>
    </div>
  );
};
export default NavMenu;
