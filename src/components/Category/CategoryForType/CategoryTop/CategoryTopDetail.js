import { NavLink, useParams } from "react-router-dom";

import { MuslimImg, nike } from "../../../../AssetsMain";
import {
  ArrowTopIcons,
  FilterIcons,
  LocationIcons,
  ManGenIcons,
  ProductShopIcons,
  SortIcons,
  StarIcons,
  VideoStoreIcons,
  WomanGenIcons,
} from "../../../../AssetsMain/icons";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useContext, useRef, useState } from "react";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";

const CategoryTopDetail = ({ name }) => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const handleFilter = () => {
    setDressInfo({
      ...dressInfo,
      openShopIdFilter: !dressInfo.openShopIdFilter,
    });
  };

  const [prevSliderBtn, setPrevSliderBtn] = useState(false);
  const wearGroup = [
    { id: 1, name: "Футболки" },
    { id: 2, name: "Рубашки" },
    { id: 3, name: "Шорты" },
    { id: 4, name: "Джинсы" },
    { id: 5, name: "Свитер" },
    { id: 6, name: "Куртки" },
    { id: 7, name: "Толстовки" },
    { id: 8, name: "Обуви" },
    { id: 9, name: "Куртки" },
    { id: 10, name: "Сапоги" },
    { id: 11, name: "Платья" },
    { id: 12, name: "Юбки" },
    { id: 13, name: "Ремень" },
  ];
  const data = (onClick) => {
    onClick();
    setPrevSliderBtn(true);
  };
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-12 h-12 flex items-center justify-center top-[2px] z-50	right-[4px]  rounded-full bg-white    duration-200 border  border-borderColor2
        		`}
        onClick={() => data(onClick)}
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
        className={` ${
          prevSliderBtn ? "block" : "hidden"
        } absolute text-center cursor-pointer no-underline opacity-50 w-12 h-12 flex items-center justify-center top-[2px] z-10	left-[2px]  rounded-full bg-white   duration-200 border  border-borderColor2
        `}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };

  let settings1 = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    arrows: true,
    speed: 500,
    dots: false,
    slidesToShow: 9,
    slidesToScroll: 1,
    initialSlide: 0,
    // beforeChange: (current, next) => setCurrentSlide(next),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 4,
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

  const [state, setState] = useState({
    opensports: false,
  });

  const handleOpenCategories = (newOpen) => {
    setState({ ...state, opensports: newOpen });
  };
  
  const [selectSports, setSelectCategories] = useState("Categories");

  const handleCategories = (value) => {
    setSelectCategories(value);
    setState({ ...state, opensports: false });
  };

  const categories = [
    { id: 1, type: "Все категории" },
    { id: 2, type: "Студент" },
    { id: 3, type: "Бизнесмен" },
    { id: 4, type: "Муслим" },
    { id: 5, type: "Туризм" },
    { id: 6, type: "Спортивные" },
    { id: 7, type: "Классическая" },
  ];
  const contentCategories = (
    <div className="w-[230px] h-fit m-0 p-0">
      {categories.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleCategories(data?.type);
            }}
            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );

  return (
    <div className="flex flex-col justify-center border-b border-searchBgColor items-center md:py-[60px]">
      <div className="max-w-[1280px] w-[100%] flex items-center justify-between m-auto">
        <div className="w-[100%] h-fit">
          <div className="w-full flex flex-col">
            <div className="relative w-full  md:h-[90px]  mt-2 md:mt-0  h-fit flex flex-col md:flex-row items-center justify-between border-t-0 md:border md:border-searchBgColor rounded-b-lg px-4 md:px-0">
              {/*  */}
              <div className="w-full md:w-fit flex h-[80px] md:h-fit items-center">
                <div className="absolute  w-[80px] md:w-[150px] h-[80px] md:h-[150px] md:left-[40px] rounded-full border border-searchBgColor flex items-center justify-center bg-white">
                  <img src={MuslimImg} alt="" />
                </div>
                <div className="flex items-center ml-[100px] md:ml-[210px]">
                  <div className="text-xl font-AeonikProMedium">
                    Муслим
                    <span className="text-base text-setTexOpacity font-AeonikProRegular ml-2">(291)</span>
                  </div>
                </div>
              </div>
              
              {/*  */}
              <div className="w-full md:w-fit flex items-center justify-between md:mr-5  mt-6 md:mt-0">
                <div className="flex items-center">
                  <NavLink className="flex items-center text-[15px] font-AeonikProMedium mr-[22px]">
                  По категории
                  </NavLink>
                  <div className="md:flex items-center hidden ">
                    <Popover
                      open={state?.opensports}
                      onOpenChange={handleOpenCategories}
                      className="w-[260px] px-4 h-[52px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
                      trigger="click"
                      options={["Hide"]}
                      placement="bottom"
                      content={contentCategories}
                      
                    >
                      <span className="text-[15px] font-AeonikProMedium">Спортивный</span>
                      <span>
                        <BiChevronDown
                          size={22}
                          style={{ color: "#000" }}
                          className={`${
                            state?.opensports ? "rotate-[-180deg]" : ""
                          } duration-200`}
                        />
                      </span>
                    </Popover>
                  </div>
                </div>
                {/* <div className="md:hidden">
                  <button className="h-12 flex items-center justify-center rounded-lg border border-searchBgColor px-4">
                    <span>
                      <ProductShopIcons colors={"#000"} />
                    </span>{" "}
                    <span className="not-italic ml-2 font-AeonikProMedium text-sm leading-4 text-right text-black tracking-[1%]">
                      Товары
                    </span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>


          
          {/* <div className="md:border-b hidden md:border-searchBgColor md:flex flex-gap-6 justify-between w-full pb-10 mt-[60px]">
            <div className="w-[22%] h-full  ">
              <div>
                <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]">
                  По категории
                </span>
              </div>
              <div className="w-full">
                <button className="w-full cursor-pointer border border-searchBgColor h-[52px] mt-3 rounded-lg bg-bgCategory flex items-center justify-between px-4">
                  <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]">
                    Спортивный
                  </span>
                  <span className="rotate-[180deg]">
                    {" "}
                    <ArrowTopIcons colors={"#000"} />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[77%] h-full ">
              <div>
                <span className="not-italic font-AeonikProMedium text-sm  leading-4 text-black tracking-[1%]">
                  По категории
                </span>
              </div>
              <div className="w-full mt-3 h-[52px] flex flex-col items-center ">
                <Slider
                  {...settings1}
                  // ref={sliderRef}
                  className="w-[100%] h-full items-center flex xs:justify-between    "
                >
                  {wearGroup?.map((data) => {
                    return (
                      <div key={data.id} className="!w-[100px]  h-full ">
                        <div
                          className={` w-full h-[52px] px-5 m-auto  bg-bgCategory rounded-lg flex justify-center items-center cursor-pointer  border border-searchBgColor  `}
                        >
                          <p className="not-italic font-AeonikProMedium text-sm text-black tracking-[1%] ">
                            {data?.name || "0"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div> */}
          <div className="w-full md:hidden flex items-center justify-between mt-6 mb-3  px-4">
            <button
              onClick={handleFilter}
              className="h-[44px] w-[48%] rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center"
            >
              <span>
                <FilterIcons colors={"#000"} />
              </span>
              <span className="ml-2 not-italic font-AeonikProMedium mt-1  text-sm leading-4 text-black tracking-[1%] cursor-pointer">
                Фильтры
              </span>
            </button>
            <button className="h-[44px] w-[48%] rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
              <span>
                <SortIcons colors={"#000"} />
              </span>
              <span className="ml-2 not-italic font-AeonikProMedium mt-1  text-sm leading-4 text-black tracking-[1%] cursor-pointer">
                Популярные
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryTopDetail;
