import React, { useContext } from "react";

import {
  YMaps,
  Map,
  ZoomControl,
  GeolocationControl,
  Placemark,
  Clusterer,
} from "react-yandex-maps";

import {
  Clock,
  ClothesHang,
  ColorLessLocation,
  MenuClose,
  MenuOpen,
  locationIcons,
  map,
  markerIcons,
  search,
  shirtMaps,
  shop,
  star,
  autummVolume,
  springVolume,
  summerVolume,
  winterVolume,
  dashboard,
  arrowBottomRight,
  businessBlack,
  booking,
  blog,
  helpBlack,
  contact,
  location,
  arrowBottomBlack,
  eng,
  maximize,
  FullScreen,
} from "../../assets/imgs";

import { useState } from "react";
import "./yandex.css";
import YandexMapsIndex from "./YandexMapsNavbar/YandexMapsIndex";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { GrFormDown } from "react-icons/gr";
import NavbarTopOpenMenu from "./YandexMapsNavbar/NavbarTopOpenMenu";
import NavMenu from "../header/nav-menu";
import { Link } from "react-router-dom";
import ScrollFilter from "./YandexMapsNavbar/ScrollFilter";

function YandexMapsDressMe() {
  // const [openMenuYandex, setOpenMenuYandex] = useState(false);
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

  const VolumeTypeArray = [
    { id: 1111, type: "Spring", icons: springVolume },
    { id: 2222, type: "Summer", icons: summerVolume },
    { id: 3333, type: "Autumm", icons: autummVolume },
    { id: 4444, type: "Winter", icons: winterVolume },
  ];

  //------------------------------------------------------------------------------------------------

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
                <img src={FullScreen} alt="" />
              ) : (
                <img src={maximize} alt="" />
              )}
            </div>
            <GeolocationControl
              options={{
                float: "right",
                position: { bottom: 220, right: 10 },
              }}
            />
            {/* <ZoomControl
              options={{
                float: "right",
                position: { bottom: 270, right: 10, size: "small" },
                size: "small", 
              }}
            /> */}
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
                        <img
                          className="ml-[2px]"
                          src={MenuOpen}
                          alt="setpersonIcons"
                        />
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
                      <img src={MenuClose} alt="" />
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
                    <img src={shop} alt="" className="w-6 h-6" />
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
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        // className=" fill-Alyuminy "
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.50019 9.11702e-08C6.33057 0.000275652 5.17723 0.274097 4.13231 0.799587C3.0874 1.32508 2.17986 2.08767 1.48222 3.02644C0.78457 3.96521 0.316154 5.05413 0.114389 6.20621C-0.0873753 7.35829 -0.0168949 8.54159 0.320199 9.66157C0.657294 10.7816 1.25166 11.8072 2.05581 12.6565C2.85995 13.5058 3.8516 14.1553 4.9515 14.553C6.05141 14.9508 7.2291 15.0857 8.39048 14.9472C9.55186 14.8086 10.6647 14.4004 11.6402 13.755L15.5862 18.415C15.772 18.6007 15.9926 18.748 16.2353 18.8484C16.4781 18.9488 16.7382 19.0005 17.0009 19.0004C17.2636 19.0003 17.5237 18.9485 17.7664 18.8479C18.009 18.7472 18.2295 18.5998 18.4152 18.414C18.6009 18.2282 18.7481 18.0076 18.8486 17.7649C18.949 17.5221 19.0007 17.262 19.0006 16.9993C19.0005 16.7366 18.9487 16.4765 18.848 16.2338C18.7474 15.9912 18.6 15.7707 18.4142 15.585L13.7552 11.64C14.5034 10.5097 14.9314 9.19773 14.9935 7.84362C15.0556 6.48951 14.7495 5.14389 14.1079 3.94984C13.4662 2.75579 12.513 1.75796 11.3495 1.06246C10.186 0.366956 8.85572 -0.000211234 7.50019 9.11702e-08ZM2.00019 7.5C2.00019 6.04131 2.57965 4.64236 3.6111 3.61091C4.64255 2.57946 6.0415 2 7.50019 2C8.95888 2 10.3578 2.57946 11.3893 3.61091C12.4207 4.64236 13.0002 6.04131 13.0002 7.5C13.0002 8.95869 12.4207 10.3576 11.3893 11.3891C10.3578 12.4205 8.95888 13 7.50019 13C6.0415 13 4.64255 12.4205 3.6111 11.3891C2.57965 10.3576 2.00019 8.95869 2.00019 7.5Z"
                          fill="#4D4D4D"
                        />
                      </svg>
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
                                  <img src={star} alt="" />
                                </span>
                                <span className="not-italic ml-[6px] flex font-AeonikProMedium text-lg leading-5 text-black tracking-[1%]">
                                  4.8
                                </span>
                              </span>
                            </div>
                            <div className="w-full flex">
                              <span>
                                <img src={ColorLessLocation} alt="" />
                              </span>
                              <span className="w-[70%] not-italic ml-4 font-AeonikProRegular text-base leading-5 text-setTexOpacity">
                                г. Ташкент, Чиланзарский район, квартал-7, д 45б
                                (Катартал)
                              </span>
                            </div>
                            <div className="w-full flex items-center">
                              <span>
                                <img src={ClothesHang} alt="" />
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
                                  <img src={Clock} alt="" />
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
                                      <img src={shirtMaps} alt="" />
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
                                      <img src={shirtMaps} alt="" />
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
                                      <img src={shirtMaps} alt="" />
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
                                <img src={shop} alt="" />
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
                  <img
                    src={search}
                    alt="search"
                    className=" flex ss:pl-[11.65px] md:hidden"
                  />
                  <input
                    type="text"
                    placeholder="Search products or brands"
                    className="bg-transparent w-full px-3 h-10 text-[14px] border border-transparent md:border-searchBgColor md:mx-0 md:-ml-[3px] md:px-3 md:h-10"
                  />
                </div>

                {/* Music and Map selection for Mobile */}
                <div className="flex items-center justify-between h-11 mb-3">
                  <button className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-searchBgColor bg-btnBgColor ss:w-[48%]">
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
                    to="/delivery-points"
                    className="right px-10 py-[9px] rounded-lg flex items-center justify-center font-AeonikProMedium border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                  >
                    <img src={map} alt="map" />
                    <span className="ml-[10px]">Map</span>
                  </Link>
                </div>

                {/* Categories */}
                <ul className="flex flex-col">
                  <li>
                    <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-searchBgColor px-5 mb-3 w-full">
                      <div className="flex items-center">
                        <span className="border-r border-searchBgColor py-3 pr-5">
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
                    <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-searchBgColor px-5 mb-3 w-full">
                      <div className="flex items-center">
                        <span className="border-r border-searchBgColor py-3 pr-5">
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
                    <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-searchBgColor px-5 mb-3 w-full">
                      <div className="flex items-center">
                        <span className="border-r border-searchBgColor py-3 pr-5">
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
                    <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-searchBgColor px-5 mb-3 w-full">
                      <div className="flex items-center">
                        <span className="border-r border-searchBgColor py-3 pr-5">
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
                    <button className="flex items-center bg-btnBgColor font-AeonikProMedium h-12 border rounded-lg border-searchBgColor px-5 mb-3 w-full">
                      <div className="flex items-center">
                        <span className="border-r border-searchBgColor py-3 pr-5">
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
                  <button className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-searchBgColor bg-bgColor ss:w-[48%]">
                    <img src={helpBlack} alt="misic" />
                    <span className="ml-[10px]">Help</span>
                  </button>
                  <Link
                    to="#"
                    className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-searchBgColor bg-bgColor ss:w-[48%]"
                  >
                    <img src={contact} alt="map" />
                    <span className="ml-[10px]">Contact</span>
                  </Link>
                </div>
                {/* Line */}
                <div className="line border-b w-[300px] border-searchBgColor mb-3 ls:w-full"></div>

                {/* Location and Language */}
                <div className="flex items-center justify-between h-11 mb-3">
                  <button className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-searchBgColor bg-bgColor ss:w-[48%]">
                    <img src={location} alt="music" />
                    <span className="ml-[10px] mr-5">Tashkent</span>
                    <img src={arrowBottomBlack} alt="" />
                  </button>
                  <Link
                    to="#"
                    className="left py-[9px] px-10 rounded-lg flex items-center justify-center font-AeonikProMedium rouded border border-searchBgColor bg-bgColor ss:w-[48%]"
                  >
                    <img src={eng} alt="map" />
                    <span className="ml-[10px] mr-5">English</span>
                    <img src={arrowBottomBlack} alt="map" />
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
                    <img src={locationIcons} alt="" />
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
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      // className=" fill-Alyuminy "
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.50019 9.11702e-08C6.33057 0.000275652 5.17723 0.274097 4.13231 0.799587C3.0874 1.32508 2.17986 2.08767 1.48222 3.02644C0.78457 3.96521 0.316154 5.05413 0.114389 6.20621C-0.0873753 7.35829 -0.0168949 8.54159 0.320199 9.66157C0.657294 10.7816 1.25166 11.8072 2.05581 12.6565C2.85995 13.5058 3.8516 14.1553 4.9515 14.553C6.05141 14.9508 7.2291 15.0857 8.39048 14.9472C9.55186 14.8086 10.6647 14.4004 11.6402 13.755L15.5862 18.415C15.772 18.6007 15.9926 18.748 16.2353 18.8484C16.4781 18.9488 16.7382 19.0005 17.0009 19.0004C17.2636 19.0003 17.5237 18.9485 17.7664 18.8479C18.009 18.7472 18.2295 18.5998 18.4152 18.414C18.6009 18.2282 18.7481 18.0076 18.8486 17.7649C18.949 17.5221 19.0007 17.262 19.0006 16.9993C19.0005 16.7366 18.9487 16.4765 18.848 16.2338C18.7474 15.9912 18.6 15.7707 18.4142 15.585L13.7552 11.64C14.5034 10.5097 14.9314 9.19773 14.9935 7.84362C15.0556 6.48951 14.7495 5.14389 14.1079 3.94984C13.4662 2.75579 12.513 1.75796 11.3495 1.06246C10.186 0.366956 8.85572 -0.000211234 7.50019 9.11702e-08ZM2.00019 7.5C2.00019 6.04131 2.57965 4.64236 3.6111 3.61091C4.64255 2.57946 6.0415 2 7.50019 2C8.95888 2 10.3578 2.57946 11.3893 3.61091C12.4207 4.64236 13.0002 6.04131 13.0002 7.5C13.0002 8.95869 12.4207 10.3576 11.3893 11.3891C10.3578 12.4205 8.95888 13 7.50019 13C6.0415 13 4.64255 12.4205 3.6111 11.3891C2.57965 10.3576 2.00019 8.95869 2.00019 7.5Z"
                        fill="#4D4D4D"
                      />
                    </svg>
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
                  <img src={shop} alt="" />
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
                    <img src={MenuClose} alt="" />
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
