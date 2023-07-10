import React, { useContext, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

import { dressMainData } from "../../../../../../ContextHook/ContextMenu";
import { BsCircleFill } from "react-icons/bs";
import {
  BasketIcons,
  CircleSuccessIcons,
  CircleWarningIcons,
  DeliveryIcons,
  DiscountShapeIcons,
  DollorIcons,
  InputCheckedTrueIcons,
  PhoneIcons,
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

const ProductDetails = () => {
  const [dressInfo] = useContext(dressMainData);

  let dataStyle = "";
  let genderStyle = "";
  if (dressInfo?.type === 1111) {
    dataStyle = " text-borderSpring ";
    genderStyle = "text-borderSpring bg-bgSpring border-borderSpring";
  }
  if (dressInfo?.type === 2222) {
    dataStyle = " text-borderSummer";
    genderStyle = "text-borderSummer bg-bgSummer border-borderSummer";
  }
  if (dressInfo?.type === 3333) {
    dataStyle = " text-borderAutumm ";
    genderStyle = "text-borderAutumm bg-bgAutumm border-borderAutumm";
  }
  if (dressInfo?.type === 4444) {
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

  const [selectSize] = useState([
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
        if (e.id === value) {
          return { ...e, action: !e.action };
        } else return { ...e, action: false };
      });
    });
  };

  return (
    <div className="w-full relative h-full mt-4 md:mt-0 ">
      {/*  */}
      <div className="w-full">
        {/* --------- */}
        <div className="h-fit flex justify-between mb-4">
          <div className="flex items-center justify-start ">
            <div className="w-fit flex items-center gap-x-[1px]">
              <StarIcons />
            </div>
            <div className="flex items-center w-fit ml-2 text-base md:text-[13px]">
              <div className="not-italic font-AeonikProMedium mt-1 leading-4 text-black tracking-[1%]">
                4.7
              </div>
              <div className=" pl-1 not-italic font-AeonikProRegular mt-1 leading-4 text-setTexOpacity tracking-[1%]">
                (265 votes)
              </div>
              <div className="text-searchBgColor mx-[10px]">|</div>
              <div className=" not-italic font-AeonikProRegular mt-1 leading-4 text-setTexOpacity tracking-[1%]">
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
      {/*  */}
      <div className="w-full border-t md:border-y md:border-searchBgColor pt-7 pb-12 ">
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
                {data.action && getCheckColor === 3 ? (
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
        <div className={`w-full h-fit py-1 mt-6 md:hidden`}>
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
            <address className="max-w-[63%] w-full">
              <a
                className=" w-full bg-fullBlue text-white rounded-lg h-[44px] flex gap-x-1 ll:gap-x-2 items-center justify-center"
                href="tel:+998 (97) 720-30-40"
              >
                <PhoneIcons colors={"#fff"} />
                <span className="ls:text-base text-[12px]">
                  {" "}
                  +998 (97) 720-30-40
                </span>
              </a>
            </address>
            <address className="max-w-[33%] w-full ">
              <a
                className={` w-full h-[44px]  flex gap-x-1 ll:gap-x-2 items-center justify-center  rounded-lg  text-fullBlue border border-fullBlue`}
                href="https://t.me/itpark_uz"
              >
                <span className="w-5 h-5 bg-fullBlue text-white rounded-full flex items-center px-auto justify-center pr-[2px]">
                  <FaTelegramPlane size={10} />
                </span>{" "}
                <span className="ls:text-base text-[12px]">@itpark_uz</span>{" "}
              </a>
            </address>
          </div>
        </div>
      </div>

      <div className=" w-full md:block hidden md:pb-8 pt-6 md:border-b border-searchBgColor mb-12 md:mb-0">
        <div className="w-full flex items-center justify-between mb-[14px] md:mb-0">
          <div className="w-fit flex items-center">
            <div className="flex md:hidden">
              <DollorIcons />
              <span className="text-base font-AeonikProRegular ml-[6px]">
                Цена:
              </span>
            </div>
            <span className="hidden md:block not-italic  font-AeonikProMedium text-[20px] leading-9 text-black trcking-[0.32px]">
              452 000 сум
            </span>
            <span className="hidden md:block not-italic ml-4  font-AeonikProRegular line-through text-[14px] leading-7 text-setTexOpacity">
              652 000 сум
            </span>
          </div>
          <div className="w-[84px] h-9 md:w-[108px] md:h-11 cursor-pointer ml-8 flex items-center justify-center border border-searchBgColor rounded-lg">
            <span>
              <DiscountShapeIcons />
            </span>
            <span className="ml-[6px] not-italic  font-AeonikProMedium text-sm md:text-[16px] leading-5 text-red-700">
              -30%
            </span>
          </div>
          <div
            className={`w-fit ml-8 ${dataStyle} items-center hidden md:flex`}
          >
            <span className="not-italic  font-AeonikProRegular text-[14px] leading-5 text-right tracking-[0.32px]">
              В наличии:
            </span>
            <span className="not-italic  ml-2 font-AeonikProMedium text-[16px] leading-6 text-right tracking-[0.32px]">
              28
            </span>
          </div>
        </div>

        <div className="w-full flex  items-center justify-between gap-x-3 md:gap-x-0 md:mt-8">
          <div className="md:w-fit w-full flex items-center">
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
          </div>
          <div className="w-fit md:ml-3 hidden md:block">
            <button className="w-[52px] h-[52px] hidden md:flex items-center justify-center rounded-lg border border-searchBgColor">
              <img src={HeartImg} alt="" className="w-5 h-5" />
            </button>
          </div>
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
