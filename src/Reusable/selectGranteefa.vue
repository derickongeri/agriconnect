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

  <q-card flat bordered class="q-my-md" style="border-color: #8bcc00">
    <q-card-section>
      <div class="row">
        <div class="col">
          <q-avatar
            class="q-my-xs"
            size="xs"
            text-color="white"
            color="primary"
            icon="mdi-information-variant"
          />
        </div>
        <div class="col-11">
          <div
            class="text-caption q-pa-xs text-grey-9 text-justify"
            style="line-height: 1.2"
          >
            {{ currentText.text }}
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, computed, watch } from "vue";
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

const selectedGrantee = computed(()=>{
  return options.value.find((obj)=> obj.value === store.getUserSelection.faGrantee)
})

const model = ref(selectedGrantee),
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
  // options = ref([
  //   "Helvetas",
  //   "Viagro",
  //   "Rikolto",
  //   "Pdf",
  //   "Idh",
  //   "Trias",
  //   "Solidaridad",
  // ]),
  dense = ref(false),
  denseOpts = ref(false);

const logos = {
  All: logoAgriconnect,
  Helvetas: logoHeveltas,
  Viagro: logoViagro,
  Rikolto: logoRikolto,
  Pdf: logoPDF,
  Idh: logoIdh,
  Trias: logoTrias,
  Solidaridadcert: logoSolidaridad,
  Solidaridadpace: logoSolidaridad,
  // Add more company logos as needed
};

const aboutGrantee = {
  All: {
    text: "AGRI-CONNECT is an EU-funded programme, contributing towards inclusive economic job creation in the agricultural sector, and towards increasing food and nutrition security in Tanzania.",
    link: "",
  },
  Helvetas: {
    text: "The project aims to foster inclusive economic growth by promoting private sector development and job creation in the horticulture sector, within the broader agricultural domain. It spans from 2020 to 2024.",
    link: "",
  },
  Viagro: {
    text: "The project contributes to the inclusive and sustainable development of the coffee value chain in the Southern Highlands of Tanzania. Its aim is to improve the incomes and nutrition status of smallholder farmers, with a special focus on women and youth. The project operates from 2020 to 2024",
    link: "",
  },
  Rikolto: {
    text: "The project focuses on improving the performance of the horticultural sector in Tanzania's Southern Highlands. It aims to inclusion of smallholder farmers , create job opportunities, and enhance nutritional security. The project operates from 2020 to 2024",
    link: "",
  },
  Pdf: {
    text: "The project unlocks the potential of the horticulture value chain in Zanzibar, covering both Unguja and Pemba islands. It aims to increase the value and volume of high-quality products to markets, promoting inclusive economic growth. The project operates from 2020 to 2024.",
    link: "",
  },
  Idh: {
    text: "The project fosters sustainable livelihoods, nutrition and gender equality among tea farming families in southern Tanzania. It focuses on the tea sector and operates from 2020 to 2024",
    link: "",
  },
  Trias: {
    text: "The project aims to sustainably strengthen the horticulture value chain in Zanzibar, with the goal of increasing household incomes and improving food security. It operates from 2020 to 2024",
    link: "",
  },
  Solidaridadcert: {
    text: "The project To Certification And Beyond: Market Access For Sustainable Coffee, Horticulture And Tea From Tanzania focuses on utilizing certification schemes and Voluntary Sustainability Standards (VSS) to enhance market opportunities for Tanzanian branded sustainable tea, coffee, and horticulture products. It operates from 2020 to 2024.",
    link: "",
  },
  Solidaridadpace: {
    text: "The PACE(Passport to Coffee and Exports) aims to promote sustainable and inclusive development in the coffee sector by building a strong export-oriented value chain by 2024. It operates from 2020 to 2024",
    link: "",
  },
  // Add more company logos as needed
};

const currentLogo = computed(() => {
  // Use the selected company in the model to get the corresponding logo URL
  //console.log(model.value.label)
  return logos[model.value.label] || logoAgriconnect; // Provide a default logo if needed
});

const currentText = computed(() => {
  return aboutGrantee[model.value.label] || aboutGrantee["All"];
});

const getselectedGrantee = (val) => {
  //console.log(val.value)
  store.setSelectedfaGrantee(val.value);
};
</script>
