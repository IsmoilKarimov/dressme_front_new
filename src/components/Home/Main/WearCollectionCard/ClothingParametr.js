import React, { useState, useEffect, useContext } from "react";
import {
  BrushColorIcons,
  ClothesIcons,
  CotegoryMenuIcons,
  DollorIcons,
  InputCheckedTrueIcons,
  ManGenIcons,
  ManWomGenBlack,
  ManWomanGen,
  MenuCloseIcons,
  TopBrandsIcon,
  WinterBoyIcons,
  WomanGenIcons,
  XbtnForMobile,
} from "../../../../assets/icons";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { GrClose } from "react-icons/gr";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";
import Slider from "react-slider";
import { HomeFilterContext } from "../../../../ContextHook/HomeFilterContext";
import { useTranslation } from "react-i18next";
import { LanguageDetectorDress } from "../../../../language/LanguageItems";
import { SaesonDetectorDress } from "../../../../ContextHook/SeasonContext";
const ClothingParametr = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [data, setData, , , page, setPage] = useContext(HomeMainDataContext);
  const { i18n, t } = useTranslation("homePage");
  const [seasonDetector, setSeasonDetector] = useContext(SaesonDetectorDress)

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

  const [languageDetector, setLanguageDetector] = useContext(
    LanguageDetectorDress
  );

  const [selectedFilters, setSelectedFilters] = useContext(HomeFilterContext);

  const [iconsColor] = useState("black");

  const [personItems, setPersonItems] = useState([
    {
      id: 1111,
      childText: [
        { id: 0, anyIcons: <CotegoryMenuIcons />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "Мужчинам", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "Женщинам", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "Детям", action: false },
      ],
    },
    {
      id: 2222,
      childText: [
        { id: 0, anyIcons: <CotegoryMenuIcons />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "Мужчинам", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "Женщинам", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "Детям", action: false },
      ],
    },
    {
      id: 3333,
      childText: [
        { id: 0, anyIcons: <CotegoryMenuIcons />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "Мужчинам", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "Женщинам", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "Детям", action: false },
      ],
    },
    {
      id: 4444,
      childText: [
        { id: 0, anyIcons: <CotegoryMenuIcons />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "Мужчинам", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "Женщинам", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "Детям", action: false },
      ],
    },
    {
      id: 5555,
      childText: [
        { id: 0, anyIcons: <CotegoryMenuIcons />, name: "Все", action: true },
        { id: 1, anyIcons: <ManGenIcons />, name: "Мужчинам", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "Женщинам", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "Детям", action: false },
      ],
    },
  ]);

  const onFilterCategory = (value) => {
    setDressInfo({ ...dressInfo, mainCategoryId: value });
  };

  const onClearFilterCategoryId = () => {
    setDressInfo({ ...dressInfo, mainCategoryId: null });
    setSelectedFilters({ ...selectedFilters, category: null });
    // setState({ ...state, clothesTypeMobile: false });
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

  const sendPriceList = () => {
    setDressInfo({ ...dressInfo, mainRangePrice: values });
  };

  const clearPriceValue = () => {
    setState({ ...state, clearPrice: false, openPrice: false });
    setValues([
      Number(data?.getMainProductCard?.budget?.min_price),
      Number(data?.getMainProductCard?.budget?.max_price),
    ]);
    setDressInfo({ ...dressInfo, mainRangePrice: [] });
    setSelectedFilters({ ...selectedFilters, price: null });
  };

  const newColorArrayId = (hex, id) => {
    setPage(1);
    if (!dressInfo?.mainColorHex) {
      setDressInfo({ ...dressInfo, mainColorId: id, mainColorHex: hex });
    }
    if (dressInfo?.mainColorHex === hex) {
      setDressInfo({ ...dressInfo, mainColorId: null, mainColorHex: null });
    }
    if (dressInfo?.mainColorHex !== hex) {
      setDressInfo({ ...dressInfo, mainColorId: id, mainColorHex: hex });
    }
  };
  const ClearColorId = () => {
    setDressInfo({ ...dressInfo, mainColorId: null, mainColorHex: null });
    setSelectedFilters({
      ...selectedFilters,
      color: null,
    });
  };

  const handleFilterByUser = (fathId, childId) => {
    if (childId === 0) {
      setDressInfo({ ...dressInfo, mainGenderId: 0 });
    } else if (childId > 0) {
      setDressInfo({ ...dressInfo, mainGenderId: childId });
    }
  };

  return (
    <main className="max-w-[1280px] w-[100%] flex flex-col items-center m-auto md:px-0">
      <section className="w-full md:hidden flex items-center justify-between pb-3 gap-x-2">
        <div
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
        </div>
        <div
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
        </div>
        <div
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
        </div>
        <div
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
            <ManWomGenBlack colors={"#000"} />
          </span>
        </div>
      </section>

      <section className="w-full">
        {/* Cateories */}
        <section
          className={`h-fit top-30 left-[16px] fixed bg-white shadow-lg duration-200 z-50 ${state?.clothesTypeMobile ? "w-[92%]" : "w-0"
            }  `}
        >
          {state?.clothesTypeMobile && (
            <div className="fixed inset-0 z-10">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setState({ ...state, clothesTypeMobile: false })}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8 ">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                  <div className="flex items-center justify-between border-b border-searchBgColor pb-3 ">
                    <span className="text-black text-lg not-italic font-AeonikProRegular leading-5">
                      {t("CPbycategory")}
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
                  <div className="pt-2 flex flex-col">
                    {data?.getMainProductCard?.categories?.map((data) => {
                      return (
                        <div className={` w-full flex items-center rounded-lg`}>
                          <div
                            key={data?.id}
                            onClick={() => {
                              onFilterCategory(data?.id);
                              setSelectedFilters((prev) => {
                                return {
                                  ...prev,
                                  category: data?.name_ru,
                                  categoryOrder: prev.index + 5,
                                  index: prev.index + 5,
                                };
                              });
                            }}
                            className={`${data?.id === dressInfo?.mainCategoryId
                              ? "text-borderWinter bg-[#F6F6F6]"
                              : ""
                              }  ${seasonDetector?.TextHoverSeason
                              } relative bg-bgCard text-base text-[#303030] font-AeonikProMedium hover:bg-[#F6F6F6] w-[100%] h-10 xs:h-12 rounded-lg cursor-pointer flex items-center justify-center hover:duration-300 hover:ease-linear `}
                          >
                            {languageDetector?.typeLang === "ru" &&
                              data?.name_ru}
                            {languageDetector?.typeLang === "uz" &&
                              data?.name_uz}
                          </div>
                        </div>
                      );
                    })}

                    <div className="w-full flex items-center justify-end">
                      {dressInfo?.mainCategoryId && (
                        <button
                          onClick={() => onClearFilterCategoryId()}
                          className="flex items-center text-fullBlue active:scale-95  active:opacity-70 justify-center px-2 pt-1"
                        >
                          {t("CPdelete")}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Prizes */}
        <section
          className={`h-fit top-30 left-[16px] fixed bg-white shadow-lg duration-200 z-50 ${state?.priceToggleMobile ? "w-[100%]" : "w-0"
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
                  <div className=" w-full h-[180px] m-0 ">
                    <div className="flex items-center justify-between border-b border-searchBgColor pb-3">
                      <span className="text-black text-lg not-italic font-AeonikProRegular leading-5">
                        {t("CPbyprice")}
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
                    <div className="  flex flex-col rounded-lg  w-full pb-5 pt-6">
                      <div className="flex justify-between items-center mb-6 w-full px-2">
                        <div className="flex ">
                          <span className="hidden ll:flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-[#555] ">
                            {t("CPfrom")}
                          </span>
                          <div className="flex items-center ls:ml-2 justify-center not-italic font-AeonikProMedium text-[14px] ll:text-base leading-3 text-center text-black">
                            {/* <input
                              className="w-[70px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                              name="name"
                              value={Number(values[0]).toLocaleString()}
                            // defaultValue={Number(
                            //   data?.getMainProductCard?.budget?.min_price
                            // ).toLocaleString()}
                            />{" "} */}
                            <span className="w-[70px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"

                            >
                              {Number(values[0]).toLocaleString()}
                            </span>
                            {t("CPsumm")}
                          </div>
                        </div>
                        <div className="flex ">
                          <span className="hidden ll:flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-text-[#555] ">
                            {t("CPto")}
                          </span>
                          <div className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-[14px] ll:text-base leading-3 text-center text-black">
                            {/* <input
                              className="w-[100px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                              name="name"
                              value={Number(values[1]).toLocaleString()}
                            // defaultValue={Number(
                            //   data?.getMainProductCard?.budget?.max_price
                            // ).toLocaleString()}
                            /> */}
                            <span className="w-[100px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                            >
                              {Number(values[1]).toLocaleString()}
                            </span>
                            {t("CPsumm")}
                          </div>
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
                      <div
                        className={`flex items-center  mt-4 ${state?.clearPrice ? "justify-between" : "justify-end"
                          }`}
                      >
                        {state?.clearPrice && (
                          <span
                            onClick={() => {
                              clearPriceValue();
                              setState({ ...state, priceToggleMobile: false });
                            }}
                            className="flex items-center select-none cursor-pointer text-sm justify-center  text-fullBlue"
                          >
                            {t("CPclear")}
                          </span>
                        )}
                        <span
                          onClick={() => {
                            sendPriceList();
                            setState({ ...state, priceToggleMobile: false });
                            setSelectedFilters((prev) => {
                              return {
                                ...prev,
                                price:
                                  values[0]
                                    ?.toLocaleString()
                                    ?.split(",")
                                    .join(" ") +
                                  " сум" +
                                  " - " +
                                  values[1]
                                    ?.toLocaleString()
                                    ?.split(",")
                                    .join(" ") +
                                  " сум",
                                priceOrder: prev.index + 5,
                                index: prev.index + 5,
                              };
                            });
                          }}
                          className="flex items-center select-none cursor-pointer text-sm justify-center  text-fullBlue"
                        >
                          {t("CPready")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Colors */}
        <section
          className={`h-fit top-30  left-[16px] fixed  bg-white shadow-lg  duration-200 z-50 ${state?.selectColorToggleMobile ? "w-[92%]" : "w-0"
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
                      {t("CPbycolor")}
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
                  <div className="w-full py-4 gap-x-2 gap-y-2 grid gap-4 grid-cols-4">
                    {data?.getMainProductCard?.colors?.map((data) => {
                      return (
                        <div
                          key={data?.id}
                          className="flex flex-col items-center justify-center "
                        >
                          <div
                            onClick={() => {
                              newColorArrayId(data?.hex, data?.id);
                              setSelectedFilters((prev) => {
                                return {
                                  ...prev,
                                  color: data?.name_ru,
                                  colorOrder: prev.index + 5,
                                  index: prev.index + 5,
                                };
                              });
                            }}
                            style={{ backgroundColor: data?.hex }}
                            className={`rounded-full flex items-center justify-center w-[35px] h-[35px] ${data?.hex === dressInfo?.mainColorHex
                              ? "border border-setTexOpacity flex items-center justify-center"
                              : "border"
                              }  `}
                          >
                            {dressInfo?.mainColorHex === data?.hex &&
                              data?.id !== 1 && (
                                <span>
                                  <InputCheckedTrueIcons colors={"#000"} />
                                </span>
                              )}

                            {dressInfo?.mainColorHex === data?.hex &&
                              data?.id === 1 && (
                                <InputCheckedTrueIcons colors={"#fff"} />
                              )}
                          </div>
                          <span
                            className={`text-black text-center text-xs not-italic font-AeonikProRegular`}
                          >
                            {languageDetector?.typeLang === "ru" &&
                              data?.name_ru}
                            {languageDetector?.typeLang === "uz" &&
                              data?.name_uz}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-full flex items-center justify-end">
                    {dressInfo?.mainColorHex && (
                      <button
                        onClick={() => ClearColorId()}
                        className="flex items-center text-fullBlue active:scale-95  active:opacity-70 justify-center  px-4"
                      >
                        {t("CPdelete")}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Gender BUTTONS */}
        <section
          className={`w-full h-fit top-30 left-[16px] fixed bg-white shadow-lg duration-200 z-50 ${state?.genderMobile ? "w-[92%]" : "w-0"
            }`}
        >
          {state?.genderMobile && (
            <div className="fixed inset-0 z-10 ">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setState({ ...state, genderMobile: false })}
              ></div>
              <div className="w-full mx-auto flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full left-0 right-0 max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                  <div
                    className={`flex items-center justify-between border-b border-searchBgColor pb-3"
                       `}
                  >
                    <span className="text-black text-lg not-italic font-AeonikProRegular leading-5">
                      {t("CPbygender")}
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
                  <div className="w-fit mx-auto box-border flex items-center gap-x-2 h-[44px] border border-searchBgColor overflow-hidden rounded-xl bg-btnBgColor mt-5 mb-2">
                    {personItems
                      ?.filter((value) => value?.id === seasonDetector?.type)
                      ?.map((data) => {
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
                                    onClick={() => {
                                      handleFilterByUser(data?.id, item?.id);
                                      setSelectedFilters((prev) => {
                                        return {
                                          ...prev,
                                          gender: item.name,
                                          genderOrder: prev.index + 5,
                                          index: prev.index + 5,
                                        };
                                      });
                                    }}
                                    className={`${item?.id == dressInfo?.mainGenderId
                                      ? "bg-white border w-full h-[98%] my-auto mx-auto box-border border-searchBgColor rounded-xl"
                                      : " bg-btnBgColor text-black h-full"
                                      } px-4 ls:px-5  cursor-pointer box-border  font-AeonikProMedium rounded-xl justify-center flex items-center`}
                                  >
                                    <span>{item?.anyIcons}</span>
                                    {item?.id === 0 && (
                                      <span className="ls:ml-2 not-italic whitespace-nowrap text-[12px] ls:text-sm font-AeonikProMedium tracking-wide	leading-5">
                                        {t("Bgender_is_selected")}
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
                </div>
              </div>
            </div>
          )}
        </section>
      </section>
      <div className="flex w-full items-center gap-3 flex-wrap md:hidden">
        {/* category */}
        {selectedFilters.category ? (
          <div
            style={{ order: selectedFilters.categoryOrder }}
            className={`text-[#007DCA] text-[13px] font-medium rounded-[20px] px-[9px] py-[9px] bg-[#007DCA1A] flex items-center`}
          >
            {selectedFilters.category}
            <div
              onClick={() => onClearFilterCategoryId()}
              className="ml-[6px] cursor-pointer active:translate-y-[2px] w-[16px] h-[16px] bg-white rounded-full flex items-center justify-center"
            >
              <XbtnForMobile />
            </div>
          </div>
        ) : null}
        {/* price */}
        {selectedFilters.price ? (
          <div
            style={{ order: selectedFilters.priceOrder }}
            className={`text-[#007DCA] text-[13px] font-medium rounded-[20px] px-[9px] py-[9px] bg-[#007DCA1A] flex items-center`}
          >
            {selectedFilters.price}
            <div
              onClick={() => {
                clearPriceValue();
              }}
              className="ml-[6px] cursor-pointer active:translate-y-[2px] w-[16px] h-[16px] bg-white rounded-full flex items-center justify-center"
            >
              <XbtnForMobile />
            </div>
          </div>
        ) : null}
        {/* color */}
        {selectedFilters.color ? (
          <div
            style={{ order: selectedFilters.colorOrder }}
            className={`text-[#007DCA] text-[13px] font-medium rounded-[20px] px-[9px] py-[9px] bg-[#007DCA1A] flex items-center`}
          >
            {selectedFilters.color}
            <div
              onClick={() => ClearColorId()}
              className="ml-[6px] cursor-pointer active:translate-y-[2px] w-[16px] h-[16px] bg-white rounded-full flex items-center justify-center"
            >
              <XbtnForMobile />
            </div>
          </div>
        ) : null}
        {/* gender */}
        {selectedFilters.gender && selectedFilters.gender !== "Все" ? (
          <div
            style={{ order: selectedFilters.genderOrder }}
            className={`text-[#007DCA] text-[13px] font-medium rounded-[20px] px-[9px] py-[9px] bg-[#007DCA1A] flex items-center`}
          >
            {selectedFilters.gender}
            <div
              onClick={() => {
                handleFilterByUser(0, 0);
                setSelectedFilters((prev) => {
                  return {
                    ...prev,
                    gender: "Все",
                  };
                });
              }}
              className="ml-[6px] cursor-pointer active:translate-y-[2px] w-[16px] h-[16px] bg-white rounded-full flex items-center justify-center"
            >
              <XbtnForMobile />
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
};
export { ClothingParametr };
