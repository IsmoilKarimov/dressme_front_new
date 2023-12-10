import React, { useContext, useState } from "react";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HeartIcon,
  InputCheckedTrueIcons,
  NoImg,
  StarIcons,
} from "../../../../assets/icons";
import { AddBasket, HeartImg } from "../../../../assets";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../../../hook/useHttp";

export default function FavouriteProducts() {
  const [dressInfo] = useContext(dressMainData);
  const [authentificatedFavProducts, setAuthentificatedFavProducts] =
    useState(null);
  const [nonAuthentificatedFavProducts, setNonAuthentificatedFavProducts] =
    useState(null);
  // console.log(favProducts.length);

  const { request } = useHttp();
  const onColorChecked = () => {};
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/product/:${id}`);
  };

  // ========= GET WISHLISHT PRODUCTS FOR AUTHENTICATED USERS ==========
  useQuery(
    ["get-wishlist-products-auth"],
    async () => {
      return request({ url: "/user-main/products/wishlist", token: true });
    },
    {
      onSuccess: (res) => {
        console.log(res?.user_wishlist_products
          , "SUCCESS, HAVE USER GET WISHLIST PROFILE");
        setAuthentificatedFavProducts(res?.user_wishlist_products);
      },
      onError: (err) => {
        console.log(err, "THERE IS AN ERROR IN GET-WISHLIST-PROFILE");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  // ========= GET WISHLISHT PRODUCTS FOR NON AUTHENTICATED USERS ==========
  useQuery(
    ["get-wishlist-products-not-auth"],
    async () => {
      return request({ url: "/main/wishlist", token: false});
    },
    {
      onSuccess: (res) => {
        console.log(res?.wishlist_products?.data, "SUCCESS, NOT USER GET WISHLIST PROFILE");
        setNonAuthentificatedFavProducts(res?.wishlist_products?.data);
      },
      onError: (err) => {
        console.log(err, "THERE IS AN ERROR IN GET-WISHLIST-PROFILE");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <main className="flex flex-col min-h-[44px]  justify-center items-center mt-8">
      <div className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto mb-[90px] ss:px-4 md:px-0">
        <section className="w-full flex flex-col box-border ">
          {authentificatedFavProducts ||
          nonAuthentificatedFavProducts?.length ? (
            localStorage.getItem("DressmeUserToken") ? (
              <article className="flex flex-wrap justify-between md:justify-start gap-y-2 lg:gap-x-5 lg:gap-y-5 ">
                {authentificatedFavProducts?.map((data) => {
                  console.log(data, "DATA-Authentificated-user");
                  return (
                    <div
                      key={data.id}
                      className={`ss:w-[49%] md:w-[24%] lg:w-[240px]  xs:h-[456px] lg:h-fit border border-solid borderColorCard overflow-hidden rounded-xl`}
                    >
                      <figure
                        onClick={() => goDetail(data?.title)}
                        className=" w-full cursor-pointer h-[200px] ls:h-[220px] ll:h-[238px] xs:h-[309px] lg:h-[320px] bg-btnBgColor  flex justify-center content-between items-center overflow-hidden border-b border-solid flex-nowrap"
                      >
                        <div>
                          <NoImg />
                        </div>
                      </figure>
                      <div className="w-full rounded-b-xl bg-white  flex flex-wrap h-[130px] md:h-[136px] ">
                        {/* <section className=" w-full flex justify-between items-center px-1  border-solid xs:h-[38px] lg:h-8 ss:h-[30px] xs:px-2 md:px-4 bg-white">
                          {data?.changeColor.map((itemValue) => {
                            return (
                              <div
                                key={itemValue?.id}
                                onClick={() =>
                                  onColorChecked(data?.id, itemValue?.id)
                                }
                                className={`rounded-full flex items-center justify-center hover:scale-110 duration-300 ls:w-[22px] ls:h-[22px] w-5 h-5 lg:w-6 lg:h-6 ${itemValue?.colors} cursor-pointer  border border-solid border-borderColorCard mr-[3px]`}
                                htmlFor="Color1"
                              >
                                {itemValue?.action ? (
                                  <InputCheckedTrueIcons colors={"#fff"} />
                                ) : null}
                              </div>
                            );
                          })}
                        </section> */}
                        <section
                          onClick={() => goDetail(data?.product?.name_ru)}
                          className="w-full  xs:px-3 ss:px-3 xs:mt-3 ss:mt-2 z-auto"
                        >
                          <section className="relative z-10 w-full whitespace-nowrap overflow-hidden not-italic font-AeonikProRegular text-[12px] ls:text-sm lg:text-[15px] leading-4 text-black mb-2 md:mb-0  cursor-pointer">
                            <p className="absolute categoryLinearText left-0 w-full h-full z-[10] top-0"></p>
                            {data?.product.name_ru || "NoData"}
                          </section>
                          <section className="w-full flex justify-between items-center xs:mt-3">
                            <article className="flex items-center justify-between">
                              <span>
                                <StarIcons />
                              </span>
                              <span className="not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 ml-[2px] md:ml-1 flex items-center">
                                <p className="font-AeonikProMedium text-[10px] ls:text-xs not-italic mx-1 text-black md:mr-[6px] md:text-[13px]">
                                  {data?.product?.overall_rating}
                                </p>
                                ({data?.product?.rated_users_count || 0}{" "}
                                <p className="ss:hidden lg:block md:ml-1 md:text-[11px]">
                                  голосов
                                </p>
                                )
                              </span>
                            </article>
                            <article className="not-italic xs:font-AeonikProMedium ss:font-AeonikProRegular leading-4 text-black  ss:text-[11px] sm:text-xs  md:text-[13px] ">
                              <b>
                                <span>{data?.shirtSize || 0}</span>
                              </b>
                            </article>
                          </section>
                        </section>
                        <section className="w-full flex items-center justify-between  pl-3 pr-[5px]">
                          <div className="flex items-center ">
                            {data.sale ? (
                              <div className="flex flex-col-reverse ll:flex-row	text-start items-start ">
                                <p className="text-start m-0 p-0  not-italic font-AeonikProMedium text-[16px]  md:text-base leading-1 text-red-700 xs:text-base xs:leading-4 mr-1">
                                  {data?.sale}
                                </p>
                                <p className="text-start m-0 p-0 text-[11px] mt-[8px]  line-through not-italic font-AeonikProRegular leading-3 text-borderColorCard ss:leading-1 md:text-[11px]">
                                  {data?.price}
                                </p>
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
                          <figure className="flex items-center select-none	">
                            <button className="w-[32px] h-[32px] active:scale-95  active:opacity-70 ll:mb-1 rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                              <img src={HeartImg} alt="" />
                            </button>
                          </figure>
                        </section>
                      </div>
                    </div>
                  );
                })}
              </article>
            ) : (
              <article className="flex flex-wrap justify-between md:justify-start gap-y-2 lg:gap-x-5 lg:gap-y-5 ">
                {authentificatedFavProducts?.map((data) => {
                  console.log(data, "DATA-Authentificated-user");
                  return (
                    <div
                      key={data.id}
                      className={`ss:w-[49%] md:w-[24%] lg:w-[240px]  xs:h-[456px] lg:h-fit border border-solid borderColorCard overflow-hidden rounded-xl`}
                    >
                      <figure
                        onClick={() => goDetail(data?.title)}
                        className=" w-full cursor-pointer h-[200px] ls:h-[220px] ll:h-[238px] xs:h-[309px] lg:h-[320px] bg-btnBgColor  flex justify-center content-between items-center overflow-hidden border-b border-solid flex-nowrap"
                      >
                        <div>
                          <NoImg />
                        </div>
                      </figure>
                      <div className="w-full rounded-b-xl bg-white  flex flex-wrap h-[130px] md:h-[136px] ">
                        {/* <section className=" w-full flex justify-between items-center px-1  border-solid xs:h-[38px] lg:h-8 ss:h-[30px] xs:px-2 md:px-4 bg-white">
                          {data?.changeColor.map((itemValue) => {
                            return (
                              <div
                                key={itemValue?.id}
                                onClick={() =>
                                  onColorChecked(data?.id, itemValue?.id)
                                }
                                className={`rounded-full flex items-center justify-center hover:scale-110 duration-300 ls:w-[22px] ls:h-[22px] w-5 h-5 lg:w-6 lg:h-6 ${itemValue?.colors} cursor-pointer  border border-solid border-borderColorCard mr-[3px]`}
                                htmlFor="Color1"
                              >
                                {itemValue?.action ? (
                                  <InputCheckedTrueIcons colors={"#fff"} />
                                ) : null}
                              </div>
                            );
                          })}
                        </section> */}
                        <section
                          onClick={() => goDetail(data?.product?.name_ru)}
                          className="w-full  xs:px-3 ss:px-3 xs:mt-3 ss:mt-2 z-auto"
                        >
                          <section className="relative z-10 w-full whitespace-nowrap overflow-hidden not-italic font-AeonikProRegular text-[12px] ls:text-sm lg:text-[15px] leading-4 text-black mb-2 md:mb-0  cursor-pointer">
                            <p className="absolute categoryLinearText left-0 w-full h-full z-[10] top-0"></p>
                            {data?.product.name_ru || "NoData"}
                          </section>
                          <section className="w-full flex justify-between items-center xs:mt-3">
                            <article className="flex items-center justify-between">
                              <span>
                                <StarIcons />
                              </span>
                              <span className="not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 ml-[2px] md:ml-1 flex items-center">
                                <p className="font-AeonikProMedium text-[10px] ls:text-xs not-italic mx-1 text-black md:mr-[6px] md:text-[13px]">
                                  {data?.product?.overall_rating}
                                </p>
                                ({data?.product?.rated_users_count || 0}{" "}
                                <p className="ss:hidden lg:block md:ml-1 md:text-[11px]">
                                  голосов
                                </p>
                                )
                              </span>
                            </article>
                            <article className="not-italic xs:font-AeonikProMedium ss:font-AeonikProRegular leading-4 text-black  ss:text-[11px] sm:text-xs  md:text-[13px] ">
                              <b>
                                <span>{data?.shirtSize || 0}</span>
                              </b>
                            </article>
                          </section>
                        </section>
                        <section className="w-full flex items-center justify-between  pl-3 pr-[5px]">
                          <div className="flex items-center ">
                            {data.sale ? (
                              <div className="flex flex-col-reverse ll:flex-row	text-start items-start ">
                                <p className="text-start m-0 p-0  not-italic font-AeonikProMedium text-[16px]  md:text-base leading-1 text-red-700 xs:text-base xs:leading-4 mr-1">
                                  {data?.sale}
                                </p>
                                <p className="text-start m-0 p-0 text-[11px] mt-[8px]  line-through not-italic font-AeonikProRegular leading-3 text-borderColorCard ss:leading-1 md:text-[11px]">
                                  {data?.price}
                                </p>
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
                          <figure className="flex items-center select-none	">
                            <button className="w-[32px] h-[32px] active:scale-95  active:opacity-70 ll:mb-1 rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                              <img src={HeartImg} alt="" />
                            </button>
                          </figure>
                        </section>
                      </div>
                    </div>
                  );
                })}
              </article>
            )
          ) : (
            <article className="md:my-[50px] mx-auto">
              <div className="w-[800px] text-center p-8 flex flex-col items-center justify-center">
                <figure className="w-16 h-16 flex justify-center items-center mb-3">
                  <img src={HeartImg}  alt="" className="w-[50px]" />
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
                  className="border text-white bg-blue-500 hover:bg-blue-400 transition ease-linear duration-300 rounded-lg px-[16px] py-3 font-AeonikProMedium text-lg"
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
