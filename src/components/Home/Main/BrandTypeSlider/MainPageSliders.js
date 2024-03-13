/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";

import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { useNavigate } from "react-router-dom";
import { NoImg, ShowMoreBackIcon, SircleNext } from "../../../../assets/icons";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";
import { useTranslation } from "react-i18next";
import { LanguageDetectorDress } from "../../../../language/LanguageItems";
import { SaesonDetectorDress } from "../../../../ContextHook/SeasonContext";

function MainPageSliders() {
  const [data, setData] = useContext(HomeMainDataContext);
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const { t } = useTranslation(["homePage"]);
  const [languageDetector, setLanguageDetector] = useContext(
    LanguageDetectorDress
  );
  const [seasonDetector, setSeasonDetector] = useContext(SaesonDetectorDress)
  // maindata
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[40%] z-10	right-[20px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard		`}
        onClick={onClick}
      >
        <button className="next">
          <GrFormNext size={20} />
        </button>
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[40%] z-10	left-[20px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };
  const NextArrow1 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[30%] z-10	right-[20px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard	`}
        onClick={onClick}
      >
        <button className="next">
          <GrFormNext size={20} />
        </button>
      </div>
    );
  };
  const PrevArrow1 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[30%] z-10	left-[20px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard	`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };
  let settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    dots: false,

    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let settings1 = {
    nextArrow: <NextArrow1 />,
    prevArrow: <PrevArrow1 />,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [more, setMore] = useState(false);

  const navigate = useNavigate();
  const goDetail = (id, name) => {
    data?.getMainProductCard?.shops
      ?.filter((e) => e?.id == id)
      ?.map((item) => {
        if (dressInfo?.mainSubRegionId) {
          let foundElement = item?.approved_shop_locations.find(function (
            element
          ) {
            return Number(element.sub_region_id) === dressInfo?.mainSubRegionId;
          });
          setDressInfo({
            ...dressInfo,
            locationIdParams: foundElement?.id,
            productShowSelectedLocation: foundElement,
            linkedFrom: "mainPageShopsList",
          });
          navigate(`/shops/${name?.split(" ")?.join("-")?.toLowerCase()}`);
        }
        if (!dressInfo?.mainSubRegionId) {
          setDressInfo({
            ...dressInfo,
            locationIdParams: item?.approved_shop_locations[0]?.id,
            productShowSelectedLocation: item?.approved_shop_locations[0],
            linkedFrom: "mainPageShopsList",
          });
          navigate(`/shops/${name?.split(" ")?.join("-")?.toLowerCase()}`);
        }
      });
  };
  const goSectionId = (nameru, nameuz) => {
    // to = {`/section/${data?.name_ru?.split(' ')?.join('-')?.toLowerCase()}`
    if (languageDetector?.typeLang === "ru") {
      navigate(`/section/${nameru?.split(" ")?.join("-")?.toLowerCase()}`);
    }
    if (languageDetector?.typeLang === "uz") {
      navigate(`/section/${nameuz?.split(" ")?.join("-")?.toLowerCase()}`);
    }
  };

  // console.log(languageDetector?.typeLang,'languageDetector');
  return (
    <main className="flex flex-col justify-center items-center m-0 p-0 box-border">
      <section className="max-w-[1280px] w-[100%] ss:px-4 md:px-0 flex justify-center items-center m-auto border-t md:border-0 border-searchBgColor">
        <section className="w-full box-border flex flex-col justify-center mt-4 mb-6 md:my-6">
          {/* MAIN SLIDER */}
          <div
            className={`w-full ss:h-0 ${more ? "xs:h-0" : "xs:h-auto"
              } overflow-hidden `}
          >
            {data?.getMainProductCard?.sections?.length > 6 ? (
              <Slider
                {...settings}
                vertical={false}
                className="w-[100%] flex xs:justify-between flex-wrap  "
              >
                {data?.getMainProductCard?.sections?.map((data) => {
                  return (
                    <div
                      onClick={() =>
                        goSectionId(
                          languageDetector?.typeLang === "ru" && data?.name_ru,
                          languageDetector?.typeLang === "uz" && data?.name_uz
                        )
                      }
                      key={data?.id}
                      className="!w-[99%] h-[280px] rounded-lg"
                    >
                      <div className="w-full h-fit bg-btnBgColor ml-[0.5px] rounded-lg overflow-hidden">
                        <button
                          className={`w-full h-fit border border-searchBgColor rounded-lg flex items-center justify-center`}
                        >
                          <img
                            className="w-full h-[250px] rounded-lg object-cover object-top "
                            src={data?.url_photo}
                            alt="No-img"
                          />
                        </button>
                      </div>
                      <article className="h-12.5 flex items-center justify-start">
                        <div className="not-italic flex font-AeonikProMedium text-base leading-4 text-black mt-3 mr-1 ml-2">
                          {languageDetector?.typeLang === "ru" && data?.name_ru}
                          {languageDetector?.typeLang === "uz" && data?.name_uz}
                          <p className="not-italic ml-2 font-AeonikProRegular text-xs leading-4 text-gray-500">
                            ({data?.products_count || "0"})
                          </p>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </Slider>
            ) : (
              <section className="w-full box-border flex flex-row justify-start gap-x-[24px]  ">
                {data?.getMainProductCard?.sections?.map((data) => {
                  return (
                    <div
                      onClick={() =>
                        goSectionId(
                          languageDetector?.typeLang === "ru" && data?.name_ru,
                          languageDetector?.typeLang === "uz" && data?.name_uz
                        )
                      }
                      key={data?.id}
                      className="w-[193px] h-[280px] rounded-lg "
                    >
                      <div className="w-full h-fit bg-btnBgColor  rounded-lg overflow-hidden">
                        <button
                          className={`w-full h-fit border border-searchBgColor rounded-lg flex items-center justify-center`}
                        >
                          <img
                            className="   w-full h-[250px] rounded-lg object-cover object-top "
                            src={data?.url_photo}
                            alt="No-img"
                          />
                        </button>
                      </div>
                      <article className="h-12.5 flex items-center justify-start">
                        <div className="not-italic flex font-AeonikProMedium text-base leading-4 text-black mt-3  ml-2">
                          {languageDetector?.typeLang === "ru" && data?.name_ru}
                          {languageDetector?.typeLang === "uz" && data?.name_uz}
                          {data?.products_count > 999999 ? (
                            <p className="not-italic ml-2 font-AeonikProRegular text-xs leading-4 text-gray-500">
                              (999 999+)
                            </p>
                          ) : (
                            <p className="not-italic ml-2 font-AeonikProRegular text-xs leading-4 text-gray-500">
                              ({data?.products_count || "0"})
                            </p>
                          )}
                        </div>
                      </article>
                    </div>
                  );
                })}
              </section>
            )}
          </div>

          {/* CAROUSEL HIDDEN BLOCK */}
          <div
            className={`${more ? "xs:grid" : "xs:hidden"
              } w-full h-fit grid grid-cols-3 xs:grid-cols-6 gap-2 xs:gap-[22px] overflow-hidden  my-0 py-0 `}
          >
            {data?.getMainProductCard?.sections?.map((data, i) => {
              if (more) {
                return (
                  <div
                    onClick={() =>
                      goSectionId(
                        languageDetector?.typeLang === "ru" && data?.name_ru,
                        languageDetector?.typeLang === "uz" && data?.name_uz
                      )
                    }
                    key={data?.id}
                    className="w-full md:!w-[99%] h-[170px] md:h-[280px] rounded-lg "
                  >
                    <div className="w-full h-[140px] md:h-fit bg-btnBgColor  ml-[0.5px] rounded-lg overflow-hidden">
                      <button
                        className={`w-full h-full md:h-fit border border-searchBgColor rounded-lg flex items-center justify-center`}
                      >
                        {data?.url_photo ? (
                          <img
                            src={data?.url_photo}
                            className="w-full h-full md:h-[250px] rounded-lg object-cover object-top "
                          />
                        ) : (
                          <NoImg />
                        )}
                      </button>
                    </div>
                    <article className="w-full flex items-center justify-start">
                      <div className="w-full not-italic flex font-AeonikProMedium text-[12px] md:text-[16px] leading-4 text-black mt-2 md:mt-3 md:mr-2 md:ml-2">
                        {languageDetector?.typeLang === "ru" && data?.name_ru}
                        {languageDetector?.typeLang === "uz" && data?.name_uz}
                        <p className="not-italic ml-1 md:ml-2 font-AeonikProRegular text-xs leading-4 text-gray-500">
                          ({data?.products_count || "0"})
                        </p>
                      </div>
                    </article>
                  </div>
                );
              } else {
                if (i > 8) {
                  return false;
                } else {
                  return (
                    <div
                      onClick={() =>
                        goSectionId(
                          languageDetector?.typeLang === "ru" && data?.name_ru,
                          languageDetector?.typeLang === "uz" && data?.name_uz
                        )
                      }
                      key={data?.id}
                      className="w-[100%] h-[170px]"
                    >
                      <figure className="w-[100%] xs:w-[196px] h-[140px] xs:h-fit border border-searchBgColor flex items-center justify-center  bg-btnBgColor rounded-xl xs:rounded">
                        {/* <NoImg /> */}
                        {data?.url_photo ? (
                          <img
                            src={data?.url_photo}
                            className="w-full h-full rounded-lg object-cover object-top"
                          />
                        ) : (
                          <NoImg />
                        )}
                      </figure>
                      <article className="w-full py-1 flex items-center">
                        <div className="not-italic flex items-center font-AeonikProMedium text-xs xs:text-base leading-6 text-black">
                          {languageDetector?.typeLang === "ru" && data?.name_ru}
                          {languageDetector?.typeLang === "uz" && data?.name_uz}
                          <p className="not-italic lex items-center font-AeonikProRegular text-xs xs:text-sm leading-4 text-gray-500 ml-1">
                            ({data?.products_count || "0"})
                          </p>
                        </div>
                      </article>
                    </div>
                  );
                }
              }
            })}
          </div>

          {data?.getMainProductCard?.sections?.length > 6 ? (
            <div className="w-full hidden md:flex justify-center items-center mt-10">
              <button
                className={`w-fit cursor-pointer active:scale-95 active:opacity-70 flex items-center h-[40px] xs:h-[52px] px-4 ll:px-10 rounded-xl border ${seasonDetector?.BtnSeason}`}
                onClick={() => setMore(!more)}
              >
                <p className="not-italic font-AeonikProMedium text-sm xs:text-base leading-4 text-center">
                  {more ? t("Text2") : t("Text1")}
                </p>
                <div className="ml-2 ">
                  {more ? (
                    <div>
                      <span className="xs:hidden">
                        <ShowMoreBackIcon
                          colors={seasonDetector?.ColorSeason}
                          width={18}
                        />
                      </span>
                      <span className="hidden xs:block">
                        <ShowMoreBackIcon
                          colors={seasonDetector?.ColorSeason}
                          width={24}
                        />
                      </span>
                    </div>
                  ) : (
                    <span className="block rotate-90">
                      <SircleNext colors={seasonDetector?.ColorSeason} />
                    </span>
                  )}
                </div>
              </button>
            </div>
          ) : null}
          {data?.getMainProductCard?.sections?.length > 9 ? (
            <div className="w-full flex md:hidden justify-center items-center mt-10">
              <button
                className={`w-fit cursor-pointer active:scale-95 active:opacity-70 flex items-center h-[40px] xs:h-[52px] px-4 ll:px-10 rounded-xl border ${seasonDetector?.BtnSeason}`}
                onClick={() => setMore(!more)}
              >
                <p className="not-italic font-AeonikProMedium text-sm xs:text-base leading-4 text-center">
                  {more ? t("Text2") : t("Text1")}
                </p>
                <div className="ml-2 ">
                  {more ? (
                    <div>
                      <span className="xs:hidden">
                        <ShowMoreBackIcon
                          colors={seasonDetector?.ColorSeason}
                          width={18}
                        />
                      </span>
                      <span className="hidden xs:block">
                        <ShowMoreBackIcon
                          colors={seasonDetector?.ColorSeason}
                          width={24}
                        />
                      </span>
                    </div>
                  ) : (
                    <span className="block rotate-90">
                      <SircleNext colors={seasonDetector?.ColorSeason} />
                    </span>
                  )}
                </div>
              </button>
            </div>
          ) : null}

          <div className="w-full mt-[60px] hidden xs:block">
            {data?.getMainProductCard?.shops?.length > 8 ? (
              <Slider
                {...settings1}
                className="w-[100%] flex xs:justify-between  px-[1px]"
              >
                {data?.getMainProductCard?.shops?.map((data) => {
                  // console.log(data, "shops-data");
                  return (
                    <div
                      key={data?.id}
                      onClick={() => {
                        goDetail(data?.id, data?.name);
                        // setDressInfo({
                        //   ...dressInfo,
                        //   linkedFrom: "mainPageShopsList",
                        // });
                      }}
                      className="!w-[80px] h-[80px] md:!w-[120px] md:h-[120px] cursor-pointer overflow-hidden rounded-full bg-white flex items-center justify-center select-none border border-solid border-searchBgColor"
                    >
                      <figure
                        style={{
                          backgroundImage: `url(${data?.url_logo_photo})`,
                          backgroundPosition: "center center",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                        className=" h-full w-full flex items-center justify-center rounded-full bg-white"
                      ></figure>
                    </div>
                  );
                })}
              </Slider>
            ) : (
              <section className="w-full box-border flex flex-row justify-start gap-x-8 mt-4 mb-6 md:my-6">
                {data?.getMainProductCard?.shops?.map((data) => {
                  return (
                    <div
                      key={data?.id}
                      onClick={() => {
                        goDetail(data?.id, data?.name);
                        // setDressInfo({
                        //   ...dressInfo,
                        //   linkedFrom: "mainPageShopsList",
                        // });
                      }}
                      className="!w-[80px] h-[80px] md:!w-[120px] md:h-[120px] cursor-pointer overflow-hidden rounded-full bg-white flex items-center justify-center select-none border border-solid border-searchBgColor"
                    >
                      <figure
                        style={{
                          backgroundImage: `url(${data?.url_logo_photo})`,
                          backgroundPosition: "center center",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                        className=" h-full w-full flex items-center justify-center rounded-full bg-white"
                      ></figure>
                    </div>
                  );
                })}
              </section>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
export default React.memo(MainPageSliders);
