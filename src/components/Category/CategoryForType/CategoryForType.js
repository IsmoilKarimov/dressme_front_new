import React, { useContext, useEffect, useState } from "react";
import "../category.css";
import CategoryCards from "./CategoryElement/CategoryCards";
import { CategoryForBrand } from "./CategoryForBrand/CategoryForBrand";
import { dressMainData } from "../../../ContextHook/ContextMenu";

export default function CategoryForType() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  return (
    <div className="w-full h-full  ">
      <div className="flex  justify-between mb-10">
        {/* for mobile versions */}
        <div
          className={`w-full h-fit md:hidden absolute  top-0 ${
            dressInfo?.openCategoryFilter ? " ml-[1px] " : " ml-[-1000px]"
          }   bg-white z-[105] duration-500`}
        >
          <CategoryForBrand />
        </div>

        {/* for desctop version */}
        <div className="hidden md:block md:w-[22%] h-full mt-10 ss:px-4 md:px-0 ">
          <CategoryForBrand />
        </div>
        <div className="w-full md:w-[77%] h-[full] ss:px-4 md:px-0 ">
          <CategoryCards />
        </div>
      </div>
    </div>
  );
}
