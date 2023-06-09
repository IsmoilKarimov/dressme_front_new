import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BasketIcons,
  CotegoryIcons,
  HeartLinkIcons,
  HomeIcons,
  PersonIcons,
} from "../../AssetsMain/icons";
import { ActivePersonImg, HeartImg } from "../../AssetsMain";

const NavMenu = () => {
  return (
    <div
      className={`bg-white shadow-navMenuShadov  px-4 w-full rounded-t-xl md:hidden z-[55] h-full overscroll-none overflow-y-hidden`}
    >
      <ul className="flex items-center justify-between text-[10px] font-AeonikProMedium py-1 ">
        {/* {menus.map((menu, index) => ( */}
        <li className="w-[72px] h-[56px]">
          <NavLink
            to={"/"}
            className="w-full h-full flex items-center justify-center text-center pt-2 "
          >
            {({ isActive }) =>
              isActive ? (
                <span className="flex flex-col items-center justify-center ">
                  <span className=" flex items-center h-6 ">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="#007DCA"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.23075 2.58494L2.87825 7.67244C2.16325 8.24078 1.70492 9.44161 1.86075 10.3399L3.07992 17.6366C3.29992 18.9383 4.54658 19.9924 5.86658 19.9924H16.1333C17.4441 19.9924 18.6999 18.9291 18.9199 17.6366L20.1391 10.3399C20.2858 9.44161 19.8274 8.24078 19.1216 7.67244L12.7691 2.59411C11.7883 1.80578 10.2024 1.80578 9.23075 2.58494Z"
                        stroke="#007DCA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11 16.5V13.75"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="">
                    <span>Главная</span>
                  </span>{" "}
                </span>
              ) : (
                <span className=" flex flex-col items-center justify-center ">
                  <span className="h-6">
                    <HomeIcons colors={"#000"} />
                  </span>
                  <span className="">
                    <span>Главная</span>
                  </span>
                </span>
              )
            }
          </NavLink>
        </li>
        <li className="w-[72px] h-[56px]">
          <NavLink
            to={"/katolog"}
            className="w-full h-full flex items-center justify-center text-center pt-2 "
          >
            {({ isActive }) =>
              isActive ? (
                <span className="flex flex-col items-center justify-center  ">
                  <span className=" flex items-center h-6 ">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="#007DCA"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 7.5H5.25C6.75 7.5 7.5 6.75 7.5 5.25V3.75C7.5 2.25 6.75 1.5 5.25 1.5H3.75C2.25 1.5 1.5 2.25 1.5 3.75V5.25C1.5 6.75 2.25 7.5 3.75 7.5Z"
                        stroke={"#007DCA"}
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.75 7.5H14.25C15.75 7.5 16.5 6.75 16.5 5.25V3.75C16.5 2.25 15.75 1.5 14.25 1.5H12.75C11.25 1.5 10.5 2.25 10.5 3.75V5.25C10.5 6.75 11.25 7.5 12.75 7.5Z"
                        stroke={"#007DCA"}
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.75 16.5H14.25C15.75 16.5 16.5 15.75 16.5 14.25V12.75C16.5 11.25 15.75 10.5 14.25 10.5H12.75C11.25 10.5 10.5 11.25 10.5 12.75V14.25C10.5 15.75 11.25 16.5 12.75 16.5Z"
                        stroke={"#007DCA"}
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.75 16.5H5.25C6.75 16.5 7.5 15.75 7.5 14.25V12.75C7.5 11.25 6.75 10.5 5.25 10.5H3.75C2.25 10.5 1.5 11.25 1.5 12.75V14.25C1.5 15.75 2.25 16.5 3.75 16.5Z"
                        stroke={"#007DCA"}
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="">
                    <span>Каталог</span>
                  </span>{" "}
                </span>
              ) : (
                <span className=" flex flex-col items-center justify-center ">
                  <span className="h-6 ">
                    <CotegoryIcons colors={"#000"} />
                  </span>
                  <span className="">
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
            className="w-full h-full flex items-center justify-center text-center pt-2 "
          >
            {({ isActive }) =>
              isActive ? (
                <span className="flex flex-col items-center justify-center mt-[-2px]">
                  <div
                    className={`relative h-full flex items-center mx-auto cursor-pointer `}
                  >
                    <span className=" flex items-center mb-1 h-6 ">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.875 7.03084V6.14167C6.875 4.07917 8.53417 2.05334 10.5967 1.86084C13.0533 1.62251 15.125 3.55667 15.125 5.96751V7.23251"
                          stroke="#007DCA"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.25009 20.1667H13.7501C17.4351 20.1667 18.0951 18.6909 18.2876 16.8942L18.9751 11.3942C19.2226 9.15754 18.5809 7.33337 14.6668 7.33337H7.33342C3.41925 7.33337 2.77759 9.15754 3.02509 11.3942L3.71259 16.8942C3.90509 18.6909 4.56509 20.1667 8.25009 20.1667Z"
                          fill="#007DCA"
                          stroke="#007DCA"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.2043 11H14.2125"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.78655 11H7.79478"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
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
                </span>
              ) : (
                <span className=" flex flex-col items-center justify-center mt-[-4px]">
                  <div
                    className={`relative h-full flex items-center mx-auto cursor-pointer `}
                  >
                    <span className=" flex items-center mb-1 h-6 ">
                      <BasketIcons colors={"#000"} />
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
                </span>
              )
            }
          </NavLink>

          {/* <NavLink
            to={"/basket-check-out"}
            className="w-full flex flex-col text-center pt-2"
          >
            <div
              className={`relative h-full flex items-center mx-auto cursor-pointer `}
            >
              <span className=" flex items-center mb-1 h-6 ">
                <BasketIcons colors={"#000"} />
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
          </NavLink> */}
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
            className="w-full h-full flex items-center justify-center text-center pt-2 "
          >
            {({ isActive }) =>
              isActive ? (
                <span className="flex flex-col items-center justify-center mt-[-2px]">
                  <span className=" flex items-center mb-1 h-6 ">
                    {" "}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="#007DCA"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6235 14.5505 14.0673 10.986 14.0673Z"
                        fill="#007DCA"
                        stroke="#007DCA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.9861 11.0054C13.3126 11.0054 15.1984 9.11883 15.1984 6.79224C15.1984 4.46565 13.3126 2.57994 10.9861 2.57994C8.65946 2.57994 6.77285 4.46565 6.77285 6.79224C6.76502 9.11097 8.63851 10.9976 10.9564 11.0054H10.9861Z"
                        fill="#007DCA"
                        stroke="#007DCA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                  </span>
                  <span className="mt-[6px]">
                    <span>Профиль</span>
                  </span>{" "}
                </span>
              ) : (
                <span className=" flex flex-col items-center justify-center mt-[-4px]">
                  <span className="">
                    <PersonIcons colors={"#000"} />
                  </span>
                  <span className="mt-[6px]">
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
