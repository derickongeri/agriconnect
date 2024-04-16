<template>
  <q-list>
    <q-item tag="label" v-ripple>
      <q-item-section>Financial Agreement Indicators</q-item-section>
      <q-item-section avatar>
        <q-radio
          v-model="group"
          checked-icon="task_alt"
          unchecked-icon="panorama_fish_eye"
          val="faindicators"
          color="primary"
        />
      </q-item-section>
    </q-item>
    <q-item tag="label" v-ripple>
      <q-item-section>Responses</q-item-section>
      <q-item-section avatar>
        <q-radio
          v-model="group"
          checked-icon="task_alt"
          unchecked-icon="panorama_fish_eye"
          val="responses"
          color="primary"
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useSumStore } from "stores/sumdata/index.js";

const store = useSumStore();

const group = ref(store.sumsTab)

const selectedSumsTab = computed(()=>{
  return group.value
})

watch(selectedSumsTab, (val)=>{
  store.setSumsTab(val)
})


</script>
