 
import { createControlComponent } from '@react-leaflet/core';
import L from 'leaflet'
import 'leaflet.locatecontrol';
import 'leaflet.locatecontrol/dist/L.Control.Locate.css';

function createLocateInstance(props) {
  const instance = new L.Control.Locate(props);
  return instance;
}

export const LocateControl = createControlComponent(createLocateInstance);