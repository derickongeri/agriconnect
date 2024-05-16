<template>
  <div class="text-h5 q-mb-md">Infrastructure</div>
  <!-- <div class="text-bold q-my-md q-px-sm q-mt-sm">Select Grantee</div> -->
  <selectGrantee />

  <div class="text-bold q-mb-md q-px-sm q-mt-sm">
    Select Infrastructure Category
  </div>

  <div class="q-pt-sm" style="max-width: 350px">
    <q-select
      class="q-mx-sm" filled dense v-model="model" :options="options" label="Outlined"
    >
      <!-- <template v-slot:append>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
        </q-avatar>
      </template> -->
    </q-select>
  </div>

  <div class="text-bold q-mt-lg q-mb-md q-px-sm">
    Layer Attributes
  </div>

  <div class="q-pt-sm" style="max-width: 350px">
    <q-select
      class="q-mx-sm" filled dense v-model="model" :options="options" label="Outlined"
    >
      <!-- <template v-slot:append>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
        </q-avatar>
      </template> -->
    </q-select>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import selectGrantee from "src/Reusable/selectGranteefa.vue";



const group = ref(null),
  period = ref(null),
  optionsPeriod = ref(["2020", "2021", "2022", "2023"]);
</script>
