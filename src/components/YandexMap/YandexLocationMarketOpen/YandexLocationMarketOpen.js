import React, { useContext, memo, useMemo } from "react";
import {
  ClockIcons,
  LocationIcons,
  MenuCloseIcons,
  SircleNext,
  StarIcons,
  ThreeCicleIcon,
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
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[45%] z-10	right-[10px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard		`}
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
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[45%] z-10	left-[10px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard`}
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
  console.log("memo");
  return (
    <div className="w-[390px] h-fit flex flex-col gap-y-4 border border-searchBgColor bg-white rounded-[12px] px-4 py-5">
      {/* title */}

      <div className="relative w-full flex items-center justify-between">
        <div className="absolute top-[-40px]  w-full px-2">
          <span>
            {" "}
            <ThreeCicleIcon />
          </span>{" "}
        </div>
        <div className="w-fit flex items-center">
          {" "}
          <span className="not-italic font-AeonikProMedium text-xl leading-5 text-fullBlue">
            FLO (Алмазар)
          </span>
          <p className="flex items-center gap-x-[6px]">
            <span>
              <StarIcons />
            </span>
            <span className="not-italic font-AeonikProMedium text-base leading-4 text-black">
              4.6
            </span>
          </p>
        </div>
        <button
          onClick={() =>
            setDressInfo({
              ...dressInfo,
              yandexOpenMarketLocation: true,
            })
          }
          className="w-10 h-10 rounded-lg border border-searchBgColor flex items-center justify-center active:scale-95  active:opacity-70"
        >
          <MenuCloseIcons />
        </button>
      </div>
      {/* Carosuel */}
      <div className="w-full h-[220px] ">
        <Slider
          {...settings}
          className="w-full h-full rounded-lg overflow-hidden"
        >
          <div>
            <img
              src={
                "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg"
              }
            />
          </div>
        </Slider>
      </div>
      {/* text */}
      <div className="w-full h-fit ">
        <span className="not-italic font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
          Бу магазинда сиз болажонларингиз учун (0-15 ёш) сифатли кийимчаларни
          АРЗОН ВА КУЛАЙ нархларда харид қилишингиз мумкин
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
          <span className="not-italic font-AeonikProRegular tracking-[2%] mt-1 text-base leading-5 text-center capitalize text-white">
            ПОДРОБНЕЕ
          </span>
          <span>
            <SircleNext colors={"#fff"} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default memo(YandexLocationMarketOpen);
