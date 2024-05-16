<template>
  <div class="row bg-grey-1" style="width: 100%; min-height: 25vh">
    <div class="col-3 q-pa-md">
      <q-card flat class="my-card">
        <q-card-section class="text-black">
          <q-chip size="" class="bg-white">
            <q-avatar
              color="primary"
              text-color="white"
              icon="mdi-human-male-female"
            />
            Total Population
          </q-chip>
          <div class="text-h4 q-my-md text-center">{{ cardData[grantee] }}</div>
        </q-card-section>
        <q-card-section class="text-black">
          <q-chip class="bg-white">
            <q-avatar
              color="primary"
              text-color="white"
              icon="mdi-human-male-female"
            />
            Value
          </q-chip>
          <div class="text-h4 q-my-md text-center">{{ cardData[grantee] }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div v-if="grantee === 'total'" class="col-6 q-pa-md">
      <barChart :data="tableData" />
    </div>
    <div v-else class="col-6 q-py-md">
      <pieChart :data="pieData.data" :options="pieData.options"/>
    </div>
    <div class="col-3 q-py-md">
      <div class="column">
        <q-virtual-scroll
          class="scroll-area q-pt-md"
          type="table"
          flat
          style="max-height: 25vh"
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          :virtual-scroll-item-size="25"
          :virtual-scroll-sticky-size-start="20"
          :virtual-scroll-sticky-size-end="25"
          :items="visibleItems"
          v-slot="{ item: row, index }"
        >
          <div class="row q-px-md">
            <div class="">
              <q-chip class="bg-white">
                <q-avatar size="sm" color="green" text-color="white">{{
                  districtData.findIndex(
                    (obj) => obj.district === row.district
                  ) + 1
                }}</q-avatar>
                <div class="text-caption">{{ row.district }}</div>
              </q-chip>
            </div>

            <q-space />

            <div class="col-4">
              <div class="row justify-between">
                <div class="col">
                  <span class="text-caption">{{ row[grantee] }}</span>
                </div>
                <div class="col-4">
                  <span class="text-caption text-primary"
                    >{{
                      Math.round((row[grantee] / cardData[grantee]) * 1000) /
                      10
                    }}%</span
                  >
                </div>
              </div>
            </div>
          </div>
        </q-virtual-scroll>
        <div class="row bg-white q-py-md justify-center">
          <q-btn
            class="q-ma-xs"
            size="xs"
            outline
            round
            color="primary"
            icon="mdi-chevron-up"
            @click="previous"
            :disable="startIndex === 0"
          />
          <q-btn
            class="q-ma-xs"
            size="xs"
            outline
            round
            color="primary"
            icon="mdi-chevron-down"
            @click="next"
            :disable="endIndex >= districtData.length"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import pieChart from "src/components/charts/doughnut.vue";
import barChart from "src/components/charts/barChart.vue";
import { useSumStore } from "stores/sumdata/index.js";
import { options } from "../charts/chartConfig";

const virtualListRef = ref(null);
const virtualListIndex = ref(1200);

const startIndex = ref(0),
  endIndex = ref(5);

const store = useSumStore();

const grantee = computed(() => {
  return store.getUserSelection.faGrantee;
});

const districtData = computed(() => {
  let data = store.getctTable;

  let filteredData = data.filter(
    (obj) =>
      obj.district !== "Total" && obj.district !== "All (National Coverage)"
  );

  filteredData.sort((a, b) => b[grantee.value] - a[grantee.value]);

  filteredData = filteredData.filter((obj) => obj[grantee.value] !== 0);

  return filteredData;
});

const visibleItems = computed(() => {
  return districtData.value.slice(startIndex.value, endIndex.value);
});

const cardData = computed(() => {
  let data = store.getctTable;

  // Find the object with district value 'Total'
  const totalObject = data.find((obj) => obj.district === "Total");

  return totalObject;
});

const tableData = computed(() => {
  // Given array of objects
  const data = store.getctTable;

  // Find the object with district value 'Total'
  const totalObject = data.find((obj) => obj.district === "Total");

  // Exclude specified keys and their values
  const { district, total, value, ...rest } = totalObject;

  // Extract labels and values from the remaining key-value pairs
  const labels = Object.keys(rest);
  const values = Object.values(rest);

  // Create an array of objects with label-value pairs
  const labelValuePairs = labels.map((label, index) => ({
    label,
    value: values[index],
  }));

  console.log(labelValuePairs);

  // Sort label-value pairs based on values in descending order
  labelValuePairs.sort((a, b) => b.value - a.value);

  // Extract sorted labels and values into separate arrays
  const sortedLabels = labelValuePairs.map((pair) => pair.label);
  const sortedValues = labelValuePairs.map((pair) => pair.value);

  return {
    labels: sortedLabels,
    datasets: [
      {
        backgroundColor: ["#364958", "#3B6064", "#55828B", "#87BBA2"],
        borderColor: "rgba(0, 0, 0, 0)",
        borderRadius: 5,
        borderWidth: 2,
        spacing: 0,
        cutout: "50%",
        radius: "75%",
        data: sortedValues,
      },
    ],
  };
});

const pieData = computed(() => {
  const data = store.getctTable;

  // Find the object with district value 'Total'
  let totalObject = data.find((obj) => obj.district === "Total");

  // Exclude specified keys and their values
  const { district, total, value, ...rest } = totalObject;

  console.log(rest);

  const totalOtherValues = Object.keys(rest)
    .filter((key) => key !== grantee.value)
    .reduce((sum, key) => sum + rest[key], 0);

  const chartdata = {
    labels: [grantee.value, "Other Grantees"],
    datasets: [
      {
        backgroundColor: ["#8BCC00", "#dce1de"],
        borderColor: "rgba(0, 0, 0, 0)",
        borderRadius: 0,
        borderWidth: 2,
        spacing: 0,
        cutout: "75%",
        radius: "90%",
        data: [rest[grantee.value], totalOtherValues],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "left",
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: grantee.value,
        align: "start",
      },
    },
  };

  return {
    data: chartdata,
    options: chartOptions
  };
});

onMounted(() => {
  console.log(tableData.value);
});

const next = () => {
  startIndex.value += 5;
  endIndex.value += 5;
};

const previous = () => {
  startIndex.value -= 5;
  endIndex.value -= 5;
};
</script>
