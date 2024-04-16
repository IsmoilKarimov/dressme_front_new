import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, ScaleControl, ZoomControl } from 'react-leaflet';
import './productLocation.css';
import 'leaflet/dist/leaflet.css';
import L, { Icon } from 'leaflet'
import { LocateControl } from './LocateControls';


function ProductLocationsShop({ locationText, data }) {
    const [map, setMap] = useState(null);
    const tileRef = useRef(null);

    useEffect(() => {
        if (!map) return;
        tileRef.current.getContainer().style.setProperty("filter", `grayscale(1)`);
    }, [map]);

    const markerIconConst = data?.shop?.url_logo_photo ? L.icon({
        iconUrl: data?.shop?.url_logo_photo,
        iconRetinaUrl: data?.shop?.url_logo_photo,
        iconAnchor: [5, 55],
        popupAnchor: [10, -44],
        iconSize: [45, 45],
    }) : null;

    const tileLayer = {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }

    return (
        <div className="w-full h-full  mapRoot  ">


            <MapContainer
                center={[locationText?.latitude, locationText?.longitude]}
                zoom={12}
                whenReady={setMap}
            >

                <TileLayer {...tileLayer} ref={tileRef} />
                {/* <ZoomControl position={'topright'} /> */}

                <ScaleControl imperial={false} />
                <Marker
                    position={[locationText?.latitude, locationText?.longitude]} icon={markerIconConst}
                >
                    <LocateControl />

                </Marker>
            </MapContainer>

        </div>
    );
}

export default ProductLocationsShop;
