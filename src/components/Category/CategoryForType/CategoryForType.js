import React, { useContext } from "react";
import "../category.css";
import CategoryCards from "./CategoryElement/CategoryCards";
import { CategoryForBrand } from "./CategoryForBrand/CategoryForBrand";
import { dressMainData } from "../../../ContextHook/ContextMenu";

export default function CategoryForType() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  console.log(
    "   dressInfo?.openCategoryFilter ",
    dressInfo?.openCategoryFilter
  );
  return (
    <div className="w-full h-full  ">
      <div className="flex flex-gap-6 relative justify-between mb-10">
        {/* for mobile versions */}
        <div
          className={`w-full h-fit md:hidden absolute top-5 ${
            dressInfo?.openCategoryFilter ? " ml-[1px] " : " ml-[-1000px]"
          }  border bg-white z-[51]  duration-500`}
        >
          <CategoryForBrand />
        </div>

        {/* for desctop version */}
        <div className="hidden md:block md:w-[22%] h-full mt-10">
          <CategoryForBrand />
        </div>
        <div className="w-full md:w-[77%] h-[full]">
          <CategoryCards />
        </div>
      </div>
    </div>
  );
}
