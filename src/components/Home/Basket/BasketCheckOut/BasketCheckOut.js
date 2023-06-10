import React, { useContext, useEffect, useState } from "react";
import { BasketCheckOutTop } from "./BasketCheckOutTop";

import { NavLink, useNavigate } from "react-router-dom";

import { dressMainData } from "../../../../ContextHook/ContextMenu";
import {
  BasketIcons,
  CheckedStatusIcons,
  DeleteIcons,
  HeartIcons,
  InputCheckedTrueIcons,
  MarketIcons,
  NoImg,
  PrivateCheckIcons,
  SircleNext,
  StarIcons,
} from "../../../../AssetsMain/icons";
import { AddBasket, HeartImg } from "../../../../AssetsMain";

export default function BasketCheckOut() {
  const [bucket_products, setBucket_Products] = useState([
    {
      id: 1,
      title: "Спортивная мужская кроссовка Nike RUN",
      img: "",
      store_dealer: "Nike Store Official Dealer",
      size: "3XL",
      color: "bg-zinc-400",
      color_text: "Серый",
      old_prize: "372 000",
      new_prize: "258 000",
      status: false,
      underline: true,
    },
    {
      id: 2,
      title: "Спортивная мужская кроссовка Adidas RUN",
      img: "",
      store_dealer: "Adidas Store Official Dealer",
      size: "3XL",
      color: "bg-sky-700",
      color_text: "Синий океан",
      old_prize: "372 000",
      new_prize: "258 000",
      status: false,
      underline: false,
    },
  ]);
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [state, setState] = useState({
    clothesCount: 1,
    checkAll: false,
  });

  let array = [1, 2, 3, 4];
  const handleDecrement = () => {
    if (state?.clothesCount > 0) {
      setState({
        ...state,
        clothesCount: state.clothesCount - 1,
      });
    }
  };
  const CheckAllHandle = () => {
    setState({ ...state, checkAll: !state.checkAll });
    if (state.checkAll) {
      setBucket_Products((current) => {
        return current.map((data) => {
          return { ...data, status: false };
        });
      });
    } else {
      setBucket_Products((current) => {
        return current.map((data) => {
          return { ...data, status: true };
        });
      });
    }
  };
  const CheckStatus = (value) => {
    setBucket_Products((current) => {
      return current.map((data) => {
        if (data.id == value) {
          return { ...data, status: !data.status };
        } else {
          return data;
        }
      });
    });
  };
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/product/:${id}`);
  };

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //   });
  // });

  return (
    <div className="flex flex-col  m-0 p-0 box-border">
      <div>
        <BasketCheckOutTop />
      </div>
      <div className="w-full h-[84px] md:border-b border-searchBgColor">
        <div className="max-w-[1280px] w-[100%] h-full flex items-center border-x border-searchBgColor justify-between items-center m-auto   ">
          <div className="w-full md:w-[68%] h-full px-4 md:px-8 border-r border-searchBgColor flex  items-center justify-between">
            <div className="w-fit  flex  items-center">
              <p className="flex not-italic font-AeonikProMedium text-[18px] md:text-[20px] leading-7 text-black tracking-[1%]">
                Корзина{" "}
                <span className="md:w-6 md:h-6 w-5 h-5 ml-2 pt-1 mt-[2px] rounded-full flex items-center justify-center bg-red-500 not-italic font-AeonikProMedium text-[12px] md:text-base leading-4 text-center text-white">
                  {bucket_products.length}
                </span>
              </p>
            </div>
            <div className="w-fit h-full flex gap-x-5 md:gap-x-8  items-center">
              <div className="hidden md:block">
                <p className="flex">
                  <span>
                    <DeleteIcons colors={"#A1A1A1"} />
                  </span>

                  <span className="not-italic  ml-2 mt-1 font-AeonikProMedium text-[14px] text-textOpacity leading-4 tracking-[1%]">
                    {" "}
                    Удалить
                  </span>
                </p>
              </div>
              <div className=" flex items-center">
                <p className="flex">
                  <span className="not-italic mt-1 font-AeonikProMedium text-[14px] leading-4 text-right text-black">
                    {" "}
                    Выбрать все
                  </span>
                </p>
                <button
                  onClick={() => CheckAllHandle()}
                  className={`w-6 h-6 md:w-[32px] md:h-[32px] p-1 flex items-center ${
                    state?.checkAll
                      ? "bg-fullBlue border-fullBlue"
                      : "bg-white border-borderColorCard"
                  }  rounded-lg ml-3 border `}
                >
                  {state?.checkAll ? (
                    <CheckedStatusIcons colors={"#fff"} />
                  ) : null}
                </button>
              </div>
              <div className="block md:hidden">
                <p className="flex">
                  <span>
                    <DeleteIcons colors={"#A1A1A1"} />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-[32%] h-full px-8 hidden md:block md:flex  items-center justify-between">
            <p className="not-italic mt-1 font-AeonikProMedium text-[20px] leading-7 text-black tracking-[1%]">
              Итого
            </p>
            <p className="not-italic mt-1 font-AeonikProMedium text-[20px] leading-7 text-black tracking-[1%]">
              527 000 сум
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] w-[100%] h-fit block md:flex justify-between m-auto mb-[80px] md:mb-[120px] px-4 md:px-0 overflow-hidden">
        <div className="w-full md:w-[68%] md:pl-5 md:py-5 p-[18px] h-full md:border-t-0 border border-searchBgColor rounded-lg md:rounded-b-lg  flex flex-col  border border-red-500">
          {bucket_products.map((data) => {
            return (
              <div
                key={data.id}
                className="w-full  md:pr-8 flex flex-col justify-center "
              >
                <div className="w-full h-[92px] md:h-[180px] flex items-center gap-x-3 md:gap-x-5  ">
                  <div className=" flex items-center h-full ">
                    <div className="w-[68px] md:w-[132px] h-full rounded-lg bg-btnBgColor border border-searchBgColor">
                      <img src="#" alt="" />
                    </div>
                  </div>
                  {/*  */}
                  <div className="block flex items-center md:flex-nowrap	 flex-wrap content-between h-full  ">
                    <div className="w-full md:py-2 md:h-full flex justify-between md:justify-normal	 md:flex-wrap content-between ">
                      <div className=" md:w-full ">
                        <p className="not-italic  md:whitespace-nowrap font-AeonikProMedium text-[12px] ll:text-base  ll:leading-4 text-black tracking-[1%]">
                          {data.title}
                        </p>
                      </div>
                      <div className="w-fit ml-5 md:hidden block">
                        <button
                          onClick={() => CheckStatus(data?.id)}
                          className={`w-6 h-6 md:w-[32px] md:h-[32px] p-1 flex items-center ${
                            data?.status
                              ? "bg-fullBlue border-fullBlue"
                              : "bg-white border-borderColorCard"
                          }  rounded-lg ml-3 border `}
                        >
                          {data?.status ? (
                            <CheckedStatusIcons colors={"#fff"} />
                          ) : null}
                        </button>
                      </div>{" "}
                      <div className="w-full hidden md:block">
                        <div className="flex items-center">
                          <span>
                            <MarketIcons colors={"#000"} />
                          </span>{" "}
                          <span className="not-italic mt-1 ml-1 font-AeonikProRegular text-base leading-4 text-black  tracking-[1%]">
                            <span className="not-italic ml-1 font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                              Магазин:
                            </span>{" "}
                            {data.store_dealer}
                          </span>
                        </div>
                        <div className="flex items-center mt-4">
                          <div className="cursor-pointer h-fit p-[2px] flex items-center rounded-lg border border-searchBgColor">
                            <p
                              className={`w-8 h-8 border border-searchBgColor rounded-lg bg-setTexOpacity ${data.color}`}
                            ></p>
                            <p className="not-italic pl-[10px] pr-[15px] mt-1 font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                              {data.color_text}
                            </p>
                          </div>
                          <div className=" h-[36px]  cursor-pointer ml-3 px-4 flex items-center rounded-lg border border-searchBgColor">
                            <p className="not-italic  mt-1 font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                              {data.size}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-[170px]  md:py-2  flex flex-wrap md:content-between justify-between md:justify-start    md:h-full">
                      <div className="h-10 md:h-12 w-fit p-[10px] ll:px-0 gap-x-[18px] ll:w-[120px] flex items-center justify-around rounded-lg border border-searchBgColor">
                        <button
                          onClick={handleDecrement}
                          className="w-1/3 not-italic font-AeonikProMedium mt-1 text-lg cursor-pointer leading-4 text-center text-black"
                        >
                          -
                        </button>
                        <button className="w-1/3 not-italic font-AeonikProMedium mt-1 text-lg  leading-4 text-center text-black">
                          {state?.clothesCount}
                        </button>
                        <button
                          onClick={() =>
                            setState({
                              ...state,
                              clothesCount: state.clothesCount + 1,
                            })
                          }
                          className="w-1/3 not-italic font-AeonikProMedium mt-1 text-lg cursor-pointer leading-4 text-center text-black"
                        >
                          +
                        </button>
                      </div>
                      <div className="md:w-full">
                        <p className="w-full md:w-fit not-italic mt-2 md:mt-0 text-start font-AeonikProRegular text-[12px] ll:text-[14px] md:text-[16px] leading-3 text-setTexOpacity line-through	 tracking-[1%]">
                          {data.old_prize}
                        </p>
                        <p className="w-full md:w-fit not-italic font-AeonikProMedium text-[14px] ll:text-[16px] md:text-[20px] leading-4 text-black tracking-[1%]">
                          {data.new_prize} сум
                        </p>
                      </div>
                    </div>
                    <div className=" h-full py-2 hidden md:block">
                      <div>
                        <p
                          className={`w-[32px] h-[32px] p-1 flex items-center   rounded-lg ml-3 border border-borderColorCard`}
                        ></p>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                {data?.underline && (
                  <div className="w-[98%] h-[1px] my-6 mx-auto border-b border-searchBgColor"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="w-full md:w-[32%] h-full md:border-t-0 md:border-l-0 mt-4 md:mt-0  border border-searchBgColor rounded-lg md:rounded-br-lg	 flex flex-wrap content-between">
          <div className="w-full px-5 md:px-8 md:hidden py-4 border-b border-searchBgColor flex  items-center justify-between">
            <p className="not-italic mt-1 font-AeonikProMedium text-[18px] md:text-[20px] leading-7 text-black tracking-[1%]">
              Итого
            </p>
            <p className="not-italic mt-1 font-AeonikProMedium text-[18px] md:text-[20px] leading-7 text-black tracking-[1%]">
              527 000 сум
            </p>
          </div>
          <div className="w-full border-b border-searchBgColor py-5 px-5 md:px-8 ">
            <div className="w-full flex justify-between items-center gap-y-2 md:gap-y-[22px] ">
              <span className="not-italic font-AeonikProMedium text-[14] md:text-base leading-4 text-black tracking-[1%]">
                Товары ({bucket_products.length})
              </span>
              <span className="not-italic font-AeonikProMedium text-[16] md:text-[18px] leading-6 text-right text-setTexOpacity">
                516 000 сум
              </span>
            </div>
            <div className="w-full flex justify-between items-center  ">
              <span className="not-italic font-AeonikProMedium text-[14] md:text-base leading-4 text-black tracking-[1%]">
                Доставка
              </span>
              <span className="not-italic font-AeonikProMedium text-[16] md:text-[18px] leading-6 text-right text-setTexOpacity">
                9 000 сум
              </span>
            </div>
            <div className="w-full flex justify-between items-center mt-1">
              <span className="not-italic font-medium text-[14] md:text-base leading-4 text-AeonikProMedium text-BasketMoneyColor tracking-[1%]">
                Вы экономите:{" "}
              </span>
              <span className="not-italic font-medium text-[16] md:text-[18px] leading-4 text-AeonikProMedium text-BasketMoneyColor tracking-[1%]">
                228 000 сум{" "}
              </span>
            </div>
          </div>
          <div className="w-full px-[9px] md:px-8 py-4 md:py-6 flex flex-col items-center">
            <NavLink
              to="/payment"
              className="h-12 md:h-[56px] w-full flex items-center justify-center rounded-lg bg-fullBlue text-white flex items-center active:scale-95	active:opacity-70"
            >
              <span className="not-italic font-AeonikProMedium text-base leading-4 text-white">
                Перейти к оформлению
              </span>
              <span className="ml-3">
                <SircleNext colors={"#fff"} />
              </span>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] w-[100%] flex justify-start items-center m-auto px-4 md:px-0">
        <div className="w-[100%] h-fit">
          <div className="w-full md:flex items-center mb-10 hidden md:block">
            <div className="font-AeonikProMedium text-2xl">
              Подобрали для вас
            </div>
          </div>
          <div className="flex flex-wrap justify-between md:justify-start md:mx-0 md:mt-[35px] gap-y-2 lg:gap-x-5 lg:gap-y-5 ">
            {dressInfo.ProductList.map((data) => {
              return (
                <div
                  key={data.id}
                  onClick={() => goDetail(data?.title)}
                  className={`ss:w-[49%] md:w-[24%] lg:w-[240px]  xs:h-[456px] lg:h-[428px] border border-solid borderColorCard overflow-hidden rounded-lg`}
                >
                  <div className="relative w-full cursor-pointer ss:h-[200px] ls:h-[220px] ll:h-[238px] xs:h-[309px] bg-btnBgColor lg:h-[320px] flex content-between items-center overflow-hidden border-b border-solid flex-nowrap">
                    {data.ProducImg ? (
                      <img
                        className="w-full h-full m-auto hover:scale-105 transition duration-700 ease-in-out"
                        src={data.ProducImg}
                        alt="ProducImg"
                      />
                    ) : (
                      <NoImg />
                    )}
                    <div className="w-full flex absolute top-px p-[5px]  ss:justify-end xs:justify-between">
                      <ul className="nav-lists flex-col gap-y-1 justify-center h-full ss:hidden xs:flex">
                        {/* <p className="group w-8 hover:w-[70px] bg-bgCard hover:bg-white  duration-300 rounded-lg overflow-hidden border border-borderColorCard flex items-center">
                          <span className="w-8 h-8 flex items-center justify-center  ">
                            <img src={ticketDiscount} alt="" />
                          </span>
                          <span className=" w-0 flex items-center group-hover:w-10 duration-300  text-red-700 not-italic  font-AeonikProRegular text-[11px]">
                            -30%
                          </span>
                        </p>
                        <p className="group w-8 hover:w-[70px] bg-bgCard hover:bg-white  duration-300 rounded-lg overflow-hidden border border-borderColorCard flex items-center">
                          <span className="w-8 h-8 flex items-center justify-center">
                            <img src={video} alt="" />
                          </span>
                          <span className=" w-0 flex items-center group-hover:w-10 duration-300 not-italic  font-AeonikProRegular text-[11px]">
                            {" "}Video
                          </span>
                        </p>
                        <p className="group w-8 hover:w-[85px] bg-bgCard hover:bg-white  duration-300 rounded-lg overflow-hidden border border-borderColorCard flex items-center">
                          <span className="w-8 h-8 flex items-center justify-center  ">
                            <img src={delivery} alt="" />
                          </span>
                          <span className=" w-0 flex items-center group-hover:w-[40px] duration-300 not-italic  font-AeonikProRegular text-[11px]">
                            Delivery
                          </span>
                        </p> */}
                      </ul>

                      <div className="flex flex-col gap-y-1">
                        <p className="w-8 h-8  rounded-lg flex items-center bg-bgCard justify-center border border-solid border-borderColorCard hover:bg-white transition ease-out duration-500">
                          <img src={HeartImg} alt="" />
                        </p>
                        {/* <p className="w-8 h-8 ss:hidden rounded-lg bg-bgCard xs:flex items-center justify-center border border-solid border-borderColorCard hover:bg-white transition ease-out duration-500">
                          <img src={bucket} alt="" />
                        </p> */}
                      </div>
                    </div>

                    <div className="absolute w-full flex justify-between items-center px-1 bottom-0 border-solid xs:h-[38px] lg:h-8 ss:h-[30px] xs:px-2 md:px-4 bg-white hover:backdrop-brightness-125 hover:bg-white/60 transition ease-out duration-500">
                      {data?.changeColor.map((itemValue) => {
                        return (
                          <div
                            key={itemValue?.id}
                            className={`rounded-full flex items-center justify-center hover:scale-110 duration-300 ls:w-[22px] ls:h-[22px] w-5 h-5 lg:w-6 lg:h-6 ${itemValue?.colors} cursor-pointer  border border-solid border-borderColorCard mr-[3px]`}
                            htmlFor="Color1"
                          >
                            {itemValue?.action ? (
                              <InputCheckedTrueIcons colors={"#fff"} />
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-full rounded-b-xl bg-white  flex flex-wrap h-[100px] md:h-[106px]">
                    <div className="w-full  xs:px-3 ss:px-3 xs:mt-3 ss:mt-2">
                      <div className="relative w-full whitespace-nowrap overflow-hidden not-italic font-AeonikProRegular text-[12px] ls:text-sm lg:text-[15px] leading-4 text-black mb-2 md:mb-0  cursor-pointer">
                        <div className="absolute categoryLinearText left-0 w-full h-full z-[10] top-0"></div>
                        {data?.title || "NoData"}
                      </div>
                      <div className="w-full flex justify-between items-center xs:mt-3">
                        <div className="flex items-center justify-between">
                          <span>
                            {" "}
                            <StarIcons />
                          </span>
                          <span className="not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 ml-[2px] md:ml-1 flex items-center">
                            <span className="font-AeonikProMedium text-[10px] ls:text-xs not-italic mx-1 text-black md:mr-[6px] md:text-[13px]">
                              5.0{" "}
                            </span>
                            ({data?.starCount || 0}{" "}
                            <span className="ss:hidden lg:block md:ml-1 md:text-[11px]">
                              голосов
                            </span>
                            )
                          </span>
                        </div>
                        <div className="not-italic xs:font-AeonikProMedium ss:font-AeonikProRegular leading-4 text-black  ss:text-[11px] sm:text-xs  md:text-[13px] ">
                          <b>
                            <span>{data?.shirtSize || 0}</span>
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-between  pl-3 pr-[5px]">
                      <div className="flex items-center ">
                        {data.sale ? (
                          <div className="flex flex-col-reverse ll:flex-row	text-start items-start ">
                            <div className="text-start m-0 p-0  not-italic font-AeonikProMedium text-[16px]  md:text-base leading-1 text-red-700 xs:text-base xs:leading-4 mr-1">
                              {data?.sale}
                            </div>
                            <div className="text-start m-0 p-0 text-[11px] mt-[8px]  line-through not-italic font-AeonikProRegular leading-3  text-borderColorCard ss:leading-1 md:text-[11px]">
                              {data?.price}
                            </div>
                          </div>
                        ) : (
                          <p
                            className="not-italic font-AeonikProMedium text-base leading-4"
                            style={{ color: "black" }}
                          >
                            {data?.price}{" "}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center">
                        <button className="w-[32px] h-[32px] md:w-[36px] md:h-[36px] ll:mb-1 rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                          <img src={AddBasket} alt="addbag" className="w-8" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
