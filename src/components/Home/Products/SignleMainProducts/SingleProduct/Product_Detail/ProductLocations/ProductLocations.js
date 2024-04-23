import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ScaleControl,
  useMap,
} from "react-leaflet";
import "./productLocation.css";
import AddCopyCheckedIcon from "../AddCopyCheckedIcon/AddCopyCheckedIcon";
import "leaflet/dist/leaflet.css";
import L, { Icon } from "leaflet";
import { LocateControl } from "./LocateControls";

function ProductLocations({ locationText, data }) {
  const [map, setMap] = useState(null);
  const tileRef = useRef(null);

  useEffect(() => {
    if (!map) return;
    tileRef.current.getContainer().style.setProperty("filter", `grayscale(1)`);
  }, [map]);

  const addresRef = useRef();
  const handleCopyText = () => {
    navigator.clipboard.writeText(addresRef.current.innerText);
  };
  const [location, setLocation] = useState({
    latitude: locationText?.latitude,
    longitude: locationText?.longitude,
  });
  useEffect(() => {
    setLocation({
      latitude: locationText?.latitude,
      longitude: locationText?.longitude,
    })

  }, [data, locationText?.latitude, locationText?.longitude]);

  const markerIconConst = data?.product?.shop?.url_logo_photo
    ? L.icon({
      iconUrl: data?.product?.shop?.url_logo_photo,
      iconRetinaUrl: data?.product?.shop?.url_logo_photo,
      iconAnchor: [5, 55],
      popupAnchor: [10, -44],
      iconSize: [45, 45],
    })
    : null;

  const tileLayer = {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  };
  const handleClick = () => {
    // window.open(
    //   `https://yandex.uz/maps/10335/tashkent/?ll=${placeMarkLocation[1]}%2C${placeMarkLocation[0]}&mode=search&sll=${placeMarkLocation[1]}%2C${placeMarkLocation[0]}&text=${placeMarkLocation[0]}%2C${placeMarkLocation[1]}&z=15`,
    //   "_blank"
    // );
  };
  return (
    <div className="w-full h-full mapRoot z-[10]">


      <MapContainer
        center={[41.311151,69.264974]}
        zoom={11}
        whenReady={setMap}
      >
        <TileLayer {...tileLayer} ref={tileRef} />
        <ScaleControl imperial={false} />
        <Marker
          className="iconsForMarker"
          position={[location?.latitude, location?.longitude]}
          icon={markerIconConst}
        ></Marker>
        <LocateControl />
      </MapContainer>
    </div>
  );
}

export default ProductLocations;
