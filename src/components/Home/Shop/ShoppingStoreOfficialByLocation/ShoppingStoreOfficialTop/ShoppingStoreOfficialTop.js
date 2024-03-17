import "./Store.css";
import {
  CommentStarIcon,
  DeliveryIcon,
  LocationColoursIcons,
  ManGenIcons,
  NoImg,
  SearchIcons,
  SortIcons,
  StarIcons,
  WomanGenIcons,
} from "../../../../../assets/icons";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Modal, Radio, Space } from "antd";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import { MdClose } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { LanguageDetectorDress } from "../../../../../language/LanguageItems";
import { LocationIdDetector } from "../../../../../ContextHook/LocationId";
import LocationDropUp from "../../ShoppingStoreOfficial/ShoppingStoreOfficialTop/LocationDropUp";

const ShoppingStoreOfficialTop = ({
  filteredData,
  clickButtons,
  toggleFilterLeftOpen,
  toggleFilterLeftClose,
  filterLeftAction,
  setOpenMobileFilter,
}) => {
  const [openLocationModal, setOpenLocationModal] = useState(false);
  const [languageDetector, setLanguageDetector] = useContext(
    LanguageDetectorDress
  );
  const [locationIdDetector, setLocationIdDetector] =
    useContext(LocationIdDetector);

  const { t } = useTranslation("shops");

  const [locationList, setLocationList] = useState([]);
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  // const [selectLocation, setSelectLocation] = useState(
  //   locationIdDetector?.locationIdForTest
  // );

  // useEffect(() => {
  //   setSelectLocation(locationIdDetector?.locationIdForTest);
  // }, [locationIdDetector?.locationIdForTest]);

  // For DropUp
  const [locations, setLocations] = useState(false);
  const toggleLocations = useCallback(() => setLocations(false), []);

  const handleToggle = () => {
    if (filterLeftAction) {
      toggleFilterLeftClose();
    } else {
      toggleFilterLeftOpen();
    }
  };

  const [checkedData, setCheckedData] = useState(false);
  useEffect(() => {
    setLocationList([]);
    filteredData?.shop?.approved_shop_locations?.map((item) => {
      if (locationList?.length === 0) {
        setLocationList((locationList) => [...locationList, item]);
      }
      if (locationList?.length > 0 && !locationList?.includes(item)) {
        setLocationList((locationList) => [...locationList, item]);
      }
    });
  }, [filteredData?.shop?.approved_shop_locations]);

  const onChangeSelectLocation = (e) => {
    // setSelectLocation(e?.target?.value);
    setLocationIdDetector({
      ...locationIdDetector,
      locationIdForTest: e?.target?.value,
    });
    setDressInfo({
      ...dressInfo,
      locationIdParams: e?.target?.value,
      productShowSelectedLocation: checkedData,
    });
  };

  const [searchMarketName, setSearchMarketName] = useState(
    dressInfo?.mainSearchNameshopLocation
  );
  function getSearchClick() {
    setDressInfo({
      ...dressInfo,
      mainSearchNameshopLocation: searchMarketName,
    });
  }
  const handleChange = (event) => {
    setSearchMarketName(event.target.value);
    // setDressInfo({
    //   ...dressInfo,
    //   mainSearchNameshopLocation: event.target.value,
    // });
  };

  const handleClear = () => {
    setSearchMarketName("");
    setDressInfo({ ...dressInfo, mainSearchNameshopLocation: "" });
  };

  const _handleKeyDownSearch = (event) => {
    if (event.key === "Enter") {
      setDressInfo({
        ...dressInfo,
        mainSearchNameshopLocation: searchMarketName,
      });
    }
  };

  return (
    <main className="flex flex-col justify-center md:border-b border-searchBgColor  items-center md:mt-5">
      <section
        onClick={() => setLocations(false)}
        className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${
          locations ? "" : "hidden"
        }`}
      ></section>
      <div
        className={`fixed z-[113] left-0 right-0 md:hidden duration-300  overflow-hidden ${
          locations ? "bottom-0" : "bottom-[-800px] z-0"
        }`}
      >
        <LocationDropUp
          locationList={locationList}
          setCheckedData={setCheckedData}
          locationIdDetector={locationIdDetector}
          onChangeSelectLocation={onChangeSelectLocation}
          onClick={toggleLocations}
        />
      </div>
      <section className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
        <div className="w-[100%] h-fit flex flex-col">
          {/* Top section */}
          <div className="w-full flex flex-col border-[#F0F0F0] mt-4 md:mt-0">
            {filteredData?.shop?.url_background_photo && (
              <figure className="w-full h-[240px] md:h-[360px] overflow-hidden md:border border-searchBgColor bg-btnBgColor md:rounded-t-lg">
                <img
                  className="w-full h-full object-fill"
                  src={filteredData?.shop?.url_background_photo}
                  alt="url_background_photo"
                />
              </figure>
            )}
            <div
              className={`w-full md:h-[90px]   h-fit flex flex-col md:flex-row items-center border-t-0 md:border md:border-searchBgColor rounded-b-lg px-4 md:px-0
            ${
              filteredData?.shop?.url_background_photo
                ? "mt-2 md:mt-0"
                : "md:mt-10"
            }
            `}
            >
              {/* 1 */}
              <div className="w-full md:w-[40%] flex h-[80px] md:h-fit items-center md:ml-[40px] mt-3 md:mt-0 ">
                <figure className="max-w-[80px] md:max-w-[150px] max-h-[80px] md:max-h-[150px] min-w-[80px] md:min-w-[150px] min-h-[80px] md:min-h-[150px] md:left-[40px] rounded-full border border-searchBgColor flex items-center justify-center bg-white overflow-hidden">
                  {filteredData?.shop?.url_logo_photo ? (
                    <img
                      src={filteredData?.shop?.url_logo_photo}
                      className="w-full h-full object-contain"
                      alt="url_logo_photo"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <NoImg />
                    </div>
                  )}
                </figure>
                <div className="w-[calc(100%-96px)]  md:w-[calc(100%-180px)]  flex flex-col ml-4  md:ml-8  ">
                  <p className="block md:hidden break-all text-base ll:text-lg md:text-xl font-AeonikProMedium mb-[5px] md:mb-3">
                    {filteredData?.shop?.name || null}
                  </p>
                  <p className="relative md:block hidden max-h-[56px] mb-[5px] overflow-hidden w-full break-all md:pr-4 text-[13px] md:w-[250px] ls:text-[14px] xs:text-xl font-AeonikProMedium">
                    {filteredData?.shop?.name || null}
                    <span className="absolute right-[16px] top-[28px] w-full block linearGr h-[28px]"></span>
                  </p>
                  <div
                    className={`${
                      filteredData?.shop?.overall_rating ? "flex" : "hidden"
                    } items-center`}
                  >
                    <div className="flex items-center mr-[6px]">
                      <StarIcons />
                    </div>
                    <div className="not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 md:ml-1 flex items-center text-sm">
                      <p className="font-AeonikProMedium text-black mr-1">
                        {filteredData?.shop?.overall_rating}
                      </p>
                      {filteredData?.shop?.rated_users_count && (
                        <p className="flex items-center text-setTexOpacity font-AeonikProRegular">
                          ({" "}
                          <span className="flex gap-x-1">
                            <span className="md:flex hidden">
                              {t("votes")}:
                            </span>
                            {filteredData?.shop?.rated_users_count}{" "}
                          </span>{" "}
                          ){" "}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="w-full md:w-[35%] hidden md:flex items-center border-t md:border-none border-searchBgColor mt-5 pt-5 md:pt-0 md:mt-0">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    clickButtons?.setOpenTabLocation(true);
                    clickButtons?.setOpenTabComment(false);
                  }}
                  className="flex gap-x-2 items-center ml-3 w-[65%] md:w-full"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-searchBgColor cursor-pointer">
                    <LocationColoursIcons colors={"#007DCA"} />
                  </div>

                  {filteredData?.shop?.approved_shop_locations
                    ?.filter(
                      (e) => e?.id === locationIdDetector?.locationIdForTest
                    )
                    ?.map((item) => {
                      return (
                        <p className="text-sm font-AeonikProRegular text-borderWinter">
                          {item?.address}
                        </p>
                      );
                    })}
                </button>
              </div>
              {/* 3 */}
              <div className="w-full md:w-[25%] flex items-center md:justify-end  md:mr-5 mt-5 md:mt-0">
                <div className="md:hidden flex w-fit">
                  <div className="w-fit h-fit flex items-center justify-center gap-y-1 cursor-pointer">
                    <button
                      type="primary"
                      // onClick={() => setOpenLocationModal(true)}
                      onClick={() => setLocations(true)}
                      className={`text-borderWinter flex items-center border-b border-dashed border-borderWinter ml-[9px] text-[12px] xs:text-sm md:text-base not-italic font-AeonikProRegular`}
                    >
                      <p className="mr-[6px]">
                        <LocationColoursIcons colors={"#0077B6"} />
                      </p>
                      {t("all_locations")}
                    </button>
                  </div>
                </div>
                <div className="flex items-center ml-auto">
                  <button
                    className={`${
                      filteredData?.shop?.gender_id === "2" ? "hidden" : "flex"
                    }  flex-shrink-0 items-center ml-auto justify-center border border-searchBgColor w-[38px] md:w-12 h-[38px]  md:h-12 rounded-xl mr-1`}
                  >
                    <ManGenIcons />
                  </button>
                  <button
                    className={`${
                      filteredData?.shop?.gender_id === "1" ? "hidden" : "flex"
                    } flex flex-shrink-0 items-center justify-center border border-searchBgColor w-[38px] md:w-12 h-[38px]  md:h-12 rounded-xl`}
                  >
                    <WomanGenIcons />
                  </button>
                  <div className="flex items-center justify-end">
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        clickButtons?.setOpenTabComment(true);
                        clickButtons?.setOpenTabLocation(false);
                      }}
                      className="w-[42%] min-w-min hidden md:block text-sm font-AeonikProRegular text-borderWinter ml-auto cursor-pointer"
                    >
                      {t("view_reviews")}
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        clickButtons?.setOpenTabComment(true);
                      }}
                      className="flex items-center justify-center border border-searchBgColor w-[38px] md:w-12 h-[38px]  md:h-12 rounded-xl ml-[24px] md:ml-[10px] flex-shrink-0"
                    >
                      <CommentStarIcon colors={"#007DCA"} />
                    </button>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="w-full md:hidden flex items-center border-b md:border-none border-searchBgColor py-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    clickButtons?.setOpenTabLocation(true);
                    clickButtons?.setOpenTabComment(false);
                  }}
                  className="flex gap-x-2 items-center w-[100%] md:w-full"
                >
                  <div className="flex items-center justify-center min-w-[38px]  min-h-[38px] rounded-xl border border-searchBgColor cursor-pointer">
                    <LocationColoursIcons colors={"#007DCA"} />
                  </div>
                  {filteredData?.shop?.approved_shop_locations
                    ?.filter(
                      (e) => e?.id === locationIdDetector?.locationIdForTest
                    )
                    ?.map((item) => {
                      return (
                        <p className="text-[12px] xs:text-sm font-AeonikProRegular text-borderWinter">
                          {item?.address}
                        </p>
                      );
                    })}
                </button>
              </div>
            </div>
          </div>
          <div
            className={` ${
              clickButtons?.openTabComment === true ||
              clickButtons?.openTabLocation === true
                ? "md:hidden"
                : "md:flex"
            } w-full hidden items-center justify-between  mt-[72px] mb-3`}
          >
            <div className="flex items-center gap-x-5">
              <div className="w-[175px] flex items-center ">
                <button
                  onClick={handleToggle}
                  type="button"
                  className="w-full gap-x-2 h-[38px] md:h-[44px] border border-[#F2F2F2] flex items-center justify-center  bg-white rounded-xl active:scale-95	active:opacity-70"
                >
                  <span className="">
                    {" "}
                    <SortIcons />
                  </span>
                  {filterLeftAction ? (
                    <p className="not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                      {" "}
                      {t("hide")}
                    </p>
                  ) : (
                    <p className="not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                      {" "}
                      {t("filter")}
                    </p>
                  )}
                </button>
              </div>
              <div className="flex items-center text-[14px] md:text-base font-AeonikProMedium text-[#2C2C2C] ">
                <DeliveryIcon />
                <span className="mx-[5px]">{t("delivery")}:</span>
                <span>
                  {" "}
                  {languageDetector?.typeLang === "ru" &&
                    filteredData?.shop?.delivery?.name_ru}
                  {languageDetector?.typeLang === "uz" &&
                    filteredData?.shop?.delivery?.name_uz}
                </span>
              </div>
            </div>
            <div className="w-full md:w-fit flex md:items-center justify-end items-center mt-1">
              <div className="w-fit flex gap-x-[30px] items-center ">
                <button
                  type="primary"
                  onClick={() => setOpenLocationModal(true)}
                  className={`flex items-center text-borderWinter text-base font-AeonikProMedium`}
                >
                  <p className="mr-[6px]">
                    <LocationColoursIcons colors={"#0077B6"} />
                  </p>
                  {t("all_locations")}
                </button>
                <Modal
                  centered
                  width={700}
                  open={openLocationModal}
                  onOk={() => setOpenLocationModal(false)}
                  onCancel={() => setOpenLocationModal(false)}
                  footer={null}
                  className="w-full p-6"
                >
                  <div className="w-full px-4 md:px-[25px] pb-[15px] md:pb-[30px] pt-[10px] md:pt-[20px]">
                    <div className="text-[16px] md:text-2xl font-AeonikProRegular mb-[15px] md:mb-[30px]">
                      {t("select_location")}
                    </div>
                    <div className="font-AeonikProRegular text-[14px] md:text-lg border-b border-[#f0f0f0] mb-[15px]">
                      {languageDetector?.typeLang === "ru" &&
                        locationList[0]?.region?.name_ru}
                      {languageDetector?.typeLang === "uz" &&
                        locationList[0]?.region?.name_uz}
                    </div>
                    <div className="h-[200px] md:h-[250px] overflow-y-auto mb-[20px] VerticelScroll pr-2">
                      <Radio.Group
                        onChange={onChangeSelectLocation}
                        value={locationIdDetector?.locationIdForTest}
                        defaultValue={locationIdDetector?.locationIdForTest}
                      >
                        {locationList?.map((item, index) => {
                          return (
                            <div className="mb-[8px] gap-x-3 flex items-center cursor-pointer">
                              <Space direction="vertical">
                                <Radio
                                  className="text-lg font-AeonikProRegular"
                                  value={item?.id}
                                  checked={
                                    locationIdDetector?.locationIdForTest ===
                                    item?.id
                                  }
                                  onClick={() => {
                                    setCheckedData(item);
                                  }}
                                >
                                  <span className="text-[14px] md:text-lg font-AeonikProRegular">
                                    {languageDetector?.typeLang === "ru" &&
                                      item?.sub_region?.name_ru}
                                    {languageDetector?.typeLang === "uz" &&
                                      item?.sub_region?.name_uz}
                                  </span>
                                  <span className="text-[14px] md:text-lg font-AeonikProRegular">
                                    ({item?.address} )
                                  </span>
                                </Radio>
                              </Space>
                            </div>
                          );
                        })}
                      </Radio.Group>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
          <action
            className={`${
              clickButtons?.openTabComment === true ||
              clickButtons?.openTabLocation === true
                ? "hidden"
                : "flex"
            } w-full md:hidden items-center justify-between mt-3 mb-3 px-4 gap-x-2`}
          >
            <div className="flex search items-center bg-btnBgColor justify-between rounded-xl font-AeonikProMedium h-[38px] md:h-12 my-3 border border-searchBgColor ss:mt-3 w-full">
              <div className="w-[87%] h-full flex items-center justify-between">
                <input
                  type="text"
                  name="name"
                  placeholder={`${t("find_product")}`}
                  value={searchMarketName}
                  onChange={handleChange}
                  onKeyDown={_handleKeyDownSearch}
                  className="font-AeonikProRegular bg-transparent w-full px-3 h-full text-[12px] md:text-[14px] leading-4"
                />
                {searchMarketName && (
                  <button onClick={handleClear} className="px-1 " type="button">
                    <MdClose size={20} color={"#a1a1a1"} />
                  </button>
                )}
              </div>
              <span
                onClick={() => getSearchClick()}
                className="w-[13%] h-full bg-btnBgColor border-l border-searchBgColor rounded-r-xl active:scale-95 flex items-center justify-center "
              >
                <SearchIcons />
              </span>
            </div>
            <button
              onClick={() => setOpenMobileFilter(true)}
              className=" w-[38px] md:w-12 h-[38px]  md:h-12 shrink-0 rounded-xl select-none border border-searchBgColor flex items-center justify-center"
            >
              <SortIcons colors={"#000"} />
            </button>
          </action>
        </div>
      </section>
    </main>
  );
};
export default React.memo(ShoppingStoreOfficialTop);
