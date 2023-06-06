import React, { useState } from "react";

import ReactSlider from "react-slider";
import {
  ArrowTopIcons,
  CotegoryMenuIcons,
  DeliveryIcons,
  FilterIcons,
  HeartIcons,
  SortIcons,
} from "../../../../AssetsMain/icons";
import { useContext } from "react";
import { dressMainData } from "../../../../ContextHook/ContextMenu";

export default function CategoryTopDetail() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const handleFilter = () => {
    setDressInfo({
      ...dressInfo,
      openCategoryFilter: !dressInfo.openCategoryFilter,
    });
  };

  const Min = "60 000";
  const Max = "120 000";
  const [values, setValues] = useState([Min, Max]);

  return (
    // ------------------------------HIdden------------------------------
    <div className="flex flex-col min-h-[44px]  justify-center items-center m-0 md:pb-2 pb-3 pt-2 box-border  border-b border-searchBgColor">
      <div className="max-w-[1280px] w-[100%] hidden md:block md:flex items-center justify-between items-center m-auto py-3  ">
        <div>
          <button className="w-fit h-[44px] px-3 rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center  cursor-pointer select-none group  ">
            <span>
              <CotegoryMenuIcons colors={"#000"} />{" "}
            </span>
            <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%] px-2 mt-1">
              Все категории{" "}
            </span>
            <span className={`rotate-[90deg]`}>
              <ArrowTopIcons colors={"#000"} />
            </span>
          </button>
        </div>

        <div className="flex items-center">
          <div className="flex items-center w-fit mr-4">
            <span className="not-italic font-normal text-sm leading-4 text-setTexOpacity tractking-[1%]">
              Цена:
            </span>
          </div>{" "}
          <div className="w-[360px]  ">
            <div className="w-full">
              <div className="w-full mt-1 ">
                <div className=" w-full flex justify-between items-center pt-1  gap-x-1">
                  <div className=" h-fit  not-italic font-AeonikProMedium text-base leading-4 text-center text-black tracking-[1%]">
                    {values[0]} сум
                  </div>{" "}
                  <div className=" h-fit not-italic font-AeonikProMedium text-base leading-4 text-center text-black tracking-[1%]">
                    {values[1]} сум
                  </div>
                </div>{" "}
                <div className="relative z-10 ">
                  {" "}
                  <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb1"
                    trackClassName="example-track1"
                    defaultValue={[0, 100]}
                    ariaLabel={["Lower thumb", "Upper thumb"]}
                    // ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                    // renderThumb={() => <div>1</div>}
                    pearling
                    minDistance={10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="w-fit h-[44px] px-4 rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center  cursor-pointer select-none group  ">
            <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%] mr-2 mt-1">
              Доставка{" "}
            </span>
            <span>
              <DeliveryIcons />
            </span>
          </button>
        </div>
        <div className="w-[fit] flex items-center ">
          <div className="flex items-center w-fit mr-4">
            <span className="not-italic font-normal text-sm leading-4 text-setTexOpacity tractking-[1%]">
              Сортировка:
            </span>
          </div>
          <div>
            <button className="w-[260px] h-[44px] px-4 rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between  cursor-pointer select-none group  ">
              <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]  mt-1">
                Последние добавленные{" "}
              </span>
              <span className={`rotate-[180deg]`}>
                <ArrowTopIcons colors={"#000"} />

                {/* <img src={DownCate} className={`rotate-[180deg]`} alt="" /> */}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] w-[100%] md:hidden  flex flex-col items-center m-auto px-4">
        <div className="w-full flex items-center justify-between mt-4">
          <button className="not-italic font-AeonikProMedium text-xl leading-6 text-black tracking-[1%]">
            Мужские кроссовки
          </button>
          <span className="not-italic font-AeonikProRegular text-sm leading-4 text-right text-setTexOpacity tracking-[1%]">
            {" "}
            82 товара
          </span>
        </div>
        <div className="w-full flex items-center justify-between mt-6">
          <button
            onClick={handleFilter}
            className="h-[44px] w-[48%] rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center"
          >
            <span>
              <FilterIcons colors={"#000"} />
            </span>
            <span className="ml-2 not-italic font-AeonikProMedium mt-1  text-sm leading-4 text-black tracking-[1%] cursor-pointer">
              Фильтры
            </span>
          </button>
          <button className="h-[44px] w-[48%] rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
            <span>
              <SortIcons colors={"#000"} />
            </span>
            <span className="ml-2 not-italic font-AeonikProMedium mt-1  text-sm leading-4 text-black tracking-[1%] cursor-pointer">
              Популярные
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
