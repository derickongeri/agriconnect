<template>
  <q-item-label class="q-px-sm" caption=""
    >*You can select multiple</q-item-label
  >
  <div class="row q-pa-sm">
    <div class="">
      <q-checkbox
        v-model="selection"
        val="Coffee"
        label="Coffee"
        color="primary"
        checked-icon="mdi-checkbox-marked-circle"
        unchecked-icon="mdi-circle-outline"
      />
    </div>
    <div class="">
      <q-checkbox
        v-model="selection"
        val="Tea"
        label="Tea"
        color="primary"
        checked-icon="mdi-checkbox-marked-circle"
        unchecked-icon="mdi-circle-outline"
      />
    </div>
    <div class="">
      <q-checkbox
        v-model="selection"
        val="Horticulture"
        label="Horticulture"
        color="primary"
        checked-icon="mdi-checkbox-marked-circle"
        unchecked-icon="mdi-circle-outline"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useInfrastructureStore } from "src/stores/infrustructue";

const store = useInfrastructureStore()

const selection = ref([]);

watch(selection, (val) => {
  store.setValueChain(val)
})

const filterState = computed(() => {
  store.getInfFilters.filterStatus
})

watch(filterState, (val) => {
  if (!val) {
    selection.value = []
    store.setValueChain(selection.value)
  }
})
</script>
