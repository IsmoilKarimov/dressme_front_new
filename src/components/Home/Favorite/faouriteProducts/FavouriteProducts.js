import React, { useContext, useState } from "react";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { useNavigate } from "react-router-dom";
import { InputCheckedTrueIcons, StarIcons } from "../../../../assets/icons";
import { CalourCard, HeartImg } from "../../../../assets";
import WearType from "../../Main/WearCollectionCard/WearType";
import Cookies from "js-cookie";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";
import { useTranslation } from "react-i18next";
import { LanguageDetectorDress } from "../../../../language/LanguageItems";
import { MobileSelectedDataContext } from "../../../../ContextHook/mobileSelectedData";

export default function FavouriteProducts() {
  const { t } = useTranslation("favourite");
  const [selectedData, setSelectedData] = useContext(MobileSelectedDataContext);

  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [openWearType, setOpenWearType] = useState(false);
  // -------------------------------------
  const toggle = React.useCallback(() => setOpenWearType(false), []);
  // -------------------------------------

  // Main data context -----------------
  const [mainData, , wishList, setWishlist] = useContext(HomeMainDataContext);

  const onColorChecked = () => {};
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/favourites/${id}`);
  };

  const [languageDetector, setLanguageDetector] = useContext(
    LanguageDetectorDress
  );

  return (
    <main className="md:w-full flex flex-col min-h-[44px] justify-center items-center mt-4 md:mt-8">
      <div
        onClick={() => setOpenWearType(false)}
        className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${
          openWearType ? "" : "hidden"
        }`}
      ></div>
      <section
        className={`fixed z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${
          openWearType ? "bottom-0" : "bottom-[-800px] z-0"
        }`}
      >
        <WearType onClick={toggle} />
      </section>
      <div
        className={`max-w-[1280px] w-[100%] flex flex-col items-center justify-between ${
          wishList?.length > 6 ? "mb-10" : "mb-[80px]"
        } m-auto px-[10px] md:px-0`}
      >
        <section className="w-full flex items-center justify-center flex-col">
          {wishList?.length ? (
            localStorage?.getItem("userAccess") ? (
              <article className="w-full flex flex-wrap justify-between md:justify-start md:mx-0 md:mt-[50px] gap-y-[6px] gap-x-[6px] lg:gap-x-5 lg:gap-y-5 ">
                {mainData?.products?.map((data) => {
                  if (wishList?.includes(data?.id)) {
                    return (
                      <article
                        key={data?.id}
                        className={`w-[49%] md:w-[24%] lg:w-[240px] h-[325px] ls:h-[350px] ll:h-[365px] xs:h-[456px] lg:h-fit border border-solid borderColorCard overflow-hidden rounded-lg md:rounded-xl`}
                      >
                        <figure
                          onClick={() => {
                            // setcolorId(null);
                            goDetail(data?.id);
                          }}
                          style={{
                            backgroundImage: `url("${data?.photos[0]?.url_photo}")`,
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                          className="relative w-full cursor-pointer h-[200px] ls:h-[225px] ll:h-[240px] md:h-[310px] bg-btnBgColor flex justify-center content-between items-center overflow-hidden border-b border-solid flex-nowrap"
                        ></figure>
                        <section className="relative w-full rounded-b-xl bg-white flex flex-wrap h-[125px] ls:h-[100px] md:h-[136px]">
                          {/* 1 */}
                          <div className="group hover:w-full h-[36px] cursor-pointer mb-2 md:mb-0">
                            <button className="group-hover:hidden w-12 h-7 border border-searchBgColor rounded-lg hidden md:flex items-center cursor-pointer select-none mt-2 mx-2 justify-center gap-x-1 ">
                              <figure className="w-6 h-6 flex items-center justify-center">
                                <img
                                  src={CalourCard}
                                  alt=""
                                  className="h-full"
                                />
                              </figure>
                              <span className="text-catalogText text-sm not-italic font-AeonikProMedium">
                                {data?.colors?.length}
                              </span>
                            </button>
                            <button
                              onClick={() => {
                                setSelectedData(data);
                                setOpenWearType(true);
                              }}
                              className="w-12 h-7 md:hidden border border-searchBgColor rounded-lg flex items-center cursor-pointer select-none my-[6px] mx-2 justify-center gap-x-1 "
                            >
                              <figure className="w-6 h-6 flex items-center justify-center">
                                <img
                                  src={CalourCard}
                                  alt=""
                                  className="h-full"
                                />
                              </figure>
                              <span className="text-catalogText text-sm not-italic font-AeonikProMedium">
                                {data?.colors?.length}
                              </span>
                            </button>
                            <article
                              className={` ${
                                data?.l
                                  ? "w-full px-1 xs:px-2 md:px-4 my-2"
                                  : "w-0 my-2"
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
                            onClick={() => goDetail(data?.id)}
                            className={`w-full px-2 xs:px-3 xs:mt-1 ${
                              data?.cost?.discount_price ? "mb-0" : "mb-3"
                            } md:mb-0`}
                          >
                            <figure className="relative w-full whitespace-nowrap overflow-hidden not-italic font-AeonikProRegular text-[12px] ls:text-sm lg:text-[14px] leading-0 text-black mb-1 md:mb-0  cursor-pointer">
                              <div className="absolute font-AeonikProRegular categoryLinearText left-0 w-full h-full z-[10] top-0"></div>
                              {languageDetector?.typeLang === "ru" &&
                                data?.name_ru}
                              {languageDetector?.typeLang === "uz" &&
                                data?.name_uz}
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
                                      {t("votes")}:
                                    </p>
                                    {data?.rated_users_count || 0})
                                  </article>
                                </section>
                              ) : null}
                            </figure>
                          </article>
                          {/* 3 */}
                          <article className="w-full h-fit md:h-[31px] flex items-end justify-between pl-3 pr-[5px]">
                            <article className="flex items-center">
                              {data?.cost?.discount_price ? (
                                <figure className="flex flex-wrap flex-col-reverse	text-start items-start ">
                                  <p className="w-full text-start m-0 p-0 font-AeonikProMedium text-[15px] md:text-[15px] leading-1 text-red-700 xs:text-[15px] xs:leading-0 mr-2">
                                    {parseInt(data?.cost?.discount_price)
                                      ?.toLocaleString()
                                      ?.split(",")
                                      .join(" ")}
                                    {"  "}
                                    {t("currency")}
                                  </p>
                                  <p className="w-full text-start m-0 p-0 text-[12px] mb-[4px] mt-[2px] line-through font-AeonikProRegular leading-3 text-[#8b8e99] ss:leading-1 md:text-[12px]">
                                    {parseInt(data?.cost?.price)
                                      ?.toLocaleString()
                                      ?.split(",")
                                      .join(" ")}
                                    {"  "}
                                    {t("currency")}
                                  </p>
                                </figure>
                              ) : (
                                <p
                                  className=" font-AeonikProMedium text-[15px] md:mb-[6px] leading-4"
                                  style={{ color: "black" }}
                                >
                                  {parseInt(data?.cost?.price)
                                    ?.toLocaleString()
                                    ?.split(",")
                                    .join(" ")}
                                  {"  "}
                                  {t("currency")}
                                </p>
                              )}
                            </article>
                            <figure
                              className={`flex items-center select-none absolute right-2 ${
                                data?.cost?.discount_price
                                  ? "bottom-[7px] ls:bottom-[-17px]"
                                  : " bottom-[8px] ls:bottom-[-17px]"
                              } md:bottom-2`}
                            >
                              {localStorage?.getItem("userAccess") && (
                                <button
                                  onClick={() => {
                                    if (wishList?.includes(data?.id)) {
                                      setWishlist(
                                        wishList?.filter(
                                          (item) => item !== data?.id
                                        )
                                      );
                                    } else {
                                      setWishlist([...wishList, data?.id]);
                                    }
                                  }}
                                  className="w-[32px] h-[32px] active:scale-95 active:opacity-70 rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor flex items-center justify-center"
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
                      </article>
                    );
                  }
                })}
              </article>
            ) : (
              <article className="w-full flex flex-wrap justify-between md:justify-start md:mx-0  md:mt-0  gap-y-2 lg:gap-x-3 lg:gap-y-3">
                {mainData?.products?.map((data) => {
                  if (wishList?.includes(data?.id)) {
                    return (
                      <article
                        key={data?.id}
                        className={`w-[49%] md:w-[24%] lg:w-[240px] h-[325px] ls:h-[350px] ll:h-[365px] xs:h-[456px] lg:h-fit border border-solid borderColorCard overflow-hidden rounded-lg md:rounded-xl`}
                      >
                        <figure
                          onClick={() => {
                            // setcolorId(null);
                            goDetail(data?.id);
                          }}
                          style={{
                            backgroundImage: `url("${data?.photos[0]?.url_photo}")`,
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                          className="relative w-full cursor-pointer h-[200px] ls:h-[225px] ll:h-[240px] md:h-[310px] bg-btnBgColor flex justify-center content-between items-center overflow-hidden border-b border-solid flex-nowrap"
                        ></figure>
                        <section className="relative w-full rounded-b-xl bg-white flex flex-wrap h-[125px] ls:h-[100px] md:h-[136px]">
                          {/* 1 */}
                          <div className="group hover:w-full h-[36px] cursor-pointer mb-1 md:mb-0">
                            <button className="group-hover:hidden w-12 h-7 border border-searchBgColor rounded-lg hidden md:flex items-center cursor-pointer select-none mt-2 mx-2 justify-center gap-x-1 ">
                              <figure className="w-6 h-6 flex items-center justify-center">
                                <img
                                  src={CalourCard}
                                  alt=""
                                  className="h-full"
                                />
                              </figure>
                              <span className="text-catalogText text-sm not-italic font-AeonikProMedium">
                                {data?.colors?.length}
                              </span>
                            </button>
                            <button
                              onClick={() => {
                                setSelectedData(data);
                                setOpenWearType(true);
                              }}
                              className="w-12 h-7 md:hidden border border-searchBgColor rounded-lg flex items-center cursor-pointer select-none my-[6px] mx-2 justify-center gap-x-1 "
                            >
                              <figure className="w-6 h-6 flex items-center justify-center">
                                <img
                                  src={CalourCard}
                                  alt=""
                                  className="h-full"
                                />
                              </figure>
                              <span className="text-catalogText text-sm not-italic font-AeonikProMedium">
                                {data?.colors?.length}
                              </span>
                            </button>
                            <article
                              className={` ${
                                data?.l
                                  ? "w-full px-1 xs:px-2 md:px-4 my-2"
                                  : "w-0 my-2"
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
                            onClick={() => goDetail(data?.id)}
                            className={`w-full px-2 xs:px-3 xs:mt-1 ${
                              data?.cost?.discount_price ? "mb-0" : "mb-3"
                            } md:mb-0`}
                          >
                            <figure className="relative w-full whitespace-nowrap overflow-hidden not-italic font-AeonikProRegular text-[12px] ls:text-sm lg:text-[14px] leading-0 text-black mb-[6px mb-1 md:mb-0] md:mb-0  cursor-pointer">
                              <div className="absolute font-AeonikProRegular categoryLinearText left-0 w-full h-full z-[10] top-0"></div>
                              {languageDetector?.typeLang === "ru" &&
                                data?.name_ru}
                              {languageDetector?.typeLang === "uz" &&
                                data?.name_uz}
                            </figure>
                            <figure className="w-full h-[16px] flex justify-between items-center my-1">
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
                                      {t("votes")}:
                                    </p>
                                    {data?.rated_users_count || 0})
                                  </article>
                                </section>
                              ) : null}
                            </figure>
                          </article>
                          {/* 3 */}
                          <article className="w-full h-fit md:h-[31px] flex items-end justify-between pl-3 pr-[5px]">
                            <article className="flex items-center">
                              {data?.cost?.discount_price ? (
                                <figure className="flex flex-wrap flex-col-reverse	text-start items-start ">
                                  <p className="w-full text-start m-0 p-0 not-italic font-AeonikProMedium text-[15px] md:text-[15px] leading-1 text-red-700 xs:text-[15px] xs:leading-0 mr-2">
                                    {parseInt(data?.cost?.discount_price)
                                      ?.toLocaleString()
                                      ?.split(",")
                                      .join(" ")}
                                    {"  "}
                                    {t("currency")}
                                  </p>
                                  <p className="w-full text-start m-0 p-0 text-[12px] mb-[4px] mt-[2px] line-through not-italic font-AeonikProRegular leading-3 text-[#8b8e99] ss:leading-1 md:text-[12px]">
                                    {parseInt(data?.cost?.price)
                                      ?.toLocaleString()
                                      ?.split(",")
                                      .join(" ")}
                                    {"  "}
                                    {t("currency")}
                                  </p>
                                </figure>
                              ) : (
                                <p
                                  className="not-italic font-AeonikProMedium text-[15px] leading-4 md:mb-[4px]"
                                  style={{ color: "black" }}
                                >
                                  {parseInt(data?.cost?.price)
                                    ?.toLocaleString()
                                    ?.split(",")
                                    .join(" ")}
                                  {"  "}
                                  {t("currency")}
                                </p>
                              )}
                            </article>
                            <figure
                              className={`flex items-center select-none absolute right-2 ${
                                data?.cost?.discount_price
                                  ? "bottom-[7px] ls:bottom-[-17px]"
                                  : " bottom-[8px] ls:bottom-[-17px]"
                              } md:bottom-2`}
                            >
                              <button
                                onClick={() => {
                                  if (wishList?.includes(data?.id)) {
                                    setWishlist(
                                      wishList?.filter(
                                        (item) => item !== data?.id
                                      )
                                    );
                                  } else {
                                    setWishlist([...wishList, data?.id]);
                                  }
                                }}
                                className="w-[32px] h-[32px] active:scale-95 active:opacity-70 rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor flex items-center justify-center"
                              >
                                {wishList.includes(data?.id) ? (
                                  <BsHeartFill color="#d50000" />
                                ) : (
                                  <BsHeart />
                                )}
                              </button>
                            </figure>
                          </article>
                        </section>
                      </article>
                    );
                  }
                })}
              </article>
            )
          ) : (
            <article className="mt-20 md:mt-0 md:my-[50px] mx-auto">
              <div className="w-full md:w-[800px] text-center p-8 flex flex-col items-center justify-center">
                <figure className="w-16 h-16 flex justify-center items-center mb-3">
                  <img src={HeartImg} alt="" className="w-8 md:w-[50px]" />
                </figure>
                <p className="text-xl md:text-3xl font-AeonikProMedium mb-3">
                  {t("text_no_product")}
                </p>
              </div>
            </article>
          )}
        </section>

        <section
          className={`${
            wishList?.length > 15 ? "flex" : "hidden"
          } w-full h-fit flex items-center justify-center mt-14 md:hidden`}
        >
          <p className="w-[760px] h-[60px] cursor-pointer not-italic font-AeonikProMedium text-base leading-4 text-center text-black flex items-center justify-center rounded-lg border border-searchBgColor bg-btnBgColor">
            {t("show_more")}
          </p>
        </section>
      </div>
    </main>
  );
}
