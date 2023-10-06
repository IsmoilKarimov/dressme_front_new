import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { EnglishFlag, RussianFlag, UzbekFlag } from "../../assets";
import { useQuery } from "@tanstack/react-query";
import { Popover } from "antd";
import { ArrowTopIcons, CommentIcons, HouseStatisticIcons, LocationIcons, MarketIcons, MenuCloseIcons } from "../../assets/icons";
import RegionList from "../../ContextHook/RegionsList";

const TopHeader = () => {
  const [dressInfo] = useContext(dressMainData);
  const [selectBtn, setSelectBtn] = useState(true)
  const [regionsShow, setRegionsShow] = useState(false)

  const [state, setState] = useState({
    regionId: "",
    subRegionId: "",
    //--- Regions Get ---
    getRegionList: "",
    //--- Get Profile ---
    getProfileList: "",
    //--- Get getSellerList ---
    getSellerList: "",
    // -----region Modal ---
    openModalRegions: false,
  })

  const url = "https://api.dressme.uz/api/seller"

  // -----Language Change-------------------
  const [selectLang, setselectLang] = useState(1);
  const LanguageList = [
    { id: 1, type: "English", icons: EnglishFlag },
    { id: 2, type: "Русский", icons: RussianFlag },
    { id: 3, type: "O'zbekcha", icons: UzbekFlag },
  ];
  const [openLang, setOpenLang] = useState(false);
  const handleOpenChangeWear = (newOpen) => {
    setOpenLang(newOpen);
  };
  const handleLangValue = (value) => {
    setselectLang(value);
    setOpenLang(false);
  };

  const contentLang = (
    <section className="w-fit h-fit m-0 p-0">
      {LanguageList.map((data) => {
        return (
          <article
            key={data?.id}
            className={`p-2 text-sm cursor-pointer hover:bg-bgColor flex items-center justify-start  ${dressInfo?.ColorSeason}`}
            onClick={() => {
              handleLangValue(data?.id);
            }}
          >
            <figure className="mr-[6px]  w-5 h-5">
              <img className="w-full h-full" src={data?.icons} alt="" />
            </figure>
            <article
              className={`not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black  ${dressInfo?.ColorSeason}`}
            >
              {data?.type}
            </article>
          </article>
        );
      })}
    </section>
  );

  // ------- Loading Region ------
  const { isLoading } = useQuery(["get region"], () => {
    return fetch(`${url}/regions`).then(res => res.json())
  },
    {
      onSuccess: (res) => {
        setState({ ...state, getRegionList: res, })
      },
      onError: (err) => {
        console.log(err, "err");
      },
      keepPreviousData: true, // bu browserdan tashqariga chiqib yana kirsa, yana yurishni oldini olish uchun
      refetchOnWindowFocus: false, // bu ham focus bolgan vaqti malumot olib kelish
    }
  )

  // ------------GET METHOD Profile-----------------
  useQuery(["get profile"], () => {
    return fetch(`${url}/profile`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("DressmeUserToken")}`,
      },

    }).then(res => res.json())
  },
    {
      onSuccess: (res) => {
        console.log(res, "res");
        setState({
          ...state, getProfileList: res,
          regionId: res?.region_id,
          subRegionId: res?.sub_region_id,
        })
      },
      onError: (err) => {
        console.log(err, "err");
      },
      keepPreviousData: true, // bu browserdan tashqariga chiqib yana kirsa, yana yurishni oldini olish uchun
      refetchOnWindowFocus: false, // bu ham focus bolgan vaqti malumot olib kelish
    }
  )

  // -------City Change -------------
  const [selectCity] = useState("Tashkent");
  const location = useLocation();
  const [locationWindow, setLocationWindow] = useState("");
  const [activeIndex, setActiveIndex] = useState();

  const accordionCityList = (id) => {
    if (activeIndex === id) {
      setActiveIndex(0)
    } else {
      setActiveIndex(id)
    }
  }

  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);


  return (
    <nav>
      <div
        onClick={() => {
          setState({ ...state, popConfirmDelete: false, openModalRegions: false })
        }}
        className={`fixed inset-0 z-[112] cursor-pointer duration-200 w-full h-[100vh] bg-black opacity-50
         ${state?.openModalRegions ? "" : "hidden" }`}
      ></div>

      <div
        className={`hidden md:block flex-col justify-center items-center m-0 p-0 box-border ${locationWindow === "/delivery-points"
          ? "bg-transparent h-[40px] "
          : "bg-bgColor h-[32px] "
          }`}
      >
        <section className="max-w-[1280px] w-[100%] h-full py-[2px] flex justify-between items-center m-auto  ">
          {/* LEFT SIDE */}
          <article className="left h-full flex items-center overscroll-none overflow-y-hidden overscroll-y-none">

            <section>
              <Link 
                onClick={()=> setRegionsShow(!regionsShow)}
                to="/" className="flex w-fit items-center">
                <LocationIcons />
                <div className="text-textColor text-[13px] ml-2 mr-[6px] font-AeonikProMedium">
                  Регион:
                </div>
                <div
                  onClick={() => {
                    setRegionsShow()
                  }}
                  className="w-[90px] font-AeonikProMedium flex items-center text-[13px]">
                  <span className="border-b border-slate-900">
                    {selectCity}
                  </span>
                </div>
              </Link>
              <div className={`${regionsShow ? '' : 'hidden'}`}>
                <RegionList  regionsShow={regionsShow}/>
              </div>
            </section>

            <section className="w-fit h-fit py-[4px] rounded bg-white font-AeonikProMedium select-none cursor-pointer">
              {LanguageList.filter((data) => data.id === selectLang).map(
                (data) => {
                  return (
                    <Popover
                      key={data?.id}
                      open={openLang}
                      onOpenChange={handleOpenChangeWear}
                      className="w-full flex text-[13px] items-center h-full px-3 "
                      trigger="click"
                      options={["Hide"]}
                      placement="bottom"
                      content={contentLang}
                    >
                      <span className="mr-[6px] ">
                        <img src={data?.icons} alt="" />
                      </span>
                      <p className="not-italic flex items-center font-AeonikProMedium text-sm text-black ">
                        {data?.type}
                      </p>
                    </Popover>
                  );
                }
              )}
            </section>
          </article>

          {/* RIGHT SIDE */}
          <article className="right h-full flex items-center">
            <NavLink
              to="#"
              className={`flex items-center h-fit py-[4px]`}>
              <span className="mr-2">
                <CommentIcons colors={"#707070"} />
              </span>
              <p className="text-textColor text-[13px] font-AeonikProMedium">
                Помощь
              </p>
            </NavLink>
            <button
              type="button"
              onClick={() => window.open(' https://dressme-dashboard-new.vercel.app', "_blank")}
              className={`flex items-center h-fit py-[4px] ml-6
                // ${!selectBtn ? "py-[4px] px-3 bg-white rounded" : ""}
              `}
            >
              <p className="mr-2">
                <HouseStatisticIcons colors={"#707070"} />
              </p>
              <p
                onClick={() => setSelectBtn(true)}
                className={`text-[13px] font-AeonikProMedium
                  ${!selectBtn ? "text-black" : "text-textColor"}
                `}
              >
                Бизнес
              </p>
            </button>
            <article className="line h-5 border text-textColor mx-6"></article>
            <NavLink
              to="/stores"
              onClick={() => setSelectBtn(true)}
              className={`flex items-center  cursor-pointer h-fit
                ${selectBtn ? "py-[4px] px-3 bg-white rounded" : ""}
              `}
            >
              <p className="mr-2">
                <MarketIcons colors={"#000"} />
              </p>
              <p className={`font-AeonikProMedium  text-[13px]
                  ${selectBtn ? "text-black" : "text-textColor"}
                `}
              >
                Магазины
              </p>
            </NavLink>
          </article>
        </section>
      </div>
    </nav >
  );
};
export default TopHeader;
