<template>
  <div v-if="showSumsSelection == 'at'">
    <q-select
      class="q-px-sm"
      outlined
      dense
      v-model="atYear"
      :options="atYearOptions"
      label="Select Year"
      @update:model-value="getselectedYear"
    />
    <!-- <div class="q-py-lg">
      <q-option-group
        v-model="atQuarter"
        :options="atQuarterOptions"
        color="primary"
        right-label
      />
    </div> -->
  </div>
  <div v-if="showSumsSelection == 'ct'">
    <q-select
      class="q-px-sm"
      outlined
      dense
      v-model="ctYear"
      :options="ctYearOptions"
      label="Select Period"
      @update:model-value="getselectedYear"
    />
    <!-- <div class="q-py-lg">
      <q-option-group
        v-model="ctQuarta"
        :options="ctQuarterOptions"
        color="primary"
        right-label
      />
    </div> -->
  </div>
  <div v-if="showSumsSelection == 'sums'">
    <q-select
      class="q-px-sm"
      outlined
      dense
      v-model="year"
      :options="yearOptions"
      label="Select Year"
      @update:model-value="getselectedYear"
    />
    <div class="q-py-lg">
      <q-option-group
        v-model="quarter"
        :options="quarterOptions"
        color="primary"
        right-label
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";

import { useSumStore } from "src/stores/sumdata/index.js";

const store = useSumStore();

const showSumsSelection = ref("ct");

const ctYear = ref({ label: "2020-2024", value: "20202024" }),
  ctQuarta = ref("ct"),
  ctYearOptions = ref([
    // { label: "2020-2023", value: "20202023" },
    { label: "2020-2024", value: "20202024" },
    { label: "2020-2023", value: "20202023" },
    { label: "2020-2022", value: "20202022" },
    { label: "2020-2021", value: "20202021" },
  ]),
  ctQuarterOptions = ref([
    {
      label: "2020-2023",
      value: "ct",
    },
    {
      label: "2020/2021",
      value: "at_y1",
    },
    {
      label: "2021/2022",
      value: "at_y2",
    },
    {
      label: "2022/2023",
      value: "at_y3",
    },
  ]);

const year = ref({ label: "2021", value: "2021" }),
  yearOptions = ref([
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
  ]),
  quarter = ref("aprjun"),
  quarterOptions = ref([
    {
      label: "January - March",
      value: "janmar",
    },
    {
      label: "April - June",
      value: "aprjun",
    },
    {
      label: "July - September",
      value: "julsep",
    },
    {
      label: "October - December",
      value: "octdec",
    },
  ]);

const atYear = ref({ label: "2023-2024", value: "20232024" }),
  atYearOptions = ref([
    { label: "2023-2024", value: "20232024" },
    { label: "2022-2023", value: "20222023" },
    { label: "2021-2022", value: "20212022" },
    { label: "2020-2021", value: "20202021" },
  ]),
  atQuarter = ref({ quarter: "at" }),
  atQuarterOptions = ref([
    {
      label: `July - September ${atYear.value.value.slice(0, 4)}`,
      value: { quarter: "julsep", year: atYear.value.value.slice(0, 4) },
    },
    {
      label: `October - December ${atYear.value.value.slice(0, 4)}`,
      value: { quarter: "octdec", year: atYear.value.value.slice(0, 4) },
    },
    {
      label: `January - March ${atYear.value.value.slice(-4)}`,
      value: { quarter: "janmar", year: atYear.value.value.slice(-4) },
    },
    {
      label: `April - June ${atYear.value.value.slice(-4)}`,
      value: { quarter: "aprjun", year: atYear.value.value.slice(-4) },
    },
    {
      label: `Total ${atYear.value.value.slice(
        0,
        4
      )} - ${atYear.value.value.slice(-4)}`,
      value: { quarter: "at" },
    },
  ]);

const getselectedYear = (val) => {
  console.log(year.value);
  store.setSelectedYear(val.value);
};

watch(quarter, (val) => {
  store.setSelectedQuota(val);
});

watch(atQuarter, (val) => {
  // if(val.)
  // console.log("at selection", val.quarter, val.year);
  if (val.quarter !== "at") {
    console.log("at selection", val.quarter, val.year);
    store.setSelectedYear(val.year);
    store.setSelectedQuota(val.quarter);
    store.setTableType("sums");
  }
});

// watch(ctQuarta, (val) => {
//   store.setSelectedAggregate(val);
// });

const selectedTable = computed(() => {
  return store.getSelectedTable;
});

watch(
  selectedTable,
  (val) => {
    showSumsSelection.value = val;
  },
  { deep: true }
);

watch(atYear, (val) => {
  const years = {
    at_year1: val.value.slice(0, 4),
    at_year2: val.value.slice(-4),
  };

  store.setATyears(years);

  atQuarterOptions.value = [
    {
      label: `July - September ${val.value.slice(0, 4)}`,
      value: "total_q1",
    },
    {
      label: `October - December ${val.value.slice(0, 4)}`,
      value: "total_q2",
    },
    {
      label: `January - March ${val.value.slice(-4)}`,
      value: "total_q3",
    },
    {
      label: `April - June ${val.value.slice(-4)}`,
      value: "total_q4",
    },
    {
      label: `Total ${val.value.slice(0, 4)} - ${val.value.slice(-4)}`,
      value: "at",
    },
  ];
});
</script>
