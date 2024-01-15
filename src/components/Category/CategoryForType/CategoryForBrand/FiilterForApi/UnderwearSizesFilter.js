import React, { useEffect, useState } from "react";
import { ArrowTopIcons } from "../../../../../assets/icons";

function UnderwearSizesFilter({ state, setState, filter, handleUnderwearSizes }) {
  const [changeClick, setChangeClick] = useState(false);
  const [underwearData, setUnderwearData] = useState(null);
  const [visibleButtons, setVisibleButtons] = useState(12);

  // console.log(underwearData, "underwearData");

  useEffect(() => {
    async function underwearSizes() {
      const underwear = filter?.wear_sizes?.underwear;
      // console.log(underwear);
      const transformedArray = Object.entries(underwear).map(
        ([size, details]) => ({ size, ...details })
      );
      setUnderwearData(transformedArray);
    }
    underwearSizes();
  }, [filter]);

  function onGetUnderwearSizes (size) {
    console.log(size);
    handleUnderwearSizes({
      underwearSizes: size
    })
  }

  function sendSize(underwear) {
    // console.log(outwear);
    if(underwear?.letter_size){
      // console.log(underwear?.letter_size);
      onGetUnderwearSizes(underwear?.letter_size)
    } else if(underwear?.max_wear_size){
      const minMaxSize = underwear?.min_wear_size + ' - ' + underwear?.max_wear_size
      // console.log(minMaxSize);
      onGetUnderwearSizes(minMaxSize) 
    } else {
      // console.log(underwear?.min_wear_size);
      onGetUnderwearSizes(underwear?.min_wear_size)
    }
  }

  return (
    <div
      className={`${
        underwearData?.length > 0 ? "flex" : "hidden"
      } w-full flex flex-col items-center mb-[38px]`}
    >
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
            {underwearData?.slice(0, visibleButtons)?.map((underwear) => {
              // console.log(item, "item");
              return (
                <button
                  key={underwear?.id}
                  onClick={() => {
                    setChangeClick(true);
                    sendSize(underwear)
                  }}
                  className={`${
                    underwear?.letter_size || underwear?.size
                      ? "flex"
                      : "hidden"
                  } h-10 w-[57px] items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white transition ease-linear duration-200 rounded-lg`}
                >
                  <div className="flex items-center">
                  {underwear?.letter_size ? (
                    <span>{underwear?.letter_size}</span>
                  ) : (
                    underwear?.max_wear_size ? (
                      <span>{underwear?.min_wear_size}-{underwear?.max_wear_size}</span>
                      ) : (
                      <span>{underwear?.min_wear_size}</span>
                    )
                  )}
                    <span className="ml-1">({underwear?.amount})</span>
                  </div>
                </button>
              );
            })}
            <div className="w-full flex items-center justify-between">
              <div className="flex w-1/3 justify-start items-center">
                <button
                  type="button"
                  className={`${
                    changeClick ? "flex" : "hidden"
                  } flex-start text-sm text-borderWinter font-AeonikProRegular mt-2`}
                >
                  Сбросить
                </button>
              </div>
              <div
                className={`${
                  underwearData?.length > 8 ? "flex" : "hidden"
                } w-2/3 items-center justify-end`}
              >
                <button
                  type="button"
                  disabled={visibleButtons === 12}
                  onClick={() => {
                    setVisibleButtons((prev) => prev - 12);
                  }}
                  className={`${
                    visibleButtons === 12
                      ? "cursor-not-allowed text-textOpacity font-AeonikProMedium"
                      : ""
                  } w-full flex justify-end text-sm text-borderWinter font-AeonikProRegular mt-2`}
                >
                  Меньше
                </button>
                <button
                  type="button"
                  disabled={underwearData?.length <= visibleButtons}
                  onClick={() => {
                    setVisibleButtons((prev) => prev + 12);
                  }}
                  className={`${
                    underwearData?.length <= visibleButtons
                      ? "cursor-not-allowed text-textOpacity font-AeonikProMedium"
                      : ""
                  } w-full flex-end justify-end text-sm text-borderWinter font-AeonikProRegular mt-2`}
                >
                  Больше
                </button>
              </div>
            </div>
          </figure>
        </article>
      </section>
    </div>
  );
}

export default React.memo(UnderwearSizesFilter);
