import React, { useContext, useState } from "react";
import { MenuCloseIcons } from "../../../../assets/icons";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { useNavigate } from "react-router-dom";
import CatalogTopFilter from "../CatalogFilter/CatalogTop/CatalogTopFilter";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";
import NewBreadCrump from "../../../Breadcrumbs/NewBreadCrump";

const CatalogMobile = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [data] = useContext(HomeMainDataContext);

  const [openCatalog, setOpenCatalog] = useState(false);

  const listItem = [
    { id: 1, name: "Футболки и майки" },
    { id: 2, name: "Носки" },
    { id: 3, name: "Брюки и джинсы" },
    { id: 4, name: "Спортивная одежда" },
    { id: 5, name: "Толстовки" },
    { id: 6, name: "Джемперы, свитеры и кардиганы" },
    { id: 7, name: "Белье и пляжная одежда" },
    { id: 8, name: "Рубашки" },
    { id: 9, name: "Верхняя одежда" },
    { id: 10, name: "Шорты" },
    { id: 11, name: "Домашняя одежда" },
    { id: 12, name: "Костюмы и комплекты" },
    { id: 13, name: "Пиджаки и жилеты" },
    { id: 14, name: "Религиозная одежда для мужчин" },
  ];

  const navigate = useNavigate();

  const goCatalogId = (id, name) => {
    if (id !== 5) {
      navigate(`/categories/${name?.split(' ')?.join('-')?.toLowerCase()}`);
    }
    if (id === 5) {
      navigate(`/categories/${name?.split('/')?.map(item => item.trim())?.join('-')?.toLowerCase()}`);
    }
  };
  const breadcrumbItems = [
    { label_uz: 'Home', label_ru: 'Главная', url: '/' },
    { label_uz: 'category', label_ru: 'категории', url: '/categories' },
  ];

  return (
    <main className="flex flex-col justify-center items-center m-0 p-0 box-border">
      <main className="w-full">
        <div className="md:pt-5 md:pb-4 flex flex-col md:min-h-[44px] w-full justify-center items-center m-0 md:py-3">
          <section className="max-w-[1280px] w-[100%] flex flex-col items-center">
            <nav className="w-[100%]  flex items-center p-1 md:p-0">
              <NewBreadCrump items={breadcrumbItems} />
            </nav>
          </section>
        </div>
      </main>
      <section className="max-w-[1280px] w-[100%] md:h-[40vh] ss:px-4 md:px-0 flex justify-center items-center m-auto border-t md:border-0 border-searchBgColor">
        <article className="w-full h-full pt-6 pb-20 md:py-0 flex flex-wrap ll:gap-x-2 gap-y-4 justify-between xs:justify-start xs:gap-x-4">
          {data?.getMainProductCard?.categories?.map((item) => {
            return (
              <figure
                key={item?.id}
                className="w-[140px] ls:w-[150px] ll:w-[175px] h-fit flex flex-wrap gap-y-2 "
              >
                <div
                  onClick={() => goCatalogId(item?.id, item?.name_ru)}
                  className="w-full h-[145px] ls:h-[155px] ll:h-[180px] flex items-center overflow-hidden justify-center border border-skeltonColor bg-categoryModalBgColor rounded-[12px] cursor-pointer"
                >
                  <img src={item?.url_photo} alt="" className=" h-full	" />
                </div>
                <button
                  //   onClick={() => setOpenCatalog(true)}
                  onClick={() => goCatalogId(item?.id, item?.name_ru)}
                  className="w-full h-8 text-catalogText leading-normal text-[12px] ll:text-[13px] not-italic font-AeonikProRegular flex items-center justify-center active:scale-95  active:opacity-70 border border-skeltonColor  rounded-[12px]"
                >
                  {item?.name_ru}
                </button>
              </figure>
            );
          })}
        </article>
      </section>
      <section
        className={`w-full hidden h-screen ${openCatalog
          ? "flex flex-col ease-linear duration-500 overscroll-none"
          : "left-[-500px] lg:left-[-1000px] ease-linear duration-500"
          }	bg-white fixed z-[110] top-0 left-0 `}
      >
        <div className="w-full flex flex-col p-4">
          <div className="w-full flex justify-end">
            {" "}
            <button
              className="w-10 h-10 rounded-lg bg-white border border-searchBgColor flex items-center justify-center active:scale-95 active:opacity-70"
              onClick={() => setOpenCatalog(false)}
            >
              {" "}
              <MenuCloseIcons />
            </button>
          </div>
          <div className="bg-white mt-5">
            <ul>
              {listItem.map((e) => {
                console.log();
                return (
                  <li
                    key={e?.id}
                    onClick={() => {
                      // goCatalogId(e?.id);
                      setOpenCatalog(false);
                    }}
                    className={`text-catalogList text-lg mt-3 leading-normal not-italic font-AeonikProRegular ${dressInfo?.TextHoverSeason}`}
                  >
                    {e.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
export { CatalogMobile };
