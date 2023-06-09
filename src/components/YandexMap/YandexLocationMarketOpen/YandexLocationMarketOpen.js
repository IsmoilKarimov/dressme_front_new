import React, { useContext, memo } from "react";
import {
  ClockIcons,
  LocationIcons,
  MenuCloseIcons, 
  SircleNext,
  StarIcons,
} from "../../../AssetsMain/icons";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function YandexLocationMarketOpen() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[45%] z-10	right-[5px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard		`}
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
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[45%] z-10	left-[5px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full  h-fit flex flex-col gap-y-4 border border-searchBgColor bg-white rounded-t-[12px] md:rounded-[12px]	 px-4 py-5">
      {/* title */}
      <div className="relative w-full flex items-center justify-between">
        <div className="w-fit flex items-center gap-x-3">
          {" "}
          <span className="not-italic font-AeonikProMedium text-xl leading-5 text-fullBlue ">
            FLO (Алмазар)
          </span>
          <div className="w-fit flex items-center gap-x-[2px] ">
            <span>
              <StarIcons />
            </span>
            <span className="not-italic font-AeonikProMedium  text-base leading-4 text-black">
              4.6
            </span>
          </div>
        </div>
        <button
          onClick={() =>
            setDressInfo({
              ...dressInfo,
              yandexOpenMarketLocation: false,
            })
          }
          className="w-10 h-10 rounded-lg border border-searchBgColor flex items-center justify-center active:scale-95  active:opacity-70"
        >
          <MenuCloseIcons />
        </button>
      </div>
      {/* Second BOlum */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between md:gap-y-0 gap-y-4">
        {/* Carosuel */}
        <div className="w-full h-[220px] md:w-[48%] md:h-[250px] mx-auto ">
          <Slider
            {...settings}
            className="w-full h-full rounded-lg overflow-hidden flex flex-col justify-center"
          >
            <div className=" flex items-center justify-center">
              <img
                className={
                  "mx-auto w-full  sm:w-auto	 flex items-center object-center object-cover	"
                }
                src={
                  "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg"
                }
                alt="img"
              />
            </div>
            <div className=" flex items-center justify-center">
              <img
                className={
                  "mx-auto w-full  sm:w-auto	 flex items-center object-center object-cover	"
                }
                src={
                  "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
                }
                alt="img"
              />
            </div>
            <div className=" flex items-center justify-center">
              <img
                className={
                  "mx-auto w-full  sm:w-auto	 flex items-center object-center object-cover	"
                }
                src={
                  "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg"
                }
                alt="img"
              />
            </div>
            <div className=" flex items-center justify-center">
              <img
                className={
                  "mx-auto w-full  sm:w-auto	 flex items-center object-center object-cover	"
                }
                src={
                  "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg"
                }
                alt="img"
              />
            </div>
          </Slider>
        </div>
        {/* Details */}
        <div className="md:w-[48%]  md:h-[250px] text-justify	 flex flex-wrap md:gap-y-0 gap-y-4 content-between   ">
          {/* text */}
          <div className="w-full h-fit ">
            <span className="not-italic text-justify	 font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
              Бу магазинда сиз болажонларингиз учун (0-15 ёш) сифатли
              кийимчаларни АРЗОН ВА КУЛАЙ нархларда харид қилишингиз мумкин
            </span>
          </div>
          {/* Detail */}
          <div className="w-full  flex flex-col gap-y-3">
            <div className="flex items-center ">
              <span>
                <ClockIcons colors={"#000"} />
              </span>
              <span className="not-italic ml-4 font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
                10:00 - 20:00, без выходных
              </span>
            </div>{" "}
            <div className="w-full flex">
              <span>
                <LocationIcons />
              </span>
              <span className="w-[70%] not-italic ml-4 font-AeonikProRegular text-base leading-5 text-setTexOpacity">
                г. Ташкент, Чиланзарский район, квартал-7, д 45б (Катартал)
              </span>
            </div>
          </div>
          <div className="w-full">
            <button
              className={` w-full h-[52px] bg-fullBlue active:scale-95  active:opacity-70 rounded-[12px] flex gap-x-3 items-center justify-center`}
            >
              <span className="not-italic font-AeonikProRegular tracking-[2%]  text-base leading-5 text-center capitalize text-white">
                ПОДРОБНЕЕ
              </span>
              <span>
                <SircleNext colors={"#fff"} />
              </span>
            </button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default memo(YandexLocationMarketOpen);
