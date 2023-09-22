import React, { useRef, useState, useEffect } from "react";
import {
  YMaps,
  Map,
  ZoomControl,
  GeolocationControl,
} from "react-yandex-maps";
import { clsx } from "clsx";
// import "./LocationOfYandex.css";
import { NavLink } from "react-router-dom";

const mapOptions = {
  modules: ["geocode", "SuggestView"],
  defaultOptions: { suppressMapOpenBlock: true },
};

const initialState = {
  title: "",
  center: [41.311151, 69.279737],
  zoom: 12,
};

export default function LocationOfYandex() {
  const [state, setState] = useState({ ...initialState });
  const [mapConstructor, setMapConstructor] = useState(null);
  const mapRef = useRef(null);
  const searchRef = useRef(null);

  // search popup
  useEffect(() => {
    if (mapConstructor) {
      new mapConstructor.SuggestView(searchRef.current).events.add(
        "select",
        function (e) {
          const selectedName = e.get("item").value;
          mapConstructor.geocode(selectedName).then((result) => {
            const newCoords = result.geoObjects
              .get(0)
              .geometry.getCoordinates();
            setState((prevState) => ({ ...prevState, center: newCoords }));
          });
        }
      );
    }
  }, [mapConstructor]);

  // change title
  const handleBoundsChange = (e) => {
    const newCoords = mapRef.current.getCenter();
    mapConstructor.geocode(newCoords).then((res) => {
      const nearest = res.geoObjects.get(0);
      const foundAddress = nearest.properties.get("text");
      const [centerX, centerY] = nearest.geometry.getCoordinates();
      const [initialCenterX, initialCenterY] = initialState.center;
      if (centerX !== initialCenterX && centerY !== initialCenterY) {
        setState((prevState) => ({ ...prevState, title: foundAddress }));
      }
    });
  };

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
            {...mapOptions}
            state={state}
            onLoad={setMapConstructor}
            onBoundsChange={handleBoundsChange}
            instanceRef={mapRef}
          >
            <div className="h-fit p-1 md:p-[10px] absolute top-2 z-40 gap-x-5 mx-1 md:mx-2 backdrop-blur-sm bg-yandexNavbar left-0 right-0 hidden items-center justify-between border px-1 md:px-3 rounded-lg">
              <label
                htmlFor="ForSearch"
                className="w-[100%] h-full hidden items-center justify-between bg-white  border border-textLightColor px-1 md:px-3 rounded-lg"
              >
                {!Boolean(state.title.length) && (
                  <input
                    ref={searchRef} 
                  />
                )}
                <div
                  className={clsx(["titleBox"], {
                    ["titleBox_show"]: Boolean(state.title.length),
                  })}
                >
                  <p className=" w-[90%] ">{state.title} </p>
                </div>
              </label>
              
            </div>

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
        <NavLink
          to="#"
          className={
            "w-full md:w-fit text-center active:scale-95 px-5 py-[10px] md:py-3 bg-borderWinter text-white font-AeonikProMedium text-xs md:text-base mt-[15px] rounded-lg"
          }
        >
          Открыть на карте
        </NavLink>
      </div>
    </div>
  );
}
