import React, { useContext, useState, useEffect } from "react";
import GenderCheckFilter from "./FilterItems/GenderCheckFilter";
import { useHttp } from "../../../../../../hook/useHttp";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";
import CategoryCheckFilter from "./FilterItems/CategoryCheckFilter";
import BudgetCheckFilter from "./FilterItems/BudgetCheckFilter";
import ColorCheckFilter from "./FilterItems/ColorCheckFilter";
import RatingCheckFilter from "./FilterItems/RatingCheckFilter";
import UnderwearCheckFilter from "./FilterItems/UnderwearCheckFilter";
import OutwearCheckFilter from "./FilterItems/OutwearCheckFilter";
import FootwearCheckFilter from "./FilterItems/FootwearCheckFilter";
import SkeletonFilter from "../../SkeletonFilter/SkeletonFilter";
import { getCloseIcon } from "antd/es/notification/PurePanel";

function FilterList({
    paramsId,
    genderId,
    discountId,
    categoryId,
    getBadgePrice,
    onColorGetValueParent,
    outWearList,
    underWearList,
    footWearList,
    ratingList
}) {
    const { request } = useHttp()
    const [dressInfo, setDressInfo] = useContext(dressMainData);
    const [getFilter, setGetFilter] = useState()
    const [getColorList, setGetColorList] = useState([])
    const [AllClearList, setAllClearList] = useState()


    const { refetch } = useQuery(["get_shop_filter"], () => {
        return request({
            url: `/main/shops/filter/${paramsId}?location_id=${1}`,
            token: true,
        });
    },
        {
            onSuccess: (res) => {
                setGetFilter(res?.filter)
            },
            onError: (err) => {
                console.log(err, "get_shop_filter---Error");
            },
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        }
    );

    function onGenderGetValue(childData) { genderId(childData) }
    function onDiscountGetValue(childData) { discountId(childData) }
    function onCategoryGetValue(childData) { categoryId(childData) }
    function onBudgetGetValue(childData) { getBadgePrice(childData) }
    function onColorGetValue(childData) {
        setGetColorList(childData)
    }
    function onRatingGetValue(childData) { ratingList(childData) }
    function onUnderWearGetValue(childData) { underWearList(childData) }
    function onOutWearGetValue(childData) { outWearList(childData) }
    function onFootWearGetValue(childData) { footWearList(childData) }

    const ClearAll = () => {
        setAllClearList('null')
        genderId(null)
        discountId(null)
        categoryId(null)
        getBadgePrice([])
        ratingList(null)
        underWearList(null)
        outWearList(null)
        footWearList(null)
        // 0-----
        onGenderGetValue(null)
        onDiscountGetValue(null)
        onCategoryGetValue(null)
        onBudgetGetValue(null)
        onColorGetValue(null)
        onRatingGetValue(null)
        onUnderWearGetValue(null)
        onOutWearGetValue(null)
        onFootWearGetValue(null)
    }


    console.log(getColorList, "childData--getColorList");
    return (
        <div
            className={`w-full h-hull  py-5 px-3 rounded-lg border border-searchBgColor rounded-lg overflow-hidden `}
        >
            {getFilter ?
                <div>
                    <div className="w-full">
                        <GenderCheckFilter
                            genderList={getFilter?.gender_ids}
                            discount={getFilter?.discount}
                            onGenderGetValue={onGenderGetValue}
                            onDiscountGetValue={onDiscountGetValue}
                        />
                    </div>
                    <div className="w-full">
                        <CategoryCheckFilter
                            categoryList={getFilter?.category_ids}
                            onCategoryGetValue={onCategoryGetValue}
                            AllClearList={AllClearList}
                        />
                    </div>
                    <div className="w-full">
                        <BudgetCheckFilter
                            budgetList={getFilter?.budget}
                            onBudgetGetValue={onBudgetGetValue}
                        />
                    </div>
                    <div className="w-full">
                        <ColorCheckFilter
                            colorList={getFilter?.colors}
                            onColorGetValue={onColorGetValue}
                        />
                    </div>
                    <div className="w-full">
                        <RatingCheckFilter
                            ratingList={getFilter?.ratings}
                            onRatingGetValue={onRatingGetValue}
                        />
                    </div>
                    <div className="w-full">
                        <OutwearCheckFilter
                            OutWearList={getFilter?.wear_sizes?.outwear}
                            onOutWearGetValue={onOutWearGetValue}

                        />
                    </div>
                    <div className="w-full">
                        <UnderwearCheckFilter
                            underWearList={getFilter?.wear_sizes?.underwear}
                            onUnderWearGetValue={onUnderWearGetValue}
                        />
                    </div>
                    <div className="w-full">
                        <FootwearCheckFilter
                            footWear={getFilter?.wear_sizes?.footwear}
                            onFootWearGetValue={onFootWearGetValue}
                        />
                    </div>
                    <div className="w-full border-t border-searchBgColor py-5 px-3">
                        <button
                            type="button"
                            onClick={ClearAll}
                            className="h-[44px] border w-full flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-white rounded-lg active:scale-95	active:opacity-70"
                        >
                            Сбросить фильтр
                        </button>
                    </div>


                </div> :
                <div className="w-full h-fit">
                    <SkeletonFilter />
                </div>}
        </div>
    );
};
export default React.memo(FilterList);
