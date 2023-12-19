import React, { useEffect, useState } from "react";
import { SearchIcons } from "../../../../../assets/icons";

function SearchComponent() {




  return (
    <article className="w-full flex items-center mt-3 md:mt-0 md:justify-end">
      <article className="w-[400px] h-11 flex flex-row-reverse md:flex-row items-center justify-between bg-btnBgColor md:bg-white rounded-xl border border-searchBgColor font-AeonikProRegular text-base">
        <input
          type="text"
        //   onChange={(e) => setSearchQueryData(e.target.value)}
          className="w-[90%] px-3 text-sm md:text-base bg-btnBgColor md:bg-white"
          placeholder="Искать магазины"
        />
        <span className="hidden md:block h-full w-[1px] bg-searchBgColor"></span>
        <div className=" w-[10%] h-full flex items-center justify-center cursor-pointer">
          <SearchIcons colors={"#a1a1a1"} />
        </div>
      </article>
    </article>
  );
}

export default React.memo(SearchComponent);
