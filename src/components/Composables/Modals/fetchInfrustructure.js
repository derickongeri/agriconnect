import { useInfrastructureStore } from "src/stores/infrustructue";
import { useSumStore } from "src/stores/sumdata/index.js";
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

function findMinMaxCosts(data) {
  // Initialize variables to store the highest and lowest values
  let minCostTDTZS = Infinity;
  let maxCostTDTZS = -Infinity;
  let minCostTDEUR = Infinity;
  let maxCostTDEUR = -Infinity;

  // Iterate through each feature
  data.features.forEach((feature) => {
    const properties = feature.properties;
    const costTDTZS = parseFloat(properties.CostTDTZS);
    const costTDEUR = parseFloat(properties.CostTDEUR);

    // Update the minimum and maximum values for CostTDTZS
    if (costTDTZS < minCostTDTZS) {
      minCostTDTZS = costTDTZS;
    }
    if (costTDTZS > maxCostTDTZS) {
      maxCostTDTZS = costTDTZS;
    }

    // Update the minimum and maximum values for CostTDEUR
    if (costTDEUR < minCostTDEUR) {
      minCostTDEUR = costTDEUR;
    }
    if (costTDEUR > maxCostTDEUR) {
      maxCostTDEUR = costTDEUR;
    }
  });

  // Return the results as an object
  return {
    minCostTDTZS,
    maxCostTDTZS,
    minCostTDEUR,
    maxCostTDEUR,
  };
}

function getUniqueDistricts(data) {
  const districts = new Set();

  // Iterate through each feature
  data.features.forEach((feature) => {
    const properties = feature.properties;
    if (properties.District) {
      districts.add(properties.District);
    }
  });

  console.log(Array.from(districts));

  // Convert the Set to an array and return it
  return Array.from(districts);
}

function setGranteeValue(val) {
  switch (val) {
    case "helvetas":
      return "Helvetas";
      break;
    case "idh":
      return "IDH";
      break;
    case "pdf":
      return "PDF";
      break;
    case "rikolto":
      return "Rikolto";
      break;
    case "solidaridadcert":
      return "SolidaridadCERT";
      break;
    case "solidaridadpace":
      return "SolidaridadPACE";
      break;
    case "trias":
      return "Trias";
      break;
    case "viagro":
      return "Viagroforestry";
      break;
    default:
      return "total";
  }
}

function getUniqueClass3Values(data) {
  const uniqueValues = new Set();
  // Iterate through each feature
  data.features.forEach((feature) => {
    const class3 = feature.properties.Class3;
    if (class3) {
      uniqueValues.add(class3);
    }
  });
  // Convert the Set to an array and return it
  return Array.from(uniqueValues);
}

export default function setSelectedVect() {
  const store = useInfrastructureStore();
  const sumsStore = useSumStore();

  const featureMatchesFilter = (feature, filters) => {
    // if (
    //   filters.roadPhase &&
    //   feature.properties.Phase_x !== filters.roadPhase
    // ) {
    //   return false;
    // }
    if (
      (filters.costTZSmin &&
        filters.costTZSmax &&
        feature.properties.CostTDTZS < filters.costTZSmin ||
      feature.properties.CostTDTZS > filters.costTZSmax)
    ) {
      return false;
    }
    if (
      (filters.costEURmin &&
        filters.costEURmax &&
        feature.properties.CostTDEUR < filters.costEURmin &&
      feature.properties.CostTDEUR > filters.costEURmax)
    ) {
      return false;
    }
    if (
      filters.valueChain &&
      filters.valueChain.length > 0 &&
      !filters.valueChain.includes(feature.properties.ValueCh)
    ) {
      return false;
    }
    if (filters.district && feature.properties.District !== filters.district) {
      return false;
    }
    return true;
  };

  const applyInfFilters = (layer) => {
    let filters = store.getInfFilters;

    if (filters.filterStatus) {
      console.log(filters);
      const filteredFeatures = layer.features.filter((feature) =>
        featureMatchesFilter(feature, filters)
      );

      // if (filteredFeatures.length > 0) {
      //   // mapSuccess(`Found (${filteredFeatures.length}) features`);
      //   store.setFilterFeatures(filteredFeatures.length);
      // } else {
      //   store.setFilterFeatures(filteredFeatures.length);
      //   mapError(
      //     `Found (0) matching features. Clear or Edit filter paramenters to view roads`
      //   );
      // }
      return { ...layer, features: filteredFeatures };
    } else {
      console.log(filters);
      return layer;
    }
  };

  const selectedVect = async function () {
    let grantee = sumsStore.getUserSelection.faGrantee;
    let attribute = store.getClassfilter;
    let wfsURL;

    if (attribute.class3filter === "all" && !attribute.class4filter) {
      wfsURL =
        "http://139.84.235.200/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3AMergedInfrastructure2&outputFormat=application%2Fjson";
    } else if (attribute.class3filter !== "all" && !attribute.class4filter) {
      const infrustructureWfsURL =
        "http://139.84.235.200/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3AMergedInfrastructure2&outputFormat=application%2Fjson&";

      attribute = attribute.class3filter
        .replace(/'/g, "%27")
        .replace(/ /g, "%20");

      wfsURL =
        infrustructureWfsURL + "CQL_FILTER=Class3" + "='" + attribute + "'";
    } else {
      const infrustructureWfsURL =
        "http://139.84.235.200/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3AMergedInfrastructure2&outputFormat=application%2Fjson&";

      attribute = attribute.class4filter
        .replace(/'/g, "%27")
        .replace(/ /g, "%20");

      wfsURL =
        infrustructureWfsURL + "CQL_FILTER=Class4" + "='" + attribute + "'";
    }

    console.log(wfsURL);

    let response = await axios.get(wfsURL);

    let vectLayer = response.data;

    let newVectLayer = () => {
      if (grantee !== "total") {
        let val = setGranteeValue(grantee);
        let filterdFeatures = (vectLayer = vectLayer.features.filter(
          (feature) => feature.properties.Grantee === val
        ));
        return { ...vectLayer, features: filterdFeatures };
      } else return vectLayer;
    };

    vectLayer = newVectLayer();

    vectLayer = applyInfFilters(vectLayer);

    store.setDistricts(getUniqueDistricts(vectLayer));

    store.setFeatures(vectLayer.features)

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
