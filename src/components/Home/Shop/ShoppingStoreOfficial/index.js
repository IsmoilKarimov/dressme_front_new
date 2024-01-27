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

  const genderId1 = (childData) => {
    setState({ ...state, genderId: { childData } || null })
    // console.log(childData, "genderId1");
  }
  const discountId1 = (childData) => {
    setState({ ...state, disCount: childData })
    // console.log(childData, "discountId1");
  }
  const categoryId1 = (childData) => {
    setState({ ...state, category: childData })
    // console.log(childData, "categoryId1");
  }
  const getBadgePrice1 = (childData) => {
    setState({ ...state, getRange: childData })
    // console.log(childData, "getBadgePrice1");
  }
  const colorHexCode1 = (childData) => {
    setState({ ...state, hexColor: childData })
    // console.log(childData, "colorHexCode1");
  }
  const customerReviews1 = (childData) => {
    setState({ ...state, customReview: childData })
    // console.log(childData, "customerReviews1");
  }
  const letterOutwearSize1 = (childData) => {
    setState({ ...state, outWearSize: childData })
    // console.log(childData, "letterOutwearSize1");
  }
  const minOutwearSize1 = (childData) => {
    setState({ ...state, outWearSizeMin: childData })
    // console.log(childData, "minOutwearSize1");
  }
  const maxOutwearSize1 = (childData) => {
    setState({ ...state, outWearSizeMax: childData })
    // console.log(childData, "maxOutwearSize1");
  }
  const letterUnderwearSize1 = (childData) => {
    setState({ ...state, underWearSize: childData })
    // console.log(childData, "letterUnderwearSize1");
  }
  const minUnderwearSize1 = (childData) => {
    setState({ ...state, underWearSizeMin: childData })
    // console.log(childData, "minUnderwearSize1");
  }
  const maxUnderwearSize1 = (childData) => {
    setState({ ...state, underWearSizeMax: childData })
    // console.log(childData, "maxUnderwearSize1");
  }
  const footwearSize1 = (childData) => {
    setState({ ...state, footWaerSize: childData })
    // console.log(childData, "footwearSize1");
  }
  console.log(state, "this state");

  // const onGetHandleValue = (data) => {
  //   console.log(data, "bures onGetHandleValue");
  // }

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
  // genderId: null,
  //   disCount: null,
  //   category: null,
  //   getRange: null,
  //   hexColor: null,
  //   customReview: null,
  //   outWearSize: null,
  //   outWearSizeMin: null,
  //   outWearSizeMax: null,
  //   underWearSize: null,
  //   underWearSizeMin: null,
  //   underWearSizeMax: null,
  //   footWaerSize: null,
  function fetchGetAllData() {
    let params = new URLSearchParams();
    params.append("location_id", dressInfo?.locationIdParams);
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
  useEffect(() => {
    fetchGetAllData()
  }, [newId, state, dressInfo?.locationIdParams])

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
                  <action className="hidden md:block md:w-[22%] h-full ss:px-4 md:px-0 ">
                    {/* <ShopOfficialBrand
                      // setFilteredData={setFilteredData}
                      // pageId={pageId}
                      filteredData={filteredData}
                      // onCallback={handleCallback}
                      OngenderId1={genderId1}
                      OndiscountId1={discountId1}
                      OncategoryId1={categoryId1}
                      OngetBadgePrice1={getBadgePrice1}
                      OncolorHexCode1={colorHexCode1}
                      OncustomerReviews1={customerReviews1}
                      OnletterOutwearSize1={letterOutwearSize1}
                      OnminOutwearSize1={minOutwearSize1}
                      OnmaxOutwearSize1={maxOutwearSize1}
                      OnletterUnderwearSize1={letterUnderwearSize1}
                      OnminUnderwearSize1={minUnderwearSize1}
                      OnmaxUnderwearSize1={maxUnderwearSize1}
                      OnfootwearSize1={footwearSize1}
                    /> */}
                    <FilterList paramsId={newId} />
                  </action>}
                <action
                  className={`w-full h-[100vh] overflow-hidden overflow-y-auto  md:hidden fixed top-0 bottom-0 left-0 right-0 ${dressInfo?.openShopIdFilter ? " ml-[1px] " : " ml-[-1000px]"
                    }   bg-white z-[105] duration-500`}
                >
                  <FilterList paramsId={newId} />
                </action>
                <action className={` ${state?.filterToggle ? 'md:w-[77%]' : "md:w-[100%]"} w-full h-full ss:px-4 md:px-0`}>
                  {filteredData ?
                    <ShopOfficialCard
                      filteredData={filteredData}
                      setPageId={setPageId}
                    /> : <div className="w-full flex items-center justify-center font-AeonikProMedium text-2xl h-[100vh] ">
                      Ничего не найдено
                    </div>}
                </action>
              </section>
            </section>
          </article>

          {/* Comment Section For Shopping Page */}
          <action className={`${openTabComment ? "block" : "hidden"} w-full `}>
            <ShowPageComment
              filteredData={filteredData}
              setOpenTabComment={setOpenTabComment}
            />
          </action>

          {/* Map Section */}
          <action
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
          </action>
        </div>
      </section>
    </main>
  );
};

export default React.memo(ShoppingStoreOfficial);
