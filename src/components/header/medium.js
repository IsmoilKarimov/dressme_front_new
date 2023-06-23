import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { dressMainData } from "../../ContextHook/ContextMenu";
import { GrClose } from "react-icons/gr";
import { Popover } from "antd";
import {
  ActivePersonIcons,
  ArrowTopIcons,
  BasketIcons,
  BrushColorIcons,
  ClothesIcons,
  CommentIcons,
  CotegoryIcons,
  DashboardStatisticIcons,
  DollorIcons,
  HeartLinkIcons,
  HouseStatisticIcons,
  ListCollectionIcons,
  LocationIcons,
  MapIcons,
  MarketIcons,
  MenuCloseIcons,
  MenuOpenIcons,
  PersonIcons,
  PhoneIcons,
  SearchIcons,
  TopBrandsIcon,
  VolumeIcons,
} from "../../AssetsMain/icons";
import {
  BrandAutumm,
  BrandSpring,
  BrandSummer,
  BrandWinter,
  SpringMale,
  SummerMale,
  AutummMale,
  WinterMale,
  SpringFemale,
  SummerFemale,
  AutummFemale,
  WinterFemale,
  // ------
  adidas,
  chanel,
  hm,
  lacoste,
  nike,
  puma,
  tommy,
  zara,
  //
  springSeason,
  summerSeason,
  winterSeason,
  autummSeason,
  UzbekFlag,
  HeartImg,
  ActivePersonImg,
} from "../../AssetsMain";

const MediumHeader = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [state, setState] = useState({
    hamburgerMenu: false,
    toggle: false,
    genderActive: true,
  });

  useEffect(() => {
    if (state?.hamburgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [state?.hamburgerMenu]);

  // -----------------------------------------------------
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
  console.log(scrollPost, "scrollPost");
  // -----------------------------------------------------

  let IconsColor = "";
  let dataStyle = "";
  let genderStyle = "";
  let hoverText = "";
  let authenActiveStyle = "";
  if (dressInfo?.type === 1111) {
    IconsColor = "#008F0E";

    dataStyle = "bg-bgSpring bg-opacity-10	  text-borderSpring ";
    hoverText = " hover:text-borderSpring ";
    authenActiveStyle =
      "bg-red-500 rounded-lg items-center justify-center w-11 h-11 mr-2 hidden md:flex  ";
    genderStyle =
      "focus:text-borderSpring focus:bg-bgSpring focus:border focus:border-borderSpring focus:text-borderSpring";
  }
  if (dressInfo?.type === 2222) {
    IconsColor = "#EAA700";

    dataStyle = "bg-bgSummer  bg-opacity-10  text-borderSummer";
    hoverText = " hover:text-borderSummer ";
    authenActiveStyle =
      "bg-red-500 rounded-lg items-center justify-center w-11 h-11 mr-2 hidden md:flex  ";
    genderStyle =
      "focus:text-borderSummer focus:bg-bgSummer focus:border focus:border-borderSummer focus:text-borderSummer";
  }
  if (dressInfo?.type === 3333) {
    IconsColor = "#E17A02";

    dataStyle = "bg-bgAutumm bg-opacity-10  text-borderAutumm";
    hoverText = " hover:text-borderAutumm ";
    authenActiveStyle =
      "bg-red-500 rounded-lg items-center justify-center w-11 h-11 mr-2 hidden md:flex  ";
    genderStyle =
      "focus:text-borderAutumm focus:bg-bgAutumm focus:border focus:border-borderAutumm focus:text-borderAutumm";
  }
  if (dressInfo?.type === 4444) {
    IconsColor = "#007DCA";

    dataStyle = "bg-bgWinter bg-opacity-10  text-borderWinter";
    hoverText = " hover:text-borderWinter ";
    authenActiveStyle =
      "bg-red-500 rounded-lg items-center justify-center w-11 h-11 mr-2 hidden md:flex  ";
    genderStyle =
      "focus:text-borderWinter focus:bg-bgWinter focus:border focus:border-borderWinter focus:text-borderWinter";
  }

  const SeasonTypeArray = [
    { id: 1111, type: "Spring", icons: springSeason },
    { id: 2222, type: "Summer", icons: summerSeason },
    { id: 3333, type: "Autumm", icons: autummSeason },
    { id: 4444, type: "Winter", icons: winterSeason },
  ];
  const BrandTypeArray = [
    { id: 1111, type: "Spring", icons: BrandSpring },
    { id: 2222, type: "Summer", icons: BrandSummer },
    { id: 3333, type: "Autumm", icons: BrandAutumm },
    { id: 4444, type: "Winter", icons: BrandWinter },
  ];

  const personItems = [
    { id: 1111, man: SpringMale, woman: SpringFemale },
    { id: 2222, man: SummerMale, woman: SummerFemale },
    { id: 3333, man: AutummMale, woman: AutummFemale },
    { id: 4444, man: WinterMale, woman: WinterFemale },
  ];
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
    <div className="ss:w-fit md:w-[120px] h-fit m-0 p-0 ">
      {SeasonTypeArray.map((value) => {
        return (
          <p
            key={value?.id}
            className="w-full h-[42px] flex items-center justify-center md:pl-3 md:justify-start not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor"
            onClick={() => handleSeason(value.id)}
          >
            <span className="md:mr-3">
              <img src={value?.icons} alt="" />
            </span>
            <span
              className={`ss:hidden md:inline-block font-AeonikProMedium text-base text-black not-italic ${hoverText}`}
            >
              {value?.type}
            </span>
          </p>
        );
      })}
    </div>
  );

  // Location pathname

  const location = useLocation();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
    // console.log(locationWindow, "locationWindow");
  }, [location.pathname]);
  // md:mt-[99px] ss:mt-0
  // mt-1

  return (
    <div className="flex flex-col justify-center items-center m-0 p-0 box-border ">
      <div className="max-w-[1280px] w-[100%] block md:flex px-3 md:px-0 md:py-0 justify-center  items-center m-auto ">
        <div className="relative">
          {/* Starting of Full Screen page section */}
          <div className="w-full flex justify-center items-center py-3 overscroll-none overflow-y-hidden">
            <div className=" w-full flex items-center ss:w-full md:w-fit justify-between ">
              {/* Menu section */}
              <div
                onClick={toggleHamburger}
                className={`flex items-center justify-center bg-btnBgColor border border-searchBgColor w-12 h-12 -lg-lg cursor-pointer md:hidden rounded-xl`}
              >
                {state?.hamburgerMenu ? (
                  <span>
                    <MenuCloseIcons />
                  </span>
                ) : (
                  <span>
                    <MenuOpenIcons />
                  </span>
                )}
              </div>

              {/* Logo section */}
              <NavLink
                to="/"
                className="flex justify-center items-center rounded-xl h-[48px] ss:w-[calc(100%-96px)] ss:p-2 ll:p-1 md:p-0 md:w-[155px] ss:ml-2 md:ml-[0px]  ss:bg-btnBgColor md:bg-transparent"
              >
                {BrandTypeArray.filter((data) => data.id == dressInfo.type).map(
                  (data) => {
                    return (
                      <img
                        key={data?.id}
                        className="h-full"
                        src={data?.icons}
                        alt="logo"
                      />
                    );
                  }
                )}
              </NavLink>

              {/* Voice section */}
              <div
                className={` bg-btnBgColor w-11 h-11 ml-[25px] rounded-xl cursor-pointer hidden items-center justify-center md:flex`}
              >
                <span className="w-[22px]">
                  <VolumeIcons colors={IconsColor} />
                </span>
              </div>

              {/* Weather section */}
              <div className="w-12 h-12 md:w-[120px] md:h-11 bg-btnBgColor border border-searchBgColor rounded-xl  md:rounded-lg ml-2">
                {SeasonTypeArray.filter(
                  (data) => data.id == dressInfo.type
                ).map((data) => {
                  return (
                    <Popover
                      key={data?.id}
                      open={openwear}
                      onOpenChange={handleOpenChangeWear}
                      className="w-full h-full flex items-center justify-center rounded-lg cursor-pointer  "
                      trigger="click"
                      options={["Hide"]}
                      placement="bottom"
                      content={contentWear}
                    >
                      <div className="w-full h-full  sm:flex items-center  select-none cursor-pointer  ">
                        <img
                          src={data?.icons}
                          alt="weather"
                          className="mr-0 md:mr-[5px] "
                        />
                        <div className="ss:hidden font-AeonikProMedium hidden md:flex items-center text-[15px] ">
                          {data?.type}
                        </div>
                      </div>
                    </Popover>
                  );
                })}
              </div>

              {/* Searching section */}
              <div className="flex items-center justify-center rounded-xl font-AeonikProMedium h-[44px] border border-red-600 md:border-transparent md:w-[622px] ml-2 ss:hidden md:flex">
                {/* Catalog section */}
                <button
                  className={`items-center ${dataStyle}  pl-5 pr-7 h-[44px] rounded-l-xl cursor-pointer hidden md:flex`}
                >
                  <span>
                    <CotegoryIcons colors={IconsColor} />
                  </span>
                  <span
                    className={` px-[9.5px] not-italic font-AeonikProMedium text-sm leading-4 `}
                  >
                    Каталог
                  </span>
                </button>
                <span className="flex md:hidden">
                  <SearchIcons />
                </span>
                <input
                  type="text"
                  placeholder="Поиск продуктов или брендов"
                  className="bg-transparent w-full px-3 h-[44px] text-sm border border-transparent md:border-searchBgColor "
                />
                <button className="bg-searchBgColor border border-searchBgColor w-[100px]  h-[44px] items-center justify-center rounded-r-xl  hidden md:flex -ml-[2px]">
                  <SearchIcons />
                </button>
              </div>

              {/* Line border */}
              <div className="line h-5 border-x-[1px]   text-textColor ss:hidden md:block mx-3"></div>

              {/* Map section */}
              <NavLink
                to="/delivery-points"
                className="items-center justify-center bg-btnBgColor rounded-xl md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex"
              >
                <span className="pr-[6px]">
                  <MapIcons colors={"#000"} />
                </span>
                <span className="font-AeonikProMedium text-sm  ">Карта</span>
              </NavLink>

              {/* Line border */}
              <div className="line h-5 border-x-[1px]   text-textColor ss:hidden md:block mx-3"></div>

              {/* User section */}
              {localStorage.getItem("dressMeLogin") ? (
                <NavLink
                  to="/my-order"
                  className=" bg-btnBgColor rounded-xl items-center justify-center w-11 h-11 mr-2 hidden md:flex"
                >
                  {({ isActive }) =>
                    isActive ? (
                      <ActivePersonIcons colors={IconsColor} />
                    ) : (
                      <PersonIcons colors={"#000"} />
                    )
                  }
                </NavLink>
              ) : (
                <NavLink
                  to="/sign_in"
                  className=" bg-btnBgColor rounded-xl items-center justify-center w-11 h-11 mr-2 hidden md:flex"
                >
                  <PersonIcons colors={"#000"} />
                </NavLink>
              )}

              {/* Heart section */}
              <NavLink
                to="/favourites"
                className={
                  "bg-btnBgColor rounded-xl  items-center justify-center w-11 h-11 mr-2 hidden md:flex"
                }
              >
                {({ isActive }) =>
                  isActive ? (
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
                  ) : (
                    <img src={HeartImg} className={"w-5 h-5"} alt="heart" />
                  )
                }
              </NavLink>

              {/* Bucket section */}
              <NavLink
                to="/basket-check-out"
                className=" bg-btnBgColor rounded-xl flex items-center justify-center w-11 h-11 relative md:flex ss:hidden"
              >
                <span>
                  <BasketIcons colors={"#000"} />
                </span>
                <span className="count bg-RedColor w-4 h-4 text-white text-[10px] rounded-xl flex items-center justify-center absolute top-0 right-0 font-AeonikProMedium">
                  {" "}
                  4{" "}
                </span>
              </NavLink>
            </div>
          </div>
          {/* Ending of Full Screen page sesction Map*/}

          {/* Open Main Menu at the  Mobile version */}
          <div
            className={`max-w-[440px] w-[100%] fixed bg-white top-[70px] left-0 h-[100vh] px-3 ${
              state?.hamburgerMenu
                ? "hamburger flex flex-col ease-linear duration-500 overscroll-none z-30"
                : "left-[-800px] z-[-80] ease-linear duration-500"
            }`}
          >
            <div className={`w-full h-full `}>
              {/* Searching section */}
              <div className="search flex items-center bg-btnBgColor justify-between rounded-xl font-AeonikProMedium h-12 mt-3 mb-3 border border-searchBgColor ss:mt-3 md:hidden w-full">
                <span className=" flex ss:pl-[11.65px] md:hidden">
                  <SearchIcons />
                </span>

                <input
                  type="text"
                  placeholder="Искать товары или бренды"
                  className="bg-transparent w-full px-3 h-12 text-[14px] bg-btnBgColor border border-transparent md:border-searchBgColor md:mx-0 md:-ml-[3px] md:px-3 md:h-12
                  placeholder-italic placeholder-AeonikProMedium placeholder-sm leading-4 placeholder-setTexOpacity placeholder-[1px]
                  "
                />
              </div>
              {/* Music and Map selection for Mobile */}
              <div className="flex items-center justify-between h-fit mb-3">
                <button
                  onClick={() => setState({ ...state, hamburgerMenu: false })}
                  className="left h-[52px] rounded-xl flex items-center justify-center font-AeonikProMedium border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                >
                  <span>
                    <VolumeIcons colors={IconsColor} />
                  </span>
                  <span className=" ml-[10px]">Музика</span>
                </button>
                <NavLink
                  onClick={() => setState({ ...state, hamburgerMenu: false })}
                  to="/delivery-points"
                  className="right  h-[52px] rounded-xl flex items-center justify-center font-AeonikProMedium border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                >
                  <span>
                    <MapIcons colors={"#000"} />
                  </span>
                  <span className="ml-[10px]">Карта</span>
                </NavLink>
              </div>
              {/* Параметры одежды  */}
              {/* Categories */}
              <ul className="flex flex-col">
                <li>
                  <button
                    onClick={() => setState({ ...state, hamburgerMenu: false })}
                    className="flex items-center bg-btnBgColor font-AeonikProMedium h-[52px] border rounded-xl border-searchBgColor px-5 mb-3 w-full"
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
                  </button>
                </li>
                <li>
                  {localStorage.getItem("dressMeLogin") ? (
                    <NavLink
                      onClick={() =>
                        setState({ ...state, hamburgerMenu: false })
                      }
                      to="/my-order"
                      className="flex items-center bg-btnBgColor font-AeonikProMedium h-[52px] border rounded-xl border-searchBgColor px-5 mb-3 w-full"
                    >
                      <div className="flex items-center">
                        <span className=" py-3 pr-3">
                          <ListCollectionIcons />
                        </span>
                        <span className="ml-[11.67px]">Мои заказы</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons colors={"#000"} />
                      </span>
                    </NavLink>
                  ) : (
                    <NavLink
                      onClick={() =>
                        setState({ ...state, hamburgerMenu: false })
                      }
                      to="/sign_in"
                      className="flex items-center bg-btnBgColor font-AeonikProMedium h-[52px] border rounded-xl border-searchBgColor px-5 mb-3 w-full"
                    >
                      <div className="flex items-center">
                        <span className=" py-3 pr-3">
                          <ListCollectionIcons />
                        </span>
                        <span className="ml-[11.67px]">Мои заказы</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons colors={"#000"} />
                      </span>
                    </NavLink>
                  )}
                </li>
                <li>
                  <NavLink
                    onClick={() => setState({ ...state, hamburgerMenu: false })}
                    to="/stores"
                    className="flex items-center bg-btnBgColor font-AeonikProMedium h-[52px] border rounded-xl border-searchBgColor px-5 mb-3 w-full"
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
              </ul>

              {/*Help and Contact selection for Mobile */}
              <div className="flex items-center justify-between h-fit mb-3">
                <button
                  onClick={() => setState({ ...state, hamburgerMenu: false })}
                  className="left h-[52px] rounded-xl flex items-center justify-center font-AeonikProMedium -lg-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                >
                  <span>
                    <CommentIcons colors={"#000"} />
                  </span>
                  <span className="ml-[10px]">Help</span>
                </button>
                <Link
                  onClick={() => setState({ ...state, hamburgerMenu: false })}
                  to="#"
                  className="left h-[52px] rounded-xl flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                >
                  <span>
                    <PhoneIcons />
                  </span>
                  <span className="ml-[10px]">Contact</span>
                </Link>
              </div>

              {/* Line */}
              <div className="line border-b w-[300px] border-searchBgColor mb-3 ls:w-full"></div>

              {/* Location and Language */}
              <div className="flex items-center justify-between h-fit mb-3">
                <button className="left h-[52px] rounded-xl flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]">
                  <span>
                    <LocationIcons />
                  </span>
                  <span className="ml-[10px] mr-5">Tashkent</span>
                  <span className="">
                    <ArrowTopIcons colors={"#000"} />
                  </span>{" "}
                </button>
                <Link
                  to="#"
                  className="left h-[52px] rounded-xl flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                >
                  <img src={UzbekFlag} alt="." />
                  <span className="ml-[10px] mr-5">English</span>
                  <span className="">
                    <ArrowTopIcons colors={"#000"} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/*Starting of Blocked  Hamburger Menu section */}
          <div className={`md:hidden relative max-w-[440px] w-[100%]`}>
            {scrollPost > -132 ? (
              <div className={`sticky top-0 py-1 bg-white  w-full z-[100]`}>
                {/* Searching section */}
                <div className=" flex items-center rounded-xl font-AeonikProMedium h-12  border ss:w-[100%]  border border-searchBgColor bg-white ">
                  <span className="pl-[11.65px]">
                    <SearchIcons />
                  </span>
                  <input
                    type="text"
                    placeholder="Искать товары или бренды"
                    className="bg-transparent w-full h-full text-[14px] border border-transparent px-2  "
                  />
                </div>
              </div>
            ) : (
              <div
                className={`fixed  top-0 py-1 bg-white ss:max-w-[320px] ls:max-w-[360px] ll:max-w-[390px] xs:max-w-[480px] sm:max-w-[640px] w-[100%] z-[100]`}
              >
                {/* Searching section */}
                <div className=" flex items-center rounded-xl font-AeonikProMedium h-12  border ss:w-[100%]  border border-searchBgColor bg-white ">
                  <span className="pl-[11.65px]">
                    <SearchIcons />
                  </span>
                  <input
                    type="text"
                    placeholder="Искать товары или бренды"
                    className="bg-transparent w-full h-full text-[14px] border border-transparent px-2  "
                  />
                </div>
              </div>
            )}

            {/* Gender selection for Mobile */}
            {locationWindow === "/" && (
              <div className="flex flex-wrap items-center justify-between rounded-xl  my-4 w-full ">
                {personItems
                  ?.filter((value) => value.id === dressInfo?.type)
                  .map((data) => {
                    return (
                      <div
                        key={data?.id}
                        className="max-w-[440px] w-[100%] bg-btnBgColor flex items-center justify-between border border-searchBgColor rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setState({ ...state, genderActive: true })
                          }
                          className={` font-AeonikProMedium ${
                            state?.genderActive
                              ? "bg-white border border-searchBgColor"
                              : "bg-transparent"
                          } w-[50%]  rounded-xl h-[52px]  justify-center flex items-center`}
                        >
                          <img src={data?.woman} alt="female" />
                          <span className="ml-3">Женщинам</span>
                        </button>
                        <button
                          onClick={() =>
                            setState({ ...state, genderActive: false })
                          }
                          className={` font-AeonikProMedium ${
                            !state?.genderActive
                              ? "bg-white border border-searchBgColor"
                              : "bg-transparent"
                          } w-[50%]  rounded-xl h-[52px]  justify-center flex items-center`}
                        >
                          <img src={data?.man} alt="male" />
                          <span className="ml-3"> Мужчинам</span>
                        </button>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
          {/* Ending of Blocked  Hamburger Menu section  */}
        </div>
      </div>
    </div>
  );
};
export default MediumHeader;
