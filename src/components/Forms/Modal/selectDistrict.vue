<template>
  <div class="q-px-sm" style="max-width: 20vw;">
    <q-select
      dense
      outlined
      v-model="model"
      use-input
      input-debounce="0"
      :options="options"
      @filter="filterFn"
      label="Outlined"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useInfrastructureStore } from "src/stores/infrustructue";

const store = useInfrastructureStore();

const model = ref(null),
  options = ref([]);

const districtsList = computed(() => {
  return store.getDistricts;
});

const filterFn = (val, update) => {
  if (val === "") {
    update(() => {
      options.value = districtsList.value;

      // here you have access to "ref" which
      // is the Vue reference of the QSelect
    });
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    options.value = districtsList.value.filter(
      (v) => v.toLowerCase().indexOf(needle) > -1
    );
  });
};

watch(districtsList, (val) => {
  options.value = val;
});

watch(model, (val) => {
  store.setSelectedDistrict(val)
})

const filterState = computed(() => {
  return store.getInfFilters.filterStatus
})

watch(filterState, (val) => {
  console.log(val)
  if (!val) {
    model.value = null
  }
})

onMounted(() => {
  options.value = districtsList.value;
});
</script>
