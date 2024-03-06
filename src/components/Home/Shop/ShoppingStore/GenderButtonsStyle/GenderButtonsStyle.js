import React, { useState } from "react";
import {
  ChildGenIcon,
  ManGenIcons,
  ManWomanGen,
  WomanGenIcons,
} from "../../../../../assets/icons";
import { useTranslation } from "react-i18next";

function GenderButtonsStyle({ handleGetId, getAllShops, setGetAllShops }) {
  const [genderCategory, setGenderCategory] = useState([
    {
      id: 1,
      action: false,
      name: "",
      icon: <ManGenIcons />,
    },
    {
      id: 2,
      action: false,
      name: "",
      icon: <WomanGenIcons />,
    },
    {
      id: 3,
      action: false,
      name: "",
      icon: <ChildGenIcon />,
    },
  ]);

  const { t } = useTranslation("shops")

  function onGetId(id) {
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
    <section className="w-full md:w-[520px] flex items-center border border-searchBgColor rounded-xl bg-slate-50 md:mt-0">
      <button
        onClick={() => {
          setGetAllShops(true);
          onGetId();
        }}
        className={`${
          getAllShops
            ? "bg-white border active:scale-95 my-auto mx-auto border-searchBgColor rounded-xl"
            : ""
        } w-[32%] flex items-center justify-center active:scale-95 h-11 text-[15px] text-center font-AeonikProRegular`}
      >
        <ManWomanGen />
        <span className="text-base ml-3 font-AeonikProRegular">
          {t("shop_genderAll_isSelected")}
        </span>
      </button>
      <span className="text-searchBgColor flex items-center">|</span>

      {genderCategory?.map((data) => {
        return (
          <div
            key={data?.id}
            className={`w-[23.3%] flex items-center justify-center h-11 rounded-xl`}
          >
            <button
              key={data?.id}
              onClick={() => {
                setGetAllShops(false);
                handleGenderCheck(data?.id);
                onGetId(data?.id);
              }}
              className={`${
                getAllShops
                  ? ""
                  : `${
                      data?.action
                        ? "bg-white border w-full h-[98%] my-auto mx-auto border-searchBgColor rounded-xl"
                        : ""
                    }`
              } w-full flex items-center justify-center active:scale-95 h-11 text-[15px] text-center font-AeonikProRegular  `}
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
                data.id === 3
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
