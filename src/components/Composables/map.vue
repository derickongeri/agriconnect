<template>
  <div class="q-pa-xs" id="mapid" style="height: 100%; width: 100%">
    <div v-if="tab === 'pirs'" class="gradient-rect">
      <span class="start">{{ lowest }}</span>
      <span class="end">{{ highest }}</span>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { Loading, QSpinnerFacebook, QSpinnerIos, QSpinnerOval } from "quasar";
import { axios } from "src/boot/axios";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import useSupabase from "src/boot/supabase";
import { useSumStore } from "stores/sumdata/index.js";

import baselayers from "./Modals/baselayers.js";
import markers from "./Modals/set_markers.js"
//import { store } from "quasar/wrappers";
// import counties_2021 from './Modals/counties_2021.js'
import marker from "src/assets/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

export default defineComponent({
  components: {},

  setup() {
    const { supabase } = useSupabase();
    const store = useSumStore();

    const map = ref(null),
      center = ref([-5.7, 34]),
      baseMaps = ref([]),
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
          "http://45.76.136.154/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3ATanzania_Districts&outputFormat=application%2Fjson";

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

          const indicatorCode = "code11";

          const { data: sumsData, error: sumsError } = await supabase.from(
            "SpatialIndicatorsDummy"
          ).select(`
            district,
            adult_male: ${indicatorCode}->Adult_Male,
            adult_female: ${indicatorCode}->Adult_Female,
            youth_male: ${indicatorCode}->Youth_Male,
            youth_female: ${indicatorCode}->Youth_Female,
            reference: ${indicatorCode}->Reference,
            total: ${indicatorCode}->Total_Exl_Referece,
            total_ex_ref: ${indicatorCode}->Total_Inc_Referece
          `);

          let wfsUrl =
            "http://45.76.136.154/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3ATanzania_Districts&outputFormat=application%2Fjson";

          let response = await axios.get(wfsUrl);

          const geojsonData = response.data;

          // Example: Assuming 'district' is the common attribute in both datasets
          const joinedData = geojsonData.features.map((geoFeature) => {
            const matchingFeature = sumsData.find(
              (sumsFeature) =>
                sumsFeature.district === geoFeature.properties.District
            );

            if (matchingFeature) {
              // Merge properties from  and GeoJSON features
              return {
                ...geoFeature,
                properties: {
                  ...geoFeature.properties,
                  ...matchingFeature,
                },
              };
            }
          });

          const newJsonData = joinedData.filter((obj) => obj !== undefined);

          let choroplethValues = [];

          newJsonData.forEach((d) => {
            choroplethValues.push(d.properties.youth_male);
          });

          const maxVal = Math.max(...choroplethValues);
          const minVal = Math.min(...choroplethValues);

          highest.value = maxVal;
          lowest.value = minVal;

          const classInterval =
            (Math.max(...choroplethValues) - Math.min(...choroplethValues)) / 7;

          function getColor(d) {
            return d > maxVal
              ? "#364958"
              : d > minVal + classInterval * 5
              ? "#3B6064"
              : d > minVal + classInterval * 4
              ? "#55828B"
              : d > minVal + classInterval * 3
              ? "#87BBA2"
              : d > minVal + classInterval * 2
              ? "#C9E4CA"
              : d > minVal + classInterval * 1
              ? "#b3cde0"
              : d > minVal
              ? "#b3cde0"
              : "#b3cde0";
          }

          function style(feature) {
            return {
              fillColor: getColor(feature.properties.youth_male),
              weight: 2,
              opacity: 1,
              color: "white",
              dashArray: "3",
              fillOpacity: 1,
            };
          }

          function popup(feature, layer) {
            feature = layer.bindPopup();
          }

          const jsonLayer = L.geoJSON(newJsonData, {
            style: style,
            onEachFeature: popup,
          });

          currentMapLayer.value = jsonLayer;

          currentMapLayer.value.addTo(map.value).bringToFront();

          map.value.fitBounds(currentMapLayer.value.getBounds())

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

          const {icon1, icon2, icon3, icon4, icon5, icon6} = markers

          let wfsUrl =
            "http://45.76.136.154/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3AHelvetas_Infrastructures&outputFormat=application%2Fjson";

          let response = await axios.get(wfsUrl);

          const geojsonData = response.data;

          console.log(geojsonData);

          function processData(data) {
            // Loop through each feature in the GeoServer JSON data
            data.features.forEach((feature) => {
              // Extract attributes from the feature (adjust property name accordingly)
              var attribute = feature.properties.TYPE;

              // Determine which icon to use based on the attribute value
              var icon;
              if (attribute === "Processing park") {
                icon = icon1;
              }
              else if (attribute === "Screen houses"){
                icon = icon3;
              }
              else if (attribute === "Screen houses"){
                icon = icon3;
              }
              else if (attribute === "Screen houses"){
                icon = icon3;
              }
              else if (attribute === "Solar driyer") {
                icon = icon2;
              }else {
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
                .bindPopup(feature.properties.TYPE); // Adjust property name for popup content
            });
          }

          processData(geojsonData)

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

    onMounted(() => {
      setLeafletMap();
      addDistrictData().then(() => {
        setVector();
      });
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
  width: 10px;
  height: 200px;
  background: linear-gradient(to top, #c9e4ca, #364958);
  position: absolute;
  z-index: 10000;
  right: 2%;
  bottom: 2%;
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
}

.start {
  position: absolute;
  bottom: -10%;
  right: 150%;
}

.end {
  position: absolute;
  top: -10%;
  right: 150%;
}
</style>
