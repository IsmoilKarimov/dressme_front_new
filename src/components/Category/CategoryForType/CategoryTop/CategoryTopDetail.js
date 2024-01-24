import { NavLink, useNavigate } from "react-router-dom";
import {
  FilterIcons,
  ItailIcons,
  SearchIcons,
  UnderSection,
} from "../../../../assets/icons";
import React, { useCallback, useEffect, useState } from "react";
import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";
import FilterDropUp from "../CategoryMobileDropUp/FilterDropUp";
import ClothingTypesDropUp from "../CategoryMobileDropUp/ClothingTypesDropUp";

const CategoryTopDetail = ({ filterData, setFilterData }) => {
  const [clothingTypes, setClothingTypes] = useState(false);
  const [filter, setFilter] = useState(false);
  // const [data, setData] = useState({});

  const toggleFilter = useCallback(() => setFilter(false), []);
  const toggleClothingTypes = useCallback(() => setClothingTypes(false), []);

  // For DropUp
  useEffect(() => {
    if (filter || clothingTypes) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [filter, clothingTypes]);

  // const { id } = useParams();
  // const newId = id?.replace(":", "");

  const [state, setState] = useState({
    opensports: false,
    openTypesofClothes: false,
  });

  // const [selectedSection, setSelectedSection] = useState({
  //   value: null,
  //   id: null,
  // });


  const navigate = useNavigate();

  // CATEGORIES
  const handleOpenCategories = (newOpen) => {
    setState({ ...state, opensports: newOpen });
  };
  const handleCategories = (value, id) => {
    setState({ ...state, opensports: false });
    // setSelectedSection({ value, id });
    navigate(`/section/${id}`);
  };

  const contentCategories = (
    <section className="w-[230px] h-[350px] overflow-y-auto m-0 p-0 VerticelScroll">
      {filterData?.sections?.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleCategories(data?.name_ru, data?.id);
              window.location.reload()
            }}
            className={`${filterData?.section?.id === data?.id ? "bg-bgColor" : null
              } w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.name_ru}
          </p>
        );
      })}
    </section>
  );

  return (
    <main className="flex flex-col justify-center border-t border-searchBgColor items-center">
      <div className="md:pt-8 md:pb-16 flex flex-col md:min-h-[44px] w-full justify-center items-center m-0 py-3">
        <section className="max-w-[1280px] w-[100%] h-full  flex items-center justify-between m-auto">
          <nav className="w-[100%] md:w-fit flex items-center p-1">
            <ul className="h-10 w-[100%] md:w-fit flex items-center overflow-auto HorizantalScroll">
              <li className="not-italic font-AeonikProRegular flex items-center flex-nowrap text-sm leading-4 text-black tracking-[1%] mr-[10px]">
                <NavLink
                  to="/"
                  className="flex items-center whitespace-nowrap cursor-pointer pt-[4px] pr-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]"
                >
                  Главная
                </NavLink>
                <span>
                  <ItailIcons colors={"#A1A1A1"} />
                </span>
              </li>
              <li className="not-italic font-AeonikProRegular flex  	 items-center  text-sm leading-4 text-black tracking-[1%]">
                <NavLink className="flex 	whitespace-nowrap  items-center cursor-pointer mt-[6px] pr-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]">
                  Категории
                </NavLink>
              </li>
            </ul>
          </nav>

          <nav className="hidden md:flex"></nav>
        </section>
      </div>

      <div className="tableSizes">
        <section
          onClick={() => setFilter(false)}
          className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${filter ? "" : "hidden"
            }`}
        ></section>
        <section
          className={`fixed z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${filter ? "bottom-0" : "bottom-[-800px] z-0"
            }`}
        >
          <FilterDropUp onClick={toggleFilter} />
        </section>
      </div>
      <div className="locations">
        <section
          onClick={() => setClothingTypes(false)}
          className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${clothingTypes ? "" : "hidden"
            }`}
        ></section>
        <section
          className={`fixed z-[113] left-0 right-0 md:hidden duration-300  overflow-hidden ${clothingTypes ? "bottom-0" : "bottom-[-800px] z-0"
            }`}
        >
          <ClothingTypesDropUp onClick={toggleClothingTypes} />
        </section>
      </div>

      <section className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
        <article className="w-[100%] h-fit md:mb-16">
          <article className="w-full flex flex-col border-b md:border-none border-searchBgColor">
            <figure className="relative w-full md:h-[90px] mt-6 md:mt-0 h-fit flex flex-col md:flex-row items-center justify-between border-t-0 md:border md:border-searchBgColor rounded-lg px-4 md:px-0">
              {/*  */}
              <div className="w-full md:w-fit flex h-[66px] md:h-fit items-center border md:border-none border-searchBgColor rounded-lg">
                <div className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[160px] overflow-hidden left-[38px] md:left-[40px] rounded-xl border border-searchBgColor flex items-center justify-center bg-white columns-1">
                  <img
                    src={filterData?.section?.url_photo}
                    alt=""
                    className="w-full h-full rounded-xl object-cover object-top"
                  />
                </div>
                <div className="flex items-center ml-[112px] md:ml-[210px]">
                  <div className="text-2xl font-AeonikProMedium">
                    {filterData?.section?.name_ru}
                    <span className="text-lg text-setTexOpacity font-AeonikProRegular ml-2">
                      ({filterData?.section_products?.total})
                    </span>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="w-full md:w-fit flex items-center justify-between md:mr-5  mt-6 md:mt-0">
                <div className="flex items-center">
                  <NavLink className="hidden md:flex items-center text-[15px] font-AeonikProMedium mr-[22px]">
                    По разделу
                  </NavLink>
                  <div className="md:flex items-center hidden">
                    <Popover
                      open={state?.opensports}
                      onOpenChange={handleOpenCategories}
                      className="w-[260px] px-4 h-[52px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
                      trigger="click"
                      options={["Hide"]}
                      // placement="bottom"
                      content={contentCategories}
                    >
                      <span className="text-[15px] font-AeonikProMedium">
                        {filterData?.section?.name_ru}
                      </span>
                      <span>
                        <BiChevronDown
                          size={22}
                          style={{ color: "#000" }}
                          className={`${state?.opensports ? "rotate-[-180deg]" : ""
                            } duration-200`}
                        />
                      </span>
                    </Popover>
                  </div>
                </div>
              </div>
            </figure>
          </article>
          <article className="w-full md:hidden flex items-center justify-between mt-6 mb-3 px-4">
            <button
              onClick={() => setFilter(true)}
              className="h-[44px] w-[48%] select-none active:scale-95  active:opacity-70 rounded-xl border border-searchBgColor bg-btnBgColor flex items-center justify-center"
            >
              <FilterIcons colors={"#000"} />
              <p className="ml-2 not-italic  font-AeonikProMedium   text-sm leading-4 text-black tracking-[1%] cursor-pointer">
                Фильтры
              </p>
            </button>
            <button
              onClick={() => setClothingTypes(true)}
              className="h-[44px] w-[48%] select-none active:scale-95  active:opacity-70 rounded-xl border border-searchBgColor bg-btnBgColor flex items-center justify-center"
            >
              <UnderSection />
              <p className="ml-2 not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%] cursor-pointer">
                Под разделу
              </p>
            </button>
          </article>
        </article>
        {filterData?.section?.sub_sections ? (
          <article className="w-full border-b border-searchBgColor">
            <article className="w-full hidden md:block mb-10">
              <ul className=" flex flex-row items-center flex-wrap gap-x-[14px] gap-y-[14px]">
                {filterData?.section?.sub_sections?.map((catalog, index) => (
                  <li key={index} className="text-[15px] font-AeonikProMedium">
                    <button className="focus:bg-borderWinter focus:text-white hover:bg-borderWinter hover:text-white bg-white border border-[#f0f0f0] rounded-lg px-[20px] py-[14px]">
                      {catalog.name_ru}
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          </article>
        ) : null}
      </section>
      <section className="w-full px-4 block md:hidden">
        <article className="w-full search flex items-center bg-white justify-between rounded-xl font-AeonikProMedium h-11 mt-3 mb-3 border border-searchBgColor ss:mt-3">
          <span className=" flex ss:pl-[11.65px]">
            <SearchIcons />
          </span>
          <input
            type="text"
            placeholder="Найти товар"
            className="font-AeonikProRegular bg-transparent w-full px-3 h-12 text-[14px] leading-4"
          />
        </article>
      </section>
    </main>
  );
};
export default React.memo(CategoryTopDetail);
