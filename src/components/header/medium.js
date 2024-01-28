import React, { useState, useContext, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { Popover } from "antd";
import {
  ActivePersonIcons,
  ArrowPrevousNext,
  ArrowTopIcons,
  ChildGenIcon,
  CommentIcons,
  CotegoryIcons,
  CotegoryMenuIcons,
  HouseStatisticIcons,
  LocationIcons,
  ManGenIcons,
  MapIcons,
  MarketIcons,
  MenuCloseIcons,
  MenuOpenIcons,
  PersonIcons,
  PhoneIcons,
  SearchIcons,
  VolumeIcons,
  WomanGenIcons,
} from "../../assets/icons";
import {
  BrandAutumm,
  BrandSpring,
  BrandSummer,
  BrandWinter,
  springSeason,
  summerSeason,
  winterSeason,
  autummSeason,
  UzbekFlag,
  HeartImg,
  AllSeason,
  AllSeasonDesktop,
  allBrandDesktop,
  img4,
  img5,
  img6,
  img7,
  img8,
} from "../../assets";
import RegionsList from "../../ContextHook/RegionsList";
import Cookies from "js-cookie";
import { MdClose } from "react-icons/md";
import { HomeMainDataContext } from "../../ContextHook/HomeMainData";

const MediumHeader = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [data, setData] = useContext(HomeMainDataContext);
  const [searchMarketName, setSearchMarketName] = useState();
  const [regionsList, setRegionsList] = useState(false);
  const toggleRegionsShow = useCallback(() => setRegionsList(false), []);

  const [state, setState] = useState({
    hamburgerMenu: false,
    toggle: false,
    genderActive: true,
    getAllCardList: null,
  });

  useEffect(() => {
    if (state?.hamburgerMenu || regionsList) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [state?.hamburgerMenu || regionsList]);

  // -----------------------------------------------------
  const [scrollPost, setscrollPost] = useState(0);
  const handleScroll = () => {
    setscrollPost(document.body.getBoundingClientRect().top);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPost]);

  useEffect(() => {
    if (dressInfo?.openCatologId) {
      setDressInfo({ ...dressInfo, openCatologId: false });
    }
  }, [scrollPost]);

  const SeasonTypeArray = [
    { id: 5555, type: "", icons: AllSeasonDesktop },
    { id: 1111, type: "Лето", icons: summerSeason },
    { id: 2222, type: "Осень", icons: autummSeason },
    { id: 3333, type: "Зима", icons: winterSeason },
    { id: 4444, type: "Весна", icons: springSeason },
  ];
  // console.log(dressInfo?.type, "dressInfo?.type");
  const SeasonTypeArrayMobile = [
    { id: 5555, type: "Все", icons: AllSeason },
    { id: 1111, type: "Лето", icons: summerSeason },
    { id: 2222, type: "Осень", icons: autummSeason },
    { id: 3333, type: "Зима", icons: winterSeason },
    { id: 4444, type: "Весна", icons: springSeason },
  ];

  const BrandTypeArray = [
    { id: 5555, type: "Все", icons: allBrandDesktop },
    { id: 1111, type: "Лето", icons: BrandSummer },
    { id: 2222, type: "Осень", icons: BrandAutumm },
    { id: 3333, type: "Зима", icons: BrandWinter },
    { id: 4444, type: "Весна", icons: BrandSpring },
  ];

  const [genderType, setGenderType] = useState([
    {
      id: 1,
      action: true,
      name: "Все",
      icon: <CotegoryMenuIcons />,
    },
    {
      id: 2,
      action: false,
      name: "",
      icon: <ManGenIcons />,
    },
    {
      id: 3,
      action: false,
      name: "",
      icon: <WomanGenIcons />,
    },
    {
      id: 4,
      action: false,
      name: "",
      icon: <ChildGenIcon />,
    },
  ]);

  const handleGenderDataCheck = (value) => {
    setGenderType((data) => {
      return data.map((e) => {
        if (e.id == value) {
          return { ...e, action: true };
        } else return { ...e, action: false };
      });
    });
  };

  //------------------------------------------------------------------------------------------------
  const toggleHamburger = () => {
    setState({ ...state, hamburgerMenu: !state.hamburgerMenu });
  };

  // ----------------Wear state management----------------------------
  const [openwear, setOpenwear] = useState(false);
  const handleOpenChangeWear = (newOpen) => {
    setOpenwear(newOpen);
  };

  const handleSeason = (id) => {
    setDressInfo({ ...dressInfo, type: id });
    setOpenwear(false);
  };

  const contentWear = (
    <section className="ss:w-fit md:w-[120px] h-fit m-0 p-0  data1">
      {SeasonTypeArray.map((value) => {
        return (
          <article
            key={value?.id}
            className="w-full h-[42px] md:flex items-center hidden  md:pl-3 justify-start not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor"
            onClick={() => handleSeason(value.id)}
          >
            <figure className={`${value?.id !== 5555 ? "w-5" : ""} `}>
              <img src={value?.icons} alt="" className="object-cover w-full" />
            </figure>
            {value?.type && (
              <article
                className={`ml-2 md:ml-3 flex font-AeonikProMedium text-base text-black not-italic ${dressInfo?.TextHoverSeason}`}
              >
                {value?.type}
              </article>
            )}
          </article>
        );
      })}
      {SeasonTypeArrayMobile.map((value) => {
        return (
          <article
            key={value?.id}
            className="w-full h-[42px] flex items-center  md:hidden md:justify-center md:pl-3 justify-start not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor"
            onClick={() => handleSeason(value.id)}
          >
            <figure className="mr-1 md:mr-3 w-6 ">
              <img src={value?.icons} alt="" className="object-cover w-full" />
            </figure>
            <article
              className={`flex font-AeonikProMedium text-base text-black not-italic ${dressInfo?.TextHoverSeason}`}
            >
              {value?.type}
            </article>
          </article>
        );
      })}
    </section>
  );

  // Location pathname
  const location = useLocation();
  const navigate = useNavigate();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);

  const handleChange = (event) => {
    setSearchMarketName(event.target.value);
  };

  const handleClear = () => {
    setSearchMarketName("");
    setDressInfo({ ...dressInfo, mainSearchName: null });
  };

  function getSearchClick() {
    setDressInfo({ ...dressInfo, mainSearchName: searchMarketName });
  }
  const _handleKeyDownSearch = (event) => {
    if (event.key === "Enter") {
      setDressInfo({ ...dressInfo, mainSearchName: searchMarketName });
    }
  };
  const categoryModalArray = [
    { id: 0, img: img4, type: "Головные уборы" },
    { id: 1, img: img5, type: "Верхняя одежда" },
    { id: 2, img: img6, type: "Нижняя одежда" },
    { id: 3, img: img7, type: "Обувь" },
    { id: 4, img: img8, type: "Аксессуары" },
  ];

  const goCatalogId = (id) => {
    navigate(`/catalog/:${id}`);
  };

  return (
    <nav className="flex flex-col justify-center items-center m-0 p-0 box-border">
      <div
        onClick={() => setRegionsList(false)}
        className={`fixed inset-0 z-[230] cursor-pointer duration-200 w-full h-[100vh] bg-black opacity-50
         ${regionsList ? "" : "hidden"}`}
      ></div>
      {regionsList && (
        <div
          className={`max-w-[600px]    w-full fixed duration-500 z-[231]  h-fit flex items-center  justify-center mx-auto
        ${
          regionsList
            ? " bottom-[64px] md:flex flex-col z-[232]"
            : "bottom-[-1500px] z-[-10]"
        }
        `}
        >
          <RegionsList onClick={toggleRegionsShow} />
        </div>
      )}
      {dressInfo?.openCatologId && (
        <div
          onClick={() => setDressInfo({ ...dressInfo, openCatologId: false })}
          className="fixed inset-0 z-[112] w-[100%] h-[100vh] scroll-m-0"
        ></div>
      )}
      <article
        className={`fixed top-[235px] z-[113] left-[52.9%] right-1/2 overflow-hidden translate-x-[-50%] translate-y-[-50%] inset-0 w-fit h-fit shadow-modalCategoryShadow transform tras ${
          dressInfo?.openCatologId ? "" : "hidden"
        }`}
      >
        <div className="flex justify-center items-center z-[120]">
          <div className="w-[675px] flex flex-col shadow-modalCategoryShadow bg-white rounded-lg p-2">
            <button
              className="text-xl place-self-end pr-1 pt-1 mb-2"
              onClick={() =>
                setDressInfo({ ...dressInfo, openCatologId: false })
              }
            >
              <MenuCloseIcons />
            </button>
            <div className="ss:w-fit md:w-[650px] h-[210px] m-0 p-2 pb-4 pt-4">
              <div className="w-full flex items-start flex-wrap gap-y-6">
                {data?.getMainProductCard?.categories?.map((data, i) => {
                  return (
                    <article
                      key={data?.id}
                      onClick={() =>
                        setDressInfo({ ...dressInfo, openCatologId: false })
                      }
                      className="w-1/5 flex items-center justify-center "
                    >
                      <figure
                        onClick={() => goCatalogId(data?.id)}
                        className="group cursor-pointer"
                      >
                        <div className="group-hover:border-black transition duration-300 w-[120px] h-[120px] border border-categoryModalBorderColor bg-categoryModalBgColor flex items-center justify-center rounded-xl">
                          <img src={data?.url_photo} alt="url_photo" />
                        </div>
                        <figcaption className="group-hover:text-black transition duration-300 text-center mt-2 text-setTexOpacity text-sm">
                          {data?.name_ru}
                        </figcaption>
                      </figure>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="max-w-[1280px] w-[100%] block md:flex px-3 md:px-0 md:py-0 justify-center  bg-yandexNavbar backdrop-blur-sm items-center m-auto ">
        {locationWindow !== "/allcomments" ? (
          <div className="relative">
            {/* Starting of Full Screen page section */}
            <section className="w-full justify-center items-center py-3 overscroll-none overflow-y-hidden ">
              <div className=" w-full flex items-center ss:w-full md:w-fit justify-between ">
                {/* Menu section */}
                {locationWindow !== "/delivery-points" ? (
                  <article
                    onClick={toggleHamburger}
                    className={`flex items-center justify-center bg-btnBgColor border border-searchBgColor w-12 h-12 cursor-pointer md:hidden rounded-xl`}
                  >
                    {state?.hamburgerMenu ? (
                      <figure>
                        <MenuCloseIcons colors={"#000"} />
                      </figure>
                    ) : (
                      <figure>
                        <MenuOpenIcons />
                      </figure>
                    )}
                  </article>
                ) : (
                  <article
                    onClick={() => {
                      navigate(-1);
                    }}
                    className={`flex items-center justify-center bg-btnBgColor border border-searchBgColor w-12 h-12 cursor-pointer md:hidden rounded-xl`}
                  >
                    <span>
                      <ArrowPrevousNext />
                    </span>
                  </article>
                )}

                {/* Logo section */}
                <NavLink
                  to="/"
                  className="flex justify-center items-center select-none rounded-xl h-[48px] ss:w-[calc(100%-96px)] ss:p-2 ll:p-1 md:p-0 md:w-[155px] ss:ml-2 md:ml-[0px]  ss:bg-btnBgColor md:bg-transparent"
                >
                  {BrandTypeArray.filter(
                    (data) => data.id === dressInfo.type
                  ).map((data) => {
                    return (
                      <img
                        key={data?.id}
                        className="h-full"
                        src={data?.icons}
                        alt="logo"
                      />
                    );
                  })}
                </NavLink>

                {/* Voice section */}
                <div
                  className={` bg-btnBgColor w-11 h-11 ml-[25px] rounded-xl cursor-pointer hidden items-center justify-center md:flex`}
                >
                  <span className="w-[22px]">
                    <VolumeIcons colors={dressInfo?.ColorSeason} />
                  </span>
                </div>

                {/* Weather section */}
                <article className="w-12 h-12 md:w-[120px]  md:h-11 bg-btnBgColor border border-searchBgColor rounded-xl ml-2">
                  <div className="w-full h-full ">
                    <Popover
                      className=" w-full h-full flex items-center justify-center rounded-lg cursor-pointer  md:px-2 md:gap-x-[5px] "
                      open={openwear}
                      onOpenChange={handleOpenChangeWear}
                      trigger="click"
                      options={["Hide"]}
                      placement="bottomRight"
                      content={contentWear}
                    >
                      {SeasonTypeArray.filter(
                        (e) => e.id === dressInfo.type
                      ).map((data) => {
                        // console.log(data, "weather-data");
                        return (
                          <figure
                            key={data?.id}
                            className="w-full h-full md:flex hidden items-center justify-center select-none cursor-pointer "
                          >
                            <img
                              src={data?.icons}
                              alt="weather"
                              className=" "
                            />
                            {data?.type && (
                              <figcaption className=" ml-[10px] font-AeonikProMedium  flex items-center text-[15px] ">
                                {data?.type}
                              </figcaption>
                            )}
                          </figure>
                        );
                      })}
                      {SeasonTypeArrayMobile.filter(
                        (e) => e.id === dressInfo.type
                      ).map((data) => {
                        return (
                          <figure
                            key={data?.id}
                            className="w-full h-full md:hidden flex items-center justify-center select-none cursor-pointer  "
                          >
                            <img
                              src={data?.icons}
                              alt="weather"
                              className="mr-0 "
                            />
                          </figure>
                        );
                      })}
                    </Popover>
                  </div>
                </article>

                {/* Searching section */}
                <article className="items-center justify-center rounded-xl font-AeonikProMedium h-[44px] md:border-transparent md:w-[676px] ml-2 ss:hidden md:flex">
                  {/* Catalog section */}
                  <button
                    className={`items-center left-20 ${dressInfo?.BtnOpacitySeason} justify-center px-5 gap-x-[10px] h-[44px] rounded-l-xl cursor-pointer hidden md:flex`}
                    onClick={() =>
                      setDressInfo({
                        ...dressInfo,
                        openCatologId: !dressInfo?.openCatologId,
                      })
                    }
                  >
                    <span>
                      <CotegoryIcons colors={dressInfo?.ColorSeason} />
                    </span>
                    <span
                      className={`not-italic font-AeonikProMedium text-sm leading-4 `}
                    >
                      Категория
                    </span>
                  </button>

                  <span className="flex md:hidden">
                    <SearchIcons />
                  </span>
                  <div className="w-full flex items-center relative">
                    <input
                      type="text"
                      name="search"
                      autoComplete="search"
                      placeholder="Поиск продуктов или брендов"
                      className="bg-transparent w-full px-3 h-[44px] text-sm border border-transparent md:border-searchBgColor placeholder:font-AeonikProRegular"
                      value={searchMarketName}
                      onChange={handleChange}
                      onKeyDown={_handleKeyDownSearch}
                    />
                    {searchMarketName && (
                      <button
                        onClick={handleClear}
                        className="absolute right-2 "
                        type="button"
                      >
                        <MdClose size={20} color={"#a1a1a1"} />
                      </button>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => getSearchClick()}
                    className="bg-searchBgColor border border-searchBgColor w-[100px]  h-[44px] items-center justify-center rounded-r-xl  hidden md:flex -ml-[2px]"
                  >
                    <span>
                      <SearchIcons />
                    </span>
                  </button>
                </article>

                {/* Line border */}
                <article className="line h-5 border-x-[1px] text-textColor ss:hidden md:block mx-3"></article>

                {/* Map section */}
                <NavLink
                  to="/delivery-points"
                  className="items-center justify-center bg-btnBgColor rounded-xl md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex"
                >
                  <span className="pr-[6px]">
                    <MapIcons colors={"#000"} />
                  </span>
                  <p className="font-AeonikProMedium text-sm">Карта</p>
                </NavLink>

                {/* Line border */}
                <p className="line h-5 border-x-[1px] text-textColor ss:hidden md:block mx-3"></p>

                {/* User section */}
                {Cookies.get("DressmeUserToken") ? (
                  <NavLink
                    to="/profile/edit"
                    className=" bg-btnBgColor rounded-xl items-center justify-center w-11 h-11 mr-2 hidden md:flex"
                  >
                    {({ isActive }) =>
                      isActive ? (
                        <span>
                          <ActivePersonIcons colors={dressInfo?.ColorSeason} />
                        </span>
                      ) : (
                        <span>
                          <PersonIcons colors={"#000"} />
                        </span>
                      )
                    }
                  </NavLink>
                ) : (
                  <NavLink
                    to="/sign_in"
                    className=" bg-btnBgColor rounded-xl items-center justify-center w-11 h-11 mr-2 hidden md:flex"
                  >
                    <span>
                      <PersonIcons colors={"#000"} />
                    </span>
                  </NavLink>
                )}

                {/* Heart section */}
                <NavLink
                  to="/favourites"
                  className={
                    "bg-btnBgColor rounded-xl  items-center justify-center w-11 h-11 mr-2 md:mr-0 hidden md:flex"
                  }
                >
                  {({ isActive }) =>
                    isActive ? (
                      <span>
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
                        </svg>
                      </span>
                    ) : (
                      <figure>
                        <img src={HeartImg} className={"w-5 h-5"} alt="heart" />
                      </figure>
                    )
                  }
                </NavLink>
              </div>
            </section>
            {/*Starting of Opened Hamburger Menu section */}
            <section
              className={`max-w-[440px] w-[100%] z-50 fixed bg-white top-[70px] left-0 right-0 bottom-0 h-screen pb-[140px] px-3 ${
                state?.hamburgerMenu
                  ? " flex flex-col ease-linear duration-500 overscroll-none"
                  : "left-[-500px] lg:left-[-1000px] ease-linear duration-500"
              }`}
            >
              <div className={`w-full h-fit flex flex-wrap `}>
                {/* Gender selection for Mobile */}
                <section className="w-full flex items-center border border-searchBgColor rounded-xl my-3 bg-btnBgColor md:mt-0">
                  {genderType.map((data) => {
                    return (
                      <div
                        key={data.id}
                        className="w-full flex justify-center items-center h-12 rounded-xl"
                      >
                        <button
                          key={data.id}
                          onClick={() => handleGenderDataCheck(data.id)}
                          className={`w-full flex items-center justify-center h-12 text-[15px] text-center ${
                            !data.name ? "px-5" : "px-7"
                          } font-AeonikProRegular ${
                            data.action
                              ? `{ bg-white border w-full h-[98%] my-auto mx-auto border-searchBgColor rounded-xl `
                              : ""
                          } `}
                        >
                          <span>{data.icon}</span>
                          {data.name ? (
                            <p className="pl-2 text-borderWinter">
                              {data.name}
                            </p>
                          ) : (
                            ""
                          )}
                        </button>
                        <span
                          className={`${
                            data.id === 4
                              ? "text-searchBgColor hidden"
                              : "text-searchBgColor flex items-center"
                          }`}
                        >
                          |
                        </span>
                      </div>
                    );
                  })}
                </section>
                {/* Categories */}
                <ul className="flex flex-col w-full">
                  {/* Categories */}

                  <li>
                    <NavLink
                      onClick={() =>
                        setState({ ...state, hamburgerMenu: false })
                      }
                      to="/signup-seller"
                      className="flex items-center bg-btnBgColor  font-AeonikProMedium h-[48px] border rounded-xl border-searchBgColor px-5 mb-3 w-full"
                    >
                      <div className="flex items-center">
                        <span className=" py-3 pr-3">
                          <HouseStatisticIcons colors={"#000"} />
                        </span>
                        <span className="ml-[11.67px]">Бизнес</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons colors={"#000"} />
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() =>
                        setState({ ...state, hamburgerMenu: false })
                      }
                      to="/stores"
                      className="flex items-center bg-btnBgColor  font-AeonikProMedium h-[52px] border rounded-xl border-searchBgColor px-5 mb-3 w-full"
                    >
                      <div className="flex items-center">
                        <span className=" py-3 pr-3">
                          <MarketIcons colors={"#000"} />
                        </span>
                        <span className="ml-[11.67px]">Магазины</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons colors={"#000"} />
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() =>
                        setState({ ...state, hamburgerMenu: false })
                      }
                      to="#"
                      className="flex items-center bg-btnBgColor  font-AeonikProMedium h-[52px] border rounded-xl border-searchBgColor px-5 mb-3 w-full"
                    >
                      <div className="flex items-center">
                        <span className=" py-3 pr-3">
                          <CommentIcons colors={"#000"} />
                        </span>
                        <span className="ml-[11.67px]">Помощь</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons colors={"#000"} />
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() =>
                        setState({ ...state, hamburgerMenu: false })
                      }
                      to="#"
                      className="flex items-center bg-btnBgColor  font-AeonikProMedium h-[52px] border rounded-xl border-searchBgColor px-5 mb-3 w-full"
                    >
                      <div className="flex items-center">
                        <span className=" py-3 pr-3">
                          <PhoneIcons colors={"#000"} />
                        </span>
                        <span className="ml-[11.67px]">Контакты</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons colors={"#000"} />
                      </span>
                    </NavLink>
                  </li>
                </ul>
                <article className="w-full flex flex-col">
                  {/* Line */}
                  <div className="line border-b w-full border-searchBgColor mb-3 ls:w-full"></div>

                  {/* Location and Language */}
                  <div className="flex items-center justify-between h-fit mb-3">
                    <button
                      onClick={() => setRegionsList(true)}
                      className="left h-[52px] rounded-xl flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                    >
                      <span>
                        <LocationIcons />
                      </span>
                      <span className="ml-[10px] mr-5">Tashkent</span>
                      <span className="rotate-180">
                        <ArrowTopIcons colors={"#000"} />
                      </span>{" "}
                    </button>
                    <Link
                      to="#"
                      className="left h-[48px] rounded-xl flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                    >
                      <img src={UzbekFlag} alt="." />
                      <span className="ml-[10px] mr-5">English</span>
                      <span className="rotate-180">
                        <ArrowTopIcons colors={"#000"} />
                      </span>
                    </Link>
                  </div>
                </article>
              </div>
            </section>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};
export default MediumHeader;
