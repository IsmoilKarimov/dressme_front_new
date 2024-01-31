import React, { useContext, useEffect, useState } from "react";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { BiCheck } from "react-icons/bi";
import { Popover, Select, Space } from "antd";
import Slider from "react-slider";

import style from "./bottom.module.css";
import {
  ClothesIcons,
  DollorIcons,
  DownArrowAntd,
  ManGenIcons,
  ManWomanGen,
  MenuCloseIcons,
  PlusAddCectorIcons,
  WinterBoyIcons,
  WomanGenIcons,
} from "../../assets/icons";
import { GrClose } from "react-icons/gr";
import { HomeMainDataContext } from "../../ContextHook/HomeMainData";
const { Option } = Select;

function BottomHeader({
  getGender,
  getRangeList,
  getCategoryList,
  getColorList,
  categoryProps,
  colorProps,
  getRangeProps,
  genderProps }) {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [data, setData] = useContext(HomeMainDataContext);

  const [state, setState] = useState({
    openwear: false,
    openPrice: false,
    textToColor: false,
    // --------
    showColour: false,
    categorySelectId: null,
    clearPrice: false,
  });
  const [minPrice, setMinPrice] = useState(
    Number(data?.getMainProductCard?.budget?.min_price)
  );
  const [maxPrice, setMaxPrice] = useState(
    Number(data?.getMainProductCard?.budget?.max_price)
  );
  // const [getRange, setGetRange] = useState([getRangeProps[0], getRangeProps[1]]);
  const [values, setValues] = useState([getRangeProps[0], getRangeProps[1]]);

  useEffect(() => {
    setMinPrice(Number(data?.getMainProductCard?.budget?.min_price));
    setMaxPrice(Number(data?.getMainProductCard?.budget?.max_price));
    if (getRangeProps?.length === 0) {
      console.log("ishladi price1");
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
      } else {
        setValues([0, 0]);
      }
    }
  }, [data?.getMainProductCard?.budget]);

  useEffect(() => {
    if (values && minPrice && maxPrice) {
      if (minPrice !== values[0] || maxPrice !== values[1]) {
        setState({ ...state, clearPrice: true });
      }
    }
  }, [values]);

  const clearFunction = () => {
    setState({ ...state, clearPrice: false, openPrice: false });
    setValues([
      Number(data?.getMainProductCard?.budget?.min_price),
      Number(data?.getMainProductCard?.budget?.max_price),
    ]);
    // setGetRange([]);
    getRangeList([])
  };

  console.log(getRangeProps, "getRangeProps");
  console.log(getRangeProps?.length, "getRangeProps");
  console.log(values, "values");
  // console.log(getRange, "getRange");


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

  // ----------------------Price State Management----------------------
  const sendPriceList = () => {
    // setGetRange(values);
    getRangeList(values)
  };
  const handleOpenChangePrice = (newOpen) => {
    setState({ ...state, openPrice: newOpen });
  };
  const contentPrice = (
    <div className="w-fit h-[170px] m-0 overflow-hidden">
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
      <div className=" flex flex-col rounded-lg  w-full pb-5 px-4 pt-[30px] ">
        <div className=" flex justify-between items-center mb-4 w-full ">
          <div className="flex ">
            <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-[#555] ">
              от
            </span>
            <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
              <input
                name="name"
                className="w-[90px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                value={Number(values[0]).toLocaleString()}
              // onChange={(e) => setMaxPrice(e.target.value)}
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
                name="name"
                className="w-[100px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                value={Number(values[1]).toLocaleString()}
              // onChange={(e) => setMaxPrice(e.target.value)}
              />
              сум
            </span>
          </div>
        </div>
        <div className="relative z-50 mb-[6px] w-[350px]  marketFilter">
          <Slider
            className={`slider w-full flex items-center h-[4px] bg-fullBlue border rounded-[1px] mt-[10px]`}
            onChange={setValues}
            value={values}
            minDistance={10}
            min={Number(minPrice)}
            max={Number(maxPrice)}
          />
        </div>
        <div
          className={`flex items-center  mt-4 ${state?.clearPrice ? "justify-between" : "justify-end"
            }`}
        >
          {state?.clearPrice && (
            <span
              onClick={() => clearFunction()}
              className="flex items-center select-none cursor-pointer text-sm justify-center  text-fullBlue"
            >
              Сбросить
            </span>
          )}
          <span
            onClick={() => {
              sendPriceList();
              setState({ ...state, openPrice: false });
            }}
            className="flex items-center select-none cursor-pointer text-sm justify-center  text-fullBlue"
          >
            Готово
          </span>
        </div>
      </div>
    </div>
  );

  const [personItems, setPersonItems] = useState([
    {
      id: 4444,
      childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ],
    },
    {
      id: 1111,
      childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ],
    },
    {
      id: 2222,
      childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ],
    },
    {
      id: 3333,
      childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ],
    },
    {
      id: 5555,
      childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: true },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ],
    },
  ]);
  const onSearch = (value) => {
    // console.log("search:", value);
  };
  const handleFilterByUser = (fathId, childId) => {
    if (childId === 0) {
      getGender("")
    } else if (childId > 0) {
      getGender(childId)
    }

  };


  const newColorArrayId = (hex, id) => {
    if (!colorProps) {
      getColorList(hex)
      setDressInfo({ ...dressInfo, mainColorId: id });
    }
    if (colorProps == hex) {
      getColorList()
      setDressInfo({ ...dressInfo, mainColorId: null });
    }
    if (colorProps !== hex) {
      getColorList(hex);
      setDressInfo({ ...dressInfo, mainColorId: id });
    }
  };
  const ClearColorId = () => {
    getColorList()
    setDressInfo({ ...dressInfo, mainColorId: null });
  }

  useEffect(() => {
    setState({ ...state, clearPrice: false });
    setMinPrice(Number(data?.getMainProductCard?.budget?.min_price));
    setMaxPrice(Number(data?.getMainProductCard?.budget?.max_price));
    if (getRangeProps === 0) {
      setValues([
        Number(data?.getMainProductCard?.budget?.min_price),
        Number(data?.getMainProductCard?.budget?.max_price),
      ]);
      if (getRangeProps[0] && getRangeProps[1]) {
        console.log("ishladi price2");
        getRangeList([])
      }
    }
  }, [dressInfo?.mainRegionId, dressInfo?.mainSubRegionId]);



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
                type="button"
                onClick={() => setState({ ...state, showColour: false })}
              >
                <GrClose size={22} />
              </button>
            </div>

            <div className="py-4 gap-x-2 gap-y-4 grid gap-4 grid-cols-6">
              {data?.getMainProductCard?.colors?.map((data) => {
                return (
                  <div
                    key={data?.id}
                    className="flex flex-col items-center justify-center "
                  >
                    <div
                      onClick={() => {
                        newColorArrayId(data?.hex, data?.id);
                        // setSelectedId(data?.id);
                      }}
                      style={{ backgroundColor: data?.hex }}
                      className={`rounded-[12px] flex items-center justify-center w-[65px] h-[40px] cursor-pointer ${data?.hex === colorProps
                        ? "border border-setTexOpacity flex items-center justify-center"
                        : "border"
                        } `}
                    >
                      {/* {selectedId === data?.id ? (
                        <InputCheckedTrueIcons
                          colors={data?.hex === "#000000" ? "#fff" : "#000"}
                        />
                      ) : null} */}
                      {colorProps == data?.hex && data?.id == 1 && (
                        <span>
                          <BiCheck
                            size={30}
                            color={"#fff"}
                            className="flex items-center justify-center"
                          />
                        </span>
                      )}
                      {colorProps == data?.hex && data?.id !== 1 && (
                        <span>
                          <BiCheck
                            size={30}
                            color={"#000"}
                            className="flex items-center justify-center"
                          />
                        </span>
                      )}
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
              {colorProps && (
                <button
                  onClick={() => ClearColorId()}
                  className="flex items-center text-fullBlue active:scale-95  active:opacity-70 justify-center  px-4 py-1"
                >
                  Отключить
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="max-w-[1280px] w-[100%] flex justify-center items-center m-auto ">
        <div className="mainCategory !w-[195px] relative gap-x-1 pl-1 h-[44px] border-searchBgColor border  rounded-[12px] bg-btnBgColor  overflow-hidden flex items-center  cursor-pointer select-none group  ">
          <span className="absolute left-2">
            <ClothesIcons colors={"#000"} />
          </span>
          <Select
            showSearch
            className="w-[100%] cursor-pointer  pl-4 flex items-center !caret-transparent h-full !outline-none text-center overflow-hidden  !py-0 text-black text-sm font-AeonikProMedium tracking-wide	"
            bordered={false}
            placeholder={
              <span className="placeholder text-black text-sm font-AeonikProMedium tracking-wide">
                По категории
              </span>
            }
            optionFilterProp="children"
            onChange={(e) => {
              getCategoryList(e)
              setState({ ...state, categorySelectId: e })
            }}
            value={categoryProps}
            onSearch={onSearch}
            // suffixIcon={<></>}
            // defaultValue={data?.getMainProductCard?.categories?.map((item) => item?.id === categoryProps ? item?.name_ru : null)}
            allowClear
            size="large"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
          >
            {data?.getMainProductCard?.categories?.map((item) => {
              return (
                <Option key={item.id} value={item.id} label={item.name_ru}>
                  <Space>
                    <span className="text-black  text-[13px] font-AeonikProMedium tracking-wide	">
                      {item.name_ru}
                    </span>
                  </Space>
                </Option>
              );
            })}
          </Select>
        </div>

        <Popover
          open={state?.openPrice}
          onOpenChange={handleOpenChangePrice}
          className="w-[190px]  gap-x-1 px-2 h-[44px] rounded-xl bg-btnBgColor  border-searchBgColor border  flex items-center justify-between  cursor-pointer select-none group ml-2"
          trigger="click"
          options={["Hide"]}
          placement="bottom"
          content={contentPrice}
        >
          <span className=" flex items-center ">
            <DollorIcons colors={"#000"} />
          </span>
          {getRangeProps[0] && getRangeProps[1] ? (
            <div className="w-fit flex justify-between items-center  ">
              <p className="text-[13px] not-italic font-AeonikProMedium leading-1 ">
                {Number(getRangeProps[0]).toLocaleString()}
              </p>
              <span className="w-[6px] h-[1px] bg-[#a1a1a1] mx-[2px] 	"></span>
              <p className="text-[13px] not-italic font-AeonikProMedium leading-1">
                {Number(getRangeProps[1]).toLocaleString()}
              </p>
            </div>
          ) : (
            <p className="not-italic whitespace-nowrap mt-1 text-black text-sm font-AeonikProMedium tracking-wide	leading-5	">
              По бюджету
            </p>
          )}
          <span className="font-AeonikProMedium iconArrow">
            <DownArrowAntd />
          </span>
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
              className={`${state?.textToColor ? "ml-[-500px] " : "ml-[0px] "
                } px-2 w-full duration-500  h-full flex items-center justify-between  `}
            >
              {data?.getMainProductCard?.colors?.map((data, i) => {
                if (i > 11) {
                  return false;
                } else {
                  return (
                    <div key={data?.id}>
                      <label
                        key={data?.id}
                        htmlFor={data?.id}
                        onClick={() => {
                          // setSelectedId(data?.id);
                          newColorArrayId(data?.hex, data?.id);
                          // setDressInfo({});
                        }}
                        style={{ backgroundColor: data?.hex }}
                        // onClick={() => colorIdPushContext(data?.id)}
                        className={`rounded-full w-6 h-6  cursor-pointer flex items-center justify-center hover:scale-110 duration-300 ${!state?.textToColor && "border"
                          }  border-borderColorCard	`}
                      >
                        {/* {colorSelectId.includes(data?.hex) && (
                          <span>
                            <BiCheck size={25} color={"#000"} className="flex items-center justify-center" />
                          </span>
                        )} */}
                        {colorProps == data?.hex && data?.id == 1 && (
                          <span>
                            <BiCheck
                              size={25}
                              color={"#fff"}
                              className="flex items-center justify-center"
                            />
                          </span>
                        )}
                        {colorProps == data?.hex && data?.id !== 1 && (
                          <span>
                            <BiCheck
                              size={25}
                              color={"#000"}
                              className="flex items-center justify-center"
                            />
                          </span>
                        )}
                      </label>
                      <input
                        type="radio"
                        id={data?.id}
                        name="checkStatus"
                        value={data?.id}
                        // onChange={(e) => setGetRadio(e.target.value)}
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
                <PlusAddCectorIcons colors={"#007DCA"} />
              </button>
            </div>
            <p
              className={`${state?.textToColor ? " mr-0" : " mr-[-500px]"
                } w-full duration-500 px-3 overflow-hidden h-full  flex items-center not-italic font-AeonikProMedium text-sm leading-4 text-center text-black  tracking-[1%] `}
            >
              Не давай своей гардеробной шкафной жизни стать скучной.
            </p>
          </article>
        </div>

        <div className="line h-6 border-r-[1px] text-textColor mx-3"></div>
        <div className="box-border flex items-center gap-x-2  h-[44px] border border-searchBgColor overflow-hidden rounded-xl bg-btnBgColor">
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
                      <div
                        key={item?.id}
                        className="flex items-center h-full box-border"
                      >
                        <button
                          onClick={() => handleFilterByUser(data?.id, item?.id)}
                          className={`${item?.id === genderProps
                            ? "bg-white border w-full h-[98%] my-auto mx-auto box-border border-searchBgColor rounded-xl"
                            : " bg-btnBgColor text-black h-full"
                            } px-6  cursor-pointer box-border  font-AeonikProMedium rounded-xl justify-center flex items-center`}
                        >
                          <span>{item?.anyIcons}</span>
                          {item?.name && (
                            <span className="ml-2 not-italic whitespace-nowrap text-sm font-AeonikProMedium tracking-wide	leading-5">
                              {item?.name}
                            </span>
                          )}
                        </button>
                        {item?.id !== 3 && (
                          <span className="w-[2px] h-[30px] mx-[1px] border-r border-searchBgColor"></span>
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
}

export default React.memo(BottomHeader);
