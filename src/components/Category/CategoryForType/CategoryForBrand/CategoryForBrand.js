import React, { useContext, useEffect, useState } from "react";
import { MenuCloseIcons } from "../../../../assets/icons";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { useParams } from "react-router-dom";
import CategoryGenderButtonsFilter from "./FiilterForApi/CategoryGenderButtonsFilter";
import CategoriesFilter from "./FiilterForApi/CategoriesFilter";
import BudgetFilter from "./FiilterForApi/BudgetFilter";
import ColorsFilter from "./FiilterForApi/ColorsFilter";
import CustomerReviewsFilter from "./FiilterForApi/CustomerReviewsFilter";
import FootwearSizesFilter from "./FiilterForApi/FootwearSizesFilter";
import OutwearSizesFilter from "./FiilterForApi/OutwearSizesFilter";
import UnderwearSizesFilter from "./FiilterForApi/UnderwearSizesFilter";

const CategoryForBrand = ({ setFilterData, pageId }) => {
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
  // Gender GetID
  function handleGetId(childData) {
    setGenderId(childData?.genderFilterId);
  }
  // Discount GetID
  function handleGetDiscountId(childData) {
    setDiscountId(childData?.discountId);
  }
  // Categoty GetID
  function handleGetCategoryId(childData) {
    setCategoryId(childData?.categoryId);
  }
  // Budjet GetPrize
  function getMinMaxPrice(childData) {
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

  // Shoes GET Size
  function handleWearSize(childData) {
    setFootwearSize(childData?.wearSize);
  }

  // CLEAR ALL DATA
  function clearAllFilteredData(){
    // state?.getBadgePrice: {}
  }

  const { id } = useParams();
  const newId = id.replace(":", "");
  const apiUrl = `https://api.dressme.uz/api/main/section/${newId}`;

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

  // Rating GetID
  function handleCustomerReviews(childData) {
    setCustomerReviews(childData?.ratingId);
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
        />

        {/* Categories */}
        <CategoriesFilter
          state={state}
          setState={setState}
          handleGetCategoryId={handleGetCategoryId}
          newId={newId}
          filter={filter}
        />

        {/* Prizes */}
        <BudgetFilter
          state={state}
          setState={setState}
          getMinMaxPrice={getMinMaxPrice}
          filter={filter}
        />

        {/* Colors */}
        <ColorsFilter
          state={state}
          setState={setState}
          filter={filter}
          colorHexCode={colorHexCode}
          setColorHexCode={setColorHexCode}
          handleGetColorHexCode={handleGetColorHexCode}
        />

        {/* Customer reviews */}
        <CustomerReviewsFilter
          state={state}
          setState={setState}
          filter={filter}
          handleCustomerReviews={handleCustomerReviews}
        />

        {/* Outwear sizes */}
        <OutwearSizesFilter
          state={state}
          setState={setState}
          filter={filter}
          handleOutwearSizes={handleOutwearSizes}
        />

        {/* Underwear sizes */}
        <UnderwearSizesFilter
          state={state}
          setState={setState}
          filter={filter}
          handleUnderwearSizes={handleUnderwearSizes}
        />

        {/* Shoes sizes */}
        <FootwearSizesFilter
          state={state}
          setState={setState}
          filter={filter}
          handleWearSize={handleWearSize}
        />
      </section>
      <section className=" mt-8 border-t border-searchBgColor py-5 px-3">
        <button
          type="button"
          onClick={() =>clearAllFilteredData()}
          className="h-[44px] border w-full flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-white rounded-lg active:scale-95	active:opacity-70"
        >
          Сбросить фильтр
        </button>
      </section>
    </main>
  );
};
export default React.memo(CategoryForBrand);
