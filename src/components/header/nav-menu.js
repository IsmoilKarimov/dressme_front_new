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
} from "../../assets/icons";
import { HeartImg } from "../../assets";
import { dressMainData } from "../../ContextHook/ContextMenu";
import Cookies from "js-cookie";
import { HomeMainDataContext } from "../../ContextHook/HomeMainData";

const NavMenu = ({ stateData, setStateData }) => {
  const [dressInfo] = useContext(dressMainData);
    const [, , wishList,] = useContext(HomeMainDataContext);

  return (
    <nav
      className={`bg-white shadow-navMenuShadov  px-4 w-full rounded-t-xl md:hidden z-[101] h-full overscroll-none overflow-y-hidden`}
    >
      <ul className="flex items-center justify-between text-[10px] font-AeonikProMedium py-1 ">
        <li className="w-[72px] h-[56px]">
          <NavLink
            to={"/"}
            onClick={() => setStateData({ ...stateData, hamburgerMenu: false })}
            className="w-full h-full flex items-center justify-center text-center"
          >
            {({ isActive }) =>
              isActive ? (
                <figure className="flex flex-col items-center justify-center">
                  <ActiveHomeIcons colors={dressInfo?.ColorSeason} />
                  <figcaption className="pt-[8px]">
                    <p>Главная</p>
                  </figcaption>{" "}
                </figure>
              ) : (
                <figure className=" flex flex-col items-center justify-center mt-1">
                  <HomeIcons colors={"#000"} />
                  <figcaption className="pt-[8px]">
                    <p>Главная</p>
                  </figcaption>
                </figure>
              )
            }
          </NavLink>
        </li>
        <li className="w-[72px] h-[56px] ">
          <NavLink
            to={"/categories"}
            onClick={() => setStateData({ ...stateData, hamburgerMenu: false })}
            className="w-full h-full flex items-center justify-center text-center"
          >
            {({ isActive }) =>
              isActive ? (
                <figure className="flex flex-col items-center justify-center mt-1">
                  <ActiveCotegoryIcons colors={dressInfo?.ColorSeason} />
                  <figcaption className="mt-2">
                    <p>Категории</p>
                  </figcaption>
                </figure>
              ) : (
                <figure className=" flex flex-col items-center justify-center mt-1">
                  <CotegoryIcons colors={"#000"} />
                  <figcaption className="mt-2">
                    <p>Категории</p>
                  </figcaption>
                </figure>
              )
            }
          </NavLink>
        </li>
        <li className="w-[72px] h-[56px] flex justify-center ">
          <NavLink
            to={"/locations"}
            onClick={() => setStateData({ ...stateData, hamburgerMenu: false })}
            className="w-full h-full flex items-center justify-center text-center  "
          >
            {({ isActive }) =>
              isActive ? (
                <figure className="flex flex-col items-center justify-center mt-1">
                  <MapNavMenuIcons colors={dressInfo?.ColorSeason} />
                  <figcaption className="mt-2">
                    <p>Карта</p>
                  </figcaption>
                </figure>
              ) : (
                <figure className=" flex flex-col items-center justify-center mt-1 ">
                  <MapIcons colors={"#000"} />
                  <figcaption className="mt-2">
                    <p>Карта</p>
                  </figcaption>
                </figure>
              )
            }
          </NavLink>
        </li>
        <li className="w-[72px] h-[56px] flex justify-center ">
          <NavLink
            to={"/favourites"}
            onClick={() => setStateData({ ...stateData, hamburgerMenu: false })}
            className="w-full h-full flex items-center justify-center text-center  "
          >
            {({ isActive }) =>
              isActive ? (
                <figure className="flex flex-col items-center justify-center mt-1">
                  <div className="relative">
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
                    <div
                      className={` ${
                        wishList?.length > 0 ? "flex" : "hidden"
                      } ${
                        wishList?.length > 9
                          ? "w-[16px] h-[16px] text-[10px] -top-[5px] -right-[9px] "
                          : wishList?.length > 99
                          ? "w-[18px] h-[18px] text-[8px] -top-[8px] -right-[13px]"
                          : wishList?.length > 999
                          ? "w-[20px] h-[20px] text-[8px] -top-[10px] -right-[14px]"
                          : "w-[12px] h-[12px] text-[10px] -top-[4px] -right-[6px]"
                      } items-center justify-center rounded-full  bg-white text-black text-center absolute  font-AeonikProMedium`}
                    >
                      {wishList?.length > 999 ? (
                        <div className="w-full h-full flex items-center justify-center">
                          {wishList?.length} <span>+</span>{" "}
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center mt-[2px]">
                          {wishList?.length}
                        </div>
                      )}
                    </div>
                  </div>
                  <figcaption className="mt-2">
                    <p>Избранное</p>
                  </figcaption>{" "}
                </figure>
              ) : (
                <figure className=" flex flex-col items-center justify-center mt-1 ">
                  <div className="relative">
                    <img src={HeartImg} className={"w-5 h-5"} alt="heart" />
                    <div
                      className={` ${
                        wishList?.length > 0 ? "flex" : "hidden"
                      } ${
                        wishList?.length > 9
                          ? "w-[16px] h-[16px] text-[10px] -top-[5px] -right-[9px] "
                          : wishList?.length > 99
                          ? "w-[18px] h-[18px] text-[8px] -top-[8px] -right-[13px]"
                          : wishList?.length > 999
                          ? "w-[20px] h-[20px] text-[8px] -top-[10px] -right-[14px]"
                          : "w-[12px] h-[12px] text-[10px] -top-[4px] -right-[6px]"
                      } items-center justify-center rounded-full  bg-red-600 text-white text-center absolute  font-AeonikProMedium`}
                    >
                      {wishList?.length > 999 ? (
                        <div className="w-full h-full flex items-center justify-center">
                          {wishList?.length} <span>+</span>{" "}
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center mt-[2px]">
                          {wishList?.length}
                        </div>
                      )}
                    </div>
                  </div>
                  <figcaption className="mt-2">
                    <p>Избранное</p>
                  </figcaption>
                </figure>
              )
            }
          </NavLink>
        </li>
        <li className="w-[72px] h-[56px]">
          <NavLink
            to={
              Cookies.get("DressmeUserToken") ? "/profile/settings" : "/sign_in"
            }
            onClick={() => setStateData({ ...stateData, hamburgerMenu: false })}
            className="w-full h-full flex items-center justify-center text-center "
          >
            {({ isActive }) =>
              isActive ? (
                <figure className="flex flex-col items-center justify-center mt-1 ">
                  <ActivePersonIcons colors={dressInfo?.ColorSeason} />
                  <figcaption className="mt-1">
                    <p>Профиль</p>
                  </figcaption>{" "}
                </figure>
              ) : (
                <figure className=" flex flex-col items-center justify-center mt-1">
                  <PersonIcons colors={"#000"} />
                  <figcaption className="mt-1">
                    <p>Профиль</p>
                  </figcaption>
                </figure>
              )
            }
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;
