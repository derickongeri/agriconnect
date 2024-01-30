import L from "leaflet";
import "leaflet/dist/leaflet.css";

import marker1 from 'src/assets/marker1.png';
import marker2 from 'src/assets/marker2.png';
import marker3 from 'src/assets/marker3.png';
import marker4 from 'src/assets/marker4.png';
import marker5 from 'src/assets/marker5.png';
import marker6 from 'src/assets/marker6.png';

export default {
  icon1: L.icon({
    iconUrl: marker1,
    iconSize: [28, 38], // size of the icon
    // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  }),
  icon2: L.icon({
    iconUrl: marker2,
    iconSize: [28, 38], // size of the icon
    // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  }),
  icon3: L.icon({
    iconUrl: marker3,
    iconSize: [28, 38], // size of the icon
    // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  }),
  icon4: L.icon({
    iconUrl: marker4,
    iconSize: [28, 38], // size of the icon
    // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  }),
  icon5: L.icon({
    iconUrl: marker5,
    iconSize: [28, 38], // size of the icon
    // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  }),
  icon6: L.icon({
    iconUrl: marker6,
    iconSize: [28, 38], // size of the icon
    // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  }),
};
