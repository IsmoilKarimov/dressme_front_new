import React, { useContext, useState } from "react";

import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { NavLink, useNavigate } from "react-router-dom";
import { NoImg, ShowMoreBackIcon, SircleNext } from "../../../../assets/icons";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";

function MainPageSliders() {
  const [mainData, setMainData] = useContext(HomeMainDataContext);

  const [dressInfo] = useContext(dressMainData);

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
    slidesToShow: 6,
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
  const goDetail = (id) => {
    navigate(`/shopping_store/:${id}`);
  };
  return (
    <main className="flex flex-col justify-center items-center m-0 p-0 box-border">
      <section className="max-w-[1280px] w-[100%] ss:px-4 md:px-0 flex justify-center items-center m-auto border-t md:border-0 border-searchBgColor">
        <section className="w-full box-border flex flex-col justify-center mt-4 mb-6 md:my-6">
          {/* MAIN SLIDER */}
          <div
            className={`w-full ss:h-0 ${more ? "xs:h-0" : "xs:h-auto"
              } overflow-hidden`}
          >
            {mainData?.sections?.length > 6 ? (
              <Slider
                {...settings}
                vertical={false}
                className="w-[100%] flex xs:justify-between flex-wrap  "
              >
                {mainData?.sections?.map((data) => {
                  return (
                    <NavLink
                      to={`/section/${data?.id}`}
                      key={data?.id}
                      className="!w-[99%] h-[260px] rounded-lg "
                    >
                      <div className="w-full h-[230px] bg-btnBgColor p-2 ml-[0.5px] rounded-lg overflow-hidden">
                        <button
                          className={`w-full h-full border border-searchBgColor rounded-lg flex items-center justify-center`}
                        >
                          <NoImg />
                        </button>
                      </div>
                      <article className="h-12.5 flex items-center justify-start">
                        <p className="not-italic flex font-AeonikProMedium text-base leading-4 text-black mt-3 mr-2   ml-2">
                          {data?.name_ru || "type"}
                          <p className="not-italic ml-2 font-AeonikProRegular text-xs leading-4 text-gray-500">
                            ({data?.products_count || "0"})
                          </p>
                        </p>
                      </article>
                    </NavLink>
                  );
                })}
              </Slider>
            ) : (
              <section className="w-full box-border flex flex-row justify-start gap-x-3 mt-4 mb-6 md:my-6">
                {mainData?.sections?.map((data) => {
                  return (
                    <NavLink
                      to={`/section/${data?.id}`}
                      key={data?.id}
                      className="max-w-[192px] w-full h-[260px] rounded-lg "
                    >
                      <div className="w-full h-[230px] bg-btnBgColor p-2 ml-[0.5px] rounded-lg overflow-hidden">
                        <button
                          className={`w-full h-full border border-searchBgColor rounded-lg flex items-center justify-center`}
                        >
                          <NoImg />
                        </button>
                      </div>
                      <article className="h-12.5 flex items-center justify-start">
                        <p className="not-italic flex font-AeonikProMedium text-base leading-4 text-black mt-3 mr-2   ml-2">
                          {data?.name_ru || "type"}
                          <p className="not-italic ml-2 font-AeonikProRegular text-xs leading-4 text-gray-500">
                            ({data?.products_count || "0"})
                          </p>
                        </p>
                      </article>
                    </NavLink>
                  );
                })}
              </section>
            )}
          </div>

          {/* CAROUSEL HIDDEN BLOCK */}
          <div
            className={`${more ? "xs:grid" : "xs:hidden"
              } w-full h-fit grid grid-cols-3 xs:grid-cols-6 gap-2 xs:gap-[22px] overflow-hidden  my-0 py-0 md:pt-7`}
          >
            {mainData?.sections?.map((data, i) => {
              if (more) {
                return (
                  <NavLink
                    to={`/${data?.id}`}
                    key={data?.id}
                    className="!w-[99%] h-[260px] rounded-lg "
                  >
                    <div className="w-full h-[230px] bg-btnBgColor p-2 ml-[0.5px] rounded-lg overflow-hidden">
                      <button
                        className={`w-full h-full border border-searchBgColor rounded-lg flex items-center justify-center`}
                      >
                        <NoImg />
                      </button>
                    </div>
                    <article className="h-12.5 flex items-center justify-start">
                      <p className="not-italic flex font-AeonikProMedium text-base leading-4 text-black mt-3 mr-2   ml-2">
                        {data?.name_ru || "type"}
                        <p className="not-italic ml-2 font-AeonikProRegular text-xs leading-4 text-gray-500">
                          ({data?.products_count || "0"})
                        </p>
                      </p>
                    </article>
                  </NavLink>
                );
              } else {
                if (i > 8) {
                  return false;
                } else {
                  return (
                    <NavLink
                      to={`/${data?.id}`}
                      key={data?.id}
                      className="w-[100%] "
                    >
                      <figure className="w-[100%] xs:w-[196px] h-[140px] xs:h-[224px] border border-searchBgColor flex items-center justify-center p-1 bg-btnBgColor ]	rounded-xl xs:rounded">
                        <NoImg />
                      </figure>
                      <article className="w-full py-1 flex items-center">
                        <p className="not-italic flex items-center font-AeonikProMedium text-sm xs:text-base leading-6 text-black">
                          {data?.name_ru || "type"}
                          <p className="not-italic lex items-center  font-AeonikProRegular text-xs xs:text-sm leading-4 text-gray-500 ml-1">
                            ({data?.products_count || "0"})
                          </p>
                        </p>
                      </article>
                    </NavLink>
                  );
                }
              }
            })}
          </div>

          {mainData?.sections?.length > 6 ? (
            <div className="w-full flex justify-center items-center  mt-10">
              <button
                className={`w-fit cursor-pointer active:scale-95	active:opacity-70 flex items-center h-[40px] xs:h-[52px] px-4 ll:px-10 rounded-xl border ${dressInfo?.BtnSeason}`}
                onClick={() => setMore(!more)}
              >
                <p className="not-italic  font-AeonikProMedium text-sm xs:text-base leading-4 text-center">
                  {more ? "Назад" : "Посмотреть все разделы"}
                </p>
                <p className="ml-2 ">
                  {more ? (
                    <div>
                      <span className="xs:hidden">
                        <ShowMoreBackIcon
                          colors={dressInfo?.ColorSeason}
                          width={18}
                        />
                      </span>
                      <span className="hidden xs:block">
                        <ShowMoreBackIcon
                          colors={dressInfo?.ColorSeason}
                          width={24}
                        />
                      </span>
                    </div>
                  ) : (
                    <SircleNext colors={dressInfo?.ColorSeason} />
                  )}
                </p>
              </button>
            </div>
          ) : null}

          <div className="w-full mt-[60px] hidden xs:block">
            {mainData?.shops ? (
              <Slider
                {...settings1}
                className="w-[100%] flex xs:justify-between  px-[1px]"
              >
                {mainData?.shops?.map((data) => {
                  console.log(data, "shops-data");
                  return (
                    <div
                      key={data?.id}
                      onClick={() => goDetail(data?.id)}
                      className="!w-[98.88%] h-[100px] cursor-pointer  rounded-lg bg-btnBgColor flex items-center justify-center select-none border border-solid border-searchBgColor"
                    >
                      <figure className=" h-full flex items-center justify-center">
                        {/* <NoImg /> */}
                        <img
                          className="h-[95%] w-[80%] object-contain"
                          src={data?.url_logo_photo}
                          alt=""
                        />
                      </figure>
                    </div>
                  );
                })}
              </Slider>
            ) : null}
          </div>
        </section>
      </section>
    </main>
  );
}
export default React.memo(MainPageSliders)
