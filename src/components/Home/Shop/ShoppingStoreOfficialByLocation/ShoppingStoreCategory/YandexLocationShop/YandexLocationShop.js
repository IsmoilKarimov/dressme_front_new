import React, { useContext, useEffect, useRef, useState } from "react";
import {
    YMaps,
    Map,
    ZoomControl,
    GeolocationControl,
    Placemark,
} from "react-yandex-maps";
import "./LocationOfYandex.css";
import AddCopyCheckedIcon from "../../../../Products/SignleMainProducts/SingleProduct/Product_Detail/AddCopyCheckedIcon/AddCopyCheckedIcon";
import { LocationIdDetector } from "../../../../../../ContextHook/LocationId";
import ProductLocationsShopByMaps from "./ProductLocations/ProductLocationsShopByMaps";

function YandexLocationShop({ filteredData }) {
    const [locationIdDetector,] = useContext(LocationIdDetector)

    //------------------------------------------------------------------------------------------------
    const [logaLocation, setLogaLocation] = useState()
    const [placeMarkLocation, setPlaceMarkLocation] = useState([])

    //------------------------------------------------------------------------------------------------
    useEffect(() => {
        filteredData?.shop?.approved_shop_locations?.map(item => {
            if (item?.id === locationIdDetector?.locationIdForTest) {
                setPlaceMarkLocation([item?.latitude, item?.longitude])
            }
        })
        setLogaLocation(filteredData?.shop?.url_logo_photo)

    }, [filteredData])
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
                                filteredData?.shop?.approved_shop_locations?.filter(e => e?.id === locationIdDetector?.locationIdForTest)?.map(item => {
                                    return (
                                        <button onClick={handleClick} key={item?.id} className="text-sm  text-borderWinter font-AeonikbuttonroRegular ">
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
                            <ProductLocationsShopByMaps locationText={item} data={filteredData} />
                        </div>
                    )
                })
            }
            {/* <div className="w-full flex justify-end">
        <button
          onClick={handleOpenYandex}
          className={
            "w-full md:w-fit text-center active:scale-95 px-5 py-[10px] md:py-3 bg-borderWinter text-white font-AeonikProMedium text-xs md:text-base mt-[15px] rounded-lg"
          }
        >
          Открыть на карте
        </button>
      </div> */}
        </div >
    );
}
export default React.memo(YandexLocationShop);
