<template>
  <div class="row" v-if="showOpnGroup">
    <div v-if="selectedInf !== ''" class="">
      <div>
        <q-btn-toggle
          v-model="model"
          class="my-custom-toggle bg-white"
          no-caps
          dense
          rounded
          size="12px"
          unelevated
          toggle-color="primary"
          color="white"
          text-color="primary"
          :options="[
            { value: 'one', slot: 'one' },
            { value: 'two', slot: 'two' },
          ]"
        >
          <template v-slot:one>
            <div class="row text-bold text-primary items-center no-wrap">
              <q-icon left name="mdi-chevron-left" />
              <div class="text-center q-pr-sm">All Infrastructure</div>
            </div>
          </template>

          <template v-slot:two>
            <div class="row text-bold items-center no-wrap">

              <div class="text-center q-px-sm">{{ currentLayer.name }}</div>
              <q-icon left name="mdi-dots-vertical" />
            </div>
          </template>
        </q-btn-toggle>
      </div>
    </div>
    <div class="col">
      <div class="q-px-md">
        <div v-if="selectedInf === 'all'" class="q-gutter-xs">
          <q-chip
            v-for="(infrastructure, key) in infrastructureList"
            :key="key"
            size="12px"
            clickable
            @click="onClick(infrastructure.value)"
            :color="infrastructure.color"
            text-color="white"
          >
            <q-avatar
              :icon="infrastructure.icon"
              color="white"
              size="md"
              text-color="grey-7"
            />
            {{ infrastructure.name }}
          </q-chip>
        </div>
        <div v-if="selectedInf !== 'all'" class="q-gutter-xs">
          <q-chip
            v-for="(infrastructure, key) in infrastructureListInner"
            :key="key"
            size="12px"
            clickable
            @click="onClick(infrastructure.value)"
            :color="infrastructure.color"
            text-color="white"
          >
            <q-avatar
              :icon="infrastructure.icon"
              color="white"
              size="md"
              text-color="grey-7"
            />
            {{ infrastructure.name }}
          </q-chip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref, watch, onMounted } from "vue";
import { useSumStore } from "stores/sumdata/index.js";
import { useInfrastructureStore } from "src/stores/infrustructue";
import * as chipConfig from "src/components/Composables/Modals/chips.js";

const infrastructureStore = useInfrastructureStore();

const store = useSumStore();

const {
  infGroups,
  // Digital,
  // Equipment,
  // Learning,
  // Market,
  // Nursery,
  // Office,
  // Processing,
  // Water,
  fetchChip,
} = chipConfig;

const model = ref("two");
const currentLayer = computed(() => {
  if (model.value === "two") {
    return infrastructureList.value.find(
      (item) => item.value === selectedInf.value
    );
  } else return null;
});
const selectedInf = computed(()=>{
  return infrastructureStore.getClassfilter
});
const infrastructureList = ref(infGroups);
const infrastructureListInner = computed(() => {
  return fetchChip(selectedInf.value);
});
const showToggleBtn = computed(() => {
  return selectedInf.value === "all";
});

// const showOpnGroup = ref(false);
const onClick = (val) => {
  model.value = "two";
  selectedInf.value = val;
  infrastructureStore.setClassfilter(val);
};

// const infrastructureList = ref(infGroups);

const showOpnGroup = computed(() => {
  return store.getCurrentTab === "infrastructure";
});

watch(currentLayer, (val) => {
  if (!val) {
    infrastructureStore.setClassfilter("");
  }
});
</script>
