import React, { useContext, useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { InputCheckedTrueIcons, StarIcons } from "../../../../assets/icons";
import { CalourCard } from "../../../../assets";
import { SliderPhotosColorContext } from "../../../../ContextHook/SliderPhotosColor";
import { MobileSelectedDataContext } from "../../../../ContextHook/mobileSelectedData";

export const CollectionCardItem = ({
  data,
  setOpenWearType,
  handleLeaveMouse,
  wishList,
  setWishlist,
  mainSelectedId,
  setDressInfo,
  dressInfo,
  onHandleCardId
}) => {
  const navigate = useNavigate();

  const goDetail = (id,name) => {
    // navigate(`/product/${id}`);
    onHandleCardId(id,name)
  };

  const [colorId, setcolorId] = useContext(SliderPhotosColorContext);

  const [selectedData, setSelectedData] = useContext(MobileSelectedDataContext);
  // Selected color ------------------
  const [selectedPhoto, setSelectedPhoto] = useState(data?.photos[0]);

  let mainSelectedColor = null;

  if (mainSelectedId) {
    data?.colors?.forEach((item) => {
      if (item?.id === mainSelectedId) {
        mainSelectedColor = item;
      }
    });
  }

  useEffect(() => {
    if (mainSelectedId) {
      data?.photos?.forEach((item) => {
        if (item?.product_color_id === mainSelectedColor?.pivot?.id) {
          setSelectedPhoto(item);
        }
      });
    } else {
      setSelectedPhoto(data?.photos[0]);
    }
  }, [mainSelectedColor]);

  // useEffect(() => {
  //   if (mainSelectedId) {
  //     console.log(mainSelectedId);
  //   } else {
  //     setSelectedPhoto(data?.photos[0]);
  //   }
  // }, [data]);

  // Remove duplicates and select only first -----

  let idMap = new Map();
  let uniqueArray = [];

  data?.photos?.forEach((obj) => {
    if (!idMap.has(obj.product_color_id)) {
      idMap.set(obj.product_color_id, obj);
      uniqueArray.push(obj);
    }
  });

  const onColorChecked = (id) => {
    setSelectedPhoto(
      uniqueArray?.find((item) => item?.product_color_id === id)
    );
  };
  // console.log(data,'data');
  return (
    <article
      key={data?.id}
      className={`w-[49%] md:w-[24%] lg:w-[240px] h-[325px] ls:h-[350px] ll:h-[365px] xs:h-[456px] lg:h-fit border border-solid borderColorCard overflow-hidden rounded-lg md:rounded-xl`}
    >
      <div
        onClick={() => {
          goDetail(data?.id, data?.name_ru);
          setcolorId(null);
          setDressInfo({
            ...dressInfo,
            linkedFrom: "mainPageProductList",
          });
        }}
        style={{
          backgroundImage: `url("${selectedPhoto?.url_photo}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full cursor-pointer h-[200px] ls:h-[225px] ll:h-[240px] md:h-[310px] bg-btnBgColor flex justify-center content-between items-center overflow-hidden border-b border-solid flex-nowrap"
      ></div>
      <section className="relative w-full rounded-b-xl bg-white flex flex-wrap h-[125px] ls:h-[115px] md:h-[130px]">
        {/* 1 */}
        <div className="group hover:w-full h-[36px] cursor-pointer">
          <button className="group-hover:hidden w-12 h-7 border border-searchBgColor rounded-lg hidden md:flex items-center cursor-pointer select-none mt-2 mx-2 justify-center gap-x-1 ">
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
            className="w-12 h-7 md:hidden border border-searchBgColor rounded-lg flex items-center cursor-pointer select-none mt-[6px] mx-2 justify-center gap-x-1 "
          >
            <figure className="w-6 h-6 flex items-center justify-center">
              <img src={CalourCard} alt="" className="h-full" />
            </figure>
            <span className="text-catalogText text-sm not-italic font-AeonikProMedium">
              {data?.colors?.length}
            </span>
          </button>
          <article
            className={`${data?.l ? "w-full px-1 xs:px-2 md:px-4 my-2" : "w-0 my-2"
              } group-hover:w-full group-hover:px-1 group-hover:xs:px-2 group-hover:md:px-4 group-hover:my-2 duration-300 w-0 my-2 absolute overflow-hidden hidden top-0 z-[1] md:flex items-center xs:h-[38px] lg:h-8 ss:h-[30px]  bg-white`}
          >
            {data?.colors?.map((itemValue) => {
              return (
                <article
                  key={itemValue?.id}
                  style={{ backgroundColor: itemValue?.hex }}
                  onMouseEnter={() => {
                    onColorChecked(itemValue?.pivot?.id);
                  }}
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
          onMouseEnter={() => handleLeaveMouse(data?.id)}
          onClick={() => goDetail(data?.id, data?.name_ru)}
          className={`w-full px-2 xs:px-3 ${data?.cost?.discount_price ? "mb-3" : "mb-3"
            } md:mb-0`}
        >
          <div className="relative w-full whitespace-nowrap overflow-hidden not-italic font-AeonikProRegular text-[12px] ls:text-sm lg:text-[14px] leading-0 text-black mb-[6px] md:mb-0  cursor-pointer">
            <div className="absolute font-AeonikProRegular categoryLinearText left-0 w-full h-full z-[10] top-0"></div>
            {data?.name_ru || "NoData"}
          </div>
          <div className="w-full h-[10px] flex justify-between items-center mt-1">
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
                    голосов:
                  </p>
                  {data?.rated_users_count || 0})
                </article>
              </section>
            ) : null}
          </div>
        </article>
        {/* 3 */}
        <article
          onMouseEnter={() => handleLeaveMouse(data?.id)}
          className="w-full h-fit md:h-[31px] flex items-end justify-between pl-3 pr-[5px]"
        >
          <article className="flex items-center">
            {data?.cost?.discount_price ? (
              <div className="flex flex-wrap flex-col-reverse	text-start items-start ">
                <p className="w-full text-start m-0 p-0 not-italic font-AeonikProMedium text-[15px] md:text-[15px] leading-0 text-red-700 xs:text-[15px] xs:leading-0 mr-2">
                  {parseInt(data?.cost?.discount_price)
                    ?.toLocaleString()
                    ?.split(",")
                    .join(" ")}
                  {"  "}
                  сум
                </p>
                <p className="w-full text-start m-0 p-0 text-[12px] mb-[4px] line-through not-italic font-AeonikProRegular leading-0 text-[#8b8e99] ss:leading-1 md:text-[12px]">
                  {parseInt(data?.cost?.price)
                    ?.toLocaleString()
                    ?.split(",")
                    .join(" ")}
                  {"  "}
                  сум
                </p>
              </div>
            ) : (
              <p
                className={`not-italic font-AeonikProMedium text-[15px] ${data?.cost?.discount_price ? "" : ""
                  }`}
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
          <div
            className={`flex items-center select-none absolute right-2 ${data?.cost?.discount_price
                ? "bottom-[7px] ls:bottom-[-2px]"
                : " bottom-[8px] ls:bottom-[-2px]"
              } md:bottom-2`}
          >
            <button
              onClick={() => {
                if (wishList?.includes(data?.id)) {
                  setWishlist(wishList?.filter((item) => item !== data?.id));
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
    </article>
  );
};
