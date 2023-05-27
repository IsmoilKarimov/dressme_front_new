import React from "react";
import "../category.css";
import CategoryCards from "./CategoryElement/CategoryCards";
import { DownCate, arrowBottomRight, search } from "../../../assets/imgs";
import CategoryForBrand from "./CategoryForBrand/CategoryForBrand";
import CategoryTopDetail from "./CategoryTop/CategoryTopDetail";

export default function CategoryForType() {
  return (
    <div className="w-full h-full  ">
      <div className="flex flex-gap-6 justify-between my-10">
        <div className="w-[22%] h-full ">
          <CategoryForBrand />
        </div>
        <div className="w-[77%] h-[full]">
          <CategoryCards />
        </div>
      </div>
    </div>
  );
}
