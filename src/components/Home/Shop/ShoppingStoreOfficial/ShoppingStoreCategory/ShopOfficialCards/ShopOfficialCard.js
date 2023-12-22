import React, { useContext, useState } from "react";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";
import {
  ArrowTopIcons,
  InputCheckedTrueIcons,
  NoImg,
  StarIcons,
} from "../../../../../../assets/icons";
import { CalourCard, HeartImg } from "../../../../../../assets";
import { useNavigate } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Cookies from "js-cookie";
import { HomeMainDataContext } from "../../../../../../ContextHook/HomeMainData";

export default function ShopOfficialCard({ storeData }) {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [openWearType, setOpenWearType] = useState(false);

  // Main data context -----------------
  const [mainData, , wishList, setWishlist] = useContext(HomeMainDataContext);

  const onColorChecked = () => {};
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/product/:${id}`);
  };

  const handleLeaveMouse = (eId) => {
    const elementsIndex = dressInfo.ProductList.findIndex(
      (element) => element.id == eId
    );
    let newArray = [...dressInfo.ProductList];
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      colourCard: false,
    };
    setDressInfo((current) => {
      return { ...current, ProductList: newArray };
    });
  };

  return (
    <div className="flex flex-col box-border">
      <div className="flex justify-start flex-wrap gap-x-2 gap-y-2">
        {storeData?.products?.data.map((data) => {
          return (
            <div
              key={data.id}
              className={`ss:w-[49%] md:w-[24%] lg:w-[240px]  xs:h-[456px] lg:h-fit border border-solid borderColorCard overflow-hidden rounded-xl`}
            >
              <figure
                onClick={() => {
                  goDetail(data?.id);
                }}
                style={{
                  backgroundImage: `url("${data?.photos[0]?.url_photo}")`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="relative w-full hover:scale-105 duration-300 ease-linear cursor-pointer h-[310px] bg-btnBgColor flex justify-center content-between items-center overflow-hidden border-b border-solid flex-nowrap"
              >
                {/* <div><NoImg /></div> */}
              </figure>
              <section className="relative w-full rounded-b-xl bg-white flex flex-wrap h-[125px] ls:h-[130px] md:h-[136px] ">
                {/* 1 */}
                <div className="group hover:w-full hover:h-[36px] cursor-pointer">
                  <button className="group-hover:hidden w-12 h-7 border border-searchBgColor rounded-lg hidden md:flex items-center cursor-pointer select-none mt-2 mx-2 justify-center gap-x-1 ">
                    <figure className="w-6 h-6 flex items-center justify-center">
                      <img src={CalourCard} alt="" className="h-full" />
                    </figure>
                    <span className="text-catalogText text-sm not-italic font-AeonikProMedium">
                      {data?.colors?.length}
                    </span>
                  </button>
                  <button
                    onClick={() => setOpenWearType(true)}
                    className="w-12 h-7 md:hidden border border-searchBgColor rounded-lg flex items-center cursor-pointer select-none my-[6px] mx-2 justify-center gap-x-1 "
                  >
                    <figure className="w-6 h-6 flex items-center justify-center">
                      <img src={CalourCard} alt="" className="h-full" />
                    </figure>
                    <span className="text-catalogText text-sm not-italic font-AeonikProMedium">
                      {data?.colors?.length}
                    </span>
                  </button>
                  <article
                    className={` ${
                      data?.l ? "w-full px-1 xs:px-2 md:px-4 my-2" : "w-0 my-2"
                    } group-hover:w-full group-hover:px-1 group-hover:xs:px-2 group-hover:md:px-4 group-hover:my-2 duration-300 w-0 my-2 absolute overflow-hidden hidden top-0 z-[1] md:flex items-center xs:h-[38px] lg:h-8 ss:h-[30px]  bg-white`}
                  >
                    {data?.colors?.map((itemValue) => {
                      return (
                        <article
                          key={itemValue?.id}
                          style={{
                            backgroundColor: itemValue?.hex,
                          }}
                          onClick={() =>
                            onColorChecked(data?.id, itemValue?.id)
                          }
                          className={`rounded-full flex items-center justify-center hover:scale-110 duration-300 ls:w-[22px] ls:h-[22px] w-5 h-5 lg:w-6 lg:h-6 cursor-pointer  border border-solid border-borderColorCard mr-[5px]`}
                          htmlFor="Color1"
                        >
                          {itemValue?.action ? (
                            <InputCheckedTrueIcons colors={"#fff"} />
                          ) : null}
                        </article>
                      );
                    })}
                  </article>
                </div>
                {/* 2 */}
                <article
                  onMouseEnter={() => handleLeaveMouse(data?.id)}
                  onClick={() => goDetail(data?.id)}
                  className="w-full px-2 xs:px-3 xs:mt-1"
                >
                  <figure className="relative w-full whitespace-nowrap overflow-hidden not-italic font-AeonikProRegular text-[12px] ls:text-sm lg:text-[14px] leading-0 text-black mb-1 md:mb-0  cursor-pointer">
                    <div className="absolute font-AeonikProRegular categoryLinearText left-0 w-full h-full z-[10] top-0"></div>
                    {data?.name_ru || "NoData"}
                  </figure>
                  <figure className="w-full h-[16px] flex justify-between items-center xs:mt-1">
                    {data?.overall_rating ? (
                      <section className="flex items-center justify-between">
                        <article>
                          <StarIcons width={14} />
                        </article>
                        <article className="not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-0 text-right text-gray-500 ml-[2px] md:ml-1 flex items-center">
                          <p className="font-AeonikProMedium text-[10px] ls:text-xs not-italic mx-1 text-black md:mr-[6px] md:text-[13px]">
                            {data?.overall_rating || 0}
                          </p>
                          (
                          <p className="ss:hidden lg:block md:mr-1 md:text-[11px]">
                            голосов:
                          </p>
                          {data?.rated_users_count || 0})
                        </article>
                      </section>
                    ) : null}
                  </figure>
                </article>
                {/* 3 */}
                <article
                  onMouseEnter={() => handleLeaveMouse(data?.id)}
                  className="w-full flex items-end mb-2 justify-between  pl-3 pr-[5px]"
                >
                  <article className="flex items-center">
                    {data?.cost?.discount_price ? (
                      <figure className="flex flex-wrap flex-col-reverse	text-start items-start ">
                        <p className="w-full text-start m-0 p-0  not-italic font-AeonikProMedium text-[15px] md:text-[15px] leading-1 text-red-700 xs:text-[15px] xs:leading-0 mr-2">
                          {parseInt(data?.cost?.discount_price)
                            ?.toLocaleString()
                            ?.split(",")
                            .join(" ")}
                          {"  "}
                          сум
                        </p>
                        <p className="w-full text-start m-0 p-0 text-[10px] mb-[4px] mt-[2px] line-through not-italic font-AeonikProRegular leading-3 text-[#8b8e99] ss:leading-1 md:text-[12px]">
                          {parseInt(data?.cost?.price)
                            ?.toLocaleString()
                            ?.split(",")
                            .join(" ")}
                          {"  "}
                          сум
                        </p>
                      </figure>
                    ) : (
                      <p
                        className="not-italic font-AeonikProMedium text-[15px] leading-4"
                        style={{ color: "black" }}
                      >
                        {parseInt(data?.cost?.price)
                          ?.toLocaleString()
                          ?.split(",")
                          .join(" ")}
                        {"  "}
                        сум
                      </p>
                    )}
                  </article>
                  <figure className="flex items-center select-none	absolute right-2 bottom-2">
                    {Cookies.get("DressmeUserToken") && (
                      <button
                        onClick={() => {
                          if (wishList?.includes(data?.id)) {
                            setWishlist(
                              wishList?.filter((item) => item !== data?.id)
                            );
                          } else {
                            setWishlist([...wishList, data?.id]);
                          }
                        }}
                        className="w-[32px] h-[32px] active:scale-95  active:opacity-70 rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor flex items-center justify-center"
                      >
                        {wishList.includes(data?.id) ? (
                          <BsHeartFill color="#d50000" />
                        ) : (
                          <BsHeart />
                        )}
                      </button>
                    )}
                  </figure>
                </article>
              </section>
            </div>
          );
        })}
      </div>
      <div className="w-full h-fit md:hidden flex items-center justify-center mt-14">
        <div className="w-[760px] h-[60px] cursor-pointer not-italic font-AeonikProMedium text-base leading-4 text-center text-black flex items-center justify-center rounded-lg border border-searchBgColor bg-btnBgColor">
          Показать ещё 30 наборов
        </div>
      </div>{" "}
      <div className="w-full h-fit hidden md:flex items-center justify-center mt-10 md:mt-[75px] gap-x-3 ll:gap-x-6">
        <div className="flex items-center justify-center cursor-pointer bg-searchBgColor w-10 ll:w-[44px] md:w-fit  md:px-4 h-10 ll:h-[44px] rounded-lg">
          <span className="rotate-[-90deg]">
            <ArrowTopIcons colors={"#007DCA"} />
          </span>{" "}
          <span className="hidden md:block not-italic ml-1   font-AeonikProRegular text-lg leading-4 text-fullBlue">
            Previous
          </span>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center gap-x-2 ll:gap-x-3">
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-10 ll:w-[44px] h-10 ll:h-[44px] rounded-lg bg-fullBlue text-white flex items-center justify-center cursor-pointer ">
              1
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-10 ll:w-[44px] h-10 ll:h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              2
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-10 ll:w-[44px] h-10 ll:h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              3
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-10 ll:w-[44px] h-10 ll:h-[44px] rounded-lg hover:bg-searchBgColor flex md:flex items-center justify-center cursor-pointer ">
              4
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-10 ll:w-[44px] h-10 ll:h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              ...
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center cursor-pointer bg-searchBgColor w-10 ll:w-[44px]  md:w-fit md:px-4 h-10 ll:h-[44px] rounded-lg">
          <span className="hidden md:block not-italic  font-AeonikProRegular mr-1 text-lg leading-4 text-fullBlue">
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
