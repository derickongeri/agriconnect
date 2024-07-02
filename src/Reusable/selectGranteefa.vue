<template>
  <q-select
    outlined
    bottom-slots
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

    <template v-slot:after>
      <q-btn
        round
        outline
        dense
        size="sm"
        icon="mdi-information-variant"
        color="primary"
        @click="toolbar = true"
      />
    </template>

    <template v-slot:hint
      ><div class="row items-center q-gutter-x-sm">
        <div class="text-weight-medium">Value Chain:</div>
        <div>
          <q-avatar
            size="24px"
            color="white"
            text-color="primary"
            icon="mdi-fruit-cherries"
          />
          {{ currentText.valueChain }}
        </div>
      </div></template
    >
  </q-select>

  <q-dialog v-model="toolbar">
    <q-card>
      <q-toolbar>
        <div>
          <img :src="currentLogo" style="width: 56px" />
        </div>

        <q-toolbar-title
          ><span class="text-weight-bold">{{selectedGrantee.label}}</span>
          </q-toolbar-title
        >

        <q-btn flat size="12px" round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section>
        {{ currentText.text }}
      </q-card-section>
    </q-card>
  </q-dialog>

  <!-- <div class="row items-center q-px-sm">
    <div class="text-weight-medium">Value Chain:</div>
    <div>
      <q-avatar color="white" text-color="primary" icon="mdi-fruit-cherries" />
      {{ currentText.valueChain }}
    </div>
  </div> -->

  <!-- <q-card flat class="q-my-md" style="border-color: #8bcc00">
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
          <q-chip square icon="event">Add to calendar</q-chip>
            {{ currentText.valueChain }}
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card> -->
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

const selectedGrantee = computed(() => {
  return options.value.find(
    (obj) => obj.value === store.getUserSelection.faGrantee
  );
});

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
      label: "Vi Agroforestry",
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
  toolbar = ref(false),
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

const aboutGrantee = {
  All: {
    text: "Tea Coffee Horticulture",
    link: "",
    valueChain: "Tea Coffee Horticulture",
  },
  Helvetas: {
    text: `The project aims to foster inclusive economic growth by promoting private sector development and job creation in the horticulture sector, within the broader agricultural domain. It spans from 2020 to 2024.`,
    link: "",
    valueChain: "Horticulture",
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
  return logos[model.value.value] || logoAgriconnect; // Provide a default logo if needed
});

const currentText = computed(() => {
  return aboutGrantee[model.value.label] || aboutGrantee["All"];
});

const getselectedGrantee = (val) => {
  //console.log(val.value)
  store.setSelectedfaGrantee(val.value);
};
</script>
