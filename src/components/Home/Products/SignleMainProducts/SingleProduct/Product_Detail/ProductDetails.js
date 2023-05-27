import React, { useContext, useEffect, useState } from "react";
import {
  InputCheck,
  ProductArticle,
  ProductBing,
  ProductSize,
  ProductStar,
  ProductSuccess,
  ProductSwitch,
  ProductWarning,
  autummSeason,
  bucket,
  delivery,
  discount,
  heart,
  inputCheckBlack,
  springSeason,
  summerSeason,
  winterSeason,
} from "../../../../../../assets/imgs";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";
import { BsCircleFill } from "react-icons/bs";
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
    { id: 1, size: "S", bingIcons: "" },
    { id: 2, size: "M", bingIcons: "" },
    { id: 3, size: "L", bingIcons: "" },
    { id: 4, size: "XL", bingIcons: ProductBing },
    { id: 5, size: "XXL", bingIcons: "" },
    { id: 6, size: "3XL", bingIcons: "" },
    { id: 7, size: "4XL", bingIcons: ProductBing },
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
  return (
    <div className="w-full h-full ">
      <div className="">
        <div className="h-fit flex justify-between ">
          <div className="flex items-center justify-start ">
            <div className="w-fit flex items-center gap-x-[1px]">
              <img src={ProductStar} alt="" />
              <img src={ProductStar} alt="" />
              <img src={ProductStar} alt="" />
              <img src={ProductStar} alt="" />
              <img src={ProductStar} alt="" />
            </div>
            <div className="flex items-center w-fit ml-2">
              <div className="not-italic font-AeonikProMedium text-[13px] mt-2 leading-4 text-black tracking-[1%]">
                4.7
              </div>
              <div className=" pl-1 not-italic font-AeonikProRegular text-[13px] mt-2 leading-4 text-setTexOpacity tracking-[1%]">
                (265 votes)
              </div>
              <div className="w-[1px] h-[14px] border-2 border-r border-searchBgColor mx-[10px]"></div>
              <div className=" not-italic font-AeonikProRegular text-[13px] mt-2 leading-4 text-setTexOpacity tracking-[1%]">
                (678 orders)
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <div>
              <img src={ProductArticle} alt="" />
            </div>
            <div className="ml-[2px] mr-[6px] not-italic font-AeonikProRegular mt-1 text-[13px] leading-4 text-right text-black tracking-[1%]">
              Article:
            </div>
            <div className="not-italic font-AeonikProRegular mt-1 text-[13px] leading-4 text-right text-setTexOpacity tracking-[1%]">
              AA009842
            </div>
          </div>
        </div>
        <div className=" mt-4">
          <span className="not-italic font-AeonikProMedium text-[22px] leading-7 text-TextTitle tracking-[1%]">
            Спортивная мужская кроссовка Nike RUN
          </span>
        </div>
        <div className="h-fit flex mt-4">
          <div className="w-fit flex items-center">
            <div>
              <img src={bucket} alt="" />
            </div>
            <div className="not-italic flex items-center mt-1  font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
              Магазин:
            </div>
          </div>
          <div className="w-fit ml-10">
            <span className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
              Nike Store Official Dealer
            </span>
          </div>
        </div>
        <div
          className="h-fit flex justify-between
       mt-4"
        >
          <div className="flex items-center">
            <div className="flex items-center">
              <span>
                <img src={delivery} alt="" />
              </span>
              <span className="ml-2 not-italic font-AeonikProMedium mt-1 text-[14px] leading-4 text-black tracking-[1%]">
                Доставка:
              </span>
            </div>
            <div className="flex items-center ml-[31px]">
              <span>
                <img src={ProductSuccess} alt="" />
              </span>
              <span className="ml-2 not-italic font-AeonikProMedium mt-1 text-sm leading-4 text-green-800 tracking-[1%]">
                Доступно
              </span>
            </div>
          </div>
          <div className="w-fit flex items-center h-fit ">
            <div className="not-italic mr-3 mt-1 font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%]">
              Сезон:
            </div>
            <div className="flex items-center">
              <img src={winterSeason} alt="" />
              <span className="not-italic mt-1 ml-1 font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                Зима
              </span>
            </div>
            <div className="w-[1px] border h-3 border-searchBgColor mx-3"></div>
            <div className="flex items-center">
              <img src={summerSeason} alt="" />
              <span className="not-italic mt-1 ml-1 font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                Весна
              </span>
            </div>
            <div className="w-[1px] border h-3 border-searchBgColor mx-3"></div>
            <div className="flex items-center">
              <img src={autummSeason} alt="" />
              <span className="not-italic mt-1 ml-1 font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                Осень
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-y border-searchBgColor py-7 mt-5">
        <div className="flex items-center ">
          <span>
            <img src={ProductSwitch} alt="" />
          </span>
          <span className="not-italic ml-2 mr-3 mt-1 font-AeonikProMedium text-[14px] leading-4 text-black">
            Цвет:
          </span>
          <span className="not-italic mt-1 font-AeonikProMedium text-[14px] leading-4 text-black">
            Синий океан
          </span>
        </div>
        <div className="w-full  mt-3 flex items-center gap-x-3 py-1">
          {selectColor.map((data) => {
            return (
              <div
                key={data?.id}
                onClick={() => handleColorCheck(data.id)}
                className={`w-[64px] h-[72px] flex items-center justify-center rounded-lg ${
                  data.color
                } border border-searchBgColor cursor-pointer ${
                  data.action ? "outline outline-offset-2 outline-2" : ""
                } ${data.out} `}
              >
                {data.action && getCheckColor == 3 ? (
                  <img className="w-fit" src={inputCheckBlack} alt="" />
                ) : null}
                {data.action && getCheckColor !== 3 ? (
                  <img className="w-fit" src={InputCheck} alt="" />
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="flex items-center mt-3">
          <span>
            <img src={ProductSize} alt="" />
          </span>
          <span className="not-italic ml-2 mr-3 mt-1 font-AeonikProMedium text-[14px] leading-4 text-black">
            Размер:
          </span>
          <span className="not-italic mt-1 font-AeonikProMedium text-[14px] leading-4 text-black">
            3XL{" "}
          </span>
        </div>
        <div className="flex items-center mt-3 ">
          <div className="flex items-center gap-x-3">
            {" "}
            {selectSize.map((data) => {
              return (
                <div className="h-[44px] cursor-pointer rounded-lg  border border-searchBgColor focus:border-fullBlue px-4 flex items-center justify-center">
                  <span
                    className={`mt-1 not-italic font-AeonikProMedium text-[14px] leading-4 text-center ${
                      data?.bingIcons ? "text-textOpacity" : "text-black"
                    } tracking-[1%]`}
                  >
                    {data?.size}
                  </span>
                  <span className={`${data?.bingIcons ? "ml-[10px]" : ""}`}>
                    <img src={data?.bingIcons} alt="" />
                  </span>
                </div>
              );
            })}
          </div>
          <div className="w-[1px] border-r border-searchBgColor h-8 mx-4"></div>
          <div className="w-11 h-11 flex items-center justify-center rounded-lg border border-searchBgColor">
            <img src={ProductWarning} alt="" />
          </div>
        </div>
      </div>
      <div className=" mt-5">
        <div className="flex items-center">
          <span className="not-italic mt-1 font-AeonikProMedium text-[20px] leading-9 text-black trcking-[1%]">
            452 000 сум
          </span>
          <span className="not-italic ml-4 mt-1 font-AeonikProRegular line-through text-[14px] leading-7 text-setTexOpacity">
            652 000 сум
          </span>
          <div className="w-[108px] cursor-pointer ml-8  flex items-center justify-center h-11 border border-searchBgColor rounded-lg">
            <span>
              <img src={discount} alt="" />
            </span>
            <span className="ml-[6px] not-italic mt-1 font-AeonikProMedium text-[16px] leading-5 text-red-700">
              -30%
            </span>
          </div>
        </div>
        <div className="flex items-center mt-8">
          <div className="w-fit">
            <button className="w-[260px] mt-1 h-[52px] rounded-lg not-italic font-AeonikProMedium text-base leading-4 text-center text-white flex items-center justify-center bg-fullBlue">
              Добавить в корзину
            </button>
          </div>
          <div className="w-fit ml-3">
            <button
              className={`w-[142px] mt-1 h-[52px] rounded-lg not-italic border font-AeonikProMedium text-base leading-4 text-center flex items-center justify-center ${genderStyle} `}
            >
              Купить сейчас{" "}
            </button>
          </div>
          <div className="w-fit ml-3">
            <button className="w-[52px] h-[52px] flex items-center justify-center rounded-lg border border-searchBgColor">
              <img src={heart} alt="" />
            </button>
          </div>
          <div className={`w-fit ml-8 ${dataStyle}`}>
            <span className="not-italic mt-1 font-AeonikProRegular text-[14px] leading-5 text-right tracking-[1%]">
              В наличии:
            </span>
            <span className="not-italic mt-1 ml-1 font-AeonikProMedium text-[14px] leading-6 text-right tracking-[1%]">
              28
            </span>
          </div>
        </div>
      </div>
      {/* Text Items */}
      <div className="mt-20 ">
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
      <div className="mt-[60px] ">
        <div className="">
          <div>
            <span className="not-italic mt-1 font-AeonikProRegular text-[14px] leading-5 text-right tracking-[1%]">
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

      <div className="mt-[60px] flex flex-col gap-y-5">
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
