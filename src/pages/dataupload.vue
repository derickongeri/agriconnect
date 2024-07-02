<template>
  <div class="page-bg" style="position: absolute; width: 100vw; height: 90vh">
    <div
      class="bg-white q-py-xl text-center"
      style="
        width: 50vw;
        border-radius: 20px;
        border: solid 1px lightgrey;
        top: 8vh;
        position: relative;
        margin: auto;
      "
    >
      <div class="row items-center justify-around q-pa-md">
        <div class="col-4 q-pa-md">Select Grantee</div>
        <div class="col-6 q-pa-md">
          <q-select
            outlined
            readonly
            v-model="model"
            :options="options"
            :dense="dense"
            :options-dense="denseOpts"
            @update:model-value="getselectedGrantee"
          />
        </div>
      </div>
      <div class="row items-center justify-around q-pa-md">
        <div class="col-4 q-pa-md">Select Year</div>
        <div class="col-6 q-pa-md">
          <q-select dense outlined v-model="yearmodel" :options="yearoptions" />
        </div>
      </div>
      <div class="row items-center justify-around q-pa-md">
        <div class="col-4 q-pa-md">Select Quarter</div>
        <div class="col-6 q-pa-md">
          <q-select
            dense
            outlined
            v-model="quarterModel"
            :options="atQuarterOptions"
          />
        </div>
      </div>
      <div class="row items-center justify-around q-pa-md">
        <div class="col-4 q-pa-md">Select File:</div>
        <div class="col-6 q-pa-md">
          <q-file
            dense
            outlined
            bottom-slots
            v-model="file"
            accept=".xlsx, .xls*"
            label="MS Excel Workbook"
            max-files="1"
            counter
            @rejected="onRejected"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent />
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="model = null"
                class="cursor-pointer"
              />
            </template>

            <template v-slot:hint> Upload Excel Workbook </template>
          </q-file>
        </div>
      </div>

      <q-btn style="width: 300px" no-caps color="primary" label="Submit" />
    </div>
  </div>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px"></div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, computed, onMounted } from "vue";
import userAuthUser from "src/composables/userAuthdjango.js";

const { user } = userAuthUser();

const $q = useQuasar();

const onRejected = (rejectedEntries) => {
  $q.notify({
    type: "negative",
    message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
  });
};

const model = ref({
    label: "Helvetas",
    value: "Helvetas",
  }),
  file = ref(null),
  options = ref([
    {
      label: "All Grantees",
      value: "total",
    },
    {
      label: "Helvetas",
      value: "Helvetas",
    },
    {
      label: "Vi-Agroforestry",
      value: "Vi-Agroforestry",
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
  dense = ref(true),
  denseOpts = ref(true),
  yearmodel = ref(""),
  quarterModel = ref(""),
  yearoptions = ref(["2024", "2023", "2022", "2021", "2020"]),
  atQuarterOptions = ref([
    `July - September`,
    `October - December`,
    `January - March`,
    `April - June`,
  ]);

const usergrantee = computed(() => {
  return options.value.find((obj) => obj.value === user.grantee);
});

onMounted(() => {
  console.log(user, usergrantee.value);
});
</script>
