import React, { useCallback, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import { Popover } from "antd";

import {
  CommentIcons,
  HouseStatisticIcons,
  LocationIcons,
  MarketIcons,
  MyPurchaseIcons,
} from "../../../assets/icons";
import { EnglishFlag, RussianFlag, UzbekFlag } from "../../../assets";
import Cookies from "js-cookie";
import RegionsList from "../../../ContextHook/RegionsList";
import { HomeMainDataContext } from "../../../ContextHook/HomeMainData";

const YandexTop = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [mainData, setMainData] = useContext(HomeMainDataContext);
  const [state, setState] = useState({
    openLang: false,
    openRegion: false,
  });

  // -----Language Change-------------------
  const [selectLang, setselectLang] = useState(1);

  const LanguageList = [
    { id: 1, type: "English", icons: EnglishFlag },
    { id: 2, type: "Русский", icons: RussianFlag },
    { id: 3, type: "O'zbekcha", icons: UzbekFlag },
  ];

  const handleOpenChangeWear = (newOpen) => {
    setState({ ...state, openLang: newOpen });
  };

  const handleLangValue = (value) => {
    setselectLang(value);
    setState({ ...state, openLang: false });
  };

  const contentLang = (
    <div className="w-fit h-fit m-0 p-0">
      {LanguageList.map((data) => {
        return (
          <div
            key={data?.id}
            className={`p-2 text-sm cursor-pointer hover:bg-bgColor flex items-center justify-start  ${dressInfo?.TextHoverSeason}`}
            onClick={() => {
              handleLangValue(data?.id);
            }}
          >
            <p className="mr-[6px]  w-5 h-5">
              <img className="w-full h-full" src={data?.icons} alt="" />
            </p>
            <p
              className={`not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black  ${dressInfo?.TextHoverSeason}`}
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

  const handleOpenChangeCity = (newOpen) => {
    setState({ ...state, openRegion: newOpen });
  };

  const handleCityValue = (value) => {
    setSelectCity(value);
    setState({ ...state, openRegion: false });
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
            className={`p-2 not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black  hover:bg-bgColor cursor-pointer ${dressInfo?.TextHoverSeason}`}
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
  const [regionsShow, setRegionsShow] = useState(false);
  const toggleRegionsShow = useCallback(() => setRegionsShow(false), []);

  return (
    <div className="flex justify-between items-center m-auto ">

      <div className="left h-full flex items-center  ">
        <div onClick={() => {
          setDressInfo({ ...dressInfo, yandexOpenRegionList: true })
        }} className="flex w-fit items-center">
          <span className="mr-2">
            <LocationIcons />
          </span>
          <span className="text-textColor text-[13px] mr-[6px] font-AeonikProMedium">
            Город:
          </span>
          <div className="w-full min-w-[90px] font-AeonikProMedium flex items-center text-[13px]">
            {
              mainData?.regions?.filter(e => e?.id == dressInfo?.mainRegionId)?.map(item => {
                return (
                  <>
                    <span className="border-b border-slate-900">{item?.name_ru} </span>
                    {item?.sub_regions?.filter(e => e?.id == dressInfo?.mainSubRegionId)?.map(data => {
                      return (
                        <span className="  ">, <span className="border-b border-slate-900 ml-2">{data?.name_ru}</span></span>
                      )
                    })}
                  </>
                )
              })
            }
          </div>
        </div>

        <div className="w-fit h-full rounded bg-white font-AeonikProMedium select-none cursor-pointer">
          {LanguageList.filter((data) => data.id === selectLang).map((data) => {
            return (
              <Popover
                key={data?.id}
                open={state?.openLang}
                onOpenChange={handleOpenChangeWear}
                className="w-full flex text-[13px] items-center h-[32px] px-3 rounded-lg"
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
          })}
        </div>
      </div>
      <div className="right h-full flex items-center ">
        <Link to="#" className="flex items-center h-full ">
          <span className="mr-2">
            <CommentIcons colors={"#707070"} />
          </span>
          <span className="text-textColor text-[13px]   font-AeonikProMedium  ">
            Помощь
          </span>
        </Link>
        <Link to="#" className="flex items-center h-full  ml-6 ">
          <span className="mr-2">
            <HouseStatisticIcons colors={"#707070"} />
          </span>
          <span className="text-textColor text-[13px]   font-AeonikProMedium  ">
            Бизнес
          </span>
        </Link>
        <div className="line h-5 border text-textColor ml-6"></div>
        {Cookies.get("DressmeUserToken") && (
          <NavLink to="/my-order" className="flex items-center h-full  ml-6 ">
            <span className="mr-2">
              <MyPurchaseIcons colors={"#707070"} />
            </span>
            <span className="text-textColor  text-[13px]   font-AeonikProMedium  ">
              Мои заказы
            </span>
          </NavLink>
        )}
        <NavLink
          to="/stores"
          className="flex items-center bg-white rounded cursor-pointer h-full  ml-6 px-3 py-[2px]"
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
  );
};
export default YandexTop;
