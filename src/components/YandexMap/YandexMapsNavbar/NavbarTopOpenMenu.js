import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import { Popover } from "antd";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { VolumeIcons } from "../../../assets/icons";
import {
  AllSeason,
  AllSeasonDesktop,
  BrandAutumm,
  BrandSpring,
  BrandSummer,
  BrandWinter,
  allBrandDesktop,
  autummSeason,
  springSeason,
  summerSeason,
  winterSeason,
} from "../../../assets";
import { LanguageDetectorDress } from "../../../language/LanguageItems";
import { SaesonDetectorDress } from "../../../ContextHook/SeasonContext";

export default function NavbarTopOpenMenu() {
   const [languageDetector, setLanguageDetector] = useContext(LanguageDetectorDress)
  const [seasonDetector, setSeasonDetector] = useContext(SaesonDetectorDress)

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
    setSeasonDetector({ ...seasonDetector, type: id });
    setOpenwear(false);
  };

  const contentWear = (
    <section className="ss:w-fit md:w-[120px] h-fit m-0 p-0 ">
      {SeasonTypeArray.map((value) => {
        return (
          <article
            key={value?.id}
            className="w-full h-[42px] md:flex items-center hidden md:justify-center md:pl-3 justify-start not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor"
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
      {SeasonTypeArrayMobile.map((value) => {
        return (
          <article
            key={value?.id}
            className="w-full h-[42px] flex items-center md:hidden md:justify-center md:pl-3 justify-start not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor"
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

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline  w-12 h-12 flex items-center justify-center top-[3px] z-50	right-[-1px]  rounded-full bg-white duration-200 border  border-searchBgColor		`}
        onClick={onClick}
      >
        <button className="next">
          <GrFormNext size={20} />
        </button>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline  w-12 h-12 flex items-center justify-center top-[3px] z-10	left-[0px]  rounded-full bg-white duration-200 border  border-searchBgColor`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };

  let settings1 = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    arrows: true,
    speed: 500,
    dots: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="  w-[100%]  overflow-hidden mr-auto  border border-searchBgColor  h-[60px] flex items-center rounded-[12px] bg-yandexNavbar   backdrop-blur-sm ">
      <div className="w-[27%] flex items-center ml-6  ">
        {/* Logo section */}
        <NavLink
          to="/"
          className="flex justify-center items-center rounded-lg h-[44px] md:w-[155px] ss:ml-2 md:ml-[0px]  "
        >
          {BrandTypeArray.filter((data) => data.id === seasonDetector?.type).map(
            (data) => {
              return (
                <img
                  key={data?.id}
                  className="w-full"
                  src={data?.icons}
                  alt="logo"
                />
              );
            }
          )}
        </NavLink>

        {/* Voice section */}
        <div
          className={` bg-white w-[44px] h-[44px] ml-[25px] rounded-lg cursor-pointer hidden items-center justify-center md:flex`}
        >
          <span>
            <VolumeIcons colors={seasonDetector?.ColorSeason} />
          </span>
        </div>
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
              {SeasonTypeArray.filter((e) => e.id === seasonDetector.type).map(
                (data) => {
                  return (
                    <figure
                      key={data?.id}
                      className="w-full h-full md:flex hidden items-center select-none cursor-pointer  "
                    >
                      <img
                        src={data?.icons}
                        alt="weather"
                        className="mr-0 md:mr-[5px] "
                      />
                      <figcaption className=" font-AeonikProMedium  flex items-center text-[15px] ">
                        {languageDetector?.typeLang === 'ru' && data?.type_ru}
                        {languageDetector?.typeLang === 'uz' && data?.type_uz}
                      </figcaption>
                    </figure>
                  );
                }
              )}
              {SeasonTypeArrayMobile.filter((e) => e.id === seasonDetector.type).map(
                (data) => {
                  return (
                    <figure
                      key={data?.id}
                      className="w-full h-full md:hidden flex items-center justify-center select-none cursor-pointer  "
                    >
                      <img src={data?.icons} alt="weather" className="mr-0 " />
                    </figure>
                  );
                }
              )}
            </Popover>
          </div>
        </article>
      </div>
      <span className="w-[2px] h-[30px] bg-searchBgColor mr-4"></span>
      <div className="w-[69%] h-full px-1">
        <Slider
          {...settings1}
          className="w-[100%] h-full items-center px-4 flex xs:justify-between   "
        >
          {wearGroup?.map((data) => {
            return (
              <div key={data.id} className="!w-[85px]  h-full ">
                <div
                  className={` w-full h-[38px] px-3 m-auto  bg-white rounded-lg flex justify-center items-center cursor-pointer  border border-searchBgColor  `}
                >
                  <p className=" cursor-pointer rounded-lg bg-white not-italic font-AeonikProMedium text-sm text-black tracking-[1%] ">
                    {data?.name || "0"}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
