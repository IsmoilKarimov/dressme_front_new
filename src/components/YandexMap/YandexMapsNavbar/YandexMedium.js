import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  autummBrand,
  AutummCategory,
  autummSeason,
  autummVolume,
  bucket,
  heart,
  map,
  MenuClose,
  MenuOpen,
  search,
  springBrand,
  SpringCategory,
  springSeason,
  springVolume,
  summerBrand,
  SummerCategory,
  summerSeason,
  summerVolume,
  user,
  winterBrand,
  WinterCategory,
  winterSeason,
  winterVolume,
} from "../../../assets/imgs";
import { dressMainData } from "../../../ContextHook/ContextMenu";
// import { GrClose } from "react-icons/gr";
import { Popover } from "antd";

const YandexMedium = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const handleMainMenu = () => {
    setDressInfo({ ...dressInfo, openMainMenu: !dressInfo.openMainMenu });
  };

  let dataStyle = "";
  let hoverText = "";
  let IconsColor = "";

  if (dressInfo?.type === 1111) {
    dataStyle = "bg-bgSpring bg-opacity-10	  text-borderSpring ";
    hoverText = " hover:text-borderSpring ";
    IconsColor =
      "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex border border-borderSpring text-borderSpring";
  }
  if (dressInfo?.type === 2222) {
    dataStyle = "bg-bgSummer  bg-opacity-10  text-borderSummer";
    IconsColor =
      "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex border border-borderSummer text-borderSummer";
    hoverText = " hover:text-borderSummer ";
  }
  if (dressInfo?.type === 3333) {
    dataStyle = "bg-bgAutumm bg-opacity-10  text-borderAutumm";
    IconsColor =
      "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex border border-borderAutumm text-borderAutumm";
    hoverText = " hover:text-borderAutumm ";
  }
  if (dressInfo?.type === 4444) {
    dataStyle = "bg-bgWinter bg-opacity-10  text-borderWinter";
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
    <div className=" flex justify-between items-center m-auto">
      {/* Starting of Full Screen page section */}
      <div className="w-full flex justify-center items-center py-3 overscroll-none overflow-y-hidden">
        <div className=" w-full flex items-center ss:w-full md:w-fit justify-between ">
          <div
            onClick={handleMainMenu}
            className="w-12 h-12 bg-white ss:block md:hidden  rounded-lg ss:flex items-center justify-center "
          >
            {dressInfo?.openMainMenu ? (
              <img src={MenuOpen} alt="" />
            ) : (
              <img src={MenuClose} alt="" />
            )}
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
            className={` bg-white w-11 h-11 ml-[25px] rounded-lg cursor-pointer hidden items-center justify-center md:flex`}
          >
            {VolumeTypeArray.filter((data) => data.id == dressInfo.type).map(
              (data) => {
                return (
                  <img
                    key={data?.id}
                    className="w-[22px]"
                    src={data?.icons}
                    alt="logo"
                  />
                );
              }
            )}
          </div>

          {/* Weather seection */}
          <div className="w-12 h-12 md:w-[120px] md:h-11 bg-white   rounded-lg  md:rounded-lg ml-2">
            {SeasonTypeArray.filter((data) => data.id == dressInfo.type).map(
              (data) => {
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
              }
            )}
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
            className={({ isActive }) =>
              isActive 
                ? IconsColor
                : "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex"
            }
            // className={`items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex`}
          >
            <img src={map} alt="map" className="pr-[6px]" />
          
            <span className="font-AeonikProMedium text-sm  ">Карта</span>
          </NavLink>

          {/* Line border */}
          <div className="line h-5 border-x-[1px]   text-textColor ss:hidden md:block mx-3"></div>

          {/* User section */}
          <NavLink
            to="/sign_in"
            className=" bg-yandexWhite rounded-lg items-center justify-center w-11 h-11 mr-2 hidden md:flex"
          >
            <img src={user} alt="" />
          </NavLink>

          {/* Heart section */}
          <button className="bg-yandexWhite rounded-lg items-center justify-center w-11 h-11 mr-2 hidden md:flex">
            {/* <FaRegHeart /> */}
            <img src={heart} className={"w-5 h-5"} alt="heart" />
          </button>

          {/* Bucket section */}
          <button className=" bg-yandexWhite rounded-lg flex items-center justify-center w-11 h-11 relative md:flex ss:hidden">
            <img src={bucket} alt="bucket" />
            <span className="count bg-red-700 w-4 h-4 text-yandexWhite text-[10px] rounded-lg flex items-center justify-center absolute top-0 right-0 font-AeonikProMedium">
              {" "}
              4{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default YandexMedium;
