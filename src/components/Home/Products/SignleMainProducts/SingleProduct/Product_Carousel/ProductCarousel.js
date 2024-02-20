import React, { useState, useEffect, useRef, useContext } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";
import {
  BrushColorIcons,
  MenuCloseIcons,
  VideoStoreIcons,
} from "../../../../../../assets/icons";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";
import { SliderPhotosColorContext } from "../../../../../../ContextHook/SliderPhotosColor";
import { Popover } from "antd";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { HomeMainDataContext } from "../../../../../../ContextHook/HomeMainData";

const ProductCarousel = ({ show, data }) => {
  const [colorId] = useContext(SliderPhotosColorContext);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [dressInfo] = useContext(dressMainData);
  const [nav2] = useState();

    const [, , wishList, setWishlist] = useContext(HomeMainDataContext);
  const slider1 = useRef(null);

  const [sliderState, setSliderState] = useState(0);

  useEffect(() => {
    slider1.current.slickGoTo(sliderState);
  }, [sliderState]);

  const NextArrowModal = (props) => {
    const { onClick } = props;
    return (
      <main
        className={`absolute text-center cursor-pointer no-underline opacity-70 w-[44px] h-[44px] hidden md:flex items-center justify-center top-[50%] z-10 right-[15px] md:right-[-70px] rounded-full bg-bgColor duration-200 border  border-searchBgColor  `}
        onClick={onClick}
      >
        <button className="next">
          <GrFormNext size={20} />
        </button>
      </main>
    );
  };
  const PrevArrowModal = (props) => {
    const { onClick } = props;
    return (
      <main
        className={`absolute text-center cursor-pointer no-underline opacity-70 w-[44px] h-[44px] hidden md:flex items-center justify-center top-[50%] z-10 left-[15px] md:left-[-70px] rounded-full bg-bgColor duration-200 border  border-searchBgColor`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </main>
    );
  };

  let settingsModal = {
    nextArrow: <NextArrowModal />,
    prevArrow: <PrevArrowModal />,
    infinite: true,
    dots: false,
    speed: 500,
  };

  const [modalOfCarsouel, setModalOfCarsouel] = useState(false);

  const sliderRef = useRef();

  const handleClickCarosuel = (index) => {
    sliderRef.current.slickGoTo(index);
    setModalOfCarsouel(true);
  };

  useEffect(() => {
    if (modalOfCarsouel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOfCarsouel]);

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <main
        className={`md:hidden absolute text-center cursor-pointer no-underline opacity-50 w-8 h-8 group-hover:flex flex items-center justify-center top-[50%] z-10 right-[20px] rounded-lg md:rounded-full bg-bgColor duration-200 border  border-searchBgColor`}
        onClick={onClick}
      >
        <button className="next">
          <GrFormNext size={20} />
        </button>
      </main>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <main
        className={`md:hidden absolute text-center cursor-pointer no-underline opacity-50 w-8 h-8 group-hover:flex flex items-center justify-center top-[50%] z-10 left-[20px] rounded-lg md:rounded-full bg-bgColor duration-200 border  border-searchBgColor`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </main>
    );
  };

  let settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    dots: false,
    speed: 500,
  };

  // const [SizeBtnList] = useState([
  //   { id: 1, size_in_letters: "XXS", size_in_numbers: "11-23" },
  //   { id: 2, size_in_letters: "XS", size_in_numbers: "11-23" },
  //   { id: 3, size_in_letters: "S", size_in_numbers: "25-36" },
  //   { id: 4, size_in_letters: "M", size_in_numbers: "25-36" },
  //   { id: 5, size_in_letters: "L", size_in_numbers: "36-44" },
  //   { id: 6, size_in_letters: "XL", size_in_numbers: "36-44" },
  //   { id: 7, size_in_letters: "XXL", size_in_numbers: "36-44" },
  //   { id: 8, size_in_letters: "3XL", size_in_numbers: "36-44" },
  //   { id: 9, size_in_letters: "4XL", size_in_numbers: "36-44" },
  //   { id: 10, size_in_letters: "5XL", size_in_numbers: "36-44" },
  //   { id: 11, size_in_letters: "6XL", size_in_numbers: "36-44" },
  // ]);

  // let settings2 = {
  //   dots: false,
  //   infinite: true,
  //   swipeToSlide: true,
  //   speed: 500,
  // };


  // filtered for modal

  let filteredForModal = data?.product?.photos?.filter(
    (item) => item?.product_color_id === colorId
  );

  // console.log(data, "data");

  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedSize, setSelectedSize] = useState(null);

  const contentSize = (data) => {
    if (data?.category_id === "1") {
      return (
        <section className="w-[220px] h-fit p-[5px] ">
          <article className="w-full flex flex-col items-center justify-start font-AeonikProMedium text-sm text-center">
            <div className="w-full flex items-center justify-start text-base font-AeonikProRegular mb-[10px]">
              Размер в числах:
              <span className="ml-auto">
                {data?.min_head_girth}{" "}
                {data?.max_head_girth ? "- " + data?.max_head_girth : null}
              </span>
            </div>
          </article>
        </section>
      );
    } else if (data?.category_id === "2") {
      return (
        <section className="w-[220px] h-[135px] p-[5px] ">
          <article className="w-full flex flex-col items-center justify-start font-AeonikProMedium text-sm text-center">
            <div className="w-full flex items-center justify-start text-base font-AeonikProRegular mb-[10px]">
              Размер в числах:
              <span className="ml-auto">
                {data?.min_wear_size}{" "}
                {data?.max_wear_size ? "- " + data?.max_wear_size : null}
              </span>
            </div>
            <div className="w-full flex items-center justify-start text-base font-AeonikProRegular mb-[10px]">
              Обхват груди, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">
                {data?.min_chest_girth}{" "}
                {data?.max_chest_girth ? "- " + data?.max_chest_girth : null}
              </span>
            </div>
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular mb-[10px]">
              Обхват талии, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">
                {data?.min_waist_girth}{" "}
                {data?.max_waist_girth ? "- " + data?.max_waist_girth : null}
              </span>
            </div>
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular">
              Обхват бедер, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">
                {data?.min_hip_girth}{" "}
                {data?.max_hip_girth ? "- " + data?.max_hip_girth : null}
              </span>
            </div>
          </article>
        </section>
      );
    } else if (data?.category_id === "3") {
      return (
        <section className="w-[220px] h-fit p-[5px] ">
          <article className="w-full flex flex-col items-center justify-start font-AeonikProMedium text-sm text-center">
            <div className="w-full flex items-center justify-start text-base font-AeonikProRegular mb-[10px]">
              Размер в числах:
              <span className="ml-auto">
                {data?.min_wear_size}{" "}
                {data?.max_wear_size ? "- " + data?.max_wear_size : null}
              </span>
            </div>
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular mb-[10px]">
              Обхват талии, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">
                {data?.min_waist_girth}{" "}
                {data?.max_waist_girth ? "- " + data?.max_waist_girth : null}
              </span>
            </div>
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular mb-[10px]">
              Обхват бедер, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">
                {data?.min_hip_girth}{" "}
                {data?.max_hip_girth ? "- " + data?.max_hip_girth : null}
              </span>
            </div>

            <div className="w-full flex items-center justify-start text-base font-AeonikProRegular mb-[10px]">
              Рост, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">
                {data?.min_height}{" "}
                {data?.max_height ? "- " + data?.max_height : null}
              </span>
            </div>
          </article>
        </section>
      );
    } else if (data?.category_id === "4") {
      return (
        <section className="w-[220px] h-fit p-[5px] ">
          <article className="w-full flex flex-col items-center justify-start font-AeonikProMedium text-sm text-center">
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular mb-[10px]">
              Размер в числах, <span className="text-[#a5a5a5] ml-1">в см</span>
              :<span className="ml-auto">{data?.wear_size}</span>
            </div>
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular">
              Длина стопы, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">
                {data?.min_foot_length}{" "}
                {data?.max_foot_length ? "- " + data?.max_foot_length : null}
              </span>
            </div>
          </article>
        </section>
      );
    } else if (data?.category_id === "5") {
      return (
        <section className="w-[220px] h-fit p-[5px] ">
          <article className="w-full flex flex-col items-center justify-start font-AeonikProMedium text-sm text-center">
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular mb-[10px]">
              Размер в числах, <span className="text-[#a5a5a5] ml-1">в см</span>
              :<span className="ml-auto">{data?.wear_size}</span>
            </div>
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular mb-[10px]">
              Длина, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">{data?.length}</span>
            </div>
            <div className="w-full flex items-center justify-start text-base font-AeonikProRegular mb-[10px]">
              Ширина, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">{data?.width}</span>
            </div>
          </article>
        </section>
      );
    }
  };

  return (
    <main className="w-full md:w-fit h-full ">
      <div className="w-full">
        <section
          onClick={() => setModalOfCarsouel(false)}
          className={`fixed inset-0 z-[200] duration-200 w-full h-[100vh] bg-black opacity-60 ${
            modalOfCarsouel ? "" : "hidden"
          }`}
        ></section>
        <section
          className={`fixed z-[201] rounded-lg bg-white w-full md:w-fit h-fit mx-auto my-auto md:m-auto cursor-pointer flex flex-col items-center justify-center inset-0 ${
            modalOfCarsouel ? "" : "hidden"
          }`}
        >
          <button
            onClick={() => setModalOfCarsouel(false)}
            className="absolute flex items-center justify-center w-[45px] h-[45px] top-[-60px] right-2 md:top-3 z-40 md:right-[-80px] rounded-full bg-bgColor opacity-50 "
          >
            <MenuCloseIcons width={20} height={20} colors="#fff" />
          </button>
          <div className="w-full h-full">
            <Slider
              className="relative w-full h-fit md:!w-[750px] md:h-[100vh] showpageSlider !overflow-visible bg-white md:rounded-lg"
              {...settingsModal}
              ref={sliderRef}
            >
              {colorId
                ? data?.product?.photos?.map((data, i) => {
                    if (data?.product_color_id === colorId) {
                      return (
                        <article key={i}>
                          <figure className="relative overflow-hidden h-fit w-full md:h-[100vh] md:rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                            <img src={data?.url_photo} alt="" />
                            <figcaption className="flex md:hidden w-full absolute items-center justify-between px-4 opacity-80 text-sm font-AeonikProMedium left-0 right-0 bottom-4 ">
                              <span className="bg-bgCard pt-1 gap-x-[3px] rounded-[40%] px-3 py-1 flex items-center leading-5 tracking-wider  ">
                                {/* <p>{data.id}</p>
                                <p>{data?.product?.photos?.length}</p> */}
                              </span>
                            </figcaption>
                          </figure>
                        </article>
                      );
                    }
                  })
                : data?.product?.photos?.map((data, i) => {
                    return (
                      <article key={i}>
                        <figure className="relative overflow-hidden h-fit w-full md:h-[100vh] md:rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                          <img src={data?.url_photo} alt="" />
                          <figcaption className="flex md:hidden w-full absolute items-center justify-between px-4 opacity-80 text-sm font-AeonikProMedium left-0 right-0 bottom-4 ">
                            <span className="bg-bgCard pt-1 gap-x-[3px] rounded-[40%] px-3 py-1 flex items-center leading-5 tracking-wider  ">
                              {/* <p>{data.id}</p>
                              <p>{data?.product?.photos?.length}</p> */}
                            </span>
                          </figcaption>
                        </figure>
                      </article>
                    );
                  })}
            </Slider>
          </div>
        </section>
      </div>

      {screenSize.width >= 768 ? (
        <section
          className={`w-full h-[620px] flex flex-col md:flex-row md:gap-x-[10px] md:sticky duration-500 ${
            show ? "visible z-20 top-[110px]" : "visible z-20 top-[16px]"
          }`}
        >
          <article className="flex w-[93px] flex-col">
            {colorId
              ? filteredForModal?.map((data, i) => {
                  if (data?.product_color_id === colorId) {
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          setSliderState(i);
                        }}
                        className="mb-2"
                      >
                        <figure
                          key={data?.id}
                          style={{
                            backgroundImage: `url("${data?.url_photo}")`,
                            backgroundColor: "rgba(0,0,0,0.6)",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                          className={`${
                            sliderState === i
                              ? "border-2 border-[#007DCA]"
                              : "border border-searchBgColor"
                          } !w-[90px] cursor-pointer !h-[120px]  bg-btnBgColor rounded-lg backdrop-blur-md flex items-center justify-center`}
                        ></figure>
                      </div>
                    );
                  }
                })
              : data?.product?.photos?.map((data, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        setSliderState(i);
                      }}
                      className="mb-2"
                    >
                      <figure
                        key={data?.id}
                        style={{
                          backgroundImage: `url("${data?.url_photo}")`,
                          backgroundColor: "rgba(0,0,0,0.6)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                        className={`${
                          sliderState === i
                            ? "border-2 border-[#007DCA]"
                            : "border border-searchBgColor"
                        }  !w-[90px] cursor-pointer !h-[120px] bg-btnBgColor rounded-lg backdrop-blur-md flex items-center justify-center`}
                      ></figure>
                    </div>
                  );
                })}
          </article>

          <article className="group mx-auto md:w-[480px] md:h-[620px]">
            <Slider
              className="w-full h-full rounded-lg"
              asNavFor={nav2}
              ref={slider1}
              {...settings}
              initialSlide={0}
              afterChange={(current) => {
                setSliderState(current);
              }}
            >
              {colorId
                ? filteredForModal?.map((data, i) => {
                    if (data?.product_color_id === colorId) {
                      return (
                        <article
                          key={i}
                          onClick={() => {
                            handleClickCarosuel(i);
                          }}
                        >
                          <figure
                            style={{
                              backgroundImage: `url("${data?.url_photo}")`,
                              backgroundColor: "rgba(0,0,0,0.85)",
                              backgroundPosition: "center center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundBlendMode: "darken",
                            }}
                            className="relative w-full h-[620px] overflow-hidden border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center cursor-pointer"
                          >
                            <img
                              className="w-full h-fit"
                              src={data?.url_photo}
                              alt=""
                            />

                            <figcaption className="flex md:hidden w-full absolute items-center justify-between px-4 opacity-80 text-sm font-AeonikProMedium left-0 right-0 bottom-4 ">
                              <span className="bg-bgCard pt-1 gap-x-[3px] rounded-[40%] px-3 py-1 flex items-center leading-5 tracking-wider  ">
                                <p> {data.id}</p>
                                <p>{data?.product?.photos?.length}</p>
                              </span>
                              <span className="w-fit flex items-center p-2 gap-x-2 rounded-lg bg-bgCard border border-searchBgColor">
                                <p className="flex items-center ">
                                  <VideoStoreIcons />
                                </p>
                                <p className="flex items-center not-italic font-AeonikProRegular text-sm leading-4 text-black">
                                  Видео
                                </p>
                              </span>
                            </figcaption>
                          </figure>
                        </article>
                      );
                    }
                  })
                : data?.product?.photos?.map((data, i) => {
                    return (
                      <article
                        key={i}
                        onClick={() => {
                          handleClickCarosuel(i);
                        }}
                      >
                        <figure
                          style={{
                            backgroundImage: `url("${data?.url_photo}")`,
                            backgroundColor: "rgba(0,0,0,0.85)",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundBlendMode: "darken",
                          }}
                          className="relative w-full h-[620px] overflow-hidden border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center cursor-pointer"
                        >
                          <img
                            className="w-full h-fit"
                            src={data?.url_photo}
                            alt=""
                          />

                          <figcaption className="flex md:hidden w-full absolute items-center justify-between px-4 opacity-80 text-sm font-AeonikProMedium left-0 right-0 bottom-4 ">
                            <span className="bg-bgCard pt-1 gap-x-[3px] rounded-[40%] px-3 py-1 flex items-center leading-5 tracking-wider  ">
                              <p> {data.id}</p>
                              <p>{data?.product?.photos?.length}</p>
                            </span>
                            <span className="w-fit flex items-center p-2 gap-x-2 rounded-lg bg-bgCard border border-searchBgColor">
                              <p className="flex items-center ">
                                <VideoStoreIcons />
                              </p>
                              <p className="flex items-center not-italic font-AeonikProRegular text-sm leading-4 text-black">
                                Видео
                              </p>
                            </span>
                          </figcaption>
                        </figure>
                      </article>
                    );
                  })}
            </Slider>
          </article>
        </section>
      ) : (
        <section className="w-full h-ffull flex flex-col">
          {/* 1 */}
          <article className="w-full h-full widthInherit mx-auto">
            <Slider
              className="w-full h-[482px] rounded-lg"
              ref={slider1}
              {...settings}
            >
              {colorId
                ? filteredForModal?.map((data, i) => {
                    if (data?.product_color_id === colorId) {
                      return (
                        <article
                          key={i}
                          onClick={() => {
                            handleClickCarosuel(i);
                          }}
                        >
                          <figure className="relative w-full h-[478px] overflow-hidden border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center cursor-pointer">
                            <img
                              className="w-full h-full object-cover"
                              src={data?.url_photo}
                              alt=""
                            />
                          </figure>
                        </article>
                      );
                    }
                  })
                : data?.product?.photos?.map((data, i) => {
                    return (
                      <article
                        key={i}
                        onClick={() => {
                          handleClickCarosuel(i);
                        }}
                      >
                        <figure className="relative w-full h-[478px] object-cover overflow-hidden border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center cursor-pointer">
                          <img
                            className="w-full h-full object-cover"
                            src={data?.url_photo}
                            alt=""
                          />
                        </figure>
                      </article>
                    );
                  })}
            </Slider>
          </article>

          {/* 2 */}
          <article className="w-full flex md:hidden items-center justify-between mb-6 mt-4">
            <section className="w-fit flex items-center">
              <span className="text-base font-AeonikProMedium mr-[5px]">
                от
              </span>
              <p className="flex font-AeonikProMedium text-[24px] text-black mx-[5px]">
                {data?.product?.cost?.discount_price
                  ? parseInt(data?.product?.cost?.discount_price)
                      ?.toLocaleString()
                      ?.split(",")
                      .join(" ")
                  : parseInt(data?.product?.cost?.price)
                      ?.toLocaleString()
                      ?.split(",")
                      .join(" ")}{" "}
                <span
                  className={`${
                    data?.product?.cost?.discount_price ? "hidden" : "flex ml-2"
                  }`}
                >
                  сум
                </span>
              </p>
              {data?.product?.cost?.discount_price ? (
                <p className="font-AeonikProRegular line-through text-[16px] text-setTexOpacity">
                  {parseInt(data?.product?.cost?.price)
                    ?.toLocaleString()
                    ?.split(",")
                    .join(" ")}{" "}
                </p>
              ) : null}
            </section>
            <section
              className={`w-fit ${dressInfo?.TextColorSeason} items-center text-sm flex ml-8`}
            >
              <p className="font-AeonikProRegular text-right">В наличии:</p>
              <p className="ml-2 font-AeonikProMedium text-base text-right">
                {data?.product?.sizes_sum_amount}
              </p>
            </section>
          </article>

          {/* 3 */}
          <article className="w-full flex flex-col">
            <div className="w-full flex items-center justify-between mb-4 text-base">
              <div className="w-fit flex items-center">
                <BrushColorIcons colors={"#000"} />
                <p className="font-AeonikProRegular mr-2 ml-[6px]">Цвет:</p>
                <span className="font-AeonikProMedium">
                  {data?.product?.colors[0]?.name_ru}
                </span>
              </div>
              <button
                onClick={() => {
                  if (wishList?.includes(data?.product?.id)) {
                    setWishlist(
                      wishList?.filter((item) => item !== data?.product?.id)
                    );
                  } else {
                    setWishlist([...wishList, data?.product?.id]);
                  }
                }}
                className="w-10 h-10 flex md:hidden items-center justify-center rounded-xl active:scale-95 border border-searchBgColor bg-btnBgColor"
              >
                {wishList?.includes(data?.product?.id) ? (
                  <BsHeartFill color="#d50000" />
                ) : (
                  <BsHeart />
                )}
              </button>
            </div>

            <article className="flex w-[93px] flex-row gap-x-1">
              {colorId
                ? filteredForModal?.map((data, i) => {
                    if (data?.product_color_id === colorId) {
                      return (
                        <div
                          key={i}
                          onClick={() => {
                            setSliderState(i);
                          }}
                          className="mb-2"
                        >
                          <figure
                            key={data?.id}
                            style={{
                              backgroundImage: `url("${data?.url_photo}")`,
                              backgroundColor: "rgba(0,0,0,0.6)",
                              backgroundPosition: "center center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                            className={`${
                              sliderState === i
                                ? "border-2 border-[#007DCA]"
                                : "border border-searchBgColor"
                            } !w-[72px] cursor-pointer !h-[96px] bg-btnBgColor rounded-lg backdrop-blur-md flex items-center justify-center`}
                          ></figure>
                        </div>
                      );
                    }
                  })
                : data?.product?.photos?.map((data, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          setSliderState(i);
                        }}
                      >
                        <figure
                          key={data?.id}
                          style={{
                            backgroundImage: `url("${data?.url_photo}")`,
                            backgroundColor: "rgba(0,0,0,0.6)",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                          className={`${
                            sliderState === i
                              ? "border-2 border-[#007DCA]"
                              : "border border-searchBgColor"
                          }  !w-[72px] cursor-pointer !h-[96px] bg-btnBgColor rounded-lg backdrop-blur-md flex items-center justify-center`}
                        ></figure>
                      </div>
                    );
                  })}
            </article>
          </article>

          {/* 4 */}
          <article className="w-full flex flex-col mt-4">
            {/* <Slider
              // asNavFor={nav1}
              {...settings2}
              className="w-full flex flex-row flex-wrap rounded-lg"
            >
              {SizeBtnList?.map((data) => {
                return (
                  <article
                    key={data?.id}
                    className="!w-[62px] !h-[39px] cursor-pointer border border-searchBgColor rounded-lg flex items-center justify-center"
                  >
                    <div className="flex flex-col items-center justify-center py-1">
                      <div className="text-sm font-AeonikProMedium leading-4">
                        {data.size_in_letters}
                      </div>
                      <div className="text-xs font-AeonikProRegular text-[#757575]">
                        {data.size_in_numbers}
                      </div>
                    </div>
                  </article>
                );
              })}
            </Slider> */}

            {data?.product?.category_id === "2"
              ? data?.product?.sizes?.map((data) => {
                  if (data?.shop_location_id == selectedLocation?.id) {
                    return (
                      <div
                        key={data?.id}
                        onClick={() => {
                          setSelectedSize(data);
                        }}
                        className={`${
                          data?.id === selectedSize?.id
                            ? "border-fullBlue"
                            : "border-[#dadada]"
                        }  h-fit w-fit mt-4 rounded-lg border   hover:border-fullBlue`}
                      >
                        <Popover
                          trigger="hover"
                          content={() => contentSize(data)}
                          className={`h-11 w-[80px] md:w-auto ${
                            data?.amount === "0"
                              ? "bg-[#f6f6f9] text-[#d3d4dd]"
                              : ""
                          }  cursor-pointer rounded-lg  px-4 flex flex-col items-center justify-center`}
                        >
                          <p
                            className={`font-AeonikProMedium text-sm uppercase text-center ${
                              data?.amount === "0"
                                ? "text-[#d3d4dd]"
                                : "text-black"
                            } `}
                          >
                            {data?.letter_size}
                          </p>
                          {data?.letter_size ? (
                            <span
                              className={`text-[10px] font-AeonikProRegular ${
                                data?.amount === "0"
                                  ? "text-[#d3d4dd]"
                                  : "text-[#757575]"
                              } `}
                            >
                              {data?.min_wear_size}{" "}
                              {data?.max_wear_size
                                ? "- " + data?.max_wear_size
                                : null}
                            </span>
                          ) : (
                            <p
                              className={`font-AeonikProMedium text-sm uppercase text-center ${
                                data?.amount === "0"
                                  ? "text-[#d3d4dd]"
                                  : "text-black"
                              }`}
                            >
                              {data?.min_wear_size}{" "}
                              {data?.max_wear_size
                                ? "- " + data?.max_wear_size
                                : null}
                            </p>
                          )}
                        </Popover>
                      </div>
                    );
                  }
                })
              : null}
          </article>
        </section>
      )}
    </main>
  );
};
export { ProductCarousel };
