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
      </div>
  );
}
