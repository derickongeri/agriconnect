<template>
  <div class="filter-text text-label q-mx-sm" >
    Cost in
    <span
      ><q-btn-toggle
        dense
        class="q-px-xs"
        size="sm"
        unelevated
        v-model="model"
        toggle-color="primary"
        :options="[
          { label: 'TZS', value: 'Tzs' },
          { label: 'Eur', value: 'Eur' },
        ]"
    /></span>
  </div>
  <div v-if="model == 'Tzs'" class="q-pa-md q-my-md">
    <q-range
      dense
      class="q-my-md q-px-sm"
      v-model="minmaxTZS"
      :min="0"
      :max="1292034574"
      :step="1000000"
      label
      color=""
    />
    <div class="row">
      <div class="col">
        <q-input dense outlined v-model="minmaxTZS.min" label="min" />
      </div>
      <div class="column justify-center q-px-md">-</div>
      <div class="col">
        <q-input dense outlined v-model="minmaxTZS.max" label="max" />
      </div>
    </div>
  </div>
  <div v-else class="q-pa-md q-my-md">
    <q-range
      dense
      class="q-my-md q-px-sm"
      v-model="minmaxEUR"
      :min="0"
      :max="502349"
      label
      color=""
    />
    <div class="row">
      <div class="col">
        <q-input dense outlined v-model="minmaxEUR.min" label="min" />
      </div>
      <div class="column justify-center q-px-md">-</div>
      <div class="col">
        <q-input dense outlined v-model="minmaxEUR.max" label="max" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useInfrastructureStore } from "src/stores/infrustructue";

const store = useInfrastructureStore()

const minmaxTZS = ref({
    min: 0,
    max: 1291034574,
  }),
  minmaxEUR = ref({
    min: 0,
    max: 502349,
  }),
  model = ref("Tzs");

const setCost = computed(() => {
  return [minmaxEUR.value, minmaxTZS.value]
})

watch(setCost, () => {
  if (model.value == 'Tzs') {
    store.setSelectedcostEUR(null)
    store.setSelectedcostTZ(minmaxTZS.value.min, minmaxTZS.value.max)
  } else {
    store.setSelectedcostEUR(minmaxEUR.value.min, minmaxEUR.value.max)
    store.setSelectedcostTZ(null)
  }
})

</script>
