import React, { useContext } from "react";

import {
  adidas,
  chanel,
  hm,
  lacoste,
  nike,
  puma,
  tommy,
  zara,
} from "../../../../AssetsMain";

import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { NavLink } from "react-router-dom";
import { NoImg, SircleNext } from "../../../../AssetsMain/icons";
// import required modules``
export default function MainPageSliders() {
  const [dressInfo] = useContext(dressMainData);
  let dataStyle = "";
  let genderStyle = "";
  if (dressInfo?.type == 1111) {
    dataStyle = " #008F0E ";
    genderStyle = "text-borderSpring bg-btnBgColor border-searchBgColor";
  }
  if (dressInfo?.type == 2222) {
    dataStyle = " #EAA700";
    genderStyle = "text-borderSummer bg-btnBgColor border-searchBgColor";
  }
  if (dressInfo?.type == 3333) {
    dataStyle = " #E17A02 ";
    genderStyle = "text-borderAutumm bg-btnBgColor border-searchBgColor";
  }
  if (dressInfo?.type == 4444) {
    dataStyle = " #007DCA ";
    genderStyle = "text-borderWinter bg-btnBgColor border-searchBgColor";
  }

  const changeColor = [
    { id: 1, data: 1, action: false, colors: "border-black" },
    { id: 2, data: 2, action: false, colors: "border-white" },
    { id: 3, data: 3, action: false, colors: "border-zinc-500" },
    { id: 4, data: 4, action: false, colors: "border-purple-500" },
    { id: 5, data: 5, action: false, colors: "border-sky-600" },
    { id: 6, data: 6, action: false, colors: "border-amber-400 " },
    { id: 7, data: 7, action: false, colors: "border-green-700 " },
    { id: 8, data: 8, action: false, colors: "border-amber-600 " },
    { id: 9, data: 9, action: false, colors: "border-red-700  " },
    { id: 10, data: 10, action: false, colors: "border-purple-800 " },
    { id: 11, data: 11, action: false, colors: "border-blue-900  " },
    { id: 12, data: 12, action: false, colors: "border-yellow-900 " },
  ];
  const carosuelData = [
    {
      Category: [
        { id: 1, type: "Student", count: 123, img: "" },
        { id: 2, type: "Businiess", count: 223, img: "" },
        { id: 3, type: "Muslim", count: 80, img: "" },
        { id: 4, type: "Travel", count: 453, img: "" },
        { id: 5, type: "Sport", count: 320, img: "" },
        { id: 6, type: "Classic", count: 40, img: "" },
        { id: 7, type: "Relaxed", count: 180, img: "" },
        { id: 8, type: "Dramatic", count: 250, img: "" },
        { id: 9, type: "Creative", count: 190, img: "" },
      ],

      campany: [
        { id: 1, imgFull: adidas },
        { id: 2, imgFull: chanel },
        { id: 3, imgFull: adidas },
        { id: 4, imgFull: lacoste },
        { id: 5, imgFull: hm },
        { id: 6, imgFull: lacoste },
        { id: 7, imgFull: adidas },
        { id: 8, imgFull: nike },
        { id: 9, imgFull: puma },
        { id: 10, imgFull: puma },
        { id: 11, imgFull: tommy },
        { id: 12, imgFull: zara },
      ],
      service: [
        { id: 1111, type: "Spring" },
        { id: 2222, type: "Summer" },
        { id: 3333, type: "Autumm" },
        { id: 4444, type: "Winter" },
      ],
    },
  ];
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[40%] z-10	right-[20px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard		`}
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
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[40%] z-10	left-[20px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };
  const NextArrow1 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[30%] z-10	right-[20px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard	`}
        onClick={onClick}
      >
        <button className="next">
          <GrFormNext size={20} />
        </button>
      </div>
    );
  };

  const PrevArrow1 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[30%] z-10	left-[20px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard	`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };
  let settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    dots: false,

    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 3,
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
  let settings1 = {
    nextArrow: <NextArrow1 />,
    prevArrow: <PrevArrow1 />,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 3,
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
    <div className="box-border flex flex-col justify-center	 my-6">
      <div className="w-full ss:hidden xs:block">
        <Slider
          {...settings}
          className="w-[100%] flex xs:justify-between flex-wrap  "
        >
          {carosuelData?.map((data) => {
            return data.Category.map((data) => {
              return (
                <NavLink
                  to={"/categoriesType"}
                  key={data?.id}
                  className="!w-[99%]  h-[260px] rounded-lg  "
                >
                  <div className="w-full h-[230px] bg-btnBgColor p-2 ml-[0.5px]  rounded-lg">
                    {changeColor
                      .filter((e) => e.id === dressInfo?.ClothesBorder)
                      .map((value) => {
                        return (
                          <div
                            key={value?.id}
                            className={`w-full h-full border border-solid	${value?.colors} rounded-lg`}
                          >
                            <SircleNext />
                          </div>
                        );
                      })}
                  </div>
                  <div className="h-12.5 flex items-center justify-start">
                    <p className="not-italic font-AeonikProMedium text-base leading-4 text-black mt-3 mr-2   ml-2">
                      {data?.type || "type"}
                      <span className="not-italic ml-2 font-AeonikProRegular text-xs leading-4 text-gray-500">
                        ({data?.count || "0"})
                      </span>
                    </p>
                  </div>
                </NavLink>
              );
            });
          })}
        </Slider>
      </div>
      {/* carosuel hidden bloack */}
      <div className="w-full h-fit xs:hidden grid grid-cols-3 gap-2 overflow-hidden  my-0 py-0 md:my-5 md:py-7 ">
        {carosuelData?.map((data) => {
          return data.Category.map((data) => {
            return (
              <NavLink
                to="/categoriesType"
                key={data?.id}
                className="w-[100%] "
              >
                <div className="w-[100%] h-[140px] flex items-center justify-center	p-1 bg-btnBgColor border border-searchBgColor	rounded-lg ">
                  <NoImg />
                </div>
                <div className="w-full py-1 flex items-center">
                  <p className="not-italic font-AeonikProMedium text-sm leading-6 text-black">
                    {data?.type || "type"}
                    <span className="not-italic font-AeonikProRegular text-xs leading-4 text-gray-500 ml-1">
                      ({data?.count || "0"})
                    </span>
                  </p>
                </div>
              </NavLink>
            );
          });
        })}
      </div>
      <div className="w-full flex justify-center items-center  mt-10 ">
        <button
          className={`w-fit cursor-pointer active:scale-95	active:opacity-70 flex items-center h-[52px] px-10 rounded-lg border ${genderStyle}`}
        >
          <span className="not-italic mt-1 font-AeonikProMedium text-base leading-4 text-center">
            Посмотреть все категории
          </span>
          <span className="ml-2 ">
            <SircleNext colors={dataStyle} />
          </span>
        </button>
      </div>
      <div className="w-full 	mt-[60px] ss:hidden xs:block">
        <Slider
          {...settings1}
          className="w-[100%] flex xs:justify-between  px-[1px]"
        >
          {carosuelData?.map((data) => {
            return data.campany.map((data) => {
              return (
                <div
                  key={data?.id}
                  className="!w-[98.88%] h-[100px]  rounded-lg bg-btnBgColor flex items-center justify-center select-none border border-solid border-searchBgColor"
                >
                  <div className=" h-full flex items-center justify-center px-[35px]">
                    <img
                      className="h-[70px] w-[80%] "
                      src={data?.imgFull}
                      alt=""
                    />
                  </div>
                </div>
              );
            });
          })}
        </Slider>
      </div>
    </div>
  );
}
