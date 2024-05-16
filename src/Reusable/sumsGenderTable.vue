<template>
  <div>
    <div class="q-pa-none" style="width: 100%">
      <div class="row q-px-md q-pt-sm text-grey-8" style="font-weight: 700">
        <div class="col-4">District</div>
        <div class="col text-center">Adult Male<br />Male</div>
        <div class="col text-center">Adult Female<br />Female</div>
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
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
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
</template>

<script setup>
import { computed, watch } from "vue";
import { useSumStore } from "stores/sumdata/index.js";
const store = useSumStore();

const tableData = computed(() => {
  return store.getctTable;
});

// watch(tableData, () => {
//   heavyList.value = store.getctTable;
// });

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
