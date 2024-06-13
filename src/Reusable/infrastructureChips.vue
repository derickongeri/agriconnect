<template>
  <div class="row items-start" v-if="showOpnGroup">
    <div v-if="selectedInf !== 'all' && !selectedInf_class4">
      <q-btn-dropdown
        dense
        class="bg-white"
        split
        color="white"
        text-color="primary"
        outline
        unelevated
        rounded
        no-caps
        icon="mdi-chevron-left"
        icon-right="mdi-map"
        :label="currentLayer.name"
        @click="onClick('all')"
      >
        <q-list>
          <q-item clickable v-close-popup @click="onClick('all')">
            <q-item-section>
              <q-item-label>All Infrustructue</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            v-for="(infrastructure, key) in infrastructureList.filter(
              (item) => item !== currentLayer
            )"
            :key="key"
            clickable
            v-close-popup
            @click="onClick(infrastructure.value)"
          >
            <q-item-section>
              <q-item-label>{{ infrastructure.name }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon :name="infrastructure.icon" color="primary" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
    <div v-if="selectedInf !== 'all' && selectedInf_class4">
      <q-btn
        unelevated
        no-caps
        outline
        rounded
        dense
        align="between"
        class="bg-grey-1 q-px-md"
        color="grey-1"
        text-color="primary"
        :label="currentLayer.name"
        icon="mdi-chevron-left"
        @click="onClick(currentLayer.value)"
      />
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
        <div
          v-else-if="selectedInf !== 'all' && !selectedInf_class4"
          class="q-gutter-xs"
        >
          <q-chip
            v-for="(infrastructure, key) in infrastructureListInner"
            :key="key"
            size="12px"
            clickable
            @click="onClickInner(infrastructure.value)"
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
        <div v-else class="q-gutter-xs">
          <q-chip
            size="12px"
            clickable
            @click="onClickInner(class4infrastructure.value)"
            :color="class4infrastructure.color"
            text-color="white"
          >
            <q-avatar
              :icon="class4infrastructure.icon"
              color="white"
              size="md"
              text-color="grey-7"
            />
            {{ class4infrastructure.name }}
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

const { infGroups, fetchChip } = chipConfig;

const model = ref("two");
const selectedInf = ref("all");
const selectedInf_class4 = ref(null);
const infrastructureList = ref(infGroups);

const class4infrastructure = computed(() => {
  return infrastructureListInner.value.find(
    (item) => item.value === selectedInf_class4.value
  );
});

const currentLayer = computed(() => {
  return infrastructureList.value.find(
    (item) => item.value === selectedInf.value
  );
});

// const selectedInf = computed(() => {
//   return infrastructureStore.getClassfilter.class3filter;
// });

const infrastructureListInner = computed(() => {
  return fetchChip(selectedInf.value);
});

const showToggleBtn = computed(() => {
  return selectedInf.value === "all";
});

// const showOpnGroup = ref(false);
const onClick = (val) => {
  //model.value = "two";
  selectedInf.value = val;
  selectedInf_class4.value = null;
  infrastructureStore.setClass3filter(val);
  infrastructureStore.setClass4filter(null);
};

const onClickInner = (val) => {
  //model.value = "two";
  selectedInf_class4.value = val;
  infrastructureStore.setClass4filter(val);
};

// const infrastructureList = ref(infGroups);
const showOpnGroup = computed(() => {
  return store.getCurrentTab === "infrastructure";
});

watch(currentLayer, (val) => {
  if (!val) {
    infrastructureStore.setClass3filter("all");
  }
});
</script>
