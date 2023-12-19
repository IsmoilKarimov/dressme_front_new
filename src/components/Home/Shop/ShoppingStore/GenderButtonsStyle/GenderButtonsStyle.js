import React, { useState } from "react";
import {
  ChildGenIcon,
  ManGenIcons,
  ManWomanGen,
  WomanGenIcons,
} from "../../../../../assets/icons";

 function GenderButtonsStyle({ handleGetId }) {

  function onGetId(id) {
    // console.log(id, "getId");
    handleGetId({
      genderFilterId: id,
    });
  }

  return (
    <section className="w-[480px] flex items-center border border-searchBgColor rounded-xl bg-slate-50 md:mt-0">
      <button
        type="button"
        onClick={() => onGetId(3)}
        className={`w-[30%] flex items-center justify-center active:scale-95 focus:bg-white focus:border focus:border-searchBgColor rounded-xl overflow-hidden h-11 text-[15px] px-5 text-center font-AeonikProRegular`}
      >
        <div className="flex items-center">
          {" "}
          <ManWomanGen /> <span className="ml-2">Все</span>{" "}
        </div>
      </button>
      <span className="w-[1px] h-5 border-r border-searchBgColor"></span>
      <button
        type="button"
        onClick={() => onGetId(1)}
        className={`w-1/4 flex items-center justify-center active:scale-95 focus:bg-white focus:border focus:border-searchBgColor rounded-xl overflow-hidden h-11 text-[15px] px-5 text-center font-AeonikProRegular `}
      >
        <span>
          {" "}
          <ManGenIcons />{" "}
        </span>
      </button>
      <span className="w-[1px] h-5 border-r border-searchBgColor"></span>
      <button
        type="button"
        onClick={() => onGetId(2)}
        className={`w-1/4 flex items-center justify-center active:scale-95 focus:bg-white focus:border focus:border-searchBgColor rounded-xl overflow-hidden h-11 text-[15px] px-5 text-center font-AeonikProRegular `}
      >
        <span>
          {" "}
          <WomanGenIcons />{" "}
        </span>
      </button>
      <span className="w-[1px] h-5 border-r border-searchBgColor"></span>
      <button
        type="button"
        onClick={() => onGetId(4)}
        className={`w-1/4 flex items-center justify-center active:scale-95 focus:bg-white focus:border focus:border-searchBgColor rounded-xl overflow-hidden h-11 text-[15px] px-5 text-center font-AeonikProRegular `}
      >
        <span>
          {" "}
          <ChildGenIcon />{" "}
        </span>
      </button>
    </section>
  );
}
export default React.memo(GenderButtonsStyle)
