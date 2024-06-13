import { useInfrastructureStore } from "src/stores/infrustructue";
import { useRoadStore } from "src/stores/roads";
import useNotify from "src/composables/useNotify";
import { axios } from "src/boot/axios";

export default function setSelectedRoad() {
  const store = useRoadStore();
  const { notifyError, notifySuccess, mapSuccess, mapError } = useNotify();

  const featureMatchesFilter = (feature, filters) => {
    // if (
    //   filters.roadPhase &&
    //   feature.properties.Phase_x !== filters.roadPhase
    // ) {
    //   return false;
    // }
    if (
      filters.roadClass &&
      filters.roadClass.length > 0 &&
      !filters.roadClass.includes(feature.properties.RoadClass)
    ) {
      return false;
    }
    if (
      filters.roadFund &&
      filters.roadFund.length > 0 &&
      !filters.roadFund.includes(feature.properties.iprogram)
    ) {
      return false;
    }
    if (
      filters.raodStatus &&
      feature.properties.Status !== filters.raodStatus
    ) {
      return false;
    }
    return true;
  };

  const applyRoadFilters = (layer) => {
    let filters = store.getRoadFilters;

    if (filters.filterStatus) {
      console.log(filters);
      const filteredFeatures = layer.features.filter((feature) =>
        featureMatchesFilter(feature, filters)
      );

      if (filteredFeatures.length > 0) {
        // mapSuccess(`Found (${filteredFeatures.length}) features`);
        store.setFilterFeatures(filteredFeatures.length);
      } else {
        store.setFilterFeatures(filteredFeatures.length);
        mapError(
          `Found (0) matching features. Clear or Edit filter paramenters to view roads`
        );
      }
      return { ...layer, features: filteredFeatures };
    } else {
      console.log(filters);
      return layer;
    }
  };

  const selectedRoadVect = async function () {
    let attribute = store.getRoadPhase;
    let filters = store.getRoadFilters;
    let wfsURL;

    if (attribute === "All") {
      wfsURL =
        "http://139.84.235.200/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3ATaruraRoads_SurfaceType_Mastered&outputFormat=application%2Fjson";
    } else {
      let url =
        "http://139.84.235.200/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3ATaruraRoads_SurfaceType_Mastered&outputFormat=application%2Fjson&";

      attribute = attribute
        .replace(/'/g, "%27")
        .replace(/ /g, "%20")
        .replace(/_/g, "%5F");
      wfsURL = url + "CQL_FILTER=Phase_x" + "='" + attribute + "'";
    }

    console.log(wfsURL);

    let response = await axios.get(wfsURL);

    let vectLayer = response.data;

    vectLayer = applyRoadFilters(vectLayer);

    console.log(vectLayer);

    return vectLayer;
  };

  // Function to select color based on attribute value

  const setRoadSymbol = function (attribute) {
    const defaultStyle = {
      color: "black",
      weight: 8,
      opacity: 1,
      // dashArray: '5,10',
      // lineCap: 'square',
    };

    switch (attribute) {
      case "EARTHERN":
        defaultStyle.color = "#607D8B";
        defaultStyle.weight = 6;
        break;
      case "NON ENGINEERED":
        defaultStyle.color = "white";
        defaultStyle.weight = 6;
        break;
      // case "GRAVEL":
      //   defaultStyle.color = "#827717";
      //   break;
      // case "CONCRETE":
      //   defaultStyle.color = "red";
      //   break;
      default:
        // defaultStyle.dashArray = "5,10";
        break;
    }

    return defaultStyle;
  };

  const roadOutlineSymbol = function (attribute) {
    const defaultStyle = {
      color: "red",
      weight: 6,
      opacity: 1,
      // dashArray: '5,10',
      // lineCap: 'square',
    };

    switch (attribute) {
      case "EARTHERN":
        defaultStyle.color = "#607D8B";
        break;
      case "DBST":
        defaultStyle.color = "#F2CCD2";
        break;
      case "GRAVEL":
        defaultStyle.color = "#C0CA34";
        break;
      case "CONCRETE":
        defaultStyle.color = "red";
        break;
      default:
        defaultStyle.dashArray = "5,10";
        break;
    }

    return defaultStyle;
  };

  return {
    selectedRoadVect,
    setRoadSymbol,
    roadOutlineSymbol,
  };
}
