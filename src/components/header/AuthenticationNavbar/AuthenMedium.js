import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  adidas,
  arrowBottomBlack,
  arrowBottomRight,
  autummBrand,
  AutummCategory,
  AutummFemale,
  AutummMale,
  autummSeason,
  autummVolume,
  blog,
  booking,
  brush,
  bucket,
  businessBlack,
  chanel,
  close,
  clothing,
  contact,
  dashboard,
  dolce,
  dollar,
  eng,
  gucci,
  heart,
  helpBlack,
  hm,
  lacoste,
  location,
  louis,
  map,
  menu,
  nike,
  prada,
  puma,
  search,
  shop,
  springBrand,
  SpringCategory,
  SpringFemale,
  SpringMale,
  springSeason,
  springVolume,
  summerBrand,
  SummerCategory,
  SummerFemale,
  SummerMale,
  summerSeason,
  summerVolume,
  tommy,
  topBrands,
  user,
  winterBrand,
  WinterCategory,
  WinterFemale,
  WinterMale,
  winterSeason,
  winterVolume,
  zara,
} from "../../../assets/imgs";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import { GrClose } from "react-icons/gr";
import { Popover } from "antd";

const AuthenMedium = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [state, setState] = useState({
    hamburgerMenu: true,
    toggle: false,
    clothesTypeMobile: false,
    priceToggleMobile: false,
    brandToggleMobile: false,
    selectColorToggleMobile: false,
  });

  useEffect(() => {
    if (
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
    state?.clothesTypeMobile,
    state?.priceToggleMobile,
    state?.brandToggleMobile,
    state?.selectColorToggleMobile,
  ]);

  let dataStyle = "";
  let genderStyle = "";
  let hoverText = "";
  if (dressInfo?.type === 1111) {
    dataStyle = "bg-bgSpring bg-opacity-10	  text-borderSpring ";
    hoverText = " hover:text-borderSpring ";
    genderStyle =
      "focus:text-borderSpring focus:bg-bgSpring focus:border focus:border-borderSpring focus:text-borderSpring";
  }
  if (dressInfo?.type === 2222) {
    dataStyle = "bg-bgSummer  bg-opacity-10  text-borderSummer";
    hoverText = " hover:text-borderSummer ";
    genderStyle =
      "focus:text-borderSummer focus:bg-bgSummer focus:border focus:border-borderSummer focus:text-borderSummer";
  }
  if (dressInfo?.type === 3333) {
    dataStyle = "bg-bgAutumm bg-opacity-10  text-borderAutumm";
    hoverText = " hover:text-borderAutumm ";
    genderStyle =
      "focus:text-borderAutumm focus:bg-bgAutumm focus:border focus:border-borderAutumm focus:text-borderAutumm";
  }
  if (dressInfo?.type === 4444) {
    dataStyle = "bg-bgWinter bg-opacity-10  text-borderWinter";
    hoverText = " hover:text-borderWinter ";
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
    { id: 1111, type: "Spring", icons: springBrand },
    { id: 2222, type: "Summer", icons: summerBrand },
    { id: 3333, type: "Autumm", icons: autummBrand },
    { id: 4444, type: "Winter", icons: winterBrand },
  ];
  const VolumeTypeArray = [
    { id: 1111, type: "Spring", icons: springVolume },
    { id: 2222, type: "Summer", icons: summerVolume },
    { id: 3333, type: "Autumm", icons: autummVolume },
    { id: 4444, type: "Winter", icons: winterVolume },
  ];
  const CategoryTypeArray = [
    { id: 1111, type: "Spring", icons: SpringCategory },
    { id: 2222, type: "Summer", icons: SummerCategory },
    { id: 3333, type: "Autumm", icons: AutummCategory },
    { id: 4444, type: "Winter", icons: WinterCategory },
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
    { id: 3, imgFull: dolce },
    { id: 4, imgFull: gucci },
    { id: 5, imgFull: hm },
    { id: 6, imgFull: lacoste },
    { id: 7, imgFull: louis },
    { id: 8, imgFull: nike },
    { id: 9, imgFull: prada },
    { id: 10, imgFull: puma },
    { id: 11, imgFull: tommy },
    { id: 12, imgFull: zara },
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

  return (
    <div className="flex flex-col justify-center items-center m-0 p-0 box-border ">
      <div className="max-w-[1280px] w-[100%] ss:block md:flex ss:px-4 md:px-0 md:py-0 justify-center items-center m-auto ">
        <div className="">
          {/* Starting of Full Screen page section */}
          <div className="w-full flex justify-center items-center py-3 overscroll-none overflow-y-hidden">
            <div className=" w-full flex items-center ss:w-full md:w-fit justify-between ">
              {/* Menu section */}
              <div
                onClick={toggleHamburger}
                className={`flex items-center justify-center bg-btnBgColor border border-searchBgColor w-12 h-12 -lg-lg cursor-pointer md:hidden rounded-lg`}
              >
                <img
                  src={!state?.hamburgerMenu ? close : menu}
                  alt="voice"
                  className={`${close ? "w-6 h-6" : ""} `}
                /> 

                {/*Starting of Opened Hamburger menu section */}
                <div
                  className={`${
                    !state?.hamburgerMenu
                      ? "hamburger flex flex-col ease-linear duration-500  z-10 overscroll-none"
                      : "left-[-1050px] z-[-10]  ease-linear duration-500"
                  }  top-[62px] left-0 fixed right-0 w-full bg-white h-full overflow-y-scroll px-[15px] ll:flex-fit`}
                >
                  {/* Searching section */}
                  <div className="search flex items-center justify-between rounded-lg font-AeonikProMedium h-10 mt-3 mb-3 border border-searchBg ss:mt-3 md:hidden w-full">
                    <img
                      src={search}
                      alt="search"
                      className=" flex ss:pl-[11.65px] md:hidden"
                    />
                    <input
                      type="text"
                      placeholder="Search products or brands"
                      className="bg-transparent w-full px-3 h-10 text-[14px] border border-transparent md:border-searchBgColor md:mx-0 md:-ml-[3px] md:px-3 md:h-12"
                    />
                  </div>
                  {/* Music and Map selection for Mobile */}
                  <div className="flex items-center justify-between h-11 mb-3">
                    <button className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                      {VolumeTypeArray.filter(
                        (data) => data?.id == dressInfo?.type
                      ).map((data) => {
                        return (
                          <img key={data?.id} src={data?.icons} alt="misic" />
                        );
                      })}
                      <span className=" ml-[10px]">Music</span>
                    </button>
                    <Link
                      to="#"
                      className="right px-10 py-[9px] rounded-lg flex items-center justify-center font-AeonikProMedium border border-gray-300 bg-bgColor ss:w-[48%]"
                    >
                      <img src={map} alt="map" />
                      <span className="ml-[10px]">Map</span>
                    </Link>
                  </div>

                  {/* Categories */}
                  <ul className="flex flex-col">
                    <li>
                      <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-gray-300 px-5 mb-3 w-full">
                        <div className="flex items-center">
                          <span className="border-r border-gray-300 py-3 pr-5">
                            <img src={dashboard} alt="" />
                          </span>
                          <span className="ml-[11.67px]">Dashboard (demo)</span>
                        </div>
                        <img
                          src={arrowBottomRight}
                          alt=""
                          className="arrowRotate ml-auto"
                        />
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-gray-300 px-5 mb-3 w-full">
                        <div className="flex items-center">
                          <span className="border-r border-gray-300 py-3 pr-5">
                            <img src={businessBlack} alt="" />
                          </span>
                          <span className="ml-[11.67px]">Business</span>
                        </div>
                        <img
                          src={arrowBottomRight}
                          alt=""
                          className="arrowRotate ml-auto"
                        />
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-gray-300 px-5 mb-3 w-full">
                        <div className="flex items-center">
                          <span className="border-r border-gray-300 py-3 pr-5">
                            <img src={booking} alt="" />
                          </span>
                          <span className="ml-[11.67px]">My orders</span>
                        </div>
                        <img
                          src={arrowBottomRight}
                          alt=""
                          className="arrowRotate ml-auto"
                        />
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-gray-300 px-5 mb-3 w-full">
                        <div className="flex items-center">
                          <span className="border-r border-gray-300 py-3 pr-5">
                            <img src={shop} alt="" />
                          </span>
                          <span className="ml-[11.67px]">Shop</span>
                        </div>
                        <img
                          src={arrowBottomRight}
                          alt=""
                          className="arrowRotate ml-auto"
                        />
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-gray-300 px-5 mb-3 w-full">
                        <div className="flex items-center">
                          <span className="border-r border-gray-300 py-3 pr-5">
                            <img src={blog} alt="" />
                          </span>
                          <span className="ml-[11.67px]">My blog</span>
                        </div>
                        <img
                          src={arrowBottomRight}
                          alt=""
                          className="arrowRotate ml-auto"
                        />
                      </button>
                    </li>
                  </ul>

                  {/*Help and Contact selection for Mobile */}
                  <div className="flex items-center justify-between h-11 mb-3">
                    <button className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                      <img src={helpBlack} alt="misic" />
                      <span className="ml-[10px]">Help</span>
                    </button>
                    <Link
                      to="#"
                      className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-gray-300 bg-bgColor ss:w-[48%]"
                    >
                      <img src={contact} alt="map" />
                      <span className="ml-[10px]">Contact</span>
                    </Link>
                  </div>

                  {/* Line */}
                  <div className="line border-b w-[300px] border-gray-300 mb-3 ls:w-full"></div>

                  {/* Location and Language */}
                  <div className="flex items-center justify-between h-11 mb-3">
                    <button className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                      <img src={location} alt="music" />
                      <span className="ml-[10px] mr-5">Tashkent</span>
                      <img src={arrowBottomBlack} alt="" />
                    </button>
                    <Link
                      to="#"
                      className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-gray-300 bg-bgColor ss:w-[48%]"
                    >
                      <img src={eng} alt="map" />
                      <span className="ml-[10px] mr-5">English</span>
                      <img src={arrowBottomBlack} alt="map" />
                    </Link>
                  </div>
                </div>
                {/*Ending of Opened Hamburger menu section */}
              </div>

              {/* Logo section */}
              <NavLink
            to="/"
            className="flex justify-center items-center rounded-lg h-[48px] ss:w-[calc(100%-96px)] ss:p-2 ll:p-1  md:p-0 md:w-[155px] ss:ml-2 md:ml-[0px]  ss:bg-btnBgColor md:bg-transparent"

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
                {VolumeTypeArray.filter(
                  (data) => data.id == dressInfo.type
                ).map((data) => {
                  return (
                    <img
                      key={data?.id}
                      className="w-[22px]"
                      src={data?.icons}
                      alt="logo"
                    />
                  ); 
                })}
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
                  {CategoryTypeArray.filter(
                    (data) => data.id === dressInfo?.type
                  ).map((data) => {
                    return (
                      <img
                        key={data?.id}
                        src={data?.icons}
                        alt={data?.type}
                        className="w-[18px]"
                      />
                    );
                  })}
                  <span
                    className={` px-[9.5px] not-italic font-AeonikProMedium text-sm leading-4 mt-1`}
                  >
                    Каталог
                  </span>
                </button>
                <img src={search} alt="search" className="flex md:hidden" />
                <input
                  type="text"
                  placeholder="Поиск продуктов или брендов"
                  className="bg-transparent w-full px-3 h-[44px] text-sm border border-transparent md:border-searchBgColor "
                />
                <button className="bg-searchBgColor border border-searchBgColor w-[100px]  h-[44px] items-center justify-center rounded-r-lg  hidden md:flex -ml-[2px]">
                  <img src={search} alt="search" />
                </button>
              </div>

              {/* Line border */}
              <div className="line h-5 border-x-[1px]   text-textColor ss:hidden md:block mx-3"></div>

              {/* Map section */}
              <NavLink
                to="/delivery-points"
                className="items-center justify-center bg-btnBgColor rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex"
              >
                <img src={map} alt="map" className="pr-[6px]" />
                <span className="font-AeonikProMedium text-sm  ">Карта</span>
              </NavLink>

              {/* Line border */}
              <div className="line h-5 border-x-[1px]   text-textColor ss:hidden md:block mx-3"></div>

              {/* User section */}
              <NavLink
                to="/sign_in"
                className=" bg-btnBgColor rounded-lg items-center justify-center w-11 h-11 mr-2 hidden md:flex"
              >
                <img src={user} alt="" />
              </NavLink>

              {/* Heart section */}
              <button className="bg-btnBgColor rounded-lg items-center justify-center w-11 h-11 mr-2 hidden md:flex">
                {/* <FaRegHeart /> */}
                <img src={heart} className={"w-5 h-5"} alt="heart" />
              </button>

              {/* Bucket section */}
              <button className=" bg-btnBgColor rounded-lg flex items-center justify-center w-11 h-11 relative md:flex ss:hidden">
                <img src={bucket} alt="bucket" />
                <span className="count bg-red-700 w-4 h-4 text-white text-[10px] rounded-lg flex items-center justify-center absolute top-0 right-0 font-AeonikProMedium">
                  {" "}
                  4{" "}
                </span>
              </button>
            </div>
          </div>
          {/* Ending of Full Screen page sesction Map*/}

          <div
            className={`h-fit top-30  left-[16px] fixed  bg-white   shadow-lg duration-200 z-50 ${
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
         
          {/* Ending of Blocked  Hamburger Menu section  */}
        </div>
      </div>
    </div>
  );
};
export default AuthenMedium;
