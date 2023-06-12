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
    clothesTypeMobile: false,
    priceToggleMobile: false,
    brandToggleMobile: false,
    selectColorToggleMobile: false,
    getActive: "",
  });

  useEffect(() => {
    if (
      state?.hamburgerMenu ||
      state?.clothesTypeMobile ||
      state?.priceToggleMobile ||
      state?.brandToggleMobile ||
      state?.selectColorToggleMobile
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [
    state?.hamburgerMenu,
    state?.clothesTypeMobile,
    state?.priceToggleMobile,
    state?.brandToggleMobile,
    state?.selectColorToggleMobile,
  ]);

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

  // Mobile Wear Brand Type
  const [selectWearMobile, setSelectWearMobile] = useState("Clothing type");
  const handleWearMobile = (value) => {
    setSelectWearMobile(value);
  };
  const wearMobileList = [
    { id: 1, type: "All Clothing types" },
    { id: 2, type: "Headwear" },
    { id: 3, type: "Outwear" },
    { id: 4, type: "Underwear" },
    { id: 5, type: "Legwear" },
    { id: 6, type: "Accessory" },
  ];
  // Mobile Price Brand Type
  const [selectPriceMobile, setSelectPriceMobile] = useState("Under 100$");

  const handlePriceMobile = (value) => {
    setSelectPriceMobile(value);
  };

  const PriceMobileList = [
    { id: 1, type: "At all prices" },
    { id: 2, type: "More than 500 $" },
    { id: 3, type: "Under 500$" },
    { id: 4, type: "Under 200$" },
    { id: 5, type: "Under 100$" },
    { id: 6, type: "Under 50$" },
  ];

  // Mobile Change color Type
  const changeColor = [
    { id: 1, name: "purple", value: 1, action: false, colors: "bg-purple-700" },
    { id: 2, name: "green", value: 2, action: false, colors: "bg-green-600" },
    { id: 3, name: "red", value: 3, action: false, colors: "bg-red-700" },
    { id: 4, name: "yellow", value: 4, action: false, colors: "bg-yellow-500" },
    { id: 5, name: "black", value: 5, action: false, colors: "bg-black" },
    { id: 6, name: "white", value: 6, action: false, colors: "bg-white" },
    { id: 7, name: "blue", value: 7, action: false, colors: "bg-blue-500" },
    { id: 8, name: "orange", value: 8, action: false, colors: "bg-orange-600" },
    { id: 9, name: "purple", value: 9, action: false, colors: "bg-purple-400" },
    { id: 10, name: "blue", value: 10, action: false, colors: "bg-blue-900" },
    {
      id: 11,
      name: "yellow",
      value: 11,
      action: false,
      colors: "bg-yellow-900",
    },
    { id: 12, name: "gray", value: 12, action: false, colors: "bg-gray-600" },
  ];

  // Mobile top Branding Data Lists
  const campany = [
    { id: 1, imgFull: adidas },
    { id: 2, imgFull: chanel },
    { id: 3, imgFull: hm },
    { id: 4, imgFull: lacoste },
    { id: 5, imgFull: nike },
    { id: 6, imgFull: puma },
    { id: 7, imgFull: tommy },
    { id: 8, imgFull: zara },
  ];

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
                className={`flex items-center justify-center bg-btnBgColor border border-searchBgColor w-12 h-12 -lg-lg cursor-pointer md:hidden rounded-lg`}
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
                className="flex justify-center items-center rounded-lg h-[48px] ss:w-[calc(100%-96px)] ss:p-2 ll:p-1 md:p-0 md:w-[155px] ss:ml-2 md:ml-[0px]  ss:bg-btnBgColor md:bg-transparent"
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
                className={` bg-btnBgColor w-11 h-11 ml-[25px] rounded-lg cursor-pointer hidden items-center justify-center md:flex`}
              >
                <span className="w-[22px]">
                  <VolumeIcons colors={IconsColor} />
                </span>
              </div>

              {/* Weather seection */}
              <div className="w-12 h-12 md:w-[120px] md:h-11 bg-btnBgColor border border-searchBgColor rounded-lg  md:rounded-lg ml-2">
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
                        <div className="ss:hidden  font-AeonikProMedium mt-1 hidden md:block md:flex items-center text-[15px] ">
                          {data?.type}
                        </div>
                      </div>
                    </Popover>
                  );
                })}
              </div>

              {/* Searching section */}
              <div className="search flex items-center justify-center rounded-lg font-AeonikProMedium h-[44px] border border-red-600 md:border-transparent md:w-[622px] ml-2 ss:hidden md:flex">
                {/* Catalog section */}
                <button
                  className={`items-center ${dataStyle}  pl-5 pr-7 h-[44px] rounded-l-lg cursor-pointer hidden md:flex`}
                >
                  <span>
                    <CotegoryIcons colors={IconsColor} />
                  </span>
                  <span
                    className={` px-[9.5px] not-italic font-AeonikProMedium text-sm leading-4 mt-1`}
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
                <button className="bg-searchBgColor border border-searchBgColor w-[100px]  h-[44px] items-center justify-center rounded-r-lg  hidden md:flex -ml-[2px]">
                  <SearchIcons />
                </button>
              </div>

              {/* Line border */}
              <div className="line h-5 border-x-[1px]   text-textColor ss:hidden md:block mx-3"></div>

              {/* Map section */}
              <NavLink
                to="/delivery-points"
                className="items-center justify-center bg-btnBgColor rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex"
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
                  className=" bg-btnBgColor rounded-lg items-center justify-center w-11 h-11 mr-2 hidden md:flex"
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
                  className=" bg-btnBgColor rounded-lg items-center justify-center w-11 h-11 mr-2 hidden md:flex"
                >
                  <PersonIcons colors={"#000"} />
                </NavLink>
              )}

              {/* Heart section */}
              <NavLink
                to="/favourites"
                className={
                  "bg-btnBgColor rounded-lg  items-center justify-center w-11 h-11 mr-2 hidden md:flex"
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
                className=" bg-btnBgColor rounded-lg flex items-center justify-center w-11 h-11 relative md:flex ss:hidden"
              >
                <span>
                  <BasketIcons colors={"#000"} />
                </span>
                <span className="count bg-RedColor w-4 h-4 text-white text-[10px] rounded-lg flex items-center justify-center absolute top-0 right-0 font-AeonikProMedium">
                  {" "}
                  4{" "}
                </span>
              </NavLink>
            </div>
          </div>

          {/* Ending of Full Screen page sesction Map*/}

          {/* Open Meain Menu at the  Mobile version */}
          {/* <div className="max-w-[440px] w-[100%] h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg"> */}

          <div
            className={`max-w-[440px] w-[100%] fixed bg-white top-[70px] left-0 h-[100vh] px-3 ${
              state?.hamburgerMenu
                ? "hamburger flex flex-col ease-linear duration-500 overscroll-none z-30"
                : "left-[-800px] z-[-80] ease-linear duration-500"
            }`}
          >
            <div className={`w-full h-full `}>
              {/* Searching section */}
              <div className="search flex items-center bg-btnBgColor justify-between rounded-lg font-AeonikProMedium h-12 mt-3 mb-3 border border-searchBgColor ss:mt-3 md:hidden w-full">
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
                  className="left h-[52px] rounded-lg flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                >
                  <span>
                    <VolumeIcons colors={IconsColor} />
                  </span>
                  <span className=" ml-[10px]">Музика</span>
                </button>
                <NavLink
                  onClick={() => setState({ ...state, hamburgerMenu: false })}
                  to="/delivery-points"
                  className="right  h-[52px] rounded-lg flex items-center justify-center font-AeonikProMedium border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                >
                  <span>
                    <MapIcons colors={"#000"} />
                  </span>
                  <span className="ml-[10px]">Карта</span>
                </NavLink>
              </div>

              {/* Categories */}
              <ul className="flex flex-col">
                <li>
                  <button
                    onClick={() => setState({ ...state, hamburgerMenu: false })}
                    className="flex items-center bg-btnBgColor font-AeonikProMedium h-[52px] border rounded-lg border-searchBgColor px-5 mb-3 w-full"
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
                      className="flex items-center bg-btnBgColor font-AeonikProMedium h-[52px] border rounded-lg border-searchBgColor px-5 mb-3 w-full"
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
                      className="flex items-center bg-btnBgColor font-AeonikProMedium h-[52px] border rounded-lg border-searchBgColor px-5 mb-3 w-full"
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
                    className="flex items-center bg-btnBgColor font-AeonikProMedium h-[52px] border rounded-lg border-searchBgColor px-5 mb-3 w-full"
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
                  className="left h-[52px] rounded-lg flex items-center justify-center font-AeonikProMedium -lg-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                >
                  <span>
                    <CommentIcons colors={"#000"} />
                  </span>
                  <span className="ml-[10px]">Help</span>
                </button>
                <Link
                  onClick={() => setState({ ...state, hamburgerMenu: false })}
                  to="#"
                  className="left h-[52px] rounded-lg flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]"
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
                <button className="left h-[52px] rounded-lg flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]">
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
                  className="left h-[52px] rounded-lg flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]"
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

          <div
            className={`h-fit top-30  left-[16px] fixed  bg-white shadow-lg duration-200 z-50 ${
              state?.clothesTypeMobile ? "w-[92%]" : "w-0"
            }  `}
          >
            {state?.clothesTypeMobile && (
              <div className="fixed inset-0 z-10 ">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-40"
                  onClick={() =>
                    setState({ ...state, clothesTypeMobile: false })
                  }
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex items-center justify-end ">
                      <button
                        type=""
                        onClick={() =>
                          setState({ ...state, clothesTypeMobile: false })
                        }
                      >
                        <GrClose size={25} />
                      </button>
                    </div>
                    <div className="py-4">
                      {wearMobileList?.map((data) => {
                        return (
                          <div
                            key={data?.id}
                            onClick={() => {
                              handleWearMobile(data?.type);
                              setState({ ...state, clothesTypeMobile: false });
                            }}
                            className={`${hoverText} text-base font-AeonikProMedium hover:bg-bgColor w-full h-12 border border-solid border-searchBgColor flex items-center justify-center`}
                          >
                            {data?.type}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`h-fit top-30  left-[16px] fixed  bg-white shadow-lg  duration-200 z-50 ${
              state?.priceToggleMobile ? "w-[92%]" : "w-0"
            }  `}
          >
            {state?.priceToggleMobile && (
              <div className="fixed inset-0 z-10 ">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-40"
                  onClick={() =>
                    setState({ ...state, priceToggleMobile: false })
                  }
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex items-center justify-end ">
                      <button
                        type=""
                        onClick={() =>
                          setState({ ...state, priceToggleMobile: false })
                        }
                      >
                        <GrClose size={25} />
                      </button>
                    </div>
                    <div className="py-4">
                      {PriceMobileList?.map((data) => {
                        return (
                          <div
                            key={data?.type}
                            onClick={() => {
                              handlePriceMobile(data?.type);
                              setState({ ...state, priceToggleMobile: false });
                            }}
                            className={` ${hoverText}  text-base font-AeonikProMedium hover:bg-bgColor w-full h-12 border border-solid border-searchBgColor flex items-center justify-center`}
                          >
                            {data?.type}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`h-fit top-30  left-[16px] fixed  bg-white shadow-lg  duration-200 z-50 ${
              state?.brandToggleMobile ? "w-[92%]" : "w-0"
            }  `}
          >
            {state?.brandToggleMobile && (
              <div className="fixed inset-0 z-10 ">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-40"
                  onClick={() =>
                    setState({ ...state, brandToggleMobile: false })
                  }
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex items-center justify-end ">
                      <button
                        onClick={() =>
                          setState({ ...state, brandToggleMobile: false })
                        }
                      >
                        <GrClose size={25} />
                      </button>
                    </div>
                    <div className="py-4 flex flex-wrap justify-between gap-y-5">
                      {campany?.map((data) => {
                        return (
                          <div
                            key={data?.imgFull}
                            className="w-[80px] h-[80px] rounded-lg bg-bgColor  border border-solid border-borderColorCard"
                          >
                            <img
                              className="h-full w-full"
                              src={data?.imgFull}
                              alt="img"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`h-fit top-30  left-[16px] fixed  bg-white shadow-lg  duration-200 z-50 ${
              state?.selectColorToggleMobile ? "w-[92%]" : "w-0"
            }`}
          >
            {state?.selectColorToggleMobile && (
              <div className="fixed inset-0 z-10 ">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-40"
                  onClick={() =>
                    setState({ ...state, selectColorToggleMobile: false })
                  }
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex items-center justify-end ">
                      <button
                        type=""
                        onClick={() =>
                          setState({ ...state, selectColorToggleMobile: false })
                        }
                      >
                        <GrClose size={25} />
                      </button>
                    </div>
                    <div className="py-4 flex flex-wrap  gap-5">
                      {changeColor?.map((data) => {
                        return (
                          <span
                            key={data?.id}
                            className="w-60px flex items-center cursour-pointer hover:shadow-md p-1 rounded-lg mr-2"
                          >
                            <div
                              className={`rounded-full mr-2 w-6 h-6 ${data?.colors} cursor-pointer `}
                            ></div>
                            <span className="not-italic font-AeonikProMedium text-base leading-4 text-black">
                              {data?.name}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/*Starting of Blocked  Hamburger Menu section */}
          <div className={`md:hidden   `}>
            <div className="flex items-center justify-between w-full ">
              {/* Searching section */}
              <div className="search flex items-center rounded-lg font-AeonikProMedium h-12  border ss:w-[100%]">
                <span className="pl-[11.65px]">
                  <SearchIcons />
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent w-full h-full text-[14px] border border-transparent px-2  "
                />
              </div>

              {/* Map section */}
              <Link
                to="/delivery-points"
                className="flex items-center w-full justify-center bg-btnBgColor border border-searchBgColor rounded-lg ss:px-4 h-12 ml-2  ss:w-[94px] "
              >
                <span className="pr-[6px]">
                  <MapIcons colors={"#000"} />
                </span>
                <div className="font-AeonikProMedium">Map</div>
              </Link>
            </div>

            {/* Gender selection for Mobile */}
            {locationWindow !== "/categoriesType" &&
            locationWindow !== "/shopping_store/:id" &&
            locationWindow !== "/my-order/settings" &&
            locationWindow !== "/my-order" &&
            locationWindow !== "/my-order/list" &&
            locationWindow !== "/payment" &&
            locationWindow !== "/stores" &&
            locationWindow !== "/favourites" &&
            locationWindow !== "/basket-check-out" &&
            locationWindow !== "/product/:id" ? (
              <div className="flex flex-wrap items-center justify-between mt-3 rounded-lg  mb-4 w-full  ">
                {personItems
                  ?.filter((value) => value.id === dressInfo?.type)
                  .map((data) => {
                    return (
                      <div
                        key={data?.id}
                        className="w-full flex items-center justify-between "
                      >
                        <button
                          className={` ${genderStyle} border rounded-lg bg-btnBgColor  border-searchBgColor font-AeonikProMedium w-[48%] h-[52px] px-4 flex items-center  focus:rounded-lg`}
                        >
                          <img src={data?.woman} alt="female" />
                          <span className="ml-3">Женщинам</span>
                        </button>
                        <button
                          className={` font-AeonikProMedium ${genderStyle} border rounded-lg bg-btnBgColor  border-searchBgColor w-[48%] h-[52px] px-4 justify-center flex items-center  focus:rounded-lg`}
                        >
                          <img src={data?.man} alt="male" />
                          <span className="ml-3"> Мужчинам</span>
                        </button>
                      </div>
                    );
                  })}

                <button
                  onClick={() => {
                    setState({ ...state, toggle: !state.toggle });
                  }}
                  className="flex items-center bg-btnBgColor font-AeonikProMedium h-[52px] rounded-lg border border-searchBgColor px-5 ss:w-full  ss:mt-4 "
                >
                  <div className="flex items-center ml-auto">
                    <ClothesIcons />
                    <span className="ml-[11.67px]">Clothing options</span>
                  </div>

                  <span
                    className={`arrowRotate ml-auto ${
                      state?.toggle ? "rotate-180" : ""
                    } duration-500`}
                  >
                    <ArrowTopIcons colors={"#000"} />
                  </span>
                </button>
              </div>
            ) : null}

            {/* Params for Mobile */}
            <div
              className={`${
                state?.toggle ? "h-[280px]" : "h-0"
              } duration-500  overflow-hidden md:hidden`}
            >
              <ul className="ss:w-full  bg-white">
                <li
                  onClick={() => {
                    setState({
                      ...state,
                      clothesTypeMobile: !state.clothesTypeMobile,
                    });
                  }}
                >
                  <button className="ss:w-full flex items-center bg-btnBgColor font-AeonikProMedium h-[52px] border rounded-lg border-searchBgColor px-5 mb-3 md:hidden">
                    <div className="flex items-center">
                      <span className="w-[52px]  border-r border-searchBgColor py-3 pr-5">
                        <ClothesIcons />
                      </span>
                      <span className="ml-[11.67px]">{selectWearMobile}</span>
                    </div>
                    <span className="arrowRotate ml-auto rotate-[90deg]">
                      <ArrowTopIcons colors={"#000"} />
                    </span>
                  </button>
                </li>
                <li
                  onClick={() =>
                    setState({
                      ...state,
                      priceToggleMobile: !state.priceToggleMobile,
                    })
                  }
                >
                  <button className="flex items-center w-full bg-btnBgColor font-AeonikProMedium h-[52px] border rounded-lg border-searchBgColor px-5 mb-3 md:hidden">
                    <div className="flex items-center">
                      <span className="w-[52px]  border-r border-searchBgColor py-3 pr-5">
                        <DollorIcons />
                      </span>
                      <span className="ml-[11.67px]">{selectPriceMobile}</span>
                    </div>
                    <span className="arrowRotate  rotate-[90deg] ml-auto">
                      <ArrowTopIcons colors={"#000"} />
                    </span>
                  </button>
                </li>

                <li>
                  <button className="w-full flex items-center justify-between bg-btnBgColor font-AeonikProMedium h-[52px] border rounded-lg border-searchBgColor px-5 mb-3 md:hidden">
                    <span className="w-[52px] border-r border-searchBgColor py-3 pr-5">
                      <BrushColorIcons />
                    </span>
                    <div
                      onClick={() =>
                        setState({
                          ...state,
                          selectColorToggleMobile: !state.selectColorToggleMobile,
                        })
                      }
                      className="flex w-[80%] h-full items-center overflow-x-scroll "
                    >
                      {changeColor?.map((data) => {
                        return (
                          <span
                            key={data?.id}
                            className="w-60px flex items-center mr-2"
                          >
                            <div
                              className={`rounded-full mr-2 w-6 h-6 ${data?.colors} cursor-pointer `}
                            ></div>
                            <span className="not-italic font-AeonikProMedium text-base leading-4 text-black">
                              {data?.name}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                    <span className="w-[40px]  flex justify-end">
                      <span className="arrowRotate  rotate-[90deg] ml-auto">
                        <ArrowTopIcons colors={"#000"} />
                      </span>
                    </span>
                  </button>
                </li>
                <li
                  onClick={() =>
                    setState({
                      ...state,
                      brandToggleMobile: !state.brandToggleMobile,
                    })
                  }
                >
                  <button className="w-full flex items-center bg-btnBgColor font-AeonikProMedium h-[52px] border rounded-lg border-searchBgColor px-5 mb-3 md:hidden">
                    <div className="flex items-center">
                      <span className="w-[52px]  border-r border-searchBgColor py-3 pr-5">
                        <TopBrandsIcon />
                      </span>
                      <span className="ml-[11.67px]">Top Brands</span>
                    </div>
                    <span className="arrowRotate  rotate-[90deg] ml-auto">
                      <ArrowTopIcons colors={"#000"} />
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* Ending of Blocked  Hamburger Menu section  */}
        </div>
      </div>
    </div>
  );
};
export default MediumHeader;
