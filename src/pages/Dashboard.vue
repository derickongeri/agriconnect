<template>
  <q-drawer
    class="tablet-element"
    v-model="drawer"
    :width="400"
    :breakpoint="500"
    overlay
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-1'"
    style="overflow: hidden"
  >
    <filtertabs />
    <div class="toggle-side">
      <q-btn
        round
        color="grey-1"
        text-color="primary"
        icon="mdi-chevron-left"
        @click="drawer = !drawer"
      />
    </div>
  </q-drawer>
  <q-page class="page-body">
    <div class="toggle-side-open">
      <q-btn
        round
        size="sm"
        color="grey-1"
        text-color="primary"
        icon="mdi-chevron-right"
        @click="drawer = !drawer"
      />
    </div>
    <div class="dash-desktop row" style="flex: 1">
      <div class="content" style="flex: 1; display: flex">
        <div class="column filters-column q-mt-none">
          <filtertabs />
        </div>
        <div class="mobile-element">
          <filtertabs />
        </div>
        <div class="column dash-column" v-if="selectedTab === 'pirs'">
          <div class="row dash-row-top bg-white items-center">
            <div
              v-if="sumsTab === 'responses'"
              class="bg-white indicator-selection q-pa-none q-ma-sm"
              style="position: absolute; width: 35%; z-index: 1000"
            >
              <indicatorSelection />
            </div>

            <div
              v-if="sumsTab === 'faindicators'"
              class="bg-white indicator-selection q-pa-none q-ma-sm"
              style="position: absolute; width: 35%; z-index: 1000"
            >
              <faIndicatorSelection />
            </div>
            <q-space></q-space>
            <div class="q-pa-md">
              <q-btn
                class="q-px-lg"
                outline
                icon-right="mdi-cloud-download"
                color="grey-6"
                label="Export"
                no-caps
              />
            </div>
          </div>
          <q-separator></q-separator>
          <div class="row pirs-map" style=""><mappanel /></div>
          <div class="pirs-table-tab">
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="left"
              narrow-indicator
              inline-label
            >
              <q-tab no-caps name="mails" label="Table" icon="mdi-table" />
              <q-tab
                no-caps
                name="alarms"
                label="Charts"
                icon="mdi-chart-pie"
              />
              <!-- <q-tab name="movies" label="Description" /> -->
            </q-tabs>

            <!-- <q-separator /> -->

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel style="" name="mails">
                <tablepirs />
              </q-tab-panel>

              <q-tab-panel class="q-pa-none" name="alarms">
                <chartSums />
              </q-tab-panel>

              <!-- <q-tab-panel class="q-pa-none" name="alarms">
                <chartSums/>
              </q-tab-panel> -->
            </q-tab-panels>
          </div>
        </div>
        <div
          class="column dash-column"
          v-if="selectedTab === 'infrastructure'"
        >
          <div
            class="row dash-row-top bg-white items-center"
            style="width: 100%; height: 10%"
          >
            <div
              class="bg-white indicator-selection q-pa-none q-ma-sm"
              style="position: absolute; width: 30%; z-index: 1000"
            >
              <div class="text-h6">Infrastructure by {{ grantee }}</div>
            </div>
            <q-space></q-space>
            <div class="q-pa-md">
              <q-btn
                class="q-px-lg"
                outline
                rounded
                icon="mdi-export"
                color="grey-6"
                label="Export"
              />
            </div>
          </div>
          <div class="row full-map"><mappanel /></div>
        </div>
        <div class="column dash-column" v-if="selectedTab === 'tarura'">
          <div
            class="row dash-row-top bg-white items-center"
            style="width: 100%; height: 10%"
          >
            <div
              class="bg-white indicator-selection q-pa-none q-ma-sm"
              style="position: absolute; width: 30%; z-index: 1000"
            >
              <div class="text-h6">Roads</div>
            </div>
            <q-space></q-space>
            <div class="q-pa-md">
              <q-btn
                class="q-px-lg"
                outline
                rounded
                icon="mdi-export"
                color="grey-6"
                label="Export"
              />
            </div>
          </div>
          <q-separator></q-separator>
          <div class="full-map row"><mappanel /></div>
          <!-- <div
            class="absolute "
            style="z-index:1000; bottom:3%; width: 100%; overflow: hidden"
          ><infdialog/></div> -->
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed, defineComponent, onMounted, ref } from "vue";

//import pirstable from "../components/Composables/pirstable.vue";
import infdialog from "src/Reusable/infrustructuredialog.vue";
import mappanel from "../components/Composables/map.vue";
import tablepirs from "../components/Composables/tablepirs.vue";
import chartSums from "src/components/Composables/sumsChart.vue";
import filtertabs from "../components/Filter/filtertabs.vue";
import indicatorSelection from "src/components/Composables/indicatorselection.vue";
import faIndicatorSelection from "src/components/Composables/faindicatorselection.vue";
import { useSumStore } from "stores/sumdata/index.js";

const store = useSumStore();

const tab = ref("mails");

const drawer = ref(false);

const selectedTab = computed(() => {
  return store.getCurrentTab;
});

const sumsTab = computed(() => {
  return store.getSumsTab;
});

const grantee = computed(() => {
  switch (store.getUserSelection.faGrantee) {
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
      return "All Grantees";
  }
});

// onMounted(() => {
//   selectedTab.value = store.getCurrentTab;
//   sumsTab.value = store.sumsTab
// });
</script>

<style scoped>
.page-body {
  display: flex;
  flex-direction: column;
  height: 85vh; /* Set the height of the page to the full viewport height */
  background: #ffffff; /* url("~/src/assets/3387682.jpg") no-repeat center; */
  background-size: cover;
  overflow: hidden;
}
.content {
  display: flex;
}
</style>
