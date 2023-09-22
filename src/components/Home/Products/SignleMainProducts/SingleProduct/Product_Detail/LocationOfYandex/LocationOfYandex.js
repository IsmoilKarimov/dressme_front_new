import React, { useEffect } from "react";
import {
  YMaps,
  Map,
  ZoomControl,
  GeolocationControl,
  Placemark,
} from "react-yandex-maps";
import "./LocationOfYandex.css";
import { markerIcons } from "../../../../../../../assets";



export default function LocationOfYandex() {
  //------------------------------------------------------------------------------------------------
  const mapState = {
    center: [41.311753, 69.241822],
    zoom: 14,
  };
  const cordinateOfMarket = [41.312922, 69.249465]
  //------------------------------------------------------------------------------------------------

  const handleOpenYandex = () => {
    window.location.replace(`https://yandex.uz/maps/10335/tashkent/?ll=${cordinateOfMarket[1]}%2C${cordinateOfMarket[0]}&mode=search&sll=${cordinateOfMarket[1]}%2C${cordinateOfMarket[0]}&text=${cordinateOfMarket[0]}%2C${cordinateOfMarket[1]}&z=15`);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className={`w-full `}>
      <div className={"mapRoot"}>
        <YMaps
          query={{
            apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21",
            lang: "uz",
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
              geometry={cordinateOfMarket}
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
                position: { bottom: 170, right: 10, },
                // size: "small",
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
      <div className="w-full flex justify-end">
        <button
          onClick={handleOpenYandex}
          className={
            "w-full md:w-fit text-center active:scale-95 px-5 py-[10px] md:py-3 bg-borderWinter text-white font-AeonikProMedium text-xs md:text-base mt-[15px] rounded-lg"
          }
        >
          Открыть на карте
        </button>
      </div>
    </div>
  );
}
