<template>
  <q-select outlined bottom-slots v-model="model" :options="options" :dense="dense" :options-dense="denseOpts"
    @update:model-value="setRoadPhase">
    <template v-slot:prepend>
      <!-- <div>
        <img :src="currentLogo" style="width: 56px" />
      </div> -->
    </template>

    <template v-slot:after>
      <q-btn round outline dense size="sm" icon="mdi-information-variant" color="primary" @click="toolbar = true" />
    </template>

    <!-- <template v-slot:hint
        ><div class="row items-center q-gutter-x-sm">
          <div class="text-weight-medium">Value Chain:</div>
          <div>
            <q-avatar
              size="24px"
              color="white"
              text-color="primary"
              icon="mdi-fruit-cherries"
            />
            {{ currentText.valueChain }}
          </div>
        </div></template
      > -->
  </q-select>

  <q-dialog v-model="toolbar">
    <q-card>
      <q-toolbar>
        <!-- <div>
          <img :src="currentLogo" style="width: 56px" />
        </div> -->

        <q-toolbar-title><span class="text-weight-bold">{{ model }}</span>
        </q-toolbar-title>

        <q-btn flat size="12px" round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section> phase information </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoadStore } from "src/stores/roads";

const store = useRoadStore();

const options = ref([
  { label: "All Phases", value: "All" },
  { label: "Phase 1", value: "Phase1" },
  { label: "Phase 2", value: "Phase2" },
  { label: "Phase 3", value: "Phase3" },
]),
  model = ref({ label: "All Phases", value: "All" }),
  dense = ref(false),
  toolbar = ref(false),
  denseOpts = ref(false);

const setRoadPhase = (val) => {
  store.setRoadPhase(val.value)
  store.setFilterStatus(false)
}
</script>
