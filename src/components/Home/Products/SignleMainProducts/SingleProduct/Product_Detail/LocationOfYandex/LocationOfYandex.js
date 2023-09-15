import React, { useRef, useState, useEffect } from "react";
import { YMaps, Map, ZoomControl, GeolocationControl } from "react-yandex-maps";
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
    <div className={`w-full`}>
      <p className="text-base font-AeonikProRegular mb-5">
        <span className="font-AeonikProMedium">Адрес:</span> Ташкент, Юнусобод
      </p>
      <div className="w-full h-[280px] md:h-[400px]">
        <YMaps
          query={{
            apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21",
            lang: "uz",
          }}
        >
          <Map
            className={` w-full h-full rounded-xl overflow-hidden border`}
            {...mapOptions}
            state={state}
            onLoad={setMapConstructor}
            onBoundsChange={handleBoundsChange}
            instanceRef={mapRef}
          >
            <div className="h-fit gap-x-5 mx-1 md:mx-2 left-0 right-0 flex items-center justify-between md:px-3 rounded-lg">
              <label
                htmlFor="ForSearch"
                className="w-[100%] h-full flex items-center justify-between "
              >
                <input
                  ref={searchRef}
                  className="w-full hidden outline-none text-sm font-AeonikProMedium mr-3 h-10 rounded-lg "
                />
              </label>
            </div>
            <ZoomControl
              options={{
                float: "right",
                position: { bottom: "150px", right: 10, size: "small" },
                size: "small",
              }}
            />{" "}
            <GeolocationControl
              options={{
                float: "right",
                position: { bottom: 60, right: 10 },
                size: "small",
              }}
            />
          </Map>
        </YMaps>
      </div>
      <div className="w-full flex justify-end">
        <NavLink
          to="/delivery-points"
          className={
            "w-full md:w-fit text-center px-5 py-[10px] md:py-3 bg-borderWinter text-white font-AeonikProMedium text-xs md:text-base mt-[15px] rounded-lg"
          }
        >
          Открыть на карте
        </NavLink>
      </div>
    </div>
  );
}
