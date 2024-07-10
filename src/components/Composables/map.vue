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

    <div
      v-if="showAttributeCard"
      class="attribute-card"
      @touchstart="map.dragging.disable(), map.scrollWheelZoom.disable()"
      @touchend="map.dragging.enable(), map.scrollWheelZoom.enable()"
      @mousedown="map.dragging.disable(), map.scrollWheelZoom.disable()"
      @mouseover="map.dragging.disable(), map.scrollWheelZoom.disable()"
      @mouseenter="map.dragging.disable(), map.scrollWheelZoom.disable()"
      @mouseleave="map.dragging.enable(), map.scrollWheelZoom.enable()"
      @mouseup="map.dragging.enable(), map.scrollWheelZoom.enable()"
    >
      <div class="q-pa-none row items-start q-gutter-md">
        <q-card class="my-card-md" flat bordered>
          <q-card-section horizontal>
            <div class="col-5">
              <div class="column q-pa-md justify-center">
                <q-img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </div>
            </div>

            <q-card-section class="col-7 q-pt-xs">
              <div class="row">
                <q-space />
                <q-btn
                  icon="close"
                  size="sm"
                  flat
                  round
                  dense
                  @click="closeCard()"
                />
              </div>

              <!-- <div class="text-overline">Grantee</div> -->

              <div class="text-h5 q-mt-sm q-mb-xs">
                {{ featureAtributes.name }}
              </div>
              <div class="text-overline">by {{ featureAtributes.grantee }}</div>
              <div class="text-caption text-grey q-mb-xs">
                {{ featureAtributes.Function }}
              </div>
              <q-separator />
              <div class="text-subtitle1 q-mt-sm q-mb-xs">
                <q-icon color="grey-7" name="mdi-sprout" />
                <span class="text-caption"
                  >{{ featureAtributes.grantee }} ・</span
                >
                <q-icon color="grey-7" name="mdi-cash-multiple" />
                <span class="text-caption"
                  >{{ featureAtributes.costTZ }}TZS ・</span
                >
                <q-icon color="grey-7" name="mdi-map-marker-radius-outline" />
                <span class="text-caption">{{
                  featureAtributes.District
                }}</span>
              </div>
            </q-card-section>
          </q-card-section>

          <!-- <q-separator />

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              <q-icon color="grey-7" name="mdi-sprout" /> <span class="text-caption">value chain ・</span>
              <q-icon color="grey-7" name="mdi-cash-multiple" /> <span class="text-caption">TZS ・</span>
              <q-icon color="grey-7" name="mdi-map-marker-radius-outline" /> <span class="text-caption">District,Ward</span>
            </div>

          </q-card-section> -->
        </q-card>
        <q-scroll-area
          :thumb-style="thumbStyle"
          visible
          class=""
          style="height: 50vh; width: 100vw"
        >
          <div>
            <q-card class="my-card-sm" flat bordered>
              <div class="row">
                <q-space />
                <q-btn
                  icon="close"
                  size="md"
                  flat
                  round
                  dense
                  @click="closeCard()"
                />
              </div>

              <q-card-section class="col-7 q-pt-xs">
                <div class="text-h6 q-mt-sm q-mb-xs">
                  {{ featureAtributes.name }}
                </div>
                <div class="text-overline">
                  by {{ featureAtributes.grantee }}
                </div>
                <div class="text-caption text-grey q-mb-xs">
                  {{ featureAtributes.Function }}
                </div>
                <div class="row">
                  <q-img
                    class="rounded-borders"
                    src="https://agri-connect-tz.com/wp-content/uploads/2023/09/PARTOF1-1024x683.jpg"
                    style="max-height: 150px"
                  />
                </div>
                <q-separator />
                <div class="text-subtitle1 q-mt-sm q-mb-xs">
                  <q-icon color="grey-7" name="mdi-sprout" />
                  <span class="text-caption"
                    >{{ featureAtributes.grantee }} ・</span
                  >
                  <q-icon color="grey-7" name="mdi-cash-multiple" />
                  <span class="text-caption"
                    >{{ featureAtributes.costTZ }}TZS ・</span
                  >
                  <q-icon color="grey-7" name="mdi-map-marker-radius-outline" />
                  <span class="text-caption">{{
                    featureAtributes.District
                  }}</span>
                </div>
              </q-card-section>

              <!-- <q-separator />

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              <q-icon color="grey-7" name="mdi-sprout" /> <span class="text-caption">value chain ・</span>
              <q-icon color="grey-7" name="mdi-cash-multiple" /> <span class="text-caption">TZS ・</span>
              <q-icon color="grey-7" name="mdi-map-marker-radius-outline" /> <span class="text-caption">District,Ward</span>
            </div>

          </q-card-section> -->
            </q-card>
          </div>
        </q-scroll-area>
      </div>
    </div>

    <div
      v-if="showRoadAttributeCard"
      class="road-attribute-card"
      id="map-card"
      style=""
      @mouseover="map.dragging.disable(), map.scrollWheelZoom.disable()"
      @mouseleave="map.dragging.enable(), map.scrollWheelZoom.enable()"
      @mouseup="map.dragging.enable(), map.scrollWheelZoom.enable()"
    >
      <q-card
        @mouseover="map.dragging.disable(), map.scrollWheelZoom.disable()"
        @mouseleave="map.dragging.enable(), map.scrollWheelZoom.enable()"
        class="my-card"
        flat
        bordered
        style="width: 400px"
      >
        <q-card-section class="q-pa-xs">
          <div class="row items-center">
            <q-item-label header class="text-weight-bold text-grey-9"
              >Road Attributes</q-item-label
            >
            <q-space />
            <q-btn
              class="q-mx-md"
              icon="close"
              size="sm"
              flat
              round
              dense
              @click="closeCard()"
            />
          </div>
        </q-card-section>
        <q-separator inset />
        <q-scroll-area style="height: 50vh"
          ><q-card-section class="q-py-none">
            <q-item-label header class="text-weight-bold text-grey-9"
              >General Information</q-item-label
            >
            <q-item>
              <q-item-section avatar top>
                <q-avatar
                  size="32px"
                  icon="mdi-road"
                  color="primary"
                  text-color="white"
                />
              </q-item-section>

              <q-item-section>
                <div class="row items-center">
                  <div class="q-pr-sm">
                    <q-item-label caption>Road Class:</q-item-label>
                  </div>

                  <q-item-label lines="1">{{
                    roadFeatureAttributes.roadclass
                  }}</q-item-label>
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar top>
                <q-avatar
                  size="32px"
                  icon="mdi-cash"
                  color="secondary"
                  text-color="white"
                />
              </q-item-section>

              <q-item-section>
                <div class="row items-center">
                  <div class="q-pr-sm">
                    <q-item-label caption>Funds:</q-item-label>
                  </div>

                  <q-item-label lines="1">{{
                    roadFeatureAttributes.program
                  }}</q-item-label>
                </div>
              </q-item-section>
            </q-item>
            <!-- <q-separator class="q-ma-sm" inset /> -->
            <div class="row items-center q-my-sm">
              <div class="column q-gutter-sm q-mx-md">
                <div class="col">
                  <q-icon
                    size="xs"
                    name="mdi-circle-outline"
                    color="secondary"
                  ></q-icon>
                </div>
                <div class="col">
                  <q-icon size="xs" name="mdi-dots-vertical"></q-icon>
                </div>
                <div class="col">
                  <q-icon
                    size="xs"
                    name="mdi-map-marker-outline"
                    color="primary"
                  ></q-icon>
                </div>
              </div>
              <div class="col">
                <div class="q-px-sm" style="max-width: 350px">
                  <q-list class="q-gutter-y-sm">
                    <q-item>
                      <q-item-section>
                        <q-item-label>Start</q-item-label>
                        <q-item-label caption
                          >[{{ roadFeatureAttributes.from_lat }},
                          {{ roadFeatureAttributes.from_long }}]</q-item-label
                        >
                      </q-item-section>
                    </q-item>

                    <q-item>
                      <q-item-section>
                        <q-item-label>end</q-item-label>
                        <q-item-label caption
                          >[{{ roadFeatureAttributes.to_lat }},
                          {{ roadFeatureAttributes.to_long }}]</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
              <div class="column">
                <q-icon size="md" name="mdi-compare-vertical"></q-icon>
              </div>
            </div>
            <q-separator inset />
            <q-item-label header class="text-weight-bold text-grey-9"
              >Surface Information</q-item-label
            >
            <div class="row justify-between q-mx-md q-gutter-x-sm">
              <div class="column items-center">
                <q-avatar
                  size="32px"
                  class="q-mb-sm"
                  color="secondary"
                  text-color="grey-9"
                  icon="mdi-arrow-expand-left"
                />
                <q-item-label lines="1">Left Shoulder</q-item-label>
                <q-item-label caption
                  >Type:
                  <span class="text-grey-10" style="font-weight: 700">{{
                    roadFeatureAttributes.lshoulder_surface
                  }}</span></q-item-label
                >
                <q-item-label caption
                  >Width:
                  <span class="text-grey-10" style="font-weight: 700"
                    >{{ roadFeatureAttributes.lshoulder_width }}m</span
                  ></q-item-label
                >
              </div>
              <div class="column items-center">
                <q-avatar
                  size="32px"
                  class="q-mb-sm"
                  color="primary"
                  text-color="grey-9"
                  icon="mdi-road-variant"
                />
                <q-item-label lines="1">Pavement</q-item-label>
                <q-item-label caption>
                  <span class="text-grey-10" style="font-weight: 700">{{
                    roadFeatureAttributes.pavementType
                  }}</span></q-item-label
                >
                <q-item-label caption>Subgrade: </q-item-label>
                <span class="text-grey-10 q-mb-xs" style="font-weight: 700">{{
                  roadFeatureAttributes.subsurfaceType
                }}</span>
                <q-item-label caption
                  >Width:
                  <span class="text-grey-10" style="font-weight: 700"
                    >{{ roadFeatureAttributes.pave_width }}m</span
                  ></q-item-label
                >
                <q-item-label caption
                  >Lanes:
                  <span class="text-grey-10" style="font-weight: 700">{{
                    roadFeatureAttributes.lanes
                  }}</span></q-item-label
                >
                <q-item-label caption
                  >Depth:
                  <span class="text-grey-10" style="font-weight: 700"
                    >{{ roadFeatureAttributes.pave_depth }}mm</span
                  ></q-item-label
                >
              </div>
              <div class="column items-center">
                <q-avatar
                  size="32px"
                  class="q-mb-sm"
                  color="secondary"
                  text-color="grey-9"
                  icon="mdi-arrow-expand-right"
                />
                <q-item-label lines="1">Right Shoulder</q-item-label>
                <q-item-label caption
                  >Type:
                  <span class="text-grey-10" style="font-weight: 700">{{
                    roadFeatureAttributes.rshoulder_surface
                  }}</span></q-item-label
                >
                <q-item-label caption
                  >Width:
                  <span class="text-grey-10" style="font-weight: 700"
                    >{{ roadFeatureAttributes.rshoulder_width }}m</span
                  ></q-item-label
                >
              </div>
            </div>
          </q-card-section>

          <q-card-section> </q-card-section
        ></q-scroll-area>
      </q-card>
    </div>

    <div
      v-if="selectedTab === 'tarura'"
      class="roads-legend bg-white q-pa-sm"
      style="min-width: 15%"
    >
      <div class="row">
        <q-item>
          <q-item-section avatar>
            <div class="row items-center q-gutter-x-sm">
              <div class="road-symbol bg-red"></div>
              <q-item-label>Concrete</q-item-label>
            </div>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <div class="row items-center q-gutter-x-sm">
              <div class="road-symbol" style="background-color: #f2ccd2"></div>
              <q-item-label>DBST</q-item-label>
            </div>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <div class="row items-center q-gutter-x-sm">
              <div
                class="road-symbol"
                style="
                  background-color: #c0ca34;
                  height: 6px;
                  border-top: solid 1px;
                  border-bottom: solid 1px;
                "
              ></div>
              <q-item-label>Gravel</q-item-label>
            </div>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <div class="row items-center q-gutter-x-sm">
              <div
                class="road-symbol"
                style="
                  background-color: #607d8b;
                  border-top: 0px;
                  border-bottom: 0px;
                  height: 6px;
                  width: 35px;
                "
              ></div>
              <q-item-label>Earthened</q-item-label>
            </div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <div class="row items-center q-gutter-x-sm">
              <div class="dotted-line"></div>
              <q-item-label>Non Engineered</q-item-label>
            </div>
          </q-item-section>
        </q-item>
      </div>
    </div>

    <div
      class="radio-rect"
      @touchstart="map.dragging.disable(), map.scrollWheelZoom.disable()"
      @touchend="map.dragging.enable(), map.scrollWheelZoom.enable()"
      @mousedown="map.dragging.disable(), map.scrollWheelZoom.disable()"
      @mouseover="map.dragging.disable(), map.scrollWheelZoom.disable()"
      @mouseleave="map.dragging.enable(), map.scrollWheelZoom.enable()"
      @mouseup="map.dragging.enable(), map.scrollWheelZoom.enable()"
    >
      <!-- <q-btn
        round
        dense
        unelevated
        text-color="grey"
        icon="mdi-chevron-right"
        style="position: absolute; z-index: 2500; right: -6%;background-color: #ffffff70;"
        @click="scroll"
      ></q-btn> -->
      <q-scroll-area
        :thumb-style="thumbStyle"
        visible="false"
        class=""
        style="height: 60px; width: 94vw"
      >
        <div class="row items-center chip-rect no-wrap">
          <selectAgreggate /> <infrastructure /></div
      ></q-scroll-area>
    </div>

    <!-- <div class="radio-rect"></div> -->
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
  onActivated,
  ref,
  watch,
} from "vue";
import { Loading, QSpinnerFacebook, QSpinnerIos, QSpinnerOval } from "quasar";
import { axios } from "src/boot/axios";

import L, { bounds } from "leaflet";
import "leaflet/dist/leaflet.css";
import useSupabase from "src/boot/supabase";

import { storeToRefs } from "pinia";
import { useSumStore } from "stores/sumdata/index.js";
import { useInfrastructureStore } from "src/stores/infrustructue";
import { useRoadStore } from "src/stores/roads/index.js";

import baselayers from "./Modals/baselayers.js";
import markers from "./Modals/set_markers.js";
import marker from "src/assets/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

import setSelectedVect from "./Modals/createChoropleth";

import selectAgreggate from "src/Reusable/selectAggregate.vue";
import infrastructure from "src/Reusable/infrastructureChips.vue";
import setSelectedInfrastructure from "src/components/Composables/Modals/fetchInfrustructure.js";
import setSelectedRoads from "src/components/Composables/Modals/fetchRoads.js";
import { onBeforeRouteLeave } from "vue-router";

export default defineComponent({
  components: {
    selectAgreggate: selectAgreggate,
    infrastructure: infrastructure,
  },

  setup() {
    const store = useSumStore();
    const infStore = useInfrastructureStore();
    const roadStore = useRoadStore();

    const { createChoroplethSums } = setSelectedVect();
    const { selectedVect, selectIcon, selectIconfiltered } =
      setSelectedInfrastructure();

    const { selectedRoadVect, setRoadSymbol, roadOutlineSymbol } =
      setSelectedRoads();

    const position = ref(300);
    const scrollAreaRef = ref(null);

    const map = ref(null),
      center = ref([-5.7, 34]),
      Layerbounds = ref(null),
      baseMaps = ref([]),
      districtLayer = ref(null),
      currentMapLayer = ref(null),
      clickedMarker = ref(null),
      clickedRoad = ref(null),
      clickedRoadStart = ref(null),
      clickedRoadEnd = ref(null),
      roadOutline = ref(null),
      selectedTab = ref(store.currentTab),
      highest = ref(null),
      lowest = ref(null),
      current_top_base_layer = ref(null),
      showBaseMapList = ref(false),
      showAttributeCard = ref(false),
      showRoadAttributeCard = ref(false),
      currentBaseLayer = ref(null);

    const featureAtributes = computed(() => {
      return {
        name: clickedMarker.value.feature.properties.Class4,
        grantee: clickedMarker.value.feature.properties.Grantee,
        costTZ: clickedMarker.value.feature.properties.CostTDTZS,
        Region: clickedMarker.value.feature.properties.Region,
        District: clickedMarker.value.feature.properties.District,
        Ward: clickedMarker.value.feature.properties.Ward,
        Village: clickedMarker.value.feature.properties.Village,
        Function: clickedMarker.value.feature.properties.Function,
      };
    });

    const roadFeatureAttributes = computed(() => {
      return {
        roadclass: clickedRoad.value.feature.properties.RoadClass,
        program: clickedRoad.value.feature.properties.iprogram,
        from_lat: clickedRoad.value.feature.properties.from_lat.toFixed(6),
        from_long: clickedRoad.value.feature.properties.from_long.toFixed(6),
        to_lat: clickedRoad.value.feature.properties.to_lat.toFixed(6),
        to_long: clickedRoad.value.feature.properties.to_long.toFixed(6),
        lshoulder_surface: clickedRoad.value.feature.properties.left_shou0,
        rshoulder_surface: clickedRoad.value.feature.properties.right_sho0,
        lshoulder_width: clickedRoad.value.feature.properties.left_shoul,
        rshoulder_width: clickedRoad.value.feature.properties.right_shou,
        pavementType: clickedRoad.value.feature.properties.pave_type,
        subsurfaceType: clickedRoad.value.feature.properties.subgrade_t,
        pave_width: clickedRoad.value.feature.properties.pave_width,
        lanes: clickedRoad.value.feature.properties.no_lanes,
        pave_depth: clickedRoad.value.feature.properties.right_shou,
      };
    });

    const setLeafletMap = async function () {
      const { osmTiles, darkMap, satellite, mapboxSatellite } = baselayers;

      // const counties = counties_2021

      baseMaps.value = {
        OSM: osmTiles,
        satellite: satellite,
        darkMap: darkMap,
        mapbox: mapboxSatellite,
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
        scrollWheelZoom: true,
        // smoothWheelZoom: true,
        // layers: [darkMap, osm, mapbox, mapboxSatellite]
        //layers: [satellite],
      });

      // L.tileLayer(
      //   "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
      //   {
      //     attribution:
      //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      //     subdomains: "abcd",
      //     //maxZoom: 20,
      //   }
      // ).addTo(map.value);
      // if (selectedTab.value == "infrastructure") {
      //   baseMaps.value.mapbox.addTo(map.value);
      // } else {
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        {
          attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
          //maxZoom: 16,
        }
      ).addTo(map.value);
      // }

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
      map.value.flyToBounds(currentMapLayer.value.getBounds(), {
        padding: [100, 100],
      });
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
            fillOpacity: 0,
          },
        });

        jsonLayer.addTo(map.value);
        // map.value.flyToBounds(jsonLayer.getBounds());

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
            showAttributeCard.value = !showAttributeCard.value;
          }
          let aggregate = null;

          let jsonLayerJoined = await createChoroplethSums();

          let choroplethValues = jsonLayerJoined.layervalues;

          console.log(choroplethValues);

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
            if (store.sumsTab == "faindicators") {
              layer.bindPopup(
                `<b>${feature.properties.District}</b>: ${
                  feature.properties[store.userSelection.faGrantee]
                }<br/>`
              );
            } else {
              layer.bindPopup(
                `<b>${feature.properties.District}</b><br/>` +
                  "Total:" +
                  `<b>${feature.properties["total"]}</b><br/>` +
                  "Adult Male:" +
                  `<b>${feature.properties["adult_male"]}</b><br/>` +
                  "Adult Female:" +
                  `<b>${feature.properties["adult_female"]}</b><br/>` +
                  "Youth Male:" +
                  `<b>${feature.properties["youth_male"]}</b><br/>` +
                  "Youth Female:" +
                  `<b>${feature.properties["youth_female"]}</b><br/>` +
                  "<button id='pop-up-selector' class='pop-up-btn'>Analyze</button>"
              );
            }
          }

          const jsonLayer = L.geoJSON(jsonLayerJoined.geoJsonLayer, {
            style: style,
            onEachFeature: popup,
          });

          currentMapLayer.value = jsonLayer;

          currentMapLayer.value.addTo(map.value).bringToFront();

          map.value.flyToBounds(currentMapLayer.value.getBounds());
        } else if (selectedTab.value === "tarura") {
          showRoadAttributeCard.value = false;
          if (currentMapLayer.value && roadOutline.value) {
            map.value.removeLayer(currentMapLayer.value);
            map.value.removeLayer(roadOutline.value);
          }
          if (clickedRoad.value) {
            clickedRoadStart.value.removeFrom(map.value);
            clickedRoadEnd.value.removeFrom(map.value);
          }
          const geojsonData = await selectedRoadVect();

          const layerInfForLines = (data) => {
            // Create an empty GeoJSON layer
            var geoJsonLayer = L.geoJSON(null, {
              style: function (feature) {
                // Extract attributes from the feature
                let attribute = feature.properties.pave_type;
                // Determine style based on the attribute value
                var color = roadOutlineSymbol(attribute);
                return color;
              },
              onEachFeature: function (feature, layer) {
                // Add click event listener to each GeoJSON line feature
                layer.on("click", function (event) {
                  showRoadAttributeCard.value = true;
                  if (clickedRoad.value) {
                    clickedRoadStart.value.removeFrom(map.value);
                    clickedRoadEnd.value.removeFrom(map.value);
                  }

                  // Store the reference to the clicked line
                  clickedRoad.value = event.target;

                  let nodes = {
                    from_lat:
                      clickedRoad.value.feature.properties.from_lat.toFixed(6),
                    from_long:
                      clickedRoad.value.feature.properties.from_long.toFixed(6),
                    to_lat:
                      clickedRoad.value.feature.properties.to_lat.toFixed(6),
                    to_long:
                      clickedRoad.value.feature.properties.to_long.toFixed(6),
                  };

                  let endMaker = L.divIcon({
                    className: "custom-div-icon",
                    html: "<div style='background-color:#c50101;' class='marker-pin'></div><i class='material-icons' style='font-size: 18px; color: grey'>sports_score</i>",
                    iconSize: [30, 42],
                    iconAnchor: [15, 42],
                  });

                  let startMaker = L.divIcon({
                    className: "custom-div-icon-circle",
                    html: "<div style='' class='circle-pin'></div><i class='material-icons' style='font-size: 18px; color: white'></i>",
                    iconSize: [30, 42],
                    iconAnchor: [15, 21],
                  });

                  clickedRoadStart.value = L.marker(
                    [nodes.from_lat, nodes.from_long],
                    {
                      icon: startMaker,
                    }
                  );
                  clickedRoadEnd.value = L.marker(
                    [nodes.to_lat, nodes.to_long],
                    {
                      icon: endMaker,
                    }
                  );

                  // Get the coordinates of the clicked feature
                  var latlng = event.latlng;

                  // Reset style for all lines
                  geoJsonLayer.eachLayer(function (layer) {
                    let attribute = layer.feature.properties.pave_type;

                    var defaultStyle = roadOutlineSymbol(attribute);
                    layer.setStyle(defaultStyle); // Set default style for all lines
                  });

                  // // Set custom style for the selected line
                  // var selectedStyle = {
                  //   color: "#FFFF0000", // Highlight color for selected line
                  //   weight: 4,
                  //   opacity: 1,
                  // };

                  // event.target.setStyle(selectedStyle);

                  //showRoadAttributeCard.value = true;

                  clickedRoadEnd.value.addTo(map.value);
                  clickedRoadStart.value.addTo(map.value);
                  let bounds = clickedRoad.value.getBounds();
                  // Fly to the clicked line's location with smooth animation
                  //map.value.flyTo(latlng, 12); // You can adjust the zoom level

                  map.value.flyToBounds(bounds, { padding: [0, 100] });
                });
              },
            });

            // Listen for popup close event
            map.value.on("popupclose", function (event) {
              showRoadAttributeCard.value = !showRoadAttributeCard.value;
              var layer = event.popup._source;
              let attribute = layer.feature.properties.pave_type;

              var defaultStyle = {
                color: selectColor(attribute),
                weight: 2,
                opacity: 1,
              };
              layer.setStyle(defaultStyle);
            });

            // Add data to the GeoJSON layer
            geoJsonLayer.addData(data);

            // Return the GeoJSON layer
            return geoJsonLayer;
          };

          const outline = (data) => {
            // Create an empty GeoJSON layer
            var geoJsonLayer = L.geoJSON(null, {
              style: function (feature) {
                // Extract attributes from the feature
                let attribute = feature.properties.pave_type;
                // Determine style based on the attribute value
                var color = setRoadSymbol(attribute);
                return color;
              },
            });

            // Add data to the GeoJSON layer
            geoJsonLayer.addData(data);

            // Return the GeoJSON layer
            return geoJsonLayer;
          };

          // Example usage with your geojsonData
          currentMapLayer.value = layerInfForLines(geojsonData);
          roadOutline.value = outline(geojsonData);

          roadOutline.value.addTo(map.value).bringToFront();

          currentMapLayer.value.addTo(map.value).bringToFront();

          Layerbounds.value = currentMapLayer.value.getBounds();

          map.value.flyToBounds(Layerbounds.value, { padding: [100, 100] });
        } else {
          if (currentMapLayer.value) {
            showAttributeCard.value = false;
            map.value.removeLayer(currentMapLayer.value);
          }

          const { clickedIcon } = markers;

          const geojsonData = await selectedVect();

          const layerInf = (data) => {
            // Create an empty GeoJSON layer
            var geoJsonLayer = L.geoJSON(null, {
              pointToLayer: function (feature, latlng) {
                // Extract attributes from the feature
                let attribute;
                if (
                  infrastructureFilter.value.class3filter === "" ||
                  infrastructureFilter.value.class3filter === "all"
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

            // Add click event listener to each GeoJSON point feature
            geoJsonLayer.on("click", function (event) {
              showAttributeCard.value = !showAttributeCard.value;

              // Get the clicked feature
              // Store the reference to the clicked marker
              clickedMarker.value = event.layer;

              console.log(clickedMarker.value);

              // Get the coordinates of the clicked feature
              var latlng = event.latlng;

              // Remove all existing selected markers
              geoJsonLayer.eachLayer(function (layer) {
                let attribute;
                if (
                  infrastructureFilter.value.class3filter === "" ||
                  infrastructureFilter.value.class3filter === "all"
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

              showAttributeCard.value = true;

              // Fly to the clicked marker's location with smooth animation
              map.value.flyTo(latlng, 10); // You can adjust the zoom level (15 is just an example)
            });

            // Listen for popup close event
            map.value.on("popupclose", function (event) {
              showAttributeCard.value = !showAttributeCard.value;
              var marker = event.popup._source;
              let attribute;
              if (
                infrastructureFilter.value.class3filter === "" ||
                infrastructureFilter.value.class3filter === "all"
              ) {
                attribute = marker.feature.properties.Class3;
              } else {
                attribute = marker.feature.properties.Class4;
              }
              var defaultMarkerIcon = selectIcon(attribute);
              marker.setIcon(defaultMarkerIcon);
              //map.value.flyToBounds(currentMapLayer.value.getBounds());
            });

            // Add data to the GeoJSON layer
            geoJsonLayer.addData(data);

            // Return the GeoJSON layer
            return geoJsonLayer;
          };

          currentMapLayer.value = layerInf(geojsonData);

          currentMapLayer.value.addTo(map.value).bringToFront();

          Layerbounds.value = currentMapLayer.value.getBounds();
          console.log(Layerbounds.value);

          map.value.flyToBounds(Layerbounds.value, { padding: [100, 100] });

          // map.value.setZoom(map.value.getZoom() - 0.1);
        }

        Loading.hide();
      } catch (error) {
        console.log(error);
        Loading.hide();
      }
    };

    // Function to close the attribute card and reset the marker icon
    const closeCard = () => {
      if (selectedTab.value === "tarura") {
        showRoadAttributeCard.value = false;
        clickedRoadStart.value.removeFrom(map.value);
        clickedRoadEnd.value.removeFrom(map.value);

        var marker = clickedRoad.value;
        if (!marker) return;

        let attribute = marker.feature.properties.pave_type;

        var defaultStyle = roadOutlineSymbol(attribute);
        marker.setStyle(defaultStyle);

        map.value.flyToBounds(Layerbounds.value);
      } else {
        Loading.show({
          spinner: QSpinnerFacebook,
          spinnerSize: "xl",
          message: "Creating Map layer...",
        });
        showAttributeCard.value = false;
        var marker = clickedMarker.value;
        if (!marker) return; // Check if a marker was clicked

        let attribute;
        if (
          infrastructureFilter.value.class3filter === "" ||
          infrastructureFilter.value.class3filter === "all"
        ) {
          attribute = marker.feature.properties.Class3;
        } else {
          attribute = marker.feature.properties.Class4;
        }
        var defaultMarkerIcon = selectIcon(attribute);
        marker.setIcon(defaultMarkerIcon);

        map.value.setZoom(10);

        //map.value.flyToBounds(Layerbounds.value);

        // Clear the clickedMarker reference
        clickedMarker.value = null;
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

    const roadFilter = computed(() => {
      return roadStore.getRoadPhase;
    });

    const roadFilterStatus = computed(() => {
      return roadStore.getRoadFilters.filterStatus;
    });

    const infFilterStatus = computed(() => {
      return infStore.getInfFilters.filterStatus;
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

    watch(
      roadFilterStatus,
      () => {
        setVector();
      },
      { deep: true }
    );

    watch(
      infFilterStatus,
      () => {
        setVector();
      },
      { deep: true }
    );

    watch(
      infrastructureFilter,
      () => {
        setVector();
      },
      { deep: true }
    );

    watch(store.userSelection, () => {
      setVector();
    });

    watch(roadFilter, () => {
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
      showRoadAttributeCard,
      closeCard,
      featureAtributes,
      selectedTab,
      roadFeatureAttributes,
      position,
      scrollAreaRef,
      scroll() {
        scrollAreaRef.value.setScrollPosition("vertical", position.value);
        position.value = position.value + 300;
      },
      thumbStyle: {
        right: "2px",
        borderRadius: "5px",
        backgroundColor: "#027be300",
        width: "5px",
        opacity: "0.75",
      },
    };
  },
});
</script>

<style lang="scss" scoped>
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

.attribute-card {
}

.road-attribute-card {
  position: absolute;
  z-index: 800;
  right: 2%;
  top: 2%;
}

.zoom-controls {
  position: absolute;
  z-index: 800;
  right: 1%;
  bottom: 7%;
  @media (max-width: $breakpoint-lg-min) {
    bottom: 12%;
  }
}

.radio-rect {
  position: absolute;
  z-index: 800;
  left: 1%;
  top: 2%;
}

.roads-legend {
  position: absolute;
  z-index: 800;
  left: 1%;
  bottom: 2%;
  border-radius: 5px;
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

/* css to customize Leaflet default styles  */
.popupCustom .leaflet-popup-tip,
.popupCustom .leaflet-popup-content-wrapper {
  display: none;
}

.road-symbol {
  border-top: solid 2px black;
  border-bottom: solid 2px black;
  width: 35px;
  height: 8px;
}

.dotted-line {
  border: 2px dotted red;
  width: 35px;
  height: 0;
}
</style>
