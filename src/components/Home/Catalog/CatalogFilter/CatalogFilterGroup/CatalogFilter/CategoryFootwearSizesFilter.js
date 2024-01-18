import React, { useEffect, useState } from "react";
import { ArrowTopIcons } from "../../../../../../assets/icons";

function SectionFootwearSizesFilter({
  state,
  setState,
  filter,
  handleFootwearWearSize,
  dataActionFootwearSizes,
  setDataActionFootwearSizes,

  setDataActionOutwearSizes,
  setDataActionUnderwearSizes,
  sendClearedUnderwearData,
  sendClearedOutwearData
}) {
  const [footwearData, setFootwearData] = useState(null);
  const [visibleButtons, setVisibleButtons] = useState(12);

  useEffect(() => {
    async function footwearSizes() {
      const footwear = filter?.wear_sizes?.footwear;
      const transformedArray = Object.entries(footwear).map(
        ([size, details]) => ({ size, ...details })
      );
      setFootwearData(transformedArray);
    }
    footwearSizes();
  }, [filter]);

  return (
    <div
      className={`${
        footwearData?.length > 0 ? "flex" : "hidden"
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
            onClick={() => setState({ ...state, ShoesShow: !state.ShoesShow })}
            className="flex items-center cursor-pointer select-none"
          >
            <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
              Размер обуви
            </p>
            <p
              className={`${
                state?.ShoesShow ? "rotate-[180deg]" : ""
              } duration-300 ml-1`}
            >
              <ArrowTopIcons colors={"#000"} />
            </p>
          </figure>
        </article>
        <article
          className={` overflow-hidden ${
            state?.ShoesShow ? "duration-300 h-0" : "duration-300 h-fit mt-5"
          } duration-300`}
        >
          <figure className="w-full flex flex-wrap justify-start gap-x-[2px] gap-y-2">
            {footwearData?.slice(0, visibleButtons)?.map((footwear, index) => {
              return (
                <button
                  key={index+1}
                  onClick={() => {
                    setDataActionFootwearSizes(index+1);
                    setDataActionOutwearSizes(null);
                    setDataActionUnderwearSizes(null);
                    handleFootwearWearSize(footwear?.wear_size);
                    sendClearedUnderwearData()
                    sendClearedOutwearData()
                  }}
                  className={`${
                    dataActionFootwearSizes === index+1
                      ? "bg-fullBlue text-white"
                      : ""
                  } h-10 w-[57px] flex items-center justify-center not-italic font-AeonikProMedium text-xs leading-3 text-center text-black bg-bgCategory  hover:bg-fullBlue  hover:text-white transition ease-linear duration-200 rounded-lg`}
                >
                  <div className="flex items-center">
                    <span>{footwear?.size}</span>
                    <span className="ml-1">({footwear?.amount})</span>
                  </div>
                </button>
              );
            })}
            <div className="w-full flex items-center justify-between">
              <div className="flex w-1/3 justify-start items-center">
                <button
                  type="button"
                  onClick={() => {
                    setDataActionFootwearSizes(false);
                    handleFootwearWearSize(null);
                  }}
                  className={`${
                    dataActionFootwearSizes ? "flex" : "hidden"
                  } flex-start text-sm text-borderWinter font-AeonikProRegular mt-2`}
                >
                  Сбросить
                </button>
              </div>
              <div
                className={`${
                  footwearData?.length > 12 ? "flex" : "hidden"
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
                  disabled={footwearData?.length <= visibleButtons}
                  onClick={() => {
                    setVisibleButtons((prev) => prev + 12);
                  }}
                  className={`${
                    footwearData?.length <= visibleButtons
                      ? "cursor-not-allowed text-textOpacity font-AeonikProMedium"
                      : ""
                  } w-full flex justify-center text-sm text-borderWinter font-AeonikProRegular mt-2`}
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

export default React.memo(SectionFootwearSizesFilter);
