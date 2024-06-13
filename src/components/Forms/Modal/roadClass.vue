<template>
  <div class="q-pa-sm">
    <q-checkbox
      v-model="selection"
      val="Collector"
      label="Collector"
      color="primary"
    />
    <q-checkbox
      v-model="selection"
      val="Feeder"
      label="Feeder"
      color="primary"
    />
    <q-checkbox
      v-model="selection"
      val=""
      label="Other"
      color="primary"
    />
    <!-- <q-option-group
      :options="options"
      type="checkbox"
      v-model="group"
      inline=""
    /> -->
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoadStore } from "src/stores/roads";

const store = useRoadStore();

const group = ref([]),
  selection = ref([]),
  options = ref([
    { label: "Collector Road", value: "Collector" },
    { label: "Feeder Road", value: "Feeder" },
  ]);

const clearFilter = computed(() => {
  return store.getRoadFilters.clearFilter;
});

watch(
  clearFilter,
  (val) => {
    if (val) selection.value = [];
  },
  { deep: true }
);

const selectedRoadClass = computed(() => {
  return selection.value;
});

watch(selectedRoadClass, (val) => {
  store.setRoadClass(val);
});

const filterState = computed(() => {
  return store.getRoadFilters.filterStatus
})

watch(filterState, (val) => {
  if (!val) {
    selection.value = []
    store.setRoadClass(selection.value)
  }
})
</script>
