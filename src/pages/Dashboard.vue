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
              class="bg-white indicator-selection q-pa-none q-ma-sm"
              style="position: absolute; width: 25%; z-index: 1000"
            >
              <indicatorSelection/>
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
          <div class="row" style="width: 100%; height: 50%"><mappanel /></div>
          <div
            class="bg-white"
            style="width: 100%; height: 30%; overflow: hidden"
          >
            <!-- <tablepirs /> -->
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
              <!-- <q-tab name="movies" label="Movies" /> -->
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                <tablepirs/>
              </q-tab-panel>

              <q-tab-panel name="alarms">
                <chartSums/>
              </q-tab-panel>

              <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
        <div
          class="column bg-none q-mt-none q-mr-xl"
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
              <!-- <q-select
                class="bg-white"
                v-model="model"
                :options="options"
                options-cover
                label="Selected Indicator"
              >
                <template v-slot:option="scope">
                  <q-item v-bind="scope.itemProps">
                    <q-item-section>
                      <q-item-label>{{ scope.opt.value }}</q-item-label>
                      <q-item-label caption style="width: 350px">{{
                        scope.opt.label
                      }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </template>
              </q-select> -->
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
          <div class="row" style="width: 100%; height: 79%"><mappanel /></div>
          <div
            class="row bg-white"
            style="width: 100%; height: 1%; overflow: hidden"
          ></div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed, defineComponent, onMounted, ref } from "vue";

//import pirstable from "../components/Composables/pirstable.vue";
import mappanel from "../components/Composables/map.vue";
import tablepirs from "../components/Composables/tablepirs.vue";
import chartSums from "src/components/Composables/sumsChart.vue"
import filtertabs from "../components/Filter/filtertabs.vue";
import indicatorSelection from "src/components/Composables/indicatorselection.vue"
import { useSumStore } from "stores/sumdata/index.js";

const store = useSumStore();

const model = ref(null);
const tab = ref('mails');
//const selectedTab = ref(store.getCurrentTab);

const options = ref([
  {
    label:
      "Number of farmer cooperatives/groups qualified/certified for voluntary sustainability standards.",
    value: "1.17",
  },
  {
    label: "Number of farmers trained in at least one CSA technology/practice.",
    value: "20.01",
  },
  {
    label:
      "Number of farmers adopting at least one CSA technology/practice with support from the programme.",
    value: "1.2",
  },
  {
    label:
      "Number of farmer cooperatives/groups qualified/certified for voluntary sustainability standards.",
    value: "1.17",
  },
  {
    label: "Number of farmers trained in at least one CSA technology/practice.",
    value: "20.01",
  },
  {
    label:
      "Number of farmers adopting at least one CSA technology/practice with support from the programme.",
    value: "1.2",
  },
  {
    label:
      "Number of farmer cooperatives/groups qualified/certified for voluntary sustainability standards.",
    value: "1.17",
  },
  {
    label: "Number of farmers trained in at least one CSA technology/practice.",
    value: "20.01",
  },
  {
    label:
      "Number of farmers adopting at least one CSA technology/practice with support from the programme.",
    value: "1.2",
  },
]);

const selectedTab = computed(() => {
  return store.getCurrentTab;
});

onMounted(() => {
  selectedTab.value = store.getCurrentTab;
});
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
