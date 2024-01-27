import React, { useContext, useState, useEffect } from "react";
// import { MenuCloseIcons } from "../../../../../../assets/icons";
// import { dressMainData } from "../../../../../../ContextHook/ContextMenu";
// import { useParams } from "react-router-dom";
// import ShopCustomerReviewsFilter from "./StoreFilter/ShopCustomerReviewsFilter";
// import ShopColorsFilter from "./StoreFilter/ShopColorsFilter";
// import ShopCategoriesFilter from "./StoreFilter/ShopCategoriesFilter";
// import ShopCategoryGenderButtonsFilter from "./StoreFilter/ShopCategoryGenderButtonsFilter";
// import ShopBudgetFilter from "./StoreFilter/ShopBudgetFilter";
// import ShopOutwearSizesFilter from "./StoreFilter/ShopOutwearSizesFilter";
// import ShopUnderwearSizesFilter from "./StoreFilter/ShopUnderwearSizesFilter";
// import ShopFootwearSizesFilter from "./StoreFilter/ShopFootwearSizesFilter";
// import { Avatar, Skeleton, Space } from "antd";
// import SkeletonFilter from "../../SkeletonFilter/SkeletonFilter";
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

function FilterList({ paramsId }) {
    const { request } = useHttp()
    const [dressInfo, setDressInfo] = useContext(dressMainData);

    const { id } = useParams()
    const newId = id.replace(":", "");

    const { refetch } = useQuery(["get_shop_filter"], () => {
        return request({
            url: `/main/shops/filter/${paramsId}?location_id=${dressInfo?.locationIdParams}`,
            token: true,
        });
    },
        {
            onSuccess: (res) => {
                console.log(res, "get_shop_filter");
            },
            onError: (err) => {
                console.log(err, "get_shop_filter---Error");
            },
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        }
    );
    const wear_sizes = {
        "footwear": {
            "10": {
                "wear_size": "10",
                "amount": 1
            },
            "13": {
                "wear_size": "13",
                "amount": 1
            },
            "17": {
                "wear_size": "17",
                "amount": 2
            },
            "19": {
                "wear_size": "19",
                "amount": 2
            },
            "20": {
                "wear_size": "20",
                "amount": 2
            },
            "24": {
                "wear_size": "24",
                "amount": 1
            },
            "28": {
                "wear_size": "28",
                "amount": 2
            },
            "37": {
                "wear_size": "37",
                "amount": 2
            },
            "39": {
                "wear_size": "39",
                "amount": 2
            },
            "40": {
                "wear_size": "40",
                "amount": 3
            },
            "41": {
                "wear_size": "41",
                "amount": 1
            },
            "43": {
                "wear_size": "43",
                "amount": 2
            },
            "46": {
                "wear_size": "46",
                "amount": 1
            },
            "47": {
                "wear_size": "47",
                "amount": 1
            }
        },
        "underwear": {
            "18": {
                "letter_size": null,
                "min_wear_size": "18",
                "max_wear_size": null,
                "amount": 1
            },
            "24": {
                "letter_size": null,
                "min_wear_size": "24",
                "max_wear_size": null,
                "amount": 1
            },
            "26": {
                "letter_size": null,
                "min_wear_size": "26",
                "max_wear_size": null,
                "amount": 1
            },
            "28": {
                "letter_size": null,
                "min_wear_size": "28",
                "max_wear_size": null,
                "amount": 1
            },
            "29": {
                "letter_size": null,
                "min_wear_size": "29",
                "max_wear_size": null,
                "amount": 1
            },
            "31": {
                "letter_size": null,
                "min_wear_size": "31",
                "max_wear_size": null,
                "amount": 1
            },
            "33": {
                "letter_size": null,
                "min_wear_size": "33",
                "max_wear_size": null,
                "amount": 1
            },
            "36": {
                "letter_size": null,
                "min_wear_size": "36",
                "max_wear_size": null,
                "amount": 1
            },
            "37": {
                "letter_size": null,
                "min_wear_size": "37",
                "max_wear_size": null,
                "amount": 1
            },
            "39": {
                "letter_size": null,
                "min_wear_size": "39",
                "max_wear_size": null,
                "amount": 1
            },
            "40": {
                "letter_size": null,
                "min_wear_size": "40",
                "max_wear_size": null,
                "amount": 1
            },
            "44": {
                "letter_size": null,
                "min_wear_size": "44",
                "max_wear_size": null,
                "amount": 1
            },
            "46": {
                "letter_size": null,
                "min_wear_size": "46",
                "max_wear_size": null,
                "amount": 1
            },
            "47": {
                "letter_size": null,
                "min_wear_size": "47",
                "max_wear_size": null,
                "amount": 1
            },
            "3XL": {
                "letter_size": "3XL",
                "min_wear_size": "47",
                "max_wear_size": "71",
                "amount": 1
            },
            "L": {
                "letter_size": "L",
                "min_wear_size": "25",
                "max_wear_size": "90",
                "amount": 2
            },
            "M": {
                "letter_size": "M",
                "min_wear_size": "31",
                "max_wear_size": "94",
                "amount": 2
            },
            "S": {
                "letter_size": "S",
                "min_wear_size": "38",
                "max_wear_size": "95",
                "amount": 2
            },
            "XL": {
                "letter_size": "XL",
                "min_wear_size": "18",
                "max_wear_size": "97",
                "amount": 2
            },
            "XS": {
                "letter_size": "XS",
                "min_wear_size": "27",
                "max_wear_size": "62",
                "amount": 4
            }
        },
        "outwear": {
            "11": {
                "letter_size": null,
                "min_wear_size": "11",
                "max_wear_size": null,
                "amount": 1
            },
            "15": {
                "letter_size": null,
                "min_wear_size": "15",
                "max_wear_size": null,
                "amount": 1
            },
            "18": {
                "letter_size": null,
                "min_wear_size": "18",
                "max_wear_size": null,
                "amount": 1
            },
            "21": {
                "letter_size": null,
                "min_wear_size": "21",
                "max_wear_size": null,
                "amount": 1
            },
            "24": {
                "letter_size": null,
                "min_wear_size": "24",
                "max_wear_size": null,
                "amount": 1
            },
            "27": {
                "letter_size": null,
                "min_wear_size": "27",
                "max_wear_size": null,
                "amount": 1
            },
            "28": {
                "letter_size": null,
                "min_wear_size": "28",
                "max_wear_size": null,
                "amount": 1
            },
            "33": {
                "letter_size": null,
                "min_wear_size": "33",
                "max_wear_size": null,
                "amount": 1
            },
            "35": {
                "letter_size": null,
                "min_wear_size": "35",
                "max_wear_size": null,
                "amount": 1
            },
            "36": {
                "letter_size": null,
                "min_wear_size": "36",
                "max_wear_size": null,
                "amount": 1
            },
            "38": {
                "letter_size": null,
                "min_wear_size": "38",
                "max_wear_size": null,
                "amount": 2
            },
            "41": {
                "letter_size": null,
                "min_wear_size": "41",
                "max_wear_size": null,
                "amount": 1
            },
            "43": {
                "letter_size": null,
                "min_wear_size": "43",
                "max_wear_size": null,
                "amount": 1
            },
            "44": {
                "letter_size": null,
                "min_wear_size": "44",
                "max_wear_size": null,
                "amount": 4
            },
            "45": {
                "letter_size": null,
                "min_wear_size": "45",
                "max_wear_size": null,
                "amount": 1
            },
            "49": {
                "letter_size": null,
                "min_wear_size": "49",
                "max_wear_size": null,
                "amount": 1
            },
            "2XL": {
                "letter_size": "2XL",
                "min_wear_size": "24",
                "max_wear_size": "67",
                "amount": 2
            },
            "3XL": {
                "letter_size": "3XL",
                "min_wear_size": "27",
                "max_wear_size": "57",
                "amount": 1
            },
            "L": {
                "letter_size": "L",
                "min_wear_size": "38",
                "max_wear_size": "50",
                "amount": 2
            },
            "M": {
                "letter_size": "M",
                "min_wear_size": "43",
                "max_wear_size": "65",
                "amount": 1
            },
            "XL": {
                "letter_size": "XL",
                "min_wear_size": "30",
                "max_wear_size": "53",
                "amount": 2
            },
            "XS": {
                "letter_size": "XS",
                "min_wear_size": "36",
                "max_wear_size": "55",
                "amount": 2
            },
            "XXS": {
                "letter_size": "XXS",
                "min_wear_size": "35",
                "max_wear_size": "78",
                "amount": 9
            }
        }
    }
    // /shops/filter/:id?location_id=1
    return (
        <main
            className={`w-full h-hull  py-5 px-3 rounded-lg border border-searchBgColor rounded-lg overflow-hidden `}
        >
            <div className="w-full">
                <GenderCheckFilter />
            </div>
            <div className="w-full">
                <CategoryCheckFilter />
            </div>
            <div className="w-full">
                <BudgetCheckFilter />
            </div>
            <div className="w-full">
                <ColorCheckFilter />
            </div>
            <div className="w-full">
                <RatingCheckFilter />
            </div>
            <div className="w-full">
                <UnderwearCheckFilter underWearList={wear_sizes?.underwear} />
            </div>
            <div className="w-full">
                <OutwearCheckFilter OutWearList={wear_sizes?.outwear} />
            </div>
            <div className="w-full">
                <FootwearCheckFilter footWear={wear_sizes?.footwear} />
            </div>


        </main>
    );
};
export default React.memo(FilterList);
