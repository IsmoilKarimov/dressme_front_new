import React, { useState, useEffect, useRef } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";
import { setpersonIcons, video } from "../../../../../../assets/imgs";

const SingleSetCarousel = () => {
  const [imgGroup, setImgGroup] = useState([
    {
      id: 1,
      action: true,
      img: "https://images.uzum.uz/cgcp9n7g49devoab8a50/t_product_240_high.jpg",
    },
    {
      id: 2,
      action: false,
      img: "https://images.uzum.uz/ch15okj57mg9720fq5h0/original.jpg",
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
  console.log(nav1, "nav1");
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
  return (
    <div className="w-fit h-full ">
      <div className="w-fit flex h-[560px]  gap-x-[5px]">
        <div className="w-[90px] flex flex-col  ">
          {" "}
          <Slider
            asNavFor={nav1}
            ref={slider2}
            slidesToShow={6}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={true}
            className="flex flex-col flex-wrap w-full h-full pt-0"
          >
            {imgGroup?.map((data) => {
              return (
                <div
                  key={data?.id}
                  className="!w-[85px] cursor-pointer !h-[112px] mt-[-2.5px] border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center"
                >
                  <img className="w-full h-full" src={data?.img} alt="" />{" "}
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="w-[420px] h-[560px]  ">
          <Slider
            className="w-full h-full rounded-lg"
            asNavFor={nav2}
            ref={slider1}
            {...settings}
          >
            {imgGroup?.map((data) => {
              return (
                <div
                  key={data?.id}
                  className="w-full h-full overflow-hidden border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center"
                >
                  <img className="w-[420px] h-[560px]" src={data?.img} alt="" />{" "}
                  <div className="w-[380px]   flex absolute top-2 mx-2  justify-end ">
                    <p className="w-fit cursor-pointer bg-bgCard px-4 duration-300 rounded-lg overflow-hidden border border-searchBgColor flex items-center justify-between">
                      <span className=" h-10 flex items-center justify-center">
                        <img className="" src={video} alt="setpersonIcons" />
                      </span>
                      <span className="ml-2 mt-1 not-italic font-AeonikProRegular text-sm leading-4 text-right text-black tracking-[1%]">
                        Video Preview
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      {/* <div className="w-fit h-[600px] flex gap-x-[10px] border border-searchBgColor">
        <div className="w-[90px] h-full flex flex-col gap-y-[10px]  border border-searchBgColor">
          {imgGroup?.map((data) => {
            return (
              <div className="w-[90px] h-[120px] border border-searchBgColor bg-btnBgColor rounded-lg overflow-hidden">
                <img className="w-full h-full" src={data?.img} alt="" />
              </div>
            );
          })}
        </div>
        <div className="w-[440px] h-full bg-btnBgColor  border border-searchBgColor rounded-lg"></div>
      </div> */}
    </div>
  );
};
export { SingleSetCarousel };
