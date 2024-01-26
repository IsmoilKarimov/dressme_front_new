import React, { useContext, useState, useEffect } from "react";
import { MenuCloseIcons } from "../../../../../../assets/icons";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";
import { useParams } from "react-router-dom";
import ShopCustomerReviewsFilter from "./StoreFilter/ShopCustomerReviewsFilter";
import ShopColorsFilter from "./StoreFilter/ShopColorsFilter";
import ShopCategoriesFilter from "./StoreFilter/ShopCategoriesFilter";
import ShopCategoryGenderButtonsFilter from "./StoreFilter/ShopCategoryGenderButtonsFilter";
import ShopBudgetFilter from "./StoreFilter/ShopBudgetFilter";
import ShopOutwearSizesFilter from "./StoreFilter/ShopOutwearSizesFilter";
import ShopUnderwearSizesFilter from "./StoreFilter/ShopUnderwearSizesFilter";
import ShopFootwearSizesFilter from "./StoreFilter/ShopFootwearSizesFilter";
import { Avatar, Skeleton, Space } from "antd";
import SkeletonFilter from "../../SkeletonFilter/SkeletonFilter";

function ShopOfficialBrand({ filteredData, onCallback,
  OngenderId1,
  OndiscountId1,
  OncategoryId1,
  OngetBadgePrice1,
  OncolorHexCode1,
  OncustomerReviews1,
  OnletterOutwearSize1,
  OnminOutwearSize1,
  OnmaxOutwearSize1,
  OnletterUnderwearSize1,
  OnminUnderwearSize1,
  OnmaxUnderwearSize1,
  OnfootwearSize1
}) {
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
  const [dataActionUnderwearSizes, setDataActionUnderwearSizes] =
    useState(false);
  const [dataActionPrizes, setDataActionPrizes] = useState(false);

  // =========================================================

  // Gender GetID
  function handleGetId(childData) {
    OngenderId1(childData)
  }
  const clearGender = React.useCallback(() => OngenderId1(null), []);


  // Discount GetID
  function handleGetDiscountId(childData) {
    // setDiscountId(childData);
    OndiscountId1(childData)
  }
  // Categoty GetID
  function handleGetCategoryId(childData) {
    // setCategoryId(childData);
    OncategoryId1(childData)
  }
  // Budjet GetPrize
  function getMinMaxPrice(childData) {
    // console.log(childData);
    // setState({ ...state, getBadgePrice: childData });
    OngetBadgePrice1(childData)
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
    OncolorHexCode1(colorHexCode)
  }
  // Rating GetID
  function handleCustomerReviews(childData) {
    // setCustomerReviews(childData);
    OncustomerReviews1(childData)

  }
  // Outwear GET Size
  function handleOutwearSizes(childData) {
    // setLetterOutwearSize(childData?.letterSize);
    // setMinOutwearSize(childData?.minSize);
    // setMaxOutwearSize(childData?.maxSize);
    // 
    OnletterOutwearSize1(childData?.letterSize)
    OnminOutwearSize1(childData?.minSize)
    OnmaxOutwearSize1(childData?.maxSize)
  }
  // Underwear GET Size
  function handleUnderwearSizes(childData) {
    // setLetterUnderwearSize(childData?.letterSize);
    // setMinUnderwearSize(childData?.minSize);
    // setMaxUnderwearSize(childData?.maxSize);
    // /---
    OnletterUnderwearSize1(childData?.letterSize)
    OnminUnderwearSize1(childData?.minSize)
    OnmaxUnderwearSize1(childData?.maxSize)
  }
  // Footwear GET Size
  function handleFootwearWearSize(childData) {
    setFootwearSize(childData);
    OnfootwearSize1(childData)
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
      // dataUz({ outwear: outwear?.letter_size })


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
      // dataUz({ underWear: underwear?.letter_size })
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
    setDataActionDiscount(false);
    // CATEGORY DATA
    handleGetCategoryId(null);
    setDataActionCategory(false);
    // BUDGET DATA
    getMinMaxPrice({ min: null, max: null });
    setDataActionPrizes(false);
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
    setDataActionUnderwearSizes(false);
    sendClearedUnderwearData();
    // FOOTWEAR SIZES DATA
    handleFootwearWearSize(null);
    setDataActionFootwearSizes(false);

    OngenderId1(null)
    OndiscountId1(null)
    OncategoryId1(null)
    OngetBadgePrice1(null)
    OncolorHexCode1(null)
    OncustomerReviews1(null)
    OnletterOutwearSize1(null)
    OnminOutwearSize1(null)
    OnmaxOutwearSize1(null)
    OnletterUnderwearSize1(null)
    OnminUnderwearSize1(null)
    OnmaxUnderwearSize1(null)
    OnfootwearSize1(null)

  }

  return (
    <main
      className={`w-full h-hull ${dressInfo?.openShopIdFilter
        ? " border-0 "
        : " border border-searchBgColor"
        } py-5 rounded-lg overflow-hidden `}
    >
      <section className="w-full px-3 flex flex-col">
        {dressInfo?.openShopIdFilter && (
          <action className="flex items-center justify-end mb-4">
            <button
              onClick={() =>
                setDressInfo({
                  ...dressInfo,
                  openShopIdFilter: false,
                })
              }
              className="w-10 h-10 rounded-lg border border-searchBgColor flex items-center justify-center active:scale-95  active:opacity-70"
            >
              <MenuCloseIcons />
            </button>
          </action>
        )}
        {filteredData?.filter ?
          <div className="w-full h-full ">
            {/* Gender Buttons */}
            <ShopCategoryGenderButtonsFilter
              handleGetId={handleGetId}
              clearGender={clearGender}
              handleGetDiscountId={handleGetDiscountId}
              filter={filteredData?.filter}
              clearAllFilteredData={clearAllFilteredData}
              dataActionGender={dataActionGender}
              setDataActionGender={setDataActionGender}
              dataActionDiscount={dataActionDiscount}
              setDataActionDiscount={setDataActionDiscount}
            />

            {/* Categories */}
            <ShopCategoriesFilter
              state={state}
              setState={setState}
              handleGetCategoryId={handleGetCategoryId}
              filter={filteredData?.filter}
              filteredData={filteredData}
              dataActionCategory={dataActionCategory}
              setDataActionCategory={setDataActionCategory}
            />

            {/* Prizes */}
            <ShopBudgetFilter
              state={state}
              setState={setState}
              getMinMaxPrice={getMinMaxPrice}
              filter={filteredData?.filter}
              dataActionColors={dataActionColors}
              setDataActionColors={setDataActionColors}
              dataActionPrizes={dataActionPrizes}
              setDataActionPrizes={setDataActionPrizes}
            />

            {/* Colors */}
            <ShopColorsFilter
              state={state}
              setState={setState}
              filter={filteredData?.filter}
              colorHexCode={colorHexCode}
              setColorHexCode={setColorHexCode}
              handleGetColorHexCode={handleGetColorHexCode}
            />

            {/* Customer reviews */}
            <ShopCustomerReviewsFilter
              state={state}
              setState={setState}
              filter={filteredData?.filter}
              handleCustomerReviews={handleCustomerReviews}
              dataActionRatings={dataActionRatings}
              setDataActionRatings={setDataActionRatings}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />

            {/* Outwear sizes */}
            <ShopOutwearSizesFilter
              state={state}
              setState={setState}
              filter={filteredData?.filter}
              dataActionOutwearSizes={dataActionOutwearSizes}
              setDataActionOutwearSizes={setDataActionOutwearSizes}
              sendOutwearSize={sendOutwearSize}
              sendClearedOutwearData={sendClearedOutwearData}
              filteredData={filteredData}

              setDataActionUnderwearSizes={setDataActionUnderwearSizes}
              setDataActionFootwearSizes={setDataActionFootwearSizes}
              sendClearedUnderwearData={sendClearedUnderwearData}
              handleFootwearWearSize={handleFootwearWearSize}
            />

            {/* Underwear sizes */}
            <ShopUnderwearSizesFilter
              state={state}
              setState={setState}
              filter={filteredData?.filter}
              handleUnderwearSizes={handleUnderwearSizes}
              dataActionUnderwearSizes={dataActionUnderwearSizes}
              setDataActionUnderwearSizes={setDataActionUnderwearSizes}
              sendUnderwearSize={sendUnderwearSize}
              sendClearedUnderwearData={sendClearedUnderwearData}
              filteredData={filteredData}

              setDataActionOutwearSizes={setDataActionOutwearSizes}
              setDataActionFootwearSizes={setDataActionFootwearSizes}
              sendClearedOutwearData={sendClearedOutwearData}
              handleFootwearWearSize={handleFootwearWearSize}
            />

            {/* Shoes sizes */}
            <ShopFootwearSizesFilter
              state={state}
              setState={setState}
              filter={filteredData?.filter}
              handleFootwearWearSize={handleFootwearWearSize}
              dataActionFootwearSizes={dataActionFootwearSizes}
              setDataActionFootwearSizes={setDataActionFootwearSizes}
              filteredData={filteredData}

              setDataActionOutwearSizes={setDataActionOutwearSizes}
              setDataActionUnderwearSizes={setDataActionUnderwearSizes}
              sendClearedOutwearData={sendClearedOutwearData}
              sendClearedUnderwearData={sendClearedUnderwearData}
            />
            <section className="border-t border-searchBgColor py-5 px-3">
              <button
                type="button"
                onClick={clearAllFilteredData}
                className="h-[44px] border w-full flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-white rounded-lg active:scale-95	active:opacity-70"
              >
                Сбросить фильтр
              </button>
            </section>
          </div>
          :
          <div className="w-full h-fit">
            <SkeletonFilter />
          </div>
        }
      </section>

    </main>
  );
};
export default React.memo(ShopOfficialBrand);
