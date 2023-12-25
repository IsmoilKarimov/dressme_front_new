import React, { useState } from "react";
import {
  ChildGenIcon,
  ManGenIcons,
  ManWomanGen,
  WomanGenIcons,
} from "../../../../../assets/icons";

function CategoryTopButtons({ handleGetId, getAllShops, setGetAllShops }) {
  const [genderCategory, setGenderCategory] = useState([
    {
      id: 1,
      action: false,
      name: "Женщинам",
    },
    { id: 2, action: false, name: "Мужчинам", },
    {
      id: 3,
      action: false,
      name: "Детям",
    },
  ]);

  function onGetId(id) {
    handleGetId({
      genderFilterId: id,
    });
  }

  const handleGenderCheck = (value) => {
    setGenderCategory((data) => {
      return data.map((e) => {
        if (e.id == value) {
          return { ...e, action: true };
        } else return { ...e, action: false };
      });
    });
  };

  return (
    <section className="w-full md:w-[520px] flex items-center border border-searchBgColor rounded-xl bg-slate-50 md:mt-0">
      <button
        onClick={() => {
          setGetAllShops(true);
          onGetId();
        }}
        className={`${
          getAllShops
            ? "bg-white border active:scale-95 my-auto mx-auto border-searchBgColor rounded-xl"
            : ""
        } w-1/4 flex items-center justify-center active:scale-95 h-11 text-[15px] text-center font-AeonikProRegular`}
      >
        <ManWomanGen />
        <span className="text-base ml-3 font-AeonikProRegular">Все</span>
      </button>
      <span className="text-searchBgColor flex items-center">|</span>
      {genderCategory?.map((data) => {
        return (
          <div
            key={data?.id}
            className={`w-1/4 flex items-center justify-center h-11 rounded-xl`}
          >
            <button
              key={data?.id}
              onClick={() => {
                setGetAllShops(false);
                handleGenderCheck(data?.id);
                onGetId(data?.id);
              }}
              className={`${
                getAllShops
                  ? "bg-"
                  : `${
                      data?.action
                        ? "bg-white border w-full h-[98%] my-auto mx-auto border-searchBgColor rounded-xl"
                        : ""
                    }`
              } w-full flex items-center justify-center active:scale-95 h-11 text-[15px] text-center font-AeonikProRegular  `}
            >
              <span>{data.icon}</span>
              {data.name ? (
                <p className="px-2 text-borderWinter">{data.name}</p>
              ) : (
                ""
              )}
            </button>
            <span
              className={`${
                data.id === 3
                  ? "text-searchBgColor hidden"
                  : "text-searchBgColor flex items-center"
              }`}
            >
              |
            </span>
          </div>
        );
      })}

      <article className="w-full flex flex-wrap gap-x-[4px] gap-y-[8px]">
        <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white rounded-lg">
          Женщинам
        </button>
        <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white rounded-lg">
          Мужчинам
        </button>
        <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white rounded-lg">
          Детям
        </button>
        <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center  bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white rounded-lg text-red-600">
          Скидки
        </button>
      </article>
    </section>
  );
}
export default React.memo(GenderButtonsStyle);
