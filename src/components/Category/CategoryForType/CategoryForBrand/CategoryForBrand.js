import React, { useContext, useEffect, useState } from "react";
import { MenuCloseIcons } from "../../../../assets/icons";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { useParams } from "react-router-dom";
import CategoryGenderButtonsFilter from "./FiilterForApi/CategoryGenderButtonsFilter";
import CategoriesFilter from "./FiilterForApi/CategoriesFilter";
import BudgetFilter from "./FiilterForApi/BudgetFilter";
import ColorsFilter from "./FiilterForApi/ColorsFilter";
import CustomerReviewsFilter from "./FiilterForApi/CustomerReviewsFilter";
import ClothingSizesFilter from "./FiilterForApi/ClothingSizesFilter";
import ShoesSizesFilter from "./FiilterForApi/ShoesSizesFilter";
import UnderwearSizes from "./FiilterForApi/UnderwearSizes";

const CategoryForBrand = ({ setFilterData, pageId }) => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [genderId, setGenderId] = useState();
  const [discountId, setDiscountId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [filter, setFilter] = useState();
  const [colorHexCode, setColorHexCode] = useState([]);
  const [customerReviews, setCustomerReviews] = useState();
  

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
    console.log(childData?.colorFilterHexCode);
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

  const {id} = useParams();
  const newId = id.replace(":", "");
  const apiUrl = `https://api.dressme.uz/api/main/section/${newId}`;

  const fetchGetAllData = () => {
    let params = new URLSearchParams();
    genderId && params.append("gender", genderId)
    discountId && params.append("discount", discountId)
    categoryId && params.append("category", categoryId)
    customerReviews && params.append("rating", customerReviews)
    pageId && params.append("page", pageId)
    state?.getBadgePrice?.min && params.append("budget[from]", state?.getBadgePrice?.min);
    state?.getBadgePrice?.max && params.append("budget[to]", state?.getBadgePrice?.max);
    colorHexCode?.length &&
      colorHexCode?.forEach((e, index) => {
        params.append("colors[]", colorHexCode[index]);
      });

      Object.entries(params).forEach((i) => {
        if (!i[1]) delete params[i[0]];
      });

    fetch(`${apiUrl}?` + params)
      .then((res) => res.json())
      .then((res) => {
        console.log(res?.filter, "res-data");
        setFilter(res?.filter);
        setFilterData(res);
      })
      .catch((err) => console.log(err, "ERRORLIST"));
  };

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

        {/* Clothing sizes */}
        <ClothingSizesFilter state={state} setState={setState} />

        {/* Shoes sizes */}
        <UnderwearSizes state={state} setState={setState} />
        
        {/* Shoes sizes */}
        <ShoesSizesFilter state={state} setState={setState} />
      </section>
      <section className=" mt-8 border-t border-searchBgColor py-5 px-3">
        <button
          type="button"
          className="h-[44px] border w-full flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-white rounded-lg active:scale-95	active:opacity-70"
        >
          Сбросить фильтр
        </button>
      </section>
    </main>
  );
};
export default React.memo(CategoryForBrand);
