import React, { useState, useEffect, useContext } from "react";
import {
  BrushColorIcons,
  ClothesIcons,
  DollorIcons,
  InputCheckedTrueIcons,
  TopBrandsIcon,
} from "../../../../AssetsMain/icons";
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
} from "../../../../AssetsMain";
import { GrClose } from "react-icons/gr";
import ReactSlider from "react-slider";
const ClothingParametr = () => {
  const [dressInfo] = useContext(dressMainData);

  const [state, setState] = useState({
    clothesTypeMobile: false,
    priceToggleMobile: false,
    brandToggleMobile: false,
    selectColorToggleMobile: false,
  });

  useEffect(() => {
    if (
      state?.clothesTypeMobile ||
      state?.priceToggleMobile ||
      state?.brandToggleMobile ||
      state?.selectColorToggleMobile
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [
    state?.clothesTypeMobile,
    state?.priceToggleMobile,
    state?.brandToggleMobile,
    state?.selectColorToggleMobile,
  ]);

  const wearMobileList = [
    { id: 1, type: "All Clothing types" },
    { id: 2, type: "Headwear" },
    { id: 3, type: "Outwear" },
    { id: 4, type: "Underwear" },
    { id: 5, type: "Legwear" },
    { id: 6, type: "Accessory" },
  ];
  // Mobile Price Brand Type

  // Mobile Change color Type
  const [changeColor, setChangeColor] = useState([
    {
      id: 1,
      name: "purple",
      value: 1,
      action: false,
      IconsColor: "#7E22CE",
      colors: "bg-purple-700",
    },
    {
      id: 2,
      name: "green",
      value: 2,
      action: false,
      IconsColor: "#16A34A",
      colors: "bg-green-600",
    },
    {
      id: 3,
      name: "red",
      value: 3,
      action: false,
      IconsColor: "#B91C1C",
      colors: "bg-red-700",
    },
    {
      id: 4,
      name: "yellow",
      value: 4,
      action: false,
      IconsColor: "#EAB308",
      colors: "bg-yellow-500",
    },
    {
      id: 5,
      name: "black",
      value: 5,
      action: false,
      IconsColor: "black",
      colors: "bg-black",
    },
    {
      id: 6,
      name: "white",
      value: 6,
      action: false,
      IconsColor: "white",
      colors: "bg-white",
    },
    {
      id: 7,
      name: "blue",
      value: 7,
      action: false,
      IconsColor: "#3B82F6",
      colors: "bg-blue-500",
    },
    {
      id: 8,
      name: "orange",
      value: 8,
      action: false,
      IconsColor: "#EA580C",
      colors: "bg-orange-600",
    },
    {
      id: 9,
      name: "purple",
      value: 9,
      action: false,
      IconsColor: "#C084FC",
      colors: "bg-purple-400",
    },
    {
      id: 10,
      name: "blue",
      value: 10,
      action: false,
      IconsColor: "#1E3A8A",
      colors: "bg-blue-900",
    },
    {
      id: 11,
      name: "yellow",
      value: 11,
      action: false,
      IconsColor: "#713F12",
      colors: "bg-yellow-900",
    },
    {
      id: 12,
      name: "gray",
      value: 12,
      IconsColor: "#4B5563",
      action: false,
      colors: "bg-gray-600",
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
  return (
    <main className="max-w-[1280px] w-[100%] flex flex-col items-center m-auto  px-4 md:px-0">
      <section className="w-full ss:block sm:flex justify-start items-center mb-[24px] md:mb-0 md:px-0">
        <div className="not-italic font-AeonikProMedium lg:w-fit lg:text-2xl xl:text-3xl flex items-center leading-8 text-black">
          <p>Коллекция одежд, которые вам подходят</p>
        </div>
      </section>
      <section className="w-full md:hidden flex items-center justify-between md:border-0 border-b border-searchBgColor pb-3 gap-x-2">
        <button
          onClick={() => {
            setState({
              ...state,
              clothesTypeMobile: !state.clothesTypeMobile,
            });
          }}
          className="w-[25%] active:scale-80 active:opacity-70 rounded-[12px] bg-btnBgColor border border-searchBgColor flex items-center justify-center px-4 h-[52px]"
        >
          <p>
            {" "}
            <ClothesIcons />
          </p>
        </button>
        <button
          onClick={() =>
            setState({
              ...state,
              priceToggleMobile: !state.priceToggleMobile,
            })
          }
          className="w-[25%] active:scale-95  active:opacity-70 rounded-[12px] bg-btnBgColor border border-searchBgColor flex items-center justify-center px-4 h-[52px] "
        >
          <span>
            {" "}
            <DollorIcons />
          </span>
        </button>
        <button
          onClick={() =>
            setState({
              ...state,
              selectColorToggleMobile: !state.selectColorToggleMobile,
            })
          }
          className="w-[25%] active:scale-95  active:opacity-70 rounded-[12px] bg-btnBgColor border border-searchBgColor flex items-center justify-center px-4 h-[52px]"
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
              brandToggleMobile: !state.brandToggleMobile,
            })
          }
          className="w-[25%] active:scale-95  active:opacity-70 rounded-[12px] bg-btnBgColor border border-searchBgColor flex items-center justify-center px-4 h-[52px]"
        >
          <span>
            {" "}
            <TopBrandsIcon />
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
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                  <div className="flex items-center justify-end ">
                    <button
                      type=""
                      onClick={() =>
                        setState({ ...state, clothesTypeMobile: false })
                      }
                    >
                      <GrClose size={25} />
                    </button>
                  </div>
                  <div className="py-4">
                    {wearMobileList?.map((data) => {
                      return (
                        <div
                          key={data?.id}
                          onClick={() => {
                            setState({ ...state, clothesTypeMobile: false });
                          }}
                          className={`${dressInfo?.TextHoverSeason} text-base font-AeonikProMedium hover:bg-bgColor w-full h-12 border border-solid border-searchBgColor flex items-center justify-center`}
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
                  <div className="flex items-center justify-end ">
                    <button
                      type=""
                      onClick={() =>
                        setState({ ...state, priceToggleMobile: false })
                      }
                    >
                      <GrClose size={25} />
                    </button>
                  </div>
                  <div className="  flex flex-col  mt-4">
                    <div className="flex justify-between items-center mb-7">
                      <div className="flex flex-col">
                        <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-setTexOpacity mb-2">
                          от
                        </span>
                        <span className="flex items-center  mt-[2px] justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                          60.000 sum
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-setTexOpacity mb-2">
                          до
                        </span>
                        <span className="flex items-center mt-[2px] justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                          1 860 000 sum
                        </span>
                      </div>
                    </div>
                    <div className="relative z-50 mb-[6px]">
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
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <section
          className={`w-full h-fit top-30  left-[16px] fixed  bg-white shadow-lg duration-200 z-50 ${
            state?.brandToggleMobile ? "w-[92%]" : "w-0"
          }`}
        >
          {state?.brandToggleMobile && (
            <div className="fixed inset-0 z-10 ">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setState({ ...state, brandToggleMobile: false })}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                  <div className="flex items-center justify-end ">
                    <button
                      onClick={() =>
                        setState({ ...state, brandToggleMobile: false })
                      }
                    >
                      <GrClose size={25} />
                    </button>
                  </div>
                  <div className="w-full flex-row flex justify-between flex-wrap py-4 gap-y-5">
                    {campany?.map((data) => {
                      return (
                        <div
                          key={data?.imgFull}
                          className="w-[23%] h-20 rounded-lg bg-bgColor  border border-solid border-borderColorCard"
                        >
                          <img
                            className="h-full w-full p-2"
                            src={data?.imgFull}
                            alt="img"
                          />
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
                    className={`flex items-center ${
                      toggleAction ? "justify-between" : "justify-end"
                    } `}
                  >
                    {toggleAction && (
                      <button
                        onClick={unCheckedAll}
                        className="flex items-center active:scale-95  active:opacity-70 justify-center border border-searchBgColor rounded-lg px-4 py-1"
                      >
                        Отключить
                      </button>
                    )}
                    <button
                      className="py-2"
                      type=""
                      onClick={() =>
                        setState({ ...state, selectColorToggleMobile: false })
                      }
                    >
                      <GrClose size={25} />
                    </button>
                  </div>
                  <div className="py-4 gap-x-2 gap-y-4 flex flex-wrap items-center">
                    {changeColor?.map((data) => {
                      return (
                        <div
                          key={data?.id}
                          onClick={() =>
                            HandleIconsColor(data?.IconsColor, data?.id)
                          }
                          className={`rounded-full flex items-center justify-center mr-2 w-6 h-6 ${
                            data?.colors
                          } cursor-pointer ${
                            data?.id == 6 ? "border border-setTexOpacity" : ""
                          } `}
                        >
                          {data?.action && data?.id === 6 ? (
                            <span>
                              <InputCheckedTrueIcons colors={"#000"} />
                            </span>
                          ) : null}

                          {data?.action && data?.id !== 6 ? (
                            <InputCheckedTrueIcons colors={"#fff"} />
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
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
