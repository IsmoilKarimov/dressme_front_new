import React, { useContext, useEffect, useState } from "react";
import CatalogCard from "./CatalogElement/CatalogCard";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";
import CatalogFilterGroup from "./CatalogFilterGroup/CatalogFilterGroup";
import CatalogTopFilter from "./CatalogTop/CatalogTopFilter";

export default function CatalogItems() {
  const [dressInfo] = useContext(dressMainData);

  const [filterData, setFilterData] = useState([]);
  const [pageId, setPageId] = useState();
  const [state, setState] = useState({
    opensports: false,
    openTypesofClothes: false,
  });
  // const { paramId } = useParams()

  useEffect(() => {
    if (dressInfo?.openCatalogFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dressInfo?.openCatalogFilter]);

  const navigate = useNavigate();
  const paramId = useParams();
  const newId = paramId?.id?.replace(":", "")
  // console.log(newId, "paramId newIdfilter-Data-Category");

  const handleOpenCategories = (newOpen) => {
    setState({ ...state, opensports: newOpen });
  };
  const handleCategories = (id) => {
    setState({ ...state, opensports: false });
    navigate(`/catalog/:${id}`);
  };

  const contentCategories = (
    <section className="w-[230px] h-fit max-h-[350px] overflow-y-auto m-0 p-0 VerticelScroll">
      {filterData?.categories?.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleCategories(data?.id);
              // window.location.reload();
            }}
            className={`${newId === data?.id ? "bg-bgColor" : null
              } w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.name_ru}
          </p>
        );
      })}
    </section>
  );

  return (
    <main className="w-full h-full">
      {/* TOP DATA */}
      <section className="w-full h-full">
        <CatalogTopFilter />
      </section>
      <section className="max-w-[1280px] w-[100%] flex justify-center items-center m-auto">
        <article className="w-[100%] h-fit ">
          <section className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
            <article className="w-[100%] h-fit md:mb-12">
              <article className="w-full flex flex-col border-b md:border-none border-searchBgColor">
                <div className="relative w-full md:h-[90px] mt-6 md:mt-0 h-fit flex flex-col md:flex-row items-center justify-between border-t-0 md:border md:border-searchBgColor rounded-b-lg px-4 md:px-0">
                  {/*  */}
                  <div className="w-full md:w-fit flex h-[66px] md:h-fit items-center border md:border-none border-searchBgColor rounded-b-lg">
                    <div className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[160px] overflow-hidden  left-[38px] md:left-[40px] rounded-xl border border-searchBgColor flex items-center justify-center  bg-white">
                      <img
                        src={filterData?.category?.url_photo}
                        alt=""
                        className="w-full h-full rounded-xl object-contain"
                      />
                    </div>
                    <div className="flex items-center ml-[112px] md:ml-[210px]">
                      <div className="text-2xl font-AeonikProMedium">
                        {filterData?.category?.name_ru}
                        <span className="text-lg text-setTexOpacity font-AeonikProRegular ml-2">
                          ({filterData?.category_products?.total})
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
                          // open={state?.opensports}
                          onOpenChange={handleOpenCategories}
                          className="w-[260px] px-4 h-[52px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
                          trigger="click"
                          options={["Hide"]}
                          placement="bottom"
                          content={contentCategories}
                        >
                          <span className="text-[15px] font-AeonikProMedium">
                            {filterData?.category?.name_ru}
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
                </div>
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

          <section className="flex justify-between mb-10">
            {/* FOR MOBILE VERSION */}
            <article
              className={`w-full h-[100vh] overflow-hidden overflow-y-auto  md:hidden fixed top-0 bottom-0 left-0 right-0 ${dressInfo?.openCatalogFilter ? " ml-[1px] " : " ml-[-1000px]"
                }   bg-white z-[105] duration-500`}
            >
              <CatalogFilterGroup paramId={newId} />
            </article>

            {/* FOR DESCTOP VERSION */}
            <article className="hidden md:block md:w-[21%] h-full mt-10 ss:px-4 md:px-0 ">
              <CatalogFilterGroup
                setFilterData={setFilterData}
                pageId={pageId}
                filterData={filterData}
                paramId={newId}
              />
            </article>
            <article className="w-full md:w-[78%] h-[full] ss:px-4 md:px-0 ">
              <CatalogCard filterData={filterData} setPageId={setPageId} />
            </article>
          </section>
        </article>
      </section>
    </main >
  );
}
