import React, { useState } from "react";
import { ArrowTopIcons, StarIcons } from "../../../../../../../assets/icons";
import { BsCheckLg } from "react-icons/bs";

function ShopCustomerReviewsFilter({
  state,
  setState,
  filter,
  handleCustomerReviews,
}) {
  const [selected, setSelected] = useState(null);
  const [clickChange, setChangeClick] = useState(false);

  const [ratings] = useState({
    "1.0": 0, // 5
    "2.0": 0, // 4
    "3.0": 0, // 3
    "4.0": 0, // 2
    "5.0": 0, // 1
  });

  console.log(filter?.ratings);

  function onGetRatingId(id) {
    handleCustomerReviews({
      ratingId: id,
    });
  }

  function sendClearedData() {
    handleCustomerReviews({
      ratingId: null,
    });
  }

  return (
    <div className="w-full flex flex-col items-center mb-[38px]">
      <section className="w-full h-fit mt-[12px]">
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
              : "duration-300 h-[190px] mt-5"
          } duration-300`}
        >
          {/* Field */}
          {Object.keys(ratings).map((rating, index) => {
            return (
              <div
                key={index}
                className="flex items-center cursor-pointer select-none"
                onClick={() => {
                  onGetRatingId(index + 1);
                  setSelected(index);
                  setChangeClick(true);
                }}
              >
                <div
                  className={`w-[22px] h-[22px] flex items-center  mr-[10px] rounded border border-borderColorCard`}
                >
                  {selected === index && (
                    <span className="bg-blue-600 h-full w-full text-white flex items-center justify-center">
                      <BsCheckLg size={12} />
                    </span>
                  )}
                </div>
                <div className="flex items-center not-italic mr-2 font-AeonikProRegular  text-lg leading-4 text-black">
                  {(() => {
                    if (index === 4) {
                      return (
                        <div className="flex items-center">
                          <StarIcons />
                          <StarIcons />
                          <StarIcons />
                          <StarIcons />
                          <StarIcons />
                        </div>
                      );
                    } else if (index === 3) {
                      return (
                        <div className="flex items-center">
                          <StarIcons />
                          <StarIcons />
                          <StarIcons />
                          <StarIcons />
                        </div>
                      );
                    } else if (index === 2)
                      return (
                        <div className="flex items-center">
                          <StarIcons />
                          <StarIcons />
                          <StarIcons />
                        </div>
                      );
                    else if (index === 1)
                      return (
                        <div className="flex items-center">
                          <StarIcons />
                          <StarIcons />
                        </div>
                      );
                    else
                      return (
                        <div className="flex items-center">
                          <StarIcons />
                        </div>
                      );
                  })()}
                </div>
                <span className="text-base leading-3 font-AeonikProRegular">
                  ({filter?.ratings[rating]})
                </span>
              </div>
            );
          })}

          <button
            type="button"
            onClick={() => {
              setSelected(null);
              sendClearedData();
            }}
            className={`${
              clickChange ? "flex" : "hidden"
            } w-full flex-start text-sm text-borderWinter font-AeonikProRegular`}
          >
            Сбросить
          </button>
        </article>
      </section>
    </div>
  );
}

export default React.memo(ShopCustomerReviewsFilter);