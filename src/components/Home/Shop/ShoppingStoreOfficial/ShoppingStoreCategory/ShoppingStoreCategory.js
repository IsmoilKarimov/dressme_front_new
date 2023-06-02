import React from "react";
import ShopOfficialBrand from "./ShopOfficialBrand/ShopOfficialBrand";
import ShopOfficialCard from "./ShopOfficialCards/ShopOfficialCard";

const ShoppingStoreCategory = () => {
  return (
    <div className="max-w-[1280px] w-[100%] ss:px-4 md:px-0 flex justify-center items-center m-auto">
      <div className="w-[100%] h-fit">
        {" "}
        <div className="flex flex-gap-6 justify-between my-10">
          <div className="w-[22%] h-full ">
            <ShopOfficialBrand />
          </div>
          <div className="w-[77%] h-[full]">
            <ShopOfficialCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingStoreCategory;
