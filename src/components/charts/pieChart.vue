<template>
  <Pie :data="data" :options="options" />
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
import * as chartConfig from "./chartConfig.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "App",
  components: {
    Pie,
  },
  props: {
    data: {
      type: Object,
      default: {
        labels: ["Adult Male", "Adult Female", "Youth Female", "Youth Male"],
        datasets: [
          {
            backgroundColor: ["#364958", "#3B6064", "#55828B", "#87BBA2"],
            borderColor: "rgba(0, 0, 0, 0)",
            borderRadius: 0,
            borderWidth: 2,
            spacing: 0,
            cutout: "65%",
            radius: "70%",
            data: [40, 20, 80, 10],
          },
        ],
      },
    },
    options: {
      type: Object,
      default: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "left",
            labels: {
              usePointStyle: true,
            },
          },
        },
      },
    },
  },
  data() {
    return {}
  },
};
</script>
