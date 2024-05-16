import { useInfrastructureStore } from "src/stores/infrustructue";
import markers from "./set_markers.js";
import { axios } from "src/boot/axios";

const {
  waterIcon,
  weatherIcon,
  schoolIcon,
  nurseryIcon,
  officeIcon,
  farmIcon,
  machineryIcon,
  processingIcon,
  marketIcon,
  digitalIcon,
  defaultIcon,
  clickedIcon,
  icon6,
  Milling_Machines,
  Boreholes,
  biogasDigester,
  coffeeCupping,
  coffeePulping,
  Communication,
  cooperativeOffice,
  demonstrationPlot,
  farmerFieldSchools,
  FertilizerTrial,
  incubator,
  irrigation,
  learningHub,
  marketCentre,
  moistureMeters,
  Nursery,
  onionStorage,
  pilateMachines,
  PoultryFeedsGrinder,
  Processing,
  projectOffice,
  QualityAssurance,
  centralPulpingUnit,
  screenHouse,
  SoilScanners,
  SolarDryers,
  SolarPoweredPump,
  TeaFactory,
  TeaLeafAnalysisScanner,
  TeaMotherBush,
  WeatherStation,
} = markers;

export default function setSelectedVect() {
  const store = useInfrastructureStore();

  const selectedVect = async function () {
    let attribute = store.getClassfilter;
    let wfsURL;

    if (attribute === "all" || attribute === "") {
      wfsURL =
        "http://139.84.235.200/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3AInfrastructure&outputFormat=application%2Fjson";
    } else {
      const infrustructureWfsURL =
        "http://139.84.235.200/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3AInfrastructure&outputFormat=application%2Fjson&";

      attribute = attribute.replace(/'/g, "%27").replace(/ /g, "%20");

      wfsURL =
        infrustructureWfsURL + "CQL_FILTER=Class3" + "='" + attribute + "'";
    }

    console.log(wfsURL);

    let response = await axios.get(wfsURL);

    let vectLayer = response.data;

    return vectLayer;
  };

  // Function to select icon based on attribute value
  const selectIcon = function (attribute) {
    switch (attribute) {
      case "Equipment":
        return farmIcon;
      case "Water":
        return waterIcon;
      case "Machinery":
        return machineryIcon;
      case "Processing":
        return processingIcon;
      case "Market":
        return marketIcon;
      case "Office":
        return officeIcon;
      case "Nursery":
        return nurseryIcon;
      case "Learning":
        return schoolIcon;
      case "Weather":
        return weatherIcon;
      case "Digital":
        return digitalIcon;
      case "Bio-Pesticides Milling Machines":
        return Milling_Machines;
      case "Boreholes":
        return Boreholes;
      case "Biogas Digester":
        return biogasDigester;
      case "Coffee Cupping Lab Equipment":
        return coffeeCupping;
      case "Coffee Pulping Unit":
        return coffeePulping;
      case "Communication and Digital Infrastructure":
        return Communication;
      case "Cooperative Office":
        return cooperativeOffice;
      case "Demonstration Plot":
        return demonstrationPlot;
      case "Farmer Field Schools":
        return farmerFieldSchools;
      case "Fertilizer Trial":
        return FertilizerTrial;
      case "Incubator":
        return incubator;
      case "Irrigation Infrastructure":
        return irrigation;
      case "Learning Hub":
        return learningHub;
      case "Market Centre":
        return marketCentre;
      case "Moisture Meters":
        return moistureMeters;
      case "Nursery":
        return Nursery;
      case "Onion Storage":
        return onionStorage;
      case "Pilate Machines":
        return pilateMachines;
      case "Poultry Feeds and Grinder Mixer":
        return PoultryFeedsGrinder;
      case "Processing":
        return Processing;
      case "Project Office":
        return projectOffice;
      case "Quality Assurance and Preservation":
        return QualityAssurance;
      case "Rehabilitation of the Central Pulping Unit":
        return centralPulpingUnit;
      case "Screen House":
        return screenHouse;
      case "Soil Scanners":
        return SoilScanners;
      case "Solar Dryers":
        return SolarDryers;
      case "Solar Powered Pump":
        return SolarPoweredPump;
      case "Tea Factory":
        return TeaFactory;
      case "Tea Leaf Analysis Scanner":
        return TeaLeafAnalysisScanner;
      case "Tea Mother Bush":
        return TeaMotherBush;
      case "Weather Station":
        return WeatherStation;
      default:
        return defaultIcon; // Default icon
    }
  };

  const selectIconfiltered = function (attribute) {
    switch (attribute) {
      case "Bio-Pesticides Milling Machines":
        return Milling_Machines;
      case "Boreholes":
        return Boreholes;
      case "Biogas Digester":
        return biogasDigester;
      case "Coffee Cupping Lab Equipment":
        return coffeeCupping;
      case "Coffee Pulping Unit":
        return coffeePulping;
      case "Communication and Digital Infrastructure":
        return Communication;
      case "Cooperative Office":
        return cooperativeOffice;
      case "Demonstration Plot":
        return demonstrationPlot;
      case "Farmer Field Schools":
        return farmerFieldSchools;
      case "Incubator":
        return incubator;
      case "Irrigation Infrastructure":
        return irrigation;
      case "Learning Hub":
        return learningHub;
      case "Market Centre":
        return marketCentre;
      case "Moisture Meters":
        return moistureMeters;
      case "Nursery":
        return Nursery;
      case "Onion Storage":
        return onionStorage;
      case "Pilate Machines":
        return pilateMachines;
      case "Poultry Feeds and Grinder Mixer":
        return PoultryFeedsGrinder;
      case "Processing":
        return Processing;
      case "Project Office":
        return projectOffice;
      case "Quality Assurance and Preservation":
        return QualityAssurance;
      case "Rehabilitation of the Central Pulping Unit":
        return centralPulpingUnit;
      case "Screen House":
        return screenHouse;
      case "Soil Scanners":
        return SoilScanners;
      case "Solar Dryers":
        return SolarDryers;
      case "Solar Powered Pump":
        return SolarPoweredPump;
      case "Tea Factory":
        return TeaFactory;
      case "Tea Leaf Analysis Scanner":
        return TeaLeafAnalysisScanner;
      case "Tea Mother Bush":
        return TeaMotherBush;
      case "Weather Station":
        return WeatherStation;
      default:
        return defaultIcon; // Default icon
    }
  };

  const customVector = function () {};

  return {
    selectedVect,
    selectIcon,
    selectIconfiltered,
  };
}
