import React, { useContext, useState, useEffect } from "react";

import {
  YMaps,
  Map,
  ZoomControl,
  GeolocationControl,
  Placemark,
  SearchControl,
} from "react-yandex-maps";

import "./yandex.css";
import YandexMapsIndex from "./YandexMapsNavbar/YandexMapsIndex";
import { dressMainData } from "../../ContextHook/ContextMenu";
import NavbarTopOpenMenu from "./YandexMapsNavbar/NavbarTopOpenMenu";
import { Link, NavLink } from "react-router-dom";
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
  SortIcons,
  VolumeIcons,
} from "../../assets/icons";
import { UzbekFlag } from "../../assets";
import YandexLocationMarketOpen from "./YandexLocationMarketOpen/YandexLocationMarketOpen";
import CarouselModalMarket from "./YandexLocationMarketOpen/CarouselModalMarket";
import MarketFilterofMaps from "./YandexLocationMarketOpen/MarketFilterofMaps";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { LanguageDetectorDress } from "../../language/LanguageItems";
import { SaesonDetectorDress } from "../../ContextHook/SeasonContext";
import { LocationIdDetector } from "../../ContextHook/LocationId";
import { MapsList } from "../../ContextHook/MapsShopsList";

function YandexMapsDressMe() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const { t } = useTranslation('yandexmap')
  const [languageDetector] = useContext(LanguageDetectorDress)
  const [seasonDetector] = useContext(SaesonDetectorDress)
  const [locationIdDetector, setLocationIdDetector] = useContext(LocationIdDetector)
  const [mapslist, setMapslist] = useContext(MapsList);

  const url = "https://api.dressme.uz/api/main";

  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [openCarouselModal, setOpenCarouselModal] = useState(false);
  const toggleCarouselModal = React.useCallback(
    () => setOpenCarouselModal(!openCarouselModal),
    [openCarouselModal]
  );

  const [marketsFilterMaps, setMarketsFilterMaps] = useState(false);
  const toggleMarketsFilterMaps = React.useCallback(
    () => setMarketsFilterMaps(false),
    []
  );
  // console.log(mapslist, 'mapslist');
  // request get
  const [FilterSearchByBrand, setFilterSearchByBrand] = useState({});
  const [getAllImgGallery, setGetAllImgGallery] = useState();

  function getImgGallery(childData) {
    setGetAllImgGallery(childData);
  }

  function getFilterSearchByBrand(childData) {
    setFilterSearchByBrand(childData);
  }

  // -------------Get Request
  const typeFilter = String(seasonDetector?.type)?.split("");
  const seasonId = Number(typeFilter?.shift());

  const fetchGetAllData = () => {
    var params = new URLSearchParams();
    dressInfo?.mainRegionId &&
      !dressInfo?.mainSubRegionId &&
      params.append("region", dressInfo?.mainRegionId);
    dressInfo?.mainSubRegionId &&
      params.append("sub_region", dressInfo?.mainSubRegionId);
    FilterSearchByBrand?.searchMarketName &&
      params.append("keywords", FilterSearchByBrand?.searchMarketName);
    dressInfo?.yandexCategoryWear &&
      params.append("category", dressInfo?.yandexCategoryWear);
    dressInfo?.yandexRangePrice[0] &&
      params.append("budget[from]", dressInfo?.yandexRangePrice[0]);
    dressInfo?.yandexRangePrice[1] &&
      params.append("budget[to]", dressInfo?.yandexRangePrice[1]);
    dressInfo?.yandexGenderId &&
      params.append("gender", dressInfo?.yandexGenderId);
    dressInfo?.yandexCategoryBrand &&
      params.append("shop", dressInfo?.yandexCategoryBrand);
    seasonId !== 5 && params.append("season", seasonId);

    fetch(`${url}/map/index?` + params)
      .then((res) => res.json())
      .then((res) => {
        setMapslist(res);
      })
      .catch((err) =>{
        throw new Error(err || "something wrong");

      });
  };

  useEffect(() => {
    fetchGetAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dressInfo?.yandexCategoryWear,
    dressInfo?.yandexCategoryBrand,
    dressInfo?.yandexRangePrice,
    dressInfo?.yandexGenderId,
    FilterSearchByBrand,
    dressInfo?.mainRegionId,
    dressInfo?.mainSubRegionId,
    seasonId,
  ]);

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
  const handlePlaceMark = (shopId, value, cordinate) => {
    // setOpenCordinateMap(cordinate);
    setLocationIdDetector({
      ...locationIdDetector, locationIdForTest: value
    })
    setDressInfo({
      ...dressInfo,
      locationIdParams: value,
      yandexGetMarketId: shopId,
      yandexOpenMarketLocation: true,
    });
  };

  const mapState = {
    center: [41.311151, 69.279737],
    zoom: 12,
  };

  const handleError = () => {
    console.error("Error loading Placemark");
  };

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //   });
  // }, []);

  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <div className="h-fit w-full flex items-center justify-center overflow-hidden overflow-y-hidden">
      <div
        onClick={() => {
          setOpenCarouselModal(false);
          setMarketsFilterMaps(false);
          setDressInfo({ ...dressInfo, yandexOpenRegionList: false });
        }}
        className={`fixed inset-0 z-[215] cursor-pointer duration-200 w-full h-[100vh] bg-black opacity-50
         ${openCarouselModal || marketsFilterMaps ? "" : "hidden"}`}
      ></div>

      <div
        className={`w-full sm:w-fit h-fit flex items-center mx-auto justify-center fixed z-[217]   ${openCarouselModal ? "" : "hidden"
          }`}
      >
        <button
          onClick={() => {
            setOpenCarouselModal(false);
          }}
          className="absolute right-3 sm:right-[-20px] z-[219] opacity-70 top-[-50px] sm:top-[0px] flex items-center justify-center w-10 h-10 md:w-[50px] md:h-[50px]   rounded-full bg-bgColor  border  border-searchBgColor"
        >
          <MenuCloseIcons colors="#000" />
        </button>
        <div className="relative z-[218] !w-full sm:w-fit top-0 rounded-lg overflow-hidden">
          <CarouselModalMarket getAllImgGallery={getAllImgGallery} />
        </div>
      </div>
      <div
        className={`w-[100%] h-[100vh] border-b  border-searchBgColor overflow-hidden ymapsName ${dressInfo?.yandexFullScreen ? " ymapsNameFullScreen" : " "
          } `}
      >
        {/* Laptop device for */}
        {screenSize.width > 768 && (
          <div
            className={`w-full bottom-[0px] overflow-hidden md:w-[769px] fixed md:left-1/2 md:right-1/2 md:translate-x-[-50%] md:translate-y-[-50%]
          ${dressInfo?.yandexOpenMarketLocation
                ? `z-[102] h-[350px]  bottom-[-75px]`
                : " h-0 bottom-[0]  z-[-10]"
              } ease-linear duration-300`}
          >
            <YandexLocationMarketOpen
              onClick={toggleCarouselModal}
              getImgGallery={getImgGallery}
              modalInfo={mapslist}
              carouselIndex={carouselIndex}
              setCarouselIndex={setCarouselIndex}
            />
          </div>
        )}

        {screenSize.width <= 768 && (
          <div
            className={`fixed w-full bg-white rounded-t-[12px] z-[116] left-0 right-0 overflow-hidden  ${dressInfo?.yandexOpenMarketLocation
              ? "h-[570px] overflow-y-auto bottom-0 ease-linear duration-300 "
              : "h-0 bottom-0 ease-linear duration-300 "
              }  ease-linear duration-300 `}
          >
            <YandexLocationMarketOpen
              onClick={toggleCarouselModal}
              getImgGallery={getImgGallery}
              modalInfo={mapslist}
              carouselIndex={carouselIndex}
              setCarouselIndex={setCarouselIndex}
            />
          </div>
        )}
        {/* // -----------------MarketFilterofMaps--------------------------- */}
        {screenSize.width <= 768 && (
          <div
            className={`fixed max-w-[440px] mx-auto w-full bg-white z-[215] left-0 right-0 overflow-hidden  ${marketsFilterMaps
              ? "h-[570px] bottom-0 ease-linear duration-300 rounded-t-lg"
              : "h-0 bottom-0 ease-linear duration-300 "
              }  ease-linear duration-300 `}
          >
            <MarketFilterofMaps
              getMapsInfo={mapslist}
              onClick={toggleMarketsFilterMaps}
            />
          </div>
        )}
        {/* Navbaryandex */}
        <div
          className={`absolute z-50 hidden md:block ${!dressInfo?.yandexOpenMenu
            ? "top-0 ease-linear duration-500 "
            : "top-[-250px] ease-linear duration-500 "
            }  ease-linear duration-500 w-full`}
        >
          <YandexMapsIndex
            getMapsInfo={mapslist}
            getFilterSearchByBrand={getFilterSearchByBrand}
          />
        </div>
        <div
          className={`absolute z-50 right-2 ${dressInfo?.yandexOpenMenu
            ? "top-2  right-2 ease-linear duration-500 "
            : "top-[-250px]  right-2 ease-linear duration-500 "
            }  ease-linear duration-500 w-[74%] `}
        >
          <NavbarTopOpenMenu />
        </div>

        {/* <YMaps query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }}> */}
        {languageDetector?.typeLang === 'uz' && <YMaps
          query={{
            apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21",
            lang: 'uz',
          }}
        >
          <Map
            defaultState={mapState}
            // onBoundsChange={handleBoundsChange}
            // state={state}
            // {...mapOptions}
            // onLoad={setMapConstructor}
            // onBoundsChange={handleBoundsChange}
            // instanceRef={mapRef}
            onClick={onMapClick}
            onMouseDown={HandleData}
            width="100%"
            height="100%"
            modules={["control.FullscreenControl"]}

          // {...mapOptions}
          // state={{
          //   center: forMaps?.center,
          //   zoom: forMaps?.zoom,
          // }}
          // onLoad={setMapConstructor}
          // onBoundsChange={handleBoundsChange}
          // instanceRef={mapRef}
          >
            <div
              onClick={handleFullScreen}
              className={`absolute right-3 ${!dressInfo?.yandexFullScreen
                ? "bottom-[75px] md:bottom-[87px]"
                : "bottom-[8px] md:bottom-[87px]"
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
            <div className="YSearch">
              <SearchControl
                options={{
                  float: "left",
                  floatIndex: 3000,
                  provider: "yandex#search",
                  geoObjectStandardPreset: "islands#blueDotIcon",
                  placeholderContent: t("YMsearch"),
                  // maxWidth: 400,
                  size: "large",
                }}
              />
            </div>
            {/* ---------- */}
            {/* <Clusterer
              className={""}
              options={{
                preset: "islands##004773ClusterIcons",
                groupByCoordinates: false,
              }}
            > */}
            {mapslist?.locations?.map((data, index) => (
              // console.log(data, "data");
              <Placemark
                onError={handleError}
                className={"placemarkCLuster cursor-pointer "}
                key={data?.id}
                onClick={() => {
                  handlePlaceMark(
                    data?.shop_id,
                    data?.id,
                    data?.latitude,
                    data?.longitude
                  );
                  setCarouselIndex(0);
                }}
                geometry={[data?.latitude, data?.longitude]}
                options={{
                  iconLayout: "default#image",
                  // iconImageHref: markerIcons,
                  iconImageHref: data?.shop?.url_logo_photo,
                  iconImageSize: [45, 45], // Set the size of your image
                }}
                modules={["geoObject.addon.balloon"]}
              />
            ))}
            {/* </Clusterer > */}
            {/* Yandex Main menu */}
            <div
              className={`max-w-[440px]   w-[100%] fixed bg-white top-[70px] left-0 h-[100vh] px-3 ${dressInfo?.openMainMenu
                ? "left-[-500px] md:left-[-5000px] z-[-80] ease-linear duration-500"
                : "hamburger flex flex-col ease-linear duration-500 overscroll-none z-[105]"
                }`}
            >
              <div className={`w-full h-full `}>
                {/* Searching section */}
                {/* <div className="search flex items-center bg-btnBgColor justify-between rounded-lg font-AeonikProMedium h-12 mt-3 mb-3 border border-searchBgColor ss:mt-3 md:hidden w-full">
                  <span className=" flex ss:pl-[11.65px] md:hidden">
                    <SearchIcons />
                  </span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Искать товары или бренды"
                    className="bg-transparent w-full px-3 h-12 text-[14px] bg-btnBgColor border border-transparent md:border-searchBgColor md:mx-0 md:-ml-[3px] md:px-3 md:h-12
                    placeholder-italic placeholder-AeonikProMedium placeholder-sm leading-4 placeholder-setTexOpacity placeholder-[1px]
                    "
                  />
                </div> */}
                {/* Music and Map selection for Mobile */}
                <div className="flex items-center justify-between h-fit mb-3">
                  <button type="button " className="left h-[52px] rounded-lg flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]">
                    <span>
                      <VolumeIcons colors={seasonDetector?.ColorSeason} />
                    </span>
                    <span className=" ml-[10px]">Музика</span>
                  </button>
                  <NavLink
                    to="/locations"
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
                    { localStorage?.getItem("userAccess") ? (
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
                      to="/shops"
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
            <div
              className={`absolute block md:hidden ml-[-1000px] duration-1000 overflow-hidden z-[103] rounded-lg shadow-lg left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%]  md:bottom-[120px]
                ${dressInfo?.yandexFullScreen
                  ? "bottom-[10px] md:bottom-auto"
                  : "bottom-[10px] md:bottom-auto"
                }
                ${dressInfo?.yandexOpenMarket &&
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
                      <MenuCloseIcons colors={"#000"}/>
                    </span>
                    <div className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]">
                      Магазины
                    </div>
                  </div>
                  {/* )} */}
                </div>
              </div>
            </div>
            {/* {!dressInfo?.yandexOpenMarket && (
              <div
                className={`fixed block md:hidden  bg-white  z-[55]  ${!dressInfo?.yandexFullScreen ? "bottom-[63px] " : "bottom-[0]"
                  }   w-full  bg-yandexNavbar flex items-center py-2

              `}
              >
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
            )} */}
            {/* ---------- */}
            {/* <SearchControl
              options={{ float: 'right' }}
              instanceRef={(searchControl) => {
                if (searchControl) {
                  searchControl.events.add('resultselect', handleSearchResult);
                }
              }}
              onSearchChange={handleSearchChange}
            /> */}
            {/* Yandex Search */}
            <div
              className={` absolute md:hidden ${!dressInfo?.yandexFullScreen
                ? "bottom-[128px]"
                : "bottom-[65px]"
                } left-auto  right-3  overflow-hidden z-50   h-[40px] w-fit `}
            >
              <button
                onClick={() => setMarketsFilterMaps(!marketsFilterMaps)}
                type="button"
                className="md:hidden h-[40px] w-[40px] rounded-lg  bg-white flex items-center justify-center "
              >
                <SortIcons colors={"#000"} className="w-full h-full" />
              </button>
            </div>
          </Map>
        </YMaps>}
        {languageDetector?.typeLang === 'ru' && <YMaps
          query={{
            apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21",
            lang: 'ru',
          }}
        >
          <Map
            defaultState={mapState}
            // onBoundsChange={handleBoundsChange}
            // state={state}
            // {...mapOptions}
            // onLoad={setMapConstructor}
            // onBoundsChange={handleBoundsChange}
            // instanceRef={mapRef}
            onClick={onMapClick}
            onMouseDown={HandleData}
            width="100%"
            height="100%"
            modules={["control.FullscreenControl"]}

          // {...mapOptions}
          // state={{
          //   center: forMaps?.center,
          //   zoom: forMaps?.zoom,
          // }}
          // onLoad={setMapConstructor}
          // onBoundsChange={handleBoundsChange}
          // instanceRef={mapRef}
          >
            <div
              onClick={handleFullScreen}
              className={`absolute right-3 ${!dressInfo?.yandexFullScreen
                ? "bottom-[75px] md:bottom-[87px]"
                : "bottom-[8px] md:bottom-[87px]"
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
            <div className="YSearch">
              <SearchControl
                options={{
                  float: "left",
                  floatIndex: 3000,
                  provider: "yandex#search",
                  geoObjectStandardPreset: "islands#blueDotIcon",
                  placeholderContent: t("YMsearch"),
                  // maxWidth: 400,
                  size: "large",
                }}
              />
            </div>
            {/* ---------- */}
            {/* <Clusterer
              className={""}
              options={{
                preset: "islands##004773ClusterIcons",
                groupByCoordinates: false,
              }}
            > */}
            {mapslist?.locations?.map((data, index) => (
              // console.log(data, "data");
              <Placemark
                onError={handleError}
                className={"placemarkCLuster cursor-pointer "}
                key={data?.id}
                onClick={() => {
                  handlePlaceMark(
                    data?.shop_id,
                    data?.id,
                    data?.latitude,
                    data?.longitude
                  );
                  setCarouselIndex(0);
                }}
                geometry={[data?.latitude, data?.longitude]}
                options={{
                  iconLayout: "default#image",
                  // iconImageHref: markerIcons,
                  iconImageHref: data?.shop?.url_logo_photo,
                  iconImageSize: [45, 45], // Set the size of your image
                }}
                modules={["geoObject.addon.balloon"]}
              />
            ))}
            {/* </Clusterer > */}
            {/* Yandex Main menu */}
            <div
              className={`max-w-[440px]   w-[100%] fixed bg-white top-[70px] left-0 h-[100vh] px-3 ${dressInfo?.openMainMenu
                ? "left-[-500px] md:left-[-5000px] z-[-80] ease-linear duration-500"
                : "hamburger flex flex-col ease-linear duration-500 overscroll-none z-[105]"
                }`}
            >
              <div className={`w-full h-full `}>
                {/* Searching section */}
                {/* <div className="search flex items-center bg-btnBgColor justify-between rounded-lg font-AeonikProMedium h-12 mt-3 mb-3 border border-searchBgColor ss:mt-3 md:hidden w-full">
                  <span className=" flex ss:pl-[11.65px] md:hidden">
                    <SearchIcons />
                  </span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Искать товары или бренды"
                    className="bg-transparent w-full px-3 h-12 text-[14px] bg-btnBgColor border border-transparent md:border-searchBgColor md:mx-0 md:-ml-[3px] md:px-3 md:h-12
                    placeholder-italic placeholder-AeonikProMedium placeholder-sm leading-4 placeholder-setTexOpacity placeholder-[1px]
                    "
                  />
                </div> */}
                {/* Music and Map selection for Mobile */}
                <div className="flex items-center justify-between h-fit mb-3">
                  <button className="left h-[52px] rounded-lg flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]">
                    <span>
                      <VolumeIcons colors={seasonDetector?.ColorSeason} />
                    </span>
                    <span className=" ml-[10px]">Музика</span>
                  </button>
                  <NavLink
                    to="/locations"
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
                    { localStorage?.getItem("userAccess") ? (
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
                      to="/shops"
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
            <div
              className={`absolute block md:hidden ml-[-1000px] duration-1000 overflow-hidden z-[103] rounded-lg shadow-lg left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%]  md:bottom-[120px]
                ${dressInfo?.yandexFullScreen
                  ? "bottom-[10px] md:bottom-auto"
                  : "bottom-[10px] md:bottom-auto"
                }
                ${dressInfo?.yandexOpenMarket &&
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
                    <MenuCloseIcons colors={"#000"}/>
                    </span>
                    <div className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]">
                      Магазины
                    </div>
                  </div>
                  {/* )} */}
                </div>
              </div>
            </div>
            {/* {!dressInfo?.yandexOpenMarket && (
              <div
                className={`fixed block md:hidden  bg-white  z-[55]  ${!dressInfo?.yandexFullScreen ? "bottom-[63px] " : "bottom-[0]"
                  }   w-full  bg-yandexNavbar flex items-center py-2

              `}
              >
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
            )} */}
            {/* ---------- */}
            {/* <SearchControl
              options={{ float: 'right' }}
              instanceRef={(searchControl) => {
                if (searchControl) {
                  searchControl.events.add('resultselect', handleSearchResult);
                }
              }}
              onSearchChange={handleSearchChange}
            /> */}
            {/* Yandex Search */}
            <div
              className={` absolute md:hidden ${!dressInfo?.yandexFullScreen
                ? "bottom-[128px]"
                : "bottom-[65px]"
                } left-auto  right-3  overflow-hidden z-50   h-[40px] w-fit `}
            >
              <button
                onClick={() => setMarketsFilterMaps(!marketsFilterMaps)}
                type="button"
                className="md:hidden h-[40px] w-[40px] rounded-lg  bg-white flex items-center justify-center "
              >
                <SortIcons colors={"#000"} className="w-full h-full" />
              </button>
            </div>
          </Map>
        </YMaps>}
      </div>
    </div>
  );
}

export default React.memo(YandexMapsDressMe);
