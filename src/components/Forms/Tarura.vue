<template>
  <div class="text-subtitle2 q-mb-md">
    TANZANIA RURAL AND URBAN ROADS AGENCY - TARURA
  </div>

  <selectPhase />

  <div class="q-pa-sm" style="border-radius: 5px">
    <div class="text-weight-medium q-my-sm">Filter Attributes</div>

    <q-separator class="q-my-sm" />
    <q-scroll-area
      :thumb-style="thumbStyle"
      class="filter-form"
      style="height: 50vh;"
    >
      <div class="filter-text text-label q-mx-sm q-py-sm" style="">
        Road Funding
      </div>
      <iprogram />

      <q-separator inset class="q-my-md" />

      <div class="filter-text text-label q-mx-sm q-py-sm" style="">
        Road Class
      </div>
      <roadClass />

      <q-separator inset class="q-my-md" />

      <div class="filter-text text-label q-mx-sm q-pb-sm" style="">
        Road Status
      </div>
      <roadStatus />

      <q-separator class="q-mb-md" />

      <div class="row justify-between q-gutter-x-xs q-px-sm">
        <div class="col">
          <q-btn
            unelevated
            outline
            dense
            no-caps
            @click="clearFilters"
            :label="filteredFeatures"
            class="full-width q-mb-md q-mx-sm q-px-lg"
            color="primary"
          >
            <template v-slot:loading>
              <q-spinner-facebook />
            </template>
          </q-btn>
        </div>
        <div class="col">
          <q-btn
            unelevated
            dense
            no-caps
            @click="submitForm"
            label="Apply"
            class="full-width q-mb-md q-mx-sm q-px-lg"
            color="primary"
          >
            <template v-slot:loading>
              <q-spinner-facebook />
            </template>
          </q-btn>
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import selectPhase from "src/components/Forms/Modal/selectPhase.vue";
import roadClass from "src/components/Forms/Modal/roadClass.vue";
import laneFilter from "src/components/Forms/Modal/laneFilter.vue";
import iprogram from "src/components/Forms/Modal/iprogram.vue";
import surfaceType from "src/components/Forms/Modal/surfaceType.vue";
import roadStatus from "src/components/Forms/Modal/roadStatus.vue";
import { useRoadStore } from "src/stores/roads";

const store = useRoadStore();

const submitted = ref(false);

const filteredFeatures = computed(() => {
  if (submitted.value) {
    return `Clear (${store.getFilteredFeatures})`;
  } else {
    return `Clear`;
  }
});

const submitForm = () => {
  if (submitted.value) {
    store.clearAllFilters();
  }
  submitted.value = true;
  store.setFilterStatus();
};

const clearFilters = () => {
  submitted.value = false;
  store.clearAllFilters();
  store.setFilterFeatures(0);
};

const thumbStyle = ref({
  right: "-2px",
  borderRadius: "5px",
  backgroundColor: "#8BCC00",
  width: "5px",
  opacity: "0.75",
});
</script>
