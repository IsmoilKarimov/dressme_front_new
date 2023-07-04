/* eslint-disable no-template-curly-in-string */
import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { dressMainData } from "../../../ContextHook/ContextMenu";
// import { GrClose } from "react-icons/gr";
import { Popover } from "antd";
import {
  CotegoryIcons,
  MenuCloseIcons,
  MenuOpenIcons,
  MapIcons,
  PersonIcons,
  BasketIcons,
  HeartIcons,
  VolumeIcons,
  SearchIcons,
} from "../../../AssetsMain/icons";
import {
  BrandSpring,
  BrandSummer,
  BrandAutumm,
  BrandWinter,
  autummSeason,
  springSeason,
  summerSeason,
  winterSeason,
  ActivePersonImg,
} from "../../../AssetsMain";

const YandexMedium = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const handleMainMenu = () => {
    setDressInfo({ ...dressInfo, openMainMenu: !dressInfo.openMainMenu });
  };

  let dataStyle = "";
  let hoverText = "";
  let IconsColor = "";
  let MapsIconsColor = "";

  if (dressInfo?.type === 1111) {
    dataStyle = "bg-bgSpring bg-opacity-10    text-borderSpring ";
    hoverText = " hover:text-borderSpring ";
    MapsIconsColor = "#008F0E";
    IconsColor =
      "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex border border-borderSpring text-borderSpring";
  }
  if (dressInfo?.type === 2222) {
    dataStyle = "bg-bgSummer  bg-opacity-10  text-borderSummer";
    MapsIconsColor = "#EAA700";
    IconsColor =
      "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex border border-borderSummer text-borderSummer";
    hoverText = " hover:text-borderSummer ";
  }
  if (dressInfo?.type === 3333) {
    dataStyle = "bg-bgAutumm bg-opacity-10  text-borderAutumm";
    MapsIconsColor = "#E17A02";
    IconsColor =
      "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex border border-borderAutumm text-borderAutumm";
    hoverText = " hover:text-borderAutumm ";
  }
  if (dressInfo?.type === 4444) {
    dataStyle = "bg-bgWinter bg-opacity-10  text-borderWinter";
    MapsIconsColor = "#007DCA";
    IconsColor =
      "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex border border-borderWinter text-borderWinter";
    hoverText = " hover:text-borderWinter ";
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
    <div className="ss:w-fit md:w-[120px] h-fit m-0 p-0  ">
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
            <span className={`ss:hidden md:inline-block font-AeonikProMedium text-base text-black not-italic ${hoverText}`}
            >
              {value?.type}
            </span>
          </p>
        );
      })}
    </div>
  );

  return (
      <div className=" flex justify-between items-center m-auto ">
        {/* Starting of Full Screen page section */}
        <div className="w-full flex justify-center items-center py-3 overscroll-none overflow-y-hidden">
          <div className=" w-full flex items-center ss:w-full md:w-fit justify-between">
            {/* Menu section */}
            <div
              onClick={handleMainMenu}
              className="w-12 h-12 bg-white md:hidden  rounded-xl ss:flex items-center justify-center "
            >
              {dressInfo?.openMainMenu ? (
                <span>
                  <MenuOpenIcons />
                </span>
              ) : (
                <span>
                  <MenuCloseIcons />
                </span>
              )}
            </div>
  
            {/* Logo section */}
            <NavLink
              to="/"
              className="flex justify-center items-center rounded-xl h-[48px] ss:w-[calc(100%-96px)] ss:p-2 ll:p-1  md:p-0 md:w-[155px] ss:ml-2 md:ml-[0px]  ss:bg-btnBgColor md:bg-transparent"
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
            <div className={`bg-white w-11 h-11 ml-[25px] rounded-xl cursor-pointer hidden items-center justify-center md:flex`}
            >
              <span>
                <VolumeIcons colors={MapsIconsColor} />
              </span>
            </div>
  
            {/* Weather seection */}
            <div className="w-12 h-12 md:w-[120px] md:h-11 bg-white   rounded-xl  md:rounded-xl ml-2">
              {SeasonTypeArray.filter((data) => data.id === dressInfo.type).map(
                (data) => {
                  return (
                    <Popover
                      key={data?.id}
                      open={openwear}
                      onOpenChange={handleOpenChangeWear}
                      className="w-full h-full flex items-center justify-center rounded-xl cursor-pointer  "
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
                        <div className="ss:hidden  font-AeonikProMedium  hidden md:flex items-center text-[15px] ">
                          {data?.type}
                        </div>
                      </div>
                    </Popover>
                  );
                }
              )}
            </div>
  
            {/* Searching section */}
            <div className="flex items-center justify-center rounded-xl font-AeonikProMedium h-[44px]  md:border-transparent md:w-[676px] ml-2 ss:hidden md:flex">
              {/* Catalog section */}
              <button className={`items-center ${dataStyle} justify-center px-5 gap-x-[10px] h-[44px] rounded-l-xl cursor-pointer hidden md:flex`}
              >
                <span>
                  <CotegoryIcons colors={MapsIconsColor} />
                </span>
                <span
                  className={"not-italic font-AeonikProMedium text-sm leading-4"}
                >
                  Категория
                </span>
              </button>
              <span className="flex md:hidden">
                <SearchIcons />
              </span>
              <input
                type="text"
                placeholder="Поиск продуктов или брендов"
                className="bg-transparent w-full px-3 h-[44px] text-sm border border-transparent md:border-searchBgColor placeholder:font-AeonikProRegular"
              />
              <button className="bg-searchBgColor border border-searchBgColor w-[100px]  h-[44px] items-center justify-center rounded-r-xl  hidden md:flex -ml-[2px]">
                <SearchIcons />
              </button>
            </div>
  
            {/* Line border */}
            <div className="line h-5 border-x-[1px] text-textColor ss:hidden md:block mx-3"></div>
  
            {/* Map section */}
            <NavLink
              to="/delivery-points"
              className={({ isActive }) =>
                isActive
                  ? IconsColor
                  : "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex"
              }
              // className={items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex}
            >
              <span className="pr-[6px]">
                <MapIcons colors={MapsIconsColor} />
              </span>
  
              <span className="font-AeonikProMedium text-sm  ">Карта</span>
            </NavLink>
  
            {/* Line border */}
            <div className="line h-5 border-x-[1px] text-textColor ss:hidden md:block mx-3"></div>
  
            {/* User section */}
            {localStorage.getItem("dressMeLogin") ? (
              <NavLink
                to="/my-order"
                className=" bg-btnBgColor rounded-lg items-center justify-center w-11 h-11 mr-2 hidden md:flex"
              >
                {({ isActive }) =>
                  isActive ? (
                    <img src={ActivePersonImg} alt="" />
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
              className="bg-yandexWhite rounded-lg items-center justify-center w-11 h-11 mr-2 hidden md:flex"
            >
              {/* <FaRegHeart /> */}
              <span>
                <HeartIcons colors={"#000"} />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    );
  };
export default YandexMedium;

