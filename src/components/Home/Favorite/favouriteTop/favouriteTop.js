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

export default function FavouriteTop() {
  
    const [value, SetValue] = useState({ min: 20, max: 150 });

  return (
    <div className="flex flex-col min-h-[44px]  justify-center items-center m-0 p-0 box-border border-b border-searchBgColor">
      <div className="max-w-[1280px] w-full flex justify-between items-center m-auto py-5  ">
        
        <div className="text-2xl font-AeonikProMedium">Избранное</div>
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
