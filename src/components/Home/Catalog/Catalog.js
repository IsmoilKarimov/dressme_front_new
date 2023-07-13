import React from "react";
import {
  bryuk,
  catolog1,
  catolog2,
  catolog3,
  catolog4,
  catolog5,
  catolog6,
  catolog7,
} from "../../../AssetsMain";

const Catalog = () => {
  const wearArray = [
    { id: 1, name: "Мужчинам", img: catolog4 },
    { id: 2, name: "Женщины", img: catolog5 },
    { id: 3, name: "Детям", img: catolog6 },
    { id: 4, name: "Головные уборы", img: catolog7 },
    { id: 5, name: "Верхняя одежда", img: catolog3 },
    { id: 6, name: "Нижняя одежда", img: bryuk },
    { id: 7, name: "Обувь", img: catolog1 },
    { id: 8, name: "Аксессуары", img: catolog2 },
  ];
  return (
    <main className="flex flex-col justify-center items-center m-0 p-0 box-border">
      <section className="max-w-[1280px] w-[100%] ss:px-4 md:px-0 flex justify-center items-center m-auto border-t md:border-0 border-searchBgColor">
        <article className="w-full h-fit my-8 flex flex-wrap  ll:gap-x-3 gap-y-4 justify-between">
          {wearArray?.map((data) => {
            return (
              <figure className="w-[150px] ll:w-[175px] h-fit flex flex-wrap gap-y-2 ">
                <div className="w-full h-[155px] ll:h-[180px] flex items-center overflow-hidden justify-center border border-skeltonColor rounded-[12px]">
                  <img src={data?.img} alt="" className="object-cover	" />
                </div>
                <button className="w-full h-8 text-catalogText leading-normal text-[13px] not-italic font-AeonikProRegular flex items-center justify-center active:scale-95  active:opacity-70 border border-skeltonColor  rounded-[12px]">
                  {data?.name}
                </button>
              </figure>
            );
          })}
        </article>
      </section>
      <section className="w-full md:hidden h-screen	bg-green-400 fixed z-[110] top-0 left-0 right-0"></section>
    </main>
  );
};
export { Catalog };
