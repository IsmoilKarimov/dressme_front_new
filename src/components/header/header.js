import React, { useEffect, useState, useContext } from "react";
import TopHeader from "./top";
import MediumHeader from "./medium";
import NavMenu from "./nav-menu";
import "./header.css";
import { Outlet, useLocation } from "react-router-dom";
import NavbarBottomIndex from "./NavbarBottomIndex";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { HomeMainDataContext } from "../../ContextHook/HomeMainData";

const Header = () => {
  const [dressInfo] = useContext(dressMainData);
  const [data, setData] = useContext(HomeMainDataContext);

  const [state, setState] = useState({
    getAllCardList: null,
    genderSelectId: null,
    colorSelectId: null,
    categorySelectId: null,
    getRangeData: [],
  })

  function getGender(childData) {
    console.log(childData, "childData--header");
    setState({ ...state, genderSelectId: childData })
  }
  function getRangeList(childData) {
    console.log(childData, "childData--getRangeList");
    setState({ ...state, getRangeData: childData })
  }
  function getCategoryList(childData) {
    console.log(childData, "childData--getCategoryList");
    setState({ ...state, categorySelectId: childData })
  }
  function getColorList(childData) {
    setState({ ...state, colorSelectId: childData })
    console.log(childData, "childData--getColorList");
  }

  // ----------------NavBar----------------
  const [show, setShow] = useState(true);
  const [scrollPost, setscrollPost] = useState(0);

  // ----------------NavMenu----------------
  const [ShowNavMenu, setShowNavMenu] = useState(true);
  const [ScrollPostNavMenu, setScrollPostNavMenu] = useState(0);

  // ----------------NavBar----------------
  const handleScroll = () => {
    setscrollPost(document.body.getBoundingClientRect().top);
    if (parseInt(Math.abs(scrollPost)) > 500) {
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

  const url = "https://api.dressme.uz/api/main";

  // ------------GET METHOD Main data -----------------\
  const typeFilter = String(dressInfo?.type)?.split("");
  const seasonId = Number(typeFilter?.shift());
  const fetchGetAllData = () => {
    var params = new URLSearchParams();
    dressInfo?.mainRegionId && params.append("region", dressInfo?.mainRegionId);
    dressInfo?.mainSubRegionId &&
      params.append("sub_region", dressInfo?.mainSubRegionId);
    dressInfo?.mainSearchName &&
      params.append("keywords", dressInfo?.mainSearchName);
    state?.categorySelectId &&
      params.append("category", state?.categorySelectId);
    state?.genderSelectId && params.append("gender", state?.genderSelectId);
    state?.colorSelectId?.length && params.append("color", state?.colorSelectId);
    seasonId !== 5 && params.append("season", seasonId);
    state?.getRangeData[0] && params.append("budget[from]", state?.getRangeData[0]);
    state?.getRangeData[1] && params.append("budget[to]", state?.getRangeData[1]);

    fetch(`${url}?` + params)
      .then((res) => res.json())
      .then((res) => {
        setState({ ...state, getAllCardList: res });
        setData({ getMainProductCard: res });
      })
      .catch((err) => console.log(err, "ERRORLIST"));
  };
  console.log(state, "childData,---statein header");
  useEffect(() => {
    fetchGetAllData();
  }, [
    state?.categorySelectId,
    state?.colorSelectId,
    state?.getRangeData,
    state?.genderSelectId,
    dressInfo?.mainSearchName,
    dressInfo?.mainRegionId,
    dressInfo?.mainSubRegionId,
    seasonId,
  ]);
  return (
    <header>
      <section>
        {locationWindow !== "/delivery-points" ? (
          <div className="w-full">
            <article className={`block md:hidden relative z-[100]
              ${show
                ? "visible duration-500 z-[25]"
                : "visible duration-500 z-[25] translate-y-[-100%]"
              }`}
            >
              <MediumHeader />
            </article>
            <article className={`fixed top-0  w-full bg-white block 
              ${show
                ? "visible duration-500 z-[25]"
                : "visible duration-500 z-[25] translate-y-[-100%]"
              }`
            }
            >
              <TopHeader />
              <MediumHeader />
              <div className={`${scrollPost > -530 ? "" : "h-0 overflow-hidden"} visible duration-500`}>
                <NavbarBottomIndex
                  getGender={getGender}
                  getRangeList={getRangeList}
                  getCategoryList={getCategoryList}
                  getColorList={getColorList}
                  getAllCardList={state?.getAllCardList}
                /></div>
            </article>

          </div>
        ) : (
          <div className={`fixed top-0 z-[150] w-full block md:hidden bg-transparent`}>
            {!dressInfo?.yandexFullScreen && (
              <article className="overflow-hidden">
                <MediumHeader />
              </article>
            )}
          </div>
        )}

        <div className={`${locationWindow !== "/delivery-points"
          ? "md:mt-[99px]"
          : "mt-[0] h-0 overflow-hidden"
          } `}
        >
          {!dressInfo?.yandexFullScreen && (
            <article className={`fixed bottom-0 w-full bg-white ${show
              ? "visible duration-500 z-[101]"
              : "visible duration-500 z-[101] translate-y-[100%]"
              } block md:hidden`}
            >
              <NavMenu />
            </article>
          )}
        </div>
      </section>
      <Outlet />
    </header>
  );
};
export default Header;
