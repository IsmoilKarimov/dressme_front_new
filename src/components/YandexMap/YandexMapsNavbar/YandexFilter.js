import React, { useContext, useEffect, useState } from "react";
import { Popover, Select, Space, } from "antd";
import { AutummBoyIcons, ByBrandIcon, ChildGenIcon, ClothesIcons, DollorIcons, DownArrowAntd, ManGenIcons, ManWomanGen, MenuCloseIcons, SpringBoyIcons, SummerBoyIcons, WinterBoyIcons, WomanGenIcons } from "../../../assets/icons";
import { BiChevronDown } from "react-icons/bi";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import { AutummChild, AutummFemale, AutummGirl, AutummMale, SpringChild, SpringFemale, SpringGirl, SpringMale, SummerChild, SummerFemale, SummerGirl, SummerMale, WinterChild, WinterFemale, WinterGirl, WinterMale } from "../../../assets";
import '../yandex.css'
import ReactSlider from "react-slider";
import UseReplace from "../../../ContextHook/useReplace";
import UseSearch from "../../../ContextHook/useSearch";
import { useNavigate } from "react-router-dom";
import Slider from "react-slider";
const { Option } = Select;

function YandexFilter({ getMapsInfo, getYandexFilterData }) {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [state, setState] = useState({
    categoryWearId: null,
  });

  // ----------------Wear state management----------------------------

  const [selectWear, setSelectWear] = useState();


  const ClearSelectWear = () => {
    setSelectWear();
  }
  const [selectBrand, setSelectBrand] = useState();
  const CloseSelectBrand = () => {
    setSelectBrand()
  }

  function getCategoryId(id) {
    setState({ ...state, categoryWearId: id })
  };

  useEffect(() => {
    getYandexFilterData({
      category_wear: state?.categoryWearId,
    })
  }, [state?.categoryWearId])
  console.log(state?.categoryWearId, "categoryWearId");
  return (
    <div className=" border border-red-500 w-fit px-10 py-2 mt-[-2px] md:px-6  md:rounded-b-[16px] bg-yandexNavbar border border-searchBgColor border-t-0 backdrop-blur-sm flex flex-col justify-between items-center m-auto md:border-t">
      <div className="flex items-center justify-center gap-x-2  w-fit   ">
        {
          getMapsInfo?.categories?.map(item => {
            return (
              <button onClick={() => getCategoryId(item?.id)} type="button" className={`h-[32px] px-2 flex items-center ${dressInfo?.BtnOpacitySeason} ${item?.id === state?.categoryWearId ? dressInfo?.BtnActiveSeason : ""}  rounded-lg gap-x-[6px]`}>
                <span className="text-sm not-italic font-AeonikProMedium leading-5">{item?.name_ru}</span>
              </button>
            )
          })
        }
      </div >
      <div className="w-full flex items-center gap-x-2 mt-2 hidden">
        <div className="w-[190px]  flex items-center">
          {
            selectWear &&
            <button type="button" className={`h-[32px] px-2 flex items-center ${dressInfo?.BtnOpacitySeason} rounded-lg gap-x-[6px]`}>
              <span className="text-sm not-italic font-AeonikProMedium leading-5">{selectWear}</span>
              <span onClick={() => ClearSelectWear()} className="w-4 h-4 px-[2px] rounded-full flex items-center justify-center bg-white">
                <MenuCloseIcons colors={dressInfo?.ColorSeason} className="w-full h-full" />
              </span>
            </button>
          }
        </div>
        {/* <div className="w-[190px]   flex items-center">
          {
            selectPrice &&
            <button type="button" className={`h-[32px] px-2 flex items-center ${dressInfo?.BtnOpacitySeason} rounded-lg gap-x-[6px]`}>
              <span className="text-sm not-italic font-AeonikProMedium leading-5">{selectPrice}</span>
              <span onClick={() => setSelectPrice("")} className="w-4 h-4 px-[2px] rounded-full flex items-center justify-center bg-white">
                <MenuCloseIcons colors={dressInfo?.ColorSeason} className="w-full h-full" />
              </span>
            </button>
          }
        </div> */}
        <div className="w-[190px]  flex items-center">
          {
            selectBrand &&
            <button type="button" className={`h-[32px] px-2 flex items-center ${dressInfo?.BtnOpacitySeason} rounded-lg gap-x-[6px]`}>
              <span className="text-sm not-italic font-AeonikProMedium leading-5">{selectBrand}</span>
              <span onClick={() => CloseSelectBrand()} className="w-4 h-4 px-[2px] rounded-full flex items-center justify-center bg-white">
                <MenuCloseIcons colors={dressInfo?.ColorSeason} className="w-full h-full" />
              </span>
            </button>
          }
        </div>
      </div>
    </div >
  );
}
export default React?.memo(YandexFilter)
