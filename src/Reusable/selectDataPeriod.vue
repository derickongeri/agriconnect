<template>
  <q-select
    class="q-px-sm"
    outlined
    dense
    v-model="table"
    :options="tableOptions"
    @update:model-value="setTable"
  />
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";

import { useSumStore } from "src/stores/sumdata/index.js";

const store = useSumStore();

const table = ref({ label: "Cumulative Total", value: "ct" }),
  tableOptions = ref([
    { label: "Cumulative Total", value: "ct" },
    { label: "Annual Totals", value: "at" },
    { label: "Quarterly", value: "sums" },
  ]);

const setTable = (val) => {
  let defaultSelection = {};
  if (val.value == "ct") {
    defaultSelection = {
      year: "20202024",
      aggregate: "ct",
    };
  } else if (val.value == "at") {
    defaultSelection = {
      year: "20222023",
      aggregate: "at",
    };
  } else {
    defaultSelection = {
      year: "2021",
      aggregate: "total",
    };
  }

  store.setTableType(val.value);
  store.setDefaultUserSelection(defaultSelection);
};
</script>
