import React, { useContext, useState, useEffect } from "react";

import { YMaps, Map, ZoomControl, GeolocationControl, Placemark, Clusterer } from "react-yandex-maps";

import "./yandex.css";
import YandexMapsIndex from "./YandexMapsNavbar/YandexMapsIndex";
import { dressMainData } from "../../ContextHook/ContextMenu";
import NavbarTopOpenMenu from "./YandexMapsNavbar/NavbarTopOpenMenu";
import { Link, NavLink } from "react-router-dom";
import ScrollFilter from "./YandexMapsNavbar/ScrollFilter";
import {
  ArrowTopIcons,
  CommentIcons,
  FullScreenMapsIcons,
  HouseStatisticIcons,
  ListCollectionIcons,
  LocationIcons,
  MapIcons,
  MarketIcons,
  MaximazeMapsIcons,
  MenuCloseIcons,
  PhoneIcons,
  SearchIcons,
  VolumeIcons,
} from "../../assets/icons";
import { UzbekFlag, locationIcons, markerIcons } from "../../assets";
import YandexLocationMarketOpen from "./YandexLocationMarketOpen/YandexLocationMarketOpen";

function YandexMapsDressMe() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const [dressInfo, setDressInfo] = useContext(dressMainData);
  
  const wearGroup = [
    { id: 1, name: "Футболки" },
    { id: 2, name: "Рубашки" },
    { id: 3, name: "Шорты" },
    { id: 4, name: "Джинсы" },
    { id: 5, name: "Свитер" },
    { id: 6, name: "Куртки" },
    { id: 7, name: "Толстовки" },
    { id: 8, name: "Обуви" },
    { id: 9, name: "Куртки" },
    { id: 10, name: "Сапоги" },
    { id: 11, name: "Платья" },
    { id: 12, name: "Юбки" },
    { id: 13, name: "Ремень" },
  ];

  const onMapClick = (e) => {
    if (dressInfo?.yandexOpenMarketLocation) {
      setDressInfo({
        ...dressInfo,
        yandexOpenMarketLocation: false,
      });
    }
  };
  
  const HandleData = (e) => {
    if (dressInfo?.yandexOpenMarketLocation) {
      setDressInfo({
        ...dressInfo,
        yandexOpenMarketLocation: false,
      });
    }
  };

  const handleFullScreen = () => {
    setDressInfo({
      ...dressInfo,
      yandexFullScreen: !dressInfo?.yandexFullScreen,
    });
  };

  const handleOpenMarket = () => {
    setDressInfo({
      ...dressInfo,
      yandexOpenMarket: !dressInfo?.yandexOpenMarket,
    });
  };

  // --------------Open Main MenusetDressInfo
  const handlePlaceMark = (value) => {
    setDressInfo({
      ...dressInfo,
      yandexGetMarketId: value,
      yandexOpenMarketLocation: true,
    });
  };

  //------------------------------------------------------------------------------------------------
  const mapState = {
    center: [41.311753, 69.241822],
    zoom: 14,
  };
  //------------------------------------------------------------------------------------------------
  let IconsColor = "";

  if (dressInfo?.type === 1111) {
    IconsColor = "#008F0E";
  }
  if (dressInfo?.type === 2222) {
    IconsColor = "#EAA700";
  }
  if (dressInfo?.type === 3333) {
    IconsColor = "#E17A02";
  }
  if (dressInfo?.type === 4444) {
    IconsColor = "#007DCA";
  }

  return (
    <div className=" h-fit w-full flex justify-center overflow-hidden overflow-y-hidden">
      <div className="w-[100%] h-[100vh] border-b border-searchBgColor overflow-hidden">
        {/* Laptop device for */}
        {screenSize.width > 768 && (
          <div className={`w-full bottom-[0px]  overflow-hidden  md:w-[769px] fixed md:left-1/2 md:right-1/2 md:translate-x-[-50%] md:translate-y-[-50%]
          ${
            dressInfo?.yandexOpenMarketLocation
              ? `z-[102] h-[350px]  bottom-[-75px]`
              : " h-0 bottom-[0]  z-[-10]"
          } ease-linear duration-300`}
          >
            <YandexLocationMarketOpen />
          </div>
        )}
        {screenSize.width <= 768 && (
          <div className={`fixed w-full bg-white z-[102] left-0 right-0 overflow-hidden  ${
              dressInfo?.yandexOpenMarketLocation
                ? "h-[562px] bottom-0 ease-linear duration-300 "
                : "h-0 bottom-0 ease-linear duration-300 "
            }  ease-linear duration-300 `}
          >
            <YandexLocationMarketOpen />
          </div>
        )}
        {/* Navbaryandex */}
        <div className={`absolute z-50 hidden md:block ${
            !dressInfo?.yandexOpenMenu
              ? "top-0 ease-linear duration-500 "
              : "top-[-250px] ease-linear duration-500 "
          }  ease-linear duration-500 w-full`}
        >
          <YandexMapsIndex />
        </div>
        <div className={`absolute z-50 right-2 ${
            dressInfo?.yandexOpenMenu
              ? "top-2  right-2 ease-linear duration-500 "
              : "top-[-250px]  right-2 ease-linear duration-500 "
          }  ease-linear duration-500 w-[74%] `}
        >
          <NavbarTopOpenMenu />
        </div>

        <YMaps query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }} >
          <Map
            defaultState={mapState}
            onClick={onMapClick}
            onMouseDown={HandleData}
            width="100%"
            height="100%"
            modules={["control.FullscreenControl"]}
          >
            <div
              onClick={handleFullScreen}
              className={`absolute right-3 ${
                !dressInfo?.yandexFullScreen
                  ? "bottom-[128px] md:bottom-[87px]"
                  : "bottom-[65px] md:bottom-[87px]"
              }  cursor-pointer z-[51] w-10 h-10 rounded-lg bg-white ss:flex items-center justify-center block md:hidden`}
            >
              {dressInfo?.yandexFullScreen ? (
                <span>
                  <FullScreenMapsIcons />
                </span>
              ) : (
                <span>
                  <MaximazeMapsIcons />
                </span>
              )}
            </div>
            <GeolocationControl
              options={{
                float: "right",
                position: { bottom: 220, right: 10 },
              }}
            />
            <ZoomControl
              options={{
                float: "right",
                position: { bottom: 270, right: 10, size: "small" },
                size: "small",
              }}
            />{" "}
            {/* ---------- */}
            <Clusterer
              className={"placemarkCLuster"}
              options={{
                preset: "islands##004773ClusterIcons",
                groupByCoordinates: false,
              }}
            >
              {dressInfo?.MarketList.map((data, index) => (
                <Placemark
                  className={"placemarkCLuster cursor-pointer"}
                  key={index}
                  onClick={() => handlePlaceMark(data?.marketId)}
                  geometry={data?.cordinate}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: markerIcons,
                    iconImageSize: [32, 32],
                  }}
                  modules={["geoObject.addon.balloon"]}
                />
              ))}
            </Clusterer>

            {/* Yandex Main menu */}
            <div className={`max-w-[440px] w-[100%] fixed bg-white top-[70px] left-0 h-[100vh] px-3 ${
                dressInfo?.openMainMenu
                  ? "left-[-500px] md:left-[-5000px] z-[-80] ease-linear duration-500"
                  : "hamburger flex flex-col ease-linear duration-500 overscroll-none z-[105]"
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
                  <button className="left h-[52px] rounded-lg flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]">
                    <span>
                      <VolumeIcons colors={dressInfo?.ColorSeason} />
                    </span>
                    <span className=" ml-[10px]">Музика</span>
                  </button>
                  <NavLink
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
                    <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-[52px] border rounded-lg border-searchBgColor px-5 mb-3 w-full">
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
                  <button className="left h-[52px] rounded-lg flex items-center justify-center font-AeonikProMedium -lg-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]">
                    <span>
                      <CommentIcons colors={"#000"} />
                    </span>
                    <span className="ml-[10px]">Help</span>
                  </button>
                  <Link
                    to="#"
                    className="left h-[52px] rounded-lg flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                  >
                    <span>
                      <PhoneIcons colors={"#000"} />
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
            {/* Yandex Search */}
            <div className={`absolute  ${
                !dressInfo?.yandexFullScreen ? "top-[80px]" : "top-[8px]"
              }  md:top-auto md:bottom-[24px] left-0 right-0 mx-auto  overflow-hidden z-50 bg-yandexNavbar backdrop-blur-sm rounded-xl h-[48px] w-[94%] md:w-fit shadow-lg`}
            >
              <div
                onClick={() => {
                  setDressInfo({
                    ...dressInfo,
                    yandexOpenMarketLocation: !dressInfo.yandexOpenMarketLocation,
                  });
                }}
                className="w-full h-full flex justify-between "
              >
                <div className="w-full h-full flex items-center px-3">
                  <div>
                    <img src={locationIcons} alt="" />
                  </div>
                  <div className="h-full flex items-center w-full mx-3">
                    <input
                      type="text"
                      name="search"
                      className="h-full  w-full bg-transparent"
                      placeholder="Поиск мест и адресов"
                      autoComplete="off"
                    />
                  </div>
                  <button type="button">
                    <SearchIcons />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`absolute block md:hidden ml-[-1000px] duration-1000 overflow-hidden z-[103] rounded-lg shadow-lg left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%]  md:bottom-[120px]
              ${
                dressInfo?.yandexFullScreen
                  ? "bottom-[10px] md:bottom-auto"
                  : "bottom-[10px] md:bottom-auto"
              }
              ${
                dressInfo?.yandexOpenMarket &&
                "w-[calc(100%-56px)] ml-[0] duration-1000 bg-yandexNavbar backdrop-blur-sm"
              }

              `}
            >
              <div className="w-full h-full flex items-center justify-between  ">
                <div
                  onClick={handleOpenMarket}
                  className={`w-full h-12 flex justify-center gap-x-3 items-center rounded-lg`}
                >
                  <div className="flex items-center justify-center">
                    <span>
                      <MenuCloseIcons />
                    </span>
                    <div className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]">
                      Магазины
                    </div>
                  </div>
                  {/* )} */}
                </div>
              </div>
            </div>
            {!dressInfo?.yandexOpenMarket && (
              <div
                className={`fixed block md:hidden  bg-white  z-[55]  ${
                  !dressInfo?.yandexFullScreen ? "bottom-[63px] " : "bottom-[0]"
                }   w-full  bg-yandexNavbar flex items-center py-2

            `}
              >
                {/* <YandexFilter /> */}
                <ScrollFilter _class="items gap-x-2 pl-3">
                  {wearGroup?.map((data) => {
                    return (
                      <div key={data.id} className={`item`}>
                        <p className=" cursor-pointer rounded-xl bg-white not-italic font-AeonikProMedium text-sm text-black tracking-[1%] ">
                          {data?.name || "0"}
                        </p>
                      </div>
                    );
                  })}
                </ScrollFilter>
              </div>
            )}
            {/* ---------- */}
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default React.memo(YandexMapsDressMe);
