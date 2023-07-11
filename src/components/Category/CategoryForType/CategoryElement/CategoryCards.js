import React, { useContext, useState } from "react";

import { dressMainData } from "../../../../ContextHook/ContextMenu";
import {
  ArrowTopIcons,
  InputCheckedTrueIcons,
  NoImg,
  StarIcons,
} from "../../../../AssetsMain/icons";
import { HeartImg } from "../../../../AssetsMain";
import ClothesFilterGroup from "../ClothesFilterGroup/ClothesFIlterGroup";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function CategoryCards() {
  const [dressInfo] = useContext(dressMainData);
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
  const onColorChecked = () => {};

  const [prevSliderBtn, setPrevSliderBtn] = useState(false);
  const data = (onClick) => {
    onClick();
    setPrevSliderBtn(true);
  };
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-12 h-12 flex items-center justify-center top-[2px] z-50	right-[4px]  rounded-full bg-white    duration-200 border  border-borderColor2
        		`}
        onClick={() => data(onClick)}
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
        className={` ${
          prevSliderBtn ? "block" : "hidden"
        } absolute text-center cursor-pointer no-underline opacity-50 w-12 h-12 flex items-center justify-center top-[2px] z-10	left-[2px]  rounded-full bg-white   duration-200 border  border-borderColor2
        `}
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
    slidesToShow: 9,
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
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/product/:${id}`);
  };
  return (
    <main className="flex flex-col box-border mt-2 md:mt-[34px]">
      <section className="hidden">
        <ClothesFilterGroup _class="items gap-x-2 ">
          {wearGroup?.map((data) => {
            return (
              <article
                key={data.id}
                className={`flex items-center justify-center px-4 py-3 border border-searchBgColor rounded-[20px]   bg-btnBgColor`}
              >
                <p className=" cursor-pointer  not-italic font-AeonikProMedium text-sm text-black tracking-[1%] ">
                  {data?.name || "0"}
                </p>
              </article>
            );
          })}
        </ClothesFilterGroup>{" "}
      </section>
      <section className="w-full h-full hidden md:block">
        <article>
          <p className="not-italic font-AeonikProMedium text-sm  leading-4 text-black tracking-[1%]">
            По типу
          </p>
        </article>
        <section className="w-full mt-3 h-[52px] flex flex-col items-center">
          <Slider
            {...settings1}
            className="w-[100%] h-full items-center flex xs:justify-between"
          >
            {wearGroup?.map((data) => {
              return (
                <article key={data.id} className="!w-[100px ] h-full ">
                  <article
                    className={` w-full h-[52px] px-5 m-auto  bg-bgCategory rounded-lg flex justify-center items-center cursor-pointer  border border-searchBgColor`}
                  >
                    <p className="not-italic font-AeonikProMedium text-sm text-black tracking-[1%] ">
                      {data?.name || "0"}
                    </p>
                  </article>
                </article>
              );
            })}
          </Slider>
        </section>
      </section>
      <section className="flex flex-wrap justify-between md:justify-start gap-y-2 lg:gap-x-3 lg:gap-y-3 mt-1 md:mt-12">
        {dressInfo.ProductList.map((data) => {
          return (
            <article
              key={data.id}
              className={`ss:w-[49%] md:w-[24%] lg:w-[240px]  xs:h-[456px] lg:h-fit border border-solid borderColorCard overflow-hidden rounded-xl`}
            >
              <figure
                onClick={() => goDetail(data?.title)}
                className="relative w-full cursor-pointer ss:h-[200px] ls:h-[220px] ll:h-[238px] xs:h-[309px] lg:h-[320px] bg-btnBgColor  flex content-between items-center overflow-hidden border-b border-solid flex-nowrap"
              >
                {data.ProducImg ? (
                  <img
                    className="w-full h-full m-auto hover:scale-105 transition duration-700 ease-in-out"
                    src={data.ProducImg}
                    alt="ProducImg"
                  />
                ) : (
                  <NoImg />
                )}
              </figure>
              <section className="w-full rounded-b-xl bg-white  flex flex-wrap h-[130px] md:h-[136px] ">
                <article className=" w-full flex justify-between items-center px-1  border-solid xs:h-[38px] lg:h-8 ss:h-[30px] xs:px-2 md:px-4 bg-white">
                  {data?.changeColor.map((itemValue) => {
                    return (
                      <article
                        key={itemValue?.id}
                        onClick={() => onColorChecked(data?.id, itemValue?.id)}
                        className={`rounded-full flex items-center justify-center hover:scale-110 duration-300 ls:w-[22px] ls:h-[22px] w-5 h-5 lg:w-6 lg:h-6 ${itemValue?.colors} cursor-pointer  border border-solid border-borderColorCard mr-[3px]`}
                        htmlFor="Color1"
                      >
                        {itemValue?.action ? (
                          <InputCheckedTrueIcons colors={"#fff"} />
                        ) : null}
                      </article>
                    );
                  })}
                </article>
                <article
                  onClick={() => goDetail(data?.title)}
                  className="w-full  xs:px-3 ss:px-3 xs:mt-3 ss:mt-2"
                >
                  <figure className="relative w-full whitespace-nowrap overflow-hidden not-italic font-AeonikProRegular text-[12px] ls:text-sm lg:text-[15px] leading-4 text-black mb-2 md:mb-0  cursor-pointer">
                    <div className="absolute categoryLinearText left-0 w-full h-full z-[10] top-0"></div>
                    {data?.title || "NoData"}
                  </figure>
                  <figure className="w-full flex justify-between items-center xs:mt-3">
                    <section className="flex items-center justify-between">
                      <article>
                        <StarIcons />
                      </article>
                      <article className="not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 ml-[2px] md:ml-1 flex items-center">
                        <p className="font-AeonikProMedium text-[10px] ls:text-xs not-italic mx-1 text-black md:mr-[6px] md:text-[13px]">
                          5.0
                        </p>
                        ({data?.starCount || 0}
                        <p className="ss:hidden lg:block md:ml-1 md:text-[11px]">
                          голосов
                        </p>
                        )
                      </article>
                    </section>
                    <section className="not-italic xs:font-AeonikProMedium ss:font-AeonikProRegular leading-4 text-black  ss:text-[11px] sm:text-xs  md:text-[13px] ">
                      <b>
                        <p>{data?.shirtSize || 0}</p>
                      </b>
                    </section>
                  </figure>
                </article>
                <article className="w-full flex items-center justify-between  pl-3 pr-[5px]">
                  <article className="flex items-center ">
                    {data.sale ? (
                      <figure className="flex flex-col-reverse ll:flex-row	text-start items-start ">
                        <p className="text-start m-0 p-0  not-italic font-AeonikProMedium text-[16px]  md:text-base leading-1 text-red-700 xs:text-base xs:leading-4 mr-1">
                          {data?.sale}
                        </p>
                        <p className="text-start m-0 p-0 text-[11px] mt-[8px]  line-through not-italic font-AeonikProRegular leading-3  text-borderColorCard ss:leading-1 md:text-[11px]">
                          {data?.price}
                        </p>
                      </figure>
                    ) : (
                      <p
                        className="not-italic font-AeonikProMedium text-base leading-4"
                        style={{ color: "black" }}
                      >
                        {data?.price}{" "}
                      </p>
                    )}
                  </article>
                  <figure className="flex items-center select-none	">
                    <button className="w-[32px] h-[32px] active:scale-95  active:opacity-70 ll:mb-1 rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                      <img src={HeartImg} alt="" />
                    </button>
                  </figure>
                </article>
              </section>
            </article>
          );
        })}
      </section>
      <section className="w-full h-fit md:hidden flex items-center justify-center mt-14">
        <p className="w-[760px] h-[60px] cursor-pointer not-italic font-AeonikProMedium text-base leading-4 text-center text-black flex items-center justify-center rounded-lg border border-searchBgColor bg-btnBgColor">
          Показать ещё 30 наборов
        </p>
      </section>
      <section className="w-full hidden h-fit md:flex items-center justify-center mt-[75px] gap-x-6">
        <article className="flex items-center cursor-pointer bg-searchBgColor px-5 py-3 rounded-lg">
          <p className="rotate-[-90deg]">
            <ArrowTopIcons colors={"#007DCA"} />
          </p>{" "}
          <p className="not-italic ml-1   font-AeonikProRegular text-lg leading-4 text-fullBlue">
            Previous
          </p>
        </article>
        <article className="flex items-center">
          <ul className="flex items-center gap-x-3">
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg bg-fullBlue text-white flex items-center justify-center cursor-pointer ">
              1
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              2
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              3
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              4
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              5
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              6
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              7
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              8{" "}
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              . . .
            </li>
          </ul>
        </article>
        <figure className="flex items-center cursor-pointer bg-searchBgColor px-5 py-3 rounded-lg">
          <p className="not-italic  font-AeonikProRegular mr-1 text-lg leading-4 text-fullBlue">
            Next
          </p>
          <p className="rotate-[90deg]">
            <ArrowTopIcons colors={"#007DCA"} />
          </p>
        </figure>
      </section>
    </main>
  );
}
