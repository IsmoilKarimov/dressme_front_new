import React, { useContext, useEffect } from "react";
// import "../category.css";
import { CatalogFilterGroup } from "./CatalogFilterGroup/CatalogFilterGroup";
import CatalogCard from "./CatalogElement/CatalogCard";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { NavLink } from "react-router-dom";
import {
  FilterIcons,
  ItailIcons,
  UnderSection,
} from "../../../../assets/icons";
import { Popover } from "antd";

let data = {};
let state = [];

export default function CatalogItems() {
  const [dressInfo] = useContext(dressMainData);

  useEffect(() => {
    if (dressInfo?.openCatalogFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dressInfo?.openCatalogFilter]);
  return (
    <main className="w-full h-full">
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
                {/* <span>
                  <ItailIcons colors={"#A1A1A1"} />
                </span> */}
              </li>
            </ul>
          </nav>

          <nav className="hidden md:flex"></nav>
        </section>
      </div>

      {/* ------------------ */}

      <section className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
        <article className="w-[100%] h-fit md:mb-12">
          <article className="w-full flex flex-col border-b md:border-none border-searchBgColor">
            <figure className="relative w-full md:h-[90px] mt-6 md:mt-0 h-fit flex flex-col md:flex-row items-center justify-between border-t-0 md:border md:border-searchBgColor rounded-b-lg px-4 md:px-0">
              {/*  */}
              <div className="w-full md:w-fit flex h-[66px] md:h-fit items-center border md:border-none border-searchBgColor rounded-b-lg">
                <div className="absolute w-[80px] md:w-[150px] h-[80px] md:h-[150px] left-[38px] md:left-[40px] rounded-full border border-searchBgColor flex items-center justify-center  bg-white">
                  <img
                    src={data?.section?.url_photo}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="flex items-center ml-[112px] md:ml-[210px]">
                  <div className="text-2xl font-AeonikProMedium">
                    {data?.section?.name_ru}
                    <span className="text-lg text-setTexOpacity font-AeonikProRegular ml-2">
                      ({data?.section_products?.total})
                    </span>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="w-full md:w-fit flex items-center justify-between md:mr-5  mt-6 md:mt-0">
                <div className="flex items-center">
                  <NavLink className="hidden md:flex items-center text-[15px] font-AeonikProMedium mr-[22px]">
                    По категории
                  </NavLink>
                  <div className="md:flex items-center hidden">
                    <Popover
                      open={state?.opensports}
                      // onOpenChange={handleOpenCategories}
                      className="w-[260px] px-4 h-[52px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
                      trigger="click"
                      options={["Hide"]}
                      // placement="bottom"
                      // content={contentCategories}
                    >
                      <span className="text-[15px] font-AeonikProMedium">
                        {data?.section?.name_ru}
                      </span>
                      <span>
                        {/* <BiChevronDown
                          size={22}
                          style={{ color: "#000" }}
                          className={`${
                            state?.opensports ? "rotate-[-180deg]" : ""
                          } duration-200`}
                        /> */}
                      </span>
                    </Popover>
                  </div>
                </div>
              </div>
            </figure>
          </article>
          <article className="w-full md:hidden flex items-center justify-between mt-6 mb-3 px-4">
            <button
              // onClick={() => setFilter(true)}
              className="h-[44px] w-[48%] select-none active:scale-95  active:opacity-70 rounded-xl border border-searchBgColor bg-btnBgColor flex items-center justify-center"
            >
              <FilterIcons colors={"#000"} />
              <p className="ml-2 not-italic  font-AeonikProMedium   text-sm leading-4 text-black tracking-[1%] cursor-pointer">
                Фильтры
              </p>
            </button>
            <button
              // onClick={() => setClothingTypes(true)}
              className="h-[44px] w-[48%] select-none active:scale-95  active:opacity-70 rounded-xl border border-searchBgColor bg-btnBgColor flex items-center justify-center"
            >
              <UnderSection />
              <p className="ml-2 not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%] cursor-pointer">
                Под раздел
              </p>
            </button>
          </article>
        </article>
        {data?.section?.sub_sections ? (
          <article className="w-full border-b border-searchBgColor">
            <article className="w-full hidden md:block mb-10">
              <ul className=" flex flex-row items-center flex-wrap gap-x-[14px] gap-y-[14px]">
                {data?.section?.sub_sections?.map((catalog, index) => (
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

      {/* ------------------- */}

      <section className="flex justify-between mb-10">
        {/* for mobile versions */}
        <article
          className={`w-full h-[100vh] overflow-hidden overflow-y-auto  md:hidden fixed top-0 bottom-0 left-0 right-0 ${
            dressInfo?.openCatalogFilter ? " ml-[1px] " : " ml-[-1000px]"
          }   bg-white z-[105] duration-500`}
        >
          <CatalogFilterGroup />
        </article>

        {/* for desctop version */}
        <article className="hidden md:block md:w-[21%] h-full mt-10 ss:px-4 md:px-0 ">
          <CatalogFilterGroup />
        </article>
        <article className="w-full md:w-[78%] h-[full] ss:px-4 md:px-0 ">
          <CatalogCard />
        </article>
      </section>
    </main>
  );
}
