import React, { useContext, useState, useEffect } from "react";
import {
  ClockIcons,
  LocationIcons,
  MenuCloseIcons,
  PersonIcons,
  PhoneIcons,
  SircleNext,
  StarIcons,
} from "../../../assets/icons";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import AddCopyCheckedIcon from "../../Home/Products/SignleMainProducts/SingleProduct/Product_Detail/AddCopyCheckedIcon/AddCopyCheckedIcon";

function YandexLocationMarketOpen({ getImgGallery, onClick, modalInfo }) {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const navigate = useNavigate();
  const openShoppingChild = () => {
    // const gotoOfficial = (id) => {
    navigate(`/shopping_store/:${dressInfo?.yandexGetMarketId}`);
  };
  const [copyAddress, setCopyAddress] = useState(null);
  const [phoneNum, setPhoneNum] = useState(null);
  const [imgGallery, setImgGallery] = useState([]);
  const [, setImgGallery1] = useState();
  const [, setImgGallery2] = useState();
  const [, setImgGallery3] = useState();
 
  useEffect(() => {
    modalInfo?.locations
      ?.filter((e) => e?.id === dressInfo?.yandexGetMarketId)
      ?.map((data) => {
        setCopyAddress(data?.address);
        setPhoneNum(data?.assistant_phone);
        setImgGallery1({ img: data?.url_image_path_one });
        setImgGallery2({ img: data?.url_image_path_two });
        setImgGallery3({ img: data?.url_image_path_three });
        setImgGallery([
          { img: data?.url_image_path_one },
          { img: data?.url_image_path_two },
          { img: data?.url_image_path_three },
        ]);
      });
  }, [modalInfo, dressInfo?.yandexGetMarketId]);
  // imgGallery?.map((data, index) => {
  //   console.log(data, `filter1---${index}--  arrImg`);
  // })
  // console.log(
  //   imgGallery1,
  //   imgGallery2,
  //   imgGallery3, "filter  arrImg");
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(copyAddress);
  };
  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNum);
  };
  // const [imgGallery, setImgGallery] = useState([
  //   // { id: 1, img: "https://i.pinimg.com/736x/9d/d4/a3/9dd4a3906b318cdfd854dd46a72046ba.jpg" },
  //   // { id: 2, img: "https://img.hechtgroup.com/where_is_the_zara_warehouse.jpg" },
  //   // { id: 3, img: "https://c8.alamy.com/comp/2HEC9XP/people-queue-outside-a-zara-store-on-boxing-day-in-central-london-as-shoppers-gather-on-oxford-street-2HEC9XP.jpg" },
  // ])
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
  const sendImgGallery = () => {
    getImgGallery(imgGallery);
    onClick();
  };

  // console.log(modalInfo, "modalInfo");
  // console.log(dressInfo?.yandexGetMarketId, "yandexGetMarketId");
  const handlePhoneNumberClick = (id) => {
    // window.location.href = `tel:${id}`;
    // window.open(`tel:${id}`, '_blank');
  };
  // console.log(imgGallery, "imgGallery");
  return (
    <div className="w-full h-full ">
      {modalInfo?.locations
        ?.filter((e) => e?.id === dressInfo?.yandexGetMarketId)
        ?.map((data) => {
          return (
            <div
              key={data?.id}
              className="w-full  h-fit flex flex-col gap-y-2 border border-searchBgColor overflow-hidden bg-white rounded-t-[12px] md:rounded-[12px]	 px-4 pb-4 pt-2"
            >
              {/* title */}
              <div className="relative w-full flex items-center justify-between">
                <div className="w-fit flex items-center gap-x-3">
                  {" "}
                  <span className="not-italic font-AeonikProMedium ml-[10px] text-xl leading-5 text-fullBlue ">
                    {data?.shop?.name}
                  </span>
                  {data?.shop?.overall_rating && (
                    <div className="w-fit flex items-center gap-x-[2px] ">
                      <span className="font-AeonikProMedium">
                        <StarIcons />
                      </span>
                      <span className="not-italic font-AeonikProMedium  text-base leading-4 text-black">
                        {data?.shop?.overall_rating}
                      </span>
                    </div>
                  )}
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
                  {/* <img src={'https://i.pinimg.com/736x/9d/d4/a3/9dd4a3906b318cdfd854dd46a72046ba.jpg'} alt={imgGallery} className="w-full h-full object-cover" /> */}
                  <Slider
                    {...settings}
                    className="w-full h-full rounded-lg overflow-hidden flex flex-col justify-center"
                  >
                    {imgGallery?.map((data) => {
                      return (
                        <React.Fragment key={data?.id}>
                          {data?.img && (
                            <div
                              onClick={() => sendImgGallery()}
                              className="cursor-pointer flex items-center justify-center"
                            >
                              <img
                                className={
                                  "mx-auto w-full sm:w-auto flex items-center object-contain	"
                                }
                                // src={data?.img}
                                src={data?.img}
                                alt="img"
                              />
                            </div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </Slider>
                </div>
                {/* Details */}
                <div className="md:w-[48%]  md:h-[250px] text-justify	 flex flex-wrap md:gap-y-0 gap-y-4 content-between   ">
                  {/* text */}
                  <div className="w-full h-fit hidden">
                    <span className="not-italic text-justify	 font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
                      Бу магазинда сиз болажонларингиз учун (0-15 ёш) сифатли
                      кийимчаларни АРЗОН ВА КУЛАЙ нархларда харид қилишингиз
                      мумкин
                    </span>
                  </div>
                  {/* Detail */}
                  <div className="w-full  flex flex-col gap-y-3">
                    <div className="flex items-center ">
                      <span className=" font-AeonikProRegular">
                        <ClockIcons colors={"#000"} />
                      </span>
                      <span className="not-italic ml-4 font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
                        {data?.work_time_from || "00:00"} -{" "}
                        {data?.work_time_to || "00:00"}
                      </span>
                    </div>{" "}
                    <div className="flex items-center ">
                      <span className="font-AeonikProRegular ml-[-3px]">
                        {/* <ClockIcons colors={"#000"} /> */}
                        <PersonIcons colors={"#000"} />
                      </span>
                      <span className="not-italic ml-4 font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
                        {data?.assistant_name}
                      </span>
                    </div>{" "}
                    <div
                      onClick={handlePhoneNumberClick(data?.assistant_phone)}
                      className="flex items-center cursor-pointer   "
                    >
                      <p className="w-[80%] flex ">
                        <span className="font-AeonikProRegular cursor-pointer  ">
                          <PhoneIcons colors={"#000"} />
                        </span>
                        <a
                          href={`tel:${phoneNum}`}
                          className="not-italic hover:text-fullBlue flex items-center ml-4 font-AeonikProRegular text-base leading-4 text-black tracking-[1%]"
                        >
                          {phoneNum}
                        </a>
                      </p>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="cursor-pointer flex  ml-[8px] "
                      >
                        <AddCopyCheckedIcon />
                      </button>
                    </div>{" "}
                    <div className="w-full flex  h-full max-h-[100px] overflow-hidden">
                      <p className="w-[80%] flex ">
                        <span>
                          <LocationIcons />
                        </span>
                        <span className=" flex  not-italic ml-4 font-AeonikProRegular text-base leading-5 text-setTexOpacity">
                          {copyAddress}
                        </span>
                      </p>
                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="cursor-pointer flex  ml-[8px] "
                      >
                        <AddCopyCheckedIcon />
                      </button>
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
          );
        })}
    </div>
  );
}

export default React.memo(YandexLocationMarketOpen);
