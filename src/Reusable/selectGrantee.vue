<template>
  <q-select outlined v-model="model" :options="options" :dense="dense" :options-dense="denseOpts">
    <template v-slot:prepend>
      <div>
        <img :src="currentLogo" style="width: 56px" />
      </div>
    </template>
  </q-select>
</template>

<script>
import { ref, computed, watch } from "vue";
import logoPDF from "src/assets/PDF.jpg";
import logoHeveltas from "src/assets/HELVETAS.jpg";
import logoRikolto from "src/assets/RIKOLTO.jpg";
import logoIdh from "src/assets/IDHLogo.png";
import logoTrias from "src/assets/TRIAS.jpg";
import logoSolidaridad from "src/assets/SOLIDARIDAD.jpg";
import logoViagro from "src/assets/Vi_Agroforestry.png";

import { useSumStore } from "src/stores/sumdata/index.js";

export default {
  setup() {
    const model = ref("Heveltas"),
      dense = ref(false),
      denseOpts = ref(false);

    const logos = {
      Heveltas: logoHeveltas,
      Viagro: logoViagro,
      Rikolto: logoRikolto,
      Pdf: logoPDF,
      Idh: logoIdh,
      Trias: logoTrias,
      Solidaridad: logoSolidaridad,
      // Add more company logos as needed
    };

    const currentLogo = computed(() => {
      // Use the selected company in the model to get the corresponding logo URL
      return logos[model.value] || logoHeveltas; // Provide a default logo if needed
    });

    return {
      model,
      dense,
      denseOpts,
      currentLogo,
      options: [
        "Helvetas",
        "Viagro",
        "Rikolto",
        "Pdf",
        "Idh",
        "Trias",
        "Solidaridad",
      ],
    };
  },
};
</script>
