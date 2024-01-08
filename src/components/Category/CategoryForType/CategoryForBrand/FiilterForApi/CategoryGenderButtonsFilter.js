import React, { useState } from "react";
import { ArrowTopIcons } from "../../../../../assets/icons";

function CategoryGenderButtonsFilter({
  handleGetId,
  handleGetDiscountId,
  filter,
}) {
  const [dataAction, setDataAction] = useState(true);
  const [openGenderField, setOpenGenderField] = useState(false);
  const [dataActionDiscount, setDataActionDiscount] = useState(false);
  const [genderCategory, setGenderCategory] = useState([
    {
      id: 1,
      action: false,
      name: "Мужчинам",
    },
    {
      id: 2,
      action: false,
      name: "Женщинам",
    },
    {
      id: 3,
      action: false,
      name: "Детям",
    },
  ]);

  function onGetId(id) {
    handleGetId({
      genderFilterId: id,
    });
  }

  function onGetDiscontId(id) {
    handleGetDiscountId({
      discountId: id,
    });
  }
  function sendClearedData() {
    handleGetDiscountId({
      discountId: null,
    });
  }

  const handleGenderCheck = (value) => {
    setGenderCategory((data) => {
      return data.map((e) => {
        if (e.id === value) {
          return { ...e, action: true };
        } else return { ...e, action: false };
      });
    });
  };

  return (
    <div
      className={`${
        filter?.gender_ids.length ? "flex" : "hidden"
      } w-full flex-col items-center md:mb-[38px]`}
    >
      <article
        className="w-full flex justify-between items-center"
        onClick={(event) => {
          event.target.classList.toggle("open");
        }}
      >
        <figure
          onClick={() => setOpenGenderField(!openGenderField)}
          className="flex items-center cursor-pointer select-none"
        >
          <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
          Пол
          </p>
          <p
            className={`
                ${openGenderField ? "rotate-[180deg]" : ""} duration-300 ml-1`}
          >
            <ArrowTopIcons colors={"#000"} />
          </p>
        </figure>
      </article>
      {/* Field */}
      <article
        className={`w-full overflow-hidden ${
          openGenderField ? "duration-300 h-0" : "duration-300 h-fit mt-5 "
        } duration-300 flex flex-col gap-y-4`}
      >
        <div className={`w-full flex flex-col items-center`}>
          <div className="w-full flex flex-wrap gap-x-[4px] gap-y-[8px]">
            {genderCategory?.map((data) => {
              return filter?.gender_ids?.map((id) => {
                if (id == data.id) {
                  return (
                    <button
                      key={data?.id}
                      onClick={() => {
                        setDataAction(false);
                        handleGenderCheck(data?.id);
                        onGetId(data?.id);
                      }}
                      disabled={
                        filter?.gender_ids.length == 1 &&
                        filter?.discount === false
                      }
                      className={`${
                        dataAction
                          ? ""
                          : `${
                              data?.action
                                ? "bg-fullBlue active:scale-95 text-white"
                                : ""
                            }`
                      } ${
                        filter?.gender_ids.length == 1 &&
                        filter?.discount === false
                          ? "w-full cursor-not-allowed hover:bg-bgCategory hover:text-black"
                          : "hover:bg-fullBlue hover:text-white"
                      } h-[44px] w-[49%] flex items-center justify-center bg-bgCategory font-AeonikProMedium text-sm leading-3 text-center text-black rounded-lg duration-300`}
                    >
                      {data?.name}
                    </button>
                  );
                }
              });
            })}
            {filter?.discount ? (
              <button
                onClick={() => {
                  setDataActionDiscount(true);
                  onGetDiscontId(1);
                }}
                className={`${
                  dataActionDiscount
                    ? "border border-fullBlue bg-bgCategory text-red-500 "
                    : "bg-bgCategory text-red-600"
                } h-[44px] w-[49%] flex items-center justify-center font-AeonikProMedium text-sm leading-3 text-center active:scale-95 hover:text-red-500 hover:border hover:border-fullBlue rounded-lg duration-300`}
              >
                Скидки
              </button>
            ) : null}
          </div>
          {filter?.gender_ids.length && !dataAction ? (
            <button
              type="button"
              onClick={() => {
                sendClearedData()
                setDataAction(true);
              }}
              className={` w-full flex flex-start text-sm text-borderWinter font-AeonikProRegular mt-2`}
            >
              Сбросить
            </button>
          ) : null}
        </div>
      </article>
    </div>
  );
}
export default React.memo(CategoryGenderButtonsFilter);
