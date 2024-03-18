import React, { useContext, useEffect, useState } from "react";
import {
  ArrowTopIcons,
  AutummBoyIcons,
  BrushColorIcons,
  // CheckedStatusIcons,
  CircleSuccessIcons,
  ClothesIcons,
  DollorIcons,
  ManGenIcons,
  ManWomGenBlack,
  ManWomanGen,
  MenuCloseIcons,
  SearchIcons,
  SpringBoyIcons,
  SummerBoyIcons,
  TopBrandsIcon,
  WinterBoyIcons,
  WomanGenIcons,
} from "../../../assets/icons";
import "../yandex.css";
import { dressMainData } from "../../../ContextHook/ContextMenu";

import Slider from "react-slider";
import { GrClose } from "react-icons/gr";
import { LanguageDetectorDress } from "../../../language/LanguageItems";
import { useTranslation } from "react-i18next";
import { SaesonDetectorDress } from "../../../ContextHook/SeasonContext";

function MarketFilterofMaps({ onClick, getMapsInfo }) {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [selectFilterType, setSelectFilterType] = useState("category");
  const [searchBrandName, setSearchBrandName] = useState();
  const { i18n, t } = useTranslation('yandexmap')
  const [seasonDetector, setSeasonDetector] = useContext(SaesonDetectorDress)

  const [languageDetector, setLanguageDetector] = useContext(
    LanguageDetectorDress
  );

  const NoSelect = () => {
    return (
      <div className="w-full flex items-center  justify-center h-[350px]  bg-white">
        <span className="text-[#a1a1a1] h-fit  px-5 text-center text-base not-italic font-AeonikProRegular">
          Выберите категорию, чтобы просмотреть товар!
        </span>
      </div>
    );
  };

  const [personItems, setPersonItems] = useState([
    {
      id: 4444,
      childText: [
        { id: 1, anyIcons: <ManWomanGen />, name_ru: "Все", name_uz: "Barchasi", action: false },
        {
          id: 2, anyIcons: <ManGenIcons />, name_ru: "Мужчинам",
          name_uz: "Erkaklar ", action: false
        },
        {
          id: 3,
          anyIcons: <WomanGenIcons />,
          name_ru: "Ayollar",
          name_uz: "Ayol",
          action: false,
        },
        {
          id: 4, anyIcons: <SpringBoyIcons />, name_ru: "Детям",
          name_uz: "Bolalar ", action: false
        },
      ],
    },
    {
      id: 1111,
      childText: [
        { id: 0, anyIcons: <ManWomanGen />, name_ru: "Все", name_uz: "Barchasi", action: false },
        {
          id: 1, anyIcons: <ManGenIcons />, name_ru: "Мужчинам",
          name_uz: "Erkaklar ", action: false
        },
        {
          id: 2,
          anyIcons: <WomanGenIcons />,
          name_ru: "Женщинам",
          name_uz: "Ayollar",
          action: false,
        },
        {
          id: 3, anyIcons: <SummerBoyIcons />, name_ru: "Детям",
          name_uz: "Bolalar ", action: false
        },
      ],
    },
    {
      id: 2222,
      childText: [
        { id: 0, anyIcons: <ManWomanGen />, name_ru: "Все", name_uz: "Barchasi", action: false },
        {
          id: 1, anyIcons: <ManGenIcons />, name_ru: "Мужчинам",
          name_uz: "Erkaklar ", action: false
        },
        {
          id: 2,
          anyIcons: <WomanGenIcons />,
          name_ru: "Женщинам",
          name_uz: "Ayollar",
          action: false,
        },
        {
          id: 3, anyIcons: <AutummBoyIcons />, name_ru: "Детям",
          name_uz: "Bolalar ", action: false
        },
      ],
    },
    {
      id: 3333,
      childText: [
        { id: 0, anyIcons: <ManWomanGen />, name_ru: "Все", name_uz: "Barchasi", action: false },
        {
          id: 1, anyIcons: <ManGenIcons />, name_ru: "Мужчинам",
          name_uz: "Erkaklar ", action: false
        },
        {
          id: 2,
          anyIcons: <WomanGenIcons />,
          name_ru: "Женщинам",
          name_uz: "Ayollar",
          action: false,
        },
        {
          id: 3, anyIcons: <WinterBoyIcons />, name_ru: "Детям",
          name_uz: "Bolalar ", action: false
        },
      ],
    },
    {
      id: 5555,
      childText: [
        { id: 0, anyIcons: <ManWomanGen />, name_ru: "Все", name_uz: "Barchasi", action: false },
        {
          id: 1, anyIcons: <ManGenIcons />, name_ru: "Мужчинам",
          name_uz: "Erkaklar ", action: false
        },
        {
          id: 2,
          anyIcons: <WomanGenIcons />,
          name_ru: "Женщинам",
          name_uz: "Ayollar",
          action: false,
        },
        {
          id: 3, anyIcons: <WinterBoyIcons />, name_ru: "Детям",
          name_uz: "Bolalar ", action: false
        },
      ],
    },
  ]);
  // -------------------Budget---------------
  const [minPrice, setMinPrice] = useState(
    Number(getMapsInfo?.budget?.min_price)
  );
  const [maxPrice, setMaxPrice] = useState(
    Number(getMapsInfo?.budget?.max_price)
  );
  const [values, setValues] = useState([]);
  const [clearPrice, setClearPrice] = useState(false);
  useEffect(() => {
    setMinPrice(Number(getMapsInfo?.budget?.min_price));
    setMaxPrice(Number(getMapsInfo?.budget?.max_price));
    if (getMapsInfo?.budget?.min_price && getMapsInfo?.budget?.max_price) {
      if (!values[0] && !values[1]) {
        setValues([
          Number(getMapsInfo?.budget?.min_price),
          Number(getMapsInfo?.budget?.max_price),
        ]);
      }
    }
    if (!getMapsInfo?.budget?.min_price && !getMapsInfo?.budget?.max_price) {
      setValues([0, 0]);
    }
  }, [getMapsInfo?.budget]);

  useEffect(() => {
    if (values[0] && values[1] && minPrice && maxPrice) {
      if (minPrice !== values[0] || maxPrice !== values[1]) {
        setClearPrice(true);
      }
    }
  }, [values]);

  const sendPriceList = () => {
    setDressInfo({ ...dressInfo, yandexRangePrice: values });
  };

  const ClearListBadget = () => {
    setClearPrice(false);
    setValues([
      Number(getMapsInfo?.budget?.min_price),
      Number(getMapsInfo?.budget?.max_price),
    ]);
    setDressInfo({ ...dressInfo, yandexRangePrice: [] });
  };

  const handleFilterByUser = (fathId, childId) => {
    if (childId === 0) {
      setDressInfo({ ...dressInfo, yandexGenderId: 0 });
    } else if (childId > 0) {
      setDressInfo({ ...dressInfo, yandexGenderId: childId });
    }
  };
  const clearCategorySelect = () => {
    setDressInfo({ ...dressInfo, yandexCategoryWear: null });
  };
  const clearGenderSelect = () => {
    setDressInfo({ ...dressInfo, yandexGenderId: 0 });
  };
  const clearSelectBrand = (id) => {
    setDressInfo({ ...dressInfo, yandexCategoryBrand: null });
  };
  const clearGetRange = () => {
    setDressInfo({ ...dressInfo, yandexRangePrice: [] });
    setClearPrice(false);
    setValues([
      Number(getMapsInfo?.budget?.min_price),
      Number(getMapsInfo?.budget?.max_price),
    ]);
  };

  return (
    <div className="w-full h-full flex flex-col  py-5 px-4 gap-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[#303030] text-start text-xl not-italic font-AeonikProMedium">
          {t("YLOfilter")}
        </span>
        <span className="cursor-pointer w-6 h-6" onClick={onClick}>
          <MenuCloseIcons colors={"#000"} className="w-full h-full" />
        </span>
      </div>
      <div className="w-full flex items-center justify-between">
        <button
          onClick={() => setSelectFilterType("category")}
          className={`${selectFilterType === "category"
            ? seasonDetector?.BtnActiveSeason
            : "border border-['#E0E0E0']"
            }   w-[85px] h-[52px] rounded-lg flex items-center justify-center  `}
        >
          {selectFilterType === "category" ? (
            <ClothesIcons colors={seasonDetector?.ColorSeason} />
          ) : (
            <ClothesIcons colors={"#000"} />
          )}
        </button>
        <button
          onClick={() => setSelectFilterType("price")}
          className={`${selectFilterType === "price"
            ? seasonDetector?.BtnActiveSeason
            : "border border-['#E0E0E0']"
            }  border border-['#E0E0E0'] w-[85px] h-[52px] rounded-lg flex items-center justify-center  `}
        >
          {selectFilterType === "price" ? (
            <DollorIcons colors={seasonDetector?.ColorSeason} />
          ) : (
            <DollorIcons colors={"#000"} />
          )}
        </button>
        <button
          onClick={() => setSelectFilterType("gender")}
          className={`${selectFilterType === "gender"
            ? seasonDetector?.BtnActiveSeason
            : "border border-['#E0E0E0']"
            }  border border-['#E0E0E0'] w-[85px] h-[52px] rounded-lg flex items-center justify-center  `}
        >
          {selectFilterType === "gender" ? (
            <ManWomGenBlack colors={seasonDetector?.ColorSeason} />
          ) : (
            <ManWomGenBlack colors={"#000"} />
          )}
        </button>
        <button
          onClick={() => setSelectFilterType("brand")}
          className={`${selectFilterType === "brand"
            ? seasonDetector?.BtnActiveSeason
            : "border border-['#E0E0E0']"
            }  border border-['#E0E0E0'] w-[85px] h-[52px] rounded-lg flex items-center justify-center  `}
        >
          {selectFilterType === "brand" ? (
            <TopBrandsIcon colors={seasonDetector?.ColorSeason} />
          ) : (
            <TopBrandsIcon colors={"#000"} />
          )}
        </button>
      </div>
      {/* selected list */}
      <div className="w-full flex items-center flex-wrap gap-2">
        {dressInfo?.yandexCategoryWear &&
          getMapsInfo?.categories
            ?.filter((e) => e?.id === dressInfo?.yandexCategoryWear)
            ?.map((item) => {
              return (
                <div
                  key={item?.id}
                  className={`bg-bgWinter w-fit h-fit gap-x-[6px] rounded-[20px] p-[6px] flex items-center justify-between cursor-pointer `}
                >
                  <span className="text-fullBlue text-[13px] not-italic font-AeonikProRegular">
                    {languageDetector?.typeLang === "ru" && item?.name_ru}
                    {languageDetector?.typeLang === "uz" && item?.name_uz}
                  </span>
                  <button
                    onClick={() => clearCategorySelect()}
                    className="rounded-full bg-white h-5 w-5 flex items-center justify-center"
                  >
                    <GrClose size={10} colors={"#007DCA"} />
                  </button>
                </div>
              );
            })}
        {dressInfo?.yandexRangePrice?.length > 0 && (
          <div
            className={`bg-bgWinter w-fit h-fit gap-x-[6px] rounded-[20px] p-[6px] flex items-center justify-between cursor-pointer `}
          >
            <span className="text-fullBlue flex text-[13px] not-italic font-AeonikProRegular">
              {Number(dressInfo?.yandexRangePrice[0])?.toLocaleString()}-
              {Number(dressInfo?.yandexRangePrice[1])?.toLocaleString()}
            </span>
            <button
              onClick={() => clearGetRange()}
              className="rounded-full  bg-white h-5 w-5 flex items-center justify-center"
            >
              <GrClose size={10} colors={"#007DCA"} />
            </button>
          </div>
        )}
        {dressInfo?.yandexGenderId > 0 &&
          personItems
            ?.filter((value) => value?.id === seasonDetector?.type)
            .map((data) => {
              return (
                <div key={data?.id} className="w-fit   ">
                  {data?.childText
                    ?.filter((e) => e?.id === dressInfo?.yandexGenderId)
                    ?.map((item) => {
                      return (
                        <button
                          key={item?.id}
                          className={`bg-bgWinter w-fit h-fit gap-x-[6px] rounded-[20px] p-[6px] flex items-center justify-between cursor-pointer`}
                        >
                          <span className=" text-fullBlue text-[13px] not-italic font-AeonikProRegular">
                            {languageDetector?.typeLang === 'ru' && item?.name_ru}
                            {languageDetector?.typeLang === 'uz' && item?.name_uz}
                          </span>
                          <button
                            onClick={() => clearGenderSelect()}
                            className="rounded-full bg-white h-5 w-5 flex items-center justify-center"
                          >
                            <GrClose size={10} colors={"#007DCA"} />
                          </button>
                        </button>
                      );
                    })}
                </div>
              );
            })}
        {dressInfo?.yandexCategoryBrand &&
          getMapsInfo?.shops
            ?.filter((e) => dressInfo?.yandexCategoryBrand == e?.id)
            ?.map((data) => {
              return (
                <div
                  key={data?.id}
                  className={`bg-bgWinter w-fit h-fit gap-x-[6px] rounded-[20px] p-[6px] flex items-center justify-between cursor-pointer  `}
                >
                  <span className="text-fullBlue text-[13px] not-italic font-AeonikProRegular">
                    {data?.name}
                  </span>
                  <button
                    onClick={() => clearSelectBrand()}
                    className="rounded-full bg-white h-5 w-5 flex items-center justify-center"
                  >
                    <GrClose size={10} colors={"#007DCA"} />
                  </button>
                </div>
              );
            })}
      </div>
      <div className="w-full h-full ">
        {selectFilterType === "category" && (
          <div>
            <div className="w-full h-full overflow-auto VerticelScroll flex flex-col  bg-white">
              {getMapsInfo?.categories?.map((item) => {
                return (
                  <div
                    onClick={() =>
                      setDressInfo({
                        ...dressInfo,
                        yandexCategoryWear: item?.id,
                      })
                    }
                    key={item?.id}
                    className={`${item?.id == dressInfo?.yandexCategoryWear
                      ? "bg-bgWinter"
                      : ""
                      } w-full h-[44px] flex items-center justify-between cursor-pointer  border-b border-searchBgColor`}
                  >
                    <span className="text-black text-base not-italic font-AeonikProRegular">
                      {languageDetector?.typeLang === "ru" && item?.name_ru}
                      {languageDetector?.typeLang === "uz" && item?.name_uz}
                    </span>
                    {item?.id == dressInfo?.yandexCategoryWear && (
                      <span className="mr-1">
                        <CircleSuccessIcons colors={"#007DCA"} />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {selectFilterType === "price" && (
          <div>
            <div className="w-full h-[300px] overflow-auto VerticelScroll flex flex-col items-center bg-white">
              {
                <div className={`  w-full h-fit md:mb-[10px]`}>
                  <article className="w-full flex justify-between items-center md:pt-[12px]">
                    <figure className="flex items-center cursor-pointer select-none">
                      <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                        {t("YFPrice")}
                      </p>
                    </figure>
                  </article>
                  <article
                    className={`border-1 overflow-hidden h-[120px] duration-300 mt-5 duration-300 `}
                  >
                    <div className="flex flex-col rounded-lg  w-full">
                      <div className="flex flex-wrap justify-between items-center mb-3 w-full px-2">
                        <div className="flex">
                          <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-[#000] ">
                            {t("YFfrom")}
                          </span>
                          <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                            {/* <input
                              name="min_price"
                              className="w-[70px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                              value={Number(values[0]).toLocaleString()}
                              readOnly
                            />{" "} */}
                            <span className="w-[70px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                            >
                              {Number(values[0]).toLocaleString()}
                            </span>
                          </span>
                        </div>
                        <div className="flex ">
                          <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-text-[#555] ">
                            {t("YFto")}
                          </span>
                          <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                            {/* <input
                              name="max_price"
                              className="w-[100px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px]"
                              value={Number(values[1]).toLocaleString()}
                              readOnly
                            /> */}
                            <span className="w-[100px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px]"
                            >
                              {Number(values[1]).toLocaleString()}
                            </span>
                          </span>
                        </div>
                      </div>
                      <Slider
                        className={`slider w-full flex items-center h-[4px] bg-fullBlue border rounded-[1px] my-5`}
                        onChange={setValues}
                        value={values}
                        minDistance={10}
                        min={Number(minPrice)}
                        max={Number(maxPrice)}
                      />
                    </div>
                    {clearPrice && (
                      <div
                        className={`flex w-full items-center justify-between mt-1`}
                      >
                        <button
                          type="button"
                          onClick={() => ClearListBadget()}
                          className={`flex items-center active:scale-95  active:opacity-70 text-sm text-borderWinter font-AeonikProRegular`}
                        >
                          {t("YFclear")}
                        </button>
                        <button
                          type="button"
                          onClick={() => sendPriceList()}
                          className="flex items-center active:scale-95  active:opacity-70 font-AeonikProRegular cursor-pointer text-sm justify-center  text-fullBlue"
                        >
                          {t("YFready")}
                        </button>
                      </div>
                    )}
                  </article>
                </div>
              }
            </div>
          </div>
        )}
        {selectFilterType === "gender" && (
          <div>
            <div className="w-full h-full overflow-auto VerticelScroll flex flex-col  bg-white">
              <div className=" box-border	w-full flex flex-col items-center  h-full ">
                {personItems
                  ?.filter((value) => value.id === seasonDetector?.type)
                  .map((data) => {
                    return (
                      <div
                        key={data?.id}
                        className="w-full h-fit flex flex-col gap-y-2 items-center  "
                      >
                        {data?.childText?.map((item) => {
                          return (
                            <button
                              key={item?.id}
                              onClick={() =>
                                handleFilterByUser(data?.id, item?.id)
                              }
                              className={`${item?.id === dressInfo?.yandexGenderId
                                ? seasonDetector?.BtnActiveSeason
                                : " bg-white text-black border border-searchBgColor"
                                } pl-[40%] rounded-lg w-full h-[64px]   cursor-pointer  font-AeonikProMedium   flex items-center`}
                            >
                              {/* <img src={item?.anyIcons} alt="male" /> */}
                              <span>{item?.anyIcons}</span>
                              <span className="ml-2 not-italic whitespace-nowrap  text-black text-right  text-sm font-AeonikProMedium tracking-wide	leading-5">
                                {languageDetector?.typeLang === 'ru' && item?.name_ru}
                                {languageDetector?.typeLang === 'uz' && item?.name_uz}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
        {selectFilterType === "brand" && (
          <div>
            <div className="w-full flex h-10 items-center border border-searchColor bg-btnBgColor rounded-lg overflow-hidden">
              <span className="w-[10%] h-full flex items-center justify-center cursor-pointer">
                <SearchIcons colors={"#a1a1a1"} />
              </span>
              <input
                type="text"
                name="keywords"
                value={searchBrandName || ""}
                onChange={(e) => {
                  setSearchBrandName(e.target.value);
                }}
                className="w-[90%] h-full text-sm md:text-base bg-transparent"
                placeholder={t('YLOsearchmarket')}
              />
            </div>
            <div className="w-full h-full overflow-auto VerticelScroll flex flex-col  bg-white ">
              <div className="w-full h-full grid grid-cols-4 gap-2 py-4 gap-y-5">
                {getMapsInfo?.shops
                  ?.filter((e) =>
                    searchBrandName
                      ? e?.name
                        ?.toLowerCase()
                        ?.includes(searchBrandName?.toLowerCase())
                      : e
                  )
                  ?.map((data) => {
                    return (
                      <div
                        onClick={() =>
                          setDressInfo({
                            ...dressInfo,
                            yandexCategoryBrand: data?.id,
                          })
                        }
                        key={data?.url_logo_photo}
                        className={`w-[80px] h-20 cursor-pointer overflow-hidden  rounded-full bg-bgColor border ${dressInfo?.yandexCategoryBrand == data?.id
                          ? "   border-fullBlue"
                          : "border-borderColorCard "
                          }`}
                      >
                        <img
                          className="h-full w-full object-contain"
                          src={data?.url_logo_photo}
                          alt="img"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default React.memo(MarketFilterofMaps);
