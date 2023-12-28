import React, { useState } from "react";
import { ArrowTopIcons } from "../../../../../assets/icons";
import Slider from "react-slider";

function BudgetFilter({ state, setState, getMinMaxPrice }) {
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10);
  const [values, setValues] = useState([minPrice, maxPrice]);

  function sendPrizeData() {
    getMinMaxPrice({
      min: values[0],
      max: values[1],
    });
  }
  console.log(values, "values ");
  console.log(minPrice, "minPrice ");
  console.log(maxPrice, "maxPrice ");
  return (
    <section className="w-full h-fit mt-[50px]">
      <article
        className="w-full flex justify-between items-center "
        onClick={(event) => {
          event.target.classList.toggle("open");
        }}
      >
        <figure
          onClick={() => setState({ ...state, budgetShow: !state.budgetShow })}
          className="flex items-center cursor-pointer select-none"
        >
          <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
            Budget
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
        className={`  border-1 border-green-600  overflow-hidden  ${
          state?.budgetShow ? "duration-300 h-0" : "duration-300 h-fit mt-5"
        } duration-300`}
      >
        <div className="  flex flex-col rounded-lg  w-full">
          <div className="flex flex-wrap justify-between items-center mb-6 w-full px-2">
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
            className="slider w-full h-[4px] bg-fullBlue border rounded-[1px] mt-5"
            onChange={setValues}
            value={values}
            min={minPrice}
            max={maxPrice}
          />
          <div className="flex items-center justify-end mt-6">
            <span
              onClick={sendPrizeData}
              className="flex items-center font-AeonikProMedium cursor-pointer text-sm justify-center  text-fullBlue"
            >
              Готово
            </span>
          </div>
        </div>
      </article>
    </section>
  );
}
export default React.memo(BudgetFilter);
