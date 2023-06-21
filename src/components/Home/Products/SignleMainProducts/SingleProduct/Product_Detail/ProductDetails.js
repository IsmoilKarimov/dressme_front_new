import React, { useContext, useEffect, useState } from "react";

import { dressMainData } from "../../../../../../ContextHook/ContextMenu";
import { BsCircleFill } from "react-icons/bs";
import {
  BasketIcons,
  CircleSuccessIcons,
  CircleWarningIcons,
  DeliveryIcons,
  DiscountShapeIcons,
  DollorIcons,
  HeartIcons,
  InputCheckedTrueIcons,
  ProductArticleIcons,
  ProductSizeIcons,
  ProductSwitchIcons,
  SaveMarketIcons,
  StarIcons,
} from "../../../../../../AssetsMain/icons";
import {
  summerSeason,
  autummSeason,
  winterSeason,
  HeartImg,
} from "../../../../../../AssetsMain";
import ScrollToTop from "react-scroll-to-top";

const ProductDetails = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  let dataStyle = "";
  let genderStyle = "";
  if (dressInfo?.type == 1111) {
    dataStyle = " text-borderSpring ";
    genderStyle = "text-borderSpring bg-bgSpring border-borderSpring";
  }
  if (dressInfo?.type == 2222) {
    dataStyle = " text-borderSummer";
    genderStyle = "text-borderSummer bg-bgSummer border-borderSummer";
  }
  if (dressInfo?.type == 3333) {
    dataStyle = " text-borderAutumm ";
    genderStyle = "text-borderAutumm bg-bgAutumm border-borderAutumm";
  }
  if (dressInfo?.type == 4444) {
    dataStyle = " text-borderWinter ";
    genderStyle = "text-borderWinter bg-bgWinter border-borderWinter";
  }
  const [selectColor, setSelectColor] = useState([
    { id: 1, color: "bg-PC1", out: "outline-PC1", action: true },
    { id: 2, color: "bg-PC2", out: "outline-PC2", action: false },
    { id: 3, color: "bg-PC3", out: "outline-PC2", action: false },
    { id: 4, color: "bg-PC4", out: "outline-PC4", action: false },
    { id: 5, color: "bg-PC5", out: "outline-PC5", action: false },
    { id: 6, color: "bg-PC6", out: "outline-PC6", action: false },
  ]);

  const [selectSize, setSelectSize] = useState([
    { id: 1, size: "S" },
    { id: 2, size: "M" },
    { id: 3, size: "L" },
    { id: 4, size: "XL" },
    { id: 5, size: "XXL" },
    { id: 6, size: "3XL" },
    { id: 7, size: "4XL" },
  ]);
  const [getCheckColor, setGetCheckColor] = useState("");
  const handleColorCheck = (value) => {
    setGetCheckColor(value);
    setSelectColor((data) => {
      return data.map((e) => {
        if (e.id == value) {
          return { ...e, action: !e.action };
        } else return { ...e, action: false };
      });
    });
  };

  // const handleGetId = (getValue) => {
  //   setPoints((current) => {
  //     return current.map((data) => {
  //       if (data?.id == getValue) {
  //         return { ...data, accordion: !data.accordion };
  //       } else {
  //         return { ...data, accordion: false };
  //       }
  //     });
  //   });
  // };

  const [show, setShow] = useState(true);
  const [scrollPost, setscrollPost] = useState(0);

  // ----------------NavMenu----------------
  const [ShowNavMenu, setShowNavMenu] = useState(true);
  const [ScrollPostNavMenu, setScrollPostNavMenu] = useState(0);

  // ----------------NavBar----------------
  const handleScroll = () => {
    setscrollPost(document.body.getBoundingClientRect().top);
    if (parseInt(Math.abs(scrollPost)) > 300) {
      setShow(document.body.getBoundingClientRect().top > scrollPost);
    }
  };

  // ----------------NavMenu----------------
  const handleScrollNavMenu = () => {
    setScrollPostNavMenu(document.body.getBoundingClientRect().top);
    setShowNavMenu(
      document.body.getBoundingClientRect().top < ScrollPostNavMenu
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollNavMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollNavMenu);
    };
  }, [show, scrollPost, ShowNavMenu, ScrollPostNavMenu]);

  return (
    <div className="w-full h-full mt-4 md:mt-0">
      <div className="w-full">
        <div className="h-fit flex justify-between mb-4">
          <div className="flex items-center justify-start ">
            <div className="w-fit flex items-center gap-x-[1px]">
              <StarIcons />
            </div>
            <div className="flex items-center w-fit ml-2 text-base md:text-[13px]">
              <div className="not-italic font-AeonikProMedium mt-2 leading-4 text-black tracking-[1%]">
                4.7
              </div>
              <div className=" pl-1 not-italic font-AeonikProRegular mt-2 leading-4 text-setTexOpacity tracking-[1%]">
                (265 votes)
              </div>
              <div className="text-searchBgColor mx-[10px]">|</div>
              <div className=" not-italic font-AeonikProRegular mt-2 leading-4 text-setTexOpacity tracking-[1%]">
                (678 orders)
              </div>
            </div>
          </div>
          <button className="w-11 h-11 flex md:hidden items-center justify-center rounded-lg border border-searchBgColor">
            <img src={HeartImg} alt="" className="w-5 h-5" />
          </button>
          <div className="hidden items-center md:flex">
            <div>
              <ProductArticleIcons />
            </div>
            <div className="ml-[2px] mr-[6px] not-italic font-AeonikProRegular  text-[13px] leading-4 text-right text-black tracking-[1%]">
              Article:
            </div>
            <div className="not-italic font-AeonikProRegular  text-[13px] leading-4 text-right text-setTexOpacity tracking-[1%]">
              AA009842
            </div>
          </div>
        </div>
        <div className="w-full  mb-8">
          <span className="not-italic font-AeonikProMedium text-xl md:text-[22px] leading-7 text-TextTitle tracking-[1%]">
            Спортивная мужская кроссовка Nike RUN
          </span>
        </div>
        {/* Desktop */}
        <div className="h-fit hidden md:flex mb-4">
          <div className="w-fit flex items-center">
            <div>
              <BasketIcons colors={"#000"} />
            </div>
            <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
              Магазин:
            </div>
          </div>
          <div className="w-fit ml-10">
            <span className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
              Nike Store Official Dealer
            </span>
          </div>
        </div>
        {/* Mobile Dostavka*/}
        <div className="h-fit flex justify-between mb-4 md:mb-7">
          <div className="flex items-center">
            <div className="flex items-center">
              <span>
                <DeliveryIcons />
              </span>
              <span className="ml-2 not-italic font-AeonikProMedium  text-base md:text-[14px] leading-4 text-black tracking-[1%]">
                Доставка:
              </span>
            </div>
            <div className="flex items-center ml-2 md:ml-[32px]">
              <span>
                <CircleSuccessIcons colors={"#008F0E"} />
              </span>
              <span className="hidden md:block ml-2 not-italic font-AeonikProMedium  text-sm leading-4 text-green-800 tracking-[1%]">
                Доступно
              </span>
            </div>
          </div>
          <div className="flex md:hidden items-center text-base md:text-[13px]">
            <div>
              <ProductArticleIcons />
            </div>
            <div className="ml-[2px] mr-[6px] not-italic font-AeonikProRegular  leading-4 text-right text-black tracking-[1%]">
              Article:
            </div>
            <div className="not-italic font-AeonikProRegular  leading-4 text-right text-setTexOpacity tracking-[1%]">
              AA009842
            </div>
          </div>

          <div className="w-fit hidden md:flex items-center h-fit ">
            <div className="not-italic mr-3  font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%]">
              Сезон:
            </div>
            <div className="flex items-center">
              <img src={winterSeason} alt="" />

              <span className="not-italic  ml-1 font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                Зима
              </span>
            </div>
            <div className="w-[1px] border h-3 border-searchBgColor mx-3"></div>
            <div className="flex items-center">
              <img src={summerSeason} alt="" />
              <span className="not-italic  ml-1 font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                Весна
              </span>
            </div>
            <div className="w-[1px] border h-3 border-searchBgColor mx-3"></div>
            <div className="flex items-center">
              <img src={autummSeason} alt="" />
              <span className="not-italic  ml-1 font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                Осень
              </span>
            </div>
          </div>
        </div>
        <div className="w-fit flex md:hidden items-center h-fit text-base md:text-sm mb-10 md:mb-0">
          <div className="not-italic mr-3  font-AeonikProMedium leading-4 text-black tracking-[1%]">
            Сезон:
          </div>
          <div className="flex items-center">
            <img src={winterSeason} alt="" />

            <span className="not-italic  ml-1 font-AeonikProMedium md:font-AeonikProRegular leading-4 text-black tracking-[1%]">
              Зима
            </span>
          </div>
          <div className="w-[1px] border h-3 border-searchBgColor mx-3"></div>
          <div className="flex items-center">
            <img src={summerSeason} alt="" />
            <span className="not-italic  ml-1 font-AeonikProMedium md:font-AeonikProRegular leading-4 text-black tracking-[1%]">
              Весна
            </span>
          </div>
        </div>
      </div>
      <div className="w-full border-t md:border-y md:border-searchBgColor pt-7 pb-12">
        <div className="w-full flex items-center mb-6 text-base font-AeonikProMedium">
          <span>
            <ProductSwitchIcons />
          </span>
          <span className="not-italic ml-2 mr-3  font-AeonikProRegular md:font-AeonikProMedium leading-4 text-black">
            Цвет:
          </span>
          <span className="not-italic  leading-4 text-black">Синий океан</span>
        </div>
        <div className="w-full flex items-center gap-x-3 py-1 mb-7">
          {selectColor.map((data) => {
            return (
              <div
                key={data?.id}
                onClick={() => handleColorCheck(data.id)}
                className={`w-[50px] h-[50px] md:w-[64px] md:h-[72px] flex items-center justify-center rounded-lg ${
                  data.color
                } border border-searchBgColor cursor-pointer ${
                  data.action ? "outline outline-offset-2 outline-2" : ""
                } ${data.out} `}
              >
                {data.action && getCheckColor == 3 ? (
                  <InputCheckedTrueIcons colors={"#000"} />
                ) : null}
                {data.action && getCheckColor !== 3 ? (
                  <InputCheckedTrueIcons colors={"#fff"} />
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="w-full flex items-center mb-4 text-[16px] md:text-sm">
          <span>
            <ProductSizeIcons />
          </span>
          <span className="not-italic ml-2 mr-3  font-AeonikProRegular md:font-AeonikProMedium leading-4 text-black">
            Размер:
          </span>
          <span className="not-italic  font-AeonikProMedium text-[16px] md:text-sm leading-4 text-black">
            3XL{" "}
          </span>
        </div>
        <div className="w-full flex items-center">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
            {selectSize.map((data) => {
              return (
                <div className="h-11 w-[80px] md:w-auto cursor-pointer rounded-lg  border border-searchBgColor focus:border-fullBlue px-4 flex items-center justify-center">
                  <span
                    className={` not-italic font-AeonikProMedium text-[14px] leading-4 text-center text-black tracking-[1%]`}
                  >
                    {data?.size}
                  </span>
                </div>
              );
            })}
            <div className="w-[80px] h-11 flex md:hidden items-center justify-center rounded-lg border border-searchBgColor">
              <CircleWarningIcons colors={"#000"} />
            </div>
          </div>
          <div className="hidden md:block w-[1px] border-r border-searchBgColor h-8 mx-4"></div>
          <div className="w-11 h-11 hidden md:flex items-center justify-center rounded-lg border border-searchBgColor">
            <CircleWarningIcons colors={"#000"} />
          </div>
        </div>


        {/* Mobile Price */}
      <div className={`fixed md:hidden z-[29] flex flex-col gap-y-1 shadow-navMenuShadov ${
          show ? " bottom-[62px] duration-500 translate-y-[0%]" : "translate-y-[0%] bottom-0 duration-500 "
        }  left-0 right-0 px-4  py-2 w-[100%] h-fit bg-white rounded-lg`}
      >
        <div className="h-[36px] w-full flex justify-between items-center ">
          <div className="flex ">
            <DollorIcons />
            <span className="text-base font-AeonikProRegular ml-[6px]">
              Цена:
            </span>
          </div>
          <div className="w-[84px] h-9  cursor-pointer ml-8 flex items-center justify-center border border-searchBgColor rounded-lg">
            <span>
              <DiscountShapeIcons />
            </span>
            <span className="ml-[6px] not-italic  font-AeonikProMedium text-sm  leading-5 text-red-700">
              -30%
            </span>
          </div>
        </div>
        <div className="h-[36px] w-full flex justify-between items-center ">
          <div className="flex items-center">
            <span className="not-italic  font-AeonikProMedium text-[18px] leading-9 text-black trcking-[1%]">
              452 000
            </span>
            <span className="not-italic ml-1 mt-[6px] font-AeonikProRegular line-through text-[14px] leading-7 text-setTexOpacity">
              652 000
            </span>
          </div>
          <div className={`w-fit  ${dataStyle} flex  `}>
            <span className="font-AeonikProRegular text-[14px] leading-4">
              В наличии:
            </span>
            <span className="ml-2 font-AeonikProMedium text-[14px] leading-4">
              284
            </span>
          </div>
        </div>

        <div className="h-fit w-full  flex items-center justify-between mb-2 gap-x-2">
          <button className="max-w-[63%] w-full bg-fullBlue text-white rounded-lg h-[36px] flex items-center justify-center ">
            <span>
              <SaveMarketIcons />
            </span>
            <span className="not-italic font-AeonikProMedium text-[14px] ll:text-base leading-4 text-white">
              {" "}
              Добавить в корзину
            </span>
          </button>
          <button
            className={`max-w-[33%] w-full h-[36px]  flex items-center justify-center border rounded-lg ${genderStyle}`}
          >
            <span> Купить</span>
          </button>
        </div>
      </div>
        

      </div>

      <div className="w-full md:block hidden md:pb-8 pt-6 md:border-b border-searchBgColor mb-12 md:mb-0">
        <div className="w-full flex items-center justify-between md:justify-start mb-[14px] md:mb-0">
          <div className="flex md:hidden">
            <DollorIcons />
            <span className="text-base font-AeonikProRegular ml-[6px]">
              Цена:
            </span>
          </div>
          <span className="hidden md:block not-italic  font-AeonikProMedium text-[20px] leading-9 text-black trcking-[1%]">
            452 000 сум
          </span>
          <span className="hidden md:block not-italic ml-4  font-AeonikProRegular line-through text-[14px] leading-7 text-setTexOpacity">
            652 000 сум
          </span>
          <div className="w-[84px] h-9 md:w-[108px] md:h-11 cursor-pointer ml-8 flex items-center justify-center border border-searchBgColor rounded-lg">
            <span>
              <DiscountShapeIcons />
            </span>
            <span className="ml-[6px] not-italic  font-AeonikProMedium text-sm md:text-[16px] leading-5 text-red-700">
              -30%
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-between mb-6 md:mb-0">
          <div className="flex items-center">
            <span className="block md:hidden not-italic  font-AeonikProMedium text-[24px] leading-9 text-black trcking-[1%]">
              452 000
            </span>
            <span className="block md:hidden not-italic ml-2 mt-[10px] font-AeonikProRegular line-through text-[16px] leading-7 text-setTexOpacity">
              652 000
            </span>
          </div>
          <div className={`w-fit mt-2 ${dataStyle} flex md:hidden `}>
            <span className="font-AeonikProRegular text-[14px] leading-4">
              В наличии:
            </span>
            <span className="ml-2 font-AeonikProMedium text-[16px] leading-4">
              284
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-x-3 md:gap-x-0 md:mt-8">
          <div className="w-[65%] md:w-[260px]">
            <button className="w-full h-12 md:w-[260px] md:h-[52px]  rounded-lg not-italic font-AeonikProMedium text-base leading-4 text-center text-white flex items-center justify-center bg-fullBlue">
              Добавить в корзину
            </button>
          </div>
          <div className="w-[35%] md:w-[142px]">
            <button
              className={`w-full h-12 md:w-[142px] md:h-[52px]  rounded-lg not-italic border font-AeonikProMedium text-base leading-4 text-center flex items-center justify-center ${genderStyle} `}
            >
              Купить <span className="hidden md:block">сейчас</span>
            </button>
          </div>
          <div className="w-fit md:ml-3 hidden md:block">
            <button className="w-[52px] h-[52px] hidden md:flex items-center justify-center rounded-lg border border-searchBgColor">
              <img src={HeartImg} alt="" className="w-5 h-5" />
            </button>
          </div>
          <div
            className={`w-fit ml-8 ${dataStyle} items-center hidden md:flex`}
          >
            <span className="not-italic  font-AeonikProRegular text-[14px] leading-5 text-right tracking-[1%]">
              В наличии:
            </span>
            <span className="not-italic  ml-2 font-AeonikProMedium text-[14px] leading-6 text-right tracking-[1%]">
              28
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Price */}
      <div className={`fixed md:hidden z-[29] flex flex-col gap-y-1 shadow-navMenuShadov ${
          show ? "duration-500 translate-y-[0%]" : "translate-y-[0%] duration-500 "
        }  left-0 right-0 px-4  py-2 w-[100%] h-fit bg-white rounded-lg`}
      >
        <div className="h-[36px] w-full flex justify-between items-center ">
          <div className="flex ">
            <DollorIcons />
            <span className="text-base font-AeonikProRegular ml-[6px]">
              Цена:
            </span>
          </div>
          <div className="w-[84px] h-9  cursor-pointer ml-8 flex items-center justify-center border border-searchBgColor rounded-lg">
            <span>
              <DiscountShapeIcons />
            </span>
            <span className="ml-[6px] not-italic  font-AeonikProMedium text-sm  leading-5 text-red-700">
              -30%
            </span>
          </div>
        </div>
        <div className="h-[36px] w-full flex justify-between items-center ">
          <div className="flex items-center">
            <span className="not-italic  font-AeonikProMedium text-[18px] leading-9 text-black trcking-[1%]">
              452 000
            </span>
            <span className="not-italic ml-1 mt-[6px] font-AeonikProRegular line-through text-[14px] leading-7 text-setTexOpacity">
              652 000
            </span>
          </div>
          <div className={`w-fit  ${dataStyle} flex  `}>
            <span className="font-AeonikProRegular text-[14px] leading-4">
              В наличии:
            </span>
            <span className="ml-2 font-AeonikProMedium text-[14px] leading-4">
              284
            </span>
          </div>
        </div>

        <div className="h-fit w-full  flex items-center justify-between mb-2 gap-x-2">
          <button className="max-w-[63%] w-full bg-fullBlue text-white rounded-lg h-[36px] flex items-center justify-center ">
            <span>
              <SaveMarketIcons />
            </span>
            <span className="not-italic font-AeonikProMedium text-[14px] ll:text-base leading-4 text-white">
              {" "}
              Добавить в корзину
            </span>
          </button>
          <button
            className={`max-w-[33%] w-full h-[36px]  flex items-center justify-center border rounded-lg ${genderStyle}`}
          >
            <span> Купить</span>
          </button>
        </div>
      </div>

      {/* Text Items */}
      <div className="mt-12 md:mt-16 hidden md:block">
        <span className="not-italic font-AeonikProRegular text-[14px] leading-7 text-black tracking-[1%]">
          Кратко о товаре
        </span>
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
      </div>
      
      {/* Table */}
      <div className="mt-[60px] hidden md:block">
        <div className="">
          <div>
            <span className="not-italic  font-AeonikProRegular text-[14px] leading-5 text-right tracking-[1%]">
              таблица соответствия мужских размеров
            </span>
          </div>
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
        </div>
      </div>

      <div className="mt-[60px] flex-col gap-y-5 hidden md:flex">
        <span className="not-italic font-AeonikProRegular text-lg leading-7 text-black">
          {" "}
          Бренд GRN занимает №4 место в Юго-Восточной Азии, относится к ТОПовому
          сегменту качества. Бренд GRN один из самых старейших брендов обуви и
          одежды в Азии - был основан в 1978 году.
        </span>
        <span className="not-italic font-AeonikProRegular text-lg leading-7 text-black">
          {" "}
          Бренд GRN имеет более 12000 магазинов собственной розницы в таких
          странах как: Китай, Япония, Вьетнам, Малайзия, Марокко, Югославия,
          Словения, Польша.
        </span>
        <span className="not-italic font-AeonikProRegular text-lg leading-7 text-black">
          {" "}
          Бренд GRN ориентирован на выпуск высококачественной одежды и обуви для
          спорта и для носки на каждый день.
        </span>
        <span className="not-italic font-AeonikProRegular text-lg leading-7 text-black">
          {" "}
          Суммарные объемы выпускаемой обуви – 20.000.000 пар в год, что делает
          бренд GRN одним из самых крупных брендов не только в Азии, но и в
          мире.
        </span>
        <span className="not-italic font-AeonikProRegular text-lg leading-7 text-black">
          {" "}
          Отличительные черты продукции GRN – высокое качество, комфортные
          лекала и стиль.
        </span>
      </div>
    </div>
  );
};

export { ProductDetails };
