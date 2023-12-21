import { NavLink } from "react-router-dom";
import "./Store.css";
import { nike } from "../../../../../assets";
import {
  ArrowTopIcons,
  ClothesIcons,
  CommentStarIcon,
  FilterIcons,
  LocationColoursIcons,
  ManGenIcons,
  SearchIcons,
  StarIcons,
  WomanGenIcons,
} from "../../../../../assets/icons";
import { useCallback, useEffect, useState } from "react";
import { Modal, Radio } from "antd";
import FilterDropUp from "../../../../Category/CategoryForType/CategoryMobileDropUp/FilterDropUp";

const ShoppingStoreOfficialTop = ({
  storeData,
  openTabComment,
  setOpenTabComment,
  openTabLocation,
  setOpenTabLocation,
}) => {
  const [openLocationModal, setOpenLocationModal] = useState(false);
  const [filter, setFilter] = useState(false);
  const toggleFilter = useCallback(() => setFilter(false), []);

  // For DropUp
  useEffect(() => {
    if (filter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [filter]);

  const [locationsList] = useState([
    { id: 1, location: "Bektemir" },
    { id: 2, location: "Mirzo Ulugbek" },
    { id: 3, location: "Yunusobod" },
    { id: 4, location: "Chilonzor" },
    { id: 5, location: "Mirobod" },
  ]);

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  console.log(storeData, "STOREDATA");

  return (
    <main className="flex flex-col justify-center md:border-b border-searchBgColor  items-center md:my-5">
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
            <figure className="w-full h-[240px] md:h-[360px] overflow-hidden border border-searchBgColor bg-btnBgColor rounded-t-lg">
              <img
                className="w-full h-full object-cover"
                src="https://st4.depositphotos.com/1323776/21295/i/450/depositphotos_212951656-stock-photo-scottsdale-usa-bill-bowerman-phil.jpg"
                alt=""
              />
            </figure>
            <div className="w-full md:h-[90px] mt-2 md:mt-0 h-fit flex flex-col md:flex-row items-center border-t-0 md:border md:border-searchBgColor rounded-b-lg px-4 md:px-0">
              {/* 1 */}
              <div className="w-full md:w-[40%] flex h-[80px] md:h-fit items-center md:ml-[40px]">
                <figure className="w-[80px] md:w-[150px] h-[80px] md:h-[150px] md:left-[40px] rounded-full border border-searchBgColor flex items-center justify-center bg-white overflow-hidden">
                  <img src={storeData?.url_logo_photo} className="w-full h-full object-cover" alt="" />
                </figure>
                <div className="flex flex-col ml-8">
                  <p className="text-xl font-AeonikProMedium mb-3">
                    {storeData?.name}
                  </p>
                  <div
                    className={`${
                      storeData?.overall_rating ? "flex" : "hidden"
                    } items-center`}
                  >
                    <div className="flex items-center mr-[6px]">
                      <StarIcons />
                    </div>
                    <div className="not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 md:ml-1 flex items-center text-sm">
                      <p className="font-AeonikProMedium text-black mr-1">
                        {storeData?.overall_rating}
                      </p>
                      <p className="text-setTexOpacity font-AeonikProRegular">
                        ({storeData?.rated_users_count} votes){" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="w-full md:w-[35%] flex items-center border-t md:border-none border-searchBgColor mt-5 pt-5 md:pt-0 md:mt-0">
                <NavLink
                  to="/delivery-points"
                  className="flex items-center justify-center shrink-0 w-12 h-12 rounded-xl border border-searchBgColor cursor-pointer"
                >
                  <span>
                    <LocationColoursIcons colors={"#007DCA"} />
                  </span>
                </NavLink>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTabLocation(!openTabLocation);
                    setOpenTabComment(false);
                  }}
                  className="flex flex-col ml-3 w-[70%] md:w-full"
                >
                  <p className="text-sm font-AeonikProRegular text-borderWinter">
                    60 Amir Temur Avenue, Mirzo Ulugbek district Tashkent 100017
                  </p>
                </button>
              </div>
              {/* 3 */}
              <div className="w-full md:w-[25%] flex items-center md:justify-end pb-5 md:pb-0 border-b border-[#F0F0F0] md:border-none md:mr-5 mt-5 md:mt-0">
                <div className="md:hidden flex w-fit">
                  <div className="w-fit h-fit flex items-center justify-center gap-y-1 cursor-pointer">
                    <NavLink
                      to="/delivery-points"
                      className="flex items-center justify-center w-12 h-12 rounded-xl border border-searchBgColor cursor-pointer"
                    >
                      <span>
                        <LocationColoursIcons colors={"#007DCA"} />
                      </span>
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
                  <button className={`${storeData?.gender_id === "1" ? 'flex' : 'hidden'}  flex-shrink-0 items-center ml-auto justify-center border border-searchBgColor w-12 h-12 rounded-xl mr-1`}>
                    <ManGenIcons />
                  </button>
                  <button className={`${storeData?.gender_id === "2" ? 'flex' : 'hidden'} flex flex-shrink-0 items-center justify-center border border-searchBgColor w-12 h-12 rounded-xl`}>
                    <WomanGenIcons />
                  </button>
                  <div className="flex items-center justify-end">
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTabComment(!openTabComment);
                        setOpenTabLocation(false);
                      }}
                      className="w-[42%] min-w-min hidden md:block text-sm font-AeonikProRegular text-borderWinter ml-auto cursor-pointer"
                    >
                      Посмотреть отзывы
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTabComment(!openTabComment);
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
          <div className="w-full  hidden md:flex justify-end items-center my-3">
            <div className="w-fit flex gap-x-7 items-center">
              <NavLink
                to="#"
                className="w-fit h-fit flex flex-col items-center justify-center gap-y-1 cursor-pointer"
              >
                <p>
                  <LocationColoursIcons colors={"#303030"} />
                </p>
                <p
                  className={`text-base not-italic font-AeonikProRegular  text-[#303030] hover:text-borderWinter`}
                >
                  Мирзо Улугбек
                </p>
              </NavLink>
              <NavLink
                to="#"
                className="w-fit h-fit flex flex-col items-center justify-center gap-y-1 cursor-pointer"
              >
                <p>
                  <LocationColoursIcons colors={"#303030"} />
                </p>
                <p
                  className={`text-base not-italic font-AeonikProRegular  text-[#303030] hover:text-borderWinter`}
                >
                  Юнусабад
                </p>
              </NavLink>
              <NavLink
                to="#"
                className="w-fit h-fit flex flex-col items-center justify-center gap-y-1 cursor-pointer"
              >
                <p>
                  <LocationColoursIcons colors={"#303030"} />
                </p>
                <p
                  className={`text-base not-italic font-AeonikProRegular  text-[#303030] hover:text-borderWinter`}
                >
                  Алмазар
                </p>
              </NavLink>
              <NavLink
                to="#"
                className="w-fit h-fit flex flex-col items-center justify-center gap-y-1 cursor-pointer"
              >
                <p>
                  <LocationColoursIcons colors={"#303030"} />
                </p>
                <p
                  className={`text-base not-italic font-AeonikProRegular  text-[#303030] hover:text-borderWinter`}
                >
                  Чиланзар
                </p>
              </NavLink>
              <NavLink
                to="#"
                className="w-fit h-fit flex flex-col items-center justify-center gap-y-1 cursor-pointer"
              >
                <p>
                  <LocationColoursIcons colors={"#303030"} />
                </p>
                <p
                  className={`text-base not-italic font-AeonikProRegular  text-[#303030] hover:text-borderWinter`}
                >
                  Учтепа
                </p>
              </NavLink>
              <button
                type="primary"
                onClick={() => setOpenLocationModal(true)}
                className={`text-borderWinter text-base font-AeonikProMedium`}
              >
                Все локации
              </button>
              <Modal
                centered
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
                    Tashkent
                  </div>
                  <Radio.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChange}
                  >
                    <div className="w-full flex flex-wrap items-center gap-y-2">
                      {locationsList.map((data) => (
                        <div key={data.id} className="w-1/3">
                          <Radio
                            value={data.location}
                            name="location"
                            className="text-lg font-AeonikProRegular"
                          >
                            {data.location}
                          </Radio>
                        </div>
                      ))}
                    </div>
                  </Radio.Group>
                  <button
                    type="button"
                    className="w-full flex justify-end mt-[60px] text-borderWinter text-lg font-AeonikProMedium"
                  >
                    Готово
                  </button>
                </div>
              </Modal>
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
export default ShoppingStoreOfficialTop;
