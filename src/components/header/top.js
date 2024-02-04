import React, { useCallback, useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { RussianFlag, UzbekFlag } from "../../assets";
import { Popover } from "antd";
import {
  HouseStatisticIcons,
  LocationIcons,
  MarketIcons,
} from "../../assets/icons";
import RegionList from "../../ContextHook/RegionsList";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hook/useHttp";
import { HomeMainDataContext } from "../../ContextHook/HomeMainData";

const TopHeader = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const { request } = useHttp()
  const [selectBtn, setSelectBtn] = useState(true);
  const [regionsShow, setRegionsShow] = useState(false);
  const toggleRegionsShow = useCallback(() => setRegionsShow(false), []);
  const [data, setData] = useContext(HomeMainDataContext);

  // -----Language Change-------------------
  const [selectLang, setselectLang] = useState(1);
  const LanguageList = [
    { id: 1, type: "Русский", icons: RussianFlag },
    { id: 2, type: "O'zbekcha", icons: UzbekFlag },
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

  // -------City Change -------------
  // const [selectCity] = useState("Tashkent");
  const location = useLocation();
  const [locationWindow, setLocationWindow] = useState("");

  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (regionsShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [regionsShow]);

  // ----------Get Region List
  const url = "https://api.dressme.uz/api/main";

  useQuery(["region-data"], () => {
    return request({ url: "/main/regions", token: true });
  },
    {
      onSuccess: (res) => {
        setData({
          ...data, mainRegionsList: res?.regions
        });
      },
      onError: (err) => {
        console.log(err, "ERR-PROFILE");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <nav>
      <div
        onClick={() => setRegionsShow(false)}
        className={`fixed inset-0 z-[230] cursor-pointer  duration-200 w-full h-[100vh] bg-black opacity-50
         ${regionsShow ? "" : "hidden"}`}
      ></div>
      {regionsShow && (
        <div
          className={`max-w-[600px]  w-full fixed duration-500 z-[231]  left-1/2 right-1/2 top-[50%] translate-x-[-50%] translate-y-[-50%]  h-fit flex items-center  justify-center mx-auto
        ${regionsShow
              ? " bottom-0 md:flex flex-col"
              : "bottom-[-1500px] z-[-10]"
            }
        `}
        >
          <RegionList onClick={toggleRegionsShow} />
        </div>
      )}

      <div
        className={`hidden md:block flex-col justify-center items-center m-0 p-0 box-border ${locationWindow === "/locations"
          ? "bg-transparent h-[40px] "
          : "bg-bgColor h-[36px] "
          }`}
      >
        <section className="max-w-[1280px] w-[100%] h-full py-[2px] flex justify-between items-center m-auto  ">
          {/* LEFT SIDE */}
          <article className="left h-full flex items-center overscroll-none overflow-y-hidden overscroll-y-none">
            <section className="mr-2">
              <button
                onClick={() => {
                  setRegionsShow(true);
                }}
                className="flex w-fit items-center"
              >
                <span className="mr-2">
                  <LocationIcons />
                </span>
                <div className="text-textColor text-[13px]  mr-[6px] font-AeonikProMedium">
                  Регион:
                </div>
                <div className="w-full min-w-[90px] font-AeonikProMedium flex items-center text-[13px]">
                  {data?.mainRegionsList?.filter((e) => e?.id === dressInfo?.mainRegionId)
                    ?.map((item) => {
                      return (
                        <div key={item?.id}>
                          <span className="">{item?.name_ru}</span>
                          {item?.sub_regions
                            ?.filter((e) => e?.id === dressInfo?.mainSubRegionId)
                            ?.map((data) => {
                              return (
                                <span key={data?.id} className="  ">
                                  ,{" "}
                                  <span className=" ml-[1px]">
                                    {data?.name_ru}
                                  </span>
                                </span>
                              );
                            })}
                        </div>
                      );
                    })}
                </div>
              </button>
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
            <button
              type="button"
              onClick={() =>
                window.open(
                  " https://dressme-dashboard-new.vercel.app",
                  "_blank"
                )
              }
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
              <p
                className={`font-AeonikProMedium  text-[13px]
                  ${selectBtn ? "text-black" : "text-textColor"}
                `}
              >
                Магазины
              </p>
            </NavLink>
          </article>
        </section>
      </div>
    </nav>
  );
};
export default TopHeader;
