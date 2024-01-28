import React, { useContext, useEffect, useState } from "react";
// import ShoppingStoreCategory from "./ShoppingStoreCategory/ShoppingStoreCategory";
import ShoppingStoreOfficialBreadCrumb from "./ShoppingStoreOfficialBreadcrumb/ShoppingStoreOfficialBreadcrumb";
import ShoppingStoreOfficialTop from "./ShoppingStoreOfficialTop/ShoppingStoreOfficialTop";
import LocationOfYandex from "../../Products/SignleMainProducts/SingleProduct/Product_Detail/LocationOfYandex/LocationOfYandex";
import ShowPageComment from "./ShowPageComment/ShowPageComment";
import { GoBackIcon } from "../../../../assets/icons";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../../../hook/useHttp";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";
import ShopOfficialCard from "./ShoppingStoreCategory/ShopOfficialCards/ShopOfficialCard";
import ShopOfficialBrand from "./ShoppingStoreCategory/ShopOfficialBrand/ShopOfficialBrand";
import FilterList from "./ShoppingStoreCategory/FilterList/FilterList";

const ShoppingStoreOfficial = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [data, setData] = useContext(HomeMainDataContext);

  const [openTabComment, setOpenTabComment] = useState(false);
  const [openTabLocation, setOpenTabLocation] = useState(false);
  const [filteredData, setFilteredData] = useState()
  const [pageId, setPageId] = useState()
  const { request } = useHttp()
  const [state, setState] = useState({
    genderId: null,
    disCount: null,
    category: null,
    getRange: null,
    hexColor: null,
    customReview: null,
    outWearSize: null,
    outWearSizeMin: null,
    outWearSizeMax: null,
    underWearSize: null,
    underWearSizeMin: null,
    underWearSizeMax: null,
    footWaerSize: null,
    filterToggle: false
  });
  const toggleFilterOpen = React.useCallback(() => setState({ ...state, filterToggle: true }), []);
  const toggleFilterClose = React.useCallback(() => setState({ ...state, filterToggle: false }), []);

  useEffect(() => {
    if (dressInfo?.openShopIdFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dressInfo?.openShopIdFilter]);

  const genderId = (childData) => {
    setState({ ...state, genderId: childData })
    console.log(childData, "childData-genderId");
  }
  const discountId = (childData) => {
    setState({ ...state, disCount: childData })
    console.log(childData, "childData-discountId");
  }
  const categoryId = (childData) => {
    console.log(childData, "childData-categoryId");
  }
  const getBadgePrice = (childData) => {
    console.log(childData, "childData-getBadgePrice");
  }
  const colorHexCode = (childData) => {
    console.log(childData, "childData-colorHexCode");
  }
  const ratingList = (childData) => {
    console.log(childData, "childData-ratingList");
  }
  const outWearList = (childData) => {
    console.log(childData, "childData-outWearList");
  }
  const underWearList = (childData) => {
    console.log(childData, "childData-underWearList");
  }
  const footWearList = (childData) => {
    console.log(childData, "childData-footWearList");
  }
  console.log(state, "childData--state");

  const clickButtons = {
    openTabComment,
    setOpenTabComment,
    openTabLocation,
    setOpenTabLocation,
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const { id } = useParams();
  const newId = id.replace(":", "");

  const url = `https://api.dressme.uz/api`;

  function fetchGetAllData() {
    let params = new URLSearchParams();
    params.append("location_id", 1);
    state?.genderId?.childData && params.append("gender", state?.genderId?.childData);
    state?.disCount && params.append("discount", state?.disCount);
    state?.category && params.append("category", state?.category);
    state?.customReview && params.append("rating", state?.customReview);
    state?.footWaerSize && params.append("footwear_size", state?.footWaerSize);

    // OUTWEAR SIZES
    state?.outWearSize &&
      params.append("outwear_size[letter_size]", state?.outWearSize);
    state?.outWearSizeMin &&
      params.append("outwear_size[min_wear_size]", state?.outWearSizeMin);
    state?.outWearSizeMax &&
      params.append("outwear_size[max_wear_size]", state?.outWearSizeMax);

    // UNDERWEAR SIZES
    state?.underWearSize &&
      params.append("underwear_size[letter_size]", state?.underWearSize);
    state?.underWearSizeMin &&
      params.append("underwear_size[min_wear_size]", state?.underWearSizeMin);
    state?.underWearSizeMax &&
      params.append("underwear_size[max_wear_size]", state?.underWearSizeMax);

    pageId && params.append("page", pageId);

    state?.getRange?.min &&
      params.append("budget[from]", state?.getRange?.min);
    state?.getRange?.max &&
      params.append("budget[to]", state?.getRange?.max);

    // colorHexCode?.length &&
    //   colorHexCode?.forEach((e, index) => {
    //   });
    state?.hexColor && params.append("colors[]", state?.hexColor);

    fetch(`${url}/main/shops/${newId}?` + params)
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "bures");
        setFilteredData(res)
      })
      .catch((err) => console.log(err, "ERRORLIST"));
  }
  console.log("run index ishga tushdi");

  useEffect(() => {
    fetchGetAllData()
  }, [newId, state, dressInfo?.locationIdParams])
  // <action
  return (
    <main className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
      <section className="w-full border-b border-searchBgColor ">
        <ShoppingStoreOfficialBreadCrumb name={filteredData?.shop?.name} paramsId={newId} />
      </section>
      <section className="w-full border-searchBgColor ">
        <ShoppingStoreOfficialTop
          clickButtons={clickButtons}
          filteredData={filteredData}
          toggleFilterLeftOpen={toggleFilterOpen}
          toggleFilterLeftClose={toggleFilterClose}
          filterLeftAction={state?.filterToggle}
        />
      </section>
      <section className="w-full flex items-center justify-center ">
        <div className="w-full flex flex-col items-center justify-center">
          {/* Products Section */}
          <article
            className={`${openTabComment || openTabLocation ? "hidden" : "block"
              } w-full `}
          >
            {/* <ShoppingStoreCategory filteredData={filteredData} /> */}
            <section className="w-[100%] h-fit">
              <section className="w-full flex flex-gap-6 justify-between md:my-10 my-3">
                {state?.filterToggle &&
                  <div className="hidden md:block md:w-[22%] h-full ss:px-4 md:px-0 ">
                    <FilterList
                      paramsId={newId}
                      genderId={genderId}
                      discountId={discountId}
                      categoryId={categoryId}
                      getBadgePrice={getBadgePrice}
                      ColorHex={colorHexCode}
                      ratingList={ratingList}
                      outWearList={outWearList}
                      underWearList={underWearList}
                      footWearList={footWearList}
                    />
                  </div>}
                {state?.filterToggle && <div
                  className={`w-full h-[100vh] overflow-hidden overflow-y-auto  md:hidden fixed top-0 bottom-0 left-0 right-0 ${dressInfo?.openShopIdFilter ? " ml-[1px] " : " ml-[-1000px]"
                    }   bg-white z-[105] duration-500`}
                >
                  <FilterList paramsId={newId} />
                </div>}
                <div className={` ${state?.filterToggle ? 'md:w-[77%]' : "md:w-[100%]"} w-full h-full ss:px-4 md:px-0`}>
                  {filteredData ?
                    <ShopOfficialCard
                      filteredData={filteredData}
                      setPageId={setPageId}
                    /> : <div className="w-full flex items-center justify-center font-AeonikProMedium text-2xl h-[100vh] ">
                      Ничего не найдено
                    </div>}
                </div>
              </section>
            </section>
          </article>

          {/* Comment Section For Shopping Page */}
          <div className={`${openTabComment ? "block" : "hidden"} w-full `}>
            <ShowPageComment
              filteredData={filteredData}
              setOpenTabComment={setOpenTabComment}
            />
          </div>

          {/* Map Section */}
          <div
            className={`${openTabLocation ? "block" : "hidden"
              } w-full text-3xl px-4 pb-10`}
          >
            <button
              onClick={() => {
                setOpenTabLocation(false);
              }}
              className={`flex items-center cursor-pointer justify-start md:justify-center md:border border-borderColor2 rounded-lg mr-20 md:mt-4 md:mr-5`}
            >
              <GoBackIcon />
            </button>
            <LocationOfYandex />
          </div>
        </div>
      </section>
    </main>
  );
};

export default React.memo(ShoppingStoreOfficial);
