import React, { useContext, useEffect, useRef, useState } from "react";
import {
    YMaps,
    Map,
    ZoomControl,
    GeolocationControl,
    Placemark,
} from "react-yandex-maps";
import "./LocationOfYandex.css";
// import { markerIcons } from "../../../../../../../assets";
import AddCopyCheckedIcon from "../../../../Products/SignleMainProducts/SingleProduct/Product_Detail/AddCopyCheckedIcon/AddCopyCheckedIcon";
import { markerIcons } from "../../../../../../assets";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";
// import AddCopyCheckedIcon from "../AddCopyCheckedIcon/AddCopyCheckedIcon";

function YandexLocationShop({ filteredData }) {
    const [dressInfo, setDressInfo] = useContext(dressMainData);

    //------------------------------------------------------------------------------------------------
    const [logaLocation, setLogaLocation] = useState()
    const [mapState, setMapState] = useState({
        center: [],
        zoom: 12,
    })
    //------------------------------------------------------------------------------------------------
    useEffect(() => {
        filteredData?.shop?.approved_shop_locations?.map(item => {
            if (item?.id === dressInfo?.locationIdParams) {
                setMapState({ ...mapState, center: [item?.latitude, item?.longitude] })
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
                                filteredData?.shop?.approved_shop_locations?.filter(e => e?.id === dressInfo?.locationIdParams)?.map(item => {
                                    return (
                                        <p className="text-sm font-AeonikProRegular text-borderWinter">
                                            {item?.address}
                                        </p>
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
            <div className={"mapRoot"}>
                <YMaps
                    query={{
                        apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21",
                        lang: "ru",
                    }}
                >
                    <Map
                        className={` overflow-hidden w-full h-[350px] md:h-[400px] rounded-lg productDetailsMaps`}
                        defaultState={mapState}
                        modules={["control.FullscreenControl"]}
                    >
                        <Placemark
                            className={" cursor-pointer"}
                            // key={index}
                            // onClick={() => handlePlaceMark(data?.marketId, data?.cordinate)}
                            geometry={mapState?.center}
                            options={{
                                iconLayout: "default#image",
                                // iconImageHref: markerIcons,
                                iconImageHref: logaLocation,
                                iconImageSize: [45, 45], // Set the size of your image
                            }}
                            modules={["geoObject.addon.balloon"]}
                        />
                        <ZoomControl
                            options={{
                                float: "right",
                                position: { bottom: 170, right: 10 },
                                size: "small",
                            }}
                        />{" "}
                        <GeolocationControl
                            options={{
                                float: "right",
                                position: { bottom: 120, right: 10 },
                                // size: "small",
                            }}
                        />
                    </Map>
                </YMaps>
            </div>
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
        </div>
    );
}
export default React.memo(YandexLocationShop);
