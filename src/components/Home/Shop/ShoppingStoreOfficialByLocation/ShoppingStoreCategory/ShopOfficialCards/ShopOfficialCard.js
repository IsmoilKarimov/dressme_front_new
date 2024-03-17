import React, { useContext, useState } from "react";
import {
  InputCheckedTrueIcons,
  StarIcons,
} from "../../../../../../assets/icons";
import { CalourCard } from "../../../../../../assets";
import { useNavigate } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { HomeMainDataContext } from "../../../../../../ContextHook/HomeMainData";
import { useTranslation } from "react-i18next";
import { LanguageDetectorDress } from "../../../../../../language/LanguageItems";
import { MobileSelectedDataContext } from "../../../../../../ContextHook/mobileSelectedData";
import WearType from "../../../../Main/WearCollectionCard/WearType";

export default function ShopOfficialCard({
  filteredData,
  setPageId,
  paramsId,
  filterToggle,
}) {
  const [openWearType, setOpenWearType] = useState(false);
  const [languageDetector] = useContext(LanguageDetectorDress);

  const [, setSelectedData] = useContext(MobileSelectedDataContext);
  const toggle = React.useCallback(() => setOpenWearType(false), []);

  const { t } = useTranslation("shops");

  // Main data context -----------------
  const [, , wishList, setWishlist] = useContext(HomeMainDataContext);

  const onColorChecked = () => {};
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/shops_location/${paramsId}/${id} `);
  };

  const setPaginationFunc = (id) => {
    setPageId(+id);
  };
  return (
    <div className="flex flex-col box-border">
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

      {filteredData?.products?.data?.length > 0 ? (
        <div
          className={`flex flex-wrap justify-between md:grid ${
            filterToggle
              ? "md:grid-cols-4 md:gap-x-2"
              : "md:grid-cols-5 md:gap-x-5"
          } ${
            filteredData?.products?.length > 2
              ? "mb-[20px] md:mb-[30px]"
              : "mb-[80px]"
          } gap-y-[9px] lg:gap-y-3 mt-1 md:mt-[40px]`}
        >
          {filteredData?.products?.data?.map((data) => {
            return (
              <div
                key={data.id}
                className={`w-[49%] md:w-[24%] lg:w-[240px] h-[325px] ls:h-[350px] ll:h-[365px] xs:h-[456px] lg:h-fit border border-solid borderColorCard overflow-hidden rounded-lg md:rounded-xl`}
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
                  className="relative w-full cursor-pointer h-[200px] ls:h-[225px] ll:h-[240px] md:h-[310px] bg-btnBgColor flex justify-center content-between items-center overflow-hidden border-b border-solid flex-nowrap"
                >
                  {/* <div><NoImg /></div> */}
                </figure>
                <section className="relative w-full rounded-b-xl bg-white flex flex-wrap h-[125px] ls:h-[100px] md:h-[136px]">
                  {/* 1 */}
                  <div className="group hover:w-full hover:h-[36px] cursor-pointer">
                    <button className="group-hover:hidden w-12 h-7 border border-searchBgColor rounded-lg hidden md:flex items-center cursor-pointer select-none mt-2 mx-2 justify-center gap-x-1">
                      <figure className="w-6 h-6 flex items-center justify-center">
                        <img src={CalourCard} alt="" className="h-full" />
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
                      className="w-12 h-7 md:hidden border border-searchBgColor rounded-lg flex items-center cursor-pointer select-none mt-[6px] mx-2 justify-center gap-x-1"
                    >
                      <figure className="w-6 h-6 flex items-center justify-center">
                        <img src={CalourCard} alt="" className="h-full" />
                      </figure>
                      <span className="text-catalogText text-sm not-italic font-AeonikProMedium">
                        {data?.colors?.length}
                      </span>
                    </button>
                    <article
                      className={`${
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
                    <figure className="relative w-full whitespace-nowrap overflow-hidden not-italic font-AeonikProRegular text-[12px] ls:text-sm lg:text-[14px] leading-0 text-black mb-[6px] md:mb-0  cursor-pointer">
                      <div className="absolute font-AeonikProRegular categoryLinearText left-0 w-full h-full z-[10] top-0"></div>
                      {languageDetector?.typeLang === "ru" && data?.name_ru}
                      {languageDetector?.typeLang === "uz" && data?.name_uz}
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
                            <p className="hidden lg:block md:mr-1 md:text-[11px]">
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
                        <figure className="flex flex-wrap flex-col-reverse	text-start items-start">
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
                          className="not-italic font-AeonikProMedium text-[15px]"
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
                    <div
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
                              wishList?.filter((item) => item !== data?.id)
                            );
                          } else {
                            setWishlist([...wishList, data?.id]);
                          }
                        }}
                        className="w-[32px] h-[32px] active:scale-95 active:opacity-70 rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor flex items-center justify-center"
                      >
                        {wishList?.includes(data?.id) ? (
                          <BsHeartFill width={18} height={18} color="#d50000" />
                        ) : (
                          <BsHeart />
                        )}
                      </button>
                    </div>
                  </article>
                </section>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-[25vh] flex items-center justify-center">
          <span className=" flex items-center justify-center font-AeonikProMedium text-2xl ">
            {t("nothing_found")}
          </span>
        </div>
      )}

      {filteredData?.products?.data?.length < 1 ? null : (
        <section className="w-full  h-fit flex items-center justify-center md:mt-[75px] gap-x-6 pb-[80px] md:pb-0">
          <article className="flex w-full mx-auto items-center md:justify-center overflow-x-auto">
            <ul className="flex mx-auto w-fit items-center md:justify-center  pb-[8px] md:pb-0">
              {filteredData?.products?.links?.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      if (item?.url) {
                        const newPageId = String(
                          item?.url?.substr(-3)?.split("")?.reverse()?.join("")
                        )
                          ?.split("")
                          ?.filter((item) => !isNaN(item))
                          ?.reverse()
                          ?.join("");
                        setPaginationFunc(newPageId);
                      }
                    }}
                    className={`not-italic font-AeonikProRegular text-sm leading-4 text-center px-4 w-fit md:min-w-[45px] border h-[35px] md:h-[45px] rounded-lg  ${
                      item?.active
                        ? "bg-fullBlue text-white"
                        : "hover:bg-searchBgColor"
                    } mx - [5px] flex items-center justify-center  ${
                      item?.url
                        ? "cursor-pointer"
                        : "opacity-70 cursor-not-allowed"
                    } `}
                  >
                    {item?.label}
                  </li>
                );
              })}
            </ul>
          </article>
        </section>
      )}
    </div>
  );
}
