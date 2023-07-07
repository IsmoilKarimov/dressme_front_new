import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { dressMainData } from "../../Hook/ContextMenu";
import { Popover } from "antd";

import {
  CommentIcons,
  HouseStatisticIcons,
  LocationIcons,
  MarketIcons,
} from "../../AssetsMain/icons";
import { EnglishFlag, RussianFlag, UzbekFlag } from "../../AssetsMain";
const TopHeader = () => {
  const [dressInfo] = useContext(dressMainData);

  let dataStyle = "";
  if (dressInfo?.type === 1111) {
    dataStyle = " hover:text-borderSpring ";
  }
  if (dressInfo?.type === 2222) {
    dataStyle = " hover:text-borderSummer";
  }
  if (dressInfo?.type === 3333) {
    dataStyle = " hover:text-borderAutumm ";
  }
  if (dressInfo?.type === 4444) {
    dataStyle = " hover:text-borderWinter ";
  }

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
    <div className="w-fit h-fit m-0 p-0">
      {LanguageList.map((data) => {
        return (
          <div
            key={data?.id}
            className={`p-2 text-sm cursor-pointer hover:bg-bgColor flex items-center justify-start  ${dataStyle}`}
            onClick={() => {
              handleLangValue(data?.id);
            }}
          >
            <p className="mr-[6px]  w-5 h-5">
              <img className="w-full h-full" src={data?.icons} alt="" />
            </p>
            <p
              className={`not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black  ${dataStyle}`}
            >
              {data?.type}
            </p>
          </div>
        );
      })}
    </div>
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
    <div className="w-[100px] h-fit m-0 p-0">
      {CityList.map((data) => {
        return (
          <div
            key={data?.id}
            className={`p-2 not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black  hover:bg-bgColor cursor-pointer ${dataStyle}`}
            onClick={() => {
              handleCityValue(data?.type);
            }}
          >
            {data?.type}
          </div>
        );
      })}
    </div>
  );
  const location = useLocation();
  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);
  return (
    <div
      className={`flex flex-col justify-center items-center   hidden md:block m-0 p-0 box-border ${
        locationWindow === "/delivery-points"
          ? "bg-transparent h-[40px] "
          : "bg-bgColor h-[32px] "
      }`}
    >
      <div className="max-w-[1280px] w-[100%] h-full py-[2px] flex justify-between items-center m-auto  ">
        <div className="left h-full flex items-center  ">
          <Link to="/" className="flex w-fit items-center">
            <span>
              <LocationIcons />
            </span>

            <span className="text-textColor text-[13px] ml-2 mr-[6px] font-AeonikProMedium">
              Город:
            </span>
            <div className="w-[90px] font-AeonikProMedium   flex items-center ">
              <Popover
                open={openRegion}
                onOpenChange={handleOpenChangeCity}
                className=" flex text-[13px]  items-center  "
                trigger="click"
                options={["Hide"]}
                placement="bottom"
                content={contentCity}
              >
                <span className="border-b border-slate-900">{selectCity}</span>
              </Popover>
            </div>
          </Link>

          <div className="w-fit h-fit py-[4px] rounded bg-white font-AeonikProMedium select-none cursor-pointer">
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
                    <p className="mr-[6px] ">
                      <img src={data?.icons} alt="" />
                    </p>
                    <p className="not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black ">
                      {data?.type}
                    </p>
                  </Popover>
                );
              }
            )}
          </div>
        </div>
        <div className="right h-full flex items-center ">
          <Link to="#" className="flex items-center h-fit py-[4px] ">
            <span className="mr-2">
              <CommentIcons colors={"#707070"} />
            </span>
            <span className="text-textColor text-[13px]   font-AeonikProMedium  ">
              Помощь
            </span>
          </Link>
          <Link to="#" className="flex items-center h-fit py-[4px]  ml-6 ">
            <span className="mr-2">
              <HouseStatisticIcons colors={"#707070"} />
            </span>
            <span className="text-textColor text-[13px]   font-AeonikProMedium  ">
              Бизнес
            </span>
          </Link>
          <div className="line h-5 border text-textColor ml-6"></div>

          <NavLink
            to="/stores"
            className="flex items-center bg-white rounded cursor-pointer h-fit py-[4px]  ml-6 px-3"
          >
            <span className="mr-2">
              <MarketIcons colors={"#000"} />
            </span>{" "}
            <span className="font-AeonikProMedium  text-[13px]    ">
              Магазины
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
