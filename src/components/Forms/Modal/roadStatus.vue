<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-select
        clearable
        @update:model-value="setRoadStatus"
        dense
        outlined
        v-model="model"
        :options="options"
        label="Select Status"
      >
        <!-- <template v-slot:hint> Select multiple or leave blank </template> -->
      </q-select>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoadStore } from "src/stores/roads";

const store = useRoadStore();

const model = ref(null),
  options = ref(["Ongoing", "Completed", "Procurement", "Design"]);

const setRoadStatus = (val) => {
  store.setRoadStatus(val);
};

// const model = computed(() => {
//   return store.getRoadFilters.raodStatus;
// });

const filterState = computed(() => {
  return store.getRoadFilters.filterStatus
})

watch(filterState, (val) => {
  if (!val) {
    model.value = null
    store.setRoadStatus(model.value)
  }
})
</script>
