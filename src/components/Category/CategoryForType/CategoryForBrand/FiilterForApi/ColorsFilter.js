import React, { useState } from "react";
import { ArrowTopIcons } from "../../../../../assets/icons";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";

function ColorsFilter({ state, setState, filter, handleGetColorHexCode, setFilterData }) {
  const [selectedColorId, setSelectedColorId] = useState(null);
  const [changeClick, setChangeClick] = useState(false);
  const params = useParams()

  function onGetColorHexCode(hexCode) {
    handleGetColorHexCode({
      colorFilterHexCode: hexCode,
    });
  }



  function sendClearedData() {
    fetch(`https://api.dressme.uz/api/main/section/${params?.id}`, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setFilterData(res);
      });
  }

  return (
    <div className="w-full flex items-center flex-col">
      <section className="w-full h-fit mt-[50px] ">
        {/* Controls */}
        <article
          className="openBrands w-full flex justify-between items-center"
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
          className={`w-full px-[2px] flex justify-start flex-wrap items-center bg-white hover:backdrop-brightness-125 hover:bg-white/60 transition ease-out duration-300 gap-x-[14px] gap-y-[10px] border-0  overflow-clip  ${
            state?.ColorsShow ? "duration-300 h-0" : "duration-300 h-fit py-5"
          } duration-300 `}
        >
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
        </article>
      </section>
      <button
        type="button"
        onClick={() => {
          sendClearedData();
          setChangeClick(false);
          setSelectedColorId(null)
        }}
        className={`${
          changeClick ? "flex" : "hidden"
        } w-full flex-start text-sm text-borderWinter font-AeonikProRegular`}
      >
        Сбросить
      </button>
    </div>
  );
}

export default React.memo(ColorsFilter);
