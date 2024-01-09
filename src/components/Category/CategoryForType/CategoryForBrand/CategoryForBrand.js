import React, { useContext, useEffect, useState } from "react";
import { MenuCloseIcons } from "../../../../assets/icons";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import CategoryGenderButtonsFilter from "./FiilterForApi/CategoryGenderButtonsFilter";
import CategoriesFilter from "./FiilterForApi/CategoriesFilter";
import BudgetFilter from "./FiilterForApi/BudgetFilter";
import ColorsFilter from "./FiilterForApi/ColorsFilter";
import CustomerReviewsFilter from "./FiilterForApi/CustomerReviewsFilter";
import ClothingSizesFilter from "./FiilterForApi/ClothingSizesFilter";
import ShoesSizesFilter from "./FiilterForApi/ShoesSizesFilter";

const CategoryForBrand = ({ setFilterData }) => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [genderId, setGenderId] = useState();
  const [discountId, setDiscountId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [filter, setFilter] = useState();
  const [colorHexCode, setColorHexCode] = useState();
  const [customerReviews, setCustomerReviews] = useState();

  const [state, setState] = useState({
    brandShow: screenSize.width <= 768 ? true : false,
    budgetShow: screenSize.width <= 768 ? true : false,
    ColorsShow: screenSize.width <= 768 ? true : false,
    ClothingShow: screenSize.width <= 768 ? true : false,
    TrouserShow: screenSize.width <= 768 ? true : false,
    ShoesShow: screenSize.width <= 768 ? true : false,
    customerRreviews: screenSize.width <= 768 ? true : false,
    availability: screenSize.width <= 768 ? true : false,
    category: screenSize.width <= 768 ? true : false,
    //--//--//--//--//--//--//--//
    checkBrand: false,
    checkedPrize: true,
    getBadgePrice: {},
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
    setColorHexCode(childData?.colorFilterHexCode);
  }

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

  const params = useParams();
  const id = params?.id.replace(':','')
  const apiUrl = `https://api.dressme.uz/api/main/section/${id}`;

  const fetchGetAllData = (params) => {
    const urlParams = new URLSearchParams();
    if ("budget[from]") {
      urlParams.set("budget[from]", "budget[from]");
    }
    if ("budget[to]") {
      urlParams.set("budget[to]", "budget[to]");
    }
    if ("colors[]") {
      urlParams.set("colors[]", "colors[]");
    }

    // Replace the current URL with the updated query parameters
    window.history.replaceState({}, "", `?${urlParams.toString()}`);

    Object.entries(params).forEach((i) => {
      if (!i[1]) delete params[i[0]];
    });

    fetch(`${apiUrl}?` + new URLSearchParams(params), {
      headers: { Authorization: `Token ${Cookies.get("DressmeUserToken")}` },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res?.filter, "res-data");
        setFilter(res?.filter);
        setFilterData(res);
      })
      .catch((err) => console.log(err, "ERRORLIST"));
  };

  useEffect(() => {
    fetchGetAllData({
      gender: genderId,
      discount: discountId,
      category: categoryId,
      "budget[from]": state?.getBadgePrice?.min,
      "budget[to]": state?.getBadgePrice?.max,
      "colors[]": colorHexCode,
      rating: customerReviews,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    genderId,
    discountId,
    categoryId,
    state?.getBadgePrice,
    colorHexCode,
    customerReviews,
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
        />

        {/* Categories */}
        <CategoriesFilter
          state={state}
          setState={setState}
          handleGetCategoryId={handleGetCategoryId}
          params={params}
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
        <ShoesSizesFilter state={state} setState={setState} />
      </section>
      <section className=" mt-8 border-t border-searchBgColor py-5 px-3">
        <button className="h-[44px] border w-full flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-white rounded-lg active:scale-95	active:opacity-70">
          Сбросить фильтр
        </button>
      </section>
    </main>
  );
};
export { CategoryForBrand };
