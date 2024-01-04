import React, { useState } from "react";
import { ArrowTopIcons, StarIcons } from "../../../../../assets/icons";
import { BsCheckLg } from "react-icons/bs";

function CustomerReviewsFilter({ state, setState, filter }) {
  const [selected, setSelected] = useState(0);

  const [reviewStars, setRewievStart] = useState([
    {
      id: 1,
      action: false,
      starNumber: 1
    },
    {
      id: 2,
      action: false,
      starNumber: 3
    },
    {
      id: 3,
      action: false,
      starNumber: 3
    },
    {
      id: 4,
      action: false,
      starNumber: 4
    },
    {
      id: 5,
      action: false,
      starNumber: 5
    },
  ])

  return (
    <section className="w-full h-fit mt-[50px] ">
      <article
        className="w-full flex justify-between items-center"
        onClick={(event) => {
          event.target.classList.toggle("open");
        }}
      >
        <figure
          onClick={() =>
            setState({
              ...state,
              customerRreviews: !state.customerRreviews,
            })
          }
          className="flex items-center cursor-pointer select-none"
        >
          <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
            Отзывы клиентов
          </p>
          <p
            className={`${
              state?.customerRreviews ? "rotate-[180deg]" : ""
            } duration-300 ml-1`}
          >
            <ArrowTopIcons colors={"#000"} />
          </p>
        </figure>
      </article>
      <article
        className={`flex flex-col   gap-y-3 overflow-hidden ${
          state?.customerRreviews
            ? "duration-300 h-0"
            : "duration-300 h-[160px] mt-5"
        } duration-300`}
      >
        {/* Field */}

        <div
          className="flex items-center cursor-pointer select-none"
          onClick={() => setSelected(5)}
        >
          <div
            className={`w-[22px] h-[22px] flex items-center  mr-[10px] rounded border border-borderColorCard`}
          >
            {selected === 5 && (
              <span className="bg-blue-600 h-full w-full text-white flex items-center justify-center">
                <BsCheckLg size={12} />
              </span>
            )}
          </div>
          <div className="flex items-center not-italic mr-2 font-AeonikProRegular  text-lg leading-4 text-black">
            <StarIcons />
            <StarIcons />
            <StarIcons />
            <StarIcons />
            <StarIcons />
          </div>
        </div>
        <div
          className="flex items-center cursor-pointer select-none"
          onClick={() => setSelected(4)}
        >
          <div
            className={`w-[22px] h-[22px] flex items-center  mr-[10px] rounded border border-borderColorCard`}
          >
            {selected === 4 && (
              <span className="bg-blue-600 h-full w-full text-white flex items-center justify-center">
                <BsCheckLg size={12} />
              </span>
            )}
          </div>
          <div className="flex items-center not-italic mr-2 font-AeonikProRegular  text-lg leading-4 text-black">
            <StarIcons />
            <StarIcons />
            <StarIcons />
            <StarIcons />
          </div>
        </div>
        <div
          className="flex items-center cursor-pointer select-none"
          onClick={() => setSelected(3)}
        >
          <div
            className={`w-[22px] h-[22px] flex items-center  mr-[10px] rounded border border-borderColorCard`}
          >
            {selected === 3 && (
              <span className="bg-blue-600 h-full w-full text-white flex items-center justify-center">
                <BsCheckLg size={12} />
              </span>
            )}
          </div>
          <div className="flex items-center not-italic mr-2 font-AeonikProRegular  text-lg leading-4 text-black">
            <StarIcons />
            <StarIcons />
            <StarIcons />
          </div>
        </div>
        <div
          className="flex items-center cursor-pointer select-none"
          onClick={() => setSelected(2)}
        >
          <div
            className={`w-[22px] h-[22px] flex items-center  mr-[10px] rounded border border-borderColorCard`}
          >
            {selected === 2 && (
              <span className="bg-blue-600 h-full w-full text-white flex items-center justify-center">
                <BsCheckLg size={12} />
              </span>
            )}
          </div>
          <div className="flex items-center not-italic mr-2 font-AeonikProRegular  text-lg leading-4 text-black">
            <StarIcons />
            <StarIcons />
          </div>
        </div>
        <div
          className="flex items-center cursor-pointer select-none"
          onClick={() => setSelected(1)}
        >
          <div
            className={`w-[22px] h-[22px] flex items-center  mr-[10px] rounded border border-borderColorCard`}
          >
            {selected === 1 && (
              <span className="bg-blue-600 h-full w-full text-white flex items-center justify-center">
                <BsCheckLg size={12} />
              </span>
            )}
          </div>
          <div className="flex items-center not-italic mr-2 font-AeonikProRegular  text-lg leading-4 text-black">
            <StarIcons />
          </div>
        </div>
      </article>
    </section>
  );
}

export default React.memo(CustomerReviewsFilter);
