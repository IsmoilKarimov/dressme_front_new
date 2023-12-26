import React, { useState } from "react";

function CategoryButtonsFilter({
  dataAction,
  setDataAction,
  dataActionDiscount,
  setDataActionDiscount,
  handleGetId,
  handleGetDiscountId,
}) {
  const [genderCategory, setGenderCategory] = useState([
    {
      id: 1,
      action: false,
      name: "Женщинам",
    },
    { id: 2, action: false, name: "Мужчинам" },
    {
      id: 3,
      action: false,
      name: "Детям",
    },
  ]);

  console.log(dataAction,'dataAction');

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
    <article className="w-full flex flex-wrap gap-x-[4px] gap-y-[8px]">
      {genderCategory?.map((data) => {
        return (
          <button
            key={data?.id}
            onClick={() => {
              setDataAction(true);
              handleGenderCheck(data?.id);
              onGetId(data?.id);
              console.log(data.id);
            }}
            className={`${
              dataAction
                ? ""
                : `${
                    data?.action
                      ? "bg-fullBlue active:scale-95 text-white "
                      : ""
                  }`
            } h-[44px] w-[49%] flex items-center justify-center bg-bgCategory font-AeonikProMedium text-sm leading-3 text-center text-black  hover:bg-fullBlue  hover:text-white rounded-lg`}
          >
            {data?.name}
          </button>
        );
      })}

      <button
        onClick={() => {
          setDataActionDiscount(true);
          onGetDiscontId(1);
        }}
        className={`${
          dataActionDiscount
            ? "bg-fullBlue"
            : "bg-bgCategory"
        } h-[44px] w-[49%] flex items-center justify-center text-red-600 font-AeonikProMedium text-sm leading-3 text-center active:scale-95  hover:bg-fullBlue rounded-lg `}
      >
        Скидки
      </button>
    </article>
  );
}
export default React.memo(CategoryButtonsFilter);
