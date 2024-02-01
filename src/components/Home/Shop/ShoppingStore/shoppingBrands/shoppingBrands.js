import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowTopIcons,
  DeliveryStoreIcon,
  ManGenIcons,
  StarIcons,
  WomanGenIcons,
} from "../../../../../assets/icons";
import LoadingFor from "../../../../Loading/LoadingFor";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import LoadingNetwork from "../../../../Loading/LoadingNetwork";

const ShoppingBrands = ({ setGetData, errorData }) => {
  const navigate = useNavigate();
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [loading, setLoading] = useState(false);
  const goDetail = (id) => {
    navigate(`/shopping_store/:${id}`);
  };

  // if (getData?.shops) {
  //   setLoading(false);
  // }

  // ------------------

  const setPaginationFunc = (url) => {
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(true);
        setGetData(res);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <main className="relative">
      {!dressInfo?.shopsData?.shops?.data?.length ? (
        <div className="w-full min-h-[900px]">
          <LoadingNetwork />
        </div>
      ) : (
        <div className="flex flex-col min-h-[44px]  justify-center items-center my-3">
          <section className="max-w-[1280px] w-[100%] flex flex-col items-center m-auto md:mt-[50px] mb-20 md:mb-[90px]">
            <section className="w-full">
              {dressInfo?.shopsData?.shops?.data?.length ? (
                dressInfo?.shopsData?.shops?.data?.map((data) => {
                  return (
                    <div
                      key={data?.id}
                      className="w-full h-fit md:h-[100px] flex flex-col md:flex-row items-center border border-searchBgColor rounded-lg mb-[30px] p-[10px] md:pr-10"
                    >
                      <div className="w-full flex items-center pb-[15px] md:pb-0 border-b border-searchBgColor md:border-none">
                        <figure
                          style={{
                            backgroundImage: `url(${data?.url_logo_photo})`,
                            backgroundPosition: "center center",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                          }}
                          className="w-[80px] h-[80px] overflow-hidden md:w-[120px] md:h-[120px] md:ml-10 rounded-full border border-searchBgColor flex items-center justify-center bg-white"
                        ></figure>
                        <div className="flex flex-col ml-4 md:ml-10">
                          <p className="text-base ll:text-lg md:text-xl font-AeonikProMedium mb-[5px] md:mb-3">
                            {data?.name || null}
                          </p>
                          <div className="flex items-center md:justify-between">
                            <div
                              className={`${
                                data?.overall_rating ? "block" : "hidden"
                              } not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 ml-[2px] md:ml-1 flex flex-wrap items-center text-sm`}
                            >
                              <div className="flex items-center">
                                <div className="flex items-center -mt-1 mr-[6px] md:mr-2">
                                  <StarIcons />
                                </div>
                                <p className="font-AeonikProMedium text-black mr-1">
                                  {data?.overall_rating || 0}
                                </p>
                              </div>
                              <div className="flex whitespace-nowrap">
                                <p className="text-setTexOpacity font-AeonikProRegular whitespace-nowrap">
                                  ( {data?.rated_users_count || 0} votes )
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-row-reverse md:flex-row items-center md:ml-auto justify-between md:justify-start mt-3 md:mt-0">
                        <div className="w-fit md:w-[250px] h-9 md:h-12 flex items-center justify-center border border-searchBgColor bg-btnBgColor md:bg-white px-5 rounded-lg md:ml-10">
                          <DeliveryStoreIcon />
                          <p className="text-[13px] md:text-base font-AeonikProMedium text-[#2c2c2c] ml-3">
                            {data?.delivery?.name_ru}
                          </p>
                        </div>
                        <div className="flex items-center md:ml-[88px] md:mt-0">
                          <div
                            className={`${
                              data.gender_id === "2"
                                ? "hidden"
                                : "flex w-9 h-9 md:w-12 md:h-12 items-center justify-center border border-searchBgColor bg-btnBgColor md:bg-white rounded-lg mr-1"
                            } `}
                          >
                            <ManGenIcons />
                          </div>
                          <div
                            className={`${
                              data.gender_id === "1"
                                ? "hidden"
                                : "flex items-center justify-center border border-searchBgColor bg-btnBgColor md:bg-white w-9 h-9 md:w-12 md:h-12 rounded-lg"
                            } `}
                          >
                            <WomanGenIcons />
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          goDetail(data?.id);
                        }}
                        className={
                          "w-full md:w-fit flex items-center justify-center font-AeonikProMedium text-base text-SignInBgColor border border-searchBgColor md:border-SignInBgColor bg-[#E8F5FD] md:bg-white mt-6 md:mt-0 md:ml-[117px] py-2 md:py-1 md:px-3 md:hover:bg-SignInBgColor duration-300 ease-out md:hover:text-white rounded-lg"
                        }
                      >
                        Подробнее
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="flex flex-col">
                  <span className="w-full flex items-center justify-center font-AeonikProMedium text-2xl md:mt-[100px]">
                    Ничего не найдено
                  </span>
                  <span className="w-full flex items-center justify-center font-AeonikProMedium text-2xl">
                    {errorData}
                  </span>
                </div>
              )}
            </section>
            <section className="w-full hidden h-fit md:flex items-center justify-center mt-[75px] gap-x-6">
              <article className="flex items-center">
                <ul className="flex items-center">
                  {dressInfo?.shopsData?.shops?.links?.map((item) => {
                    return (
                      <li
                        key={item?.label}
                        onClick={() => {
                          if (item?.url) {
                            setPaginationFunc(item?.url);
                          }
                        }}
                        className={`not-italic font-AeonikProRegular text-sm leading-4 text-center px-2 min-w-[45px] border h-[45px] rounded-lg  ${
                          item?.active
                            ? "bg-fullBlue text-white"
                            : "hover:bg-searchBgColor"
                        } mx-[5px] flex items-center justify-center  ${
                          item?.url
                            ? "cursor-pointer"
                            : "opacity-70 cursor-not-allowed"
                        }`}
                      >
                        {item?.label}
                      </li>
                    );
                  })}
                </ul>
              </article>
            </section>
          </section>
        </div>
      )}
    </main>
  );
};

export default ShoppingBrands;
