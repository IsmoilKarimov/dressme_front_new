import { useEffect } from "react";
import FavouriteProducts from "./faouriteProducts/FavouriteProducts";
import FavoutireBreadCrumbs from "./favouriteBreadcrumbs/favouriteBreadcrumbs";

export default function Favourites() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <main className="w-full flex flex-col items-center ">
      <section className="w-full border-b border-searchBgColor">
        <FavoutireBreadCrumbs />
      </section>

      <section className="w-full h-full">
        <FavouriteProducts />
      </section>
    </main>
  );
}
