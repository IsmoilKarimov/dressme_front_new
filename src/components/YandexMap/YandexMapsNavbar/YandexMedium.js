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
import { HomeMainDataContext } from "../../../ContextHook/HomeMainData";
import { MainPageAudioContext } from "../../../ContextHook/MainPageAudio";
import { useTranslation } from "react-i18next";
import { LanguageDetectorDress } from "../../../language/LanguageItems";
import { SaesonDetectorDress } from "../../../ContextHook/SeasonContext";

const YandexMedium = ({ getYandexSearchName }) => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [data] = useContext(HomeMainDataContext);
  const [audioPlay, setAudioPlay] = useContext(MainPageAudioContext);
  const { i18n, t } = useTranslation('yandexmap')
  const [seasonDetector, setSeasonDetector] = useContext(SaesonDetectorDress)

  const navigate = useNavigate();
  const handleMainMenu = () => {
    setDressInfo({ ...dressInfo, openMainMenu: !dressInfo.openMainMenu });
  };
  const [searchMarketName, setSearchMarketName] = useState();
  const [languageDetector, setLanguageDetector] = useContext(LanguageDetectorDress)

  const SeasonTypeArray = [
    { id: 5555, type_ru: "", type_uz: "", icons: AllSeasonDesktop },
    { id: 1111, type_ru: "Лето", type_uz: "Yoz", icons: summerSeason },
    { id: 2222, type_ru: "Осень", type_uz: "Kuz", icons: autummSeason },
    { id: 3333, type_ru: "Зима", type_uz: "Qish", icons: winterSeason },
    { id: 4444, type_ru: "Весна", type_uz: "Bahor", icons: springSeason },
  ];
  const SeasonTypeArrayMobile = [
    { id: 5555, type_ru: "Все", type_uz: "Barchasi", icons: AllSeason },
    { id: 1111, type_ru: "Лето", type_uz: "Yoz", icons: summerSeason },
    { id: 2222, type_ru: "Осень", type_uz: "Kuz", icons: autummSeason },
    { id: 3333, type_ru: "Зима", type_uz: "Qish", icons: winterSeason },
    { id: 4444, type_ru: "Весна", type_uz: "Bahor", icons: springSeason },
  ];
  const BrandTypeArray = [
    { id: 4444, type_ru: "Весна", type_uz: "Bahor", icons: BrandSpring },
    { id: 1111, type_ru: "Лето", type_uz: "Yoz", icons: BrandSummer },
    { id: 2222, type_ru: "Осень", type_uz: "Kuz", icons: BrandAutumm },
    { id: 3333, type_ru: "Зима", type_uz: "Qish", icons: BrandWinter },
    { id: 5555, type_ru: "Все", type_uz: "Barchasi", icons: allBrandDesktop },
  ];

  // ----------------Wear state management----------------------------
  const [openwear, setOpenwear] = useState(false);
  const handleOpenChangeWear = (newOpen) => {
    setOpenwear(newOpen);
  };

  const handleSeason = (id) => {
    setSeasonDetector({ ...seasonDetector, typeId: id })

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
            onClick={() => handleSeason(value?.id)}
          >
            <figure className="mr-2 md:mr-3">
              <img src={value?.icons} alt="" />
            </figure>
            <article
              className={`flex font-AeonikProMedium text-base text-black not-italic ${seasonDetector?.TextHoverSeason}`}
            >
              {languageDetector?.typeLang === 'ru' && value?.type_ru}
              {languageDetector?.typeLang === 'uz' && value?.type_uz}
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
              className={`flex font-AeonikProMedium text-base text-black not-italic ${seasonDetector?.TextHoverSeason}`}
            >
              {languageDetector?.typeLang === 'ru' && value?.type_ru}
              {languageDetector?.typeLang === 'uz' && value?.type_uz}
            </article>
          </article>
        );
      })}
    </section>
  );
  const handleChange = (event) => {
    setSearchMarketName(event.target.value);
  };

  const handleClear = () => {
    setSearchMarketName("");
    getYandexSearchName({
      searchMarketName: null,
    });
  };
  function getSearchClick() {
    getYandexSearchName({
      searchMarketName: searchMarketName,
    });
  }
  // console.log(searchMarketName, "searchMarketName");
  const _handleKeyDownSearchYandex = (event) => {
    if (event.key === "Enter") {
      getYandexSearchName({
        searchMarketName: searchMarketName,
      });
    }
  };
  // const goCatalogId = (id) => {
  //   navigate(`/categories/${id}`);
  // };
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
            onClick={() => navigate("/")}
            // to="/"
            className="flex justify-center items-center rounded-xl h-[48px] ss:w-[calc(100%-96px)] ss:p-2 ll:p-1  md:p-0 md:w-[155px] ss:ml-2 md:ml-[0px]  ss:bg-btnBgColor md:bg-transparent"
          >
            {BrandTypeArray.filter((data) => data.id === seasonDetector?.typeId).map(
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
            onClick={() => {
              setAudioPlay(!audioPlay);
            }}
            className={`bg-white w-11 h-11 ml-[25px] rounded-xl cursor-pointer hidden items-center justify-center md:flex`}
          >
            <span>
              <VolumeIcons colors={seasonDetector?.ColorSeason} />
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
                {SeasonTypeArray.filter((e) => e.id === seasonDetector?.typeId).map(
                  (data) => {
                    return (
                      <figure
                        key={data?.id}
                        className="w-full h-full hidden md:flex  items-center justify-center select-none cursor-pointer   "
                      >
                        <img src={data?.icons} alt="weather" className=" " />
                        {(data?.type_ru || data?.type_uz) && (
                          <figcaption className=" ml-[10px] font-AeonikProMedium  flex items-center text-[15px] ">
                            {languageDetector?.typeLang === 'ru' && data?.type_ru}
                            {languageDetector?.typeLang === 'uz' && data?.type_uz}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }
                )}
                {SeasonTypeArrayMobile.filter(
                  (e) => e.id === seasonDetector?.typeId
                ).map((data) => {
                  return (
                    <figure
                      key={data?.id}
                      className="w-full h-full md:hidden flex items-center justify-center select-none cursor-pointer  "
                    >
                      <img src={data?.icons} alt="weather" className="mr-0 " />
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
              className={`items-center ${seasonDetector?.BtnOpacitySeason} justify-center px-5 gap-x-[10px] h-[44px] rounded-l-xl cursor-pointer hidden md:flex`}
              onClick={() =>
                setDressInfo({
                  ...dressInfo,
                  openCatologId: !dressInfo?.openCatologId,
                })
              }
            >
              <span>
                <CotegoryIcons colors={seasonDetector?.ColorSeason} />
              </span>
              <span
                className={"not-italic font-AeonikProMedium text-sm leading-4"}
              >
                {t("YMcategory")}
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
                placeholder={t("YMsearch")}
                className="bg-transparent w-full px-3 h-[44px] text-sm border  md:border-searchBgColor placeholder:font-AeonikProRegular"
                value={searchMarketName}
                onChange={handleChange}
                onKeyDown={_handleKeyDownSearchYandex}
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
              <SearchIcons />
            </button>
          </div>

          {/* Line border */}
          <div className="line h-5 border-x-[1px] text-textColor ss:hidden md:block mx-3"></div>

          {/* Map section */}
          <NavLink
            to="/locations"
            className={({ isActive }) =>
              isActive
                ? seasonDetector?.LinkActiveSeason
                : "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex"
            }
          >
            <span className="pr-[6px]">
              <MapIcons colors={seasonDetector?.ColorSeason} />
            </span>

            <span className="font-AeonikProMedium text-sm  ">{t("YMmap")}</span>
          </NavLink>

          {/* Line border */}
          <div className="line h-5 border-x-[1px] text-textColor ss:hidden md:block mx-3"></div>

          {/* User section */}
          {Cookies.get("DressmeUserToken") ? (
            <NavLink
              to="/profile/edit"
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
