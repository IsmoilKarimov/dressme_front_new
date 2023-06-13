import React, { useState, useEffect, useRef } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";
import {
  BasketIcons,
  SaveBasketIcons,
  VideoStoreIcons,
} from "../../../../../../AssetsMain/icons";

const ProductCarousel = () => {
  const [imgGroup, setImgGroup] = useState([
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
  // console.log(nav1, "nav1");
  //   console.log(nav2);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-8 h-8 flex items-center justify-center top-[50%] z-10	right-[20px] rounded-full bg-bgColor duration-200 border  border-searchBgColor	`}
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
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-8 h-8 flex items-center justify-center top-[50%] z-10	left-[20px] rounded-full bg-bgColor duration-200 border  border-searchBgColor	`}
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
    <div className="w-full md:w-fit h-full">
      <div className="w-full flex flex-col md:flex-row md:w-fit h-[600px] md:gap-x-[10px]">
        <div className="hidden md:flex w-[90px] flex-col">
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
                <div
                  key={data?.id}
                  className="!w-[90px] cursor-pointer !h-[120px] mt-[-2.5px] border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center"
                >
                  <img
                    className="w-full h-full rounded-lg"
                    src={data?.img}
                    alt=""
                  />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="widthInherit mx-auto h-[482px] md:w-[480px] md:h-[600px]">
          <Slider
            className="w-full h-full rounded-lg"
            asNavFor={nav2}
            ref={slider1}
            {...settings}
          >
            {imgGroup?.map((data) => {
              return (
                <div>
                  <div
                    key={data?.id}
                    className="relative w-full h-full overflow-hidden border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center"
                  >
                    <img className="w-full h-fit" src={data?.img} alt="" />
                    <div className="flex md:hidden w-full absolute items-center justify-between px-4 opacity-80 text-sm font-AeonikProMedium left-0 right-0 bottom-4 ">
                      <span className="bg-bgCard pt-1 gap-x-[3px] rounded-[40%] px-3 py-1 flex items-center leading-5 tracking-wider	">
                        <span> {data.id}</span>/<span>{imgGroup.length}</span>
                      </span>
                      <span className="w-fit flex items-center p-2 gap-x-2 rounded-lg bg-bgCard border border-searchBgColor">
                        <span className="flex items-center ">
                          <VideoStoreIcons />
                        </span>
                        <span className="flex items-center not-italic font-AeonikProRegular text-sm leading-4 text-black">
                          Видео
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="flex flex-row md:hidden w-full mt-4 md:mt-0">
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
                <div
                  key={data?.id}
                  className="!w-[72px] cursor-pointer !h-[96px] border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center"
                >
                  <img
                    className="w-full h-full rounded-lg"
                    src={data?.img}
                    alt=""
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export { ProductCarousel };
