import React, { useContext, useEffect, useState } from "react";
import "../category.css";
import CategoryCards from "./CategoryElement/CategoryCards";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import CategoryTopDetail from "./CategoryTop/CategoryTopDetail";
import { useNavigate, useParams } from "react-router-dom";
import FilterList from "./CategoryForBrand/FilterList/FilterList";
import { MenuCloseIcons } from "../../../assets/icons";

function CategoryForType() {
  const [dressInfo] = useContext(dressMainData);
  const [filterData, setFilterData] = useState([]);
  const [pageId, setPageId] = useState(1);
  // ---
  const [getGenderId, setGetGenderId] = useState(null)
  const [getCategory, setGetCategory] = useState(null)
  const [getRating, setGetRating] = useState(null)
  const [getRange, setGetRange] = useState(null)
  const [dataColor, setDataColor] = useState([])
  const [discount, setDiscount] = useState(false)
  const [getOutWearList, setGetOutWearList] = useState(null)
  const [getUnderWearList, setGetUnderWearList] = useState(null)
  const [getFootWearList, setGetFootWearList] = useState(null)
  const [filterToggle, setFilterToggle] = useState(false)
  const [openMobileFilter, setOpenMobileFilter] = useState(false)
  const [openMobileCategory, setOpenMobileCategory] = useState(false)
  console.log(openMobileFilter, "openMobileFilter")
  const toggleFilterOpen = React.useCallback(() => setFilterToggle(true), []);
  const toggleFilterClose = React.useCallback(() => setFilterToggle(false), []);

  const genderId = (childData) => {
    setGetGenderId(childData)
    setPageId(1)
  }
  function discountId(childData) {
    setDiscount(childData)
    setPageId(1)
  }
  const categoryId = (childData) => {
    setGetCategory(childData)
    setPageId(1)
  }
  const getBadgePrice = (childData) => {
    setGetRange(childData)
    setPageId(1)
  }
  const getRatingList = (childData) => {
    setGetRating(childData)
    setPageId(1)
  }
  const outWearList = (childData) => {
    setGetOutWearList(childData)
    setPageId(1)
  }
  const underWearList = (childData) => {
    setGetUnderWearList(childData)
    setPageId(1)
  }
  const footWearList = (childData) => {
    setGetFootWearList(childData)
    setPageId(1)
  }

  useEffect(() => {
    if (dressInfo?.openCategoryFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dressInfo?.openCategoryFilter]);

  const paramsId = useParams();
  const newId = paramsId?.id.replace(":", "");

  const url = `https://api.dressme.uz/api`;

  function fetchGetAllData() {
    let params = new URLSearchParams();
    getGenderId && params.append("gender", getGenderId);
    discount && params.append("discount", discount);
    getCategory && params.append("category", getCategory);
    getRating && params.append("rating", getRating);
    getFootWearList?.wear_size && params.append("footwear_size", getFootWearList?.wear_size);
    // OUTWEAR SIZES
    getOutWearList?.letter_size &&
      params.append("outwear_size[letter_size]", getOutWearList?.letter_size);
    !getOutWearList?.letter_size && getOutWearList?.min_wear_size &&
      params.append("outwear_size[min_wear_size]", getOutWearList?.min_wear_size);
    !getOutWearList?.letter_size && getOutWearList?.max_wear_size &&
      params.append("outwear_size[max_wear_size]", getOutWearList?.max_wear_size);

    // UNDERWEAR SIZES
    getUnderWearList?.letter_size &&
      params.append("underwear_size[letter_size]", getUnderWearList?.letter_size);
    !getUnderWearList?.letter_size && getUnderWearList?.min_wear_size &&
      params.append("underwear_size[min_wear_size]", getUnderWearList?.min_wear_size);
    !getUnderWearList?.letter_size && getUnderWearList?.max_wear_size &&
      params.append("underwear_size[max_wear_size]", getUnderWearList?.max_wear_size);

    pageId && params.append("page", pageId);

    getRange?.min &&
      params.append("budget[from]", getRange?.min);
    getRange?.max &&
      params.append("budget[to]", getRange?.max);
    dataColor?.length > 0 &&
      dataColor?.forEach((e, index) => {
        params.append("colors[]", dataColor[index]);
      });
    dressInfo?.mainRegionId && params.append("region", dressInfo?.mainRegionId);
    dressInfo?.mainSubRegionId &&
      params.append("sub_region", dressInfo?.mainSubRegionId);

    fetch(`${url}/main/section/${newId}?` + params)
      .then((res) => res.json())
      .then((res) => {
        setFilterData(res)
      })
      .catch((err) => console.log(err, "ERRORLIST"));
  }

  useEffect(() => {
    fetchGetAllData()
  }, [
    newId,
    dressInfo?.mainRegionId,
    dressInfo?.mainSubRegionId,
    pageId,
    discount,
    dataColor,
    getGenderId,
    discount,
    getCategory,
    getUnderWearList,
    getOutWearList,
    getFootWearList,
    getRating,
    getRange,
  ])
  const navigate = useNavigate();

  const handleCategories = (value, id) => {
    navigate(`/section/:${id}`);
  };
  return (
    <main className="w-full h-full">
      <section className="w-full ">
        <CategoryTopDetail filterData={filterData} setFilterData={setFilterData}
          toggleFilterLeftOpen={toggleFilterOpen}
          toggleFilterLeftClose={toggleFilterClose}
          filterLeftAction={filterToggle}
          setOpenMobileFilter={setOpenMobileFilter}
          setOpenMobileCategory={setOpenMobileCategory}
        />
      </section>
      <section className="flex justify-between mb-10">
        <section
          onClick={() => {
            setOpenMobileCategory(false)
            setOpenMobileFilter(false)
          }}
          className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${openMobileFilter || openMobileCategory ? "" : "hidden"
            }`}
        ></section>
        {/* For Mobile Versions */}
        <section
          className={`max-w-[440px] rounded-t-[12px] bg-white w-full px-4 mx-auto fixed h-[70vh] overflow-hidden z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${openMobileCategory ? "bottom-0" : "bottom-[-800px] z-0"
            }`}
        >
          <section className="h-[52px] w-full bg-btnBgColor flex items-center  justify-between  mb-1 ">
            <p className="text-xl font-AeonikProMedium">Под разделу</p>
            <button onClick={() => setOpenMobileCategory(false)
            }>
              <MenuCloseIcons colors={"#000"} />
            </button>
          </section>
          <div className="max-w-[440px]  w-[100%] h-[320px] z-[114]  border-y  overflow-y-auto overflow-hidden ">

            {filterData?.sections?.map((data) => {
              return (
                <p
                  key={data?.id}
                  onClick={() => {
                    handleCategories(data?.name_ru, data?.id);
                  }}
                  className={`${filterData?.section?.id === data?.id ? "bg-bgColor" : null} h-10   w-full flex items-center justify-start border-b border-searchBgColor text-[#303030]  text-base font-AeonikProRegular`}
                >
                  {data?.name_ru}
                </p>
              );
            })}
          </div>
          <action className="w-full flex items-center justify-between gap-x-3 mb-4 mt-5">
            <button
              type="button"
              onClick={() => setOpenMobileCategory(false)}
              className="w-[45%] h-[38px] text-base font-AeonikProMedium bg-white text-borderWinter border border-borderWinter rounded-md active:scale-95"
            >
              Закрыт
            </button>
            <button
              type="button"
              onClick={() => setOpenMobileCategory(false)}
              className="w-[45%] h-[38px] text-base font-AeonikProMedium bg-borderWinter text-white border border-borderWinter rounded-md active:scale-95">
              Выбрать
            </button>
          </action>
        </section>
        <section
          className={` fixed h-[70vh] overflow-hidden z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${openMobileFilter ? "bottom-0" : "bottom-[-800px] z-0"
            }`}
        >
          <div className="max-w-[440px] w-[100%] h-[70vh] z-[114]  overflow-y-auto mx-auto bg-white shadow-navMenuShadov  overflow-hidden rounded-t-[12px]">
            <FilterList
              paramsId={newId}
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
            />
          </div>
        </section>

        {/* For Desktop Version */}
        <article className={`${filterToggle ? "md:block" : "md:hidden"} hidden  md:w-[22%] h-full pt-10 ss:px-4 md:px-0 `}>
          <FilterList
            paramsId={newId}
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
        </article>
        <article className={`${filterToggle ? 'md:w-[77%]' : "md:w-[100%]"}  w-full  h-full ss:px-4 md:px-0 `}>
          <CategoryCards
            filterData={filterData}
            setPageId={setPageId}
          />
        </article>
      </section>
    </main>
  );
}

export default React.memo(CategoryForType)
