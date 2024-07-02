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
import { ref, computed, watch, onBeforeMount, onMounted } from "vue";
import logoPDF from "src/assets/PDF.jpg";
import logoHeveltas from "src/assets/HELVETAS.jpg";
import logoRikolto from "src/assets/RIKOLTO.jpg";
import logoIdh from "src/assets/IDHLogo.png";
import logoTrias from "src/assets/TRIAS.jpg";
import logoSolidaridad from "src/assets/SOLIDARIDAD.jpg";
import logoViagro from "src/assets/Vi_Agroforestry.png";
import logoAgriconnect from "src/assets/LOGO-AGRI-CONNECT.png";

import { useSumStore } from "src/stores/sumdata/index.js";

const store = useSumStore();

const selectedGrantee = computed(() => {
  return options.value.find(
    (obj) => obj.value === store.getUserSelection.faGrantee
  );
});

const model = ref(null),
  options = ref([
    {
      label: "All Grantees",
      value: "total",
    },
    {
      label: "Helvetas",
      value: "helvetas",
    },
    {
      label: "Vi-Agroforestry",
      value: "viagro",
    },
    {
      label: "Rikolto",
      value: "rikolto",
    },
    {
      label: "PDF",
      value: "pdf",
    },
    {
      label: "IDH",
      value: "idh",
    },
    {
      label: "Trias",
      value: "trias",
    },
    {
      label: "Solidaridad-CERT",
      value: "solidaridadcert",
    },
    {
      label: "Solidaridad-PACE",
      value: "solidaridadpace",
    },
  ]),
  dense = ref(false),
  denseOpts = ref(false);

const logos = {
  total: logoAgriconnect,
  helvetas: logoHeveltas,
  viagro: logoViagro,
  rikolto: logoRikolto,
  pdf: logoPDF,
  idh: logoIdh,
  trias: logoTrias,
  solidaridadcert: logoSolidaridad,
  solidaridadpace: logoSolidaridad,
  // Add more company logos as needed
};

// const model = computed(() => {
//   // if (store.getUserSelection.faGrantee == "total") {
//   //   return options.value[0];
//   // } else {
//   //   return options.value.find(
//   //     (obj) => obj.value === store.getUserSelection.faGrantee
//   //   );
//   // }
//   return options.value.find(
//     (obj) => obj.value === store.getUserSelection.faGrantee
//   );
// });

const currentLogo = computed(() => {
  // Use the selected company in the model to get the corresponding logo URL
  //console.log(model.value.label)
  return logos[model.value.value] || logoHeveltas;
});

const getselectedGrantee = (val) => {
  //console.log(val.value)
  store.setSelectedGrantee(val.value);
};

onBeforeMount(() => {
  model.value = options.value.find(
    (obj) => obj.value === store.getUserSelection.faGrantee
  );
})
</script>
