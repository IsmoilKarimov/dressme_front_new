import React, { useEffect, useState } from "react";
import { ArrowTopIcons } from "../../../../../assets/icons";

function UnderwearSizes({ state, setState, filter }) {
  const [changeClick, setChangeClick] = useState(false);
  const [underwearData, setUnderwearData] = useState(null);

  // console.log(underwearData, "underwearData");

  useEffect(() => {
    async function underwearSizes() {
      const underwear = filter?.wear_sizes?.underwear;
      console.log(underwear);
      const transformedArray = Object.entries(underwear).map(
        ([size, details]) => ({ size, ...details })
      );
      setUnderwearData(transformedArray);
    }
    underwearSizes();
  }, [filter]);

  return (
    <div className="w-full flex flex-col items-center mb-[38px]">
      <section className="w-full h-fit mt-[12px] ">
        <article
          className="w-full flex justify-between items-center "
          onClick={(event) => {
            event.target.classList.toggle("open");
          }}
        >
          <figure
            onClick={() =>
              setState({ ...state, UnderWearShow: !state.UnderWearShow })
            }
            className="flex items-center cursor-pointer select-none"
          >
            <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
              Размер нижней одежды
            </p>
            <p
              className={`${
                state?.UnderWearShow ? "rotate-[180deg]" : ""
              } duration-300 ml-1`}
            >
              <ArrowTopIcons colors={"#000"} />
            </p>
          </figure>
        </article>
        <article
          className={` overflow-hidden ${
            state?.UnderWearShow
              ? "duration-300 h-0"
              : "duration-300 h-fit mt-5"
          } duration-300`}
        >
          <figure className="w-full flex flex-wrap justify-start gap-x-[2px] gap-y-2">
            {underwearData?.map((underwear) => {
              // console.log(item, "item");
              return (
                <button
                  key={underwear.id}
                  onClick={() => {
                    setChangeClick(true);
                  }}
                  className={`${
                    underwear?.letter_size && underwear?.size ? "flex" : "hidden"
                  } h-10 w-[57px] items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white transition ease-linear duration-200 rounded-lg`}
                >
                  {underwear?.letter_size ? (
                    <div className="flex items-center">
                      <span>{underwear?.letter_size}</span>
                      <span className="ml-1">({underwear?.amount})</span>
                    </div>
                  ) : (
                    <span className="ml-1">({underwear?.size})</span>
                  )}
                </button>
              );
            })}
          </figure>
        </article>
      </section>
      <button
        type="button"
        className={`${
          changeClick ? "flex" : "hidden"
        } w-full flex-start text-sm text-borderWinter font-AeonikProRegular mt-2`}
      >
        Сбросить
      </button>
    </div>
  );
}

export default React.memo(UnderwearSizes);
