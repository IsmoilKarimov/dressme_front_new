import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import "../category.css";
import CategoryCards from "./CategoryElement/CategoryCards";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import CategoryTopDetail from "./CategoryTop/CategoryTopDetail";
import { useNavigate, useParams } from "react-router-dom";
import FilterList from "./CategoryForBrand/FilterList/FilterList";
import { MenuCloseIcons } from "../../../assets/icons";
import LoadingNetwork from "../../Loading/LoadingNetwork";
import { HomeMainDataContext } from "../../../ContextHook/HomeMainData";
import { useTranslation } from "react-i18next";
import { LanguageDetectorDress } from "../../../language/LanguageItems";
import { SaesonDetectorDress } from "../../../ContextHook/SeasonContext";

function CategoryForType() {
  const { t } = useTranslation("category");
  const [languageDetector, setLanguageDetector] = useContext(
    LanguageDetectorDress
  );
  const [seasonDetector, setSeasonDetector] = useContext(SaesonDetectorDress);

  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [filterData, setFilterData] = useState([]);
  const [pageId, setPageId] = useState(1);
  const [newFilterParamasId, setNewFilterParamasId] = useState();
  const [newFilterParamasIdCopy, setNewFilterParamasIdCopy] = useState();
  const [data, setData] = useContext(HomeMainDataContext);

  // ---
  const [getGenderId, setGetGenderId] = useState(null);
  const [getCategory, setGetCategory] = useState(null);
  const [subSection, setSubSection] = useState(null);
  const [getRating, setGetRating] = useState(null);
  const [getRange, setGetRange] = useState([]);
  const [dataColor, setDataColor] = useState([]);
  const [discount, setDiscount] = useState(false);
  const [getOutWearList, setGetOutWearList] = useState(null);
  const [getUnderWearList, setGetUnderWearList] = useState(null);
  const [getFootWearList, setGetFootWearList] = useState(null);
  const [filterToggle, setFilterToggle] = useState(false);
  const [openMobileFilter, setOpenMobileFilter] = useState(false);
  const [mobileSubSection, setMobileSubSection] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState(false);

  const [initalParamsId, setInitalParamsId] = useState(null);

  const getSubSection = (childData) => {
    setSubSection(childData);
    // setPageId(1);
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
    if (dressInfo?.openCategoryFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dressInfo?.openCategoryFilter]);

  const paramsId = useParams();
  const newId = paramsId?.id.replace(":", "");

  useLayoutEffect(() => {
    if (languageDetector?.typeLang === "uz") {
      data?.getMainProductCard?.sections?.map((item) => {
        if (
          newId?.includes(item?.name_uz?.split(" ")?.join("-")?.toLowerCase())
        ) {
          setNewFilterParamasId(item?.id);
          if (!newFilterParamasIdCopy) {
            setNewFilterParamasIdCopy(item?.id);
          }
        }
      });
    }
    if (languageDetector?.typeLang === "ru") {
      data?.getMainProductCard?.sections?.map((item) => {
        if (
          newId?.includes(item?.name_ru?.split(" ")?.join("-")?.toLowerCase())
        ) {
          setNewFilterParamasId(item?.id);
          if (!newFilterParamasIdCopy) {
            setNewFilterParamasIdCopy(item?.id);
          }
        }
      });
    }
  }, [paramsId?.id, data?.getMainProductCard?.sections]);

  const typeFilter = String(seasonDetector?.type)?.split("");
  const seasonId = Number(typeFilter?.shift());

  const headers = new Headers();
  if (languageDetector && languageDetector.typeLang) {
    headers.append("Accept-Language", languageDetector.typeLang);
  }
  const [loading, setLoading] = useState(true);
  const url = `https://api.dressme.uz/api`;
  function fetchGetAllData() {
    let params = new URLSearchParams();
    dressInfo?.mainSearchNameCategory &&
      params.append("keywords", dressInfo?.mainSearchNameCategory);
    getGenderId && params.append("gender", getGenderId);
    discount && params.append("discount", discount);
    subSection && params.append("sub_section", subSection);
    seasonId !== 5 && params.append("season", seasonId);
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
    dressInfo?.mainRegionId &&
      !dressInfo?.mainSubRegionId &&
      params.append("region", dressInfo?.mainRegionId);
    dressInfo?.mainSubRegionId &&
      params.append("sub_region", dressInfo?.mainSubRegionId);

    fetch(`${url}/main/section/${newFilterParamasId}?` + params, {
      headers: headers,
    })
      .then((res) => res.json())
      .then((res) => {
        setFilterData(res);
        setDressInfo({ ...dressInfo, filterDataProductList: res });
        setLoading(false);
       })
      .catch((err) => {
         setLoading(false);
        throw new Error(err || "something wrong");
      });
  }

  useEffect(() => {
    if (
      initalParamsId &&
      initalParamsId !== newFilterParamasId &&
      !getGenderId &&
      !getCategory &&
      !getRating &&
      !getRange?.length &&
      !dataColor?.length &&
      !discount &&
      !getOutWearList &&
      !getUnderWearList &&
      !getFootWearList &&
      !subSection
    ) {
      fetchGetAllData();
      setLoading(true);
    }
    setInitalParamsId(newFilterParamasId);
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
    dressInfo?.mainRegionId,
    dressInfo?.mainSubRegionId,
    pageId,
    discount,
    seasonId,
    dataColor?.length,
    getGenderId,
    getCategory,
    getUnderWearList,
    getOutWearList,
    getFootWearList,
    getRating,
    getRange?.min,
    getRange?.max,
    dressInfo?.mainSearchNameCategory,
    languageDetector?.typeLang,
    subSection,
  ]);

  const navigate = useNavigate();

  const handleCategories = (nameru, nameuz, id) => {
    setOpenMobileCategory(false);
    if (languageDetector?.typeLang === "uz") {
      navigate(`/section/${nameuz?.split(" ")?.join("-")?.toLowerCase()}`);
    }
    if (languageDetector?.typeLang === "ru") {
      navigate(`/section/${nameru?.split(" ")?.join("-")?.toLowerCase()}`);
    }
  };
  useEffect(() => {
    if (openMobileFilter || openMobileCategory || mobileSubSection) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMobileFilter, openMobileCategory, mobileSubSection]);
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

   useEffect(() => {
    setFilterToggle(false);
  }, [dressInfo?.mainSubRegionId, dressInfo?.mainRegionId]);

  const selectSubSection = (id) => {
    if (!subSection) {
      setSubSection(id);
    }
    if (subSection !== id) {
      setSubSection(id);
    }
  };
  const selectRemove = (id) => {
    if (subSection === id) {
      setSubSection(null);
    }
  };
  return (
    <div className="w-full">
      {loading ? (
        <div className="flex items-center justify-center w-full h-full ">
          <LoadingNetwork />
        </div>
      ) : (
        <main className="w-full h-full">
          <section className="w-full ">
            <CategoryTopDetail
              paramsId={newId}
              filterData={filterData}
              setFilterData={setFilterData}
              setFilterToggle={setFilterToggle}
              filterLeftAction={filterToggle}
              setOpenMobileFilter={setOpenMobileFilter}
              setOpenMobileCategory={setOpenMobileCategory}
              getSubSection={getSubSection}
              subSection={subSection}
              setMobileSubSection={setMobileSubSection}
            />
          </section>

          <section className="flex justify-between mb-10">
            <section
              onClick={() => {
                setOpenMobileCategory(false);
                setOpenMobileFilter(false);
                setMobileSubSection(false);
              }}
              className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${
                openMobileFilter || openMobileCategory || mobileSubSection
                  ? ""
                  : "hidden"
              }`}
            ></section>
            {/* For Mobile Versions */}
            <section
              className={`max-w-[440px] rounded-t-[12px] bg-white w-full px-4 mx-auto fixed h-[50vh] overflow-hidden z-[113] left-0 right-0 md:hidden duration-300 ${
                openMobileCategory ? "bottom-0" : "bottom-[-800px] z-0"
              }`}
            >
              <section className="h-[52px] w-full bg-btnBgColor flex items-center justify-between mb-1">
                <p className="text-[16px] font-AeonikProMedium">
                  {t("by_section")}
                </p>
                <button onClick={() => setOpenMobileCategory(false)}>
                  <MenuCloseIcons colors={"#000"} />
                </button>
              </section>
              <div className="max-w-[440px] w-[100%] h-[320px] z-[114] border-y overflow-y-auto overflow-hidden ">
                {filterData?.sections?.map((data) => {
                  return (
                    <p
                      key={data?.id}
                      onClick={() => {
                        handleCategories(
                          languageDetector?.typeLang === "ru" && data?.name_ru,
                          languageDetector?.typeLang === "uz" && data?.name_uz,
                          data?.id
                        );
                      }}
                      className={`${
                        filterData?.section?.id === data?.id
                          ? "bg-bgColor"
                          : null
                      } h-10 w-full flex items-center justify-start border-b border-searchBgColor text-[#303030]  text-base font-AeonikProRegular`}
                    >
                      {languageDetector?.typeLang === "ru" && data?.name_ru}
                      {languageDetector?.typeLang === "uz" && data?.name_uz}
                    </p>
                  );
                })}
              </div>
            </section>
            <section
              className={`max-w-[440px] rounded-t-[12px] bg-white w-full px-4 mx-auto fixed h-[50vh] overflow-hidden z-[113] left-0 right-0 md:hidden duration-300 ${
                mobileSubSection ? "bottom-0" : "bottom-[-800px] z-0"
              }`}
            >
              <section className="h-[52px] w-full bg-btnBgColor flex items-center justify-between mb-1">
                <p className="text-[16px] font-AeonikProMedium">
                  {t("bySubSection")}
                </p>
                <button onClick={() => setMobileSubSection(false)}>
                  <MenuCloseIcons colors={"#a1a1a1"} />
                </button>
              </section>
              <div className="max-w-[440px] w-[100%] h-[320px] z-[114] border-y overflow-y-auto overflow-hidden ">
                {filterData?.section?.sub_sections?.map((data) => {
                  return (
                    <button
                      onClick={() => selectSubSection(data?.id)}
                      className={`${
                        subSection === data?.id ? "bg-bgColor" : null
                      } h-12 w-full flex items-center justify-between border-b border-searchBgColor text-[#303030]  text-[14px] font-AeonikProRegular`}
                    >
                      <p
                        key={data?.id}
                        className={`  flex items-center justify-start   text-[#303030]  text-[14px] font-AeonikProRegular`}
                      >
                        {languageDetector?.typeLang === "ru" && data?.name_ru}
                        {languageDetector?.typeLang === "uz" && data?.name_uz}
                      </p>
                      {subSection === data?.id && (
                        <span onClick={() => selectRemove(data?.id)}>
                          <MenuCloseIcons colors="#a1a1a1" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
            {screenSize.width < 768 && (
              <section
                className={`max-w-[440px] w-[100%] mx-auto  fixed h-[70vh] overflow-hidden z-[113] left-0 right-0 md:hidden duration-300 ${
                  openMobileFilter ? "bottom-0" : "bottom-[-800px] z-0"
                }`}
              >
                <div className="w-full h-[70vh] z-[114] overflow-y-auto mx-auto bg-white shadow-navMenuShadov  overflow-hidden rounded-t-[12px]">
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
              </section>
            )}

            {/* For Desktop Version */}
            {screenSize.width >= 768 && (
              <article
                className={`${
                  filterToggle ? "md:block" : "md:hidden"
                } hidden  md:w-[22%] h-full pt-10 ss:px-4 md:px-0 `}
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
                  setLoading={setLoading}
                />
              </article>
            )}
            <article
              className={`${
                filterToggle ? "md:w-[77%]" : "md:w-[100%]"
              } w-full h-full px-[10px] md:px-0 `}
            >
              {filterData?.section_products?.data?.length > 0 ? (
                <CategoryCards
                  filterToggle={filterToggle}
                  paramsId={newId}
                  filterData={filterData}
                  setPageId={setPageId}
                />
              ) : (
                <div className="w-full flex items-center justify-center font-AeonikProMedium text-2xl h-[50vh] ">
                  {t("nothing_found")}
                </div>
              )}
            </article>
          </section>
          {/* )
             : (
            <div className="w-full flex items-center justify-center font-AeonikProMedium text-2xl h-[50vh] ">
              {t("nothing_found")}
            </div>
          )} */}
        </main>
      )}
    </div>
  );
}

export default React.memo(CategoryForType);
