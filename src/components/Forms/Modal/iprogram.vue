<template>
  <!-- <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-select
        bottom-slots
        dense
        outlined
        multiple
        v-model="model"
        :options="options"
        label="Select Program"
      >
        <template v-slot:hint> Select multiple or leave blank </template>
      </q-select>
    </div>
  </div> -->
  <q-item-label class="q-px-sm" caption="">*You can select multiple</q-item-label>

  <div class="q-pa-sm">
    <div class="row">
      <q-checkbox
        v-model="selection"
        val="ROAD FUND"
        label="Road Fund"
        color="primary"
        checked-icon="mdi-checkbox-marked-circle"
        unchecked-icon="mdi-shape-circle-plus"
      />
    </div>
    <div class="row">
      <q-checkbox
        v-model="selection"
        val="EU"
        label="European Union (EU)"
        color="primary"
        checked-icon="mdi-checkbox-marked-circle"
        unchecked-icon="mdi-shape-circle-plus"
      />
    </div>
    <div class="row">
      <q-checkbox
        v-model="selection"
        val="FEDHA ZA MAJIMBO"
        label="Fedha za Majimbo"
        color="primary"
        checked-icon="mdi-checkbox-marked-circle"
        unchecked-icon="mdi-shape-circle-plus"
      />
    </div>



    <!-- <q-option-group
      :options="options"
      type="checkbox"
      v-model="group"
      inline=""
    /> -->
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoadStore } from "src/stores/roads";

const store = useRoadStore();

const model = ref(null),
  options = ref(["EU", "ROAD FUND", "FEDHA ZA MAJIMBO"]),
  selection = ref([]);

const selectedProgram = computed(() => {
  return selection.value;
});

watch(selectedProgram, (val) => {
  store.setRoadFund(val);
});

const filterState = computed(() => {
  return store.getRoadFilters.filterStatus
})

watch(filterState, (val) => {
  if (!val) {
    selection.value = []
    store.setRoadFund(selection.value)
  }
})
</script>
