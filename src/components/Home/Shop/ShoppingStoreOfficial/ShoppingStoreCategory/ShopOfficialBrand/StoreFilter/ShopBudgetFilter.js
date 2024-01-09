import React, { useEffect, useState } from "react";
import { ArrowTopIcons } from "../../../../../../../assets/icons";
import Slider from "react-slider";

function ShopBudgetFilter({ state, setState, getMinMaxPrice, filter }) {
  const [minPrice, setMinPrice] = useState(filter?.budget?.min_price || 10000); 
  const [maxPrice, setMaxPrice] = useState(filter?.budget?.max_price || 1000000); 
  const [checkChange, setCheckChange] = useState(false);
  const [values, setValues] = useState([minPrice, maxPrice]);

  useEffect(() => {
    setMinPrice((filter?.budget?.min_price || 10000));
    setMaxPrice((filter?.budget?.max_price || 1000000));
  }, [filter]);

  function sendPrizeData() {
    getMinMaxPrice({
      min: values[0],
      max: values[1],
    });
  }
  function sendClearedData() {
    getMinMaxPrice({
      min: null,
      max: null,
    });
  }

  useEffect(() => {
    if (minPrice !== values[0] || maxPrice !== values[1]) setCheckChange(true);
  }, [values]);



  return (
    <section className="w-full h-fit md:mb-[38px]">
      <article
        className="w-full flex justify-between items-center md:pt-[12px]"
        onClick={(event) => {
          event.target.classList.toggle("open");
        }}
      >
        <figure
          onClick={() => setState({ ...state, budgetShow: !state.budgetShow })}
          className="flex items-center cursor-pointer select-none"
        >
          <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
            Бюджет
          </p>
          <p
            className={`${
              state?.budgetShow ? "rotate-[180deg]" : ""
            } duration-300 ml-1`}
          >
            <ArrowTopIcons colors={"#000"} />
          </p>
        </figure>
      </article>
      <article
        className={`border-1  overflow-hidden  ${
          state?.budgetShow ? "duration-300 h-0" : `${checkChange ? 'h-[110px]' : 'h-[80px]'} duration-300 mt-5`
        } duration-300`}
      >
        <div className="flex flex-col rounded-lg  w-full">
          <div className="flex flex-wrap justify-between items-center mb-3 w-full px-2">
            <div className="flex">
              <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-[#000] ">
                от
              </span>
              <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                <input
                  className="w-[70px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                  value={values[0]}
                  onChange={(e) => {
                    setMinPrice(e.target.value);
                  }}
                />{" "}
              </span>
            </div>
            <div className="flex ">
              <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-text-[#555] ">
                до
              </span>
              <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                <input
                  className="w-[100px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px]"
                  value={values[1]}
                  onChange={(e) => {
                    setMaxPrice(e.target.value);
                  }}
                />
              </span>
            </div>
          </div>
          <Slider
            className="slider w-full flex items-center h-[4px] bg-fullBlue border rounded-[1px] my-5"
            onChange={setValues}
            value={values}
            min={minPrice !== undefined ? minPrice : 0}
            max={maxPrice !== undefined ? maxPrice : 100}
          />
          <div
            className={`${
              checkChange ? "flex" : "hidden"
            } w-full items-center justify-between mt-1`}
          >
            <button
              type="button"
              onClick={() => {
                sendClearedData();
                setCheckChange(false)
              }}
              className={`flex items-center text-sm text-borderWinter font-AeonikProRegular`}
            >
              Сбросить
            </button>
            <button
              type="button"
              onClick={sendPrizeData}
              className="flex items-center font-AeonikProRegular cursor-pointer text-sm justify-center  text-fullBlue"
            >
              Готово
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
export default React.memo(ShopBudgetFilter);
