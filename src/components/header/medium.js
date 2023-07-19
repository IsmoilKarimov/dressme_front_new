import React, { useState, useContext, useEffect, Fragment } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { Popover } from "antd";
import {
  ActivePersonIcons,
  ArrowPrevousNext,
  ArrowTopIcons,
  CommentIcons,
  CotegoryIcons,
  HouseStatisticIcons,
  LocationIcons,
  MapIcons,
  MarketIcons,
  MenuCloseIcons,
  MenuOpenIcons,
  PersonIcons,
  PhoneIcons,
  SearchIcons,
  VolumeIcons,
} from "../../AssetsMain/icons";
import {
  BrandAutumm,
  BrandSpring,
  BrandSummer,
  BrandWinter,
  SpringMale,
  SummerMale,
  AutummMale,
  WinterMale,
  SpringFemale,
  SummerFemale,
  AutummFemale,
  WinterFemale,
  springSeason,
  summerSeason,
  winterSeason,
  autummSeason,
  UzbekFlag,
  HeartImg,
  catolog4,
  catolog5,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img1,
  img2,
} from "../../AssetsMain";
import NavCategoryModal from "./navCategoryModal";

const MediumHeader = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [showModal, setShowModal] = useState(false);

  const [state, setState] = useState({
    hamburgerMenu: false,
    toggle: false,
    genderActive: true,
  });

  useEffect(() => {
    if (state?.hamburgerMenu || showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [state?.hamburgerMenu, showModal]);

  // -----------------------------------------------------
  const [scrollPost, setscrollPost] = useState(0);
  const handleScroll = () => {
    setscrollPost(document.body.getBoundingClientRect().top);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPost]);

  const SeasonTypeArray = [
    { id: 1111, type: "Spring", icons: springSeason },
    { id: 2222, type: "Summer", icons: summerSeason },
    { id: 3333, type: "Autumm", icons: autummSeason },
    { id: 4444, type: "Winter", icons: winterSeason },
  ];
  const BrandTypeArray = [
    { id: 1111, type: "Spring", icons: BrandSpring },
    { id: 2222, type: "Summer", icons: BrandSummer },
    { id: 3333, type: "Autumm", icons: BrandAutumm },
    { id: 4444, type: "Winter", icons: BrandWinter },
  ];
  const categoryModalArray = [
    { id: 1111, img: img1, type: "Мужчинам" },
    { id: 2222, img: img2, type: "Женщинам" },
    { id: 3333, img: img3, type: "Детям" },
    { id: 4444, img: img4, type: "Головные уборы" },
    { id: 5555, img: img5, type: "Верхняя одежда" },
    { id: 6666, img: img6, type: "Нижняя одежда" },
    { id: 7777, img: img7, type: "Обувь" },
    { id: 8888, img: img8, type: "Аксессуары" },
  ];
  const personItems = [
    { id: 1111, man: SpringMale, woman: SpringFemale },
    { id: 2222, man: SummerMale, woman: SummerFemale },
    { id: 3333, man: AutummMale, woman: AutummFemale },
    { id: 4444, man: WinterMale, woman: WinterFemale },
  ];
  //------------------------------------------------------------------------------------------------
  const toggleHamburger = () => {
    setState({ ...state, hamburgerMenu: !state.hamburgerMenu });
  };

  // ----------------Wear state management----------------------------
  const [openwear, setOpenwear] = useState(false);
  const handleOpenChangeWear = (newOpen) => {
    setOpenwear(newOpen);
  };

  const handleSeason = (id) => {
    setDressInfo({ ...dressInfo, type: id });
    setOpenwear(false);
  };

  const contentWear = (
    <section className="ss:w-fit md:w-[120px] h-fit m-0 p-0 ">
      {SeasonTypeArray.map((value) => {
        return (
          <article
            key={value?.id}
            className="w-full h-[42px] flex items-center justify-center md:pl-3 md:justify-start not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor"
            onClick={() => handleSeason(value.id)}
          >
            <figure className="md:mr-3">
              <img src={value?.icons} alt="" />
            </figure>
            <article
              className={`ss:hidden md:inline-block font-AeonikProMedium text-base text-black not-italic ${dressInfo?.TextHoverSeason}`}
            >
              {value?.type}
            </article>
          </article>
        );
      })}
    </section>
  );

  // Location pathname
  const location = useLocation();
  const navigate = useNavigate();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="flex flex-col justify-center items-center m-0 p-0 box-border">
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-[112] w-full h-[100vh] "
        ></div>
      )}
      <article className="fixed top-[300px] z-[113] left-[53.8%]   right-1/2 translate-x-[-50%] translate-y-[-50%] inset-0 w-fit h-fit">
        <NavCategoryModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      </article>
      <div className="max-w-[1280px] w-[100%] block md:flex px-3 md:px-0 md:py-0 justify-center  bg-yandexNavbar backdrop-blur-sm items-center m-auto ">
        <div className="relative">
          {/* Starting of Full Screen page section */}
          <section className="w-full flex justify-center items-center py-3 overscroll-none overflow-y-hidden ">
            <div className=" w-full flex items-center ss:w-full md:w-fit justify-between ">
              {/* Menu section */}
              {locationWindow !== "/delivery-points" ? (
                <article
                  onClick={toggleHamburger}
                  className={`flex items-center justify-center bg-btnBgColor border border-searchBgColor w-12 h-12 cursor-pointer md:hidden rounded-xl`}
                >
                  {state?.hamburgerMenu ? (
                    <figure>
                      <MenuCloseIcons />
                    </figure>
                  ) : (
                    <figure>
                      <MenuOpenIcons />
                    </figure>
                  )}
                </article>
              ) : (
                <article
                  onClick={() => {
                    navigate(-1);
                  }}
                  className={`flex items-center justify-center bg-btnBgColor border border-searchBgColor w-12 h-12 cursor-pointer md:hidden rounded-xl`}
                >
                  <span>
                    <ArrowPrevousNext />
                  </span>
                </article>
              )}

              {/* Logo section */}
              <NavLink
                to="/"
                className="flex justify-center items-center select-none rounded-xl h-[48px] ss:w-[calc(100%-96px)] ss:p-2 ll:p-1 md:p-0 md:w-[155px] ss:ml-2 md:ml-[0px]  ss:bg-btnBgColor md:bg-transparent"
              >
                {BrandTypeArray.filter(
                  (data) => data.id === dressInfo.type
                ).map((data) => {
                  return (
                    <img
                      key={data?.id}
                      className="h-full"
                      src={data?.icons}
                      alt="logo"
                    />
                  );
                })}
              </NavLink>

              {/* Voice section */}
              <div
                className={` bg-btnBgColor w-11 h-11 ml-[25px] rounded-xl cursor-pointer hidden items-center justify-center md:flex`}
              >
                <span className="w-[22px]">
                  <VolumeIcons colors={dressInfo?.ColorSeason} />
                </span>
              </div>

              {/* Weather section */}
              <article className="w-12 h-12 md:w-[120px] md:h-11 bg-btnBgColor border border-searchBgColor rounded-xl  md:rounded-lg ml-2">
                {SeasonTypeArray.filter(
                  (data) => data.id === dressInfo.type
                ).map((data) => {
                  return (
                    <Popover
                      key={data?.id}
                      open={openwear}
                      onOpenChange={handleOpenChangeWear}
                      className="w-full h-full flex items-center justify-center rounded-lg cursor-pointer  "
                      trigger="click"
                      options={["Hide"]}
                      placement="bottom"
                      content={contentWear}
                    >
                      <figure className="w-full h-full sm:flex items-center select-none cursor-pointer  ">
                        <img
                          src={data?.icons}
                          alt="weather"
                          className="mr-0 md:mr-[5px] "
                        />
                        <figcaption className="ss:hidden font-AeonikProMedium hidden md:flex items-center text-[15px] ">
                          {data?.type}
                        </figcaption>
                      </figure>
                    </Popover>
                  );
                })}
              </article>

              {/* Searching section */}

              <article className="items-center justify-center rounded-xl font-AeonikProMedium h-[44px] md:border-transparent md:w-[676px] ml-2 ss:hidden md:flex">
                {/* Catalog section */}
                <button
                  className={`items-center left-20 ${dressInfo?.BtnOpacitySeason} justify-center px-5 gap-x-[10px] h-[44px] rounded-l-xl cursor-pointer hidden md:flex`}
                  onClick={() => setShowModal(!showModal)}
                >
                  <span>
                    <CotegoryIcons colors={dressInfo?.ColorSeason} />
                  </span>
                  <span
                    className={`not-italic font-AeonikProMedium text-sm leading-4 `}
                  >
                    Категория
                  </span>
                </button>

                <span className="flex md:hidden">
                  <SearchIcons />
                </span>
                <input
                  type="text"
                  placeholder="Поиск продуктов или брендов"
                  className="bg-transparent w-full px-3 h-[44px] text-sm border border-transparent md:border-searchBgColor placeholder:font-AeonikProRegular"
                />
                <button className="bg-searchBgColor border border-searchBgColor w-[100px]  h-[44px] items-center justify-center rounded-r-xl  hidden md:flex -ml-[2px]">
                  <span>
                    <SearchIcons />
                  </span>
                </button>
              </article>

              {/* Line border */}
              <article className="line h-5 border-x-[1px] text-textColor ss:hidden md:block mx-3"></article>

              {/* Map section */}
              <NavLink
                to="/delivery-points"
                className="items-center justify-center bg-btnBgColor rounded-xl md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex"
              >
                <span className="pr-[6px]">
                  <MapIcons colors={"#000"} />
                </span>
                <p className="font-AeonikProMedium text-sm">Карта</p>
              </NavLink>

              {/* Line border */}
              <p className="line h-5 border-x-[1px] text-textColor ss:hidden md:block mx-3"></p>

              {/* User section */}
              {localStorage.getItem("dressMeLogin") ? (
                <NavLink
                  to="/profile/settings"
                  className=" bg-btnBgColor rounded-xl items-center justify-center w-11 h-11 mr-2 hidden md:flex"
                >
                  {({ isActive }) =>
                    isActive ? (
                      <span>
                        <ActivePersonIcons colors={dressInfo?.ColorSeason} />
                      </span>
                    ) : (
                      <span>
                        <PersonIcons colors={"#000"} />
                      </span>
                    )
                  }
                </NavLink>
              ) : (
                <NavLink
                  to="/sign_in"
                  className=" bg-btnBgColor rounded-xl items-center justify-center w-11 h-11 mr-2 hidden md:flex"
                >
                  <span>
                    <PersonIcons colors={"#000"} />
                  </span>
                </NavLink>
              )}

              {/* Heart section */}
              <NavLink
                to="/favourites"
                className={
                  "bg-btnBgColor rounded-xl  items-center justify-center w-11 h-11 mr-2 md:mr-0 hidden md:flex"
                }
              >
                {({ isActive }) =>
                  isActive ? (
                    <span>
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 15 14"
                        fill="#D50000"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.41337 12.8733C8.18671 12.9533 7.81337 12.9533 7.58671 12.8733C5.65337 12.2133 1.33337 9.45998 1.33337 4.79332C1.33337 2.73332 2.99337 1.06665 5.04004 1.06665C6.25337 1.06665 7.32671 1.65332 8.00004 2.55998C8.67337 1.65332 9.75337 1.06665 10.96 1.06665C13.0067 1.06665 14.6667 2.73332 14.6667 4.79332C14.6667 9.45998 10.3467 12.2133 8.41337 12.8733Z"
                          stroke="#D50000"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <figure>
                      <img src={HeartImg} className={"w-5 h-5"} alt="heart" />
                    </figure>
                  )
                }
              </NavLink>
            </div>
          </section>

          {/*Starting of Blocked  Hamburger Menu section */}
          <section
            className={`max-w-[440px] w-[100%] z-50 fixed bg-white top-[70px] left-0 right-0 bottom-0 h-screen pb-[140px] px-3 ${
              state?.hamburgerMenu
                ? " flex flex-col ease-linear duration-500 overscroll-none"
                : "left-[-500px] lg:left-[-1000px] ease-linear duration-500"
            }`}
          >
            <div className={`w-full h-full flex flex-wrap content-between`}>
              {/* Searching section */}
              <article className={`w-full h-fit flex flex-col `}>
                <div className="search flex items-center bg-btnBgColor justify-between rounded-xl font-AeonikProMedium h-12 mt-3 mb-3 border border-searchBgColor ss:mt-3 md:hidden w-full">
                  <span className=" flex ss:pl-[11.65px] md:hidden">
                    <SearchIcons />
                  </span>

                  <input
                    type="text"
                    placeholder="Искать товары или бренды"
                    className="bg-transparent w-full px-3 h-12 text-[14px] bg-btnBgColor border border-transparent md:border-searchBgColor md:mx-0 md:-ml-[3px] md:px-3 md:h-12
                  placeholder-italic placeholder-AeonikProMedium placeholder-sm leading-4 placeholder-setTexOpacity placeholder-[1px]
                  "
                  />
                </div>

                {/* Categories */}
                <ul className="flex flex-col w-full">
                  <li>
                    <button
                      onClick={() =>
                        setState({ ...state, hamburgerMenu: false })
                      }
                      className="flex items-center bg-btnBgColor  font-AeonikProMedium h-[52px] border rounded-xl border-searchBgColor px-5 mb-3 w-full"
                    >
                      <div className="flex items-center">
                        <span className=" py-3 pr-3">
                          <HouseStatisticIcons colors={"#000"} />
                        </span>
                        <span className="ml-[11.67px]">Бизнес</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons colors={"#000"} />
                      </span>
                    </button>
                  </li>
                  <li>
                    <NavLink
                      onClick={() =>
                        setState({ ...state, hamburgerMenu: false })
                      }
                      to="/stores"
                      className="flex items-center bg-btnBgColor  font-AeonikProMedium h-[52px] border rounded-xl border-searchBgColor px-5 mb-3 w-full"
                    >
                      <div className="flex items-center">
                        <span className=" py-3 pr-3">
                          <MarketIcons colors={"#000"} />
                        </span>
                        <span className="ml-[11.67px]">Магазины</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons colors={"#000"} />
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() =>
                        setState({ ...state, hamburgerMenu: false })
                      }
                      to="#"
                      className="flex items-center bg-btnBgColor  font-AeonikProMedium h-[52px] border rounded-xl border-searchBgColor px-5 mb-3 w-full"
                    >
                      <div className="flex items-center">
                        <span className=" py-3 pr-3">
                          <CommentIcons colors={"#000"} />
                        </span>
                        <span className="ml-[11.67px]">Помощь</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons colors={"#000"} />
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() =>
                        setState({ ...state, hamburgerMenu: false })
                      }
                      to="#"
                      className="flex items-center bg-btnBgColor  font-AeonikProMedium h-[52px] border rounded-xl border-searchBgColor px-5 mb-3 w-full"
                    >
                      <div className="flex items-center">
                        <span className=" py-3 pr-3">
                          <PhoneIcons colors={"#000"} />
                        </span>
                        <span className="ml-[11.67px]">Контакты</span>
                      </div>
                      <span className="arrowRotate ml-auto rotate-[90deg]">
                        <ArrowTopIcons colors={"#000"} />
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </article>

              <article className="w-full flex flex-col">
                {/* Line */}
                <div className="line border-b w-full  border-searchBgColor mb-3 ls:w-full"></div>

                {/* Location and Language */}
                <div className="flex items-center justify-between h-fit mb-3">
                  <button className="left h-[52px] rounded-xl flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]">
                    <span>
                      <LocationIcons />
                    </span>
                    <span className="ml-[10px] mr-5">Tashkent</span>
                    <span className="">
                      <ArrowTopIcons colors={"#000"} />
                    </span>{" "}
                  </button>
                  <Link
                    to="#"
                    className="left h-[52px] rounded-xl flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                  >
                    <img src={UzbekFlag} alt="." />
                    <span className="ml-[10px] mr-5">English</span>
                    <span className="">
                      <ArrowTopIcons colors={"#000"} />
                    </span>
                  </Link>
                </div>
              </article>
            </div>
          </section>
          {/*Starting of Blocked  Hamburger Menu section */}
          {locationWindow !== "/delivery-points" && (
            <section className={`md:hidden relative w-full mx-auto `}>
              {locationWindow !== "/catalog" && (
                <div className={`sticky top-0 py-1 bg-white  w-full z-10`}>
                  {/* Searching section */}
                  <article className=" flex items-center rounded-xl font-AeonikProMedium h-12 ss:w-[100%]  border border-searchBgColor bg-white ">
                    <span className="pl-[11.65px]">
                      <SearchIcons />
                    </span>
                    <input
                      type="text"
                      placeholder="Искать товары или бренды"
                      className="bg-transparent w-full h-full text-[14px] border border-transparent px-2  "
                    />
                  </article>
                </div>
              )}

              {/* Gender selection for Mobile */}
              {locationWindow === "/" && (
                <article className="flex flex-wrap items-center justify-between rounded-xl  my-4 w-full ">
                  {personItems
                    ?.filter((value) => value.id === dressInfo?.type)
                    .map((data) => {
                      return (
                        <div
                          key={data?.id}
                          className="max-w-[440px] w-[100%] bg-btnBgColor flex items-center justify-between border border-searchBgColor rounded-xl overflow-hidden"
                        >
                          <button
                            onClick={() =>
                              setState({ ...state, genderActive: true })
                            }
                            className={` font-AeonikProMedium ${
                              state?.genderActive
                                ? "bg-white border border-searchBgColor"
                                : "bg-transparent"
                            } w-[50%]  rounded-xl h-[52px]  justify-center flex items-center`}
                          >
                            <img src={data?.woman} alt="female" />
                            <span className="ml-3">Женщинам</span>
                          </button>
                          <button
                            onClick={() =>
                              setState({ ...state, genderActive: false })
                            }
                            className={` font-AeonikProMedium ${
                              !state?.genderActive
                                ? "bg-white border border-searchBgColor"
                                : "bg-transparent"
                            } w-[50%]  rounded-xl h-[52px]  justify-center flex items-center`}
                          >
                            <img src={data?.man} alt="male" />
                            <span className="ml-3"> Мужчинам</span>
                          </button>
                        </div>
                      );
                    })}
                </article>
              )}
            </section>
          )}
          {/* Ending of Blocked  Hamburger Menu section  */}
        </div>
      </div>
    </nav>
  );
};
export default MediumHeader;
