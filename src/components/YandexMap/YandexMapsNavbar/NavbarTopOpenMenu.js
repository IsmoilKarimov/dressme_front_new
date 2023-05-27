import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import {
  autummBrand,
  autummSeason,
  autummVolume,
  springBrand,
  springSeason,
  springVolume,
  summerBrand,
  summerSeason,
  summerVolume,
  winterBrand,
  winterSeason,
  winterVolume,
} from "../../../assets/imgs";
import { Popover } from "antd";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function NavbarTopOpenMenu() {
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
              className={`ss:hidden md:inline-block font-AeonikProMedium text-base text-black not-italic`}
            >
              {value?.type}
            </span>
          </p>
        );
      })}
    </div>
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
    <div className="  w-[100%] overflow-hidden mr-auto  border border-searchBgColor  h-[60px] flex items-center rounded-[12px] bg-yandexNavbar   backdrop-blur-sm ">
      <div className="w-[27%] flex items-center ml-6  ">
        {/* Logo section */}
        <NavLink
          to="/"
          className="flex justify-center items-center rounded-lg h-[44px] md:w-[155px] ss:ml-2 md:ml-[0px]  "
        >
          {BrandTypeArray.filter((data) => data.id == dressInfo.type).map(
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
        <div className="w-12 h-[44px  ] md:w-[120px] md:h-11 bg-white border border-searchBgColor rounded-lg  md:rounded-lg ml-2">
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
      </div>
      <span className="w-[2px] h-[30px] bg-searchBgColor mr-4"></span>
      <div className="w-[69%]   h-full   px-1 ">
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
