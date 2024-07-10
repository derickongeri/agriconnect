<template>
  <div v-if="showTable == 'sct' && sumsTab == 'responses'">
    <div class="q-pa-none" style="width: 100%">
      <div class="row q-px-md q-pt-sm text-grey-8" style="font-weight: 700">
        <!-- <div class="col-1 ">Code</div> -->
        <div class="col-4">District</div>
        <div class="col text-center">2020/2021</div>
        <div class="col text-center">2021/2022</div>
        <div class="col text-center">2022-2023</div>
        <div class="col text-center">
          Total <br />
          2020-2023
        </div>
      </div>
    </div>
    <div class="" style="width: 100%">
      <q-virtual-scroll
        class="scroll-area"
        type="table"
        flat
        style="max-height: 25vh"
        :virtual-scroll-item-size="25"
        :virtual-scroll-sticky-size-start="20"
        :virtual-scroll-sticky-size-end="25"
        :items="tableData"
        v-slot="{ item: row, index }"
      >
        <div
          class="row q-px-md q-py-sm text-grey-8 items-center"
          :class="index % 2 === 0 ? 'even-row' : 'odd-row'"
          :key="index"
        >
          <!-- <div class="col-1 text-start q-px-md" style="font-weight: 700;">{{ index }}</div> -->

          <div class="col-4 q-ma-none q-px-none" style="font-weight: 400">
            {{ row.district }}
          </div>

          <div class="col text-center">
            {{ row.at_y1 }}
          </div>
          <div class="col text-center">
            {{ row.at_y2 }}
          </div>
          <div class="col text-center">
            {{ row.at_y3 }}
          </div>
          <div class="col text-center">
            {{ row.ct }}
          </div>
        </div>
      </q-virtual-scroll>
    </div>
  </div>
  <genderTable v-if="showTable == 'ct' && sumsTab == 'responses'" />
  <div v-if="showTable == 'at' && sumsTab == 'responses'">
    <div class="q-pa-none" style="width: 100%">
      <div class="row q-px-md q-pt-sm text-grey-8" style="font-weight: 700">
        <div class="col-4">District</div>
        <div class="col text-center">Adult<br />Male</div>
        <div class="col text-center">Adult<br />Female</div>
        <div class="col text-center">Youth<br />Male</div>
        <div class="col text-center">Youth<br />Female</div>
        <div class="col text-center">Total</div>
      </div>
    </div>
    <div class="" style="width: 100%">
      <q-virtual-scroll
        class="scroll-area"
        type="table"
        flat
        style="max-height: 25vh"
        :virtual-scroll-item-size="25"
        :virtual-scroll-sticky-size-start="20"
        :virtual-scroll-sticky-size-end="25"
        :items="tableData"
        v-slot="{ item: row, index }"
      >
        <div
          class="row q-px-md q-py-sm text-grey-8 items-center"
          :class="index % 2 === 0 ? 'even-row' : 'odd-row'"
          :key="index"
        >
          <!-- <div class="col-1 text-start q-px-md" style="font-weight: 700;">{{ index }}</div> -->

          <div class="col-4 q-ma-none q-px-none" style="font-weight: 400">
            {{ row.district }}
          </div>

          <div class="col text-center">
            {{ row.adult_male }}
          </div>
          <div class="col text-center">
            {{ row.adult_female }}
          </div>
          <div class="col text-center">
            {{ row.youth_male }}
          </div>
          <div class="col text-center">
            {{ row.youth_female }}
          </div>
          <div class="col text-center">
            {{ row.total }}
          </div>
        </div>
      </q-virtual-scroll>
    </div>
  </div>
  <div v-if="showTable == 'sums' && sumsTab == 'responses'">
    <div class="q-pa-none" style="width: 100%">
      <div class="row q-px-md q-pt-sm text-grey-8" style="font-weight: 700">
        <div class="col-4">District</div>
        <div class="col text-center">Adult<br />Male</div>
        <div class="col text-center">Adult<br />Female</div>
        <div class="col text-center">Youth<br />Male</div>
        <div class="col text-center">Youth<br />Female</div>
        <div class="col text-center">Total</div>
      </div>
    </div>
    <div class="" style="width: 100%">
      <q-virtual-scroll
        class="scroll-area"
        type="table"
        flat
        style="max-height: 25vh"
        :virtual-scroll-item-size="25"
        :virtual-scroll-sticky-size-start="20"
        :virtual-scroll-sticky-size-end="25"
        :items="tableData"
        v-slot="{ item: row, index }"
      >
        <div
          class="row q-px-md q-py-sm text-grey-8 items-center"
          :class="index % 2 === 0 ? 'even-row' : 'odd-row'"
          :key="index"
        >
          <!-- <div class="col-1 text-start q-px-md" style="font-weight: 700;">{{ index }}</div> -->

          <div class="col-4 q-ma-none q-px-none" style="font-weight: 400">
            {{ row.district }}
          </div>

          <div class="col text-center">
            {{ row.adult_male }}
          </div>
          <div class="col text-center">
            {{ row.adult_female }}
          </div>
          <div class="col text-center">
            {{ row.youth_male }}
          </div>
          <div class="col text-center">
            {{ row.youth_female }}
          </div>
          <div class="col text-center">
            {{ row.total }}
          </div>
        </div>
      </q-virtual-scroll>
    </div>
  </div>
  <div v-if="sumsTab == 'faindicators'">
    <div class="q-pa-none" style="width: 100%">
      <div class="table-head row q-px-none q-pt-sm text-grey-8" style="">
        <!-- <div class="col-1 ">Code</div> -->
        <div class="col-2">District</div>
        <div class="col text-center">Helvetas</div>
        <div class="col text-center">IDH</div>
        <div class="col text-center">PDF</div>
        <div class="col text-center">Rikolto</div>
        <div class="col text-center">Solidaridad <br />CERT</div>
        <div class="col text-center">Solidaridad <br />PACE</div>
        <div class="col text-center">Trias</div>
        <div class="col text-center">Viagro</div>
        <div class="col text-center">Total</div>
        <div class="col text-center">Value</div>
      </div>
    </div>
    <div class="" style="width: 100%">
      <q-virtual-scroll
        class="scroll-area table-content"
        type="table"
        flat
        style="max-height: 25vh"
        :virtual-scroll-item-size="25"
        :virtual-scroll-sticky-size-start="20"
        :virtual-scroll-sticky-size-end="25"
        :items="tableData"
        v-slot="{ item: row, index }"
      >
        <div
          class="row q-px-none q-py-sm text-grey-8 items-center"
          :class="index % 2 === 0 ? 'even-row' : 'odd-row'"
          :key="index"
        >
          <!-- <div class="col-1 text-start q-px-md" style="font-weight: 700;">{{ index }}</div> -->
          <div class="col-2 q-ma-none q-px-none" style="font-weight: 400">
            {{ row.district }}
          </div>
          <div class="col text-center">
            {{ row.helvetas }}
          </div>
          <div class="col text-center">
            {{ row.idh }}
          </div>
          <div class="col text-center">
            {{ row.pdf }}
          </div>
          <div class="col text-center">
            {{ row.rikolto }}
          </div>
          <div class="col text-center">
            {{ row.solidaridadcert }}
          </div>
          <div class="col text-center">
            {{ row.solidaridadpace }}
          </div>
          <div class="col text-center">
            {{ row.trias }}
          </div>
          <div class="col text-center">
            {{ row.viagro }}
          </div>
          <div class="col text-center">
            {{ row.total }}
          </div>
          <div class="col text-center">
            {{ row.value }}
          </div>
        </div>
      </q-virtual-scroll>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useSumStore } from "stores/sumdata/index.js";
import genderTable from "src/Reusable/sumsGenderTable.vue";

const store = useSumStore();

const showTable = computed(() => {
  return store.getSelectedTable;
});

const sumsTab = computed(() => {
  return store.getSumsTab;
});

const atYears = ref(store.getAtYear);

const heavyList = ref(store.getctTable);

const tableData = computed(() => {
  return store.getctTable;
});

watch(tableData, () => {
  heavyList.value = store.getctTable;
});

const selectedTable = computed(() => {
  return store.getSelectedTable;
});

const setAtyears = computed(() => {
  return store.getAtYear;
});

watch(setAtyears, (val) => {
  atYears.value = val;
});

// onMounted(
//   showTable.value = store.getSelectedTable
// )

watch(
  selectedTable,
  (val) => {
    if (val == "ct") {
      showTable.value = "ct";
    } else if (val == "at") {
      showTable.value = "sums";
    } else {
      showTable.value = "sums";
    }
  },
  { deep: true }
);
</script>

<style lang="scss">
.scroll-area::-webkit-scrollbar {
  width: 5px;
  /* width of the entire scrollbar */
  min-height: 200px;
}

.scroll-area::-webkit-scrollbar-track {
  background: rgba(250, 249, 248, 0.1);
  /* color of the tracking area */
}

.scroll-area::-webkit-scrollbar-thumb {
  background-color: rgb(97, 241, 40);
  /* color of the scroll thumb */
  border-radius: 20px;
  /* roundness of the scroll thumb */
  border: 3px solid rgba(255, 166, 0, 0);
  /* creates padding around scroll thumb */
}

.even-row {
  background-color: #f0f2f888; /* change the background color as per your requirement */
}

.odd-row {
  background-color: #ffffff; /* change the background color as per your requirement */
}
</style>
