<template>
  <div class="text-subtitle2 q-mb-md">INFRASTRUCTURE</div>
  <!-- <div class="text-bold q-my-md q-px-sm q-mt-sm">Select Grantee</div> -->
  <selectGrantee />

  <div class="filter-form q-pa-sm q-mt-lg" style="border-radius: 5px">
    <div class="row items-center">
      <!-- <q-item class="full-width">
        <q-item-label>Icon as avatar</q-item-label>
        <q-item-section avatar>
          <q-icon color="primary" name="bluetooth" />
        </q-item-section>
      </q-item> -->

      <div class="text-weight-medium q-my-sm">Filter Attributes</div>
      <q-space />
      <div>
        <q-icon color="grey-8" size="sm" name="mdi-tune-vertical" />
      </div>
    </div>

    <q-separator class="q-mb-sm" />

    <q-scroll-area
      class="filter-form"
      :thumb-style="thumbStyle"
      style="height: 45vh"
    >
      <div class="column">
        <div class="filter-text text-label q-mx-sm q-py-sm" style="">
          District
        </div>
        <selectDistrict />

        <div v-if="showValueChain">
          <q-separator class="q-my-md" inset />
          <div class="filter-text text-label q-mx-sm q-pb-sm" style="">
            Value Chain
          </div>
          <selectValueChain />
        </div>

        <q-separator class="q-my-md" inset />

        <!-- <div class="filter-text text-label q-mx-sm" style="">Cost in TZS</div> -->
        <costFilter />

        <q-separator class="q-my-md" inset />

        <div class="row justify-end q-gutter-x-xs q-px-sm">
          <div v-if="showClearBtn" class="col">
            <q-btn
              unelevated
              outline
              dense
              no-caps
              @click="clearFilters"
              label="Clear"
              class="full-width q-mb-md q-mx-sm q-px-lg"
              color="primary"
            >
              <template v-slot:loading>
                <q-spinner-facebook />
              </template>
            </q-btn>
          </div>
          <div class="col-6">
            <q-btn
              unelevated
              dense
              no-caps
              @click="submitForm"
              label="Apply"
              class="full-width q-mb-md q-mx-sm q-px-lg"
              color="primary"
            >
              <template v-slot:loading>
                <q-spinner-facebook />
              </template>
            </q-btn>
          </div>
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import selectGrantee from "src/Reusable/selectGranteefa.vue";
import selectDistrict from "src/components/Forms/Modal/selectDistrict.vue";
import costFilter from "src/components/Forms/Modal/costFilter.vue";
import selectValueChain from "src/components/Forms/Modal/selectValueChain.vue";
import { useInfrastructureStore } from "src/stores/infrustructue";
import { useSumStore } from "src/stores/sumdata";

const store = useInfrastructureStore();
const sumsStore = useSumStore();

const grantee = computed(() => {
  return sumsStore.getUserSelection.faGrantee;
});

const submitted = ref(false),
  showClearBtn = ref(false);

// const filteredFeatures = computed(() => {
//   if (submitted.value) {
//     return `Clear (${store.getFilteredFeatures})`;
//   } else {
//     return `Clear`;
//   }
// });

const showValueChain = computed(() => {
  if (grantee.value !== "total") {
    store.clearAllFilters();
    return false
  } else {
    return true;
  }
});

const submitForm = () => {
  if (submitted.value) {
    store.clearAllFilters();
  }
  submitted.value = true;
  store.setFilterStatus();
  showClearBtn.value = true;
};

const clearFilters = () => {
  submitted.value = false;
  store.clearAllFilters();
};

const filterState = computed(() => {
  return store.getInfFilters.filterStatus;
});

watch(filterState, (val) => {
  if (!val) {
    showClearBtn.value = false;
  }
});

// watch(grantee, (val) => {
//   if (val !== "total") {
//     showValueChain.value = false;
//     store.clearAllFilters();
//   } else {
//     showValueChain.value = true;
//   }
// });

const thumbStyle = ref({
  right: "-2px",
  borderRadius: "5px",
  backgroundColor: "#8BCC00",
  width: "5px",
  opacity: "0.75",
});
</script>

<style>
.filter-text {
  font-weight: 500;
}
.filter-form {
  border: 0px solid rgb(212, 212, 212);
}
</style>
