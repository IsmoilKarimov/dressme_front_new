import React, { useState } from "react";
import {
  ChildGenIcon,
  ManGenIcons,
  ManWomanGen,
  WomanGenIcons,
} from "../../../../../assets/icons";

export default function GenderButtonsStyle() {

  return (
    <section className="w-[480px] flex items-center border border-searchBgColor rounded-xl bg-slate-50 md:mt-0">
      <button 
        type="button" 
        className={`w-[30%] flex items-center justify-center focus:bg-white focus:border focus:border-searchBgColor rounded-xl overflow-hidden h-11 text-[15px] px-5 text-center font-AeonikProRegular`}>
        <div className="flex items-center"> <ManWomanGen /> <span className="ml-2">Все</span> </div>
      </button>
      <span className="w-[1px] h-5 border-r border-searchBgColor"></span>
      <button 
        type="button" 
        className={`w-1/4 flex items-center justify-center focus:bg-white focus:border focus:border-searchBgColor rounded-xl overflow-hidden h-11 text-[15px] px-5 text-center font-AeonikProRegular `}>
        <span> <ManGenIcons /> </span>
      </button>
      <span className="w-[1px] h-5 border-r border-searchBgColor"></span>
      <button 
        type="button" 
        className={`w-1/4 flex items-center justify-center focus:bg-white focus:border focus:border-searchBgColor rounded-xl overflow-hidden h-11 text-[15px] px-5 text-center font-AeonikProRegular `}>
        <span> <WomanGenIcons /> </span>
      </button>
      <span className="w-[1px] h-5 border-r border-searchBgColor"></span>
      <button 
        type="button" 
        className={`w-1/4 flex items-center justify-center focus:bg-white focus:border focus:border-searchBgColor rounded-xl overflow-hidden h-11 text-[15px] px-5 text-center font-AeonikProRegular `}>
        <span> <ChildGenIcon /> </span>
      </button>
    </section>
  );
}
