import React from "react";
import {
  ArrowTopIcons,
  InputCheckedTrueIcons,
} from "../../../../../assets/icons";

function ColorsFilter({ state, setState }) {
  const changeColor = [
    { id: 1, value: 1, action: false, colors: "bg-black" },
    { id: 2, value: 2, action: false, colors: "bg-white" },
    { id: 3, value: 3, action: false, colors: "bg-purple-700" },
    { id: 4, value: 4, action: false, colors: "bg-gray-500" },
    { id: 5, value: 5, action: false, colors: "bg-red-700" },
    { id: 6, value: 6, action: false, colors: "bg-yellow-500" },
    { id: 7, value: 7, action: false, colors: "bg-green-600" },
    { id: 8, value: 8, action: false, colors: "bg-sky-500" },
    { id: 9, value: 9, action: false, colors: "bg-yellow-700" },
    { id: 10, value: 10, action: false, colors: "bg-rose-900" },
    { id: 11, value: 11, action: false, colors: "bg-pink-600" },
    { id: 12, value: 12, action: false, colors: "bg-cyan-900" },
  ];

  const HandleColorCheck = () => {};

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
          state?.ColorsShow ? "duration-300 h-0" : "duration-300 h-fit pt-5"
        } duration-300 `}
      >
        {changeColor.map((item) => {
          return (
            <figure
              key={item?.id}
              onClick={() => HandleColorCheck(item?.id)}
              className={`rounded-full flex items-center justify-center hover:scale-110 duration-300 w-8 h-8 ${item?.colors} cursor-pointer  border border-solid border-borderColorCard`}
              htmlFor="Color1"
            >
              {item?.action ? (
                <p className="w-[14px]">
                  <InputCheckedTrueIcons colors={"#fff"} />
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
