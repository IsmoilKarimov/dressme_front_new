import React, { useState, useContext, useEffect, Fragment } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { Popover } from "antd";
import {
  ActivePersonIcons,
  ArrowPrevousNext,
  ArrowTopIcons,
  ChildGenIcon,
  CommentIcons,
  CotegoryIcons,
  CotegoryMenuIcons,
  HouseStatisticIcons,
  LocationIcons,
  ManGenIcons,
  MapIcons,
  MarketIcons,
  MenuCloseIcons,
  MenuOpenIcons,
  PersonIcons,
  PhoneIcons,
  SearchIcons,
  VolumeIcons,
  WomanGenIcons,
} from "../../assets/icons";
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
} from "../../assets";
import NavCategoryModal from "./navCategoryModal";

const MediumHeader = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [state, setState] = useState({
    hamburgerMenu: false,
    toggle: false,
    genderActive: true,
  });

  useEffect(() => {
    if (state?.hamburgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [state?.hamburgerMenu]);

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

  useEffect(() => {
    if (dressInfo?.openCatologId) {
      setDressInfo({ ...dressInfo, openCatologId: false });
    }
  }, [scrollPost]);

  // console.log(scrollPost, "scrollPostscrollPost");
  // console.log(showModal, "showModal");
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

  const [genderType, setGenderType] = useState([
    {
      id: 1,
      action: true,
      name: "Все",
      icon: <CotegoryMenuIcons />,
    },
    {
      id: 2,
      action: false,
      name: "",
      icon: <ManGenIcons />,
    },
    {
      id: 3,
      action: false,
      name: "",
      icon: <WomanGenIcons />,
    },
    {
      id: 4,
      action: false,
      name: "",
      icon: <ChildGenIcon />,
    },
  ]);

  const handleGenderDataCheck = (value) => {
    setGenderType((data) => {
      return data.map((e) => {
        if (e.id == value) {
          return { ...e, action: true };
        } else return { ...e, action: false };
      });
    });
  };

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
      {dressInfo?.openCatologId && (
        <div
          onClick={() => setDressInfo({ ...dressInfo, openCatologId: false })}
          className="fixed inset-0 z-[112] w-[100%] h-[100vh] scroll-m-0"
        ></div>
      )}
      <article
        className={`fixed top-[300px] z-[113] left-[52.9%] right-1/2 overflow-hidden translate-x-[-50%] translate-y-[-50%] inset-0 w-fit h-fit shadow-modalCategoryShadow transform tras ${dressInfo?.openCatologId ? "" : "hidden"
          }`}
      >
        <NavCategoryModal />
      </article>
      <div className="max-w-[1280px] w-[100%] block md:flex px-3 md:px-0 md:py-0 justify-center  bg-yandexNavbar backdrop-blur-sm items-center m-auto ">
        {locationWindow !== "/allcomments" ? (
          <div className="relative">
            {/* Starting of Full Screen page section */}
            <section className="w-full justify-center items-center py-3 overscroll-none overflow-y-hidden ">
              <div className=" w-full flex items-center ss:w-full md:w-fit justify-between ">
                {/* Menu section */}
                {locationWindow !== "/delivery-points" ? (
                  <article
                    onClick={toggleHamburger}
                    className={`flex items-center justify-center bg-btnBgColor border border-searchBgColor w-12 h-12 cursor-pointer md:hidden rounded-xl`}
                  >
                    {state?.hamburgerMenu ? (
                      <figure>
                        <MenuCloseIcons colors={"#000"} />
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
                <article className="w-12 h-12 md:w-[120px]  md:h-11 bg-btnBgColor border border-searchBgColor rounded-xl ml-2">
                  <div className="w-full h-full md:flex hidden items-center justify-between">
                    {
                      SeasonTypeArray?.map(item => {
                        return (
                          <img
                            key={item?.id}
                            onClick={() => handleSeason(item.id)}
                            src={item?.icons}
                            alt="weather"
                            className=" cursor-pointer "
                          />
                        )
                      })
                    }
                  </div>
                  <div className="w-full h-full md:hidden">
                    {SeasonTypeArray.filter(
                      (data) => data.id === dressInfo.type
                    ).map((data) => {
                      return (
                        <Popover
                          key={data?.id}
                          className="w-full h-full flex items-center justify-center rounded-lg cursor-pointer  "
                          open={openwear}
                          onOpenChange={handleOpenChangeWear}
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
                  </div>
                </article>

                {/* Searching section */}
                <article className="items-center justify-center rounded-xl font-AeonikProMedium h-[44px] md:border-transparent md:w-[676px] ml-2 ss:hidden md:flex">
                  {/* Catalog section */}
                  <button
                    className={`items-center left-20 ${dressInfo?.BtnOpacitySeason} justify-center px-5 gap-x-[10px] h-[44px] rounded-l-xl cursor-pointer hidden md:flex`}
                    onClick={() =>
                      setDressInfo({
                        ...dressInfo,
                        openCatologId: !dressInfo?.openCatologId,
                      })
                    }
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
            {/*Starting of Opened Hamburger Menu section */}
            <section
              className={`max-w-[440px] w-[100%] z-50 fixed bg-white top-[70px] left-0 right-0 bottom-0 h-screen pb-[140px] px-3 ${state?.hamburgerMenu
                ? " flex flex-col ease-linear duration-500 overscroll-none"
                : "left-[-500px] lg:left-[-1000px] ease-linear duration-500"
                }`}
            >
              <div className={`w-full h-fit flex flex-wrap `}>
                {/* Gender selection for Mobile */}
                <section className="w-full flex items-center border border-searchBgColor rounded-xl my-3 bg-btnBgColor md:mt-0">
                  {genderType.map((data) => {
                    return (
                      <div
                        key={data.id}
                        className="w-full flex justify-center items-center h-12 rounded-xl"
                      >
                        <button
                          key={data.id}
                          onClick={() => handleGenderDataCheck(data.id)}
                          className={`w-full flex items-center justify-center h-12 text-[15px] text-center ${!data.name ? "px-5" : "px-7"
                            } font-AeonikProRegular ${data.action
                              ? `{ bg-white border w-full h-[98%] my-auto mx-auto border-searchBgColor rounded-xl `
                              : ""
                            } `}
                        >
                          <span>{data.icon}</span>
                          {data.name ? <p className="pl-2 text-borderWinter">{data.name}</p> : ""}
                        </button>
                        <span
                          className={`${data.id === 4
                            ? "text-searchBgColor hidden"
                            : "text-searchBgColor flex items-center"
                            }`}
                        >
                          |
                        </span>
                      </div>
                    );
                  })}
                </section>
                <ul className="flex flex-col w-full">
                  {/* Categories */}
                  <li>
                    <NavLink
                      onClick={() =>
                        setState({ ...state, hamburgerMenu: false })
                      }
                      to="/signup-seller"
                      className="flex items-center bg-btnBgColor  font-AeonikProMedium h-[48px] border rounded-xl border-searchBgColor px-5 mb-3 w-full"
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
                    </NavLink>
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
                <article className="w-full flex flex-col">
                  {/* Line */}
                  <div className="line border-b w-full border-searchBgColor mb-3 ls:w-full"></div>

                  {/* Location and Language */}
                  <div className="flex items-center justify-between h-fit mb-3">
                    <button className="left h-[52px] rounded-xl flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]">
                      <span>
                        <LocationIcons />
                      </span>
                      <span className="ml-[10px] mr-5">Tashkent</span>
                      <span className="rotate-180">
                        <ArrowTopIcons colors={"#000"} />
                      </span>{" "}
                    </button>
                    <Link
                      to="#"
                      className="left h-[48px] rounded-xl flex items-center justify-center font-AeonikProMedium rouded-lg border border-searchBgColor bg-btnBgColor ss:w-[48%]"
                    >
                      <img src={UzbekFlag} alt="." />
                      <span className="ml-[10px] mr-5">English</span>
                      <span className="rotate-180">
                        <ArrowTopIcons colors={"#000"} />
                      </span>
                    </Link>
                  </div>
                </article>
              </div>
            </section>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};
export default MediumHeader;

