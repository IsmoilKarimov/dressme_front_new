import React, { useEffect } from "react";
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
    <main className="w-[100%] h-fit">
      <MainPageSliders />
      <CollectionCards />
      <TypeSection />
    </main>
  );
}
