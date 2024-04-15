import React, { useContext, useEffect, useRef, useState } from "react";

import "./LocationOfYandex.css";
import AddCopyCheckedIcon from "../../../../Products/SignleMainProducts/SingleProduct/Product_Detail/AddCopyCheckedIcon/AddCopyCheckedIcon";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";
import { LocationIdDetector } from "../../../../../../ContextHook/LocationId";
 import ProductLocationsShop from "./ProductLocations/ProductLocationsShop";
function YandexLocationShopFilter({ filteredData }) {
    const [dressInfo] = useContext(dressMainData);
    const [locationIdDetector, setLocationIdDetector] = useContext(LocationIdDetector)
    //------------------------------------------------------------------------------------------------
     const [placeMarkLocation, setPlaceMarkLocation] = useState([])
    //------------------------------------------------------------------------------------------------
    useEffect(() => {
        filteredData?.shop?.approved_shop_locations?.map(item => {
            if (Number(item?.id) === locationIdDetector?.locationIdForTest) {
                setPlaceMarkLocation([item?.latitude, item?.longitude])
            }
        })
    }, [filteredData, locationIdDetector?.locationIdForTest])

    const addresRef = useRef();
    const handleCopyText = () => {
        navigator.clipboard.writeText(addresRef.current.innerText);
    };
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);
    const handleClick = () => {
         window.open(`https://yandex.uz/maps/10335/tashkent/?ll=${placeMarkLocation[1]}%2C${placeMarkLocation[0]}&mode=search&sll=${placeMarkLocation[1]}%2C${placeMarkLocation[0]}&text=${placeMarkLocation[0]}%2C${placeMarkLocation[1]}&z=15`, "_blank")
     };
    return (
        <div className={`w-full `}>
            <div className={`w-full flex items-center mb-3 mt-4`}>
                <div className="flex flex-col xs:flex-row xs:items-center gap-x-1 md:gap-x-[6px] ">
                    {/* <span className="text-[#000] not-italic font-AeonikProMedium text-[14px] xs:text-base ">Адрес:</span> */}
                    <div className="flex items-center">
                        <span
                            ref={addresRef}
                            className="text-[#000] not-italic font-AeonikProRegular text-[14px] xs:text-base "
                        >
                            {
                                filteredData?.shop?.approved_shop_locations?.filter(e => e?.id === locationIdDetector?.locationIdForTest)?.map((item, index) => {
                                    return (
                                        <button onClick={handleClick} key={index} className="text-sm  text-borderWinter font-AeonikbuttonroRegular ">
                                            {item?.address}
                                        </button>
                                    )
                                })
                            }
                        </span>
                        <button
                            type="button"
                            onClick={handleCopyText}
                            className="cursor-pointer ml-[8px]"
                        >
                            <AddCopyCheckedIcon />
                        </button>
                    </div>
                </div>
            </div>
            {
                filteredData?.shop?.approved_shop_locations?.filter(e => e?.id == locationIdDetector?.locationIdForTest)?.map((item, index) => {
                    return (
                        <div className={"w-full h-[400px] "}>
                            <ProductLocationsShop locationText={item} data={filteredData} />
                        </div>
                    )
                })
            }

        </div>
    );
}
export default React.memo(YandexLocationShopFilter);
