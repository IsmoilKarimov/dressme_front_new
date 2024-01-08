import React, { useContext, useState, useEffect, useRef, useCallback } from "react";

import { YMaps, Map, ZoomControl, GeolocationControl, Placemark, Clusterer, SearchControl } from "react-yandex-maps";
import Slider from "react-slick";

import "./yandex.css";
import YandexMapsIndex from "./YandexMapsNavbar/YandexMapsIndex";
import { dressMainData } from "../../ContextHook/ContextMenu";
import NavbarTopOpenMenu from "./YandexMapsNavbar/NavbarTopOpenMenu";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import ScrollFilter from "./YandexMapsNavbar/ScrollFilter";
import {
  ArrowTopIcons,
  CommentIcons,
  FilterIcons,
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
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import CarouselModalMarket from "./YandexLocationMarketOpen/CarouselModalMarket";
import MarketFilterofMaps from "./YandexLocationMarketOpen/MarketFilterofMaps";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import UseReplace from "../../ContextHook/useReplace";
// import CarouselModalMarket from "./YandexMapsNavbar/CarouselModalMarket";


function YandexMapsDressMe() {
  const url = "https://api.dressme.uz/api/main";
  const navigate = useNavigate();

  const [openCordinateMap, setOpenCordinateMap] = useState("");
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [openCarouselModal, setOpenCarouselModal] = useState(false);
  const toggleCarouselModal = React.useCallback(() => setOpenCarouselModal(!openCarouselModal), []);

  const [marketsFilterMaps, setMarketsFilterMaps] = useState(false);
  const toggleMarketsFilterMaps = React.useCallback(() => setMarketsFilterMaps(false), []);
  // request get
  const [getMapsInfo, setGetMapsInfo] = useState(null);
  const [getAllFilterSearch, setGetAllFilterSearch] = useState({});

  function getFilterData(childData) {
    setGetAllFilterSearch(childData)
  }
  // -------------Get Request

  const fetchGetAllData = (params) => {
    // for (const property in params) {
    //   navigate(`/delivery-points/${UseReplace(property, params[property])}`);
    // }
    Object.entries(params).forEach((i) => {
      if (!i[1]) delete params[i[0]];
    });

    // fetch(`${url}/map/index`)
    fetch(`${url}/map/index?` + new URLSearchParams(params),)
      .then((res) => res.json())
      .then((res) => {
        setGetMapsInfo(res);
        console.log(res, "BuRes");
      })
      .catch((err) => console.log(err, "ERRORLIST"));
  };
  console.log(getAllFilterSearch, "getAllFilterSearch");
  useEffect(() => {
    fetchGetAllData({
      gender: getAllFilterSearch?.genderType,
      shop: getAllFilterSearch?.category_brand,
      category: getAllFilterSearch?.category_wear,
      "budget[from]": getAllFilterSearch?.minPrice,
      "budget[to]": getAllFilterSearch?.maxPrice
    })
  }, [getAllFilterSearch])

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
  const handlePlaceMark = (value, cordinate) => {
    setOpenCordinateMap(cordinate)
    setDressInfo({
      ...dressInfo,
      yandexGetMarketId: value,
      yandexOpenMarketLocation: true,
    });
  };

  //------------------------------------------------------------------------------------------------
  // const [searchQuery, setSearchQuery] = useState('');
  // const [searchResult, setSearchResult] = useState(null);

  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.get('target').get('value'));
  // };

  // const handleSearchResult = (e) => {
  //   const firstResult = e.get('target').get('results').get(0);

  //   if (firstResult) {
  //     setSearchResult({
  //       coordinates: firstResult.geometry.getCoordinates(),
  //       address: firstResult.properties.get('text'),
  //     });
  //   }
  // };
  const mapState = {

    center: [41.311753, 69.241822],
    zoom: 14,
  };
  // const [isSendedLocation, setIsSendedLocation] = useState(true);
  // const [forMaps, setForMaps] = useState({
  //   title: "",
  //   center: [41.311753, 69.241822],
  //   zoom: 14,
  // });
  // //------------------------------------------------------------------------------------------------
  // const mapOptions = {
  //   modules: ["geocode", "SuggestView"],
  //   defaultOptions: { suppressMapOpenBlock: true },
  // };

  // const [mapConstructor, setMapConstructor] = useState(null);
  // const mapRef = useRef(null);
  // const searchRef = useRef(null);

  // const handleSubmit = () => {

  //   setForMaps({
  //     ...forMaps,
  //     title: forMaps?.title,
  //     center: [mapRef.current.getCenter()[0], mapRef.current.getCenter()[1]]
  //   })

  //   setIsSendedLocation(false);
  // };
  // // reset state & search
  // const handleReset = () => {
  //   setForMaps({ ...forMaps, title: "" });
  //   searchRef.current.value = "";

  // };

  // // search popup
  // useEffect(() => {

  //   if (mapConstructor) {
  //     new mapConstructor.SuggestView(searchRef.current).events.add(
  //       "select",
  //       function (e) {
  //         const selectedName = e.get("item").value;
  //         mapConstructor.geocode(selectedName).then((result) => {
  //           const newCoords = result.geoObjects
  //             .get(0)
  //             .geometry.getCoordinates();
  //           setForMaps((prevState) => ({ ...prevState, center: newCoords }));
  //         });
  //       }
  //     );
  //   }
  // }, [mapConstructor]);

  // // change title
  // const handleBoundsChange = (e) => {
  //   setIsSendedLocation(true);

  //   const newCoords = mapRef.current.getCenter();
  //   mapConstructor.geocode(newCoords).then((res) => {
  //     const nearest = res.geoObjects.get(0);
  //     const foundAddress = nearest.properties.get("text");
  //     const [centerX, centerY] = nearest.geometry.getCoordinates();
  //     const [initialCenterX, initialCenterY] = forMaps.center;
  //     if (centerX !== initialCenterX && centerY !== initialCenterY) {
  //       setForMaps((prevState) => ({ ...prevState, title: foundAddress }));
  //     }
  //   });
  // };

  const handleError = () => {
    console.error('Error loading Placemark');
  };
  return (
    <div className="h-fit w-full flex items-center justify-center overflow-hidden overflow-y-hidden">
      <div
        onClick={() => {
          setOpenCarouselModal(false);
          setMarketsFilterMaps(false);
        }}
        className={`fixed inset-0 z-[215] cursor-pointer duration-200 w-full h-[100vh] bg-black opacity-50
         ${openCarouselModal || marketsFilterMaps ? "" : "hidden"
          }`}
      >
      </div>
      <div className={`w-full   sm:w-fit h-fit flex items-center mx-auto justify-center fixed z-[216]   ${openCarouselModal ? "" : "hidden"
        }`}>
        <button
          onClick={() => {
            setOpenCarouselModal(false);
          }}
          className="absolute right-3 sm:right-[-20px] z-[218] top-[-50px] sm:top-[0px] flex items-center justify-center w-10 h-10 md:w-[50px] md:h-[50px]   rounded-full bg-[#808080]">
          <MenuCloseIcons colors="#fff" />
        </button>
        <div className="relative  z-[217] !w-full sm:w-fit  top-0">
          <CarouselModalMarket />
        </div>
      </div>
      <div className="w-[100%] h-[100vh] border-b border-searchBgColor overflow-hidden ymapsName">
        {/* Laptop device for */}
        {screenSize.width > 768 && (
          <div className={`w-full bottom-[0px]   overflow-hidden  md:w-[769px] fixed md:left-1/2 md:right-1/2 md:translate-x-[-50%] md:translate-y-[-50%]
          ${dressInfo?.yandexOpenMarketLocation
              ? `z-[102] h-[350px]  bottom-[-75px]`
              : " h-0 bottom-[0]  z-[-10]"
            } ease-linear duration-300`}
          >
            <YandexLocationMarketOpen onClick={toggleCarouselModal} cordinateMarkets={openCordinateMap} modalInfo={getMapsInfo} />
          </div>
        )}
        {screenSize.width <= 768 && (
          <div className={`fixed w-full bg-white z-[116] left-0 right-0 overflow-hidden  ${dressInfo?.yandexOpenMarketLocation
            ? "h-[570px] bottom-0 ease-linear duration-300 "
            : "h-0 bottom-0 ease-linear duration-300 "
            }  ease-linear duration-300 `}
          >
            <YandexLocationMarketOpen onClick={toggleCarouselModal} cordinateMarkets={openCordinateMap} modalInfo={getMapsInfo} />
          </div>
        )}
        {/* // -----------------MarketFilterofMaps--------------------------- */}
        {screenSize.width <= 768 && (
          <div className={`fixed max-w-[440px] mx-auto w-full bg-white z-[215] left-0 right-0 overflow-hidden  ${marketsFilterMaps
            ? "h-[570px] bottom-0 ease-linear duration-300 rounded-t-lg"
            : "h-0 bottom-0 ease-linear duration-300 "
            }  ease-linear duration-300 `}
          >
            <MarketFilterofMaps onClick={toggleMarketsFilterMaps} />
          </div>
        )}
        {/* Navbaryandex */}
        <div className={`absolute z-50 hidden md:block ${!dressInfo?.yandexOpenMenu
          ? "top-0 ease-linear duration-500 "
          : "top-[-250px] ease-linear duration-500 "
          }  ease-linear duration-500 w-full`}
        >
          <YandexMapsIndex getMapsInfo={getMapsInfo} getFilterData={getFilterData} />
        </div>
        <div className={`absolute z-50 right-2 ${dressInfo?.yandexOpenMenu
          ? "top-2  right-2 ease-linear duration-500 "
          : "top-[-250px]  right-2 ease-linear duration-500 "
          }  ease-linear duration-500 w-[74%] `}
        >
          <NavbarTopOpenMenu />
        </div>

        {/* <YMaps query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }}> */}
        <YMaps query={{
          apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21",
          lang: "ru",
        }}>
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
            <div className="YSearch">
              {/* <div className="absolute ">
                <img src={locationIcons} alt="" />
              </div> */}
              <SearchControl
                options={{
                  float: "left",
                  floatIndex: 3000,
                  provider: "yandex#search",
                  geoObjectStandardPreset: "islands#blueDotIcon",
                  placeholderContent: "Поиск мест и адресов",
                  // maxWidth: 400,
                  size: "large",
                }}
              // options={{
              // float: "left",
              // position: { bottom: 270, left: 10, size: "small" },
              // size: "small",
              // }}
              />{" "}
            </div>

            {/* ---------- */}
            {/* <Clusterer
              className={""}
              options={{
                preset: "islands##004773ClusterIcons",
                groupByCoordinates: false,
              }}
            > */}
            {getMapsInfo?.locations?.map((data, index) => (
              <Placemark
                onError={handleError}
                className={"placemarkCLuster cursor-pointer "}
                key={data?.id}
                onClick={() => {
                  handlePlaceMark(data?.id, data?.latitude, data?.longitude)
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
            < div className={`max-w-[440px] w-[100%] fixed bg-white top-[70px] left-0 h-[100vh] px-3 ${dressInfo?.openMainMenu
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
                    type="text" placeholder="Искать товары или бренды"
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
                    {Cookies.get("DressmeUserToken") ? (
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
            <div className={`absolute hidden  ${!dressInfo?.yandexFullScreen ? "top-[80px]" : "top-[8px]"
              }  md:top-auto md:bottom-[24px] left-0 right-0 mx-auto  overflow-hidden z-50   h-[48px] w-[97%] ll:w-[94%] md:w-[400px] `}
            >
              <div
                className="w-full h-full flex justify-between gap-x-2"
              >
                <div className="w-[85%] md:w-full h-full flex items-center rounded-lg bg-yandexNavbar backdrop-blur-sm px-2 ll:px-3 overflow-hidden shadow-lg ">
                  <div>
                    <img src={locationIcons} alt="" />
                  </div>
                  <div className="h-full flex items-center w-full mx-3">
                    <input
                      // ref={searchRef}
                      // type="text"
                      name="search"
                      type="search"
                      className="h-full outline-none w-full bg-transparent"
                      placeholder="Поиск мест и адресов2"
                      autoComplete="off"
                    />
                  </div>
                  <button type="button">
                    <SearchIcons />
                  </button>

                </div>
                <button onClick={() => setMarketsFilterMaps(!marketsFilterMaps)} type="button" className="md:hidden h-[48px] w-[48px] rounded-lg rounded-lg bg-yandexNavbar backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <FilterIcons colors={"#000"} className="w-full h-full" />
                </button>
              </div>
              <div
                className="w-full h-full flex justify-between gap-x-2"
              >
                <div className="w-[85%] md:w-full h-full flex items-center rounded-lg bg-yandexNavbar backdrop-blur-sm px-2 ll:px-3 overflow-hidden shadow-lg ">
                  <div>
                    <img src={locationIcons} alt="" />
                  </div>
                  <div className="h-full flex items-center w-full mx-3">
                    <input
                      // ref={searchRef}
                      // type="text"
                      name="search"
                      type="search"
                      className="h-full outline-none w-full bg-transparent"
                      placeholder="Поиск мест и адресов1"
                      autoComplete="off"
                    />
                  </div>
                  <button type="button">
                    <SearchIcons />
                  </button>

                </div>
                <button onClick={() => setMarketsFilterMaps(!marketsFilterMaps)} type="button" className="md:hidden h-[48px] w-[48px] rounded-lg rounded-lg bg-yandexNavbar backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <FilterIcons colors={"#000"} className="w-full h-full" />
                </button>
              </div>
            </div>
          </Map>
        </YMaps>
      </div>
    </div >
  );
}

export default React.memo(YandexMapsDressMe);
