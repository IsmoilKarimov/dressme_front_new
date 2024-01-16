import React, { useState } from "react";
import { ArrowTopIcons } from "../../../../../assets/icons";
import { FaCheck } from "react-icons/fa";

function ColorsFilter({
  state,
  setState,
  filter,
  colorHexCode,
  setColorHexCode,
  handleGetColorHexCode,
  dataActionColors,
  setDataActionColors
}) {
  const [selectedColorId, setSelectedColorId] = useState(null);

  function onGetColorHexCode(hexCode) {
    handleGetColorHexCode({
      colorFilterHexCode: hexCode,
    });
  }

  return (
    <div className="w-full flex items-center flex-col md:mb-[38px]">
      <section className="w-full h-fit ">
        {/* Controls */}
        <article
          className="openBrands w-full flex justify-between items-center md:pt-[12px]"
          onClick={(event) => {
            event.target.classList.toggle("open");
          }}
        >
          <figure
            onClick={() =>
              setState({ ...state, ColorsShow: !state.ColorsShow })
            }
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
          className={`overflow-hidden ${
            state?.ColorsShow ? "duration-300 h-0" : `h-fit duration-300 pt-5 pb-1`
          }  ${dataActionColors ? "block" : ""}`}
        >
          <div className="flex items-center justify-start flex-wrap mx-1 gap-x-2 gap-y-2">
            {filter?.colors?.map((colorHex, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  style={{ background: colorHex }}
                  onClick={() => {
                    setSelectedColorId(index + 1);
                    onGetColorHexCode(colorHex);
                  }}
                  className={`
                    } rounded-full flex items-center justify-center hover:scale-110 duration-300 w-6 h-6 cursor-pointer border border-solid border-borderColorCard`}
                  htmlFor={`${colorHex}`}
                >
                  <p className="w-[14px] flex items-center justify-center">
                    {colorHexCode.includes(colorHex) && (
                      <FaCheck
                        color={
                          colorHex === "#ffffff" || colorHex === "#f5f5dc"
                            ? "#000"
                            : "#fff"
                        }
                        className="flex items-center justify-center"
                      />
                    )}
                  </p>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => {
              setColorHexCode([])
              setDataActionColors(false);
              setSelectedColorId(null);
            }}
            className={`${ colorHexCode?.length ? "flex" : "hidden" } w-full mt-2 flex-start text-sm text-borderWinter font-AeonikProRegular`}
          >
            Сбросить
          </button>
        </article>
      </section>
    </div>
  );
}

export default React.memo(ColorsFilter);
