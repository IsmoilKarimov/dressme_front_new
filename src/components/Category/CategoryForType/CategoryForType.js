import React, { useContext, useEffect } from "react";
import "../category.css";
import CategoryCards from "./CategoryElement/CategoryCards";
import { CategoryForBrand } from "./CategoryForBrand/CategoryForBrand";
import { dressMainData } from "../../../ContextHook/ContextMenu";

export default function CategoryForType() {
  const [dressInfo] = useContext(dressMainData);

  useEffect(() => {
    if (dressInfo?.openCategoryFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dressInfo?.openCategoryFilter]);
  return (
    <div className="w-full h-full">
      <div className="flex justify-between mb-10">
        {/* for mobile versions */}
        <div className={`w-full h-[100vh] overflow-hidden overflow-y-auto  md:hidden fixed top-0 bottom-0 left-0 right-0 ${
            dressInfo?.openCategoryFilter ? " ml-[1px] " : " ml-[-1000px]"
          }   bg-white z-[105] duration-500`}
        >
          <CategoryForBrand />
        </div>

        {/* for desctop version */}
        <div className="hidden md:block md:w-[21%] h-full mt-10 ss:px-4 md:px-0 ">
          <CategoryForBrand />
        </div>
        <div className="w-full md:w-[78%] h-[full] ss:px-4 md:px-0 ">
          <CategoryCards />
        </div>
      </div>
    </div>
  );
}
