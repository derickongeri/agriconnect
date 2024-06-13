<template>
  <q-select
    outlined
    v-model="model"
    :options="options"
    :dense="dense"
    :options-dense="denseOpts"
    @update:model-value="getselectedGrantee"
  >
    <template v-slot:prepend>
      <div>
        <img :src="currentLogo" style="width: 56px" />
      </div>
    </template>
  </q-select>
</template>

<script setup>
import { ref, computed, watch, onBeforeMount } from "vue";
import logoPDF from "src/assets/PDF.jpg";
import logoHeveltas from "src/assets/HELVETAS.jpg";
import logoRikolto from "src/assets/RIKOLTO.jpg";
import logoIdh from "src/assets/IDHLogo.png";
import logoTrias from "src/assets/TRIAS.jpg";
import logoSolidaridad from "src/assets/SOLIDARIDAD.jpg";
import logoViagro from "src/assets/Vi_Agroforestry.png";

import { useSumStore } from "src/stores/sumdata/index.js";

const store = useSumStore();

// const model = ref(selectedGrantee.value),
const options = ref([
    {
      label: "Heveltas",
      value: "helvetas",
    },
    {
      label: "Viagro",
      value: "viagro",
    },
    {
      label: "Rikolto",
      value: "rikolto",
    },
    {
      label: "Pdf",
      value: "pdf",
    },
    {
      label: "Idh",
      value: "idh",
    },
    {
      label: "Trias",
      value: "trias",
    },
    {
      label: "SolidaridadCERT",
      value: "solidaridadcert",
    },
    {
      label: "SolidaridadPACE",
      value: "solidaridadpace",
    },
  ]),
  dense = ref(false),
  denseOpts = ref(false);

const logos = {
  Heveltas: logoHeveltas,
  Viagro: logoViagro,
  Rikolto: logoRikolto,
  Pdf: logoPDF,
  Idh: logoIdh,
  Trias: logoTrias,
  Solidaridadcert: logoSolidaridad,
  Solidaridadpace: logoSolidaridad,
  // Add more company logos as needed
};

const model = computed(() => {
  if (store.getUserSelection.faGrantee == 'total') {
    return options.value[0]
  } else {
    return options.value.find(
      (obj) => obj.value === store.getUserSelection.faGrantee
    );
  }
});

const currentLogo = computed(() => {
  // Use the selected company in the model to get the corresponding logo URL
  //console.log(model.value.label)
  return logos[model.value.label] || logoHeveltas;
});

const getselectedGrantee = (val) => {
  //console.log(val.value)
  store.setSelectedGrantee(val.value);
};

// onBeforeMount(() => {

// })
</script>
