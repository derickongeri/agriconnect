<template>
  <div class="text-h5 q-mb-md">Infrastructure</div>
  <!-- <div class="text-bold q-my-md q-px-sm q-mt-sm">Select Grantee</div> -->
  <selectGrantee />

  <div class="text-bold q-mb-md q-px-sm q-mt-sm">Infrastructure Type</div>

  <div class="q-pt-sm" style="max-width: 350px">
    <q-list>
      <q-item clickable v-ripple>
        <q-item-section>Learning Center</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>Boreholes</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Onion Storage</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Processing hub</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>Solar drier</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Solar water pump</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Markets</q-item-section>
      </q-item>
    </q-list>
  </div>

  <q-separator class="q-my-lg" style="max-width: 350px"></q-separator>

  <div class="q-mb-md q-px-sm text-bold">Reporting Period</div>

  <div class="q-pt-sm" style="max-width: 350px">
    <q-select
      class="q-px-md"
      v-model="period"
      :options="optionsPeriod"
      label="Select Year"
    />
    <q-list>
      <q-item clickable v-ripple>
        <q-item-section>January - March</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>April - June</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>July - September</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>October - December</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import selectGrantee from "src/Reusable/selectGrantee.vue";

const group = ref(null),
  period = ref(null),
  optionsPeriod = ref(["2020", "2021", "2022", "2023"]);
</script>
