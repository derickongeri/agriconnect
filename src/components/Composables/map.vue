<template>
  <div class="q-pa-xs" id="mapid" style="height: 100%; width: 100%">
    <div v-if="tab === 'pirs'" class="legend-rect">
      <div class="gradient-rect">
        <!-- <span class="start">{{ lowest }}</span> -->
        <!-- <span class="end">{{ highest }}</span> -->
      </div>
      <span class="start text-white text-weight-bolder bg-primary q-px-sm">{{
        lowest
      }}</span>
      <span class="end text-white text-weight-bolder bg-primary q-px-sm">{{
        highest
      }}</span>
    </div>

    <div class="radio-rect">
      <selectAgreggate />
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
  ref,
  watch,
} from "vue";
import { Loading, QSpinnerFacebook, QSpinnerIos, QSpinnerOval } from "quasar";
import { axios } from "src/boot/axios";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import useSupabase from "src/boot/supabase";

import { storeToRefs } from "pinia";
import { useSumStore } from "stores/sumdata/index.js";

import baselayers from "./Modals/baselayers.js";
import markers from "./Modals/set_markers.js";
import marker from "src/assets/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

import setSelectedVect from "./Modals/createChoropleth";

import selectAgreggate from "src/Reusable/selectAggregate.vue";

export default defineComponent({
  components: {
    selectAgreggate: selectAgreggate,
  },

  setup() {
    const store = useSumStore();

    const { createChoroplethSums } = setSelectedVect();

    const map = ref(null),
      center = ref([-5.7, 34]),
      baseMaps = ref([]),
      districtLayer = ref(null),
      currentMapLayer = ref(null),
      selectedTab = ref(store.currentTab),
      highest = ref(null),
      lowest = ref(null);

    const setLeafletMap = async function () {
      const { osmTiles, darkMap, satellite } = baselayers;

      // const counties = counties_2021

      baseMaps.value = {
        OSM: osmTiles,
        satellite: satellite,
        darkMap: darkMap,
      };

      const southWest = L.latLng(-12.259177022030556, 26.77604312031508),
        northEast = L.latLng(0.013131790670328769, 42.67929911078633),
        bounds = L.latLngBounds(southWest, northEast);

      map.value = L.map("mapid", {
        zoomControl: false,
        layersControl: true,
        attributionControl: false,
        center: center.value,
        maxBounds: bounds,
        zoom: 6.5,
        maxZoom: 19,
        zoomSnap: 0.1,
        zoomAnimation: true,
        fadeAnimation: true,
        // layers: [darkMap, osm, mapbox, mapboxSatellite]
        //layers: [satellite],
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ).addTo(map.value);

      L.control.layers(baseMaps.value).addTo(map.value);
    };

    const addDistrictData = async function () {
      try {
        Loading.show({
          spinner: QSpinnerFacebook,
          spinnerSize: "xl",
          message: "Fetching Districts...",
        });

        let wfsUrl =
          "http://139.84.235.200/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3Adistricts&outputFormat=application%2Fjson";

        let response = await axios.get(wfsUrl);

        const geojsonData = response.data;

        const jsonLayer = L.geoJSON(geojsonData, {
          style: {
            fillColor: "#dae8f2",
            weight: 1,
            opacity: 1,
            color: "white",
            dashArray: "1",
            fillOpacity: 0.5,
          },
        });

        jsonLayer.addTo(map.value);
        // map.value.fitBounds(jsonLayer.getBounds());

        Loading.hide();
      } catch (error) {
        console.log(error);
        Loading.hide();
      }
    };

    // const addChoropleth = function () {};

    const setVector = async function () {
      try {
        Loading.show({
          spinner: QSpinnerFacebook,
          spinnerSize: "xl",
          message: "Creating Map layer...",
        });

        if (selectedTab.value === "pirs") {
          if (currentMapLayer.value) {
            map.value.removeLayer(currentMapLayer.value);
          }
          let aggregate = null;

          let jsonLayerJoined = await createChoroplethSums();

          let choroplethValues = jsonLayerJoined.layervalues;

          const maxVal = Math.max(...choroplethValues);
          const minVal = Math.min(...choroplethValues);

          highest.value = maxVal;
          lowest.value = minVal;

          const classInterval =
            (Math.max(...choroplethValues) - Math.min(...choroplethValues)) / 5;

          console.log(highest.value, lowest.value, classInterval);

          function getColor(d) {
            return d > minVal + classInterval * 5 && d <= maxVal
              ? "#1a3a1c"
              : d > minVal + classInterval * 4 &&
                d <= minVal + classInterval * 5
              ? "#3d583c"
              : d > minVal + classInterval * 3 &&
                d <= minVal + classInterval * 4
              ? "#607760"
              : d > minVal + classInterval * 2 &&
                d <= minVal + classInterval * 3
              ? "#869785"
              : d > minVal + classInterval * 1 &&
                d <= minVal + classInterval * 2
              ? "#adb9ac"
              : d > minVal && d <= minVal + classInterval * 1
              ? "#d5dbd5"
              : d > 0 && d <= minVal
              ? "#245333"
              : "#dae0dc00";
          }

          if (store.getSumsTab == "faindicators") {
            aggregate = store.userSelection.faGrantee;
          } else {
            aggregate = store.userSelection.aggregate;
          }

          function style(feature) {
            return {
              fillColor: getColor(feature.properties[aggregate]),
              weight: 2,
              opacity: 1,
              color: "white",
              dashArray: "3",
              fillOpacity: 1,
            };
          }

          function popup(feature, layer) {
            layer.bindPopup(
              `${feature.properties.District}: ${feature.properties[aggregate]}`
            );
          }

          const jsonLayer = L.geoJSON(jsonLayerJoined.geoJsonLayer, {
            style: style,
            onEachFeature: popup,
          });

          currentMapLayer.value = jsonLayer;

          currentMapLayer.value.addTo(map.value).bringToFront();

          map.value.fitBounds(currentMapLayer.value.getBounds());
        } else {
          if (currentMapLayer.value) {
            map.value.removeLayer(currentMapLayer.value);
          }

          const customIcon = L.icon({
            iconUrl: marker,
            //iconSize: [29, 48], // size of the icon
            //shadowSize: [50, 64], // size of the shadow
            //iconAnchor: [10, 35], // point of the icon which will correspond to marker's location
          });

          const { icon1, icon2, icon3, icon4, icon5, icon6 } = markers;

          let wfsUrl =
            "http://139.84.235.200/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3AMerged_Agriconnect_Infrastructure&outputFormat=application%2Fjson";

          let response = await axios.get(wfsUrl);

          const geojsonData = response.data;

          console.log(geojsonData);

          function processData(data) {
            // Loop through each feature in the GeoServer JSON data
            data.features.forEach((feature) => {
              // Extract attributes from the feature (adjust property name accordingly)
              var attribute = feature.properties.Class2;

              // Determine which icon to use based on the attribute value
              var icon;
              if (attribute === "Farm Equipment") {
                icon = icon1;
              } else if (attribute === "Water/ Irrigation") {
                icon = icon2;
              } else if (attribute === "Plant/ Machinery") {
                icon = icon3;
              } else if (
                attribute === "Processing/ Sort/ Preservation/ Storage"
              ) {
                icon = icon4;
              } else if (attribute === "Market") {
                icon = icon5;
              } else if (attribute === "Cooperative/ Project Office") {
                icon = icon6;
              } else if (attribute === "Nursery") {
                icon = icon3;
              } else if (attribute === "Learning Center") {
                icon = icon3;
              } else if (attribute === "Weather Station") {
                icon = icon2;
              } else {
                icon = icon4;
              }
              // Add more conditions as needed

              // Create a marker with the appropriate icon and add it to the map
              L.marker(
                [
                  feature.geometry.coordinates[1],
                  feature.geometry.coordinates[0],
                ],
                { icon: icon }
              )
                .addTo(map.value)
                .bindPopup(feature.properties.Class2); // Adjust property name for popup content
            });
          }

          processData(geojsonData);

          const infrastructureLayer = L.geoJSON(geojsonData, {
            pointToLayer: function (feature, latlng) {
              // Use the custom icon for point features
              return L.marker(latlng, { icon: customIcon });
            },
            onEachFeature: function (feature, layer) {
              // Add any custom behavior or popups here
              layer.bindPopup(
                "<b>Feature Type:</b> " + feature.properties.TYPE
              );
            },
          });
          currentMapLayer.value = infrastructureLayer;
        }

        Loading.hide();
      } catch (error) {
        console.log(error);
        Loading.hide();
      }
    };

    const tab = computed(() => {
      return store.getCurrentTab;
    });

    const sumsTab = computed(() => {
      return store.getSumsTab;
    });

    onBeforeMount(() => {
      store.setDistrictData();
    });

    onMounted(() => {
      setLeafletMap();
      addDistrictData().then(() => {
        setVector();
      });
    });

    watch(store.userSelection, () => {
      setVector();
    });

    watch(sumsTab, () => {
      setVector();
    });

    return {
      map,
      tab,
      highest,
      lowest,
    };
  },
});
</script>

<style scoped>
#mapid {
  /* position: relative;
  top: 0%;
  left: 0%; */
  /* width: 80%;
  height: 70vh; */
  bottom: 0%;
  border-width: 1px;
  /* border-radius: 20px; */
  border-color: rgb(19, 19, 19);
  background: none;
}

#chart-area {
  background: none;
  border-radius: 20px;
  position: absolute;
  width: 45vw;
  z-index: 5000;
  right: 0;
}

#chart-card {
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}

#selection-container {
  position: absolute;
  background-color: rgba(117, 117, 117, 0.822);
  top: 2%;
  left: 1%;
  border-radius: 20px;
}

.gradient-rect {
  right: 0%;
  width: 15px;
  height: 200px;
  background: linear-gradient(to top, #c9e4ca, #364958);
  position: absolute;
  z-index: 800;
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
}

.legend-rect {
  width: 70px;
  height: 200px;
  position: absolute;
  z-index: 800;
  right: 2%;
  bottom: 2%;
}

.radio-rect {
  position: absolute;
  z-index: 800;
  left: 1%;
  top: 2%;
}

.start {
  position: absolute;
  bottom: 0%;
  right: 25%;
}

.end {
  background-color: solid, rgba(0, 0, 0, 0.021);
  position: absolute;
  top: 0%;
  right: 25%;
}
</style>
