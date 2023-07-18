import React, { useContext, useEffect, useState } from "react";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} from "../../../AssetsMain";
import { MenuCloseIcons } from "../../../AssetsMain/icons";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [openCatalog, setOpenCatalog] = useState(false);
  const wearArray = [
    { id: 1, name: "Мужчинам", img: img1 },
    { id: 2, name: "Женщины", img: img2 },
    { id: 3, name: "Детям", img: img3 },
    { id: 4, name: "Головные уборы", img: img4 },
    { id: 5, name: "Верхняя одежда", img: img5 },
    { id: 6, name: "Нижняя одежда", img: img6 },
    { id: 7, name: "Обувь", img: img7 },
    { id: 8, name: "Аксессуары", img: img8 },
  ];
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
  // /catalog/:id
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const navigate = useNavigate();
  const goCatalogId = (id) => {
    navigate(`/catalog/:${id}`);
  };
  return (
    <main className="flex flex-col justify-center items-center m-0 p-0 box-border">
      <section className="max-w-[1280px] w-[100%] ss:px-4 md:px-0 flex justify-center items-center m-auto border-t md:border-0 border-searchBgColor">
        <article className="w-full h-fit mt-4 mb-[72px] flex flex-wrap ll:gap-x-2 gap-y-4 justify-between">
          {wearArray?.map((data) => {
            return (
              <figure className="w-[140px] ls:w-[150px] ll:w-[175px] h-fit flex flex-wrap gap-y-2 ">
                <div
                  onClick={() => setOpenCatalog(true)}
                  className="w-full h-[145px] ls:h-[155px] ll:h-[180px] flex items-center overflow-hidden justify-center border border-skeltonColor bg-categoryModalBgColor rounded-[12px]"
                >
                  <img src={data?.img} alt="" className=" h-full	" />
                </div>
                <button
                  onClick={() => setOpenCatalog(true)}
                  className="w-full h-8 text-catalogText leading-normal text-[13px] not-italic font-AeonikProRegular flex items-center justify-center active:scale-95  active:opacity-70 border border-skeltonColor  rounded-[12px]"
                >
                  {data?.name}
                </button>
              </figure>
            );
          })}
        </article>
      </section>
      <section
        className={`w-full md:hidden h-screen ${
          openCatalog
            ? " flex flex-col ease-linear duration-500 overscroll-none"
            : "left-[-500px] lg:left-[-1000px] ease-linear duration-500"
        }	bg-white fixed z-[110] top-0 left-0 `}
      >
        <div className="w-full flex flex-col  p-4">
          <div className="w-full flex  justify-end">
            {" "}
            <button
              className="w-10 h-10 rounded-lg bg-white border border-searchBgColor flex items-center justify-center active:scale-95  active:opacity-70"
              onClick={() => setOpenCatalog(false)}
            >
              {" "}
              <MenuCloseIcons />
            </button>
          </div>
          <div className="bg-white mt-5">
            <ul>
              {listItem.map((e) => {
                return (
                  <li
                    onClick={() => {
                      goCatalogId(e?.name);
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
export { Catalog };
