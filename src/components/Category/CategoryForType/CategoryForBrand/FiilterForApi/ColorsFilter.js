import React, { useState } from "react";
import {
  ArrowTopIcons,
  InputCheckedTrueIcons,
} from "../../../../../assets/icons";

function ColorsFilter({ state, setState, colors, getColors }) {

  const [selectedColorId,setSelectedColorId] = useState(null)

  return (
    <section className="w-full h-fit mt-[50px] ">
      {/* Controls */}
      <article
        className="openBrands w-full flex justify-between items-center"
        onClick={(event) => {
          event.target.classList.toggle("open");
        }}
      >
        <figure
          onClick={() => setState({ ...state, ColorsShow: !state.ColorsShow })}
          className="flex items-center cursor-pointer select-none"
        >
          <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
            Цвет
          </p>
          <p
            className={`${
              state?.ColorsShow ? "rotate-[180deg]" : ""
            } duration-300 ml-1`}
          >
            <ArrowTopIcons colors={"#000"} />
          </p>
        </figure>
      </article>
      
      {/* Colors */}
      <article
        className={`w-full px-[2px] flex justify-start flex-wrap items-center bg-white hover:backdrop-brightness-125 hover:bg-white/60 transition ease-out duration-300 gap-x-[14px] gap-y-[10px] border-0  overflow-clip  ${
          state?.ColorsShow ? "duration-300 h-0" : "duration-300 h-fit py-5"
        } duration-300 `}
      >
        {colors?.map((color,index) => {
          return (
            <figure
              key={index}
              style={{background:color}}
              onClick={() => setSelectedColorId(index)}
              className={`rounded-full flex items-center justify-center hover:scale-110 duration-300 w-8 h-8 cursor-pointer border border-solid border-borderColorCard`}
              htmlFor={`${color}`}
            >
              {selectedColorId === index ? (
                <p className="w-[14px]">
                  <InputCheckedTrueIcons colors={color === "#000000" ? "#fff" : "#000"} />
                </p>
              ) : null}
            </figure>
          );
        })}
      </article>
    </section>
  );
}

export default React.memo(ColorsFilter);
