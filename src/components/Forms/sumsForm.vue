<template>
  <div class="text-h5 q-mb-md">Sustainable Unified Monitoring</div>
  <!-- <div class="text-bold q-my-md q-px-sm q-mt-sm">Select Grantee</div> -->
  <selectGrantee/>

  <div class="text-bold q-mt-md q-px-sm q-mt-sm">
    Select Targets and Responses
  </div>

  <div class="q-pt-sm" style="max-width: 350px">
    <q-list>
      <q-item tag="label" v-ripple>
        <q-item-section>Responses</q-item-section>
        <q-item-section avatar>
          <q-radio
            v-model="group"
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="resposes"
            color="primary"
          />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>Targets</q-item-section>
        <q-item-section avatar>
          <q-radio
            v-model="group"
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="targets"
            color="primary"
          />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>Financial Agreement Indicators</q-item-section>
        <q-item-section avatar>
          <q-radio
            v-model="group"
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="financial"
            color="primary"
          />
        </q-item-section>
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
import selectGrantee from 'src/Reusable/selectGrantee.vue'

const group = ref(null),
 period = ref(null),
 optionsPeriod = ref(["2020", "2021", "2022", "2023"]);

</script>
