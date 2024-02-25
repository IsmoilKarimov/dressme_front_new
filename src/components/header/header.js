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
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [data, setData, , , page, setPage] = useContext(HomeMainDataContext);

  const [state, setState] = useState({
    getAllCardList: null,
    genderSelectId: 0,
    colorSelectId: null,
    categorySelectId: null,
    getRangeData: [],
    hamburgerMenu: false,
  });

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
    setData({ ...data, btnLoader: true });
    var params = new URLSearchParams();
    params.append("page", page);
    dressInfo?.mainRegionId &&
      !dressInfo?.mainSubRegionId &&
      params.append("region", dressInfo?.mainRegionId);
    dressInfo?.mainSubRegionId &&
      params.append("sub_region", dressInfo?.mainSubRegionId);
    dressInfo?.mainSearchName &&
      params.append("keywords", dressInfo?.mainSearchName);
    dressInfo?.mainCategoryId &&
      params.append("category", dressInfo?.mainCategoryId);
    dressInfo?.mainGenderId && params.append("gender", dressInfo?.mainGenderId);
    dressInfo?.mainColorHex && params.append("color", dressInfo?.mainColorHex);
    seasonId !== 5 && params.append("season", seasonId);
    dressInfo?.mainRangePrice[0] &&
      params.append("budget[from]", dressInfo?.mainRangePrice[0]);
    dressInfo?.mainRangePrice[1] &&
      params.append("budget[to]", dressInfo?.mainRangePrice[1]);

    fetch(`${url}?` + params)
      .then((res) => res.json())
      .then((res) => {
        setState({ ...state, getAllCardList: res });
        if (page === 1) {
          setData({
            ...data,
            getMainProductCard: res,
            products: res?.products?.data,
            loader: false,
            btnLoader: false,
          });
        } else {
          setData({
            ...data,
            getMainProductCard: res,
            products: [...data?.products, ...res?.products?.data],
            loader: false,
            btnLoader: false,
          });
        }
      })
      .catch((err) => {
        setData({
          ...data,
          loader: false,
          btnLoader: false,
        });
        console.log(err, "ERRORLIST");
      });
  };
  // console.log(state, "childData,---statein header");
  useEffect(() => {
    fetchGetAllData();
    // console.log("is run");
  }, [
    dressInfo?.mainCategoryId,
    dressInfo?.mainColorHex,
    dressInfo?.mainRangePrice,
    dressInfo?.mainGenderId,
    dressInfo?.mainSearchName,
    dressInfo?.mainRegionId,
    dressInfo?.mainSubRegionId,
    seasonId,
    page,
  ]);
  // console.log(
  //   dressInfo?.mainCategoryId, " dressInfo?.mainCategoryId",
  //   dressInfo?.mainColorId, " state?.colorSelectId",
  //   dressInfo?.mainRangePrice, " state?.getRangeData",
  //   dressInfo?.mainGenderId, " state?.genderSelectId",
  //   dressInfo?.mainSearchName, " dressInfo?.mainSearchName",
  //   dressInfo?.mainRegionId, " dressInfo?.mainRegionId",
  //   dressInfo?.mainSubRegionId, " dressInfo?.mainSubRegionId",
  //   seasonId, " seasonId,",);
  return (
    <header>
      <section>
        {locationWindow !== "/locations" ? (
          <div className="w-full">
            <article
              className={`block md:hidden relative z-[100]
              ${
                show
                  ? "visible duration-500 z-[25]"
                  : "visible duration-500 z-[25] translate-y-[-100%]"
              }`}
            >
              <MediumHeader />
            </article>
            <article
              className={`fixed top-0  w-full bg-white block
              ${
                show
                  ? "visible duration-500 z-[25]"
                  : "visible duration-500 z-[25] translate-y-[-100%]"
              }`}
            >
              <TopHeader />
              <MediumHeader stateData={state} setStateData={setState} />
              <div
                className={`${
                  scrollPost > -530 ? "" : "h-0 overflow-hidden"
                } visible duration-500`}
              >
                <NavbarBottomIndex
                // getGender={getGender}
                // getRangeList={getRangeList}
                // getCategoryList={getCategoryList}
                // getColorList={getColorList}
                // getAllCardList={state?.getAllCardList}
                // categoryProps={state?.categorySelectId}
                // colorProps={state?.colorSelectId}
                // getRangeProps={state?.getRangeData}
                // genderProps={state?.genderSelectId}
                />
              </div>
            </article>
          </div>
        ) : (
          <div
            className={`fixed top-0 z-[150] w-full block md:hidden bg-transparent`}
          >
            {!dressInfo?.yandexFullScreen && (
              <article className="overflow-hidden">
                <MediumHeader />
              </article>
            )}
          </div>
        )}

        <div
          className={`${
            locationWindow !== "/locations"
              ? "md:mt-[99px]"
              : "mt-[0] h-0 overflow-hidden"
          } `}
        >
          {!dressInfo?.yandexFullScreen && (
            <article
              className={`fixed bottom-0 w-full bg-white ${
                show
                  ? "visible duration-500 z-[101]"
                  : "visible duration-500 z-[101] translate-y-[100%]"
              } block md:hidden`}
            >
              <NavMenu stateData={state} setStateData={setState} />
            </article>
          )}
        </div>
      </section>
      <Outlet />
    </header>
  );
};
export default Header;
