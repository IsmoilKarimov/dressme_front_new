import React, { useEffect, useRef, useState } from "react";
import {
  YMaps,
  Map,
  ZoomControl,
  GeolocationControl,
  Placemark,
} from "react-yandex-maps";
import "./LocationOfYandex.css";
import AddCopyCheckedIcon from "../AddCopyCheckedIcon/AddCopyCheckedIcon";

function LocationOfYandex({ locationText, data }) {
  const [logaLocation, setLogaLocation] = useState()
  const [placeMarkLocation, setPlaceMarkLocation] = useState([])

 
  //------------------------------------------------------------------------------------------------
  useEffect(() => {
    setLogaLocation(data?.product?.shop?.url_logo_photo)
    setPlaceMarkLocation([locationText?.latitude, locationText?.longitude])

  }, [data, locationText])  // const handleOpenYandex = () => {
  //   window.open(`https://yandex.uz/maps/10335/tashkent/?ll=${mapState?.center[1]}%2C${mapState?.center[0]}&mode=search&sll=${mapState?.center[1]}%2C${mapState?.center[0]}&text=${mapState?.center[0]}%2C${mapState?.center[1]}&z=15`, "_blank")

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
          <div className="flex items-center">
            <span
              ref={addresRef}
              className="text-[#000] not-italic font-AeonikProRegular text-[14px] xs:text-base "
            >
              {locationText?.address}
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
            state={{
              center: placeMarkLocation,
              zoom: 12,
          }}
            modules={["control.FullscreenControl"]}
          >
            <Placemark
              className={" cursor-pointer"}
           
              geometry={placeMarkLocation}
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
      
    </div>
  );
}
export default React.memo(LocationOfYandex);
