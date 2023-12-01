import React, { useContext, useEffect, useState } from "react";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { useNavigate } from "react-router-dom";
import {
  InputCheckedTrueIcons,
  NoImg,
  SearchIcons,
  StarIcons,
} from "../../../../assets/icons";
import { HeartImg } from "../../../../assets";
import "../../../../index.css";
import { ClothingParametr } from "./ClothingParametr";
import { CalourCard } from "../../../../assets";
import WearType from "./WearType";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";
export default function CollectionCards() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [openWearType, setOpenWearType] = useState(false);
  // -------------------------------------
  const toggle = React.useCallback(() => setOpenWearType(false), []);
  // -------------------------------------

  // Main data context --------

  const [mainData, setMainData] = useContext(HomeMainDataContext);

  useEffect(() => {
    if (openWearType) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openWearType]);
  const navigate = useNavigate();
  const goDetail = (id) => {
    // const IdOne = id.split(" ");
    // const IdTwo = IdOne.join("-");
    navigate(`/product/${id}`);
  };

  const onColorChecked = () => {};
  const handleEnterMouse = (eId) => {
    const elementsIndex = dressInfo.ProductList.findIndex(
      (element) => element.id == eId
    );
    // const elementsIndex = dressInfo.ProductList.map((data) => data?.id == eId);
    let newArray = [...dressInfo.ProductList];
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      colourCard: true,
      // colourCard: !newArray[elementsIndex].colourCard,
    };
    setDressInfo((current) => {
      return { ...current, ProductList: newArray };
    });
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
    <main className="flex flex-col justify-center items-center m-0 p-0 box-border">
      <section className="w-full mt-[50px]">
        <ClothingParametr />
      </section>
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

      <section className="max-w-[1280px] w-[100%] ss:px-4 md:px-0 flex flex-col justify-center items-center m-auto border-t md:border-0 border-searchBgColor">
        {/* Searching section */}
        <article className="w-full h-12 flex md:hidden items-center justify-between rounded-xl font-AeonikProRegular border border-searchBgColor bg-white mt-4">
          <input
            type="text"
            placeholder="Искать товары"
            className="bg-transparent w-[90%] h-full text-[14px] border border-transparent px-3"
          />
          <span className="w-[1px] h-full border-r border-searchBgColor"></span>
          <span className="w-[15%] rounded-r-xl flex h-full bg-[#fafafa] items-center justify-center">
            <SearchIcons />
          </span>
        </article>
        <section className="w-full  md:hidden flex justify-start items-center my-5 ">
          <div className="not-italic font-AeonikProMedium lg:w-fit lg:text-2xl xl:text-3xl flex items-center leading-6 text-black">
            <p>Коллекция одежд</p>
          </div>
        </section>

        <div className="w-full flex flex-col box-border ">
          <article className="flex flex-wrap justify-between md:justify-start md:mx-0  md:mt-[50px]  gap-y-2 lg:gap-x-5 lg:gap-y-5 ">
            {mainData?.products?.data?.map((data) => {
              return (
                <article
                  key={data.id}
                  className={` ss:w-[49%] md:w-[24%] lg:w-[240px] xs:h-[456px] lg:h-fit border border-solid borderColorCard overflow-hidden rounded-xl`}
                >
                  <figure
                    // onMouseEnter={() => handleLeaveMouse(data?.id)}
                    onClick={() => goDetail(data?.id)}
                    className="relative w-full cursor-pointer h-[250px] bg-btnBgColor flex justify-center content-between items-center overflow-hidden border-b border-solid flex-nowrap"
                  >
                    {/* {data.ProducImg ? (
                      <img
                        className="w-full h-full m-auto hover:scale-105 transition duration-700 ease-in-out"
                        src={data.ProducImg}
                        alt="ProducImg"
                      />
                    ) : (
                      <NoImg />
                    )} */}
                    <div>
                      <NoImg />
                    </div>
                  </figure>
                  <section className="relative  w-full rounded-b-xl bg-white flex flex-wrap h-[125px] ls:h-[130px] md:h-[136px] ">
                    <div className="group hover:w-full hover:h-[36px] cursor-pointer">
                      <button
                        // onMouseEnter={() => handleEnterMouse(data?.id)}
                        // onMouseEnter={() => setColourCard(true)}
                        className="group-hover:hidden w-12 h-7 border border-searchBgColor rounded-lg hidden md:flex items-center cursor-pointer select-none mt-2 mx-2 justify-center gap-x-1 "
                      >
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
                        // onMouseLeave={() => handleLeaveMouse(data?.id)}
                        className={` ${
                          data?.l
                            ? "w-full px-1 xs:px-2 md:px-4 my-2"
                            : "w-0 my-2"
                        } group-hover:w-full group-hover:px-1 group-hover:xs:px-2 group-hover:md:px-4 group-hover:my-2 duration-300 w-0 my-2 absolute overflow-hidden hidden top-0 z-[1] md:flex justify-between items-center xs:h-[38px] lg:h-8 ss:h-[30px]  bg-white`}
                      >
                        {data?.colors?.map((itemValue) => {
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
                    <article
                      onMouseEnter={() => handleLeaveMouse(data?.id)}
                      onClick={() => goDetail(data?.id)}
                      className="w-full px-2 xs:px-3 xs:mt-1"
                    >
                      <figure className="relative w-full whitespace-nowrap overflow-hidden not-italic font-AeonikProRegular text-[12px] ls:text-sm lg:text-[14px] leading-0 text-black mb-1 md:mb-0  cursor-pointer">
                        <div className="absolute font-AeonikProRegular categoryLinearText left-0 w-full h-full z-[10] top-0"></div>
                        {data?.name_ru || "NoData"}
                      </figure>
                      <figure className="w-full flex justify-between items-center xs:mt-1">
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
                      </figure>
                    </article>
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
                        <button className="w-[32px] h-[32px] active:scale-95  active:opacity-70 rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                          <img src={HeartImg} alt="" />
                        </button>
                      </figure>
                    </article>
                  </section>
                </article>
              );
            })}
          </article>

          <div className="w-full h-fit flex items-center justify-center mt-14">
            <button className="w-[760px] h-[60px] cursor-pointer not-italic font-AeonikProMedium text-base leading-4 text-center text-black flex items-center justify-center rounded-xl border border-searchBgColor bg-btnBgColor">
              Показать ещё 30 наборов
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
