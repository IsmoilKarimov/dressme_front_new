import React, { useState } from "react";
import {
  CategoryMenu,
  DownCate,
  clothing,
  delivery,
} from "../../../../assets/imgs";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { BiChevronDown } from "react-icons/bi";
import ReactSlider from "react-slider";

export default function CategoryTopDetail() {
  const Min = "60 000";
  const Max = "120 000";
  const [values, setValues] = useState([Min, Max]);
  return (
    <div className="flex flex-col min-h-[44px]  justify-center items-center m-0 pb-2 pt-2 box-border  border-b border-searchBgColor">
      <div className="max-w-[1280px] w-[100%] flex items-center justify-between items-center m-auto py-3  ">
        <div>
          <button className="w-fit h-[44px] px-3 rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center  cursor-pointer select-none group  ">
            <span>
              <img src={CategoryMenu} alt="CategoryMenu" className="" />{" "}
            </span>
            <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%] px-2 mt-1">
              Все категории{" "}
            </span>
            <span>
              <img src={DownCate} className={`rotate-[90deg]`} alt="" />
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
            {/* <div className="w-full border border-green-500 flex justify-between">
              <span className="not-italic font-AeonikProMedium text-sm leading-4 tracking-[1%] ">
                60 000 сум
              </span>
              <span className="not-italic font-AeonikProMedium text-sm leading-4 tracking-[1%] ">
                180 000 сум
              </span>
            </div> */}
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
            {/* <span>
              <img src={CategoryMenu} alt="CategoryMenu" className="" />{" "}
            </span> */}
            <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%] mr-2 mt-1">
              Доставка{" "}
            </span>
            <span>
              <img src={delivery} className={``} alt="" />
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
              {/* <span>
                <img src={CategoryMenu} alt="CategoryMenu" className="" />{" "}
              </span> */}
              <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]  mt-1">
                Последние добавленные{" "}
              </span>
              <span>
                <img src={DownCate} className={`rotate-[180deg]`} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
