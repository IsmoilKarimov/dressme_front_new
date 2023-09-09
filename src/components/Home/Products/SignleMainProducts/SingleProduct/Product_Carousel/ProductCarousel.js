import React, { useState, useEffect, useRef, useContext } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";
import { BrushColorIcons, DiscountShapeIcons, LocationColoursIcons, VideoStoreIcons } from "../../../../../../assets/icons";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";

const ProductCarousel = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [dressInfo] = useContext(dressMainData);

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

  const [imgGroup] = useState([
    {
      id: 1,
      action: true,
      img: "https://images.uzum.uz/ch15okj57mg9720fq5h0/original.jpg",
    },
    {
      id: 2,
      action: false,
      img: "https://images.uzum.uz/cgcp9n7g49devoab8a50/t_product_240_high.jpg",
    },
    {
      id: 3,
      action: false,
      img: "https://images.uzum.uz/ch15okng49devoaengt0/original.jpg",
    },
    {
      id: 4,
      action: false,
      img: "https://images.uzum.uz/ch15okvhj8j9g69e280g/original.jpg",
    },
    {
      id: 5,
      action: false,
      img: "https://images.uzum.uz/cgcphi7hgiov1qif46p0/original.jpg",
    },
    {
      id: 6,
      action: false,
      img: "https://images.uzum.uz/ch0g2rr57mg9720fmb9g/t_product_240_high.jpg",
    },
    {
      id: 7,
      action: false,
      img: "https://images.uzum.uz/ch0g2rvhj8j9g69dv4v0/original.jpg",
    },
    {
      id: 8,
      action: false,
      img: "https://images.uzum.uz/ch0g2rvhj8j9g69dv4vg/original.jpg",
    },
    {
      id: 9,
      action: false,
      img: "https://images.uzum.uz/cgl7vevhj8j9g69br4e0/original.jpg",
    },
  ]);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <main
        className={`md:hidden absolute text-center cursor-pointer no-underline opacity-50 w-8 h-8 group-hover:flex flex items-center justify-center top-[50%] z-10 right-[20px] rounded-lg md:rounded-full bg-bgColor duration-200 border  border-borderColorCard md:border-searchBgColor`}
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
        className={`md:hidden absolute text-center cursor-pointer no-underline opacity-50 w-8 h-8 group-hover:flex flex items-center justify-center top-[50%] z-10 left-[20px] rounded-lg md:rounded-full bg-bgColor duration-200 border  border-borderColorCard md:border-searchBgColor`}
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
  let settings1 = {
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 390,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="w-full md:w-fit h-full">
      {screenSize.width >= 768 ? (
        <section className="w-full h-[600px] flex flex-col md:flex-row md:w-fit md:gap-x-[10px]">
          <article className=" flex w-[90px] flex-col">
            <Slider
              asNavFor={nav1}
              ref={slider2}
              slidesToShow={6}
              swipeToSlide={true}
              focusOnSelect={true}
              vertical={true}
              className="flex flex-col flex-wrap w-full h-full pt-0 rounded-lg"
            >
              {imgGroup?.map((data) => {
                return (
                  <figure
                    key={data?.id}
                    className="!w-[90px] cursor-pointer !h-[120px] mt-[-2.5px] border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center"
                  >
                    <img
                      className="w-full h-full rounded-lg"
                      src={data?.img}
                      alt=""
                    />
                  </figure>
                );
              })}
            </Slider>
          </article>
          <article className="group widthInherit mx-auto h-[482px] md:w-[480px] md:h-[600px]">
            <Slider
              className="w-full h-full rounded-lg"
              asNavFor={nav2}
              ref={slider1}
              {...settings}
            >
              {imgGroup?.map((data) => {
                return (
                  <article key={data?.id}>
                    <figure className="relative w-full h-full overflow-hidden border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center">
                      <img className="w-full h-fit" src={data?.img} alt="" />
                      <figcaption className="flex md:hidden w-full absolute items-center justify-between px-4 opacity-80 text-sm font-AeonikProMedium left-0 right-0 bottom-4 ">
                        <span className="bg-bgCard pt-1 gap-x-[3px] rounded-[40%] px-3 py-1 flex items-center leading-5 tracking-wider  ">
                          <p> {data.id}</p>/<p>{imgGroup.length}</p>
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
        <section className="w-full h-fit flex flex-col md:flex-row md:w-fit md:gap-x-[10px] ">
          <article className="widthInherit mx-auto h-[482px] md:w-[480px] md:h-[600px]">
            <Slider
              className="w-full h-full rounded-lg"
              asNavFor={nav2}
              ref={slider1}
              {...settings}
            >
              {imgGroup?.map((data) => {
                return (
                  <article key={data?.id}>
                    <figure className="relative w-full h-full overflow-hidden border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center">
                      <section className="absolute w-[84px] h-9 md:w-[100px] top-3 right-3 md:h-11 cursor-pointer flex items-center justify-center bg-bgCard border border-searchBgColor rounded-lg ml-8 active:scale-95">
                        <DiscountShapeIcons />
                        <action className="ml-[6px] font-AeonikProMedium text-sm md:text-sm text-red-700">
                          -30%
                        </action>
                      </section>
                      <img className="w-full h-fit" src={data?.img} alt="" />
                      <figcaption className="flex md:hidden w-full absolute items-center justify-between px-4 opacity-80 text-sm font-AeonikProMedium left-0 right-0 bottom-4 ">
                        <span className="bg-bgCard pt-1 gap-x-[3px] rounded-[40%] px-3 py-1 flex items-center leading-5 tracking-wider  ">
                          <p> {data.id}</p>/<p>{imgGroup.length}</p>
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
              
          {/* Price For Mobile */}
          <article className="w-full flex md:hidden items-center justify-between mb-6 mt-4">
            <section className="w-fit flex items-center">
              <span className="text-base font-AeonikProMedium mr-[5px]">от</span>
              <p className="block font-AeonikProMedium text-[24px] text-black mr-[5px]">
                452 000
              </p>
              <p className="font-AeonikProRegular line-through text-[16px] text-setTexOpacity">
                652 000
              </p>
            </section>
            <section
              className={`w-fit ${dressInfo?.TextColorSeason} items-center text-sm flex ml-8`}
            >
              <p className="font-AeonikProRegular text-right">
                В наличии:
              </p>
              <p className="ml-2 font-AeonikProMedium text-base text-right">
                28
              </p>
            </section>
          </article>

          <article className="w-full flex flex-col md:hidden md:mt-0">
            
            <div className="w-full flex items-center mb-4 text-base">
              <BrushColorIcons colors={"#000"} />
              <p className="font-AeonikProRegular mr-2 ml-[6px]">Цвет:</p>
              <span className="font-AeonikProMedium">Синий</span>
            </div>

            <Slider
              asNavFor={nav1}
              ref={slider2}
              // slidesToShow={5}
              swipeToSlide={true}
              focusOnSelect={true}
              vertical={false}
              {...settings1}
              className="flex flex-row flex-wrap pt-0 rounded-lg"
            >
              {imgGroup?.map((data) => {
                return (
                  <figure
                    key={data?.id}
                    className="!w-[72px] cursor-pointer !h-[96px] border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center"
                  >
                    <img
                      className="w-full h-full rounded-lg"
                      src={data?.img}
                      alt=""
                    />
                  </figure>
                );
              })}
            </Slider>

          </article>
        </section>
      )}
    </main>
  );
};
export { ProductCarousel };
