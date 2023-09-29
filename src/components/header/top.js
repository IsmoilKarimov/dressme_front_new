import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { Popover } from "antd";

import {
  CommentIcons,
  HouseStatisticIcons,
  LocationIcons,
  MarketIcons,
} from "../../assets/icons";
import { EnglishFlag, RussianFlag, UzbekFlag } from "../../assets";

const TopHeader = () => {
  const [dressInfo] = useContext(dressMainData);
  const [selectBtn, setSelectBtn] = useState(true)

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

  // -------City Change -------------
  const [selectCity, setSelectCity] = useState("Tashkent");
  const [openRegion, setOpenRegion] = useState(false);

  const handleOpenChangeCity = (newOpen) => {
    setOpenRegion(newOpen);
  };

  const handleCityValue = (value) => {
    setSelectCity(value);
    setOpenRegion(false);
  };

  const CityList = [
    { id: 1, type: "Samarqand" },
    { id: 2, type: "Sirdaryo" },
    { id: 3, type: "Jizzax" },
    { id: 4, type: "Andijon" },
    { id: 5, type: "Xorazm" },
    { id: 6, type: "Navoiy" },
  ];

  const contentCity = (
    <section className="w-[100px] h-fit m-0 p-0">
      {CityList.map((data) => {
        return (
          <article
            key={data?.id}
            className={`p-2 not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black  hover:bg-bgColor cursor-pointer ${dressInfo?.ColorSeason}`}
            onClick={() => {
              handleCityValue(data?.type);
            }}
          >
            {data?.type}
          </article>
        );
      })}
    </section>
  );

  const location = useLocation();
  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);

  return (
    <nav>
      <div
        className={`hidden md:block flex-col justify-center items-center m-0 p-0 box-border ${locationWindow === "/delivery-points"
            ? "bg-transparent h-[40px] "
            : "bg-bgColor h-[32px] "
          }`}
      >
        <section className="max-w-[1280px] w-[100%] h-full py-[2px] flex justify-between items-center m-auto  ">
          <article className="left h-full flex items-center">
            <section>
              <Link to="/" className="flex w-fit items-center">
                <span>
                  <LocationIcons />
                </span>

                <p className="text-textColor text-[13px] ml-2 mr-[6px] font-AeonikProMedium">
                  Регион:
                </p>
                <p className="w-[90px] font-AeonikProMedium flex items-center">
                  <Popover
                    open={openRegion}
                    onOpenChange={handleOpenChangeCity}
                    className=" flex text-[13px]  items-center  "
                    trigger="click"
                    options={["Hide"]}
                    placement="bottom"
                    content={contentCity}
                  >
                    <span className="border-b border-slate-900">
                      {selectCity}
                    </span>
                  </Popover>
                </p>
              </Link>
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
            <NavLink
              to="/signup-seller"
              onClick={() => setSelectBtn(false)}
              className={`flex items-center h-fit py-[4px] ml-6
                ${!selectBtn ? "py-[4px] px-3 bg-white rounded" : ""}
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
            </NavLink>
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
    </nav>
  );
};
export default TopHeader;
