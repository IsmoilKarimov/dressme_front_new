import React, { useState } from "react";

function CategoryButtonsFilter({ handleGetId, handleGetDiscountId }) {
  const [dataAction, setDataAction] = useState(true);
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
              setDataAction(!dataAction);    
              handleGenderCheck(data?.id);
              onGetId(data?.id);
            }}
            className={`${
              dataAction
                ? ""
                : `${
                    data?.action
                      ? "bg-fullBlue active:scale-95 text-white"
                      : ""
                  }`
            } h-[44px] w-[49%] flex items-center justify-center bg-bgCategory font-AeonikProMedium text-sm leading-3 text-center text-black  hover:bg-fullBlue  hover:text-white rounded-lg duration-300`}
          >
            {data?.name}
          </button>
        );
      })}

      <button
        onClick={() => {
          setDataActionDiscount(!dataActionDiscount);
          onGetDiscontId(1);
        }}
        className={`${
          dataActionDiscount ? "bg-fullBlue text-red-500 " : "bg-bgCategory text-red-600 "
        } h-[44px] w-[49%] flex items-center justify-center font-AeonikProMedium text-sm leading-3 text-center active:scale-95 hover:text-red-500 hover:bg-fullBlue rounded-lg duration-300`}
      >
        Скидки
      </button>
    </article>
  );
}
export default React.memo(CategoryButtonsFilter);
