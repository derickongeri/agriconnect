<template>
  <div class="row bg-grey-1" style="width: 100%; min-height: 25vh">
    <div class="col-3 q-pa-md">
      <q-card flat class="my-card">
        <q-card-section class="text-black">
          <div class="row q-gutter-md items-center">
            <q-icon
              size="md"
              color="primary"
              text-color="white"
              name="mdi-human-male-female"
            />
            <div>Total Population</div>
          </div>
          <div class="text-h4 q-my-md text-center">{{ districtData.cardData[grantee] }}</div>
        </q-card-section>
        <q-card-section class="text-black">
          <div class="row q-gutter-md items-center">
            <q-icon size="md" color="primary" name="mdi-human-male-female" />
            <div>value</div>
          </div>
          <div class="text-h4 q-my-md text-center">{{ districtData.cardData[grantee] }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div v-if="grantee === 'total'" class="col-6 q-pa-md">
      <barChart :data="districtData.barchartData" />
    </div>
    <div v-else class="col-6 q-py-md">
      <pieChart :data="districtData.peichartData.data" :options="districtData.peichartData.options" />
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
                  districtData.listData.findIndex(
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
                      Math.round((row[grantee] / districtData.cardData[grantee]) * 1000) /
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
            :disable="endIndex >= districtData.listData.length"
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
import { fadataProcessor } from "src/Services/charts/fachartData.js";

const startIndex = ref(0),
  endIndex = ref(5);

const store = useSumStore();

const grantee = computed(() => {
  return store.getUserSelection.faGrantee;
});

const districtData = computed(() => {
  const faData = fadataProcessor(store.getctTable, grantee.value);
  return faData;
});

const visibleItems = computed(() => {
  return districtData.value.listData.slice(startIndex.value, endIndex.value);
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
