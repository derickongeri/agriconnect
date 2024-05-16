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

    <div class="zoom-controls">
      <div class="q-gutter-sm q-py-sm" id="#v-step-1">
        <div class="row">
          <q-space />
          <div
            class="bg-grey-1 q-pa-none q-ma-none"
            style="border-radius: 5px; border: 0px solid #002f6b"
          >
            <div>
              <q-btn
                class="bg-grey-1"
                size="sm"
                round
                flat
                color="grey-8"
                icon="add"
                @click="zoom_in"
              />
            </div>

            <q-separator />
            <div>
              <q-btn
                class="bg-grey-1"
                size="sm"
                round
                flat
                color="grey-8"
                icon="mdi-refresh"
                @click="resetZoomLevel"
              />
            </div>
            <q-separator />

            <div>
              <q-btn
                class="bg-grey-1"
                size="sm"
                round
                flat
                color="grey-8"
                icon="remove"
                @click="zoom_out"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="q-gutter-sm q-py-sm" id="#v-step-1">
        <div class="row">
          <q-space />
          <div
            class="bg-grey-1 q-pa-none q-ma-none"
            style="border-radius: 5px; border: 0px solid #002f6b"
          >
            <div>
              <q-btn
                class="bg-grey-1"
                size="sm"
                round
                flat
                color="grey-8"
                icon="mdi-layers"
                @click="toggleDrawingTools"
              >
                <q-menu
                  flat
                  auto-close
                  class="q-pa-none menu-card"
                  :offset="[250, -30]"
                  style="background-color: #ffffff"
                >
                  <div class="">
                    <div
                      class="menu-content bg-grey-2 q-pa-sm q-ma-none"
                      style="border-radius: 5px"
                    >
                      <div class="arrow-up q-ma-xs" style="left: 10%"></div>
                      <span
                        class="q-mx-sm"
                        style="font-size: 0.75em; font-color: #838c48"
                        >Select Base Map</span
                      >
                      <q-separator />
                      <div class="q-my-sm q-mx-sm" style="min-width: 150px">
                        <div class="map-selection q-pa-xs" style="">
                          <q-list class="row" style="min-width: 100px">
                            <q-item
                              class="col q-px-none"
                              clickable
                              v-ripple
                              @click="change_base_map('OSM')"
                            >
                              <q-item-section class="row q-px-sm">
                                <q-avatar rounded>
                                  <img
                                    src="https://res.cloudinary.com/dv3id0zrx/image/upload/v1649099828/Screenshot_from_2022-04-04_22-14-36_z8raar.png"
                                  />
                                </q-avatar>
                                <div
                                  class="row justify-center"
                                  style="font-size: 0.75em"
                                >
                                  Mapbox
                                </div>
                              </q-item-section>
                            </q-item>
                            <q-item
                              class="col q-px-none"
                              clickable
                              @click="change_base_map('satellite')"
                            >
                              <q-item-section class="q-px-sm">
                                <q-avatar rounded>
                                  <img
                                    src="https://res.cloudinary.com/dv3id0zrx/image/upload/v1649099830/Screenshot_from_2022-04-04_22-14-04_tnx5m7.png"
                                  />
                                </q-avatar>
                                <div
                                  class="row justify-center"
                                  style="font-size: 0.75em"
                                >
                                  Satellite
                                </div>
                              </q-item-section>
                            </q-item>
                            <q-item
                              class="col q-px-none"
                              clickable
                              @click="change_base_map('darkMap')"
                            >
                              <q-item-section class="q-px-sm">
                                <q-avatar rounded>
                                  <img
                                    src="https://res.cloudinary.com/dv3id0zrx/image/upload/v1649099827/Screenshot_from_2022-04-04_22-16-08_mu5dfk.png"
                                  />
                                </q-avatar>
                                <div
                                  class="row justify-center"
                                  style="font-size: 0.75em"
                                >
                                  dark
                                </div>
                              </q-item-section>
                            </q-item>
                          </q-list>
                        </div>
                      </div>
                    </div>
                  </div>
                </q-menu>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showAttributeCard" class="attribute-card" style="max-width: 50%;">
      <div class="q-pa-none row items-start q-gutter-md">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="col-5 flex flex-center">
              <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
            </q-card-section>
            <q-card-section class="q-pt-xs">
              <div class="row">
                <q-space />
                <q-btn icon="close" size="sm" flat round dense @click="showAttributeCard = !showAttributeCard" />
              </div>
              <div class="text-overline">Overline</div>
              <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
              <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat> 7:30PM </q-btn>
            <q-btn flat color="primary"> Reserve </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <div class="radio-rect">
      <selectAgreggate />
      <infrastructure />
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
import { useInfrastructureStore } from "src/stores/infrustructue";

import baselayers from "./Modals/baselayers.js";
import markers from "./Modals/set_markers.js";
import marker from "src/assets/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

import setSelectedVect from "./Modals/createChoropleth";

import selectAgreggate from "src/Reusable/selectAggregate.vue";
import infrastructure from "src/Reusable/infrastructureChips.vue";
import setSelectedInfrastructure from "src/components/Composables/Modals/fetchInfrustructure.js";

export default defineComponent({
  components: {
    selectAgreggate: selectAgreggate,
    infrastructure: infrastructure,
  },

  setup() {
    const store = useSumStore();
    const infStore = useInfrastructureStore();

    const { createChoroplethSums } = setSelectedVect();
    const { selectedVect, selectIcon, selectIconfiltered } =
      setSelectedInfrastructure();

    const map = ref(null),
      center = ref([-5.7, 34]),
      baseMaps = ref([]),
      districtLayer = ref(null),
      currentMapLayer = ref(null),
      selectedTab = ref(store.currentTab),
      highest = ref(null),
      lowest = ref(null),
      current_top_base_layer = ref(null),
      showBaseMapList = ref(false),
      showAttributeCard = ref(false),
      currentBaseLayer = ref(null);

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
      L.control.scale({ position: "bottomright" }).addTo(map.value);
      let layerControl = document.getElementsByClassName(
        "leaflet-control-layers"
      );
      layerControl[0].style.visibility = "hidden";
    };

    const zoom_in = function () {
      map.value.setZoom(map.value.getZoom() + 1);
    };

    const zoom_out = function () {
      map.value.setZoom(map.value.getZoom() - 1);
    };

    const resetZoomLevel = () => {
      map.value.fitBounds(currentMapLayer.value.getBounds());
    };

    const handle_base_layers = function () {
      setTimeout(() => {
        if (base_map_ctrl_cliked.value === false) showBaseMapList.value = false;
      }, 3000);
    };

    //get the base map object of leaflet according to the selection clicked
    const change_base_map = function (basemap) {
      const selected_base_map = baseMaps.value[basemap];
      map.value.addLayer(selected_base_map);
      selected_base_map.bringToFront();
      currentMapLayer.value.bringToFront();
    };

    const addDistrictData = async function () {
      try {
        Loading.show({
          spinner: QSpinnerFacebook,
          spinnerSize: "xl",
          message: "Fetching Districts...",
        });

        let wfsUrl =
          "http://139.84.235.200/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3Adistricts&outputFormat=application%2Fjson" +
          "";

        let response = await axios.get(wfsUrl);

        const geojsonData = response.data;

        const jsonLayer = L.geoJSON(geojsonData, {
          style: {
            fillColor: "#dae8f2",
            weight: 1,
            opacity: 1,
            color: "lightgrey",
            dashArray: "2",
            fillOpacity: 0.25,
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
          if (showAttributeCard.value) {
            showAttributeCard.value = !showAttributeCard.value
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
            return d >= minVal + classInterval * 4 &&
              d <= minVal + classInterval * 5
              ? "#3C4F5D"
              : d >= minVal + classInterval * 3 &&
                d < minVal + classInterval * 4
              ? "#52676E"
              : d >= minVal + classInterval * 2 &&
                d < minVal + classInterval * 3
              ? "#6E8483"
              : d >= minVal + classInterval * 1 &&
                d < minVal + classInterval * 2
              ? "#A1BAAB"
              : d >= minVal && d < minVal + classInterval * 1
              ? "#BCD6C0"
              : d < minVal
              ? "#A3BCAC"
              : "#A3BCAC";
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
              `<b>${feature.properties.District}</b><br/>` +
                "Total:" +
                `<b>${feature.properties["total"]}</b><br/>` +
                "Adult Male:" +
                `<b>${feature.properties["adult_female"]}</b><br/>` +
                "Youth Female:" +
                `<b>${feature.properties["adult_male"]}</b><br/>` +
                "Youth Male:" +
                `<b>${feature.properties["youth_female"]}</b><br/>` +
                "Youth Male:" +
                `<b>${feature.properties["youth_male"]}</b><br/>` +
                "<button id='pop-up-selector' class='pop-up-btn'>Analyze</button>"
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
            showAttributeCard.value = false
            map.value.removeLayer(currentMapLayer.value);
          }


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
            clickedIcon,
            icon6,
          } = markers;

          // // Function to select icon based on attribute value
          // function selectIcon(attribute) {
          //   switch (attribute) {
          //     case "Equipment":
          //       return farmIcon;
          //     case "Water":
          //       return waterIcon;
          //     case "Machinery":
          //       return machineryIcon;
          //     case "Processing":
          //       return processingIcon;
          //     case "Market":
          //       return marketIcon;
          //     case "Office":
          //       return officeIcon;
          //     case "Nursery":
          //       return nurseryIcon;
          //     case "Learning":
          //       return schoolIcon;
          //     case "Weather":
          //       return weatherIcon;
          //     case "Digital":
          //       return digitalIcon;
          //     default:
          //       return defaultIcon; // Default icon
          //   }
          // }

          const geojsonData = await selectedVect();

          const layerInf = (data) => {
            // Create an empty GeoJSON layer
            var geoJsonLayer = L.geoJSON(null, {
              pointToLayer: function (feature, latlng) {
                // Extract attributes from the feature
                let attribute;
                if (
                  infrastructureFilter.value === "" ||
                  infrastructureFilter.value === "all"
                ) {
                  attribute = feature.properties.Class3;
                } else {
                  attribute = feature.properties.Class4;
                }

                // Determine which icon to use based on the attribute value
                var icon = selectIcon(attribute);

                // Create a marker with the appropriate icon
                return L.marker(latlng, { icon: icon });
              },
            });

            // Add popup content
            // geoJsonLayer.bindPopup(function (layer) {
            //   return `<b>Infrustructure Category</b>: ${layer.feature.properties.Class3}<br/>
            //     <b>Grantee</b>: ${layer.feature.properties.Grantee}<br/>
            //     <b>Infrastructure</b>: ${layer.feature.properties.Class4}<br/>`;
            // });

            // Add click event listener to each GeoJSON point feature
            geoJsonLayer.on("click", function (event) {
              showAttributeCard.value = true;

              // Get the clicked feature
              var feature = event.layer.feature;

              console.log(feature.id);

              // Get the coordinates of the clicked feature
              var latlng = event.latlng;

              // Remove all existing selected markers
              geoJsonLayer.eachLayer(function (layer) {
                let attribute;
                if (
                  infrastructureFilter.value === "" ||
                  infrastructureFilter.value === "all"
                ) {
                  attribute = layer.feature.properties.Class3;
                } else {
                  attribute = layer.feature.properties.Class4;
                }
                // var attribute = layer.feature.properties.Class3;
                var defaultMarkerIcon = selectIcon(attribute);
                layer.setIcon(defaultMarkerIcon); // Set default icon for all markers
              });

              // Set custom icon for the selected marker
              event.layer.setIcon(clickedIcon);

              // Fly to the clicked marker's location with smooth animation
              map.value.flyTo(latlng, 17); // You can adjust the zoom level (15 is just an example)
            });

            // Listen for popup close event
            map.value.on("popupclose", function (event) {
              showAttributeCard.value = !showAttributeCard.value;
              var marker = event.popup._source;
              let attribute;
              if (
                infrastructureFilter.value === "" ||
                infrastructureFilter.value === "all"
              ) {
                attribute = marker.feature.properties.Class3;
              } else {
                attribute = marker.feature.properties.Class4;
              }
              var defaultMarkerIcon = selectIcon(attribute);
              marker.setIcon(defaultMarkerIcon);
              //map.value.fitBounds(currentMapLayer.value.getBounds());
            });

            // Add data to the GeoJSON layer
            geoJsonLayer.addData(data);

            // Return the GeoJSON layer
            return geoJsonLayer;
          };

          currentMapLayer.value = layerInf(geojsonData);

          currentMapLayer.value.addTo(map.value).bringToFront();

          map.value.fitBounds(currentMapLayer.value.getBounds());
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

    const infrastructureFilter = computed(() => {
      return infStore.getClassfilter;
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

    watch(infrastructureFilter, () => {
      setVector();
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
      zoom_in,
      zoom_out,
      resetZoomLevel,
      handle_base_layers,
      change_base_map,
      baseMaps,
      currentBaseLayer,
      showAttributeCard,
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
  left: 2%;
  bottom: 2%;
}

.attribute-card {
  position: absolute;
  z-index: 800;
  left: 2%;
  bottom: 2%;
}

.zoom-controls {
  position: absolute;
  z-index: 800;
  right: 1%;
  bottom: 7%;
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
  left: 25%;
}

.end {
  background-color: solid, rgba(0, 0, 0, 0.021);
  position: absolute;
  top: 0%;
  left: 25%;
}

.leaflet-popup {
  display: none;
}
</style>
