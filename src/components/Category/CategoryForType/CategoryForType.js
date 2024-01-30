import React, { useContext, useEffect, useState } from "react";
import "../category.css";
import CategoryCards from "./CategoryElement/CategoryCards";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import CategoryForBrand from "./CategoryForBrand/CategoryForBrand";
import CategoryTopDetail from "./CategoryTop/CategoryTopDetail";
import { useParams } from "react-router-dom";
import FilterList from "./CategoryForBrand/FilterList/FilterList";

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

  const { id } = useParams();
  const newId = id.replace(":", "");

  const url = `https://api.dressme.uz/api`;

  function fetchGetAllData() {
    let params = new URLSearchParams();

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
    // pageId,
    // discount,
    // dataColor,
    // getGenderId,
    // discount,
    // getCategory,
    // getUnderWearList,
    // getOutWearList,
    // getFootWearList,
    // getRating, getRange, dressInfo?.locationIdParams
  ])
  return (
    <main className="w-full h-full">
      <section className="w-full ">
        <CategoryTopDetail filterData={filterData} setFilterData={setFilterData}
          toggleFilterLeftOpen={toggleFilterOpen}
          toggleFilterLeftClose={toggleFilterClose}
          filterLeftAction={filterToggle} />
      </section>
      <section className="flex justify-between mb-10">
        {/* For Mobile Versions */}
        <article
          className={`w-full h-[100vh] overflow-hidden overflow-y-auto  md:hidden fixed top-0 bottom-0 left-0 right-0 ${dressInfo?.openCategoryFilter ? " ml-[1px] " : " ml-[-1000px]"
            }   bg-white z-[105] duration-500`}
        >
          {/* <CategoryForBrand /> */}
        </article>

        {/* For Desktop Version */}
        <article className={`${filterToggle ? "md:block" : "md:hidden"} hidden  md:w-[22%] h-full pt-10 ss:px-4 md:px-0 `}>
          {/* <CategoryForBrand pageId={pageId} filterData={filterData} /> */}
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
