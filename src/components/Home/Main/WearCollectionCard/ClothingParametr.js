import React, { useState, useEffect, useContext } from "react";
import {
  BrushColorIcons,
  ChildGenIcon,
  ClothesIcons,
  CotegoryMenuIcons,
  DollorIcons,
  InputCheckedTrueIcons,
  ManGenIcons,
  MenuCloseIcons,
  TopBrandsIcon,
  WomanGenIcons,
} from "../../../../assets/icons";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { GrClose } from "react-icons/gr";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";
import Slider from "react-slick";
const ClothingParametr = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [data, setData, , , page, setPage] = useContext(HomeMainDataContext);

  const [state, setState] = useState({
    clothesTypeMobile: false,
    priceToggleMobile: false,
    genderMobile: false,
    selectColorToggleMobile: false,
    minPrice: 60000,
    maxPrice: 1800000,
  });

  console.log(data, "data");

  useEffect(() => {
    if (
      state?.clothesTypeMobile ||
      state?.priceToggleMobile ||
      state?.genderMobile ||
      state?.selectColorToggleMobile
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [
    state?.clothesTypeMobile,
    state?.priceToggleMobile,
    state?.genderMobile,
    state?.selectColorToggleMobile,
  ]);

  const [changeColor, setChangeColor] = useState([
    {
      colorName: "Black",
      id: 1,
      value: 1,
      action: false,
      IconsColor: "#4B5563",
      colors: "bg-black",
    },
    {
      colorName: "Белый",
      id: 2,
      value: 2,
      action: false,
      IconsColor: "#4B5563",
      colors: "bg-white",
    },
    {
      id: 3,
      value: 3,
      colorName: "Серый",
      action: false,
      IconsColor: "#4B5563",
      colors: "bg-zinc-500",
    },
    {
      id: 4,
      value: 4,
      colorName: "Фиолетовый",
      action: false,
      IconsColor: "#4B5563",
      colors: "bg-purple-500",
    },
    {
      id: 5,
      value: 5,
      colorName: "Голубой",
      action: false,
      IconsColor: "#4B5563",
      colors: "bg-sky-600",
    },
    {
      id: 6,
      value: 6,
      colorName: "Желтый",
      action: false,
      IconsColor: "#4B5563",
      colors: "bg-amber-400 ",
    },
    {
      id: 7,
      value: 7,
      colorName: "Зеленый",
      action: false,
      IconsColor: "#4B5563",
      colors: "bg-green-700 ",
    },
    {
      id: 8,
      value: 8,
      colorName: "Amber",
      action: false,
      IconsColor: "#4B5563",
      colors: "bg-amber-600 ",
    },
    {
      id: 9,
      value: 9,
      colorName: "Красный",
      action: false,
      IconsColor: "#4B5563",
      colors: "bg-red-700  ",
    },
    {
      id: 10,
      value: 10,
      colorName: "Фиолетовый",
      action: false,
      IconsColor: "#4B5563",
      colors: "bg-purple-800 ",
    },
    {
      id: 11,
      value: 11,
      colorName: "Blue",
      action: false,
      IconsColor: "#4B5563",
      colors: "bg-blue-900 ",
    },
    {
      id: 12,
      value: 12,
      colorName: "Brown",
      action: false,
      IconsColor: "#4B5563",
      colors: "bg-yellow-900 ",
    },
  ]);

  const [iconsColor, setIconsColor] = useState("black");
  const HandleIconsColor = (color, id) => {
    setIconsColor(color);
    setChangeColor((current) => {
      return current.map((data) => {
        if (data?.id == id) {
          return { ...data, action: true };
        } else {
          return { ...data, action: false };
        }
      });
    });
  };

  // Checks whether an element is even
  const even = (element) => element.action == true;
  let toggleAction = changeColor.some(even);

  const unCheckedAll = () => {
    setState({ ...state, selectColorToggleMobile: false });

    setChangeColor((current) => {
      return current.map((data) => {
        return { ...data, action: false };
      });
    });
    setIconsColor("black");
  };

  const [genderType, setGenderType] = useState([
    {
      id: 1,
      action: true,
      name: "Все",
      icon: <CotegoryMenuIcons />,
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

  const handleGenderDataCheck = (value) => {
    setGenderType((data) => {
      return data.map((e) => {
        if (e.id == value) {
          return { ...e, action: true };
        } else return { ...e, action: false };
      });
    });
  };

  const onFilterCategory = (value) => {
    setDressInfo({ ...dressInfo, mainCategoryId: value });
    setState({ ...state, clothesTypeMobile: false });
  };

  const onClearFilterCategoryId = () => {
    setDressInfo({ ...dressInfo, mainCategoryId: null});
  };

  const [minPrice, setMinPrice] = useState(
    Number(data?.getMainProductCard?.budget?.min_price)
  );
  const [maxPrice, setMaxPrice] = useState(
    Number(data?.getMainProductCard?.budget?.max_price)
  );

  const [values, setValues] = useState([]);

  useEffect(() => {
    setMinPrice(Number(data?.getMainProductCard?.budget?.min_price));
    setMaxPrice(Number(data?.getMainProductCard?.budget?.max_price));
    if (
      data?.getMainProductCard?.budget?.min_price &&
      data?.getMainProductCard?.budget?.max_price
    ) {
      if (!values[0] && !values[1]) {
        setValues([
          Number(data?.getMainProductCard?.budget?.min_price),
          Number(data?.getMainProductCard?.budget?.max_price),
        ]);
      }
    }
    if (
      !data?.getMainProductCard?.budget?.min_price &&
      !data?.getMainProductCard?.budget?.max_price
    ) {
      setValues([0, 0]);
    }
  }, [data?.getMainProductCard?.budget]);

  useEffect(() => {
    if (values[1] && values[0] && minPrice && maxPrice) {
      if (minPrice !== values[0] || maxPrice !== values[1]) {
        setState({ ...state, clearPrice: true });
      }
    }
  }, [values]);

  return (
    <main className="max-w-[1280px] w-[100%] flex flex-col items-center m-auto md:px-0">
      <section className="w-full md:hidden flex items-center justify-between pb-3 gap-x-2">
        <button
          onClick={() => {
            setState({
              ...state,
              clothesTypeMobile: !state.clothesTypeMobile,
            });
          }}
          className="w-[25%] active:scale-95 rounded-[12px] bg-btnBgColor border border-searchBgColor flex items-center justify-center px-4 h-[48px]"
        >
          <p>
            {" "}
            <ClothesIcons colors={"#000"} />
          </p>
        </button>
        <button
          onClick={() =>
            setState({
              ...state,
              priceToggleMobile: !state.priceToggleMobile,
            })
          }
          className="w-[25%] active:scale-95 rounded-[12px] bg-btnBgColor border border-searchBgColor flex items-center justify-center px-4 h-[48px] "
        >
          <span>
            {" "}
            <DollorIcons colors={"#000"} />
          </span>
        </button>
        <button
          onClick={() =>
            setState({
              ...state,
              selectColorToggleMobile: !state.selectColorToggleMobile,
            })
          }
          className="w-[25%] active:scale-95 rounded-[12px] bg-btnBgColor border border-searchBgColor flex items-center justify-center px-4 h-[48px]"
        >
          <span>
            {" "}
            <BrushColorIcons colors={iconsColor} />
          </span>
        </button>
        <button
          onClick={() =>
            setState({
              ...state,
              genderMobile: !state.genderMobile,
            })
          }
          className="w-[25%] active:scale-95 rounded-[12px] bg-btnBgColor border border-searchBgColor flex items-center justify-center px-4 h-[48px]"
        >
          <span>
            {" "}
            <TopBrandsIcon colors={"#000"} />
          </span>
        </button>
      </section>
      <section className="w-full">
        <section
          className={`h-fit top-30 left-[16px] fixed bg-white shadow-lg duration-200 z-50 ${
            state?.clothesTypeMobile ? "w-[92%]" : "w-0"
          }  `}
        >
          {state?.clothesTypeMobile && (
            <div className="fixed inset-0 z-10">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setState({ ...state, clothesTypeMobile: false })}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8 ">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg ">
                  <div className="flex items-center justify-between border-b border-searchBgColor pb-3 ">
                    <span className="text-black text-lg not-italic font-AeonikProRegular leading-5">
                      По категории
                    </span>
                    <button
                      type=""
                      onClick={() =>
                        setState({ ...state, clothesTypeMobile: false })
                      }
                    >
                      <GrClose size={22} />
                    </button>
                  </div>
                  <div className="pt-5 flex flex-col">
                    {data?.getMainProductCard?.categories?.map((data) => {
                      return (
                        <div
                          className={`${
                            data?.id === dressInfo?.mainCategoryId
                              ? "bg-[#F6F6F6]"
                              : ""
                          }  w-full flex items-center h-10 xs:h-12`}
                        >
                          <div
                            key={data?.id}
                            onClick={() => {
                              onFilterCategory(data?.id);
                            }}
                            className={`${
                              data?.id === dressInfo?.mainCategoryId
                                ? "text-borderWinter bg-[#F6F6F6]"
                                : ""
                            }  ${
                              dressInfo?.TextHoverSeason
                            } relative bg-bgCard text-base text-[#303030] font-AeonikProMedium hover:bg-[#F6F6F6] w-[85%] xs:h-12 h-10 cursor-pointer  flex items-center justify-center hover:duration-300 hover:ease-linear pl-12`}
                          >
                            {data.name_ru}
                          </div>
                          <button
                            type="button"
                            onClick={() => onClearFilterCategoryId()}
                            className={`${
                              data?.id === dressInfo?.mainCategoryId
                                ? "block"
                                : "hidden"
                            } text-black absolute right-3 flex items-center justify-center w-[15%] h-10 xs:h-12`}
                          >
                            <GrClose size={12} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        <section
          className={`h-fit top-30 left-[16px] fixed bg-white shadow-lg duration-200 z-50 ${
            state?.priceToggleMobile ? "w-[92%]" : "w-0"
          }  `}
        >
          {state?.priceToggleMobile && (
            <div className="fixed inset-0 z-10 ">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setState({ ...state, priceToggleMobile: false })}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                  <div className="max-w-[350px] w-full h-[170px] m-0 ">
                    <div className="flex items-center justify-between border-b border-searchBgColor pb-3">
                      <span className="text-black text-lg not-italic font-AeonikProRegular leading-5">
                        По ценам
                      </span>
                      <span
                        onClick={() =>
                          setState({ ...state, priceToggleMobile: false })
                        }
                        className="w-6 h-6 cursor-pointer"
                      >
                        <MenuCloseIcons
                          className="w-[24px] h-[24px]"
                          colors={"#000"}
                        />
                      </span>
                    </div>
                    <div className="  flex flex-col rounded-lg  w-full pb-5 pt-10">
                      <div className="flex justify-between items-center mb-6 w-full px-2">
                        <div className="flex ">
                          <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-[#555] ">
                            от
                          </span>
                          <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                            <input
                              className="w-[70px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                              name="name"
                              // value={state?.minPrice}
                              defaultValue={Number(
                                data?.getMainProductCard?.budget?.min_price
                              ).toLocaleString()}
                              // onChange={(e) =>
                              //   setState({ ...state, minPrice: e.target.value })
                              // }
                            />{" "}
                            сум
                          </span>
                        </div>
                        <div className="flex ">
                          <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-text-[#555] ">
                            до
                          </span>
                          <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                            <input
                              className="w-[100px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                              name="name"
                              // value={state?.maxPrice}
                              defaultValue={Number(
                                data?.getMainProductCard?.budget?.max_price
                              ).toLocaleString()}
                              // onChange={(e) =>
                              //   setState({ ...state, maxPrice: e.target.value })
                              // }
                            />
                            сум
                          </span>
                        </div>
                      </div>
                      <div className="relative z-50 mb-[6px] w-full  marketFilter">
                        {" "}
                        <Slider
                          className={`slider w-full flex items-center h-[4px] bg-fullBlue border rounded-[1px] mt-[10px]`}
                          onChange={setValues}
                          value={values}
                          minDistance={10}
                          min={Number(minPrice)}
                          max={Number(maxPrice)}
                        />
                      </div>
                      <div className="flex items-center justify-end mt-4">
                        <span
                          onClick={() =>
                            setState({ ...state, priceToggleMobile: false })
                          }
                          className="flex items-center cursor-pointer text-sm justify-center  text-fullBlue"
                        >
                          Готово
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        <section
          className={`h-fit top-30  left-[16px] fixed  bg-white shadow-lg  duration-200 z-50 ${
            state?.selectColorToggleMobile ? "w-[92%]" : "w-0"
          }`}
        >
          {state?.selectColorToggleMobile && (
            <div className="fixed inset-0 z-10 ">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() =>
                  setState({ ...state, selectColorToggleMobile: false })
                }
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                  <div
                    className={`flex items-center justify-between border-b border-searchBgColor pb-3"
                       `}
                  >
                    <span className="text-black text-lg not-italic font-AeonikProRegular leading-5">
                      По цвету
                    </span>
                    <button
                      className="py-2"
                      type=""
                      onClick={() =>
                        setState({ ...state, selectColorToggleMobile: false })
                      }
                    >
                      <GrClose size={22} />
                    </button>
                  </div>
                  <div className="py-4 gap-x-2 gap-y-4 grid gap-4 grid-cols-4">
                    {changeColor?.map((data) => {
                      return (
                        <div
                          key={data?.id}
                          className="flex flex-col items-center justify-center "
                        >
                          <div
                            onClick={() =>
                              HandleIconsColor(data?.IconsColor, data?.id)
                            }
                            className={`rounded-full flex items-center justify-center w-[35px] h-[35px] ${
                              data?.colors
                            } cursor-pointer ${
                              data?.id == 2 ? "border border-setTexOpacity" : ""
                            } `}
                          >
                            {data?.action && data?.id === 2 ? (
                              <span>
                                <InputCheckedTrueIcons colors={"#000"} />
                              </span>
                            ) : null}

                            {data?.action && data?.id !== 2 ? (
                              <InputCheckedTrueIcons colors={"#fff"} />
                            ) : null}
                          </div>
                          <span
                            className={`text-black text-center text-xs not-italic font-AeonikProRegular`}
                          >
                            {data?.colorName}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-end">
                    {toggleAction && (
                      <button
                        onClick={unCheckedAll}
                        className="flex items-center text-fullBlue active:scale-95  active:opacity-70 justify-center  px-4 py-1"
                      >
                        Отключить
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        <section
          className={`w-full h-fit top-30  left-[16px] fixed  bg-white shadow-lg duration-200 z-50 ${
            state?.genderMobile ? "w-[92%]" : "w-0"
          }`}
        >
          {state?.genderMobile && (
            <div className="fixed inset-0 z-10 ">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setState({ ...state, genderMobile: false })}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                  <div
                    className={`flex items-center justify-between border-b border-searchBgColor pb-3"
                       `}
                  >
                    <span className="text-black text-lg not-italic font-AeonikProRegular leading-5">
                      По полу
                    </span>
                    <button
                      className="py-2"
                      type=""
                      onClick={() =>
                        setState({ ...state, genderMobile: false })
                      }
                    >
                      <GrClose size={22} />
                    </button>
                  </div>
                  {/* Gender selection for Mobile */}
                  <section className="w-full flex items-center border border-searchBgColor rounded-xl my-3 bg-btnBgColor md:mt-0">
                    {genderType.map((data) => {
                      return (
                        <div
                          key={data.id}
                          className="w-full flex justify-center items-center h-12 rounded-xl"
                        >
                          <button
                            key={data.id}
                            onClick={() => {
                              handleGenderDataCheck(data.id);
                              setState({ ...state, genderMobile: false });
                            }}
                            className={`w-full flex items-center justify-center h-12 text-[15px] text-center ${
                              !data.name ? "px-5" : "px-7"
                            } font-AeonikProRegular ${
                              data.action
                                ? `{ bg-white border w-full h-[98%] my-auto mx-auto border-searchBgColor rounded-xl `
                                : ""
                            } `}
                          >
                            <span>{data.icon}</span>
                            {data.name ? (
                              <p className="pl-2 text-borderWinter">
                                {data.name}
                              </p>
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
                </div>
              </div>
            </div>
          )}
        </section>
      </section>
    </main>
  );
};
export { ClothingParametr };
