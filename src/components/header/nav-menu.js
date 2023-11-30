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

const NavMenu = () => {
  const [dressInfo] = useContext(dressMainData);



  return (
    <nav
      className={`bg-white shadow-navMenuShadov  px-4 w-full rounded-t-xl md:hidden z-[101] h-full overscroll-none overflow-y-hidden`}
    >
      <ul className="flex items-center justify-between text-[10px] font-AeonikProMedium py-1 ">
        <li className="w-[72px] h-[56px]">
          <NavLink
            to={"/"}
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
            to={"/catalog"}
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
            to={"/delivery-points"}
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
            className="w-full h-full flex items-center justify-center text-center  "
          >
            {({ isActive }) =>
              isActive ? (
                <figure className="flex flex-col items-center justify-center mt-1">
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
                  <figcaption className="mt-2">
                    <p>Избранное</p>
                  </figcaption>{" "}
                </figure>
              ) : (
                <figure className=" flex flex-col items-center justify-center mt-1 ">
                  <img src={HeartImg} className={"w-5 h-5"} alt="heart" />
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
              localStorage.getItem("DressmeUserToken")
                ? "/profile/settings"
                : "/sign_in"
            }
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
