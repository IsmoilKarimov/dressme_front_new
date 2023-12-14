import React, { useContext, useState } from "react";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { NavLink, useNavigate } from "react-router-dom";
import {
  InputCheckedTrueIcons,
  NoImg,
  StarIcons,
} from "../../../../assets/icons";
import { CalourCard, HeartImg } from "../../../../assets";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useHttp } from "../../../../hook/useHttp";
import WearType from "../../Main/WearCollectionCard/WearType";
import Cookies from "js-cookie";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";
// import { SliderPhotosColorContext } from "../../../../ContextHook/SliderPhotosColor";

export default function FavouriteProducts() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [openWearType, setOpenWearType] = useState(false);
  const [authProducts, setAuthProducts] = useState(null);
  const [favourites, setFavourites] = useState([]);
  // -------------------------------------
  const toggle = React.useCallback(() => setOpenWearType(false), []);
  // -------------------------------------

  // Main data context -----------------
  const [mainData, , wishList, setWishlist] = useContext(HomeMainDataContext);

  const { request } = useHttp();
  const onColorChecked = () => {};
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/product/${id}`);
  };
  const url = "https://api.dressme.uz/api";

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

  // console.log(authProducts, "authproducts");
  console.log(favourites, "favourites");

  // const url = "https://api.dressme.uz/api";

  // ========= GET WISHLISHT PRODUCTS FOR AUTHENTICATED USERS ==========
  // const { refetch } = useQuery(
  //   ["get-wishlist-products-for-wishlist"],
  //   async () => {
  //     return request({ url: "/user-main/products/wishlist", token: true });
  //   },
  //   {
  //     onSuccess: (res) => {
  //       console.log(
  //         res?.user_wishlist_products,
  //         "SUCCESS, HAVE USER GET WISHLIST PROFILE"
  //       );
  //       setAuthProducts(res?.user_wishlist_products?.data);
  //     },
  //     onError: (err) => {
  //       console.log(err, "THERE IS AN ERROR IN GET-WISHLIST-PROFILE");
  //     },
  //     keepPreviousData: true,
  //     refetchOnWindowFocus: false,
  //   }
  // );

  const { refetch } = useQuery(
    ["get-wishlist-products-for-cart"],
    async () => {
      return request({ url: "/user-main/products/wishlist", token: true });
    },
    {
      onSuccess: (res) => {
        console.log(res?.user_wishlist_products, "ishga tushdi");
        res?.user_wishlist_products?.data?.map((item) => {
          if (!favourites?.includes(item?.product?.id)) {
            setFavourites((favourites) => [...favourites, item?.product?.id]);
          }
        });
        setAuthProducts(res?.user_wishlist_products?.data);
      },
      onError: (err) => {
        console.log(err, "THERE IS AN ERROR IN GET-WISHLIST-PROFILE");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  // =========== POST FAVOURITE PRODUCT ==========
  const dataEmailMutate = useMutation((id) => {
    return fetch(`${url}/user-main/products/add-to-wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${Cookies.get("DressmeUserToken")}`,
      },
      body: JSON.stringify({
        product_id: id,
      }),
    }).then((res) => res.json());
  });

  const sendFavData = (id) => {
    dataEmailMutate.mutate(id, {
      onSuccess: (res) => {
        if (res?.message) {
          refetch();
          setFavourites([]);
          console.log(res, "RES");
        }
      },
      onError: (err) => {
        console.log(err, "ERROR IN PRODUCTS");
      },
    });
  };

  return (
    <main className="flex flex-col min-h-[44px]  justify-center items-center mt-8">
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
      <div className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto mb-[90px] ss:px-4 md:px-0">
        <section className="w-full flex flex-col">
          {authProducts?.length || wishList?.length ? (
            Cookies.get("DressmeUserToken") ? (
              <article className="flex flex-wrap justify-between md:justify-start gap-y-2 lg:gap-x-3 lg:gap-y-3 ">
                {authProducts?.map((data) => {
                  return (
                    <div
                      key={data?.id}
                      className={`ss:w-[49%] md:w-[24%] lg:w-[240px] xs:h-[456px] lg:h-fit border border-solid borderColorCard overflow-hidden rounded-xl`}
                    >
                      <figure
                        onClick={() => goDetail(data?.product?.id)}
                        style={{
                          backgroundImage: `url("${data?.product?.photos[0]?.url_photo}")`,
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                        className="relative w-full cursor-pointer h-[310px] bg-btnBgColor flex justify-center content-between items-center overflow-hidden border-b border-solid flex-nowrap"
                      ></figure>
                      <section className="relative w-full rounded-b-xl bg-white flex flex-wrap h-[125px] ls:h-[130px] md:h-[136px]">
                        {/* 1 */}
                        <div className="group hover:w-full hover:h-[36px] cursor-pointer">
                          <button className="group-hover:hidden w-12 h-7 border border-searchBgColor rounded-lg hidden md:flex items-center cursor-pointer select-none mt-2 mx-2 justify-center gap-x-1 ">
                            <figure className="w-6 h-6 flex items-center justify-center">
                              <img src={CalourCard} alt="" className="h-full" />
                            </figure>
                            <span className="text-catalogText text-sm not-italic font-AeonikProMedium">
                              {data?.product?.colors?.length}
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
                              {data?.product?.colors?.length}
                            </span>
                          </button>
                          <article
                            className={`${
                              data?.product?.l
                                ? "w-full px-1 xs:px-2 md:px-4 my-2"
                                : "w-0 my-2"
                            } group-hover:w-full group-hover:px-1 group-hover:xs:px-2 group-hover:md:px-4 group-hover:my-2 duration-300 w-0 my-2 absolute overflow-hidden hidden top-0 z-[1] md:flex justify-between items-center xs:h-[38px] lg:h-8 ss:h-[30px]  bg-white`}
                          >
                            {data?.product.colors?.map((itemValue) => {
                              return (
                                <article
                                  key={itemValue?.id}
                                  style={{ backgroundColor: itemValue?.hex }}
                                  onClick={() =>
                                    onColorChecked(data?.id, itemValue?.id)
                                  }
                                  className={`rounded-full flex items-center justify-center hover:scale-110 duration-300 ls:w-[22px] ls:h-[22px] w-5 h-5 lg:w-6 lg:h-6 cursor-pointer  border border-solid border-borderColorCard mr-[3px]`}
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
                            {data?.product?.cost?.discount_price ? (
                              <figure className="flex flex-wrap flex-col-reverse	text-start items-start ">
                                <p className="w-full text-start m-0 p-0  not-italic font-AeonikProMedium text-[15px] md:text-[15px] leading-1 text-red-700 xs:text-[15px] xs:leading-0 mr-2">
                                  {parseInt(data?.product.cost?.discount_price)
                                    ?.toLocaleString()
                                    ?.split(",")
                                    .join(" ")}
                                  {"  "}
                                  сум
                                </p>
                                <p className="w-full text-start m-0 p-0 text-[10px] mb-[4px] mt-[2px] line-through not-italic font-AeonikProRegular leading-3 text-[#8b8e99] ss:leading-1 md:text-[12px]">
                                  {parseInt(data?.product?.cost?.price)
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
                                {parseInt(data?.product?.cost?.price)
                                  ?.toLocaleString()
                                  ?.split(",")
                                  .join(" ")}
                                {"  "}
                                сум
                              </p>
                            )}
                          </article>
                          <figure className="flex items-center select-none	absolute right-2 bottom-2">
                          {favourites?.includes(data?.product?.id) && (
                              <button
                                onClick={() => {
                                  sendFavData(data?.product?.id);
                                }}
                                className="w-[32px] h-[32px] active:scale-95  active:opacity-70 rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor flex items-center justify-center"
                              >
                                <BsHeartFill color="#d50000" />
                              </button>
                            )}
                          </figure>
                        </article>
                      </section>
                    </div>
                  );
                })}
              </article>
            ) : (
              <article className="flex flex-wrap justify-between md:justify-start md:mx-0  md:mt-[50px]  gap-y-2 lg:gap-x-3 lg:gap-y-3">
                {mainData?.products?.data?.map((data) => {
                  if (wishList?.includes(data?.id)) {
                    return (
                      <article
                        key={data?.id}
                        className={`ss:w-[49%] md:w-[24%] lg:w-[19.09%] xs:h-[456px] lg:h-fit border border-solid borderColorCard overflow-hidden rounded-xl box-content`}
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
                          className="relative w-full cursor-pointer h-[310px] bg-btnBgColor flex justify-center content-between items-center overflow-hidden border-b border-solid flex-nowrap"
                        >
                          {/* <div><NoImg /></div> */}
                        </figure>
                        <section className="relative w-full rounded-b-xl bg-white flex flex-wrap h-[125px] ls:h-[130px] md:h-[136px] ">
                          {/* 1 */}
                          <div className="group hover:w-full hover:h-[36px] cursor-pointer">
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
                              onClick={() => setOpenWearType(true)}
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
                                    style={{ backgroundColor: itemValue?.hex }}
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
                              {Cookies.get("DressmeUserToken") ? (
                                <>
                                  {/* <button
                                    onClick={() => {
                                      // setHeartChangeColor(!heartChangeColor);
                                      // sendFavData(data?.id);
                                    }}
                                    className="w-[32px] h-[32px] active:scale-95  active:opacity-70 rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor flex items-center justify-center"
                                  >
                                    <BsHeartFill color="#d50000" />
                                  </button> */}
                                  <button
                                    onClick={() => {
                                      // productDelete(data?.id);
                                    }}
                                    className="w-[32px] h-[32px] active:scale-95  active:opacity-70 rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor flex items-center justify-center"
                                  >
                                    <BsHeart />
                                  </button>
                                  {/* )} */}
                                </>
                              ) : (
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
                      </article>
                    );
                  }
                })}
              </article>
            )
          ) : (
            <article className="md:my-[50px] mx-auto">
              <div className="w-[800px] text-center p-8 flex flex-col items-center justify-center">
                <figure className="w-16 h-16 flex justify-center items-center mb-3">
                  <img src={HeartImg} alt="" className="w-[50px]" />
                </figure>
                <p className="text-3xl font-AeonikProMedium mb-3">
                  Добавьте то, что понравилось
                </p>
                <p className="text-lg mb-3">
                  Нажмите на <span className="text-xl text-red-600">♡</span> в
                  товаре. Войдите в аккаунт и всё избранное сохранится
                </p>
                <NavLink
                  to="/"
                  className="border text-white bg-borderWinter hover:bg-sky-500 transition ease-linear duration-300 rounded-lg px-[16px] py-3 font-AeonikProMedium text-lg"
                >
                  Войти в аккаунт
                </NavLink>
              </div>
            </article>
          )}
        </section>

        <section className="w-full h-fit flex items-center justify-center mt-14 md:hidden">
          <p className="w-[760px] h-[60px] cursor-pointer not-italic font-AeonikProMedium text-base leading-4 text-center text-black flex items-center justify-center rounded-lg border border-searchBgColor bg-btnBgColor">
            Показать ещё 30 наборов
          </p>
        </section>
      </div>
    </main>
  );
}
