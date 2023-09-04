import React, { useContext, useEffect, useRef, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";
import { BsCircleFill } from "react-icons/bs";
import { BasketIcons, CategoryUsersIcon, ChapterIcon, CircleWarningIcons, DeliveryIcons, DiscountShapeIcons, DollorIcons, LocationColoursIcons, MarketIcons, PaymeSystemIcons, PhoneIcons, ProductArticleIcons, ProductSwitchIcons, QualityIcon, SettingsIcon, StarIcons } from "../../../../../../assets/icons";
import { summerSeason, autummSeason, winterSeason, HeartImg } from "../../../../../../assets";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const ProductDetails = () => {
  const [dressInfo] = useContext(dressMainData);

  const [selectColor, setSelectColor] = useState([
    { id: 1, color: "bg-PC1", out: "outline-PC1", action: true },
    { id: 2, color: "bg-PC2", out: "outline-PC2", action: false },
    { id: 3, color: "bg-PC3", out: "outline-PC2", action: false },
    { id: 4, color: "bg-PC4", out: "outline-PC4", action: false },
    { id: 5, color: "bg-PC5", out: "outline-PC5", action: false },
    { id: 6, color: "bg-PC6", out: "outline-PC6", action: false },
  ]);

  const [selectSize] = useState([
    { id: 1, size: "S", sizeNumbers:'36-44' },
    { id: 2, size: "M", sizeNumbers:'36-44' },
    { id: 3, size: "L", sizeNumbers:'36-44' },
    { id: 4, size: "XL", sizeNumbers:'36-44' },
    { id: 5, size: "XXL", sizeNumbers:'36-44' },
    { id: 6, size: "3XL", sizeNumbers:'36-44' },
    { id: 7, size: "4XL", sizeNumbers:'23-28' },
  ]);

  const [imgGroup] = useState([
    {
      id: 1,
      action: true,
      img: "https://images.uzum.uz/ch15okj57mg9720fq5h0/original.jpg",
    },
    {
      id: 2,
      action: false,
      img: "https://images.uzum.uz/cgcp9n7g49devoab8a50/t_product_240_high.jpg",
    },
    {
      id: 3,
      action: false,
      img: "https://images.uzum.uz/ch15okng49devoaengt0/original.jpg",
    },
    {
      id: 4,
      action: false,
      img: "https://images.uzum.uz/ch15okvhj8j9g69e280g/original.jpg",
    },
    {
      id: 5,
      action: false,
      img: "https://images.uzum.uz/cgcphi7hgiov1qif46p0/original.jpg",
    },
    {
      id: 6,
      action: false,
      img: "https://images.uzum.uz/ch0g2rr57mg9720fmb9g/t_product_240_high.jpg",
    },
    {
      id: 7,
      action: false,
      img: "https://images.uzum.uz/ch0g2rvhj8j9g69dv4v0/original.jpg",
    },
    {
      id: 8,
      action: false,
      img: "https://images.uzum.uz/ch0g2rvhj8j9g69dv4vg/original.jpg",
    },
    {
      id: 9,
      action: false,
      img: "https://images.uzum.uz/cgl7vevhj8j9g69br4e0/original.jpg",
    },
  ]);

  const [getCheckColor, setGetCheckColor] = useState("");
  const handleColorCheck = (value) => {
    setGetCheckColor(value);
    setSelectColor((data) => {
      return data.map((e) => {
        if (e.id === value) {
          return { ...e, action: !e.action };
        } else return { ...e, action: false };
      });
    });
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <main
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-8 h-8 flex items-center justify-center top-[25%] z-10 right-[2px] rounded-full bg-bgColor duration-200 border  border-searchBgColor`}
        onClick={onClick}
      >
        <button className="next">
          <GrFormNext size={20} />
        </button>
      </main>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <main
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-8 h-8 flex items-center justify-center top-[25%] z-10 left-[2px] rounded-full bg-bgColor duration-200 border  border-searchBgColor`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </main>
    );
  };

  let settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    focusOnSelect: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    speed: 500,
  };

  const [productDescription, setProductDescription] = useState([
    {id:1, action:false},
    {id:2, action:false},
    {id:3, action:false}
  ]);

  return (
    <main className="w-full relative h-full mt-4 md:mt-0 ">
      {/* Product details */}
      <section className="w-full">
        <section className="h-fit flex items-center mb-4">
          <article className="flex items-center justify-start ">
            <p className="w-fit flex items-center gap-x-[1px]">
              <StarIcons />
              <span className="hidden md:flex">
                <StarIcons />
                <StarIcons />
                <StarIcons />
                <StarIcons />
              </span>
            </p>
            <article className="flex items-center w-fit ml-2 text-base md:text-[14px]">
              <p className="not-italic font-AeonikProMedium mt-1 leading-4 text-black tracking-[1%]">
                4.7
              </p>
              <p className=" pl-1 not-italic font-AeonikProRegular mt-1 leading-4 text-setTexOpacity tracking-[1%]">
                (265 votes)
              </p>
              <div className="text-setTexOpacity mx-[10px]">|</div>
              <p className=" not-italic font-AeonikProRegular mt-1 leading-4 text-setTexOpacity tracking-[1%]">
                678 orders
              </p>
            </article>
          </article>
          <button className="w-11 h-11 flex md:hidden items-center justify-center rounded-lg border border-searchBgColor">
            <img src={HeartImg} alt="" className="w-5 h-5" />
          </button>
          <article className="hidden items-center md:flex md:ml-[25px]">
            <p>
              <ProductArticleIcons />
            </p>
            <p className="ml-[2px] mr-[6px] not-italic font-AeonikProRegular text-[14px] leading-4 text-right text-black tracking-[1%]">
              Article:
            </p>
            <p className="not-italic font-AeonikProRegular  text-[14px] leading-4 text-right text-setTexOpacity tracking-[1%]">
              AA009842
            </p>
          </article>
        </section>
        <section className="w-full mb-8">
          <p className="not-italic font-AeonikProMedium text-xl md:text-[22px] leading-7 text-TextTitle tracking-[1%]">
            Спортивная мужская кроссовка Nike RUN
          </p>
        </section>
        
        {/* Desktop */}
        <section className="h-fit hidden md:flex md:flex-col items-center mb-[9px]">
          <div className="w-full flex items-center mb-4">
            <div className="w-1/2 flex items-center">
              <article className="w-fit flex items-center">
                <MarketIcons colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                  Магазин:
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                  Nike Store Official Dealer
                </p>
              </article>
            </div>
            <div className="w-1/2 flex items-center ">
              <section className="w-fit flex items-center h-fit text-base md:text-sm mb-10 md:mb-0">
                <div className="not-italic mr-3  font-AeonikProMedium leading-4 text-black tracking-[1%]">
                  Сезон:
                </div>
                <figure className="flex items-center">
                  <img src={winterSeason} alt="" />

                  <figcaption className="not-italic  ml-1 font-AeonikProMedium md:font-AeonikProRegular leading-4 text-black tracking-[1%]">
                    Зима
                  </figcaption>
                </figure>
                <div className="w-[1px] border h-3 border-searchBgColor mx-3"></div>
                <figure className="flex items-center">
                  <img src={summerSeason} alt="" />
                  <figcaption className="not-italic  ml-1 font-AeonikProMedium md:font-AeonikProRegular leading-4 text-black tracking-[1%]">
                    Весна
                  </figcaption>
                </figure>
                <div className="w-[1px] border h-3 border-searchBgColor mx-3"></div>
                <figure className="flex items-center">
                  <img src={autummSeason} alt="" />
                  <figcaption className="not-italic  ml-1 font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                    Осень
                  </figcaption>
                </figure>
              </section>
            </div>
          </div>
          <div className="w-full flex items-center mb-4">
            <div className="w-1/2 flex items-center">
              <article className="w-fit flex items-center">
                <DeliveryIcons colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                Доставка::
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                Собственная доставка
                </p>
              </article>
            </div>
            <div className="w-1/2 flex items-center ">
              <article className="w-fit flex items-center">
                <SettingsIcon colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                Производитель:
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                Узбекистан
                </p>
              </article>
            </div>
          </div>
          <div className="w-full flex items-center mb-4">
            <div className="w-1/2 flex items-center">
              <article className="w-fit flex items-center">
                <CategoryUsersIcon colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                Возрастная категория::
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                36-44
                </p>
              </article>
            </div>
            <div className="w-1/2 flex items-center ">
              <article className="w-fit flex items-center">
                <ChapterIcon colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                Раздел:
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                Спортивный (Тренировка)  
                </p>
              </article>
            </div>
          </div>
          <div className="w-full flex items-center mb-4">
            <div className="w-1/2 flex items-center">
              <article className="w-fit flex items-center">
                <QualityIcon colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                Качество::
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                Оригинал
                </p>
              </article>
            </div>
            <div className="w-1/2 flex items-center ">
              <article className="w-fit flex items-center">
                <PaymeSystemIcons colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                Номер карты::
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                8600-0000-2345-1234
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="w-fit flex md:hidden items-center h-fit text-base md:text-sm mb-10 md:mb-0">
          <div className="not-italic mr-3  font-AeonikProMedium leading-4 text-black tracking-[1%]">
            Сезон:
          </div>
          <figure className="flex items-center">
            <img src={winterSeason} alt="" />

            <figcaption className="not-italic  ml-1 font-AeonikProMedium md:font-AeonikProRegular leading-4 text-black tracking-[1%]">
              Зима
            </figcaption>
          </figure>
          <div className="w-[1px] border h-3 border-searchBgColor mx-3"></div>
          <figure className="flex items-center">
            <img src={summerSeason} alt="" />
            <figcaption className="not-italic  ml-1 font-AeonikProMedium md:font-AeonikProRegular leading-4 text-black tracking-[1%]">
              Весна
            </figcaption>
          </figure>
        </section>
      </section>
      {/*  */}
      <section className="w-full border-t md:border-y md:border-searchBgColor py-[25px] ">
        <article className="w-full flex items-center justify-between mb-4 text-base font-AeonikProMedium">
          <div className="flex items-center">
            <ProductSwitchIcons colors={"#a1a1a1"} />
            <div className="not-italic ml-2 mr-3 font-AeonikProRegular md:font-AeonikProMedium leading-4 text-[#757575]">
              Цвет:
            </div>
            <p className="not-italic leading-4 text-setTexOpacity">Синий океан</p>
          </div>
          <div className="flex items-center">
            <LocationColoursIcons colors={"#a1a1a1"} />
            <p className="text-base text-setTexOpacity font-AeonikProMedium ml-2">Ташкент, Юнусобод</p>
          </div>
          <div className="text-borderWinter font-AeonikProMedium">В других локациях</div>
        </article>
        <article className="w-full flex items-center mb-[30px]">
          <Slider
            {...settings}
            className="hidden md:flex md:w-[82%] h-[80px] items-center"
          >
            {imgGroup?.map(data => (
              <div key={data.id} className="!w-16 h-[72px] rounded-lg cursor-pointer">
                <img src={data.img} alt="imgs" className="w-fit h-full rounded-lg" />
              </div>
            ))}
          </Slider>
        </article>
        <article className="w-full flex items-center mb-4 text-[16px] md:text-sm">
          <p className="not-italic mr-3 font-AeonikProRegular border-b border-dashed border-borderWinter md:font-AeonikProMedium text-borderWinter">
          Таблица размеров
          </p>
        </article>
        <article className="w-full flex items-center">
          <section className="flex flex-wrap items-center gap-x-3 gap-y-3">
            {selectSize.map((data) => {
              return (
                <article className="h-11 w-[80px] md:w-auto cursor-pointer rounded-lg  border border-[#dadada] focus:border-fullBlue px-4 flex flex-col items-center justify-center">
                  <p
                    className={`not-italic font-AeonikProMedium text-base text-center text-black`}
                  >
                    {data?.size}
                  </p>
                  <span className="text-[13px] font-AeonikProRegular text-[#757575]">{data.sizeNumbers}</span>
                </article>
              );
            })}
            <p className="w-[80px] h-11 flex md:hidden items-center justify-center rounded-lg border border-searchBgColor">
              <CircleWarningIcons colors={"#000"} />
            </p>
          </section>
        </article>

        {/* Mobile Price */}
        <section className={`w-full h-fit py-1 mt-6 md:hidden`}>
          <article className="h-[36px] w-full flex justify-between items-center ">
            <div className="flex ">
              <DollorIcons />
              <p className="text-base font-AeonikProRegular ml-[6px]">Цена:</p>
            </div>
            <div className="w-[84px] h-9  cursor-pointer ml-8 flex items-center justify-center border border-searchBgColor rounded-lg">
              <p>
                <DiscountShapeIcons />
              </p>
              <p className="ml-[6px] not-italic  font-AeonikProMedium text-sm  leading-5 text-red-700">
                -30%
              </p>
            </div>
          </article>
          <article className="h-[36px] w-full flex justify-between items-center ">
            <article className="flex items-center">
              <p className="not-italic  font-AeonikProMedium text-[18px] leading-9 text-black trcking-[1%]">
                452 000
              </p>
              <p className="not-italic ml-1 mt-[6px] font-AeonikProRegular line-through text-[14px] leading-7 text-setTexOpacity">
                652 000
              </p>
            </article>
            <article className={`w-fit  ${dressInfo?.TextColorSeason} flex  `}>
              <p className="font-AeonikProRegular text-[14px] leading-4">
                В наличии:
              </p>
              <p className="ml-2 font-AeonikProMedium text-[14px] leading-4">
                284
              </p>
            </article>
          </article>

          <article className="h-fit w-full  flex items-center justify-between mb-2 gap-x-2">
            <address className="max-w-[70%] w-full ">
              <a
                className=" w-full bg-fullBlue active:scale-95  active:opacity-70 text-white rounded-lg h-[44px] flex gap-x-1 ll:gap-x-2 items-center justify-center"
                href="tel:+998 (97) 720-30-40"
              >
                <PhoneIcons colors={"#fff"} />
                <p className="text-base "> +998 (97) 720-30-40</p>
              </a>
            </address>
            <address className=" max-w-fit md:max-w-[35%] w-full ">
              <a
                className={` w-full h-[44px] active:scale-95  active:opacity-70 px-5 flex gap-x-1 ll:gap-x-2 items-center justify-center  rounded-lg  text-fullBlue border border-fullBlue`}
                href="https://t.me/itpark_uz"
              >
                <p className="w-7 h-7  bg-fullBlue text-white rounded-full flex items-center px-auto justify-center pr-[2px]">
                  <FaTelegramPlane size={16} />
                </p>{" "}
                <p className="text-base  hidden md:block">@itpark_uz</p>{" "}
              </a>
            </address>
          </article>
        </section>
      </section>

      <section className=" w-full hidden md:block md:pb-[50px] pt-[35px] md:border-b border-searchBgColor mb-12 md:mb-0">
        <article className="w-full flex items-center justify-between mb-[14px] md:mb-0">
          <section className="w-fit flex items-center">
            <article className="flex md:hidden">
              <DollorIcons />
              <p className="text-base font-AeonikProRegular ml-[6px]">Цена:</p>
            </article>
            <span className="text-[22px] font-AeonikProMedium mr-2">от</span>
            <p className="hidden md:block font-AeonikProMedium text-[30px] text-black">
              452 000 сум
            </p>
            <p className="hidden md:block ml-[10px] font-AeonikProRegular line-through text-[24px] text-setTexOpacity">
              652 000 сум
            </p>
          </section>
          <section className="w-[84px] h-9 md:w-[108px] md:h-11 cursor-pointer flex items-center justify-center border border-searchBgColor rounded-lg">
            <p>
              <DiscountShapeIcons />
            </p>
            <p className="ml-[6px] font-AeonikProMedium text-sm md:text-[18px] text-red-700">
              -30%
            </p>
          </section>
          <section
            className={`w-fit ${dressInfo?.TextColorSeason} items-center hidden md:flex`}
          >
            <p className="font-AeonikProRegular text-lg text-right">
              В наличии:
            </p>
            <p className="ml-2 font-AeonikProMedium text-xl text-right">
              28
            </p>
          </section>
        </article>

        <article className="w-full flex  items-center justify-between gap-x-3 md:gap-x-0 md:mt-8">
          <article className="md:w-fit w-full flex items-center">
            <address className="w-[65%] md:w-fit">
              <a
                className="w-full h-12  md:h-[52px] px-5  rounded-[12px] not-italic font-AeonikProMedium text-base leading-4 text-center text-white flex gap-x-3 items-center justify-center bg-fullBlue"
                href="tel:+998 (97) 720-30-40"
              >
                <PhoneIcons colors={"#fff"} /> +998 (97) 720-30-40
              </a>
            </address>
            <address className="w-[35%] md:w-fit  ml-4">
              <a
                className={`w-full h-12  md:h-[52px] px-5 rounded-[12px] not-italic font-AeonikProMedium text-base leading-4 text-center flex gap-x-3 items-center justify-center text-fullBlue border border-fullBlue`}
                href="https://t.me/itpark_uz"
              >
                <span className="w-7 h-7 bg-fullBlue text-white rounded-full flex items-center px-auto justify-center pr-[2px]">
                  <FaTelegramPlane size={16} />
                </span>{" "}
                <span>@itpark_uz</span>{" "}
              </a>
            </address>
          </article>
          <article className="w-fit md:ml-3 hidden md:block">
            <button className="w-[52px] h-[52px] hidden md:flex items-center justify-center rounded-lg border border-searchBgColor">
              <img src={HeartImg} alt="" className="w-5 h-5" />
            </button>
          </article>
        </article>
      </section>

      <article className="rounded-lg overflow-hidden  h-[42px] md:h-[52px] ss:w-full md:w-[540px] md:mx-0 flex justify-between bg-slate-50 border border-solid ss:mt-5 md:mt-0 mx-auto ">
          {/* {productDescription.map(item => (

          )})} */}
          <button
            onClick={() => setProductDescription(true)}
            className={`ss:w-1/2 md:w-[152px] md:h-[50px]  h-[42px] text-base text-black text-center font-AeonikProRegular not-italic ${
              productDescription.action
                ? ` bg-white border  border-searchBgColor rounded-lg ${dressInfo?.TextColorSeason}`
                : ""
            }
                        `}
          >
            Описания товара
          </button>
          <p className="h-full text-searchBgColor flex items-center">|</p>
          <button
            onClick={() => setProductDescription(false)}
            className={`ss:w-1/2 md:w-[152px] md:h-[50px]  h-[42px] text-base text-black text-center font-AeonikProRegular not-italic ${
              !productDescription
                ? ` bg-white border  border-searchBgColor rounded-lg ${dressInfo?.TextColorSeason}`
                : ""
            }
          `}
          >
            Характеристики
          </button>
          <button
            onClick={() => setProductDescription(false)}
            className={`ss:w-1/2 md:w-[152px] md:h-[50px]  h-[42px] text-base text-black text-center font-AeonikProRegular not-italic ${
              !productDescription
                ? ` bg-white border  border-searchBgColor rounded-lg ${dressInfo?.TextColorSeason}`
                : ""
            }
          `}
          >
            Характеристики
          </button>
        </article>

      {/* Text Items */}
      <section className="mt-12 md:mt-16 hidden md:block">
        <p className="not-italic font-AeonikProRegular text-[14px] leading-7 text-black tracking-[1%]">
          Кратко о товаре
        </p>
        <ul className="pl-2">
          <li
            className={
              "flex items-center not-italic font-AeonikProRegular text-[14px] leading-7 text-black tracking-[1%]"
            }
          >
            <BsCircleFill size={5} className="mx-2" /> Подошва 100% EVA
          </li>
          <li
            className={
              "flex items-center not-italic font-AeonikProRegular text-[14px] leading-7 text-black tracking-[1%]"
            }
          >
            <BsCircleFill size={5} className="mx-2" /> Подметка 100% резина
            высокого трения
          </li>
          <li
            className={
              "flex items-center not-italic font-AeonikProRegular text-[14px] leading-7 text-black tracking-[1%]"
            }
          >
            <BsCircleFill size={5} className="mx-2" /> Нереально легкие и мягкие
          </li>
          <li
            className={
              "flex items-center not-italic font-AeonikProRegular text-[14px] leading-7 text-black tracking-[1%]"
            }
          >
            <BsCircleFill size={5} className="mx-2" /> Стрейчевый верх –
            комфортные как носки
          </li>
          <li
            className={
              "flex items-center not-italic font-AeonikProRegular text-[14px] leading-7 text-black tracking-[1%]"
            }
          >
            <BsCircleFill size={5} className="mx-2" /> Отличная фиксация стопы
          </li>
        </ul>
      </section>

      {/* Table */}
      <section className="mt-[60px] hidden md:block">
        <article className="">
          <article>
            <p className="not-italic  font-AeonikProRegular text-[14px] leading-5 text-right tracking-[1%]">
              таблица соответствия мужских размеров
            </p>
          </article>
          <table className="w-full border border-searchBgColor  border-collapse	mt-5">
            <tr className="">
              <td>обхват груди см</td>
              <td>86-90</td>
              <td>86-90</td>
              <td>86-90</td>
              <td>86-90</td>
              <td>86-90</td>
              <td>86-90</td>
              <td>86-90</td>
              <td>86-90</td>
              <td>86-90</td>
              <td>86-90</td>
            </tr>
            <tr>
              <td>обхват груди см</td>
              <td>74-78</td>
              <td>74-78</td>
              <td>74-78</td>
              <td>74-78</td>
              <td>74-78</td>
              <td>74-78</td>
              <td>74-78</td>
              <td>74-78</td>
              <td>74-78</td>
              <td>74-78</td>
            </tr>
            <tr>
              <td>обхват груди см</td>
              <td>94-97</td>
              <td>94-97</td>
              <td>94-97</td>
              <td>94-97</td>
              <td>94-97</td>
              <td>94-97</td>
              <td>94-97</td>
              <td>94-97</td>
              <td>94-97</td>
              <td>94-97</td>
            </tr>
            <tr>
              <td>обхват груди см</td>
              <td>36-38</td>
              <td colSpan={2}>36-38</td>
              <td colSpan={2}>36-38</td>
              <td colSpan={2}>36-38</td>
              <td colSpan={2}>36-38</td>
              <td>36-38</td>
            </tr>
            <tr>
              <th>Русский размер РУС</th>
              <th colSpan={2}>S</th>
              <th colSpan={2}>M</th>
              <th colSpan={2}>L</th>
              <th colSpan={2}>XL</th>
              <th colSpan={2}>XXL</th>
            </tr>
          </table>
        </article>
      </section>

      <section className="mt-[60px] flex-col gap-y-5 hidden md:flex">
        <article className="not-italic font-AeonikProRegular text-lg leading-7 text-black">
          {" "}
          Бренд GRN занимает №4 место в Юго-Восточной Азии, относится к ТОПовому
          сегменту качества. Бренд GRN один из самых старейших брендов обуви и
          одежды в Азии - был основан в 1978 году.
        </article>
        <article className="not-italic font-AeonikProRegular text-lg leading-7 text-black">
          {" "}
          Бренд GRN имеет более 12000 магазинов собственной розницы в таких
          странах как: Китай, Япония, Вьетнам, Малайзия, Марокко, Югославия,
          Словения, Польша.
        </article>
        <article className="not-italic font-AeonikProRegular text-lg leading-7 text-black">
          {" "}
          Бренд GRN ориентирован на выпуск высококачественной одежды и обуви для
          спорта и для носки на каждый день.
        </article>
        <article className="not-italic font-AeonikProRegular text-lg leading-7 text-black">
          {" "}
          Суммарные объемы выпускаемой обуви – 20.000.000 пар в год, что делает
          бренд GRN одним из самых крупных брендов не только в Азии, но и в
          мире.
        </article>
        <article className="not-italic font-AeonikProRegular text-lg leading-7 text-black">
          {" "}
          Отличительные черты продукции GRN – высокое качество, комфортные
          лекала и стиль.
        </article>
      </section>
    </main>
  );
};

export { ProductDetails };
