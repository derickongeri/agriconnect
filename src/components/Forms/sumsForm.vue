<template>
  <div class="text-subtitle2 q-mb-md">SUSTAINABLE UNIFIED MONITORING</div>
  <!-- <div class="text-bold q-my-md q-px-sm q-mt-sm">Select Grantee</div> -->
  <selectGrantee/>

  <div class="text-weight-medium q-mt-md q-px-sm q-mt-sm">
    Select Targets and Responses
  </div>

  <div class="q-pt-sm" style="max-width: 350px">
    <responseSelection/>
  </div>

  <q-separator class="q-my-lg" style="max-width: 350px"></q-separator>

  <div class="q-mb-md q-px-sm text-weight-medium">Periodic Summaries</div>

  <div class="q-pb-md" style="max-width: 350px">
    <selectDataperiod/>
  </div>

  <!-- <div class="q-mb-md q-px-sm text-weight-medium">Reporting Period</div> -->

  <div class="q-pt-sm" style="max-width: 350px">
    <selectPeriod/>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import selectGrantee from 'src/Reusable/selectGrantee.vue'
import responseSelection from 'src/Reusable/selectResponse.vue'
import selectPeriod from 'src/Reusable/selectPeriod.vue'
import selectDataperiod from 'src/Reusable/selectDataPeriod.vue'

const group = ref(null),
 period = ref(null),
 optionsPeriod = ref(["2020", "2021", "2022", "2023"]);

</script>
