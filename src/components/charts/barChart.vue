<template>
  <div
    class="q-my-none q-mt-none bg-white"
    style="
      width: 100%;
      height: 90%;
      border: 0px solid rgb(160, 160, 160);
      position: relative;
    "
  >
    <Bar :data="data" :options="baroptions" :width="width" :height="height" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
import * as chartConfig from "./chartConfig.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Bar,
  },
  props: {
    data: {
      type: Object,
      default: {
        labels: [
          "Helvetas",
          "Viagro",
          "Rikolto",
          "Pdf",
          "Idh",
          "Trias",
          "SolidaridadCERT",
          "SolidaridadPACE",
        ],
        datasets: [
          {
            backgroundColor: ["#364958", "#3B6064", "#55828B", "#87BBA2"],
            borderColor: "rgba(0, 0, 0, 0)",
            borderRadius: 5,
            borderWidth: 2,
            spacing: 0,
            cutout: "50%",
            radius: "65%",
            data: [80, 60, 50, 45, 40, 25, 20, 10],
          },
        ],
      },
    },
    baroptions: {
      type: Object,
      default: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y",
        elements: {
          bar: {
            borderWidth: 0,
            inflateAmount: 0,
            borderRadius: 2,
            borderSkipped: false,
          },
        },
        plugins: {
          legend: {
            display: false,
            position: "right",
          },
          title: {
            display: true,
            text: "Chart.js Horizontal Bar Chart",
            align: "start",
          },
        },
        scales: {
          x: {
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
          y: {
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
      },
    },
    width: {
      type: Number,
      default: 350,
    },
    height: {
      type: Number,
      default: 250,
    },
  },
  data() {
    return {}
  },
};
</script>
