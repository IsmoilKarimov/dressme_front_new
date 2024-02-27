import React, { useContext, useEffect } from "react";
import MainPageSliders from "./BrandTypeSlider/MainPageSliders";
import CollectionCards from "./WearCollectionCard/CollectionCards";
import LoadingNetwork from "../../Loading/LoadingNetwork";
import { HomeMainDataContext } from "../../../ContextHook/HomeMainData";

export default function HomeIndex() {
  const [mainData, wishList, setWishlist] = useContext(HomeMainDataContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <main className="w-[100%] h-fit md:mt-[170px]">
      {mainData?.loader ? (
        <div className="w-full flex items-center justify-center">
          <LoadingNetwork />
        </div>
      ) : (
        <div>
          <MainPageSliders />
          <CollectionCards />
        </div>
      )}
    </main>
  );
}
