<template>
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

    <!-- <q-item tag="label" v-ripple disable>
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
    </q-item> -->
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
</template>

<script setup>
import { ref, computed, watch } from "vue";

const group = ref("resposes")
</script>
