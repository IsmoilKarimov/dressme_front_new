import React, { useEffect, useState } from "react";
import MainPageSliders from "./BrandTypeSlider/MainPageSliders";
import TypeSection from "./TypeSection/TypeSection";
import CollectionCards from "./WearCollectionCard/CollectionCards";
export default function HomeIndex() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center m-0 p-0 box-border">
      <div className="max-w-[1280px] w-[100%] ss:px-4 md:px-0 flex justify-center items-center m-auto border-t md:border-0 border-searchBgColor">
        <div className="w-[100%] h-fit">
          <MainPageSliders />
          <CollectionCards />
          <TypeSection />
        </div>
      </div>
    </div>
  );
}
