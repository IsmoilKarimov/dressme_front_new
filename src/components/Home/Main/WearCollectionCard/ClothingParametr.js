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
import {
  adidas,
  chanel,
  hm,
  lacoste,
  nike,
  puma,
  tommy,
  zara,
} from "../../../../assets";
import { GrClose } from "react-icons/gr";
import ReactSlider from "react-slider";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";
const ClothingParametr = () => {
  const [dressInfo] = useContext(dressMainData);
  const [data] = useContext(HomeMainDataContext);

  const [state, setState] = useState({
    clothesTypeMobile: false,
    priceToggleMobile: false,
    genderMobile: false,
    selectColorToggleMobile: false,
    minPrice: 60000,
    maxPrice: 1800000,
  });

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

  const wearMobileList = [
    { id: 1, type: "Головные уборы" },
    { id: 2, type: "Верхняя одежда" },
    { id: 3, type: "Нижняя одежда" },
    { id: 4, type: "Аксессуары" },
    { id: 5, type: "Обувь" },
  ];

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

  // Mobile top Branding Data Lists
  const campany = [
    { id: 1, imgFull: adidas },
    { id: 2, imgFull: chanel },
    { id: 3, imgFull: hm },
    { id: 4, imgFull: lacoste },
    { id: 5, imgFull: nike },
    { id: 6, imgFull: puma },
    { id: 7, imgFull: tommy },
    { id: 8, imgFull: zara },
  ];
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
          className="w-[25%] active:scale-8 rounded-[12px] bg-btnBgColor border border-searchBgColor flex items-center justify-center px-4 h-[48px]"
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
            <div className="fixed inset-0 z-10 ">
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
                    {wearMobileList?.map((data) => {
                      return (
                        <div
                          key={data?.id}
                          onClick={() => {
                            setState({ ...state, clothesTypeMobile: false });
                          }}
                          className={`${dressInfo?.TextHoverSeason} text-base text-[#303030] font-AeonikProMedium hover:bg-[#F6F6F6] w-full xs:h-12 h-10 cursor-pointer  flex items-center justify-center`}
                        >
                          {data?.type}
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
                              value={state?.minPrice}
                              onChange={(e) =>
                                setState({ ...state, minPrice: e.target.value })
                              }
                            />{" "}
                            sum
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
                              value={state?.maxPrice}
                              onChange={(e) =>
                                setState({ ...state, maxPrice: e.target.value })
                              }
                            />
                            sum
                          </span>
                        </div>
                      </div>
                      <div className="relative z-50 mb-[6px] w-full  marketFilter">
                        {" "}
                        <ReactSlider
                          className="horizontal-slider"
                          thumbClassName="example-thumb1"
                          trackClassName="example-track1"
                          defaultValue={[10, 90]}
                          ariaLabel={["Lower thumb", "Upper thumb"]}
                          // ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                          // renderThumb={() => <div>1</div>}
                          pearling
                          minDistance={10}
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
