import { NavLink } from "react-router-dom";
import "./Store.css";
import {
  CommentStarIcon,
  DeliveryIcon,
  FilterIcons,
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
import FilterDropUp from "../../../../Category/CategoryForType/CategoryMobileDropUp/FilterDropUp";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";

const ShoppingStoreOfficialTop = ({
  filteredData,
  clickButtons,
  toggleFilterLeftOpen,
  toggleFilterLeftClose,
  filterLeftAction,
}) => {
  const [openLocationModal, setOpenLocationModal] = useState(false);
  const [filter, setFilter] = useState(false);
  const toggleFilter = useCallback(() => setFilter(false), []);
  const [locationList, setLocationList] = useState([]);
  const [selectLocation, setSelectLocation] = useState([]);
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  // For DropUp
  useEffect(() => {
    if (filter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [filter]);
  const handleToggle = () => {
    if (filterLeftAction) {
      toggleFilterLeftClose();
    } else {
      toggleFilterLeftOpen();
    }
  };
  // Посмотреть отзывы

  useEffect(() => {
    setDressInfo({
      ...dressInfo,
      productShowSelectedLocation:
        filteredData?.shop?.approved_shop_locations[0],
    });
    setLocationList([]);
    filteredData?.shop?.approved_shop_locations?.map((item) => {
      if (locationList?.length === 0) {
        setLocationList((locationList) => [...locationList, item]);
      }
      if (locationList?.length > 0 && !locationList?.includes(item)) {
        setLocationList((locationList) => [...locationList, item]);
      }
    });
  }, [filteredData]);

  const onChangeSelectLocation = (e) => {
    setSelectLocation(e?.target?.value);
  };
  const onhandleSelect = () => {
    setOpenLocationModal(false);
    if (selectLocation) {
      setDressInfo({ ...dressInfo, locationIdParams: selectLocation });
    }

  };

  console.log(dressInfo?.locationIdParams, "dressInfo?.locationIdParams");
  return (
    <main className="flex flex-col justify-center md:border-b border-searchBgColor  items-center md:mt-5">
      <div className="filter">
        <section
          onClick={() => setFilter(false)}
          className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${
            filter ? "" : "hidden"
          }`}
        ></section>
        <section
          className={`fixed z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${
            filter ? "bottom-0" : "bottom-[-800px] z-0"
          }`}
        >
          <FilterDropUp onClick={toggleFilter} />
        </section>
      </div>
      <section className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
        <div className="w-[100%] h-fit flex flex-col">
          {/* Top section */}
          <div className="w-full flex flex-col border-[#F0F0F0]">
            {filteredData?.shop?.url_background_photo && (
              <figure className="w-full h-[240px] md:h-[360px] overflow-hidden border border-searchBgColor bg-btnBgColor rounded-t-lg">
                <img
                  className="w-full h-full object-contain"
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
              <div className="w-full md:w-[40%] flex h-[80px] md:h-fit items-center md:ml-[40px]">
                <figure className="w-[80px] md:w-[150px] h-[80px] md:h-[150px] md:left-[40px] rounded-full border border-searchBgColor flex items-center justify-center bg-white overflow-hidden">
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
                <div className="flex flex-col ml-8">
                  <p className="text-xl font-AeonikProMedium mb-3">
                    {filteredData?.shop?.name || "name"}
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
                        {filteredData?.overall_rating || "rating"}
                      </p>
                      <p className="text-setTexOpacity font-AeonikProRegular">
                        ({filteredData?.shop?.rated_users_count || "0"} votes){" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="w-full md:w-[35%] flex items-center border-t md:border-none border-searchBgColor mt-5 pt-5 md:pt-0 md:mt-0">
                {/* <div className="w-full gap-x-2 h-fit flex items-center justify-center gap-y-1 cursor-pointer">
                  <NavLink
                    to="/locations"
                    className="flex items-center justify-center w-12 h-12 rounded-xl border border-searchBgColor cursor-pointer"
                  >
                    <span className="flex items-center  ">
                      <LocationColoursIcons colors={"#007DCA"} />
                    </span>
                  </NavLink>
                  <NavLink to="/locations"
                    className="w-[200px] text-sm font-AeonikProRegular text-borderWinter cursor-pointer">
                    {filteredData?.shop?.approved_shop_locations[0]?.address}
                  </NavLink>

                </div> */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    clickButtons?.setOpenTabLocation(
                      !clickButtons?.openTabLocation
                    );
                    clickButtons?.setOpenTabComment(false);
                  }}
                  className="flex gap-x-2 items-center ml-3 w-[65%] md:w-full"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl border border-searchBgColor cursor-pointer">
                    <LocationColoursIcons colors={"#007DCA"} />
                  </span>
                  {
                    filteredData?.shop?.approved_shop_locations?.filter(e => e?.id === dressInfo?.locationIdParams)?.map(item => {
                      return (
                        <p className="text-sm font-AeonikProRegular text-borderWinter">
                          {item?.address}
                        </p>
                      )
                    })
                  }
                </button>
              </div>
              {/* 3 */}
              <div className="w-full md:w-[25%] flex items-center md:justify-end pb-5 md:pb-0 border-b border-[#F0F0F0] md:border-none md:mr-5 mt-5 md:mt-0">
                <div className="md:hidden flex w-fit">
                  <div className="w-fit h-fit flex items-center justify-center gap-y-1 cursor-pointer">
                    <NavLink
                      to="/locations"
                      className="w-fit flex items-center gap-x-2"
                    >
                      <span className="flex items-center justify-center w-12 h-12 rounded-xl border border-searchBgColor cursor-pointer">
                        <LocationColoursIcons colors={"#007DCA"} />
                      </span>
                      <p className="text-sm font-AeonikProRegular text-borderWinter cursor-pointer">
                        {
                          filteredData?.shop?.approved_shop_locations[0]
                            ?.address
                        }
                      </p>
                    </NavLink>
                    <p
                      className={`text-borderWinter border-b border-dashed border-borderWinter ml-3 text-sm md:text-base not-italic font-AeonikProRegular`}
                    >
                      {" "}
                      Все локации
                    </p>
                  </div>
                </div>
                <div className="flex items-center ml-auto">
                  <button
                    className={`${
                      filteredData?.shop?.gender_id === "2" ? "hidden" : "flex"
                    }  flex-shrink-0 items-center ml-auto justify-center border border-searchBgColor w-12 h-12 rounded-xl mr-1`}
                  >
                    <ManGenIcons />
                  </button>
                  <button
                    className={`${
                      filteredData?.shop?.gender_id === "1" ? "hidden" : "flex"
                    } flex flex-shrink-0 items-center justify-center border border-searchBgColor w-12 h-12 rounded-xl`}
                  >
                    <WomanGenIcons />
                  </button>
                  <div className="flex items-center justify-end">
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        clickButtons?.setOpenTabComment(
                          !clickButtons?.openTabComment
                        );
                        clickButtons?.setOpenTabLocation(false);
                      }}
                      className="w-[42%] min-w-min hidden md:block text-sm font-AeonikProRegular text-borderWinter ml-auto cursor-pointer"
                    >
                      Посмотреть отзывы
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        clickButtons?.setOpenTabComment(
                          !clickButtons?.openTabComment
                        );
                      }}
                      className="flex items-center justify-center border border-searchBgColor w-[48px] h-[48px] rounded-xl ml-[24px] md:ml-[10px] flex-shrink-0"
                    >
                      <CommentStarIcon colors={"#007DCA"} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full hidden md:flex items-center justify-between  mt-[72px] mb-3">
            <div className="flex items-center gap-x-5">
              <div className="w-[175px] flex items-center ">
                <button
                  onClick={handleToggle}
                  type="button"
                  className="w-full gap-x-2 h-[44px] border border-[#F2F2F2] flex items-center justify-center  bg-white rounded-lg active:scale-95	active:opacity-70"
                >
                  <span className="">
                    {" "}
                    <SortIcons />
                  </span>
                  {filterLeftAction ? (
                    <p className="not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                      {" "}
                      Скрыть
                    </p>
                  ) : (
                    <p className="not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                      {" "}
                      Фильтр
                    </p>
                  )}
                </button>
              </div>
              <div className="flex items-center text-base font-AeonikProMedium text-[#2C2C2C] ">
                <DeliveryIcon />
                <span className="mx-[5px]">Доставка:</span>
                <span>{filteredData?.shop?.delivery?.name_ru}</span>
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
                  Все локации
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
                  <div className="w-full px-[25px] pb-[30px] pt-[20px]">
                    <div className="text-2xl font-AeonikProRegular mb-[30px]">
                      Выберите локацию
                    </div>
                    <div className="font-AeonikProRegular text-lg border-b border-[#f0f0f0] mb-[15px]">
                      {locationList[0]?.region?.name_ru}
                    </div>
                    <div className="h-[250px] overflow-y-auto mb-[20px] VerticelScroll pr-2">
                      <Radio.Group
                        onChange={onChangeSelectLocation}
                        value={selectLocation}
                        defaultValue={dressInfo?.locationIdParams}
                      >
                        {locationList?.map((item, index) => {
                          return (
                            <div className="mb-[8px] gap-x-3 flex items-center cursor-pointer">
                              <Space direction="vertical">
                                <Radio
                                  className="text-lg font-AeonikProRegular"
                                  value={item?.id}
                                >
                                  {" "}
                                  {item?.sub_region?.name_ru} ({item?.address} )
                                </Radio>
                              </Space>
                            </div>
                          );
                        })}
                      </Radio.Group>
                      {/* {locationList?.map((item, index) => {
                        return (
                          <div className="mb-[8px] gap-x-3 flex items-center cursor-pointer">
                            <input
                              className="w-[20px] h-[20px]"
                              value={item?.id}
                              onChange={onHandleLocation}
                              type="radio"
                              name={item?.region?.name_ru}
                              id="checkLocation" />
                            <label htmlFor={'checkLocation'} className="text-lg cursor-pointer gap-x-1 font-AeonikProRegular">
                              {item?.region?.name_ru} (
                              {item?.address})
                            </label>
                          </div>
                        )
                      })} */}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        onhandleSelect();
                        // setOpenLocationModal(false);
                        // setSelectedLocation(checkedData);
                      }}
                      className="w-full flex justify-end mt-[60px] text-borderWinter text-lg font-AeonikProMedium"
                    >
                      Готово
                    </button>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
          <action
            className={`w-full md:hidden flex items-center justify-between mt-3 mb-3 px-4 gap-x-2`}
          >
            <div className="search flex items-center bg-btnBgColor justify-between rounded-xl font-AeonikProMedium h-12 my-3 border border-searchBgColor ss:mt-3 md:hidden w-full">
              <span className=" flex ss:pl-[11.65px] md:hidden">
                <SearchIcons />
              </span>
              <input
                type="text"
                placeholder="Искать товары или бренды"
                className="bg-transparent w-full px-3 h-12 text-[14px] bg-btnBgColor border border-transparent md:border-searchBgColor md:mx-0 md:-ml-[3px] md:px-3 md:h-12
              placeholder-italic placeholder-AeonikProMedium placeholder-sm leading-4 placeholder-setTexOpacity placeholder-[1px]
              "
              />
            </div>
            <button
              onClick={() => setFilter(true)}
              className="w-12 h-12 shrink-0 rounded-xl select-none border border-searchBgColor flex items-center justify-center"
            >
              <FilterIcons colors={"#000"} />
            </button>
          </action>
        </div>
      </section>
    </main>
  );
};
export default React.memo(ShoppingStoreOfficialTop);
