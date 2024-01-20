import React, { useContext, useEffect, useState } from "react";
import { MenuCloseIcons } from "../../../../../assets/icons";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import { useParams } from "react-router-dom";
import CategoryGenderButtonsFilter from "./CatalogFilter/CategoryGenderButtonsFilter";
import CategoryCategoriesFilter from "./CatalogFilter/CategoryCategoriesFilter";
import CategoryBudgetFilter from "./CatalogFilter/CategoryBudgetFilter";
import CategoryColorsFilter from "./CatalogFilter/CategoryColorsFilter";
import CategoryCustomerReviewsFilter from "./CatalogFilter/CategoryCustomerReviewsFilter";
import CategoryOutwearSizesFilter from "./CatalogFilter/CategoryOutwearSizesFilter";
import CategoryUnderwearSizesFilter from "./CatalogFilter/CategoryUnderwearSizesFilter";
import CategoryFootwearSizesFilter from "./CatalogFilter/CategoryFootwearSizesFilter";

const CategoryForBrand = ({ setFilterData, pageId, filterData }) => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [genderId, setGenderId] = useState();
  const [discountId, setDiscountId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [filter, setFilter] = useState();
  const [colorHexCode, setColorHexCode] = useState([]);
  const [customerReviews, setCustomerReviews] = useState();
  // OUTWEAR
  const [letterOutwearSize, setLetterOutwearSize] = useState();
  const [minOutwearSize, setMinOutwearSize] = useState();
  const [maxOutwearSize, setMaxOutwearSize] = useState();
  // UNDERWEAR
  const [letterUnderwearSize, setLetterUnderwearSize] = useState();
  const [minUnderwearSize, setMinUnderwearSize] = useState();
  const [maxUnderwearSize, setMaxUnderwearSize] = useState();
  const [footwearSize, setFootwearSize] = useState();
  const [state, setState] = useState({
    budgetShow: screenSize.width <= 768 ? true : false,
    category: screenSize.width <= 768 ? true : false,
    ColorsShow: screenSize.width <= 768 ? true : false,
    ClothingShow: screenSize.width <= 768 ? true : false,
    customerRreviews: screenSize.width <= 768 ? true : false,
    ShoesShow: screenSize.width <= 768 ? true : false,
    UnderwearShow: screenSize.width <= 768 ? true : false,
    getBadgePrice: {},
    colorHexCode: [],
  });

  const [dataActionGender, setDataActionGender] = useState(false);
  const [dataActionDiscount, setDataActionDiscount] = useState(false);
  const [dataActionCategory, setDataActionCategory] = useState(false);
  const [dataActionColors, setDataActionColors] = useState(false);
  const [dataActionRatings, setDataActionRatings] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [dataActionFootwearSizes, setDataActionFootwearSizes] = useState(false);
  const [dataActionOutwearSizes, setDataActionOutwearSizes] = useState(false);
  const [dataActionUnderwearSizes, setDataActionUnderwearSizes] = useState(false);
  const [dataActionPrizes, setDataActionPrizes] = useState(false);

  // =========================================================

  // Gender GetID
  function handleGetId(childData) {
    console.log(childData);
    setGenderId(childData);
  }
  // Discount GetID
  function handleGetDiscountId(childData) {
    setDiscountId(childData);
  }
  // Categoty GetID
  function handleGetCategoryId(childData) {
    setCategoryId(childData);
  }
  // Budjet GetPrize
  function getMinMaxPrice(childData) {
    console.log(childData);
    setState({ ...state, getBadgePrice: childData });
  }
  // Color GetID
  function handleGetColorHexCode(childData) {
    if (colorHexCode?.length == 0) {
      setColorHexCode((colorHexCode) => [
        ...colorHexCode,
        childData?.colorFilterHexCode,
      ]);
    }
    if (
      colorHexCode?.length > 0 &&
      !colorHexCode?.includes(childData?.colorFilterHexCode)
    ) {
      setColorHexCode((colorHexCode) => [
        ...colorHexCode,
        childData?.colorFilterHexCode,
      ]);
    }
    if (
      colorHexCode?.length > 0 &&
      colorHexCode?.includes(childData?.colorFilterHexCode)
    ) {
      setColorHexCode(
        colorHexCode?.filter((e) => e !== childData?.colorFilterHexCode)
      );
    }
  }
  // Rating GetID
  function handleCustomerReviews(childData) {
    setCustomerReviews(childData);
  }
  // Outwear GET Size
  function handleOutwearSizes(childData) {
    setLetterOutwearSize(childData?.letterSize);
    setMinOutwearSize(childData?.minSize);
    setMaxOutwearSize(childData?.maxSize);
  }
  // Underwear GET Size
  function handleUnderwearSizes(childData) {
    setLetterUnderwearSize(childData?.letterSize);
    setMinUnderwearSize(childData?.minSize);
    setMaxUnderwearSize(childData?.maxSize);
  }
  // Footwear GET Size
  function handleFootwearWearSize(childData) {
    setFootwearSize(childData);
  }

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


  // ===========================================================
  // OUTWEAR
  function onGetOutwearSizes(letterSize, minSize, maxSize) {
    handleOutwearSizes({
      letterSize,
      minSize,
      maxSize,
    });
  }
  function sendOutwearSize(outwear) {
    if (outwear?.letter_size) {
      onGetOutwearSizes(outwear?.letter_size);
    }
    if (!outwear?.letter_size) {
      onGetOutwearSizes(null, outwear?.min_wear_size, outwear?.max_wear_size);
    }
  }
  function sendClearedOutwearData() {
    handleOutwearSizes(null);
  }
  // END OF OUTWEAR 

  // UNDERWEAR
  function onGetUnderwearSizes(letterSize, minSize, maxSize) {
    handleUnderwearSizes({
      letterSize,
      minSize,
      maxSize,
    });
  }
  function sendUnderwearSize(underwear) {
    if (underwear?.letter_size) {
      onGetUnderwearSizes(underwear?.letter_size);
    }

    if (!underwear?.letter_size) {
      onGetUnderwearSizes(
        null,
        underwear?.min_wear_size,
        underwear?.max_wear_size
      );
    }
  }
  function sendClearedUnderwearData() {
    handleUnderwearSizes(null);
  }
  // END OF UNDERWEAR


  // =================================================

  // CLEAR ALL DATA
  function clearAllFilteredData() {
    // GENDER DATA
    handleGetId(null);
    handleGetDiscountId(null);
    setDataActionGender(false);
    setDataActionDiscount(false)
    // CATEGORY DATA
    handleGetCategoryId(null);
    setDataActionCategory(false);
    // BUDGET DATA
    getMinMaxPrice({ min: null, max: null})
    setDataActionPrizes(false)
    // COLORS DATA
    setDataActionColors(false);
    setColorHexCode([]);
    // RATINGS DATA
    handleCustomerReviews(null);
    setDataActionRatings(false);
    setSelectedRating(null);
    // OUTWEAR SIZES DATA
    setDataActionOutwearSizes(false);
    sendClearedOutwearData();
    // UNDERWEAR SIZES
    setDataActionUnderwearSizes(false)
    sendClearedUnderwearData()
    // FOOTWEAR SIZES DATA
    handleFootwearWearSize(null);
    setDataActionFootwearSizes(false);
  }

  // =================================================

  const { id } = useParams();
  const newId = id.replace(":", "");
  const apiUrl = `https://api.dressme.uz/api/main/category/${newId}`;

  async function fetchGetAllData() {
    let params = new URLSearchParams();
    genderId && params.append("gender", genderId);
    discountId && params.append("discount", discountId);
    categoryId && params.append("category", categoryId);
    customerReviews && params.append("rating", customerReviews);
    footwearSize && params.append("footwear_size", footwearSize);

    // OUTWEAR SIZES
    letterOutwearSize &&
      params.append("outwear_size[letter_size]", letterOutwearSize);
    minOutwearSize &&
      params.append("outwear_size[min_wear_size]", minOutwearSize);
    maxOutwearSize &&
      params.append("outwear_size[max_wear_size]", maxOutwearSize);

    // UNDERWEAR SIZES
    letterUnderwearSize &&
      params.append("underwear_size[letter_size]", letterUnderwearSize);
    minUnderwearSize &&
      params.append("underwear_size[min_wear_size]", minUnderwearSize);
    maxUnderwearSize &&
      params.append("underwear_size[max_wear_size]", maxUnderwearSize);

    pageId && params.append("page", pageId);

    state?.getBadgePrice?.min &&
      params.append("budget[from]", state?.getBadgePrice?.min);
    state?.getBadgePrice?.max &&
      params.append("budget[to]", state?.getBadgePrice?.max);

    colorHexCode?.length &&
      colorHexCode?.forEach((e, index) => {
        params.append("colors[]", colorHexCode[index]);
      });

    Object.entries(params).forEach((i) => {
      if (!i[1]) delete params[i[0]];
    });

    await fetch(`${apiUrl}?` + params)
      .then((res) => res.json())
      .then((res) => {
        setFilter(res?.filter);
        setFilterData(res);
      })
      .catch((err) => console.log(err, "ERRORLIST"));
  }

  useEffect(() => {
    fetchGetAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    genderId,
    discountId,
    categoryId,
    state?.getBadgePrice,
    colorHexCode,
    customerReviews,
    // OUTWEAR
    letterOutwearSize,
    minOutwearSize,
    maxOutwearSize,
    // UNDERWEAR
    letterUnderwearSize,
    minUnderwearSize,
    maxUnderwearSize,
    footwearSize,
    pageId,
  ]);

  return (
    <main
      className={`w-full h-fit ${
        dressInfo?.openShopIdFilter
          ? " border-0 "
          : " border border-searchBgColor"
      } py-5 rounded-lg overflow-hidden`}
    >
      <section className="w-full px-3 ">
        {dressInfo?.openCategoryFilter && (
          <article className="flex items-center justify-end mb-4">
            <button
              onClick={() =>
                setDressInfo({
                  ...dressInfo,
                  openCategoryFilter: false,
                })
              }
              className="w-10 h-10 rounded-lg border border-searchBgColor flex items-center justify-center active:scale-95  active:opacity-70"
            >
              <MenuCloseIcons />
            </button>
          </article>
        )}

        {/* Gender Buttons */}
        <CategoryGenderButtonsFilter
          handleGetId={handleGetId}
          handleGetDiscountId={handleGetDiscountId}
          filter={filter}
          clearAllFilteredData={clearAllFilteredData}
          dataActionGender={dataActionGender}
          setDataActionGender={setDataActionGender}
          dataActionDiscount={dataActionDiscount}
          setDataActionDiscount={setDataActionDiscount}
        />

        {/* Categories */}
        <CategoryCategoriesFilter
          state={state}
          setState={setState}
          handleGetCategoryId={handleGetCategoryId}
          newId={newId}
          filter={filter}
          dataActionCategory={dataActionCategory}
          setDataActionCategory={setDataActionCategory}
        />

        {/* Prizes */}
        <CategoryBudgetFilter
          state={state}
          setState={setState}
          getMinMaxPrice={getMinMaxPrice}
          filter={filter}
          dataActionColors={dataActionColors}
          setDataActionColors={setDataActionColors}
          dataActionPrizes={dataActionPrizes}
          setDataActionPrizes={setDataActionPrizes}
        />

        {/* Colors */}
        <CategoryColorsFilter
          state={state}
          setState={setState}
          filter={filter}
          colorHexCode={colorHexCode}
          setColorHexCode={setColorHexCode}
          handleGetColorHexCode={handleGetColorHexCode}
        />

        {/* Customer reviews */}
        <CategoryCustomerReviewsFilter
          state={state}
          setState={setState}
          filter={filter}
          handleCustomerReviews={handleCustomerReviews}
          dataActionRatings={dataActionRatings}
          setDataActionRatings={setDataActionRatings}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />

        {/* Outwear sizes */}
        <CategoryOutwearSizesFilter
          state={state}
          setState={setState}
          filter={filter}
          dataActionOutwearSizes={dataActionOutwearSizes}
          setDataActionOutwearSizes={setDataActionOutwearSizes}
          sendOutwearSize={sendOutwearSize}
          sendClearedOutwearData={sendClearedOutwearData}
          filterData={filterData}
          setDataActionUnderwearSizes={setDataActionUnderwearSizes}
          setDataActionFootwearSizes={setDataActionFootwearSizes}
          sendClearedUnderwearData={sendClearedUnderwearData}
          handleFootwearWearSize={handleFootwearWearSize}
        />

        {/* Underwear sizes */}
        <CategoryUnderwearSizesFilter
          state={state}
          setState={setState}
          filter={filter}
          handleUnderwearSizes={handleUnderwearSizes}
          dataActionUnderwearSizes={dataActionUnderwearSizes}
          setDataActionUnderwearSizes={setDataActionUnderwearSizes}
          sendUnderwearSize={sendUnderwearSize}
          sendClearedUnderwearData={sendClearedUnderwearData}
          filterData={filterData}
          setDataActionOutwearSizes={setDataActionOutwearSizes}
          setDataActionFootwearSizes={setDataActionFootwearSizes}
          sendClearedOutwearData={sendClearedOutwearData}
          handleFootwearWearSize={handleFootwearWearSize}
        />

        {/* Shoes sizes */}
        <CategoryFootwearSizesFilter
          state={state}
          setState={setState}
          filter={filter}
          handleFootwearWearSize={handleFootwearWearSize}
          dataActionFootwearSizes={dataActionFootwearSizes}
          setDataActionFootwearSizes={setDataActionFootwearSizes}
          filterData={filterData}
          setDataActionOutwearSizes={setDataActionOutwearSizes}
          setDataActionUnderwearSizes={setDataActionUnderwearSizes}
          sendClearedOutwearData={sendClearedOutwearData}
          sendClearedUnderwearData={sendClearedUnderwearData}
        />
      </section>
      <section className=" mt-8 border-t border-searchBgColor py-5 px-3">
        <button
          type="button"
          onClick={clearAllFilteredData}
          className="h-[44px] border w-full flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-white rounded-lg active:scale-95	active:opacity-70"
        >
          Сбросить фильтр
        </button>
      </section>
    </main>
  );
};
export default React.memo(CategoryForBrand);
