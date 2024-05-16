<template>
  <q-page class="page-body">
    <div class="row" style="flex: 1">
      <div class="content" style="flex: 1; display: flex">
        <div class="column q-mt-none q-mr-lg" style="max-width: 35%; flex: 1">
          <filtertabs />
        </div>
        <div
          class="column bg-none q-mt-none q-mr-xl"
          style="min-width: 65%; flex: 1; border-radius: 2px; border-color: grey;"
          v-if="selectedTab === 'pirs'"
        >
          <div
            class="row bg-white items-center"
            style="width: 100%; height: 8%;"
          >
            <div
              v-if="sumsTab === 'responses'"
              class="bg-white indicator-selection q-pa-none q-ma-sm"
              style="position: absolute; width: 25%; z-index: 1000"
            >
              <indicatorSelection/>
            </div>

            <div
              v-if="sumsTab === 'faindicators'"
              class="bg-white indicator-selection q-pa-none q-ma-sm"
              style="position: absolute; width: 25%; z-index: 1000;"
            >
              <faIndicatorSelection/>
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
          <div class="row" style="width: 100%; height: 47%"><mappanel /></div>
          <div
            class="bg-white"
            style="width: 100%; height: 34%; overflow: hidden"
          >
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
              <q-tab name="mails" label="Table" icon="mdi-table"/>
              <q-tab name="alarms" label="Charts" icon="mdi-chart-pie"/>
              <!-- <q-tab name="movies" label="Description" /> -->
            </q-tabs>

            <!-- <q-separator /> -->

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                <tablepirs/>
              </q-tab-panel>

              <q-tab-panel class="q-pa-none" name="alarms">
                <chartSums/>
              </q-tab-panel>

              <!-- <q-tab-panel class="q-pa-none" name="alarms">
                <chartSums/>
              </q-tab-panel> -->

            </q-tab-panels>
          </div>
        </div>
        <div
          class="column q-mt-none q-mr-xl"
          style="min-width: 65%; flex: 1"
          v-if="selectedTab === 'infrastructure'"
        >
          <div
            class="row bg-white items-center"
            style="width: 100%; height: 10%"
          >
            <div
              class="bg-white indicator-selection q-pa-none q-ma-sm"
              style="position: absolute; width: 30%; z-index: 1000"
            >
              <div class="text-h6">Helvetas Infrastructure</div>
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
          <div class="row" style="width: 100%; height: 79%"><mappanel/></div>
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
import infdialog from "src/Reusable/infrustructuredialog.vue"
import mappanel from "../components/Composables/map.vue";
import tablepirs from "../components/Composables/tablepirs.vue";
import chartSums from "src/components/Composables/sumsChart.vue"
import filtertabs from "../components/Filter/filtertabs.vue";
import indicatorSelection from "src/components/Composables/indicatorselection.vue"
import faIndicatorSelection from "src/components/Composables/faindicatorselection.vue"
import { useSumStore } from "stores/sumdata/index.js";

const store = useSumStore();

const tab = ref('mails');

const selectedTab = computed(() => {
  return store.getCurrentTab;
});

const sumsTab = computed(()=>{
  return store.getSumsTab
})

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
