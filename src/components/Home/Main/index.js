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
    <div className="w-[100%] h-fit">
      <MainPageSliders />
      <CollectionCards />
      <TypeSection />
    </div>
  );
}
