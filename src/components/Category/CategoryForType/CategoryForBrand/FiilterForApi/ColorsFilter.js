import React, { useState } from "react";
import { ArrowTopIcons } from "../../../../../assets/icons";
import { FaCheck } from "react-icons/fa";

function ColorsFilter({
  state,
  setState,
  filter,
  handleGetColorHexCode
}) {
  const [selectedColorId, setSelectedColorId] = useState(null);
  const [changeClick, setChangeClick] = useState(false);

  function onGetColorHexCode(hexCode) {
    handleGetColorHexCode({
      colorFilterHexCode: hexCode,
    });
  }
  function sendClearedData() {
    handleGetColorHexCode({
      colorFilterHexCode: null,
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
            state?.ColorsShow
              ? "duration-300 h-0"
              : `${
                  filter?.colors?.length > 5
                    ? "h-[120px]"
                    : `${filter?.colors?.length > 10 ? "h-[150px]" : ""}`
                } ${changeClick ? 'h-[80px]' : 'h-[56px]'} duration-300  pt-5`
          }`}
        >
          <div className="flex items-center justify-start mx-1 gap-x-[10px] gap-y-[10px]">
            {filter?.colors?.map((colorHex, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  style={{ background: colorHex }}
                  onClick={() => {
                    setSelectedColorId(index);
                    setChangeClick(true);
                    onGetColorHexCode(colorHex);
                  }}
                  className={`rounded-full flex items-center justify-center hover:scale-110 duration-300 w-8 h-8 cursor-pointer border border-solid border-borderColorCard`}
                  htmlFor={`${colorHex}`}
                >
                  {selectedColorId === index ? (
                    <p className="w-[14px] flex items-center justify-center">
                      <FaCheck
                        color={
                          colorHex === "#ffffff" || colorHex === "#f5f5dc"
                            ? "#000"
                            : "#fff"
                        }
                        className="flex items-center justify-center"
                      />
                    </p>
                  ) : null}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => {
              sendClearedData();
              setChangeClick(false);
              setSelectedColorId(null);
            }}
            className={`${
              changeClick ? "flex" : "hidden"
            } w-full mt-2 flex-start text-sm text-borderWinter font-AeonikProRegular`}
          >
            Сбросить
          </button>
        </article>
      </section>
    </div>
  );
}

export default React.memo(ColorsFilter);
