import React from "react";
import {
  MenuCloseIcons,
  SearchIcons,
} from "../../../../../../../../assets/icons";

function LocationDropUp({ onClick }) {
  const LocationsList = [
    { id: 1, region: "Yunusobod" },
    { id: 2, region: "Mirzo Ulugbek" },
    { id: 3, region: "Mirobod" },
    { id: 4, region: "Mirobod" },
    { id: 5, region: "Mirzo Ulugbek" },
    { id: 6, region: "Mirzo Ulugbek" },
    { id: 7, region: "Mirzo Ulugbek" },
    { id: 8, region: "Mirzo Ulugbek" },
    { id: 9, region: "Mirzo Ulugbek" },
    { id: 10, region: "Mirzo Ulugbek" },
  ];

  return (
    <main>
      <div className="max-w-[440px] w-[100%] mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
        <section className="h-[52px] w-full bg-btnBgColor flex items-center  justify-between px-4 mb-1 ">
          <p className="text-xl font-AeonikProMedium">Локации</p>
          <button onClick={onClick}>
            <MenuCloseIcons colors={"#000"} />
          </button>
        </section>
        <section className="w-full h-[380px] px-4 flex flex-col items-center">
          <div className="w-full h-fit flex items-center justify-center flex-wrap gap-x-7 mb-[28px]">
            <form className="w-full flex flex-col items-center">
              <div className="w-full h-[290px] overflow-auto VerticelScroll">
                {LocationsList.map((data) => {
                  return (
                    <div
                      key={data.id}
                      className="w-full  flex items-center justify-start border-b border-searchBgColor text-[#303030] pb-[10px] mb-4 text-base font-AeonikProRegular"
                    >
                      {data.region}
                    </div>
                  );
                })}
              </div>
            </form>
          </div>
          <div className="w-full flex items-center justify-between gap-x-3 mb-10">
            <button
              onClick={onClick}
              className="w-[45%] h-[38px] text-base font-AeonikProMedium bg-white text-borderWinter border border-borderWinter rounded-md active:scale-95"
            >
              Закрыт
            </button>
            <button className="w-[55%] h-[38px] text-base font-AeonikProMedium bg-borderWinter text-white border border-borderWinter rounded-md active:scale-95">
              Готово
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
export default React.memo(LocationDropUp);
