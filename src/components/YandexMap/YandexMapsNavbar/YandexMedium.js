import React, { useState, useContext } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import { Popover } from "antd";
import {
  CotegoryIcons,
  MenuCloseIcons,
  MenuOpenIcons,
  MapIcons,
  PersonIcons,
  HeartIcons,
  VolumeIcons,
  SearchIcons,
} from "../../../assets/icons";
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
  AllSeasonDesktop,
  AllSeason,
  allBrandDesktop,
} from "../../../assets";
import Cookies from "js-cookie";
import { MdClose } from "react-icons/md";


const YandexMedium = ({ getYandexSearchName }) => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const navigate = useNavigate()
  const handleMainMenu = () => {
    setDressInfo({ ...dressInfo, openMainMenu: !dressInfo.openMainMenu });
  };
  const [searchMarketName, setSearchMarketName] = useState()

  const SeasonTypeArray = [
    { id: 5555, type: "", icons: AllSeasonDesktop },
    { id: 2222, type: "Лето", icons: summerSeason },
    { id: 3333, type: "Осень", icons: autummSeason },
    { id: 4444, type: "Зима", icons: winterSeason },
    { id: 1111, type: "Весна", icons: springSeason },
  ];
  const SeasonTypeArrayMobile = [
    { id: 5555, type: "Все", icons: AllSeason },
    { id: 2222, type: "Лето", icons: summerSeason },
    { id: 3333, type: "Осень", icons: autummSeason },
    { id: 4444, type: "Зима", icons: winterSeason },
    { id: 1111, type: "Весна", icons: springSeason },
  ];
  const BrandTypeArray = [
    { id: 1111, type: "Весна", icons: BrandSpring },
    { id: 2222, type: "Лето", icons: BrandSummer },
    { id: 3333, type: "Осень", icons: BrandAutumm },
    { id: 4444, type: "Зима", icons: BrandWinter },
    { id: 5555, type: "Все", icons: allBrandDesktop },
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
    <section className="ss:w-fit md:w-[120px] h-fit m-0 p-0 ">
      {SeasonTypeArray.map((value) => {
        return (
          <article
            key={value?.id}
            className="w-full h-[42px] md:flex items-center hidden  md:pl-3 justify-start not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor"
            onClick={() => handleSeason(value.id)}
          >
            <figure className="mr-2 md:mr-3">
              <img src={value?.icons} alt="" />
            </figure>
            <article
              className={`flex font-AeonikProMedium text-base text-black not-italic ${dressInfo?.TextHoverSeason}`}
            >
              {value?.type}
            </article>
          </article>
        );
      })}
      {SeasonTypeArrayMobile.map((value) => {
        return (
          <article
            key={value?.id}
            className="w-full h-[42px] flex items-center md:hidden  md:pl-3 justify-start not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor"
            onClick={() => handleSeason(value.id)}
          >
            <figure className="mr-2 md:mr-3">
              <img src={value?.icons} alt="" />
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
  const handleChange = (event) => {
    setSearchMarketName(event.target.value);
  }

  const handleClear = () => {
    setSearchMarketName("");
    getYandexSearchName({
      searchMarketName: null
    })
  };
  function getSearchClick() {
    getYandexSearchName({
      searchMarketName: searchMarketName
    })
  }
  // console.log(searchMarketName, "searchMarketName");

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
          <button
            type="button"
            onClick={() => navigate('/')}
            // to="/"
            className="flex justify-center items-center rounded-xl h-[48px] ss:w-[calc(100%-96px)] ss:p-2 ll:p-1  md:p-0 md:w-[155px] ss:ml-2 md:ml-[0px]  ss:bg-btnBgColor md:bg-transparent"
          >
            {BrandTypeArray.filter((data) => data.id === dressInfo.type).map(
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
          </button>

          {/* Voice section */}
          <div
            className={`bg-white w-11 h-11 ml-[25px] rounded-xl cursor-pointer hidden items-center justify-center md:flex`}
          >
            <span>
              <VolumeIcons colors={dressInfo?.ColorSeason} />
            </span>
          </div>

          {/* Weather seection */}
          {/* Weather section */}
          <article className="w-12 h-12 md:w-[120px]  md:h-11 bg-btnBgColor border border-searchBgColor rounded-xl ml-2">

            <div className="w-full h-full ">
              <Popover
                className="w-full h-full flex items-center justify-center rounded-lg cursor-pointer  md:px-2 md:gap-x-[5px] "
                open={openwear}
                onOpenChange={handleOpenChangeWear}
                trigger="click"
                options={["Hide"]}
                placement="bottom"
                content={contentWear}
              >
                {SeasonTypeArray.filter(
                  (e) => e.id === dressInfo.type
                ).map((data) => {
                  return (
                    <figure
                      key={data?.id}
                      className="w-full h-full hidden md:flex  items-center justify-center select-none cursor-pointer   ">
                      <img
                        src={data?.icons}
                        alt="weather"
                        className=" "
                      />
                      {
                        data?.type &&
                        <figcaption className=" ml-[10px] font-AeonikProMedium  flex items-center text-[15px] ">
                          {data?.type}
                        </figcaption>
                      }
                    </figure>
                  );
                })}
                {SeasonTypeArrayMobile.filter(
                  (e) => e.id === dressInfo.type
                ).map((data) => {
                  return (
                    <figure
                      key={data?.id}
                      className="w-full h-full md:hidden flex items-center justify-center select-none cursor-pointer  ">
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
          <div className="flex items-center justify-center rounded-xl font-AeonikProMedium h-[44px]  md:border-transparent md:w-[676px] ml-2 ss:hidden md:flex">
            {/* Catalog section */}
            <button
              className={`items-center ${dressInfo?.BtnOpacitySeason} justify-center px-5 gap-x-[10px] h-[44px] rounded-l-xl cursor-pointer hidden md:flex`}
            >
              <span>
                <CotegoryIcons colors={dressInfo?.ColorSeason} />
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
            <div className="w-full flex items-center relative">
              <input
                type="text"
                placeholder="Поиск магазинов на карте"
                className="bg-transparent w-full px-3 h-[44px] text-sm border  md:border-searchBgColor placeholder:font-AeonikProRegular"
                value={searchMarketName}
                onChange={handleChange}
              />
              {searchMarketName &&
                <button
                  onClick={handleClear}
                  className="absolute right-2 "
                  type="button">
                  <MdClose size={20} color={"#a1a1a1"} />
                </button>}

            </div>

            <button type="button" onClick={() => getSearchClick()} className="bg-searchBgColor border border-searchBgColor w-[100px]  h-[44px] items-center justify-center rounded-r-xl  hidden md:flex -ml-[2px]">
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
                ? dressInfo?.LinkActiveSeason
                : "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex"
            }
          >
            <span className="pr-[6px]">
              <MapIcons colors={dressInfo?.ColorSeason} />
            </span>

            <span className="font-AeonikProMedium text-sm  ">Карта</span>
          </NavLink>

          {/* Line border */}
          <div className="line h-5 border-x-[1px] text-textColor ss:hidden md:block mx-3"></div>

          {/* User section */}
          {Cookies.get("DressmeUserToken") ? (
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
