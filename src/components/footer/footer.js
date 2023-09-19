import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  AutummBoy,
  AutummChild,
  AutummFemale,
  AutummGirl,
  AutummMale,
  SpringBoy,
  SpringChild,
  SpringFemale,
  SpringGirl,
  SpringMale,
  SummerBoy,
  SummerChild,
  SummerFemale,
  SummerGirl,
  SummerMale,
  WinterBoy,
  WinterChild,
  WinterFemale,
  WinterGirl,
  WinterMale,
} from "../../assets";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { RiFacebookCircleLine, RiMessengerLine } from "react-icons/ri";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { BiChevronDown } from "react-icons/bi";
import { Popover } from "antd";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../../assets/backTop/backTop.svg";
import {
  BrandBlack,
  EnglishFlag,
  RussianFlag,
  UzbekFlag,
} from "../../assets";
import {
  ArrowTopIcons,
  CommentIcons,
  CotegoryIcons,
  FooterOriginalIcons,
  HouseStatisticIcons,
  ListCollectionIcons,
  LocationIcons,
  MapIcons,
  MapSitesIcons,
  MarketIcons,
  PersonPlusIcons,
  PhoneIcons,
  PrivateCheckIcons,
  UploadIcons,
  WarningSircleIcons,
} from "../../assets/icons";

const catalogTypes = [
  { id: 1, name: "Студент" },
  { id: 2, name: "Бизнес" },
  { id: 3, name: "Классический" },
  { id: 4, name: "Спорт" },
  { id: 5, name: "Для дома" },
  { id: 6, name: "Мусульманский" },
  { id: 7, name: "Путешествие" },
  { id: 8, name: "Военный" },
  { id: 9, name: "Геройский" },
  { id: 10, name: "Детям" },
  { id: 11, name: "Вечеринка" },
  { id: 12, name: "Футболки" },
];
const clothingTypes = [
  { id: 1, name: "T-Shorts" },
  { id: 2, name: "Shorts" },
  { id: 3, name: "Jeans" },
  { id: 4, name: "Shirts" },
  { id: 5, name: "Sweater" },
  { id: 6, name: "Hoodies" },
  { id: 7, name: "Shoes" },
  { id: 8, name: "Jackets" },
  { id: 9, name: "Sneakers" },
  { id: 10, name: "Boots" },
  { id: 11, name: "Dress" },
  { id: 12, name: "Skirts" },
];

const Footer = () => {
  const [dressInfo] = useContext(dressMainData);

  const PersonTypeArray = [
    {
      id: 1111,
      man: SpringMale,
      woman: SpringFemale,
      boy: SpringBoy,
      girl: SpringGirl,
      childs: SpringChild,
    },
    {
      id: 2222,
      man: SummerMale,
      woman: SummerFemale,
      boy: SummerBoy,
      girl: SummerGirl,
      childs: SummerChild,
    },
    {
      id: 3333,
      man: AutummMale,
      woman: AutummFemale,
      boy: AutummBoy,
      girl: AutummGirl,
      childs: AutummChild,
    },
    {
      id: 4444,
      man: WinterMale,
      woman: WinterFemale,
      boy: WinterBoy,
      girl: WinterGirl,
      childs: WinterChild,
    },
  ];
  // -----Language Change-------------------

  const LanguageList = [
    {
      id: 1,
      type: "Uzbekcha",
      icons: UzbekFlag,
      img: <ArrowTopIcons colors={"#000"} />,
    },
    {
      id: 2,
      type: "Russian",
      icons: RussianFlag,
      img: <ArrowTopIcons colors={"#000"} />,
    },
    {
      id: 3,
      type: "English",
      icons: EnglishFlag,
      img: <ArrowTopIcons colors={"#000"} />,
    },
  ];
  let dataStyle = "";
  let footerTextWeatherColor = "";
  if (dressInfo?.type === 1111) {
    dataStyle = " hover:text-borderSpring ";
    footerTextWeatherColor = "text-green-600 border-green-600 ";
  }
  if (dressInfo?.type === 2222) {
    dataStyle = " hover:text-borderSummer";
    footerTextWeatherColor = "text-amber-500 border-amber-600";
  }
  if (dressInfo?.type === 3333) {
    dataStyle = " hover:text-borderAutumm ";
    footerTextWeatherColor = "text-orange-600 border-orange-600";
  }
  if (dressInfo?.type === 4444) {
    dataStyle = " hover:text-borderWinter ";
    footerTextWeatherColor = "text-sky-600 border-sky-600";
  }

  // ----------------------Price State Management----------------------
  const [openPriceFooter, setOpenOriceFooter] = useState(false);

  const handleOpenChangePriceFooter = (newOpen) => {
    setOpenOriceFooter(newOpen);
  };
  const [selectPriceFooter, setselectPriceFooter] = useState("Under 100$");
  const handlePriceValueFooter = (value) => {
    setselectPriceFooter(value);
    setOpenOriceFooter(false);
  };
  const priceListFooter = [
    { id: 1, type: "At all prices" },
    { id: 2, type: "More than 500 $" },
    { id: 3, type: "Under 500$" },
    { id: 4, type: "Under 200$" },
    { id: 5, type: "Under 100$" },
    { id: 6, type: "Under 50$" },
  ];
  const contentPrice = (
    <section className="w-[150px] h-fit m-0 p-0">
      {priceListFooter.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handlePriceValueFooter(data?.type);
            }}
            className={`w-full h-[42px] flex items-center justify-center  not-italic cursor-pointer tracking-[1%] font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dressInfo?.ColorSeason}`}
          >
            {data?.type}
          </p>
        );
      })}
    </section>
  );

  // ----------------------Region State Management----------------------
  const [openRegionFooter, setOpenRegionFooter] = useState(false);

  const handleOpenChangeRegionFooter = (newOpen) => {
    setOpenRegionFooter(newOpen);
  };
  const [selectRegionFooter, setselectRegionFooter] = useState("Tashkent");
  const handleRegionValueFooter = (value) => {
    setselectRegionFooter(value);
    setOpenRegionFooter(false);
  };
  const RegionListFooter = [
    { id: 1, type: "Samarqand" },
    { id: 2, type: "Sirdaryo" },
    { id: 3, type: "Jizzax" },
    { id: 4, type: "Andijon" },
    { id: 5, type: "Xorazm" },
    { id: 6, type: "Navoiy" },
  ];
  const contentRegion = (
    <section className="w-[150px] h-fit m-0 p-0">
      {RegionListFooter.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleRegionValueFooter(data?.type);
            }}
            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer tracking-[1%] font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dressInfo?.ColorSeason}`}
          >
            {data?.type}
          </p>
        );
      })}
    </section>
  );

  // ----------------------Region State Management Mobile----------------------
  const [openRegionMobile, setOpenRegionMobile] = useState(false);

  const handleOpenChangeRegionMobile = (newOpen) => {
    setOpenRegionMobile(newOpen);
  };
  const [selectRegionMobile, setselectRegionMobile] = useState("Tashkent");
  const handleRegionValueMobile = (value) => {
    setselectRegionMobile(value);
    setOpenRegionMobile(false);
  };
  const RegionListMobile = [
    { id: 1, type: "Samarqand" },
    { id: 2, type: "Sirdaryo" },
    { id: 3, type: "Jizzax" },
    { id: 4, type: "Andijon" },
    { id: 5, type: "Xorazm" },
    { id: 6, type: "Navoiy" },
  ];
  const contentMobile = (
    <section className="w-[150px] h-fit m-0 p-0">
      {RegionListMobile.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleRegionValueMobile(data?.type);
            }}
            className={`w-full h-[42px] flex items-center justify-center  not-italic cursor-pointer tracking-[1%] font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dressInfo?.ColorSeason}`}
          >
            {data?.type}
          </p>
        );
      })}
    </section>
  );

  // ----------------------Language State Management----------------------
  const [openLanguageFooter, setOpenLanguageFooter] = useState(false);

  const handleOpenChangeLanguageFooter = (newOpen) => {
    setOpenLanguageFooter(newOpen);
  };
  const [selectLanguageFooter, setselectLanguageFooter] = useState(1);

  const handleLanguageValueFooter = (value) => {
    setselectLanguageFooter(value);
    setOpenLanguageFooter(false);
  };
  const LanguageFooter = [
    { id: 1, type: "Uzbekcha", icons: UzbekFlag },
    { id: 2, type: "Russian", icons: RussianFlag },
    { id: 3, type: "English", icons: EnglishFlag },
  ];
  const contentLanguage = (
    <div className="w-[150px] h-fit m-0 p-0">
      {LanguageFooter.map((data) => {
        return (
          <div
            key={data?.id}
            className={`p-2 text-sm hover:bg-bgColor cursor-pointer flex items-center justify-start  ${dressInfo?.ColorSeason}`}
            onClick={() => {
              handleLanguageValueFooter(data?.id);
            }}
          >
            <span className="mr-1">
              <img src={data?.icons} alt="" />
            </span>
            <span className="not-italic ml-2 font-AeonikProMedium text-sm leading-4 tracking-[1%]">
              {data?.type}
            </span>
          </div>
        );
      })}
    </div>
  );

  // ----------------------Language State Management Mobile----------------------
  const [openLanguageMobile, setOpenLanguageMobile] = useState(false);

  const handleOpenChangeLanguageMobile = (newOpen) => {
    setOpenLanguageMobile(newOpen);
  };
  const [selectLanguageMobile, setselectLanguageMobile] = useState(1);

  const handleLanguageValueMobile = (value) => {
    setselectLanguageMobile(value);
    setOpenLanguageMobile(false);
  };
  const LanguageMobile = [
    { id: 1, type: "Uzbekcha", icons: UzbekFlag },
    { id: 2, type: "Russian", icons: RussianFlag },
    { id: 3, type: "English", icons: EnglishFlag },
  ];
  const contentLanguageMobile = (
    <div className="w-[150px] h-fit m-0 p-0">
      {LanguageMobile.map((data) => {
        return (
          <div
            key={data?.id}
            className={`p-2 text-sm hover:bg-bgColor cursor-pointer flex items-center justify-start ${dressInfo?.ColorSeason}`}
            onClick={() => {
              handleLanguageValueMobile(data?.id);
            }}
          >
            <span className="mr-1">
              <img src={data?.icons} alt="" />
            </span>
            <span
              className={`not-italic font-AeonikProRegular text-sm leading-4 text-black ${dressInfo?.ColorSeason}`}
            >
              {data?.type}
            </span>
          </div>
        );
      })}
    </div>
  );
  // mt-1

  return (
    <footer>
      <section className="flex flex-col h-fit justify-center items-center m-0 p-0 ss:px-4 md:px-0 box-border border-t border-searchBgColor  md:mt-[40px] mb-[40px] md:mb-[60px] bg-btnBgColor md:bg-white md:border-t-0">
        <article className="">
          <ScrollToTop
            smooth
            top="600"
            color="#000"
            component={<MySVG />}
            style={{
              borderRadius: "50%",
              bottom: 70,
              right: 25,
              width: "48px",
              height: "48px",
              border: "1px solid #c1c1c1",
              backgroundColor: "#fafafa",
            }}
            className="bg-bgColor rounded-full mt-[-100px] z-[11] flex items-center opacity-70 justify-center ss:bottom-[75px] ss:right-[15px] md:bottom-10 md:right-10"
          />
        </article>
        <article className="max-w-[1280px] w-[100%]  flex justify-center items-center m-auto">
          <div className="w-[100%] h-fit ss:p-0 md:p-[30px]  md:border md:border-searchBgColor border-solid rounded-lg">
            <section>
              {/* Footer LOGO and Fedback form */}
              <article className="flex items-center md:px-0 mt-3 md:mt-0">
                <figure className="flex flex-col">
                  <Link to="/" className="md:mb-[14px]">
                    <img src={BrandBlack} alt="logo" className="w-full" />
                  </Link>
                  <figcaption className="text-textColor mb-[18px] text-sm hidden md:flex">
                    Торговая площадка одежды
                  </figcaption>
                </figure>

                {/* Address */}
                <div className="hidden flex-col ss:w-full md:w-[306px] ss:px-4 md:px-0 mt-[17px] ml-[92px] md:flex">
                  <p className="text-textColor mb-3 text-sm">
                    Юридический адрес :
                  </p>
                  <div className="flex items-center mb-[46px]">
                    <span className="border border-searchBgColor flex items-center justify-center rounded-lg mr-3 p-[14px] ss:bg-white md:bg-transparent">
                      <LocationIcons />
                    </span>
                    <p className="font-AeonikProRegular text-sm underline underline-offset-4">
                      Мирзо-Улугбекский район, проспект Амира Темура, 60 -
                      Ташкент, 100017
                    </p>
                  </div>
                </div>

                <Link
                  to="#"
                  className="hidden items-center bg-bgColor px-4 py-[15px] border border-searchBgColor rounded-lg ml-auto md:flex"
                >
                  <UploadIcons />
                  <p className="text-base font-AeonikProMedium leading-4 ml-[12.5px] mr-[32.37px]">
                    Форма для обратной связи
                  </p>
                  <span className="rotate-90 ">
                    <ArrowTopIcons colors={"#000"} />
                  </span>
                </Link>
                <Link to="#" className="flex items-center ml-auto md:hidden">
                  <HouseStatisticIcons colors={"#000"} />
                  <span className="ml-2 font-AeonikProMedium text-sm">
                    Дашборд
                  </span>
                </Link>
              </article>

              {/* Address */}
              <article className="flex flex-col ss:w-full md:w-[306px] md:px-0 mt-[17px] md:hidden">
                <p className="text-textColor mb-[18px] text-sm">
                  Юридический адрес :
                </p>
                <div className="flex items-center mb-[46px]">
                  <span className="border border-searchBgColor flex items-center justify-center rounded-lg mr-3 w-24 h-12 ss:bg-white md:bg-transparent">
                    <LocationIcons />
                  </span>
                  <p className="font-AeonikProRegular text-sm underline underline-offset-4">
                    Мирзо-Улугбекский район, проспект Амира Темура, 60 -
                    Ташкент, 100017
                  </p>
                </div>
              </article>

              {/* Categories, menu, social networks */}
              <article className="flex-wrap flex-row justify-between ss:hidden md:flex ">
                {/* Categories */}
                <section className="md:w-1/5">
                  <p className="font-AeonikProMedium w-fit text-base cursor-pointer ss:mb-4 md:mb-[30px]">
                    Категории
                  </p>
                  {PersonTypeArray?.filter(
                    (data) => data.id == dressInfo.type
                  ).map((data) => {
                    return (
                      <ul
                        key={data?.id}
                        className="text-sm font-AeonikProRegular"
                      >
                        <li className="ss:mb-1 md:mb-4">
                          <figure>
                            <Link to="#" className="flex items-center">
                              <img
                                src={data?.man}
                                alt=""
                                className="ml-[2px]"
                              />
                              <figcaption className="ml-[14px]">
                                Мужчины
                              </figcaption>
                            </Link>
                          </figure>
                        </li>
                        <li className="ss:mb-1 md:mb-4">
                          <figure>
                            <Link to="#" className="flex items-center">
                              <img
                                src={data?.woman}
                                alt=""
                                className="ml-[2px]"
                              />
                              <figcaption className="ml-[14px]">
                                Женщины
                              </figcaption>
                            </Link>
                          </figure>
                        </li>
                        <li className="ss:mb-1 md:mb-4">
                          <figure>
                            <Link to="#" className="flex items-center">
                              <img src={data?.boy} alt="" />
                              <figcaption className="ml-3">Мальчикы</figcaption>
                            </Link>
                          </figure>
                        </li>
                        <li className="ss:mb-1 md:mb-4">
                          <figure>
                            <Link to="#" className="flex items-center">
                              <img src={data?.girl} alt="" />
                              <figcaption className="ml-3">Девочкы</figcaption>
                            </Link>
                          </figure>
                        </li>
                        <li className="ss:mb-1 md:mb-4">
                          <figure>
                            <Link to="#" className="flex items-center">
                              <img src={data?.childs} alt="" />
                              <figcaption className="ml-3">Младенцы</figcaption>
                            </Link>
                          </figure>
                        </li>
                      </ul>
                    );
                  })}
                </section>

                {/* Menu */}
                <section className="md:w-3/5 ">
                  <h4 className="font-AeonikProMedium w-fit cursor-pointer text-base ss:mb-2 md:mb-[30px]">
                    Меню
                  </h4>
                  <ul className="flex flex-row text-sm">
                    <article className="basis-1/3">
                      <li className="ss:mb-1 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <WarningSircleIcons />
                          <span className="font-AeonikProRegular ml-2">
                            О нас
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-1 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <PersonPlusIcons colors={"#000"} />
                          <span className="font-AeonikProRegular ml-2">
                            Вакансия
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-1 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <ListCollectionIcons />
                          <span className="font-AeonikProRegular ml-2">
                            Наш блог
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-1 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <CotegoryIcons colors={"#000"} />
                          <span className="font-AeonikProRegular ml-2">
                            Каталог
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-1 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <MapSitesIcons />
                          <span className="font-AeonikProRegular ml-2">
                            Карта сайта
                          </span>
                        </Link>
                      </li>
                    </article>
                    <article className="basis-1/3">
                      <li className="ss:mb-1 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <MarketIcons colors={"#000"} />
                          <span className="font-AeonikProRegular ml-2">
                            Магазины
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-1 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <HouseStatisticIcons colors={"#000"} />
                          <span className="font-AeonikProRegular ml-2">
                            Бизнес
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-1 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <MapIcons colors={"#000"} />
                          <span className="font-AeonikProRegular ml-2">
                            Карта
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-1 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <ListCollectionIcons />
                          <span className="font-AeonikProRegular ml-2">
                            Мои заказы
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-1 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <PrivateCheckIcons />
                          <span className="font-AeonikProRegular ml-2">
                            Политика конфиденциальности
                          </span>
                        </Link>
                      </li>
                    </article>
                    <article className="basis-1/3">
                      <li className="ss:mb-1 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <HouseStatisticIcons colors={"#000"} />
                          <span className="font-AeonikProRegular ml-2">
                            Дашборд
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-1 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <CommentIcons colors={"#000"} />
                          <span className="font-AeonikProRegular ml-2">
                            Помощь
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-1 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <PhoneIcons colors={"#000"} />
                          <span className="font-AeonikProRegular ml-2">
                            Контакты
                          </span>
                        </Link>
                      </li>
                    </article>
                  </ul>
                </section>

                {/* Social networks */}
                <section className="md:basis-1/5">
                  <p className="font-AeonikProMedium w-fit cursor-pointer text-base ss:mb-2 md:mb-[30px]">
                    Социальная сеть
                  </p>

                  <article className="flex flex-col items-center w-full ss:flex lg:block">
                    <ul className="ss:w-6/12 lg:w-full text-sm">
                      <li className="ss:mb-2 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <FiInstagram className="text-[20px]" />
                          <span className="font-AeonikProRegular ml-2">
                            Instagram
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-2 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <RiFacebookCircleLine className="text-[20px]" />
                          <span className="font-AeonikProRegular ml-2">
                            Facebook
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-2 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <RiMessengerLine className="text-[20px]" />
                          <span className="font-AeonikProRegular ml-2">
                            Message
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-2 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <TbBrandTelegram className="text-[20px]" />
                          <span className="font-AeonikProRegular ml-2">
                            Telegram
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-2 md:mb-4">
                        <Link to="#" className="flex items-center">
                          <AiOutlineYoutube className="text-[20px]" />
                          <span className="font-AeonikProRegular ml-2  ss:text-sm md:text-base">
                            You Tube
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </article>
                </section>
              </article>

              {/* Categories, menu, social networks for MOBILE*/}
              <article className="flex flex-row items-center md:hidden px-0 md:px-0  md:mb-0 ">
                {/* Menu */}
                <section className="basis-1/2 ">
                  <p className="font-AeonikProMedium w-fit cursor-pointer ss:mb-4 md:mb-[30px]">
                    Меню
                  </p>
                  <ul className="text-sm">
                    <li className="mb-4">
                      <Link to="#" className="flex items-center">
                        <WarningSircleIcons />
                        <span className="font-AeonikProRegular ml-2">
                          О нас
                        </span>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="#" className="flex items-center">
                        <PersonPlusIcons colors={"#000"} />
                        <span className="font-AeonikProRegular ml-2">
                          Вакансия
                        </span>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="#" className="flex items-center">
                        <ListCollectionIcons />
                        <span className="font-AeonikProRegular ml-2">
                          Наш блог
                        </span>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="#" className="flex items-center">
                        <CotegoryIcons colors={"#000"} />
                        <span className="font-AeonikProRegular ml-2">
                          Каталог
                        </span>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="#" className="flex items-center">
                        <MapSitesIcons />
                        <span className="font-AeonikProRegular ml-2">
                          Карта сайта
                        </span>
                      </Link>
                    </li>
                  </ul>
                </section>

                {/* Categories */}
                <section className="basis-1/2 pl-6">
                  <div className="font-AeonikProMedium w-fit cursor-pointer ss:mb-4 md:mb-[30px]">
                    Категории
                  </div>
                  {PersonTypeArray?.filter(
                    (data) => data.id == dressInfo?.type
                  ).map((data) => {
                    return (
                      <ul
                        key={data?.id}
                        className="text-sm font-AeonikProRegular"
                      >
                        <li className="mb-[14px] md:mb-4">
                          <Link to="#" className="flex items-center">
                            <img src={data?.man} alt="" className="ml-[2px]" />
                            <span className="ml-[14px]">Мужчины</span>
                          </Link>
                        </li>
                        <li className="mb-[14px] md:mb-4">
                          <Link to="#" className="flex items-center">
                            <img
                              src={data?.woman}
                              alt=""
                              className="ml-[2px]"
                            />
                            <span className="ml-[14px]">Женщины</span>
                          </Link>
                        </li>
                        <li className="mb-[14px] md:mb-4">
                          <Link to="#" className="flex items-center">
                            <img src={data?.boy} alt="" />
                            <span className="ml-3">Мальчикы</span>
                          </Link>
                        </li>
                        <li className="mb-[14px] md:mb-4">
                          <Link to="#" className="flex items-center">
                            <img src={data?.girl} alt="" />
                            <span className="ml-3">Девочкы</span>
                          </Link>
                        </li>
                        <li className="mb-[14px] md:mb-4">
                          <Link to="#" className="flex items-center">
                            <img src={data?.childs} alt="" />
                            <span className="ml-3">Младенцы</span>
                          </Link>
                        </li>
                      </ul>
                    );
                  })}
                </section>
              </article>

              {/* Feedback for mobile */}
              <Link
                to="#"
                className="flex justify-center items-center bg-bgColor pl-3 py-[15px] border border-searchBgColor rounded-lg ss:my-[35px] md:my-0 ls:pl-6 md:pl-16 md:mb-0 md:hidden"
              >
                <span>
                  <UploadIcons />
                </span>
                <p className="text-base font-AeonikProMedium leading-4 ml-[12.5px] mr-2 ls:mr-6 md:mr-[32.37px]">
                  Форма для обратной связи
                </p>
                <span className="mr-2 ls:mr-3 md:mr-5 rotate-[90deg]">
                  <ArrowTopIcons colors={"#000"} />
                </span>
              </Link>

              {/* Menu for Mobile */}
              <article className="flex w-full md:hidden md:px-0   md:mb-0">
                <ul className="flex flex-row text-sm">
                  <article className="basis-1/2">
                    <li className="mb-4">
                      <Link to="#" className="flex items-center">
                        <MarketIcons colors={"#000"} />
                        <p className="font-AeonikProRegular ml-2">Магазины</p>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="#" className="flex items-center">
                        <HouseStatisticIcons colors={"#000"} />
                        <p className="font-AeonikProRegular ml-2">Бизнес</p>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="#" className="flex items-center">
                        <MapIcons colors={"#000"} />
                        <p className="font-AeonikProRegular ml-2">Карта</p>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="#" className="flex items-center">
                        <ListCollectionIcons />
                        <p className="font-AeonikProRegular ml-2">Мои заказы</p>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="#" className="flex items-center">
                        <PrivateCheckIcons />
                        <p className="font-AeonikProRegular ml-2">
                          Политика конфиденциальности
                        </p>
                      </Link>
                    </li>
                  </article>
                  <article className="basis-1/2 pl-6">
                    <li className="mb-4">
                      <Link to="#" className="flex items-center">
                        <CommentIcons colors={"#000"} />
                        <p className="font-AeonikProRegular ml-2">Помощь</p>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="#" className="flex items-center">
                        <PhoneIcons colors={"#000"} />
                        <p className="font-AeonikProRegular ml-2">Контакты</p>
                      </Link>
                    </li>
                  </article>
                </ul>
              </article>

              {/* Location and Language for mobile */}
              <article className="flex flex-row justify-between w-full  items-center ss:my-[35px] md:my-0  text-sm md:hidden">
                <Popover
                  open={openRegionMobile}
                  onOpenChange={handleOpenChangeRegionMobile}
                  className="basis-[48%] h-[44px] flex items-center px-[14px] select-none  justify-between  bg-bgColor rounded-lg group "
                  trigger="click"
                  options={["Hide"]}
                  placement="bottom"
                  content={contentMobile}
                >
                  <LocationIcons />
                  <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black">
                    {selectRegionMobile}
                  </span>
                  <BiChevronDown
                    size={25}
                    style={{ color: "#c2c2c2" }}
                    className={`${
                      openRegionMobile
                        ? "rotate-[-180deg] transition ease-linear duration-200"
                        : "transition ease-linear duration-200"
                    }`}
                  />
                </Popover>
                {LanguageMobile.filter(
                  (data) => data.id == selectLanguageMobile
                ).map((data) => {
                  return (
                    <Popover
                      key={data?.id}
                      open={openLanguageMobile}
                      onOpenChange={handleOpenChangeLanguageMobile}
                      className="basis-[48%] h-[44px] flex items-center select-none px-[14px]  justify-between  bg-bgColor  border border-searchBgColor rounded-lg group "
                      trigger="click"
                      options={["Hide"]}
                      placement="bottom"
                      content={contentLanguageMobile}
                    >
                      <figure className="mr-1">
                        <img src={data?.icons} alt="" />
                      </figure>
                      <span className="text-sm font-AeonikProMedium not-italic">
                        {data?.type}
                      </span>
                      <BiChevronDown
                        size={25}
                        style={{ color: "#c2c2c2" }}
                        className={`${
                          openLanguageMobile
                            ? "rotate-[-180deg] transition ease-linear duration-200"
                            : "transition ease-linear duration-200"
                        }`}
                      />
                    </Popover>
                  );
                })}
              </article>

              {/* Social networks */}
              <article className="block  md:hidden">
                <p className="w-full font-AeonikProMedium cursor-pointer text-base mb-5">
                  Социальная сеть
                </p>
                <div className="w-full">
                  <ul className="w-full flex items-center text-sm">
                    <article className="basis-1/2">
                      <li className="mb-4">
                        <Link to="#" className="flex items-center">
                          <FiInstagram className="text-[20px]" />
                          <p className="font-AeonikProRegular ml-2">
                            Instagram
                          </p>
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link to="#" className="flex items-center">
                          <RiFacebookCircleLine className="text-[20px]" />
                          <p className="font-AeonikProRegular ml-2">Facebook</p>
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link to="#" className="flex items-center">
                          <RiMessengerLine className="text-[20px]" />
                          <p className="font-AeonikProRegular ml-2">Message</p>
                        </Link>
                      </li>
                    </article>
                    <article className="basis-1/2 mb-9 pl-4">
                      <li className="mb-4">
                        <Link to="#" className="flex items-center">
                          <TbBrandTelegram className="text-[20px]" />
                          <p className="font-AeonikProRegular ml-2">Telegram</p>
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link to="#" className="flex items-center">
                          <AiOutlineYoutube className="text-[20px]" />
                          <p className="font-AeonikProRegular ml-2  ss:text-sm md:text-base">
                            You Tube
                          </p>
                        </Link>
                      </li>
                    </article>
                  </ul>
                </div>
              </article>
            </section>

            <div className="w-full border-b md:hidden ss:block border-gray-200"></div>

            <section className=" ss:mt-[40px] md:mt-[62px]">
              {/* Catalog and Clothes types */}
              <section className="mb-[60px]">
                {/* Catalog Types */}
                <article className="w-full block mb-7 md:block">
                  <p className="text-base font-AeonikProMedium mb-5 flex">
                    Каталоги одежды
                  </p>
                  <ul className="flex flex-row items-center flex-wrap">
                    {catalogTypes.map((catalog, index) => (
                      <li
                        key={index}
                        className="mr-[6px] mb-3 text-sm font-AeonikProMedium"
                      >
                        <button className="bg-searchBgColor rounded-lg px-4 py-[10px]">
                          {catalog.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </article>

                {/* Clothing Types */}
                <article className="w-full block md:hidden">
                  <p className="text-base font-AeonikProMedium mb-5 flex">
                    Типы одежды
                  </p>
                  <ul className="flex flex-row items-center flex-wrap">
                    {clothingTypes.map((catalog, index) => (
                      <li
                        key={index}
                        className="mr-[6px] mb-3 text-sm font-AeonikProMedium"
                      >
                        <button className="bg-searchBgColor rounded-lg px-4 py-[10px]">
                          {catalog.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </article>
              </section>

              {/* footer bottom section */}
              <section className="w-full flex items-center justify-between">
                <article className="w-full block justify-between">
                  <section className="w-full flex items-center justify-between text-sm font-AeonikProMedium lg:w-fit">
                    <article className="flex justify-between items-center ">
                      <span className="mr-2 mt-[-4px]">
                        <FooterOriginalIcons />
                      </span>
                      <span className="text-sm">2022 — Dress.me</span>
                    </article>
                    <article className="md:ml-4 md:mr-4">
                      <p>Все права защищены.</p>
                    </article>
                    <article className="md:flex font-AeonikProMedium text-center mt-3 hidden lg:m-0">
                      <p className="ml-auto">Разработано командой</p>
                      <Link
                        to="#"
                        className={`${dressInfo?.TextColorSeason} border-b ml-1`}
                      >
                        Dressme
                      </Link>
                    </article>
                  </section>
                  <section className="font-AeonikProMedium text-center mt-3 text-sm block md:hidden">
                    <p>Designed by</p>
                    <Link
                      to="#"
                      className={`${dressInfo?.TextColorSeason} border-b ml-2`}
                    >
                      Prince.UI
                    </Link>
                  </section>
                </article>
                <article className="flex items-center text-sm ss:hidden md:flex gap-x-3">
                  <Popover
                    open={openPriceFooter}
                    onOpenChange={handleOpenChangePriceFooter}
                    className="w-[175px]  h-12 px-4 rounded-lg bg-bgColor  border-searchBgColor border  flex items-center justify-between  cursor-pointer select-none group "
                    trigger="click"
                    options={["Hide"]}
                    placement="bottom"
                    content={contentPrice}
                  >
                    <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black">
                      {selectPriceFooter}
                    </span>

                    <ArrowTopIcons
                      colors={"#000"}
                      className={`${
                        openPriceFooter
                          ? "rotate-[-180deg] transition ease-linear duration-200"
                          : "transition ease-linear duration-200"
                      }`}
                    />
                  </Popover>
                  <Popover
                    open={openRegionFooter}
                    onOpenChange={handleOpenChangeRegionFooter}
                    className="w-[175px]  h-12 px-4  rounded-lg bg-bgColor  border-searchBgColor border  flex items-center justify-between  cursor-pointer select-none group "
                    trigger="click"
                    options={["Hide"]}
                    placement="bottom"
                    content={contentRegion}
                  >
                    <LocationIcons />
                    <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black">
                      {selectRegionFooter}
                    </span>
                    <ArrowTopIcons
                      colors={"#000"}
                      className={`${
                        openRegionFooter
                          ? "rotate-[-180deg] transition ease-linear duration-200"
                          : "transition ease-linear duration-200"
                      }`}
                    />
                  </Popover>
                  {LanguageList.filter(
                    (data) => data.id === selectLanguageFooter
                  ).map((data) => {
                    return (
                      <Popover
                        key={data?.id}
                        open={openLanguageFooter}
                        onOpenChange={handleOpenChangeLanguageFooter}
                        className="w-[175px]  h-12 px-4 rounded-lg bg-bgColor  border-searchBgColor border  flex items-center justify-between  cursor-pointer select-none group "
                        trigger="click"
                        options={["Hide"]}
                        placement="bottom"
                        content={contentLanguage}
                      >
                        <figure className="mr-1">
                          <img src={data?.icons} alt="" />
                        </figure>
                        <span className="text-sm  font-AeonikProMedium not-italic">
                          {data?.type}
                        </span>
                        <ArrowTopIcons
                          colors={"#000"}
                          className={`${
                            openLanguageFooter
                              ? "rotate-[-180deg] transition ease-linear duration-200"
                              : "transition ease-linear duration-200"
                          }`}
                        />
                      </Popover>
                    );
                  })}
                </article>
              </section>
            </section>
          </div>
        </article>
      </section>
    </footer>
  );
};
export default Footer;
