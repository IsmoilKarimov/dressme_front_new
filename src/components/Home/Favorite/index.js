import { useEffect } from "react";
import FavouriteProducts from "./faouriteProducts/FavouriteProducts";
import NewBreadCrump from "../../Breadcrumbs/NewBreadCrump";

export default function Favourites() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const breadcrumbItems = [
    { label_uz: 'Home', label_ru: 'Главная', url: '/' },
    { label_uz: 'Favourite', label_ru: 'Избранное', url: '/favourites' },
  ];
  return (
    <main className="w-full flex flex-col items-center ">
      <section className="w-full border-b border-searchBgColor">
        <main className="flex flex-col min-h-[44px]  justify-center items-center my-3 ">
          <div className="max-w-[1280px] w-[100%] flex items-center justify-between m-auto px-4 md:px-0">
            <NewBreadCrump items={breadcrumbItems} />
          </div>
        </main>
      </section>

      <section className="w-full h-full">
        <FavouriteProducts />
      </section>
    </main>
  );
}
