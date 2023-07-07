import React, { useEffect, useState, useContext } from "react";
import TopHeader from "./top";
import MediumHeader from "./medium";
import NavMenu from "./nav-menu";
import "./header.css";
import { Outlet, useLocation } from "react-router-dom";
import NavbarBottomIndex from "./NavbarBottomIndex";
import { dressMainData } from "../../Hook/ContextMenu";

const Header = () => {
  const [dressInfo] = useContext(dressMainData);

  // ----------------NavBar----------------
  const [show, setShow] = useState(true);
  const [scrollPost, setscrollPost] = useState(0);

  // ----------------NavMenu----------------
  const [ShowNavMenu, setShowNavMenu] = useState(true);
  const [ScrollPostNavMenu, setScrollPostNavMenu] = useState(0);

  // ----------------NavBar----------------
  const handleScroll = () => {
    setscrollPost(document.body.getBoundingClientRect().top);
    if (parseInt(Math.abs(scrollPost)) > 300) {
      setShow(document.body.getBoundingClientRect().top > scrollPost);
    }
  };

  // ----------------NavMenu----------------
  const handleScrollNavMenu = () => {
    setScrollPostNavMenu(document.body.getBoundingClientRect().top);
    setShowNavMenu(
      document.body.getBoundingClientRect().top < ScrollPostNavMenu
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollNavMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollNavMenu);
    };
  }, [show, scrollPost, ShowNavMenu, ScrollPostNavMenu]);

  const location = useLocation();
  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);
  return (
    <div>
      <header>
        {locationWindow !== "/delivery-points" ? (
          <div className="w-full ">
            <div className={`ss:block md:hidden`}>
              <MediumHeader />
            </div>
            <div
              className={`fixed top-0 w-full bg-white   ${
                show
                  ? "visible duration-500 z-30"
                  : "visible duration-500 z-30 translate-y-[-100%]"
              } hidden md:block`}
            >
              <TopHeader />
              <MediumHeader />
            </div>
          </div>
        ) : (
          <div
            className={`fixed top-0 z-[150] w-full block md:hidden bg-transparent`}
          >
            {!dressInfo?.yandexFullScreen && (
              <div className="overflow-hidden">
                <MediumHeader />
              </div>
            )}
          </div>
        )}

        <div
          className={`${
            locationWindow !== "/delivery-points"
              ? "md:mt-[99px]"
              : "mt-[0] h-0 overflow-hidden"
          } `}
        >
          <div
            className={`${
              locationWindow !== "/delivery-points" ? "block" : "hidden mt-[0]"
            } `}
          >
            <NavbarBottomIndex />
          </div>
          {!dressInfo?.yandexFullScreen && (
            <div
              className={`fixed bottom-0 w-full bg-white ${
                show
                  ? "visible duration-500 z-[56]"
                  : "visible duration-500 z-[56] translate-y-[100%]"
              } block md:hidden`}
            >
              <NavMenu />
            </div>
          )}
        </div>
        {/* <Breadcrumbs /> */}
      </header>
      <Outlet />
    </div>
  );
};
export default Header;
