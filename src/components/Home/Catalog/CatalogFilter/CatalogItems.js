import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import CatalogCard from "./CatalogElement/CatalogCard";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";
import CatalogTopFilter from "./CatalogTop/CatalogTopFilter";
import FilterList from "./CatalogFilterGroup/FilterList/FilterList";
import {
  MenuCloseIcons,
  SearchIcons,
  SortIcons,
  UnderSection,
} from "../../../../assets/icons";
import { MdClose } from "react-icons/md";
import LoadingNetwork from "../../../Loading/LoadingNetwork";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";

export default function CatalogItems() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [data] = useContext(HomeMainDataContext);

  const [filterData, setFilterData] = useState([]);
  const [pageId, setPageId] = useState(1);
  const [state, setState] = useState({
    opensports: false,
    openTypesofClothes: false,
  });
  const [searchMarketName, setSearchMarketName] = useState();

  const [getGenderId, setGetGenderId] = useState(null);
  const [getCategory, setGetCategory] = useState(null);
  const [getRating, setGetRating] = useState(null);
  const [getRange, setGetRange] = useState([]);
  const [dataColor, setDataColor] = useState([]);
  const [discount, setDiscount] = useState(false);
  const [getOutWearList, setGetOutWearList] = useState(null);
  const [getUnderWearList, setGetUnderWearList] = useState(null);
  const [getFootWearList, setGetFootWearList] = useState(null);
  const [filterToggle, setFilterToggle] = useState(false);
  const [openMobileFilter, setOpenMobileFilter] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState(false);
  const [initalParamsId, setInitalParamsId] = useState(null);
  const [newFilterParamasId, setNewFilterParamasId] = useState();
  const [newFilterParamasIdCopy, setNewFilterParamasIdCopy] = useState();
  const [loading, setLoading] = useState(true);

  const handleToggle = () => {
    if (filterToggle) {
      setFilterToggle(false);
    } else {
      setFilterToggle(true);
    }
  };
  const genderId = (childData) => {
    setGetGenderId(childData);
    setPageId(1);
  };
  function discountId(childData) {
    setDiscount(childData);
    setPageId(1);
  }
  const categoryId = (childData) => {
    setGetCategory(childData);
    setPageId(1);
  };
  const getBadgePrice = (childData) => {
    setGetRange(childData);
    setPageId(1);
  };
  const getRatingList = (childData) => {
    setGetRating(childData);
    setPageId(1);
  };
  const outWearList = (childData) => {
    setGetOutWearList(childData);
    setPageId(1);
  };
  const underWearList = (childData) => {
    setGetUnderWearList(childData);
    setPageId(1);
  };
  const footWearList = (childData) => {
    setGetFootWearList(childData);
    setPageId(1);
  };

  useEffect(() => {
    if (dressInfo?.openCatalogFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dressInfo?.openCatalogFilter]);

  const navigate = useNavigate();
  const paramId = useParams();

  const newId = paramId?.id?.replace(":", "");
  // console.log(newId, 'newId');
  useLayoutEffect(() => {
    if (newId == 'taqinchoqlar-aksessuarlar') {
      setNewFilterParamasId(5)
      setNewFilterParamasIdCopy(newFilterParamasIdCopy)
    } else {
      data?.getMainProductCard?.categories?.map(item => {
        if (newId?.includes(item?.name_uz?.split(' ')?.join('-')?.toLowerCase())) {
          setNewFilterParamasId(item?.id)
          if (!newFilterParamasIdCopy) {
            setNewFilterParamasIdCopy(item?.id)
          }
        }
      })
    }
  }, [paramId?.id]);

  // console.log(newFilterParamasId, 'newFilterParamasId');
  // console.log(newFilterParamasIdCopy, 'newFilterParamasIdCopy');
  const handleOpenCategories = (newOpen) => {
    setState({ ...state, opensports: newOpen });
  };
  const handleCategories = (id, name) => {
    setState({ ...state, opensports: false });
    if (id !== 5) {
      navigate(`/categories/${name?.split(' ')?.join('-')?.toLowerCase()}`);
    }
    if (id === 5) {
      navigate(`/categories/${name?.split('/')?.map(item => item.trim())?.join('-')?.toLowerCase()}`);
    }
  };
  const contentCategories = (
    <section className="w-[230px] h-fit max-h-[350px] overflow-y-auto m-0 p-0 VerticelScroll">
      {filterData?.categories?.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleCategories(data?.id, data?.name_uz);
            }}
            className={`${Number(paramId?.id) === data?.id ? "bg-bgColor" : null
              } w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.name_ru}
          </p>
        );
      })}
    </section>
  );

  const apiUrl = `https://api.dressme.uz/api/main/category/${newFilterParamasId}`;
  // setDressInfo({ ...dressInfo, mainSearchName: searchMarketName });

  function fetchGetAllData() {
    let params = new URLSearchParams();
    dressInfo?.mainRegionId && !dressInfo?.mainSubRegionId && params.append("region", dressInfo?.mainRegionId);
    dressInfo?.mainSearchNameCatalog &&
      params.append("keywords", dressInfo?.mainSearchNameCatalog);
    dressInfo?.mainSubRegionId &&
      params.append("sub_region", dressInfo?.mainSubRegionId);
    getGenderId && params.append("gender", getGenderId);
    discount && params.append("discount", discount);
    getCategory && params.append("category", getCategory);
    getRating && params.append("rating", getRating);
    getFootWearList?.wear_size &&
      params.append("footwear_size", getFootWearList?.wear_size);
    // OUTWEAR SIZES
    getOutWearList?.letter_size &&
      params.append("outwear_size[letter_size]", getOutWearList?.letter_size);
    !getOutWearList?.letter_size &&
      getOutWearList?.min_wear_size &&
      params.append(
        "outwear_size[min_wear_size]",
        getOutWearList?.min_wear_size
      );
    !getOutWearList?.letter_size &&
      getOutWearList?.max_wear_size &&
      params.append(
        "outwear_size[max_wear_size]",
        getOutWearList?.max_wear_size
      );

    // UNDERWEAR SIZES
    getUnderWearList?.letter_size &&
      params.append(
        "underwear_size[letter_size]",
        getUnderWearList?.letter_size
      );
    !getUnderWearList?.letter_size &&
      getUnderWearList?.min_wear_size &&
      params.append(
        "underwear_size[min_wear_size]",
        getUnderWearList?.min_wear_size
      );
    !getUnderWearList?.letter_size &&
      getUnderWearList?.max_wear_size &&
      params.append(
        "underwear_size[max_wear_size]",
        getUnderWearList?.max_wear_size
      );
    pageId && params.append("page", pageId);
    getRange?.min && params.append("budget[from]", getRange?.min);
    getRange?.max && params.append("budget[to]", getRange?.max);
    dataColor?.length > 0 &&
      dataColor?.forEach((e, index) => {
        params.append("colors[]", dataColor[index]);
      });

    fetch(`${apiUrl}?` + params)
      .then((res) => res.json())
      .then((res) => {
        setFilterData(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        throw new Error(err || "something wrong");
      });
  }
  useEffect(() => {
    if (initalParamsId && initalParamsId !== newFilterParamasId && !getGenderId && !getCategory && !getRating && !getRange?.length && !dataColor?.length && !discount && !getOutWearList && !getUnderWearList && !getFootWearList) {
      fetchGetAllData();
      setLoading(true);
    }
    setInitalParamsId(newFilterParamasId)
  }, [newFilterParamasId]);

  useEffect(() => {
    if (newFilterParamasIdCopy) {
      fetchGetAllData();
    }
    if (!filterData) {
      setLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    newFilterParamasIdCopy,
    pageId,
    getGenderId,
    getCategory,
    getRating,
    getRange?.min,
    getRange?.max,
    dataColor?.length,
    discount,
    getOutWearList,
    getUnderWearList,
    getFootWearList,
    dressInfo?.mainRegionId,
    dressInfo?.mainSubRegionId,
    dressInfo?.mainSearchNameCatalog,
  ]);

  useEffect(() => {
    if (openMobileFilter || openMobileCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMobileFilter, openMobileCategory]);
  function getSearchClick() {
    setDressInfo({ ...dressInfo, mainSearchNameCatalog: searchMarketName });
  }
  const handleChange = (event) => {
    setSearchMarketName(event.target.value);
  };
  const handleClear = () => {
    setSearchMarketName("");
    setDressInfo({
      ...dressInfo,
      mainSearchName: null,
      mainSearchNameCategory: null,
      mainSearchNameCatalog: null,
    });
  };
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <main className="w-full h-full">
      {/* TOP DATA */}
      <section className="w-full h-full ">
        <CatalogTopFilter />
      </section>


      {loading ? (
        <div className="flex items-center justify-center w-full h-full ">
          <LoadingNetwork />
        </div>
      ) : (
        <section className="max-w-[1280px] w-[100%] flex justify-center items-center m-auto">
          <article className="w-[100%] h-fit ">
            <section className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
              <article className="w-[100%] h-fit md:mb-12 md:mt-8">
                <article className="w-full flex flex-col border-b md:border-none border-searchBgColor">
                  <div className="relative w-full md:h-[90px] mt-6 md:mt-0 h-fit flex flex-col md:flex-row items-center justify-between border-t-0 md:border md:border-searchBgColor rounded-b-lg px-4 md:px-0">
                    {/*  */}
                    <div className="w-full md:w-fit flex h-[66px] md:h-fit items-center border md:border-none border-searchBgColor rounded-b-lg">
                      <div
                        style={{
                          backgroundImage: `url("${filterData?.category?.url_photo}")`,
                          backgroundPosition: "center center",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                        className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[160px] overflow-hidden  left-[38px] md:left-[40px] rounded-xl border border-searchBgColor flex items-center justify-center  bg-white"
                      ></div>
                      <div className="flex items-center ml-[112px] md:ml-[210px]">
                        <div className="text-[16px] md:text-2xl font-AeonikProMedium">
                          {filterData?.category?.name_ru}
                          <span className="text-[16px] text-setTexOpacity font-AeonikProRegular ml-2 pr-3 md:pr-0">
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
                            open={state?.opensports}
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
              <div className="w-full md:hidden border-b border-searchBgColor">
                <article className="w-full md:hidden flex items-center justify-between mt-3 mb-3 px-3">
                  <button
                    onClick={() => setOpenMobileFilter(true)}
                    className="h-[48px] w-[48%] select-none active:scale-95  active:opacity-70 rounded-xl border border-searchBgColor bg-btnBgColor flex items-center justify-center"
                  >
                    <SortIcons />
                    <p className="ml-2 not-italic  font-AeonikProMedium   text-sm leading-4 text-black tracking-[1%] cursor-pointer">
                      Фильтр
                    </p>
                  </button>
                  <button
                    onClick={() => setOpenMobileCategory(true)}
                    className="h-[48px] w-[48%] select-none active:scale-95  active:opacity-70 rounded-xl border border-searchBgColor bg-btnBgColor flex items-center justify-center"
                  >
                    <UnderSection />
                    <p className="ml-2 not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%] cursor-pointer">
                      По категории
                    </p>
                  </button>
                </article>
              </div>
            </section>
            <section className="w-full px-3 flex my-3 md:hidden">
              <article className="w-full search flex items-center bg-white justify-between rounded-xl font-AeonikProMedium h-12  border border-searchBgColor ss:mt-3">
                <div className="w-[87%] h-full flex items-center justify-between">
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
                  className="w-[13%] h-full bg-btnBgColor rounded-r-xl active:scale-95 flex items-center justify-center "
                >
                  <SearchIcons />
                </span>
              </article>
            </section>
            <div className="w-full hidden md:flex items-center ">
              <button
                onClick={handleToggle}
                type="button"
                className="w-[175px] gap-x-2 h-[44px] border border-[#F2F2F2] flex items-center justify-center  bg-white rounded-lg active:scale-95	active:opacity-70"
              >
                <span className="">
                  {" "}
                  <SortIcons />
                </span>
                {filterToggle ? (
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

            <section className="flex justify-between mb-10 ">
              {/* FOR MOBILE VERSION */}
              <section
                onClick={() => {
                  setOpenMobileCategory(false);
                  setOpenMobileFilter(false);
                }}
                className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${openMobileFilter || openMobileCategory ? "" : "hidden"
                  }`}
              ></section>
              {screenSize.width < 768 && <section
                className={` fixed h-[70vh] z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${openMobileFilter ? "bottom-0" : "bottom-[-800px] z-0"}`}
              >
                <div className="max-w-[440px] w-[100%] h-[70vh] z-[114]  overflow-y-auto mx-auto bg-white shadow-navMenuShadov  overflow-hidden rounded-t-[12px]">
                  <FilterList
                    paramsId={newFilterParamasId}
                    genderId={genderId}
                    discountId={discountId}
                    categoryId={categoryId}
                    getBadgePrice={getBadgePrice}
                    setDataColor={setDataColor}
                    dataColor={dataColor}
                    getRatingList={getRatingList}
                    outWearList={outWearList}
                    underWearList={underWearList}
                    footWearList={footWearList}
                    filterToggle={filterToggle}
                    setFilterToggle={setFilterToggle}
                    openMobileFilter={openMobileFilter}
                    setOpenMobileFilter={setOpenMobileFilter}
                  />
                </div>
              </section>}
              <section
                className={`max-w-[440px] rounded-t-[12px] bg-white w-full px-4 mx-auto fixed h-[40vh] z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${openMobileCategory ? "bottom-0" : "bottom-[-800px] z-0"
                  }`}
              >
                <section className="h-[52px] w-full bg-btnBgColor flex items-center  justify-between  mb-1 ">
                  <p className="text-xl font-AeonikProMedium"> По категории</p>
                  <button onClick={() => setOpenMobileCategory(false)}>
                    <MenuCloseIcons colors={"#000"} />
                  </button>
                </section>
                <div className="max-w-[440px] w-[100%] h-[380px] z-[114]  overflow-y-auto mx-auto bg-white  overflow-hidden ">
                  {filterData?.categories?.map((data) => {
                    return (
                      <p
                        key={data?.id}
                        onClick={() => {
                          handleCategories(data?.id, data?.name_uz);
                          setOpenMobileCategory(false);
                        }}
                        className={`${Number(paramId?.id) === data?.id ? "bg-bgColor" : null
                          } h-10   w-full flex items-center justify-start border-b border-searchBgColor text-[#303030]  text-base font-AeonikProRegular`}
                      >
                        {data?.name_ru}
                      </p>
                    );
                  })}
                </div>
              </section>

              {/* FOR DESCTOP VERSION */}
              {screenSize.width >= 768 && <article
                className={`${filterToggle ? "md:block" : "md:hidden"
                  } hidden  md:w-[22%] h-full pt-10 ss:px-4 md:px-0`}
              >
                <FilterList
                  paramsId={newFilterParamasId}
                  genderId={genderId}
                  discountId={discountId}
                  categoryId={categoryId}
                  getBadgePrice={getBadgePrice}
                  setDataColor={setDataColor}
                  dataColor={dataColor}
                  getRatingList={getRatingList}
                  outWearList={outWearList}
                  underWearList={underWearList}
                  footWearList={footWearList}
                  filterToggle={filterToggle}
                  setFilterToggle={setFilterToggle}
                />
              </article>}
              <article
                className={`${filterToggle ? "md:w-[77%]" : "md:w-[100%]"
                  } w-full h-full px-[10px] md:px-0`}
              >

                <CatalogCard paramsId={newId} filterData={filterData} setPageId={setPageId} />
              </article>
            </section>
          </article>
        </section>)}

    </main>
  );
}
