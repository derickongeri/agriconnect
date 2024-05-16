import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  clickedIcon: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#c50101;' class='marker-pin-selected'></div><i class='material-icons' style='font-size: 18px; color: #5f0101'>circle</i>",
    iconSize: [30, 42],
    //iconAnchor: [15, 42],
  }),
  farmIcon: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#FFAB00;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>solar_power</i>",
    iconSize: [30, 42],
    //iconAnchor: [15, 42],
  }),
  officeIcon: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>fax</i>",
    iconSize: [30, 42],
    //iconAnchor: [15, 42],
  }),
  machineryIcon: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#C0CA33;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>factory</i>",
    iconSize: [30, 42],
    //iconAnchor: [15, 42],
  }),
  processingIcon: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#c30b82;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>conveyor_belt</i>",
    iconSize: [30, 42],
    //iconAnchor: [15, 42],
  }),
  marketIcon: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#AA00FF;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>shopping_basket</i>",
    iconSize: [30, 42],
    //iconAnchor: [15, 42],
  }),
  nurseryIcon: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#64DD17;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>eco</i>",
    iconSize: [30, 42],
    //iconAnchor: [15, 42],
  }),
  schoolIcon: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#455A64;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>school</i>",
    iconSize: [30, 42],
    //iconAnchor: [15, 42],
  }),
  weatherIcon: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#FFEB3B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color:grey'>thermostat</i>",
    iconSize: [30, 42],
    //iconAnchor: [15, 42],
  }),
  waterIcon: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#80D8FF;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>water_drop</i>",
    iconSize: [30, 42],
    //iconAnchor: [15, 42],
  }),
  digitalIcon: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#6CC8DA;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>rss_feed</i>",
    iconSize: [30, 42],
    //iconAnchor: [15, 42],
  }),
  defaultIcon: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#c50101;' class='marker-pin-selected'></div><i class='material-icons' style='font-size: 18px; color: #5f0101'>circle</i>",
    iconSize: [30, 42],
    //iconAnchor: [15, 42],
  }),
  //class2icons
  Milling_Machines: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>icon_name</i>",
    iconSize: [30, 42],
  }),
  Boreholes: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>adjust</i>",
    iconSize: [30, 42],
  }),
  biogasDigester: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#AFB42B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>compost</i>",
    iconSize: [30, 42],
  }),
  coffeeCupping: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>icon_name</i>",
    iconSize: [30, 42],
  }),
  coffeePulping: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>icon_name</i>",
    iconSize: [30, 42],
  }),
  Communication: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>wifi</i>",
    iconSize: [30, 42],
  }),
  cooperativeOffice: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#3F51B5;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>groups</i>",
    iconSize: [30, 42],
  }),
  demonstrationPlot: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>tour</i>",
    iconSize: [30, 42],
  }),
  farmerFieldSchools: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#64DD17;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>local_library</i>",
    iconSize: [30, 42],
  }),
  FertilizerTrial: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#FF9800;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>science</i>",
    iconSize: [30, 42],
  }),
  incubator: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>icon_name</i>",
    iconSize: [30, 42],
  }),
  irrigation: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#29B6F6;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>water</i>",
    iconSize: [30, 42],
  }),
  learningHub: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#E91E63;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>hub</i>",
    iconSize: [30, 42],
  }),
  marketCentre: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#E91E63;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>payments</i>",
    iconSize: [30, 42],
  }),
  moistureMeters: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#40C4FF;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>water</i>",
    iconSize: [30, 42],
  }),
  Nursery: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>icon_name</i>",
    iconSize: [30, 42],
  }),
  onionStorage: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>icon_name</i>",
    iconSize: [30, 42],
  }),
  pilateMachines: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#E91E63;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>precision_manufacturing</i>",
    iconSize: [30, 42],
  }),
  PoultryFeedsGrinder: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>icon_name</i>",
    iconSize: [30, 42],
  }),
  Processing: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>icon_name</i>",
    iconSize: [30, 42],
  }),
  projectOffice: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#E91E63;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>gite</i>",
    iconSize: [30, 42],
  }),
  QualityAssurance: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>icon_name</i>",
    iconSize: [30, 42],
  }),
  centralPulpingUnit: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>icon_name</i>",
    iconSize: [30, 42],
  }),
  screenHouse: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#21BA45;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>fence</i>",
    iconSize: [30, 42],
  }),
  SoilScanners: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>satellite</i>",
    iconSize: [30, 42],
  }),
  SolarDryers: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>icon_name</i>",
    iconSize: [30, 42],
  }),
  SolarPoweredPump: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>icon_name</i>",
    iconSize: [30, 42],
  }),
  TeaFactory: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>icon_name</i>",
    iconSize: [30, 42],
  }),
  TeaLeafAnalysisScanner: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#01579B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>icon_name</i>",
    iconSize: [30, 42],
  }),
  TeaMotherBush: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#AFB42B;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>grass</i>",
    iconSize: [30, 42],
  }),
  WeatherStation: L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#E91E63;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>thermostat</i>",
    iconSize: [30, 42],
  }),
};
