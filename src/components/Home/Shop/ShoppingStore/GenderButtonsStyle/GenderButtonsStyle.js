import React, { useState } from "react";
import {
  ChildGenIcon,
  ManGenIcons,
  ManWomanGen,
  WomanGenIcons,
} from "../../../../../assets/icons";

function GenderButtonsStyle({ handleGetId }) {
  const [genderCategory, setGenderCategory] = useState([
    {
      id: 1,
      action: true,
      name: "Все",
      icon: <ManWomanGen />,
    },
    {
      id: 2,
      action: false,
      name: "",
      icon: <ManGenIcons />,
    },
    {
      id: 3,
      action: false,
      name: "",
      icon: <WomanGenIcons />,
    },
    {
      id: 4,
      action: false,
      name: "",
      icon: <ChildGenIcon />,
    },
  ]);

  function onGetId(id) {
    // console.log(id, "getId");
    handleGetId({
      genderFilterId: id,
    });
  }

  const handleGenderCheck = (value) => {
    setGenderCategory((data) => {
      return data.map((e) => {
        if (e.id == value) {
          return { ...e, action: true };
        } else return { ...e, action: false };
      });
    });
  };

  return (
    <section className="w-full md:w-[480px] flex items-center border border-searchBgColor rounded-xl bg-slate-50 md:mt-0">
      {genderCategory?.map((data) => {
        return (
          <div
            key={data?.id}
            className={`w-1/4 flex items-center justify-center h-11 rounded-xl`}
          >
            <button
              key={data?.id}
              onClick={() => {
                handleGenderCheck(data?.id);
                onGetId(data?.id);
              }}
              className={`w-full flex items-center justify-center active:scale-95 h-11 text-[15px] text-center font-AeonikProRegular ${
                data?.action
                  ? `{ bg-white border w-full h-[98%] my-auto mx-auto border-searchBgColor rounded-xl`
                  : ""
              } `}
            >
              <span>{data.icon}</span>
              {data.name ? (
                <p className="px-2 text-borderWinter">{data.name}</p>
              ) : (
                ""
              )}
            </button>
            <span
              className={`${
                data.id === 4
                  ? "text-searchBgColor hidden"
                  : "text-searchBgColor flex items-center"
              }`}
            >
              |
            </span>
          </div>
        );
      })}
    </section>
  );
}
export default React.memo(GenderButtonsStyle);
