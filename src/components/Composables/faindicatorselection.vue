<template>
  <q-select
    class="bg-white"
    outlined
    dense
    v-model="model"
    :options="options"
    option-value="id"
    option-label="faindicators"
    @filter="filterFn1"
    @update:model-value="getselectedIndicator"
    label="Selected Indicator"
    input-class="input-option"
    options-selected-class="text-green-7"
    popup-content-class="selection-options"
  >
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section>
          <q-item-label caption style="max-width: 350px">{{
            scope.opt.sumsstopgapcode
          }}</q-item-label>
          <q-item-label style="max-width: 450px">{{
            scope.opt.faindicators
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup>
import {
  computed,
  defineComponent,
  onMounted,
  onBeforeMount,
  ref,
  watch,
} from "vue";

import { useSumStore } from "stores/sumdata/index.js";

const store = useSumStore();

const model = ref(null);

// const model = computed(()=>{
//   return store.faIndicators.find((obj) => obj.id == store.userSelection.faCode)
// });

const selectedfaIndicator = computed(() => {
  return store.userSelection.faCode;
});

watch(selectedfaIndicator, (val) => {
  model.value = store.faIndicators.find((obj) => obj.id === val);
});

const options = ref(store.getfaIndicators);

const indicatorList = computed(() => {
  return store.getfaIndicators;
});

const filterFn1 = function (val, update) {
  update(() => {
    if (!val) {
      options.value = indicatorList.value;
    }
  });
};

onBeforeMount(() => {
  store.fetchSumsIndicators();
});

const getselectedIndicator = function (val) {
  store.setSelectedfaIndicatorCode(val.id);
};

onMounted(() => {
  store.fetchfaIndicators().then(() => {
    model.value = store.faIndicators.find(
      (obj) => obj.id == store.userSelection.faCode
    );
  });
});
</script>

<style>
.selection-options::-webkit-scrollbar {
  width: 2px; /* width of the entire scrollbar */
  min-height: 200px;
}

.selection-options::-webkit-scrollbar-track {
  background: rgb(255, 166, 0, 0.1); /* color of the tracking area */
}

.selection-options::-webkit-scrollbar-thumb {
  background-color: rgb(219, 250, 43); /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid rgba(255, 166, 0, 0); /* creates padding around scroll thumb */
}

.input-option {
  color: white;
  font-size: 2em;
  /* height: fit-content; */
  /*max-width: 300px;*/
}
.selected-option {
  color: white;
}

.selection-options {
  height: 50vh;
}

.selection-content {
  font-size: 1em;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
