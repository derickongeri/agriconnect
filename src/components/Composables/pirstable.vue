<template>
  <div class="q-pa-none" style="width: 100%">
    <div class="row q-px-md q-pt-sm text-grey-8" style="font-weight: 700">
      <div class="col-1">Code</div>
      <div class="col">Indicator</div>
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

    <div>
      <div
        class="row bg-grey-3 items-center q-px-md q-pt-sm text-grey-8"
        style="font-weight: 400"
      >
        <div class="col-1" style="font-weight: 700">2.1</div>
        <div class="col"><span>Persons reached</span></div>
        <div class="col-1 text-center">24 719</div>
        <div class="col-1 text-center">16 423</div>
        <div class="col-1 text-center">14 053</div>
        <div class="col-1 text-center">11 123</div>
        <div class="col-1 text-center">21 392</div>
        <div class="col-1 text-center">66 318</div>
        <div class="col-1 text-center">87 710</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

const columns = [
  {
    name: "desc",
    required: true,
    label: "Indicator",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "adultmale",
    align: "center",
    label: "Adult Male",
    field: "adultmale",
    sortable: true,
  },
  {
    name: "adultfemale",
    label: "Adult Female",
    field: "adultfemale",
    sortable: true,
  },
  {
    name: "youthmale",
    label: "Youth Male",
    field: "youthmale",
    sortable: true,
  },
  {
    name: "youthfemale",
    label: "Youth Female",
    field: "youthfemale",
    sortable: true,
  },
  { name: "Reference", label: "Reference", field: "Reference", sortable: true },
  // {
  //   name: "calcium",
  //   label: "Calcium (%)",
  //   field: "calcium",
  //   sortable: true,
  //   sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  // },
  // {
  //   name: "iron",
  //   label: "Iron (%)",
  //   field: "iron",
  //   sortable: true,
  //   sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  // },
];

const originalRows = [
  {
    id: 1,
    name: `People Reached`,
    adultmale: 159,
    adultfemale: 6.0,
    youthmale: 24,
    youthfemale: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    id: 2,
    name: "Number of policy dialogue meetings conducted between value chain actors and policy makers on policy/regulatory frameworks.",
    adultmale: 237,
    adultfemale: 9.0,
    youthmale: 37,
    youthfemale: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    id: 3,
    name: "Eclair",
    adultmale: 262,
    adultfemale: 16.0,
    youthmale: 23,
    youthfemale: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    id: 4,
    name: "Cupcake",
    adultmale: 305,
    adultfemale: 3.7,
    youthmale: 67,
    youthfemale: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    id: 5,
    name: "Gingerbread",
    adultmale: 356,
    adultfemale: 16.0,
    youthmale: 49,
    youthfemale: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    id: 6,
    name: "Jelly bean",
    adultmale: 375,
    adultfemale: 0.0,
    youthmale: 94,
    youthfemale: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    id: 7,
    name: "Lollipop",
    adultmale: 392,
    adultfemale: 0.2,
    youthmale: 98,
    youthfemale: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    id: 8,
    name: "Honeycomb",
    adultmale: 408,
    adultfemale: 3.2,
    youthmale: 87,
    youthfemale: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    id: 9,
    name: "Donut",
    adultmale: 452,
    adultfemale: 25.0,
    youthmale: 51,
    youthfemale: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    id: 10,
    name: "KitKat",
    adultmale: 518,
    adultfemale: 26.0,
    youthmale: 65,
    youthfemale: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
  {
    id: 11,
    name: "Frozen Yogurt-1",
    adultmale: 159,
    adultfemale: 6.0,
    youthmale: 24,
    youthfemale: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    id: 12,
    name: "Ice cream sandwich-1",
    adultmale: 237,
    adultfemale: 9.0,
    youthmale: 37,
    youthfemale: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    id: 13,
    name: "Eclair-1",
    adultmale: 262,
    adultfemale: 16.0,
    youthmale: 23,
    youthfemale: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    id: 14,
    name: "Cupcake-1",
    adultmale: 305,
    adultfemale: 3.7,
    youthmale: 67,
    youthfemale: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    id: 15,
    name: "Gingerbread-1",
    adultmale: 356,
    adultfemale: 16.0,
    youthmale: 49,
    youthfemale: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    id: 16,
    name: "Jelly bean-1",
    adultmale: 375,
    adultfemale: 0.0,
    youthmale: 94,
    youthfemale: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    id: 17,
    name: "Lollipop-1",
    adultmale: 392,
    adultfemale: 0.2,
    youthmale: 98,
    youthfemale: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    id: 18,
    name: "Honeycomb-1",
    adultmale: 408,
    adultfemale: 3.2,
    youthmale: 87,
    youthfemale: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    id: 19,
    name: "Donut-1",
    adultmale: 452,
    adultfemale: 25.0,
    youthmale: 51,
    youthfemale: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    id: 20,
    name: "KitKat-1",
    adultmale: 518,
    adultfemale: 26.0,
    youthmale: 65,
    youthfemale: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
  {
    id: 21,
    name: "Frozen Yogurt-2",
    adultmale: 159,
    adultfemale: 6.0,
    youthmale: 24,
    youthfemale: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    id: 22,
    name: "Ice cream sandwich-2",
    adultmale: 237,
    adultfemale: 9.0,
    youthmale: 37,
    youthfemale: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    id: 23,
    name: "Eclair-2",
    adultmale: 262,
    adultfemale: 16.0,
    youthmale: 23,
    youthfemale: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    id: 24,
    name: "Cupcake-2",
    adultmale: 305,
    adultfemale: 3.7,
    youthmale: 67,
    youthfemale: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    id: 25,
    name: "Gingerbread-2",
    adultmale: 356,
    adultfemale: 16.0,
    youthmale: 49,
    youthfemale: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    id: 26,
    name: "Jelly bean-2",
    adultmale: 375,
    adultfemale: 0.0,
    youthmale: 94,
    youthfemale: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    id: 27,
    name: "Lollipop-2",
    adultmale: 392,
    adultfemale: 0.2,
    youthmale: 98,
    youthfemale: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    id: 28,
    name: "Honeycomb-2",
    adultmale: 408,
    adultfemale: 3.2,
    youthmale: 87,
    youthfemale: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    id: 29,
    name: "Donut-2",
    adultmale: 452,
    adultfemale: 25.0,
    youthmale: 51,
    youthfemale: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    id: 30,
    name: "KitKat-2",
    adultmale: 518,
    adultfemale: 26.0,
    youthmale: 65,
    youthfemale: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
  {
    id: 31,
    name: "Frozen Yogurt-3",
    adultmale: 159,
    adultfemale: 6.0,
    youthmale: 24,
    youthfemale: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    id: 32,
    name: "Ice cream sandwich-3",
    adultmale: 237,
    adultfemale: 9.0,
    youthmale: 37,
    youthfemale: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    id: 33,
    name: "Eclair-3",
    adultmale: 262,
    adultfemale: 16.0,
    youthmale: 23,
    youthfemale: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    id: 34,
    name: "Cupcake-3",
    adultmale: 305,
    adultfemale: 3.7,
    youthmale: 67,
    youthfemale: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    id: 35,
    name: "Gingerbread-3",
    adultmale: 356,
    adultfemale: 16.0,
    youthmale: 49,
    youthfemale: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    id: 36,
    name: "Jelly bean-3",
    adultmale: 375,
    adultfemale: 0.0,
    youthmale: 94,
    youthfemale: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    id: 37,
    name: "Lollipop-3",
    adultmale: 392,
    adultfemale: 0.2,
    youthmale: 98,
    youthfemale: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    id: 38,
    name: "Honeycomb-3",
    adultmale: 408,
    adultfemale: 3.2,
    youthmale: 87,
    youthfemale: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    id: 39,
    name: "Donut-3",
    adultmale: 452,
    adultfemale: 25.0,
    youthmale: 51,
    youthfemale: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    id: 40,
    name: "KitKat-3",
    adultmale: 518,
    adultfemale: 26.0,
    youthmale: 65,
    youthfemale: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

export default {
  setup() {
    const tableRef = ref();
    const rows = ref([]);
    const filter = ref("");
    const loading = ref(false);
    const pagination = ref({
      sortBy: "desc",
      descending: false,
      page: 1,
      rowsPerPage: 3,
      rowsNumber: 10,
    });

    // emulate ajax call
    // SELECT * FROM ... WHERE...LIMIT...
    function fetchFromServer(startRow, count, filter, sortBy, descending) {
      const data = filter
        ? originalRows.filter((row) => row.name.includes(filter))
        : originalRows.slice();

      // handle sortBy
      if (sortBy) {
        const sortFn =
          sortBy === "desc"
            ? descending
              ? (a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
              : (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            : descending
            ? (a, b) => parseFloat(b[sortBy]) - parseFloat(a[sortBy])
            : (a, b) => parseFloat(a[sortBy]) - parseFloat(b[sortBy]);
        data.sort(sortFn);
      }

      return data.slice(startRow, startRow + count);
    }

    // emulate 'SELECT count(*) FROM ...WHERE...'
    function getRowsNumberCount(filter) {
      if (!filter) {
        return originalRows.length;
      }
      let count = 0;
      originalRows.forEach((treat) => {
        if (treat.name.includes(filter)) {
          ++count;
        }
      });
      return count;
    }

    function onRequest(props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination;
      const filter = props.filter;

      loading.value = true;

      // emulate server
      setTimeout(() => {
        // update rowsCount with appropriate value
        pagination.value.rowsNumber = getRowsNumberCount(filter);

        // get all rows if "All" (0) is selected
        const fetchCount =
          rowsPerPage === 0 ? pagination.value.rowsNumber : rowsPerPage;

        // calculate starting row of data
        const startRow = (page - 1) * rowsPerPage;

        // fetch data from "server"
        const returnedData = fetchFromServer(
          startRow,
          fetchCount,
          filter,
          sortBy,
          descending
        );

        // clear out existing data and add new
        rows.value.splice(0, rows.value.length, ...returnedData);

        // don't forget to update local pagination object
        pagination.value.page = page;
        pagination.value.rowsPerPage = rowsPerPage;
        pagination.value.sortBy = sortBy;
        pagination.value.descending = descending;

        // ...and turn of loading indicator
        loading.value = false;
      }, 1500);
    }

    onMounted(() => {
      // get initial data from server (1st page)
      tableRef.value.requestServerInteraction();
    });

    return {
      tableRef,
      filter,
      loading,
      pagination,
      columns,
      rows,

      onRequest,
    };
  },
};
</script>
