import React, { useEffect, useRef } from "react";
// import { MenuCloseIcons } from "../../../assets/icons";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";

function CarouselModalMarket({ getAllImgGallery }) {
  const NextArrowModal = (props) => {
    const { onClick } = props;
    return (
      <main
        className={`absolute text-center cursor-pointer no-underline opacity-70 md:w-[44px] md:h-[44px] w-[32px] h-[32px] hidden sm:flex items-center justify-center top-[50%] z-[217] right-[0px]  rounded-full bg-bgColor duration-200 border  border-searchBgColor  `}
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
        className={`absolute text-center cursor-pointer no-underline opacity-70 md:w-[44px] md:h-[44px] w-[32px] h-[32px] hidden sm:flex items-center justify-center top-[50%] z-[217] left-[0px] rounded-full bg-bgColor duration-200 border  border-searchBgColor`}
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

  const sliderRef = useRef();

  useEffect(() => {
    sliderRef?.current?.slickGoTo(getAllImgGallery?.index);
  }, [getAllImgGallery?.index]);

  return (
    <section
      className={` rounded-lg w-full sm:w-fit h-fit cursor-pointer flex flex-col items-center justify-center
                `}
    >
      <div className="w-full h-full ">
        <Slider
          ref={sliderRef}
          className="relative !w-full xs:!w-[580px] !overflow-visible md:!w-[780px] sm:!h-[550px] md:!h-[700px] md:rounded-lg sm:px-[50px]"
          {...settingsModal}
        >
          {getAllImgGallery?.newImgList?.length &&
            getAllImgGallery?.newImgList?.map((data, index) => {
              return (
                <React.Fragment key={data?.id}>
                  {data?.img && (
                    <figure className="relative  overflow-hidden !w-full ll:h-[400px] h-[450px] xs:h-[550px] md:h-[700px] sm:rounded-lg md:border border-searchBgColor bg-white  flex items-center justify-center">
                      <img
                        className="w-full h-full object-contain"
                        src={data?.img}
                        alt=""
                      />
                      <figcaption
                        className={`${
                          getAllImgGallery?.newImgList?.length > 1
                            ? "flex"
                            : "hidden"
                        } w-full absolute items-center justify-between px-4 opacity-80 text-sm font-AeonikProMedium left-0 right-0 bottom-4 `}
                      >
                        <span className="bg-bgCard pt-1 gap-x-[3px] rounded-[40%] px-3 py-1 flex items-center leading-5 tracking-wider  ">
                          <p> {index + 1}</p>/
                          <p>{getAllImgGallery?.newImgList?.length}</p>
                        </span>
                      </figcaption>
                    </figure>
                  )}
                </React.Fragment>
              );
            })}
        </Slider>
      </div>
    </section>
  );
}

export default React.memo(CarouselModalMarket);
