 
import { createControlComponent } from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet.locatecontrol';
import 'leaflet.locatecontrol/dist/L.Control.Locate.css';

function createLocateInstance(props) {
  // Exclude circleRadius option
  const { circleRadius, ...options } = props;

  const instance = new L.Control.Locate(options);
  return instance;
}

export const LocateControl = createControlComponent(createLocateInstance);