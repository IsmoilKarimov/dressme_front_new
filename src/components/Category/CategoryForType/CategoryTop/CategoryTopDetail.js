import { NavLink, useNavigate } from "react-router-dom";
import {
  SearchIcons,
  SortIcons,
  UnderSection,
} from "../../../../assets/icons";
import React, { useContext, useState } from "react";
import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { MdClose } from "react-icons/md";
import NewBreadCrump from "../../../Breadcrumbs/NewBreadCrump";
import { useTranslation } from "react-i18next";


const CategoryTopDetail = ({
  filterData,
  filterLeftAction,
  setOpenMobileFilter,
  setOpenMobileCategory,
  setFilterToggle,
  paramsId
}) => {
  const [searchMarketName, setSearchMarketName] = useState();
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const { t } = useTranslation("category");

  const handleToggle = () => {
    if (filterLeftAction) {
      // toggleFilterLeftClose();
      setFilterToggle(false)
    } else {
      setFilterToggle(true)
      // toggleFilterLeftOpen();
    }
  };
  // For DropUp

  const [state, setState] = useState({
    opensports: false,
    openTypesofClothes: false,
  });

  const navigate = useNavigate();

  // CATEGORIES
  const handleOpenCategories = (newOpen) => {
    setState({ ...state, opensports: newOpen });
  };
  const handleCategories = (value, id) => {
    setState({ ...state, opensports: false });
    navigate(`/section/${value?.split(' ')?.join('-')?.toLowerCase()}`);
  };

  const contentCategories = (
    <section className="w-[230px] h-[350px] overflow-y-auto m-0 p-0 VerticelScroll">
      {filterData?.sections?.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleCategories(data?.name_ru, data?.id);
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
  function getSearchClick() {
    setDressInfo({ ...dressInfo, mainSearchNameCategory: searchMarketName });
  }
  const handleChange = (event) => {
    setSearchMarketName(event.target.value);
  };
  const handleClear = () => {
    setSearchMarketName("");
    setDressInfo({ ...dressInfo, mainSearchNameCategory: null });
  };

  const breadcrumbItems = [
    { label_uz: 'Asosiy', label_ru: 'Главная', url: '/' },
    { label_uz: "Bo'limlar", label_ru: 'Разделы', url: '/section' },
    { label_uz: paramsId, label_ru: paramsId, url: '/section/:id' },
  ];

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col  w-full justify-center items-center m-0 mt-3">
        <section className="pb-3 md:py-5 border-b border-searchBgColor w-[100%] h-full  flex items-center justify-between m-auto">
          <nav className="w-[100%] md:w-fit flex items-center ">
            <NewBreadCrump items={breadcrumbItems} />
          </nav>
          <nav className="hidden md:flex"></nav>
        </section>
      </div>

      {/* {filterData?.section_products?.data?.length > 0 && ( */}
      {/* {filterData?.sections?.length > 0 && ( */}
      <div className="w-full flex flex-col justify-center items-center">
        <section className=" w-[100%] flex flex-col items-center justify-between m-auto  md:mt-[60px]">
          <article className="w-[100%] h-fit md:mb-16">
            <article className="w-full flex flex-col border-b md:border-none border-searchBgColor">
              <figure className="relative w-full md:h-[90px] my-10 md:mt-0 h-fit flex flex-col md:flex-row items-center justify-between border-t-0 md:border md:border-searchBgColor rounded-lg px-4 md:px-0">
                {/*  */}
                <div className="w-full md:w-fit flex h-[66px] md:h-fit items-center border md:border-none border-searchBgColor rounded-lg">
                  <div className="absolute w-[80px] h-[120px] md:w-[120px] md:h-[160px] overflow-hidden left-[38px] md:left-[40px] rounded-xl border border-searchBgColor flex items-center justify-center bg-white columns-1">
                    <img
                      src={filterData?.section?.url_photo}
                      alt=""
                      className="w-full h-full rounded-xl object-cover object-top"
                    />
                  </div>
                  <div className="flex items-center ml-[112px] md:ml-[210px]">
                    <div className="text-xl font-AeonikProMedium">
                      {filterData?.section?.name_ru}
                      <span className="text-xl text-setTexOpacity font-AeonikProRegular ml-2">
                        ({filterData?.section_products?.total})
                      </span>
                    </div>
                  </div>
                </div>

                {/*  */}
                <div className="w-full md:w-fit flex items-center justify-between md:mr-5">
                  <div className="flex items-center">
                    <NavLink className="hidden md:flex items-center text-[15px] font-AeonikProMedium mr-[22px]">
                      {t("by_section")}
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
                onClick={() => setOpenMobileFilter(true)}
                className="h-[48px] w-[48%] select-none active:scale-95  active:opacity-70 rounded-xl border border-searchBgColor bg-btnBgColor flex items-center justify-center"
              >
                <SortIcons />
                <p className="ml-2 not-italic  font-AeonikProMedium   text-sm leading-4 text-black tracking-[1%] cursor-pointer">
                  {t("filter")}
                </p>
              </button>
              <button
                onClick={() => setOpenMobileCategory(true)}
                className="h-[48px] w-[48%] select-none active:scale-95  active:opacity-70 rounded-xl border border-searchBgColor bg-btnBgColor flex items-center justify-center"
              >
                <UnderSection />
                <p className="ml-2 not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%] cursor-pointer">
                  {t("by_section")}
                </p>
              </button>
            </article>
          </article>

          {filterData?.section?.sub_sections ? (
            <article className="w-full border-b border-searchBgColor">
              <article className="w-full hidden md:block mb-10">
                <ul className=" flex flex-row items-center flex-wrap gap-x-[14px] gap-y-[14px]">
                  {filterData?.section?.sub_sections?.map(
                    (catalog, index) => (
                      <li
                        key={index}
                        className="text-[15px] font-AeonikProMedium"
                      >
                        <button className="focus:bg-borderWinter focus:text-white hover:bg-borderWinter hover:text-white bg-white border border-[#f0f0f0] rounded-lg px-[20px] py-[14px]">
                          {catalog.name_ru}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </article>
            </article>
          ) : null}
        </section>
        <div className="w-full hidden md:flex items-center ">
          <button
            onClick={handleToggle}
            type="button"
            className="w-[175px] gap-x-2 h-[44px] border border-[#F2F2F2] flex items-center justify-center  bg-white rounded-xl active:scale-95	active:opacity-70"
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
        <section className="w-full px-4 block md:hidden">
          <article className="w-full search flex items-center bg-white justify-between rounded-xl font-AeonikProMedium h-12 mt-3 mb-3 border border-searchBgColor ss:mt-3">
            <div className="w-[90%] h-full flex items-center justify-between">
              <input
                type="text"
                name="name"
                placeholder="Найти товар"
                value={searchMarketName}
                onChange={handleChange}
                className="font-AeonikProRegular bg-transparent w-full px-3 h-full text-[14px] leading-4 border-r border-searchBgColor"
              />
              {searchMarketName && (
                <button onClick={handleClear} className="  " type="button">
                  <MdClose size={20} color={"#a1a1a1"} />
                </button>
              )}
            </div>
            <span
              onClick={() => getSearchClick()}
              className="w-[15%] h-full bg-btnBgColor rounded-r-xl active:scale-95 flex items-center justify-center "
            >
              <SearchIcons />
            </span>
          </article>
        </section>
      </div>
      {/* )} */}
    </main>
  );
};
export default React.memo(CategoryTopDetail);
