import React, { useEffect, useState } from "react";
import {
  YMaps,
  Map,
  ZoomControl,
  GeolocationControl,
  Placemark,
} from "react-yandex-maps";
import "./LocationOfYandex.css";
import { markerIcons } from "../../../../../../../assets";
import AddCopyCheckedIcon from "../AddCopyCheckedIcon/AddCopyCheckedIcon";

function LocationOfYandex({ locationText }) {
  //------------------------------------------------------------------------------------------------
  const mapState = {
    center: [41.327228, 69.249023],
    zoom: 14,
  };
  //------------------------------------------------------------------------------------------------

  // const handleOpenYandex = () => {
  //   window.open(`https://yandex.uz/maps/10335/tashkent/?ll=${mapState?.center[1]}%2C${mapState?.center[0]}&mode=search&sll=${mapState?.center[1]}%2C${mapState?.center[0]}&text=${mapState?.center[0]}%2C${mapState?.center[1]}&z=15`, "_blank")

  // }
  const [copyText, setCopyText] = useState(
    "Ташкент, улица Абдуллы Кадыри, 23, "
  );

  const handleCopyText = () => {
    navigator.clipboard.writeText(copyText);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className={`w-full `}>
      <div className={`w-full flex items-center mb-3 mt-6`}>
        <div className="flex flex-col xs:flex-row xs:items-center gap-x-1 md:gap-x-[6px] ">
          {/* <span className="text-[#000] not-italic font-AeonikProMedium text-[14px] xs:text-base ">Адрес:</span> */}
          <div className="flex items-center">
            <span className="text-[#000] not-italic font-AeonikProRegular text-[14px] xs:text-base ">
              {locationText}
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
              className={"placemarkCLuster cursor-pointer"}
              // key={index}
              // onClick={() => handlePlaceMark(data?.marketId, data?.cordinate)}
              geometry={mapState?.center}
              options={{
                iconLayout: "default#image",
                iconImageHref: markerIcons,
                iconImageSize: [32, 32],
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
export default React.memo(LocationOfYandex);
