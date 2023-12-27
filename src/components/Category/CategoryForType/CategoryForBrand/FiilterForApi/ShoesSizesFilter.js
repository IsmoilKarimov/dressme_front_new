import React from "react";
import { ArrowTopIcons } from "../../../../../assets/icons";

function ShoesSizesFilter({ state, setState }) {
  const shoeSize = [
    { id: 1, action: false, size: "37" },
    { id: 2, action: false, size: "38" },
    { id: 3, action: false, size: "39" },
    { id: 4, action: false, size: "40" },
    { id: 5, action: false, size: "41" },
    { id: 6, action: false, size: "42" },
    { id: 7, action: false, size: "43" },
    { id: 8, action: false, size: "44" },
  ];

  return (
    <section className="w-full h-fit mt-[50px] ">
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
          state?.ShoesShow ? "duration-300 h-0" : "duration-300 h-[90px] mt-5"
        } duration-300`}
      >
        <figure className="w-full flex flex-wrap justify-between gap-y-2">
          {shoeSize.map((item) => (
            <button
              key={item.id}
              className="h-10 w-[57px] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white transition ease-linear duration-200 rounded-lg"
            >
              {item.size}
            </button>
          ))}
        </figure>
      </article>
    </section>
  );
}

export default ShoesSizesFilter;
