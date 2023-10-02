import React, { useContext, memo, useState } from "react";
import {
  ClockIcons,
  LocationIcons,
  MenuCloseIcons,
  SircleNext,
  StarIcons,
} from "../../../assets/icons";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import AddCopyCheckedIcon from "../../Home/Products/SignleMainProducts/SingleProduct/Product_Detail/AddCopyCheckedIcon/AddCopyCheckedIcon";

function YandexLocationMarketOpen({ cordinateMarkets, }) {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [modalOfCarsouel, setModalOfCarsouel] = useState(false)
  const handleClickCarosuel = (id) => {
    setModalOfCarsouel(true)
  }

  const navigate = useNavigate();
  const openShoppingChild = () => {
    // const gotoOfficial = (id) => {
    navigate(`/shopping_store/:${123456}`);
  };
  const [copyText, setCopyText] = useState('г. Ташкент, Чиланзарский район, квартал-7, д 45б (Катартал) ')
  const [cardCarousel] = useState([
    {id:1, img:"https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg"},
    {id:2, img:"https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"},
    {id:3, img:"https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg"},
    {id:4, img:"https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg"},
  ])
  const handleCopyText = () => {
    navigator.clipboard.writeText(copyText)
  }

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[45%] z-10	right-[5px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard		`}
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
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[45%] z-10	left-[5px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };
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
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let settingsModal = {
    nextArrow: <NextArrowModal />,
    prevArrow: <PrevArrowModal />,
    infinite: true,
    dots: false,
    speed: 500,
  };


  return (
    <main className="w-full">
      <div className="w-full">
        <section
          onClick={() => setModalOfCarsouel(false)}
          className={`fixed inset-0 z-[200] duration-200 w-full h-[100vh] bg-black opacity-60 ${modalOfCarsouel ? "" : "hidden"
            }`}
        ></section>
        <section
          className={`fixed z-[201] border border-violet-700 rounded-lg bg-white w-full md:w-fit h-fit mx-auto my-auto md:m-auto cursor-pointer flex flex-col items-center justify-center inset-0 ${modalOfCarsouel ? "" : "hidden"
            }`}
        >
          <button
            onClick={() => setModalOfCarsouel(false)}
            className="absolute flex items-center justify-center w-10 h-10 md:w-[50px] md:h-[50px] top-[-60px] right-1 md:top-3 z-40 md:right-[-80px]  md:rounded-full md:bg-[#808080]">
            <MenuCloseIcons colors="#fff" />
          </button>
          <div className="w-full h-full">
            <Slider
              className="relative w-full h-fit md:!w-[750px] md:h-[100vh] showpageSlider !overflow-visible bg-white md:rounded-lg"
              {...settingsModal}
            >
              {cardCarousel?.map((data) => {
                return (
                  <article>
                    <figure className="relative overflow-hidden h-fit w-full md:h-[100vh] md:rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                      <img className="w-full h-full" src={data?.img} alt="" />
                      <figcaption className="flex md:hidden w-full absolute items-center justify-between px-4 opacity-80 text-sm font-AeonikProMedium left-0 right-0 bottom-4 ">
                        <span className="bg-bgCard pt-1 gap-x-[3px] rounded-[40%] px-3 py-1 flex items-center leading-5 tracking-wider  ">
                          <p> {data.id}</p>/<p>{cardCarousel.length}</p>
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
      {/*  border border-searchBgColor */}
      <div className={`w-full flex flex-col gap-y-4 overflow-hidden bg-white rounded-t-[12px] md:rounded-[12px] px-4 py-5 border border-blue-600`}>
        
        {/* title */}
        <div className="relative w-full flex items-center justify-between">
          <div className="w-fit flex items-center gap-x-3">
            <span className="not-italic font-AeonikProMedium text-xl leading-5 text-fullBlue ">
              FLO (Алмазар)
            </span>
            <div className="w-fit flex items-center gap-x-[2px] ">
              <span>
                <StarIcons />
              </span>
              <span className="not-italic font-AeonikProMedium  text-base leading-4 text-black">
                4.6
              </span>
            </div>
          </div>
          <button
            onClick={() =>
              setDressInfo({
                ...dressInfo,
                yandexOpenMarketLocation: false,
              })
            }
            className="w-10 h-10 rounded-lg border border-searchBgColor flex items-center justify-center active:scale-95  active:opacity-70"
          >
            <MenuCloseIcons colors={"#000"} />
          </button>
        </div>
        {/* Second BOlum */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between md:gap-y-0 gap-y-4">


          {/* Carosuel */}
          <div className="w-full h-[220px] md:w-[48%] md:h-[250px] mx-auto ">
            <Slider
              {...settings}
              className="w-full h-full border border-yellow-400 rounded-lg overflow-hidden flex flex-col justify-center"
            >
              {cardCarousel?.map(data => (
                <div 
                  key={data?.id} 
                  onClick={() => handleClickCarosuel(data?.id)}
                  className="flex items-center justify-center"
                >
                  <img 
                    className={`mx-auto w-full cursor-pointer sm:w-auto	 flex items-center object-center object-cover`}
                    src={data.img}
                    alt="img"
                    />
                </div>
              ))}
            </Slider>
          </div>


          
          {/* Details */}
          <div className="md:w-[48%]  md:h-[250px] text-justify	 flex flex-wrap md:gap-y-0 gap-y-4 content-between   ">
            {/* text */}
            <div className="w-full h-fit ">
              <span className="not-italic text-justify	 font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
                Бу магазинда сиз болажонларингиз учун (0-15 ёш) сифатли
                кийимчаларни АРЗОН ВА КУЛАЙ нархларда харид қилишингиз мумкин
              </span>

            </div>
            {/* Detail */}
            <div className="w-full  flex flex-col gap-y-3">
              <div className="flex items-center ">
                <span>
                  <ClockIcons colors={"#000"} />
                </span>
                <span className="not-italic ml-4 font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
                  10:00 - 20:00, без выходных
                </span>
              </div>{" "}
              <div className="w-full flex">
                <span>
                  <LocationIcons />
                </span>
                <span className="w-[70%] flex  not-italic ml-4 font-AeonikProRegular text-base leading-5 text-setTexOpacity">
                  {copyText}
                  <button
                    type="button"
                    onClick={handleCopyText}
                    className="cursor-pointer flex  ml-[8px] ">
                    <AddCopyCheckedIcon />
                  </button>
                </span>
              </div>
            </div>
            <div className="w-full gap-x-2 flex items-center ">
              {/* <button
                onClick={clickCordinate}
                className={` w-full h-[48px]  bg-white border border-fullBlue active:scale-95  active:opacity-70 rounded-[12px] flex gap-x-3 items-center justify-center`}
              >
                <span className="not-italic font-AeonikProRegular tracking-[2%]  text-base leading-5 text-center   text-fullBlue ">
                  Открыть на карте
                </span>
              </button> */}
              <button
                onClick={openShoppingChild}
                className={` w-full h-[48px] bg-fullBlue active:scale-95 mt-4 mb-2 md:mb-0 md:mt-0  active:opacity-70 rounded-[12px] flex gap-x-3 items-center justify-center`}
              >
                <span className="not-italic font-AeonikProRegular tracking-[2%]  text-base leading-5 text-center   capitalize text-white">
                  Подробнее
                </span>
                <span>
                  <SircleNext colors={"#fff"} />
                </span>
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </main>
  );
}

export default memo(YandexLocationMarketOpen);
