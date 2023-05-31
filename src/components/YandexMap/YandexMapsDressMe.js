import React, { useContext } from "react";

import {
  YMaps,
  Map,
  ZoomControl,
  GeolocationControl,
  Placemark,
  Clusterer,
} from "react-yandex-maps";

import { useState } from "react";
import "./yandex.css";
import YandexMapsIndex from "./YandexMapsNavbar/YandexMapsIndex";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { GrFormDown } from "react-icons/gr";
import NavbarTopOpenMenu from "./YandexMapsNavbar/NavbarTopOpenMenu";
import NavMenu from "../header/nav-menu";
import { Link } from "react-router-dom";
import ScrollFilter from "./YandexMapsNavbar/ScrollFilter";
import {
  ArrowTopIcons,
  ClockIcons,
  ClothesHangIcons,
  ClothesIcons,
  CommentIcons,
  DashboardStatisticIcons,
  FullScreenMapsIcons,
  HouseStatisticIcons,
  ListCollectionIcons,
  LocationIcons,
  LocationMapsIcons,
  MapIcons,
  MarkerMapsIcons,
  MarketIcons,
  MaximazeMapsIcons,
  MenuCloseIcons,
  MenuOpenIcons,
  PhoneIcons,
  SearchIcons,
  StarIcons,
  VolumeIcons,
} from "../../AssetsMain/icons";
import { UzbekFlag, locationIcons, markerIcons } from "../../AssetsMain";

function YandexMapsDressMe() {
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

  const [coords, setCoords] = useState("");
  const onMapClick = (e) => {
    const coord = e.get("coords");
    setCoords({ ...coords, coords: coord });
  };

  const [points, setPoints] = useState([
    {
      id: 1,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.343505, 69.247869],
    },
    {
      id: 2,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.304935, 69.235164],
    },
    {
      id: 3,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.344238, 69.242964],
    },
    {
      id: 4,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.323764, 69.359813],
    },
    {
      id: 5,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.341694, 69.420043],
    },
    {
      id: 6,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.321907, 69.254526],
    },
    {
      id: 7,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.320452, 69.219132],
    },
    {
      id: 8,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.307447, 69.249306],
    },
    {
      id: 9,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.292876, 69.261085],
    },
    {
      id: 10,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.32621, 69.248896],
    },
    {
      id: 11,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.318716, 69.248341],
    },
    {
      id: 12,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.282263, 69.216182],
    },
    {
      id: 13,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.337827, 69.22457],
    },
    {
      id: 14,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.327722, 69.213853],
    },
    {
      id: 15,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.311626, 69.207701],
    },
    {
      id: 16,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.318925, 69.312793],
    },
    {
      id: 17,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.326482, 69.334138],
    },
    {
      id: 18,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.31642, 69.230976],
    },
    {
      id: 19,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.309585, 69.267861],
    },
    {
      id: 20,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.314924, 69.245148],
    },
    {
      id: 21,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.30114, 69.220787],
    },
    {
      id: 22,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.325755, 69.28294],
    },
    {
      id: 23,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.317964, 69.295311],
    },
    {
      id: 24,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.296016, 69.290532],
    },
  ]);
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const handleFullScreen = () => {
    setDressInfo({
      ...dressInfo,
      yandexFullScreen: !dressInfo?.yandexFullScreen,
    });
  };

  const handleOpenMenu = () => {
    setDressInfo({ ...dressInfo, yandexOpenMenu: !dressInfo?.yandexOpenMenu });
  };

  const handleOpenMarket = () => {
    setDressInfo({
      ...dressInfo,
      yandexOpenMarket: !dressInfo?.yandexOpenMarket,
    });
  };

  // console.log(dressInfo.yandexOpenMarket, "yandexOpenMarket");

  const handleGetId = (getValue) => {
    setPoints((current) => {
      return current.map((data) => {
        if (data?.id == getValue) {
          return { ...data, accordion: !data.accordion };
        } else {
          return { ...data, accordion: false };
        }
      });
    });
  };
  // --------------Open Main Menu

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
    <div className=" h-fit w-full flex justify-center overflow-hidden  ">
      <div className="w-[100%] h-[100vh] border-b border-searchBgColor overflow-hidden">
        <div
          className={`absolute z-50  ${
            !dressInfo?.yandexOpenMenu
              ? "top-0 ease-linear duration-500 "
              : "top-[-250px] ease-linear duration-500 "
          }  ease-linear duration-500 w-full`}
        >
          <YandexMapsIndex />
        </div>
        <div
          className={`absolute z-50   right-2  ${
            dressInfo?.yandexOpenMenu
              ? "top-2  right-2 ease-linear duration-500 "
              : "top-[-250px]  right-2 ease-linear duration-500 "
          }  ease-linear duration-500 w-[74%] `}
        >
          <NavbarTopOpenMenu />
        </div>
        <YMaps query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }}>
          <Map
            state={{
              center: coords.coords ? coords.coords : [41.311753, 69.241822],
              zoom: 14,
              // controls: ["smallMapDefaultSet"],
            }}
            onClick={onMapClick}
            width="100%"
            height="100%"
            modules={[
              // "control.ZoomControl",
              "control.FullscreenControl",
              // "control.smallMapDefaultSet",
            ]}
          >
            <div
              onClick={handleFullScreen}
              className={`absolute right-2 ${
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
              // className="bg-green-500 text-red-500"
              className={"placemarkCLuster"}
              options={{
                preset: "islands##004773ClusterIcons",
                groupByCoordinates: false,
              }}
            >
              {points.map((data, index) => (
                <Placemark
                  className={"placemarkCLuster"}
                  // className="bg-green-500 text-red-500 p-2 "
                  key={index}
                  geometry={data?.cordinate}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: markerIcons,
                    iconImageSize: [32, 32],
                  }}
                  modules={["geoObject.addon.balloon"]}
                  properties={{
                    balloonContentHeader: `<div class="balloonContentHeader"><a class="title" href = "#">Пункт выдачи</a><br><span class="description11">${data?.address}</span></div>`,

                    // // Зададим содержимое основной части балуна.
                    balloonContentBody:
                      `<div class="bodyImgs"><img  className="data" src="https://images.wbstatic.net/PickupOffice/Img154040_Photo1.jpg"/><img  className="data" src="https://images.wbstatic.net/PickupOffice/Img154040_Photo1.jpg"/> </div><br/>` +
                      // `<div class="bodySana"><span class='text'>Режим работы:<span>${data?.workTime}</span></span></div><br/>` +
                      // `<div class="bodySana"><span class='text'>Примерочные: <span>${data?.imgs.length} шт</span></span></div><br/>` +

                      `<div class="bodySana">
                          <span class='text'>Режим работы:<span>${data?.workTime}</span></span><br/>
                          <span class='text'>Примерочные: <span>${data?.imgs.length} шт</span></span>
                      </div><br/>` +
                      `<div class="BtnUzGroup"><div class='BtnUz'>Выбрать</div></div>`,

                    balloonContentFooter: `<div class="footerText"><span>Directions:</span> ${data?.direction}</div>`,
                  }}
                />
              ))}
            </Clusterer>
            {/* yandex menu Open Full Code */}
            <div className="relative">
              {!dressInfo?.yandexOpenMenu ? (
                <div
                  className={`  ease-linear duration-300 h-[40px] absolute cursor-pointer ss:top-[-200px] md:top-[8px] left-[8px] z-50 bg-white shadow-lg overflow-hidden rounded-lg  `}
                >
                  <div
                    onClick={handleOpenMenu}
                    className="w-fit flex items-center justify-between  cursor-pointer roundedn-lg h-full  "
                  >
                    <div className="group w-10 hover:w-[138px] bg-bgCard hover:bg-white   ease-linear duration-300 rounded-lg overflow-hidden  flex items-center justify-between ">
                      <span className="w-[36px] h-8 flex items-center justify-center">
                        <span className="ml-[2px]">
                          <MenuOpenIcons />
                        </span>
                      </span>
                      <span className=" flex flex-nowrap items-center mr-[-100px] group-hover:mr-[10px] w-[92px] ease-linear duration-300 pt-1 justify-center text-center  cursor-pointer bg-white not-italic font-AeonikProMedium text-sm text-black tracking-[1%] ">
                        Магазины
                      </span>
                    </div>
                  </div>{" "}
                </div>
              ) : null}

              <div
                className={`${
                  dressInfo?.yandexOpenMenu || dressInfo?.yandexOpenMarket
                    ? " ml-[0px]"
                    : "  ml-[-1000px]"
                } absolute cursor-pointer left-0 h-[100vh] z-[52] rounded-lg overflow-hidden ${
                  dressInfo?.yandexFullScreen
                    ? "top-[0px]"
                    : "ss:top-[70px] md:top-0"
                } ${
                  !dressInfo?.yandexOpenMarket
                    ? "w-[25%] bg-yandexNavbar backdrop-blur-sm	"
                    : "bg-white w-[100%]  "
                }  p-2 ease-linear duration-[600ms]    border border-searchBgColor`}
              >
                {!dressInfo?.yandexOpenMarket ? (
                  <div
                    onClick={handleOpenMenu}
                    className="w-full h-[42px] flex items-center justify-center"
                  >
                    {" "}
                    <div className="absolute left-2 top-2 w-[40px] h-[40px] rounded-lg bg-white  border border-searchBgColor flex items-center justify-center">
                      <span>
                        <MenuCloseIcons />
                      </span>
                    </div>
                    <div className="w-fit ">
                      <span className="not-italic font-AeonikProMedium text-xl leading-6 text-center tracking-[1%] text-black">
                        Магазины
                      </span>
                    </div>
                  </div>
                ) : null}
                {/* yandex Menu Top */}
                <div className="w-full h-12 flex items-center justify-between px-3 rounded-lg bg-white mt-3 border border-searchBgColor">
                  <div className="w-fit pr-3">
                    <span className="w-6 h-6">
                      <MarketIcons colors={"#000"} />
                    </span>
                  </div>
                  <div className="w-[82%] h-full  ">
                    <input
                      className="w-[100%] h-full "
                      type="text"
                      name="search"
                      placeholder="Поиск магазина (имя или район)"
                    />
                  </div>
                  <div className="w-fit border-l pl-3 border-searchBgColor">
                    <button type="button">
                      <SearchIcons />
                    </button>
                  </div>
                </div>
                {/* Yandex Menu List */}
                <div className="w-full h-[85vh] mt-3 py-1 flex flex-col gap-y-2   ">
                  <div className="w-full h-full overflow-y-auto  YandexListScroll ">
                    {points?.map((data) => {
                      return (
                        <div
                          key={data?.id}
                          className={`w-full relative ${
                            data?.accordion ? "h-[426px]" : "h-[202px]"
                          } border border-searchBgColor flex flex-col duration-300 rounded-lg   bg-white  overflow-hidden   mt-3`}
                        >
                          <div
                            className={`w-full p-4 !h-[202px] ${
                              data?.accordion ? "bg-white" : "bg-btnBgColor"
                            } absolute top-0 flex flex-wrap content-around `}
                          >
                            <div className="w-full flex justify-between">
                              <span className="not-italic font-AeonikProMedium text-lg leading-5 text-black tracking-[1%]">
                                Button (Чиланзар)
                              </span>
                              <span className="flex">
                                <span>
                                  <StarIcons />
                                </span>
                                <span className="not-italic ml-[6px] flex font-AeonikProMedium text-lg leading-5 text-black tracking-[1%]">
                                  4.8
                                </span>
                              </span>
                            </div>
                            <div className="w-full flex">
                              <span>
                                <LocationIcons />
                              </span>
                              <span className="w-[70%] not-italic ml-4 font-AeonikProRegular text-base leading-5 text-setTexOpacity">
                                г. Ташкент, Чиланзарский район, квартал-7, д 45б
                                (Катартал)
                              </span>
                            </div>
                            <div className="w-full flex items-center">
                              <span>
                                <ClothesHangIcons colors={"#000"} />
                              </span>
                              <span className="not-italic ml-4 font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
                                Есть примерочная
                              </span>
                            </div>
                            <div
                              className="w-full flex items-center justify-between"
                              onClick={() => handleGetId(data.id)}
                            >
                              <div className="flex items-center ">
                                <span>
                                  <ClockIcons colors={"#000"} />
                                </span>
                                <span className="not-italic ml-4 font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
                                  10:00 - 20:00, без выходных
                                </span>
                              </div>{" "}
                              <div className="flex items-center justify-end">
                                <span
                                  className={`${
                                    data?.accordion
                                      ? "rotate-[-180deg]"
                                      : "rotate-0"
                                  } ease-linear duration-300`}
                                >
                                  <GrFormDown size={20} />
                                </span>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`h-[214px] absolute top-[202px]   overflow-hidden flex flex-wrap  content-between justify-center transition ease-in-out duration-300  w-full px-4 `}
                          >
                            <div className="w-full ">
                              <div className="w-[80%] h-[2px] bg-OpacitySignIn mx-auto  mb-5 "></div>
                              <div className="flex flex-col gap-y-3 ">
                                <div className=" flex justify-between items-center">
                                  <div className="flex items-center">
                                    <span>
                                      <ClothesIcons />
                                    </span>
                                    <span className="ml-4 not-italic font-AeonikProMedium text-base leading-4 text-black">
                                      Футболки
                                    </span>
                                  </div>
                                  <div className="flex justify-end items-center">
                                    <span className="not-italic font-AeonikProMedium text-base leading-5 text-right text-setTexOpacity">
                                      от
                                      <span className="not-italic font-AeonikProMedium text-xl leading-5 text-right text-black">
                                        {" "}
                                        59 000{" "}
                                      </span>
                                      сум
                                    </span>
                                  </div>
                                </div>
                                <div className=" flex justify-between items-center">
                                  <div className="flex items-center">
                                    <span>
                                      <ClothesIcons />
                                    </span>
                                    <span className="ml-4 not-italic font-AeonikProMedium text-base leading-4 text-black">
                                      Футболки
                                    </span>
                                  </div>
                                  <div className="flex justify-end items-center">
                                    <span className="not-italic font-AeonikProMedium text-xl leading-5 text-right text-setTexOpacity">
                                      от
                                      <span className="not-italic font-AeonikProMedium text-xl leading-5 text-right text-black">
                                        {" "}
                                        59 000{" "}
                                      </span>
                                      сум
                                    </span>
                                  </div>
                                </div>
                                <div className=" flex justify-between items-center">
                                  <div className="flex items-center">
                                    <span>
                                      <ClothesIcons />
                                    </span>
                                    <span className="ml-4 not-italic font-AeonikProMedium text-base leading-4 text-black">
                                      Футболки
                                    </span>
                                  </div>
                                  <div className="flex justify-end items-center">
                                    <span className="not-italic font-AeonikProMedium text-xl leading-5 text-right text-setTexOpacity">
                                      от
                                      <span className="not-italic font-AeonikProMedium text-xl leading-5 text-right text-black">
                                        {" "}
                                        59 000{" "}
                                      </span>
                                      сум
                                    </span>
                                  </div>
                                </div>{" "}
                              </div>
                              <div className="w-[80%] h-[2px] bg-OpacitySignIn mx-auto  mt-5"></div>
                            </div>
                            <div className="w-full h-12  flex justify-center active:scale-95	active:opacity-70  items-center rounded-lg bg-searchBgColor border border-OpacitySignIn">
                              <span>
                                <MarketIcons colors={"#000"} />
                              </span>
                              <span className="ml-3 not-italic font-AeonikProMedium text-base leading-4 text-right text-black">
                                Посетит страницу магазина
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* Yandex Main menu */}
            <div
              className={`fixed top-[70px] left-0 right-0 overscroll-none overflow-y-scroll ${
                dressInfo?.openMainMenu
                  ? "left-[-500px] md:left-[-5000px]  z-[53] ease-in-out  duration-500 "
                  : "left-0 z-[53] ease-linear duration-500 "
              } w-[100%] h-[100%] bg-white`}
            >
              <div className="w-full h-full  px-3 overflow-hidden">
                <div className="search flex items-center justify-between rounded-lg font-AeonikProMedium h-10 mt-3 mb-3 border border-searchBg ss:mt-3 md:hidden w-full">
                  <span className=" flex ss:pl-[11.65px] md:hidden">
                    <SearchIcons />
                  </span>
                  <input
                    type="text"
                    placeholder="Search products or brands"
                    className="bg-transparent w-full px-3 h-10 text-[14px] border border-transparent md:border-searchBgColor md:mx-0 md:-ml-[3px] md:px-3 md:h-10"
                  />
                </div>

                {/* Music and Map selection for Mobile */}
                <div className="flex items-center justify-between h-11 mb-3">
                  <button className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-searchBgColor bg-btnBgColor ss:w-[48%]">
                    <VolumeIcons colors={IconsColor} />
                    <span className=" ml-[10px]">Music</span>
                  </button>
                  <Link
                    to="/delivery-points"
                    className="right px-10 py-[9px] rounded-lg flex items-center justify-center font-AeonikProMedium border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                  >
                    <span>
                      <MapIcons />
                    </span>
                    <span className="ml-[10px]">Map</span>
                  </Link>
                </div>

                {/* Categories */}
                <ul className="flex flex-col">
                  <li>
                    <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-gray-300 px-5 mb-3 w-full">
                      <div className="flex items-center">
                        <span className="border-r border-gray-300 py-3 pr-5">
                          <DashboardStatisticIcons />
                        </span>
                        <span className="ml-[11.67px]">Dashboard (demo)</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons />
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-gray-300 px-5 mb-3 w-full">
                      <div className="flex items-center">
                        <span className="border-r border-gray-300 py-3 pr-5">
                          <HouseStatisticIcons colors={"#000"} />
                        </span>
                        <span className="ml-[11.67px]">Business</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons />
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-gray-300 px-5 mb-3 w-full">
                      <div className="flex items-center">
                        <span className="border-r border-gray-300 py-3 pr-5">
                          <ListCollectionIcons />
                        </span>
                        <span className="ml-[11.67px]">My orders</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons />
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-gray-300 px-5 mb-3 w-full">
                      <div className="flex items-center">
                        <span className="border-r border-gray-300 py-3 pr-5">
                          <MarketIcons colors={"#000"} />
                        </span>
                        <span className="ml-[11.67px]">Shop</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons />
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-gray-300 px-5 mb-3 w-full">
                      <div className="flex items-center">
                        <span className="border-r border-gray-300 py-3 pr-5">
                          <ListCollectionIcons />
                        </span>
                        <span className="ml-[11.67px]">My blog</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons />
                      </span>
                    </button>
                  </li>
                </ul>

                {/*Help and Contact selection for Mobile */}
                <div className="flex items-center justify-between h-11 mb-3">
                  <button className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                    <span>
                      <CommentIcons colors={"#000"} />
                    </span>
                    <span className="ml-[10px]">Help</span>
                  </button>
                  <Link
                    to="#"
                    className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-gray-300 bg-bgColor ss:w-[48%]"
                  >
                    <span>
                      <PhoneIcons />
                    </span>
                    <span className="ml-[10px]">Contact</span>
                  </Link>
                </div>

                {/* Line */}
                <div className="line border-b w-[300px] border-gray-300 mb-3 ls:w-full"></div>

                {/* Location and Language */}
                <div className="flex items-center justify-between h-11 mb-3">
                  <button className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-gray-300 bg-bgColor ss:w-[48%]">
                    <span>
                      <LocationIcons />
                    </span>
                    <span className="ml-[10px] mr-5">Tashkent</span>
                    <span className="">
                      <ArrowTopIcons />
                    </span>{" "}
                  </button>
                  <Link
                    to="#"
                    className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-gray-300 bg-bgColor ss:w-[48%]"
                  >
                    <img src={UzbekFlag} alt="." />
                    <span className="ml-[10px] mr-5">English</span>
                    <span className="">
                      <ArrowTopIcons />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Yandex Search */}
            <div
              className={`absolute ${
                !dressInfo?.yandexFullScreen ? "top-[80px]" : "top-[8px]"
              }  md:top-auto md:bottom-[24px] left-0 right-0 mx-auto  overflow-hidden z-50 bg-yandexNavbar backdrop-blur-sm rounded-lg h-[48px] w-[94%] md:w-fit shadow-lg`}
            >
              <div className="w-full h-full flex justify-between ">
                <div className="w-[100%] h-full flex gap-x-2 items-center px-3">
                  <div>
                    <span>
                      <img src={locationIcons} alt="" />
                    </span>{" "}
                  </div>
                  <div className="h-full flex items-center w-[240px] mx-3">
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
                {/* <div className="w-[20%] h-full flex items-center border border-red-400"></div> */}
              </div>
            </div>
            {/* Yandex Shopping Card */}
            {!dressInfo?.yandexOpenMarket && (
              <div
                onClick={handleOpenMarket}
                className={`fixed right-2 md:hidden cursor-pointer ${
                  !dressInfo?.yandexFullScreen
                    ? "bottom-[180px]"
                    : "bottom-[115px]"
                }   w-[40px]  z-[52]  h-[40px] rounded-lg bg-white flex items-center justify-center`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <MarketIcons colors={"#000"} />
                </div>
              </div>
            )}
            <div
              className={`absolute block md:hidden  ml-[-1000px] duration-1000 overflow-hidden z-[52] rounded-lg shadow-lg left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%]  md:bottom-[120px]
              ${
                dressInfo?.yandexFullScreen
                  ? "bottom-[10px] md:bottom-auto"
                  : "bottom-[70px] md:bottom-auto"
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
                  {/* {!dressInfo?.yandexOpenMarket ? (
                      <img src={shop} alt="" />
                  ) : ( */}
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
                      <div key={data.id} className={`item  `}>
                        <p className=" cursor-pointer rounded-lg bg-white not-italic font-AeonikProMedium text-sm text-black tracking-[1%] ">
                          {data?.name || "0"}
                        </p>
                      </div>
                    );
                  })}
                </ScrollFilter>
              </div>
            )}
            {!dressInfo?.yandexFullScreen && (
              <div
                className={`fixed bottom-0 w-full bg-white z-[54] block md:hidden`}
              >
                <NavMenu />
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
