<template>
  <div v-if="showOpnGroup" class="q-px-md q-py-sm rounded-borders bg-grey-1">
    <q-option-group
      v-model="group"
      :options="options"
      color="primary"
      inline
      dense
    />
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useSumStore } from "stores/sumdata/index.js";

const store = useSumStore();

const showOpnGroup = ref(false);

const group = ref("total"),
  options = ref([
    {
      label: "Adult Male",
      value: "adult_male",
    },
    {
      label: "Adult Female",
      value: "adult_female",
    },
    {
      label: "Youth Male",
      value: "youth_male",
    },
    {
      label: "Youth Female",
      value: "youth_female",
    },
    {
      label: "Total",
      value: "total",
    },
  ]);

watch(group, (val) => {
  store.setSelectedAggregate(val);
});

const showRadioButtons = computed(() => {
  return store.getSumsTab === "responses" && store.getCurrentTab === "pirs";
});

watch(
  showRadioButtons,
  (val) => {
    showOpnGroup.value = val
  },
  { deep: true }
);
</script>
