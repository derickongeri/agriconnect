<template>
  <div class="q-pa-none" style="width: 100%">
    <div class="row q-px-md q-pt-sm text-grey-8" style="font-weight: 700">
      <div class="col-1 ">Code</div>
      <div class="col ">Description</div>
      <div class="col-1 text-center">
        Adult <br />
        Male
      </div>
      <div class="col-1 text-center">
        Adult <br />
        Female
      </div>
      <div class="col-1 text-center">
        Youth <br />
        Male
      </div>
      <div class="col-1 text-center">
        Youth <br />
        Female
      </div>
      <div class="col-1 text-center">Reference</div>
      <div class="col-1 text-center">
        Total (exc. <br />
        Reference)
      </div>
      <div class="col-1 text-center">
        Total (inc. <br />
        Reference)
      </div>
    </div>
  </div>
  <div class="" style="width: 100%">
    <q-virtual-scroll
      class="scroll-area"
      type="table"
      flat
      style="max-height: 70vh"
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      :virtual-scroll-item-size="48"
      :virtual-scroll-sticky-size-start="48"
      :virtual-scroll-sticky-size-end="32"
      :items="heavyList"
      v-slot="{ item: row, index }"
    >
      <div class="row q-px-md q-py-sm text-grey-8 items-center" :class="index % 2 === 0 ? 'even-row' : 'odd-row'" :key="index">
        <div class="col-1 text-start q-px-md" style="font-weight: 700;">{{ index }}</div>

        <div class="col q-ma-none q-px-none" style="font-weight: 400">
          {{ row.name }}
        </div>

        <div class="col-1 text-center">
          {{ row.fat }}
        </div>
        <div class="col-1 text-center">
          {{ row.fat }}
        </div>
        <div class="col-1 text-center">
          {{ row.fat }}
        </div>
        <div class="col-1 text-center">
          {{ row.fat }}
        </div>
        <div class="col-1 text-center">{{ row.fat }}</div>
        <div class="col-1 text-center">
          {{ row.fat }}
        </div>
        <div class="col-1 text-center">
          {{ row.fat }}
        </div>

        <!-- <td v-for="col in columns.slice(2)" :key="index + '-' + col">
          {{ row[col] }}
        </td> -->
      </div>
    </q-virtual-scroll>
  </div>
</template>

<script>
const rows = [
  {
    name: "Persons reached",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Number of policy dialogue meetings conducted between value chain actors and policy makers on policy/regulatory frameworks.",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Number of farmer cooperatives/groups qualified/certified for voluntary sustainability standards.",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Number of farmers trained in at least one CSA technology/practice.",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Number of farmers adopting at least one CSA technology/practice with support from the programme.",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Number of farmers trained on GAP.",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Number of farmers adopting GAP with support from the programme.",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Number of Government extension officers trained in post-harvest storage and handling.",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Number of farmers adopting/using at least one post harvest storage & handling technology/practice with support from the programme.",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "Number of cold storage facilities established/rehabilitated for post harvest storage.",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

const columns = [
  "name",
  "calories",
  "fat",
  "carbs",
  "protein",
  "sodium",
  "calcium",
  "iron",
];

const heavyList = [];

// adding same data multiple times to
// create a huge list
for (let i = 0; i <= 1000; i++) {
  Array.prototype.push.apply(heavyList, rows);
}

export default {
  setup() {
    return {
      heavyList,
      columns,
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75,
      },

      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "#027be3",
        width: "9px",
        opacity: 0.2,
      },
    };
  },
};
</script>

<style lang="scss">
.scroll-area::-webkit-scrollbar {
  width: 5px;
  /* width of the entire scrollbar */
  min-height: 200px;
}

.scroll-area::-webkit-scrollbar-track {
  background: rgba(250, 249, 248, 0.1);
  /* color of the tracking area */
}

.scroll-area::-webkit-scrollbar-thumb {
  background-color: rgb(97, 241, 40);
  /* color of the scroll thumb */
  border-radius: 20px;
  /* roundness of the scroll thumb */
  border: 3px solid rgba(255, 166, 0, 0);
  /* creates padding around scroll thumb */
}

.even-row {
    background-color: #f0f2f888; /* change the background color as per your requirement */
  }

  .odd-row {
    background-color: #ffffff; /* change the background color as per your requirement */
  }
</style>
