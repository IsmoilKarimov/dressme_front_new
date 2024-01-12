import React, { useEffect, useState } from "react";
import { ArrowTopIcons } from "../../../../../assets/icons";

function ShoesSizesFilter({ state, setState, filter }) {
  const [changeClick, setChangeClick] = useState(false);
  const [footwearData, setFootwearData] = useState(null);

  console.log(footwearData, "footwearData");

  useEffect(() => {
    async function footwearSizes() {
      const footwear = filter?.wear_sizes?.footwear;
      console.log(footwear);
      const transformedArray = Object.entries(footwear).map(
        ([size, details]) => ({ size, ...details })
      );
      setFootwearData(transformedArray);
    }
    footwearSizes();
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
          <figure className="w-full flex flex-wrap justify-between gap-y-2">
            {footwearData?.map((footwear) => {
              console.log(footwear, "item-foootwear");
              return (
                <button
                  key={footwear.id}
                  onClick={() => {
                    setChangeClick(true);
                  }}
                  className={`h-10 w-[57px] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white transition ease-linear duration-200 rounded-lg`}
                >
                  <div className="flex items-center">
                    <span>{footwear?.size}</span>
                    {/* <span className="ml-1">({footwear?.amount})</span> */}
                  </div>
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

export default React.memo(ShoesSizesFilter);
