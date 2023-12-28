import React, { useContext, useEffect, useState } from "react";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { BiChevronDown } from "react-icons/bi";
import { Popover } from "antd";
import ReactSlider from "react-slider";

import style from "./bottom.module.css";
import {
  AutummBoyIcons,
  ClothesIcons,
  DollorIcons,
  InputCheckedTrueIcons,
  ManGenIcons,
  ManWomanGen,
  MenuCloseIcons,
  PlusAddCectorIcons,
  SpringBoyIcons,
  SummerBoyIcons,
  WinterBoyIcons,
  WomanGenIcons,
} from "../../assets/icons";
import { GrClose } from "react-icons/gr";
import { HomeMainDataContext } from "../../ContextHook/HomeMainData";

const BottomHeader = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [selectedId, setSelectedId] = useState(null);

  const [state, setState] = useState({
    openwear: false,
    openPrice: false,
    textToColor: false,
    minPrice: 60000,
    maxPrice: 1800000,
    selectPrice: "По бюджету",
    // --------
    showColour: false,
  });
  useEffect(() => {
    if (state?.showColour) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [state?.showColour]);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      if (getCurrentDimension().width < 758 && state?.showColour) {
        setState({ ...state, showColour: false });
      }
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  // ----------------Wear state management----------------------------

  const handleOpenChangeWear = (newOpen) => {
    setState({ ...state, openwear: newOpen });
  };
  const [selectWear, setselectWear] = useState("По категории");

  const handleWearValue = (value) => {
    setselectWear(value);
    setState({ ...state, openwear: false });
  };

  const [mainData, setMainData] = useContext(HomeMainDataContext);

  const contentWear = (
    <div className="w-[170px] h-fit m-0 p-0">
      {mainData?.categories?.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleWearValue(data?.name_ru);
            }}
            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dressInfo?.TextHoverSeason}`}
          >
            {data?.name_ru}
          </p>
        );
      })}
    </div>
  );

  // ----------------------Price State Management----------------------

  const handleOpenChangePrice = (newOpen) => {
    setState({ ...state, openPrice: newOpen });
  };

  const contentPrice = (
    <div className="w-[350px] h-[170px] m-0 ">
      <div className="flex items-center justify-between border-b border-searchBgColor pb-3">
        <span className="text-black text-lg not-italic font-AeonikProRegular leading-5">
          По ценам
        </span>
        <span
          onClick={() => setState({ ...state, openPrice: false })}
          className="w-6 h-6 cursor-pointer"
        >
          <MenuCloseIcons className="w-[24px] h-[24px]" colors={"#000"} />
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
            onClick={() => setState({ ...state, openPrice: false })}
            className="flex items-center cursor-pointer text-sm justify-center  text-fullBlue"
          >
            Готово
          </span>
        </div>
      </div>
    </div>
  );
  const [changeColor, setChangeColor] = useState([
    {
      id: 1,
      data: 1,
      icons: <InputCheckedTrueIcons />,
      action: false,
      colors: "bg-black",
      colorName: "Black",
    },
    {
      id: 2,
      data: 2,
      icons: <InputCheckedTrueIcons />,
      action: false,
      colors: "bg-white",
      colorName: "Black",
    },
    {
      id: 3,
      data: 3,
      icons: <InputCheckedTrueIcons />,
      action: false,
      colors: "bg-zinc-500",
      colorName: "Black",
    },
    {
      id: 4,
      data: 4,
      icons: <InputCheckedTrueIcons />,
      action: false,
      colors: "bg-purple-500",
      colorName: "Black",
    },
    {
      id: 5,
      data: 5,
      icons: <InputCheckedTrueIcons />,
      action: false,
      colors: "bg-sky-600",
      colorName: "Black",
    },
    {
      id: 6,
      data: 6,
      icons: <InputCheckedTrueIcons />,
      action: false,
      colorName: "Black",
      colors: "bg-amber-400 ",
    },
    {
      id: 7,
      data: 7,
      icons: <InputCheckedTrueIcons />,
      action: false,
      colorName: "Black",
      colors: "bg-green-700 ",
    },
    {
      id: 8,
      data: 8,
      icons: <InputCheckedTrueIcons />,
      action: false,
      colorName: "Black",
      colors: "bg-amber-600 ",
    },
    {
      id: 9,
      data: 9,
      icons: <InputCheckedTrueIcons />,
      action: false,
      colorName: "Black",
      colors: "bg-red-700  ",
    },
    {
      id: 10,
      data: 10,
      icons: <InputCheckedTrueIcons />,
      action: false,
      colorName: "Black",
      colors: "bg-purple-800 ",
    },
    {
      id: 11,
      data: 11,
      icons: <InputCheckedTrueIcons />,
      action: false,
      colorName: "Black",
      colors: "bg-blue-900  ",
    },
    {
      id: 12,
      data: 12,
      icons: <InputCheckedTrueIcons />,
      action: false,
      colorName: "Black",
      colors: "bg-yellow-900 ",
    },
  ]);
  const [getRadio, setGetRadio] = useState("");
  const colorIdPushContext = (id) => {
    setDressInfo({ ...dressInfo, ClothesBorder: id });
  };

  // const [changeColor, setChangeColor] = useState([
  //   {
  //     colorName: "Black",
  //     id: 1,
  //     value: 1,
  //     action: false,
  //     IconsColor: "#4B5563",
  //     colors: "bg-black",
  //   },
  //   {
  //     colorName: "Белый",
  //     id: 2,
  //     value: 2,
  //     action: false,
  //     IconsColor: "#4B5563",
  //     colors: "bg-white",
  //   },
  //   {
  //     id: 3,
  //     value: 3,
  //     colorName: "Серый",
  //     action: false,
  //     IconsColor: "#4B5563",
  //     colors: "bg-zinc-500",
  //   },
  //   {
  //     id: 4,
  //     value: 4,
  //     colorName: "Фиолетовый",
  //     action: false,
  //     IconsColor: "#4B5563",
  //     colors: "bg-purple-500",
  //   },
  //   {
  //     id: 5,
  //     value: 5,
  //     colorName: "Голубой",
  //     action: false,
  //     IconsColor: "#4B5563",
  //     colors: "bg-sky-600",
  //   },
  //   {
  //     id: 6,
  //     value: 6,
  //     colorName: "Желтый",
  //     action: false,
  //     IconsColor: "#4B5563",
  //     colors: "bg-amber-400 ",
  //   },
  //   {
  //     id: 7,
  //     value: 7,
  //     colorName: "Зеленый",
  //     action: false,
  //     IconsColor: "#4B5563",
  //     colors: "bg-green-700 ",
  //   },
  //   {
  //     id: 8,
  //     value: 8,
  //     colorName: "Amber",
  //     action: false,
  //     IconsColor: "#4B5563",
  //     colors: "bg-amber-600 ",
  //   },
  //   {
  //     id: 9,
  //     value: 9,
  //     colorName: "Красный",
  //     action: false,
  //     IconsColor: "#4B5563",
  //     colors: "bg-red-700  ",
  //   },
  //   {
  //     id: 10,
  //     value: 10,
  //     colorName: "Фиолетовый",
  //     action: false,
  //     IconsColor: "#4B5563",
  //     colors: "bg-purple-800 ",
  //   },
  //   {
  //     id: 11,
  //     value: 11,
  //     colorName: "Blue",
  //     action: false,
  //     IconsColor: "#4B5563",
  //     colors: "bg-blue-900 ",
  //   },
  //   {
  //     id: 12,
  //     value: 12,
  //     colorName: "Brown",
  //     action: false,
  //     IconsColor: "#4B5563",
  //     colors: "bg-yellow-900 ",
  //   },
  // ])
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
    setState({ ...state, showColour: false });

    setChangeColor((current) => {
      return current.map((data) => {
        return { ...data, action: false };
      });
    });
    setIconsColor("black");
  };
  // -----GenderType

  const [personItems, setPersonItems] = useState([
    {
      id: 1111,
      childText: [
        { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 2, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 4, anyIcons: <SpringBoyIcons />, name: "", action: false },
      ],
    },
    {
      id: 2222,
      childText: [
        { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 2, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 4, anyIcons: <SummerBoyIcons />, name: "", action: false },
      ],
    },
    {
      id: 3333,
      childText: [
        { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 2, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 4, anyIcons: <AutummBoyIcons />, name: "", action: false },
      ],
    },
    {
      id: 4444,
      childText: [
        { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 2, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 4, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ],
    },
    {
      id: 5555,
      childText: [
        { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 2, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 4, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ],
    },
  ]);
  const handleFilterByUser = (fathId, childId) => {
    setPersonItems((current) => {
      return current?.map((data) => {
        if (data?.id == fathId) {
          let newDataColor = data.childText.map((e) => {
            if (e.id == childId) {
              return { ...e, action: true };
            } else return { ...e, action: false };
          });
          console.log(newDataColor, "newDataColor");
          return { ...data, childText: [...newDataColor] };
        } else return data;
      });
    });
  };
  return (
    <nav className="w-full flex flex-col justify-center items-center m-0 p-0 box-border ss:hidden md:block">
      <div
        onClick={() => {
          setState({ ...state, showColour: false });
        }}
        className={`fixed inset-0 z-[220] cursor-pointer duration-200 w-full h-[100vh] bg-black opacity-50
         ${state?.showColour ? "" : "hidden"}`}
      ></div>
      {state?.showColour && (
        <div className="max-w-[576px] w-full fixed z-[221]  left-1/2 right-1/2 top-[50%] translate-x-[-50%] translate-y-[-50%]  h-fit flex items-center  justify-center mx-auto ">
          {/* </div> */}
          <div className="relative z-[223]  top-0 w-full h-fit p-4 mx-auto bg-white rounded-md shadow-lg">
            <div
              className={`flex items-center justify-between border-b border-searchBgColor pb-3"
                       `}
            >
              <span className="text-black text-lg not-italic font-AeonikProRegular leading-5">
                Выберите цвет
              </span>
              <button
                className="py-2"
                type=""
                onClick={() => setState({ ...state, showColour: false })}
              >
                <GrClose size={22} />
              </button>
            </div>
            <div className="py-4 gap-x-2 gap-y-4 grid gap-4 grid-cols-6">
              {mainData?.colors?.map((data) => {
                return (
                  <div className="flex flex-col items-center justify-center ">
                    <div
                      key={data?.id}
                      onClick={() => setSelectedId(data?.id)}
                      style={{ backgroundColor: data?.hex }}
                      className={`rounded-[12px] flex items-center justify-center w-[65px] h-[40px] cursor-pointer ${
                        data?.id === selectedId
                          ? "border border-setTexOpacity flex items-center justify-center"
                          : "border"
                      } `}
                    >
                      {selectedId === data?.id ? (
                        <InputCheckedTrueIcons
                          colors={data?.hex === "#000000" ? "#fff" : "#000"}
                        />
                      ) : null}

                      {/* {data?.action && data?.id !== 2 ? (
                        <InputCheckedTrueIcons colors={"#fff"} />
                      ) : null} */}
                    </div>
                    <span
                      className={`text-black text-center text-xs not-italic font-AeonikProRegular`}
                    >
                      {data?.name_ru}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-end">
              {selectedId && (
                <button
                  onClick={() => setSelectedId(null)}
                  className="flex items-center text-fullBlue active:scale-95  active:opacity-70 justify-center  px-4 py-1"
                >
                  Отключить
                </button>
              )}
              {/* </div> */}
            </div>
          </div>
        </div>
      )}

      <section className="max-w-[1280px] w-[100%] flex justify-center items-center m-auto">
        <Popover
          open={state?.openwear}
          onOpenChange={handleOpenChangeWear}
          className="w-[195px] px-[17px] h-[44px] rounded-xl bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
          trigger="click"
          options={["Hide"]}
          placement="bottom"
          content={contentWear}
        >
          <span>
            <ClothesIcons colors={"#000"} />
          </span>
          <p className="not-italic font-AeonikProMedium text-center text-sm ml-[5px] leading-4 text-black">
            {selectWear}
          </p>
          <span>
            <BiChevronDown
              size={20}
              style={{ color: "#c2c2c2" }}
              className={`${
                state?.openwear ? "rotate-[-180deg]" : ""
              } duration-200`}
            />
          </span>
        </Popover>
        <Popover
          open={state?.openPrice}
          onOpenChange={handleOpenChangePrice}
          className="w-[190px]  h-[44px]  rounded-xl bg-btnBgColor  border-searchBgColor border  flex items-center justify-between  cursor-pointer select-none group ml-2"
          trigger="click"
          options={["Hide"]}
          placement="bottom"
          content={contentPrice}
        >
          <span className="w-[48px] h-full flex items-center justify-center border-r border-searchBgColor">
            <DollorIcons colors={"#000"} />
          </span>
          <div className=" w-[142px] h-full flex justify-between items-center px-3">
            <p className="not-italic font-AeonikProMedium text-center text-sm leading-4 text-black ">
              {state?.selectPrice}
            </p>
            <span>
              <BiChevronDown
                size={20}
                style={{ color: "#c2c2c2" }}
                className={`${
                  state?.openPrice ? "rotate-[-180deg]" : ""
                } duration-200`}
              />
            </span>
          </div>
        </Popover>

        <div className="flex items-center w-[536px] justify-start bg-btnBgColor overflow-hidden rounded-xl border-searchBgColor border h-[44px] ml-2">
          <article
            onClick={() =>
              setState({ ...state, textToColor: !state.textToColor })
            }
            className="w-[48px] cursor-pointer border-r border-searchBgColor h-full flex items-center justify-center"
          >
            <div className=" w-fit h-fit flex items-center justify-center relative  select-none ">
              <span className={style.mainOne}>
                <svg
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00002 2.83334C2.46026 2.83334 2.83335 2.46024 2.83335 2C2.83335 1.53977 2.46026 1.16667 2.00002 1.16667C1.53978 1.16667 1.16669 1.53977 1.16669 2C1.16669 2.46024 1.53978 2.83334 2.00002 2.83334Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className={style.mainTwo}></span>
              <span
                className={
                  state?.textToColor ? style.MainHtree : style.mainThreerotate
                }
              ></span>
            </div>
          </article>
          <article className="w-[480px] h-full overflow-hidden flex items-center justify-between">
            <div
              className={`${
                state?.textToColor ? "ml-[-500px] " : "ml-[0px] "
              } px-2 w-full duration-500  h-full flex items-center justify-between  `}
            >
              {mainData?.colors?.map((data, i) => {
                if (i > 11) {
                  return false;
                } else {
                  return (
                    <div key={data?.id}>
                      <label
                        key={data?.id}
                        htmlFor={data?.id}
                        style={{ backgroundColor: data?.hex }}
                        // onClick={() => colorIdPushContext(data?.id)}
                        className={`rounded-full w-6 h-6  cursor-pointer flex items-center justify-center hover:scale-110 duration-300 ${
                          !state?.textToColor && "border"
                        }  border-borderColorCard	`}
                      >
                        {data?.id === getRadio && data?.id === 2 ? (
                          <span>
                            <InputCheckedTrueIcons colors={"#000"} />
                          </span>
                        ) : null}

                        {data?.id === getRadio && data?.id !== 2 ? (
                          <InputCheckedTrueIcons colors={"#fff"} />
                        ) : null}
                      </label>
                      <input
                        type="radio"
                        id={data?.id}
                        name="checkStatus"
                        value={data?.id}
                        onChange={(e) => setGetRadio(e.target.value)}
                        className={"hidden  w-full h-full"}
                      />
                    </div>
                  );
                }
              })}
              <button
                onClick={() => {
                  setState({ ...state, showColour: true });
                }}
                type="button"
                className="w-5"
              >
                <PlusAddCectorIcons colors={dressInfo?.ColorSeason} />
              </button>
            </div>
            <p
              className={`${
                state?.textToColor ? " mr-0" : " mr-[-500px]"
              } w-full duration-500 px-3 overflow-hidden h-full  flex items-center not-italic font-AeonikProMedium text-sm leading-4 text-center text-black  tracking-[1%] `}
            >
              Не давай своей гардеробной шкафной жизни стать скучной.
            </p>
          </article>
        </div>

        <div className="line h-6 border-r-[1px] text-textColor mx-3"></div>
        <div className="box-border	 flex items-center gap-x-2 h-[44px] border border-searchBgColor overflow-hidden rounded-lg bg-btnBgColor">
          {personItems
            ?.filter((value) => value.id === dressInfo?.type)
            .map((data) => {
              return (
                <div
                  key={data?.id}
                  className="w-fit h-full flex items-center  "
                >
                  {data?.childText?.map((item) => {
                    return (
                      <div className="flex items-center h-full">
                        <button
                          key={item?.id}
                          onClick={() => handleFilterByUser(data?.id, item?.id)}
                          className={`${
                            item?.action
                              ? dressInfo?.BtnActiveSeason
                              : " bg-btnBgColor text-black"
                          } px-5 h-full cursor-pointer  font-AeonikProMedium    rounded-lg  h-[44px]  justify-center flex items-center`}
                        >
                          {/* <img src={item?.anyIcons} alt="male" /> */}
                          <span>{item?.anyIcons}</span>
                          {item?.name && (
                            <span className="ml-2 not-italic whitespace-nowrap  text-sm font-AeonikProMedium tracking-wide	leading-5">
                              {item?.name}
                            </span>
                          )}
                        </button>
                        {item?.id !== 4 && (
                          <span className="w-[2px] mx-1 h-[30px] border-r border-searchBgColor"></span>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </section>
    </nav>
  );
};

export default BottomHeader;
