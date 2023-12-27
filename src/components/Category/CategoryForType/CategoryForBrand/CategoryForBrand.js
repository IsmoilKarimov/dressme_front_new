import React, { useContext, useEffect, useState } from "react";
import { MenuCloseIcons } from "../../../../assets/icons";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import CategoriesFilter from "./FiilterForApi/CategoriesFilter";
import BudgetFilter from "./FiilterForApi/BudgetFilter";
import CategoryButtonsFilter from "./FiilterForApi/CategoryButtonsFilter";
import ColorsFilter from "./FiilterForApi/ColorsFilter";
import CustomerReviewsFilter from "./FiilterForApi/CustomerReviewsFilter";
import ClothingSizesFilter from "./FiilterForApi/ClothingSizesFilter";
import ShoesSizesFilter from "./FiilterForApi/ShoesSizesFilter";

const CategoryForBrand = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [genderId, setGenderId] = useState();
  const [discountId, setDiscountId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [budgetFrom, setBudgetFrom] = useState();
  const [budgetTo, setBudgetTo] = useState();
  const [dataAction, setDataAction] = useState(false);
  const [dataActionDiscount, setDataActionDiscount] = useState(false);
  const [filterData, setFilterData] = useState([]);

  console.log(filterData, "FILTER-DATA");

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
    minPrice: 10000,
    maxPrice: 300000,
  });

  const [values, setValues] = useState([state?.minPrice, state?.maxPrice]);

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
  const apiUrl = `https://api.dressme.uz/api/main/shops/${params?.id}`;

  const fetchGetAllData = (params) => {
    Object.entries(params).forEach((i) => {
      if (!i[1]) delete params[i[0]];
    });
    fetch(`${apiUrl}?` + new URLSearchParams(params), {
      headers: { Authorization: `Token ${Cookies.get("DressmeUserToken")}` },
    })
      .then((res) => res.json())
      .then((res) => {
        setFilterData(res);
      })
      .catch((err) => console.log(err, "ERRORLIST"));
  };

  useEffect(() => {
    fetchGetAllData({
      gender: genderId,
      discount: discountId,
      category: categoryId,
      budgetFrom: budgetFrom,
      budgetTo: budgetTo,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genderId, discountId, categoryId, budgetFrom, budgetTo]);

  const [dressInfo, setDressInfo] = useContext(dressMainData);

  function handleGetId(childData) {
    setGenderId(childData?.genderFilterId);
  }

  function handleGetDiscountId(childData) {
    setDiscountId(childData?.discountId);
  }

  function handleGetCategoryId(childData) {
    setCategoryId(childData?.categoryId);
  }

  function handleGetBudgetMinValue(childData) {
    setBudgetFrom(childData?.budgetFrom);
  }

  function handleGetBudgetMaxValue(childData) {
    setBudgetTo(childData?.budgetTo);
  }

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
        <CategoryButtonsFilter
          dataAction={dataAction}
          setDataAction={setDataAction}
          dataActionDiscount={dataActionDiscount}
          setDataActionDiscount={setDataActionDiscount}
          handleGetId={handleGetId}
          handleGetDiscountId={handleGetDiscountId}
        />

        {/* Categories */}
        <CategoriesFilter
          state={state}
          setState={setState}
          handleGetCategoryId={handleGetCategoryId}
        />

        {/* Prizes */}
        <BudgetFilter
          state={state}
          setState={setState}
          handleGetBudgetPrize={handleGetBudgetMinValue}
          handleGetBudgetPrizeTwo={handleGetBudgetMaxValue}
          values={values}
          setValues={setValues}
        />

        {/* Colors */}
        <ColorsFilter state={state} setState={setState} />

        {/* Customer reviews */}
        <CustomerReviewsFilter state={state} setState={setState} />

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
