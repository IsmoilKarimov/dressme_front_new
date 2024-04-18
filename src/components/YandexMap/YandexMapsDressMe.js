import React, { useContext, useState, useRef, useEffect } from "react";


import "./yandex.css";
import YandexMapsIndex from "./YandexMapsNavbar/YandexMapsIndex";
import { dressMainData } from "../../ContextHook/ContextMenu";
import NavbarTopOpenMenu from "./YandexMapsNavbar/NavbarTopOpenMenu";
import {
  FullScreenMapsIcons,
  MaximazeMapsIcons,
  MenuCloseIcons,
  SortIcons,
} from "../../assets/icons";
import YandexLocationMarketOpen from "./YandexLocationMarketOpen/YandexLocationMarketOpen";
import CarouselModalMarket from "./YandexLocationMarketOpen/CarouselModalMarket";
import MarketFilterofMaps from "./YandexLocationMarketOpen/MarketFilterofMaps";
import { useTranslation } from "react-i18next";
import { LanguageDetectorDress } from "../../language/LanguageItems";
import { SaesonDetectorDress } from "../../ContextHook/SeasonContext";
import { LocationIdDetector } from "../../ContextHook/LocationId";
import { MapsList } from "../../ContextHook/MapsShopsList";


import { MapContainer, Marker, TileLayer, ScaleControl, ZoomControl, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import { LocateControl } from "../Home/Shop/ShoppingStoreOfficial/ShoppingStoreCategory/YandexLocationShop/ProductLocations/LocateControls";

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
      .catch((err) => {
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



  const [carouselIndex, setCarouselIndex] = useState(0);
  const [map, setMap] = useState(null);
  const tileRef = useRef(null);

  useEffect(() => {
    if (!map) return;
    tileRef.current.getContainer().style.setProperty("filter", `grayscale(1)`);
  }, [map]);


  const tileLayer = {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  }

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
        <div className="relative z-[218] !w-full sm:w-fit top-0 rounded-lg overflow-hidden  xs:px-[50px]">
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
        <div className="w-full h-full  ymapsName  ">

          <MapContainer
            center={[41.311151, 69.279737]}
            zoom={12}
            whenReady={setMap}
            onMouseDown={HandleData}
            eventHandlers={{
              click: () => {
                onMapClick()
              },
            }
            }
          >
            <TileLayer {...tileLayer} ref={tileRef} />
            <ScaleControl imperial={false} />
            {mapslist?.locations?.map((data, index) => (
              data?.id && <Marker
                className={"placemarkCLuster cursor-pointer  "}
                key={data?.id}

                eventHandlers={{
                  click: (e) => {
                    handlePlaceMark(
                      data?.shop_id,
                      data?.id,
                      data?.latitude,
                      data?.longitude
                    );
                    setCarouselIndex(0);
                  },
                }}
                position={[data?.latitude, data?.longitude]} icon={
                  L.icon({
                    iconUrl: data?.shop?.url_logo_photo,
                    iconRetinaUrl: data?.shop?.url_logo_photo,
                    iconAnchor: [5, 55],
                    popupAnchor: [10, -44],
                    iconSize: [45, 45],
                  })
                }
              >

              </Marker>
            ))}

            <LocateControl />

            <div
              onClick={handleFullScreen}
              className={`fullScreenIconsForMobile absolute right-3 ${!dressInfo?.yandexFullScreen
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


            {/* Yandex Sort */}
            <div
              className={`sortIconsForMobile absolute md:hidden ${!dressInfo?.yandexFullScreen
                ? "bottom-[128px]"
                : "bottom-[65px]"
                } left-auto  right-3  overflow-hidden !z-50   h-[40px] w-fit `}
            >
              <button
                onClick={() => setMarketsFilterMaps(!marketsFilterMaps)}
                type="button"
                className="md:hidden h-[40px] w-[40px] rounded-lg  bg-white flex items-center justify-center "
              >
                <SortIcons colors={"#000"} className="w-full h-full" />
              </button>
            </div>
          </MapContainer>
        </div>


      </div>
    </div >
  );
}

export default React.memo(YandexMapsDressMe);
