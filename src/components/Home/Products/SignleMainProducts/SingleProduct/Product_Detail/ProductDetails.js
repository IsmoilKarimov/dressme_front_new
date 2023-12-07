import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";
import { BsCircleFill } from "react-icons/bs";
import {
  CalendarIcons,
  CategoryUsersIcon,
  ChapterIcon,
  CircleWarningIcons,
  DeliveryIcons,
  DiscountShapeIcons,
  DollorIcons,
  LocationColoursIcons,
  MarketIcons,
  PaymeSystemIcons,
  PhoneIcons,
  ProductArticleIcons,
  ProductSwitchIcons,
  QualityIcon,
  SettingsIcon,
  StarIcons,
} from "../../../../../../assets/icons";
import {
  summerSeason,
  autummSeason,
  winterSeason,
  HeartImg,
  springSeason,
} from "../../../../../../assets";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Modal, Popover, Radio } from "antd";
import AddCopyCheckedIcon from "./AddCopyCheckedIcon/AddCopyCheckedIcon";
import LocationOfYandex from "./LocationOfYandex/LocationOfYandex";
import TableSizesDropUp from "./MobileDropUp/TableSizesDropUp/TableSizesDropUp";
import LocationDropUp from "./MobileDropUp/LocationsDropUp/LocationsDropUp";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [dressInfo] = useContext(dressMainData);
  const [openLocationModal, setOpenLocationModal] = useState(false);
  const [openSizeList, setOpenSizeList] = useState(false);
  const [tableSizes, setTableSizes] = useState(false);
  const [locations, setLocations] = useState(false);

  const toggleTableSizes = useCallback(() => setTableSizes(false), []);
  const toggleLocations = useCallback(() => setLocations(false), []);

  const slider = useRef(null);

  const url = "https://api.dressme.uz";

  const [data, setData] = useState();

  const params = useParams();

  // ------------GET METHOD Main data -----------------
  useQuery(
    ["get_main_detail_data"],
    () => {
      return fetch(`${url}/api/main/products/${params?.id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setData(res);
      },
      onError: (err) => {
        console.log(err, "err");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    }
  );

  // For DropUp
  useEffect(() => {
    if (tableSizes || locations) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [tableSizes, locations]);

  const [openTab, setOpenTab] = useState(1);

  const [selectSize] = useState([
    { id: 1, size: "S", sizeNumbers: "36-44" },
    { id: 2, size: "M", sizeNumbers: "36-44" },
    { id: 3, size: "L", sizeNumbers: "36-44" },
    { id: 4, size: "XL", sizeNumbers: "36-44" },
    { id: 5, size: "XXL", sizeNumbers: "36-44" },
    { id: 6, size: "3XL", sizeNumbers: "36-44" },
    { id: 7, size: "4XL", sizeNumbers: "23-28" },
    { id: 8, size: "5XL", sizeNumbers: "36-44" },
    { id: 9, size: "6XL", sizeNumbers: "23-28" },
  ]);
  const [locationsList] = useState([
    { id: 1, size: "S", location: "Bektemir" },
    { id: 2, size: "M", location: "Mirzo Ulugbek" },
    { id: 3, size: "L", location: "Yunusobod" },
    { id: 4, size: "XL", location: "Chilonzor" },
    { id: 5, size: "XXL", location: "Mirobod" },
  ]);
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
  const SizeBtnList = [
    {
      id: 1,
      size_in_numbers: "36-44",
      chest_gitrh: "23-25",
      waist: "5-12",
      hip_gitrh: "1-6",
    },
    // { id: 2, size_in_numbers: "36-44", chest_gitrh:"23-25", waist:"5-12", hip_gitrh: "1-6"},
    // { id: 3, size_in_numbers: "36-44", chest_gitrh:"23-25", waist:"5-12", hip_gitrh: "1-6"},
    // { id: 4, size_in_numbers: "36-44", chest_gitrh:"23-25", waist:"5-12", hip_gitrh: "1-6"},
    // { id: 5, size_in_numbers: "36-44", chest_gitrh:"23-25", waist:"5-12", hip_gitrh: "1-6"},
    // { id: 6, size_in_numbers: "36-44", chest_gitrh:"23-25", waist:"5-12", hip_gitrh: "1-6"},
    // { id: 7, size_in_numbers: "36-44", chest_gitrh:"23-25", waist:"5-12", hip_gitrh: "1-6"},
  ];
  let settings = {
    focusOnSelect: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    speed: 500,
  };
  const contentSize = (
    <section className="w-[220px] h-[135px] p-[5px] ">
      {SizeBtnList.map((value) => {
        return (
          <article
            key={value?.id}
            className="w-full flex flex-col items-center justify-start font-AeonikProMedium text-sm text-center"
          >
            <div className="w-full flex items-center justify-start text-base font-AeonikProRegular mb-[10px]">
              Размер:
              <span className="ml-auto">{value.size_in_numbers}</span>
            </div>
            <div className="w-full flex items-center justify-start text-base font-AeonikProRegular mb-[10px]">
              Обхват груди, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">{value.waist}</span>
            </div>
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular mb-[10px]">
              Обхват талии, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">{value.chest_gitrh}</span>
            </div>
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular">
              Обхват бедер, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">{value.hip_gitrh}</span>
            </div>
          </article>
        );
      })}
    </section>
  );

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const [copyText, setCopyText] = useState(data?.product?.sku);
  const [copyCardNumber, setCopyCardNumber] = useState("");

  const skuRef = useRef();
  const cardRef = useRef();

  const handleCopyText = () => {
    navigator.clipboard.writeText(skuRef.current.innerText);
  };
  const handleCopyCardNumber = () => {
    navigator.clipboard.writeText(cardRef.current.innerText);
  };

  return (
    <main className="w-full relative h-full mt-3 md:mt-4">
      <div className="tableSizes">
        <section
          onClick={() => setTableSizes(false)}
          className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${
            tableSizes ? "" : "hidden"
          }`}
        ></section>
        <section
          className={`fixed z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${
            tableSizes ? "bottom-0" : "bottom-[-800px] z-0"
          }`}
        >
          <TableSizesDropUp onClick={toggleTableSizes} />
        </section>
      </div>
      <div className="locations">
        <section
          onClick={() => setLocations(false)}
          className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${
            locations ? "" : "hidden"
          }`}
        ></section>
        <locations
          className={`fixed z-[113] left-0 right-0 md:hidden duration-300  overflow-hidden ${
            locations ? "bottom-0" : "bottom-[-800px] z-0"
          }`}
        >
          <LocationDropUp onClick={toggleLocations} />
        </locations>
      </div>

      {/* 1 */}
      <section className="w-full hidden md:block">
        <section className="h-fit flex items-center mb-4">
          <article className="hidden md:flex items-center justify-start ">
            {data?.product?.overall_rating ? (
              <>
                {" "}
                <p className="w-fit flex items-center gap-x-[1px]">
                  <StarIcons />
                </p>
                <article className="mr-[25px] flex items-center w-fit ml-2 text-base md:text-[14px]">
                  <p className="not-italic font-AeonikProMedium mt-1 leading-4 text-black tracking-[1%]">
                    {data?.product?.overall_rating}
                  </p>
                  <p className=" pl-1 not-italic font-AeonikProRegular mt-1 leading-4 text-setTexOpacity tracking-[1%]">
                    ({data?.product?.rated_users_count} votes)
                  </p>
                </article>
              </>
            ) : null}
            <article>
              <div className="flex items-center justify-start">
                <span className="mr-[6px]">
                  <ProductArticleIcons />
                </span>
                <span className="text-sm font-AeonikProRegular leading-4 tracking-[1%]">
                  Артикль:
                </span>
                <div className="text-sm bg-transparent w-fit font-AeonikProRegular ml-[6px] text-[#a1a1a1] leading-4 tracking-[1%]" />
                <div
                  ref={skuRef}
                  className="w-fit text-sm font-AeonikProRegular text-[#a1a1a1]"
                >
                  {data?.product?.sku}
                </div>
                <button
                  type="button"
                  onClick={handleCopyText}
                  className="cursor-pointer ml-[8px]"
                >
                  <AddCopyCheckedIcon />
                </button>
              </div>
            </article>
          </article>
        </section>
        <section className="w-full mb-8">
          <p className="not-italic font-AeonikProMedium text-xl md:text-[22px] leading-7 text-TextTitle tracking-[1%]">
            {data?.product?.name_ru}
          </p>
        </section>

        {/* Desktop Product Details*/}
        <section className="h-fit hidden md:flex md:flex-col items-center mb-[9px]">
          <div className="w-full flex items-center mb-4">
            <div className="w-1/2 flex items-center">
              <article className="w-fit flex items-center">
                <MarketIcons colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                  Магазин:
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                  {data?.product?.shop?.name}
                </p>
              </article>
            </div>
            <div className="w-1/2 flex items-center ">
              <section className="w-fit flex items-center h-fit text-base md:text-sm mb-10 md:mb-0">
                <div className="not-italic mr-3  font-AeonikProMedium leading-4 text-black tracking-[1%]">
                  Сезон:
                </div>

                {data?.product?.seasons?.map((item) => {
                  return (
                    <>
                      <figure className="flex items-center pr-3 mr-3 last:border-none border-r-[2px] border-searchBgColor">
                        <img
                          src={
                            item?.name_ru === "Весна"
                              ? springSeason
                              : item?.name_ru === "Лето"
                              ? summerSeason
                              : item?.name_ru === "Осень"
                              ? autummSeason
                              : item?.name_ru === "Зима"
                              ? winterSeason
                              : null
                          }
                          alt=""
                        />

                        <figcaption className="not-italic  ml-1 font-AeonikProMedium md:font-AeonikProRegular leading-4 text-black tracking-[1%]">
                          {item?.name_ru}
                        </figcaption>
                      </figure>
                    </>
                  );
                })}
              </section>
            </div>
          </div>
          <div className="w-full flex items-center mb-4">
            <div className="w-1/2 flex items-center">
              <article className="w-fit flex items-center">
                <DeliveryIcons colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                  Доставка:
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                  {data?.product?.shop?.delivery?.name_ru}
                </p>
              </article>
            </div>
            <div className="w-1/2 flex items-center ">
              <article className="w-fit flex items-center">
                <SettingsIcon colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                  Производитель:
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                  Узбекистан
                </p>
              </article>
            </div>
          </div>
          <div className="w-full flex items-center mb-4">
            <div className="w-1/2 flex items-center">
              <article className="w-fit flex items-center">
                <CategoryUsersIcon colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                  Возрастная категория:
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                  {data?.product?.min_age_category} -{" "}
                  {data?.product?.max_age_category}
                </p>
              </article>
            </div>
            <div className="w-1/2 flex flex-col">
              <div className="flex items-center mb-1">
                <article className="w-fit flex items-center">
                  <ChapterIcon colors={"#000"} />
                  <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                    Раздел:
                  </div>
                </article>
                <article className="w-fit ml-2 flex flex-wrap">
                  {data?.product?.sections?.map((item, i) => {
                    if (i < 2) {
                      return (
                        <p className="mr-[5px] not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                          {item?.name_ru}
                        </p>
                      );
                    }
                  })}
                </article>
              </div>
              <div className="flex flex-wrap">
                {data?.product?.sections?.map((item, i) => {
                  if (i > 1) {
                    return (
                      <p className="mr-[5px] not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                        {item?.name_ru}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="w-full flex items-center mb-4">
            <div className="w-1/2 flex items-center">
              <article className="w-fit flex items-center">
                <QualityIcon colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                  Качество:
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                  {data?.product?.quality_ru}
                </p>
              </article>
            </div>
            <div className="w-1/2 flex items-center ">
              <article className="w-fit flex items-center">
                <PaymeSystemIcons colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                  Номер карты:
                </div>
              </article>
              <article className="w-fit flex items-center ml-2">
                <div className="text-sm w-fit bg-transparent font-AeonikProRegular ml-[6px] text-[#a1a1a1] leading-4 tracking-[1%]" />
                <div
                  ref={cardRef}
                  className="w-fit text-sm font-AeonikProRegular text-[#a1a1a1]"
                >
                  {data?.product?.seller?.card_number}
                </div>
                <button
                  type="button"
                  onClick={handleCopyCardNumber}
                  className="cursor-pointer ml-[8px]"
                >
                  <AddCopyCheckedIcon />
                </button>
              </article>
            </div>
          </div>
        </section>
      </section>

      {/* 2 */}
      <section className="w-full md:border-t md:border-y md:border-searchBgColor md:py-[25px] ">
        <article className="w-full block md:hidden">
          <button
            onClick={() => setTableSizes(true)}
            className="text-[13px] font-AeonikProMedium text-borderWinter border-b border-dashed border-borderWinter mb-5"
          >
            Таблица размеров
          </button>
        </article>
        <article className="w-full flex items-center justify-between bg-[#fdfdfd] md:bg-white border-y md:border-none mb-4 text-sm font-AeonikProMedium">
          <div className="hidden md:flex items-center">
            <ProductSwitchIcons colors={"#757575"} />
            <div className="not-italic ml-2 mr-3 font-AeonikProRegular md:font-AeonikProMedium leading-4 text-[#757575]">
              Цвет:
            </div>
            {data?.product?.colors?.map((item) => {
              return (
                <p className="mr-1 not-italic leading-4 text-[#757575]">
                  {item?.name_ru}
                </p>
              );
            })}
          </div>
          {data?.product?.locations?.length ? (
            <div className="flex items-center py-3 md:py-0">
              <span className="hidden md:block">
                <LocationColoursIcons colors={"#757575"} />
              </span>
              <span className="block md:hidden">
                <LocationColoursIcons colors={"#303030"} />
              </span>
              <p className="text-[#303030] md:text-[#757575] font-AeonikProRegular md:font-AeonikProMedium text-base md:text-sm ml-[3px] md:ml-2">
                {data?.product?.locations[0]?.region?.name_ru},{" "}
                {data?.product?.locations[0]?.sub_region?.name_ru}
              </p>
            </div>
          ) : null}

          {data?.product?.locations?.length > 1 ? (
            <button
              type="primary"
              onClick={() => setOpenLocationModal(true)}
              className="hidden md:block text-borderWinter font-AeonikProMedium"
            >
              В других локациях
            </button>
          ) : (
            <div></div>
          )}
          <button
            type="primary"
            onClick={() => setLocations(true)}
            className="block md:hidden text-borderWinter font-AeonikProMedium"
          >
            В других локациях
          </button>
          <Modal
            centered
            open={openLocationModal}
            onOk={() => setOpenLocationModal(false)}
            onCancel={() => setOpenLocationModal(false)}
            footer={null}
            className="w-full p-6"
          >
            <div className="w-full px-[25px] pb-[30px] pt-[20px]">
              <div className="text-2xl font-AeonikProRegular mb-[30px]">
                Выберите локацию
              </div>
              <div className="h-[250px] overflow-y-auto">
                <div className="font-AeonikProRegular text-lg border-b border-[#f0f0f0] mb-[15px]">
                  {data?.product?.locations[0]?.region?.name_ru}
                </div>
                <Radio.Group
                  style={{
                    width: "100%",
                  }}
                  onChange={onChange}
                >
                  <div className="w-full">
                    {data?.product?.locations.map((data, i) => {
                      if (i === 0) {
                        return null;
                      } else {
                        return (
                          <div key={data.id} className="mb-[5px]">
                            <Radio
                              value={data?.sub_region?.name_ru}
                              name="location"
                              className="text-lg font-AeonikProRegular"
                            >
                              {data?.sub_region?.name_ru} ({data?.address})
                            </Radio>
                          </div>
                        );
                      }
                    })}
                  </div>
                </Radio.Group>
              </div>
              <button
                type="button"
                className="w-full flex justify-end text-borderWinter text-lg font-AeonikProMedium"
              >
                Готово
              </button>
            </div>
          </Modal>
        </article>

        <article className="h-fit flex items-center justify-between mb-4 md:mb-0">
          <article className="flex md:hidden items-center justify-start ">
            <p className="w-fit flex items-center gap-x-[1px]">
              <StarIcons />
            </p>
            <article className="flex items-center w-fit ml-2 text-base md:text-[14px]">
              <p className="not-italic font-AeonikProMedium mt-1 leading-4 text-black tracking-[1%]">
                4.7
              </p>
              <p className=" pl-1 not-italic font-AeonikProRegular mt-1 leading-4 text-setTexOpacity tracking-[1%]">
                (265)
              </p>
              <div className="text-setTexOpacity mx-[10px]">|</div>
              <p className=" not-italic font-AeonikProRegular mt-1 leading-4 text-setTexOpacity tracking-[1%]">
                678 заказов
              </p>
            </article>
          </article>
          <button className="w-10 h-10 flex md:hidden items-center justify-center rounded-xl active:scale-95 border border-searchBgColor bg-btnBgColor">
            <img src={HeartImg} alt="" className="w-5 h-5" />
          </button>
        </article>

        {/* Images Slider */}
        <article className="w-full hidden md:flex items-center mb-[30px]">
          <button
            className="button mt-[-5px]"
            onClick={() => slider?.current?.slickPrev()}
          >
            <GrFormPrevious size={30} />
          </button>
          <Slider
            ref={slider}
            {...settings}
            className="hidden md:flex md:w-[88%] h-[80px] items-center"
          >
            {imgGroup?.map((data) => (
              <div
                key={data.id}
                className="!w-[64px] h-[72px] rounded-lg cursor-pointer"
              >
                <img
                  src={data.img}
                  alt="imgs"
                  className="w-fit h-full rounded-lg"
                />
              </div>
            ))}
          </Slider>
          <button
            className="button mt-[-5px]"
            onClick={() => slider?.current?.slickNext()}
          >
            <GrFormNext size={30} />
          </button>
        </article>

        <article className="w-full hidden md:flex items-center mb-4 text-sm">
          <button
            type="primary"
            onClick={() => setOpenSizeList(true)}
            className="not-italic mr-3 font-AeonikProRegular border-b border-dashed border-borderWinter md:font-AeonikProMedium text-borderWinter"
          >
            Таблица размеров
          </button>
          <Modal
            centered
            open={openSizeList}
            onOk={() => setOpenSizeList(false)}
            onCancel={() => setOpenSizeList(false)}
            width={1000}
            footer={null}
            className="w-full p-6"
          >
            <ul className="w-full px-[25px] pb-[30px] pt-[60px]">
              <div className="flex items-center justify-between bg-[#F4F6FB] px-[25px] py-[15px] rounded-lg text-base font-AeonikProRegular">
                <li>Размер</li>
                <li>Буквенный Размер</li>
                <li>Обхват груди, в см</li>
                <li>Обхват талии, в см</li>
                <li>Обхват бедер, в см</li>
                <li>Возраст</li>
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between px-[25px] py-[15px] rounded-lg text-base font-AeonikProRegular">
                  <li>45-52</li>
                  <li>45-52</li>
                  <li>45-52</li>
                  <li>45-52</li>
                  <li>45-52</li>
                  <li>45-52</li>
                </div>
                <div className="flex items-center justify-between px-[25px] py-[15px] rounded-lg text-base font-AeonikProRegular">
                  <li>45-52</li>
                  <li>45-52</li>
                  <li>45-52</li>
                  <li>45-52</li>
                  <li>45-52</li>
                  <li>45-52</li>
                </div>
                <div className="flex items-center justify-between px-[25px] py-[15px] rounded-lg text-base font-AeonikProRegular">
                  <li>45-52</li>
                  <li>45-52</li>
                  <li>45-52</li>
                  <li>45-52</li>
                  <li>45-52</li>
                  <li>45-52</li>
                </div>
              </div>
            </ul>
          </Modal>
        </article>

        <article className="w-full hidden md:flex items-center">
          <section className="flex flex-wrap items-center gap-x-3 gap-y-3">
            {data?.product?.sizes?.map((data) => {
              return (
                <Popover
                  key={data.id}
                  trigger="hover"
                  content={contentSize}
                  className="h-11 w-[80px] md:w-auto cursor-pointer rounded-lg border border-[#dadada]  hover:border-fullBlue px-4 flex flex-col items-center justify-center"
                >
                  <p
                    className={`font-AeonikProMedium text-sm uppercase text-center text-black`}
                  >
                    {data?.letter_size}
                  </p>
                  <span className="text-[10px] font-AeonikProRegular text-[#757575]">
                    {data.sizeNumbers}
                  </span>
                </Popover>
              );
            })}
            <p className="w-[80px] h-11 flex md:hidden items-center justify-center rounded-lg border border-searchBgColor">
              <CircleWarningIcons colors={"#000"} />
            </p>
          </section>
        </article>

        {/* Mobile Product Infos */}
        <article className="w-full flex md:hidden flex-col items-center">
          <div className="w-full text-xl font-AeonikProMedium mb-[18px]">
            Line-Pattern Zipper Sweatshirt (Original High Quality)
          </div>
          <div className="w-full flex flex-col items-center border border-[#f0f0f0] p-[15px] bg-categoryModalBgColor rounded-xl">
            <div className="w-full flex items-center mb-4">
              <div className="flex items-center text-base font-AeonikProRegular">
                <DeliveryIcons />
                <span className="ml-[6px]">Метод доставки:</span>
              </div>
              <div className="text-sm font-AeonikProRegular ml-[6px] text-[#666]">
                Собственная доставка
              </div>
            </div>
            <div className="w-full flex items-center mb-4">
              <section className="w-fit flex items-center h-fit text-base">
                <div className="flex items-center font-AeonikProRegular leading-4 tracking-[1%]">
                  <CalendarIcons colors={"#000"} />
                  <span className="ml-[6px]">Сезон:</span>
                </div>
                <figure className="flex items-center ml-[6px]">
                  <img src={winterSeason} alt="" />
                  <figcaption className="font-AeonikProRegular leading-4 tracking-[1%]">
                    Зима
                  </figcaption>
                </figure>
                <div className="w-[1px] border h-3 border-searchBgColor mx-3"></div>
                <figure className="flex items-center">
                  <img src={summerSeason} alt="" />
                  <figcaption className="not-italic ml-1 font-AeonikProRegular leading-4 text-black tracking-[1%]">
                    Весна
                  </figcaption>
                </figure>
                <div className="w-[1px] border h-3 border-searchBgColor mx-3"></div>
                <figure className="flex items-center">
                  <img src={autummSeason} alt="" />
                  <figcaption className="ml-1 font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
                    Осень
                  </figcaption>
                </figure>
              </section>
            </div>
            <div className="w-full flex items-center mb-4">
              <article className="flex items-center">
                <MarketIcons colors={"#000"} />
                <div className="not-italic flex items-center font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%] ml-[6px]">
                  Магазин:
                </div>
              </article>
              <article className="ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                  Nike Store Official Dealer
                </p>
              </article>
            </div>
            <div className="w-full flex items-center mb-4">
              <ProductArticleIcons />
              <span className="text-base font-AeonikProRegular leading-4 tracking-[1%] ml-[6px]">
                Артикль:
              </span>
              <input
                type="text"
                readOnly
                value={copyText}
                onChange={(e) => setCopyText(e.target.value)}
                className="text-sm bg-transparent w-[68px] font-AeonikProRegular ml-[6px] text-[#a1a1a1] leading-4 tracking-[1%]"
              />
              <button
                type="button"
                onClick={handleCopyText}
                className="cursor-pointer ml-[8px]"
              >
                <AddCopyCheckedIcon />
              </button>
            </div>
            <div className="w-full flex items-center mb-4">
              <article className="w-fit flex items-center">
                <CategoryUsersIcon colors={"#000"} />
                <div className="not-italic flex items-center font-AeonikProRegular text-base leading-4 text-black tracking-[1%] ml-[6px]">
                  Возрастная категория:
                </div>
              </article>
              <article className="w-fit ml-[6px]">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-[#666] tracking-[1%]">
                  36-44
                </p>
              </article>
            </div>
            <div className="w-full flex items-center mb-4">
              <article className="w-fit flex items-center">
                <QualityIcon colors={"#000"} />
                <div className="not-italic flex items-center font-AeonikProRegular text-base leading-4 text-black tracking-[1%] ml-[6px]">
                  Качество:
                </div>
              </article>
              <article className="w-fit ml-[6px]">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-[#666] tracking-[1%]">
                  Оригинал
                </p>
              </article>
            </div>
            <div className="w-full flex items-center mb-4">
              <article className="w-fit flex items-center">
                <SettingsIcon colors={"#000"} />
                <div className="not-italic flex items-center font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%] ml-[6px]">
                  Производитель:
                </div>
              </article>
              <article className="w-fit ml-[6px]">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-[#666] tracking-[1%]">
                  Узбекистан
                </p>
              </article>
            </div>
            <div className="w-full flex items-center mb-4">
              <article className="w-fit flex items-center">
                <ChapterIcon colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-[6px]">
                  Раздел:
                </div>
              </article>
              <article className="w-fit ml-[6px]">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-[#666] tracking-[1%]">
                  Спортивный (Тренировка)
                </p>
              </article>
            </div>
            <div className="w-full flex items-center">
              <article className="w-fit flex items-center">
                <PaymeSystemIcons colors={"#000"} />
                <div className="not-italic flex items-center font-AeonikProRegular text-base leading-4 text-black tracking-[1%] ml-[6px]">
                  Номер карты:
                </div>
              </article>
              <article className="w-fit flex items-center ml-[6px]">
                <input
                  className="text-sm bg-transparent w-[138px] font-AeonikProRegular ml-[6px] text-[#a1a1a1] leading-4 tracking-[1%]"
                  value={copyCardNumber}
                  onChange={(e) => setCopyCardNumber(e.target.value)}
                  readOnly
                  type="text"
                />
                <button
                  type="button"
                  onClick={handleCopyCardNumber}
                  className="cursor-pointer ml-[8px]"
                >
                  <AddCopyCheckedIcon />
                </button>
              </article>
            </div>
          </div>
        </article>

        {/* Mobile Price */}
        <article
          className={`w-full h-fit mt-[34px] pb-6 md:pb-0 border-b md:border-none md:hidden`}
        >
          <article className="h-fit w-full flex items-center justify-between mb-2 gap-x-2">
            <address className="max-w-1/2 md:max-w-[70%] w-full">
              <a
                className=" w-full bg-fullBlue active:scale-95  active:opacity-70 text-white rounded-lg h-[44px] flex gap-x-1 ll:gap-x-2 items-center justify-center"
                href="tel:+998 (97) 720-30-40"
              >
                <PhoneIcons colors={"#fff"} />
                <p className="text-base ">Samandar</p>
              </a>
            </address>
            <address className=" max-w-1/2 md:max-w-[35%] w-full">
              <a
                className={` w-full h-[44px] active:scale-95  active:opacity-70 px-5 flex gap-x-1 ll:gap-x-2 items-center justify-center  rounded-lg  text-fullBlue border border-fullBlue`}
                href="https://t.me/itpark_uz"
              >
                <p className="w-7 h-7  bg-fullBlue text-white rounded-full flex items-center px-auto justify-center pr-[2px]">
                  <FaTelegramPlane size={16} />
                </p>{" "}
                <p className="text-base block">@itpark_uz</p>{" "}
              </a>
            </address>
          </article>
        </article>
      </section>

      {/* 3 This Section For Desctop Version*/}
      <section className=" w-full hidden md:block md:pb-[35px] pt-[25px] md:border-b border-searchBgColor mb-12 md:mb-0">
        <article className="w-full flex items-center mb-[14px] md:mb-0">
          <section className="w-fit flex items-center">
            <article className="flex md:hidden">
              <DollorIcons colors={"#000"} />
              <p className="text-base font-AeonikProRegular ml-[6px]">Цена:</p>
            </article>
            <span className="text-base font-AeonikProMedium mr-3">от</span>
            <p className="hidden md:block font-AeonikProMedium text-[20px] text-black">
              {data?.product?.cost?.discount_price
                ? data?.product?.cost?.discount_price
                : data?.product?.cost?.price}{" "}
              сум
            </p>
            {data?.product?.cost?.discount_price ? (
              <p className="hidden md:block ml-[10px] font-AeonikProRegular line-through text-[18px] text-setTexOpacity">
                {data?.product?.cost?.price} сум
              </p>
            ) : null}
          </section>
          {data?.product?.cost?.discount_percent ? (
            <section className="w-[84px] h-9 md:w-[100px] md:h-11 cursor-pointer flex items-center justify-center border border-searchBgColor rounded-lg ml-8 active:scale-95">
              <p>
                <DiscountShapeIcons />
              </p>
              <p className="ml-[6px] font-AeonikProMedium text-sm md:text-sm text-red-700">
                -{data?.product?.cost?.discount_percent}%
              </p>
            </section>
          ) : null}

          <section
            className={`w-fit ${dressInfo?.TextColorSeason} items-center text-sm hidden md:flex ml-8`}
          >
            <p className="font-AeonikProRegular text-right">В наличии:</p>
            <p className="ml-2 font-AeonikProMedium text-right">
              {data?.product?.sizes_sum_amount}
            </p>
          </section>
        </article>

        <article className="w-full flex items-center justify-between gap-x-3 md:gap-x-0 md:mt-6">
          <article className="w-full flex items-center">
            <address className="w-[65%] md:w-fit">
              <a
                className="w-[232px] h-12 md:h-[52px] px-5  rounded-[12px] not-italic font-AeonikProMedium text-base leading-4 text-center text-white flex gap-x-3 items-center justify-center bg-fullBlue"
                href={`${
                  "tel:" + data?.product?.locations[0]?.assistant_phone
                }`}
              >
                <PhoneIcons colors={"#fff"} />{" "}
                {data?.product?.locations[0]?.assistant_name}
              </a>
            </address>
            <address className="w-[35%] md:w-fit  ml-4">
              <a
                className={`w-[232px] h-12 md:h-[52px] px-5 rounded-[12px] not-italic font-AeonikProMedium text-base leading-4 text-center flex gap-x-3 items-center justify-center text-fullBlue border border-fullBlue`}
                href={`https://t.me/${data?.product?.locations[0]?.assistant_messenger.slice(
                  1
                )}`}
              >
                <span className="w-7 h-7 bg-fullBlue text-white rounded-full flex items-center px-auto justify-center pr-[2px]">
                  <FaTelegramPlane size={16} />
                </span>{" "}
                <span>{data?.product?.locations[0]?.assistant_messenger}</span>{" "}
              </a>
            </address>
          </article>
          <article className="w-fit md:ml-3 hidden md:block">
            <button className="w-[52px] h-[52px] hidden md:flex items-center justify-center rounded-xl active:scale-95 border border-searchBgColor">
              <img src={HeartImg} alt="" className="w-5 h-5" />
            </button>
          </article>
        </article>
      </section>

      {/* 4  Buttons */}
      <article className="w-full h-11 flex justify-between items-center rounded-lg bg-[#fafafa] border border-solid mt-6 md:mt-[15px] md:h-12 md:w-[540px]">
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
          className={`w-[28%] md:w-1/3 md:h-[42px] flex items-center justify-center text-sm md:text-base text-center px-5 font-AeonikProRegular ${
            openTab === 1
              ? "shadow-modalCategoryShadow bg-white h-[38px] md:h-[42px] my-auto mx-auto rounded-lg"
              : ""
          } `}
        >
          <p>Локация</p>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
          className={`w-[44%] md:w-1/3 md:h-[42px] flex items-center justify-center text-sm md:text-base text-center px-5 font-AeonikProRegular ${
            openTab === 2
              ? "shadow-modalCategoryShadow bg-white h-[38px] md:h-[42px] my-auto mx-auto rounded-lg"
              : ""
          } `}
        >
          <p>Описания товара </p>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}
          className={`w-[28%] md:w-1/3 md:h-[42px] flex items-center justify-center text-sm md:text-base text-center px-5 font-AeonikProRegular ${
            openTab === 3
              ? "shadow-modalCategoryShadow bg-white h-[38px] md:h-[42px] my-auto mx-aut rounded-lg"
              : ""
          } `}
        >
          <p>Состав</p>
        </button>
      </article>

      {/* 5 */}
      <div className="w-full">
        <div className={openTab === 1 ? "block" : "hidden"}>
          <action className=" flex">
            <LocationOfYandex
              locationText={data?.product?.locations[0]?.address}
            />
          </action>
        </div>
        <div className={openTab === 2 ? "block" : "hidden"}>
          <action className="mt-5 flex-col gap-y-5 flex">
            <action className="not-italic font-AeonikProRegular text-base">
              Кратко о товаре
            </action>
            <article className="font-AeonikProRegular text-base">
              {data?.product?.description_ru}
            </article>
          </action>
        </div>
        <div className={openTab === 3 ? "block" : "hidden"}>
          <action className="mt-12 md:mt-5 block">
            <ul>
              <li
                className={
                  "flex items-center not-italic font-AeonikProRegular text-base leading-7 text-black tracking-[1%]"
                }
              >
                <BsCircleFill size={5} className="mx-2" />{" "}
                {data?.product?.composition_ru}
              </li>
            </ul>
          </action>
        </div>
      </div>
    </main>
  );
};

export { ProductDetails };
