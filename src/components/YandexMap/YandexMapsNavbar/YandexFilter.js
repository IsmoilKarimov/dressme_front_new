import React, { useContext, useEffect, useState } from "react";
import { Select, Space } from "antd";
import {
  ByBrandIcon,
  ClothesIcons,
  DollorIcons,
  DownArrowAntd,
  ManGenIcons,
  ManWomanGen,
  MenuCloseIcons,
  WinterBoyIcons,
  WomanGenIcons,
} from "../../../assets/icons";
import { dressMainData } from "../../../ContextHook/ContextMenu";

import "../yandex.css";

import Slider from "react-slider";
import { LanguageDetectorDress } from "../../../language/LanguageItems";
import { useTranslation } from "react-i18next";
import { SaesonDetectorDress } from "../../../ContextHook/SeasonContext";
const { Option } = Select;

export default function YandexFilter({ getMapsInfo }) {
  // useReplace
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const { i18n, t } = useTranslation('yandexmap')

  const [languageDetector] = useContext(
    LanguageDetectorDress
  );
  const [seasonDetector,] = useContext(SaesonDetectorDress)

  const [state, setState] = useState({
    openwear: false,
    openPrice: false,
    openBrand: false,
    textToColor: false,
    genderActive: true,
    genderId: 0,
    categoryWearId: null,
    categoryBrandId: null,
    clearPrice: false,
  });

  // ----------------Wear state management----------------------------
  const [selectWear, setSelectWear] = useState();
  const ClearSelectWear = () => {
    setSelectWear();
  };
  // ----------------------Price State Management----------------------

  const [minPrice, setMinPrice] = useState(
    Number(getMapsInfo?.budget?.min_price)
  );
  const [maxPrice, setMaxPrice] = useState(
    Number(getMapsInfo?.budget?.max_price)
  );
  const [values, setValues] = useState([]);
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
        setState({ ...state, clearPrice: true });
      }
    }
  }, [values]);

  const clearFunction = () => {
    setState({ ...state, clearPrice: false, openPrice: false });
    setValues([
      Number(getMapsInfo?.budget?.min_price),
      Number(getMapsInfo?.budget?.max_price),
    ]);
    setDressInfo({ ...dressInfo, yandexRangePrice: [] });
  };
  useEffect(() => {
    setState({ ...state, clearPrice: false });
    setMinPrice(Number(getMapsInfo?.budget?.min_price));
    setMaxPrice(Number(getMapsInfo?.budget?.max_price));
    setValues([
      Number(getMapsInfo?.budget?.min_price),
      Number(getMapsInfo?.budget?.max_price),
    ]);
    if (dressInfo?.yandexRangePrice[0] && dressInfo?.yandexRangePrice[1]) {
      setDressInfo({ ...dressInfo, yandexRangePrice: [] });
    }
  }, [
    dressInfo?.mainRegionId,
    dressInfo?.mainSubRegionId,
    dressInfo?.yandexGenderId,
    dressInfo?.yandexCategoryWear,
    dressInfo?.yandexCategoryBrand,
  ]);
  console.log(dressInfo?.mainRegionId,
    dressInfo?.mainSubRegionId,
    dressInfo?.yandexGenderId,
    dressInfo?.yandexCategoryWear,
    dressInfo?.yandexCategoryBrand,
    "dressInfo?.mainRegionId,    dressInfo?.mainSubRegionId,    dressInfo?.yandexGenderId,    dressInfo?.yandexCategoryWear,    dressInfo?.yandexCategoryBrand, ");
  useEffect(() => {
    setState({ ...state, clearPrice: false });
    setMinPrice(Number(getMapsInfo?.budget?.min_price));
    setMaxPrice(Number(getMapsInfo?.budget?.max_price));
    setValues([
      Number(getMapsInfo?.budget?.min_price),
      Number(getMapsInfo?.budget?.max_price),
    ]);

  }, [
    getMapsInfo?.budget?.min_price,
    getMapsInfo?.budget?.max_price,
  ]);

  const sendPriceList = () => {
    setDressInfo({ ...dressInfo, yandexRangePrice: values });
  };
  console.log(dressInfo?.yandexRangePrice, 'dressInfo?.yandexRangePrice--map');
  // ----------------------Brend State Management----------------------

  const [selectBrand, setSelectBrand] = useState();
  const CloseSelectBrand = () => {
    setSelectBrand();
  };

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
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ],
    },
  ]);
  const handleFilterByUser = (fathId, childId) => {
    if (childId === 0) {
      setDressInfo({ ...dressInfo, yandexGenderId: 0 });
    } else if (childId > 0) {
      setDressInfo({ ...dressInfo, yandexGenderId: childId });
    }
  };

  const onSearch = (value) => {
    // console.log("search:", value);
  };

  const targetModal = document.getElementById("defaultModal");

  const openPrizeModal = () => {
    targetModal.classList.remove("hidden");
  };

  const closePrizeModal = (e) => {
    targetModal.classList.add("hidden");
  };

  return (
    <div className="w-fit px-10 py-2 mt-[-2px] md:px-6  md:rounded-b-[16px] bg-yandexNavbar border border-searchBgColor border-t-0 backdrop-blur-sm flex flex-col justify-between items-center m-auto md:border-t">
      <div className="flex items-center justify-center gap-x-2  w-fit   ">
        <div className="!w-[210px] relative gap-x-1 px-1 h-[44px] border-searchBgColor border  rounded-lg bg-btnBgColor  overflow-hidden flex items-center justify-between cursor-pointer select-none group  ">
          <span className="absolute left-2">
            <ClothesIcons colors={"#000"} />
          </span>
          <Select
            // showSearch
            className="w-[100%] cursor-pointer !caret-transparent	 h-full !outline-none text-center overflow-hidden  !py-0 text-black text-sm font-AeonikProMedium tracking-wide	leading-5"
            bordered={false}
            placeholder={
              <span className="placeholder text-black text-sm font-AeonikProMedium tracking-wide	leading-5">
                {t("YFbycategory")}
              </span>
            }
            optionFilterProp="children"
            onChange={(e) => {
              setDressInfo({ ...dressInfo, yandexCategoryWear: e });
            }}
            onSearch={onSearch}
            // suffixIcon={<></>}
            allowClear
            value={dressInfo?.yandexCategoryWear}
            size="large"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
          // options={getMapsInfo?.categories?.map((item) => {
          //   return {
          //     value: item?.id,
          //     label: item?.name_ru,
          //   };
          // })}
          >
            {getMapsInfo?.categories?.map((item) => {
              return (
                <Option key={item.id} value={item.id} label={item.name_ru}>
                  <Space>
                    <span className="text-black text-[13px] font-AeonikProMedium tracking-wide	leading-5">
                      {languageDetector?.typeLang === "ru" && item?.name_ru}
                      {languageDetector?.typeLang === "uz" && item?.name_uz}
                    </span>
                  </Space>
                </Option>
              );
            })}
          </Select>
        </div>

        <button
          className="w-[190px] gap-x-1 px-2 h-[44px] overflow-hidden rounded-xl bg-btnBgColor  border-searchBgColor border  flex items-center justify-between  cursor-pointer select-none group ml-2"
          onClick={openPrizeModal}
        >
          {dressInfo?.yandexRangePrice?.length > 2 && <div className={` absolute font-AeonikProRegular categoryLinearPrice left-0 w-full h-full z-[10] top-0`}></div>}

          <span className=" flex items-center ">
            <DollorIcons colors={"#000"} />
          </span>
          {dressInfo?.yandexRangePrice[0] && dressInfo?.yandexRangePrice[1] ? (
            <div className="w-fit flex justify-between items-center  ">
              <p className="text-[13px] not-italic font-AeonikProMedium leading-1 ">
                {Number(dressInfo?.yandexRangePrice[0]).toLocaleString()}
              </p>
              <span className="w-[6px] h-[1px] bg-[#a1a1a1] mx-[2px]  "></span>
              <p className="text-[13px] not-italic font-AeonikProMedium leading-1">
                {Number(dressInfo?.yandexRangePrice[1]).toLocaleString()}
              </p>
            </div>
          ) : (
            <p className="not-italic whitespace-nowrap mt-1 text-black text-sm font-AeonikProMedium tracking-wide leading-5 ">
              {t("YFbyPrice")}
            </p>
          )}
          {dressInfo?.yandexRangePrice[0] && dressInfo?.yandexRangePrice[1] ? (
            <span
              onClick={(e) => {
                e.stopPropagation();
                closePrizeModal();
                clearFunction();
              }}
              role="img"
              aria-label="close-circle"
              className="anticon anticon-close-circle"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="close-circle"
                width="12px"
                height="12px"
                fill="#b5b5b5"
                aria-hidden="true"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
              </svg>
            </span>
          ) : (
            <span className="font-AeonikProMedium iconArrow">
              <DownArrowAntd />
            </span>
          )}
        </button>

        {/* Modal Prize */}
        <div
          id="defaultModal"
          onClick={() => {
            closePrizeModal();
          }}
          className={`overflow-y-auto overflow-x-hidden hidden md:fixed top-0right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="fixed p-4 w-fit h-fit md:h-auto left-[calc(50%-275px)] top-[45px]"
          >
            {/* Modal content  */}
            <div className="relative bg-white rounded-lg shadow-modalCategoryShadow">
              {/* Modal header */}
              <div className="flex justify-between items-start mx-4 py-2 border-b rounded-t border-searchBgColor ">
                <p className="text-base font-AeonikProMedium text-gray-900">
                  {t("YFbyPrice")}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closePrizeModal();
                  }}
                  type="button"
                  className="text-gray-400 bg-white hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="defaultModal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {/*  Modal body  */}
              <div className="px-6 py-3 space-y-6">
                <div className=" flex justify-between items-center mb-4 w-full ">
                  <div className="flex ">
                    <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-[#555] ">
                      {t("YFfrom")}
                    </span>
                    <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                      {/* <input
                        name="name"
                        className="w-[90px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                        // defaultValue={Number(values[0]).toLocaleString()}
                        value={Number(values[0]).toLocaleString()}
                      />{" "} */}
                      <span className="w-[90px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                      >
                        {Number(values[0]).toLocaleString()}
                      </span>
                      {t("YFsumm")}
                    </span>
                  </div>
                  <div className="flex ">
                    <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-text-[#555] ">
                      {t("YFto")}
                    </span>
                    <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                      {/* <input
                        name="name"
                        className="w-[100px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                        // defaultValue={Number(values[1]).toLocaleString()}
                        value={Number(values[1]).toLocaleString()}
                      /> */}
                      <span className="w-[100px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                      >
                        {Number(values[1]).toLocaleString()}
                      </span>
                      {t("YFsumm")}
                    </span>
                  </div>
                </div>
                <div className="relative z-50 mb-[6px] w-[350px] ">
                  {" "}
                  <Slider
                    className={`slider w-full flex items-center h-[4px] bg-fullBlue border rounded-[1px] mt-[10px]`}
                    onChange={setValues}
                    value={values || ""}
                    minDistance={10}
                    min={Number(minPrice)}
                    max={Number(maxPrice)}
                  />
                </div>
              </div>
              {/* Modal footer */}
              <div
                className={` flex items-center ${state?.clearPrice ? "justify-between" : "justify-end"
                  } px-6 py-3 space-x-2 rounded-b `}
              >
                {state?.clearPrice && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      closePrizeModal();
                      clearFunction();
                    }}
                    className="flex items-center select-none cursor-pointer text-sm justify-center  text-fullBlue"
                  >
                    {t("YFclear")}
                  </button>
                )}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    sendPriceList();
                    setState({ ...state, openPrice: false });
                    closePrizeModal();
                  }}
                  className="flex items-center select-none cursor-pointer text-sm justify-center  text-fullBlue"
                >
                  {t("YFready")}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="!w-[210px] relative gap-x-1 px-1 h-[44px] border-searchBgColor border  rounded-lg bg-btnBgColor  overflow-hidden flex items-center justify-between cursor-pointer select-none group  ">
          <span className="absolute left-2">
            <ByBrandIcon />
          </span>
          <Select
            showSearch
            className="w-[100%] h-full !caret-transparent pl-4 !outline-none text-center overflow-hidden  !py-0 text-black text-sm font-AeonikProMedium tracking-wide	leading-5"
            bordered={false}
            // placeholder="По магазину"
            placeholder={
              <span className="placeholder text-black text-sm font-AeonikProMedium tracking-wide	leading-5">
                {t("YTmarket")}
              </span>
            }
            optionFilterProp="children"
            onChange={(e) => {
              setDressInfo({ ...dressInfo, yandexCategoryBrand: e });
            }}
            value={dressInfo?.yandexCategoryBrand}
            onSearch={onSearch}
            allowClear
            // suffixIcon={<></>}
            size="large"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
          >
            {getMapsInfo?.shops?.map((item) => {
              return (
                <Option key={item.id} value={item.id} label={item.name}>
                  <Space>
                    <span className="text-black text-sm font-AeonikProMedium tracking-wide	leading-5">
                      {item.name}
                    </span>
                  </Space>
                </Option>
              );
            })}
          </Select>
        </div>

        <div className="box-border flex items-center gap-x-2  h-[44px] border border-searchBgColor overflow-hidden rounded-lg bg-btnBgColor">
          {personItems
            ?.filter((value) => value.id === seasonDetector?.type)
            .map((data) => {
              return (
                <div
                  key={data?.id}
                  className="w-fit h-full flex items-center box-border "
                >
                  {data?.childText?.map((item) => {
                    return (
                      <div
                        key={item?.id}
                        className="flex items-center h-full box-border"
                      >
                        <button
                          onClick={() => handleFilterByUser(data?.id, item?.id)}
                          className={`${item?.id === dressInfo?.yandexGenderId
                            ? " bg-white border w-full h-[100%] my-auto mx-auto box-border border-searchBgColor rounded-lg"
                            : " bg-btnBgColor text-black"
                            } ${languageDetector?.typeLang === "uz" ? 'px-4' : "px-5"}   h-full cursor-pointer  font-AeonikProMedium    rounded-lg  justify-center flex items-center`}
                        >
                          {/* <img src={item?.anyIcons} alt="male" /> */}
                          <span>{item?.anyIcons}</span>
                          {item?.name && (
                            <span className="ml-2 not-italic whitespace-nowrap  text-sm font-AeonikProMedium tracking-wide	leading-5">
                              {t("YFgender_is_selected")}
                            </span>
                          )}
                        </button>
                        {item?.id !== 3 && (
                          <span className="w-[2px] mx-1 h-[30px] border-r border-searchBgColor"></span>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
      <div className="w-full flex items-center gap-x-2 mt-2">
        <div className="w-[190px]  flex items-center">
          {selectWear && (
            <button
              type="button"
              className={`h-[32px] px-2 flex items-center ${seasonDetector?.BtnOpacitySeason} rounded-lg gap-x-[6px]`}
            >
              <span className="text-sm not-italic font-AeonikProMedium leading-5">
                {selectWear}
              </span>
              <span
                onClick={() => ClearSelectWear()}
                className="w-4 h-4 px-[2px] rounded-full flex items-center justify-center bg-white"
              >
                <MenuCloseIcons
                  colors={seasonDetector?.ColorSeason}
                  className="w-full h-full"
                />
              </span>
            </button>
          )}
        </div>

        <div className="w-[190px]  flex items-center">
          {selectBrand && (
            <button
              type="button"
              className={`h-[32px] px-2 flex items-center ${seasonDetector?.BtnOpacitySeason} rounded-lg gap-x-[6px]`}
            >
              <span className="text-sm not-italic font-AeonikProMedium leading-5">
                {selectBrand}
              </span>
              <span
                onClick={() => CloseSelectBrand()}
                className="w-4 h-4 px-[2px] rounded-full flex items-center justify-center bg-white"
              >
                <MenuCloseIcons
                  colors={seasonDetector?.ColorSeason}
                  className="w-full h-full"
                />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
