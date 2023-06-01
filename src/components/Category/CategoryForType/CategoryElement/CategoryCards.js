import React, { useContext, useState } from "react";

import { dressMainData } from "../../../../ContextHook/ContextMenu";
import {
  ArrowTopIcons,
  HeartIcons,
  InputCheckedTrueIcons,
  NoImg,
  SaveBasketIcons,
  StarIcons,
  TicketDiscountIcons,
} from "../../../../AssetsMain/icons";
import { AddBasket, HeartImg } from "../../../../AssetsMain";

export default function CategoryCards() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const onColorChecked = (itemId, colorId) => {
    // setProductList((current) => {
    //   return current?.map((data) => {
    //     if (data?.id == itemId) {
    //       let newDataColor = data.changeColor.map((e) => {
    //         if (e.id == colorId) {
    //           return { ...e, action: !e.action };
    //         } else return e;
    //       });
    //       return { ...data, changeColor: [...newDataColor] };
    //     } else return data;
    //   });
    // });
  };

  return (
    <div className="flex flex-col box-border ">
      <div className="flex justify-between flex-wrap gap-y-2 gap-x-2">
        {dressInfo?.ProductList.map((data) => {
          return (
            <div
              key={data.id}
              // onClick={() => handleGetCardId(data?.id)}
              className={` ss:w-[48%] md:w-[24%] lg:w-[240px]   xs:h-[456px] lg:h-[440px] border border-solid borderColorCard overflow-hidden rounded-lg`}
            >
              <div className="relative w-full cursor-pointer ss:h-[206px] ls:h-[238px] xs:h-[309px] bg-btnBgColor lg:h-[320px] flex  items-center justify-center overflow-hidden border-b border-solid flex-nowrap">
                {data?.ProducImg ? (
                  <img
                    className=" m-auto hover:scale-105 transition duration-700 ease-in-out "
                    src={data?.ProducImg}
                    alt="ProducImg"
                  />
                ) : (
                  <span>
                    <NoImg />
                  </span>
                )}

                <div className="w-full flex absolute top-px p-[5px]  ss:justify-end xs:justify-between">
                  <ul className="nav-lists flex-col gap-y-1 justify-center h-full ss:hidden xs:flex">
                    <p className="group w-8 hover:w-[70px] bg-bgCard hover:bg-white  duration-300 rounded-lg overflow-hidden border border-borderColorCard flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center  ">
                        <TicketDiscountIcons />
                      </span>
                      <span className=" w-0 flex items-center -mr-[1px] group-hover:w-10 duration-300  text-red-700 not-italic  font-AeonikProRegular text-[11px]">
                        -30%
                      </span>
                    </p>
                    {/* <p className="group w-8 hover:w-[70px] bg-bgCard hover:bg-white  duration-300 rounded-lg overflow-hidden border border-borderColorCard flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center">
                        <img src={video} alt="" />
                      </span>
                      <span className=" w-0 flex items-center -mr-[1px] group-hover:w-10 duration-300 not-italic  font-AeonikProRegular text-[11px]">
                        Video
                      </span>
                    </p>
                    <p className="group w-8 hover:w-[85px] bg-bgCard hover:bg-white  duration-300 rounded-lg overflow-hidden border border-borderColorCard flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center  ">
                        <img src={delivery} alt="" />
                      </span>
                      <span className=" w-0 flex items-center  group-hover:w-[40px] duration-300 not-italic  font-AeonikProRegular text-[11px]">
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
                        onClick={() => onColorChecked(data?.id, itemValue?.id)}
                        className={`rounded-full flex items-center justify-center hover:scale-110 duration-300 ls:w-[22px] ls:h-[22px] w-5 h-5 lg:w-6 lg:h-6 ${itemValue?.colors} cursor-pointer  border border-solid border-borderColorCard mr-[3px]`}
                        htmlFor="Color1"
                      >
                        {itemValue?.action ? (
                          <span className="w-[14px]">
                            <InputCheckedTrueIcons colors={"#fff"} />
                          </span>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full rounded-b-1xl bg-white  flex flex-wrap   ss:h-[124px] xs:h-[147px] lg:h-[120px] ">
                <div className="w-full  xs:px-3 ss:px-3 xs:mt-3 ss:mt-2">
                  <div className="relative w-full  whitespace-nowrap overflow-hidden py-1 not-italic font-AeonikProRegular text-[10px] ls:text-xs lg:text-[14px] leading-4 text-black mb-2 md:mb-0  cursor-pointer">
                    <div className="absolute categoryLinearText left-0 w-full h-full z-[51] top-0"></div>
                    <span>{data?.title || "NoData"}</span>
                  </div>
                  <div className="w-full flex justify-between items-center xs:mt-3">
                    <div className="flex items-center justify-between">
                      <span>
                        {" "}
                        <StarIcons />
                      </span>
                      {/* <span><img src={} alt=""/></span> */}
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
                      <div className="flex ss:flex-col-reverse md:flex-row	text-start items-start ">
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

      <div className="w-full h-fit flex items-center justify-center mt-[75px] gap-x-6">
        <div className="flex items-center cursor-pointer bg-searchBgColor px-5 py-3 rounded-lg">
          <span className="rotate-[-90deg]">
            <ArrowTopIcons colors={"#007DCA"} />
          </span>{" "}
          <span className="not-italic ml-1 mt-1  font-AeonikProRegular text-lg leading-4 text-fullBlue">
            Previous
          </span>
        </div>
        <div className="flex items-center">
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
        </div>
        <div className="flex items-center cursor-pointer bg-searchBgColor px-5 py-3 rounded-lg">
          <span className="not-italic mt-1 font-AeonikProRegular mr-1 text-lg leading-4 text-fullBlue">
            Next
          </span>
          <span className="rotate-[90deg]">
            <ArrowTopIcons colors={"#007DCA"} />
          </span>
        </div>
      </div>
    </div>
  );
}
