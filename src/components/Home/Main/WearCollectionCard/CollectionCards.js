import React, { useContext, useEffect, useState } from "react";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { useNavigate } from "react-router-dom";
import {
  InputCheckedTrueIcons,
  NoImg,
  StarIcons,
} from "../../../../AssetsMain/icons";
import { HeartImg } from "../../../../AssetsMain";
import "../../../../index.css";
import { ClothingParametr } from "./ClothingParametr";
import { CalourCard } from "../../../../AssetsMain";
import WearType from "./WearType";
export default function CollectionCards() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [openWearType, setOpenWearType] = useState(false);
  // -------------------------------------
  const toggle = React.useCallback(() => setOpenWearType(false));
  // -------------------------------------
  useEffect(() => {
    if (openWearType) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openWearType]);
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/product/:${id}`);
  };

  const onColorChecked = () => {};
  const handleEnterMouse = (eId) => {
    const elementsIndex = dressInfo.ProductList.findIndex(
      (element) => element.id == eId
    );
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
        className={`fixed  z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${
          openWearType ? "bottom-0" : "bottom-[-800px] z-0"
        }`}
      >
        <WearType onClick={toggle} />
      </section>
      <section className="max-w-[1280px] w-[100%] ss:px-4 md:px-0 flex justify-center items-center m-auto border-t md:border-0 border-searchBgColor">
        <div className="w-full flex flex-col box-border ">
          <article className="flex flex-wrap justify-between md:justify-start md:mx-0 mt-[25px] md:mt-[50px]  gap-y-2 lg:gap-x-5 lg:gap-y-5 ">
            {dressInfo.ProductList.map((data) => {
              return (
                <article
                  key={data.id}
                  className={` ss:w-[49%] md:w-[24%] lg:w-[240px]  xs:h-[456px] lg:h-fit border border-solid borderColorCard overflow-hidden rounded-xl`}
                >
                  <figure
                    onClick={() => goDetail(data?.title)}
                    className="relative w-full cursor-pointer ss:h-[200px] ls:h-[220px] ll:h-[238px] xs:h-[309px] lg:h-[320px] bg-btnBgColor  flex content-between items-center overflow-hidden border-b border-solid flex-nowrap"
                  >
                    {data.ProducImg ? (
                      <img
                        className="w-full h-full m-auto hover:scale-105 transition duration-700 ease-in-out"
                        src={data.ProducImg}
                        alt="ProducImg"
                      />
                    ) : (
                      <NoImg />
                    )}
                  </figure>
                  {/* {openWearType && ( */}
                  {/* <section
                    className={`fixed inset-0  h-fit ${
                      openWearType ? "z-[110] " : ""
                    }`}
                  > */}
                  {/* <div
                      className={`fixed z-[110] w-full h-[100vh] duration-300  ${
                        openWearType ? "inset-0" : "bottom-[-800px] hidden z-0"
                      }`}
                      onClick={() => setOpenWearType(false)}
                    ></div> */}
                  {/* <div
                      className={`fixed  z-[111] h-fit left-0 right-0  bg-white md:hidden duration-500 overflow-hidden ${
                        openWearType ? "bottom-0" : "bottom-[-800px] z-0"
                      }`}
                    >
                      <WearType onClick={toggle} title={data?.title} />
                    </div> */}
                  {/* </section> */}
                  {/* )} */}
                  <section className="relative w-full rounded-b-xl bg-white  flex flex-wrap h-[130px] md:h-[136px] ">
                    <button
                      onMouseEnter={() => handleEnterMouse(data?.id)}
                      // onMouseEnter={() => setColourCard(true)}
                      className="w-12 h-7 border border-searchBgColor rounded-lg hidden md:block md:flex items-center cursor-pointer select-none mt-2 mx-2 justify-center gap-x-1 "
                    >
                      <figure className="w-6 h-6 flex items-center justify-center">
                        <img src={CalourCard} alt="" className="h-full" />
                      </figure>
                      <span className="text-catalogText text-sm not-italic font-AeonikProMedium">
                        6
                      </span>
                    </button>
                    <button
                      onClick={() => setOpenWearType(true)}
                      className="w-12 h-7 md:hidden border border-searchBgColor rounded-lg flex items-center cursor-pointer select-none mt-2 mx-2 justify-center gap-x-1 "
                    >
                      <figure className="w-6 h-6 flex items-center justify-center">
                        <img src={CalourCard} alt="" className="h-full" />
                      </figure>
                      <span className="text-catalogText text-sm not-italic font-AeonikProMedium">
                        6
                      </span>
                    </button>
                    <article
                      onMouseLeave={() => handleLeaveMouse(data?.id)}
                      className={` ${
                        data?.colourCard
                          ? "w-full px-1 xs:px-2 md:px-4 mt-1"
                          : "w-0 mt-1"
                      } duration-300 absolute overflow-hidden hidden md:block  top-0 z-50 md:flex justify-between items-center    xs:h-[38px] lg:h-8 ss:h-[30px]  bg-white`}
                    >
                      {data?.changeColor.map((itemValue) => {
                        return (
                          <article
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
                          </article>
                        );
                      })}
                    </article>
                    <article
                      onClick={() => goDetail(data?.title)}
                      className="w-full  xs:px-3 ss:px-3 xs:mt-3 ss:mt-2"
                    >
                      <figure className="relative w-full whitespace-nowrap overflow-hidden not-italic font-AeonikProRegular text-[12px] ls:text-sm lg:text-[15px] leading-4 text-black mb-2 md:mb-0  cursor-pointer">
                        <div className="absolute categoryLinearText left-0 w-full h-full z-[10] top-0"></div>
                        {data?.title || "NoData"}
                      </figure>
                      <figure className="w-full flex justify-between items-center xs:mt-3">
                        <section className="flex items-center justify-between">
                          <article>
                            <StarIcons />
                          </article>
                          <article className="not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 ml-[2px] md:ml-1 flex items-center">
                            <p className="font-AeonikProMedium text-[10px] ls:text-xs not-italic mx-1 text-black md:mr-[6px] md:text-[13px]">
                              5.0
                            </p>
                            (
                            <p className="ss:hidden lg:block md:mr-1 md:text-[11px]">
                              голосов
                            </p>
                            {data?.starCount || 0})
                          </article>
                        </section>
                      </figure>
                    </article>
                    <article className="w-full flex items-center justify-between  pl-3 pr-[5px]">
                      <article className="flex items-center ">
                        {data.sale ? (
                          <figure className="flex flex-col-reverse ll:flex-row	text-start items-start ">
                            <p className="text-start m-0 p-0  not-italic font-AeonikProMedium text-[16px]  md:text-base leading-1 text-red-700 xs:text-base xs:leading-4 mr-1">
                              {data?.sale}
                            </p>
                            <p className="text-start m-0 p-0 text-[11px] mt-[8px]  line-through not-italic font-AeonikProRegular leading-3  text-borderColorCard ss:leading-1 md:text-[11px]">
                              {data?.price}
                            </p>
                          </figure>
                        ) : (
                          <p
                            className="not-italic font-AeonikProMedium text-base leading-4"
                            style={{ color: "black" }}
                          >
                            {data?.price}{" "}
                          </p>
                        )}
                      </article>
                      <figure className="flex items-center select-none	">
                        <button className="w-[32px] h-[32px] active:scale-95  active:opacity-70 ll:mb-1 rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor flex items-center justify-center">
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
