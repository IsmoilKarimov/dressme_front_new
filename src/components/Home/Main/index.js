import React, { useEffect } from "react";
import MainPageSliders from "./BrandTypeSlider/MainPageSliders";
import CollectionCards from "./WearCollectionCard/CollectionCards";
export default function HomeIndex() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <main className="w-[100%] h-fit mt-[170px] ">
      <MainPageSliders />
      <CollectionCards />
      {/* <TypeSection /> */}
    </main>
  );
}
