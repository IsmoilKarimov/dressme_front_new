import { useEffect } from "react";
import FavouriteProducts from "./faouriteProducts/FavouriteProducts";
import FavouriteTop from "./favouriteTop/favouriteTop";
import FavoutireBreadCrumbs from "./favouriteBreadcrumbs/favouriteBreadcrumbs";

export default function Favourites() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  return (
      <div className="w-full flex flex-col items-center ">
          <div className="w-full border-b border-searchBgColor">
            <FavoutireBreadCrumbs/>
          </div>
          <div className="w-full border-b border-searchBgColor">
            <FavouriteTop />
          </div>
          <div className="w-full">
            <FavouriteProducts />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti et nisi quia facilis, at, culpa repudiandae modi, quos veniam amet dolorum quod quidem eius dolorem praesentium! Deserunt nulla distinctio voluptatum atque exercitationem impedit earum maiores! Error, repellat itaque. Ipsam, ducimus vitae dignissimos nobis minima voluptate consectetur perferendis voluptatum ex.</p>
      </div>
  );
}
